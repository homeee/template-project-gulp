'use strict';

global.$ = {
	tasks: [
		'./gulp/tasks/clean',
		'./gulp/tasks/other',
		'./gulp/tasks/img',
		'./gulp/tasks/pug',
		'./gulp/tasks/scss',
		'./gulp/tasks/js',
		'./gulp/tasks/server'
	],
	dev: {
		data: 				'./source/pages/_data.json',
		pages: 				'./source/pages/*.pug',
		pug: 				'./source/**/*.pug',
		styles: 			'./source/pages/styles.scss',
		scss: [
							'./source/**/*.scss',
							'!source/{_helpers,_templates}/{_icons,_sprite}.scss',
		],
		libraries: 			require('./gulp/libraries.js'),
		plugins: 			require('./gulp/plugins.js'),
		scripts: 			'./source/scripts/*.js',
		favicons: 			'./source/media/favicons/*.{ico,png}',
		fonts: 				'./source/media/fonts/**/*.{woff2,woff}',
		content: 			'./source/media/content/*.{jpeg,jpg,png,svg,gif,bmp}',
		svg: 				'./source/media/appearance/svg/*.svg',
		icons_name: 		'../icons.svg', // $.build.images + '/symbol'
		icons_scss_tpl: 	'./source/_templates/_icons.scss',
		icons_scss_dest: 	'../../../source/_helpers/_icons.scss', // $.build.images + '/symbol'
		png: 				'./source/media/appearance/*.png',
		sprite_name: 		'sprite.png',
		sprite_scss_name: 	'_sprite.scss',
		sprite_scss_tpl: 	'./source/_templates/_sprite.scss',
		sprite_scss_dest: 	'./source/_helpers/',
	},
	build: {
		tinypng_tmp: 		'./.gulp',
		dir: 				'./build',
		styles: 			'./build/css',
		images: 			'./build/img',
		content: 			'./build/img/content',
		favicons: 			'./build/img/favicons',
		fonts: 				'./build/fonts',
		libraries: 			'./build/js/libraries',
		plugins: 			'./build/js/plugins',
		scripts: 			'./build/js'
	},
	gulp: 			require('gulp'),
	del: 			require('del'),
	fs: 			require('fs'),
	browserSync: 	require('browser-sync').create(),
	buffer: 		require('vinyl-buffer'),
	merge: 			require('merge-stream'),
	lp: 			require('gulp-load-plugins')()
};

$.tasks.forEach(function(path) {
	require(path)();
});

// watch

$.gulp.task('watch', () => {
	$.gulp.watch($.dev.favicons, $.gulp.series('favicons'));
	$.gulp.watch($.dev.fonts, $.gulp.series('fonts'));
	$.gulp.watch($.dev.content, $.gulp.series('content:dev'));

	$.gulp.watch([
		$.dev.svg,
		$.dev.icons_scss_tpl
	], $.gulp.series('svg'));

	$.gulp.watch([
		$.dev.png,
		$.dev.sprite_scss_tpl
	], $.gulp.series('png:dev'));

	$.gulp.watch([
		$.dev.data,
		$.dev.pug
	], $.gulp.series('pug:dev'));

	$.gulp.watch($.dev.scss, $.gulp.series('scss:dev'));

	$.gulp.watch([
		$.dev.libraries,
		$.dev.plugins,
		$.dev.scripts
	], $.gulp.series('js:dev'));
});

// tasks

$.gulp.task('dev', $.gulp.series(
	'clean:before',
	$.gulp.parallel('favicons', 'fonts', 'content:dev', 'svg', 'png:dev'),
	$.gulp.parallel('pug:dev', 'scss:dev', 'js:dev'),
	'clean:after',
	$.gulp.parallel('server', 'watch')
));

$.gulp.task('build', $.gulp.series(
	'clean:before',
	$.gulp.parallel('favicons', 'fonts', 'content:build', 'svg', 'png:build'),
	$.gulp.parallel('pug:build', 'scss:build', 'js:build'),
	'clean:after',
	$.gulp.parallel('server', 'watch')
));

$.gulp.task('default', $.gulp.series('dev'));
