module.exports = () => {

	$.gulp.task('icons', () => {
		return $.gulp.src($.paths.dev.appearance.svg_icons)
			.pipe($.gp.svgmin({
				js2svg: {
					pretty: true
				}
			}))
			.pipe($.gp.cheerio({
				run: function($) {
					$('[fill]').removeAttr('fill'); // Отключаем, для мультицветовых изображений
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: {
					xmlMode: true
				}
			}))
			.pipe($.gp.replace('&gt;', '>'))
			.pipe($.gp.svgSprite({
				mode: {
					symbol: {
						sprite: $.paths.dev.appearance.svg_sprite,
						render: {
							scss: {
								dest: $.paths.dev.appearance.svg_sprite_dest,
								template: $.paths.dev.appearance.svg_sprite_tpl
							}
						}
					}
				}
			}))
			.pipe($.gulp.dest($.paths.build.images));
	});

	$.gulp.task('png:dev', () => {
		var convertSvg = $.gulp.src($.paths.dev.appearance.svg_to_png)
			.pipe($.gp.raster())
			.pipe($.gp.rename({
				extname: '.png'
			}))
			.pipe($.gulp.dest($.paths.dev.appearance.tmp));

		var spriteData = $.gulp.src([
				$.paths.dev.appearance.tmp + '/*.png',
				$.paths.dev.appearance.png
			])
			.pipe($.gp.spritesmith({
				imgName: $.paths.dev.appearance.png_sprite,
				cssName: $.paths.dev.appearance.png_sprite_dest,
				cssTemplate: $.paths.dev.appearance.png_sprite_tpl
			}));

		var imgStream = spriteData.img
			.pipe($.buffer())
			.pipe($.gulp.dest($.paths.build.images));

		var cssStream = spriteData.css
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gulp.dest($.paths.build.styles));

		return $.merge(convertSvg, imgStream, cssStream);
	});

	$.gulp.task('png:build', () => {
		var convertSvg = $.gulp.src($.paths.dev.appearance.svg_to_png)
			.pipe($.gp.svgmin({
					js2svg: {
						pretty: true
					}
				}))
				.pipe($.gp.cheerio({
					run: function($) {
						// $('[fill]').removeAttr('fill'); // Отключаем, для мультицветовых изображений
						$('[stroke]').removeAttr('stroke');
						$('[style]').removeAttr('style');
					},
					parserOptions: {
						xmlMode: true
					}
				}))
			.pipe($.gp.replace('&gt;', '>'))
			.pipe($.gp.raster())
				.pipe($.gp.rename({
					extname: '.png'
			}))
			.pipe($.gulp.dest($.paths.dev.appearance.tmp));

		var spriteData = $.gulp.src([
				$.paths.dev.appearance.tmp + '/*.png',
				$.paths.dev.appearance.png
			])
			.pipe($.gp.spritesmith({
				imgName: $.paths.dev.appearance.png_sprite,
				cssName: $.paths.dev.appearance.png_sprite_dest,
				cssTemplate: $.paths.dev.appearance.png_sprite_tpl
			}));

		var imgStream = spriteData.img
			.pipe($.buffer())
			.pipe($.gp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.images));

		var cssStream = spriteData.css
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.cleanCss())
			.pipe($.gulp.dest($.paths.build.styles));

		return $.merge(convertSvg, imgStream, cssStream);
	});

};
