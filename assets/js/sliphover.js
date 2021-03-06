//SLIPHOVER.js
!function (a, b) {
    function g(b, c) {
        this.element = b, this.settings = a.extend({}, f, c), this._defaults = f, this._name = e, this.version = "v2.0.3", this.init()
    }

    var e = "sliphover", f = {
        target: "img",
        caption: "title",
        duration: "fast",
        fontColor: "#fff",
        textAlign: "center",
        verticalMiddle: !0,
        backgroundColor: "rgba(0,0,0,.7)",
        reverse: !1,
        height: "100%",
        withLink: !1
    };
    g.prototype = {
        init: function () {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                var b = this, c = this.settings.target;
                a(this.element).off("mouseenter.sliphover", c).on("mouseenter.sliphover", c, function () {
                    var d = a(this), e = b.createContainer(d);
                    e.off("mouseenter.sliphover mouseleave.sliphover").on("mouseenter.sliphover mouseleave.sliphover", function (c) {
                        var f = b.getDirection(a(this), c);
                        if (f = b.settings.reverse ? f = (f + 2) % 4 : f, "mouseenter" === c.type) {
                            var g = e.find(".sliphover-overlay");
                            g.length || (g = b.createOverlay(b, f, d), a(this).html(g)), b.slideIn(b, g)
                        } else b.removeOverlay(b, a(this), f)
                    })
                })
            }
        }, createContainer: function (b) {
            var c = b.offset().top, d = b.offset().left, e = b.outerWidth(), f = b.outerHeight();
            zIndex = b.css("z-index");
            var g = a("<div>", {"class": "sliphover-container"}).css({
                width: e,
                height: f,
                position: "absolute",
                overflow: "hidden",
                top: c,
                left: d,
                borderRadius: b.css("border-radius"),
                zIndex: zIndex == +zIndex ? zIndex + 1 : 999
            });
            return a("body").append(g), g
        }, createOverlay: function (c, d, e) {
            var f, g, h, i, j;
            switch (d) {
                case 0:
                    g = 0, f = "100%";
                    break;
                case 1:
                    g = "100%", f = 0;
                    break;
                case 2:
                    g = 0, f = "-100%";
                    break;
                case 3:
                    g = "-100%", f = 0;
                    break;
                default:
                    b.console.error("error when get direction of the mouse")
            }
            if (i = c.settings.verticalMiddle ? a("<div>").css({
                display: "table-cell",
                verticalAlign: "middle"
            }).html(e.attr(c.settings.caption)) : e.attr(c.settings.caption), j = e.parent("a"), j.length && c.settings.withLink) {
                var k = j.attr("href");
                h = a("<a>", {"class": "sliphover-overlay", href: k || "#"}).css({textDecoration: "none"})
            } else h = a("<div>", {"class": "sliphover-overlay"});
            return h.css({
                width: "100%",
                height: c.settings.height,
                position: "absolute",
                left: g,
                bottom: f,
                display: c.settings.verticalMiddle ? "table" : "inline",
                textAlign: c.settings.textAlign,
                color: c.settings.fontColor,
                backgroundColor: c.settings.backgroundColor
            }).html(i), h
        }, slideIn: function (a, b) {
            b.stop().animate({left: 0, bottom: 0}, a.settings.duration)
        }, removeOverlay: function (a, c, d) {
            var e, f = c.find(".sliphover-overlay");
            switch (d) {
                case 0:
                    e = {bottom: "100%", left: 0};
                    break;
                case 1:
                    e = {bottom: 0, left: "100%"};
                    break;
                case 2:
                    e = {bottom: "-100%", left: 0};
                    break;
                case 3:
                    e = {bottom: 0, left: "-100%"};
                    break;
                default:
                    b.console.error("error when get direction of the mouse")
            }
            f.stop().animate(e, a.settings.duration, function () {
                c.remove()
            })
        }, getDirection: function (a, b) {
            var c = a.width(), d = a.height(), e = (b.pageX - a.offset().left - c / 2) * (c > d ? d / c : 1),
                f = (b.pageY - a.offset().top - d / 2) * (d > c ? c / d : 1),
                g = Math.round((Math.atan2(f, e) * (180 / Math.PI) + 180) / 90 + 3) % 4;
            return g
        }
    }, a.fn[e] = function (b) {
        return this.each(function () {
            a.data(this, "plugin_" + e) || a.data(this, "plugin_" + e, new g(this, b))
        }), this
    }
}(jQuery, window, document);

//

$(function () {
    $('#centercon').sliphover({
        target: '.container-card',
        backgroundColor: 'rgba(0,0,0, .5)',
        caption: 'title'
    });
});
