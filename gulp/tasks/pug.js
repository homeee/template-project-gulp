module.exports = () => {

	$.gulp.task('pug:dev', () => {
		return $.gulp.src($.dev.pages)
			.pipe($.lp.pug({
				pretty: true,
				data: {
					json: JSON.parse($.fs.readFileSync($.dev.data, 'utf8'))
				}
			}))
			.pipe($.lp.flatten())
			.pipe($.gulp.dest($.build.dir))
			.on('end', $.browserSync.reload);
	});

	$.gulp.task('pug:build', () => {
		return $.gulp.src($.dev.pages)
			.pipe($.lp.pug({
				data: {
					json: JSON.parse($.fs.readFileSync($.dev.data, 'utf8'))
				}
			}))
			.pipe($.lp.flatten())
			.pipe($.gulp.dest($.build.dir));
	});

};
