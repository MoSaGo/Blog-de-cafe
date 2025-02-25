/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-webpalpha-webpanimation-setclasses !*/
!(function (A, n, e) {
  function a(A, n) {
    return typeof A === n;
  }
  function o() {
    var A, n, e, o, i, t, l;
    for (var f in r)
      if (r.hasOwnProperty(f)) {
        if (
          ((A = []),
          (n = r[f]),
          n.name &&
            (A.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (e = 0; e < n.options.aliases.length; e++)
            A.push(n.options.aliases[e].toLowerCase());
        for (o = a(n.fn, "function") ? n.fn() : n.fn, i = 0; i < A.length; i++)
          (t = A[i]),
            (l = t.split(".")),
            1 === l.length
              ? (Modernizr[l[0]] = o)
              : (!Modernizr[l[0]] ||
                  Modernizr[l[0]] instanceof Boolean ||
                  (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = o)),
            s.push((o ? "" : "no-") + l.join("-"));
      }
  }
  function i(A) {
    var n = l.className,
      e = Modernizr._config.classPrefix || "";
    if ((u && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var a = new RegExp("(^|\\s)" + e + "no-js(\\s|$)");
      n = n.replace(a, "$1" + e + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + e + A.join(" " + e)),
      u ? (l.className.baseVal = n) : (l.className = n));
  }
  function t(A, n) {
    if ("object" == typeof A) for (var e in A) c(A, e) && t(e, A[e]);
    else {
      A = A.toLowerCase();
      var a = A.split("."),
        o = Modernizr[a[0]];
      if ((2 == a.length && (o = o[a[1]]), "undefined" != typeof o))
        return Modernizr;
      (n = "function" == typeof n ? n() : n),
        1 == a.length
          ? (Modernizr[a[0]] = n)
          : (!Modernizr[a[0]] ||
              Modernizr[a[0]] instanceof Boolean ||
              (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
            (Modernizr[a[0]][a[1]] = n)),
        i([(n && 0 != n ? "" : "no-") + a.join("-")]),
        Modernizr._trigger(A, n);
    }
    return Modernizr;
  }
  var s = [],
    l = n.documentElement,
    r = [],
    f = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (A, n) {
        var e = this;
        setTimeout(function () {
          n(e[A]);
        }, 0);
      },
      addTest: function (A, n, e) {
        r.push({ name: A, fn: n, options: e });
      },
      addAsyncTest: function (A) {
        r.push({ name: null, fn: A });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = f), (Modernizr = new Modernizr());
  var c,
    u = "svg" === l.nodeName.toLowerCase();
  !(function () {
    var A = {}.hasOwnProperty;
    c =
      a(A, "undefined") || a(A.call, "undefined")
        ? function (A, n) {
            return n in A && a(A.constructor.prototype[n], "undefined");
          }
        : function (n, e) {
            return A.call(n, e);
          };
  })(),
    (f._l = {}),
    (f.on = function (A, n) {
      this._l[A] || (this._l[A] = []),
        this._l[A].push(n),
        Modernizr.hasOwnProperty(A) &&
          setTimeout(function () {
            Modernizr._trigger(A, Modernizr[A]);
          }, 0);
    }),
    (f._trigger = function (A, n) {
      if (this._l[A]) {
        var e = this._l[A];
        setTimeout(function () {
          var A, a;
          for (A = 0; A < e.length; A++) (a = e[A])(n);
        }, 0),
          delete this._l[A];
      }
    }),
    Modernizr._q.push(function () {
      f.addTest = t;
    }),
    Modernizr.addAsyncTest(function () {
      function A(A, n, e) {
        function a(n) {
          var a = n && "load" === n.type ? 1 == o.width : !1,
            i = "webp" === A;
          t(A, i && a ? new Boolean(a) : a), e && e(n);
        }
        var o = new Image();
        (o.onerror = a), (o.onload = a), (o.src = n);
      }
      var n = [
          {
            uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
            name: "webp",
          },
          {
            uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
            name: "webp.alpha",
          },
          {
            uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
            name: "webp.animation",
          },
          {
            uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
            name: "webp.lossless",
          },
        ],
        e = n.shift();
      A(e.name, e.uri, function (e) {
        if (e && "load" === e.type)
          for (var a = 0; a < n.length; a++) A(n[a].name, n[a].uri);
      });
    }),
    Modernizr.addAsyncTest(function () {
      var A = new Image();
      (A.onerror = function () {
        t("webpanimation", !1, { aliases: ["webp-animation"] });
      }),
        (A.onload = function () {
          t("webpanimation", 1 == A.width, { aliases: ["webp-animation"] });
        }),
        (A.src =
          "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA");
    }),
    Modernizr.addAsyncTest(function () {
      var A = new Image();
      (A.onerror = function () {
        t("webpalpha", !1, { aliases: ["webp-alpha"] });
      }),
        (A.onload = function () {
          t("webpalpha", 1 == A.width, { aliases: ["webp-alpha"] });
        }),
        (A.src =
          "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
    }),
    o(),
    i(s),
    delete f.addTest,
    delete f.addAsyncTest;
  for (var p = 0; p < Modernizr._q.length; p++) Modernizr._q[p]();
  A.Modernizr = Modernizr;
})(window, document);
