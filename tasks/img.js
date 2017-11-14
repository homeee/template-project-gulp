/*
	img:dev - копирует файлы изображений оформления и контента в {baseDir}/img
	img:build - оптимизирует файлы изображений оформления и контента и копирует в {baseDir}/img
*/

module.exports = () => {

	$.gulp.task('img:dev', () => {
		return $.gulp.src('./source/media/appearance/*.{jpeg,jpg,png,gif}')
			.pipe($.gulp.dest($.baseDir + '/img'));

		return $.gulp.src('./source/media/content/*.{jpeg,jpg,png,svg,gif}')
			.pipe($.gulp.dest($.baseDir + '/img'));
	});

	$.gulp.task('img:build', () => {
		return $.gulp.src('./source/media/appearance/*.{jpeg,jpg,png,gif}')
			.pipe($.gp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.baseDir + '/img'));

		return $.gulp.src('./source/media/content/*.{jpeg,jpg,png,svg,gif}')
			.pipe($.gp.tinypng('1L0ljft7_aKIby5b_5QhL8ziQJ8MYCQH'))
			.pipe($.gulp.dest($.baseDir + '/img'));
	});

};
