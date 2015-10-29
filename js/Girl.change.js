/**
 * Created by li_rz on 2015/10/27.
 */
girl.change = (function () {
    // ----------------------------- 变量声明及定义 -----------------------------
    var initModule,
        resumeTime,
        pauseTime,
        img_list = ['002.png', '003.png', '004.png',  '005.png'];

    window.var = {
        timeChange : null
    };

    // ----------------------------- 结束变量声明及定义 --------------------------

    // ---------------------- DOM 方法 -------------------------------




    // ---------------------- 结束 DOM 方法 ---------------------------

    // --------------------- 公共方法 ----------------------------

    initModule = function (doll) {
        resumeTime(doll);
    };

    resumeTime = function (doll) {
        console.log('resume');
        window.var.timeChange = setTimeout(function () {
            var doll_img = doll.find('img'),
                img_src = doll_img.get(0).src,
            //img_regex = /(\d{3})\.png$/;
                img_regex,
                i;

            for (i = 0; i < img_list.length; ++i) {
                img_regex = new RegExp(img_list[i] + '$', 'g');
                if (img_regex.test(img_src)) {
                    if (i === img_list.length - 1) {
                        img_src = img_src.replace(img_regex, img_list[0]);
                        break;
                    } else {
                        img_src = img_src.replace(img_regex, img_list[i+1]);
                        break;
                    }
                }
            }

            doll.html('<div id="Speak">' +
                        '<div class="speakContain"></div>' +
                        '<div class="speakFrom"></div>' +
                       '</div>' +
                       '<img src=' + img_src + ' alt="umaru" draggable="false"/>');

            resumeTime(doll);
        }, 5000);
    };


    pauseTime = function () {
        console.log('pause');
        clearTimeout(window.var.timeChange);
    };
    // -------------------- 结束公共方法 --------------------------
    return {
        initModule: initModule,
        resumeTime : resumeTime,
        pauseTime : pauseTime
    }
}());
