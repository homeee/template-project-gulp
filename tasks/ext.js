/*

	ext:dev - заменяет в файлах $.paths.dev.styles_part и $.paths.dev.scripts_part шаблон {extension} на .css и .js соответственно, выгружает в $.paths.dev.styles_part и $.paths.dev.scripts_part

	ext:build - заменяет в файлах $.paths.dev.styles_part и $.paths.dev.scripts_part шаблон {extension} на .min.css и .min.js соответственно, выгружает в $.paths.dev.styles_part и $.paths.dev.scripts_part

*/

module.exports = () => {

	$.gulp.task('ext:dev', () => {
		return $.gulp.src($.paths.dev.styles_part)
			.pipe(replace('{extension}', 'css'))
			.pipe($.gulp.dest($.paths.dev.styles_part));

		return $.gulp.src($.paths.dev.scripts_part)
			.pipe(replace('{extension}', 'js'))
			.pipe($.gulp.dest($.paths.dev.scripts_part));

		return $.gulp.src($.paths.dev.libraries_part)
			.pipe(replace('{extension}', 'js'))
			.pipe($.gulp.dest($.paths.dev.scripts_part));
	});

	$.gulp.task('ext:build', () => {
		return $.gulp.src($.paths.dev.styles_part)
			.pipe(replace('{extension}', 'min.css'))
			.pipe($.gulp.dest($.paths.dev.styles_part));

		return $.gulp.src($.paths.dev.scripts_part)
			.pipe(replace('{extension}', 'min.js'))
			.pipe($.gulp.dest($.paths.dev.scripts_part));

		return $.gulp.src($.paths.dev.libraries_part)
			.pipe(replace('{extension}', 'min.js'))
			.pipe($.gulp.dest($.paths.dev.scripts_part));
	});

}
