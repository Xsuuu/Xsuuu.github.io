// 点击出字bynote.cn
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("", " (*^▽^*) ", "", "●‿●","","","", "(≧∀≦)♪","","","(ง●皿●)ง","", "", "ʕ ᵔᴥᵔ ʔ", "","","","", "ヾ(´〇｀)ﾉ♪♪♪", "", "(„ಡωಡ„)","","","","","","✧*｡٩(ˊᗜˋ*)و✧*｡","","","","","","","⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄","","","","（☆∀☆）","","(⑉• •⑉)‥♡","(*≧▽≦)","","","","","");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
           "color": "rgb(" + ~~(128 + Math.random() * 128) + "," + ~~(128 + Math.random() * 128) + "," + ~~(128 + Math.random() * 128) + ")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
      3000,
      function() {
          $i.remove();
      });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}