<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogCategoryController extends Controller
{
    public function index()
    {
        $categories = BlogCategory::with('parent', 'children')->get();
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'parent_id' => 'nullable|exists:blog_categories,id',
        ]);

        $category = BlogCategory::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'parent_id' => $request->parent_id,
        ]);

        return response()->json($category, 201);
    }

    public function show(BlogCategory $blogCategory)
    {
        return response()->json($blogCategory->load('parent', 'children'));
    }

    public function update(Request $request, BlogCategory $blogCategory)
    {
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'parent_id' => 'nullable|exists:blog_categories,id',
        ]);

        $blogCategory->update([
            'name' => $request->name ?? $blogCategory->name,
            'slug' => $request->name ? Str::slug($request->name) : $blogCategory->slug,
            'parent_id' => $request->parent_id ?? $blogCategory->parent_id,
        ]);

        return response()->json($blogCategory);
    }

    public function destroy(BlogCategory $blogCategory)
    {
        $blogCategory->delete();
        return response()->json(['message' => 'Category deleted']);
    }
}