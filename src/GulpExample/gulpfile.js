/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var rename = require('gulp-rename');
var changeCase = require("change-case");

gulp.task('default',
    [],
    function() {
        console.log("Moving all files in styles fider");
/*        gulp.src("wwwroot/css/**.*")
            .pipe(gulp.dest('build/styles'));*/

        gulp.src("Features/**/*.js")
            .pipe(rename(function(path) {
                path.dirname = changeCase.lowerCase(path.dirname);
                path.basename = changeCase.lowerCase(path.basename);
                path.extname = changeCase.lowerCase(path.extname);
            }))
            .pipe(gulp.dest("wwwroot/js/features"));
    });
