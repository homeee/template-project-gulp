module.exports = () => {

	$.gulp.task('scss:dev', () => {
		return $.gulp.src($.paths.dev.styles)
			.pipe($.lp.sourcemaps.init())
				.pipe($.lp.sass({
					outputStyle: 'expanded'
				}))
			.pipe($.lp.sourcemaps.write())
			.pipe($.lp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.lp.rename('styles.css'))
			.pipe($.gulp.dest($.paths.build.styles))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('scss:build', () => {
		return $.gulp.src($.paths.dev.styles)
			.pipe($.lp.sass({
				outputStyle: 'compressed'
			}))
			.pipe($.lp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.lp.csscomb())
			.pipe($.lp.cleanCss())
			.pipe($.lp.rename('styles.min.css'))
			.pipe($.gulp.dest($.paths.build.styles))
	});

};
