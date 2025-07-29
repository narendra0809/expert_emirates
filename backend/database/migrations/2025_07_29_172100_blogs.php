<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('category');
            $table->string('meta_title');
            $table->text('meta_desc');
            $table->json('meta_key')->nullable();
            $table->text('content');
            $table->string('blog_image');
            $table->enum('is_published', ['draft', 'published'])->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }


    public function down(): void
    {
     Schema::dropIfExists('blogs');
    }
};
