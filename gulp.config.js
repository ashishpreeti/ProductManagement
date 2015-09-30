module.exports = function () {
    var client = "./app/";
    return {


        temp : [
            './tmp'
        ],

        less : [
            './app/styles/styles.less'
        ],

        alljs : [
            './app/app/**/*.js'
        ]
    };
};