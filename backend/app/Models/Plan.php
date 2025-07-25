<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $fillable = ['name', 'slug', 'description', 'price', 'category_id'];

    public function category()
    {
        return $this->belongsTo(PlanCategory::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
