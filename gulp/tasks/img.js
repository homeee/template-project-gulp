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
						sprite: $.paths.dev.icons_name,
						render: {
							scss: {
								template: $.paths.dev.icons_scss_tpl,
								dest: $.paths.dev.icons_scss_dest
							}
						}
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
				imgName: $.paths.dev.sprite_name,
				cssName: $.paths.dev.sprite_scss_name,
				cssTemplate: $.paths.dev.sprite_scss_tpl,
				padding: 2,
				algorithm: 'binary-tree'
			}));

		var imgStream = spriteData.img
			.pipe($.buffer())
			.pipe($.gulp.dest($.paths.build.images));

		var cssStream = spriteData.css
			.pipe($.gulp.dest($.paths.dev.partials));

		return $.merge(bg, imgStream, cssStream)
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('raster:build', () => {
		var bg = $.gulp.src($.paths.dev.bg)
			.pipe($.lp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.bg));

		var spriteData = $.gulp.src($.paths.dev.raster)
			.pipe($.lp.spritesmith({
				imgName: $.paths.dev.sprite_name,
				cssName: $.paths.dev.sprite_scss_name,
				cssTemplate: $.paths.dev.sprite_scss_tpl,
				padding: 2,
				algorithm: 'binary-tree'
			}));

		var imgStream = spriteData.img
			.pipe($.buffer())
			.pipe($.lp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.images));

		var cssStream = spriteData.css
			.pipe($.lp.csscomb())
			.pipe($.lp.cleanCss())
			.pipe($.gulp.dest($.paths.dev.partials));

		return $.merge(bg, imgStream, cssStream);
	});

};
