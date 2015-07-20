/*global module:true, require: true */

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: { jshintrc: true },
            all: {
                src: [
                    '*.js',
                    '!node_modules'
                ]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', [
        'jshint'
    ]);

};