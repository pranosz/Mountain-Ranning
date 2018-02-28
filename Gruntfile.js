module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),

		clean: {
            build: {src:["build/"]},
            css: {src:["build/css/*.css","!build/css/*.min.css"]},
            js: {src:["build/js/*.js","!build/js/*.min.js"]}
		},
		cssmin: {
            css: {
                files: {
                    "build/css/lib.min.css": "build/css/lib.css",
                    "build/css/app.min.css": "build/css/app.css",
                }
            }
        },
        concat: {
			js: {
				options: {
				    separator: ";",
				    stripBanners: true,
		      		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		        		'<%= grunt.template.today("yyyy-mm-dd") %> */',
				    },
				files: {
					'build/js/lib.js': [
					"app/components/jquery-3.2.1.min.js",
					"app/components/angular.min.js",
					"app/components/angular-route.js",
					"app/components/@fengyuanchen/datepicker/dist/datepicker.js",
					"app/components/jQuery-MultiSelect-master/jquery.multiselect.js",
					"app/components/node_modules/moment/moment.js",
					"app/components/node_modules/moment/locale/pl.js",
					"app/components/node_modules/angular-moment-picker/dist/angular-moment-picker.min.js"
					],
					'build/js/app.js': [
					"app/js/*.js",
					"app/controllers/*.js",
					"app/services/*.js",
					"app/directives/*.js",
					"app/filters/*.js"
					]
				}
			},
			css: {
				options: {
					separator: " ",
					stripBanners: true,
			      	banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			        	'<%= grunt.template.today("yyyy-mm-dd") %> */',
					},
				files: {
					'build/css/lib.css': [
					'app/components/jQuery-MultiSelect-master/jquery.multiselect.css',
					'app/components/@fengyuanchen/datepicker/dist/datepicker.css',
					'app/components/node_modules/angular-moment-picker/dist/angular-moment-picker.css'
					],
					'build/css/app_level1.css': 'app/css/*.css',
					'build/css/app_level2.css': 'app/css/*/*.css',
					'build/css/app_level3.css': 'app/css/*/*/*.css',
					'build/css/app_level4.css': 'app/css/*/*/*/*.css',
					'build/css/app.css': [
						'build/css/app_level1.css',
						'build/css/app_level2.css',
						'build/css/app_level3.css',
						'build/css/app_level4.css'
						]
				}
			}
        },
        targethtml: {
			 build: {
			    files: {
			      'build/index.html': 'app/index.html'
			    }
			 }
		},
        uglify: {
		    options: {
		    	banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		        '<%= grunt.template.today("yyyy-mm-dd") %> */',
		    	mangle: false
		    }, 
		    js: {
		      files: {
		      	'build/js/lib.min.js': ['build/js/lib.js'],
		        'build/js/app.min.js': ['build/js/app.js']
		      }
		    }      	
        },
        htmlmin: {
		    build: { 
		      options: {                                
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                   
		        'build/index.html': 'build/index.html',    
		      }
		    }       	
        },
        copy: {
		  build: {
		    expand: true,
		    cwd: 'app/views/',
		    src: '**',		    
		    dest: 'build/views/',
		  },        	
        }
	});
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-targethtml');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask("css",["concat:css","cssmin","clean:css"]);
	grunt.registerTask("js",["concat:js","uglify","clean:js"]);
	grunt.registerTask("build",["clean:build","css","js","targethtml","htmlmin","copy"]);
	grunt.registerTask("default",["build"]);
};