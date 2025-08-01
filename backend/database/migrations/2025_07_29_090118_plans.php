<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
     public function up(): void
    {
        Schema::create('plans', function (Blueprint $table) {
       $table->id();
       $table->string('category');
       $table->string('type');
       $table->text('description');
       $table->integer('price');
       $table->string('duration');
       $table->json('features');
       $table->timestamps();
       });
    }


    public function down(): void
    {
      Schema::dropIfExists('payment_gateways');
    }
};
