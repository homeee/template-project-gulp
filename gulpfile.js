'use strict';

global.$ = {
	baseDir: './build'
	, tasks: [
		'./tasks/serv',
		'./tasks/watch',
		'./tasks/clean',
		'./tasks/pug',
		'./tasks/scss',
		'./tasks/js',
		'./tasks/svg',
		'./tasks/img',
		'./tasks/fonts',
		'./tasks/other'
	]
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
	$.gulp.parallel('svg', 'img:dev', 'pug', 'scss:dev', 'vendor:dev', 'scripts:devCopy', 'fonts', 'other')
));

$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel('svg', 'img:build', 'pug', 'scss:build', 'vendor:build', 'scripts:buildCopy', 'fonts', 'other')
));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel('serv', 'watch')
));
