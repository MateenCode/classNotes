
// Explanation for Students ---- This is requires the gulp package from node modules
// Gulp exports an object with many methods
// task , watch, src and pipe will be the main ones we use today but see the gulp docs to expand and also see how you might refactor it to no longer use task and maybe use exports, series and parallells
// i don't use them here because they are more magic and make it harder to show what's happening
const gulp = require('gulp');

// Explanation for Students ---- This is for compiling SASS, we haven't learned SASS yet but this is as good a chance as any to to talk about how we could compile it.
const sass = require('gulp-sass');

// Explanation for Students ---- This is for those pesky experimental features of css that are not available in all browsers without prefixes like webkit and moz
const autoprefixer = require('gulp-autoprefixer');

// Explanation for Students ---- This is the mastermind that will open up our code in a browser window
const browserSync = require('browser-sync').create();

// Explanation for Students ---- This is a browserSync method that reloads the page we wangt whenever we make a change to have the page reload
const reload = browserSync.reload;

// Explanation for Students ---- This is a NODEJS standard method that lets us call scripts in our package.json or node_modules from our code
const exec = require('child_process').exec;


/*
***************Our Base Functions*****************
*/
// Explanation for Students ---- This is compiles our styles
gulp.task('styles', (cb) => {
	gulp
		.src('frontEndSrc/scss/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions']
			})
		)
		.pipe(gulp.dest('./public/css'))
		.pipe(browserSync.stream());
		cb()
});


// Explanation for Students ---- This is for the JavaScript development build
gulp.task('webpack', cb => {
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
  cb();
});
// Explanation for Students ---- This is for the JavaScript production build
gulp.task('build', cb => {
	exec('npm run build:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
  cb();
});
/*
***************Our Gulp Tasks*****************
*/
gulp.task('default', (cb) => {
  // Runs the backend Api with Nodemon
  exec('npm run dev:serve', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  // Runs the front End Api in hot Reload mode and looks api for endpoints
  browserSync.init({
    proxy: {
      target: 'http://localhost:8000/', // can be [virtual host, sub-directory, localhost with port]
      ws: true // enables websockets
    },
    serveStatic: ['.', './public']
  });
  // Bundles our JavaScript
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
  // Compiles our Styles
  exec('npm run styles', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  // Watches our files for changes
	gulp.watch('./frontEndSrc/scss/**/*', gulp.task('styles'));
	gulp.watch('./frontEndSrc/js/**/*', gulp.task('webpack'));
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
      'public/js/**/.#*js',
      'public/css/**/.#*css'
		])
		.on('change', reload);
		cb()
});

// Explanation for Students ---- This is for the production build
gulp.task('production', cb => {
  exec('npm run build:webpack', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  // Compiles our Styles
  exec('npm run styles', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  exec('node deploymentStart.js', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  cb();
})
