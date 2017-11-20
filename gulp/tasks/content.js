module.exports = () => {

	$.gulp.task('content:dev', () => {
		return $.gulp.src($.paths.dev.content.all)
			.pipe($.gulp.dest($.paths.build.images));
	});

	$.gulp.task('content:build', () => {
		var contentSvg = $.gulp.src($.paths.dev.content.svg)
			.pipe($.gp.svgmin({
				js2svg: {
					pretty: true
				}
			}))
			.pipe($.gp.cheerio({
				run: function($) {
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: {
					xmlMode: true
				}
			}))
			.pipe($.gp.replace('&gt;', '>'))
			.pipe($.gulp.dest($.paths.build.images));

		var content = $.gulp.src($.paths.dev.content.other)
			.pipe($.gp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.images));

		return $.merge(contentSvg, content);
	});

};
