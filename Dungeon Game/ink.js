!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).inkjs = {}));
})(this, function (s) {
  "use strict";
  function O(t) {
    return (O =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  function k(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function u(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && a(t, e);
  }
  function c(t) {
    return (c = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function a(t, e) {
    return (a =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function r(t, e, n) {
    return (r = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Reflect.construct
      : function (t, e, n) {
          var i = [null];
          i.push.apply(i, e);
          var r = new (Function.bind.apply(t, i))();
          return n && a(r, n.prototype), r;
        }).apply(null, arguments);
  }
  function e(t) {
    var n = "function" == typeof Map ? new Map() : void 0;
    return (e = function (t) {
      if (
        null === t ||
        !(function (t) {
          return -1 !== Function.toString.call(t).indexOf("[native code]");
        })(t)
      )
        return t;
      if ("function" != typeof t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== n) {
        if (n.has(t)) return n.get(t);
        n.set(t, e);
      }
      function e() {
        return r(t, arguments, c(this).constructor);
      }
      return (
        (e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        a(e, t)
      );
    })(t);
  }
  function f(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e)
      ? (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t)
      : e;
  }
  function _(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n = [],
          i = !0,
          r = !1,
          a = void 0;
        try {
          for (
            var o, u = t[Symbol.iterator]();
            !(i = (o = u.next()).done) &&
            (n.push(o.value), !e || n.length !== e);
            i = !0
          );
        } catch (t) {
          (r = !0), (a = t);
        } finally {
          try {
            i || null == u.return || u.return();
          } finally {
            if (r) throw a;
          }
        }
        return n;
      })(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      })()
    );
  }
  var t,
    n,
    x,
    l,
    N = (function () {
      function s() {
        if (
          (k(this, s),
          (this._components = []),
          (this._componentsString = null),
          (this._isRelative = !1),
          "string" == typeof arguments[0])
        ) {
          var t = arguments[0];
          this.componentsString = t;
        } else if (
          arguments[0] instanceof s.Component &&
          arguments[1] instanceof s
        ) {
          var e = arguments[0],
            n = arguments[1];
          this._components.push(e),
            (this._components = this._components.concat(n._components));
        } else if (arguments[0] instanceof Array) {
          var i = arguments[0],
            r = !!arguments[1];
          (this._components = this._components.concat(i)),
            (this._isRelative = r);
        }
      }
      return (
        o(
          s,
          [
            {
              key: "GetComponent",
              value: function (t) {
                return this._components[t];
              },
            },
            {
              key: "PathByAppendingPath",
              value: function (t) {
                for (
                  var e = new s(), n = 0, i = 0;
                  i < t._components.length && t._components[i].isParent;
                  ++i
                )
                  n++;
                for (var r = 0; r < this._components.length - n; ++r)
                  e._components.push(this._components[r]);
                for (var a = n; a < t._components.length; ++a)
                  e._components.push(t._components[a]);
                return e;
              },
            },
            {
              key: "toString",
              value: function () {
                return this.componentsString;
              },
            },
            {
              key: "Equals",
              value: function (t) {
                if (null == t) return !1;
                if (t._components.length != this._components.length) return !1;
                if (t.isRelative != this.isRelative) return !1;
                for (var e = 0, n = t._components.length; e < n; e++)
                  if (!t._components[e].Equals(this._components[e])) return !1;
                return !0;
              },
            },
            {
              key: "PathByAppendingComponent",
              value: function (t) {
                var e = new s();
                return (
                  e._components.push.apply(e._components, this._components),
                  e._components.push(t),
                  e
                );
              },
            },
            {
              key: "isRelative",
              get: function () {
                return this._isRelative;
              },
            },
            {
              key: "componentCount",
              get: function () {
                return this._components.length;
              },
            },
            {
              key: "head",
              get: function () {
                return 0 < this._components.length ? this._components[0] : null;
              },
            },
            {
              key: "tail",
              get: function () {
                return 2 <= this._components.length
                  ? new s(this._components.slice(1, this._components.length))
                  : s.self;
              },
            },
            {
              key: "length",
              get: function () {
                return this._components.length;
              },
            },
            {
              key: "lastComponent",
              get: function () {
                var t = this._components.length - 1;
                return 0 <= t ? this._components[t] : null;
              },
            },
            {
              key: "containsNamedComponent",
              get: function () {
                for (var t = 0, e = this._components.length; t < e; t++)
                  if (!this._components[t].isIndex) return !0;
                return !1;
              },
            },
            {
              key: "componentsString",
              get: function () {
                return (
                  null == this._componentsString &&
                    ((this._componentsString = this._components.join(".")),
                    this.isRelative &&
                      (this._componentsString = "." + this._componentsString)),
                  this._componentsString
                );
              },
              set: function (t) {
                if (
                  ((this._components.length = 0),
                  (this._componentsString = t),
                  null != this._componentsString &&
                    "" != this._componentsString)
                ) {
                  "." == this._componentsString[0] &&
                    ((this._isRelative = !0),
                    (this._componentsString = this._componentsString.substring(
                      1
                    )));
                  var e = this._componentsString.split("."),
                    n = !0,
                    i = !1,
                    r = void 0;
                  try {
                    for (
                      var a, o = e[Symbol.iterator]();
                      !(n = (a = o.next()).done);
                      n = !0
                    ) {
                      var u = a.value;
                      /^(\-|\+)?([0-9]+|Infinity)$/.test(u)
                        ? this._components.push(new s.Component(parseInt(u)))
                        : this._components.push(new s.Component(u));
                    }
                  } catch (t) {
                    (i = !0), (r = t);
                  } finally {
                    try {
                      n || null == o.return || o.return();
                    } finally {
                      if (i) throw r;
                    }
                  }
                }
              },
            },
          ],
          [
            {
              key: "self",
              get: function () {
                var t = new s();
                return (t._isRelative = !0), t;
              },
            },
          ]
        ),
        s
      );
    })();
  function h(t, e) {
    if (!t)
      throw (
        (void 0 !== e && console.warn(e), console.trace && console.trace(), "")
      );
  }
  function St(t, e) {
    return t instanceof e ? y(t, e) : null;
  }
  function Ct(t, e) {
    if (t instanceof e) return y(t, e);
    throw new Error("".concat(t, " is not of type ").concat(e));
  }
  function v(t) {
    if ("number" == typeof t) return t;
    throw new Error("".concat(t, " is not a number"));
  }
  function p(t) {
    return t.hasValidName && t.name ? t : null;
  }
  function d(t) {
    return void 0 === t ? null : t;
  }
  function y(t) {
    return t;
  }
  (N.parentId = "^"),
    (t = N = N || {}),
    (n = (function () {
      function e(t) {
        k(this, e),
          (this.index = -1),
          (this.name = null),
          "string" == typeof t ? (this.name = t) : (this.index = t);
      }
      return (
        o(
          e,
          [
            {
              key: "toString",
              value: function () {
                return this.isIndex ? this.index.toString() : this.name;
              },
            },
            {
              key: "Equals",
              value: function (t) {
                return (
                  null != t &&
                  t.isIndex == this.isIndex &&
                  (this.isIndex ? this.index == t.index : this.name == t.name)
                );
              },
            },
            {
              key: "isIndex",
              get: function () {
                return 0 <= this.index;
              },
            },
            {
              key: "isParent",
              get: function () {
                return this.name == t.parentId;
              },
            },
          ],
          [
            {
              key: "ToParent",
              value: function () {
                return new e(t.parentId);
              },
            },
          ]
        ),
        e
      );
    })()),
    (t.Component = n),
    ((l = x = x || {}).AssertType = function (t, e, n) {
      h(t instanceof e, n);
    }),
    (l.Assert = h);
  var m = (function () {
    function t() {
      return k(this, t), f(this, c(t).apply(this, arguments));
    }
    return u(t, e(Error)), t;
  })();
  function kt(t) {
    throw new m("".concat(t, " is null or undefined"));
  }
  var P = (function () {
      function t() {
        k(this, t),
          (this.parent = null),
          (this._debugMetadata = null),
          (this._path = null);
      }
      return (
        o(t, [
          {
            key: "DebugLineNumberOfPath",
            value: function (t) {
              if (null === t) return null;
              var e = this.rootContentContainer;
              if (e) {
                var n = e.ContentAtPath(t).obj;
                if (n) {
                  var i = n.debugMetadata;
                  if (null !== i) return i.startLineNumber;
                }
              }
              return null;
            },
          },
          {
            key: "ResolvePath",
            value: function (t) {
              if (null === t) return kt("path");
              if (t.isRelative) {
                var e = St(this, At);
                return (
                  null === e &&
                    (x.Assert(
                      null !== this.parent,
                      "Can't resolve relative path because we don't have a parent"
                    ),
                    (e = St(this.parent, At)),
                    x.Assert(null !== e, "Expected parent to be a container"),
                    x.Assert(t.GetComponent(0).isParent),
                    (t = t.tail)),
                  null === e ? kt("nearestContainer") : e.ContentAtPath(t)
                );
              }
              var n = this.rootContentContainer;
              return null === n ? kt("contentContainer") : n.ContentAtPath(t);
            },
          },
          {
            key: "ConvertPathToRelative",
            value: function (t) {
              for (
                var e = this.path,
                  n = Math.min(t.length, e.length),
                  i = -1,
                  r = 0;
                r < n;
                ++r
              ) {
                var a = e.GetComponent(r),
                  o = t.GetComponent(r);
                if (!a.Equals(o)) break;
                i = r;
              }
              if (-1 == i) return t;
              for (var u = e.componentCount - 1 - i, s = [], l = 0; l < u; ++l)
                s.push(N.Component.ToParent());
              for (var h = i + 1; h < t.componentCount; ++h)
                s.push(t.GetComponent(h));
              return new N(s, !0);
            },
          },
          {
            key: "CompactPathString",
            value: function (t) {
              var e = null,
                n = null;
              t.isRelative
                ? ((n = t.componentsString),
                  (e = this.path.PathByAppendingPath(t).componentsString))
                : ((n = this.ConvertPathToRelative(t).componentsString),
                  (e = t.componentsString));
              return n.length < e.length ? n : e;
            },
          },
          {
            key: "Copy",
            value: function () {
              throw Error("Not Implemented: Doesn't support copying");
            },
          },
          {
            key: "SetChild",
            value: function (t, e, n) {
              t[e] && (t[e] = null), (t[e] = n), t[e] && (t[e].parent = this);
            },
          },
          {
            key: "debugMetadata",
            get: function () {
              return null === this._debugMetadata && this.parent
                ? this.parent.debugMetadata
                : this._debugMetadata;
            },
            set: function (t) {
              this._debugMetadata = t;
            },
          },
          {
            key: "ownDebugMetadata",
            get: function () {
              return this._debugMetadata;
            },
          },
          {
            key: "path",
            get: function () {
              if (null == this._path)
                if (null == this.parent) this._path = new N();
                else {
                  for (
                    var t = [], e = this, n = St(e.parent, At);
                    null !== n;

                  ) {
                    var i = p(e);
                    null != i && i.hasValidName
                      ? t.unshift(new N.Component(i.name))
                      : t.unshift(new N.Component(n.content.indexOf(e))),
                      (n = St((e = n).parent, At));
                  }
                  this._path = new N(t);
                }
              return this._path;
            },
          },
          {
            key: "rootContentContainer",
            get: function () {
              for (var t = this; t.parent; ) t = t.parent;
              return St(t, At);
            },
          },
        ]),
        t
      );
    })(),
    bt = (function () {
      function e(t) {
        k(this, e), (t = void 0 !== t ? t.toString() : ""), (this.string = t);
      }
      return (
        o(e, [
          {
            key: "Append",
            value: function (t) {
              null !== t && (this.string += t);
            },
          },
          {
            key: "AppendLine",
            value: function (t) {
              void 0 !== t && this.Append(t), (this.string += "\n");
            },
          },
          {
            key: "AppendFormat",
            value: function (t) {
              for (
                var e = arguments.length,
                  n = new Array(1 < e ? e - 1 : 0),
                  i = 1;
                i < e;
                i++
              )
                n[i - 1] = arguments[i];
              this.string += t.replace(/{(\d+)}/g, function (t, e) {
                return void 0 !== n[e] ? n[e] : t;
              });
            },
          },
          {
            key: "toString",
            value: function () {
              return this.string;
            },
          },
          {
            key: "Length",
            get: function () {
              return this.string.length;
            },
          },
        ]),
        e
      );
    })(),
    Tt = (function () {
      function i() {
        if (
          (k(this, i),
          (this.originName = null),
          (this.itemName = null),
          void 0 !== arguments[1])
        ) {
          var t = arguments[0],
            e = arguments[1];
          (this.originName = t), (this.itemName = e);
        } else if (arguments[0]) {
          var n = arguments[0].toString().split(".");
          (this.originName = n[0]), (this.itemName = n[1]);
        }
      }
      return (
        o(
          i,
          [
            {
              key: "toString",
              value: function () {
                return this.fullName;
              },
            },
            {
              key: "Equals",
              value: function (t) {
                if (t instanceof i) {
                  var e = t;
                  return (
                    e.itemName == this.itemName &&
                    e.originName == this.originName
                  );
                }
                return !1;
              },
            },
            {
              key: "copy",
              value: function () {
                return new i(this.originName, this.itemName);
              },
            },
            {
              key: "serialized",
              value: function () {
                return JSON.stringify({
                  originName: this.originName,
                  itemName: this.itemName,
                });
              },
            },
            {
              key: "isNull",
              get: function () {
                return null == this.originName && null == this.itemName;
              },
            },
            {
              key: "fullName",
              get: function () {
                return (
                  (null !== this.originName ? this.originName : "?") +
                  "." +
                  this.itemName
                );
              },
            },
          ],
          [
            {
              key: "fromSerializedKey",
              value: function (t) {
                var e = JSON.parse(t);
                if (!i.isLikeInkListItem(e)) return i.Null;
                var n = e;
                return new i(n.originName, n.itemName);
              },
            },
            {
              key: "isLikeInkListItem",
              value: function (t) {
                return (
                  "object" === O(t) &&
                  !(
                    !t.hasOwnProperty("originName") ||
                    !t.hasOwnProperty("itemName")
                  ) &&
                  ("string" == typeof t.originName ||
                    null === typeof t.originName) &&
                  ("string" == typeof t.itemName || null === typeof t.itemName)
                );
              },
            },
            {
              key: "Null",
              get: function () {
                return new i(null, null);
              },
            },
          ]
        ),
        i
      );
    })(),
    wt = (function () {
      function p() {
        var t,
          e = arguments;
        if (
          (k(this, p),
          ((t = f(
            this,
            c(p).call(this, e[0] instanceof p ? e[0] : void 0)
          )).origins = null),
          (t._originNames = []),
          arguments[0] instanceof p)
        ) {
          var n = arguments[0];
          n._originNames && (t._originNames = n._originNames.slice());
        } else if ("string" == typeof arguments[0]) {
          var i = arguments[0],
            r = arguments[1];
          t.SetInitialOriginName(i);
          var a = r.listDefinitions.TryListGetDefinition(i, null);
          if (!a.exists)
            throw new Error(
              "InkList origin could not be found in story when constructing new list: " +
                i
            );
          t.origins = [a.result];
        } else if (
          "object" === O(arguments[0]) &&
          arguments[0].hasOwnProperty("Key") &&
          arguments[0].hasOwnProperty("Value")
        ) {
          var o = arguments[0];
          t.Add(o.Key, o.Value);
        }
        return t;
      }
      return (
        u(p, e(Map)),
        o(p, [
          {
            key: "AddItem",
            value: function (t) {
              if (t instanceof Tt) {
                var e = t;
                if (null == e.originName) return void this.AddItem(e.itemName);
                if (null === this.origins) return kt("this.origins");
                var n = !0,
                  i = !1,
                  r = void 0;
                try {
                  for (
                    var a, o = this.origins[Symbol.iterator]();
                    !(n = (a = o.next()).done);
                    n = !0
                  ) {
                    var u = a.value;
                    if (u.name == e.originName) {
                      var s = u.TryGetValueForItem(e, 0);
                      if (s.exists) return void this.Add(e, s.result);
                      throw new Error(
                        "Could not add the item " +
                          e +
                          " to this list because it doesn't exist in the original list definition in ink."
                      );
                    }
                  }
                } catch (t) {
                  (i = !0), (r = t);
                } finally {
                  try {
                    n || null == o.return || o.return();
                  } finally {
                    if (i) throw r;
                  }
                }
                throw new Error(
                  "Failed to add item to list because the item was from a new list definition that wasn't previously known to this list. Only items from previously known lists can be used, so that the int value can be found."
                );
              }
              var l = t,
                h = null;
              if (null === this.origins) return kt("this.origins");
              var c = !0,
                f = !1,
                v = void 0;
              try {
                for (
                  var d, y = this.origins[Symbol.iterator]();
                  !(c = (d = y.next()).done);
                  c = !0
                ) {
                  var p = d.value;
                  if (null === l) return kt("itemName");
                  if (p.ContainsItemWithName(l)) {
                    if (null != h)
                      throw new Error(
                        "Could not add the item " +
                          l +
                          " to this list because it could come from either " +
                          p.name +
                          " or " +
                          h.name
                      );
                    h = p;
                  }
                }
              } catch (t) {
                (f = !0), (v = t);
              } finally {
                try {
                  c || null == y.return || y.return();
                } finally {
                  if (f) throw v;
                }
              }
              if (null == h)
                throw new Error(
                  "Could not add the item " +
                    l +
                    " to this list because it isn't known to any list definitions previously associated with this list."
                );
              var m = new Tt(h.name, l),
                g = h.ValueForItem(m);
              this.Add(m, g);
            },
          },
          {
            key: "ContainsItemNamed",
            value: function (t) {
              var e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = this[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = _(r.value, 2),
                    u = o[0];
                  o[1];
                  if (Tt.fromSerializedKey(u).itemName == t) return !0;
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              return !1;
            },
          },
          {
            key: "ContainsKey",
            value: function (t) {
              return this.has(t.serialized());
            },
          },
          {
            key: "Add",
            value: function (t, e) {
              var n = t.serialized();
              if (this.has(n))
                throw new Error(
                  "The Map already contains an entry for ".concat(t)
                );
              this.set(n, e);
            },
          },
          {
            key: "Remove",
            value: function (t) {
              return this.delete(t.serialized());
            },
          },
          {
            key: "SetInitialOriginName",
            value: function (t) {
              this._originNames = [t];
            },
          },
          {
            key: "SetInitialOriginNames",
            value: function (t) {
              this._originNames = null == t ? null : t.slice();
            },
          },
          {
            key: "Union",
            value: function (t) {
              var e = new p(this),
                n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a, o = t[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  var u = _(a.value, 2),
                    s = u[0],
                    l = u[1];
                  e.set(s, l);
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
              return e;
            },
          },
          {
            key: "Intersect",
            value: function (t) {
              var e = new p(),
                n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a, o = this[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  var u = _(a.value, 2),
                    s = u[0],
                    l = u[1];
                  t.has(s) && e.set(s, l);
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
              return e;
            },
          },
          {
            key: "Without",
            value: function (t) {
              var e = new p(this),
                n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a, o = t[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  var u = _(a.value, 2),
                    s = u[0];
                  u[1];
                  e.delete(s);
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
              return e;
            },
          },
          {
            key: "Contains",
            value: function (t) {
              var e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = t[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = _(r.value, 2),
                    u = o[0];
                  o[1];
                  if (!this.has(u)) return !1;
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              return !0;
            },
          },
          {
            key: "GreaterThan",
            value: function (t) {
              return (
                0 != this.Count &&
                (0 == t.Count || this.minItem.Value > t.maxItem.Value)
              );
            },
          },
          {
            key: "GreaterThanOrEquals",
            value: function (t) {
              return (
                0 != this.Count &&
                (0 == t.Count ||
                  (this.minItem.Value >= t.minItem.Value &&
                    this.maxItem.Value >= t.maxItem.Value))
              );
            },
          },
          {
            key: "LessThan",
            value: function (t) {
              return (
                0 != t.Count &&
                (0 == this.Count || this.maxItem.Value < t.minItem.Value)
              );
            },
          },
          {
            key: "LessThanOrEquals",
            value: function (t) {
              return (
                0 != t.Count &&
                (0 == this.Count ||
                  (this.maxItem.Value <= t.maxItem.Value &&
                    this.minItem.Value <= t.minItem.Value))
              );
            },
          },
          {
            key: "MaxAsList",
            value: function () {
              return 0 < this.Count ? new p(this.maxItem) : new p();
            },
          },
          {
            key: "MinAsList",
            value: function () {
              return 0 < this.Count ? new p(this.minItem) : new p();
            },
          },
          {
            key: "ListWithSubRange",
            value: function (t, e) {
              if (0 == this.Count) return new p();
              var n = this.orderedItems,
                i = 0,
                r = Number.MAX_SAFE_INTEGER;
              Number.isInteger(t)
                ? (i = t)
                : t instanceof p && 0 < t.Count && (i = t.minItem.Value),
                Number.isInteger(e)
                  ? (r = e)
                  : t instanceof p && 0 < t.Count && (r = e.maxItem.Value);
              var a = new p();
              a.SetInitialOriginNames(this.originNames);
              var o = !0,
                u = !1,
                s = void 0;
              try {
                for (
                  var l, h = n[Symbol.iterator]();
                  !(o = (l = h.next()).done);
                  o = !0
                ) {
                  var c = l.value;
                  c.Value >= i && c.Value <= r && a.Add(c.Key, c.Value);
                }
              } catch (t) {
                (u = !0), (s = t);
              } finally {
                try {
                  o || null == h.return || h.return();
                } finally {
                  if (u) throw s;
                }
              }
              return a;
            },
          },
          {
            key: "Equals",
            value: function (t) {
              if (t instanceof p == !1) return !1;
              if (t.Count != this.Count) return !1;
              var e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = this[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = _(r.value, 2),
                    u = o[0];
                  o[1];
                  if (!t.has(u)) return !1;
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              return !0;
            },
          },
          {
            key: "toString",
            value: function () {
              for (
                var t = this.orderedItems, e = new bt(), n = 0;
                n < t.length;
                n++
              ) {
                0 < n && e.Append(", ");
                var i = t[n].Key;
                if (null === i.itemName) return kt("item.itemName");
                e.Append(i.itemName);
              }
              return e.toString();
            },
          },
          {
            key: "valueOf",
            value: function () {
              return NaN;
            },
          },
          {
            key: "Count",
            get: function () {
              return this.size;
            },
          },
          {
            key: "originOfMaxItem",
            get: function () {
              if (null == this.origins) return null;
              var e = this.maxItem.Key.originName,
                n = null;
              return (
                this.origins.every(function (t) {
                  return t.name != e || ((n = t), !1);
                }),
                n
              );
            },
          },
          {
            key: "originNames",
            get: function () {
              if (0 < this.Count) {
                null == this._originNames && 0 < this.Count
                  ? (this._originNames = [])
                  : (this._originNames || (this._originNames = []),
                    (this._originNames.length = 0));
                var t = !0,
                  e = !1,
                  n = void 0;
                try {
                  for (
                    var i, r = this[Symbol.iterator]();
                    !(t = (i = r.next()).done);
                    t = !0
                  ) {
                    var a = _(i.value, 2),
                      o = a[0],
                      u = (a[1], Tt.fromSerializedKey(o));
                    if (null === u.originName) return kt("item.originName");
                    this._originNames.push(u.originName);
                  }
                } catch (t) {
                  (e = !0), (n = t);
                } finally {
                  try {
                    t || null == r.return || r.return();
                  } finally {
                    if (e) throw n;
                  }
                }
              }
              return this._originNames;
            },
          },
          {
            key: "maxItem",
            get: function () {
              var t = { Key: Tt.Null, Value: 0 },
                e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = this[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = _(r.value, 2),
                    u = o[0],
                    s = o[1],
                    l = Tt.fromSerializedKey(u);
                  (t.Key.isNull || s > t.Value) && (t = { Key: l, Value: s });
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              return t;
            },
          },
          {
            key: "minItem",
            get: function () {
              var t = { Key: Tt.Null, Value: 0 },
                e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = this[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = _(r.value, 2),
                    u = o[0],
                    s = o[1],
                    l = Tt.fromSerializedKey(u);
                  (t.Key.isNull || s < t.Value) && (t = { Key: l, Value: s });
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              return t;
            },
          },
          {
            key: "inverse",
            get: function () {
              var t = new p();
              if (null != this.origins) {
                var e = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (
                    var r, a = this.origins[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var o = r.value,
                      u = !0,
                      s = !1,
                      l = void 0;
                    try {
                      for (
                        var h, c = o.items[Symbol.iterator]();
                        !(u = (h = c.next()).done);
                        u = !0
                      ) {
                        var f = _(h.value, 2),
                          v = f[0],
                          d = f[1],
                          y = Tt.fromSerializedKey(v);
                        this.ContainsKey(y) || t.Add(y, d);
                      }
                    } catch (t) {
                      (s = !0), (l = t);
                    } finally {
                      try {
                        u || null == c.return || c.return();
                      } finally {
                        if (s) throw l;
                      }
                    }
                  }
                } catch (t) {
                  (n = !0), (i = t);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw i;
                  }
                }
              }
              return t;
            },
          },
          {
            key: "all",
            get: function () {
              var t = new p();
              if (null != this.origins) {
                var e = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (
                    var r, a = this.origins[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var o = r.value,
                      u = !0,
                      s = !1,
                      l = void 0;
                    try {
                      for (
                        var h, c = o.items[Symbol.iterator]();
                        !(u = (h = c.next()).done);
                        u = !0
                      ) {
                        var f = _(h.value, 2),
                          v = f[0],
                          d = f[1],
                          y = Tt.fromSerializedKey(v);
                        t.set(y.serialized(), d);
                      }
                    } catch (t) {
                      (s = !0), (l = t);
                    } finally {
                      try {
                        u || null == c.return || c.return();
                      } finally {
                        if (s) throw l;
                      }
                    }
                  }
                } catch (t) {
                  (n = !0), (i = t);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw i;
                  }
                }
              }
              return t;
            },
          },
          {
            key: "orderedItems",
            get: function () {
              var t = new Array(),
                e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = this[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = _(r.value, 2),
                    u = o[0],
                    s = o[1],
                    l = Tt.fromSerializedKey(u);
                  t.push({ Key: l, Value: s });
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              return (
                t.sort(function (t, e) {
                  return null === t.Key.originName
                    ? kt("x.Key.originName")
                    : null === e.Key.originName
                    ? kt("y.Key.originName")
                    : t.Value == e.Value
                    ? t.Key.originName.localeCompare(e.Key.originName)
                    : t.Value < e.Value
                    ? -1
                    : t.Value > e.Value
                    ? 1
                    : 0;
                }),
                t
              );
            },
          },
        ]),
        p
      );
    })(),
    _t = (function () {
      function n(t) {
        var e;
        return (
          k(this, n),
          ((e = f(this, c(n).call(this, t))).useEndLineNumber = !1),
          (e.message = t),
          (e.name = "StoryException"),
          e
        );
      }
      return u(n, e(Error)), n;
    })();
  function g(t, e, n) {
    if (null === t) return { result: n, exists: !1 };
    var i = t.get(e);
    return i ? { result: i, exists: !0 } : { result: n, exists: !1 };
  }
  var E,
    S,
    C = (function () {
      function t() {
        return k(this, t), f(this, c(t).apply(this, arguments));
      }
      return (
        u(t, P),
        o(
          t,
          [
            {
              key: "Copy",
              value: function () {
                return Ct(t.Create(this), P);
              },
            },
            {
              key: "BadCastException",
              value: function (t) {
                return new _t(
                  "Can't cast " +
                    this.valueObject +
                    " from " +
                    this.valueType +
                    " to " +
                    t
                );
              },
            },
          ],
          [
            {
              key: "Create",
              value: function (t) {
                "boolean" == typeof t && (t = !!t ? 1 : 0);
                return Number.isInteger(Number(t))
                  ? new Et(Number(t))
                  : isNaN(t)
                  ? "string" == typeof t
                    ? new Ot(String(t))
                    : t instanceof N
                    ? new Nt(Ct(t, N))
                    : t instanceof wt
                    ? new Pt(Ct(t, wt))
                    : null
                  : new A(Number(t));
              },
            },
          ]
        ),
        t
      );
    })(),
    xt = (function () {
      function n(t) {
        var e;
        return k(this, n), ((e = f(this, c(n).call(this))).value = t), e;
      }
      return (
        u(n, C),
        o(n, [
          {
            key: "toString",
            value: function () {
              return null === this.value
                ? kt("Value.value")
                : this.value.toString();
            },
          },
          {
            key: "valueObject",
            get: function () {
              return this.value;
            },
          },
        ]),
        n
      );
    })(),
    Et = (function () {
      function e(t) {
        return k(this, e), f(this, c(e).call(this, t || 0));
      }
      return (
        u(e, xt),
        o(e, [
          {
            key: "Cast",
            value: function (t) {
              if (null === this.value) return kt("Value.value");
              if (t == this.valueType) return this;
              if (t == E.Float) return new A(this.value);
              if (t == E.String) return new Ot("" + this.value);
              throw this.BadCastException(t);
            },
          },
          {
            key: "isTruthy",
            get: function () {
              return 0 != this.value;
            },
          },
          {
            key: "valueType",
            get: function () {
              return E.Int;
            },
          },
        ]),
        e
      );
    })(),
    A = (function () {
      function e(t) {
        return k(this, e), f(this, c(e).call(this, t || 0));
      }
      return (
        u(e, xt),
        o(e, [
          {
            key: "Cast",
            value: function (t) {
              if (null === this.value) return kt("Value.value");
              if (t == this.valueType) return this;
              if (t == E.Int) return new Et(this.value);
              if (t == E.String) return new Ot("" + this.value);
              throw this.BadCastException(t);
            },
          },
          {
            key: "isTruthy",
            get: function () {
              return 0 != this.value;
            },
          },
          {
            key: "valueType",
            get: function () {
              return E.Float;
            },
          },
        ]),
        e
      );
    })(),
    Ot = (function () {
      function n(t) {
        var e;
        return (
          k(this, n),
          ((e = f(this, c(n).call(this, t || "")))._isNewline =
            "\n" == e.value),
          (e._isInlineWhitespace = !0),
          null === e.value
            ? f(e, kt("Value.value"))
            : (0 < e.value.length &&
                e.value.split("").every(function (t) {
                  return " " == t || "\t" == t || (e._isInlineWhitespace = !1);
                }),
              e)
        );
      }
      return (
        u(n, xt),
        o(n, [
          {
            key: "Cast",
            value: function (t) {
              if (t == this.valueType) return this;
              if (t == E.Int) {
                var e = (function (t, e) {
                  var n = 1 < arguments.length && void 0 !== e ? e : 0,
                    i = parseInt(t);
                  return Number.isNaN(i)
                    ? { result: n, exists: !1 }
                    : { result: i, exists: !0 };
                })(this.value);
                if (e.exists) return new Et(e.result);
                throw this.BadCastException(t);
              }
              if (t != E.Float) throw this.BadCastException(t);
              var n = (function (t, e) {
                var n = 1 < arguments.length && void 0 !== e ? e : 0,
                  i = parseFloat(t);
                return Number.isNaN(i)
                  ? { result: n, exists: !1 }
                  : { result: i, exists: !0 };
              })(this.value);
              if (n.exists) return new A(n.result);
              throw this.BadCastException(t);
            },
          },
          {
            key: "valueType",
            get: function () {
              return E.String;
            },
          },
          {
            key: "isTruthy",
            get: function () {
              return null === this.value
                ? kt("Value.value")
                : 0 < this.value.length;
            },
          },
          {
            key: "isNewline",
            get: function () {
              return this._isNewline;
            },
          },
          {
            key: "isInlineWhitespace",
            get: function () {
              return this._isInlineWhitespace;
            },
          },
          {
            key: "isNonWhitespace",
            get: function () {
              return !this.isNewline && !this.isInlineWhitespace;
            },
          },
        ]),
        n
      );
    })(),
    Nt = (function () {
      function e(t) {
        return k(this, e), f(this, c(e).call(this, t));
      }
      return (
        u(e, xt),
        o(e, [
          {
            key: "Cast",
            value: function (t) {
              if (t == this.valueType) return this;
              throw this.BadCastException(t);
            },
          },
          {
            key: "toString",
            value: function () {
              return "DivertTargetValue(" + this.targetPath + ")";
            },
          },
          {
            key: "valueType",
            get: function () {
              return E.DivertTarget;
            },
          },
          {
            key: "targetPath",
            get: function () {
              return null === this.value ? kt("Value.value") : this.value;
            },
            set: function (t) {
              this.value = t;
            },
          },
          {
            key: "isTruthy",
            get: function () {
              throw new Error(
                "Shouldn't be checking the truthiness of a divert target"
              );
            },
          },
        ]),
        e
      );
    })(),
    I = (function () {
      function i(t) {
        var e,
          n =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1;
        return (
          k(this, i), ((e = f(this, c(i).call(this, t)))._contextIndex = n), e
        );
      }
      return (
        u(i, xt),
        o(i, [
          {
            key: "Cast",
            value: function (t) {
              if (t == this.valueType) return this;
              throw this.BadCastException(t);
            },
          },
          {
            key: "toString",
            value: function () {
              return "VariablePointerValue(" + this.variableName + ")";
            },
          },
          {
            key: "Copy",
            value: function () {
              return new i(this.variableName, this.contextIndex);
            },
          },
          {
            key: "contextIndex",
            get: function () {
              return this._contextIndex;
            },
            set: function (t) {
              this._contextIndex = t;
            },
          },
          {
            key: "variableName",
            get: function () {
              return null === this.value ? kt("Value.value") : this.value;
            },
            set: function (t) {
              this.value = t;
            },
          },
          {
            key: "valueType",
            get: function () {
              return E.VariablePointer;
            },
          },
          {
            key: "isTruthy",
            get: function () {
              throw new Error(
                "Shouldn't be checking the truthiness of a variable pointer"
              );
            },
          },
        ]),
        i
      );
    })(),
    Pt = (function () {
      function r(t, e) {
        var n;
        return (
          k(this, r),
          (n = f(this, c(r).call(this, null))),
          t || e
            ? t instanceof wt
              ? (n.value = new wt(t))
              : t instanceof Tt &&
                "number" == typeof e &&
                (n.value = new wt({ Key: t, Value: e }))
            : (n.value = new wt()),
          n
        );
      }
      return (
        u(r, xt),
        o(r, [
          {
            key: "Cast",
            value: function (t) {
              if (null === this.value) return kt("Value.value");
              if (t == E.Int) {
                var e = this.value.maxItem;
                return e.Key.isNull ? new Et(0) : new Et(e.Value);
              }
              if (t == E.Float) {
                var n = this.value.maxItem;
                return n.Key.isNull ? new A(0) : new A(n.Value);
              }
              if (t == E.String) {
                var i = this.value.maxItem;
                return i.Key.isNull ? new Ot("") : new Ot(i.Key.toString());
              }
              if (t == this.valueType) return this;
              throw this.BadCastException(t);
            },
          },
          {
            key: "isTruthy",
            get: function () {
              return null === this.value
                ? kt("this.value")
                : 0 < this.value.Count;
            },
          },
          {
            key: "valueType",
            get: function () {
              return E.List;
            },
          },
        ]),
        o(r, null, [
          {
            key: "RetainListOriginsForAssignment",
            value: function (t, e) {
              var n = St(t, r),
                i = St(e, r);
              return i && null === i.value
                ? kt("newList.value")
                : n && null === n.value
                ? kt("oldList.value")
                : void (
                    n &&
                    i &&
                    0 == i.value.Count &&
                    i.value.SetInitialOriginNames(n.value.originNames)
                  );
            },
          },
        ]),
        r
      );
    })();
  ((S = E = E || {})[(S.Int = 0)] = "Int"),
    (S[(S.Float = 1)] = "Float"),
    (S[(S.List = 2)] = "List"),
    (S[(S.String = 3)] = "String"),
    (S[(S.DivertTarget = 4)] = "DivertTarget"),
    (S[(S.VariablePointer = 5)] = "VariablePointer");
  var b,
    T,
    F = (function () {
      function e() {
        k(this, e), (this.obj = null), (this.approximate = !1);
      }
      return (
        o(e, [
          {
            key: "copy",
            value: function () {
              var t = new e();
              return (t.obj = this.obj), (t.approximate = this.approximate), t;
            },
          },
          {
            key: "correctObj",
            get: function () {
              return this.approximate ? null : this.obj;
            },
          },
          {
            key: "container",
            get: function () {
              return this.obj instanceof At ? this.obj : null;
            },
          },
        ]),
        e
      );
    })(),
    At = (function () {
      function w() {
        var t;
        return (
          k(this, w),
          ((t = f(this, c(w).apply(this, arguments))).name = ""),
          (t._content = []),
          (t.namedContent = new Map()),
          (t.visitsShouldBeCounted = !1),
          (t.turnIndexShouldBeCounted = !1),
          (t.countingAtStartOnly = !1),
          (t._pathToFirstLeafContent = null),
          t
        );
      }
      return (
        u(w, P),
        o(w, [
          {
            key: "AddContent",
            value: function (t) {
              if (t instanceof Array) {
                var e = t,
                  n = !0,
                  i = !1,
                  r = void 0;
                try {
                  for (
                    var a, o = e[Symbol.iterator]();
                    !(n = (a = o.next()).done);
                    n = !0
                  ) {
                    var u = a.value;
                    this.AddContent(u);
                  }
                } catch (t) {
                  (i = !0), (r = t);
                } finally {
                  try {
                    n || null == o.return || o.return();
                  } finally {
                    if (i) throw r;
                  }
                }
              } else {
                var s = t;
                if ((this._content.push(s), s.parent))
                  throw new Error("content is already in " + s.parent);
                (s.parent = this).TryAddNamedContent(s);
              }
            },
          },
          {
            key: "TryAddNamedContent",
            value: function (t) {
              var e = p(t);
              null != e && e.hasValidName && this.AddToNamedContentOnly(e);
            },
          },
          {
            key: "AddToNamedContentOnly",
            value: function (t) {
              x.AssertType(
                t,
                P,
                "Can only add Runtime.Objects to a Runtime.Container"
              ),
                (Ct(t, P).parent = this).namedContent.set(t.name, t);
            },
          },
          {
            key: "ContentAtPath",
            value: function (t, e, n) {
              var i = 1 < arguments.length && void 0 !== e ? e : 0,
                r = 2 < arguments.length && void 0 !== n ? n : -1;
              -1 == r && (r = t.length);
              var a = new F();
              a.approximate = !1;
              for (var o = this, u = this, s = i; s < r; ++s) {
                var l = t.GetComponent(s);
                if (null == o) {
                  a.approximate = !0;
                  break;
                }
                var h = o.ContentWithPathComponent(l);
                if (null == h) {
                  a.approximate = !0;
                  break;
                }
                o = St((u = h), w);
              }
              return (a.obj = u), a;
            },
          },
          {
            key: "InsertContent",
            value: function (t, e) {
              if ((this.content[e] = t).parent)
                throw new Error("content is already in " + t.parent);
              (t.parent = this).TryAddNamedContent(t);
            },
          },
          {
            key: "AddContentsOfContainer",
            value: function (t) {
              this.content = this.content.concat(t.content);
              var e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = t.content[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = r.value;
                  (o.parent = this).TryAddNamedContent(o);
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
            },
          },
          {
            key: "ContentWithPathComponent",
            value: function (t) {
              if (t.isIndex)
                return 0 <= t.index && t.index < this.content.length
                  ? this.content[t.index]
                  : null;
              if (t.isParent) return this.parent;
              if (null === t.name) return kt("component.name");
              var e = g(this.namedContent, t.name, null);
              return e.exists ? Ct(e.result, P) : null;
            },
          },
          {
            key: "BuildStringOfHierarchy",
            value: function (t, e, n) {
              var i;
              if (0 == arguments.length)
                return (
                  (i = new bt()),
                  this.BuildStringOfHierarchy(i, 0, null),
                  i.toString()
                );
              i = t;
              var r = e,
                a = n;
              function o() {
                for (var t = 0; t < 4 * r; ++t) i.Append(" ");
              }
              o(),
                i.Append("["),
                this.hasValidName && i.AppendFormat(" ({0})", this.name),
                this == a && i.Append("  <---"),
                i.AppendLine(),
                r++;
              for (var u = 0; u < this.content.length; ++u) {
                var s = this.content[u];
                if (s instanceof w) s.BuildStringOfHierarchy(i, r, a);
                else
                  o(),
                    s instanceof Ot
                      ? (i.Append('"'),
                        i.Append(s.toString().replace("\n", "\\n")),
                        i.Append('"'))
                      : i.Append(s.toString());
                u != this.content.length - 1 && i.Append(","),
                  s instanceof w || s != a || i.Append("  <---"),
                  i.AppendLine();
              }
              var l = new Map(),
                h = !0,
                c = !1,
                f = void 0;
              try {
                for (
                  var v, d = this.namedContent[Symbol.iterator]();
                  !(h = (v = d.next()).done);
                  h = !0
                ) {
                  var y = _(v.value, 2),
                    p = y[0],
                    m = y[1];
                  0 <= this.content.indexOf(Ct(m, P)) || l.set(p, m);
                }
              } catch (t) {
                (c = !0), (f = t);
              } finally {
                try {
                  h || null == d.return || d.return();
                } finally {
                  if (c) throw f;
                }
              }
              if (0 < l.size) {
                o(), i.AppendLine("-- named: --");
                var g = !0,
                  S = !1,
                  C = void 0;
                try {
                  for (
                    var k, b = l[Symbol.iterator]();
                    !(g = (k = b.next()).done);
                    g = !0
                  ) {
                    var T = _(k.value, 2);
                    (p = T[0]), (m = T[1]);
                    x.AssertType(m, w, "Can only print out named Containers"),
                      m.BuildStringOfHierarchy(i, r, a),
                      i.AppendLine();
                  }
                } catch (t) {
                  (S = !0), (C = t);
                } finally {
                  try {
                    g || null == b.return || b.return();
                  } finally {
                    if (S) throw C;
                  }
                }
              }
              r--, o(), i.Append("]");
            },
          },
          {
            key: "hasValidName",
            get: function () {
              return null != this.name && 0 < this.name.length;
            },
          },
          {
            key: "content",
            get: function () {
              return this._content;
            },
            set: function (t) {
              this.AddContent(t);
            },
          },
          {
            key: "namedOnlyContent",
            get: function () {
              var t = new Map(),
                e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = this.namedContent[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = _(r.value, 2),
                    u = o[0],
                    s = Ct(o[1], P);
                  t.set(u, s);
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              var l = !0,
                h = !1,
                c = void 0;
              try {
                for (
                  var f, v = this.content[Symbol.iterator]();
                  !(l = (f = v.next()).done);
                  l = !0
                ) {
                  var d = p(f.value);
                  null != d && d.hasValidName && t.delete(d.name);
                }
              } catch (t) {
                (h = !0), (c = t);
              } finally {
                try {
                  l || null == v.return || v.return();
                } finally {
                  if (h) throw c;
                }
              }
              return 0 == t.size && (t = null), t;
            },
            set: function (t) {
              var e = this.namedOnlyContent;
              if (null != e) {
                var n = !0,
                  i = !1,
                  r = void 0;
                try {
                  for (
                    var a, o = e[Symbol.iterator]();
                    !(n = (a = o.next()).done);
                    n = !0
                  ) {
                    var u = _(a.value, 2),
                      s = u[0];
                    u[1];
                    this.namedContent.delete(s);
                  }
                } catch (t) {
                  (i = !0), (r = t);
                } finally {
                  try {
                    n || null == o.return || o.return();
                  } finally {
                    if (i) throw r;
                  }
                }
              }
              if (null != t) {
                var l = !0,
                  h = !1,
                  c = void 0;
                try {
                  for (
                    var f, v = t[Symbol.iterator]();
                    !(l = (f = v.next()).done);
                    l = !0
                  ) {
                    var d = _(f.value, 2),
                      y = ((s = d[0]), p(d[1]));
                    null != y && this.AddToNamedContentOnly(y);
                  }
                } catch (t) {
                  (h = !0), (c = t);
                } finally {
                  try {
                    l || null == v.return || v.return();
                  } finally {
                    if (h) throw c;
                  }
                }
              }
            },
          },
          {
            key: "countFlags",
            get: function () {
              var t = 0;
              return (
                this.visitsShouldBeCounted && (t |= w.CountFlags.Visits),
                this.turnIndexShouldBeCounted && (t |= w.CountFlags.Turns),
                this.countingAtStartOnly && (t |= w.CountFlags.CountStartOnly),
                t == w.CountFlags.CountStartOnly && (t = 0),
                t
              );
            },
            set: function (t) {
              var e = t;
              0 < (e & w.CountFlags.Visits) &&
                (this.visitsShouldBeCounted = !0),
                0 < (e & w.CountFlags.Turns) &&
                  (this.turnIndexShouldBeCounted = !0),
                0 < (e & w.CountFlags.CountStartOnly) &&
                  (this.countingAtStartOnly = !0);
            },
          },
          {
            key: "pathToFirstLeafContent",
            get: function () {
              return (
                null == this._pathToFirstLeafContent &&
                  (this._pathToFirstLeafContent = this.path.PathByAppendingPath(
                    this.internalPathToFirstLeafContent
                  )),
                this._pathToFirstLeafContent
              );
            },
          },
          {
            key: "internalPathToFirstLeafContent",
            get: function () {
              for (var t = [], e = this; e instanceof w; )
                0 < e.content.length &&
                  (t.push(new N.Component(0)), (e = e.content[0]));
              return new N(t);
            },
          },
        ]),
        w
      );
    })();
  (b = At = At || {}),
    ((T = b.CountFlags || (b.CountFlags = {}))[(T.Visits = 1)] = "Visits"),
    (T[(T.Turns = 2)] = "Turns"),
    (T[(T.CountStartOnly = 4)] = "CountStartOnly");
  var w,
    V,
    It,
    L,
    R = (function () {
      function t() {
        return k(this, t), f(this, c(t).apply(this, arguments));
      }
      return (
        u(t, P),
        o(t, [
          {
            key: "toString",
            value: function () {
              return "Glue";
            },
          },
        ]),
        t
      );
    })(),
    Ft = (function () {
      function n() {
        var t,
          e =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : n.CommandType.NotSet;
        return k(this, n), ((t = f(this, c(n).call(this)))._commandType = e), t;
      }
      return (
        u(n, P),
        o(n, [
          {
            key: "commandType",
            get: function () {
              return this._commandType;
            },
          },
        ]),
        o(
          n,
          [
            {
              key: "Copy",
              value: function () {
                return new n(this.commandType);
              },
            },
            {
              key: "toString",
              value: function () {
                return this.commandType.toString();
              },
            },
          ],
          [
            {
              key: "EvalStart",
              value: function () {
                return new n(n.CommandType.EvalStart);
              },
            },
            {
              key: "EvalOutput",
              value: function () {
                return new n(n.CommandType.EvalOutput);
              },
            },
            {
              key: "EvalEnd",
              value: function () {
                return new n(n.CommandType.EvalEnd);
              },
            },
            {
              key: "Duplicate",
              value: function () {
                return new n(n.CommandType.Duplicate);
              },
            },
            {
              key: "PopEvaluatedValue",
              value: function () {
                return new n(n.CommandType.PopEvaluatedValue);
              },
            },
            {
              key: "PopFunction",
              value: function () {
                return new n(n.CommandType.PopFunction);
              },
            },
            {
              key: "PopTunnel",
              value: function () {
                return new n(n.CommandType.PopTunnel);
              },
            },
            {
              key: "BeginString",
              value: function () {
                return new n(n.CommandType.BeginString);
              },
            },
            {
              key: "EndString",
              value: function () {
                return new n(n.CommandType.EndString);
              },
            },
            {
              key: "NoOp",
              value: function () {
                return new n(n.CommandType.NoOp);
              },
            },
            {
              key: "ChoiceCount",
              value: function () {
                return new n(n.CommandType.ChoiceCount);
              },
            },
            {
              key: "Turns",
              value: function () {
                return new n(n.CommandType.Turns);
              },
            },
            {
              key: "TurnsSince",
              value: function () {
                return new n(n.CommandType.TurnsSince);
              },
            },
            {
              key: "ReadCount",
              value: function () {
                return new n(n.CommandType.ReadCount);
              },
            },
            {
              key: "Random",
              value: function () {
                return new n(n.CommandType.Random);
              },
            },
            {
              key: "SeedRandom",
              value: function () {
                return new n(n.CommandType.SeedRandom);
              },
            },
            {
              key: "VisitIndex",
              value: function () {
                return new n(n.CommandType.VisitIndex);
              },
            },
            {
              key: "SequenceShuffleIndex",
              value: function () {
                return new n(n.CommandType.SequenceShuffleIndex);
              },
            },
            {
              key: "StartThread",
              value: function () {
                return new n(n.CommandType.StartThread);
              },
            },
            {
              key: "Done",
              value: function () {
                return new n(n.CommandType.Done);
              },
            },
            {
              key: "End",
              value: function () {
                return new n(n.CommandType.End);
              },
            },
            {
              key: "ListFromInt",
              value: function () {
                return new n(n.CommandType.ListFromInt);
              },
            },
            {
              key: "ListRange",
              value: function () {
                return new n(n.CommandType.ListRange);
              },
            },
            {
              key: "ListRandom",
              value: function () {
                return new n(n.CommandType.ListRandom);
              },
            },
          ]
        ),
        n
      );
    })();
  (w = Ft = Ft || {}),
    ((V = w.CommandType || (w.CommandType = {}))[(V.NotSet = -1)] = "NotSet"),
    (V[(V.EvalStart = 0)] = "EvalStart"),
    (V[(V.EvalOutput = 1)] = "EvalOutput"),
    (V[(V.EvalEnd = 2)] = "EvalEnd"),
    (V[(V.Duplicate = 3)] = "Duplicate"),
    (V[(V.PopEvaluatedValue = 4)] = "PopEvaluatedValue"),
    (V[(V.PopFunction = 5)] = "PopFunction"),
    (V[(V.PopTunnel = 6)] = "PopTunnel"),
    (V[(V.BeginString = 7)] = "BeginString"),
    (V[(V.EndString = 8)] = "EndString"),
    (V[(V.NoOp = 9)] = "NoOp"),
    (V[(V.ChoiceCount = 10)] = "ChoiceCount"),
    (V[(V.Turns = 11)] = "Turns"),
    (V[(V.TurnsSince = 12)] = "TurnsSince"),
    (V[(V.Random = 13)] = "Random"),
    (V[(V.SeedRandom = 14)] = "SeedRandom"),
    (V[(V.VisitIndex = 15)] = "VisitIndex"),
    (V[(V.SequenceShuffleIndex = 16)] = "SequenceShuffleIndex"),
    (V[(V.StartThread = 17)] = "StartThread"),
    (V[(V.Done = 18)] = "Done"),
    (V[(V.End = 19)] = "End"),
    (V[(V.ListFromInt = 20)] = "ListFromInt"),
    (V[(V.ListRange = 21)] = "ListRange"),
    (V[(V.ListRandom = 22)] = "ListRandom"),
    (V[(V.ReadCount = 23)] = "ReadCount"),
    (V[(V.TOTAL_VALUES = 24)] = "TOTAL_VALUES"),
    ((L = It = It || {})[(L.Tunnel = 0)] = "Tunnel"),
    (L[(L.Function = 1)] = "Function"),
    (L[(L.FunctionEvaluationFromGame = 2)] = "FunctionEvaluationFromGame");
  var Vt = (function () {
      function e() {
        k(this, e),
          (this.container = null),
          (this.index = -1),
          2 === arguments.length &&
            ((this.container = arguments[0]), (this.index = arguments[1]));
      }
      return (
        o(
          e,
          [
            {
              key: "Resolve",
              value: function () {
                return this.index < 0
                  ? this.container
                  : null == this.container
                  ? null
                  : 0 == this.container.content.length
                  ? this.container
                  : this.index >= this.container.content.length
                  ? null
                  : this.container.content[this.index];
              },
            },
            {
              key: "toString",
              value: function () {
                return this.container
                  ? "Ink Pointer -> " +
                      this.container.path.toString() +
                      " -- index " +
                      this.index
                  : "Ink Pointer (null)";
              },
            },
            {
              key: "copy",
              value: function () {
                return new e(this.container, this.index);
              },
            },
            {
              key: "isNull",
              get: function () {
                return null == this.container;
              },
            },
            {
              key: "path",
              get: function () {
                return this.isNull
                  ? null
                  : 0 <= this.index
                  ? this.container.path.PathByAppendingComponent(
                      new N.Component(this.index)
                    )
                  : this.container.path;
              },
            },
          ],
          [
            {
              key: "StartOf",
              value: function (t) {
                return new e(t, 0);
              },
            },
            {
              key: "Null",
              get: function () {
                return new e(null, -1);
              },
            },
          ]
        ),
        e
      );
    })(),
    Lt = (function () {
      function n(t) {
        var e;
        return (
          k(this, n),
          ((e = f(this, c(n).call(this)))._targetPath = null),
          (e._targetPointer = Vt.Null),
          (e.variableDivertName = null),
          (e.pushesToStack = !1),
          (e.stackPushType = 0),
          (e.isExternal = !1),
          (e.externalArgs = 0),
          (e.isConditional = !1),
          (e.pushesToStack = !1),
          void 0 !== t && ((e.pushesToStack = !0), (e.stackPushType = t)),
          e
        );
      }
      return (
        u(n, P),
        o(n, [
          {
            key: "Equals",
            value: function (t) {
              var e = t;
              return (
                e instanceof n &&
                this.hasVariableTarget == e.hasVariableTarget &&
                (this.hasVariableTarget
                  ? this.variableDivertName == e.variableDivertName
                  : null === this.targetPath
                  ? kt("this.targetPath")
                  : this.targetPath.Equals(e.targetPath))
              );
            },
          },
          {
            key: "toString",
            value: function () {
              if (this.hasVariableTarget)
                return "Divert(variable: " + this.variableDivertName + ")";
              if (null == this.targetPath) return "Divert(null)";
              var t = new bt(),
                e = this.targetPath.toString();
              return (
                t.Append("Divert"),
                this.isConditional && t.Append("?"),
                this.pushesToStack &&
                  (this.stackPushType == It.Function
                    ? t.Append(" function")
                    : t.Append(" tunnel")),
                t.Append(" -> "),
                t.Append(this.targetPathString),
                t.Append(" ("),
                t.Append(e),
                t.Append(")"),
                t.toString()
              );
            },
          },
          {
            key: "targetPath",
            get: function () {
              if (null != this._targetPath && this._targetPath.isRelative) {
                var t = this.targetPointer.Resolve();
                t && (this._targetPath = t.path);
              }
              return this._targetPath;
            },
            set: function (t) {
              (this._targetPath = t), (this._targetPointer = Vt.Null);
            },
          },
          {
            key: "targetPointer",
            get: function () {
              if (this._targetPointer.isNull) {
                var t = this.ResolvePath(this._targetPath).obj;
                if (null === this._targetPath) return kt("this._targetPath");
                if (null === this._targetPath.lastComponent)
                  return kt("this._targetPath.lastComponent");
                if (this._targetPath.lastComponent.isIndex) {
                  if (null === t) return kt("targetObj");
                  (this._targetPointer.container =
                    t.parent instanceof At ? t.parent : null),
                    (this._targetPointer.index = this._targetPath.lastComponent.index);
                } else
                  this._targetPointer = Vt.StartOf(t instanceof At ? t : null);
              }
              return this._targetPointer.copy();
            },
          },
          {
            key: "targetPathString",
            get: function () {
              return null == this.targetPath
                ? null
                : this.CompactPathString(this.targetPath);
            },
            set: function (t) {
              this.targetPath = null == t ? null : new N(t);
            },
          },
          {
            key: "hasVariableTarget",
            get: function () {
              return null != this.variableDivertName;
            },
          },
        ]),
        n
      );
    })(),
    D = (function () {
      function n() {
        var t,
          e =
            !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        return (
          k(this, n),
          ((t = f(this, c(n).call(this)))._pathOnChoice = null),
          (t.hasCondition = !1),
          (t.hasStartContent = !1),
          (t.hasChoiceOnlyContent = !1),
          (t.isInvisibleDefault = !1),
          (t.onceOnly = !0),
          (t.onceOnly = e),
          t
        );
      }
      return (
        u(n, P),
        o(n, [
          {
            key: "toString",
            value: function () {
              return null === this.pathOnChoice
                ? kt("ChoicePoint.pathOnChoice")
                : "Choice: -> " + this.pathOnChoice.toString();
            },
          },
          {
            key: "pathOnChoice",
            get: function () {
              if (null != this._pathOnChoice && this._pathOnChoice.isRelative) {
                var t = this.choiceTarget;
                t && (this._pathOnChoice = t.path);
              }
              return this._pathOnChoice;
            },
            set: function (t) {
              this._pathOnChoice = t;
            },
          },
          {
            key: "choiceTarget",
            get: function () {
              return null === this._pathOnChoice
                ? kt("ChoicePoint._pathOnChoice")
                : this.ResolvePath(this._pathOnChoice).container;
            },
          },
          {
            key: "pathStringOnChoice",
            get: function () {
              return null === this.pathOnChoice
                ? kt("ChoicePoint.pathOnChoice")
                : this.CompactPathString(this.pathOnChoice);
            },
            set: function (t) {
              this.pathOnChoice = new N(t);
            },
          },
          {
            key: "flags",
            get: function () {
              var t = 0;
              return (
                this.hasCondition && (t |= 1),
                this.hasStartContent && (t |= 2),
                this.hasChoiceOnlyContent && (t |= 4),
                this.isInvisibleDefault && (t |= 8),
                this.onceOnly && (t |= 16),
                t
              );
            },
            set: function (t) {
              (this.hasCondition = 0 < (1 & t)),
                (this.hasStartContent = 0 < (2 & t)),
                (this.hasChoiceOnlyContent = 0 < (4 & t)),
                (this.isInvisibleDefault = 0 < (8 & t)),
                (this.onceOnly = 0 < (16 & t));
            },
          },
        ]),
        n
      );
    })(),
    Rt = (function () {
      function n() {
        var t,
          e =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : null;
        return (
          k(this, n),
          ((t = f(this, c(n).call(this))).pathForCount = null),
          (t.name = e),
          t
        );
      }
      return (
        u(n, P),
        o(n, [
          {
            key: "toString",
            value: function () {
              return null != this.name
                ? "var(" + this.name + ")"
                : "read_count(" + this.pathStringForCount + ")";
            },
          },
          {
            key: "containerForCount",
            get: function () {
              return null === this.pathForCount
                ? null
                : this.ResolvePath(this.pathForCount).container;
            },
          },
          {
            key: "pathStringForCount",
            get: function () {
              return null === this.pathForCount
                ? null
                : this.CompactPathString(this.pathForCount);
            },
            set: function (t) {
              this.pathForCount = null === t ? null : new N(t);
            },
          },
        ]),
        n
      );
    })(),
    Dt = (function () {
      function i(t, e) {
        var n;
        return (
          k(this, i),
          ((n = f(this, c(i).call(this))).variableName = t || null),
          (n.isNewDeclaration = !!e),
          (n.isGlobal = !1),
          n
        );
      }
      return (
        u(i, P),
        o(i, [
          {
            key: "toString",
            value: function () {
              return "VarAssign to " + this.variableName;
            },
          },
        ]),
        i
      );
    })(),
    Mt = (function () {
      function t() {
        return k(this, t), f(this, c(t).apply(this, arguments));
      }
      return u(t, P), t;
    })(),
    Gt = (function () {
      function a() {
        var t;
        if (
          (k(this, a),
          ((t = f(this, c(a).call(this)))._name = null),
          (t._numberOfParameters = 0),
          (t._prototype = null),
          (t._isPrototype = !1),
          (t._operationFuncs = null),
          0 === arguments.length)
        )
          a.GenerateNativeFunctionsIfNecessary();
        else if (1 === arguments.length) {
          var e = arguments[0];
          a.GenerateNativeFunctionsIfNecessary(), (t.name = e);
        } else if (2 === arguments.length) {
          var n = arguments[0],
            i = arguments[1];
          (t._isPrototype = !0), (t.name = n), (t.numberOfParameters = i);
        }
        return t;
      }
      return (
        u(a, P),
        o(
          a,
          [
            {
              key: "Call",
              value: function (t) {
                if (this._prototype) return this._prototype.Call(t);
                if (this.numberOfParameters != t.length)
                  throw new Error("Unexpected number of parameters");
                var e = !1,
                  n = !0,
                  i = !1,
                  r = void 0;
                try {
                  for (
                    var a, o = t[Symbol.iterator]();
                    !(n = (a = o.next()).done);
                    n = !0
                  ) {
                    var u = a.value;
                    if (u instanceof Mt)
                      throw new _t(
                        'Attempting to perform operation on a void value. Did you forget to "return" a value from a function you called here?'
                      );
                    u instanceof Pt && (e = !0);
                  }
                } catch (t) {
                  (i = !0), (r = t);
                } finally {
                  try {
                    n || null == o.return || o.return();
                  } finally {
                    if (i) throw r;
                  }
                }
                if (2 == t.length && e) return this.CallBinaryListOperation(t);
                var s = this.CoerceValuesToSingleType(t),
                  l = s[0].valueType;
                return l == E.Int
                  ? this.CallType(s)
                  : l == E.Float
                  ? this.CallType(s)
                  : l == E.String
                  ? this.CallType(s)
                  : l == E.DivertTarget
                  ? this.CallType(s)
                  : l == E.List
                  ? this.CallType(s)
                  : null;
              },
            },
            {
              key: "CallType",
              value: function (t) {
                var e = Ct(t[0], xt),
                  n = e.valueType,
                  i = e,
                  r = t.length;
                if (2 != r && 1 != r)
                  throw new Error(
                    "Unexpected number of parameters to NativeFunctionCall: " +
                      t.length
                  );
                if (null === this._operationFuncs)
                  return kt("NativeFunctionCall._operationFuncs");
                var a = this._operationFuncs.get(n);
                if (!a)
                  throw new _t(
                    "Cannot perform operation " + this.name + " on " + n
                  );
                if (2 == r) {
                  var o = Ct(t[1], xt),
                    u = a;
                  if (null === i.value || null === o.value)
                    return kt("NativeFunctionCall.Call BinaryOp values");
                  var s = u(i.value, o.value);
                  return xt.Create(s);
                }
                var l = a;
                if (null === i.value)
                  return kt("NativeFunctionCall.Call UnaryOp value");
                var h = l(i.value);
                return xt.Create(h);
              },
            },
            {
              key: "CallBinaryListOperation",
              value: function (t) {
                if (
                  ("+" == this.name || "-" == this.name) &&
                  t[0] instanceof Pt &&
                  t[1] instanceof Et
                )
                  return this.CallListIncrementOperation(t);
                var e = Ct(t[0], xt),
                  n = Ct(t[1], xt);
                if (
                  !(
                    ("&&" != this.name && "||" != this.name) ||
                    (e.valueType == E.List && n.valueType == E.List)
                  )
                ) {
                  if (null === this._operationFuncs)
                    return kt("NativeFunctionCall._operationFuncs");
                  var i = this._operationFuncs.get(E.Int);
                  if (null === i)
                    return kt("NativeFunctionCall.CallBinaryListOperation op");
                  var r = i(e.isTruthy ? 1 : 0, n.isTruthy ? 1 : 0);
                  return new Et(r);
                }
                if (e.valueType == E.List && n.valueType == E.List)
                  return this.CallType([e, n]);
                throw new _t(
                  "Can not call use " +
                    this.name +
                    " operation on " +
                    e.valueType +
                    " and " +
                    n.valueType
                );
              },
            },
            {
              key: "CallListIncrementOperation",
              value: function (t) {
                var e = Ct(t[0], Pt),
                  n = Ct(t[1], Et),
                  i = new wt();
                if (null === e.value)
                  return kt(
                    "NativeFunctionCall.CallListIncrementOperation listVal.value"
                  );
                var r = !0,
                  a = !1,
                  o = void 0;
                try {
                  for (
                    var u, s = e.value[Symbol.iterator]();
                    !(r = (u = s.next()).done);
                    r = !0
                  ) {
                    var l = _(u.value, 2),
                      h = l[0],
                      c = l[1],
                      f = Tt.fromSerializedKey(h);
                    if (null === this._operationFuncs)
                      return kt("NativeFunctionCall._operationFuncs");
                    var v = this._operationFuncs.get(E.Int);
                    if (null === n.value)
                      return kt(
                        "NativeFunctionCall.CallListIncrementOperation intVal.value"
                      );
                    var d = v(c, n.value),
                      y = null;
                    if (null === e.value.origins)
                      return kt(
                        "NativeFunctionCall.CallListIncrementOperation listVal.value.origins"
                      );
                    var p = !0,
                      m = !1,
                      g = void 0;
                    try {
                      for (
                        var S, C = e.value.origins[Symbol.iterator]();
                        !(p = (S = C.next()).done);
                        p = !0
                      ) {
                        var k = S.value;
                        if (k.name == f.originName) {
                          y = k;
                          break;
                        }
                      }
                    } catch (t) {
                      (m = !0), (g = t);
                    } finally {
                      try {
                        p || null == C.return || C.return();
                      } finally {
                        if (m) throw g;
                      }
                    }
                    if (null != y) {
                      var b = y.TryGetItemWithValue(d, Tt.Null);
                      b.exists && i.Add(b.result, d);
                    }
                  }
                } catch (t) {
                  (a = !0), (o = t);
                } finally {
                  try {
                    r || null == s.return || s.return();
                  } finally {
                    if (a) throw o;
                  }
                }
                return new Pt(i);
              },
            },
            {
              key: "CoerceValuesToSingleType",
              value: function (t) {
                var e = E.Int,
                  n = null,
                  i = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var o, u = t[Symbol.iterator]();
                    !(i = (o = u.next()).done);
                    i = !0
                  ) {
                    var s = Ct(o.value, xt);
                    s.valueType > e && (e = s.valueType),
                      s.valueType == E.List && (n = St(s, Pt));
                  }
                } catch (t) {
                  (r = !0), (a = t);
                } finally {
                  try {
                    i || null == u.return || u.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                var l = [];
                if (E[e] == E[E.List]) {
                  var h = !0,
                    c = !1,
                    f = void 0;
                  try {
                    for (
                      var v, d = t[Symbol.iterator]();
                      !(h = (v = d.next()).done);
                      h = !0
                    ) {
                      var y = Ct(v.value, xt);
                      if (y.valueType == E.List) l.push(y);
                      else {
                        if (y.valueType != E.Int)
                          throw new _t(
                            "Cannot mix Lists and " +
                              y.valueType +
                              " values in this operation"
                          );
                        var p = parseInt(y.valueObject);
                        if (null === (n = Ct(n, Pt)).value)
                          return kt(
                            "NativeFunctionCall.CoerceValuesToSingleType specialCaseList.value"
                          );
                        var m = n.value.originOfMaxItem;
                        if (null === m)
                          return kt(
                            "NativeFunctionCall.CoerceValuesToSingleType list"
                          );
                        var g = m.TryGetItemWithValue(p, Tt.Null);
                        if (!g.exists)
                          throw new _t(
                            "Could not find List item with the value " +
                              p +
                              " in " +
                              m.name
                          );
                        var S = new Pt(g.result, p);
                        l.push(S);
                      }
                    }
                  } catch (t) {
                    (c = !0), (f = t);
                  } finally {
                    try {
                      h || null == d.return || d.return();
                    } finally {
                      if (c) throw f;
                    }
                  }
                } else {
                  var C = !0,
                    k = !1,
                    b = void 0;
                  try {
                    for (
                      var T, w = t[Symbol.iterator]();
                      !(C = (T = w.next()).done);
                      C = !0
                    ) {
                      var _ = Ct(T.value, xt).Cast(e);
                      l.push(_);
                    }
                  } catch (t) {
                    (k = !0), (b = t);
                  } finally {
                    try {
                      C || null == w.return || w.return();
                    } finally {
                      if (k) throw b;
                    }
                  }
                }
                return l;
              },
            },
            {
              key: "AddOpFuncForType",
              value: function (t, e) {
                null == this._operationFuncs &&
                  (this._operationFuncs = new Map()),
                  this._operationFuncs.set(t, e);
              },
            },
            {
              key: "toString",
              value: function () {
                return 'Native "' + this.name + '"';
              },
            },
            {
              key: "name",
              get: function () {
                return null === this._name
                  ? kt("NativeFunctionCall._name")
                  : this._name;
              },
              set: function (t) {
                (this._name = t),
                  this._isPrototype ||
                    (null === a._nativeFunctions
                      ? kt("NativeFunctionCall._nativeFunctions")
                      : (this._prototype =
                          a._nativeFunctions.get(this._name) || null));
              },
            },
            {
              key: "numberOfParameters",
              get: function () {
                return this._prototype
                  ? this._prototype.numberOfParameters
                  : this._numberOfParameters;
              },
              set: function (t) {
                this._numberOfParameters = t;
              },
            },
          ],
          [
            {
              key: "CallWithName",
              value: function (t) {
                return new a(t);
              },
            },
            {
              key: "CallExistsWithName",
              value: function (t) {
                return (
                  this.GenerateNativeFunctionsIfNecessary(),
                  this._nativeFunctions.get(t)
                );
              },
            },
            {
              key: "Identity",
              value: function (t) {
                return t;
              },
            },
            {
              key: "GenerateNativeFunctionsIfNecessary",
              value: function () {
                if (null == this._nativeFunctions) {
                  (this._nativeFunctions = new Map()),
                    this.AddIntBinaryOp(this.Add, function (t, e) {
                      return t + e;
                    }),
                    this.AddIntBinaryOp(this.Subtract, function (t, e) {
                      return t - e;
                    }),
                    this.AddIntBinaryOp(this.Multiply, function (t, e) {
                      return t * e;
                    }),
                    this.AddIntBinaryOp(this.Divide, function (t, e) {
                      return Math.round(t / e);
                    }),
                    this.AddIntBinaryOp(this.Mod, function (t, e) {
                      return t % e;
                    }),
                    this.AddIntUnaryOp(this.Negate, function (t) {
                      return -t;
                    }),
                    this.AddIntBinaryOp(this.Equal, function (t, e) {
                      return t == e ? 1 : 0;
                    }),
                    this.AddIntBinaryOp(this.Greater, function (t, e) {
                      return e < t ? 1 : 0;
                    }),
                    this.AddIntBinaryOp(this.Less, function (t, e) {
                      return t < e ? 1 : 0;
                    }),
                    this.AddIntBinaryOp(this.GreaterThanOrEquals, function (
                      t,
                      e
                    ) {
                      return e <= t ? 1 : 0;
                    }),
                    this.AddIntBinaryOp(this.LessThanOrEquals, function (t, e) {
                      return t <= e ? 1 : 0;
                    }),
                    this.AddIntBinaryOp(this.NotEquals, function (t, e) {
                      return t != e ? 1 : 0;
                    }),
                    this.AddIntUnaryOp(this.Not, function (t) {
                      return 0 == t ? 1 : 0;
                    }),
                    this.AddIntBinaryOp(this.And, function (t, e) {
                      return 0 != t && 0 != e ? 1 : 0;
                    }),
                    this.AddIntBinaryOp(this.Or, function (t, e) {
                      return 0 != t || 0 != e ? 1 : 0;
                    }),
                    this.AddIntBinaryOp(this.Max, function (t, e) {
                      return Math.max(t, e);
                    }),
                    this.AddIntBinaryOp(this.Min, function (t, e) {
                      return Math.min(t, e);
                    }),
                    this.AddIntBinaryOp(this.Pow, function (t, e) {
                      return Math.pow(t, e);
                    }),
                    this.AddIntUnaryOp(this.Floor, a.Identity),
                    this.AddIntUnaryOp(this.Ceiling, a.Identity),
                    this.AddIntUnaryOp(this.Int, a.Identity),
                    this.AddIntUnaryOp(this.Float, function (t) {
                      return t;
                    }),
                    this.AddFloatBinaryOp(this.Add, function (t, e) {
                      return t + e;
                    }),
                    this.AddFloatBinaryOp(this.Subtract, function (t, e) {
                      return t - e;
                    }),
                    this.AddFloatBinaryOp(this.Multiply, function (t, e) {
                      return t * e;
                    }),
                    this.AddFloatBinaryOp(this.Divide, function (t, e) {
                      return t / e;
                    }),
                    this.AddFloatBinaryOp(this.Mod, function (t, e) {
                      return t % e;
                    }),
                    this.AddFloatUnaryOp(this.Negate, function (t) {
                      return -t;
                    }),
                    this.AddFloatBinaryOp(this.Equal, function (t, e) {
                      return t == e ? 1 : 0;
                    }),
                    this.AddFloatBinaryOp(this.Greater, function (t, e) {
                      return e < t ? 1 : 0;
                    }),
                    this.AddFloatBinaryOp(this.Less, function (t, e) {
                      return t < e ? 1 : 0;
                    }),
                    this.AddFloatBinaryOp(this.GreaterThanOrEquals, function (
                      t,
                      e
                    ) {
                      return e <= t ? 1 : 0;
                    }),
                    this.AddFloatBinaryOp(this.LessThanOrEquals, function (
                      t,
                      e
                    ) {
                      return t <= e ? 1 : 0;
                    }),
                    this.AddFloatBinaryOp(this.NotEquals, function (t, e) {
                      return t != e ? 1 : 0;
                    }),
                    this.AddFloatUnaryOp(this.Not, function (t) {
                      return 0 == t ? 1 : 0;
                    }),
                    this.AddFloatBinaryOp(this.And, function (t, e) {
                      return 0 != t && 0 != e ? 1 : 0;
                    }),
                    this.AddFloatBinaryOp(this.Or, function (t, e) {
                      return 0 != t || 0 != e ? 1 : 0;
                    }),
                    this.AddFloatBinaryOp(this.Max, function (t, e) {
                      return Math.max(t, e);
                    }),
                    this.AddFloatBinaryOp(this.Min, function (t, e) {
                      return Math.min(t, e);
                    }),
                    this.AddFloatBinaryOp(this.Pow, function (t, e) {
                      return Math.pow(t, e);
                    }),
                    this.AddFloatUnaryOp(this.Floor, function (t) {
                      return Math.floor(t);
                    }),
                    this.AddFloatUnaryOp(this.Ceiling, function (t) {
                      return Math.ceil(t);
                    }),
                    this.AddFloatUnaryOp(this.Int, function (t) {
                      return Math.floor(t);
                    }),
                    this.AddFloatUnaryOp(this.Float, a.Identity),
                    this.AddStringBinaryOp(this.Add, function (t, e) {
                      return t + e;
                    }),
                    this.AddStringBinaryOp(this.Equal, function (t, e) {
                      return t === e ? 1 : 0;
                    }),
                    this.AddStringBinaryOp(this.NotEquals, function (t, e) {
                      return t !== e ? 1 : 0;
                    }),
                    this.AddStringBinaryOp(this.Has, function (t, e) {
                      return t.includes(e) ? 1 : 0;
                    }),
                    this.AddStringBinaryOp(this.Hasnt, function (t, e) {
                      return t.includes(e) ? 0 : 1;
                    }),
                    this.AddListBinaryOp(this.Add, function (t, e) {
                      return t.Union(e);
                    }),
                    this.AddListBinaryOp(this.Subtract, function (t, e) {
                      return t.Without(e);
                    }),
                    this.AddListBinaryOp(this.Has, function (t, e) {
                      return t.Contains(e) ? 1 : 0;
                    }),
                    this.AddListBinaryOp(this.Hasnt, function (t, e) {
                      return t.Contains(e) ? 0 : 1;
                    }),
                    this.AddListBinaryOp(this.Intersect, function (t, e) {
                      return t.Intersect(e);
                    }),
                    this.AddListBinaryOp(this.Equal, function (t, e) {
                      return t.Equals(e) ? 1 : 0;
                    }),
                    this.AddListBinaryOp(this.Greater, function (t, e) {
                      return t.GreaterThan(e) ? 1 : 0;
                    }),
                    this.AddListBinaryOp(this.Less, function (t, e) {
                      return t.LessThan(e) ? 1 : 0;
                    }),
                    this.AddListBinaryOp(this.GreaterThanOrEquals, function (
                      t,
                      e
                    ) {
                      return t.GreaterThanOrEquals(e) ? 1 : 0;
                    }),
                    this.AddListBinaryOp(this.LessThanOrEquals, function (
                      t,
                      e
                    ) {
                      return t.LessThanOrEquals(e) ? 1 : 0;
                    }),
                    this.AddListBinaryOp(this.NotEquals, function (t, e) {
                      return t.Equals(e) ? 0 : 1;
                    }),
                    this.AddListBinaryOp(this.And, function (t, e) {
                      return 0 < t.Count && 0 < e.Count ? 1 : 0;
                    }),
                    this.AddListBinaryOp(this.Or, function (t, e) {
                      return 0 < t.Count || 0 < e.Count ? 1 : 0;
                    }),
                    this.AddListUnaryOp(this.Not, function (t) {
                      return 0 == t.Count ? 1 : 0;
                    }),
                    this.AddListUnaryOp(this.Invert, function (t) {
                      return t.inverse;
                    }),
                    this.AddListUnaryOp(this.All, function (t) {
                      return t.all;
                    }),
                    this.AddListUnaryOp(this.ListMin, function (t) {
                      return t.MinAsList();
                    }),
                    this.AddListUnaryOp(this.ListMax, function (t) {
                      return t.MaxAsList();
                    }),
                    this.AddListUnaryOp(this.Count, function (t) {
                      return t.Count;
                    }),
                    this.AddListUnaryOp(this.ValueOfList, function (t) {
                      return t.maxItem.Value;
                    });
                  this.AddOpToNativeFunc(
                    this.Equal,
                    2,
                    E.DivertTarget,
                    function (t, e) {
                      return t.Equals(e) ? 1 : 0;
                    }
                  ),
                    this.AddOpToNativeFunc(
                      this.NotEquals,
                      2,
                      E.DivertTarget,
                      function (t, e) {
                        return t.Equals(e) ? 0 : 1;
                      }
                    );
                }
              },
            },
            {
              key: "AddOpToNativeFunc",
              value: function (t, e, n, i) {
                if (null === this._nativeFunctions)
                  return kt("NativeFunctionCall._nativeFunctions");
                var r = this._nativeFunctions.get(t);
                r || ((r = new a(t, e)), this._nativeFunctions.set(t, r)),
                  r.AddOpFuncForType(n, i);
              },
            },
            {
              key: "AddIntBinaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 2, E.Int, e);
              },
            },
            {
              key: "AddIntUnaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 1, E.Int, e);
              },
            },
            {
              key: "AddFloatBinaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 2, E.Float, e);
              },
            },
            {
              key: "AddFloatUnaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 1, E.Float, e);
              },
            },
            {
              key: "AddStringBinaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 2, E.String, e);
              },
            },
            {
              key: "AddListBinaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 2, E.List, e);
              },
            },
            {
              key: "AddListUnaryOp",
              value: function (t, e) {
                this.AddOpToNativeFunc(t, 1, E.List, e);
              },
            },
          ]
        ),
        a
      );
    })();
  (Gt.Add = "+"),
    (Gt.Subtract = "-"),
    (Gt.Divide = "/"),
    (Gt.Multiply = "*"),
    (Gt.Mod = "%"),
    (Gt.Negate = "_"),
    (Gt.Equal = "=="),
    (Gt.Greater = ">"),
    (Gt.Less = "<"),
    (Gt.GreaterThanOrEquals = ">="),
    (Gt.LessThanOrEquals = "<="),
    (Gt.NotEquals = "!="),
    (Gt.Not = "!"),
    (Gt.And = "&&"),
    (Gt.Or = "||"),
    (Gt.Min = "MIN"),
    (Gt.Max = "MAX"),
    (Gt.Pow = "POW"),
    (Gt.Floor = "FLOOR"),
    (Gt.Ceiling = "CEILING"),
    (Gt.Int = "INT"),
    (Gt.Float = "FLOAT"),
    (Gt.Has = "?"),
    (Gt.Hasnt = "!?"),
    (Gt.Intersect = "^"),
    (Gt.ListMin = "LIST_MIN"),
    (Gt.ListMax = "LIST_MAX"),
    (Gt.All = "LIST_ALL"),
    (Gt.Count = "LIST_COUNT"),
    (Gt.ValueOfList = "LIST_VALUE"),
    (Gt.Invert = "LIST_INVERT"),
    (Gt._nativeFunctions = null);
  var M = (function () {
      function n(t) {
        var e;
        return (
          k(this, n),
          ((e = f(this, c(n).call(this))).text = t.toString() || ""),
          e
        );
      }
      return (
        u(n, P),
        o(n, [
          {
            key: "toString",
            value: function () {
              return "# " + this.text;
            },
          },
        ]),
        n
      );
    })(),
    G = (function () {
      function e() {
        var t;
        return (
          k(this, e),
          ((t = f(this, c(e).apply(this, arguments))).text = ""),
          (t.index = 0),
          (t.threadAtGeneration = null),
          (t.sourcePath = ""),
          (t.targetPath = null),
          (t.isInvisibleDefault = !1),
          (t.originalThreadIndex = 0),
          t
        );
      }
      return (
        u(e, P),
        o(e, [
          {
            key: "pathStringOnChoice",
            get: function () {
              return null === this.targetPath
                ? kt("Choice.targetPath")
                : this.targetPath.toString();
            },
            set: function (t) {
              this.targetPath = new N(t);
            },
          },
        ]),
        e
      );
    })(),
    B = (function () {
      function n(t, e) {
        k(this, n),
          (this._name = t || ""),
          (this._items = null),
          (this._itemNameToValues = e || new Map());
      }
      return (
        o(n, [
          {
            key: "ValueForItem",
            value: function (t) {
              if (!t.itemName) return 0;
              var e = this._itemNameToValues.get(t.itemName);
              return void 0 !== e ? e : 0;
            },
          },
          {
            key: "ContainsItem",
            value: function (t) {
              return (
                !!t.itemName &&
                t.originName == this.name &&
                this._itemNameToValues.has(t.itemName)
              );
            },
          },
          {
            key: "ContainsItemWithName",
            value: function (t) {
              return this._itemNameToValues.has(t);
            },
          },
          {
            key: "TryGetItemWithValue",
            value: function (t, e) {
              var n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a, o = this._itemNameToValues[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  var u = _(a.value, 2),
                    s = u[0];
                  if (u[1] == t)
                    return { result: new Tt(this.name, s), exists: !0 };
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
              return { result: Tt.Null, exists: !1 };
            },
          },
          {
            key: "TryGetValueForItem",
            value: function (t, e) {
              if (!t.itemName) return { result: 0, exists: !1 };
              var n = this._itemNameToValues.get(t.itemName);
              return n ? { result: n, exists: !0 } : { result: 0, exists: !1 };
            },
          },
          {
            key: "name",
            get: function () {
              return this._name;
            },
          },
          {
            key: "items",
            get: function () {
              if (null == this._items) {
                this._items = new Map();
                var t = !0,
                  e = !1,
                  n = void 0;
                try {
                  for (
                    var i, r = this._itemNameToValues[Symbol.iterator]();
                    !(t = (i = r.next()).done);
                    t = !0
                  ) {
                    var a = _(i.value, 2),
                      o = a[0],
                      u = a[1],
                      s = new Tt(this.name, o);
                    this._items.set(s.serialized(), u);
                  }
                } catch (t) {
                  (e = !0), (n = t);
                } finally {
                  try {
                    t || null == r.return || r.return();
                  } finally {
                    if (e) throw n;
                  }
                }
              }
              return this._items;
            },
          },
        ]),
        n
      );
    })(),
    j = (function () {
      function m(t) {
        k(this, m),
          (this._lists = new Map()),
          (this._allUnambiguousListValueCache = new Map());
        var e = !0,
          n = !1,
          i = void 0;
        try {
          for (
            var r, a = t[Symbol.iterator]();
            !(e = (r = a.next()).done);
            e = !0
          ) {
            var o = r.value;
            this._lists.set(o.name, o);
            var u = !0,
              s = !1,
              l = void 0;
            try {
              for (
                var h, c = o.items[Symbol.iterator]();
                !(u = (h = c.next()).done);
                u = !0
              ) {
                var f = _(h.value, 2),
                  v = f[0],
                  d = f[1],
                  y = Tt.fromSerializedKey(v),
                  p = new Pt(y, d);
                if (!y.itemName)
                  throw new Error("item.itemName is null or undefined.");
                this._allUnambiguousListValueCache.set(y.itemName, p),
                  this._allUnambiguousListValueCache.set(y.fullName, p);
              }
            } catch (t) {
              (s = !0), (l = t);
            } finally {
              try {
                u || null == c.return || c.return();
              } finally {
                if (s) throw l;
              }
            }
          }
        } catch (t) {
          (n = !0), (i = t);
        } finally {
          try {
            e || null == a.return || a.return();
          } finally {
            if (n) throw i;
          }
        }
      }
      return (
        o(m, [
          {
            key: "TryListGetDefinition",
            value: function (t, e) {
              if (null === t) return { result: e, exists: !1 };
              var n = this._lists.get(t);
              return n ? { result: n, exists: !0 } : { result: e, exists: !1 };
            },
          },
          {
            key: "FindSingleItemListWithName",
            value: function (t) {
              if (null === t) return kt("name");
              var e = this._allUnambiguousListValueCache.get(t);
              return void 0 !== e ? e : null;
            },
          },
          {
            key: "lists",
            get: function () {
              var t = [],
                e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = this._lists[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = _(r.value, 2),
                    u = (o[0], o[1]);
                  t.push(u);
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              return t;
            },
          },
        ]),
        m
      );
    })(),
    W = (function () {
      function E() {
        k(this, E);
      }
      return (
        o(E, null, [
          {
            key: "ListToJArray",
            value: function (t) {
              var e = [],
                n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a, o = t[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  var u = a.value;
                  e.push(this.RuntimeObjectToJToken(u));
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
              return e;
            },
          },
          {
            key: "JArrayToRuntimeObjList",
            value: function (t, e) {
              var n = 1 < arguments.length && void 0 !== e && e,
                i = t.length;
              n && i--;
              for (var r = [], a = 0; a < i; a++) {
                var o = t[a],
                  u = this.JTokenToRuntimeObject(o);
                if (null === u) return kt("runtimeObj");
                r.push(u);
              }
              return r;
            },
          },
          {
            key: "DictionaryRuntimeObjsToJObject",
            value: function (t) {
              var e = {},
                n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a, o = t[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  var u = _(a.value, 2),
                    s = u[0],
                    l = St(u[1], P);
                  null != l && (e[s] = this.RuntimeObjectToJToken(l));
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
              return e;
            },
          },
          {
            key: "JObjectToDictionaryRuntimeObjs",
            value: function (t) {
              var e = new Map();
              for (var n in t)
                if (t.hasOwnProperty(n)) {
                  var i = this.JTokenToRuntimeObject(t[n]);
                  if (null === i) return kt("inkObject");
                  e.set(n, i);
                }
              return e;
            },
          },
          {
            key: "JObjectToIntDictionary",
            value: function (t) {
              var e = new Map();
              for (var n in t) t.hasOwnProperty(n) && e.set(n, parseInt(t[n]));
              return e;
            },
          },
          {
            key: "IntDictionaryToJObject",
            value: function (t) {
              var e = {},
                n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a, o = t[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  var u = _(a.value, 2),
                    s = u[0],
                    l = u[1];
                  e[s] = v(l);
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
              return e;
            },
          },
          {
            key: "JTokenToRuntimeObject",
            value: function (t) {
              if ("number" == typeof t && !isNaN(t)) return xt.Create(t);
              if ("string" == typeof t) {
                var e = t.toString(),
                  n = e[0];
                if ("^" == n) return new Ot(e.substring(1));
                if ("\n" == n && 1 == e.length) return new Ot("\n");
                if ("<>" == e) return new R();
                for (var i = 0; i < E._controlCommandNames.length; ++i) {
                  if (e == E._controlCommandNames[i]) return new Ft(i);
                }
                if (("L^" == e && (e = "^"), Gt.CallExistsWithName(e)))
                  return Gt.CallWithName(e);
                if ("->->" == e) return Ft.PopTunnel();
                if ("~ret" == e) return Ft.PopFunction();
                if ("void" == e) return new Mt();
              }
              if ("object" === O(t) && !Array.isArray(t)) {
                var r,
                  a = t;
                if (a["^->"])
                  return (r = a["^->"]), new Nt(new N(r.toString()));
                if (a["^var"]) {
                  r = a["^var"];
                  var o = new I(r.toString());
                  return (
                    "ci" in a && ((r = a.ci), (o.contextIndex = parseInt(r))), o
                  );
                }
                var u = !1,
                  s = !1,
                  l = It.Function,
                  h = !1;
                if (
                  ((r = a["->"])
                    ? (u = !0)
                    : (r = a["f()"])
                    ? ((s = u = !0), (l = It.Function))
                    : (r = a["->t->"])
                    ? ((s = u = !0), (l = It.Tunnel))
                    : (r = a["x()"]) &&
                      ((s = !(h = u = !0)), (l = It.Function)),
                  u)
                ) {
                  var c = new Lt();
                  (c.pushesToStack = s),
                    (c.stackPushType = l),
                    (c.isExternal = h);
                  var f = r.toString();
                  return (
                    (r = a.var)
                      ? (c.variableDivertName = f)
                      : (c.targetPathString = f),
                    (c.isConditional = !!a.c),
                    h && (r = a.exArgs) && (c.externalArgs = parseInt(r)),
                    c
                  );
                }
                if ((r = a["*"])) {
                  var v = new D();
                  return (
                    (v.pathStringOnChoice = r.toString()),
                    (r = a.flg) && (v.flags = parseInt(r)),
                    v
                  );
                }
                if ((r = a["VAR?"])) return new Rt(r.toString());
                if ((r = a["CNT?"])) {
                  var d = new Rt();
                  return (d.pathStringForCount = r.toString()), d;
                }
                var y = !1,
                  p = !1;
                if (
                  ((r = a["VAR="])
                    ? (p = y = !0)
                    : (r = a["temp="]) && (p = !(y = !0)),
                  y)
                ) {
                  var m = r.toString(),
                    g = !a.re,
                    S = new Dt(m, g);
                  return (S.isGlobal = p), S;
                }
                if (void 0 !== a["#"]) return (r = a["#"]), new M(r.toString());
                if ((r = a.list)) {
                  var C = r,
                    k = new wt();
                  if ((r = a.origins)) {
                    var b = r;
                    k.SetInitialOriginNames(b);
                  }
                  for (var T in C)
                    if (C.hasOwnProperty(T)) {
                      var w = C[T],
                        _ = new Tt(T),
                        x = parseInt(w);
                      k.Add(_, x);
                    }
                  return new Pt(k);
                }
                if (null != a.originalChoicePath)
                  return this.JObjectToChoice(a);
              }
              if (Array.isArray(t)) return this.JArrayToContainer(t);
              if (null == t) return null;
              throw new Error(
                "Failed to convert token to runtime object: " +
                  JSON.stringify(t)
              );
            },
          },
          {
            key: "RuntimeObjectToJToken",
            value: function (t) {
              var e = St(t, At);
              if (e) return this.ContainerToJArray(e);
              var n = St(t, Lt);
              if (n) {
                var i,
                  r = "->";
                n.isExternal
                  ? (r = "x()")
                  : n.pushesToStack &&
                    (n.stackPushType == It.Function
                      ? (r = "f()")
                      : n.stackPushType == It.Tunnel && (r = "->t->")),
                  (i = n.hasVariableTarget
                    ? n.variableDivertName
                    : n.targetPathString);
                var a = {};
                return (
                  (a[r] = i),
                  n.hasVariableTarget && (a.var = !0),
                  n.isConditional && (a.c = !0),
                  0 < n.externalArgs && (a.exArgs = n.externalArgs),
                  a
                );
              }
              var o = St(t, D);
              if (o) {
                var u = {};
                return (u["*"] = o.pathStringOnChoice), (u.flg = o.flags), u;
              }
              var s = St(t, Et);
              if (s) return s.value;
              var l = St(t, A);
              if (l) return l.value;
              var h = St(t, Ot);
              if (h) return h.isNewline ? "\n" : "^" + h.value;
              var c = St(t, Pt);
              if (c) return this.InkListToJObject(c);
              var f = St(t, Nt);
              if (f) {
                var v = {};
                return null === f.value
                  ? kt("divTargetVal.value")
                  : ((v["^->"] = f.value.componentsString), v);
              }
              var d = St(t, I);
              if (d) {
                var y = {};
                return (y["^var"] = d.value), (y.ci = d.contextIndex), y;
              }
              if (St(t, R)) return "<>";
              var p = St(t, Ft);
              if (p) return E._controlCommandNames[p.commandType];
              var m = St(t, Gt);
              if (m) {
                var g = m.name;
                return "^" == g && (g = "L^"), g;
              }
              var S = St(t, Rt);
              if (S) {
                var C = {},
                  k = S.pathStringForCount;
                return null != k ? (C["CNT?"] = k) : (C["VAR?"] = S.name), C;
              }
              var b = St(t, Dt);
              if (b) {
                var T = {};
                return (
                  (T[b.isGlobal ? "VAR=" : "temp="] = b.variableName),
                  b.isNewDeclaration || (T.re = !0),
                  T
                );
              }
              if (St(t, Mt)) return "void";
              var w = St(t, M);
              if (w) {
                var _ = {};
                return (_["#"] = w.text), _;
              }
              var x = St(t, G);
              if (x) return this.ChoiceToJObject(x);
              throw new Error(
                "Failed to convert runtime object to Json token: " + t
              );
            },
          },
          {
            key: "ContainerToJArray",
            value: function (t) {
              var e = this.ListToJArray(t.content),
                n = t.namedOnlyContent,
                i = t.countFlags;
              if ((null != n && 0 < n.size) || 0 < i || null != t.name) {
                var r;
                if (null != n) {
                  for (var a in (r = this.DictionaryRuntimeObjsToJObject(n)))
                    if (r.hasOwnProperty(a)) {
                      var o = r[a];
                      if (null != o) {
                        var u = o[o.length - 1];
                        null != u &&
                          (delete u["#n"],
                          0 == Object.keys(u).length &&
                            (o[o.length - 1] = null));
                      }
                    }
                } else r = {};
                0 < i && (r["#f"] = i),
                  null != t.name && (r["#n"] = t.name),
                  e.push(r);
              } else e.push(null);
              return e;
            },
          },
          {
            key: "JArrayToContainer",
            value: function (t) {
              var e = new At();
              e.content = this.JArrayToRuntimeObjList(t, !0);
              var n = t[t.length - 1];
              if (null != n) {
                var i = new Map();
                for (var r in n)
                  if ("#f" == r) e.countFlags = parseInt(n[r]);
                  else if ("#n" == r) e.name = n[r].toString();
                  else {
                    var a = this.JTokenToRuntimeObject(n[r]),
                      o = St(a, At);
                    o && (o.name = r), i.set(r, a);
                  }
                e.namedOnlyContent = i;
              }
              return e;
            },
          },
          {
            key: "JObjectToChoice",
            value: function (t) {
              var e = new G();
              return (
                (e.text = t.text.toString()),
                (e.index = parseInt(t.index)),
                (e.sourcePath = t.originalChoicePath.toString()),
                (e.originalThreadIndex = parseInt(t.originalThreadIndex)),
                (e.pathStringOnChoice = t.targetPath.toString()),
                e
              );
            },
          },
          {
            key: "ChoiceToJObject",
            value: function (t) {
              var e = {};
              return (
                (e.text = t.text),
                (e.index = t.index),
                (e.originalChoicePath = t.sourcePath),
                (e.originalThreadIndex = t.originalThreadIndex),
                (e.targetPath = t.pathStringOnChoice),
                e
              );
            },
          },
          {
            key: "InkListToJObject",
            value: function (t) {
              var e = t.value;
              if (null === e) return kt("rawList");
              var n = {},
                i = {},
                r = !0,
                a = !1,
                o = void 0;
              try {
                for (
                  var u, s = e[Symbol.iterator]();
                  !(r = (u = s.next()).done);
                  r = !0
                ) {
                  var l = _(u.value, 2),
                    h = l[0],
                    c = l[1];
                  i[Tt.fromSerializedKey(h).toString()] = c;
                }
              } catch (t) {
                (a = !0), (o = t);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (a) throw o;
                }
              }
              return (
                (n.list = i),
                0 == e.Count &&
                  null != e.originNames &&
                  0 < e.originNames.length &&
                  (n.origins = e.originNames),
                n
              );
            },
          },
          {
            key: "ListDefinitionsToJToken",
            value: function (t) {
              var e = {},
                n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a, o = t.lists[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  var u = a.value,
                    s = {},
                    l = !0,
                    h = !1,
                    c = void 0;
                  try {
                    for (
                      var f, v = u.items[Symbol.iterator]();
                      !(l = (f = v.next()).done);
                      l = !0
                    ) {
                      var d = _(f.value, 2),
                        y = d[0],
                        p = d[1],
                        m = Tt.fromSerializedKey(y);
                      if (null === m.itemName) return kt("item.itemName");
                      s[m.itemName] = p;
                    }
                  } catch (t) {
                    (h = !0), (c = t);
                  } finally {
                    try {
                      l || null == v.return || v.return();
                    } finally {
                      if (h) throw c;
                    }
                  }
                  e[u.name] = s;
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
              return e;
            },
          },
          {
            key: "JTokenToListDefinitions",
            value: function (t) {
              var e = t,
                n = [];
              for (var i in e)
                if (e.hasOwnProperty(i)) {
                  var r = i.toString(),
                    a = e[i],
                    o = new Map();
                  for (var u in a)
                    if (e.hasOwnProperty(i)) {
                      var s = a[u];
                      o.set(u, parseInt(s));
                    }
                  var l = new B(r, o);
                  n.push(l);
                }
              return new j(n);
            },
          },
        ]),
        E
      );
    })();
  W._controlCommandNames = (function () {
    var t = [];
    (t[Ft.CommandType.EvalStart] = "ev"),
      (t[Ft.CommandType.EvalOutput] = "out"),
      (t[Ft.CommandType.EvalEnd] = "/ev"),
      (t[Ft.CommandType.Duplicate] = "du"),
      (t[Ft.CommandType.PopEvaluatedValue] = "pop"),
      (t[Ft.CommandType.PopFunction] = "~ret"),
      (t[Ft.CommandType.PopTunnel] = "->->"),
      (t[Ft.CommandType.BeginString] = "str"),
      (t[Ft.CommandType.EndString] = "/str"),
      (t[Ft.CommandType.NoOp] = "nop"),
      (t[Ft.CommandType.ChoiceCount] = "choiceCnt"),
      (t[Ft.CommandType.Turns] = "turn"),
      (t[Ft.CommandType.TurnsSince] = "turns"),
      (t[Ft.CommandType.ReadCount] = "readc"),
      (t[Ft.CommandType.Random] = "rnd"),
      (t[Ft.CommandType.SeedRandom] = "srnd"),
      (t[Ft.CommandType.VisitIndex] = "visit"),
      (t[Ft.CommandType.SequenceShuffleIndex] = "seq"),
      (t[Ft.CommandType.StartThread] = "thread"),
      (t[Ft.CommandType.Done] = "done"),
      (t[Ft.CommandType.End] = "end"),
      (t[Ft.CommandType.ListFromInt] = "listInt"),
      (t[Ft.CommandType.ListRange] = "range"),
      (t[Ft.CommandType.ListRandom] = "lrnd");
    for (var e = 0; e < Ft.CommandType.TOTAL_VALUES; ++e)
      if (null == t[e])
        throw new Error("Control command not accounted for in serialisation");
    return t;
  })();
  var J = (function () {
    function h() {
      if (
        (k(this, h),
        (this._threadCounter = 0),
        (this._startOfRoot = Vt.Null),
        arguments[0] instanceof s.Story)
      ) {
        var t = arguments[0];
        (this._startOfRoot = Vt.StartOf(t.rootContentContainer)), this.Reset();
      } else {
        var e = arguments[0],
          n = !0,
          i = !(this._threads = []),
          r = void 0;
        try {
          for (
            var a, o = e._threads[Symbol.iterator]();
            !(n = (a = o.next()).done);
            n = !0
          ) {
            var u = a.value;
            this._threads.push(u.Copy());
          }
        } catch (t) {
          (i = !0), (r = t);
        } finally {
          try {
            n || null == o.return || o.return();
          } finally {
            if (i) throw r;
          }
        }
        this._startOfRoot = e._startOfRoot;
      }
    }
    return (
      o(h, [
        {
          key: "Reset",
          value: function () {
            (this._threads = []),
              this._threads.push(new h.Thread()),
              this._threads[0].callstack.push(
                new h.Element(It.Tunnel, this._startOfRoot)
              );
          },
        },
        {
          key: "SetJsonToken",
          value: function (t, e) {
            this._threads.length = 0;
            var n = t.threads,
              i = !0,
              r = !1,
              a = void 0;
            try {
              for (
                var o, u = n[Symbol.iterator]();
                !(i = (o = u.next()).done);
                i = !0
              ) {
                var s = o.value,
                  l = new h.Thread(s, e);
                this._threads.push(l);
              }
            } catch (t) {
              (r = !0), (a = t);
            } finally {
              try {
                i || null == u.return || u.return();
              } finally {
                if (r) throw a;
              }
            }
            (this._threadCounter = parseInt(t.threadCounter)),
              (this._startOfRoot = Vt.StartOf(e.rootContentContainer));
          },
        },
        {
          key: "GetJsonToken",
          value: function () {
            var t = {},
              e = [],
              n = !0,
              i = !1,
              r = void 0;
            try {
              for (
                var a, o = this._threads[Symbol.iterator]();
                !(n = (a = o.next()).done);
                n = !0
              ) {
                var u = a.value;
                e.push(u.jsonToken);
              }
            } catch (t) {
              (i = !0), (r = t);
            } finally {
              try {
                n || null == o.return || o.return();
              } finally {
                if (i) throw r;
              }
            }
            return (t.threads = e), (t.threadCounter = this._threadCounter), t;
          },
        },
        {
          key: "PushThread",
          value: function () {
            var t = this.currentThread.Copy();
            this._threadCounter++,
              (t.threadIndex = this._threadCounter),
              this._threads.push(t);
          },
        },
        {
          key: "ForkThread",
          value: function () {
            var t = this.currentThread.Copy();
            return (
              this._threadCounter++, (t.threadIndex = this._threadCounter), t
            );
          },
        },
        {
          key: "PopThread",
          value: function () {
            if (!this.canPopThread) throw new Error("Can't pop thread");
            this._threads.splice(this._threads.indexOf(this.currentThread), 1);
          },
        },
        {
          key: "Push",
          value: function (t, e, n) {
            var i = 1 < arguments.length && void 0 !== e ? e : 0,
              r = 2 < arguments.length && void 0 !== n ? n : 0,
              a = new h.Element(t, this.currentElement.currentPointer, !1);
            (a.evaluationStackHeightWhenPushed = i),
              (a.functionStartInOutputStream = r),
              this.callStack.push(a);
          },
        },
        {
          key: "CanPop",
          value: function (t) {
            var e = 0 < arguments.length && void 0 !== t ? t : null;
            return (
              !!this.canPop && (null == e || this.currentElement.type == e)
            );
          },
        },
        {
          key: "Pop",
          value: function (t) {
            var e = 0 < arguments.length && void 0 !== t ? t : null;
            if (!this.CanPop(e))
              throw new Error("Mismatched push/pop in Callstack");
            this.callStack.pop();
          },
        },
        {
          key: "GetTemporaryVariableWithName",
          value: function (t, e) {
            var n = 1 < arguments.length && void 0 !== e ? e : -1;
            -1 == n && (n = this.currentElementIndex + 1);
            var i = g(this.callStack[n - 1].temporaryVariables, t, null);
            return i.exists ? i.result : null;
          },
        },
        {
          key: "SetTemporaryVariable",
          value: function (t, e, n, i) {
            var r = 3 < arguments.length && void 0 !== i ? i : -1;
            -1 == r && (r = this.currentElementIndex + 1);
            var a = this.callStack[r - 1];
            if (!n && !a.temporaryVariables.get(t))
              throw new _t("Could not find temporary variable to set: " + t);
            var o = g(a.temporaryVariables, t, null);
            o.exists && Pt.RetainListOriginsForAssignment(o.result, e),
              a.temporaryVariables.set(t, e);
          },
        },
        {
          key: "ContextForVariableNamed",
          value: function (t) {
            return this.currentElement.temporaryVariables.get(t)
              ? this.currentElementIndex + 1
              : 0;
          },
        },
        {
          key: "ThreadWithIndex",
          value: function (e) {
            return this._threads.filter(function (t) {
              if (t.threadIndex == e) return t;
            })[0];
          },
        },
        {
          key: "elements",
          get: function () {
            return this.callStack;
          },
        },
        {
          key: "depth",
          get: function () {
            return this.elements.length;
          },
        },
        {
          key: "currentElement",
          get: function () {
            var t = this._threads[this._threads.length - 1].callstack;
            return t[t.length - 1];
          },
        },
        {
          key: "currentElementIndex",
          get: function () {
            return this.callStack.length - 1;
          },
        },
        {
          key: "currentThread",
          get: function () {
            return this._threads[this._threads.length - 1];
          },
          set: function (t) {
            x.Assert(
              1 == this._threads.length,
              "Shouldn't be directly setting the current thread when we have a stack of them"
            ),
              (this._threads.length = 0),
              this._threads.push(t);
          },
        },
        {
          key: "canPop",
          get: function () {
            return 1 < this.callStack.length;
          },
        },
        {
          key: "canPopThread",
          get: function () {
            return 1 < this._threads.length && !this.elementIsEvaluateFromGame;
          },
        },
        {
          key: "elementIsEvaluateFromGame",
          get: function () {
            return this.currentElement.type == It.FunctionEvaluationFromGame;
          },
        },
        {
          key: "callStack",
          get: function () {
            return this.currentThread.callstack;
          },
        },
        {
          key: "callStackTrace",
          get: function () {
            for (var t = new bt(), e = 0; e < this._threads.length; e++) {
              var n = this._threads[e],
                i = e == this._threads.length - 1;
              t.AppendFormat(
                "=== THREAD {0}/{1} {2}===\n",
                e + 1,
                this._threads.length,
                i ? "(current) " : ""
              );
              for (var r = 0; r < n.callstack.length; r++) {
                n.callstack[r].type == It.Function
                  ? t.Append("  [FUNCTION] ")
                  : t.Append("  [TUNNEL] ");
                var a = n.callstack[r].currentPointer;
                if (!a.isNull) {
                  if ((t.Append("<SOMEWHERE IN "), null === a.container))
                    return kt("pointer.container");
                  t.Append(a.container.path.toString()), t.AppendLine(">");
                }
              }
            }
            return t.toString();
          },
        },
      ]),
      h
    );
  })();
  !(function (t) {
    var C = (function () {
      function i(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
        k(this, i),
          (this.evaluationStackHeightWhenPushed = 0),
          (this.functionStartInOutputStream = 0),
          (this.currentPointer = e.copy()),
          (this.inExpressionEvaluation = n),
          (this.temporaryVariables = new Map()),
          (this.type = t);
      }
      return (
        o(i, [
          {
            key: "Copy",
            value: function () {
              var t = new i(
                this.type,
                this.currentPointer,
                this.inExpressionEvaluation
              );
              return (
                (t.temporaryVariables = new Map(this.temporaryVariables)),
                (t.evaluationStackHeightWhenPushed = this.evaluationStackHeightWhenPushed),
                (t.functionStartInOutputStream = this.functionStartInOutputStream),
                t
              );
            },
          },
        ]),
        i
      );
    })();
    t.Element = C;
    var e = (function () {
      function S() {
        if (
          (k(this, S),
          (this.threadIndex = 0),
          (this.previousPointer = Vt.Null),
          (this.callstack = []),
          arguments[0] && arguments[1])
        ) {
          var t = arguments[0],
            e = arguments[1];
          this.threadIndex = parseInt(t.threadIndex);
          var n = t.callstack,
            i = !0,
            r = !1,
            a = void 0;
          try {
            for (
              var o, u = n[Symbol.iterator]();
              !(i = (o = u.next()).done);
              i = !0
            ) {
              var s = o.value,
                l = parseInt(s.type),
                h = Vt.Null,
                c = void 0,
                f = s.cPath;
              if (void 0 !== f) {
                c = f.toString();
                var v = e.ContentAtPath(new N(c));
                if (
                  ((h.container = v.container),
                  (h.index = parseInt(s.idx)),
                  null == v.obj)
                )
                  throw new Error(
                    "When loading state, internal story location couldn't be found: " +
                      c +
                      ". Has the story changed since this save data was created?"
                  );
                if (v.approximate) {
                  if (null === h.container) return kt("pointer.container");
                  e.Warning(
                    "When loading state, exact internal story location couldn't be found: '" +
                      c +
                      "', so it was approximated to '" +
                      h.container.path.toString() +
                      "' to recover. Has the story changed since this save data was created?"
                  );
                }
              }
              var d = !!s.exp,
                y = new C(l, h, d),
                p = s.temp;
              (y.temporaryVariables = W.JObjectToDictionaryRuntimeObjs(p)),
                this.callstack.push(y);
            }
          } catch (t) {
            (r = !0), (a = t);
          } finally {
            try {
              i || null == u.return || u.return();
            } finally {
              if (r) throw a;
            }
          }
          var m = t.previousContentObject;
          if (void 0 !== m) {
            var g = new N(m.toString());
            this.previousPointer = e.PointerAtPath(g);
          }
        }
      }
      return (
        o(S, [
          {
            key: "Copy",
            value: function () {
              var t = new S();
              t.threadIndex = this.threadIndex;
              var e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = this.callstack[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = r.value;
                  t.callstack.push(o.Copy());
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              return (t.previousPointer = this.previousPointer.copy()), t;
            },
          },
          {
            key: "jsonToken",
            get: function () {
              var t = {},
                e = [],
                n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a, o = this.callstack[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  var u = a.value,
                    s = {};
                  if (!u.currentPointer.isNull) {
                    if (null === u.currentPointer.container)
                      return kt("el.currentPointer.container");
                    (s.cPath =
                      u.currentPointer.container.path.componentsString),
                      (s.idx = u.currentPointer.index);
                  }
                  (s.exp = u.inExpressionEvaluation),
                    (s.type = u.type),
                    (s.temp = W.DictionaryRuntimeObjsToJObject(
                      u.temporaryVariables
                    )),
                    e.push(s);
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
              if (
                ((t.callstack = e),
                (t.threadIndex = this.threadIndex),
                !this.previousPointer.isNull)
              ) {
                var l = this.previousPointer.Resolve();
                if (null === l) return kt("this.previousPointer.Resolve()");
                t.previousContentObject = l.path.toString();
              }
              return t;
            },
          },
        ]),
        S
      );
    })();
    t.Thread = e;
  })((J = J || {}));
  var q,
    K,
    U = (function () {
      function n(t, e) {
        k(this, n),
          (this.variableChangedEventCallbacks = []),
          (this._batchObservingVariableChanges = !1),
          (this._defaultGlobalVariables = new Map()),
          (this._changedVariables = new Set()),
          (this._globalVariables = new Map()),
          (this._callStack = t),
          (this._listDefsOrigin = e);
        try {
          return new Proxy(this, {
            get: function (t, e) {
              return e in t ? t[e] : t.$(e);
            },
            set: function (t, e, n) {
              return e in t ? (t[e] = n) : t.$(e, n), !0;
            },
          });
        } catch (t) {}
      }
      return (
        o(n, [
          {
            key: "variableChangedEvent",
            value: function (t, e) {
              var n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a,
                    o = this.variableChangedEventCallbacks[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  (0, a.value)(t, e);
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
            },
          },
          {
            key: "$",
            value: function (t, e) {
              if (void 0 === e) {
                var n = this._globalVariables.get(t);
                return (
                  void 0 === n && (n = this._defaultGlobalVariables.get(t)),
                  void 0 !== n ? n.valueObject : null
                );
              }
              if (void 0 === this._defaultGlobalVariables.get(t))
                throw new _t(
                  "Cannot assign to a variable (" +
                    t +
                    ") that hasn't been declared in the story"
                );
              var i = xt.Create(e);
              if (null == i)
                throw new _t(
                  null == e
                    ? "Cannot pass null to VariableState"
                    : "Invalid value passed to VariableState: " + e.toString()
                );
              this.SetGlobal(t, i);
            },
          },
          {
            key: "CopyFrom",
            value: function (t) {
              if (
                ((this._globalVariables = new Map(t._globalVariables)),
                (this._defaultGlobalVariables = new Map(
                  t._defaultGlobalVariables
                )),
                (this.variableChangedEvent = t.variableChangedEvent),
                (this.variableChangedEventCallbacks =
                  t.variableChangedEventCallbacks),
                t.batchObservingVariableChanges !=
                  this.batchObservingVariableChanges)
              )
                if (t.batchObservingVariableChanges) {
                  if (
                    ((this._batchObservingVariableChanges = !0),
                    null === t._changedVariables)
                  )
                    return kt("toCopy._changedVariables");
                  this._changedVariables = new Set(t._changedVariables);
                } else
                  (this._batchObservingVariableChanges = !1),
                    (this._changedVariables = null);
            },
          },
          {
            key: "TryGetDefaultVariableValue",
            value: function (t) {
              var e = g(this._defaultGlobalVariables, t, null);
              return e.exists ? e.result : null;
            },
          },
          {
            key: "GlobalVariableExistsWithName",
            value: function (t) {
              return this._globalVariables.has(t);
            },
          },
          {
            key: "GetVariableWithName",
            value: function (t, e) {
              var n = 1 < arguments.length && void 0 !== e ? e : -1,
                i = this.GetRawVariableWithName(t, n),
                r = St(i, I);
              return null !== r && (i = this.ValueAtVariablePointer(r)), i;
            },
          },
          {
            key: "GetRawVariableWithName",
            value: function (t, e) {
              if (0 == e || -1 == e) {
                var n = g(this._globalVariables, t, null);
                if (n.exists) return n.result;
                if (null === this._listDefsOrigin)
                  return kt("VariablesState._listDefsOrigin");
                var i = this._listDefsOrigin.FindSingleItemListWithName(t);
                if (i) return i;
              }
              return this._callStack.GetTemporaryVariableWithName(t, e);
            },
          },
          {
            key: "ValueAtVariablePointer",
            value: function (t) {
              return this.GetVariableWithName(t.variableName, t.contextIndex);
            },
          },
          {
            key: "Assign",
            value: function (t, e) {
              var n = t.variableName;
              if (null === n) return kt("name");
              var i = -1,
                r = !1;
              if (
                ((r = t.isNewDeclaration
                  ? t.isGlobal
                  : this._globalVariables.has(n)),
                t.isNewDeclaration)
              ) {
                var a = St(e, I);
                if (null !== a) e = this.ResolveVariablePointer(a);
              } else
                for (
                  var o = null;
                  null != (o = St(this.GetRawVariableWithName(n, i), I)) &&
                    ((n = o.variableName), (r = 0 == (i = o.contextIndex))),
                    null != o;

                );
              r
                ? this.SetGlobal(n, e)
                : this._callStack.SetTemporaryVariable(
                    n,
                    e,
                    t.isNewDeclaration,
                    i
                  );
            },
          },
          {
            key: "SnapshotDefaultGlobals",
            value: function () {
              this._defaultGlobalVariables = new Map(this._globalVariables);
            },
          },
          {
            key: "RetainListOriginsForAssignment",
            value: function (t, e) {
              var n = Ct(t, Pt),
                i = Ct(e, Pt);
              n.value &&
                i.value &&
                0 == i.value.Count &&
                i.value.SetInitialOriginNames(n.value.originNames);
            },
          },
          {
            key: "SetGlobal",
            value: function (t, e) {
              var n = g(this._globalVariables, t, null);
              if (
                (n.exists && Pt.RetainListOriginsForAssignment(n.result, e),
                null === t)
              )
                return kt("variableName");
              if (
                (this._globalVariables.set(t, e),
                null != this.variableChangedEvent && e !== n.result)
              )
                if (this.batchObservingVariableChanges) {
                  if (null === this._changedVariables)
                    return kt("this._changedVariables");
                  this._changedVariables.add(t);
                } else this.variableChangedEvent(t, e);
            },
          },
          {
            key: "ResolveVariablePointer",
            value: function (t) {
              var e = t.contextIndex;
              -1 == e &&
                (e = this.GetContextIndexOfVariableNamed(t.variableName));
              var n = St(this.GetRawVariableWithName(t.variableName, e), I);
              return null != n ? n : new I(t.variableName, e);
            },
          },
          {
            key: "GetContextIndexOfVariableNamed",
            value: function (t) {
              return this._globalVariables.get(t)
                ? 0
                : this._callStack.currentElementIndex;
            },
          },
          {
            key: "ObserveVariableChange",
            value: function (t) {
              this.variableChangedEventCallbacks.push(t);
            },
          },
          {
            key: "batchObservingVariableChanges",
            get: function () {
              return this._batchObservingVariableChanges;
            },
            set: function (t) {
              if ((this._batchObservingVariableChanges = t))
                this._changedVariables = new Set();
              else if (null != this._changedVariables) {
                var e = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (
                    var r, a = this._changedVariables[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var o = r.value,
                      u = this._globalVariables.get(o);
                    u ? this.variableChangedEvent(o, u) : kt("currentValue");
                  }
                } catch (t) {
                  (n = !0), (i = t);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw i;
                  }
                }
              }
            },
          },
          {
            key: "callStack",
            get: function () {
              return this._callStack;
            },
            set: function (t) {
              this._callStack = t;
            },
          },
          {
            key: "jsonToken",
            get: function () {
              return W.DictionaryRuntimeObjsToJObject(this._globalVariables);
            },
            set: function (t) {
              this._globalVariables = W.JObjectToDictionaryRuntimeObjs(t);
            },
          },
        ]),
        n
      );
    })(),
    Bt = (function () {
      function e(t) {
        k(this, e),
          (this.seed = t % 2147483647),
          this.seed <= 0 && (this.seed += 2147483646);
      }
      return (
        o(e, [
          {
            key: "next",
            value: function () {
              return (this.seed = (16807 * this.seed) % 2147483647);
            },
          },
          {
            key: "nextFloat",
            value: function () {
              return (this.next() - 1) / 2147483646;
            },
          },
        ]),
        e
      );
    })(),
    z = (function () {
      function n(t) {
        k(this, n),
          (this.kInkSaveStateVersion = 8),
          (this.kMinCompatibleLoadVersion = 8),
          (this._currentErrors = null),
          (this._currentWarnings = null),
          (this.divertedPointer = Vt.Null),
          (this._currentTurnIndex = 0),
          (this.storySeed = 0),
          (this.previousRandom = 0),
          (this.didSafeExit = !1),
          (this._currentText = null),
          (this._currentTags = null),
          (this._outputStreamTextDirty = !0),
          (this._outputStreamTagsDirty = !0),
          (this.story = t),
          (this._outputStream = []),
          this.OutputStreamDirty(),
          (this._evaluationStack = []),
          (this.callStack = new J(t)),
          (this._variablesState = new U(this.callStack, t.listDefinitions)),
          (this._visitCounts = new Map()),
          (this._turnIndices = new Map()),
          (this._currentTurnIndex = -1);
        var e = new Date().getTime();
        (this.storySeed = new Bt(e).next() % 100),
          (this.previousRandom = 0),
          (this._currentChoices = []),
          this.GoToStart();
      }
      return (
        o(n, [
          {
            key: "ToJson",
            value: function (t) {
              var e = 0 < arguments.length && void 0 !== t && t;
              return JSON.stringify(this.jsonToken, null, e ? 2 : 0);
            },
          },
          {
            key: "toJson",
            value: function (t) {
              var e = 0 < arguments.length && void 0 !== t && t;
              return this.ToJson(e);
            },
          },
          {
            key: "LoadJson",
            value: function (t) {
              this.jsonToken = JSON.parse(t);
            },
          },
          {
            key: "VisitCountAtPathString",
            value: function (t) {
              var e = g(this.visitCounts, t, null);
              return e.exists ? e.result : 0;
            },
          },
          {
            key: "CleanOutputWhitespace",
            value: function (t) {
              for (var e = new bt(), n = -1, i = 0, r = 0; r < t.length; r++) {
                var a = t.charAt(r),
                  o = " " == a || "\t" == a;
                o && -1 == n && (n = r),
                  o ||
                    ("\n" != a && 0 < n && n != i && e.Append(" "), (n = -1)),
                  "\n" == a && (i = r + 1),
                  o || e.Append(a);
              }
              return e.toString();
            },
          },
          {
            key: "GoToStart",
            value: function () {
              this.callStack.currentElement.currentPointer = Vt.StartOf(
                this.story.mainContentContainer
              );
            },
          },
          {
            key: "Copy",
            value: function () {
              var t = new n(this.story);
              return (
                t.outputStream.push.apply(t.outputStream, this._outputStream),
                this.OutputStreamDirty(),
                t._currentChoices.push.apply(
                  t._currentChoices,
                  this._currentChoices
                ),
                this.hasError &&
                  ((t._currentErrors = []),
                  t._currentErrors.push.apply(
                    t._currentErrors,
                    this.currentErrors || []
                  )),
                this.hasWarning &&
                  ((t._currentWarnings = []),
                  t._currentWarnings.push.apply(
                    t._currentWarnings,
                    this.currentWarnings || []
                  )),
                (t.callStack = new J(this.callStack)),
                (t._variablesState = new U(
                  t.callStack,
                  this.story.listDefinitions
                )),
                t.variablesState.CopyFrom(this.variablesState),
                t.evaluationStack.push.apply(
                  t.evaluationStack,
                  this.evaluationStack
                ),
                this.divertedPointer.isNull ||
                  (t.divertedPointer = this.divertedPointer.copy()),
                (t.previousPointer = this.previousPointer.copy()),
                (t._visitCounts = new Map(this.visitCounts)),
                (t._turnIndices = new Map(this.turnIndices)),
                (t._currentTurnIndex = this.currentTurnIndex),
                (t.storySeed = this.storySeed),
                (t.previousRandom = this.previousRandom),
                (t.didSafeExit = this.didSafeExit),
                t
              );
            },
          },
          {
            key: "ResetErrors",
            value: function () {
              (this._currentErrors = null), (this._currentWarnings = null);
            },
          },
          {
            key: "ResetOutput",
            value: function (t) {
              var e = 0 < arguments.length && void 0 !== t ? t : null;
              (this._outputStream.length = 0),
                null !== e &&
                  this._outputStream.push.apply(this._outputStream, e),
                this.OutputStreamDirty();
            },
          },
          {
            key: "PushToOutputStream",
            value: function (t) {
              var e = St(t, Ot);
              if (null !== e) {
                var n = this.TrySplittingHeadTailWhitespace(e);
                if (null !== n) {
                  var i = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var o, u = n[Symbol.iterator]();
                      !(i = (o = u.next()).done);
                      i = !0
                    ) {
                      var s = o.value;
                      this.PushToOutputStreamIndividual(s);
                    }
                  } catch (t) {
                    (r = !0), (a = t);
                  } finally {
                    try {
                      i || null == u.return || u.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                  return void this.OutputStreamDirty();
                }
              }
              this.PushToOutputStreamIndividual(t), this.OutputStreamDirty();
            },
          },
          {
            key: "PopFromOutputStream",
            value: function (t) {
              this.outputStream.splice(this.outputStream.length - t, t),
                this.OutputStreamDirty();
            },
          },
          {
            key: "TrySplittingHeadTailWhitespace",
            value: function (t) {
              var e = t.value;
              if (null === e) return kt("single.value");
              for (var n = -1, i = -1, r = 0; r < e.length; ++r) {
                var a = e[r];
                if ("\n" != a) {
                  if (" " == a || "\t" == a) continue;
                  break;
                }
                -1 == n && (n = r), (i = r);
              }
              for (var o = -1, u = -1, s = 0; s < e.length; ++s) {
                var l = e[s];
                if ("\n" != l) {
                  if (" " == l || "\t" == l) continue;
                  break;
                }
                -1 == o && (o = s), (u = s);
              }
              if (-1 == n && -1 == o) return null;
              var h = [],
                c = 0,
                f = e.length;
              if (-1 != n) {
                if (0 < n) {
                  var v = new Ot(e.substring(0, n));
                  h.push(v);
                }
                h.push(new Ot("\n")), (c = i + 1);
              }
              if ((-1 != o && (f = u), c < f)) {
                var d = e.substring(c, f - c);
                h.push(new Ot(d));
              }
              if (
                -1 != o &&
                i < u &&
                (h.push(new Ot("\n")), o < e.length - 1)
              ) {
                var y = e.length - o - 1,
                  p = new Ot(e.substring(o + 1, y));
                h.push(p);
              }
              return h;
            },
          },
          {
            key: "PushToOutputStreamIndividual",
            value: function (t) {
              var e = St(t, R),
                n = St(t, Ot),
                i = !0;
              if (e) this.TrimNewlinesFromOutputStream(), (i = !0);
              else if (n) {
                var r = -1,
                  a = this.callStack.currentElement;
                a.type == It.Function && (r = a.functionStartInOutputStream);
                for (
                  var o = -1, u = this._outputStream.length - 1;
                  0 <= u;
                  u--
                ) {
                  var s = this._outputStream[u],
                    l = s instanceof Ft ? s : null;
                  if (null != (s instanceof R ? s : null)) {
                    o = u;
                    break;
                  }
                  if (
                    null != l &&
                    l.commandType == Ft.CommandType.BeginString
                  ) {
                    r <= u && (r = -1);
                    break;
                  }
                }
                if (
                  -1 != (-1 != o && -1 != r ? Math.min(r, o) : -1 != o ? o : r)
                ) {
                  if (n.isNewline) i = !1;
                  else if (
                    n.isNonWhitespace &&
                    (-1 < o && this.RemoveExistingGlue(), -1 < r)
                  )
                    for (
                      var h = this.callStack.elements, c = h.length - 1;
                      0 <= c;
                      c--
                    ) {
                      var f = h[c];
                      if (f.type != It.Function) break;
                      f.functionStartInOutputStream = -1;
                    }
                } else
                  n.isNewline &&
                    ((!this.outputStreamEndsInNewline &&
                      this.outputStreamContainsContent) ||
                      (i = !1));
              }
              if (i) {
                if (null === t) return kt("obj");
                this._outputStream.push(t), this.OutputStreamDirty();
              }
            },
          },
          {
            key: "TrimNewlinesFromOutputStream",
            value: function () {
              for (var t = -1, e = this._outputStream.length - 1; 0 <= e; ) {
                var n = this._outputStream[e],
                  i = St(n, Ft),
                  r = St(n, Ot);
                if (null != i || (null != r && r.isNonWhitespace)) break;
                null != r && r.isNewline && (t = e), e--;
              }
              if (0 <= t)
                for (e = t; e < this._outputStream.length; ) {
                  St(this._outputStream[e], Ot)
                    ? this._outputStream.splice(e, 1)
                    : e++;
                }
              this.OutputStreamDirty();
            },
          },
          {
            key: "RemoveExistingGlue",
            value: function () {
              for (var t = this._outputStream.length - 1; 0 <= t; t--) {
                var e = this._outputStream[t];
                if (e instanceof R) this._outputStream.splice(t, 1);
                else if (e instanceof Ft) break;
              }
              this.OutputStreamDirty();
            },
          },
          {
            key: "PushEvaluationStack",
            value: function (t) {
              var e = St(t, Pt);
              if (e) {
                var n = e.value;
                if (null === n) return kt("rawList");
                if (null != n.originNames) {
                  n.origins || (n.origins = []);
                  var i = !(n.origins.length = 0),
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var o, u = n.originNames[Symbol.iterator]();
                      !(i = (o = u.next()).done);
                      i = !0
                    ) {
                      var s = o.value;
                      if (null === this.story.listDefinitions)
                        return kt("StoryState.story.listDefinitions");
                      var l = this.story.listDefinitions.TryListGetDefinition(
                        s,
                        null
                      );
                      if (null === l.result) return kt("StoryState def.result");
                      n.origins.indexOf(l.result) < 0 &&
                        n.origins.push(l.result);
                    }
                  } catch (t) {
                    (r = !0), (a = t);
                  } finally {
                    try {
                      i || null == u.return || u.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                }
              }
              if (null === t) return kt("obj");
              this.evaluationStack.push(t);
            },
          },
          {
            key: "PopEvaluationStack",
            value: function (t) {
              if (void 0 === t) return d(this.evaluationStack.pop());
              if (t > this.evaluationStack.length)
                throw new Error("trying to pop too many objects");
              return d(
                this.evaluationStack.splice(this.evaluationStack.length - t, t)
              );
            },
          },
          {
            key: "PeekEvaluationStack",
            value: function () {
              return this.evaluationStack[this.evaluationStack.length - 1];
            },
          },
          {
            key: "ForceEnd",
            value: function () {
              this.callStack.Reset(),
                (this._currentChoices.length = 0),
                (this.currentPointer = Vt.Null),
                (this.previousPointer = Vt.Null),
                (this.didSafeExit = !0);
            },
          },
          {
            key: "TrimWhitespaceFromFunctionEnd",
            value: function () {
              x.Assert(this.callStack.currentElement.type == It.Function);
              var t = this.callStack.currentElement.functionStartInOutputStream;
              -1 == t && (t = 0);
              for (var e = this._outputStream.length - 1; t <= e; e--) {
                var n = this._outputStream[e],
                  i = St(n, Ot),
                  r = St(n, Ft);
                if (null != i) {
                  if (r) break;
                  if (!i.isNewline && !i.isInlineWhitespace) break;
                  this._outputStream.splice(e, 1), this.OutputStreamDirty();
                }
              }
            },
          },
          {
            key: "PopCallStack",
            value: function (t) {
              var e = 0 < arguments.length && void 0 !== t ? t : null;
              this.callStack.currentElement.type == It.Function &&
                this.TrimWhitespaceFromFunctionEnd(),
                this.callStack.Pop(e);
            },
          },
          {
            key: "SetChosenPath",
            value: function (t, e) {
              this._currentChoices.length = 0;
              var n = this.story.PointerAtPath(t);
              n.isNull || -1 != n.index || (n.index = 0),
                (this.currentPointer = n),
                e && this._currentTurnIndex++;
            },
          },
          {
            key: "StartFunctionEvaluationFromGame",
            value: function (t, e) {
              this.callStack.Push(
                It.FunctionEvaluationFromGame,
                this.evaluationStack.length
              ),
                (this.callStack.currentElement.currentPointer = Vt.StartOf(t)),
                this.PassArgumentsToEvaluationStack(e);
            },
          },
          {
            key: "PassArgumentsToEvaluationStack",
            value: function (t) {
              if (null != t)
                for (var e = 0; e < t.length; e++) {
                  if ("number" != typeof t[e] && "string" != typeof t[e])
                    throw new Error(
                      "ink arguments when calling EvaluateFunction / ChoosePathStringWithParameters  must be int, float or string"
                    );
                  this.PushEvaluationStack(xt.Create(t[e]));
                }
            },
          },
          {
            key: "TryExitFunctionEvaluationFromGame",
            value: function () {
              return (
                this.callStack.currentElement.type ==
                  It.FunctionEvaluationFromGame &&
                ((this.currentPointer = Vt.Null), (this.didSafeExit = !0))
              );
            },
          },
          {
            key: "CompleteFunctionEvaluationFromGame",
            value: function () {
              if (
                this.callStack.currentElement.type !=
                It.FunctionEvaluationFromGame
              )
                throw new _t(
                  "Expected external function evaluation to be complete. Stack trace: " +
                    this.callStack.callStackTrace
                );
              for (
                var t = this.callStack.currentElement
                    .evaluationStackHeightWhenPushed,
                  e = null;
                this.evaluationStack.length > t;

              ) {
                var n = this.PopEvaluationStack();
                null === e && (e = n);
              }
              if ((this.PopCallStack(It.FunctionEvaluationFromGame), e)) {
                if (e instanceof Mt) return null;
                var i = Ct(e, xt);
                return i.valueType == E.DivertTarget
                  ? i.valueObject.toString()
                  : i.valueObject;
              }
              return null;
            },
          },
          {
            key: "AddError",
            value: function (t, e) {
              e
                ? (null == this._currentWarnings &&
                    (this._currentWarnings = []),
                  this._currentWarnings.push(t))
                : (null == this._currentErrors && (this._currentErrors = []),
                  this._currentErrors.push(t));
            },
          },
          {
            key: "OutputStreamDirty",
            value: function () {
              (this._outputStreamTextDirty = !0),
                (this._outputStreamTagsDirty = !0);
            },
          },
          {
            key: "callstackDepth",
            get: function () {
              return this.callStack.depth;
            },
          },
          {
            key: "outputStream",
            get: function () {
              return this._outputStream;
            },
          },
          {
            key: "currentChoices",
            get: function () {
              return this.canContinue ? [] : this._currentChoices;
            },
          },
          {
            key: "generatedChoices",
            get: function () {
              return this._currentChoices;
            },
          },
          {
            key: "currentErrors",
            get: function () {
              return this._currentErrors;
            },
          },
          {
            key: "currentWarnings",
            get: function () {
              return this._currentWarnings;
            },
          },
          {
            key: "variablesState",
            get: function () {
              return this._variablesState;
            },
          },
          {
            key: "evaluationStack",
            get: function () {
              return this._evaluationStack;
            },
          },
          {
            key: "visitCounts",
            get: function () {
              return this._visitCounts;
            },
          },
          {
            key: "turnIndices",
            get: function () {
              return this._turnIndices;
            },
          },
          {
            key: "currentTurnIndex",
            get: function () {
              return this._currentTurnIndex;
            },
          },
          {
            key: "currentPathString",
            get: function () {
              var t = this.currentPointer;
              return t.isNull
                ? null
                : null === t.path
                ? kt("pointer.path")
                : t.path.toString();
            },
          },
          {
            key: "currentPointer",
            get: function () {
              return this.callStack.currentElement.currentPointer.copy();
            },
            set: function (t) {
              this.callStack.currentElement.currentPointer = t.copy();
            },
          },
          {
            key: "previousPointer",
            get: function () {
              return this.callStack.currentThread.previousPointer.copy();
            },
            set: function (t) {
              this.callStack.currentThread.previousPointer = t.copy();
            },
          },
          {
            key: "canContinue",
            get: function () {
              return !this.currentPointer.isNull && !this.hasError;
            },
          },
          {
            key: "hasError",
            get: function () {
              return (
                null != this.currentErrors && 0 < this.currentErrors.length
              );
            },
          },
          {
            key: "hasWarning",
            get: function () {
              return (
                null != this.currentWarnings && 0 < this.currentWarnings.length
              );
            },
          },
          {
            key: "currentText",
            get: function () {
              if (this._outputStreamTextDirty) {
                var t = new bt(),
                  e = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (
                    var r, a = this._outputStream[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var o = St(r.value, Ot);
                    null !== o && t.Append(o.value);
                  }
                } catch (t) {
                  (n = !0), (i = t);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw i;
                  }
                }
                (this._currentText = this.CleanOutputWhitespace(t.toString())),
                  (this._outputStreamTextDirty = !1);
              }
              return this._currentText;
            },
          },
          {
            key: "currentTags",
            get: function () {
              if (this._outputStreamTagsDirty) {
                var t = !0,
                  e = !(this._currentTags = []),
                  n = void 0;
                try {
                  for (
                    var i, r = this._outputStream[Symbol.iterator]();
                    !(t = (i = r.next()).done);
                    t = !0
                  ) {
                    var a = St(i.value, M);
                    null !== a && this._currentTags.push(a.text);
                  }
                } catch (t) {
                  (e = !0), (n = t);
                } finally {
                  try {
                    t || null == r.return || r.return();
                  } finally {
                    if (e) throw n;
                  }
                }
                this._outputStreamTagsDirty = !1;
              }
              return this._currentTags;
            },
          },
          {
            key: "inExpressionEvaluation",
            get: function () {
              return this.callStack.currentElement.inExpressionEvaluation;
            },
            set: function (t) {
              this.callStack.currentElement.inExpressionEvaluation = t;
            },
          },
          {
            key: "jsonToken",
            get: function () {
              var t,
                e = {},
                n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var a, o = this._currentChoices[Symbol.iterator]();
                  !(n = (a = o.next()).done);
                  n = !0
                ) {
                  var u = a.value;
                  if (null === u.threadAtGeneration)
                    return kt("c.threadAtGeneration");
                  (u.originalThreadIndex = u.threadAtGeneration.threadIndex),
                    null ==
                      this.callStack.ThreadWithIndex(u.originalThreadIndex) &&
                      (null == t && (t = new Map()),
                      (t[u.originalThreadIndex.toString()] =
                        u.threadAtGeneration.jsonToken));
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == o.return || o.return();
                } finally {
                  if (i) throw r;
                }
              }
              if (
                (null != t && (e.choiceThreads = t),
                (e.callstackThreads = this.callStack.GetJsonToken()),
                (e.variablesState = this.variablesState.jsonToken),
                (e.evalStack = W.ListToJArray(this.evaluationStack)),
                (e.outputStream = W.ListToJArray(this._outputStream)),
                (e.currentChoices = W.ListToJArray(this._currentChoices)),
                !this.divertedPointer.isNull)
              ) {
                if (null === this.divertedPointer.path)
                  return kt("this.divertedPointer.path");
                e.currentDivertTarget = this.divertedPointer.path.componentsString;
              }
              return (
                (e.visitCounts = W.IntDictionaryToJObject(this.visitCounts)),
                (e.turnIndices = W.IntDictionaryToJObject(this.turnIndices)),
                (e.turnIdx = this.currentTurnIndex),
                (e.storySeed = this.storySeed),
                (e.previousRandom = this.previousRandom),
                (e.inkSaveVersion = this.kInkSaveStateVersion),
                (e.inkFormatVersion = this.story.inkVersionCurrent),
                e
              );
            },
            set: function (t) {
              var e = t,
                n = e.inkSaveVersion;
              if (null == n)
                throw new _t("ink save format incorrect, can't load.");
              if (parseInt(n) < this.kMinCompatibleLoadVersion)
                throw new _t(
                  "Ink save format isn't compatible with the current version (saw '" +
                    n +
                    "', but minimum is " +
                    this.kMinCompatibleLoadVersion +
                    "), so can't load."
                );
              this.callStack.SetJsonToken(e.callstackThreads, this.story),
                (this.variablesState.jsonToken = e.variablesState),
                (this._evaluationStack = W.JArrayToRuntimeObjList(e.evalStack)),
                (this._outputStream = W.JArrayToRuntimeObjList(e.outputStream)),
                this.OutputStreamDirty(),
                (this._currentChoices = W.JArrayToRuntimeObjList(
                  e.currentChoices
                ));
              var i = e.currentDivertTarget;
              if (null != i) {
                var r = new N(i.toString());
                this.divertedPointer = this.story.PointerAtPath(r);
              }
              (this._visitCounts = W.JObjectToIntDictionary(e.visitCounts)),
                (this._turnIndices = W.JObjectToIntDictionary(e.turnIndices)),
                (this._currentTurnIndex = parseInt(e.turnIdx)),
                (this.storySeed = parseInt(e.storySeed)),
                (this.previousRandom = parseInt(e.previousRandom));
              var a = e.choiceThreads,
                o = !0,
                u = !1,
                s = void 0;
              try {
                for (
                  var l, h = this._currentChoices[Symbol.iterator]();
                  !(o = (l = h.next()).done);
                  o = !0
                ) {
                  var c = l.value,
                    f = this.callStack.ThreadWithIndex(c.originalThreadIndex);
                  if (null != f) c.threadAtGeneration = f.Copy();
                  else {
                    var v = a[c.originalThreadIndex.toString()];
                    c.threadAtGeneration = new J.Thread(v, this.story);
                  }
                }
              } catch (t) {
                (u = !0), (s = t);
              } finally {
                try {
                  o || null == h.return || h.return();
                } finally {
                  if (u) throw s;
                }
              }
            },
          },
          {
            key: "outputStreamEndsInNewline",
            get: function () {
              if (0 < this._outputStream.length)
                for (var t = this._outputStream.length - 1; 0 <= t; t--) {
                  if (this._outputStream[t] instanceof Ft) break;
                  var e = this._outputStream[t];
                  if (e instanceof Ot) {
                    if (e.isNewline) return !0;
                    if (e.isNonWhitespace) break;
                  }
                }
              return !1;
            },
          },
          {
            key: "outputStreamContainsContent",
            get: function () {
              for (var t = 0; t < this._outputStream.length; t++)
                if (this._outputStream[t] instanceof Ot) return !0;
              return !1;
            },
          },
          {
            key: "inStringEvaluation",
            get: function () {
              for (var t = this._outputStream.length - 1; 0 <= t; t--) {
                var e = St(this._outputStream[t], Ft);
                if (
                  e instanceof Ft &&
                  e.commandType == Ft.CommandType.BeginString
                )
                  return !0;
              }
              return !1;
            },
          },
        ]),
        n
      );
    })(),
    H = (function () {
      function t() {
        k(this, t), (this.startTime = void 0);
      }
      return (
        o(t, [
          {
            key: "Start",
            value: function () {
              this.startTime = new Date().getTime();
            },
          },
          {
            key: "Stop",
            value: function () {
              this.startTime = void 0;
            },
          },
          {
            key: "ElapsedMilliseconds",
            get: function () {
              return void 0 === this.startTime
                ? 0
                : new Date().getTime() - this.startTime;
            },
          },
        ]),
        t
      );
    })();
  Number.isInteger ||
    (Number.isInteger = function (t) {
      return (
        "number" == typeof t &&
        isFinite(t) &&
        -9007199254740992 < t &&
        t < 9007199254740992 &&
        Math.floor(t) === t
      );
    }),
    (s.Story = (function () {
      function h() {
        var t, e;
        k(this, h),
          ((t = f(this, c(h).call(this))).inkVersionCurrent = 19),
          (t.inkVersionMinimumCompatible = 18),
          (t._prevContainers = []),
          (t.allowExternalFunctionFallbacks = !1),
          (t._listDefinitions = null),
          (t._variableObservers = null),
          (t._hasValidatedExternals = !1),
          (t._temporaryEvaluationContainer = null),
          (t._asyncContinueActive = !1),
          (t._stateAtLastNewline = null),
          (t._recursiveContinueCount = 0);
        var n = (t._profiler = null),
          i = null;
        if (arguments[0] instanceof At)
          (e = arguments[0]),
            void 0 !== arguments[1] && (n = arguments[1]),
            (t._mainContentContainer = e);
        else if ("string" == typeof arguments[0]) {
          var r = arguments[0];
          i = JSON.parse(r);
        } else i = arguments[0];
        if (
          (null != n && (t._listDefinitions = new j(n)),
          (t._externals = new Map()),
          null !== i)
        ) {
          var a = i,
            o = a.inkVersion;
          if (null == o)
            throw new Error(
              "ink version number not found. Are you sure it's a valid .ink.json file?"
            );
          var u = parseInt(o);
          if (u > t.inkVersionCurrent)
            throw new Error(
              "Version of ink used to build story was newer than the current version of the engine"
            );
          if (u < t.inkVersionMinimumCompatible)
            throw new Error(
              "Version of ink used to build story is too old to be loaded by this version of the engine"
            );
          u != t.inkVersionCurrent &&
            console.warn(
              "WARNING: Version of ink used to build story doesn't match current version of engine. Non-critical, but recommend synchronising."
            );
          var s,
            l = a.root;
          if (null == l)
            throw new Error(
              "Root node for ink not found. Are you sure it's a valid .ink.json file?"
            );
          (s = a.listDefs) &&
            (t._listDefinitions = W.JTokenToListDefinitions(s)),
            (t._mainContentContainer = Ct(W.JTokenToRuntimeObject(l), At)),
            t.ResetState();
        }
        return t;
      }
      return (
        u(h, P),
        o(h, [
          { key: "StartProfiling", value: function () {} },
          { key: "EndProfiling", value: function () {} },
          {
            key: "ToJsonString",
            value: function () {
              var t = W.RuntimeObjectToJToken(this._mainContentContainer),
                e = {};
              return (
                (e.inkVersion = this.inkVersionCurrent),
                (e.root = t),
                null != this._listDefinitions &&
                  (e.listDefs = W.ListDefinitionsToJToken(
                    this._listDefinitions
                  )),
                JSON.stringify(e)
              );
            },
          },
          {
            key: "ResetState",
            value: function () {
              this.IfAsyncWeCant("ResetState"),
                (this._state = new z(this)),
                this._state.variablesState.ObserveVariableChange(
                  this.VariableStateDidChangeEvent.bind(this)
                ),
                this.ResetGlobals();
            },
          },
          {
            key: "ResetErrors",
            value: function () {
              if (null === this._state) return kt("this._state");
              this._state.ResetErrors();
            },
          },
          {
            key: "ResetCallstack",
            value: function () {
              if ((this.IfAsyncWeCant("ResetCallstack"), null === this._state))
                return kt("this._state");
              this._state.ForceEnd();
            },
          },
          {
            key: "ResetGlobals",
            value: function () {
              if (this._mainContentContainer.namedContent.get("global decl")) {
                var t = this.state.currentPointer.copy();
                this.ChoosePath(new N("global decl"), !1),
                  this.ContinueInternal(),
                  (this.state.currentPointer = t);
              }
              this.state.variablesState.SnapshotDefaultGlobals();
            },
          },
          {
            key: "Continue",
            value: function () {
              return this.ContinueAsync(0), this.currentText;
            },
          },
          {
            key: "ContinueAsync",
            value: function (t) {
              this._hasValidatedExternals || this.ValidateExternalBindings(),
                this.ContinueInternal(t);
            },
          },
          {
            key: "ContinueInternal",
            value: function (t) {
              var e = 0 < arguments.length && void 0 !== t ? t : 0;
              null != this._profiler && this._profiler.PreContinue();
              var n = 0 < e;
              if (
                (this._recursiveContinueCount++, !this._asyncContinueActive)
              ) {
                if (((this._asyncContinueActive = n), !this.canContinue))
                  throw new _t(
                    "Can't continue - should check canContinue before calling Continue"
                  );
                (this._state.didSafeExit = !1),
                  this._state.ResetOutput(),
                  1 == this._recursiveContinueCount &&
                    (this._state.variablesState.batchObservingVariableChanges = !0);
              }
              var i = new H();
              i.Start();
              var r = !1;
              do {
                try {
                  r = this.ContinueSingleStep();
                } catch (t) {
                  if (!(t instanceof _t)) throw t;
                  this.AddError(t.message, void 0, t.useEndLineNumber);
                  break;
                }
                if (r) break;
                if (this._asyncContinueActive && i.ElapsedMilliseconds > e)
                  break;
              } while (this.canContinue);
              i.Stop(),
                (!r && this.canContinue) ||
                  (null != this._stateAtLastNewline &&
                    (this.RestoreStateSnapshot(this._stateAtLastNewline),
                    (this._stateAtLastNewline = null)),
                  this.canContinue ||
                    (this.state.callStack.canPopThread &&
                      this.AddError(
                        "Thread available to pop, threads should always be flat by the end of evaluation?"
                      ),
                    0 != this.state.generatedChoices.length ||
                      this.state.didSafeExit ||
                      null != this._temporaryEvaluationContainer ||
                      (this.state.callStack.CanPop(It.Tunnel)
                        ? this.AddError(
                            "unexpectedly reached end of content. Do you need a '->->' to return from a tunnel?"
                          )
                        : this.state.callStack.CanPop(It.Function)
                        ? this.AddError(
                            "unexpectedly reached end of content. Do you need a '~ return'?"
                          )
                        : this.state.callStack.canPop
                        ? this.AddError(
                            "unexpectedly reached end of content for unknown reason. Please debug compiler!"
                          )
                        : this.AddError(
                            "ran out of content. Do you need a '-> DONE' or '-> END'?"
                          ))),
                  (this.state.didSafeExit = !1),
                  1 == this._recursiveContinueCount &&
                    (this._state.variablesState.batchObservingVariableChanges = !1),
                  (this._asyncContinueActive = !1)),
                this._recursiveContinueCount--,
                null != this._profiler && this._profiler.PostContinue();
            },
          },
          {
            key: "ContinueSingleStep",
            value: function () {
              if (
                (null != this._profiler && this._profiler.PreStep(),
                this.Step(),
                null != this._profiler && this._profiler.PostStep(),
                this.canContinue ||
                  this.state.callStack.elementIsEvaluateFromGame ||
                  this.TryFollowDefaultInvisibleChoice(),
                null != this._profiler && this._profiler.PreSnapshot(),
                !this.state.inStringEvaluation)
              ) {
                if (null != this._stateAtLastNewline) {
                  if (null === this._stateAtLastNewline.currentTags)
                    return kt("this._stateAtLastNewline.currentTags");
                  if (null === this.state.currentTags)
                    return kt("this.state.currentTags");
                  var t = this.CalculateNewlineOutputStateChange(
                    this._stateAtLastNewline.currentText,
                    this.state.currentText,
                    this._stateAtLastNewline.currentTags.length,
                    this.state.currentTags.length
                  );
                  if (t == h.OutputStateChange.ExtendedBeyondNewline)
                    return (
                      this.RestoreStateSnapshot(this._stateAtLastNewline), !0
                    );
                  t == h.OutputStateChange.NewlineRemoved &&
                    (this._stateAtLastNewline = null);
                }
                this.state.outputStreamEndsInNewline &&
                  (this.canContinue
                    ? null == this._stateAtLastNewline &&
                      (this._stateAtLastNewline = this.StateSnapshot())
                    : (this._stateAtLastNewline = null));
              }
              return (
                null != this._profiler && this._profiler.PostSnapshot(), !1
              );
            },
          },
          {
            key: "CalculateNewlineOutputStateChange",
            value: function (t, e, n, i) {
              if (null === t) return kt("prevText");
              if (null === e) return kt("currText");
              var r = e.length >= t.length && "\n" == e.charAt(t.length - 1);
              if (n == i && t.length == e.length && r)
                return h.OutputStateChange.NoChange;
              if (!r) return h.OutputStateChange.NewlineRemoved;
              if (n < i) return h.OutputStateChange.ExtendedBeyondNewline;
              for (var a = t.length; a < e.length; a++) {
                var o = e.charAt(a);
                if (" " != o && "\t" != o)
                  return h.OutputStateChange.ExtendedBeyondNewline;
              }
              return h.OutputStateChange.NoChange;
            },
          },
          {
            key: "ContinueMaximally",
            value: function () {
              this.IfAsyncWeCant("ContinueMaximally");
              for (var t = new bt(); this.canContinue; )
                t.Append(this.Continue());
              return t.toString();
            },
          },
          {
            key: "ContentAtPath",
            value: function (t) {
              return this.mainContentContainer.ContentAtPath(t);
            },
          },
          {
            key: "KnotContainerWithName",
            value: function (t) {
              var e = this.mainContentContainer.namedContent.get(t);
              return e instanceof At ? e : null;
            },
          },
          {
            key: "PointerAtPath",
            value: function (t) {
              if (0 == t.length) return Vt.Null;
              var e = new Vt(),
                n = t.length,
                i = null;
              return null === t.lastComponent
                ? kt("path.lastComponent")
                : (t.lastComponent.isIndex
                    ? ((n = t.length - 1),
                      (i = this.mainContentContainer.ContentAtPath(
                        t,
                        void 0,
                        n
                      )),
                      (e.container = i.container),
                      (e.index = t.lastComponent.index))
                    : ((i = this.mainContentContainer.ContentAtPath(t)),
                      (e.container = i.container),
                      (e.index = -1)),
                  null == i.obj || (i.obj == this.mainContentContainer && 0 < n)
                    ? this.Error(
                        "Failed to find content at path '" +
                          t +
                          "', and no approximation of it was possible."
                      )
                    : i.approximate &&
                      this.Warning(
                        "Failed to find content at path '" +
                          t +
                          "', so it was approximated to: '" +
                          i.obj.path +
                          "'."
                      ),
                  e);
            },
          },
          {
            key: "StateSnapshot",
            value: function () {
              return this.state.Copy();
            },
          },
          {
            key: "RestoreStateSnapshot",
            value: function (t) {
              this._state = t;
            },
          },
          {
            key: "Step",
            value: function () {
              var t = !0,
                e = this.state.currentPointer.copy();
              if (!e.isNull) {
                for (
                  var n = St(e.Resolve(), At);
                  n && (this.VisitContainer(n, !0), 0 != n.content.length);

                )
                  n = St((e = Vt.StartOf(n)).Resolve(), At);
                (this.state.currentPointer = e.copy()),
                  null != this._profiler &&
                    this._profiler.Step(this.state.callStack);
                var i = e.Resolve(),
                  r = this.PerformLogicAndFlowControl(i);
                if (!this.state.currentPointer.isNull) {
                  r && (t = !1);
                  var a = St(i, D);
                  if (a) {
                    var o = this.ProcessChoice(a);
                    o && this.state.generatedChoices.push(o),
                      (i = null),
                      (t = !1);
                  }
                  if ((i instanceof At && (t = !1), t)) {
                    var u = St(i, I);
                    if (u && -1 == u.contextIndex) {
                      var s = this.state.callStack.ContextForVariableNamed(
                        u.variableName
                      );
                      i = new I(u.variableName, s);
                    }
                    this.state.inExpressionEvaluation
                      ? this.state.PushEvaluationStack(i)
                      : this.state.PushToOutputStream(i);
                  }
                  this.NextContent();
                  var l = St(i, Ft);
                  l &&
                    l.commandType == Ft.CommandType.StartThread &&
                    this.state.callStack.PushThread();
                }
              }
            },
          },
          {
            key: "VisitContainer",
            value: function (t, e) {
              (t.countingAtStartOnly && !e) ||
                (t.visitsShouldBeCounted &&
                  this.IncrementVisitCountForContainer(t),
                t.turnIndexShouldBeCounted &&
                  this.RecordTurnIndexVisitToContainer(t));
            },
          },
          {
            key: "VisitChangedContainersDueToDivert",
            value: function () {
              var t = this.state.previousPointer.copy(),
                e = this.state.currentPointer.copy();
              if (!e.isNull && -1 != e.index) {
                if (((this._prevContainers.length = 0), !t.isNull))
                  for (var n = St(t.Resolve(), At) || St(t.container, At); n; )
                    this._prevContainers.push(n), (n = St(n.parent, At));
                var i = e.Resolve();
                if (null != i)
                  for (
                    var r = St(i.parent, At);
                    r &&
                    (this._prevContainers.indexOf(r) < 0 ||
                      r.countingAtStartOnly);

                  ) {
                    var a = 0 < r.content.length && i == r.content[0];
                    this.VisitContainer(r, a), (r = St((i = r).parent, At));
                  }
              }
            },
          },
          {
            key: "ProcessChoice",
            value: function (t) {
              var e = !0;
              if (t.hasCondition) {
                var n = this.state.PopEvaluationStack();
                this.IsTruthy(n) || (e = !1);
              }
              var i = "",
                r = "";
              t.hasChoiceOnlyContent &&
                (r = Ct(this.state.PopEvaluationStack(), Ot).value || "");
              t.hasStartContent &&
                (i = Ct(this.state.PopEvaluationStack(), Ot).value || "");
              t.onceOnly &&
                0 < this.VisitCountForContainer(t.choiceTarget) &&
                (e = !1);
              if (!e) return null;
              var a = new G();
              return (
                (a.targetPath = t.pathOnChoice),
                (a.sourcePath = t.path.toString()),
                (a.isInvisibleDefault = t.isInvisibleDefault),
                (a.threadAtGeneration = this.state.callStack.ForkThread()),
                (a.text = (i + r).replace(/^[ \t]+|[ \t]+$/g, "")),
                a
              );
            },
          },
          {
            key: "IsTruthy",
            value: function (t) {
              if (t instanceof xt) {
                var e = t;
                if (e instanceof Nt) {
                  var n = e;
                  return (
                    this.Error(
                      "Shouldn't use a divert target (to " +
                        n.targetPath +
                        ") as a conditional value. Did you intend a function call 'likeThis()' or a read count check 'likeThis'? (no arrows)"
                    ),
                    !1
                  );
                }
                return e.isTruthy;
              }
              return !1;
            },
          },
          {
            key: "PerformLogicAndFlowControl",
            value: function (t) {
              if (null == t) return !1;
              if (t instanceof Lt) {
                var e = t;
                if (e.isConditional) {
                  var n = this.state.PopEvaluationStack();
                  if (!this.IsTruthy(n)) return !0;
                }
                if (e.hasVariableTarget) {
                  var i = e.variableDivertName,
                    r = this.state.variablesState.GetVariableWithName(i);
                  if (null == r)
                    this.Error(
                      "Tried to divert using a target from a variable that could not be found (" +
                        i +
                        ")"
                    );
                  else if (!(r instanceof Nt)) {
                    var a = St(r, Et),
                      o =
                        "Tried to divert to a target from a variable, but the variable (" +
                        i +
                        ") didn't contain a divert target, it ";
                    a instanceof Et && 0 == a.value
                      ? (o += "was empty/null (the value 0).")
                      : (o += "contained '" + r + "'."),
                      this.Error(o);
                  }
                  var u = Ct(r, Nt);
                  this.state.divertedPointer = this.PointerAtPath(u.targetPath);
                } else {
                  if (e.isExternal)
                    return (
                      this.CallExternalFunction(
                        e.targetPathString,
                        e.externalArgs
                      ),
                      !0
                    );
                  this.state.divertedPointer = e.targetPointer.copy();
                }
                return (
                  e.pushesToStack &&
                    this.state.callStack.Push(
                      e.stackPushType,
                      void 0,
                      this.state.outputStream.length
                    ),
                  this.state.divertedPointer.isNull &&
                    !e.isExternal &&
                    (e && e.debugMetadata && null != e.debugMetadata.sourceName
                      ? this.Error(
                          "Divert target doesn't exist: " +
                            e.debugMetadata.sourceName
                        )
                      : this.Error("Divert resolution failed: " + e)),
                  !0
                );
              }
              if (t instanceof Ft) {
                var s = t;
                switch (s.commandType) {
                  case Ft.CommandType.EvalStart:
                    this.Assert(
                      !1 === this.state.inExpressionEvaluation,
                      "Already in expression evaluation?"
                    ),
                      (this.state.inExpressionEvaluation = !0);
                    break;
                  case Ft.CommandType.EvalEnd:
                    this.Assert(
                      !0 === this.state.inExpressionEvaluation,
                      "Not in expression evaluation mode"
                    ),
                      (this.state.inExpressionEvaluation = !1);
                    break;
                  case Ft.CommandType.EvalOutput:
                    if (0 < this.state.evaluationStack.length) {
                      var l = this.state.PopEvaluationStack();
                      if (!(l instanceof Mt)) {
                        var h = new Ot(l.toString());
                        this.state.PushToOutputStream(h);
                      }
                    }
                    break;
                  case Ft.CommandType.NoOp:
                    break;
                  case Ft.CommandType.Duplicate:
                    this.state.PushEvaluationStack(
                      this.state.PeekEvaluationStack()
                    );
                    break;
                  case Ft.CommandType.PopEvaluatedValue:
                    this.state.PopEvaluationStack();
                    break;
                  case Ft.CommandType.PopFunction:
                  case Ft.CommandType.PopTunnel:
                    var c =
                        s.commandType == Ft.CommandType.PopFunction
                          ? It.Function
                          : It.Tunnel,
                      f = null;
                    if (c == It.Tunnel) {
                      var v = this.state.PopEvaluationStack();
                      null === (f = St(v, Nt)) &&
                        this.Assert(
                          v instanceof Mt,
                          "Expected void if ->-> doesn't override target"
                        );
                    }
                    if (this.state.TryExitFunctionEvaluationFromGame()) break;
                    if (
                      this.state.callStack.currentElement.type == c &&
                      this.state.callStack.canPop
                    )
                      this.state.PopCallStack(),
                        f &&
                          (this.state.divertedPointer = this.PointerAtPath(
                            f.targetPath
                          ));
                    else {
                      var d = new Map();
                      d.set(
                        It.Function,
                        "function return statement (~ return)"
                      ),
                        d.set(It.Tunnel, "tunnel onwards statement (->->)");
                      var y = d.get(this.state.callStack.currentElement.type);
                      this.state.callStack.canPop ||
                        (y = "end of flow (-> END or choice)");
                      var p = "Found " + d.get(c) + ", when expected " + y;
                      this.Error(p);
                    }
                    break;
                  case Ft.CommandType.BeginString:
                    this.state.PushToOutputStream(s),
                      this.Assert(
                        !0 === this.state.inExpressionEvaluation,
                        "Expected to be in an expression when evaluating a string"
                      ),
                      (this.state.inExpressionEvaluation = !1);
                    break;
                  case Ft.CommandType.EndString:
                    for (
                      var m = [], g = 0, S = this.state.outputStream.length - 1;
                      0 <= S;
                      --S
                    ) {
                      var C = this.state.outputStream[S];
                      g++;
                      var k = St(C, Ft);
                      if (k && k.commandType == Ft.CommandType.BeginString)
                        break;
                      C instanceof Ot && m.push(C);
                    }
                    this.state.PopFromOutputStream(g), (m = m.reverse());
                    var b = new bt(),
                      T = !0,
                      w = !1,
                      _ = void 0;
                    try {
                      for (
                        var x, E = m[Symbol.iterator]();
                        !(T = (x = E.next()).done);
                        T = !0
                      ) {
                        var O = x.value;
                        b.Append(O.toString());
                      }
                    } catch (t) {
                      (w = !0), (_ = t);
                    } finally {
                      try {
                        T || null == E.return || E.return();
                      } finally {
                        if (w) throw _;
                      }
                    }
                    (this.state.inExpressionEvaluation = !0),
                      this.state.PushEvaluationStack(new Ot(b.toString()));
                    break;
                  case Ft.CommandType.ChoiceCount:
                    var N = this.state.generatedChoices.length;
                    this.state.PushEvaluationStack(new Et(N));
                    break;
                  case Ft.CommandType.Turns:
                    this.state.PushEvaluationStack(
                      new Et(this.state.currentTurnIndex + 1)
                    );
                    break;
                  case Ft.CommandType.TurnsSince:
                  case Ft.CommandType.ReadCount:
                    var P = this.state.PopEvaluationStack();
                    if (!(P instanceof Nt)) {
                      var A = "";
                      P instanceof Et &&
                        (A =
                          ". Did you accidentally pass a read count ('knot_name') instead of a target ('-> knot_name')?"),
                        this.Error(
                          "TURNS_SINCE / READ_COUNT expected a divert target (knot, stitch, label name), but saw " +
                            P +
                            A
                        );
                      break;
                    }
                    var I,
                      F = Ct(P, Nt),
                      V = St(this.ContentAtPath(F.targetPath).correctObj, At);
                    null != V
                      ? (I =
                          s.commandType == Ft.CommandType.TurnsSince
                            ? this.TurnsSinceForContainer(V)
                            : this.VisitCountForContainer(V))
                      : ((I =
                          s.commandType == Ft.CommandType.TurnsSince ? -1 : 0),
                        this.Warning(
                          "Failed to find container for " +
                            s.toString() +
                            " lookup at " +
                            F.targetPath.toString()
                        )),
                      this.state.PushEvaluationStack(new Et(I));
                    break;
                  case Ft.CommandType.Random:
                    var L = St(this.state.PopEvaluationStack(), Et),
                      R = St(this.state.PopEvaluationStack(), Et);
                    if (null == R || R instanceof Et == !1)
                      return this.Error(
                        "Invalid value for minimum parameter of RANDOM(min, max)"
                      );
                    if (null == L || R instanceof Et == !1)
                      return this.Error(
                        "Invalid value for maximum parameter of RANDOM(min, max)"
                      );
                    if (null === L.value) return kt("maxInt.value");
                    if (null === R.value) return kt("minInt.value");
                    var D = L.value - R.value + 1;
                    D <= 0 &&
                      this.Error(
                        "RANDOM was called with minimum as " +
                          R.value +
                          " and maximum as " +
                          L.value +
                          ". The maximum must be larger"
                      );
                    var M = this.state.storySeed + this.state.previousRandom,
                      G = new Bt(M).next(),
                      B = (G % D) + R.value;
                    this.state.PushEvaluationStack(new Et(B)),
                      (this.state.previousRandom = G);
                    break;
                  case Ft.CommandType.SeedRandom:
                    var j = St(this.state.PopEvaluationStack(), Et);
                    if (null == j || j instanceof Et == !1)
                      return this.Error("Invalid value passed to SEED_RANDOM");
                    if (null === j.value) return kt("minInt.value");
                    (this.state.storySeed = j.value),
                      (this.state.previousRandom = 0),
                      this.state.PushEvaluationStack(new Mt());
                    break;
                  case Ft.CommandType.VisitIndex:
                    var W =
                      this.VisitCountForContainer(
                        this.state.currentPointer.container
                      ) - 1;
                    this.state.PushEvaluationStack(new Et(W));
                    break;
                  case Ft.CommandType.SequenceShuffleIndex:
                    var J = this.NextSequenceShuffleIndex();
                    this.state.PushEvaluationStack(new Et(J));
                    break;
                  case Ft.CommandType.StartThread:
                    break;
                  case Ft.CommandType.Done:
                    this.state.callStack.canPopThread
                      ? this.state.callStack.PopThread()
                      : ((this.state.didSafeExit = !0),
                        (this.state.currentPointer = Vt.Null));
                    break;
                  case Ft.CommandType.End:
                    this.state.ForceEnd();
                    break;
                  case Ft.CommandType.ListFromInt:
                    var q = St(this.state.PopEvaluationStack(), Et),
                      K = Ct(this.state.PopEvaluationStack(), Ot);
                    if (null === q)
                      throw new _t(
                        "Passed non-integer when creating a list element from a numerical value."
                      );
                    var U = null;
                    if (null === this.listDefinitions)
                      return kt("this.listDefinitions");
                    var z = this.listDefinitions.TryListGetDefinition(
                      K.value,
                      null
                    );
                    if (!z.exists)
                      throw new _t("Failed to find LIST called " + K.value);
                    if (null === q.value) return kt("minInt.value");
                    var H = z.result.TryGetItemWithValue(q.value, Tt.Null);
                    H.exists && (U = new Pt(H.result, q.value)),
                      null == U && (U = new Pt()),
                      this.state.PushEvaluationStack(U);
                    break;
                  case Ft.CommandType.ListRange:
                    var X = St(this.state.PopEvaluationStack(), xt),
                      $ = St(this.state.PopEvaluationStack(), xt),
                      Q = St(this.state.PopEvaluationStack(), Pt);
                    if (null === Q || null === $ || null === X)
                      throw new _t(
                        "Expected list, minimum and maximum for LIST_RANGE"
                      );
                    if (null === Q.value) return kt("targetList.value");
                    var Y = Q.value.ListWithSubRange(
                      $.valueObject,
                      X.valueObject
                    );
                    this.state.PushEvaluationStack(new Pt(Y));
                    break;
                  case Ft.CommandType.ListRandom:
                    var Z = this.state.PopEvaluationStack();
                    if (null === Z)
                      throw new _t("Expected list for LIST_RANDOM");
                    var tt = Z.value,
                      et = null;
                    if (null === tt) throw kt("list");
                    if (0 == tt.Count) et = new wt();
                    else {
                      for (
                        var nt =
                            this.state.storySeed + this.state.previousRandom,
                          it = new Bt(nt).next(),
                          rt = it % tt.Count,
                          at = tt.entries(),
                          ot = 0;
                        ot <= rt - 1;
                        ot++
                      )
                        at.next();
                      var ut = at.next().value,
                        st = { Key: Tt.fromSerializedKey(ut[0]), Value: ut[1] };
                      if (null === st.Key.originName)
                        return kt("randomItem.Key.originName");
                      (et = new wt(st.Key.originName, this)).Add(
                        st.Key,
                        st.Value
                      ),
                        (this.state.previousRandom = it);
                    }
                    this.state.PushEvaluationStack(new Pt(et));
                    break;
                  default:
                    this.Error("unhandled ControlCommand: " + s);
                }
                return !0;
              }
              if (t instanceof Dt) {
                var lt = t,
                  ht = this.state.PopEvaluationStack();
                return this.state.variablesState.Assign(lt, ht), !0;
              }
              if (t instanceof Rt) {
                var ct = t,
                  ft = null;
                if (null != ct.pathForCount) {
                  var vt = ct.containerForCount,
                    dt = this.VisitCountForContainer(vt);
                  ft = new Et(dt);
                } else if (
                  null ==
                  (ft = this.state.variablesState.GetVariableWithName(ct.name))
                ) {
                  var yt = this.state.variablesState.TryGetDefaultVariableValue(
                    ct.name
                  );
                  null != yt
                    ? (this.Warning(
                        "Variable not found in save state: '" +
                          ct.name +
                          "', but seems to have been newly created. Assigning value from latest ink's declaration: " +
                          yt
                      ),
                      (ft = yt),
                      this.state.variablesState.SetGlobal(ct.name, ft))
                    : (this.Warning(
                        "Variable not found: '" +
                          ct.name +
                          "'. Using default value of 0 (false). This can happen with temporary variables if the declaration hasn't yet been hit."
                      ),
                      (ft = new Et(0)));
                }
                return this.state.PushEvaluationStack(ft), !0;
              }
              if (t instanceof Gt) {
                var pt = t,
                  mt = this.state.PopEvaluationStack(pt.numberOfParameters),
                  gt = pt.Call(mt);
                return this.state.PushEvaluationStack(gt), !0;
              }
              return !1;
            },
          },
          {
            key: "ChoosePathString",
            value: function (t, e, n) {
              var i = !(1 < arguments.length && void 0 !== e) || e,
                r = 2 < arguments.length && void 0 !== n ? n : [];
              if ((this.IfAsyncWeCant("call ChoosePathString right now"), i))
                this.ResetCallstack();
              else if (
                this.state.callStack.currentElement.type == It.Function
              ) {
                var a = "",
                  o = this.state.callStack.currentElement.currentPointer
                    .container;
                throw (
                  (null != o && (a = "(" + o.path.toString() + ") "),
                  new Error(
                    "Story was running a function " +
                      a +
                      "when you called ChoosePathString(" +
                      t +
                      ") - this is almost certainly not not what you want! Full stack trace: \n" +
                      this.state.callStack.callStackTrace
                  ))
                );
              }
              this.state.PassArgumentsToEvaluationStack(r),
                this.ChoosePath(new N(t));
            },
          },
          {
            key: "IfAsyncWeCant",
            value: function (t) {
              if (this._asyncContinueActive)
                throw new Error(
                  "Can't " +
                    t +
                    ". Story is in the middle of a ContinueAsync(). Make more ContinueAsync() calls or a single Continue() call beforehand."
                );
            },
          },
          {
            key: "ChoosePath",
            value: function (t, e) {
              var n = !(1 < arguments.length && void 0 !== e) || e;
              this.state.SetChosenPath(t, n),
                this.VisitChangedContainersDueToDivert();
            },
          },
          {
            key: "ChooseChoiceIndex",
            value: function (t) {
              t = t;
              var e = this.currentChoices;
              this.Assert(0 <= t && t < e.length, "choice out of range");
              var n = e[t];
              return null === n.threadAtGeneration
                ? kt("choiceToChoose.threadAtGeneration")
                : null === n.targetPath
                ? kt("choiceToChoose.targetPath")
                : ((this.state.callStack.currentThread = n.threadAtGeneration),
                  void this.ChoosePath(n.targetPath));
            },
          },
          {
            key: "HasFunction",
            value: function (t) {
              try {
                return null != this.KnotContainerWithName(t);
              } catch (t) {
                return !1;
              }
            },
          },
          {
            key: "EvaluateFunction",
            value: function (t, e, n) {
              var i = 1 < arguments.length && void 0 !== e ? e : [],
                r = 2 < arguments.length && void 0 !== n && n;
              if ((this.IfAsyncWeCant("evaluate a function"), null == t))
                throw new Error("Function is null");
              if ("" == t || "" == t.trim())
                throw new Error("Function is empty or white space.");
              var a = this.KnotContainerWithName(t);
              if (null == a)
                throw new Error("Function doesn't exist: '" + t + "'");
              var o = [];
              o.push.apply(o, this.state.outputStream),
                this._state.ResetOutput(),
                this.state.StartFunctionEvaluationFromGame(a, i);
              for (var u = new bt(); this.canContinue; )
                u.Append(this.Continue());
              var s = u.toString();
              this._state.ResetOutput(o);
              var l = this.state.CompleteFunctionEvaluationFromGame();
              return r ? { returned: l, output: s } : l;
            },
          },
          {
            key: "EvaluateExpression",
            value: function (t) {
              var e = this.state.callStack.elements.length;
              this.state.callStack.Push(It.Tunnel),
                (this._temporaryEvaluationContainer = t),
                this.state.GoToStart();
              var n = this.state.evaluationStack.length;
              return (
                this.Continue(),
                (this._temporaryEvaluationContainer = null),
                this.state.callStack.elements.length > e &&
                  this.state.PopCallStack(),
                n < this.state.evaluationStack.length
                  ? this.state.PopEvaluationStack()
                  : null
              );
            },
          },
          {
            key: "CallExternalFunction",
            value: function (t, e) {
              if (null === t) return kt("funcName");
              var n = this._externals.get(t),
                i = null;
              if (!(void 0 !== n)) {
                if (this.allowExternalFunctionFallbacks)
                  return (
                    (i = this.KnotContainerWithName(t)),
                    this.Assert(
                      null !== i,
                      "Trying to call EXTERNAL function '" +
                        t +
                        "' which has not been bound, and fallback ink function could not be found."
                    ),
                    this.state.callStack.Push(
                      It.Function,
                      void 0,
                      this.state.outputStream.length
                    ),
                    void (this.state.divertedPointer = Vt.StartOf(i))
                  );
                this.Assert(
                  !1,
                  "Trying to call EXTERNAL function '" +
                    t +
                    "' which has not been bound (and ink fallbacks disabled)."
                );
              }
              for (var r = [], a = 0; a < e; ++a) {
                var o = Ct(this.state.PopEvaluationStack(), xt).valueObject;
                r.push(o);
              }
              r.reverse();
              var u = n(r),
                s = null;
              null != u
                ? ((s = xt.Create(u)),
                  this.Assert(
                    null !== s,
                    "Could not create ink value from returned object of type " +
                      O(u)
                  ))
                : (s = new Mt()),
                this.state.PushEvaluationStack(s);
            },
          },
          {
            key: "BindExternalFunctionGeneral",
            value: function (t, e) {
              this.IfAsyncWeCant("bind an external function"),
                this.Assert(
                  !this._externals.has(t),
                  "Function '" + t + "' has already been bound."
                ),
                this._externals.set(t, e);
            },
          },
          {
            key: "TryCoerce",
            value: function (t) {
              return t;
            },
          },
          {
            key: "BindExternalFunction",
            value: function (t, r) {
              var a = this;
              this.Assert(null != r, "Can't bind a null function"),
                this.BindExternalFunctionGeneral(t, function (t) {
                  a.Assert(
                    t.length >= r.length,
                    "External function expected " + r.length + " arguments"
                  );
                  for (var e = [], n = 0, i = t.length; n < i; n++)
                    e[n] = a.TryCoerce(t[n]);
                  return r.apply(null, e);
                });
            },
          },
          {
            key: "UnbindExternalFunction",
            value: function (t) {
              this.IfAsyncWeCant("unbind an external a function"),
                this.Assert(
                  this._externals.has(t),
                  "Function '" + t + "' has not been bound."
                ),
                this._externals.delete(t);
            },
          },
          {
            key: "ValidateExternalBindings",
            value: function (t, e) {
              var n = null,
                i = null,
                r = e || new Set();
              if (
                (t instanceof At && (n = t),
                t instanceof P && (i = t),
                null === n && null === i)
              )
                if (
                  (this.ValidateExternalBindings(this._mainContentContainer, r),
                  (this._hasValidatedExternals = !0),
                  0 == r.size)
                )
                  this._hasValidatedExternals = !0;
                else {
                  var a = "Error: Missing function binding for external";
                  (a += 1 < r.size ? "s" : ""),
                    (a += ": '"),
                    (a += Array.from(r).join("', '")),
                    (a += "' "),
                    (a += this.allowExternalFunctionFallbacks
                      ? ", and no fallback ink function found."
                      : " (ink fallbacks disabled)"),
                    this.Error(a);
                }
              else if (null != n) {
                var o = !0,
                  u = !1,
                  s = void 0;
                try {
                  for (
                    var l, h = n.content[Symbol.iterator]();
                    !(o = (l = h.next()).done);
                    o = !0
                  ) {
                    var c = l.value;
                    (null != c && c.hasValidName) ||
                      this.ValidateExternalBindings(c, r);
                  }
                } catch (t) {
                  (u = !0), (s = t);
                } finally {
                  try {
                    o || null == h.return || h.return();
                  } finally {
                    if (u) throw s;
                  }
                }
                var f = !0,
                  v = !1,
                  d = void 0;
                try {
                  for (
                    var y, p = n.namedContent[Symbol.iterator]();
                    !(f = (y = p.next()).done);
                    f = !0
                  ) {
                    var m = _(y.value, 2),
                      g = (m[0], m[1]);
                    this.ValidateExternalBindings(St(g, P), r);
                  }
                } catch (t) {
                  (v = !0), (d = t);
                } finally {
                  try {
                    f || null == p.return || p.return();
                  } finally {
                    if (v) throw d;
                  }
                }
              } else if (null != i) {
                var S = St(i, Lt);
                if (S && S.isExternal) {
                  var C = S.targetPathString;
                  if (null === C) return kt("name");
                  if (!this._externals.has(C))
                    if (this.allowExternalFunctionFallbacks)
                      this.mainContentContainer.namedContent.has(C) || r.add(C);
                    else r.add(C);
                }
              }
            },
          },
          {
            key: "ObserveVariable",
            value: function (t, e) {
              if (
                (this.IfAsyncWeCant("observe a new variable"),
                null === this._variableObservers &&
                  (this._variableObservers = new Map()),
                !this.state.variablesState.GlobalVariableExistsWithName(t))
              )
                throw new _t(
                  "Cannot observe variable '" +
                    t +
                    "' because it wasn't declared in the ink story."
                );
              this._variableObservers.has(t)
                ? this._variableObservers.get(t).push(e)
                : this._variableObservers.set(t, [e]);
            },
          },
          {
            key: "ObserveVariables",
            value: function (t, e) {
              for (var n = 0, i = t.length; n < i; n++)
                this.ObserveVariable(t[n], e[n]);
            },
          },
          {
            key: "RemoveVariableObserver",
            value: function (t, e) {
              if (
                (this.IfAsyncWeCant("remove a variable observer"),
                null !== this._variableObservers)
              )
                if (void 0 !== e) {
                  if (this._variableObservers.has(e)) {
                    var n = this._variableObservers.get(e);
                    n.splice(n.indexOf(t), 1);
                  }
                } else {
                  var i = this._variableObservers.keys(),
                    r = !0,
                    a = !1,
                    o = void 0;
                  try {
                    for (
                      var u, s = i[Symbol.iterator]();
                      !(r = (u = s.next()).done);
                      r = !0
                    ) {
                      var l = u.value,
                        h = this._variableObservers.get(l);
                      h.splice(h.indexOf(t), 1);
                    }
                  } catch (t) {
                    (a = !0), (o = t);
                  } finally {
                    try {
                      r || null == s.return || s.return();
                    } finally {
                      if (a) throw o;
                    }
                  }
                }
            },
          },
          {
            key: "VariableStateDidChangeEvent",
            value: function (t, e) {
              if (null !== this._variableObservers) {
                var n = this._variableObservers.get(t);
                if (void 0 !== n) {
                  if (!(e instanceof xt))
                    throw new Error(
                      "Tried to get the value of a variable that isn't a standard type"
                    );
                  var i = Ct(e, xt),
                    r = !0,
                    a = !1,
                    o = void 0;
                  try {
                    for (
                      var u, s = n[Symbol.iterator]();
                      !(r = (u = s.next()).done);
                      r = !0
                    ) {
                      (0, u.value)(t, i.valueObject);
                    }
                  } catch (t) {
                    (a = !0), (o = t);
                  } finally {
                    try {
                      r || null == s.return || s.return();
                    } finally {
                      if (a) throw o;
                    }
                  }
                }
              }
            },
          },
          {
            key: "TagsForContentAtPath",
            value: function (t) {
              return this.TagsAtStartOfFlowContainerWithPathString(t);
            },
          },
          {
            key: "TagsAtStartOfFlowContainerWithPathString",
            value: function (t) {
              var e = new N(t),
                n = this.ContentAtPath(e).container;
              if (null === n) return kt("flowContainer");
              for (;;) {
                var i = n.content[0];
                if (!(i instanceof At)) break;
                n = i;
              }
              var r = null,
                a = !0,
                o = !1,
                u = void 0;
              try {
                for (
                  var s, l = n.content[Symbol.iterator]();
                  !(a = (s = l.next()).done);
                  a = !0
                ) {
                  var h = St(s.value, M);
                  if (!h) break;
                  null == r && (r = []), r.push(h.text);
                }
              } catch (t) {
                (o = !0), (u = t);
              } finally {
                try {
                  a || null == l.return || l.return();
                } finally {
                  if (o) throw u;
                }
              }
              return r;
            },
          },
          {
            key: "BuildStringOfHierarchy",
            value: function () {
              var t = new bt();
              return (
                this.mainContentContainer.BuildStringOfHierarchy(
                  t,
                  0,
                  this.state.currentPointer.Resolve()
                ),
                t.toString()
              );
            },
          },
          {
            key: "BuildStringOfContainer",
            value: function (t) {
              var e = new bt();
              return (
                t.BuildStringOfHierarchy(
                  e,
                  0,
                  this.state.currentPointer.Resolve()
                ),
                e.toString()
              );
            },
          },
          {
            key: "NextContent",
            value: function () {
              if (
                ((this.state.previousPointer = this.state.currentPointer.copy()),
                this.state.divertedPointer.isNull ||
                  ((this.state.currentPointer = this.state.divertedPointer.copy()),
                  (this.state.divertedPointer = Vt.Null),
                  this.VisitChangedContainersDueToDivert(),
                  this.state.currentPointer.isNull)) &&
                !this.IncrementContentPointer()
              ) {
                var t = !1;
                this.state.callStack.CanPop(It.Function)
                  ? (this.state.PopCallStack(It.Function),
                    this.state.inExpressionEvaluation &&
                      this.state.PushEvaluationStack(new Mt()),
                    (t = !0))
                  : this.state.callStack.canPopThread
                  ? (this.state.callStack.PopThread(), (t = !0))
                  : this.state.TryExitFunctionEvaluationFromGame(),
                  t && !this.state.currentPointer.isNull && this.NextContent();
              }
            },
          },
          {
            key: "IncrementContentPointer",
            value: function () {
              var t = !0,
                e = this.state.callStack.currentElement.currentPointer.copy();
              if ((e.index++, null === e.container))
                return kt("pointer.container");
              for (; e.index >= e.container.content.length; ) {
                t = !1;
                var n = St(e.container.parent, At);
                if (n instanceof At == !1) break;
                var i = n.content.indexOf(e.container);
                if (-1 == i) break;
                if (
                  ((e = new Vt(n, i)).index++, (t = !0), null === e.container)
                )
                  return kt("pointer.container");
              }
              return (
                t || (e = Vt.Null),
                (this.state.callStack.currentElement.currentPointer = e.copy()),
                t
              );
            },
          },
          {
            key: "TryFollowDefaultInvisibleChoice",
            value: function () {
              var t = this._state.currentChoices,
                e = t.filter(function (t) {
                  return t.isInvisibleDefault;
                });
              if (0 == e.length || t.length > e.length) return !1;
              var n = e[0];
              return null === n.targetPath
                ? kt("choice.targetPath")
                : null === n.threadAtGeneration
                ? kt("choice.threadAtGeneration")
                : ((this.state.callStack.currentThread = n.threadAtGeneration),
                  this.ChoosePath(n.targetPath, !1),
                  !0);
            },
          },
          {
            key: "VisitCountForContainer",
            value: function (t) {
              if (null === t) return kt("container");
              if (!t.visitsShouldBeCounted)
                return (
                  console.warn(
                    "Read count for target (" +
                      t.name +
                      " - on " +
                      t.debugMetadata +
                      ") unknown. The story may need to be compiled with countAllVisits flag (-c)."
                  ),
                  0
                );
              var e = 0,
                n = t.path.toString();
              return (e = this.state.visitCounts.get(n) || e);
            },
          },
          {
            key: "IncrementVisitCountForContainer",
            value: function (t) {
              var e = 0,
                n = t.path.toString();
              this.state.visitCounts.has(n) &&
                (e = this.state.visitCounts.get(n)),
                e++,
                this.state.visitCounts.set(n, e);
            },
          },
          {
            key: "RecordTurnIndexVisitToContainer",
            value: function (t) {
              var e = t.path.toString();
              this.state.turnIndices.set(e, this.state.currentTurnIndex);
            },
          },
          {
            key: "TurnsSinceForContainer",
            value: function (t) {
              t.turnIndexShouldBeCounted ||
                this.Error(
                  "TURNS_SINCE() for target (" +
                    t.name +
                    " - on " +
                    t.debugMetadata +
                    ") unknown. The story may need to be compiled with countAllVisits flag (-c)."
                );
              var e = t.path.toString(),
                n = this.state.turnIndices.get(e);
              return void 0 !== n ? this.state.currentTurnIndex - n : -1;
            },
          },
          {
            key: "NextSequenceShuffleIndex",
            value: function () {
              var t = St(this.state.PopEvaluationStack(), Et);
              if (!(t instanceof Et))
                return (
                  this.Error(
                    "expected number of elements in sequence for shuffle index"
                  ),
                  0
                );
              var e = this.state.currentPointer.container;
              if (null === e) return kt("seqContainer");
              if (null === t.value) return kt("numElementsIntVal.value");
              var n = t.value,
                i = Ct(this.state.PopEvaluationStack(), Et).value;
              if (null === i) return kt("seqCount");
              for (
                var r = i / n,
                  a = i % n,
                  o = e.path.toString(),
                  u = 0,
                  s = 0,
                  l = o.length;
                s < l;
                s++
              )
                u += o.charCodeAt(s) || 0;
              for (
                var h = u + r + this.state.storySeed,
                  c = new Bt(Math.floor(h)),
                  f = [],
                  v = 0;
                v < n;
                ++v
              )
                f.push(v);
              for (var d = 0; d <= a; ++d) {
                var y = c.next() % f.length,
                  p = f[y];
                if ((f.splice(y, 1), d == a)) return p;
              }
              throw new Error("Should never reach here");
            },
          },
          {
            key: "Error",
            value: function (t, e) {
              var n = 1 < arguments.length && void 0 !== e && e,
                i = new _t(t);
              throw ((i.useEndLineNumber = n), i);
            },
          },
          {
            key: "Warning",
            value: function (t) {
              this.AddError(t, !0);
            },
          },
          {
            key: "AddError",
            value: function (t, e, n) {
              var i = 1 < arguments.length && void 0 !== e && e,
                r = 2 < arguments.length && void 0 !== n && n,
                a = this.currentDebugMetadata,
                o = i ? "WARNING" : "ERROR";
              if (null != a) {
                var u = r ? a.endLineNumber : a.startLineNumber;
                t =
                  "RUNTIME " +
                  o +
                  ": '" +
                  a.fileName +
                  "' line " +
                  u +
                  ": " +
                  t;
              } else
                t = this.state.currentPointer.isNull
                  ? "RUNTIME " + o + ": " + t
                  : "RUNTIME " +
                    o +
                    ": (" +
                    this.state.currentPointer +
                    "): " +
                    t;
              this.state.AddError(t, i), i || this.state.ForceEnd();
            },
          },
          {
            key: "Assert",
            value: function (t, e) {
              var n = 1 < arguments.length && void 0 !== e ? e : null;
              if (0 == t)
                throw (
                  (null == n && (n = "Story assert"),
                  new Error(n + " " + this.currentDebugMetadata))
                );
            },
          },
          {
            key: "currentChoices",
            get: function () {
              var t = [];
              if (null === this._state) return kt("this._state");
              var e = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, a = this._state.currentChoices[Symbol.iterator]();
                  !(e = (r = a.next()).done);
                  e = !0
                ) {
                  var o = r.value;
                  o.isInvisibleDefault || ((o.index = t.length), t.push(o));
                }
              } catch (t) {
                (n = !0), (i = t);
              } finally {
                try {
                  e || null == a.return || a.return();
                } finally {
                  if (n) throw i;
                }
              }
              return t;
            },
          },
          {
            key: "currentText",
            get: function () {
              return (
                this.IfAsyncWeCant(
                  "call currentText since it's a work in progress"
                ),
                this.state.currentText
              );
            },
          },
          {
            key: "currentTags",
            get: function () {
              return (
                this.IfAsyncWeCant(
                  "call currentTags since it's a work in progress"
                ),
                this.state.currentTags
              );
            },
          },
          {
            key: "currentErrors",
            get: function () {
              return this.state.currentErrors;
            },
          },
          {
            key: "currentWarnings",
            get: function () {
              return this.state.currentWarnings;
            },
          },
          {
            key: "hasError",
            get: function () {
              return this.state.hasError;
            },
          },
          {
            key: "hasWarning",
            get: function () {
              return this.state.hasWarning;
            },
          },
          {
            key: "variablesState",
            get: function () {
              return this.state.variablesState;
            },
          },
          {
            key: "listDefinitions",
            get: function () {
              return this._listDefinitions;
            },
          },
          {
            key: "state",
            get: function () {
              return this._state;
            },
          },
          {
            key: "canContinue",
            get: function () {
              return this.state.canContinue;
            },
          },
          {
            key: "asyncContinueComplete",
            get: function () {
              return !this._asyncContinueActive;
            },
          },
          {
            key: "globalTags",
            get: function () {
              return this.TagsAtStartOfFlowContainerWithPathString("");
            },
          },
          {
            key: "currentDebugMetadata",
            get: function () {
              var t,
                e = this.state.currentPointer;
              if (
                !e.isNull &&
                null !== e.Resolve() &&
                null !== (t = e.Resolve().debugMetadata)
              )
                return t;
              for (
                var n = this.state.callStack.elements.length - 1;
                0 <= n;
                --n
              )
                if (
                  !(e = this.state.callStack.elements[n].currentPointer)
                    .isNull &&
                  null !== e.Resolve() &&
                  null !== (t = e.Resolve().debugMetadata)
                )
                  return t;
              for (var i = this.state.outputStream.length - 1; 0 <= i; --i) {
                if (null !== (t = this.state.outputStream[i].debugMetadata))
                  return t;
              }
              return null;
            },
          },
          {
            key: "mainContentContainer",
            get: function () {
              return this._temporaryEvaluationContainer
                ? this._temporaryEvaluationContainer
                : this._mainContentContainer;
            },
          },
        ]),
        h
      );
    })()),
    (q = s.Story || (s.Story = {})),
    ((K = q.OutputStateChange || (q.OutputStateChange = {}))[(K.NoChange = 0)] =
      "NoChange"),
    (K[(K.ExtendedBeyondNewline = 1)] = "ExtendedBeyondNewline"),
    (K[(K.NewlineRemoved = 2)] = "NewlineRemoved"),
    (s.InkList = wt),
    Object.defineProperty(s, "__esModule", { value: !0 });
});
//# sourceMappingURL=ink.js.map
