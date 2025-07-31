<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8',
        'role' => 'required|in:user,admin',
        // Optional fields
        'phone' => 'nullable|string|max:255',
        'address' => 'nullable|string|max:255',
        'country' => 'nullable|string|max:255',
        'state' => 'nullable|string|max:255',
        'city' => 'nullable|string|max:255',
        'zip' => 'nullable|string|max:255',
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password),
        'role' => $request->role,
        'phone' => $request->phone,
        'address' => $request->address,
        'country' => $request->country,
        'state' => $request->state,
        'city' => $request->city,
        'zip' => $request->zip,
    ]);

    return response()->json($user, 201);
}


    public function show(User $user)
    {
        return response()->json($user);
    }

    public function update(Request $request, User $user)
{
    $request->validate([
        'name' => 'sometimes|string|max:255',
        'email' => 'sometimes|string|email|max:255|unique:users,email,' . $user->id,
        'role' => 'sometimes|in:user,admin',
        // Optional fields
        'phone' => 'nullable|string|max:255',
        'address' => 'nullable|string|max:255',
        'country' => 'nullable|string|max:255',
        'state' => 'nullable|string|max:255',
        'city' => 'nullable|string|max:255',
        'zip' => 'nullable|string|max:255',
    ]);

    $user->update($request->only([
        'name', 'email', 'role',
        'phone', 'address', 'country', 'state', 'city', 'zip'
    ]));

    return response()->json($user);
}


    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => 'User deleted']);
    }

    public function ban(User $user)
    {
        $user->update(['is_banned' => true]);
        return response()->json(['message' => 'User banned']);
    }

    public function profile()
    {
        return response()->json(auth()->user());
    }

    public function updateProfile(Request $request)
{
    $request->validate([
        'name' => 'sometimes|string|max:255',
        'email' => 'sometimes|string|email|max:255|unique:users,email,' . auth()->id(),
        // Optional fields
        'phone' => 'nullable|string|max:255',
        'address' => 'nullable|string|max:255',
        'country' => 'nullable|string|max:255',
        'state' => 'nullable|string|max:255',
        'city' => 'nullable|string|max:255',
        'zip' => 'nullable|string|max:255',
    ]);

    auth()->user()->update($request->only([
        'name', 'email',
        'phone', 'address', 'country', 'state', 'city', 'zip'
    ]));

    return response()->json(auth()->user());
}
}
