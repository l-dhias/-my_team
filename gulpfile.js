const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function image() {
    return gulp.src('./src/image/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/image'));
}

exports.default = gulp.parallel(styles, image, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js',gulp.parallel(scripts))
}