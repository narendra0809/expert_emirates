<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;

    protected $fillable = [
        'name', 'email', 'password', 'role', 'is_banned',
        'otp', 'otp_expires_at',
        // NEW OPTIONAL FIELDS:
        'phone', 'address', 'country', 'state', 'city', 'zip',
    ];


    public function blogs()
    {
        return $this->hasMany(Blog::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function plans()
    {
        return $this->belongsToMany(Plan::class, 'transactions')->withPivot('status');
    }

    public function isAdmin()
    {
        return $this->role === 'admin';
    }
}
