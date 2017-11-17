/*

	watch - следит за изменениями в файлах
		$.paths.dev.pug и $.paths.dev.data
		$.paths.dev.scss
		$.paths.dev.svg
		$.paths.dev.libraries
		$.paths.dev.plugins
		$.paths.dev.scripts
		$.paths.dev.apperiance
		$.paths.dev.content
		$.paths.dev.favicons
		$.paths.dev.fonts
	и запускает соответствующие задачи

*/

module.exports = ()=> {

	$.gulp.task('watch', ()=> {
		$.gulp.watch([
			$.paths.dev.pug,
			$.paths.dev.data
		], $.gulp.series('pug:dev', 'ext:dev'));

		$.gulp.watch($.paths.dev.scss, $.gulp.series('scss:dev'));

		$.gulp.watch($.paths.dev.svg, $.gulp.series('svg'));

		$.gulp.watch([
			$.paths.dev.libraries,
			$.paths.dev.plugins,
			$.paths.dev.scripts
		], $.gulp.series('js:dev'));

		$.gulp.watch([
			$.paths.dev.apperiance,
			$.paths.dev.content
		], $.gulp.series('img:dev'));

		$.gulp.watch($.paths.dev.favicons, $.gulp.series('favicons'));
		$.gulp.watch($.paths.dev.fonts, $.gulp.series('fonts'));
	});

};
