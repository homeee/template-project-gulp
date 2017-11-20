module.exports = () => {

	$.gulp.task('scss:dev', () => {
		return $.gulp.src($.paths.dev.styles)
			.pipe($.gp.sourcemaps.init())
				.pipe($.gp.sass({
					outputStyle: 'expanded'
				}))
			.pipe($.gp.sourcemaps.write())
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gp.rename('styles.css'))
			.pipe($.gulp.dest($.paths.build.styles));
	});

	$.gulp.task('scss:build', () => {
		return $.gulp.src($.paths.dev.styles)
			.pipe($.gp.sass({
				outputStyle: 'compressed'
			}))
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.cleanCss())
			.pipe($.gp.rename('styles.min.css'))
			.pipe($.gulp.dest($.paths.build.styles))
	});

};
