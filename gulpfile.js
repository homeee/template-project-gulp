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
		'ext:dev', 'pug',
		'scss:dev',
		'js:dev', 'plugins'
	),
	'clean:after'
	'clear',
	$.gulp.parallel('serv', 'watch')
));

$.gulp.task('build', $.gulp.series(
	'clean:before',
	$.gulp.parallel(
		'fonts', 'favicons', 'content:build',
		'icons', 'png:build',
		'ext:build', 'pug',
		'scss:build',
		'js:build', 'plugins'
	),
	'clean:after',
	'clear',
	'serv'
));
