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

    // ---------------------------- 结束 DOM 方法 ---------------------------------

    // ---------------------------- 事件控制 --------------------------------------


    // -------------------------- 结束事件控制 ------------------------------------

    // -------------------------- 公共方法 ----------------------------------------

    initModule = function ($container) {
        stateMap.$container = $container;
        setJqueryMap();
        girl.move.initModule(jQueryMap.$container);
        girl.change.initModule(jQueryMap.$container);
    };

    // -------------------------- 结束公共方法 ------------------------------------
    return {initModule : initModule};
}());