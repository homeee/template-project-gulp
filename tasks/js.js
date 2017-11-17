/*



*/

module.exports = () => {

	$.gulp.task('js:dev', () => {
		var scripts = $.gulp.src($.paths.dev.scripts)
			.pipe($.gp.concat('scripts.js'))
			.pipe($.gulp.dest($.paths.build.scripts));

		var libraries = $.gulp.src($.paths.dev.libraries)
			.pipe($.gp.concat('libraries.js'))
			.pipe($.gulp.dest($.paths.build.libraries));

		var plugins = $.gulp.src($.paths.dev.plugins)
			.pipe($.gulp.dest($.paths.build.plugins));

		return merge(scripts, libraries, plugins)
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('js:build', () => {
		var scripts = $.gulp.src($.paths.dev.scripts)
			.pipe($.gp.concat('scripts.min.js'))
			.pipe($.gp.uglifyes())
			.pipe($.gulp.dest($.paths.build.scripts));

		var libraries = $.gulp.src($.paths.dev.libraries)
			.pipe($.gp.concat('libraries.min.js'))
			.pipe($.gp.uglifyes())
			.pipe($.gulp.dest($.paths.build.libraries));

		var plugins = $.gulp.src($.paths.dev.plugins)
			.pipe($.gulp.dest($.paths.build.plugins));

		return merge(scripts, libraries, plugins);
	});

}
