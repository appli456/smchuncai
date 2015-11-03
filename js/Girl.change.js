/**
 * Created by li_rz on 2015/10/27.
 */
smchuncai.change = (function () {
    // ----------------------------- 变量声明及定义 -----------------------------
    var initModule,
        resumeTime,
        setImg,
        pauseTime;


    // ----------------------------- 结束变量声明及定义 --------------------------

    // ---------------------- DOM 方法 -------------------------------




    // ---------------------- 结束 DOM 方法 ---------------------------

    // --------------------- 公共方法 ----------------------------

    // Function resumeTime:
    // Start setTimeOut and make image and said change
    // Return : none
    resumeTime = function ($container) {
        var word = ['资瓷', '必续', '屠龙宝刀，点击就送', '搞个大新闻'];
        window.var.timeChange = setTimeout(function () {
            // debugger;
            console.log('resume');
            var $container_img = $container.find('img'),
                $container_word = $container.find('.smchuncai-speak-contain-said'),
                next_img,
                next_word,
                i;
            for (i = 0; i < $container_img.length; ++i) {
                if ($container_img[i].style.display === 'block') {
                    next_img = $container_img[i + 1];
                    next_word = word[i + 1];
                }
            }

            // check next_img
            // if next_img === undefined
            // next_img is first
            if (!next_img) {
                next_img = $container_img[0];
                next_word = word[0];
            }

            $container_img.each(function (index, element) {
                if (element !== next_img) {
                    element.style.display = 'none';
                } else {
                    element.style.display = 'block';
                    $container_word.html('<p>' + next_word + '</p>');
                }
            });

            resumeTime($container);
        }, 20000);
    };

    // Function setImg
    // set image
    // Return : none
    setImg = function ($container, num) {
        var $container_img = $container.find('img');
        $container_img.each(function (index, element) {
            console.log(index);
            if (index === num) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    };


    // Function pauseTime
    // stop setTimeOut
    // Return : none
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
        pauseTime : pauseTime,
        setImg : setImg
    }
}());
