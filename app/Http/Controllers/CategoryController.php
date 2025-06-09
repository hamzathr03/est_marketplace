<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'string|required',
                'description' => 'string|required',
                'logo' => 'string|required'
            ]);
        } catch (ValidationException $e) {
            return response()->json($e, 422);
        }
        $category = Category::create([
            'name' => $request->name,
            'description' => $request->description,
            'logo' => $request->logo
        ]);
        return response()->json($category, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::find($id);
        return $category ? response()->json($category) : response()->json('category not found', 404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $request->validate([
                'name' => 'string',
                'description' => 'string',
                'logo' => 'string'
            ]);
        } catch (ValidationException $e) {
            return response()->json($e, 422);
        }
        $category = Category::find($id);
        return $category ? response()->json($category) : response()->json('category not found', 404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);
        if(!$category) {
            return response()->json('category not found', 404);
        }
        $category->delete();
        return response()->json(null, 204);
    }
}
