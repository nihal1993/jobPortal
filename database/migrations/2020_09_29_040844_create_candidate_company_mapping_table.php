<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCandidateCompanyMappingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs_candidate_mapping', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('job_id');
            $table->foreign('job_id')->references('id')->on('jobs')
              ->onDelete('cascade');
            $table->unsignedInteger('candidate_id');
            $table->foreign('candidate_id')->references('id')->on('candidates')
              ->onDelete('cascade');  
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs_candidate_mapping');
    }
}
