
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
var exec = require('child_process').exec;


// Explanation for Students ---- This is the brain child for our self made development server

// gulp.task('default', (cb) => {
// 	console.log('we lit')
// 	cb();
// })

gulp.task('khoury', (cb) => {
	console.log('error erro')
	cb();
})

const example = Math.round(Math.random())
let bool;
if(example > 0) {
	bool = true;
} else {
	bool = false;
}

gulp.task('isKhouryCool', (cb)=> {
	if(bool) {
		console.log('duh')
		cb()
	} else {
		console.log('you suck');
		cb()
	}
})

gulp.task('showBrowser', (cb)=> {
	browserSync.init({
		server: './public',
		open: true
	})
})

gulp.task('default', (cb) => {
	browserSync.init({
		server: './public',
		notify: true,
		open: true //change this to true if you want the broser to open automatically
	});
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
	gulp.watch('./src/scss/**/*',  gulp.task('styles'));
	gulp.watch('./src/components/**/*', gulp.task('webpack'));
	gulp.watch('./src/main.js',gulp.task('webpack'))
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

// This is to watch your files if you still have your server running
gulp.task('watch-proxy', (cb) => {
	gulp.watch('./src/scss/**/*',  gulp.task('styles'));
	gulp.watch('./src/compnents/**/*', gulp.task('webpack'));
	gulp.watch('./src/main.js',gulp.task('webpack'))
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
			'!public/js/**/.#*js',
			'!public/css/**/.#*css'
		])
		.on('change', reload);
		cb()
});


// Explanation for Students ---- This is compiles our styles
gulp.task('styles', (cb) => {
	gulp
		.src('src/scss/**/*.scss')
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


// Explanation for Students ---- This is for if you just want to see whats in your public folder

gulp.task('browser-sync', function(cb) {
	browserSync.init({
		server: './public',
		notify: false,
		open: false //change this to true if you want the broser to open automatically
	});
	cb()
});


// Explanation for Students ---- This is for if you want run 2 servers
gulp.task('browser-sync-proxy', function(cb) {
	// THIS IS FOR SITUATIONS WHEN YOU HAVE ANOTHER SERVER RUNNING
	browserSync.init({
		proxy: {
			target: 'http://localhost:3333/', // can be [virtual host, sub-directory, localhost with port]
			ws: true // enables websockets
		}
		// serveStatic: ['.', './public']
	});
	cb()
});



// Explanation for Students ---- This is for the development build
gulp.task('webpack', cb => {
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

// Explanation for Students ---- This is for the production build
gulp.task('build', cb => {
	exec('npm run build:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});
