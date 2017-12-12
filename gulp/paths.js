module.exports = {

	dev: {
		helpers: 			'./source/_helpers/',
		partials: 			'./source/_partials/',

		data: 				'./source/pages/_data.json',
		pages: 				'./source/pages/*.pug',
		pug: 				'./source/**/*.pug',

		styles: 			'./source/pages/styles.scss',
		scss: [
							'./source/**/*.scss',
							'!source/{_partials,_templates}/{_icons,_sprite}.scss',
		],

		scripts: 			'./source/scripts/*.js',

		favicons: 			'./source/media/favicons/*.{ico,png}',
		fonts: 				'./source/media/fonts/**/*.{woff2,woff}',
		content_svg: 		'./source/media/content/*.svg',
		content_raster: 	'./source/media/content/*.{jpeg,jpg,png,bmp}',

		vector: 			'./source/media/appearance/svg/*.svg',
		// relative to $.paths.build.img + '/symbol'
			icons_name: 		'../icons.svg',
			icons_scss_dest: 	'../../../source/_partials/_icons.scss',
		icons_scss_tpl: 	'./source/_templates/_icons.scss',

		raster: 			'./source/media/appearance/*.{jpeg,jpg,png,bmp}',
		sprite_name: 		'sprite.png',
		sprite_scss_name: 	'_sprite.scss',
		sprite_scss_tpl: 	'./source/_templates/_sprite.scss',
		bg: 				'./source/media/appearance/bg/*.{jpeg,jpg,png,bmp}'
	},

	build: {
		tinypng_tmp: 		'./.gulp',
		dir: 				'./build',
		styles: 			'./build/css',
		images: 			'./build/img',
		bg: 				'./build/img/bg/',
		content: 			'./build/img/content',
		favicons: 			'./build/img/favicons',
		fonts: 				'./build/fonts',
		libraries: 			'./build/js/libraries',
		plugins: 			'./build/js/plugins',
		scripts: 			'./build/js'
	}

};
