<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddEtatToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            // Ajouter la colonne 'etat' avec les valeurs possibles 1 (Fonctionnel) et 2 (Bloqué)
            $table->enum('etat', ['1', '2'])->default('1')->after('role');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            // Supprimer la colonne 'etat' si on annule la migration
            $table->dropColumn('etat');
        });
    }
}
