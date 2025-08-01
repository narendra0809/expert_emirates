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
            'category' => 'required|string|max:255',
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
            'category' => 'sometimes|string|max:255' . $plan->id,
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
        try {
            $plan->delete();
            return response()->json(['message' => 'Plan deleted']);
        } catch (\Throwable $th) {
            return response()->json(["message"=> 'Plan could not be deleted']);
        }
    }

}
