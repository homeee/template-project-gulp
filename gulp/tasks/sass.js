/*
	sass:dev - формирует sourcemaps, компилирует sass, добавляет автопрефиксы, переименовывает, выгружает в build/ и обновляет страницу
	sass:build - компилирует sass, добавляет автопрефиксы, стандартизирует стиль кода, минифицирует, переименовывает и выгружает в build/
*/

module.exports = () => {
	$.gulp.task('sass:dev', () => {
		return $.gulp.src('./source/main.sass')
			.pipe($.gp.sourcemaps.init())
				.pipe($.gp.sass({
					outputStyle: 'expanded'
				}))
				.on('error', $.gp.notify.onError(function (error) {
					return {
						title: 'sass',
						message: error.message
					};
				}))
			.pipe($.gp.sourcemaps.write())
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gp.rename('main.min.css'))
			.pipe($.gulp.dest($.paths.baseDir + '/css'))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('sass:build', () => {
		return $.gulp.src('./source/main.sass')
			.pipe($.gp.sass({
				outputStyle: 'expanded'
			}))
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.cleanCss())
			.pipe($.gp.rename('main.min.css'))
			.pipe($.gulp.dest($.paths.baseDir + '/css'))
	});
};
