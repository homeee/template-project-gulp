/*

	scss:dev - формирует sourcemaps и компилирует scss-файлы $.paths.dev.styles, добавляет автопрефиксы, переименовывает, выгружает в $.paths.build.styles и обновляет страницу

	scss:build - компилирует scss-файлы $.paths.dev.styles, добавляет автопрефиксы, стандартизирует стиль кода, минифицирует, переименовывает и выгружает в $.paths.build.styles

*/

module.exports = () => {

	$.gulp.task('scss:dev', () => {
		return $.gulp.src($.paths.dev.styles)
			.pipe($.gp.sourcemaps.init())
				.pipe($.gp.sass({
					outputStyle: 'expanded'
				}))
				.on('error', $.gp.notify.onError(function (error) {
					return {
						title: 'scss',
						message: error.message
					};
				}))
			.pipe($.gp.sourcemaps.write())
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gp.rename('styles.css'))
			.pipe($.gulp.dest($.paths.build.styles))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('scss:build', () => {
		return $.gulp.src($.paths.dev.styles)
			.pipe($.gp.sass({
				outputStyle: 'expanded'
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
