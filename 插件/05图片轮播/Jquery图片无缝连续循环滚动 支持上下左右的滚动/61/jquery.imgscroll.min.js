/* Copyright (c) 2014 xcsoft.cn(http://www.xcsoft.cn)
 * Author:Xiucheng Yang
 * Version: 2.6.0
 * MyQQ:549642084
 * LastUpdateTime:2014-11-08
 * Used Url:http://www.xcsoft.cn/article/411.html
 * 
 */
var imgScroll = {
    fspeed: 1E3,
    aspeed: 5E3,
    gradual: function(b, e, c) {
        function m() {
            d > r - 1 && (d = 0);
            imgScroll.myGradual(a, d, {
                imginfo: s,
                direction: k,
                height: p,
                speed: h,
                descli: f,
                infoli: g
            });
            d++
        }
        var a = b.name,
        l, d = 1;
        c = 0 == b.addcss ? 0 : 1;
        e = e ? e: imgScroll.aspeed;
        var h = b.speed ? b.speed: 100,
        f = $("." + a + ">.imgdesc li").length,
        g = $("." + a + ">.imginfo li").length,
        r = $("." + a + ">.imglist li").length;
        1 == c && ($("." + a).css({
            position: "relative",
            overflow: "hidden",
            width: b.width,
            height: b.height
        }), $("." + a).find(".imglist li,.imglist img").css({
            width: b.width,
            height: b.height
        }), $("." + a).find(".imglist li").css({
            position: "absolute"
        }), $("." + a + ">.imglist").css({
            position: "absolute"
        }), (0 < $("." + a + ">.pre").length || 0 < $("." + a + ">.next").length) && $("." + a + ">.pre,." + a + ">.next").css({
            position: "absolute"
        }));
        if (0 < g) {
            $("." + a + ">.imginfo,." + a + ">.imginfo li").css({
                position: "absolute"
            });
            var s = b.showinfo ? b.showinfo: "gradual",
            k = b.infodirection ? b.infodirection: "bottom",
            p = "left" == k || "right" == k ? $("." + a + ">.imginfo").width() : $("." + a + ">.imginfo").height();
            1 == c && $("." + a + ">.imginfo,." + a + ">.imginfo li").css({
                position: "absolute"
            });
            if ("gradual" == s) $("." + a + ">.imginfo li:gt(0)").fadeTo(0, 0);
            else switch (k) {
            case "left":
                $("." + a + ">.imginfo li:gt(0)").css({
                    left: "-" + p + "px"
                });
                break;
            case "top":
                $("." + a + ">.imginfo li:gt(0)").css({
                    top: "-" + p + "px"
                });
                break;
            case "right":
                $("." + a + ">.imginfo li:gt(0)").css({
                    right: "-" + p + "px"
                });
                break;
            case "bottom":
                $("." + a + ">.imginfo li:gt(0)").css({
                    bottom: "-" + p + "px"
                })
            }
        }
        0 < f && (1 == c && $("." + a + ">.imgdesc").css({
            position: "absolute"
        }), $("." + a + ">.imgdesc li:eq(0)").addClass("hover"));
        $("." + a + ">.imglist li:gt(0)").fadeTo(0, 0);
        imgScroll.addDataIndex(a, 0);
        l = setInterval(function() {
            m()
        },
        e);
        $("." + a + ">.imgdesc li").hover(function() {
            clearInterval(l);
            var b = $(this).index();
            d = b + 1;
            imgScroll.myGradual(a, b, {
                imginfo: s,
                direction: k,
                height: p,
                speed: h,
                descli: f,
                infoli: g
            })
        },
        function() {
            l = setInterval(function() {
                m()
            },
            e)
        });
        $("." + a + ">.imglist li img,." + a + " .pre,." + a + " .next").hover(function() {
            clearInterval(l)
        },
        function() {
            l = setInterval(function() {
                m()
            },
            e)
        });
        $("." + a + " .pre").click(function(b) {
            b = imgScroll.getDataIndex(a);
            d = parseInt(b - 1);
            0 > d && (d = r - 1);
            imgScroll.myGradual(a, d, {
                imginfo: s,
                direction: k,
                height: p,
                speed: h,
                descli: f,
                infoli: g
            });
            d++
        });
        $("." + a + " .next").click(function(b) {
            d > r - 1 && (d = 0);
            imgScroll.myGradual(a, d, {
                imginfo: s,
                direction: k,
                height: p,
                speed: h,
                descli: f,
                infoli: g
            });
            d++
        })
    },
    scroll: function(b, e, c) {
        function m() {
            if (h > k - 1 || f <= -(n * k - n)) h = 0,
            f = n;
            f -= n;
            imgScroll.myScroll(a, h, l, f, c, k, {
                imginfo: u,
                direction: t,
                height: q,
                speed: r,
                descli: p,
                infoli: v
            });
            h++
        }
        var a = b.name,
        l = b.direction ? b.direction: "left",
        d,
        h = 1,
        f = 0,
        g = 0 == b.addcss ? 0 : 1,
        r = b.speed ? b.speed: 100;
        c = c ? c: imgScroll.fspeed;
        var s = e ? e: imgScroll.aspeed,
        k = $("." + a + ">.imglist li").length,
        p = $("." + a + ">.imgdesc li").length,
        v = $("." + a + ">.imginfo li").length;
        1 == g && ($("." + a).css({
            position: "relative",
            overflow: "hidden",
            width: b.width,
            height: b.height
        }), $("." + a).find(".imglist li,.imglist img").css({
            width: b.width,
            height: b.height
        }), (0 < $("." + a + ">.pre").length || 0 < $("." + a + ">.next").length) && $("." + a + ">.pre,." + a + ">.next").css({
            position: "absolute"
        }), $("." + a + ">.imglist").css({
            position: "absolute"
        }));
        switch (l) {
        case "left":
            var n = $("." + a + ">.imglist li:first img").width();
            1 == g && $("." + a + ">.imglist li").css({
                "float": "left",
                position: "relative"
            });
            $("." + a + ">.imglist").css({
                left: f + "px",
                width: k * n + "px"
            });
            break;
        case "right":
            n = $("." + a + ">.imglist li:first img").width();
            1 == g && $("." + a + ">.imglist li").css({
                "float": "left",
                position: "relative"
            });
            $("." + a + ">.imglist").css({
                right: f + "px",
                width: k * n + "px"
            });
            break;
        case "top":
            n = $("." + a + ">.imglist li:first img").height();
            1 == g && $("." + a + ">.imglist li").css({
                position: "relative"
            });
            $("." + a + ">.imglist").css({
                top: f + "px",
                height: k * n + "px"
            });
            break;
        case "bottom":
            n = $("." + a + ">.imglist li:first img").height(),
            1 == g && $("." + a + ">.imglist li").css({
                position: "relative"
            }),
            $("." + a + ">.imglist").css({
                bottom: f + "px",
                height: k * n + "px"
            })
        }
        if (0 < v) {
            var u = b.showinfo ? b.showinfo: "gradual",
            t = b.infodirection ? b.infodirection: "bottom",
            q = "left" == t || "right" == t ? $("." + a + ">.imginfo").width() : $("." + a + ">.imginfo").height();
            1 == g && $("." + a + ">.imginfo,." + a + ">.imginfo li").css({
                position: "absolute"
            });
            if ("bottom" == l || "right" == l) if ("gradual" == u) $("." + a + ">.imginfo li:lt(" + (k - 1) + ")").fadeTo(0, 0);
            else switch (t) {
            case "bottom":
                $("." + a + ">.imginfo li:lt(" + (k - 1) + ")").css({
                    bottom: "-" + q + "px"
                });
                break;
            case "right":
                $("." + a + ">.imginfo li:lt(" + (k - 1) + ")").css({
                    right: "-" + q + "px"
                });
                break;
            case "left":
                $("." + a + ">.imginfo li:lt(" + (k - 1) + ")").css({
                    left: "-" + q + "px"
                });
                break;
            case "top":
                $("." + a + ">.imginfo li:lt(" + (k - 1) + ")").css({
                    top: "-" + q + "px"
                })
            } else if ("gradual" == u) $("." + a + ">.imginfo li:gt(0)").fadeTo(0, 0);
            else switch (t) {
            case "left":
                $("." + a + ">.imginfo li:gt(0)").css({
                    left: "-" + q + "px"
                });
                break;
            case "top":
                $("." + a + ">.imginfo li:gt(0)").css({
                    top: "-" + q + "px"
                });
                break;
            case "right":
                $("." + a + ">.imginfo li:gt(0)").css({
                    right: "-" + q + "px"
                });
                break;
            case "bottom":
                $("." + a + ">.imginfo li:gt(0)").css({
                    bottom: "-" + q + "px"
                })
            }
        }
        0 < p && (1 == g && $("." + a + ">.imgdesc").css({
            position: "absolute"
        }), $("." + a + ">.imgdesc li:eq(0)").addClass("hover"));
        imgScroll.addDataIndex(a, h);
        d = setInterval(function() {
            m()
        },
        s);
        $("." + a + ">.imgdesc li").hover(function() {
            clearInterval(d);
            var b = $(this).index();
            f = b * -n;
            h = b + 1;
            imgScroll.myScroll(a, b, l, f, c, k, {
                imginfo: u,
                direction: t,
                height: q,
                speed: r,
                descli: p,
                infoli: v
            })
        },
        function() {
            d = setInterval(function() {
                m()
            },
            s)
        });
        $("." + a + ">.imglist li img,." + a + " .pre,." + a + " .next").hover(function() {
            clearInterval(d)
        },
        function() {
            d = setInterval(function() {
                m()
            },
            s)
        });
        $("." + a + " .pre").click(function(b) {
            h = imgScroll.getDataIndex(a) - 1;
            0 >= h && 0 <= f ? (h = k - 1, f = n * -h) : f += n;
            imgScroll.myScroll(a, h, l, f, c, k, {
                imginfo: u,
                direction: t,
                height: q,
                speed: r,
                descli: p,
                infoli: v
            });
            h++
        });
        $("." + a + " .next").click(function(b) {
            h > k - 1 && (h = 0, f = n);
            f -= n;
            imgScroll.myScroll(a, h, l, f, c, k, {
                imginfo: u,
                direction: t,
                height: q,
                speed: r,
                descli: p,
                infoli: v
            });
            h += 1
        })
    },
    myGradual: function(b, e, c) {
        imgScroll.addDataIndex(b, e);
        $("." + b + ">.imglist li:eq(" + e + ")").siblings().stop().fadeTo(500, 0);
        $("." + b + ">.imglist li:eq(" + e + ")").stop().fadeTo(500, 1);
        0 < c.descli && ($("." + b + ">.imgdesc li:eq(" + e + ")").siblings().removeClass("hover"), $("." + b + ">.imgdesc li:eq(" + e + ")").addClass("hover"));
        if (0 < c.infoli) if ("gradual" == c.imginfo) $("." + b + ">.imginfo li:eq(" + e + ")").siblings().stop().fadeTo(500, 0),
        $("." + b + ">.imginfo li:eq(" + e + ")").stop().fadeTo(500, 1);
        else switch (c.direction) {
        case "top":
            $("." + b + ">.imginfo li:eq(" + e + ")").siblings().stop().animate({
                top: "-" + c.height + "px"
            },
            c.speed);
            setTimeout(function() {
                $("." + b + ">.imginfo li").hide();
                $("." + b + ">.imginfo li:eq(" + e + ")").show().stop().animate({
                    top: "0px"
                },
                c.speed)
            },
            c.speed / 2);
            break;
        case "left":
            $("." + b + ">.imginfo li:eq(" + e + ")").siblings().stop().animate({
                left: "-" + c.height + "px"
            },
            c.speed);
            setTimeout(function() {
                $("." + b + ">.imginfo li").hide();
                $("." + b + ">.imginfo li:eq(" + e + ")").show().stop().animate({
                    left: "0px"
                },
                c.speed)
            },
            c.speed / 2);
            break;
        case "right":
            $("." + b + ">.imginfo li:eq(" + e + ")").siblings().stop().animate({
                right: "-" + c.height + "px"
            },
            c.speed);
            setTimeout(function() {
                $("." + b + ">.imginfo li").hide();
                $("." + b + ">.imginfo li:eq(" + e + ")").show().stop().animate({
                    right: "0px"
                },
                c.speed)
            },
            c.speed / 2);
            break;
        case "bottom":
            $("." + b + ">.imginfo li:eq(" + e + ")").siblings().stop().animate({
                bottom: "-" + c.height + "px"
            },
            c.speed),
            setTimeout(function() {
                $("." + b + ">.imginfo li").hide();
                $("." + b + ">.imginfo li:eq(" + e + ")").show().stop().animate({
                    bottom: "0px"
                },
                c.speed)
            },
            c.speed / 2)
        }
    },
    myScroll: function(b, e, c, m, a, l, d) {
        imgScroll.addDataIndex(b, e);
        0 < d.descli && ($("." + b + ">.imgdesc li:eq(" + e + ")").siblings().removeClass("hover"), $("." + b + ">.imgdesc li:eq(" + e + ")").addClass("hover"));
        if (0 < d.infoli) if (textindex = "right" == c || "bottom" == c ? parseInt(l - 1 - e) : e, "gradual" == d.imginfo) $("." + b + ">.imginfo li:eq(" + textindex + ")").siblings().stop().fadeTo(500, 0),
        $("." + b + ">.imginfo li:eq(" + textindex + ")").stop().fadeTo(500, 1);
        else switch (d.direction) {
        case "top":
            $("." + b + ">.imginfo li:eq(" + textindex + ")").siblings().stop().animate({
                top: "-" + d.height + "px"
            },
            d.speed);
            setTimeout(function() {
                $("." + b + ">.imginfo li").hide();
                $("." + b + ">.imginfo li:eq(" + textindex + ")").show().stop().animate({
                    top: "0px"
                },
                d.speed)
            },
            d.speed / 2);
            break;
        case "left":
            $("." + b + ">.imginfo li:eq(" + textindex + ")").siblings().stop().animate({
                left: "-" + d.height + "px"
            },
            d.speed);
            setTimeout(function() {
                $("." + b + ">.imginfo li").hide();
                $("." + b + ">.imginfo li:eq(" + textindex + ")").show().stop().animate({
                    left: "0px"
                },
                d.speed)
            },
            d.speed / 2);
            break;
        case "right":
            $("." + b + ">.imginfo li:eq(" + textindex + ")").siblings().stop().animate({
                right: "-" + d.height + "px"
            },
            d.speed);
            setTimeout(function() {
                $("." + b + ">.imginfo li").hide();
                $("." + b + ">.imginfo li:eq(" + textindex + ")").show().stop().animate({
                    right: "0px"
                },
                d.speed)
            },
            d.speed / 2);
            break;
        case "bottom":
            $("." + b + ">.imginfo li:eq(" + textindex + ")").siblings().stop().animate({
                bottom: "-" + d.height + "px"
            },
            d.speed),
            setTimeout(function() {
                $("." + b + ">.imginfo li").hide();
                $("." + b + ">.imginfo li:eq(" + textindex + ")").show().stop().animate({
                    bottom: "0px"
                },
                d.speed)
            },
            d.speed / 2)
        }
        switch (c) {
        case "left":
            $("." + b + ">.imglist").stop().animate({
                left: m + "px"
            },
            a);
            break;
        case "right":
            $("." + b + ">.imglist").stop().animate({
                right: m + "px"
            },
            a);
            break;
        case "top":
            $("." + b + ">.imglist").stop().animate({
                top: m + "px"
            },
            a);
            break;
        case "bottom":
            $("." + b + ">.imglist").stop().animate({
                bottom: m + "px"
            },
            a)
        }
    },
    addDataIndex: function(b, e) {
        $("." + b).attr("data-index", e)
    },
    getDataIndex: function(b) {
        return $("." + b).attr("data-index")
    },
    rolling: function(b) {
        function e() {
            g >= l * f / 2 && ("left" == a || "top" == a) ? g = 0 : g <= l * f / 2 - h && ("right" == a || "bottom" == a) && (g = l * f - h);
            switch (a) {
            case "left":
                c.find("ul").animate({
                    left:
                    "-" + g + "px"
                },
                0);
                g += 1;
                break;
            case "top":
                c.find("ul").animate({
                    top:
                    "-" + g + "px"
                },
                0);
                g += 1;
                break;
            case "right":
                c.find("ul").animate({
                    left:
                    "-" + g + "px"
                },
                0);
                g -= 1;
                break;
            case "bottom":
                c.find("ul").animate({
                    top:
                    "-" + g + "px"
                },
                0),
                g -= 1
            }
        }
        var c = $("." + b.name),
        m = 0 == b.addcss ? 0 : 1,
        a = b.direction ? b.direction: "left";
        c.find("ul").append(c.find("ul").html());
        var l = c.find("ul>li").length,
        d = b.speed ? b.speed: 40;
        1 == m && (c.css({
            overflow: "hidden"
        }), c.find("ul").css({
            position: "relative"
        }), c.find("ul>li,ul>li>img").css({
            width: b.width,
            height: b.height
        }), c.find("ul>li").css({
            "float": "left"
        }));
        if ("left" == a || "right" == a) {
            var h = c.width(),
            f = c.find("ul>li:first").width(),
            g = "left" == a ? 0 : l * f - h;
            1 == m && c.find("ul").css({
                width: l * f + "px",
                height: c.find("ul>li:first").height()
            })
        } else h = c.height(),
        f = c.find("ul>li:first").height(),
        g = "top" == a ? 0 : l * f - h,
        1 == m && c.find("ul").css({
            height: l * f + "px",
            width: c.find("ul>li:first").width()
        });
        var r = setInterval(function() {
            e()
        },
        d);
        c.find("ul>li").hover(function() {
            clearInterval(r)
        },
        function() {
            r = setInterval(function() {
                e()
            },
            d)
        })
    }
};