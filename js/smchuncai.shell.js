/**
 * Created by li_rz on 2015/8/23.
 */
smchuncai.shell = (function () {
    'use strict';
    // ---------------------------- 变量声明及定义 ---------------------------------
    var stateMap = {
            $container : undefined,
            main_html : '<div id="smchuncai" draggable="true">' +
                            '<div class="smchuncai-body">' +
                                '<div class="smchuncai-speak">' +
                                    '<div class="smchuncai-speak-contain">' +
                                        '<div class="smchuncai-speak-contain-menu">' +
                                            '<ul>' +
                                                '<li>博客首页</li>' +
                                                '<li>源码下载</li>' +
                                                '<li>小埋卖萌</li>' +
                                                '<li>隐藏小埋</li>' +
                                            '</ul>' +
                                        '</div>' +
                                        '<div class="smchuncai-speak-contain-said">' +
                                        '</div>' +
                                        '<div class="smchuncai-speak-contain-show-button">' +
                                            '<p>菜单</p>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="smchuncai-speak-from">' +
                                    '</div>' +
                                '</div>' +
                                '<div class="smchuncai-img-contain">' +
                                    '<img src="img/002.png" alt="umaru" draggable="false"/>' +
                                    '<img src="img/003.png" alt="umaru" draggable="false"/>' +
                                    '<img src="img/004.png" alt="umaru" draggable="false"/>' +
                                    '<img src="img/005.png" alt="umaru" draggable="false"/>' +
                                '</div>' +
                            '</div>' +
                            '<div>' +
                                '<button class="smchuncai-call-doll">召唤小埋</button>' +
                            '</div>' +
                        '</div>'
        },
        jQueryMap = {},
        setJqueryMap,
        initAllItem,
        allImageHide,
        initMenu,
        hideButton,
        initModule;

    window.var = {
        timeChange : null,
        change : true,
        resume : true,
        timeShowWord : null,
        timeShowButton : null
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

    hideButton = function ($container) {
        var $container_button = $container.find('.smchuncai-call-doll');
        $container_button.get(0).style.display = 'none';
        $container_button.on('click', function (event) {
            event.stopPropagation();
            var $body = $container.find('.smchuncai-body');
            $body.get(0).style.display = 'block';
            $container_button.get(0).style.display = 'none';
        });
    };

    initAllItem = function ($container) {
        allImageHide($container);
        initMenu($container);
        hideButton($container);
    };
    // ---------------------------- 结束 DOM 方法 ---------------------------------

    // ---------------------------- 事件控制 --------------------------------------


    // -------------------------- 结束事件控制 ------------------------------------

    // -------------------------- 公共方法 ----------------------------------------

    initModule = function () {
        $('body').append(stateMap.main_html);
        var $container = $('#smchuncai');
        stateMap.$container = $container;
        setJqueryMap();
        initAllItem(jQueryMap.$container);
        smchuncai.move.initModule(jQueryMap.$container);
        smchuncai.change.initModule(jQueryMap.$container);
        smchuncai.word.initModule(jQueryMap.$container);
    };

    // -------------------------- 结束公共方法 ------------------------------------
    return {initModule : initModule};
}());