<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use App\Models\Transaction;
use Illuminate\Support\Str;
use App\Models\Plan;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with('user', 'plan', 'paymentGateway')->get();
        return response()->json($transactions);
    }

    public function show(Transaction $transaction)
    {
        return response()->json($transaction->load('user', 'plan', 'paymentGateway'));
    }

    public function userTransactions()
    {
        $transactions = auth()->user()->transactions()->with('plan', 'paymentGateway')->get();
        return response()->json($transactions);
    }

    public function buy(Request $request)
    {
        $request->validate([
            'plan_id' => 'required|exists:plans,id',
            'payment_gateway_id' => 'required|exists:payment_gateways,id',
        ]);

        $plan = Plan::findOrFail($request->plan_id);

        $paymentImageUrl = null;

        if ($request->hasFile('payment_image')) {
            $file = $request->file('payment_image');


            $extension = $file->getClientOriginalExtension();
            if (!in_array(strtolower($extension), ['jpeg', 'png', 'jpg', 'gif', 'svg'])) {
                throw new \Exception('Invalid file type. Only jpeg, png, jpg, gif, svg are allowed.');
            }


            $fileName = 'payment_images/' . Str::uuid() . '.' . $extension;


            $stored = Storage::disk('public')->put($fileName, file_get_contents($file));

            if (!$stored) {
                throw new \Exception('Failed to store QR code image.');
            }

            $paymentImageUrl = Storage::disk('public')->url($fileName);
        }

        $transaction = Transaction::create([
            'user_id' => auth()->id(),
            'plan_id' => $request->plan_id,
            'payment_gateway_id' => $request->payment_gateway_id,
            'payment_image'=>$paymentImageUrl,
        ]);

        return response()->json(['message' => 'Plan purchase initiated', 'transaction' => $transaction], 201);
    }
}
