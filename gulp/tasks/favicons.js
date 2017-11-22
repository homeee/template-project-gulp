module.exports = () => {

	$.gulp.task('favicons', () => {
		return $.gulp.src($.paths.dev.appearance.favicons)
			.pipe($.gulp.dest($.paths.build.favicons));
	});

};
