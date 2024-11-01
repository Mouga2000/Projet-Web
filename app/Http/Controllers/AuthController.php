<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Valider les données reçues
        $validatedData = $request->validate([
            'nom_prenom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'motdepasse' => 'required|string|min:8|confirmed',
            'numero' => 'required|string|max:15',
            'sex' => 'required|in:1,2',
            'EmailRecup' => 'required|string|email|max:255',
        ]);

        // Déterminer le rôle
        $role = User::count() === 0 ? 'admin' : 'client';   // le premier utilisateur est un administrateur

        // Créer un nouvel utilisateur
        $user = User::create([
            'name' => $validatedData['nom_prenom'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['motdepasse']),
            'phone' => $validatedData['numero'],
            'sex' => $validatedData['sex'],
            'recovery_email' => $validatedData['EmailRecup'],
            'role' => $role,
            'etat' => '1', 
        ]);


        // Réponse après enregistrement
        return response()->json([
            'message' => 'Compte créé avec succès !',
            'user' => $user
        ], 201);
    }

    public function registerAdmin(Request $request)
    {
        // Valider les données reçues
        $validatedData = $request->validate([
            'nom_prenom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'motdepasse' => 'required|string|min:8|confirmed',
            'numero' => 'required|string|max:15',
            'sex' => 'required|in:1,2',
            'poste'=>'required|in:admin,employee',
            'EmailRecup' => 'required|string|email|max:255',
        ]);

        // Déterminer le rôle
        $role = User::count() === 0 ? 'admin' : 'client';   // le premier utilisateur est un administrateur

        // Créer un nouvel utilisateur
        $user = User::create([
            'name' => $validatedData['nom_prenom'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['motdepasse']),
            'phone' => $validatedData['numero'],
            'sex' => $validatedData['sex'],
            'role' => $validatedData['poste'],
            'recovery_email' => $validatedData['EmailRecup'],
            'etat' => '1', 
        ]);


        // Réponse après enregistrement
        return response()->json([
            'message' => 'Compte créé avec succès !',
            'user' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        // Validation des données d'entrée
        $request->validate([
            'email' => 'required|email',
            'motdepasse' => 'required|string',
        ]);
    
    // Tentative de connexion
    if (Auth::attempt(['email' => $request->email, 'password' => $request->motdepasse])) {
        $user = Auth::user(); // Récupère l'utilisateur connecté

        // Retourne les informations de l'utilisateur
        return response()->json([
            'message' => 'Connexion réussie',
            'user' => [
                'id' => $user->id,
                'name' => $user->name, 
                'email' => $user->email,
                'role' => $user->role, 
            ]
        ], 200);
    }

    return response()->json(['message' => 'Identifiants invalides'], 401);
    }

    // Methode pour mettre à jour le role d'un utilisateur par l'administrateur
    public function updateUserRole(Request $request, $id)
    {
        $request->validate([
            'role' => 'required|in:admin,employee,client', 
        ]);

        $user = User::findOrFail($id);
        $user->role = $request->role;
        $user->save();

        return response()->json(['message' => 'Rôle utilisateur mis à jour avec succès', 'user' => $user], 200);
    } 

    public function getEmployees()
    {
        // Récupérer tous les utilisateurs ayant le poste "employee"
        $employees = User::where('role', 'employee')->get(['id', 'name', 'email', 'role']);

        // Retourner les employés sous forme de réponse JSON
        return response()->json([
            'employees' => $employees
        ], 200);
    }

    public function deleteEmployee($id)
    {
        $employee = User::find($id); // Trouver l'employé par son ID

        if (!$employee) {
            return response()->json(['message' => 'Employé non trouvé.'], 404);
        }

        $employee->delete(); // Supprimer l'employé
        return response()->json(['message' => 'Employé supprimé avec succès.'], 200);
    }

}