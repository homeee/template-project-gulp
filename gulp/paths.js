module.exports = {

	dev: {
		dir: 								'./source',

		data: 							require('./data.js'),

		index: 							'./source/pages/index.pug', // watcher

		pages: 							[
													'./source/pages/**/*.pug',
													'!./source/pages/index.pug',
												],
		layout: 						[
													'./source/**/*.pug', // watcher
													'!./source/pages/index.pug', // watcher
												],

		styles_part: 				'./source/_partials/_styles.pug',
		libraries_part: 		'./source/_partials/_libraries.pug',
		scripts_part: 			'./source/_partials/_scripts.pug',
		partials_tmp: 			'./source/_partials/_tmp',

		styles: 						'./source/pages/styles.scss',
		scss: 							'./source/**/*.scss', // watcher only

		scripts: 						'./source/scripts/*.js',
		libraries: 					require('./libraries.js'),
		plugins: 						require('./plugins.js'),

		content: {
			svg: 								'./source/media/content/*.svg',
			other: 							'./source/media/content/*.{jpeg,jpg,png,gif,bmp}',
			all: 								'./source/media/content/*.{jpeg,jpg,png,svg,gif,bmp}' // watcher only
		},

		appearance: {
			favicons: 					'./source/media/favicons/*.{ico,png}', // watcher
			fonts: 							'./source/media/fonts/**/*.{woff2,woff}', // watcher

			svg_icons: 					'./source/media/appearance/svg/icons/*.svg', // watcher
			// relative to $.paths.build.images + '/symbol'
				svg_sprite: 					'../sprite.svg',
				svg_sprite_dest: 			'../../../source/_helpers/_svg_sprite.scss',
			svg_sprite_tpl: 			'./source/_templates/_svg_sprite.scss', // watcher

			svg_to_png: 				'./source/media/appearance/svg/*.svg', // watcher
			png: 								'./source/media/appearance/*.png', // {jpeg,jpg,bmp,gif} & watcher
			// relative to $.paths.build.images
				png_sprite: 				'./sprite.png',
				png_sprite_dest: 		'../../source/_helpers/_png_sprite.scss',
			png_sprite_tpl: 		'./source/_templates/_png_sprite.scss' // watcher
		}
	},

	build: {
		tinypng_tmp: 				'./.gulp',
		dir: 								'./build',
		styles: 						'./build/css',
		images: 						'./build/img',
		content: 						'./build/img/content',
		favicons: 					'./build/img/favicons',
		fonts: 							'./build/fonts',
		scripts: 						'./build/js',
		libraries: 					'./build/js/libraries',
		plugins: 						'./build/js/plugins'
	}

};
