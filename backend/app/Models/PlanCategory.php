<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlanCategory extends Model
{
    protected $fillable = ['name', 'slug', 'parent_id'];

    public function plans()
    {
        return $this->hasMany(Plan::class, 'category_id');
    }

    public function parent()
    {
        return $this->belongsTo(PlanCategory::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(PlanCategory::class, 'parent_id');
    }
}