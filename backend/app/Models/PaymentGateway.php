<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentGateway extends Model
{
    protected $fillable = ['name', 'wallet_address', 'qr_code'];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}