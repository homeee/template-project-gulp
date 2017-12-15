module.exports = () => {

	$.gulp.task('vector', () => {
		return $.gulp.src($.paths.dev.vector)
			.pipe($.lp.svgmin({
				js2svg: {pretty: true}
			}))
			.pipe($.lp.cheerio({
				run: function($) {
					// $('[fill]').removeAttr('fill');
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: {xmlMode: true}
			}))
			.pipe($.lp.replace('&gt;', '>'))
			.pipe($.lp.svgSprite({
				mode: {
					symbol: {
						sprite: $.paths.dev.icons_name
					}
				}
			}))
			.pipe($.gulp.dest($.paths.build.images))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('raster:dev', () => {
		var bg = $.gulp.src($.paths.dev.bg)
			.pipe($.gulp.dest($.paths.build.bg));

		var spriteData = $.gulp.src($.paths.dev.raster)
			.pipe($.lp.spritesmith({
				retinaSrcFilter: $.paths.dev.raster2x_filter,
				imgName: $.paths.dev.sprite_name,
				retinaImgName: $.paths.dev.sprite2x_name,
				cssName: $.paths.dev.sprite_scss_name,
				cssOpts: {
					cssSelector: function (sprite) {
						return '.sprite-' + sprite.name;
					}
				},
				padding: 2
			}));

		var imgStream = spriteData.img
			.pipe($.buffer())
			.pipe($.gulp.dest($.paths.build.images));

		var cssStream = spriteData.css
			.pipe($.gulp.dest($.paths.dev.helpers));

		return $.merge(bg, imgStream, cssStream)
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('raster:build', () => {
		var bg = $.gulp.src($.paths.dev.bg)
			.pipe($.lp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.bg));

		var spriteData = $.gulp.src($.paths.dev.raster)
			.pipe($.lp.spritesmith({
				retinaSrcFilter: $.paths.dev.raster2x_filter,
				imgName: $.paths.dev.sprite_name,
				retinaImgName: $.paths.dev.sprite2x_name,
				cssName: $.paths.dev.sprite_scss_name,
				cssOpts: {
					cssSelector: function (sprite) {
						return '.sprite-' + sprite.name;
					}
				},
				padding: 2
			}));

		var imgStream = spriteData.img
			.pipe($.buffer())
			.pipe($.lp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.images));

		var cssStream = spriteData.css
			.pipe($.lp.csscomb())
			.pipe($.lp.cleanCss())
			.pipe($.gulp.dest($.paths.dev.helpers));

		return $.merge(bg, imgStream, cssStream);
	});

};