var gulp = require("gulp");
var args = require("yargs").argv;
var config = require("./gulp.config")();

var $ = require("gulp-load-plugins")({lazy : true});
//var jscs = require("gulp-jscs");
//var jshint = require("gulp-jshint");
//var util = require("gulp-util");
//var gulpprint = require("gulp-print");
//var gulpif = require("gulp-if");

gulp.task("hello", function () {
    console.log("hello world!!");
});

gulp.task("vet", function () {
    log("Analysing code with jshint and JSCS");
    return gulp.src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose : true}))
        .pipe($.jshint.reporter('fail'));

});

function log(msg) {
    $.util.log($.util.colors.blue(msg));
}

