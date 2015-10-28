/**
 * Created by li_rz on 2015/9/6.
 */
girl.move = (function () {
    'use strict';
    // ------------------------ 变量定义与声明 -----------------------------


    var drag = false,
        moveDoll,
        initModule;

    // ---------------------- 结束变量定义与声明 -----------------------------

    // ---------------------- DOM 方法 -------------------------------

    moveDoll = function(doll){

        // 点击时鼠标坐标
        var img = doll.find('img'),
            clickDownPosition = {
                x : null,
                y : null
            },
            imgSize = {
                x :  null,
                y : null
            },
            distanceFromClickAndOffset = {
                x : null,
                y : null
            };

        console.log(img);
        imgSize.x = parseInt(img.css('width'));
        imgSize.y = parseInt(img.css('height'));

        console.log(imgSize);
        doll.on('mousedown',  function(event){
            drag = true;
            var $this = this,

            // 元素位置
                offset = {
                    x : $this.offsetLeft,
                    y : $this.offsetTop
                },
                resume = true,     // 确认只调用resumeTime一次
                change = false;    // 改变开始

            clickDownPosition.x = event.clientX;
            clickDownPosition.y = event.clientY;

            distanceFromClickAndOffset = {
                x : clickDownPosition.x - offset.x,
                y : clickDownPosition.y - offset.y
            };

            girl.change.pauseTime();
            doll.on('mousemove', function(event){
                //console.log('offset:',  offset.x, offset.y);
                //console.log('Distance:', distanceFromClickAndOffset.x, distanceFromClickAndOffset.y);
                //console.log('ImgSize:', imgSize.x, imgSize.y);
                //console.log('client:', event.clientX, event.clientY);

                if(!drag) {
                    if (change && resume) {
                        girl.change.resumeTime(doll);
                        resume = false;
                    }
                    return false;
                }

                var enterLeft = event.clientX - distanceFromClickAndOffset.x < 0,
                    enterTop = event.clientY - distanceFromClickAndOffset.y < 0,
                    enterRight = event.clientX > screen.availWidth - imgSize.x + distanceFromClickAndOffset.x,
                    enterBottom = event.clientY > screen.availHeight - imgSize.y + distanceFromClickAndOffset.y;

                if (enterLeft || enterTop || enterRight || enterBottom) {
                    if (enterLeft) {
                        $this.style.left = 0 + 'px';
                    } else if (enterRight) {
                        $this.style.left = screen.availWidth - imgSize.x + "px";
                    } else {
                        $this.style.left = offset.x + event.clientX - clickDownPosition.x + "px";
                    }

                    if (enterTop) {
                        $this.style.top = 0 + 'px';
                    } else if (enterBottom) {
                        $this.style.top = screen.availHeight - imgSize.y + "px";
                    } else {
                        $this.style.top = offset.y + event.clientY - clickDownPosition.y + "px";
                    }
                } else {
                    $this.style.left = offset.x + event.clientX - clickDownPosition.x + "px";
                    $this.style.top = offset.y + event.clientY - clickDownPosition.y + "px";
                }

            });

            doll.on('mouseup', function() {
                drag = false;
                change = true;
            });

            doll.on('mouseleave', function () {
                change = true;
                drag = false;
            });
        });
    };


    // ---------------------- 结束 DOM 方法 ---------------------------

    // ---------------------- 事件 ------------------------------





    // --------------------- 结束事件 ----------------------------

    // --------------------- 公共方法 ----------------------------


    initModule = function (doll) {
        doll.on('mouseover', moveDoll(doll));
    };
    // -------------------- 结束公共方法 --------------------------

    return {
        initModule: initModule
    }
}());