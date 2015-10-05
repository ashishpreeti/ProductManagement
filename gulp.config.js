"use strict";

module.exports = function () {
        var src = './app/';
    return {

        index : 'index.html',
        js : [
            src + '**/.js',
            'js/**/*.js'
        ],

        temp : '.tmp',

        less : [
             src + 'styles/styles.less'
        ],

        alljs : [
            './app/**/*.js'
        ],

        port : 9005,
        devBaseUrl : "http://localhost",
        paths : {
            html : src + '**/*.html',
            js : './js/*.js',
            common : './common/services/*.js',
            css : './css/*,css',
            dist : './dist'
        }
    };
};