module.exports = {

	dev: {
		data: 					'./source/pages/_data.json',
		pages: 					'./source/pages/**/*.pug',
		pug: 					'./source/**/*.pug',

		styles: 				'./source/pages/styles.scss',
		scss: 					[
									'./source/**/*.scss',
									// '!./source/{_helpers,_templates}/{_icons,_sprite}.scss'
									'!source/_templates/_sprite.scss',
									'!source/_templates/_icons.scss',
									'!source/_helpers/_sprite.scss',
									'!source/_helpers/_icons.scss'
								],

		libraries: 				require('./libraries.js'),
		plugins: 				require('./plugins.js'),
		scripts: 				'./source/scripts/*.js',

		favicons: 				'./source/media/favicons/*.{ico,png}',
		fonts: 					'./source/media/fonts/**/*.{woff2,woff}',
		content: 				'./source/media/content/*.{jpeg,jpg,png,svg,gif,bmp}',

		icons: 					'./source/media/appearance/icons/*.svg',
		icons_styles_tpl: 		'./source/_templates/_icons.scss',
		// relative to $.paths.build.images + '/symbol'
		icons_img: 				'../icons.svg',
		icons_styles_dest: 		'../../../source/_helpers/_icons.scss',

		png: 					'./source/media/appearance/*.png',
		sprite_styles_tpl: 		'./source/_templates/_sprite.scss',
		sprite_styles_name: 	'_sprite.scss',
		sprite_img: 			'../img/sprite.png',
		sprite_styles_dest: 	'./source/_helpers/'
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
	}

};
