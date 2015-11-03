/**
 * Created by li_rz on 2015/10/29.
 */

smchuncai.word = (function() {
    // ------------------------ 变量定义与声明 -----------------------------
    var jQuery_map = {
            $container : null,
            $menu_element : null
        },
        clickLink,
        showWord,
        showMenu,
        hideMenu,
        hideDoll,
        getResumeToTrue,
        pauseWord,
        initModule;

    // ---------------------- 结束变量定义与声明 -----------------------------

    // ---------------------- DOM 方法 -------------------------------

    clickLink = function ($menu_element) {
        var menu = $menu_element.find('.smchuncai-speak-contain-menu'),
            menu_item = menu.find('ul li'),
            menu_show_button = $menu_element.find('.smchuncai-speak-contain-show-button');
        menu_item.on('click', function (event) {
            window.var.resume = false;
            event.cancelBubble = true;
            if (event.target === menu_item[0]) {
                window.location = 'http://www.cnblogs.com/lfk-dsk/';
                getResumeToTrue();
            } else if (event.target === menu_item[1]) {
                window.location = 'https://github.com/lfkdsk/';
                getResumeToTrue();
            } else if (event.target === menu_item[menu_item.length - 1]) {
                hideDoll(jQuery_map.$container);
                getResumeToTrue();
            } else {
                showWord($menu_element);
                smchuncai.change.pauseTime();
                window.var.timeShowWord = setTimeout(function () {
                    getResumeToTrue();
                    smchuncai.change.resumeTime(jQuery_map.$container);
                }, 1000);
            }
        });
        console.log('button', menu_show_button);

        menu_show_button.on('click', function (event) {
            window.var.resume = false;
            var $container = jQuery_map.$container;
            event.cancelBubble = true;

            showMenu($menu_element);
            smchuncai.change.pauseTime();
            smchuncai.change.setImg($container, 0);


            window.var.timeShowButton = setTimeout(function () {
                hideMenu($menu_element);
                smchuncai.change.resumeTime($container);
                getResumeToTrue()
            }, 1000);
        });
    };

    getResumeToTrue = function () {
        window.var.resume = true;
    };



    // ---------------------- 结束 DOM 方法 ---------------------------

    // ---------------------- 事件 ------------------------------

    showMenu = function ($menu_element) {
        var menu = $menu_element;
        console.log('showMenu', menu);
        menu.find('.smchuncai-speak-contain-menu').get(0).style.display = 'block';
        menu.find('.smchuncai-speak-contain-said').get(0).style.display = 'none';
    };

    hideMenu = function($menu_element) {
        $menu_element.find('.smchuncai-speak-contain-menu').get(0).style.display = 'none';
        $menu_element.find('.smchuncai-speak-contain-said').get(0).style.display = 'block';
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

    pauseWord = function () {
        console.log('pause word');
        clearTimeout(window.var.timeShowButton);
        clearTimeout(window.var.timeShowWord);
    };

    initModule = function ($container) {
        jQuery_map.$container = $container;
        jQuery_map.$menu_element = $container.find('.smchuncai-speak-contain');
        clickLink(jQuery_map.$menu_element);
    };

    // -------------------- 结束公共方法 --------------------------
    return {
        initModule: initModule,
        pauseWord : pauseWord
    };
}());