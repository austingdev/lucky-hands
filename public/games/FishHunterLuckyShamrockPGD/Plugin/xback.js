! function(c, g) {
    var b, e = function(a) {
            "x-back" === a.state && (a = document.createEvent("Events"), a.initEvent("x-back", !1, !1), b.dispatchEvent(a))
        },
        d = function(a) {
            history.pushState(a, null, location.href)
        },
        f = function(a) {
            b.addEventListener("x-back", a, !1)
        };
    ! function() {
        b = document.createElement("span");
        window.addEventListener("popstate", e, !0);
        this.listen = f;
        this.record = d;
        this.STATE = "x-back";
        d("x-back")
    }.call(window[c] = window[c] || {})
}("XBack");