module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		gitinfo: { },

		clean: ['*.min.js'],

		uglify : {
			source: {
				expand : true,
				src: [ 'fractional-arithmetic.js' ],
				ext: '.min.js',
				extDot: 'first',
				options : {
					banner :	'/*<%= pkg.name %> <%= pkg.version %> ' +
								'<%= gitinfo.local.branch.current.shortSHA %> ' +
								"<%= gitinfo.local.branch.current.lastCommitTime %> */\n"
				},
			},
		},

		jshint: {
			src: [ 'Gruntfile.js', 'fractional-arithmetic.js' ],
		},

		nodeunit: {
			all: [ 'test/**/*_test.js' ]
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-gitinfo' );
	grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );
	
	grunt.registerTask( 'test', [ 'jshint', 'nodeunit' ] );
	grunt.registerTask( 'build', [ 'gitinfo', 'clean', 'uglify' ] );
	grunt.registerTask( 'default', [ 'test', 'build' ] );
};
