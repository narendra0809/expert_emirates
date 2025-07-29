<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use DateTime;
use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\UploadedFile;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::get();
        return response()->json($blogs);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'content' => 'required',
            'meta_title' => 'required|string|max:255',
            'meta_desc' => 'required',
            'meta_key' => 'required|array',
            'meta_key.*' => 'string|max:100',
            'blog_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:5048',
        ]);

        $blogImageUrl = null;

        if ($request->hasFile('blog_image')) {
            $file = $request->file('blog_image');


            $extension = $file->getClientOriginalExtension();
            if (!in_array(strtolower($extension), ['jpeg', 'png', 'jpg', 'gif', 'svg'])) {
                throw new \Exception('Invalid file type. Only jpeg, png, jpg, gif, svg are allowed.');
            }


            $fileName = 'blog_images/' . Str::uuid() . '.' . $extension;


            $stored = Storage::disk('public')->put($fileName, file_get_contents($file));

            if (!$stored) {
                throw new \Exception('Failed to store QR code image.');
            }

            $blogImageUrl = Storage::disk('public')->url($fileName);
        }
        if($request->is_published==="published"){
            $now = new DateTime();
            $formatted = $now->format('Y-m-d H:i:s');
            $published_at = $formatted;
             $blog = Blog::create([
            'title' => $request->title,
            'content' => $request->content,
            'category' => $request->category,
            'meta_title' => $request->meta_title,
            'meta_desc' => $request->meta_desc,
            'meta_key' => $request->meta_key,
            'blog_image' => $blogImageUrl,
            "published_at"=>$published_at,
            "is_published"=>$request->is_published,
             ]);
             return response()->json($blog, 201);
        }
        $blog = Blog::create([
                'title' => $request->title,
                'content' => $request->content,
                'category' => $request->category,
                'meta_title' => $request->meta_title,
                'meta_desc' => $request->meta_desc,
                'meta_key' => $request->meta_key,
                'blog_image' => $blogImageUrl,
        ]);
        return response()->json($blog, 201);
    }

    public function show(Blog $blog)
    {
        return response()->json($blog->load('category', 'user'));
    }


    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json(['message' => 'Blog deleted']);
    }

    public function update(Request $request, Blog $blog)
{
    Log::info('Starting blog update', [
        'blog_id' => $blog->id,
        'request_method' => $request->method(),
        'headers' => $request->headers->all()
    ]);

    try {
        // Handle multipart/form-data for PATCH requests
        if ($request->isMethod('patch') && str_contains($request->header('Content-Type'), 'multipart/form-data')) {
            Log::debug('Processing PATCH with multipart/form-data');

            $parsed = $this->parseMultipartData($request->getContent());
            Log::debug('Parsed multipart data', [
                'data_fields' => array_keys($parsed['data']),
                'files' => array_keys($parsed['files'])
            ]);

            $request->merge($parsed['data']);

            foreach ($parsed['files'] as $key => $file) {
                $request->files->set($key, $file);
                Log::debug('Added file to request', [
                    'field' => $key,
                    'filename' => $file->getClientOriginalName()
                ]);
            }
        }

        Log::debug('Request data before validation', $request->all());

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|string|max:255',
            'category' => 'sometimes|string|max:255',
            'content' => 'sometimes',
            'meta_title' => 'sometimes|string|max:255',
            'meta_desc' => 'sometimes',
            'meta_key' => 'sometimes|array',
            'meta_key.*' => 'string|max:100',
            'blog_image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:5048',
        ]);

        if ($validator->fails()) {
            Log::warning('Validation failed', ['errors' => $validator->errors()->toArray()]);
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $data = [
            'title' => $request->title ?? $blog->title,
            'category' => $request->category ?? $blog->category,
            'content' => $request->content ?? $blog->content,
            'meta_title' => $request->meta_title ?? $blog->meta_title,
            'meta_desc' => $request->meta_desc ?? $blog->meta_desc,
            'meta_key' => $request->has('meta_key') ? $request->meta_key : $blog->meta_key,
        ];

        if ($request->has('is_published') && $request->is_published === "published") {
             $data['is_published'] = 'published';
             $now = new DateTime();
             $formatted = $now->format('Y-m-d H:i:s');
             $published_at = $formatted;
             $data['published_at'] = $published_at;
        } elseif ($request->has('is_published')) {
           $data['is_published'] = 'draft';
        }

        // Handle blog image update
        if ($request->hasFile('blog_image')) {
            Log::info('Processing blog image upload');
            $file = $request->file('blog_image');

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
            $storagePath = 'blog_images/' . $fileName;

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
                    Log::error('Failed to store blog image file');
                    throw new \Exception('Failed to store blog image');
                }

                $fileUrl = Storage::disk('public')->url($storagePath);
                $data['blog_image'] = $fileUrl;

                Log::info('File stored successfully', [
                    'storage_path' => $storagePath,
                    'public_url' => $fileUrl,
                    'file_exists' => Storage::disk('public')->exists($storagePath)
                ]);

                // Delete old blog image if exists
                if ($blog->blog_image) {
                    try {
                        $oldPath = parse_url($blog->blog_image, PHP_URL_PATH);
                        $oldPath = str_replace('/storage/', '', $oldPath);

                        Log::debug('Attempting to delete old blog image', [
                            'old_url' => $blog->blog_image,
                            'old_storage_path' => $oldPath,
                            'file_exists' => Storage::disk('public')->exists($oldPath)
                        ]);

                        if (Storage::disk('public')->exists($oldPath)) {
                            $deleted = Storage::disk('public')->delete($oldPath);
                            Log::info('Old blog image deletion', [
                                'success' => $deleted,
                                'path' => $oldPath
                            ]);
                        }
                    } catch (\Exception $e) {
                        Log::error("Failed to delete old blog image", [
                            'error' => $e->getMessage(),
                            'trace' => $e->getTraceAsString()
                        ]);
                    }
                }
            } catch (\Exception $e) {
                Log::error('File storage failed', [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
                throw $e;
            }
        }

        // Update the record
        Log::debug('Attempting to update database record', $data);
        $updated = $blog->update($data);

        if (!$updated) {
            Log::error('Database update failed', ['blog_id' => $blog->id]);

            // Clean up if we stored a new file but failed to update
            if (isset($storagePath) && Storage::disk('public')->exists($storagePath)) {
                Log::debug('Cleaning up orphaned file due to failed update', ['path' => $storagePath]);
                Storage::disk('public')->delete($storagePath);
            }

            throw new \Exception('Failed to update blog record');
        }

        Log::info('Blog updated successfully', [
            'blog_id' => $blog->id,
            'updated_fields' => array_keys($data)
        ]);

        return response()->json([
            'success' => true,
            'data' => $blog->fresh(),
            'message' => 'Blog updated successfully'
        ]);

    } catch (\Exception $e) {
        Log::error('Blog update failed', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
            'blog_id' => $blog->id ?? null
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Failed to update blog',
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
}
