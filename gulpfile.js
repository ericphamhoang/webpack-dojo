/**
 * Created by nikon_000 on 1/17/2017.
 */

var gulp = require('gulp');
var webpack = require('gulp-webpack');
gulp.task('default', function() {
    return gulp.src('src/entry.js')
        .pipe(webpack())
        .pipe(gulp.dest('dist/'));
});