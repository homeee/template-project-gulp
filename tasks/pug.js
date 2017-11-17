/*

	pug:dev - подключает json-данные $.paths.dev.data, компилирует pug-файлы $.paths.dev.pug, выгружает в $.paths.build.dir и обновляет страницу

	pug:dev - подключает json-данные $.paths.dev.data, компилирует pug-файлы $.paths.dev.pug, минифицирует html, выгружает в $.paths.build.dir

*/

module.exports = ()=> {

	$.gulp.task('pug:dev', ()=> {
		return $.gulp.src($.paths.dev.pug)
			.pipe($.gp.pug({
				data: {
					nav: JSON.parse($.fs.readFileSync($.paths.dev.data, 'utf8'))
				}
			}))
			.on('error', $.gp.notify.onError(function(error) {
				return {
					title: 'pug',
					message: error.message
				};
			}))
			.pipe($.gulp.dest($.paths.build.dir))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('pug:build', ()=> {
		return $.gulp.src($.paths.dev.pug)
			.pipe($.gp.pug({
				data: {
					nav: JSON.parse($.fs.readFileSync($.paths.dev.data, 'utf8'))
				}
			}))
			.on('error', $.gp.notify.onError(function(error) {
				return {
					title: 'pug',
					message: error.message
				};
			}))
			.pipe($.gulp.dest($.paths.build.dir));
	});

};
