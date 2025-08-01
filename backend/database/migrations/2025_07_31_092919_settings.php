<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string("logo")->nullable();
            $table->string("favicon")->nullable();
            $table->string("instagram")->nullable();
            $table->string("facebook")->nullable();
            $table->string("linkedin")->nullable();
            $table->string("twitter")->nullable();
            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
