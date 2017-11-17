/*

	fonts - копирует $.paths.dev.fonts в $.paths.build.fonts

*/

module.exports = ()=> {

	$.gulp.task('fonts', () => {
		return $.gulp.src($.paths.dev.fonts)
			.pipe($.gulp.dest($.paths.build.fonts))
	});

};
