module.exports = {

	projectName: 'projectName',
	index: 'index.html',
	deployRepo: 'https://github.com/latushko-igor/latushko-igor.github.io.git',

	vendor: [
		'./node_modules/svg4everybody/**/*',
		// './node_modules/jquery/**/*',
		// './node_modules/bootstrap/**/*',
		// './node_modules/bxslider/**/*',
		// './node_modules/fancybox/**/*'
	],

	smartgrid: {
		filename: '_smartgrid',
		outputStyle: 'scss',
		columns: 12,
		offset: '20px',
		mobileFirst: true,
		container: {
			maxWidth: '1200px',
			fields: '20px'
		},
		breakPoints: {
			xs: {
				width: '560px'
			},
			sm: {
				width: '780px',
				fields: '15px'
			},
			md: {
				width: '960px'
			},
			lg: {
				width: '1200px'
			}
		}
	}

};
