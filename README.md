
# template-gulp

[TOC]

## used technologies

* _gulp_ - build system
* _bower_ - frontend package manager
* _pug_ - html-preprocessor & template engine
* _scss_ - css-preprocessor
* data - json
* sprites - svg/png

## install template-gulp

* `git clone https://github.com/latushko-igor/template-gulp.git`
* `npm i`
* `bower i`
* `gulp`

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
* img
	- `gulp.spritesmith` - sprite creating
	- `gulp-tinypng` - minify (using tinypng.com)
* debug
	- `gulp-debug` - show files are streamy through pipelines
* other
	- `vinyl-buffer` - convert streaming files to use buffers
	- `merge-stream` - merge streams
	- `gulp-flatten` - remove relative path for files

## upgrading ideas

* [smartgrid](https://www.npmjs.com/package/smart-grid) - flexbox grid system
* `gulp-beml` - for BEML processing
~~~html
<div block="b-animals">
  <div elem="cat" mod="size:big, color:red"></div>
</div>
~~~
