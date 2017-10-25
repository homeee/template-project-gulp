'use strict';

global.$ = {
	paths: 			require('./gulp/paths.js') // Пути
	, tasks: 		require('./gulp/tasks.js') // Пути к задачам
	, gulp: 		require('gulp')
	, del: 			require('del')
	, fs: 			require('fs')
	, browserSync: 	require('browser-sync').create()
	, gp: 			require('gulp-load-plugins')()
};

$.tasks.forEach(function(path) {
	require(path)();
});

$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel('svg', 'img:dev', 'pug', 'sass:dev', 'js:dev', 'js:devCopy', 'fonts', 'other', 'index')
));

$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel('svg', 'img:build', 'pug', 'sass:build', 'js:build', 'js:buildCopy', 'fonts', 'other', 'index')
));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel('serv', 'watch')
));
