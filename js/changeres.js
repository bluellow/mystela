/**
 * Created by Administrator on 2017/4/13.
 */



$(document).ready(function(){

    // var indexArr = {
    //     s:["img/b_s_1.jpg","img/b_s_2.jpg","img/b_s_3.jpg"],
    //     m:["img/b_m_1.jpg","img/b_m_2.jpg","img/b_m_3.jpg"],
    //     l:["img/b_l_1.jpg","img/b_l_2.jpg","img/b_l_3.jpg"]
    // }


    //banner特别点，不能用数组;其他可以用数组;
    $(window).resize(function () {
        var imgPath = $(".banner").find("li:last-child").find("img").attr("src");
        var status = imgPath.substring(6, 7);
        var bodyWidth = $(".body").width();

        if (bodyWidth > 1200) {
            if (status != "l") {
                $(".banner").find("li img").each(function () {
                    var self = $(this);
                    var str = self.attr("src");
                    //正则表达式
                    var reg = new RegExp("(_m_|_s_)", "g");
                    var newstr = str.replace(reg, "_l_");
                    self.attr({"src": newstr});
                });
            }
        } else if (bodyWidth < 1200 && bodyWidth > 750) {
            if (status != "m") {
                $(".banner").find("li img").each(function () {
                    var self = $(this);
                    var str = self.attr("src");
                    //正则表达式
                    var reg = new RegExp("(_l_|_s_)", "g");
                    var newstr = str.replace(reg, "_m_");
                    self.attr({"src": newstr});
                });
            }
        } else if (bodyWidth <= 750) {
            if (status != "s") {
                $(".banner").find("li img").each(function () {
                    var self = $(this);
                    var str = self.attr("src");
                    //正则表达式
                    var reg = new RegExp("(_l_|_m_)", "g");
                    var newstr = str.replace(reg, "_s_");
                    self.attr({"src": newstr});
                });
            }
        }
    });

    //初始化banner图片
    $(window).resize();
});
