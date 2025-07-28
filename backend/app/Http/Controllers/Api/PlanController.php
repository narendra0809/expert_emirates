<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;

class PlanController extends Controller
{
    public function index()
    {
        $plans = Plan::all();
        return response()->json($plans);
    }
 public function show(Plan $plan)
    {
        return response()->json($plan);
    }
public function myPlans()
    {
        $plans = auth()->user()->plans()->with('category')->get();
        return response()->json($plans);
    }
  public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category' => 'required|string|max:255|unique:plans',
            'type' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|integer',
            'duration' => 'required|string',
            'features' => 'required|json',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $plan = Plan::create($request->all());
        return response()->json($plan, Response::HTTP_CREATED);
    }

public function update(Request $request, Plan $plan)
    {
        $validator = Validator::make($request->all(), [
            'category' => 'sometimes|string|max:255|unique:plans,category,' . $plan->id,
            'description' => 'sometimes|string',
            'type' => 'required|string|max:255',
            'price' => 'sometimes|integer',
            'duration' => 'sometimes|string',
            'features' => 'sometimes|json',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $plan->update($request->all());
        return response()->json(['message' => 'Plan updated', 'data' => $plan]);
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


}
