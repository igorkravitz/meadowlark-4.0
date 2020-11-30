/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
suite('Global Tests', function () {
    test('У данной страницы допустимый заголовок', function () {
        assert(document.title && document.title.match(/\S/) &&
                document.title.toUpperCase() !== 'TODO');
    });
});


