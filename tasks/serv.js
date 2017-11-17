/*

	serv - запускает browserSync

*/

module.exports = ()=> {

	$.gulp.task('serv', ()=> {
		$.browserSync.init({
			notify: true, // Уведомления
			open: true, // Автоматическое открытие окна в браузере
			reloadOnRestart: true, // Перезагрузка страницы при перезагрузке browser-sync
			server: {
				baseDir: $.paths.build.dir // Директория сервера
			},
			port: 8080,
		});
	});

};
