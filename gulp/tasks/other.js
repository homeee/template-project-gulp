module.exports = () => {

	$.gulp.task('favicons', () => {
		return $.gulp.src($.dev.favicons)
			.pipe($.gulp.dest($.build.favicons))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('fonts', () => {
		return $.gulp.src($.dev.fonts)
			.pipe($.gulp.dest($.build.fonts))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('content:dev', () => {
		return $.gulp.src($.dev.content)
			.pipe($.gulp.dest($.build.content))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('content:build', () => {
		return content = $.gulp.src($.dev.content)
			.pipe($.lp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.build.content));
	});

};
