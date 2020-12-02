// var path = require('path');
const fortune = require('./lib/fortune.js');
const weather = require('./lib/weather');
const express = require('express');
const app = express();
var express_handlebars_sections = require('express-handlebars-sections');
// Установка механизма представления handlebars
var handlebars = require('express-handlebars')
    .create({
        defaultLayout: 'main',
        extname: 'hbs',
        helpers: {
            section: (name, options) => {
                if (!this._sections) {
                    this._sections = {};
                }
                this._sections[name] = options.fn(this);
                return null;
            }
        }
            // layoutsDir: path.join(__dirname, "views/layouts"),
            // partialsDir: path.join(__dirname, "views/partials"),
        });
app.engine('hbs', handlebars.engine);
express_handlebars_sections(handlebars);
// app.set('views', __dirname + '/views/');
// app.set('partialsDir', __dirname + '/views/partials/')
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' &&
        req.query.test === '1';
    next();
});
app.use(function (req, res, next) {
    if (!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weatherContext = weather.getWeatherData();
    next();
});
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/about', function (req, res) {
    res.render('about', {
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'
    });
});
app.get('/jquery-test', function(req, res){
	res.render('jquery-test');
});
app.get('/tours/hood-river', function (req, res) {
    res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', function (req, res) {
    res.render('tours/request-group-rate');
});
// Обобщенный обработчик 404 (промежуточное ПО)
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});
// Обработчик ошибки 500 (промежуточное ПО)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});
app.listen(app.get('port'), function () {
    console.log('Express запущен на http://localhost:' +
        app.get('port') + '; нажмите Ctrl+C для завершения.');
});