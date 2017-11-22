module.exports = () => {

	$.gulp.task('js:dev', () => {
		var scripts = $.gulp.src($.paths.dev.scripts)
			.pipe($.lp.concat('scripts.js'))
			.pipe($.gulp.dest($.paths.build.scripts));

		var libraries = $.gulp.src($.paths.dev.libraries)
			.pipe($.lp.concat('libraries.js'))
			.pipe($.gulp.dest($.paths.build.libraries));

		return $.merge(scripts, libraries);
	});

	$.gulp.task('js:build', () => {
		var scripts = $.gulp.src($.paths.dev.scripts)
			.pipe($.lp.concat('scripts.min.js'))
			.pipe($.lp.uglifyes())
			.pipe($.gulp.dest($.paths.build.scripts));

		var libraries = $.gulp.src($.paths.dev.libraries)
			.pipe($.lp.concat('libraries.min.js'))
			.pipe($.lp.uglifyes())
			.pipe($.gulp.dest($.paths.build.libraries));

		return $.merge(scripts, libraries);
	});

	$.gulp.task('plugins', () => {
		return $.gulp.src($.paths.dev.plugins)
			.pipe($.gulp.dest($.paths.build.plugins));
	});

}
