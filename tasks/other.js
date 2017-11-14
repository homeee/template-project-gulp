/*
	other - копирует favicons/* и robots.txt в {baseDir}/
*/

module.exports = ()=> {

	$.gulp.task('other', () => {
		return $.gulp.src([
			'./source/media/appearance/favicons/*',
			'./source/robots.txt'
		])
			.pipe($.gulp.dest($.baseDir))
	});

};
