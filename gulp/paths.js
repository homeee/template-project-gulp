module.exports = {

	dev: {
		helpers: 				'./source/_helpers/',

		data: 					'./source/pages/_data.json',
		pages: 					'./source/pages/*.pug',
		pug: 					'./source/**/*.pug',

		styles: 				'./source/pages/styles.scss',
		scss: [
								'./source/**/*.scss',
								'!source/{_partials,_templates}/{_icons,_sprite}.scss',
		],

		scripts: 				'./source/scripts/*.js',

		favicons: 				'./source/media/favicons/*.{ico,png}',
		fonts: 					'./source/media/fonts/**/*.{woff2,woff}',
		content_svg: 			'./source/media/content/*.svg',
		content_raster: 		'./source/media/content/*.{jpeg,jpg,png}',

		vector: 				'./source/media/appearance/svg/*.svg',
		// relative to $.paths.build.img + '/symbol'
			icons_name: 			'../icons.svg',

		raster: 				'./source/media/appearance/*.{jpeg,jpg,png}',
		raster2x_filter: 		'./source/media/appearance/*@2x.{jpeg,jpg,png}',
		// relative to $.paths.build.styles
			sprite_name: 			'../img/sprite.png',
			sprite2x_name: 			'../img/sprite@2x.png',
		sprite_scss_name: 		'_sprite.scss',
		sprite_scss_tpl: 		'./source/_templates/_scss_retina.template.handlebars',

		bg: 					'./source/media/appearance/bg/*.{jpeg,jpg,png}'
	},

	build: {
		tinypng_tmp: 			'./.gulp',
		dir: 					'./build',
		styles: 				'./build/css',
		images: 				'./build/img',
		bg: 					'./build/img/bg/',
		content: 				'./build/img/content',
		favicons: 				'./build/img/favicons',
		fonts: 					'./build/fonts',
		libraries: 				'./build/js/libraries',
		plugins: 				'./build/js/plugins',
		scripts: 				'./build/js'
	}

};
