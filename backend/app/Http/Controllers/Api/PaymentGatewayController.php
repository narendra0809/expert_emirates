<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PaymentGateway;
use Illuminate\Http\Request;

class PaymentGatewayController extends Controller
{
    public function index()
    {
        $gateways = PaymentGateway::all();
        return response()->json($gateways);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'wallet_address' => 'required|string',
            'qr_code' => 'nullable|string',
        ]);

        $gateway = PaymentGateway::create($request->only(['name', 'wallet_address', 'qr_code']));

        return response()->json($gateway, 201);
    }

    public function show(PaymentGateway $paymentGateway)
    {
        return response()->json($paymentGateway);
    }

    public function update(Request $request, PaymentGateway $paymentGateway)
    {
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'wallet_address' => 'sometimes|string',
            'qr_code' => 'nullable|string',
        ]);

        $paymentGateway->update($request->only(['name', 'wallet_address', 'qr_code']));

        return response()->json($paymentGateway);
    }

    public function destroy(PaymentGateway $paymentGateway)
    {
        $paymentGateway->delete();
        return response()->json(['message' => 'Payment gateway deleted']);
    }
}
