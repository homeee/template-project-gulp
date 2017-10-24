/*
	watch - следит за изменениями в файлах
		*.gulp, *.json
		*.sass
		*.js
		*.svg
		*.png, *.jpg, *.gif
*/

module.exports = ()=> {
	$.gulp.task('watch', ()=> {
		$.gulp.watch([
			'./source/**/*.pug',
			'./source/data/*.json'
		], $.gulp.series('pug'));
		$.gulp.watch('./source/**/*.sass', $.gulp.series('sass:dev'));
		$.gulp.watch('./source/scripts/*.js', $.gulp.series('js:dev', 'js:devCopy'));
		$.gulp.watch('./source/media/design/svg/*.svg', $.gulp.series('svg'));
		$.gulp.watch('./source/media/**/*.{png,jpg,gif}', $.gulp.series('img:dev'));
	});
};
