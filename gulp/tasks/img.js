module.exports = () => {

	$.gulp.task('icons', () => {
		return $.gulp.src($.paths.dev.icons)
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
						sprite: $.paths.dev.icons_img,
						render: {
							scss: {
								template: $.paths.dev.icons_styles_tpl,
								dest: $.paths.dev.icons_styles_dest
							}
						}
					}
				}
			}))
			.pipe($.gulp.dest($.paths.build.images))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('png:dev', () => {
		var spriteData = $.gulp.src($.paths.dev.png)
			.pipe($.lp.spritesmith({
				imgName: $.paths.dev.sprite_img,
				cssName: $.paths.dev.sprite_styles_name,
				cssTemplate: $.paths.dev.sprite_styles_tpl,
				padding: 2
			}));

		var imgStream = spriteData.img
			.pipe($.buffer())
			.pipe($.gulp.dest($.paths.build.images));

		var cssStream = spriteData.css
			.pipe($.gulp.dest($.paths.dev.sprite_styles_dest));

		return $.merge(imgStream, cssStream);
	});

	$.gulp.task('png:build', () => {
		var spriteData = $.gulp.src($.paths.dev.png)
			.pipe($.lp.spritesmith({
				imgName: $.paths.dev.png_sprite,
				cssName: $.paths.dev.png_sprite_dest,
				cssTemplate: $.paths.dev.png_sprite_tpl
			}));

		var imgStream = spriteData.img
			.pipe($.buffer())
			.pipe($.lp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.images));

		var cssStream = spriteData.css
			.pipe($.lp.csscomb())
			.pipe($.lp.cleanCss())
			.pipe($.gulp.dest($.paths.dev.sprite_styles_dest));

		return $.merge(imgStream, cssStream);
	});

};
