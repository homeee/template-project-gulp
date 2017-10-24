/*
	other - копирует favicon.png и robots.txt в build/
	index - компилирует pug и копирует в build/
*/

module.exports = ()=> {
	$.gulp.task('other', () => {
		return $.gulp.src([
			'./source/favicon.png',
			'./source/robots.txt'
		])
			.pipe($.gulp.dest($.paths.baseDir))
	});

	$.gulp.task('index', ()=> {
		return $.gulp.src('./source/pages/index.pug')
			.pipe($.gp.pug({
				pretty: true
			}))
			.on('error', $.gp.notify.onError(function(error) {
				return {
					title: 'Pug',
					message: error.message
				};
			}))
			.pipe($.gulp.dest($.paths.baseDir))
	});
};
