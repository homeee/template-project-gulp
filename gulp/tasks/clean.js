module.exports = ()=> {

	$.gulp.task('clean:before', ()=> {
		return $.del($.paths.build.dir);
	});

	$.gulp.task('clean:after', ()=> {
		return $.del([
			$.paths.dev.partials_tmp,
			$.paths.dev.appearance.tmp,
			$.paths.build.tinypng_tmp
		]);
	});

	function clear() {
		var a = $.fs.writeFileSync('./source/_helpers/_svg_sprite.scss', '');
		var b = $.fs.writeFileSync('./source/_helpers/_png_sprite.scss', '');

		return [a, b];
	}

	$.gulp.task('clear', $.gulp.series(clear));

};
