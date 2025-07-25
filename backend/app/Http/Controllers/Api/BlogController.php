<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::with('category', 'user')->get();
        return response()->json($blogs);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'category_id' => 'required|exists:blog_categories,id',
        ]);

        $blog = Blog::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'category_id' => $request->category_id,
            'user_id' => auth()->id(),
        ]);

        return response()->json($blog, 201);
    }

    public function show(Blog $blog)
    {
        return response()->json($blog->load('category', 'user'));
    }

    public function update(Request $request, Blog $blog)
    {
        $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes',
            'category_id' => 'sometimes|exists:blog_categories,id',
        ]);

        $blog->update([
            'title' => $request->title ?? $blog->title,
            'slug' => $request->title ? Str::slug($request->title) : $blog->slug,
            'content' => $request->content ?? $blog->content,
            'category_id' => $request->category_id ?? $blog->category_id,
        ]);

        return response()->json($blog);
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json(['message' => 'Blog deleted']);
    }
}
