/*
	vendor:dev - объединяет js-файлы плагинов и библиотек в один vendor.js, выгружает в {baseDir}/js и обновляет страницу
	vendor:build - объединяет js-файлы плагинов и библиотек в один vendor.min.js, минифицирует и выгружает в {baseDir}/js

	scripts:devCopy - объединяет js-файлы верстки в один scripts.js, выгружает в {baseDir}/js и обновляет страницу
	scripts:buildCopy - объединяет js-файлы верстки в один scripts.min.js, минифицирует и выгружает в {baseDir}/js
*/

module.exports = () => {

	$.gulp.task('vendor:dev', () => {
		return $.gulp.src([
			'./source/scripts/vendor/jquery/dist/jquery.js',
			'./source/scripts/vendor/svg4everybody/dist/svg4everybody.js'
		])
			.pipe($.gp.concat('vendor.js'))
			.pipe($.gulp.dest($.baseDir + '/js'))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('vendor:build', () => {
		return $.gulp.src([
			'./source/scripts/vendor/jquery/dist/jquery.min.js',
			'./source/scripts/vendor/svg4everybody/dist/svg4everybody.min.js'
		])
			.pipe($.gp.concat('vendor.min.js'))
			.pipe($.gp.uglifyes())
			.pipe($.gulp.dest($.baseDir + '/js'))
	});

	$.gulp.task('scripts:devCopy', () => {
		return $.gulp.src('./source/scripts/*.js')
			.pipe($.gp.concat('scripts.js'))
			.pipe($.gulp.dest($.baseDir + '/js'))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('scripts:buildCopy', () => {
		return $.gulp.src('./source/scripts/*.js')
			.pipe($.gp.concat('scripts.min.js'))
			.pipe($.gp.uglifyes())
			.pipe($.gulp.dest($.baseDir + '/js'))
	});

}
