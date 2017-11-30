module.exports = () => {

	$.gulp.task('favicons', () => {
		return $.gulp.src($.paths.dev.favicons)
			.pipe($.gulp.dest($.paths.build.favicons))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('fonts', () => {
		return $.gulp.src($.paths.dev.fonts)
			.pipe($.gulp.dest($.paths.build.fonts))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('content:dev', () => {
		return $.gulp.src($.paths.dev.content)
			.pipe($.gulp.dest($.paths.build.content))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('content:build', () => {
		return content = $.gulp.src($.paths.dev.content)
			.pipe($.lp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.build.content));
	});

};
