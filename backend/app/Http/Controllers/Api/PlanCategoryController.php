<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PlanCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PlanCategoryController extends Controller
{
    public function index()
    {
        $categories = PlanCategory::with('parent', 'children')->get();
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'parent_id' => 'nullable|exists:plan_categories,id',
        ]);

        $category = PlanCategory::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'parent_id' => $request->parent_id,
        ]);

        return response()->json($category, 201);
    }

    public function show(PlanCategory $planCategory)
    {
        return response()->json($planCategory->load('parent', 'children'));
    }

    public function update(Request $request, PlanCategory $planCategory)
    {
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'parent_id' => 'nullable|exists:plan_categories,id',
        ]);

        $planCategory->update([
            'name' => $request->name ?? $planCategory->name,
            'slug' => $request->name ? Str::slug($request->name) : $planCategory->slug,
            'parent_id' => $request->parent_id ?? $planCategory->parent_id,
        ]);

        return response()->json($planCategory);
    }

    public function destroy(PlanCategory $planCategory)
    {
        $planCategory->delete();
        return response()->json(['message' => 'Category deleted']);
    }
}
