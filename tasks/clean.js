/*

	clean - удаляет $.paths.build.dir и $.paths.build.dir

*/

module.exports = ()=> {

	$.gulp.task('clean', ()=> {
		return $.del([
			$.build.tmp, // tinypng temporary folder
			$.build.dir
		]);
	});

};
