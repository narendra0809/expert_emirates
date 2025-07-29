<?php

// namespace App\Http\Controllers\Api;

// use App\Http\Controllers\Controller;
// use App\Models\PaymentGateway;
// use Illuminate\Http\Request;

// class PaymentGatewayController extends Controller
// {
//     public function index()
//     {
//         $gateways = PaymentGateway::all();
//         return response()->json($gateways);
//     }

//     public function store(Request $request)
//     {
//         $request->validate([
//             'name' => 'required|string|max:255',
//             'wallet_address' => 'required|string',
//             'qr_code' => 'nullable|string',
//         ]);

//         $gateway = PaymentGateway::create($request->only(['name', 'wallet_address', 'qr_code']));

//         return response()->json($gateway, 201);
//     }

//     public function show(PaymentGateway $paymentGateway)
//     {
//         return response()->json($paymentGateway);
//     }

//     public function update(Request $request, PaymentGateway $paymentGateway)
//     {
//         $request->validate([
//             'name' => 'sometimes|string|max:255',
//             'wallet_address' => 'sometimes|string',
//             'qr_code' => 'nullable|string',
//         ]);

//         $paymentGateway->update($request->only(['name', 'wallet_address', 'qr_code']));

//         return response()->json($paymentGateway);
//     }

//     public function destroy(PaymentGateway $paymentGateway)
//     {
//         $paymentGateway->delete();
//         return response()->json(['message' => 'Payment gateway deleted']);
//     }
// }


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PaymentGateway;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class PaymentGatewayController extends Controller
{
    public function index()
    {
        $gateways = PaymentGateway::all();
        return response()->json($gateways);
    }

   public function store(Request $request)
   {
    try {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'wallet_address' => 'required|string',
            'qr_code' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Initialize QR code URL variable
        $qrCodeUrl = null;

        // Handle QR code upload
        if ($request->hasFile('qr_code')) {
            $file = $request->file('qr_code');

            // Validate file extension
            $extension = $file->getClientOriginalExtension();
            if (!in_array(strtolower($extension), ['jpeg', 'png', 'jpg', 'gif', 'svg'])) {
                throw new \Exception('Invalid file type. Only jpeg, png, jpg, gif, svg are allowed.');
            }

            // Generate unique filename
            $fileName = 'qr_codes/' . Str::uuid() . '.' . $extension;

            // Store file
            $stored = Storage::disk('public')->put($fileName, file_get_contents($file));

            if (!$stored) {
                throw new \Exception('Failed to store QR code image.');
            }

            // Generate full public URL (this will be stored as string in DB)
            $qrCodeUrl = Storage::disk('public')->url($fileName);

            // The URL stored in DB will be a string like:
            // "http://yourdomain.com/storage/qr_codes/uuid123.png"
        }

        // Create payment gateway record
        $gateway = PaymentGateway::create([
            'name' => $validatedData['name'],
            'wallet_address' => $validatedData['wallet_address'],
            'qr_code' => $qrCodeUrl, // This stores the URL string in the database
        ]);

        return response()->json([
            'success' => true,
            'data' => $gateway,
            'message' => 'Payment gateway created successfully'
        ], 201);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Validation error',
            'errors' => $e->errors()
        ], 422);

    } catch (\Exception $e) {
        // If we stored the file but failed to create DB record, clean up
        if (isset($fileName)) {
            Storage::disk('public')->delete($fileName);
        }
        return response()->json([
            'success' => false,
            'message' => 'Failed to create payment gateway',
            'error' => $e->getMessage()
        ], 500);
    }
   }

    public function show(PaymentGateway $paymentGateway)
    {
        return response()->json($paymentGateway);
    }




public function update(Request $request, PaymentGateway $paymentGateway)
{
    Log::info('Starting payment gateway update', [
        'gateway_id' => $paymentGateway->id,
        'request_method' => $request->method(),
        'headers' => $request->headers->all()
    ]);

    try {
        // Handle multipart/form-data for PATCH requests
        if ($request->isMethod('patch') && str_contains($request->header('Content-Type'), 'multipart/form-data')) {
            Log::debug('Processing PATCH with multipart/form-data');

            $parsed = $this->parseMultipartData($request->getContent());
            Log::debug('Parsed multipart data', ['data_fields' => array_keys($parsed['data']), 'files' => array_keys($parsed['files'])]);

            $request->merge($parsed['data']);

            foreach ($parsed['files'] as $key => $file) {
                $request->files->set($key, $file);
                Log::debug('Added file to request', ['field' => $key, 'filename' => $file->getClientOriginalName()]);
            }
        }

        Log::debug('Request data before validation', $request->all());

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
            'wallet_address' => 'sometimes|string',
            'qr_code' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            Log::warning('Validation failed', ['errors' => $validator->errors()->toArray()]);
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->only(['name', 'wallet_address']);
        Log::debug('Data to be updated', $data);

        // Handle QR code update
        if ($request->hasFile('qr_code')) {
            Log::info('Processing QR code upload');
            $file = $request->file('qr_code');

            Log::debug('File details', [
                'original_name' => $file->getClientOriginalName(),
                'extension' => $file->getClientOriginalExtension(),
                'size' => $file->getSize(),
                'mime_type' => $file->getMimeType()
            ]);

            // Get original extension
            $extension = strtolower($file->getClientOriginalExtension());

            // Generate filename with UUID and correct extension
            $fileName = Str::uuid() . '.' . $extension;
            $storagePath = 'qr_codes/' . $fileName;

            Log::debug('Attempting to store file', [
                'temp_path' => $file->getRealPath(),
                'storage_path' => $storagePath,
                'full_disk_path' => Storage::disk('public')->path($storagePath)
            ]);

            // Store file using streams
            try {
                $stream = fopen($file->getRealPath(), 'r+');
                $stored = Storage::disk('public')->put($storagePath, $stream);
                fclose($stream);

                if (!$stored) {
                    Log::error('Failed to store QR code file');
                    throw new \Exception('Failed to store QR code image');
                }

                $fileUrl = Storage::disk('public')->url($storagePath);
                $data['qr_code'] = $fileUrl;

                Log::info('File stored successfully', [
                    'storage_path' => $storagePath,
                    'public_url' => $fileUrl,
                    'file_exists' => Storage::disk('public')->exists($storagePath)
                ]);
            } catch (\Exception $e) {
                Log::error('File storage failed', [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
                throw $e;
            }

            // Delete old QR code if exists
            if ($paymentGateway->qr_code) {
                try {
                    $oldPath = parse_url($paymentGateway->qr_code, PHP_URL_PATH);
                    $oldPath = str_replace('/storage/', '', $oldPath);

                    Log::debug('Attempting to delete old QR code', [
                        'old_url' => $paymentGateway->qr_code,
                        'old_storage_path' => $oldPath,
                        'file_exists' => Storage::disk('public')->exists($oldPath)
                    ]);

                    if (Storage::disk('public')->exists($oldPath)) {
                        $deleted = Storage::disk('public')->delete($oldPath);
                        Log::info('Old QR code deletion', [
                            'success' => $deleted,
                            'path' => $oldPath
                        ]);
                    }
                } catch (\Exception $e) {
                    Log::error("Failed to delete old QR code", [
                        'error' => $e->getMessage(),
                        'trace' => $e->getTraceAsString()
                    ]);
                }
            }
        }

        // Update the record
        Log::debug('Attempting to update database record', $data);
        $updated = $paymentGateway->update($data);

        if (!$updated) {
            Log::error('Database update failed', ['gateway_id' => $paymentGateway->id]);

            // Clean up if we stored a new file but failed to update
            if (isset($storagePath) && Storage::disk('public')->exists($storagePath)) {
                Log::debug('Cleaning up orphaned file due to failed update', ['path' => $storagePath]);
                Storage::disk('public')->delete($storagePath);
            }

            throw new \Exception('Failed to update payment gateway record');
        }

        Log::info('Payment gateway updated successfully', [
            'gateway_id' => $paymentGateway->id,
            'updated_fields' => array_keys($data)
        ]);

        return response()->json([
            'success' => true,
            'data' => $paymentGateway->fresh(),
            'message' => 'Payment gateway updated successfully'
        ]);

    } catch (\Exception $e) {
        Log::error('Payment gateway update failed', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
            'gateway_id' => $paymentGateway->id ?? null
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Failed to update payment gateway',
            'error' => $e->getMessage()
        ], 500);
    }
}

protected function parseMultipartData($content)
{
    Log::debug('Parsing multipart data', ['content_length' => strlen($content)]);

    $data = [];
    $files = [];
    $boundary = substr($content, 0, strpos($content, "\r\n"));

    if (empty($boundary)) {
        Log::warning('Empty boundary in multipart data');
        return ['data' => $data, 'files' => $files];
    }

    $parts = array_slice(explode($boundary, $content), 1, -1);
    Log::debug('Multipart parts found', ['count' => count($parts)]);

    foreach ($parts as $i => $part) {
        if (empty($part)) continue;

        $part = ltrim($part, "\r\n");
        list($headers, $body) = explode("\r\n\r\n", $part, 2);

        $headers = $this->parseHeaders($headers);
        preg_match('/name="([^"]+)"/', $headers['content-disposition'], $matches);
        $fieldName = $matches[1] ?? null;

        if ($fieldName) {
            if (isset($headers['content-type'])) {
                Log::debug('Processing file part', [
                    'part_index' => $i,
                    'field_name' => $fieldName,
                    'content_type' => $headers['content-type'],
                    'filename' => $headers['filename'] ?? null
                ]);

                $tempPath = tempnam(sys_get_temp_dir(), 'laravel-upload');
                file_put_contents($tempPath, $body);

                $files[$fieldName] = new UploadedFile(
                    $tempPath,
                    $headers['filename'] ?? basename($tempPath),
                    $headers['content-type'],
                    null,
                    true
                );
            } else {
                Log::debug('Processing data part', [
                    'part_index' => $i,
                    'field_name' => $fieldName,
                    'value_length' => strlen(trim($body))
                ]);
                $data[$fieldName] = trim($body);
            }
        }
    }

    Log::debug('Multipart parsing completed', [
        'data_fields' => array_keys($data),
        'file_fields' => array_keys($files)
    ]);

    return ['data' => $data, 'files' => $files];
}

protected function parseHeaders($headers)
{
    $parsed = [];
    foreach (explode("\r\n", $headers) as $header) {
        if (strpos($header, ':') !== false) {
            list($name, $value) = explode(':', $header, 2);
            $parsed[strtolower(trim($name))] = trim($value);
        }
    }
    return $parsed;
}


   public function destroy(PaymentGateway $paymentGateway)
{
    try {
        DB::beginTransaction();

        // Delete associated QR code if exists
        if ($paymentGateway->qr_code) {
            try {
                $filePath = str_replace(Storage::disk('public')->url(''), '', $paymentGateway->qr_code);

                // Verify file exists before attempting deletion
                if (Storage::disk('public')->exists($filePath)) {
                    $deleted = Storage::disk('public')->delete($filePath);

                    if (!$deleted) {
                        throw new \Exception('Failed to delete QR code file');
                    }
                }
            } catch (\Exception $e) {
                DB::rollBack();
                \Log::error("QR code deletion failed for payment gateway {$paymentGateway->id}: " . $e->getMessage());
                return response()->json([
                    'success' => false,
                    'message' => 'Payment gateway deletion failed - could not remove QR code',
                    'error' => $e->getMessage()
                ], 500);
            }
        }

        // Delete the payment gateway record
        $deleted = $paymentGateway->delete();

        if (!$deleted) {
            DB::rollBack();
            throw new \Exception('Failed to delete payment gateway record');
        }

        DB::commit();

        return response()->json([
            'success' => true,
            'message' => 'Payment gateway deleted successfully',
            'deleted_id' => $paymentGateway->id
        ]);

    } catch (\Exception $e) {
        DB::rollBack();
        \Log::error("Payment gateway deletion failed: " . $e->getMessage());

        return response()->json([
            'success' => false,
            'message' => 'Failed to delete payment gateway',
            'error' => $e->getMessage()
        ], 500);
    }
}
}
