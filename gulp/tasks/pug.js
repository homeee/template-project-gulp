module.exports = ()=> {

	$.gulp.task('index', ()=> {
		return $.gulp.src($.paths.dev.index)
			.pipe($.gp.pug({
				data: {
					index: JSON.parse($.fs.readFileSync($.paths.dev.data.index, 'utf8'))
				}
			}))
			.pipe($.gp.debug({
				title: 'index.js - "index" - (pug)'
			}))
			.pipe($.gulp.dest($.paths.build.dir));
	});

	$.gulp.task('pug', ()=> {
		return $.gulp.src($.paths.dev.pages)
			.pipe($.gp.pug({
				data: {
					nav: JSON.parse($.fs.readFileSync($.paths.dev.data.nav, 'utf8'))
				}
			}))
			.pipe($.gp.debug({
				title: 'index.js - "pug" - (pug)'
			}))
			.pipe($.gp.flatten())
			.pipe($.gulp.dest($.paths.build.dir));
	});

};
