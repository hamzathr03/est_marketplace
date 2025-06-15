<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::id();
        $orders = Order::where('user_id', $user_id)->get();
        return response()->json($orders, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user_id = Auth::id();
        try {
            $request->validate([
                'total_price' => 'numeric|required'
            ]);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        }

        $order = Order::create([
            'user_id' => $user_id,
            'total_price' => $request->total_price,
        ]);

        foreach ($request->items as $product) {
            OrderItem::create([
                'seller_id' => $product->seller_id,
                'product_id' => $product->id,
                'order_id' => $order->id,
                'quantity' => $product->quantity,
                'price' => $product->price
            ]);
        }
        return response()->json($order, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::find($id);
        if($order) {
            $items = OrderItem::with('order_id')->get();
            $order->items = $items;
            return response()->json($order, 200);
        } else {
            return response()->json('order not found', 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $order = Order::find($id);
        if (!$order) {
            return response()->json('Order not found', 404);
        }

        if ($order->user_id !== Auth::id()) {
            return response()->json('Unauthorized', 403);
        }

        try {
            $request->validate([
                'total_price' => 'numeric|required'
            ]);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        }

        $order->update([
            'total_price' => $request->total_price,
        ]);

        return response()->json($order, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $order = Order::find($id);
        if (!$order) {
            return response()->json('Order not found', 404);
        }

        if ($order->user_id !== Auth::id()) {
            return response()->json('Unauthorized', 403);
        }

        $order->delete();

        return response()->json('Order deleted', 200);
    }
}
