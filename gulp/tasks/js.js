module.exports = () => {

	$.gulp.task('js:dev', () => {
		var libraries = $.gulp.src($.settings.libraries)
			.pipe($.lp.concat('libraries.js'))
			.pipe($.gulp.dest($.paths.build.libraries));

		var plugins = $.gulp.src($.settings.plugins)
			.pipe($.gulp.dest($.paths.build.plugins));

		var scripts = $.gulp.src($.paths.dev.scripts)
			.pipe($.lp.concat('scripts.js'))
			.pipe($.gulp.dest($.paths.build.scripts));

		return $.merge(libraries, plugins, scripts)
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('js:build', () => {
		var libraries = $.gulp.src($.settings.libraries)
			.pipe($.lp.concat('libraries.min.js'))
			.pipe($.lp.uglifyes())
			.pipe($.gulp.dest($.paths.build.libraries));

		var plugins = $.gulp.src($.settings.plugins)
			.pipe($.gulp.dest($.paths.build.plugins));

		var scripts = $.gulp.src($.paths.dev.scripts)
			.pipe($.lp.concat('scripts.min.js'))
			.pipe($.lp.uglifyes())
			.pipe($.gulp.dest($.paths.build.scripts));

		return $.merge(libraries, plugins, scripts);
	});

}
