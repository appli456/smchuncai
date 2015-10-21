/**
 * Created by li_rz on 2015/9/6.
 */
/*girl.move =*/ (function () {
    'use strict';
    // ------------------------ 变量定义与声明 -----------------------------


    var drag,
        offset = {
            x : null,
            y : null
        },
        doll,
        touch = document.ontouchstart !== undefined,
        updatePosition;



    // ---------------------- 结束变量定义与声明 -----------------------------

    // ---------------------- DOM 方法 -------------------------------

    updatePosition = function (event) {
        //var wrapper = {
        //    x :  doll.offsetLeft,
        //    y :  doll.offsetTop
        //};

        var targetPosition = {
            x : null,
            y : null
        };

        if (touch) {
            event.preventDefault();
        }

        console.log(event.pageX);
        console.log(offset.x);
        targetPosition.y = (event.pageY- window.scrollY)/*.toString() + 'px'*/;
        targetPosition.x = (event.pageX)/*.toString() + 'px'*/;
        console.log(targetPosition);

        // 有问题
        doll.css('top', event.pageY);
        doll.css('left', event.pageX);
        //
        console.log(doll);
    };


    // ---------------------- 结束 DOM 方法 ---------------------------

    // ---------------------- 事件 ------------------------------



    document.addEventListener('DOMContentLoaded', function () {
        doll = $('#Doll');

        doll.on(touch ? 'touchstart' : 'mousedown', function (event) {
            drag = event.target;

            if (drag) {
                offset = {
                    x : event.offsetX || event.layerX,
                    y : event.offsetY || event.layerY
                };

                doll.on(touch ? 'touchstart' : 'mousedown', updatePosition);
            }
        });
    });

    // --------------------- 结束事件 ----------------------------

    // --------------------- 公共方法 ----------------------------


    // -------------------- 结束公共方法 --------------------------


}());