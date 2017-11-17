/*

	svg - минифицирует, чистит, создает спрайт по шаблону, создает css-файл со стилями и выгружает в $.paths.build.images

*/

module.exports = () => {

	$.gulp.task('svg', () => {
		return $.gulp.src($.paths.dev.svg)
			.pipe($.gp.svgmin({
				js2svg: {
					pretty: true
				}
			}))
			.pipe($.gp.cheerio({
				run: function($) {
					// $('[fill]').removeAttr('fill'); // Отключаем, для цветных изображений
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
						sprite: $.paths.dev.svg_sprite,
						render: {
							scss: {
								dest: $.paths.dev.svg_sprite_dest,
								template: $.paths.dev.svg_sprite_tpl
							}
						}
					}
				}
			}))
			.pipe($.gulp.dest($.paths.build.images));
	});

};
