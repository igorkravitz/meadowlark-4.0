/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
suite('Тесты страницы "О..."', function () {
    test('страница должна содержать ссылку на страницу контактов', function () {
        assert($('a[href="/contact"]').length);
    });
});

