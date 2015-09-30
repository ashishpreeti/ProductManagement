var gulp = require("gulp");
var args = require("yargs").argv;
var config = require("./gulp.config")();

var $ = require("gulp-load-plugins")({lazy : true});

gulp.task("vet", function () {
    log("Analysing code with jshint and JSCS");
    return gulp.src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose : true}))
        .pipe($.jshint.reporter('fail'));

});

gulp.task("styles", function () {
   log("Compiling Less -> css");

    return gulp.src(config.less)
        .pipe($.less())
        .pipe($.autoprefixer({browsers: ['last 2 versions'],cascade: false }))
        .pipe(gulp.dest(config.temp));

});

function log(msg) {
    $.util.log($.util.colors.blue(msg));
}

