module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['sass/**/*.scss'],
        dest: 'css/<%= pkg.name %>.css'
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'qunit']
      },
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          open: {
            target: 'http://localhost:8000/index.html'
            }
          }
        }
      },
    clean: ["css/*.css"],
    compass: {                  // Task 
      dist: {                   // Target 
        options: {              // Target options 
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
      dev: {                    // Another target 
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');


  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('build', ['clean', 'compass:dist']);

  grunt.registerTask('default', ['connect']);

};