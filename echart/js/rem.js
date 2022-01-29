// rem适配
! function (n) {
    var e = n.document,
        t = e.documentElement,
        i = 3840,
        d = i / 100,
        o = "orientationchange" in n ? "orientationchange" : "resize",
        a = function () {
            var n = t.clientWidth || 1920;
            n > 3840 && (n = 3840);
            t.style.fontSize = n / d + "px";
        };
    e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);