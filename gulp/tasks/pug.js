module.exports = () => {

	$.gulp.task('pug:dev', () => {
		return $.gulp.src($.paths.dev.pages)
			.pipe($.lp.pug({
				pretty: true,
				data: {
					data: JSON.parse($.fs.readFileSync($.paths.dev.data, 'utf8'))
				}
			}))
			.pipe($.lp.flatten())
			.pipe($.gulp.dest($.paths.build.dir))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('pug:build', () => {
		return $.gulp.src($.paths.dev.pages)
			.pipe($.lp.pug({
				data: {
					data: JSON.parse($.fs.readFileSync($.paths.dev.data, 'utf8'))
				}
			}))
			.pipe($.lp.flatten())
			.pipe($.gulp.dest($.paths.build.dir));
	});

};
