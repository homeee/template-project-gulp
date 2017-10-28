/*
	clean - удаляет baseDir и .gulp/
*/

module.exports = ()=> {
	$.gulp.task('clean', ()=> {
		return $.del([
			$.paths.baseDir,
			'.gulp/' // tinypng temporary folder
		]);
	});
};
