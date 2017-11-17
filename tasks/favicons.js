/*

	favicons - копирует $.paths.dev.favicons в $.paths.build.favicons

*/

module.exports = ()=> {

	$.gulp.task('favicons', () => {
		return $.gulp.src($.paths.dev.favicons)
			.pipe($.gulp.dest($.paths.build.favicons))
	});

};
