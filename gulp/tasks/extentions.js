module.exports = () => {

	$.gulp.task('extention:dev', () => {
		var styles = $.gulp.src($.paths.dev.styles_part)
			.pipe($.lp.replace('{ext}', 'css'))
			.pipe($.gulp.dest($.paths.dev.partials_tmp));

		var libraries = $.gulp.src($.paths.dev.libraries_part)
			.pipe($.lp.replace('{ext}', 'js'))
			.pipe($.gulp.dest($.paths.dev.partials_tmp));

		var scripts = $.gulp.src($.paths.dev.scripts_part)
			.pipe($.lp.replace('{ext}', 'js'))
			.pipe($.gulp.dest($.paths.dev.partials_tmp));

		return $.merge(styles, libraries, scripts);
	});

	$.gulp.task('extention:build', () => {
		var styles = $.gulp.src($.paths.dev.styles_part)
			.pipe($.lp.replace('{ext}', 'min.css'))
			.pipe($.gulp.dest($.paths.dev.partials_tmp));

		var libraries = $.gulp.src($.paths.dev.libraries_part)
			.pipe($.lp.replace('{ext}', 'min.js'))
			.pipe($.gulp.dest($.paths.dev.partials_tmp));

		var scripts = $.gulp.src($.paths.dev.scripts_part)
			.pipe($.lp.replace('{ext}', 'min.js'))
			.pipe($.gulp.dest($.paths.dev.partials_tmp));

		return $.merge(styles, libraries, scripts);
	});

}
