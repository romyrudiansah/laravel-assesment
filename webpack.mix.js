const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .vue() // Enable Vue Loader for single-file components
   .sass('resources/sass/app.scss', 'public/css');