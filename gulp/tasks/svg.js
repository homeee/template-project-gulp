/*
	svg - минифицирует, чистит, создает спрайт по шаблону, создает css-файл со стилями и выгружает в build/
*/

module.exports = () => {
	$.gulp.task('svg', () => {
		return $.gulp.src('./source/media/design/svg/*.svg')
			.pipe($.gp.svgmin({
				js2svg: {
					pretty: true
				}
			}))
			.pipe($.gp.cheerio({
				run: function($) {
					// $('[fill]').removeAttr('fill'); // отключаем, для цветных изображений
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
						sprite: '../sprite.svg',
						render: {
							sass: {
								dest:'../../../source/helpers/sprite.sass',
								template: './source/templates/sprite.sass'
							}
						}
					}
				}
			}))
			.pipe($.gulp.dest($.paths.baseDir + '/img'));
	});
};
