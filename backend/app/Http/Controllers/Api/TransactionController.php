<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
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
}
