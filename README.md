
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
* scss - css-препроцессор
* svg-спрайты
* json-файлы с данными

## Sublime plugins

* pug
* scss

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
	- `gulp-rename` - переименовывает файлы (используется в scss)
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
	- `svg`, `img:dev`, `pug`, `scss:dev`, `vendor:dev`, `scripts:devCopy`, `fonts`
* `build` - задачи процесса сборки
	- `clean`
	- `svg`, `img:build`, `pug`, `scss:build`, `vendor:build`, `scripts:buildCopy`, `fonts`
* default
	- `dev`
	- `serv`, `watch`

## File structure

* **gulp**
	- Страницы и json-файлы с данными подключаются в файле `./tasks/pug.js`
* **data**
	- Данные `./source/_data/*.json`
* **html**
	- Индексная страница `./source/pages/index.pug`
	- Страницы `./source/pages/{pageName}/{pageName}.pug`
	- Общая разметка
		+ Шаблоны разметки
			* Страница `./_templates/_main.pug`
			* Форма `./_templates/_form.pug`
		+ Секция <head> `./_partials/_head.pug`
		+ Скрипты <body> `./_partials/_scripts.pug`
		+ "Шапка" `./_partials/_header.pug`
		+ "Подвал" `./_partials/_footer.pug`
	- Вспомогательные
		+ Переменные `./_helpers/_vars.pug`
		+ Миксины `./_helpers/_mixins.pug`
* **css**
	- Оформление страниц
		+ Стили страниц подключаются в файле `./source/styles.scss`
		+ Стили `./source/pages/{pageName}/_styles.scss`
		+ Адаптив `./source/pages/{pageName}/_media.scss`
	- Шаблоны стилей для спрайтов `._templates/_sprites.scss` (изначально файл пустой)
	- Общие стили
		+ Навигация `./_partials/_nav.scss`
		+ Кнопки `./_partials/_buttons.scss`
		+ "Шапка" `./_partials/_header.scss`
		+ "Подвал" `./_partials/_footer.scss`
	- Вспомогательные
		+ Переменные `./_helpers/_vars.scss`
		+ Миксины `./_helpers/_mixins.scss`
		+ Сброс `./_helpers/_reset.scss`
		+ Преднастройки `./_helpers/_base.scss`
		+ Шрифты `./_helpers/_fonts.scss`
		+ Спрайты `./_helpers/_sprites.scss` (файл генерируется gulp`ом)
* **js**
	- Скрипты `./source/scripts/scripts.js` - ВОПРОС - КАК БЫТЬ ЕСЛИ НА НЕКОТОРЫХ СТРАНИЦАХ ЕСТЬ СКРИПТЫ КОТОРЫЕ НА ДРУГИХ ВЫЗЫВАЮТ ОШИБКИ? ПРОТЕСТИРОВАТЬ. НУЖНО ЛИ РАЗДЕЛЯТЬ СКРИПТЫ ПО СТРАНИЦАМ?
	- Плагины и библиотеки подключаются в файле `./tasks/js.js`
* **media**
	- `./source/media/content` - Изображения содержимого
	- `./source/media/appearance` - Изображения оформления (jpg, jpeg, png, etc.)
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
5. Определить удобную структуру директорий и файлов для верстки (целиком или поблочно)
6. Переписать настройки на использование scss

## Upgrading ideas

* smartgrid 2 - система сеток на flexbox
* bem naming - правила именования css-классов
* path - модуль node.js для обработки и преобразования путей к файлам
* gulp.spritesmith - спрайты для png
* gulp-debug
~~~
<!-- пример использования -->
.pipe(scss())
.pipe(debug({title: 'scss'}))
~~~
