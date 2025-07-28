<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $fillable = ['name', 'description', 'price',"duration","features"];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    protected $casts = [
        'features' => 'array',
    ];
}
