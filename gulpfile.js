'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const del = require('del');

gulp.task('index', function(){
	return gulp.src('dev/index.html')
		.pipe(gulp.dest('src'))
})

gulp.task('styles', function() {
	return gulp.src('dev/css/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'));
});

gulp.task('scripts', function() {
	return gulp.src('dev/js/*.js')
		.pipe(gulp.dest('src/js'));
});

gulp.task('images', function() {
	return gulp.src('dev/img/*.*')
		.pipe(gulp.dest('src/img'));
});

gulp.task('clean', function() {
	return del('css', 'js', 'img');
});

gulp.task('build', ['clean', 'styles', 'scripts', 'images', 'index']);

gulp.watch('dev/css/*.scss', ['styles']);
gulp.watch('dev/js/*.js', ['scripts']);
gulp.watch('dev/img/*.*', ['images']);
gulp.watch('dev/index.html', ['index']);
