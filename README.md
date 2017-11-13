
# template-gulp

[TOC]

## Resource

* [Обновленный стартовый шаблон для верстки сайтов. Gulp 4](https://www.youtube.com/watch?v=pkeihmGpP1c)
* [svg sprite template](https://github.com/glivera-team/glivera-team-template/blob/master/assets/sass/templates/_sprite_template.scss)
* [Как мы используем SVG-спрайты(новый способ)](http://glivera-team.github.io/svg/2016/06/13/svg-sprites-2.html)

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
	- `gulp-uglifyes` - минификация (es6 support)
* svg
	- `gulp-svgmin` - минификация
	- `gulp-svg-sprite` - создает спрайт
* img
	- `gulp-tinypng` - оптимизация
* debug
	- `gulp-notify` - отчет о выполнении

## Plugins

* `reset.css` - сброс css-стилей (?)
* `svg4everybody` - поддержка svg-спрайтов

## Tasks

Комментарии к задачам находятся в файлах задач

* `dev` - задачи процесса разработки
	- `clean`
	- `svg`, `img:dev`, `pug`, `sass:dev`, `js:dev`, `js:devCopy`, `fonts`
* `build` - задачи процесса сборки
	- `clean`
	- `svg`, `img:build`, `pug`, `sass:build`, `js:build`, `js:buildCopy`, `fonts`
* default
	- `dev`
	- `serv`, `watch`

## File structure

* **gulp**
	- Страницы и json-файлы с данными подключаются в файле `./gulp/tasks/pug.js`
* **data**
	- Данные `./source/data/*.json`
* **html**
	- Индексная страница `./source/pages/index.pug`
	- Страницы `./source/pages/{pageName}/{pageName}.pug`
	- Общая разметка
		+ Шаблоны разметки
			* Страница `./templates/_main.pug`
			* Форма `./templates/_form.pug`
		+ Секция <head> `./partials/_head.pug`
		+ Скрипты <body> `./partials/_scripts.pug`
		+ "Шапка" `./partials/_header.pug`
		+ "Подвал" `./partials/_footer.pug`
	- Вспомогательные
		+ Переменные `./helpers/_vars.pug`
		+ Миксины `./helpers/_mixins.pug`
* **css**
	- Оформление страниц
		+ Стили страниц подключаются в файле `./source/main.sass`
		+ Стили `./source/pages/{pageName}/_styles.sass`
		+ Адаптив `./source/pages/{pageName}/_media.sass`
	- Шаблоны стилей для спрайтов `./templates/_sprites.sass` (изначально файл пустой)
	- Общие стили
		+ Навигация `./partials/_nav.sass`
		+ Кнопки `./partials/_buttons.sass`
		+ "Шапка" `./partials/_header.sass`
		+ "Подвал" `./partials/_footer.sass`
	- Вспомогательные
		+ Переменные `./helpers/_vars.sass`
		+ Миксины `./helpers/_mixins.sass`
		+ Сброс `./helpers/_reset.sass`
		+ Преднастройки `./helpers/_base.sass`
		+ Шрифты `./helpers/_fonts.sass`
		+ Спрайты `./helpers/_sprites.sass` (файл генерируется gulp`ом)
* **js**
	- Скрипты `./source/scripts/main.js` - ВОПРОС - КАК БЫТЬ ЕСЛИ НА НЕКОТОРЫХ СТРАНИЦАХ ЕСТЬ СКРИПТЫ КОТОРЫЕ НА ДРУГИХ ВЫЗЫВАЮТ ОШИБКИ? ПРОТЕСТИРОВАТЬ. НУЖНО ЛИ РАЗДЕЛЯТЬ СКРИПТЫ ПО СТРАНИЦАМ?
	- Плагины и библиотеки подключаются в файле `./gulp/tasks/js.js`
* **media**
	- `./source/media/content` - Изображения содержимого
	- `./source/media/appearance` - Изображения оформления (jpg, png, etc.)
	- `./source/media/appearance/svg` - Изображения оформления (svg)
	- `./source/media/fonts` - Шрифты

---

## Notes

* Название проекта, помимо имени каталога, указано в файлах `package.json` и `bower.json`
* Использование в файлах `*.pug` данных из файлов `*.json` с помощью цикла
~~~pug
ul.main-nav
	each link, title in nav.navigation // объект `nav` описан в файле `pug.js`, как относящийся к файлу `nav.json`
		li
			a(href= link, title= title).item= title
~~~

## Other

* Из стилей исключен clearfix за ненадобностью, теперь используется flexbox (?)

## 2do

1. Протестировать работу всех задач, оптимизировать
2. Убрать лишние обновления браузера из задач (разделить задачи если понадобится)
3. Автоматизировать генерацию меню в index
4. В файле plugins.md выбрать плагины для улучшения сборки
5. Более плотно применять paths
6. Применить именование index styles scripts для файлов компонентов в их сборке
7. Нижнее подчеркивание в именах файлов шаблонов и стилей
8. Определить удобную структуру директорий и файлов для верстки (целиком или поблочно)

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
* gulp.spritesmith
