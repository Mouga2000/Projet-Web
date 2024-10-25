<?php

$host = 'localhost'; // ou votre hôte
$db = 'projet_web'; // nom de votre base de données
$user = 'root'; // votre nom d'utilisateur
$pass = ''; // votre mot de passe

try {
    // Connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
    exit; // Arrêtez l'exécution si la connexion échoue
}

?>