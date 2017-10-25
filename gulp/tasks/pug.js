/*
	pug - компилирует pug, подключает данные json, выгружает в baseDir и обновляет страницу
*/

module.exports = ()=> {
	$.gulp.task('pug', ()=> {
		return $.gulp.src([
			'./source/pages/index.pug',
			'./source/pages/home/home.pug'
			])
			.pipe($.gp.pug({
				locals : {
					nav: JSON.parse($.fs.readFileSync('./source/data/nav.json', 'utf8'))
				},
				pretty: true
			}))
			.on('error', $.gp.notify.onError(function(error) {
				return {
					title: 'pug',
					message: error.message
				};
			}))
			.pipe($.gulp.dest($.paths.baseDir))
			.on('end', $.browserSync.reload);
	});
};
