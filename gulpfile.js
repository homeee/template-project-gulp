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

$.gulp.task('dev', $.gulp.series(
	'clean:before',
	$.gulp.parallel(
		'fonts', 'favicons', 'content:dev',
		'icons', 'png:dev',
		'index', 'ext:dev', 'pug',
		'scss:dev',
		'js:dev', 'plugins'
	),
	'clean:after',
	$.gulp.parallel('serv', 'watch'),
	'clear'
));

$.gulp.task('build', $.gulp.series(
	'clean:before',
	$.gulp.parallel(
		'fonts', 'favicons', 'content:build',
		'icons', 'png:build',
		'index', 'ext:build', 'pug',
		'scss:build',
		'js:build', 'plugins'
	),
	'clean:after',
	'serv',
	'clear'
));
