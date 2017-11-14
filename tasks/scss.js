/*
	scss:dev - формирует sourcemaps, компилирует scss, добавляет автопрефиксы, переименовывает, выгружает в {baseDir}/css и обновляет страницу
	scss:build - компилирует scss, добавляет автопрефиксы, стандартизирует стиль кода, минифицирует, переименовывает и выгружает в {baseDir}/css
*/

module.exports = () => {

	$.gulp.task('scss:dev', () => {
		return $.gulp.src('./source/styles.scss')
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
			.pipe($.gp.rename('styles.min.css'))
			.pipe($.gulp.dest($.baseDir + '/css'))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('scss:build', () => {
		return $.gulp.src('./source/styles.scss')
			.pipe($.gp.sass({
				outputStyle: 'expanded'
			}))
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.cleanCss())
			.pipe($.gp.rename('styles.min.css'))
			.pipe($.gulp.dest($.baseDir + '/css'))
	});

};
