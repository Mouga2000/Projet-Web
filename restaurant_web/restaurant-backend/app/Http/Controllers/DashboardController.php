<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $user = Auth::user();

        if ($user->role === 'admin') {
            return redirect()->route('admin.dashboard'); // Rediriger vers le tableau de bord de l'administrateur
        } elseif ($user->role === 'employee') {
            return redirect()->route('employee.dashboard'); // Rediriger vers le tableau de bord de l'employé
        } else {
            return redirect()->route('client.dashboard'); // Rediriger vers la page d'accueil du client
        }
    }
}
