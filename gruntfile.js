module.exports = function(grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass : {
      dist : {
        options : {
          outputStyle : 'compressed',
          sourceMap: true
        },
        files : {
          './public/css/main.min.css' : './scss/main.scss'
        }
      },
      dev : {
        options : {
          sourceMap: true
        },
        files : {
          './public/css/main.css' : './scss/main.scss'
        }
      }
    },
    browserify : {
      dist : {
        options : {
          transform : ['es6ify']
        },
        files : {
          './public/js/main.js' : ['./js/src/main.js']
        }
      }
    },
    concat : {},
    uglify : {
      dist : {
        files : {
          './public/js/main.min.js' : './public/js/main.js'
        }
      }
    },
    watch : {
      options : {
        livereload : true
      },
      js : {
        files : './js/src/**/*.js',
        tasks : ['browserify', 'uglify']
      },
      sass : {
        files : './scss/**/*.scss',
        tasks : ['sass']
      }
    }
  });

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dist', ['sass:dist', 'browserify:dist', 'uglify:dist']);
}
