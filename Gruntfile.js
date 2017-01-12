module.exports = function(grunt) {

	grunt.initConfig({
			pkg : grunt.file.readJSON('package.json'),
			
			clean: ['*.min.js'],

			uglify : {
				source: {
					expand : true,
					src: [ 'fractional-arithmetic.js' ],
					ext: '.min.js',
					extDot: 'first',
					options : {
						banner : '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
					},
				},
			},
			
			jshint: {
				src: [ 'Gruntfile.js', 'fractional-arithmetic.js' ],
			},
			
		});

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	
	grunt.registerTask( 'default', ['jshint'] );
	grunt.registerTask( 'build', ['clean', 'uglify']);
};
