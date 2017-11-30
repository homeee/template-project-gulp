module.exports = () => {

	$.gulp.task('watch', () => {
		$.gulp.watch($.paths.dev.favicons, $.gulp.series('favicons'));
		$.gulp.watch($.paths.dev.fonts, $.gulp.series('fonts'));
		$.gulp.watch($.paths.dev.content, $.gulp.series('content:dev'));

		$.gulp.watch([
			$.paths.dev.icons,
			$.paths.dev.icons_styles_tpl
		], $.gulp.series('icons'));

		$.gulp.watch([
			$.paths.dev.png,
			$.paths.dev.sprite_styles_tpl
		], $.gulp.series('png:dev'));

		$.gulp.watch([
			$.paths.dev.data,
			$.paths.dev.pug
		], $.gulp.series('pug:dev'));

		$.gulp.watch($.paths.dev.scss, $.gulp.series('scss:dev'));

		$.gulp.watch([
			$.paths.dev.libraries,
			$.paths.dev.plugins,
			$.paths.dev.scripts
		], $.gulp.series('js:dev'));
	});

};
