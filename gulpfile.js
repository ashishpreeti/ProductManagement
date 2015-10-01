"use strict";

var gulp = require("gulp"),
    connect = require("gulp-connect"),
    args = require("yargs").argv,
    config = require("./gulp.config")(),
    $ = require("gulp-load-plugins")({lazy : true});

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

gulp.task("connect", function () {
    log("Starting the server");
    connect.server({
        root : ['dist'],
        port : config.port,
        base : config.devBaseUrl,
        livereload : true
    });
});

gulp.task("open", ["connect"], function () {
    log("open a given file on server");
    gulp.src('dist/index.html')
        .pipe(open({ uri : config.devBaseUrl + ":" + config.port + "/"} ) );

});

gulp.task("html", function () {
    log("html bundling - moves src to dist folder");
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());

});

gulp.task("default", ["html", "open"], function () {
    log("default - using command 'gulp' will run all the listed tasks");

});

function log(msg) {
    $.util.log($.util.colors.blue(msg));
}

