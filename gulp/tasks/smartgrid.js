module.exports = () => {

	$.gulp.task('smartgrid', (cb) => {
		$.smartgrid($.paths.dev.helpers, $.settings.smartgrid);
		cb();
	});

};
