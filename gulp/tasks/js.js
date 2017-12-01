module.exports = () => {

	$.gulp.task('js:dev', () => {
		var libraries = $.gulp.src($.dev.libraries)
			.pipe($.lp.concat('libraries.js'))
			.pipe($.gulp.dest($.build.libraries));

		var plugins = $.gulp.src($.dev.plugins)
			.pipe($.gulp.dest($.build.plugins));

		var scripts = $.gulp.src($.dev.scripts)
			.pipe($.lp.concat('scripts.js'))
			.pipe($.gulp.dest($.build.scripts));

		return $.merge(libraries, plugins, scripts)
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('js:build', () => {
		var libraries = $.gulp.src($.dev.libraries)
			.pipe($.lp.concat('libraries.min.js'))
			.pipe($.lp.uglifyes())
			.pipe($.gulp.dest($.build.libraries));

		var plugins = $.gulp.src($.dev.plugins)
			.pipe($.gulp.dest($.build.plugins));

		var scripts = $.gulp.src($.dev.scripts)
			.pipe($.lp.concat('scripts.min.js'))
			.pipe($.lp.uglifyes())
			.pipe($.gulp.dest($.build.scripts));

		return $.merge(libraries, plugins, scripts);
	});

}
