module.exports = {

	projectName: 'projectName',
	deployRepo: 'https://github.com/latushko-igor/latushko-igor.github.io.git',

	libraries: [
		'./source/scripts/vendor/jquery/dist/jquery.js',
		'./source/scripts/vendor/svg4everybody/dist/svg4everybody.js'
	],

	plugins: [
		'./source/scripts/vendor/{bx-slider.js,other_one}/**/*.*'
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
