<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    // List all settings (index)
    public function index()
    {
        $settings = Setting::all();
        return response()->json($settings);
    }

    // In SettingController.php
public function store(Request $request)
{
    $validated = $request->validate([
        'logo'      => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:5048',
        'favicon'   => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,ico|max:2048',
        'instagram' => 'nullable|string|max:255',
        'twitter'   => 'nullable|string|max:255',
        'facebook'  => 'nullable|string|max:255',
        'linkedin'  => 'nullable|string|max:255',
    ]);

    // Handle logo upload
    $logoUrl = null;
    if ($request->hasFile('logo')) {
        $logo = $request->file('logo');
        $extension = $logo->getClientOriginalExtension();
        $fileName = 'settings/' . \Illuminate\Support\Str::uuid() . '.' . $extension;

        $stored = \Storage::disk('public')->put($fileName, file_get_contents($logo));
        if (!$stored) {
            throw new \Exception('Failed to store logo image.');
        }
        $logoUrl = \Storage::disk('public')->url($fileName);
        $validated['logo'] =  $logoUrl; // Store the path in DB
    }

    // Handle favicon upload
    $faviconUrl = null;
    if ($request->hasFile('favicon')) {
        $favicon = $request->file('favicon');
        $extension = $favicon->getClientOriginalExtension();
        $fileName = 'settings/' . \Illuminate\Support\Str::uuid() . '.' . $extension;

        $stored = \Storage::disk('public')->put($fileName, file_get_contents($favicon));
        if (!$stored) {
            throw new \Exception('Failed to store favicon image.');
        }
        $faviconUrl = \Storage::disk('public')->url($fileName);
        $validated['favicon'] = $faviconUrl;
    }

    $setting = \App\Models\Setting::create($validated);

    // For return, add full URLs
    $data = $setting->toArray();
    // $data['logo_url'] = $logoUrl ?: ($setting->logo ? asset('storage/' . $setting->logo) : null);
    // $data['favicon_url'] = $faviconUrl ?: ($setting->favicon ? asset('storage/' . $setting->favicon) : null);

    return response()->json($data, 201);
}


public function update(Request $request, \App\Models\Setting $setting)
{
    try {
        // Handle multipart/form-data for PATCH requests (for custom clients)
        if (
            $request->isMethod('patch') &&
            str_contains($request->header('Content-Type'), 'multipart/form-data')
        ) {
            // Parse raw input for proper file/array handling
            $parsed = $this->parseMultipartData($request->getContent());
            $request->merge($parsed['data']);

            foreach ($parsed['files'] as $key => $file) {
                $request->files->set($key, $file);
            }
        }

        // Standard validation
        $validator = \Validator::make($request->all(), [
            'logo'      => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:5048',
            'favicon'   => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,ico|max:2048',
            'instagram' => 'nullable|string|max:255',
            'twitter'   => 'nullable|string|max:255',
            'facebook'  => 'nullable|string|max:255',
            'linkedin'  => 'nullable|string|max:255',
        ]);
        if ($validator->fails()) {
            \Log::warning('Setting validation failed', ['errors' => $validator->errors()->toArray()]);
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors'  => $validator->errors(),
            ], 422);
        }
        $validated = $validator->validated();

        // Handle logo upload/delete old
        if ($request->hasFile('logo')) {
            if ($setting->logo && \Storage::disk('public')->exists($setting->logo)) {
                \Storage::disk('public')->delete($setting->logo);
            }
            $logo = $request->file('logo');
            $extension = $logo->getClientOriginalExtension();
            $fileName = 'settings/' . \Illuminate\Support\Str::uuid() . '.' . $extension;
            $stored = \Storage::disk('public')->put($fileName, file_get_contents($logo));
            $logoUrl = \Storage::disk('public')->url($fileName);
            if (!$stored) {
                throw new \Exception('Failed to store logo image.');
            }
            $validated['logo'] =  $logoUrl;
        }

        // Handle favicon upload/delete old
        if ($request->hasFile('favicon')) {
            if ($setting->favicon && \Storage::disk('public')->exists($setting->favicon)) {
                \Storage::disk('public')->delete($setting->favicon);
            }
            $favicon = $request->file('favicon');
            $extension = $favicon->getClientOriginalExtension();
            $fileName = 'settings/' . \Illuminate\Support\Str::uuid() . '.' . $extension;
            $stored = \Storage::disk('public')->put($fileName, file_get_contents($favicon));

            if (!$stored) {
                throw new \Exception('Failed to store favicon image.');
           }
            $faviconUrl = \Storage::disk('public')->url($fileName);
            $validated['favicon'] = $faviconUrl;
        }

        \Log::debug('Updating settings with:', $validated);
        $setting->update($validated);

        // Prepare public URLs (helpful for frontend API)
        $data = $setting->toArray();
        // $data['logo_url']    = $setting->logo ? asset('storage/' . $setting->logo) : null;
        // $data['favicon_url'] = $setting->favicon ? asset('storage/' . $setting->favicon) : null;

        return response()->json([
            'success' => true,
            'data'    => $data,
            'message' => 'Settings updated successfully'
        ]);
    } catch (\Exception $e) {
        \Log::error('Settings update failed', [
            'error'   => $e->getMessage(),
            'trace'   => $e->getTraceAsString(),
            'setting_id' => $setting->id ?? null
        ]);
        return response()->json([
            'success' => false,
            'message' => 'Failed to update settings',
            'error'   => $e->getMessage()
        ], 500);
    }
}

// Your parseMultipartData and parseHeaders stay as you have them:
protected function parseMultipartData($content)
{
    \Log::debug('Parsing multipart data', ['content_length' => strlen($content)]);

    $data = [];
    $files = [];
    $boundary = substr($content, 0, strpos($content, "\r\n"));

    if (empty($boundary)) {
        \Log::warning('Empty boundary in multipart data');
        return ['data' => $data, 'files' => $files];
    }

    $parts = array_slice(explode($boundary, $content), 1, -1);
    \Log::debug('Multipart parts found', ['count' => count($parts)]);

    foreach ($parts as $i => $part) {
        if (empty($part)) continue;

        $part = ltrim($part, "\r\n");
        list($headers, $body) = explode("\r\n\r\n", $part, 2);

        $headers = $this->parseHeaders($headers);
        preg_match('/name="([^"]+)"/', $headers['content-disposition'], $matches);
        $fieldName = $matches[1] ?? null;

        if ($fieldName) {
            if (substr($fieldName, -2) === '[]') {
                $baseName = substr($fieldName, 0, -2);
                $value = trim($body);
                \Log::debug('Processing array data part', [
                    'part_index'  => $i,
                    'field_name'  => $fieldName,
                    'base_name'   => $baseName,
                    'value_length'=> strlen($value)
                ]);
                if (!isset($data[$baseName])) {
                    $data[$baseName] = [];
                }
                $data[$baseName][] = $value;
            } elseif (isset($headers['content-type'])) {
                \Log::debug('Processing file part', [
                    'part_index'  => $i,
                    'field_name'  => $fieldName,
                    'content_type'=> $headers['content-type'],
                    'filename'    => $headers['filename'] ?? null
                ]);
                $tempPath = tempnam(sys_get_temp_dir(), 'laravel-upload');
                file_put_contents($tempPath, $body);
                $files[$fieldName] = new \Illuminate\Http\UploadedFile(
                    $tempPath,
                    $headers['filename'] ?? basename($tempPath),
                    $headers['content-type'],
                    null,
                    true
                );
            } else {
                \Log::debug('Processing data part', [
                    'part_index'  => $i,
                    'field_name'  => $fieldName,
                    'value_length'=> strlen(trim($body))
                ]);
                $data[$fieldName] = trim($body);
            }
        }
    }

    \Log::debug('Multipart parsing completed', [
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


    // Show a specific setting
    public function show(Setting $setting)
    {
        return response()->json($setting);
    }
}
