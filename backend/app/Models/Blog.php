<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = ['title', 'category', 'content', 'blog_image', 'is_published',"published_at","meta_title","meta_desc","meta_key"];

    protected $casts = [
    'meta_key' => 'array',
    ];
}
