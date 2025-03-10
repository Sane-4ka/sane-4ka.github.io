(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (e[o] = n[o]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            n =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = t && "IntersectionObserver" in window,
            r = t && "classList" in document.createElement("p"),
            c = t && window.devicePixelRatio > 1,
            i = {
              elements_selector: ".lazy",
              container: n || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            a = function (t) {
              return e({}, i, t);
            },
            l = function (e, t) {
              var n,
                o = "LazyLoad::Initialized",
                r = new e(t);
              try {
                n = new CustomEvent(o, { detail: { instance: r } });
              } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: r }
                );
              }
              window.dispatchEvent(n);
            },
            s = "src",
            d = "srcset",
            u = "sizes",
            f = "poster",
            h = "llOriginalAttrs",
            m = "loading",
            p = "loaded",
            g = "applied",
            _ = "error",
            b = "native",
            v = "data-",
            y = "ll-status",
            w = function (e, t) {
              return e.getAttribute(v + t);
            },
            k = function (e) {
              return w(e, y);
            },
            E = function (e, t) {
              return (function (e, t, n) {
                var o = "data-ll-status";
                null !== n ? e.setAttribute(o, n) : e.removeAttribute(o);
              })(e, 0, t);
            },
            L = function (e) {
              return E(e, null);
            },
            x = function (e) {
              return null === k(e);
            },
            A = function (e) {
              return k(e) === b;
            },
            S = [m, p, g, _],
            I = function (e, t, n, o) {
              e &&
                (void 0 === o ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, o));
            },
            q = function (e, t) {
              r
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            C = function (e, t) {
              r
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            W = function (e) {
              return e.llTempImage;
            },
            M = function (e, t) {
              if (t) {
                var n = t._observer;
                n && n.unobserve(e);
              }
            },
            O = function (e, t) {
              e && (e.loadingCount += t);
            },
            T = function (e, t) {
              e && (e.toLoadCount = t);
            },
            R = function (e) {
              for (var t, n = [], o = 0; (t = e.children[o]); o += 1)
                "SOURCE" === t.tagName && n.push(t);
              return n;
            },
            $ = function (e, t) {
              var n = e.parentNode;
              n && "PICTURE" === n.tagName && R(n).forEach(t);
            },
            j = function (e, t) {
              R(e).forEach(t);
            },
            z = [s],
            N = [s, f],
            H = [s, d, u],
            D = function (e) {
              return !!e[h];
            },
            P = function (e) {
              return e[h];
            },
            G = function (e) {
              return delete e[h];
            },
            B = function (e, t) {
              if (!D(e)) {
                var n = {};
                t.forEach(function (t) {
                  n[t] = e.getAttribute(t);
                }),
                  (e[h] = n);
              }
            },
            F = function (e, t) {
              if (D(e)) {
                var n = P(e);
                t.forEach(function (t) {
                  !(function (e, t, n) {
                    n ? e.setAttribute(t, n) : e.removeAttribute(t);
                  })(e, t, n[t]);
                });
              }
            },
            Q = function (e, t, n) {
              q(e, t.class_loading),
                E(e, m),
                n && (O(n, 1), I(t.callback_loading, e, n));
            },
            V = function (e, t, n) {
              n && e.setAttribute(t, n);
            },
            U = function (e, t) {
              V(e, u, w(e, t.data_sizes)),
                V(e, d, w(e, t.data_srcset)),
                V(e, s, w(e, t.data_src));
            },
            Z = {
              IMG: function (e, t) {
                $(e, function (e) {
                  B(e, H), U(e, t);
                }),
                  B(e, H),
                  U(e, t);
              },
              IFRAME: function (e, t) {
                B(e, z), V(e, s, w(e, t.data_src));
              },
              VIDEO: function (e, t) {
                j(e, function (e) {
                  B(e, z), V(e, s, w(e, t.data_src));
                }),
                  B(e, N),
                  V(e, f, w(e, t.data_poster)),
                  V(e, s, w(e, t.data_src)),
                  e.load();
              },
            },
            X = ["IMG", "IFRAME", "VIDEO"],
            J = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                I(e.callback_finish, t);
            },
            Y = function (e, t, n) {
              e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
            },
            K = function (e, t, n) {
              e.removeEventListener(t, n);
            },
            ee = function (e) {
              return !!e.llEvLisnrs;
            },
            te = function (e) {
              if (ee(e)) {
                var t = e.llEvLisnrs;
                for (var n in t) {
                  var o = t[n];
                  K(e, n, o);
                }
                delete e.llEvLisnrs;
              }
            },
            ne = function (e, t, n) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                O(n, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(n),
                C(e, t.class_loading),
                t.unobserve_completed && M(e, n);
            },
            oe = function (e, t, n) {
              var o = W(e) || e;
              ee(o) ||
                (function (e, t, n) {
                  ee(e) || (e.llEvLisnrs = {});
                  var o = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  Y(e, o, t), Y(e, "error", n);
                })(
                  o,
                  function (r) {
                    !(function (e, t, n, o) {
                      var r = A(t);
                      ne(t, n, o),
                        q(t, n.class_loaded),
                        E(t, p),
                        I(n.callback_loaded, t, o),
                        r || J(n, o);
                    })(0, e, t, n),
                      te(o);
                  },
                  function (r) {
                    !(function (e, t, n, o) {
                      var r = A(t);
                      ne(t, n, o),
                        q(t, n.class_error),
                        E(t, _),
                        I(n.callback_error, t, o),
                        r || J(n, o);
                    })(0, e, t, n),
                      te(o);
                  }
                );
            },
            re = function (e, t, n) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                oe(e, t, n),
                (function (e) {
                  D(e) || (e[h] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, n) {
                  var o = w(e, t.data_bg),
                    r = w(e, t.data_bg_hidpi),
                    i = c && r ? r : o;
                  i &&
                    ((e.style.backgroundImage = 'url("'.concat(i, '")')),
                    W(e).setAttribute(s, i),
                    Q(e, t, n));
                })(e, t, n),
                (function (e, t, n) {
                  var o = w(e, t.data_bg_multi),
                    r = w(e, t.data_bg_multi_hidpi),
                    i = c && r ? r : o;
                  i &&
                    ((e.style.backgroundImage = i),
                    (function (e, t, n) {
                      q(e, t.class_applied),
                        E(e, g),
                        n &&
                          (t.unobserve_completed && M(e, t),
                          I(t.callback_applied, e, n));
                    })(e, t, n));
                })(e, t, n);
            },
            ce = function (e, t, n) {
              !(function (e) {
                return X.indexOf(e.tagName) > -1;
              })(e)
                ? re(e, t, n)
                : (function (e, t, n) {
                    oe(e, t, n),
                      (function (e, t, n) {
                        var o = Z[e.tagName];
                        o && (o(e, t), Q(e, t, n));
                      })(e, t, n);
                  })(e, t, n);
            },
            ie = function (e) {
              e.removeAttribute(s), e.removeAttribute(d), e.removeAttribute(u);
            },
            ae = function (e) {
              $(e, function (e) {
                F(e, H);
              }),
                F(e, H);
            },
            le = {
              IMG: ae,
              IFRAME: function (e) {
                F(e, z);
              },
              VIDEO: function (e) {
                j(e, function (e) {
                  F(e, z);
                }),
                  F(e, N),
                  e.load();
              },
            },
            se = function (e, t) {
              (function (e) {
                var t = le[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (D(e)) {
                        var t = P(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  x(e) ||
                    A(e) ||
                    (C(e, t.class_entered),
                    C(e, t.class_exited),
                    C(e, t.class_applied),
                    C(e, t.class_loading),
                    C(e, t.class_loaded),
                    C(e, t.class_error));
                })(e, t),
                L(e),
                G(e);
            },
            de = ["IMG", "IFRAME", "VIDEO"],
            ue = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, n) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, n, o) {
                      var r = (function (e) {
                        return S.indexOf(k(e)) >= 0;
                      })(e);
                      E(e, "entered"),
                        q(e, n.class_entered),
                        C(e, n.class_exited),
                        (function (e, t, n) {
                          t.unobserve_entered && M(e, n);
                        })(e, n, o),
                        I(n.callback_enter, e, t, o),
                        r || ce(e, n, o);
                    })(e.target, e, t, n)
                  : (function (e, t, n, o) {
                      x(e) ||
                        (q(e, n.class_exited),
                        (function (e, t, n, o) {
                          n.cancel_on_exit &&
                            (function (e) {
                              return k(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (te(e),
                            (function (e) {
                              $(e, function (e) {
                                ie(e);
                              }),
                                ie(e);
                            })(e),
                            ae(e),
                            C(e, n.class_loading),
                            O(o, -1),
                            L(e),
                            I(n.callback_cancel, e, t, o));
                        })(e, t, n, o),
                        I(n.callback_exit, e, t, o));
                    })(e.target, e, t, n);
              });
            },
            he = function (e) {
              return Array.prototype.slice.call(e);
            },
            me = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            pe = function (e) {
              return (function (e) {
                return k(e) === _;
              })(e);
            },
            ge = function (e, t) {
              return (function (e) {
                return he(e).filter(x);
              })(e || me(t));
            },
            _e = function (e, n) {
              var r = a(e);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (e, t) {
                  o &&
                    !ue(e) &&
                    (t._observer = new IntersectionObserver(
                      function (n) {
                        fe(n, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(r, this),
                (function (e, n) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var n;
                        ((n = me(e)), he(n).filter(pe)).forEach(function (t) {
                          C(t, e.class_error), L(t);
                        }),
                          t.update();
                      })(e, n);
                    });
                })(r, this),
                this.update(n);
            };
          return (
            (_e.prototype = {
              update: function (e) {
                var t,
                  r,
                  c = this._settings,
                  i = ge(e, c);
                T(this, i.length),
                  !n && o
                    ? ue(c)
                      ? (function (e, t, n) {
                          e.forEach(function (e) {
                            -1 !== de.indexOf(e.tagName) &&
                              (function (e, t, n) {
                                e.setAttribute("loading", "lazy"),
                                  oe(e, t, n),
                                  (function (e, t) {
                                    var n = Z[e.tagName];
                                    n && n(e, t);
                                  })(e, t),
                                  E(e, b);
                              })(e, t, n);
                          }),
                            T(n, 0);
                        })(i, c, this)
                      : ((r = i),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, r))
                    : this.loadAll(i);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  me(this._settings).forEach(function (e) {
                    G(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  n = this._settings;
                ge(e, n).forEach(function (e) {
                  M(e, t), ce(e, n, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                me(e).forEach(function (t) {
                  se(t, e);
                });
              },
            }),
            (_e.load = function (e, t) {
              var n = a(t);
              ce(e, n);
            }),
            (_e.resetStatus = function (e) {
              L(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var n, o = 0; (n = t[o]); o += 1) l(e, n);
                  else l(e, t);
              })(_e, window.lazyLoadOptions),
            _e
          );
        })();
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var c = (t[o] = { exports: {} });
    return e[o].call(c.exports, c, c.exports, n), c.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = !0,
      o = (e = 500) => {
        let n = document.querySelector("body");
        if (t) {
          let o = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < o.length; e++) {
              o[e].style.paddingRight = "0px";
            }
            (n.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      },
      r = (e = 500) => {
        let n = document.querySelector("body");
        if (t) {
          let o = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < o.length; e++) {
            o[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (n.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    function c(e) {
      return e.filter(function (e, t, n) {
        return n.indexOf(e) === t;
      });
    }
    new (n(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            c(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let n = t.split("|"),
                o = { root: n[0], margin: n[1], threshold: n[2] },
                r = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    n = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    r = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === o.root &&
                    String(n) === o.margin &&
                    String(r) === o.threshold
                  )
                    return e;
                }),
                c = this.getScrollWatcherConfig(o);
              this.scrollWatcherInit(r, c);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging &&
          (function (e) {
            setTimeout(() => {
              window.FLS && console.log(e);
            }, 0);
          })(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const n = e.target;
        this.scrollWatcherIntersecting(e, n),
          n.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(n, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let i = !1;
    function a(e) {
      this.type = e;
    }
    setTimeout(() => {
      if (i) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (a.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            n = t.dataset.da.trim().split(","),
            o = {};
          (o.element = t),
            (o.parent = t.parentNode),
            (o.destination = document.querySelector(n[0].trim())),
            (o.breakpoint = n[1] ? n[1].trim() : "767"),
            (o.place = n[2] ? n[2].trim() : "last"),
            (o.index = this.indexInParent(o.parent, o.element)),
            this.оbjects.push(o);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, n) {
              return Array.prototype.indexOf.call(n, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const n = this.mediaQueries[t],
            o = String.prototype.split.call(n, ","),
            r = window.matchMedia(o[0]),
            c = o[1],
            i = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === c;
            });
          r.addListener(function () {
            e.mediaHandler(r, i);
          }),
            this.mediaHandler(r, i);
        }
      }),
      (a.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (a.prototype.moveTo = function (e, t, n) {
        t.classList.add(this.daClassname),
          "last" === e || e >= n.children.length
            ? n.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? n.children[e].insertAdjacentElement("beforebegin", t)
            : n.insertAdjacentElement("afterbegin", t);
      }),
      (a.prototype.moveBack = function (e, t, n) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[n]
            ? e.children[n].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (a.prototype.indexInParent = function (e, t) {
        const n = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(n, t);
      }),
      (a.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new a("max").init(),
      document.addEventListener("DOMContentLoaded", () => {
        const e = document.querySelector(".body-mainpage__button"),
          t = document.querySelector(".main-page"),
          n = document.querySelector(".form-page");
        e.addEventListener("click", (e) => {
          e.preventDefault(),
            (t.style.right = "100%"),
            (t.style.display = "none"),
            (n.style.display = "block");
        });
        const o = document.querySelectorAll(".form-radio__item");
        function r(e) {
          o.forEach((e) => {
            e.classList.remove("active");
          });
          const t = e.target.closest(".form-radio__item");
          t.classList.add("active"),
            (t.querySelector(".form-radio__input").checked = !0);
        }
        o.forEach((e) => {
          e.addEventListener("click", r);
        });
        function c(e, t, n) {
          const o = e.target.closest(`.${t}`);
          o.classList.toggle("active"),
            o.classList.contains("active")
              ? (o.querySelector(`.${n}`).checked = !0)
              : (o.querySelector(`.${n}`).checked = !1);
        }
        document
          .querySelector(".form-checkbox")
          .addEventListener("click", (e) => {
            e.preventDefault(),
              e.target.closest(".form-checkbox__item") &&
                c(e, "form-checkbox__item", "checkbox__input");
          });
        function i(e, t) {
          const n = document.createElement("div");
          n.classList.add("form-checkbox__item"),
            (n.innerHTML = `\n                <div class="form-checkbox__img">\n                    <img src="img/${e}.png" alt="">\n                </div>\n                <div class="form-checkbox__checkbox checkbox">\n                    <input id="c_${e}" data-error="Ошибка" class="checkbox__input" type="checkbox" value="Explore other companies" name="form[objectives]">\n                    <label for="c_${e}" class="checkbox__label"><span class="checkbox__text">${t}</span></label>\n                </div>\n            `),
            document.querySelector(".form-checkbox").append(n);
        }
        document.querySelectorAll(".form-checkbox-bordered").forEach((e) => {
          e.addEventListener("click", (e) => {
            e.preventDefault(),
              e.target.closest(".form-checkbox-bordered__item") &&
                c(
                  e,
                  "form-checkbox-bordered__item",
                  "checkbox-bordered__input"
                );
          });
        }),
          i("05", "Business development"),
          i("06", "Invest"),
          i("07", "Explore new projects"),
          i("08", "Mentor others"),
          i("09", "Organize events");
        let a = 1;
        const l = document.querySelector(".steps__buttons_next"),
          s = document.querySelector(".steps__buttons_prev"),
          d = document.querySelector(".steps__buttons_google"),
          u = document.querySelector(".step__line"),
          f = document.querySelector(".step__line_red"),
          h = document.querySelectorAll(".step__item").length,
          m = document.querySelector(".text-steps__title"),
          p = document.querySelector(".text-steps__subtitle");
        let g = window.getComputedStyle(u).width;
        const _ = g.length - 2,
          b = g.slice(0, _);
        function v(e) {
          switch (
            ((document.querySelector(`.steps__mainblock_${e}`).style.display =
              "block"),
            e)
          ) {
            case 1:
              (m.innerHTML = "aedfghgfdwefg"),
                (p.innerHTML = "aedfghgfdwfghgfd5216541efg");
              break;
            case 2:
              (m.innerHTML = "loremdfghgewwerf"),
                (p.innerHTML = "aedfghgfwergtre45dwefg");
              break;
            case 3:
              (m.innerHTML = "loremwef5545dfghgewwerf"),
                (p.innerHTML = "aedfghgeretge8541245fdwefg");
          }
          w(e);
        }
        function y(e) {
          document.querySelector(`.steps__mainblock_${e}`).style.display =
            "none";
        }
        function w(e) {
          f.style.width = (b / (h - 1)) * (e - 1) + "px";
        }
        w(0),
          l.addEventListener("click", (e) => {
            a++,
              y(a - 1),
              1 !== a && (s.style.display = "inline-block"),
              5 == a &&
                ((s.style.display = "none"),
                (l.style.display = "none"),
                (d.style.display = "inline-block")),
              v(a);
          }),
          s.addEventListener("click", (e) => {
            a--, 1 == a && (s.style.display = "none"), y(a + 1), v(a);
          });
      });
    const l = document.querySelector("#file"),
      s = document.querySelector(".img-label__text");
    l.addEventListener("change", (e) => {
      let t = "";
      t = e.target.value;
      let n = t.split("\\")["" + (t.split("\\").length - 1)];
      if (n.length > 25) {
        let e = `${n.slice(0, 21)}...`;
        s.innerHTML = e;
      } else s.innerHTML = n;
    }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            t &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? o(e)
                  : r(e);
              })(),
              document.documentElement.classList.toggle("menu-open"),
              document.documentElement.classList.contains("catalog-open") &&
                document.documentElement.classList.remove("catalog-open"));
          });
      })();
  })();
})();
