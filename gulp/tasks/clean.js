module.exports = () => {

	$.gulp.task('clean:before', () => {
		return $.del($.build.dir);
	});

	$.gulp.task('clean:after', () => {
		return $.del($.build.tinypng_tmp);
	});

};
