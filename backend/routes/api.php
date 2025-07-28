<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\PlanController;
use App\Http\Controllers\Api\BlogCategoryController;
use App\Http\Controllers\Api\PlanCategoryController;
use App\Http\Controllers\Api\TransactionController;
use App\Http\Controllers\Api\PaymentGatewayController;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('reset-password', [AuthController::class, 'resetPassword']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('profile', [UserController::class, 'profile']);
    Route::put('profile', [UserController::class, 'updateProfile']);
    Route::post('change-password', [AuthController::class, 'changePassword']);
    Route::get('plans', [PlanController::class, 'index']);
    Route::get('plans/{plan}', [PlanController::class, 'show']);
    Route::post('plans/buy', [PlanController::class, 'buy']);
    Route::get('my-plans', [PlanController::class, 'myPlans']);
    Route::get('transactions', [TransactionController::class, 'userTransactions']);
    Route::get('payment-gateways', [PaymentGatewayController::class, 'index']);

    // Admin Routes
    Route::middleware('admin')->prefix('admin')->group(function () {
        Route::apiResource('users', UserController::class);
        Route::post('users/{user}/ban', [UserController::class, 'ban']);
        Route::apiResource('blogs', BlogController::class);
        Route::apiResource('blog-categories', BlogCategoryController::class);
        Route::apiResource('plans', PlanController::class);
        // Route::post('add-plan',[PlanController::class,'store']);
        Route::apiResource('plan-categories', PlanCategoryController::class);
        Route::apiResource('transactions', TransactionController::class)->only(['index', 'show']);
        Route::apiResource('payment-gateways', PaymentGatewayController::class);
    });
});
