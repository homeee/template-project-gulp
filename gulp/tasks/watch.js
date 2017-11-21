module.exports = ()=> {

	$.gulp.task('watch', ()=> {
		$.gulp.watch($.paths.dev.index, $.gulp.series('index'));

		$.gulp.watch($.paths.dev.layout, $.gulp.series('ext:dev', 'pug'));

		$.gulp.watch($.paths.dev.scss, $.gulp.series('scss:dev'));

		$.gulp.watch([
			$.paths.dev.libraries,
			$.paths.dev.plugins,
			$.paths.dev.scripts
		], $.gulp.series('js:dev', 'plugins'));

		$.gulp.watch($.paths.dev.content.all, $.gulp.series('content:dev'));

		$.gulp.watch($.paths.dev.appearance.favicons, $.gulp.series('favicons'));

		$.gulp.watch($.paths.dev.appearance.fonts, $.gulp.series('fonts'));

		$.gulp.watch([
			$.paths.dev.appearance.svg_icons,
			$.paths.dev.appearance.svg_sprite_tpl
		], $.gulp.series('icons'));

		$.gulp.watch([
			$.paths.dev.appearance.svg_to_png,
			$.paths.dev.appearance.png,
			$.paths.dev.appearance.png_sprite_tpl
		], $.gulp.series('png:dev'));
	});

};
