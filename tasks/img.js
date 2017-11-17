/*

	img:dev - конвертирует в png файлы изображений оформления $.paths.dev.apperiance, создает спрайт, копирует в $.paths.build.images и $.paths.build.styles соответственно; копирует в $.paths.build.content файлы контента $.paths.dev.content

	img:build - конвертирует в png файлы изображений оформления $.paths.dev.apperiance, создает спрайт, оптимизирует, копирует в $.paths.build.images и $.paths.build.styles соответственно; оптимизирует и копирует в $.paths.build.content файлы контента $.paths.dev.content

*/

module.exports = () => {

	$.gulp.task('img:dev', () => {
		var spriteData = $.gulp.src($.paths.dev.apperiance)
			.pipe($.gp.svg2png())
			.pipe($.gp.spritesmith({
				imgName: 'sprite.png',
				cssName: 'sprite.scss'
			}));
		var imgStream = spriteData.img
			.pipe(buffer())
			.pipe($.gulp.dest($.paths.build.images));
		var cssStream = spriteData.css
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe(gulp.dest($.paths.build.styles));
		return merge(imgStream, cssStream);

		return $.gulp.src($.paths.dev.content)
			.pipe($.gulp.dest($.paths.build.content));
	});

	$.gulp.task('img:build', () => {
		var spriteData = $.gulp.src($.paths.dev.apperiance)
			.pipe($.gp.svg2png())
			.pipe($.gp.spritesmith({
				imgName: 'sprite.png',
				cssName: 'sprite.scss'
			}));
		var imgStream = spriteData.img
			.pipe(buffer())
			.pipe($.gp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.images));
		var cssStream = spriteData.css
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.cleanCss())
			.pipe(gulp.dest($.paths.build.styles));
		return merge(imgStream, cssStream);

		return $.gulp.src($.paths.dev.content)
			.pipe($.gp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.content));
	});

};
