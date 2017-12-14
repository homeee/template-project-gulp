
# template-project-gulp

[TOC]

## summary

* _gulp_ - build system
* _bower_ - frontend package manager
* _pug_ - html-preprocessor & template engine
* _scss_ - css-preprocessor
* data - json
* sprites - svg / png (retina including)
* sticky footer on flexbox
* index page - pages links
* test page layout
* deploying in github pages
* flexbox grid system
	- smartgrid
	- bootstrap

## install

* `git clone https://github.com/latushko-igor/template-project-gulp.git`
* `npm i`
* `bower i`
* `gulp`

## working files

* `./bower.json` - js libraries & plugins
* `./gulp/settings.js` - projectName, libraries, plugins, smartgrid settings
* `./_helpers` - vars & mixins (pug, scss)

_partials_

* `./_partials/_fonts.scss` - fonts
* `./_partials/_header.pug` - header
* `./_partials/_footer.pug` - footer

_templates_

* `./_templates/_layout.pug` - page template
* `./_templates/_iframe.pug` - iframe template
* `./_templates/_test.pug` - test template
* `./_templates/_sprite.handlebars` - png sprite template

_media_

* `./media/appearance/*.png` - png sprite source (*@2x including)
* `./media/appearance/svg/*.svg` - svg sprite source
* `./media/appearance/bg/*` - background images
* `./media/content/*` - content pictures
* `./media/favicons/*` - favicons
* `./media/fonts` - fonts

_pages_

* `./pages/_data.json` - data for index page & project pages
* `./pages/styles.scss` - main styles file
* `./pages/home.pug` - page layout
* `./pages/test.pug` - test layout

_scripts_

* `./scripts/scripts.js` - custom scripts

## howto

_svg sprite_

~~~pug
+icon('{filename}', 'mod')
~~~

_png sprite_

~~~pug
+sprite('{filename}', 'mod')
~~~

~~~scss
.sprite-{filename} {
	@include sprite(${filename}) // for simple sprite
	@include retina-sprite(${filename}-group) // for simple & retina sprite
}
~~~

_inline png/svg image_

~~~pug
+img('{fileName}', {width}, {height}, '{className}')
~~~

_beml_

~~~pug
nav(block='navigation')
	ul
		li(elem='item', mod='active')
			a(href='#', title='Home') Home
		li(elem='item')
			a(href='#', title='About') About
		li(elem='item')
			a(href='#', title='Contact') Contact
~~~

_smart-grid_

~~~pug
.wrapper
	.row
		.col
		.col
~~~

~~~scss
.wrapper {
	@include wrapper();

	.row {
		@include row-flex();
		@include md(justify-content, space-between);

		.col {
			@include col();
			@include size(n);
		}
	}
}
~~~

_deploy_

* `gulp deploy`

## packages

* main
	- `gulp` - build system
	- `fs` - nodejs file I/O module
	- `del` - delete files and folders
	- `browser-sync` - synchronised browser testing
	- `gulp-load-plugins` - loads gulp plugins from package dependencies
	- `gulp-concat` - concatenate files
	- `gulp-replace` - a string replace
	- `gulp-rename` - rename files
* html
	- `gulp-pug` - preprocessor & template engine
	- `gulp-beml` - for BEML processing
* css
	- `gulp-sass` - preprocessor
	- `gulp-autoprefixer` - autoprefix
	- `gulp-csscomb` - format coding style
	- `gulp-clean-css` - minify
	- `gulp-sourcemaps` - styles sourcemap
	- `gulp-group-css-media-queries` - group media queries
	- `smart-grid` - flexbox grid system
	- `gulp-group-css-media-queries` - group media queries
* js
	- `gulp-uglifyes` - minify (es6 support)
* svg
	- `gulp-cheerio` - manipulate HTML and XML files
	- `gulp-svgmin` - minify
	- `gulp-svg-sprite` - sprite creating
* img
	- `gulp.spritesmith` - sprite creating
	- `gulp-tinypng` - minify (using tinypng.com)
* debug
	- `gulp-notify` - errors notify without stopping watcher
* other
	- `vinyl-buffer` - convert streaming files to use buffers
	- `merge-stream` - merge streams
	- `gulp-flatten` - remove relative path for files
	- `gh-pages` - deploying in github pages
