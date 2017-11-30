'use strict';

global.$ = {
	paths: 				require('./gulp/paths.js'),
	tasks: 				require('./gulp/tasks.js'),
	gulp: 				require('gulp'),
	del: 				require('del'),
	fs: 				require('fs'),
	browserSync: 		require('browser-sync').create(),
	buffer: 			require('vinyl-buffer'),
	merge: 				require('merge-stream'),
	lp: 				require('gulp-load-plugins')()
};

$.tasks.forEach(function(path) {
	require(path)();
});

$.gulp.task('default', $.gulp.series(
	'clean:before',
	$.gulp.parallel('favicons', 'fonts', 'content:dev', 'icons', 'png:dev'),
	$.gulp.parallel('pug:dev', 'scss:dev', 'js:dev'),
	'clean:after',
	$.gulp.parallel('server', 'watch')
));
