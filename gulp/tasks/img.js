/*
	img:dev - копирует файлы изображений в build/
	img:build - оптимизирует файлы изображений и копирует в build/
*/

module.exports = () => {
	$.gulp.task('img:dev', () => {
		return $.gulp.src('./source/media/**/*.{png,jpg,gif}')
			.pipe($.gulp.dest($.paths.baseDir + '/img'));
	});

	$.gulp.task('img:build', () => {
		return $.gulp.src('./source/media/**/*.{png,jpg,gif}')
			.pipe($.gp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.paths.baseDir + '/img'));
	});
};
