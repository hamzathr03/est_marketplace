<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Fruits & Vegetables',
                'description' => 'Fresh, locally grown fruits and vegetables.',
                'icon' => 'apple'
            ],
            [
                'name' => 'Dairy & Eggs',
                'description' => 'Farm-fresh dairy products and eggs.',
                'icon' => 'milk'
            ],
            [
                'name' => 'Bakery',
                'description' => 'Artisanal bread, pastries, and baked goods.',
                'icon' => 'croissant'
            ],
            [
                'name' => 'Meat & Fish',
                'description' => 'Locally sourced meat and fresh seafood.',
                'icon' => 'fish'
            ],
            [
                'name' => 'Honey & Jams',
                'description' => 'Artisanal honey, jams, and preserves.',
                'icon' => 'cookie'
            ],
            [
                'name' => 'Beverages',
                'description' => 'Local wines, juices, and other beverages.',
                'icon' => 'wine'
            ]
        ];
        Category::create($categories);
    }
}
