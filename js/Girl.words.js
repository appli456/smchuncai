/**
 * Created by li_rz on 2015/10/29.
 */

girl.word = (function() {
    // ------------------------ 变量定义与声明 -----------------------------
    var jQuery_map = {
            $container : null,
            $menu_element : null
        },
        clickToHome,
        showWord,
        showMenu,
        initModule;

    // ---------------------- 结束变量定义与声明 -----------------------------

    // ---------------------- DOM 方法 -------------------------------


    showWord = function ($menu_element) {

    };

    showMenu = function ($menu_element) {

    };

    clickToHome = function ($menu_element) {
        var menu = $menu_element.find('.smchuncai-speak-contain-menu'),
            menu_item = menu.find('ul li');

        menu_item.on('click', 'li', function (event) {
            event.cancelBubble = true;
            console.log(this);

        })
    };


    // ---------------------- 结束 DOM 方法 ---------------------------

    // ---------------------- 事件 ------------------------------

    // --------------------- 结束事件 ----------------------------

    // --------------------- 公共方法 ----------------------------

    initModule = function ($container) {
        jQuery_map.$container = $container;
        jQuery_map.$menu_element = $container.find('.smchuncai-speak-contain');
        clickToHome(jQuery_map.$menu_element);
    };

    // -------------------- 结束公共方法 --------------------------
    return {
        initModule: initModule
    };
}());