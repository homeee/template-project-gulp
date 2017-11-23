module.exports = () => {

	$.gulp.task('clean:before', () => {
		return $.del($.paths.build.dir);
	});

	$.gulp.task('clean:after', () => {
		return $.del([
			$.paths.dev.partials_tmp,
			$.paths.build.tinypng_tmp
		]);
	});

	$.gulp.task('clear', function(cb) {
		var svg_sprite = $.fs.writeFileSync('./source/_helpers/_svg_sprite.scss', '');
		var png_sprite = $.fs.writeFileSync('./source/_helpers/_png_sprite.scss', '');
		cb();

		return [svg_sprite, png_sprite];
	});

};
