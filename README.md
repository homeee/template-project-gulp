
# template-gulp

[TOC]

## used technologies

* _gulp_ - build system
* _bower_ - frontend package manager
* _pug_ - html-preprocessor & template engine
* _scss_ - css-preprocessor
* data - json
* sprites - svg/png

## install bower

* `npm install bower -g`

## re-install gulp

* `npm rm gulp -g`
* `npm rm gulp-cli -g`
* `npm rm gulp --save-dev`
* `npm rm gulp --save`
* `npm rm gulp --save-optional`
* `npm cache clean`
* `npm install gulpjs/gulp-cli -g`

## install template-gulp

* `git clone https://github.com/latushko-igor/template-gulp.git`
* `npm i`
* `bower i`
* `gulp`

## libraries & plugins

* `reset.css` - css-styles reset
* `jquery` - javascript library
* `svg4everybody` - external SVG spritemaps support
* `bx-slider` - responsive slider

## packages

* main
	- `gulp` - build system
	- `fs` - nodejs file I/O module
	- `del` - delete files and folders
	- `browser-sync` - synchronised browser testing
	- `gulp-load-plugins` - loads gulp plugins from package dependencies
	- `gulp-concat` - concatenate files
	- `gulp-cheerio` - manipulate HTML and XML files
	- `gulp-replace` - a string replace
	- `gulp-rename` - rename files
* html
	- `gulp-pug` - preprocessor & template engine
* css
	- `gulp-sass` - preprocessor
	- `gulp-autoprefixer` - autoprefix
	- `gulp-csscomb` - format coding style
	- `gulp-clean-css` - minify
	- `gulp-sourcemaps` - карта стилей
* js
	- `gulp-uglifyes` - minify (es6 support)
* svg
	- `gulp-svgmin` - minify
	- `gulp-svg-sprite` - sprite creating
	- `gulp-raster` - rasterization
* img
	- `gulp.spritesmith` - sprite creating
	- `gulp-tinypng` - minify (using tinypng.com)
* debug
	- `gulp-debug` - show files are streamy through pipelines
* other
	- `vinyl-buffer` - convert streaming files to use buffers
	- `merge-stream` - merge streams

## upgrading ideas (2do)

* [smartgrid](https://www.npmjs.com/package/smart-grid) - система сеток на flexbox
* gulp-beml

