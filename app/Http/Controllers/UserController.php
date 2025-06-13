<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $user = Auth::user();
       return $user ? response()->json($user, 200) : response()->json('user not found', 404);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $client = User::where('email', $request->email)->get();
        if(!$client->isEmpty()) {
            return response()->json('This email already exists', 422);
        }
        try {
            $request->validate([
                'full_name' => 'string|required',
                'email' => 'email|required',
                'address' => 'string',
                'phone_number' => 'integer',
                'password'=> 'required|string|min:8'
            ]);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        }

        try {
            $client = User::create([
                'full_name' => $request->full_name,
                'email' => $request->email,
                'address' => $request->address,
                'phone_number' => $request->phone_number,
                'role' => $request->role,
                'password' => $request->password,
            ]);
            $token = $client->createToken($client->f_name);
            return response()->json($token, 201);
        } catch (Exception $e) {
            return response()->json($e, 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $this->index();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json('user not found', 404);
        }
        try {
            $request->validate([
                'full_name' => 'string',
                'email' => 'email',
                'address' => 'string',
                'phone_number' => 'integer',
                'password'=> 'required|string|min:8'
            ]);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        }
        $user->fill($request->only([
            'full_name',
            'email',
            'address',
            'phone_number',
            'password',
        ]));
        $user->save();
        return response()->json('user updated successfully', 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        if(!$user) {
            return response()->json('User not found', 404);
        }
        $user->delete();
        return response()->json(null, 204);
    }
}
