/**
 * Created by li_rz on 2015/10/27.
 */
girl.change = (function () {
    // ----------------------------- 变量声明及定义 -----------------------------
    var initModule,
        resumeTime,
        replayTime,
        pauseTime;

    window.var = {
        timeChange : null
    };

    // ----------------------------- 结束变量声明及定义 --------------------------

    // ---------------------- DOM 方法 -------------------------------




    // ---------------------- 结束 DOM 方法 ---------------------------

    // --------------------- 公共方法 ----------------------------


    resumeTime = function ($container) {
        console.log('resume');
        window.var.timeChange = setTimeout(function () {
            var $container_img = $container.find('img'),
                next_img,
                i;
            for (i = 0; i < $container_img.length; ++i) {
                if ($container_img[i].style.display === 'block') {
                    next_img = $container_img[i + 1];
                }
            }

            if (!next_img) {
                next_img = $container_img[0];
            }

            $container_img.each(function (index, element) {
                if (element !== next_img) {
                    element.style.display = 'none';
                } else {
                    element.style.display = 'block';
                }
            });

            resumeTime($container);
        }, 15000);
    };


    pauseTime = function () {
        console.log('pause');
        clearTimeout(window.var.timeChange);
    };

    initModule = function ($container) {
        resumeTime($container);
    };
    // -------------------- 结束公共方法 --------------------------
    return {
        initModule: initModule,
        resumeTime : resumeTime,
        pauseTime : pauseTime
    }
}());
