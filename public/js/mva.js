// Browser detection source https://unpkg.com/bowser@2.9.0/es5.js
!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.bowser = t() : e.bowser = t();
}(this, function () {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var i = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) r.d(n, i, function (t) {
        return e[t];
      }.bind(null, i));
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 90);
  }({
    17: function (e, t, r) {
      "use strict";

      t.__esModule = !0, t.default = void 0;

      var n = r(18),
          i = function () {
        function e() {}

        return e.getFirstMatch = function (e, t) {
          var r = t.match(e);
          return r && r.length > 0 && r[1] || "";
        }, e.getSecondMatch = function (e, t) {
          var r = t.match(e);
          return r && r.length > 1 && r[2] || "";
        }, e.matchAndReturnConst = function (e, t, r) {
          if (e.test(t)) return r;
        }, e.getWindowsVersionName = function (e) {
          switch (e) {
            case "NT":
              return "NT";

            case "XP":
              return "XP";

            case "NT 5.0":
              return "2000";

            case "NT 5.1":
              return "XP";

            case "NT 5.2":
              return "2003";

            case "NT 6.0":
              return "Vista";

            case "NT 6.1":
              return "7";

            case "NT 6.2":
              return "8";

            case "NT 6.3":
              return "8.1";

            case "NT 10.0":
              return "10";

            default:
              return;
          }
        }, e.getMacOSVersionName = function (e) {
          var t = e.split(".").splice(0, 2).map(function (e) {
            return parseInt(e, 10) || 0;
          });
          if (t.push(0), 10 === t[0]) switch (t[1]) {
            case 5:
              return "Leopard";

            case 6:
              return "Snow Leopard";

            case 7:
              return "Lion";

            case 8:
              return "Mountain Lion";

            case 9:
              return "Mavericks";

            case 10:
              return "Yosemite";

            case 11:
              return "El Capitan";

            case 12:
              return "Sierra";

            case 13:
              return "High Sierra";

            case 14:
              return "Mojave";

            case 15:
              return "Catalina";

            default:
              return;
          }
        }, e.getAndroidVersionName = function (e) {
          var t = e.split(".").splice(0, 2).map(function (e) {
            return parseInt(e, 10) || 0;
          });
          if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0;
        }, e.getVersionPrecision = function (e) {
          return e.split(".").length;
        }, e.compareVersions = function (t, r, n) {
          void 0 === n && (n = !1);
          var i = e.getVersionPrecision(t),
              s = e.getVersionPrecision(r),
              o = Math.max(i, s),
              a = 0,
              u = e.map([t, r], function (t) {
            var r = o - e.getVersionPrecision(t),
                n = t + new Array(r + 1).join(".0");
            return e.map(n.split("."), function (e) {
              return new Array(20 - e.length).join("0") + e;
            }).reverse();
          });

          for (n && (a = o - Math.min(i, s)), o -= 1; o >= a;) {
            if (u[0][o] > u[1][o]) return 1;

            if (u[0][o] === u[1][o]) {
              if (o === a) return 0;
              o -= 1;
            } else if (u[0][o] < u[1][o]) return -1;
          }
        }, e.map = function (e, t) {
          var r,
              n = [];
          if (Array.prototype.map) return Array.prototype.map.call(e, t);

          for (r = 0; r < e.length; r += 1) n.push(t(e[r]));

          return n;
        }, e.find = function (e, t) {
          var r, n;
          if (Array.prototype.find) return Array.prototype.find.call(e, t);

          for (r = 0, n = e.length; r < n; r += 1) {
            var i = e[r];
            if (t(i, r)) return i;
          }
        }, e.assign = function (e) {
          for (var t, r, n = e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];

          if (Object.assign) return Object.assign.apply(Object, [e].concat(s));

          var a = function () {
            var e = s[t];
            "object" == typeof e && null !== e && Object.keys(e).forEach(function (t) {
              n[t] = e[t];
            });
          };

          for (t = 0, r = s.length; t < r; t += 1) a();

          return e;
        }, e.getBrowserAlias = function (e) {
          return n.BROWSER_ALIASES_MAP[e];
        }, e.getBrowserTypeByAlias = function (e) {
          return n.BROWSER_MAP[e] || "";
        }, e;
      }();

      t.default = i, e.exports = t.default;
    },
    18: function (e, t, r) {
      "use strict";

      t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0;
      t.BROWSER_ALIASES_MAP = {
        "Amazon Silk": "amazon_silk",
        "Android Browser": "android",
        Bada: "bada",
        BlackBerry: "blackberry",
        Chrome: "chrome",
        Chromium: "chromium",
        Electron: "electron",
        Epiphany: "epiphany",
        Firefox: "firefox",
        Focus: "focus",
        Generic: "generic",
        "Google Search": "google_search",
        Googlebot: "googlebot",
        "Internet Explorer": "ie",
        "K-Meleon": "k_meleon",
        Maxthon: "maxthon",
        "Microsoft Edge": "edge",
        "MZ Browser": "mz",
        "NAVER Whale Browser": "naver",
        Opera: "opera",
        "Opera Coast": "opera_coast",
        PhantomJS: "phantomjs",
        Puffin: "puffin",
        QupZilla: "qupzilla",
        QQ: "qq",
        QQLite: "qqlite",
        Safari: "safari",
        Sailfish: "sailfish",
        "Samsung Internet for Android": "samsung_internet",
        SeaMonkey: "seamonkey",
        Sleipnir: "sleipnir",
        Swing: "swing",
        Tizen: "tizen",
        "UC Browser": "uc",
        Vivaldi: "vivaldi",
        "WebOS Browser": "webos",
        WeChat: "wechat",
        "Yandex Browser": "yandex",
        Roku: "roku"
      };
      t.BROWSER_MAP = {
        amazon_silk: "Amazon Silk",
        android: "Android Browser",
        bada: "Bada",
        blackberry: "BlackBerry",
        chrome: "Chrome",
        chromium: "Chromium",
        electron: "Electron",
        epiphany: "Epiphany",
        firefox: "Firefox",
        focus: "Focus",
        generic: "Generic",
        googlebot: "Googlebot",
        google_search: "Google Search",
        ie: "Internet Explorer",
        k_meleon: "K-Meleon",
        maxthon: "Maxthon",
        edge: "Microsoft Edge",
        mz: "MZ Browser",
        naver: "NAVER Whale Browser",
        opera: "Opera",
        opera_coast: "Opera Coast",
        phantomjs: "PhantomJS",
        puffin: "Puffin",
        qupzilla: "QupZilla",
        qq: "QQ Browser",
        qqlite: "QQ Browser Lite",
        safari: "Safari",
        sailfish: "Sailfish",
        samsung_internet: "Samsung Internet for Android",
        seamonkey: "SeaMonkey",
        sleipnir: "Sleipnir",
        swing: "Swing",
        tizen: "Tizen",
        uc: "UC Browser",
        vivaldi: "Vivaldi",
        webos: "WebOS Browser",
        wechat: "WeChat",
        yandex: "Yandex Browser"
      };
      t.PLATFORMS_MAP = {
        tablet: "tablet",
        mobile: "mobile",
        desktop: "desktop",
        tv: "tv"
      };
      t.OS_MAP = {
        WindowsPhone: "Windows Phone",
        Windows: "Windows",
        MacOS: "macOS",
        iOS: "iOS",
        Android: "Android",
        WebOS: "WebOS",
        BlackBerry: "BlackBerry",
        Bada: "Bada",
        Tizen: "Tizen",
        Linux: "Linux",
        ChromeOS: "Chrome OS",
        PlayStation4: "PlayStation 4",
        Roku: "Roku"
      };
      t.ENGINE_MAP = {
        EdgeHTML: "EdgeHTML",
        Blink: "Blink",
        Trident: "Trident",
        Presto: "Presto",
        Gecko: "Gecko",
        WebKit: "WebKit"
      };
    },
    90: function (e, t, r) {
      "use strict";

      t.__esModule = !0, t.default = void 0;
      var n,
          i = (n = r(91)) && n.__esModule ? n : {
        default: n
      },
          s = r(18);

      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }

      var a = function () {
        function e() {}

        var t, r, n;
        return e.getParser = function (e, t) {
          if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
          return new i.default(e, t);
        }, e.parse = function (e) {
          return new i.default(e).getResult();
        }, t = e, n = [{
          key: "BROWSER_MAP",
          get: function () {
            return s.BROWSER_MAP;
          }
        }, {
          key: "ENGINE_MAP",
          get: function () {
            return s.ENGINE_MAP;
          }
        }, {
          key: "OS_MAP",
          get: function () {
            return s.OS_MAP;
          }
        }, {
          key: "PLATFORMS_MAP",
          get: function () {
            return s.PLATFORMS_MAP;
          }
        }], (r = null) && o(t.prototype, r), n && o(t, n), e;
      }();

      t.default = a, e.exports = t.default;
    },
    91: function (e, t, r) {
      "use strict";

      t.__esModule = !0, t.default = void 0;
      var n = u(r(92)),
          i = u(r(93)),
          s = u(r(94)),
          o = u(r(95)),
          a = u(r(17));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var d = function () {
        function e(e, t) {
          if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
          this._ua = e, this.parsedResult = {}, !0 !== t && this.parse();
        }

        var t = e.prototype;
        return t.getUA = function () {
          return this._ua;
        }, t.test = function (e) {
          return e.test(this._ua);
        }, t.parseBrowser = function () {
          var e = this;
          this.parsedResult.browser = {};
          var t = a.default.find(n.default, function (t) {
            if ("function" == typeof t.test) return t.test(e);
            if (t.test instanceof Array) return t.test.some(function (t) {
              return e.test(t);
            });
            throw new Error("Browser's test function is not valid");
          });
          return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
        }, t.getBrowser = function () {
          return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
        }, t.getBrowserName = function (e) {
          return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
        }, t.getBrowserVersion = function () {
          return this.getBrowser().version;
        }, t.getOS = function () {
          return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
        }, t.parseOS = function () {
          var e = this;
          this.parsedResult.os = {};
          var t = a.default.find(i.default, function (t) {
            if ("function" == typeof t.test) return t.test(e);
            if (t.test instanceof Array) return t.test.some(function (t) {
              return e.test(t);
            });
            throw new Error("Browser's test function is not valid");
          });
          return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
        }, t.getOSName = function (e) {
          var t = this.getOS().name;
          return e ? String(t).toLowerCase() || "" : t || "";
        }, t.getOSVersion = function () {
          return this.getOS().version;
        }, t.getPlatform = function () {
          return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
        }, t.getPlatformType = function (e) {
          void 0 === e && (e = !1);
          var t = this.getPlatform().type;
          return e ? String(t).toLowerCase() || "" : t || "";
        }, t.parsePlatform = function () {
          var e = this;
          this.parsedResult.platform = {};
          var t = a.default.find(s.default, function (t) {
            if ("function" == typeof t.test) return t.test(e);
            if (t.test instanceof Array) return t.test.some(function (t) {
              return e.test(t);
            });
            throw new Error("Browser's test function is not valid");
          });
          return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
        }, t.getEngine = function () {
          return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
        }, t.getEngineName = function (e) {
          return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
        }, t.parseEngine = function () {
          var e = this;
          this.parsedResult.engine = {};
          var t = a.default.find(o.default, function (t) {
            if ("function" == typeof t.test) return t.test(e);
            if (t.test instanceof Array) return t.test.some(function (t) {
              return e.test(t);
            });
            throw new Error("Browser's test function is not valid");
          });
          return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
        }, t.parse = function () {
          return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
        }, t.getResult = function () {
          return a.default.assign({}, this.parsedResult);
        }, t.satisfies = function (e) {
          var t = this,
              r = {},
              n = 0,
              i = {},
              s = 0;

          if (Object.keys(e).forEach(function (t) {
            var o = e[t];
            "string" == typeof o ? (i[t] = o, s += 1) : "object" == typeof o && (r[t] = o, n += 1);
          }), n > 0) {
            var o = Object.keys(r),
                u = a.default.find(o, function (e) {
              return t.isOS(e);
            });

            if (u) {
              var d = this.satisfies(r[u]);
              if (void 0 !== d) return d;
            }

            var c = a.default.find(o, function (e) {
              return t.isPlatform(e);
            });

            if (c) {
              var f = this.satisfies(r[c]);
              if (void 0 !== f) return f;
            }
          }

          if (s > 0) {
            var l = Object.keys(i),
                h = a.default.find(l, function (e) {
              return t.isBrowser(e, !0);
            });
            if (void 0 !== h) return this.compareVersion(i[h]);
          }
        }, t.isBrowser = function (e, t) {
          void 0 === t && (t = !1);
          var r = this.getBrowserName().toLowerCase(),
              n = e.toLowerCase(),
              i = a.default.getBrowserTypeByAlias(n);
          return t && i && (n = i.toLowerCase()), n === r;
        }, t.compareVersion = function (e) {
          var t = [0],
              r = e,
              n = !1,
              i = this.getBrowserVersion();
          if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(a.default.compareVersions(i, r, n)) > -1;
        }, t.isOS = function (e) {
          return this.getOSName(!0) === String(e).toLowerCase();
        }, t.isPlatform = function (e) {
          return this.getPlatformType(!0) === String(e).toLowerCase();
        }, t.isEngine = function (e) {
          return this.getEngineName(!0) === String(e).toLowerCase();
        }, t.is = function (e) {
          return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e);
        }, t.some = function (e) {
          var t = this;
          return void 0 === e && (e = []), e.some(function (e) {
            return t.is(e);
          });
        }, e;
      }();

      t.default = d, e.exports = t.default;
    },
    92: function (e, t, r) {
      "use strict";

      t.__esModule = !0, t.default = void 0;
      var n,
          i = (n = r(17)) && n.__esModule ? n : {
        default: n
      };
      var s = /version\/(\d+(\.?_?\d+)+)/i,
          o = [{
        test: [/googlebot/i],
        describe: function (e) {
          var t = {
            name: "Googlebot"
          },
              r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/opera/i],
        describe: function (e) {
          var t = {
            name: "Opera"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/opr\/|opios/i],
        describe: function (e) {
          var t = {
            name: "Opera"
          },
              r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/SamsungBrowser/i],
        describe: function (e) {
          var t = {
            name: "Samsung Internet for Android"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/Whale/i],
        describe: function (e) {
          var t = {
            name: "NAVER Whale Browser"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/MZBrowser/i],
        describe: function (e) {
          var t = {
            name: "MZ Browser"
          },
              r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/focus/i],
        describe: function (e) {
          var t = {
            name: "Focus"
          },
              r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/swing/i],
        describe: function (e) {
          var t = {
            name: "Swing"
          },
              r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/coast/i],
        describe: function (e) {
          var t = {
            name: "Opera Coast"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/yabrowser/i],
        describe: function (e) {
          var t = {
            name: "Yandex Browser"
          },
              r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/ucbrowser/i],
        describe: function (e) {
          var t = {
            name: "UC Browser"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/Maxthon|mxios/i],
        describe: function (e) {
          var t = {
            name: "Maxthon"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/epiphany/i],
        describe: function (e) {
          var t = {
            name: "Epiphany"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/puffin/i],
        describe: function (e) {
          var t = {
            name: "Puffin"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/sleipnir/i],
        describe: function (e) {
          var t = {
            name: "Sleipnir"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/k-meleon/i],
        describe: function (e) {
          var t = {
            name: "K-Meleon"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/micromessenger/i],
        describe: function (e) {
          var t = {
            name: "WeChat"
          },
              r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/qqbrowser/i],
        describe: function (e) {
          var t = {
            name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
          },
              r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/msie|trident/i],
        describe: function (e) {
          var t = {
            name: "Internet Explorer"
          },
              r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/\sedg\//i],
        describe: function (e) {
          var t = {
            name: "Microsoft Edge"
          },
              r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/edg([ea]|ios)/i],
        describe: function (e) {
          var t = {
            name: "Microsoft Edge"
          },
              r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/vivaldi/i],
        describe: function (e) {
          var t = {
            name: "Vivaldi"
          },
              r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/seamonkey/i],
        describe: function (e) {
          var t = {
            name: "SeaMonkey"
          },
              r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/sailfish/i],
        describe: function (e) {
          var t = {
            name: "Sailfish"
          },
              r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/silk/i],
        describe: function (e) {
          var t = {
            name: "Amazon Silk"
          },
              r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/phantom/i],
        describe: function (e) {
          var t = {
            name: "PhantomJS"
          },
              r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/slimerjs/i],
        describe: function (e) {
          var t = {
            name: "SlimerJS"
          },
              r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe: function (e) {
          var t = {
            name: "BlackBerry"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/(web|hpw)[o0]s/i],
        describe: function (e) {
          var t = {
            name: "WebOS Browser"
          },
              r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/bada/i],
        describe: function (e) {
          var t = {
            name: "Bada"
          },
              r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/tizen/i],
        describe: function (e) {
          var t = {
            name: "Tizen"
          },
              r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/qupzilla/i],
        describe: function (e) {
          var t = {
            name: "QupZilla"
          },
              r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/firefox|iceweasel|fxios/i],
        describe: function (e) {
          var t = {
            name: "Firefox"
          },
              r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/electron/i],
        describe: function (e) {
          var t = {
            name: "Electron"
          },
              r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/chromium/i],
        describe: function (e) {
          var t = {
            name: "Chromium"
          },
              r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/chrome|crios|crmo/i],
        describe: function (e) {
          var t = {
            name: "Chrome"
          },
              r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/GSA/i],
        describe: function (e) {
          var t = {
            name: "Google Search"
          },
              r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: function (e) {
          var t = !e.test(/like android/i),
              r = e.test(/android/i);
          return t && r;
        },
        describe: function (e) {
          var t = {
            name: "Android Browser"
          },
              r = i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/playstation 4/i],
        describe: function (e) {
          var t = {
            name: "PlayStation 4"
          },
              r = i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/safari|applewebkit/i],
        describe: function (e) {
          var t = {
            name: "Safari"
          },
              r = i.default.getFirstMatch(s, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/.*/i],
        describe: function (e) {
          var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
          return {
            name: i.default.getFirstMatch(t, e),
            version: i.default.getSecondMatch(t, e)
          };
        }
      }];
      t.default = o, e.exports = t.default;
    },
    93: function (e, t, r) {
      "use strict";

      t.__esModule = !0, t.default = void 0;
      var n,
          i = (n = r(17)) && n.__esModule ? n : {
        default: n
      },
          s = r(18);
      var o = [{
        test: [/Roku\/DVP/],
        describe: function (e) {
          var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
          return {
            name: s.OS_MAP.Roku,
            version: t
          };
        }
      }, {
        test: [/windows phone/i],
        describe: function (e) {
          var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
          return {
            name: s.OS_MAP.WindowsPhone,
            version: t
          };
        }
      }, {
        test: [/windows /i],
        describe: function (e) {
          var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
              r = i.default.getWindowsVersionName(t);
          return {
            name: s.OS_MAP.Windows,
            version: t,
            versionName: r
          };
        }
      }, {
        test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
        describe: function (e) {
          var t = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
          return {
            name: s.OS_MAP.iOS,
            version: t
          };
        }
      }, {
        test: [/macintosh/i],
        describe: function (e) {
          var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
              r = i.default.getMacOSVersionName(t),
              n = {
            name: s.OS_MAP.MacOS,
            version: t
          };
          return r && (n.versionName = r), n;
        }
      }, {
        test: [/(ipod|iphone|ipad)/i],
        describe: function (e) {
          var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
          return {
            name: s.OS_MAP.iOS,
            version: t
          };
        }
      }, {
        test: function (e) {
          var t = !e.test(/like android/i),
              r = e.test(/android/i);
          return t && r;
        },
        describe: function (e) {
          var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
              r = i.default.getAndroidVersionName(t),
              n = {
            name: s.OS_MAP.Android,
            version: t
          };
          return r && (n.versionName = r), n;
        }
      }, {
        test: [/(web|hpw)[o0]s/i],
        describe: function (e) {
          var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
              r = {
            name: s.OS_MAP.WebOS
          };
          return t && t.length && (r.version = t), r;
        }
      }, {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe: function (e) {
          var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
          return {
            name: s.OS_MAP.BlackBerry,
            version: t
          };
        }
      }, {
        test: [/bada/i],
        describe: function (e) {
          var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
          return {
            name: s.OS_MAP.Bada,
            version: t
          };
        }
      }, {
        test: [/tizen/i],
        describe: function (e) {
          var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
          return {
            name: s.OS_MAP.Tizen,
            version: t
          };
        }
      }, {
        test: [/linux/i],
        describe: function () {
          return {
            name: s.OS_MAP.Linux
          };
        }
      }, {
        test: [/CrOS/],
        describe: function () {
          return {
            name: s.OS_MAP.ChromeOS
          };
        }
      }, {
        test: [/PlayStation 4/],
        describe: function (e) {
          var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
          return {
            name: s.OS_MAP.PlayStation4,
            version: t
          };
        }
      }];
      t.default = o, e.exports = t.default;
    },
    94: function (e, t, r) {
      "use strict";

      t.__esModule = !0, t.default = void 0;
      var n,
          i = (n = r(17)) && n.__esModule ? n : {
        default: n
      },
          s = r(18);
      var o = [{
        test: [/googlebot/i],
        describe: function () {
          return {
            type: "bot",
            vendor: "Google"
          };
        }
      }, {
        test: [/huawei/i],
        describe: function (e) {
          var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
              r = {
            type: s.PLATFORMS_MAP.mobile,
            vendor: "Huawei"
          };
          return t && (r.model = t), r;
        }
      }, {
        test: [/nexus\s*(?:7|8|9|10).*/i],
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.tablet,
            vendor: "Nexus"
          };
        }
      }, {
        test: [/ipad/i],
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.tablet,
            vendor: "Apple",
            model: "iPad"
          };
        }
      }, {
        test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.tablet,
            vendor: "Apple",
            model: "iPad"
          };
        }
      }, {
        test: [/kftt build/i],
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.tablet,
            vendor: "Amazon",
            model: "Kindle Fire HD 7"
          };
        }
      }, {
        test: [/silk/i],
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.tablet,
            vendor: "Amazon"
          };
        }
      }, {
        test: [/tablet(?! pc)/i],
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.tablet
          };
        }
      }, {
        test: function (e) {
          var t = e.test(/ipod|iphone/i),
              r = e.test(/like (ipod|iphone)/i);
          return t && !r;
        },
        describe: function (e) {
          var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
          return {
            type: s.PLATFORMS_MAP.mobile,
            vendor: "Apple",
            model: t
          };
        }
      }, {
        test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.mobile,
            vendor: "Nexus"
          };
        }
      }, {
        test: [/[^-]mobi/i],
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.mobile
          };
        }
      }, {
        test: function (e) {
          return "blackberry" === e.getBrowserName(!0);
        },
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.mobile,
            vendor: "BlackBerry"
          };
        }
      }, {
        test: function (e) {
          return "bada" === e.getBrowserName(!0);
        },
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.mobile
          };
        }
      }, {
        test: function (e) {
          return "windows phone" === e.getBrowserName();
        },
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.mobile,
            vendor: "Microsoft"
          };
        }
      }, {
        test: function (e) {
          var t = Number(String(e.getOSVersion()).split(".")[0]);
          return "android" === e.getOSName(!0) && t >= 3;
        },
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.tablet
          };
        }
      }, {
        test: function (e) {
          return "android" === e.getOSName(!0);
        },
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.mobile
          };
        }
      }, {
        test: function (e) {
          return "macos" === e.getOSName(!0);
        },
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.desktop,
            vendor: "Apple"
          };
        }
      }, {
        test: function (e) {
          return "windows" === e.getOSName(!0);
        },
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.desktop
          };
        }
      }, {
        test: function (e) {
          return "linux" === e.getOSName(!0);
        },
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.desktop
          };
        }
      }, {
        test: function (e) {
          return "playstation 4" === e.getOSName(!0);
        },
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.tv
          };
        }
      }, {
        test: function (e) {
          return "roku" === e.getOSName(!0);
        },
        describe: function () {
          return {
            type: s.PLATFORMS_MAP.tv
          };
        }
      }];
      t.default = o, e.exports = t.default;
    },
    95: function (e, t, r) {
      "use strict";

      t.__esModule = !0, t.default = void 0;
      var n,
          i = (n = r(17)) && n.__esModule ? n : {
        default: n
      },
          s = r(18);
      var o = [{
        test: function (e) {
          return "microsoft edge" === e.getBrowserName(!0);
        },
        describe: function (e) {
          if (/\sedg\//i.test(e)) return {
            name: s.ENGINE_MAP.Blink
          };
          var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
          return {
            name: s.ENGINE_MAP.EdgeHTML,
            version: t
          };
        }
      }, {
        test: [/trident/i],
        describe: function (e) {
          var t = {
            name: s.ENGINE_MAP.Trident
          },
              r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: function (e) {
          return e.test(/presto/i);
        },
        describe: function (e) {
          var t = {
            name: s.ENGINE_MAP.Presto
          },
              r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: function (e) {
          var t = e.test(/gecko/i),
              r = e.test(/like gecko/i);
          return t && !r;
        },
        describe: function (e) {
          var t = {
            name: s.ENGINE_MAP.Gecko
          },
              r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }, {
        test: [/(apple)?webkit\/537\.36/i],
        describe: function () {
          return {
            name: s.ENGINE_MAP.Blink
          };
        }
      }, {
        test: [/(apple)?webkit/i],
        describe: function (e) {
          var t = {
            name: s.ENGINE_MAP.WebKit
          },
              r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
          return r && (t.version = r), t;
        }
      }];
      t.default = o, e.exports = t.default;
    }
  });
}); // CaseYak Stuff

(function () {
  var result = bowser.getParser(window.navigator.userAgent);
  const browserName = result.parsedResult.browser.name;
  const browserVersion = result.parsedResult.browser.version;

  if (browserName == 'Chrome' || browserName == 'Microsoft Edge' || browserName == 'Safari' || browserName == 'Firefox') {} else {
    console.log('Browser not supported by CaseYak, sorry');
    console.log(browserName + " v" + browserVersion);
    return;
  }

  const isValidBrowser = result.satisfies({
    // check min versions for bulma https://github.com/jgthms/bulma#browser-support
    chrome: ">=4",
    firefox: ">=2",
    safari: ">3",
    edge: ">=12"
  });

  if (isValidBrowser == false) {
    if (typeof yakLoadingFailed === "function") {
      const json = {
        browserName: browserName,
        browserVersion: browserVersion
      };
      yakLoadingFailed(json);
    }

    return;
  }

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  var isCondensed = vw < 380;
  var currentScript = document.currentScript;
  var yakToken = currentScript.getAttribute('yak-token');

  if (!yakToken) {
    return;
  } // allows us to auto launch straight into the form when the yak bubble is not there


  const skipBubble = currentScript.getAttribute('yak-auto-launch') || false;
  const shouldSkipBubble = skipBubble == 'true' ? true : false; // allows us to pass in a language when the yak bubble is not there

  const yakLanguage = currentScript.getAttribute('yak-language') || 'english'; // pass in the referrer ID for ad tracking

  const rid = new URLSearchParams(window.location.search).get('refid');
  const refid = rid || 'direct'; // allows us to embed the iframe in another context, not just a plugin

  const isExpanded = currentScript.getAttribute('expanded') || false;
  const embeddedParentEl = currentScript.getAttribute('caseyak-container-id') || 'caseyak-embedded-container';
  const shouldExpand = isExpanded == 'true' ? true : false;

  function checkPreFlight(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        const resp = JSON.parse(xmlHttp.responseText);
        callback(resp);
      }
    };

    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  }

  var url = "";

  var loadWidget = function (slidePosition = 'right', languages = ['english'], bottomPx = '15px') {
    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    const rando = new Date().getTime();
    document.getElementsByTagName('head')[0].appendChild(cssLink);
    var bubbleText = "Injured in a motor vehicle accident? Click here to tell us more.";

    if (languages.includes("spanish")) {
      bubbleText = bubbleText + "<div id='yakWidget-spanish-text-111'>Diganos sobre su caso!</div>";
    }

    var widgetHtml = `
   <div id="yakWidget-inner-111">
       <div id="yakText-111">
           <a id="yakBubbleClose-111"><div style="margin-top:-2px" id="yak-bubble-close-x">x</div></a>
           <p id="yakTop-text-111">${bubbleText}</p>
       </div>
   </div>
   `;

    if (slidePosition == 'left') {
      widgetHtml = `<div id="yakImage-111"></div>` + widgetHtml;
    } else {
      widgetHtml = widgetHtml + `<div id="yakImage-111"></div>`;
    }

    var containerHtml = `
   <div id="yakFormHeader-111">
       <a id="yakFormHeaderClose-111"><div style="margin-top:-2px">x</div></a>
   </div>
   <div id="yak-loader"></div>
   <iframe style="width:100%;height:92%;border:none;margin-top:-30px;" id="yakForm-111"></iframe>
   <div id='yakPowered-111'>
     <a style='color:black;text-decoration: none' target='_blank' href='https://www.caseyak.com'> <span id='yakPoweredText-111'></span></a>
   </div>
   `; // create slide out bubble

    var widget = document.createElement('div');
    widget.setAttribute('id', 'yakWidget-111');

    if (slidePosition == 'left') {
      widget.setAttribute('style', 'transition: left 1s; left: -500px;');
    } else {
      widget.setAttribute('style', 'transition: right 1s; right: -500px;');
    }

    widget.style.bottom = bottomPx || '15px';
    widget.innerHTML = widgetHtml;
    document.body.appendChild(widget); // create actual widget

    var yakContainer = document.createElement('div');
    yakContainer.setAttribute('id', 'yakContainer-111');

    if (slidePosition == 'left') {
      yakContainer.setAttribute('style', 'width: 340px; transition: left 0.6s;left:-700px');
    } else {
      yakContainer.setAttribute('style', 'width: 340px; transition: right 0.6s;right:-700px');
    }

    yakContainer.innerHTML = containerHtml;
    document.body.appendChild(yakContainer);

    if (isCondensed) {
      yakContainer.style.width = '100%';
      yakContainer.style.height = '100%';
      yakContainer.style.borderRadius = '0px';
      yakContainer.style.bottom = '0px';
    }

    const spanishDiv = document.getElementById("yakWidget-spanish-text-111");

    if (spanishDiv) {
      spanishDiv.addEventListener("click", function () {
        url = url.replace('lang=english', 'lang=spanish');
        document.getElementById('yakForm-111').setAttribute('src', url);
      });
    }
  };

  var loadEmbeddedForm = function (languages = ['english']) {
    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    const rando = new Date().getTime();
    document.getElementsByTagName('head')[0].appendChild(cssLink);
    var containerHtml = `
   <div id="yak-loader"></div>
   <iframe style="width:100%;min-height:500px;border:none;margin-top:10px;" id="yakForm-111"></iframe>
   <div id='yakPowered-111'>
     <a style='text-decoration:none;color:#00d1b2' target='_blank' href='https://www.caseyak.com'> <span id='yakPoweredText-111'> </span><span> CaseYak</span>
   </div>
   `;
    const existingContainerElement = document.getElementById(embeddedParentEl);

    if (existingContainerElement) {
      existingContainerElement.innerHTML = containerHtml;
    }
  };

  var slideOutYak = function (slidePosition = 'right') {
    // slide out yak bubble
    setTimeout(function () {
      if (slidePosition == 'left') {
        document.getElementById('yakWidget-111').style.left = '10px';
        document.getElementById('yakWidget-111').style.textAlign = 'left';
      } else {
        document.getElementById('yakWidget-111').style.right = '10px';
      }
    }, 1000);
  };

  function launchForm(slidePosition = 'right', isCondensed = false) {
    var yakWidget = document.getElementById('yakWidget-111');

    if (slidePosition == 'left') {
      yakWidget.style.left = '-500px';
      document.getElementById('yakContainer-111').style.left = isCondensed ? '0px' : '10px';
    } else {
      yakWidget.style.right = '-500px';
      document.getElementById('yakContainer-111').style.right = isCondensed ? '0px' : '10px';
    }

    document.getElementById('yakFormHeaderClose-111').style.display = 'inherit';
  }

  var successCallback = function (response) {
    var slidePosition = 'right';
    var bottomPx = '15px';

    if (response.configuration) {
      if (response.configuration.slide_position && response.configuration.slide_position == 'left') {
        slidePosition = 'left';
      }

      var injectedSlidePosition = currentScript.getAttribute('slide-position');

      if (injectedSlidePosition && injectedSlidePosition == 'left') {
        slidePosition = 'left';
      } // TODO: - allow passing in entire styling object?


      if (response.configuration.bottom) {
        bottomPx = response.configuration.bottom;
      }
    }

    if (shouldExpand == true) {
      loadEmbeddedForm();
    } else {
      loadWidget(slidePosition, response.firm.languages, bottomPx);
    } // load questionnaire UI into iframe:


    url = response.yakHost + '?yakToken=' + yakToken;

    if (yakLanguage) {
      url = url + "&lang=" + yakLanguage;
    }

    if (refid) {
      url = url + "&refid=" + refid;
    }

    const iframe = document.getElementById('yakForm-111');

    if (!iframe) {
      return;
    }

    iframe.setAttribute('src', url);

    iframe.onload = function () {
      document.getElementById('yak-loader').style.display = "none";
    };

    if (shouldExpand == true) {
      return;
    } // register event listeners


    var yakWidget = document.getElementById('yakWidget-111');

    if (shouldSkipBubble == true) {
      launchForm(slidePosition, isCondensed);
    } else {
      // slide bubble onto the screen, register click handlers
      slideOutYak(slidePosition);
      yakWidget.addEventListener('click', event => {
        if (event.target.id == 'yak-bubble-close-x') {
          // user closed slide out bubble and doesnt want form
          yakWidget.remove();
          return;
        }

        if (slidePosition == 'left') {
          yakWidget.style.left = '-500px';
          document.getElementById('yakContainer-111').style.left = isCondensed ? '0px' : '10px';
        } else {
          yakWidget.style.right = '-500px';
          document.getElementById('yakContainer-111').style.right = isCondensed ? '0px' : '10px';
        }

        document.getElementById('yakFormHeaderClose-111').style.display = 'inherit';
      });
    } // hide the widget ie set style.right way negative


    document.getElementById('yakFormHeaderClose-111').addEventListener('click', function () {
      if (slidePosition == 'left') {
        document.getElementById('yakContainer-111').style.left = '-500px';
      } else {
        document.getElementById('yakContainer-111').style.right = '-500px';
      }
    });
  };

  const preflight = 'https://www.pakalapp.com/reporter/preflight?yakToken=' + yakToken;
  checkPreFlight(preflight, successCallback);
})();