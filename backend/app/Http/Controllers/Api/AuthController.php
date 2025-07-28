<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\OtpMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => [
            'required',
            'string',
            'min:8',
            'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',
            'confirmed',
        ],
    ], [
        'name.required' => 'Name is required.',
        'email.required' => 'Email is required.',
        'email.email' => 'Invalid email format.',
        'email.unique' => 'Email already taken.',
        'password.required' => 'Password is required.',
        'password.min' => 'Password must be 8+ characters.',
        'password.regex' => 'Password needs uppercase, lowercase, number, special character.',
        'password.confirmed' => 'Passwords do not match.',
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);
    return response()->json(['user' => $user],201);
}

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        if ($user->is_banned) {
            return response()->json(['error' => 'Account banned'], 403);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token, 'user' => $user],200);
    }

   public function forgotPassword(Request $request)
{
    $request->validate([
        'email' => 'required|string|email|exists:users,email',
    ], [
        'email.required' => 'Email is required.',
        'email.exists' => 'Email not found.',
    ]);

    $user = User::where('email', $request->email)->first();
    $otp = rand(100000, 999999);
    $user->update([
        'otp' => Hash::make($otp), // Hashed OTP
        'otp_expires_at' => now()->addMinutes(10),
    ]);

    try {
        Mail::to($user->email)->send(new OtpMail($otp));
    } catch (\Exception $e) {
        $user->update(['otp' => null, 'otp_expires_at' => null]);
        throw ValidationException::withMessages(['email' => 'Failed to send OTP.']);
    }

    return response()->json(['message' => 'OTP sent to email.']);
}

   public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|exists:users,email',
            'otp' => 'required|string|size:6',
            'password' => [
                'required',
                'string',
                'min:8',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',
                'confirmed',
            ],
        ], [
            'email.required' => 'Email is required.',
            'email.email' => 'Invalid email format.',
            'email.exists' => 'Email not found.',
            'otp.required' => 'OTP is required.',
            'otp.size' => 'OTP must be 6 digits.',
            'password.required' => 'Password is required.',
            'password.min' => 'Password must be 8+ characters.',
            'password.regex' => 'Password needs uppercase, lowercase, number, special character.',
            'password.confirmed' => 'Passwords do not match.',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->otp, $user->otp) || $user->otp_expires_at < now()) {
            throw ValidationException::withMessages(['otp' => 'Invalid or expired OTP.']);
        }

        $user->update([
            'password' => Hash::make($request->password),
            'otp' => null,
            'otp_expires_at' => null,
        ]);

        return response()->json(['message' => 'Password reset successfully.']);
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required|string',
            'new_password' => [
                'required',
                'string',
                'min:8',
                'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',
                'confirmed',
            ],
        ], [
            'current_password.required' => 'Current password is required.',
            'new_password.required' => 'New password is required.',
            'new_password.min' => 'New password must be 8+ characters.',
            'new_password.regex' => 'New password needs uppercase, lowercase, number, special character.',
            'new_password.confirmed' => 'New passwords do not match.',
        ]);

        $user = auth()->user();

        if (!Hash::check($request->current_password, $user->password)) {
            throw ValidationException::withMessages(['current_password' => 'Current password incorrect.']);
        }

        $user->update(['password' => Hash::make($request->new_password)]);

        return response()->json(['message' => 'Password changed successfully.']);
    }
}

