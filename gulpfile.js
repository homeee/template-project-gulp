'use strict';

global.$ = {
	paths: 					require('./gulp/paths.js'),
	tasks: 					require('./gulp/tasks.js'),
	gulp: 					require('gulp'),
	del: 						require('del'),
	fs: 						require('fs'),
	browserSync: 		require('browser-sync').create(),
	buffer: 				require('vinyl-buffer'),
	merge: 					require('merge-stream'),
	gp: 						require('gulp-load-plugins')()
};

$.tasks.forEach(function(path) {
	require(path)();
});

$.gulp.task('dev', $.gp.sequence(
	'clean:before',
	['js:dev', 'plugins'],
	['fonts', 'favicons', 'content:dev', 'icons', 'png:dev', 'index', 'ext:dev', 'pug', 'scss:dev'],
	'clean:after',
	['serv', 'watch'],
	'clear'
));

$.gulp.task('build', $.gp.sequence(
	'clean:before',
	['js:build', 'plugins'],
	['fonts', 'favicons', 'content:build', 'icons', 'png:build', 'index', 'ext:build', 'pug', 'scss:build'],
	'clean:after', 'serv', 'clear'
));
