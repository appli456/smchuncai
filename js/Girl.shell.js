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
    // ---------------------------- 结束 DOM 方法 ---------------------------------

    // ---------------------------- 事件控制 --------------------------------------


    // -------------------------- 结束事件控制 ------------------------------------

    // -------------------------- 公共方法 ----------------------------------------

    initModule = function ($container) {
        stateMap.$container = $container;
        setJqueryMap();
        allImageHide(jQueryMap.$container);
        girl.move.initModule(jQueryMap.$container);
        girl.change.initModule(jQueryMap.$container);
    };

    // -------------------------- 结束公共方法 ------------------------------------
    return {initModule : initModule};
}());