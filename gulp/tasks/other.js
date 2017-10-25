/*
	other - копирует favicon.png и robots.txt в build/
*/

module.exports = ()=> {
	$.gulp.task('other', () => {
		return $.gulp.src([
			'./source/favicon.png',
			'./source/robots.txt'
		])
			.pipe($.gulp.dest($.paths.baseDir))
	});
};
