/**
 * Created by li_rz on 2015/10/29.
 */

girl.word = (function() {
    // ------------------------ 变量定义与声明 -----------------------------
    var jQuery_map = {
            $container : null,
            $menu_element : null
        },
        clickLink,
        showWord,
        showMenu,
        hideDoll,
        initModule;

    // ---------------------- 结束变量定义与声明 -----------------------------

    // ---------------------- DOM 方法 -------------------------------

    clickLink = function ($menu_element) {
        var menu = $menu_element.find('.smchuncai-speak-contain-menu'),
            menu_item = menu.find('ul li'),
            menu_show_button = $menu_element.find('.smchuncai-speak-contain-show-button');
        menu_item.on('click', function (event) {
            event.cancelBubble = true;
            if (event.target === menu_item[0]) {
                window.location = 'http://www.cnblogs.com/lfk-dsk/';
            } else if (event.target === menu_item[1]) {
                window.location = 'https://github.com/lfkdsk/';
            } else if (event.target === menu_item[menu_item.length - 1]) {
                hideDoll(jQuery_map.$container);
            } else {
                showWord($menu_element);
            }
        });
        console.log('button', menu_show_button);

        menu_show_button.on('click', function (event) {
            event.cancelBubble = true;
            console.log('button_click_event', event.target);
            showMenu($menu_element);
        });
    };


    // ---------------------- 结束 DOM 方法 ---------------------------

    // ---------------------- 事件 ------------------------------

    showMenu = function ($menu_element) {
        var menu = $menu_element;
        console.log('showMenu', menu);
        menu.find('.smchuncai-speak-contain-menu').get(0).style.display = 'block';
        menu.find('.smchuncai-speak-contain-said').get(0).style.display = 'none';
    };

    showWord = function ($menu_element) {
        var menu_said =  $menu_element.find('.smchuncai-speak-contain-said');
        $menu_element.find('.smchuncai-speak-contain-menu').get(0).style.display = 'none';
        menu_said.get(0).style.display = 'block';
        menu_said.html('<p>Dive</p>');
    };

    hideDoll = function ($container) {
        var $container_body = $container.find('.smchuncai-body'),
            $container_button = $container.find('.smchuncai-call-doll');
        $container_body.get(0).style.display = 'none';
        $container_button.get(0).style.display = 'block';
    };
    // --------------------- 结束事件 ----------------------------

    // --------------------- 公共方法 ----------------------------

    initModule = function ($container) {
        jQuery_map.$container = $container;
        jQuery_map.$menu_element = $container.find('.smchuncai-speak-contain');
        clickLink(jQuery_map.$menu_element);
        // showMenu(jQuery_map.$menu_element);
    };

    // -------------------- 结束公共方法 --------------------------
    return {
        initModule: initModule
    };
}());