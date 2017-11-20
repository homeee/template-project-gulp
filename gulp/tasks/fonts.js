module.exports = ()=> {

	$.gulp.task('fonts', () => {
		return $.gulp.src($.paths.dev.appearance.fonts)
			.pipe($.gulp.dest($.paths.build.fonts));
	});

};
