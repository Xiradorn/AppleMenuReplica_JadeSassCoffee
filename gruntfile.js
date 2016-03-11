module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            template: {
                options: {
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: './',
                    src: '*.jade',
                    dest: 'build/',
                    ext: '.html'
                }]
            }
        },
        sass: {
            css: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: '*.sass',
                    dest: 'build/assets/css/',
                    ext: '.css'
                }]
            },
            cssmin: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: '*.sass',
                    dest: 'build/assets/css/',
                    ext: '.min.css'
                }]
            }
        },
        coffee:  {
            js: {
                options: {
                    bare: true
                },
                files: [{
                    expand: true,
                    cwd: 'coffee/',
                    src: '*.coffee',
                    dest: 'build/assets/js/',
                    ext: '.js'
                }]
            }
        },
        concat: {
            js: {
                options: {
                    separator: ';\n',
                },
                files: [{
                    src: [
                        'coffee/jquery.js',
                        'build/assets/js/*.js',
                    ],
                    dest: 'build/assets/js/app.js'
                }]
            }
        },
        uglify: {
            app: {
                options: {
                    mangle: ['eval', 'toplevel']
                },
                files: [{
                    src: ['build/assets/js/app.js'],
                    dest: 'build/assets/js/app.min.js'
                }]
            },
            loader: {
                options: {
                    mangle: ['eval', 'toplevel']
                },
                files: [{
                    src: ['build/assets/js/loader.js'],
                    dest: 'build/assets/js/loader.min.js'
                }]
            }
        },
        htmlmin: {
            min: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: [{
                    src: 'build/index.html',
                    dest: 'build/index.html'
                }]
            }
        },
        watch: {
            sass: {
                files: ['**/*.sass'],
                tasks: ['sass']
            },
            coffee: {
                files: ['**/*.coffee'],
                tasks: ['coffee']
            },
            jade: {
                files: ['**/*.jade'],
                tasks: ['jade']
            },
            concatUgly: {
                files: ['build/assets/js/*.js'],
                tasks: ['concat', 'uglify']
            },
            htmlmin: {
                files: ['build/*.html'],
                tasks: ['htmlmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'coffee',
        'concat',
        'uglify',
        'sass',
        'jade',
        'htmlmin',
        'watch'
    ]);

}
