module.exports = () => {

	$.gulp.task('deploy', () => {
		return $.ghpages.publish($.paths.build.dir, {
			repo: 		$.settings.deployRepo,
			branch: 	'master',
			dest: 		'project-' + $.settings.projectName,
			message: 	'Deploy commit from https://github.com/latushko-igor/project-' + $.settings.projectName + '.git'
		});
	});

};
