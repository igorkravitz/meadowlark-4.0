/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Browser = require('zombie'), assert = require('chai').assert;
// Browser.localhost('localhost', 3000);
var browser;
suite('Межстраничные тесты', function () {
    setup(function () {
        browser = new Browser();
        // this.timeout = 5000;
    });
    test('запрос расценок для групп со страницы туров по реке Худ ' +
        'должен заполнять поле реферера', async function () {
            let referrer = 'http://localhost:3000/tours/hood-river';
            await browser.visit(referrer);
            await browser.clickLink('.requestGroupRate');
            // assert(browser.field('email').value === '777@777.com');
            assert(browser.field('referrer').value === referrer);
            // console.log(browser.resources[0].request.headers._headers);    
            // assert(browser.resources[0].request.headers._headers[0][1] === referrer);       
        });
    // test('запрос расценок для групп со страницы туров по реке Худ' +
    //     'должен заполнять поле реферера (callback)', function (done) {
    //         var referrer = 'http://localhost:3000/tours/hood-river';
    //         browser.visit(referrer, function () {
    //             browser.clickLink('.requestGroupRate', function () {
    //                 assert(browser.field('referrer').value === referrer);
    //                 setTimeout(done, this.timeout);
    //             });
    //         });
    //     });
    test('запрос расценок для групп со страницы туров ' +
        'пансионата "Орегон Коуст" должен ' +
        'заполнять поле реферера', async function () {
            let referrer = 'http://localhost:3000/tours/oregon-coast';
            await browser.visit(referrer);
            await browser.clickLink('.requestGroupRate');
            assert(browser.field('referrer').value === referrer);
            // assert(browser.field('email').value === '777@777.com');
            // assert(browser.resources[0].request.headers._headers[0][1] === referrer);  
        });
    // test('запрос расценок для групп со страницы туров ' +
    //     'пансионата "Орегон Коуст" должен ' +
    //     'заполнять поле реферера', function (done) {
    //         var referrer = 'http://localhost:3000/tours/oregon-coast';
    //         browser.visit(referrer, function () {
    //             browser.clickLink('.requestGroupRate', function () {
    //                 assert(browser.field('referrer').value === referrer);
    //                 setTimeout(done, this.timeout);
    //             });
    //         });
    //     });
    test('посещение страницы "Запрос цены для групп" напрямую ' +
        'должен приводить к пустому полю реферера', async function () {
            await browser.visit('http://localhost:3000/tours/request-group-rate');
            assert(browser.field('referrer').value === '');
        });
    // test('посещение страницы "Запрос цены для групп" напрямую ' +
    //     'должен приводить к пустому полю реферера', function (done) {
    //         browser.visit('http://localhost:3000/tours/request-group-rate', function () {
    //             assert(browser.field('referrer').value === '');
    //             setTimeout(done, this.timeout);
    //         });
    //     });
});


