/*
	svg - минифицирует, чистит, создает спрайт по шаблону, создает css-файл со стилями и выгружает в {baseDir}/img
*/

module.exports = () => {

	$.gulp.task('svg', () => {
		return $.gulp.src('./source/media/appearance/svg/*.svg')
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
						sprite: '../sprites.svg',
						render: {
							scss: {
								dest:'../../../source/_helpers/_sprites.scss',
								template: './source/_templates/_sprites.scss'
							}
						}
					}
				}
			}))
			.pipe($.gulp.dest($.baseDir + '/img'));
	});

};
