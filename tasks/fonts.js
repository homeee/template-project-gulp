/*
	fonts - копирует файлы шрифтов в {baseDir}/fonts
*/

module.exports = ()=> {

	$.gulp.task('fonts', () => {
		return $.gulp.src('./source/media/fonts/**/*.{woff2,woff}')
			.pipe($.gulp.dest($.baseDir + '/fonts'))
	});

};
