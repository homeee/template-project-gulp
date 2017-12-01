module.exports = () => {

	$.gulp.task('svg', () => {
		return $.gulp.src($.dev.svg)
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
						sprite: $.dev.icons_name,
						render: {
							scss: {
								template: $.dev.icons_scss_tpl,
								dest: $.dev.icons_scss_dest
							}
						}
					}
				}
			}))
			.pipe($.gulp.dest($.build.images))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('png:dev', () => {
		var spriteData = $.gulp.src($.dev.png)
			.pipe($.lp.spritesmith({
				imgName: $.dev.sprite_name,
				cssName: $.dev.sprite_scss_name,
				cssTemplate: $.dev.sprite_scss_tpl,
				padding: 2
			}));

		var imgStream = spriteData.img
			.pipe($.buffer())
			.pipe($.gulp.dest($.build.images));

		var cssStream = spriteData.css
			.pipe($.gulp.dest($.dev.sprite_scss_dest));

		return $.merge(imgStream, cssStream)
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('png:build', () => {
		var spriteData = $.gulp.src($.dev.png)
			.pipe($.lp.spritesmith({
				imgName: $.dev.sprite_name,
				cssName: $.dev.sprite_scss_name,
				cssTemplate: $.dev.sprite_scss_tpl
			}));

		var imgStream = spriteData.img
			.pipe($.buffer())
			.pipe($.lp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.build.images));

		var cssStream = spriteData.css
			.pipe($.lp.csscomb())
			.pipe($.lp.cleanCss())
			.pipe($.gulp.dest($.dev.sprite_scss_dest));

		return $.merge(imgStream, cssStream);
	});

};
