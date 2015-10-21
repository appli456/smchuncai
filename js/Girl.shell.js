/**
 * Created by li_rz on 2015/8/23.
 */
girl.shell = (function () {
    'use strict';
    // ---------------------------- 变量声明及定义 ---------------------------------
    var configMap = {
            doll_map : {
                open : true,
                closed : true
            }
        },
        stateMap = {
            $container : undefined
        },
        jQueryMap = {},
        setJqueryMap,
        onClickDoll,
        initModule;
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

    onClickDoll = function (event) {};

    // -------------------------- 结束事件控制 ------------------------------------

    // -------------------------- 公共方法 ----------------------------------------

    initModule = function ($container) {
        stateMap.$container = $container;
        setJqueryMap();
        girl.move.initModule(jQueryMap.$container);
    };

    // -------------------------- 结束公共方法 ------------------------------------
    return {initModule : initModule};
}());