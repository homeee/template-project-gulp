'use strict';

global.$ = {
	  gulp: 									require('gulp')
	, del: 										require('del')
	, fs: 										require('fs')
	, browserSync: 						require('browser-sync').create()
	, gp: 										require('gulp-load-plugins')()
	, paths: {
		dev: {
			  dir: 								'./source'

			, data: 							'./source/_data/*.json'
			, pug: 								'./source/**/*.pug'
			, styles_part: 				'./source/_partials/_styles.pug'
			, scripts_part: 			'./source/_partials/_scripts.pug'

			, styles: 						'./source/pages/styles.scss'
			, scss: 							'./source/**/*.scss'

			, svg: 								'./source/media/appearance/svg/icons/*.svg'
			, svg_sprite: 				'../sprite.svg'
			, svg_sprite_dest: 		'../../source/_helpers/_icons.scss'
			, svg_sprite_tpl: 		'./source/_templates/_icons.scss'
			, apperiance: 				[
															  './source/media/appearance/svg/.svg'
															, './source/media/appearance/*.png' // jpeg,jpg,bmp,gif?
														]
			, content: 						'./source/media/content/*.{jpeg,jpg,png,svg,gif,bmp}'
			, favicons: 					'./source/media/favicons/*.{ico,png}'
			, fonts: 							'./source/media/fonts/**/*.{woff2,woff}'

			, scripts: 						'./source/scripts/*.js'
			, libraries: 					[
															  './source/scripts/vendor/jquery/dist/jquery.js'
															, './source/scripts/vendor/svg4everybody/dist/svg4everybody.js'
														]
			, plugins: 						[
														  './source/scripts/vendor/bx-slider.js/dist/jquery.bxslider.min.js'
														]
		},
		build: {
			  tmp: 							'./.gulp'
			, dir: 							'./build'
			, styles: 					'./build/css'
			, images: 					'./build/img'
			, content: 					'./build/img/content'
			, favicons: 				'./build/img/favicons'
			, fonts: 						'./build/fonts'
			, scripts: 					'./build/js'
			, libraries: 				'./build/js/libraries'
			, plugins: 					'./build/js/plugins'
		}
	}
	, tasks: 	[
						  './tasks/serv'
						, './tasks/watch'
						, './tasks/clean'
						, './tasks/pug'
						, './tasks/scss'
						, './tasks/js'
						, './tasks/svg'
						, './tasks/img'
						, './tasks/fonts'
						, './tasks/favicons',
						, './tasks/ext'
					]
};

$.tasks.forEach(function(path) {
	require(path)();
});

$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel('ext:dev', 'svg', 'img:dev', 'pug:dev', 'scss:dev', 'js:dev' 'fonts', 'favicons')
));

$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel('ext:build', 'svg', 'img:build', 'pug:build', 'scss:build', 'js:build', 'fonts', 'favicons'),
	'serv'
));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel('serv', 'watch')
));
