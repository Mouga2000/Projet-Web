<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ClientController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::put('/users/{id}/role', [AuthController::class, 'updateUserRole']); 
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
// Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard')->middleware('admin');

// Route::get('/employee/dashboard', [EmployeeController::class, 'index'])->name('employee.dashboard')->middleware('employee');

// Route::get('/client/dashboard', [ClientController::class, 'index'])->name('client.dashboard')->middleware('client');
});

Route::post('/register', [AuthController::class, 'register']);  // Route pour création de compte

Route::post('/login', [AuthController::class, 'login']);    // Route pour la connexion

Route::get('/employees', [AuthController::class, 'getEmployees']);

Route::post('/registerAdmin', [AuthController::class, 'registerAdmin']);

Route::delete('/employees/{id}', [AuthController::class, 'deleteEmployee']);