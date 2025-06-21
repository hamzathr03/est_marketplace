<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Ferme des Quatre Saisons',
                'email' => 'contact@quatresaisons.fr',
                'password' => Hash::make('1.2.3.4'),
                'address' => 'Provence, France',
                'role' => 'seller',
            ]
        ];
        User::create($users);
    }
}
