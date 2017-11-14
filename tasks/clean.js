/*
	clean - удаляет {baseDir}/ и .gulp/
*/

module.exports = ()=> {

	$.gulp.task('clean', ()=> {
		return $.del([
			$.baseDir,
			'.gulp/' // tinypng temporary folder
		]);
	});

};
