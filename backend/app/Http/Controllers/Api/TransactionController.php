<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use DateTime;
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

        public function destroy($id)
    {
        try {
            $transaction = Transaction::find($id);
            $transaction->delete();
            return response()->json(["success"=>true,'message' => 'Transaction deleted']);
        } catch (\Throwable $th) {
            return response()->json(["success"=>false,'message' => 'Failed to delete transaction']);
        }
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
    public function approved_by_admin($id)
   {
    try {

        $transaction = Transaction::find($id);
        if (!$transaction) return response()->json(['message' => 'Transaction not found'], 404);

    $plan = Plan::find($transaction->plan_id);
    if (!$plan) return response()->json(['message' => 'Plan not found'], 404);

    $duration = strtolower($plan->duration ?? ''); // e.g. "monthly" etc.

    $transaction->status = "approved";
    $now = new DateTime();
    $transaction->purchase_date = $now->format('Y-m-d H:i:s');

    // Calculate expiry_date based on duration
    switch ($duration) {
        case 'monthly':
            $expiry = (clone $now)->modify('+1 month');
            break;
        case 'quarterly':
            $expiry = (clone $now)->modify('+3 months');
            break;
            case 'half yearly':
            $expiry = (clone $now)->modify('+6 months');
            break;
            case 'yearly':
            $expiry = (clone $now)->modify('+1 year');
            break;
        default:
            // You might want to default to a month or null
            $expiry = null;
        }

        $transaction->expiry_date = $expiry ? $expiry->format('Y-m-d H:i:s') : null;
        $transaction->save();

        return response()->json([
            'success' => true,
            'message' => 'Transaction approved and expiry date set!',
            'transaction' => $transaction,
        ]);
    }catch (\Throwable $th) {
        Log::error('Error in approved_by_admin:', [
            'error' => $th->getMessage(),
            'trace' => $th->getTraceAsString(),
            'transaction_id' => $id,
        ]);
            return response()->json(["success"=>false,'message' => 'Failed to delete transaction']);
    }
}
public function reject_by_admin($id){
    try {

        $transaction = Transaction::find($id);
        if (!$transaction) return response()->json(['message' => 'Transaction not found'], 404);
        $transaction->status = "reject";
        $transaction->save();
        return response()->json([
            'success' => true,
            'message' => 'Transaction rejected !',
            'transaction' => $transaction,
        ]);
    } catch (\Throwable $th) {
         Log::error('Error in approved_by_admin:', [
            'error' => $th->getMessage(),
            'trace' => $th->getTraceAsString(),
            'transaction_id' => $id,
        ]);
        return response()->json(["success"=>false,'message' => 'Failed to reject transaction']);
    }
}

}
