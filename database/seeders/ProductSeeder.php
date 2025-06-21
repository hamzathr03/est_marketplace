<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Organic Strawberries',
                'description' => 'Sweet and juicy organic strawberries, freshly picked from our farm. Perfect for desserts or a healthy snack.',
                'price' => 4.99,
                'quantity' => 100,
                'image_path' => 'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg',
                'review' => 4.8,
                'user_id' => 1,
                'category_id' => 1
            ],
            [
                'name' => 'Artisanal Camembert',
                'description' => 'Traditional Camembert cheese made with raw milk from grass-fed cows using age-old techniques.',
                'price' => 8.50,
                'quantity' => 100,
                'image_path' => 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg',
                'review' => 4.9,
                'user_id' => 2,
                'category_id' => 2
            ],
            [
                'name' => 'Wildflower Honey',
                'description' => 'Pure, unfiltered honey collected from wildflower meadows in the mountains. Rich in flavor and natural enzymes.',
                'price' => 12.75,
                'quantity' => 100,
                'image_path' => 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
                'review' => 4.7,
                'user_id' => 3,
                'category_id' => 5
            ],
            [
                'name' => 'Fresh Farm Eggs',
                'description' => 'Free-range eggs from hens raised on organic feed with access to outdoor pastures.',
                'price' => 5.25,
                'quantity' => 100,
                'image_path' => 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
                'review' => 4.6,
                'user_id' => 1,
                'category_id' => 2
            ],
            [
                'name' => 'Sourdough Bread',
                'description' => 'Artisanal sourdough bread made with organic flour and traditional fermentation methods.',
                'price' => 6.50,
                'quantity' => 100,
                'image_path' => 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg',
                'review' => 4.8,
                'user_id' => 1,
                'category_id' => 3
            ],
            [
                'name' => 'Fresh Caught Trout',
                'description' => 'Sustainably caught mountain trout, cleaned and ready to cook. Perfect for grilling or pan-frying.',
                'price' => 14.99,
                'quantity' => 100,
                'image_path' => 'https://images.pexels.com/photos/3296432/pexels-photo-3296432.jpeg',
                'review' => 4.7,
                'user_id' => 3,
                'category_id' => 4
            ]
        ];
        Product::create($products);
    }
}
