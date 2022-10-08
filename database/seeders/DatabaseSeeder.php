<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

         \App\Models\User::factory()->create([
             'name' => 'Rnd Team',
             'email' => 'team@rnd.com',
         ]);

            $this->call([
                CategorySeeder::class,
                TagSeeder::class,
                ArticleSeeder::class,
            ]);
    }
}
