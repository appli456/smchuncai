/**
 * Created by li_rz on 2015/8/23.
 */
girl.shell = (function () {
    'use strict';
    // ---------------------------- 变量声明及定义 ---------------------------------
    var stateMap = {
            $container : undefined
        },
        jQueryMap = {},
        setJqueryMap,
        allImageHide,
        initMenu,
        initModule;

    window.var = {
        timeChange : null,
        change : true
    };
    // ---------------------------- 结束变量声明与定义 -----------------------------

    // ---------------------------- DOM 方法 -------------------------------------

    setJqueryMap = function () {
        var $container = stateMap.$container;
        jQueryMap = {
            $container : $container
        }
    };

    allImageHide = function ($container) {
        var $container_img = $container.find('img'),
            img_src = $container_img.get(0).src,
            begin_regex_img = new RegExp(img_src);

        console.log($container_img);
        $container_img.each(function (index, element) {
            var element_get = element.src;
            if (!begin_regex_img.test(element_get)) {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        })
    };

    initMenu = function ($container) {
        var $container_menu = $container.find('.smchuncai-speak-contain'),
            $container_menu_said = $container_menu.find('.smchuncai-speak-contain-said');
        console.log('$container_menu', $container_menu);
        $container_menu.find('.smchuncai-speak-contain-menu').get(0).style.display = 'none';
        $container_menu_said.get(0).style.display = 'block';
        $container_menu_said.html('<p>小埋参上</p>')
    };
    // ---------------------------- 结束 DOM 方法 ---------------------------------

    // ---------------------------- 事件控制 --------------------------------------


    // -------------------------- 结束事件控制 ------------------------------------

    // -------------------------- 公共方法 ----------------------------------------

    initModule = function ($container) {
        stateMap.$container = $container;
        setJqueryMap();
        allImageHide(jQueryMap.$container);
        initMenu(jQueryMap.$container);
        girl.move.initModule(jQueryMap.$container);
        girl.change.initModule(jQueryMap.$container);
        girl.word.initModule(jQueryMap.$container);
    };

    // -------------------------- 结束公共方法 ------------------------------------
    return {initModule : initModule};
}());