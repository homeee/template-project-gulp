/*
	clean - удаляет baseDir и .build/
*/

module.exports = ()=> {
	$.gulp.task('clean', ()=> {
		return $.del([
			$.paths.baseDir,
			'.build/'
		]);
	});
};
