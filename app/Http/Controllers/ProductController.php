<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'string',
                'description' => 'string',
                'price' => 'numeric',
                'quantity' => 'numeric',
                'image' => 'file',
                'review' => 'numeric',
            ]);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);
        return $product ? response()->json($product, 200) : response()->json('product not found', 404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);
        if(!$product) {
            return response()->json('product not found', 404);
        }
        try {
            $request->validate([
                'name' => 'string',
                'description' => 'string',
                'price' => 'numeric',
                'quantity' => 'numeric',
                'image' => 'file',
                'review' => 'numeric'
            ]);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        }
        $product->fill($request->only([
            'name',
            'description',
            'price',
            'quantity',
            'image',
            'review'
        ]));
        $product->save();
        return response()->json('product updated sccessfully', 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        if(!$product) {
            return response()->json('product not found', 404);
        }
        $product->delete();
        return response()->json(null, 204);
    }
}
