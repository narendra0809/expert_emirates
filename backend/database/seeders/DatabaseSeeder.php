<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\BlogCategory;
use App\Models\PlanCategory;
use App\Models\PaymentGateway;


class DatabaseSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
            'role' => 'admin',
        ]);

        User::create([
            'name' => 'User',
            'email' => 'user@example.com',
            'password' => bcrypt('password'),
            'role' => 'user',
        ]);

        BlogCategory::create(['name' => 'Tech', 'slug' => 'tech']);
        BlogCategory::create(['name' => 'AI', 'slug' => 'ai', 'parent_id' => 1]);

        PlanCategory::create(['name' => 'Premium', 'slug' => 'premium']);
        PlanCategory::create(['name' => 'Basic', 'slug' => 'basic', 'parent_id' => 1]);

        PaymentGateway::create([
            'name' => 'Bitcoin',
            'wallet_address' => '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
            'qr_code' => 'http://example.com/qr/bitcoin.png',
        ]);
    }
}
