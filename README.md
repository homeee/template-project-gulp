# template-gulp

[TOC]

## Resource

* [Обновленный стартовый шаблон для верстки сайтов. Gulp 4](https://www.youtube.com/watch?v=pkeihmGpP1c)
* [svg sprite template](http://glivera-team.github.io/svg/2016/06/13/svg-sprites-2.html)
* [Как мы используем SVG-спрайты(новый способ)](https://github.com/glivera-team/glivera-team-template/blob/master/assets/sass/templates/_sprite_template.scss)

## Технологии, применяемые в разработке

* gulp - система автоматизации сборки
* bower - установщик пакетов для frontend
* pug - html-препроцессор и шаблонизатор
* sass - css-препроцессор
* svg-спрайты
* json-файлы с данными

## Sublime plugins

* pug
* sass

## Requirements

* nodejs
* bower

## Install bower

* `npm install bower -g`

## Re-install gulp

* `npm rm gulp -g`
* `npm rm gulp-cli -g`
* `npm rm gulp --save-dev`
* `npm rm gulp --save`
* `npm rm gulp --save-optional`
* `npm cache clean`
* `npm install gulpjs/gulp-cli -g`

## Install template-gulp

* `git clone https://github.com/latushko-igor/template-gulp.git`
* `npm i`
* `bower i`
* `gulp`

## Packages

* main
	- `gulp` - система автоматизации сборки
	- `fs` - необходим для задачи pug (не требует отдельной установки)
	- `del` - удаляет файлы (используется в clean)
	- `browser-sync` - сервер и синхронизация браузера
	- `gulp-load-plugins` - доступ к плагину по имени
	- `gulp-concat` - объединение файлов в один (используется в js)
	- `gulp-cheerio` - для внесения изменений в файлы формата xml (используется в svg)
	- `gulp-replace` - удаление строки из файла (используется в svg)
	- `gulp-rename` - переименовывает файлы (используется в sass)
* html
	- `gulp-pug` - html-препроцессор и шаблонизатор
* css
	- `gulp-sass` - css-препроцессор
	- `gulp-autoprefixer` - автопрефиксы
	- `gulp-csscomb` - стандартизация стиля кода
	- `gulp-clean-css` - минификация
	- `gulp-sourcemaps` - карта стилей
* js
	- `gulp-uglify` - минификация
* svg
	- `gulp-svgmin` - минификация
	- `gulp-svg-sprite` - создает спрайт
* img
	- `gulp-tinypng` - оптимизация
* debug
	- `gulp-notify` - отчет о выполнении

## Plugins

* `reset.css` - сброс css-стилей
* `svg4everybody` - поддержка svg-спрайтов

## Tasks

Комментарии к задачам находятся в файлах задач

* `dev` - задачи процесса разработки
	- `clean`
	- `svg`, `img:dev`, `pug`, `sass:dev`, `js:dev`, `js:devCopy`, `fonts`, `other`
* `build` - задачи процесса сборки
	- `clean`
	- `svg`, `img:build`, `pug`, `sass:build`, `js:build`, `js:buildCopy`, `fonts`, `other`
* default
	- `dev`
	- `serv`, `watch`

## Notes

* Из стилей исключен clearfix за ненадобностью, теперь используется flexbox
* Использование в файлах `*.pug` данных из файлов `*.json` с помощью цикла
~~~pug
ul.menu-list
each link, title in nav.navPages // `nav` описан в файле `pug.js`, как относящийся к файлу `navigations.json`
    li
        a(href= link).menu-link= title
~~~
* Для получения `sprite.svg` в `mixins.pug` есть миксин
* Миксины стилей `mixins.styl`
*

## Upgrading ideas

* smartgrid 2 - система сеток на flexbox
* bem naming - правила именования css-классов
* gulp-svgo - оптимизация svg-файлов
* path - модуль node.js для обработки и преобразования путей к файлам
* gulp-debug -
~~~
<!-- пример использования -->
.pipe(sass())
.pipe(debug({title: 'sass'}))
~~~

## 2do

1. Описать рабочие файлы (плагины, шаблоны, стили, скрипты, шрифты, изображения)
2. Протестировать работу всех задач
3. Убрать лишние обновления браузера из задач (разделить задачи если понадобится)
3. Автоматизировать генерацию меню в index
4. В файле plugins.md выбрать плагины для улучшения сборки
5. Более плотно применять paths
6. Применить именование index styles scripts для файлов компонентов в их сборке
7. Нижнее подчеркивание в именах файлов шаблонов и стилей
8. Определить удобную структуру директорий и файлов для верстки (целиком или поблочно)
9. Исправить отбивку в файлах (пробелы на табы)
10. Описать процесс работы над проектом - использование файлов
