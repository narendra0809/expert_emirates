<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class PlanController extends Controller
{
    public function index()
    {
        $plans = Plan::get();
        return response()->json($plans);
    }

    public function store(Request $request)
    {

    try{
    $request->merge([
        'features' => json_decode($request->features, true)
    ]);
        $request->validate([
            'name' => 'required|string|max:255|unique:plans,name',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'duration'=>'required|string',
            "features"=>"required|array",
        ]);
    }
    catch (\Exception $e) {
        \Log::error('Error creating plan: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error creating plan',
            'error' => $e->getMessage()
        ], 500);
    }
    $plan = Plan::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'duration'=> $request->duration,
            "features"=> $request->features,
    ]);
        return response()->json($plan, 201);
    }
    public function show(Plan $plan)
    {
        return response()->json($plan);
    }

public function update(Request $request, $plan)
{   Log::info('Error updating plan: ' . $request->name);
    try {
        $request->merge([
            'features' => json_decode($request->features, true)
        ]);

        $request->validate([
            'name' => 'required|string|max:255|unique:plans,name,',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'duration' => 'required|string',
            'features' => 'required|array',
        ]);

        $plan->update([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'duration' => $request->duration,
            'features' => $request->features,
        ]);

        return response()->json($plan, 200);
    } catch (\Exception $e) {
        Log::error('Error updating plan: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error updating plan',
            'error' => $e->getMessage()
        ], 500);
    }
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
