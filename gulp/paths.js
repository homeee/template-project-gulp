module.exports = {

	dev: {
		dir: 				'./source',

		data: 				require('./data.js'),

		index: 				'./source/pages/index.pug', // watcher

		pages: 				[
								'./source/pages/**/*.pug',
								'!./source/pages/index.pug',
							],
		pug: 				[ // watcher
								'./source/**/*.pug',
								'!./source/pages/index.pug',
							],

		styles: 			'./source/pages/styles.scss',
		scss: 				'./source/**/*.scss', // watcher

		libraries: 			require('./libraries.js'),
		plugins: 			require('./plugins.js'),
		scripts: 			'./source/scripts/*.js',

		content: {
			svg: 			'./source/media/content/*.svg',
			other: 			'./source/media/content/*.{jpeg,jpg,png,gif,bmp}',
			all: 			'./source/media/content/*.{jpeg,jpg,png,svg,gif,bmp}' // watcher
		},

		appearance: {
			favicons: 				'./source/media/favicons/*.{ico,png}', // watcher
			fonts: 					'./source/media/fonts/**/*.{woff2,woff}', // watcher

			svg_icons: 				'./source/media/appearance/svg/icons/*.svg', // watcher
			svg_sprite_tpl: 		'./source/_templates/_svg_sprite.scss', // watcher
			svg_sprite: 			'../sprite.svg', // relative to $.paths.build.images + '/symbol'
			svg_sprite_dest: 		'../../../source/_helpers/_svg_sprite.scss', // relative to $.paths.build.images + '/symbol'

			svg_to_png: 			'./source/media/appearance/svg/*.svg', // watcher
			folder: 				'./source/media/appearance/',
			png: 					'./source/media/appearance/*.png', // {jpeg,jpg,bmp,gif} & watcher
			png_sprite_tpl: 		'./source/_templates/_png_sprite.scss' // watcher
			png_sprite: 			'./sprite.png', // relative to $.paths.build.images
			png_sprite_dest: 		'../../source/_helpers/_png_sprite.scss', // relative to $.paths.build.images
		}
	},

	build: {
		tinypng_tmp: 		'./.gulp',
		dir: 				'./build',
		styles: 			'./build/css',
		images: 			'./build/img',
		content: 			'./build/img/content',
		favicons: 			'./build/img/favicons',
		fonts: 				'./build/fonts',
		scripts: 			'./build/js',
		libraries: 			'./build/js/libraries',
		plugins: 			'./build/js/plugins'
	}

};
