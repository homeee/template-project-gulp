/*
	fonts - копирует файлы шрифтов в build/
*/

module.exports = ()=> {
	$.gulp.task('fonts', () => {
		return $.gulp.src('./source/media/fonts/**/*.{woff2,woff}')
			.pipe($.gulp.dest($.paths.baseDir + '/fonts'))
	});
};
