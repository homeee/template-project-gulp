/*
	js:dev - объединяет js-файлы плагинов в один libs.min.js, выгружает в baseDir и обновляет страницу
	js:build - объединяет js-файлы плагинов в один libs.min.js, минифицирует и выгружает в baseDir

	js:devCopy - объединяет js-файлы верстки в один main.js, выгружает в baseDir и обновляет страницу
	js:buildCopy - объединяет js-файлы верстки в один main.js, минифицирует и выгружает в baseDir
*/

module.exports = () => {
	$.gulp.task('js:dev', () => {
		return $.gulp.src([
			'./source/scripts/vendor/jquery/dist/jquery.min.js',
			'./source/scripts/vendor/svg4everybody/dist/svg4everybody.min.js'
		])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gulp.dest($.paths.baseDir + '/js'))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('js:build', () => {
		return $.gulp.src([
			'./source/scripts/vendor/jquery/dist/jquery.min.js',
			'./source/scripts/vendor/svg4everybody/dist/svg4everybody.min.js'
		])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gp.uglify())
			.pipe($.gulp.dest($.paths.baseDir + '/js'))
	});

	$.gulp.task('js:devCopy', () => {
		return $.gulp.src([
			'./source/scripts/*.js',
			'!./source/scripts/libs.min.js'
		])
			.pipe($.gp.concat('main.min.js'))
			.pipe($.gulp.dest($.paths.baseDir + '/js'))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('js:buildCopy', () => {
		return $.gulp.src([
			'./source/scripts/*.js',
			'!./source/scripts/libs.min.js'
		])
			.pipe($.gp.concat('main.min.js'))
			.pipe($.gp.uglify())
			.pipe($.gulp.dest($.paths.baseDir + '/js'))
	});
}
