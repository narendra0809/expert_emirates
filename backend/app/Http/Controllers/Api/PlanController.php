<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PlanController extends Controller
{
    public function index()
    {
        $plans = Plan::with('category')->get();
        return response()->json($plans);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:plan_categories,id',
        ]);

        $plan = Plan::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'description' => $request->description,
            'price' => $request->price,
            'category_id' => $request->category_id,
        ]);

        return response()->json($plan, 201);
    }

    public function show(Plan $plan)
    {
        return response()->json($plan->load('category'));
    }

    public function update(Request $request, Plan $plan)
    {
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'sometimes',
            'price' => 'sometimes|numeric',
            'category_id' => 'sometimes|exists:plan_categories,id',
        ]);

        $plan->update([
            'name' => $request->name ?? $plan->name,
            'slug' => $request->name ? Str::slug($request->name) : $plan->slug,
            'description' => $request->description ?? $plan->description,
            'price' => $request->price ?? $plan->price,
            'category_id' => $request->category_id ?? $plan->category_id,
        ]);

        return response()->json($plan);
    }

    public function destroy(Plan $plan)
    {
        $plan->delete();
        return response()->json(['message' => 'Plan deleted']);
    }

    public function buy(Request $request)
    {
        $request->validate([
            'plan_id' => 'required|exists:plans,id',
            'payment_gateway_id' => 'required|exists:payment_gateways,id',
        ]);

        $plan = Plan::findOrFail($request->plan_id);

        $transaction = Transaction::create([
            'user_id' => auth()->id(),
            'plan_id' => $request->plan_id,
            'payment_gateway_id' => $request->payment_gateway_id,
            'amount' => $plan->price,
            'status' => 'pending',
            'transaction_id' => Str::random(10),
        ]);

        return response()->json(['message' => 'Plan purchase initiated', 'transaction' => $transaction], 201);
    }

    public function myPlans()
    {
        $plans = auth()->user()->plans()->with('category')->get();
        return response()->json($plans);
    }
}
