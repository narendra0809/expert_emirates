<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
               Schema::create('transactions', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->foreignId('plan_id')->constrained()->onDelete('cascade');
    $table->foreignId('payment_gateway_id')->constrained('payment_gateways')->onDelete('cascade');
     $table->enum('status', ['pending', 'approved','reject'])->default('pending');
     $table->string("payment_image");
    $table->timestamps();
});
    }


    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
