module.exports = () => {

	$.gulp.task('index', () => {
		return $.gulp.src($.paths.dev.index)
			.pipe($.lp.pug({
				data: {
					index: JSON.parse($.fs.readFileSync($.paths.dev.data.index, 'utf8'))
				}
			}))
			.pipe($.gulp.dest($.paths.build.dir));
	});

	$.gulp.task('pug:dev', () => {
		return $.gulp.src($.paths.dev.pages)
			.pipe($.lp.pug({
				pretty: true,
				data: {
					nav: JSON.parse($.fs.readFileSync($.paths.dev.data.nav, 'utf8'))
				}
			}))
			.pipe($.lp.flatten())
			.pipe($.gulp.dest($.paths.build.dir));
	});

	$.gulp.task('pug:build', () => {
		return $.gulp.src($.paths.dev.pages)
			.pipe($.lp.pug({
				data: {
					nav: JSON.parse($.fs.readFileSync($.paths.dev.data.nav, 'utf8'))
				}
			}))
			.pipe($.lp.flatten())
			.pipe($.gulp.dest($.paths.build.dir));
	});

};
