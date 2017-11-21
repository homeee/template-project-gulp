module.exports = ()=> {

	$.gulp.task('pug', ()=> {
		return $.gulp.src($.paths.dev.layout)
			.pipe($.gp.pug({
				data: {
					index: JSON.parse($.fs.readFileSync($.paths.dev.data.index, 'utf8')),
					nav: JSON.parse($.fs.readFileSync($.paths.dev.data.nav, 'utf8'))
				}
			}))
			.pipe($.gp.debug({
				title: 'pug'
			}))
			.pipe($.gulp.dest($.paths.build.dir));
	});

};
