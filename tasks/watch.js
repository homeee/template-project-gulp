/*
	watch - следит за изменениями в файлах
		*.gulp, *.json
		*.scss
		*.js
		*.svg
		*.png, *.jpeg, *.jpg, *.gif
*/

module.exports = ()=> {

	$.gulp.task('watch', ()=> {
		$.gulp.watch([
			'./source/**/*.pug',
			'./source/_data/*.json'
		], $.gulp.series('pug'));
		$.gulp.watch('./source/**/*.scss', $.gulp.series('scss:dev'));
		$.gulp.watch('./source/scripts/*.js', $.gulp.series('scripts:dev', 'scripts:devCopy'));
		$.gulp.watch('./source/media/appearance/svg/*.svg', $.gulp.series('svg'));
		$.gulp.watch('./source/media/**/*.{png,jpeg,jpg,gif}', $.gulp.series('img:dev'));
	});

};
