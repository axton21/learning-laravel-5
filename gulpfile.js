var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 // mix.less('app.less')
 // .copy(
 //   'angular/angular.min.js',
 //   'public/js/vendor/angular.js'

 */

elixir(function(mix) {
  mix.less('app.less');
});
