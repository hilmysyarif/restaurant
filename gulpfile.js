// var elixir = require('laravel-elixir');


//  |--------------------------------------------------------------------------
//  | Elixir Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Elixir provides a clean, fluent API for defining some basic Gulp tasks
//  | for your Laravel application. By default, we are compiling the Sass
//  | file for our application, as well as publishing vendor resources.
//  |
 

// elixir(function(mix) {
//     mix.sass('app.scss');
// });

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'), 
    browserSync = require('browser-sync').create(),
    minifyCss = require('gulp-minify-css'),
    del = require('del'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

var config = {
	JS_ALL: [
		'bower_components/picturefill/dist/picturefill.min.js', 
		'bower_components/jquery/dist/jquery.min.js', 
		'bower_components/bootstrap/dist/js/bootstrap.min.js', 
		'bower_components/fastclick/lib/fastclick.js', 
		'bower_components/flux/dist/Flux.js',
		'bower_components/microevents/microevent.js', 
		'bower_components/react/react.js', 
		'bower_components/react-router/build/umd/ReactRouter.js', 
		'bower_components/react-modal/dist/react-modal.js', 
		'resources/app/build/actions/*.js',
		'resources/app/build/stores/*.js',
		'resources/app/build/components/**/*.js', 
		'resources/app/build/*.js',
	],
	JSX: [
		'resources/app/jsx/*.js', 
		'resources/app/jsx/**/*.js',
		'resources/app/jsx/**/**/*.js'
	], 
	JSX_DEST: 'resources/app/build/', 
	DEST: 'public/',
	JS_OUT: 'app.js', 
	JS_MIN: 'app.min.js', 
	HTML: 'resources/views/*.blade.php', 
	SASS: 'resources/assets/sass/app.scss', 
	SASS_ALL: [
		'resources/assets/sass/*.scss', 
		'resources/assets/sass/**/*.scss'
	], 
	CSS_OUT: 'app.css', 
	CSS_MIN: 'app.min.css'
};

var adminConfig = {
	JS_ALL: [
		'bower_components/picturefill/dist/picturefill.min.js', 
		'bower_components/jquery/dist/jquery.min.js', 
		'bower_components/bootstrap/dist/js/bootstrap.min.js', 
		'bower_components/fastclick/lib/fastclick.js', 
		'bower_components/flux/dist/Flux.js',
		'bower_components/microevents/microevent.js', 
		'resources/admin-app/build/actions/*.js',
		'resources/admin-app/build/stores/*.js',
		'resources/admin-app/build/components/**/*.js',
		'resources/admin-app/build/*.js'
	],
	JSX: [
		'resources/admin-app/jsx/*.js', 
		'resources/admin-app/jsx/**/*.js',
		'resources/admin-app/jsx/**/**/*.js'
	], 
	JSX_DEST: 'resources/admin-app/build/', 
	DEST: 'public/',
	JS_OUT: 'admin-app.js', 
	JS_MIN: 'admin-bundle.min.js', 
	BUNDLE: 'admin-bundle.js', 
	HTML: 'resources/views/admin/*.blade.php', 
	SASS: 'resources/assets/sass-admin/admin-app.scss', 
	SASS_ALL: [
		'resources/assets/sass-admin/*.scss', 
		'resources/assets/sass-admin/**/*.scss'
	], 
	CSS_OUT: 'admin-app.css', 
	CSS_MIN: 'admin-app.min.css'
};

gulp.task('default', ['build'], function() {

});

gulp.task('build', ['minifyScripts', 'minifyCss', 'minifyScriptsAdmin', 'minifyCssAdmin']);

gulp.task('concatScripts', ['transform'], function() {
	return gulp.src(config.JS_ALL)
	.pipe(concat(config.JS_OUT))
	.pipe(gulp.dest(config.DEST));
});

gulp.task('minifyScripts', ['concatScripts'], function() {
	return gulp.src(config.DEST + config.JS_OUT)
	.pipe(uglify({mangle:false}))
	.pipe(rename(config.JS_MIN))
	.pipe(gulp.dest(config.DEST));
});

gulp.task('compileSass', function() {
	return gulp.src(config.SASS)
	.pipe(sass().on('error', sass.logError))
	.pipe(rename(config.CSS_OUT))
	.pipe(gulp.dest(config.DEST))
	.pipe(browserSync.stream());
});

gulp.task('minifyCss', ['compileSass'], function() {
	return gulp.src(config.DEST + config.CSS_OUT)
	.pipe(minifyCss({compatibility:'ie8'}))
	.pipe(rename(config.CSS_MIN))
	.pipe(gulp.dest(config.DEST));
});

gulp.task('clearTransform', function() {
	return del(config.JSX_DEST);
});

gulp.task('transform', ['clearTransform'], function() {
	return gulp.src(config.JSX)
	.pipe(babel())
	.on('error', function(e) {
      console.log('>>> ERROR', e);
      // emit here
      this.emit('end');
    })
	.pipe(gulp.dest(config.JSX_DEST));
});

gulp.task('watchFiles', function() {
	//Start browser sync server
	browserSync.init({
		proxy:"restaurant.dev:8080"
	});

	gulp.watch(config.SASS_ALL, ['compileSass']);
	gulp.watch(config.JSX, ['concatScripts']);
	gulp.watch([config.DEST + '*.html', config.DEST + '*.php', config.DEST + config.JS_OUT])
	.on('change', browserSync.reload);

	//Admin watch
	gulp.watch(adminConfig.SASS_ALL, ['compileSassAdmin']);
	gulp.watch(adminConfig.JSX, ['adminBrowserify']);
	gulp.watch([adminConfig.DEST + '*.html', adminConfig.DEST + '*.php', adminConfig.DEST + adminConfig.BUNDLE])
	.on('change', browserSync.reload);
});

gulp.task('serve', ['watchFiles']);

/**
* Admin task runners
*/

gulp.task('clearTransformAdmin', function() {
	return del(adminConfig.JSX_DEST);
});

gulp.task('adminBrowserify', ['concatAdmin'], function() {
	return browserify(adminConfig.DEST + adminConfig.JS_OUT)
	.bundle()
	.on('error', function(e) {
      console.log('>>> ERROR', e);
      // emit here
      this.emit('end');
    })
	.pipe(source('admin-bundle.js'))
	.pipe(gulp.dest(adminConfig.DEST));
});

gulp.task('transformAdmin', ['clearTransformAdmin'], function() {
	return gulp.src(adminConfig.JSX)
	.pipe(babel())
	.on('error', function(e) {
      console.log('>>> ERROR', e);
      // emit here
      this.emit('end');
    })
	.pipe(gulp.dest(adminConfig.JSX_DEST));
});

gulp.task('concatAdmin', ['transformAdmin'], function() {
	return gulp.src(adminConfig.JS_ALL)
	.pipe(concat(adminConfig.JS_OUT))
	.pipe(gulp.dest(adminConfig.DEST));
});

gulp.task('minifyScriptsAdmin', ['adminBrowserify'], function() {
	return gulp.src(adminConfig.DEST + adminConfig.BUNDLE)
	.pipe(uglify({mangle:false}))
	.pipe(rename(adminConfig.JS_MIN))
	.pipe(gulp.dest(adminConfig.DEST));
});

gulp.task('compileSassAdmin', function() {
	return gulp.src(adminConfig.SASS)
	.pipe(sass().on('error', sass.logError))
	.pipe(rename(adminConfig.CSS_OUT))
	.pipe(gulp.dest(adminConfig.DEST))
	.pipe(browserSync.stream());
});

gulp.task('minifyCssAdmin', ['compileSassAdmin'], function() {
	return gulp.src(adminConfig.DEST + adminConfig.CSS_OUT)
	.pipe(minifyCss({compatibility:'ie8'}))
	.pipe(rename(adminConfig.CSS_MIN))
	.pipe(gulp.dest(adminConfig.DEST));
});
