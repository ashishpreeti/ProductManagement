"use strict";

module.exports = function () {
    return {

        temp : '.tmp',

        less : [
            './app/styles/styles.less'
        ],

        alljs : [
            './app/app/**/*.js'
        ],

        port : 9080,
        devBaseUrl : "http://localhost",
        paths : {
            html : './app/**/*.html',
            dist : './dist'
        }
    };
};