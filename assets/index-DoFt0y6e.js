function Pm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jm = { exports: {} },
  La = {},
  Mm = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ds = Symbol.for("react.element"),
  Sx = Symbol.for("react.portal"),
  Ex = Symbol.for("react.fragment"),
  Tx = Symbol.for("react.strict_mode"),
  Px = Symbol.for("react.profiler"),
  Cx = Symbol.for("react.provider"),
  jx = Symbol.for("react.context"),
  Mx = Symbol.for("react.forward_ref"),
  Nx = Symbol.for("react.suspense"),
  Lx = Symbol.for("react.memo"),
  kx = Symbol.for("react.lazy"),
  yf = Symbol.iterator;
function bx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yf && e[yf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Nm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Lm = Object.assign,
  km = {};
function Ei(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = km),
    (this.updater = n || Nm);
}
Ei.prototype.isReactComponent = {};
Ei.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ei.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bm() {}
bm.prototype = Ei.prototype;
function yc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = km),
    (this.updater = n || Nm);
}
var xc = (yc.prototype = new bm());
xc.constructor = yc;
Lm(xc, Ei.prototype);
xc.isPureReactComponent = !0;
var xf = Array.isArray,
  Rm = Object.prototype.hasOwnProperty,
  wc = { current: null },
  Am = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dm(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Rm.call(t, r) && !Am.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Ds,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: wc.current,
  };
}
function Rx(e, t) {
  return {
    $$typeof: Ds,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ds;
}
function Ax(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wf = /\/+/g;
function sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ax("" + e.key)
    : t.toString(36);
}
function Co(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ds:
          case Sx:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + sl(o, 0) : r),
      xf(i)
        ? ((n = ""),
          e != null && (n = e.replace(wf, "$&/") + "/"),
          Co(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Sc(i) &&
            (i = Rx(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(wf, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), xf(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + sl(s, l);
      o += Co(s, t, n, a, i);
    }
  else if (((a = bx(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + sl(s, l++)), (o += Co(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Js(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Co(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Dx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var it = { current: null },
  jo = { transition: null },
  Ix = {
    ReactCurrentDispatcher: it,
    ReactCurrentBatchConfig: jo,
    ReactCurrentOwner: wc,
  };
function Im() {
  throw Error("act(...) is not supported in production builds of React.");
}
te.Children = {
  map: Js,
  forEach: function (e, t, n) {
    Js(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Js(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Js(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Sc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
te.Component = Ei;
te.Fragment = Ex;
te.Profiler = Px;
te.PureComponent = yc;
te.StrictMode = Tx;
te.Suspense = Nx;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ix;
te.act = Im;
te.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Lm({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = wc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Rm.call(t, a) &&
        !Am.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ds, type: e.type, key: i, ref: s, props: r, _owner: o };
};
te.createContext = function (e) {
  return (
    (e = {
      $$typeof: jx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cx, _context: e }),
    (e.Consumer = e)
  );
};
te.createElement = Dm;
te.createFactory = function (e) {
  var t = Dm.bind(null, e);
  return (t.type = e), t;
};
te.createRef = function () {
  return { current: null };
};
te.forwardRef = function (e) {
  return { $$typeof: Mx, render: e };
};
te.isValidElement = Sc;
te.lazy = function (e) {
  return { $$typeof: kx, _payload: { _status: -1, _result: e }, _init: Dx };
};
te.memo = function (e, t) {
  return { $$typeof: Lx, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function (e) {
  var t = jo.transition;
  jo.transition = {};
  try {
    e();
  } finally {
    jo.transition = t;
  }
};
te.unstable_act = Im;
te.useCallback = function (e, t) {
  return it.current.useCallback(e, t);
};
te.useContext = function (e) {
  return it.current.useContext(e);
};
te.useDebugValue = function () {};
te.useDeferredValue = function (e) {
  return it.current.useDeferredValue(e);
};
te.useEffect = function (e, t) {
  return it.current.useEffect(e, t);
};
te.useId = function () {
  return it.current.useId();
};
te.useImperativeHandle = function (e, t, n) {
  return it.current.useImperativeHandle(e, t, n);
};
te.useInsertionEffect = function (e, t) {
  return it.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function (e, t) {
  return it.current.useLayoutEffect(e, t);
};
te.useMemo = function (e, t) {
  return it.current.useMemo(e, t);
};
te.useReducer = function (e, t, n) {
  return it.current.useReducer(e, t, n);
};
te.useRef = function (e) {
  return it.current.useRef(e);
};
te.useState = function (e) {
  return it.current.useState(e);
};
te.useSyncExternalStore = function (e, t, n) {
  return it.current.useSyncExternalStore(e, t, n);
};
te.useTransition = function () {
  return it.current.useTransition();
};
te.version = "18.3.1";
Mm.exports = te;
var P = Mm.exports;
const Se = Cm(P),
  Ox = Pm({ __proto__: null, default: Se }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _x = P,
  Vx = Symbol.for("react.element"),
  Fx = Symbol.for("react.fragment"),
  zx = Object.prototype.hasOwnProperty,
  Bx = _x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ux = { key: !0, ref: !0, __self: !0, __source: !0 };
function Om(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) zx.call(t, r) && !Ux.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Vx,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Bx.current,
  };
}
La.Fragment = Fx;
La.jsx = Om;
La.jsxs = Om;
jm.exports = La;
var f = jm.exports,
  _m = { exports: {} },
  xt = {},
  Vm = { exports: {} },
  Fm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, I) {
    var z = b.length;
    b.push(I);
    e: for (; 0 < z; ) {
      var Z = (z - 1) >>> 1,
        re = b[Z];
      if (0 < i(re, I)) (b[Z] = I), (b[z] = re), (z = Z);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var I = b[0],
      z = b.pop();
    if (z !== I) {
      b[0] = z;
      e: for (var Z = 0, re = b.length, Be = re >>> 1; Z < Be; ) {
        var Ue = 2 * (Z + 1) - 1,
          Rt = b[Ue],
          $e = Ue + 1,
          Et = b[$e];
        if (0 > i(Rt, z))
          $e < re && 0 > i(Et, Rt)
            ? ((b[Z] = Et), (b[$e] = z), (Z = $e))
            : ((b[Z] = Rt), (b[Ue] = z), (Z = Ue));
        else if ($e < re && 0 > i(Et, z)) (b[Z] = Et), (b[$e] = z), (Z = $e);
        else break e;
      }
    }
    return I;
  }
  function i(b, I) {
    var z = b.sortIndex - I.sortIndex;
    return z !== 0 ? z : b.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    p = 3,
    h = !1,
    y = !1,
    x = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(b) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= b)
        r(u), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(u);
    }
  }
  function E(b) {
    if (((x = !1), v(b), !y))
      if (n(a) !== null) (y = !0), de(C);
      else {
        var I = n(u);
        I !== null && ne(E, I.startTime - b);
      }
  }
  function C(b, I) {
    (y = !1), x && ((x = !1), m(w), (w = -1)), (h = !0);
    var z = p;
    try {
      for (
        v(I), d = n(a);
        d !== null && (!(d.expirationTime > I) || (b && !R()));

      ) {
        var Z = d.callback;
        if (typeof Z == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var re = Z(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof re == "function" ? (d.callback = re) : d === n(a) && r(a),
            v(I);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var Be = !0;
      else {
        var Ue = n(u);
        Ue !== null && ne(E, Ue.startTime - I), (Be = !1);
      }
      return Be;
    } finally {
      (d = null), (p = z), (h = !1);
    }
  }
  var N = !1,
    A = null,
    w = -1,
    k = 5,
    M = -1;
  function R() {
    return !(e.unstable_now() - M < k);
  }
  function _() {
    if (A !== null) {
      var b = e.unstable_now();
      M = b;
      var I = !0;
      try {
        I = A(!0, b);
      } finally {
        I ? V() : ((N = !1), (A = null));
      }
    } else N = !1;
  }
  var V;
  if (typeof g == "function")
    V = function () {
      g(_);
    };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(),
      X = G.port2;
    (G.port1.onmessage = _),
      (V = function () {
        X.postMessage(null);
      });
  } else
    V = function () {
      S(_, 0);
    };
  function de(b) {
    (A = b), N || ((N = !0), V());
  }
  function ne(b, I) {
    w = S(function () {
      b(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || h || ((y = !0), de(C));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (k = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (b) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = p;
      }
      var z = p;
      p = I;
      try {
        return b();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, I) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var z = p;
      p = b;
      try {
        return I();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (b, I, z) {
      var Z = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Z + z : Z))
          : (z = Z),
        b)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = z + re),
        (b = {
          id: c++,
          callback: I,
          priorityLevel: b,
          startTime: z,
          expirationTime: re,
          sortIndex: -1,
        }),
        z > Z
          ? ((b.sortIndex = z),
            t(u, b),
            n(a) === null &&
              b === n(u) &&
              (x ? (m(w), (w = -1)) : (x = !0), ne(E, z - Z)))
          : ((b.sortIndex = re), t(a, b), y || h || ((y = !0), de(C))),
        b
      );
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (b) {
      var I = p;
      return function () {
        var z = p;
        p = I;
        try {
          return b.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(Fm);
Vm.exports = Fm;
var $x = Vm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hx = P,
  vt = $x;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var zm = new Set(),
  us = {};
function Rr(e, t) {
  ci(e, t), ci(e + "Capture", t);
}
function ci(e, t) {
  for (us[e] = t, e = 0; e < t.length; e++) zm.add(t[e]);
}
var mn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  nu = Object.prototype.hasOwnProperty,
  Gx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Sf = {},
  Ef = {};
function Wx(e) {
  return nu.call(Ef, e)
    ? !0
    : nu.call(Sf, e)
    ? !1
    : Gx.test(e)
    ? (Ef[e] = !0)
    : ((Sf[e] = !0), !1);
}
function qx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kx(e, t, n, r) {
  if (t === null || typeof t > "u" || qx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function st(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    qe[e] = new st(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  qe[t] = new st(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  qe[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  qe[e] = new st(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    qe[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  qe[e] = new st(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  qe[e] = new st(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  qe[e] = new st(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  qe[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ec = /[\-:]([a-z])/g;
function Tc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ec, Tc);
    qe[t] = new st(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ec, Tc);
    qe[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ec, Tc);
  qe[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  qe[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
qe.xlinkHref = new st(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  qe[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pc(e, t, n, r) {
  var i = qe.hasOwnProperty(t) ? qe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Kx(t, n, i, r) && (n = null),
    r || i === null
      ? Wx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wn = Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  eo = Symbol.for("react.element"),
  Fr = Symbol.for("react.portal"),
  zr = Symbol.for("react.fragment"),
  Cc = Symbol.for("react.strict_mode"),
  ru = Symbol.for("react.profiler"),
  Bm = Symbol.for("react.provider"),
  Um = Symbol.for("react.context"),
  jc = Symbol.for("react.forward_ref"),
  iu = Symbol.for("react.suspense"),
  su = Symbol.for("react.suspense_list"),
  Mc = Symbol.for("react.memo"),
  Nn = Symbol.for("react.lazy"),
  $m = Symbol.for("react.offscreen"),
  Tf = Symbol.iterator;
function Li(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tf && e[Tf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ce = Object.assign,
  ol;
function Ui(e) {
  if (ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ol = (t && t[1]) || "";
    }
  return (
    `
` +
    ol +
    e
  );
}
var al = !1;
function ll(e, t) {
  if (!e || al) return "";
  al = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (al = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ui(e) : "";
}
function Yx(e) {
  switch (e.tag) {
    case 5:
      return Ui(e.type);
    case 16:
      return Ui("Lazy");
    case 13:
      return Ui("Suspense");
    case 19:
      return Ui("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ll(e.type, !1)), e;
    case 11:
      return (e = ll(e.type.render, !1)), e;
    case 1:
      return (e = ll(e.type, !0)), e;
    default:
      return "";
  }
}
function ou(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zr:
      return "Fragment";
    case Fr:
      return "Portal";
    case ru:
      return "Profiler";
    case Cc:
      return "StrictMode";
    case iu:
      return "Suspense";
    case su:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Um:
        return (e.displayName || "Context") + ".Consumer";
      case Bm:
        return (e._context.displayName || "Context") + ".Provider";
      case jc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Mc:
        return (
          (t = e.displayName || null), t !== null ? t : ou(e.type) || "Memo"
        );
      case Nn:
        (t = e._payload), (e = e._init);
        try {
          return ou(e(t));
        } catch {}
    }
  return null;
}
function Xx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ou(t);
    case 8:
      return t === Cc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Hn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Hm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Qx(e) {
  var t = Hm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function to(e) {
  e._valueTracker || (e._valueTracker = Qx(e));
}
function Gm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Hm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function $o(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function au(e, t) {
  var n = t.checked;
  return Ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Pf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Wm(e, t) {
  (t = t.checked), t != null && Pc(e, "checked", t, !1);
}
function lu(e, t) {
  Wm(e, t);
  var n = Hn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? uu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && uu(e, t.type, Hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Cf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function uu(e, t, n) {
  (t !== "number" || $o(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $i = Array.isArray;
function ri(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Hn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function cu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function jf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if ($i(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Hn(n) };
}
function qm(e, t) {
  var n = Hn(t.value),
    r = Hn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Mf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Km(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function du(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Km(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var no,
  Ym = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        no = no || document.createElement("div"),
          no.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = no.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function cs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Zx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yi).forEach(function (e) {
  Zx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yi[t] = Yi[e]);
  });
});
function Xm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yi.hasOwnProperty(e) && Yi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Qm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Xm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Jx = Ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function fu(e, t) {
  if (t) {
    if (Jx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function pu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var hu = null;
function Nc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var mu = null,
  ii = null,
  si = null;
function Nf(e) {
  if ((e = _s(e))) {
    if (typeof mu != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Da(t)), mu(e.stateNode, e.type, t));
  }
}
function Zm(e) {
  ii ? (si ? si.push(e) : (si = [e])) : (ii = e);
}
function Jm() {
  if (ii) {
    var e = ii,
      t = si;
    if (((si = ii = null), Nf(e), t)) for (e = 0; e < t.length; e++) Nf(t[e]);
  }
}
function eg(e, t) {
  return e(t);
}
function tg() {}
var ul = !1;
function ng(e, t, n) {
  if (ul) return e(t, n);
  ul = !0;
  try {
    return eg(e, t, n);
  } finally {
    (ul = !1), (ii !== null || si !== null) && (tg(), Jm());
  }
}
function ds(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Da(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var gu = !1;
if (mn)
  try {
    var ki = {};
    Object.defineProperty(ki, "passive", {
      get: function () {
        gu = !0;
      },
    }),
      window.addEventListener("test", ki, ki),
      window.removeEventListener("test", ki, ki);
  } catch {
    gu = !1;
  }
function ew(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Xi = !1,
  Ho = null,
  Go = !1,
  vu = null,
  tw = {
    onError: function (e) {
      (Xi = !0), (Ho = e);
    },
  };
function nw(e, t, n, r, i, s, o, l, a) {
  (Xi = !1), (Ho = null), ew.apply(tw, arguments);
}
function rw(e, t, n, r, i, s, o, l, a) {
  if ((nw.apply(this, arguments), Xi)) {
    if (Xi) {
      var u = Ho;
      (Xi = !1), (Ho = null);
    } else throw Error(O(198));
    Go || ((Go = !0), (vu = u));
  }
}
function Ar(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Lf(e) {
  if (Ar(e) !== e) throw Error(O(188));
}
function iw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ar(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Lf(i), e;
        if (s === r) return Lf(i), t;
        s = s.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function ig(e) {
  return (e = iw(e)), e !== null ? sg(e) : null;
}
function sg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var og = vt.unstable_scheduleCallback,
  kf = vt.unstable_cancelCallback,
  sw = vt.unstable_shouldYield,
  ow = vt.unstable_requestPaint,
  ke = vt.unstable_now,
  aw = vt.unstable_getCurrentPriorityLevel,
  Lc = vt.unstable_ImmediatePriority,
  ag = vt.unstable_UserBlockingPriority,
  Wo = vt.unstable_NormalPriority,
  lw = vt.unstable_LowPriority,
  lg = vt.unstable_IdlePriority,
  ka = null,
  Wt = null;
function uw(e) {
  if (Wt && typeof Wt.onCommitFiberRoot == "function")
    try {
      Wt.onCommitFiberRoot(ka, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : fw,
  cw = Math.log,
  dw = Math.LN2;
function fw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cw(e) / dw) | 0)) | 0;
}
var ro = 64,
  io = 4194304;
function Hi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function qo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Hi(l)) : ((s &= o), s !== 0 && (r = Hi(s)));
  } else (o = n & ~i), o !== 0 ? (r = Hi(o)) : s !== 0 && (r = Hi(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Vt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function pw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function hw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Vt(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = pw(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function yu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ug() {
  var e = ro;
  return (ro <<= 1), !(ro & 4194240) && (ro = 64), e;
}
function cl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Is(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = n);
}
function mw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Vt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function kc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Vt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ce = 0;
function cg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dg,
  bc,
  fg,
  pg,
  hg,
  xu = !1,
  so = [],
  On = null,
  _n = null,
  Vn = null,
  fs = new Map(),
  ps = new Map(),
  kn = [],
  gw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      On = null;
      break;
    case "dragenter":
    case "dragleave":
      _n = null;
      break;
    case "mouseover":
    case "mouseout":
      Vn = null;
      break;
    case "pointerover":
    case "pointerout":
      fs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ps.delete(t.pointerId);
  }
}
function bi(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = _s(t)), t !== null && bc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function vw(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (On = bi(On, e, t, n, r, i)), !0;
    case "dragenter":
      return (_n = bi(_n, e, t, n, r, i)), !0;
    case "mouseover":
      return (Vn = bi(Vn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return fs.set(s, bi(fs.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), ps.set(s, bi(ps.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function mg(e) {
  var t = pr(e.target);
  if (t !== null) {
    var n = Ar(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rg(n)), t !== null)) {
          (e.blockedOn = t),
            hg(e.priority, function () {
              fg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = wu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (hu = r), n.target.dispatchEvent(r), (hu = null);
    } else return (t = _s(n)), t !== null && bc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Rf(e, t, n) {
  Mo(e) && n.delete(t);
}
function yw() {
  (xu = !1),
    On !== null && Mo(On) && (On = null),
    _n !== null && Mo(_n) && (_n = null),
    Vn !== null && Mo(Vn) && (Vn = null),
    fs.forEach(Rf),
    ps.forEach(Rf);
}
function Ri(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    xu ||
      ((xu = !0),
      vt.unstable_scheduleCallback(vt.unstable_NormalPriority, yw)));
}
function hs(e) {
  function t(i) {
    return Ri(i, e);
  }
  if (0 < so.length) {
    Ri(so[0], e);
    for (var n = 1; n < so.length; n++) {
      var r = so[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    On !== null && Ri(On, e),
      _n !== null && Ri(_n, e),
      Vn !== null && Ri(Vn, e),
      fs.forEach(t),
      ps.forEach(t),
      n = 0;
    n < kn.length;
    n++
  )
    (r = kn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); )
    mg(n), n.blockedOn === null && kn.shift();
}
var oi = wn.ReactCurrentBatchConfig,
  Ko = !0;
function xw(e, t, n, r) {
  var i = ce,
    s = oi.transition;
  oi.transition = null;
  try {
    (ce = 1), Rc(e, t, n, r);
  } finally {
    (ce = i), (oi.transition = s);
  }
}
function ww(e, t, n, r) {
  var i = ce,
    s = oi.transition;
  oi.transition = null;
  try {
    (ce = 4), Rc(e, t, n, r);
  } finally {
    (ce = i), (oi.transition = s);
  }
}
function Rc(e, t, n, r) {
  if (Ko) {
    var i = wu(e, t, n, r);
    if (i === null) wl(e, t, r, Yo, n), bf(e, r);
    else if (vw(i, e, t, n, r)) r.stopPropagation();
    else if ((bf(e, r), t & 4 && -1 < gw.indexOf(e))) {
      for (; i !== null; ) {
        var s = _s(i);
        if (
          (s !== null && dg(s),
          (s = wu(e, t, n, r)),
          s === null && wl(e, t, r, Yo, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else wl(e, t, r, null, n);
  }
}
var Yo = null;
function wu(e, t, n, r) {
  if (((Yo = null), (e = Nc(r)), (e = pr(e)), e !== null))
    if (((t = Ar(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yo = e), null;
}
function gg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (aw()) {
        case Lc:
          return 1;
        case ag:
          return 4;
        case Wo:
        case lw:
          return 16;
        case lg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rn = null,
  Ac = null,
  No = null;
function vg() {
  if (No) return No;
  var e,
    t = Ac,
    n = t.length,
    r,
    i = "value" in Rn ? Rn.value : Rn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (No = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Lo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function oo() {
  return !0;
}
function Af() {
  return !1;
}
function wt(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? oo
        : Af),
      (this.isPropagationStopped = Af),
      this
    );
  }
  return (
    Ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = oo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = oo));
      },
      persist: function () {},
      isPersistent: oo,
    }),
    t
  );
}
var Ti = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Dc = wt(Ti),
  Os = Ce({}, Ti, { view: 0, detail: 0 }),
  Sw = wt(Os),
  dl,
  fl,
  Ai,
  ba = Ce({}, Os, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ic,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ai &&
            (Ai && e.type === "mousemove"
              ? ((dl = e.screenX - Ai.screenX), (fl = e.screenY - Ai.screenY))
              : (fl = dl = 0),
            (Ai = e)),
          dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fl;
    },
  }),
  Df = wt(ba),
  Ew = Ce({}, ba, { dataTransfer: 0 }),
  Tw = wt(Ew),
  Pw = Ce({}, Os, { relatedTarget: 0 }),
  pl = wt(Pw),
  Cw = Ce({}, Ti, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jw = wt(Cw),
  Mw = Ce({}, Ti, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Nw = wt(Mw),
  Lw = Ce({}, Ti, { data: 0 }),
  If = wt(Lw),
  kw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  bw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Rw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Aw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rw[e]) ? !!t[e] : !1;
}
function Ic() {
  return Aw;
}
var Dw = Ce({}, Os, {
    key: function (e) {
      if (e.key) {
        var t = kw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Lo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? bw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ic,
    charCode: function (e) {
      return e.type === "keypress" ? Lo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Lo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Iw = wt(Dw),
  Ow = Ce({}, ba, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Of = wt(Ow),
  _w = Ce({}, Os, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ic,
  }),
  Vw = wt(_w),
  Fw = Ce({}, Ti, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zw = wt(Fw),
  Bw = Ce({}, ba, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Uw = wt(Bw),
  $w = [9, 13, 27, 32],
  Oc = mn && "CompositionEvent" in window,
  Qi = null;
mn && "documentMode" in document && (Qi = document.documentMode);
var Hw = mn && "TextEvent" in window && !Qi,
  yg = mn && (!Oc || (Qi && 8 < Qi && 11 >= Qi)),
  _f = " ",
  Vf = !1;
function xg(e, t) {
  switch (e) {
    case "keyup":
      return $w.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function wg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Br = !1;
function Gw(e, t) {
  switch (e) {
    case "compositionend":
      return wg(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vf = !0), _f);
    case "textInput":
      return (e = t.data), e === _f && Vf ? null : e;
    default:
      return null;
  }
}
function Ww(e, t) {
  if (Br)
    return e === "compositionend" || (!Oc && xg(e, t))
      ? ((e = vg()), (No = Ac = Rn = null), (Br = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return yg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ff(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qw[e.type] : t === "textarea";
}
function Sg(e, t, n, r) {
  Zm(r),
    (t = Xo(t, "onChange")),
    0 < t.length &&
      ((n = new Dc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Zi = null,
  ms = null;
function Kw(e) {
  Rg(e, 0);
}
function Ra(e) {
  var t = Hr(e);
  if (Gm(t)) return e;
}
function Yw(e, t) {
  if (e === "change") return t;
}
var Eg = !1;
if (mn) {
  var hl;
  if (mn) {
    var ml = "oninput" in document;
    if (!ml) {
      var zf = document.createElement("div");
      zf.setAttribute("oninput", "return;"),
        (ml = typeof zf.oninput == "function");
    }
    hl = ml;
  } else hl = !1;
  Eg = hl && (!document.documentMode || 9 < document.documentMode);
}
function Bf() {
  Zi && (Zi.detachEvent("onpropertychange", Tg), (ms = Zi = null));
}
function Tg(e) {
  if (e.propertyName === "value" && Ra(ms)) {
    var t = [];
    Sg(t, ms, e, Nc(e)), ng(Kw, t);
  }
}
function Xw(e, t, n) {
  e === "focusin"
    ? (Bf(), (Zi = t), (ms = n), Zi.attachEvent("onpropertychange", Tg))
    : e === "focusout" && Bf();
}
function Qw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ra(ms);
}
function Zw(e, t) {
  if (e === "click") return Ra(t);
}
function Jw(e, t) {
  if (e === "input" || e === "change") return Ra(t);
}
function eS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zt = typeof Object.is == "function" ? Object.is : eS;
function gs(e, t) {
  if (zt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!nu.call(t, i) || !zt(e[i], t[i])) return !1;
  }
  return !0;
}
function Uf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $f(e, t) {
  var n = Uf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Uf(n);
  }
}
function Pg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Pg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Cg() {
  for (var e = window, t = $o(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $o(e.document);
  }
  return t;
}
function _c(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function tS(e) {
  var t = Cg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _c(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = $f(n, s));
        var o = $f(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var nS = mn && "documentMode" in document && 11 >= document.documentMode,
  Ur = null,
  Su = null,
  Ji = null,
  Eu = !1;
function Hf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Eu ||
    Ur == null ||
    Ur !== $o(r) ||
    ((r = Ur),
    "selectionStart" in r && _c(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ji && gs(Ji, r)) ||
      ((Ji = r),
      (r = Xo(Su, "onSelect")),
      0 < r.length &&
        ((t = new Dc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ur))));
}
function ao(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $r = {
    animationend: ao("Animation", "AnimationEnd"),
    animationiteration: ao("Animation", "AnimationIteration"),
    animationstart: ao("Animation", "AnimationStart"),
    transitionend: ao("Transition", "TransitionEnd"),
  },
  gl = {},
  jg = {};
mn &&
  ((jg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $r.animationend.animation,
    delete $r.animationiteration.animation,
    delete $r.animationstart.animation),
  "TransitionEvent" in window || delete $r.transitionend.transition);
function Aa(e) {
  if (gl[e]) return gl[e];
  if (!$r[e]) return e;
  var t = $r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jg) return (gl[e] = t[n]);
  return e;
}
var Mg = Aa("animationend"),
  Ng = Aa("animationiteration"),
  Lg = Aa("animationstart"),
  kg = Aa("transitionend"),
  bg = new Map(),
  Gf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Kn(e, t) {
  bg.set(e, t), Rr(t, [e]);
}
for (var vl = 0; vl < Gf.length; vl++) {
  var yl = Gf[vl],
    rS = yl.toLowerCase(),
    iS = yl[0].toUpperCase() + yl.slice(1);
  Kn(rS, "on" + iS);
}
Kn(Mg, "onAnimationEnd");
Kn(Ng, "onAnimationIteration");
Kn(Lg, "onAnimationStart");
Kn("dblclick", "onDoubleClick");
Kn("focusin", "onFocus");
Kn("focusout", "onBlur");
Kn(kg, "onTransitionEnd");
ci("onMouseEnter", ["mouseout", "mouseover"]);
ci("onMouseLeave", ["mouseout", "mouseover"]);
ci("onPointerEnter", ["pointerout", "pointerover"]);
ci("onPointerLeave", ["pointerout", "pointerover"]);
Rr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Rr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Rr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Rr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Gi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));
function Wf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), rw(r, t, void 0, e), (e.currentTarget = null);
}
function Rg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          Wf(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          Wf(i, l, u), (s = a);
        }
    }
  }
  if (Go) throw ((e = vu), (Go = !1), (vu = null), e);
}
function ge(e, t) {
  var n = t[Mu];
  n === void 0 && (n = t[Mu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ag(t, e, 2, !1), n.add(r));
}
function xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ag(n, e, r, t);
}
var lo = "_reactListening" + Math.random().toString(36).slice(2);
function vs(e) {
  if (!e[lo]) {
    (e[lo] = !0),
      zm.forEach(function (n) {
        n !== "selectionchange" && (sS.has(n) || xl(n, !1, e), xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[lo] || ((t[lo] = !0), xl("selectionchange", !1, t));
  }
}
function Ag(e, t, n, r) {
  switch (gg(t)) {
    case 1:
      var i = xw;
      break;
    case 4:
      i = ww;
      break;
    default:
      i = Rc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !gu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function wl(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = pr(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  ng(function () {
    var u = s,
      c = Nc(n),
      d = [];
    e: {
      var p = bg.get(e);
      if (p !== void 0) {
        var h = Dc,
          y = e;
        switch (e) {
          case "keypress":
            if (Lo(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = Iw;
            break;
          case "focusin":
            (y = "focus"), (h = pl);
            break;
          case "focusout":
            (y = "blur"), (h = pl);
            break;
          case "beforeblur":
          case "afterblur":
            h = pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Df;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Tw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Vw;
            break;
          case Mg:
          case Ng:
          case Lg:
            h = jw;
            break;
          case kg:
            h = zw;
            break;
          case "scroll":
            h = Sw;
            break;
          case "wheel":
            h = Uw;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Nw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Of;
        }
        var x = (t & 4) !== 0,
          S = !x && e === "scroll",
          m = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var g = u, v; g !== null; ) {
          v = g;
          var E = v.stateNode;
          if (
            (v.tag === 5 &&
              E !== null &&
              ((v = E),
              m !== null && ((E = ds(g, m)), E != null && x.push(ys(g, E, v)))),
            S)
          )
            break;
          g = g.return;
        }
        0 < x.length &&
          ((p = new h(p, y, null, n, c)), d.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          p &&
            n !== hu &&
            (y = n.relatedTarget || n.fromElement) &&
            (pr(y) || y[gn]))
        )
          break e;
        if (
          (h || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          h
            ? ((y = n.relatedTarget || n.toElement),
              (h = u),
              (y = y ? pr(y) : null),
              y !== null &&
                ((S = Ar(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = u)),
          h !== y)
        ) {
          if (
            ((x = Df),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Of),
              (E = "onPointerLeave"),
              (m = "onPointerEnter"),
              (g = "pointer")),
            (S = h == null ? p : Hr(h)),
            (v = y == null ? p : Hr(y)),
            (p = new x(E, g + "leave", h, n, c)),
            (p.target = S),
            (p.relatedTarget = v),
            (E = null),
            pr(c) === u &&
              ((x = new x(m, g + "enter", y, n, c)),
              (x.target = v),
              (x.relatedTarget = S),
              (E = x)),
            (S = E),
            h && y)
          )
            t: {
              for (x = h, m = y, g = 0, v = x; v; v = _r(v)) g++;
              for (v = 0, E = m; E; E = _r(E)) v++;
              for (; 0 < g - v; ) (x = _r(x)), g--;
              for (; 0 < v - g; ) (m = _r(m)), v--;
              for (; g--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = _r(x)), (m = _r(m));
              }
              x = null;
            }
          else x = null;
          h !== null && qf(d, p, h, x, !1),
            y !== null && S !== null && qf(d, S, y, x, !0);
        }
      }
      e: {
        if (
          ((p = u ? Hr(u) : window),
          (h = p.nodeName && p.nodeName.toLowerCase()),
          h === "select" || (h === "input" && p.type === "file"))
        )
          var C = Yw;
        else if (Ff(p))
          if (Eg) C = Jw;
          else {
            C = Qw;
            var N = Xw;
          }
        else
          (h = p.nodeName) &&
            h.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Zw);
        if (C && (C = C(e, u))) {
          Sg(d, C, n, c);
          break e;
        }
        N && N(e, p, u),
          e === "focusout" &&
            (N = p._wrapperState) &&
            N.controlled &&
            p.type === "number" &&
            uu(p, "number", p.value);
      }
      switch (((N = u ? Hr(u) : window), e)) {
        case "focusin":
          (Ff(N) || N.contentEditable === "true") &&
            ((Ur = N), (Su = u), (Ji = null));
          break;
        case "focusout":
          Ji = Su = Ur = null;
          break;
        case "mousedown":
          Eu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Eu = !1), Hf(d, n, c);
          break;
        case "selectionchange":
          if (nS) break;
        case "keydown":
        case "keyup":
          Hf(d, n, c);
      }
      var A;
      if (Oc)
        e: {
          switch (e) {
            case "compositionstart":
              var w = "onCompositionStart";
              break e;
            case "compositionend":
              w = "onCompositionEnd";
              break e;
            case "compositionupdate":
              w = "onCompositionUpdate";
              break e;
          }
          w = void 0;
        }
      else
        Br
          ? xg(e, n) && (w = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (w = "onCompositionStart");
      w &&
        (yg &&
          n.locale !== "ko" &&
          (Br || w !== "onCompositionStart"
            ? w === "onCompositionEnd" && Br && (A = vg())
            : ((Rn = c),
              (Ac = "value" in Rn ? Rn.value : Rn.textContent),
              (Br = !0))),
        (N = Xo(u, w)),
        0 < N.length &&
          ((w = new If(w, e, null, n, c)),
          d.push({ event: w, listeners: N }),
          A ? (w.data = A) : ((A = wg(n)), A !== null && (w.data = A)))),
        (A = Hw ? Gw(e, n) : Ww(e, n)) &&
          ((u = Xo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new If("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = A)));
    }
    Rg(d, t);
  });
}
function ys(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ds(e, n)),
      s != null && r.unshift(ys(e, s, i)),
      (s = ds(e, t)),
      s != null && r.push(ys(e, s, i))),
      (e = e.return);
  }
  return r;
}
function _r(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qf(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = ds(n, s)), a != null && o.unshift(ys(n, a, l)))
        : i || ((a = ds(n, s)), a != null && o.push(ys(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var oS = /\r\n?/g,
  aS = /\u0000|\uFFFD/g;
function Kf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      oS,
      `
`
    )
    .replace(aS, "");
}
function uo(e, t, n) {
  if (((t = Kf(t)), Kf(e) !== t && n)) throw Error(O(425));
}
function Qo() {}
var Tu = null,
  Pu = null;
function Cu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ju = typeof setTimeout == "function" ? setTimeout : void 0,
  lS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yf = typeof Promise == "function" ? Promise : void 0,
  uS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yf < "u"
      ? function (e) {
          return Yf.resolve(null).then(e).catch(cS);
        }
      : ju;
function cS(e) {
  setTimeout(function () {
    throw e;
  });
}
function Sl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), hs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  hs(t);
}
function Fn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pi = Math.random().toString(36).slice(2),
  Gt = "__reactFiber$" + Pi,
  xs = "__reactProps$" + Pi,
  gn = "__reactContainer$" + Pi,
  Mu = "__reactEvents$" + Pi,
  dS = "__reactListeners$" + Pi,
  fS = "__reactHandles$" + Pi;
function pr(e) {
  var t = e[Gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gn] || n[Gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xf(e); e !== null; ) {
          if ((n = e[Gt])) return n;
          e = Xf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _s(e) {
  return (
    (e = e[Gt] || e[gn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Hr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Da(e) {
  return e[xs] || null;
}
var Nu = [],
  Gr = -1;
function Yn(e) {
  return { current: e };
}
function ve(e) {
  0 > Gr || ((e.current = Nu[Gr]), (Nu[Gr] = null), Gr--);
}
function he(e, t) {
  Gr++, (Nu[Gr] = e.current), (e.current = t);
}
var Gn = {},
  Je = Yn(Gn),
  lt = Yn(!1),
  Er = Gn;
function di(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ut(e) {
  return (e = e.childContextTypes), e != null;
}
function Zo() {
  ve(lt), ve(Je);
}
function Qf(e, t, n) {
  if (Je.current !== Gn) throw Error(O(168));
  he(Je, t), he(lt, n);
}
function Dg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, Xx(e) || "Unknown", i));
  return Ce({}, n, r);
}
function Jo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gn),
    (Er = Je.current),
    he(Je, e),
    he(lt, lt.current),
    !0
  );
}
function Zf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = Dg(e, t, Er)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ve(lt),
      ve(Je),
      he(Je, e))
    : ve(lt),
    he(lt, n);
}
var sn = null,
  Ia = !1,
  El = !1;
function Ig(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function pS(e) {
  (Ia = !0), Ig(e);
}
function Xn() {
  if (!El && sn !== null) {
    El = !0;
    var e = 0,
      t = ce;
    try {
      var n = sn;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (sn = null), (Ia = !1);
    } catch (i) {
      throw (sn !== null && (sn = sn.slice(e + 1)), og(Lc, Xn), i);
    } finally {
      (ce = t), (El = !1);
    }
  }
  return null;
}
var Wr = [],
  qr = 0,
  ea = null,
  ta = 0,
  Ct = [],
  jt = 0,
  Tr = null,
  on = 1,
  an = "";
function ar(e, t) {
  (Wr[qr++] = ta), (Wr[qr++] = ea), (ea = e), (ta = t);
}
function Og(e, t, n) {
  (Ct[jt++] = on), (Ct[jt++] = an), (Ct[jt++] = Tr), (Tr = e);
  var r = on;
  e = an;
  var i = 32 - Vt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Vt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (on = (1 << (32 - Vt(t) + i)) | (n << i) | r),
      (an = s + e);
  } else (on = (1 << s) | (n << i) | r), (an = e);
}
function Vc(e) {
  e.return !== null && (ar(e, 1), Og(e, 1, 0));
}
function Fc(e) {
  for (; e === ea; )
    (ea = Wr[--qr]), (Wr[qr] = null), (ta = Wr[--qr]), (Wr[qr] = null);
  for (; e === Tr; )
    (Tr = Ct[--jt]),
      (Ct[jt] = null),
      (an = Ct[--jt]),
      (Ct[jt] = null),
      (on = Ct[--jt]),
      (Ct[jt] = null);
}
var gt = null,
  mt = null,
  ye = !1,
  _t = null;
function _g(e, t) {
  var n = Mt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Jf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (gt = e), (mt = Fn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (gt = e), (mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tr !== null ? { id: on, overflow: an } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (gt = e),
            (mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Lu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ku(e) {
  if (ye) {
    var t = mt;
    if (t) {
      var n = t;
      if (!Jf(e, t)) {
        if (Lu(e)) throw Error(O(418));
        t = Fn(n.nextSibling);
        var r = gt;
        t && Jf(e, t)
          ? _g(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ye = !1), (gt = e));
      }
    } else {
      if (Lu(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (ye = !1), (gt = e);
    }
  }
}
function ep(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gt = e;
}
function co(e) {
  if (e !== gt) return !1;
  if (!ye) return ep(e), (ye = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Cu(e.type, e.memoizedProps))),
    t && (t = mt))
  ) {
    if (Lu(e)) throw (Vg(), Error(O(418)));
    for (; t; ) _g(e, t), (t = Fn(t.nextSibling));
  }
  if ((ep(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              mt = Fn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      mt = null;
    }
  } else mt = gt ? Fn(e.stateNode.nextSibling) : null;
  return !0;
}
function Vg() {
  for (var e = mt; e; ) e = Fn(e.nextSibling);
}
function fi() {
  (mt = gt = null), (ye = !1);
}
function zc(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
var hS = wn.ReactCurrentBatchConfig;
function Di(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function fo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function tp(e) {
  var t = e._init;
  return t(e._payload);
}
function Fg(e) {
  function t(m, g) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [g]), (m.flags |= 16)) : v.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) t(m, g), (g = g.sibling);
    return null;
  }
  function r(m, g) {
    for (m = new Map(); g !== null; )
      g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling);
    return m;
  }
  function i(m, g) {
    return (m = $n(m, g)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, g, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < g ? ((m.flags |= 2), g) : v)
            : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, g, v, E) {
    return g === null || g.tag !== 6
      ? ((g = Ll(v, m.mode, E)), (g.return = m), g)
      : ((g = i(g, v)), (g.return = m), g);
  }
  function a(m, g, v, E) {
    var C = v.type;
    return C === zr
      ? c(m, g, v.props.children, E, v.key)
      : g !== null &&
        (g.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Nn &&
            tp(C) === g.type))
      ? ((E = i(g, v.props)), (E.ref = Di(m, g, v)), (E.return = m), E)
      : ((E = Oo(v.type, v.key, v.props, null, m.mode, E)),
        (E.ref = Di(m, g, v)),
        (E.return = m),
        E);
  }
  function u(m, g, v, E) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== v.containerInfo ||
      g.stateNode.implementation !== v.implementation
      ? ((g = kl(v, m.mode, E)), (g.return = m), g)
      : ((g = i(g, v.children || [])), (g.return = m), g);
  }
  function c(m, g, v, E, C) {
    return g === null || g.tag !== 7
      ? ((g = xr(v, m.mode, E, C)), (g.return = m), g)
      : ((g = i(g, v)), (g.return = m), g);
  }
  function d(m, g, v) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = Ll("" + g, m.mode, v)), (g.return = m), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case eo:
          return (
            (v = Oo(g.type, g.key, g.props, null, m.mode, v)),
            (v.ref = Di(m, null, g)),
            (v.return = m),
            v
          );
        case Fr:
          return (g = kl(g, m.mode, v)), (g.return = m), g;
        case Nn:
          var E = g._init;
          return d(m, E(g._payload), v);
      }
      if ($i(g) || Li(g))
        return (g = xr(g, m.mode, v, null)), (g.return = m), g;
      fo(m, g);
    }
    return null;
  }
  function p(m, g, v, E) {
    var C = g !== null ? g.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : l(m, g, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case eo:
          return v.key === C ? a(m, g, v, E) : null;
        case Fr:
          return v.key === C ? u(m, g, v, E) : null;
        case Nn:
          return (C = v._init), p(m, g, C(v._payload), E);
      }
      if ($i(v) || Li(v)) return C !== null ? null : c(m, g, v, E, null);
      fo(m, v);
    }
    return null;
  }
  function h(m, g, v, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (m = m.get(v) || null), l(g, m, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case eo:
          return (m = m.get(E.key === null ? v : E.key) || null), a(g, m, E, C);
        case Fr:
          return (m = m.get(E.key === null ? v : E.key) || null), u(g, m, E, C);
        case Nn:
          var N = E._init;
          return h(m, g, v, N(E._payload), C);
      }
      if ($i(E) || Li(E)) return (m = m.get(v) || null), c(g, m, E, C, null);
      fo(g, E);
    }
    return null;
  }
  function y(m, g, v, E) {
    for (
      var C = null, N = null, A = g, w = (g = 0), k = null;
      A !== null && w < v.length;
      w++
    ) {
      A.index > w ? ((k = A), (A = null)) : (k = A.sibling);
      var M = p(m, A, v[w], E);
      if (M === null) {
        A === null && (A = k);
        break;
      }
      e && A && M.alternate === null && t(m, A),
        (g = s(M, g, w)),
        N === null ? (C = M) : (N.sibling = M),
        (N = M),
        (A = k);
    }
    if (w === v.length) return n(m, A), ye && ar(m, w), C;
    if (A === null) {
      for (; w < v.length; w++)
        (A = d(m, v[w], E)),
          A !== null &&
            ((g = s(A, g, w)), N === null ? (C = A) : (N.sibling = A), (N = A));
      return ye && ar(m, w), C;
    }
    for (A = r(m, A); w < v.length; w++)
      (k = h(A, m, w, v[w], E)),
        k !== null &&
          (e && k.alternate !== null && A.delete(k.key === null ? w : k.key),
          (g = s(k, g, w)),
          N === null ? (C = k) : (N.sibling = k),
          (N = k));
    return (
      e &&
        A.forEach(function (R) {
          return t(m, R);
        }),
      ye && ar(m, w),
      C
    );
  }
  function x(m, g, v, E) {
    var C = Li(v);
    if (typeof C != "function") throw Error(O(150));
    if (((v = C.call(v)), v == null)) throw Error(O(151));
    for (
      var N = (C = null), A = g, w = (g = 0), k = null, M = v.next();
      A !== null && !M.done;
      w++, M = v.next()
    ) {
      A.index > w ? ((k = A), (A = null)) : (k = A.sibling);
      var R = p(m, A, M.value, E);
      if (R === null) {
        A === null && (A = k);
        break;
      }
      e && A && R.alternate === null && t(m, A),
        (g = s(R, g, w)),
        N === null ? (C = R) : (N.sibling = R),
        (N = R),
        (A = k);
    }
    if (M.done) return n(m, A), ye && ar(m, w), C;
    if (A === null) {
      for (; !M.done; w++, M = v.next())
        (M = d(m, M.value, E)),
          M !== null &&
            ((g = s(M, g, w)), N === null ? (C = M) : (N.sibling = M), (N = M));
      return ye && ar(m, w), C;
    }
    for (A = r(m, A); !M.done; w++, M = v.next())
      (M = h(A, m, w, M.value, E)),
        M !== null &&
          (e && M.alternate !== null && A.delete(M.key === null ? w : M.key),
          (g = s(M, g, w)),
          N === null ? (C = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        A.forEach(function (_) {
          return t(m, _);
        }),
      ye && ar(m, w),
      C
    );
  }
  function S(m, g, v, E) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === zr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case eo:
          e: {
            for (var C = v.key, N = g; N !== null; ) {
              if (N.key === C) {
                if (((C = v.type), C === zr)) {
                  if (N.tag === 7) {
                    n(m, N.sibling),
                      (g = i(N, v.props.children)),
                      (g.return = m),
                      (m = g);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Nn &&
                    tp(C) === N.type)
                ) {
                  n(m, N.sibling),
                    (g = i(N, v.props)),
                    (g.ref = Di(m, N, v)),
                    (g.return = m),
                    (m = g);
                  break e;
                }
                n(m, N);
                break;
              } else t(m, N);
              N = N.sibling;
            }
            v.type === zr
              ? ((g = xr(v.props.children, m.mode, E, v.key)),
                (g.return = m),
                (m = g))
              : ((E = Oo(v.type, v.key, v.props, null, m.mode, E)),
                (E.ref = Di(m, g, v)),
                (E.return = m),
                (m = E));
          }
          return o(m);
        case Fr:
          e: {
            for (N = v.key; g !== null; ) {
              if (g.key === N)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === v.containerInfo &&
                  g.stateNode.implementation === v.implementation
                ) {
                  n(m, g.sibling),
                    (g = i(g, v.children || [])),
                    (g.return = m),
                    (m = g);
                  break e;
                } else {
                  n(m, g);
                  break;
                }
              else t(m, g);
              g = g.sibling;
            }
            (g = kl(v, m.mode, E)), (g.return = m), (m = g);
          }
          return o(m);
        case Nn:
          return (N = v._init), S(m, g, N(v._payload), E);
      }
      if ($i(v)) return y(m, g, v, E);
      if (Li(v)) return x(m, g, v, E);
      fo(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = i(g, v)), (g.return = m), (m = g))
          : (n(m, g), (g = Ll(v, m.mode, E)), (g.return = m), (m = g)),
        o(m))
      : n(m, g);
  }
  return S;
}
var pi = Fg(!0),
  zg = Fg(!1),
  na = Yn(null),
  ra = null,
  Kr = null,
  Bc = null;
function Uc() {
  Bc = Kr = ra = null;
}
function $c(e) {
  var t = na.current;
  ve(na), (e._currentValue = t);
}
function bu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ai(e, t) {
  (ra = e),
    (Bc = Kr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (at = !0), (e.firstContext = null));
}
function kt(e) {
  var t = e._currentValue;
  if (Bc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
      if (ra === null) throw Error(O(308));
      (Kr = e), (ra.dependencies = { lanes: 0, firstContext: e });
    } else Kr = Kr.next = e;
  return t;
}
var hr = null;
function Hc(e) {
  hr === null ? (hr = [e]) : hr.push(e);
}
function Bg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Hc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    vn(e, r)
  );
}
function vn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ln = !1;
function Gc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ug(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function cn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function zn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), se & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      vn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Hc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    vn(e, n)
  );
}
function ko(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), kc(e, n);
  }
}
function np(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ia(e, t, n, r) {
  var i = e.updateQueue;
  Ln = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var p = l.lane,
        h = l.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            x = l;
          switch (((p = t), (h = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                d = y.call(h, d, p);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (p = typeof y == "function" ? y.call(h, d, p) : y),
                p == null)
              )
                break e;
              d = Ce({}, d, p);
              break e;
            case 2:
              Ln = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [l]) : p.push(l));
      } else
        (h = {
          eventTime: h,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (a = d)) : (c = c.next = h),
          (o |= p);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Cr |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function rp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var Vs = {},
  qt = Yn(Vs),
  ws = Yn(Vs),
  Ss = Yn(Vs);
function mr(e) {
  if (e === Vs) throw Error(O(174));
  return e;
}
function Wc(e, t) {
  switch ((he(Ss, t), he(ws, e), he(qt, Vs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : du(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = du(t, e));
  }
  ve(qt), he(qt, t);
}
function hi() {
  ve(qt), ve(ws), ve(Ss);
}
function $g(e) {
  mr(Ss.current);
  var t = mr(qt.current),
    n = du(t, e.type);
  t !== n && (he(ws, e), he(qt, n));
}
function qc(e) {
  ws.current === e && (ve(qt), ve(ws));
}
var Te = Yn(0);
function sa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Tl = [];
function Kc() {
  for (var e = 0; e < Tl.length; e++)
    Tl[e]._workInProgressVersionPrimary = null;
  Tl.length = 0;
}
var bo = wn.ReactCurrentDispatcher,
  Pl = wn.ReactCurrentBatchConfig,
  Pr = 0,
  Pe = null,
  De = null,
  Ve = null,
  oa = !1,
  es = !1,
  Es = 0,
  mS = 0;
function Ke() {
  throw Error(O(321));
}
function Yc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zt(e[n], t[n])) return !1;
  return !0;
}
function Xc(e, t, n, r, i, s) {
  if (
    ((Pr = s),
    (Pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bo.current = e === null || e.memoizedState === null ? xS : wS),
    (e = n(r, i)),
    es)
  ) {
    s = 0;
    do {
      if (((es = !1), (Es = 0), 25 <= s)) throw Error(O(301));
      (s += 1),
        (Ve = De = null),
        (t.updateQueue = null),
        (bo.current = SS),
        (e = n(r, i));
    } while (es);
  }
  if (
    ((bo.current = aa),
    (t = De !== null && De.next !== null),
    (Pr = 0),
    (Ve = De = Pe = null),
    (oa = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Qc() {
  var e = Es !== 0;
  return (Es = 0), e;
}
function $t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ve === null ? (Pe.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve;
}
function bt() {
  if (De === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = Ve === null ? Pe.memoizedState : Ve.next;
  if (t !== null) (Ve = t), (De = e);
  else {
    if (e === null) throw Error(O(310));
    (De = e),
      (e = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null,
      }),
      Ve === null ? (Pe.memoizedState = Ve = e) : (Ve = Ve.next = e);
  }
  return Ve;
}
function Ts(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cl(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = De,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((Pr & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (o = r)) : (a = a.next = d),
          (Pe.lanes |= c),
          (Cr |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      zt(r, t.memoizedState) || (at = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Pe.lanes |= s), (Cr |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function jl(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    zt(s, t.memoizedState) || (at = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Hg() {}
function Gg(e, t) {
  var n = Pe,
    r = bt(),
    i = t(),
    s = !zt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (at = !0)),
    (r = r.queue),
    Zc(Kg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ve !== null && Ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ps(9, qg.bind(null, n, r, i, t), void 0, null),
      ze === null)
    )
      throw Error(O(349));
    Pr & 30 || Wg(n, t, i);
  }
  return i;
}
function Wg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yg(t) && Xg(e);
}
function Kg(e, t, n) {
  return n(function () {
    Yg(t) && Xg(e);
  });
}
function Yg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zt(e, n);
  } catch {
    return !0;
  }
}
function Xg(e) {
  var t = vn(e, 1);
  t !== null && Ft(t, e, 1, -1);
}
function ip(e) {
  var t = $t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ts,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yS.bind(null, Pe, e)),
    [t.memoizedState, e]
  );
}
function Ps(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Qg() {
  return bt().memoizedState;
}
function Ro(e, t, n, r) {
  var i = $t();
  (Pe.flags |= e),
    (i.memoizedState = Ps(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oa(e, t, n, r) {
  var i = bt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (De !== null) {
    var o = De.memoizedState;
    if (((s = o.destroy), r !== null && Yc(r, o.deps))) {
      i.memoizedState = Ps(t, n, s, r);
      return;
    }
  }
  (Pe.flags |= e), (i.memoizedState = Ps(1 | t, n, s, r));
}
function sp(e, t) {
  return Ro(8390656, 8, e, t);
}
function Zc(e, t) {
  return Oa(2048, 8, e, t);
}
function Zg(e, t) {
  return Oa(4, 2, e, t);
}
function Jg(e, t) {
  return Oa(4, 4, e, t);
}
function ev(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function tv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oa(4, 4, ev.bind(null, t, e), n)
  );
}
function Jc() {}
function nv(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function rv(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function iv(e, t, n) {
  return Pr & 21
    ? (zt(n, t) || ((n = ug()), (Pe.lanes |= n), (Cr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = n));
}
function gS(e, t) {
  var n = ce;
  (ce = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Pl.transition;
  Pl.transition = {};
  try {
    e(!1), t();
  } finally {
    (ce = n), (Pl.transition = r);
  }
}
function sv() {
  return bt().memoizedState;
}
function vS(e, t, n) {
  var r = Un(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ov(e))
  )
    av(t, n);
  else if (((n = Bg(e, t, n, r)), n !== null)) {
    var i = rt();
    Ft(n, e, r, i), lv(n, t, r);
  }
}
function yS(e, t, n) {
  var r = Un(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ov(e)) av(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), zt(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Hc(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bg(e, t, i, r)),
      n !== null && ((i = rt()), Ft(n, e, r, i), lv(n, t, r));
  }
}
function ov(e) {
  var t = e.alternate;
  return e === Pe || (t !== null && t === Pe);
}
function av(e, t) {
  es = oa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function lv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), kc(e, n);
  }
}
var aa = {
    readContext: kt,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1,
  },
  xS = {
    readContext: kt,
    useCallback: function (e, t) {
      return ($t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: kt,
    useEffect: sp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ro(4194308, 4, ev.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ro(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ro(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = vS.bind(null, Pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ip,
    useDebugValue: Jc,
    useDeferredValue: function (e) {
      return ($t().memoizedState = e);
    },
    useTransition: function () {
      var e = ip(!1),
        t = e[0];
      return (e = gS.bind(null, e[1])), ($t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Pe,
        i = $t();
      if (ye) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), ze === null)) throw Error(O(349));
        Pr & 30 || Wg(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        sp(Kg.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ps(9, qg.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $t(),
        t = ze.identifierPrefix;
      if (ye) {
        var n = an,
          r = on;
        (n = (r & ~(1 << (32 - Vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Es++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = mS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wS = {
    readContext: kt,
    useCallback: nv,
    useContext: kt,
    useEffect: Zc,
    useImperativeHandle: tv,
    useInsertionEffect: Zg,
    useLayoutEffect: Jg,
    useMemo: rv,
    useReducer: Cl,
    useRef: Qg,
    useState: function () {
      return Cl(Ts);
    },
    useDebugValue: Jc,
    useDeferredValue: function (e) {
      var t = bt();
      return iv(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = Cl(Ts)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Hg,
    useSyncExternalStore: Gg,
    useId: sv,
    unstable_isNewReconciler: !1,
  },
  SS = {
    readContext: kt,
    useCallback: nv,
    useContext: kt,
    useEffect: Zc,
    useImperativeHandle: tv,
    useInsertionEffect: Zg,
    useLayoutEffect: Jg,
    useMemo: rv,
    useReducer: jl,
    useRef: Qg,
    useState: function () {
      return jl(Ts);
    },
    useDebugValue: Jc,
    useDeferredValue: function (e) {
      var t = bt();
      return De === null ? (t.memoizedState = e) : iv(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(Ts)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Hg,
    useSyncExternalStore: Gg,
    useId: sv,
    unstable_isNewReconciler: !1,
  };
function Dt(e, t) {
  if (e && e.defaultProps) {
    (t = Ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ru(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _a = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ar(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = rt(),
      i = Un(e),
      s = cn(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = zn(e, s, i)),
      t !== null && (Ft(t, e, i, r), ko(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = rt(),
      i = Un(e),
      s = cn(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = zn(e, s, i)),
      t !== null && (Ft(t, e, i, r), ko(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = rt(),
      r = Un(e),
      i = cn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = zn(e, i, r)),
      t !== null && (Ft(t, e, r, n), ko(t, e, r));
  },
};
function op(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !gs(n, r) || !gs(i, s)
      : !0
  );
}
function uv(e, t, n) {
  var r = !1,
    i = Gn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = kt(s))
      : ((i = ut(t) ? Er : Je.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? di(e, i) : Gn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _a),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function ap(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _a.enqueueReplaceState(t, t.state, null);
}
function Au(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Gc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = kt(s))
    : ((s = ut(t) ? Er : Je.current), (i.context = di(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ru(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && _a.enqueueReplaceState(i, i.state, null),
      ia(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function mi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Yx(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Du(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ES = typeof WeakMap == "function" ? WeakMap : Map;
function cv(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ua || ((ua = !0), (Hu = r)), Du(e, t);
    }),
    n
  );
}
function dv(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Du(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Du(e, t),
          typeof r != "function" &&
            (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function lp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ES();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = OS.bind(null, e, t, n)), t.then(e, e));
}
function up(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = cn(-1, 1)), (t.tag = 2), zn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var TS = wn.ReactCurrentOwner,
  at = !1;
function nt(e, t, n, r) {
  t.child = e === null ? zg(t, null, n, r) : pi(t, e.child, n, r);
}
function dp(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    ai(t, i),
    (r = Xc(e, t, n, r, s, i)),
    (n = Qc()),
    e !== null && !at
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yn(e, t, i))
      : (ye && n && Vc(t), (t.flags |= 1), nt(e, t, r, i), t.child)
  );
}
function fp(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ad(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), fv(e, t, s, r, i))
      : ((e = Oo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gs), n(o, r) && e.ref === t.ref)
    )
      return yn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = $n(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fv(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (gs(s, r) && e.ref === t.ref)
      if (((at = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (at = !0);
      else return (t.lanes = e.lanes), yn(e, t, i);
  }
  return Iu(e, t, n, r, i);
}
function pv(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        he(Xr, ft),
        (ft |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          he(Xr, ft),
          (ft |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        he(Xr, ft),
        (ft |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      he(Xr, ft),
      (ft |= r);
  return nt(e, t, i, n), t.child;
}
function hv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Iu(e, t, n, r, i) {
  var s = ut(n) ? Er : Je.current;
  return (
    (s = di(t, s)),
    ai(t, i),
    (n = Xc(e, t, n, r, s, i)),
    (r = Qc()),
    e !== null && !at
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yn(e, t, i))
      : (ye && r && Vc(t), (t.flags |= 1), nt(e, t, n, i), t.child)
  );
}
function pp(e, t, n, r, i) {
  if (ut(n)) {
    var s = !0;
    Jo(t);
  } else s = !1;
  if ((ai(t, i), t.stateNode === null))
    Ao(e, t), uv(t, n, r), Au(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = kt(u))
      : ((u = ut(n) ? Er : Je.current), (u = di(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && ap(t, o, r, u)),
      (Ln = !1);
    var p = t.memoizedState;
    (o.state = p),
      ia(t, r, o, i),
      (a = t.memoizedState),
      l !== r || p !== a || lt.current || Ln
        ? (typeof c == "function" && (Ru(t, n, c, r), (a = t.memoizedState)),
          (l = Ln || op(t, n, l, r, p, a, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ug(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Dt(t.type, l)),
      (o.props = u),
      (d = t.pendingProps),
      (p = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = kt(a))
        : ((a = ut(n) ? Er : Je.current), (a = di(t, a)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== d || p !== a) && ap(t, o, r, a)),
      (Ln = !1),
      (p = t.memoizedState),
      (o.state = p),
      ia(t, r, o, i);
    var y = t.memoizedState;
    l !== d || p !== y || lt.current || Ln
      ? (typeof h == "function" && (Ru(t, n, h, r), (y = t.memoizedState)),
        (u = Ln || op(t, n, u, r, p, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ou(e, t, n, r, s, i);
}
function Ou(e, t, n, r, i, s) {
  hv(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Zf(t, n, !1), yn(e, t, s);
  (r = t.stateNode), (TS.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = pi(t, e.child, null, s)), (t.child = pi(t, null, l, s)))
      : nt(e, t, l, s),
    (t.memoizedState = r.state),
    i && Zf(t, n, !0),
    t.child
  );
}
function mv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qf(e, t.context, !1),
    Wc(e, t.containerInfo);
}
function hp(e, t, n, r, i) {
  return fi(), zc(i), (t.flags |= 256), nt(e, t, n, r), t.child;
}
var _u = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gv(e, t, n) {
  var r = t.pendingProps,
    i = Te.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    he(Te, i & 1),
    e === null)
  )
    return (
      ku(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = za(o, r, 0, null)),
              (e = xr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Vu(n)),
              (t.memoizedState = _u),
              e)
            : ed(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return PS(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = $n(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = $n(l, s)) : ((s = xr(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Vu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = _u),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = $n(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ed(e, t) {
  return (
    (t = za({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function po(e, t, n, r) {
  return (
    r !== null && zc(r),
    pi(t, e.child, null, n),
    (e = ed(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function PS(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ml(Error(O(422)))), po(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = za({ mode: "visible", children: r.children }, i, 0, null)),
        (s = xr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && pi(t, e.child, null, o),
        (t.child.memoizedState = Vu(o)),
        (t.memoizedState = _u),
        s);
  if (!(t.mode & 1)) return po(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(O(419))), (r = Ml(s, r, void 0)), po(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), at || l)) {
    if (((r = ze), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), vn(e, i), Ft(r, e, i, -1));
    }
    return od(), (r = Ml(Error(O(421)))), po(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _S.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (mt = Fn(i.nextSibling)),
      (gt = t),
      (ye = !0),
      (_t = null),
      e !== null &&
        ((Ct[jt++] = on),
        (Ct[jt++] = an),
        (Ct[jt++] = Tr),
        (on = e.id),
        (an = e.overflow),
        (Tr = t)),
      (t = ed(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bu(e.return, t, n);
}
function Nl(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function vv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((nt(e, t, r.children, n), (r = Te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mp(e, n, t);
        else if (e.tag === 19) mp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((he(Te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && sa(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Nl(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && sa(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Nl(t, !0, n, null, s);
        break;
      case "together":
        Nl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ao(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Cr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = $n(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function CS(e, t, n) {
  switch (t.tag) {
    case 3:
      mv(t), fi();
      break;
    case 5:
      $g(t);
      break;
    case 1:
      ut(t.type) && Jo(t);
      break;
    case 4:
      Wc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      he(na, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (he(Te, Te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? gv(e, t, n)
          : (he(Te, Te.current & 1),
            (e = yn(e, t, n)),
            e !== null ? e.sibling : null);
      he(Te, Te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        he(Te, Te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), pv(e, t, n);
  }
  return yn(e, t, n);
}
var yv, Fu, xv, wv;
yv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fu = function () {};
xv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), mr(qt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = au(e, i)), (r = au(e, r)), (s = []);
        break;
      case "select":
        (i = Ce({}, i, { value: void 0 })),
          (r = Ce({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = cu(e, i)), (r = cu(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Qo);
    }
    fu(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (us.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (us.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && ge("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
wv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ii(e, t) {
  if (!ye)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function jS(e, t, n) {
  var r = t.pendingProps;
  switch ((Fc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ye(t), null;
    case 1:
      return ut(t.type) && Zo(), Ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hi(),
        ve(lt),
        ve(Je),
        Kc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (co(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), _t !== null && (qu(_t), (_t = null)))),
        Fu(e, t),
        Ye(t),
        null
      );
    case 5:
      qc(t);
      var i = mr(Ss.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        xv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Ye(t), null;
        }
        if (((e = mr(qt.current)), co(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Gt] = t), (r[xs] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ge("cancel", r), ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Gi.length; i++) ge(Gi[i], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ge("error", r), ge("load", r);
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              Pf(r, s), ge("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ge("invalid", r);
              break;
            case "textarea":
              jf(r, s), ge("invalid", r);
          }
          fu(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      uo(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      uo(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : us.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  ge("scroll", r);
            }
          switch (n) {
            case "input":
              to(r), Cf(r, s, !0);
              break;
            case "textarea":
              to(r), Mf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Qo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Km(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Gt] = t),
            (e[xs] = r),
            yv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = pu(n, r)), n)) {
              case "dialog":
                ge("cancel", e), ge("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Gi.length; i++) ge(Gi[i], e);
                i = r;
                break;
              case "source":
                ge("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", e), ge("load", e), (i = r);
                break;
              case "details":
                ge("toggle", e), (i = r);
                break;
              case "input":
                Pf(e, r), (i = au(e, r)), ge("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ce({}, r, { value: void 0 })),
                  ge("invalid", e);
                break;
              case "textarea":
                jf(e, r), (i = cu(e, r)), ge("invalid", e);
                break;
              default:
                i = r;
            }
            fu(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Qm(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ym(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && cs(e, a)
                    : typeof a == "number" && cs(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (us.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && ge("scroll", e)
                      : a != null && Pc(e, s, a, o));
              }
            switch (n) {
              case "input":
                to(e), Cf(e, r, !1);
                break;
              case "textarea":
                to(e), Mf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Hn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? ri(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      ri(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Qo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ye(t), null;
    case 6:
      if (e && t.stateNode != null) wv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = mr(Ss.current)), mr(qt.current), co(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Gt] = t),
            (s = r.nodeValue !== n) && ((e = gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                uo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  uo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Gt] = t),
            (t.stateNode = r);
      }
      return Ye(t), null;
    case 13:
      if (
        (ve(Te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ye && mt !== null && t.mode & 1 && !(t.flags & 128))
          Vg(), fi(), (t.flags |= 98560), (s = !1);
        else if (((s = co(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(O(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(O(317));
            s[Gt] = t;
          } else
            fi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ye(t), (s = !1);
        } else _t !== null && (qu(_t), (_t = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Te.current & 1 ? Oe === 0 && (Oe = 3) : od())),
          t.updateQueue !== null && (t.flags |= 4),
          Ye(t),
          null);
    case 4:
      return (
        hi(), Fu(e, t), e === null && vs(t.stateNode.containerInfo), Ye(t), null
      );
    case 10:
      return $c(t.type._context), Ye(t), null;
    case 17:
      return ut(t.type) && Zo(), Ye(t), null;
    case 19:
      if ((ve(Te), (s = t.memoizedState), s === null)) return Ye(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Ii(s, !1);
        else {
          if (Oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = sa(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ii(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return he(Te, (Te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ke() > gi &&
            ((t.flags |= 128), (r = !0), Ii(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = sa(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ii(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ye)
            )
              return Ye(t), null;
          } else
            2 * ke() - s.renderingStartTime > gi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ii(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ke()),
          (t.sibling = null),
          (n = Te.current),
          he(Te, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ye(t), null);
    case 22:
    case 23:
      return (
        sd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ft & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function MS(e, t) {
  switch ((Fc(t), t.tag)) {
    case 1:
      return (
        ut(t.type) && Zo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hi(),
        ve(lt),
        ve(Je),
        Kc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return qc(t), null;
    case 13:
      if (
        (ve(Te), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        fi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ve(Te), null;
    case 4:
      return hi(), null;
    case 10:
      return $c(t.type._context), null;
    case 22:
    case 23:
      return sd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ho = !1,
  Qe = !1,
  NS = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function Yr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Le(e, t, r);
      }
    else n.current = null;
}
function zu(e, t, n) {
  try {
    n();
  } catch (r) {
    Le(e, t, r);
  }
}
var gp = !1;
function LS(e, t) {
  if (((Tu = Ko), (e = Cg()), _c(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (p = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++u === i && (l = o),
                p === s && ++c === r && (a = o),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = h;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Pu = { focusedElem: e, selectionRange: n }, Ko = !1, U = t; U !== null; )
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (U = e);
    else
      for (; U !== null; ) {
        t = U;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    S = y.memoizedState,
                    m = t.stateNode,
                    g = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Dt(t.type, x),
                      S
                    );
                  m.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (E) {
          Le(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (U = e);
          break;
        }
        U = t.return;
      }
  return (y = gp), (gp = !1), y;
}
function ts(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && zu(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Va(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Bu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Sv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Sv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Gt], delete t[xs], delete t[Mu], delete t[dS], delete t[fS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ev(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ev(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Uu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Qo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uu(e, t, n), e = e.sibling; e !== null; ) Uu(e, t, n), (e = e.sibling);
}
function $u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($u(e, t, n), e = e.sibling; e !== null; ) $u(e, t, n), (e = e.sibling);
}
var He = null,
  It = !1;
function Cn(e, t, n) {
  for (n = n.child; n !== null; ) Tv(e, t, n), (n = n.sibling);
}
function Tv(e, t, n) {
  if (Wt && typeof Wt.onCommitFiberUnmount == "function")
    try {
      Wt.onCommitFiberUnmount(ka, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Qe || Yr(n, t);
    case 6:
      var r = He,
        i = It;
      (He = null),
        Cn(e, t, n),
        (He = r),
        (It = i),
        He !== null &&
          (It
            ? ((e = He),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : He.removeChild(n.stateNode));
      break;
    case 18:
      He !== null &&
        (It
          ? ((e = He),
            (n = n.stateNode),
            e.nodeType === 8
              ? Sl(e.parentNode, n)
              : e.nodeType === 1 && Sl(e, n),
            hs(e))
          : Sl(He, n.stateNode));
      break;
    case 4:
      (r = He),
        (i = It),
        (He = n.stateNode.containerInfo),
        (It = !0),
        Cn(e, t, n),
        (He = r),
        (It = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Qe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && zu(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Cn(e, t, n);
      break;
    case 1:
      if (
        !Qe &&
        (Yr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Le(n, t, l);
        }
      Cn(e, t, n);
      break;
    case 21:
      Cn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Qe = (r = Qe) || n.memoizedState !== null), Cn(e, t, n), (Qe = r))
        : Cn(e, t, n);
      break;
    default:
      Cn(e, t, n);
  }
}
function yp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new NS()),
      t.forEach(function (r) {
        var i = VS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function At(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (He = l.stateNode), (It = !1);
              break e;
            case 3:
              (He = l.stateNode.containerInfo), (It = !0);
              break e;
            case 4:
              (He = l.stateNode.containerInfo), (It = !0);
              break e;
          }
          l = l.return;
        }
        if (He === null) throw Error(O(160));
        Tv(s, o, i), (He = null), (It = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Le(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pv(t, e), (t = t.sibling);
}
function Pv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((At(t, e), Bt(e), r & 4)) {
        try {
          ts(3, e, e.return), Va(3, e);
        } catch (x) {
          Le(e, e.return, x);
        }
        try {
          ts(5, e, e.return);
        } catch (x) {
          Le(e, e.return, x);
        }
      }
      break;
    case 1:
      At(t, e), Bt(e), r & 512 && n !== null && Yr(n, n.return);
      break;
    case 5:
      if (
        (At(t, e),
        Bt(e),
        r & 512 && n !== null && Yr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          cs(i, "");
        } catch (x) {
          Le(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Wm(i, s),
              pu(l, o);
            var u = pu(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                d = a[o + 1];
              c === "style"
                ? Qm(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Ym(i, d)
                : c === "children"
                ? cs(i, d)
                : Pc(i, c, d, u);
            }
            switch (l) {
              case "input":
                lu(i, s);
                break;
              case "textarea":
                qm(i, s);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var h = s.value;
                h != null
                  ? ri(i, !!s.multiple, h, !1)
                  : p !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ri(i, !!s.multiple, s.defaultValue, !0)
                      : ri(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[xs] = s;
          } catch (x) {
            Le(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((At(t, e), Bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          Le(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (At(t, e), Bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          hs(t.containerInfo);
        } catch (x) {
          Le(e, e.return, x);
        }
      break;
    case 4:
      At(t, e), Bt(e);
      break;
    case 13:
      At(t, e),
        Bt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (rd = ke())),
        r & 4 && yp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Qe = (u = Qe) || c), At(t, e), (Qe = u)) : At(t, e),
        Bt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (U = e, c = e.child; c !== null; ) {
            for (d = U = c; U !== null; ) {
              switch (((p = U), (h = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ts(4, p, p.return);
                  break;
                case 1:
                  Yr(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      Le(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Yr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    wp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = p), (U = h)) : wp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Xm("display", o)));
              } catch (x) {
                Le(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (x) {
                Le(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      At(t, e), Bt(e), r & 4 && yp(e);
      break;
    case 21:
      break;
    default:
      At(t, e), Bt(e);
  }
}
function Bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ev(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (cs(i, ""), (r.flags &= -33));
          var s = vp(e);
          $u(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = vp(e);
          Uu(e, l, o);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      Le(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kS(e, t, n) {
  (U = e), Cv(e);
}
function Cv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var i = U,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ho;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || Qe;
        l = ho;
        var u = Qe;
        if (((ho = o), (Qe = a) && !u))
          for (U = i; U !== null; )
            (o = U),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Sp(i)
                : a !== null
                ? ((a.return = o), (U = a))
                : Sp(i);
        for (; s !== null; ) (U = s), Cv(s), (s = s.sibling);
        (U = i), (ho = l), (Qe = u);
      }
      xp(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (U = s)) : xp(e);
  }
}
function xp(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qe || Va(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Qe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && rp(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                rp(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && hs(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Qe || (t.flags & 512 && Bu(t));
      } catch (p) {
        Le(t, t.return, p);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function wp(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function Sp(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Va(4, t);
          } catch (a) {
            Le(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Le(t, i, a);
            }
          }
          var s = t.return;
          try {
            Bu(t);
          } catch (a) {
            Le(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Bu(t);
          } catch (a) {
            Le(t, o, a);
          }
      }
    } catch (a) {
      Le(t, t.return, a);
    }
    if (t === e) {
      U = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (U = l);
      break;
    }
    U = t.return;
  }
}
var bS = Math.ceil,
  la = wn.ReactCurrentDispatcher,
  td = wn.ReactCurrentOwner,
  Lt = wn.ReactCurrentBatchConfig,
  se = 0,
  ze = null,
  Ae = null,
  We = 0,
  ft = 0,
  Xr = Yn(0),
  Oe = 0,
  Cs = null,
  Cr = 0,
  Fa = 0,
  nd = 0,
  ns = null,
  ot = null,
  rd = 0,
  gi = 1 / 0,
  rn = null,
  ua = !1,
  Hu = null,
  Bn = null,
  mo = !1,
  An = null,
  ca = 0,
  rs = 0,
  Gu = null,
  Do = -1,
  Io = 0;
function rt() {
  return se & 6 ? ke() : Do !== -1 ? Do : (Do = ke());
}
function Un(e) {
  return e.mode & 1
    ? se & 2 && We !== 0
      ? We & -We
      : hS.transition !== null
      ? (Io === 0 && (Io = ug()), Io)
      : ((e = ce),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gg(e.type))),
        e)
    : 1;
}
function Ft(e, t, n, r) {
  if (50 < rs) throw ((rs = 0), (Gu = null), Error(O(185)));
  Is(e, n, r),
    (!(se & 2) || e !== ze) &&
      (e === ze && (!(se & 2) && (Fa |= n), Oe === 4 && bn(e, We)),
      ct(e, r),
      n === 1 && se === 0 && !(t.mode & 1) && ((gi = ke() + 500), Ia && Xn()));
}
function ct(e, t) {
  var n = e.callbackNode;
  hw(e, t);
  var r = qo(e, e === ze ? We : 0);
  if (r === 0)
    n !== null && kf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && kf(n), t === 1))
      e.tag === 0 ? pS(Ep.bind(null, e)) : Ig(Ep.bind(null, e)),
        uS(function () {
          !(se & 6) && Xn();
        }),
        (n = null);
    else {
      switch (cg(r)) {
        case 1:
          n = Lc;
          break;
        case 4:
          n = ag;
          break;
        case 16:
          n = Wo;
          break;
        case 536870912:
          n = lg;
          break;
        default:
          n = Wo;
      }
      n = Av(n, jv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function jv(e, t) {
  if (((Do = -1), (Io = 0), se & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (li() && e.callbackNode !== n) return null;
  var r = qo(e, e === ze ? We : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = da(e, r);
  else {
    t = r;
    var i = se;
    se |= 2;
    var s = Nv();
    (ze !== e || We !== t) && ((rn = null), (gi = ke() + 500), yr(e, t));
    do
      try {
        DS();
        break;
      } catch (l) {
        Mv(e, l);
      }
    while (!0);
    Uc(),
      (la.current = s),
      (se = i),
      Ae !== null ? (t = 0) : ((ze = null), (We = 0), (t = Oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = yu(e)), i !== 0 && ((r = i), (t = Wu(e, i)))), t === 1)
    )
      throw ((n = Cs), yr(e, 0), bn(e, r), ct(e, ke()), n);
    if (t === 6) bn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !RS(i) &&
          ((t = da(e, r)),
          t === 2 && ((s = yu(e)), s !== 0 && ((r = s), (t = Wu(e, s)))),
          t === 1))
      )
        throw ((n = Cs), yr(e, 0), bn(e, r), ct(e, ke()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          lr(e, ot, rn);
          break;
        case 3:
          if (
            (bn(e, r), (r & 130023424) === r && ((t = rd + 500 - ke()), 10 < t))
          ) {
            if (qo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              rt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ju(lr.bind(null, e, ot, rn), t);
            break;
          }
          lr(e, ot, rn);
          break;
        case 4:
          if ((bn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Vt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = ke() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * bS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ju(lr.bind(null, e, ot, rn), r);
            break;
          }
          lr(e, ot, rn);
          break;
        case 5:
          lr(e, ot, rn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return ct(e, ke()), e.callbackNode === n ? jv.bind(null, e) : null;
}
function Wu(e, t) {
  var n = ns;
  return (
    e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256),
    (e = da(e, t)),
    e !== 2 && ((t = ot), (ot = n), t !== null && qu(t)),
    e
  );
}
function qu(e) {
  ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function RS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!zt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function bn(e, t) {
  for (
    t &= ~nd,
      t &= ~Fa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ep(e) {
  if (se & 6) throw Error(O(327));
  li();
  var t = qo(e, 0);
  if (!(t & 1)) return ct(e, ke()), null;
  var n = da(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = yu(e);
    r !== 0 && ((t = r), (n = Wu(e, r)));
  }
  if (n === 1) throw ((n = Cs), yr(e, 0), bn(e, t), ct(e, ke()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    lr(e, ot, rn),
    ct(e, ke()),
    null
  );
}
function id(e, t) {
  var n = se;
  se |= 1;
  try {
    return e(t);
  } finally {
    (se = n), se === 0 && ((gi = ke() + 500), Ia && Xn());
  }
}
function jr(e) {
  An !== null && An.tag === 0 && !(se & 6) && li();
  var t = se;
  se |= 1;
  var n = Lt.transition,
    r = ce;
  try {
    if (((Lt.transition = null), (ce = 1), e)) return e();
  } finally {
    (ce = r), (Lt.transition = n), (se = t), !(se & 6) && Xn();
  }
}
function sd() {
  (ft = Xr.current), ve(Xr);
}
function yr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), lS(n)), Ae !== null))
    for (n = Ae.return; n !== null; ) {
      var r = n;
      switch ((Fc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zo();
          break;
        case 3:
          hi(), ve(lt), ve(Je), Kc();
          break;
        case 5:
          qc(r);
          break;
        case 4:
          hi();
          break;
        case 13:
          ve(Te);
          break;
        case 19:
          ve(Te);
          break;
        case 10:
          $c(r.type._context);
          break;
        case 22:
        case 23:
          sd();
      }
      n = n.return;
    }
  if (
    ((ze = e),
    (Ae = e = $n(e.current, null)),
    (We = ft = t),
    (Oe = 0),
    (Cs = null),
    (nd = Fa = Cr = 0),
    (ot = ns = null),
    hr !== null)
  ) {
    for (t = 0; t < hr.length; t++)
      if (((n = hr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    hr = null;
  }
  return e;
}
function Mv(e, t) {
  do {
    var n = Ae;
    try {
      if ((Uc(), (bo.current = aa), oa)) {
        for (var r = Pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        oa = !1;
      }
      if (
        ((Pr = 0),
        (Ve = De = Pe = null),
        (es = !1),
        (Es = 0),
        (td.current = null),
        n === null || n.return === null)
      ) {
        (Oe = 1), (Cs = t), (Ae = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = We),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = up(o);
          if (h !== null) {
            (h.flags &= -257),
              cp(h, o, l, s, t),
              h.mode & 1 && lp(s, u, t),
              (t = h),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              lp(s, u, t), od();
              break e;
            }
            a = Error(O(426));
          }
        } else if (ye && l.mode & 1) {
          var S = up(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              cp(S, o, l, s, t),
              zc(mi(a, l));
            break e;
          }
        }
        (s = a = mi(a, l)),
          Oe !== 4 && (Oe = 2),
          ns === null ? (ns = [s]) : ns.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = cv(s, a, t);
              np(s, m);
              break e;
            case 1:
              l = a;
              var g = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Bn === null || !Bn.has(v))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var E = dv(s, l, t);
                np(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      kv(n);
    } catch (C) {
      (t = C), Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Nv() {
  var e = la.current;
  return (la.current = aa), e === null ? aa : e;
}
function od() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
    ze === null || (!(Cr & 268435455) && !(Fa & 268435455)) || bn(ze, We);
}
function da(e, t) {
  var n = se;
  se |= 2;
  var r = Nv();
  (ze !== e || We !== t) && ((rn = null), yr(e, t));
  do
    try {
      AS();
      break;
    } catch (i) {
      Mv(e, i);
    }
  while (!0);
  if ((Uc(), (se = n), (la.current = r), Ae !== null)) throw Error(O(261));
  return (ze = null), (We = 0), Oe;
}
function AS() {
  for (; Ae !== null; ) Lv(Ae);
}
function DS() {
  for (; Ae !== null && !sw(); ) Lv(Ae);
}
function Lv(e) {
  var t = Rv(e.alternate, e, ft);
  (e.memoizedProps = e.pendingProps),
    t === null ? kv(e) : (Ae = t),
    (td.current = null);
}
function kv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = MS(n, t)), n !== null)) {
        (n.flags &= 32767), (Ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Oe = 6), (Ae = null);
        return;
      }
    } else if (((n = jS(n, t, ft)), n !== null)) {
      Ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  Oe === 0 && (Oe = 5);
}
function lr(e, t, n) {
  var r = ce,
    i = Lt.transition;
  try {
    (Lt.transition = null), (ce = 1), IS(e, t, n, r);
  } finally {
    (Lt.transition = i), (ce = r);
  }
  return null;
}
function IS(e, t, n, r) {
  do li();
  while (An !== null);
  if (se & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (mw(e, s),
    e === ze && ((Ae = ze = null), (We = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      mo ||
      ((mo = !0),
      Av(Wo, function () {
        return li(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Lt.transition), (Lt.transition = null);
    var o = ce;
    ce = 1;
    var l = se;
    (se |= 4),
      (td.current = null),
      LS(e, n),
      Pv(n, e),
      tS(Pu),
      (Ko = !!Tu),
      (Pu = Tu = null),
      (e.current = n),
      kS(n),
      ow(),
      (se = l),
      (ce = o),
      (Lt.transition = s);
  } else e.current = n;
  if (
    (mo && ((mo = !1), (An = e), (ca = i)),
    (s = e.pendingLanes),
    s === 0 && (Bn = null),
    uw(n.stateNode),
    ct(e, ke()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ua) throw ((ua = !1), (e = Hu), (Hu = null), e);
  return (
    ca & 1 && e.tag !== 0 && li(),
    (s = e.pendingLanes),
    s & 1 ? (e === Gu ? rs++ : ((rs = 0), (Gu = e))) : (rs = 0),
    Xn(),
    null
  );
}
function li() {
  if (An !== null) {
    var e = cg(ca),
      t = Lt.transition,
      n = ce;
    try {
      if (((Lt.transition = null), (ce = 16 > e ? 16 : e), An === null))
        var r = !1;
      else {
        if (((e = An), (An = null), (ca = 0), se & 6)) throw Error(O(331));
        var i = se;
        for (se |= 4, U = e.current; U !== null; ) {
          var s = U,
            o = s.child;
          if (U.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (U = u; U !== null; ) {
                  var c = U;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ts(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (U = d);
                  else
                    for (; U !== null; ) {
                      c = U;
                      var p = c.sibling,
                        h = c.return;
                      if ((Sv(c), c === u)) {
                        U = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = h), (U = p);
                        break;
                      }
                      U = h;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var S = x.sibling;
                    (x.sibling = null), (x = S);
                  } while (x !== null);
                }
              }
              U = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (U = o);
          else
            e: for (; U !== null; ) {
              if (((s = U), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ts(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (U = m);
                break e;
              }
              U = s.return;
            }
        }
        var g = e.current;
        for (U = g; U !== null; ) {
          o = U;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (U = v);
          else
            e: for (o = g; U !== null; ) {
              if (((l = U), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Va(9, l);
                  }
                } catch (C) {
                  Le(l, l.return, C);
                }
              if (l === o) {
                U = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (U = E);
                break e;
              }
              U = l.return;
            }
        }
        if (
          ((se = i), Xn(), Wt && typeof Wt.onPostCommitFiberRoot == "function")
        )
          try {
            Wt.onPostCommitFiberRoot(ka, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ce = n), (Lt.transition = t);
    }
  }
  return !1;
}
function Tp(e, t, n) {
  (t = mi(n, t)),
    (t = cv(e, t, 1)),
    (e = zn(e, t, 1)),
    (t = rt()),
    e !== null && (Is(e, 1, t), ct(e, t));
}
function Le(e, t, n) {
  if (e.tag === 3) Tp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Tp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Bn === null || !Bn.has(r)))
        ) {
          (e = mi(n, e)),
            (e = dv(t, e, 1)),
            (t = zn(t, e, 1)),
            (e = rt()),
            t !== null && (Is(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function OS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = rt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ze === e &&
      (We & n) === n &&
      (Oe === 4 || (Oe === 3 && (We & 130023424) === We && 500 > ke() - rd)
        ? yr(e, 0)
        : (nd |= n)),
    ct(e, t);
}
function bv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = io), (io <<= 1), !(io & 130023424) && (io = 4194304))
      : (t = 1));
  var n = rt();
  (e = vn(e, t)), e !== null && (Is(e, t, n), ct(e, n));
}
function _S(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bv(e, n);
}
function VS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), bv(e, n);
}
var Rv;
Rv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || lt.current) at = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (at = !1), CS(e, t, n);
      at = !!(e.flags & 131072);
    }
  else (at = !1), ye && t.flags & 1048576 && Og(t, ta, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ao(e, t), (e = t.pendingProps);
      var i = di(t, Je.current);
      ai(t, n), (i = Xc(null, t, r, e, i, n));
      var s = Qc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ut(r) ? ((s = !0), Jo(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Gc(t),
            (i.updater = _a),
            (t.stateNode = i),
            (i._reactInternals = t),
            Au(t, r, e, n),
            (t = Ou(null, t, r, !0, s, n)))
          : ((t.tag = 0), ye && s && Vc(t), nt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ao(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = zS(r)),
          (e = Dt(r, e)),
          i)
        ) {
          case 0:
            t = Iu(null, t, r, e, n);
            break e;
          case 1:
            t = pp(null, t, r, e, n);
            break e;
          case 11:
            t = dp(null, t, r, e, n);
            break e;
          case 14:
            t = fp(null, t, r, Dt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Dt(r, i)),
        Iu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Dt(r, i)),
        pp(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((mv(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Ug(e, t),
          ia(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = mi(Error(O(423)), t)), (t = hp(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = mi(Error(O(424)), t)), (t = hp(e, t, r, n, i));
            break e;
          } else
            for (
              mt = Fn(t.stateNode.containerInfo.firstChild),
                gt = t,
                ye = !0,
                _t = null,
                n = zg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fi(), r === i)) {
            t = yn(e, t, n);
            break e;
          }
          nt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $g(t),
        e === null && ku(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Cu(r, i) ? (o = null) : s !== null && Cu(r, s) && (t.flags |= 32),
        hv(e, t),
        nt(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ku(t), null;
    case 13:
      return gv(e, t, n);
    case 4:
      return (
        Wc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pi(t, null, r, n)) : nt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Dt(r, i)),
        dp(e, t, r, i, n)
      );
    case 7:
      return nt(e, t, t.pendingProps, n), t.child;
    case 8:
      return nt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return nt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          he(na, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (zt(s.value, o)) {
            if (s.children === i.children && !lt.current) {
              t = yn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = cn(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      bu(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(O(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  bu(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        nt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ai(t, n),
        (i = kt(i)),
        (r = r(i)),
        (t.flags |= 1),
        nt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Dt(r, t.pendingProps)),
        (i = Dt(r.type, i)),
        fp(e, t, r, i, n)
      );
    case 15:
      return fv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Dt(r, i)),
        Ao(e, t),
        (t.tag = 1),
        ut(r) ? ((e = !0), Jo(t)) : (e = !1),
        ai(t, n),
        uv(t, r, i),
        Au(t, r, i, n),
        Ou(null, t, r, !0, e, n)
      );
    case 19:
      return vv(e, t, n);
    case 22:
      return pv(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Av(e, t) {
  return og(e, t);
}
function FS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Mt(e, t, n, r) {
  return new FS(e, t, n, r);
}
function ad(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zS(e) {
  if (typeof e == "function") return ad(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === jc)) return 11;
    if (e === Mc) return 14;
  }
  return 2;
}
function $n(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Oo(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) ad(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case zr:
        return xr(n.children, i, s, t);
      case Cc:
        (o = 8), (i |= 8);
        break;
      case ru:
        return (
          (e = Mt(12, n, t, i | 2)), (e.elementType = ru), (e.lanes = s), e
        );
      case iu:
        return (e = Mt(13, n, t, i)), (e.elementType = iu), (e.lanes = s), e;
      case su:
        return (e = Mt(19, n, t, i)), (e.elementType = su), (e.lanes = s), e;
      case $m:
        return za(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Bm:
              o = 10;
              break e;
            case Um:
              o = 9;
              break e;
            case jc:
              o = 11;
              break e;
            case Mc:
              o = 14;
              break e;
            case Nn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Mt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function xr(e, t, n, r) {
  return (e = Mt(7, e, r, t)), (e.lanes = n), e;
}
function za(e, t, n, r) {
  return (
    (e = Mt(22, e, r, t)),
    (e.elementType = $m),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ll(e, t, n) {
  return (e = Mt(6, e, null, t)), (e.lanes = n), e;
}
function kl(e, t, n) {
  return (
    (t = Mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function BS(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = cl(0)),
    (this.expirationTimes = cl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ld(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new BS(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Mt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gc(s),
    e
  );
}
function US(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dv(e) {
  if (!e) return Gn;
  e = e._reactInternals;
  e: {
    if (Ar(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ut(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ut(n)) return Dg(e, n, t);
  }
  return t;
}
function Iv(e, t, n, r, i, s, o, l, a) {
  return (
    (e = ld(n, r, !0, e, i, s, o, l, a)),
    (e.context = Dv(null)),
    (n = e.current),
    (r = rt()),
    (i = Un(n)),
    (s = cn(r, i)),
    (s.callback = t ?? null),
    zn(n, s, i),
    (e.current.lanes = i),
    Is(e, i, r),
    ct(e, r),
    e
  );
}
function Ba(e, t, n, r) {
  var i = t.current,
    s = rt(),
    o = Un(i);
  return (
    (n = Dv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = cn(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = zn(i, t, o)),
    e !== null && (Ft(e, i, o, s), ko(e, i, o)),
    o
  );
}
function fa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ud(e, t) {
  Pp(e, t), (e = e.alternate) && Pp(e, t);
}
function $S() {
  return null;
}
var Ov =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function cd(e) {
  this._internalRoot = e;
}
Ua.prototype.render = cd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Ba(e, t, null, null);
};
Ua.prototype.unmount = cd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jr(function () {
      Ba(null, e, null, null);
    }),
      (t[gn] = null);
  }
};
function Ua(e) {
  this._internalRoot = e;
}
Ua.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++);
    kn.splice(n, 0, e), n === 0 && mg(e);
  }
};
function dd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $a(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cp() {}
function HS(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = fa(o);
        s.call(u);
      };
    }
    var o = Iv(t, r, e, 0, null, !1, !1, "", Cp);
    return (
      (e._reactRootContainer = o),
      (e[gn] = o.current),
      vs(e.nodeType === 8 ? e.parentNode : e),
      jr(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = fa(a);
      l.call(u);
    };
  }
  var a = ld(e, 0, !1, null, null, !1, !1, "", Cp);
  return (
    (e._reactRootContainer = a),
    (e[gn] = a.current),
    vs(e.nodeType === 8 ? e.parentNode : e),
    jr(function () {
      Ba(t, a, n, r);
    }),
    a
  );
}
function Ha(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = fa(o);
        l.call(a);
      };
    }
    Ba(t, o, e, i);
  } else o = HS(n, t, e, i, r);
  return fa(o);
}
dg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hi(t.pendingLanes);
        n !== 0 &&
          (kc(t, n | 1), ct(t, ke()), !(se & 6) && ((gi = ke() + 500), Xn()));
      }
      break;
    case 13:
      jr(function () {
        var r = vn(e, 1);
        if (r !== null) {
          var i = rt();
          Ft(r, e, 1, i);
        }
      }),
        ud(e, 1);
  }
};
bc = function (e) {
  if (e.tag === 13) {
    var t = vn(e, 134217728);
    if (t !== null) {
      var n = rt();
      Ft(t, e, 134217728, n);
    }
    ud(e, 134217728);
  }
};
fg = function (e) {
  if (e.tag === 13) {
    var t = Un(e),
      n = vn(e, t);
    if (n !== null) {
      var r = rt();
      Ft(n, e, t, r);
    }
    ud(e, t);
  }
};
pg = function () {
  return ce;
};
hg = function (e, t) {
  var n = ce;
  try {
    return (ce = e), t();
  } finally {
    ce = n;
  }
};
mu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((lu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Da(r);
            if (!i) throw Error(O(90));
            Gm(r), lu(r, i);
          }
        }
      }
      break;
    case "textarea":
      qm(e, n);
      break;
    case "select":
      (t = n.value), t != null && ri(e, !!n.multiple, t, !1);
  }
};
eg = id;
tg = jr;
var GS = { usingClientEntryPoint: !1, Events: [_s, Hr, Da, Zm, Jm, id] },
  Oi = {
    findFiberByHostInstance: pr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  WS = {
    bundleType: Oi.bundleType,
    version: Oi.version,
    rendererPackageName: Oi.rendererPackageName,
    rendererConfig: Oi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ig(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Oi.findFiberByHostInstance || $S,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!go.isDisabled && go.supportsFiber)
    try {
      (ka = go.inject(WS)), (Wt = go);
    } catch {}
}
xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = GS;
xt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dd(t)) throw Error(O(200));
  return US(e, t, null, n);
};
xt.createRoot = function (e, t) {
  if (!dd(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = Ov;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ld(e, 1, !1, null, null, n, !1, r, i)),
    (e[gn] = t.current),
    vs(e.nodeType === 8 ? e.parentNode : e),
    new cd(t)
  );
};
xt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = ig(t)), (e = e === null ? null : e.stateNode), e;
};
xt.flushSync = function (e) {
  return jr(e);
};
xt.hydrate = function (e, t, n) {
  if (!$a(t)) throw Error(O(200));
  return Ha(null, e, t, !0, n);
};
xt.hydrateRoot = function (e, t, n) {
  if (!dd(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Ov;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Iv(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[gn] = t.current),
    vs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ua(t);
};
xt.render = function (e, t, n) {
  if (!$a(t)) throw Error(O(200));
  return Ha(null, e, t, !1, n);
};
xt.unmountComponentAtNode = function (e) {
  if (!$a(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (jr(function () {
        Ha(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gn] = null);
        });
      }),
      !0)
    : !1;
};
xt.unstable_batchedUpdates = id;
xt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$a(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Ha(e, t, n, !1, r);
};
xt.version = "18.3.1-next-f1338f8080-20240426";
function _v() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v);
    } catch (e) {
      console.error(e);
    }
}
_v(), (_m.exports = xt);
var fd = _m.exports;
const qS = Cm(fd),
  KS = Pm({ __proto__: null, default: qS }, [fd]);
var Vv,
  jp = fd;
(Vv = jp.createRoot), jp.hydrateRoot;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ee() {
  return (
    (Ee = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ee.apply(this, arguments)
  );
}
var Re;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Re || (Re = {}));
const Mp = "popstate";
function YS(e) {
  e === void 0 && (e = {});
  function t(i, s) {
    let {
      pathname: o = "/",
      search: l = "",
      hash: a = "",
    } = Sn(i.location.hash.substr(1));
    return (
      !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o),
      js(
        "",
        { pathname: o, search: l, hash: a },
        (s.state && s.state.usr) || null,
        (s.state && s.state.key) || "default"
      )
    );
  }
  function n(i, s) {
    let o = i.document.querySelector("base"),
      l = "";
    if (o && o.getAttribute("href")) {
      let a = i.location.href,
        u = a.indexOf("#");
      l = u === -1 ? a : a.slice(0, u);
    }
    return l + "#" + (typeof s == "string" ? s : Nr(s));
  }
  function r(i, s) {
    Mr(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(s) +
        ")"
    );
  }
  return QS(t, n, r, e);
}
function ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Mr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function XS() {
  return Math.random().toString(36).substr(2, 8);
}
function Np(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function js(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ee(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Sn(t) : t,
      { state: n, key: (t && t.key) || r || XS() }
    )
  );
}
function Nr(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Sn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function QS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = Re.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Ee({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    l = Re.Pop;
    let S = c(),
      m = S == null ? null : S - u;
    (u = S), a && a({ action: l, location: x.location, delta: m });
  }
  function p(S, m) {
    l = Re.Push;
    let g = js(x.location, S, m);
    n && n(g, S), (u = c() + 1);
    let v = Np(g, u),
      E = x.createHref(g);
    try {
      o.pushState(v, "", E);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(E);
    }
    s && a && a({ action: l, location: x.location, delta: 1 });
  }
  function h(S, m) {
    l = Re.Replace;
    let g = js(x.location, S, m);
    n && n(g, S), (u = c());
    let v = Np(g, u),
      E = x.createHref(g);
    o.replaceState(v, "", E),
      s && a && a({ action: l, location: x.location, delta: 0 });
  }
  function y(S) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      g = typeof S == "string" ? S : Nr(S);
    return (
      (g = g.replace(/ $/, "%20")),
      ee(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, m)
    );
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(S) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Mp, d),
        (a = S),
        () => {
          i.removeEventListener(Mp, d), (a = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: y,
    encodeLocation(S) {
      let m = y(S);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: h,
    go(S) {
      return o.go(S);
    },
  };
  return x;
}
var fe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(fe || (fe = {}));
const ZS = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function JS(e) {
  return e.index === !0;
}
function Ms(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, s) => {
      let o = [...n, String(s)],
        l = typeof i.id == "string" ? i.id : o.join("-");
      if (
        (ee(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        ee(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        JS(i))
      ) {
        let a = Ee({}, i, t(i), { id: l });
        return (r[l] = a), a;
      } else {
        let a = Ee({}, i, t(i), { id: l, children: void 0 });
        return (
          (r[l] = a), i.children && (a.children = Ms(i.children, t, o, r)), a
        );
      }
    })
  );
}
function fr(e, t, n) {
  return n === void 0 && (n = "/"), _o(e, t, n, !1);
}
function _o(e, t, n, r) {
  let i = typeof t == "string" ? Sn(t) : t,
    s = Ci(i.pathname || "/", n);
  if (s == null) return null;
  let o = Fv(e);
  t1(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) {
    let u = f1(s);
    l = c1(o[a], u, r);
  }
  return l;
}
function e1(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Fv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (ee(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = dn([r, a.relativePath]),
      c = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (ee(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Fv(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: l1(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let a of zv(s.path)) i(s, o, a);
    }),
    t
  );
}
function zv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = zv(r.join("/")),
    l = [];
  return (
    l.push(...o.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && l.push(...o),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function t1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : u1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const n1 = /^:[\w-]+$/,
  r1 = 3,
  i1 = 2,
  s1 = 1,
  o1 = 10,
  a1 = -2,
  Lp = (e) => e === "*";
function l1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Lp) && (r += a1),
    t && (r += i1),
    n
      .filter((i) => !Lp(i))
      .reduce((i, s) => i + (n1.test(s) ? r1 : s === "" ? s1 : o1), r)
  );
}
function u1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function c1(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      c = s === "/" ? t : t.slice(s.length) || "/",
      d = kp(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c
      ),
      p = a.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = kp(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: dn([s, d.pathname]),
        pathnameBase: m1(dn([s, d.pathnameBase])),
        route: p,
      }),
      d.pathnameBase !== "/" && (s = dn([s, d.pathnameBase]));
  }
  return o;
}
function kp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = d1(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: p, isOptional: h } = c;
      if (p === "*") {
        let x = l[d] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[d];
      return (
        h && !y ? (u[p] = void 0) : (u[p] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function d1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Mr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function f1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Mr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ci(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function p1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Sn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : h1(n, t)) : t,
    search: g1(r),
    hash: v1(i),
  };
}
function h1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function bl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Bv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function pd(e, t) {
  let n = Bv(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function hd(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Sn(e))
    : ((i = Ee({}, e)),
      ee(
        !i.pathname || !i.pathname.includes("?"),
        bl("?", "pathname", "search", i)
      ),
      ee(
        !i.pathname || !i.pathname.includes("#"),
        bl("#", "pathname", "hash", i)
      ),
      ee(!i.search || !i.search.includes("#"), bl("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    l;
  if (o == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      i.pathname = p.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let a = p1(i, l),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const dn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  m1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  g1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  v1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class pa {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Ga(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Uv = ["post", "put", "patch", "delete"],
  y1 = new Set(Uv),
  x1 = ["get", ...Uv],
  w1 = new Set(x1),
  S1 = new Set([301, 302, 303, 307, 308]),
  E1 = new Set([307, 308]),
  Rl = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  T1 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  _i = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  md = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  P1 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  $v = "remix-router-transitions";
function C1(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  ee(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let T = e.detectErrorBoundary;
    i = (j) => ({ hasErrorBoundary: T(j) });
  } else i = P1;
  let s = {},
    o = Ms(e.routes, i, void 0, s),
    l,
    a = e.basename || "/",
    u = e.unstable_dataStrategy || b1,
    c = e.unstable_patchRoutesOnNavigation,
    d = Ee(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    p = null,
    h = new Set(),
    y = 1e3,
    x = new Set(),
    S = null,
    m = null,
    g = null,
    v = e.hydrationData != null,
    E = fr(o, e.history.location, a),
    C = null;
  if (E == null && !c) {
    let T = tt(404, { pathname: e.history.location.pathname }),
      { matches: j, route: L } = Fp(o);
    (E = j), (C = { [L.id]: T });
  }
  E &&
    !e.hydrationData &&
    qs(E, o, e.history.location.pathname).active &&
    (E = null);
  let N;
  if (E)
    if (E.some((T) => T.route.lazy)) N = !1;
    else if (!E.some((T) => T.route.loader)) N = !0;
    else if (d.v7_partialHydration) {
      let T = e.hydrationData ? e.hydrationData.loaderData : null,
        j = e.hydrationData ? e.hydrationData.errors : null,
        L = (D) =>
          D.route.loader
            ? typeof D.route.loader == "function" &&
              D.route.loader.hydrate === !0
              ? !1
              : (T && T[D.route.id] !== void 0) ||
                (j && j[D.route.id] !== void 0)
            : !0;
      if (j) {
        let D = E.findIndex((B) => j[B.route.id] !== void 0);
        N = E.slice(0, D + 1).every(L);
      } else N = E.every(L);
    } else N = e.hydrationData != null;
  else if (((N = !1), (E = []), d.v7_partialHydration)) {
    let T = qs(null, o, e.history.location.pathname);
    T.active && T.matches && (E = T.matches);
  }
  let A,
    w = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: E,
      initialized: N,
      navigation: Rl,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || C,
      fetchers: new Map(),
      blockers: new Map(),
    },
    k = Re.Pop,
    M = !1,
    R,
    _ = !1,
    V = new Map(),
    G = null,
    X = !1,
    de = !1,
    ne = [],
    b = new Set(),
    I = new Map(),
    z = 0,
    Z = -1,
    re = new Map(),
    Be = new Set(),
    Ue = new Map(),
    Rt = new Map(),
    $e = new Set(),
    Et = new Map(),
    rr = new Map(),
    rx = new Map(),
    $s;
  function ix() {
    if (
      ((p = e.history.listen((T) => {
        let { action: j, location: L, delta: D } = T;
        if ($s) {
          $s(), ($s = void 0);
          return;
        }
        Mr(
          rr.size === 0 || D != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let B = pf({
          currentLocation: w.location,
          nextLocation: L,
          historyAction: j,
        });
        if (B && D != null) {
          let W = new Promise((Y) => {
            $s = Y;
          });
          e.history.go(D * -1),
            Gs(B, {
              state: "blocked",
              location: L,
              proceed() {
                Gs(B, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: L,
                }),
                  W.then(() => e.history.go(D));
              },
              reset() {
                let Y = new Map(w.blockers);
                Y.set(B, _i), et({ blockers: Y });
              },
            });
          return;
        }
        return ir(j, L);
      })),
      n)
    ) {
      W1(t, V);
      let T = () => q1(t, V);
      t.addEventListener("pagehide", T),
        (G = () => t.removeEventListener("pagehide", T));
    }
    return w.initialized || ir(Re.Pop, w.location, { initialHydration: !0 }), A;
  }
  function sx() {
    p && p(),
      G && G(),
      h.clear(),
      R && R.abort(),
      w.fetchers.forEach((T, j) => Hs(j)),
      w.blockers.forEach((T, j) => ff(j));
  }
  function ox(T) {
    return h.add(T), () => h.delete(T);
  }
  function et(T, j) {
    j === void 0 && (j = {}), (w = Ee({}, w, T));
    let L = [],
      D = [];
    d.v7_fetcherPersist &&
      w.fetchers.forEach((B, W) => {
        B.state === "idle" && ($e.has(W) ? D.push(W) : L.push(W));
      }),
      [...h].forEach((B) =>
        B(w, {
          deletedFetchers: D,
          unstable_viewTransitionOpts: j.viewTransitionOpts,
          unstable_flushSync: j.flushSync === !0,
        })
      ),
      d.v7_fetcherPersist &&
        (L.forEach((B) => w.fetchers.delete(B)), D.forEach((B) => Hs(B)));
  }
  function Ir(T, j, L) {
    var D, B;
    let { flushSync: W } = L === void 0 ? {} : L,
      Y =
        w.actionData != null &&
        w.navigation.formMethod != null &&
        Ot(w.navigation.formMethod) &&
        w.navigation.state === "loading" &&
        ((D = T.state) == null ? void 0 : D._isRedirect) !== !0,
      F;
    j.actionData
      ? Object.keys(j.actionData).length > 0
        ? (F = j.actionData)
        : (F = null)
      : Y
      ? (F = w.actionData)
      : (F = null);
    let q = j.loaderData
        ? _p(w.loaderData, j.loaderData, j.matches || [], j.errors)
        : w.loaderData,
      $ = w.blockers;
    $.size > 0 && (($ = new Map($)), $.forEach((ae, me) => $.set(me, _i)));
    let H =
      M === !0 ||
      (w.navigation.formMethod != null &&
        Ot(w.navigation.formMethod) &&
        ((B = T.state) == null ? void 0 : B._isRedirect) !== !0);
    l && ((o = l), (l = void 0)),
      X ||
        k === Re.Pop ||
        (k === Re.Push
          ? e.history.push(T, T.state)
          : k === Re.Replace && e.history.replace(T, T.state));
    let oe;
    if (k === Re.Pop) {
      let ae = V.get(w.location.pathname);
      ae && ae.has(T.pathname)
        ? (oe = { currentLocation: w.location, nextLocation: T })
        : V.has(T.pathname) &&
          (oe = { currentLocation: T, nextLocation: w.location });
    } else if (_) {
      let ae = V.get(w.location.pathname);
      ae
        ? ae.add(T.pathname)
        : ((ae = new Set([T.pathname])), V.set(w.location.pathname, ae)),
        (oe = { currentLocation: w.location, nextLocation: T });
    }
    et(
      Ee({}, j, {
        actionData: F,
        loaderData: q,
        historyAction: k,
        location: T,
        initialized: !0,
        navigation: Rl,
        revalidation: "idle",
        restoreScrollPosition: mf(T, j.matches || w.matches),
        preventScrollReset: H,
        blockers: $,
      }),
      { viewTransitionOpts: oe, flushSync: W === !0 }
    ),
      (k = Re.Pop),
      (M = !1),
      (_ = !1),
      (X = !1),
      (de = !1),
      (ne = []);
  }
  async function sf(T, j) {
    if (typeof T == "number") {
      e.history.go(T);
      return;
    }
    let L = Ku(
        w.location,
        w.matches,
        a,
        d.v7_prependBasename,
        T,
        d.v7_relativeSplatPath,
        j == null ? void 0 : j.fromRouteId,
        j == null ? void 0 : j.relative
      ),
      {
        path: D,
        submission: B,
        error: W,
      } = bp(d.v7_normalizeFormMethod, !1, L, j),
      Y = w.location,
      F = js(w.location, D, j && j.state);
    F = Ee({}, F, e.history.encodeLocation(F));
    let q = j && j.replace != null ? j.replace : void 0,
      $ = Re.Push;
    q === !0
      ? ($ = Re.Replace)
      : q === !1 ||
        (B != null &&
          Ot(B.formMethod) &&
          B.formAction === w.location.pathname + w.location.search &&
          ($ = Re.Replace));
    let H =
        j && "preventScrollReset" in j ? j.preventScrollReset === !0 : void 0,
      oe = (j && j.unstable_flushSync) === !0,
      ae = pf({ currentLocation: Y, nextLocation: F, historyAction: $ });
    if (ae) {
      Gs(ae, {
        state: "blocked",
        location: F,
        proceed() {
          Gs(ae, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            sf(T, j);
        },
        reset() {
          let me = new Map(w.blockers);
          me.set(ae, _i), et({ blockers: me });
        },
      });
      return;
    }
    return await ir($, F, {
      submission: B,
      pendingError: W,
      preventScrollReset: H,
      replace: j && j.replace,
      enableViewTransition: j && j.unstable_viewTransition,
      flushSync: oe,
    });
  }
  function ax() {
    if (
      (nl(),
      et({ revalidation: "loading" }),
      w.navigation.state !== "submitting")
    ) {
      if (w.navigation.state === "idle") {
        ir(w.historyAction, w.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ir(k || w.historyAction, w.navigation.location, {
        overrideNavigation: w.navigation,
        enableViewTransition: _ === !0,
      });
    }
  }
  async function ir(T, j, L) {
    R && R.abort(),
      (R = null),
      (k = T),
      (X = (L && L.startUninterruptedRevalidation) === !0),
      vx(w.location, w.matches),
      (M = (L && L.preventScrollReset) === !0),
      (_ = (L && L.enableViewTransition) === !0);
    let D = l || o,
      B = L && L.overrideNavigation,
      W = fr(D, j, a),
      Y = (L && L.flushSync) === !0,
      F = qs(W, D, j.pathname);
    if ((F.active && F.matches && (W = F.matches), !W)) {
      let { error: ie, notFoundMatches: _e, route: be } = rl(j.pathname);
      Ir(
        j,
        { matches: _e, loaderData: {}, errors: { [be.id]: ie } },
        { flushSync: Y }
      );
      return;
    }
    if (
      w.initialized &&
      !de &&
      _1(w.location, j) &&
      !(L && L.submission && Ot(L.submission.formMethod))
    ) {
      Ir(j, { matches: W }, { flushSync: Y });
      return;
    }
    R = new AbortController();
    let q = Vr(e.history, j, R.signal, L && L.submission),
      $;
    if (L && L.pendingError)
      $ = [Qr(W).route.id, { type: fe.error, error: L.pendingError }];
    else if (L && L.submission && Ot(L.submission.formMethod)) {
      let ie = await lx(q, j, L.submission, W, F.active, {
        replace: L.replace,
        flushSync: Y,
      });
      if (ie.shortCircuited) return;
      if (ie.pendingActionResult) {
        let [_e, be] = ie.pendingActionResult;
        if (pt(be) && Ga(be.error) && be.error.status === 404) {
          (R = null),
            Ir(j, {
              matches: ie.matches,
              loaderData: {},
              errors: { [_e]: be.error },
            });
          return;
        }
      }
      (W = ie.matches || W),
        ($ = ie.pendingActionResult),
        (B = Al(j, L.submission)),
        (Y = !1),
        (F.active = !1),
        (q = Vr(e.history, q.url, q.signal));
    }
    let {
      shortCircuited: H,
      matches: oe,
      loaderData: ae,
      errors: me,
    } = await ux(
      q,
      j,
      W,
      F.active,
      B,
      L && L.submission,
      L && L.fetcherSubmission,
      L && L.replace,
      L && L.initialHydration === !0,
      Y,
      $
    );
    H ||
      ((R = null),
      Ir(j, Ee({ matches: oe || W }, Vp($), { loaderData: ae, errors: me })));
  }
  async function lx(T, j, L, D, B, W) {
    W === void 0 && (W = {}), nl();
    let Y = H1(j, L);
    if ((et({ navigation: Y }, { flushSync: W.flushSync === !0 }), B)) {
      let $ = await Ks(D, j.pathname, T.signal);
      if ($.type === "aborted") return { shortCircuited: !0 };
      if ($.type === "error") {
        let { boundaryId: H, error: oe } = Ws(j.pathname, $);
        return {
          matches: $.partialMatches,
          pendingActionResult: [H, { type: fe.error, error: oe }],
        };
      } else if ($.matches) D = $.matches;
      else {
        let { notFoundMatches: H, error: oe, route: ae } = rl(j.pathname);
        return {
          matches: H,
          pendingActionResult: [ae.id, { type: fe.error, error: oe }],
        };
      }
    }
    let F,
      q = Wi(D, j);
    if (!q.route.action && !q.route.lazy)
      F = {
        type: fe.error,
        error: tt(405, {
          method: T.method,
          pathname: j.pathname,
          routeId: q.route.id,
        }),
      };
    else if (
      ((F = (await Mi("action", w, T, [q], D, null))[q.route.id]),
      T.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (gr(F)) {
      let $;
      return (
        W && W.replace != null
          ? ($ = W.replace)
          : ($ =
              Dp(F.response.headers.get("Location"), new URL(T.url), a) ===
              w.location.pathname + w.location.search),
        await sr(T, F, !0, { submission: L, replace: $ }),
        { shortCircuited: !0 }
      );
    }
    if (Dn(F)) throw tt(400, { type: "defer-action" });
    if (pt(F)) {
      let $ = Qr(D, q.route.id);
      return (
        (W && W.replace) !== !0 && (k = Re.Push),
        { matches: D, pendingActionResult: [$.route.id, F] }
      );
    }
    return { matches: D, pendingActionResult: [q.route.id, F] };
  }
  async function ux(T, j, L, D, B, W, Y, F, q, $, H) {
    let oe = B || Al(j, W),
      ae = W || Y || Bp(oe),
      me = !X && (!d.v7_partialHydration || !q);
    if (D) {
      if (me) {
        let je = of(H);
        et(Ee({ navigation: oe }, je !== void 0 ? { actionData: je } : {}), {
          flushSync: $,
        });
      }
      let Q = await Ks(L, j.pathname, T.signal);
      if (Q.type === "aborted") return { shortCircuited: !0 };
      if (Q.type === "error") {
        let { boundaryId: je, error: dt } = Ws(j.pathname, Q);
        return {
          matches: Q.partialMatches,
          loaderData: {},
          errors: { [je]: dt },
        };
      } else if (Q.matches) L = Q.matches;
      else {
        let { error: je, notFoundMatches: dt, route: Me } = rl(j.pathname);
        return { matches: dt, loaderData: {}, errors: { [Me.id]: je } };
      }
    }
    let ie = l || o,
      [_e, be] = Rp(
        e.history,
        w,
        L,
        ae,
        j,
        d.v7_partialHydration && q === !0,
        d.v7_skipActionErrorRevalidation,
        de,
        ne,
        b,
        $e,
        Ue,
        Be,
        ie,
        a,
        H
      );
    if (
      (il(
        (Q) =>
          !(L && L.some((je) => je.route.id === Q)) ||
          (_e && _e.some((je) => je.route.id === Q))
      ),
      (Z = ++z),
      _e.length === 0 && be.length === 0)
    ) {
      let Q = cf();
      return (
        Ir(
          j,
          Ee(
            {
              matches: L,
              loaderData: {},
              errors: H && pt(H[1]) ? { [H[0]]: H[1].error } : null,
            },
            Vp(H),
            Q ? { fetchers: new Map(w.fetchers) } : {}
          ),
          { flushSync: $ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (me) {
      let Q = {};
      if (!D) {
        Q.navigation = oe;
        let je = of(H);
        je !== void 0 && (Q.actionData = je);
      }
      be.length > 0 && (Q.fetchers = cx(be)), et(Q, { flushSync: $ });
    }
    be.forEach((Q) => {
      I.has(Q.key) && Tn(Q.key), Q.controller && I.set(Q.key, Q.controller);
    });
    let Ni = () => be.forEach((Q) => Tn(Q.key));
    R && R.signal.addEventListener("abort", Ni);
    let { loaderResults: Jt, fetcherResults: Or } = await af(w, L, _e, be, T);
    if (T.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener("abort", Ni),
      be.forEach((Q) => I.delete(Q.key));
    let Pn = vo(Jt);
    if (Pn)
      return await sr(T, Pn.result, !0, { replace: F }), { shortCircuited: !0 };
    if (((Pn = vo(Or)), Pn))
      return (
        Be.add(Pn.key),
        await sr(T, Pn.result, !0, { replace: F }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ys, errors: en } = Op(w, L, _e, Jt, H, be, Or, Et);
    Et.forEach((Q, je) => {
      Q.subscribe((dt) => {
        (dt || Q.done) && Et.delete(je);
      });
    }),
      d.v7_partialHydration &&
        q &&
        w.errors &&
        Object.entries(w.errors)
          .filter((Q) => {
            let [je] = Q;
            return !_e.some((dt) => dt.route.id === je);
          })
          .forEach((Q) => {
            let [je, dt] = Q;
            en = Object.assign(en || {}, { [je]: dt });
          });
    let Xs = cf(),
      Qs = df(Z),
      Zs = Xs || Qs || be.length > 0;
    return Ee(
      { matches: L, loaderData: Ys, errors: en },
      Zs ? { fetchers: new Map(w.fetchers) } : {}
    );
  }
  function of(T) {
    if (T && !pt(T[1])) return { [T[0]]: T[1].data };
    if (w.actionData)
      return Object.keys(w.actionData).length === 0 ? null : w.actionData;
  }
  function cx(T) {
    return (
      T.forEach((j) => {
        let L = w.fetchers.get(j.key),
          D = Vi(void 0, L ? L.data : void 0);
        w.fetchers.set(j.key, D);
      }),
      new Map(w.fetchers)
    );
  }
  function dx(T, j, L, D) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    I.has(T) && Tn(T);
    let B = (D && D.unstable_flushSync) === !0,
      W = l || o,
      Y = Ku(
        w.location,
        w.matches,
        a,
        d.v7_prependBasename,
        L,
        d.v7_relativeSplatPath,
        j,
        D == null ? void 0 : D.relative
      ),
      F = fr(W, Y, a),
      q = qs(F, W, Y);
    if ((q.active && q.matches && (F = q.matches), !F)) {
      Zt(T, j, tt(404, { pathname: Y }), { flushSync: B });
      return;
    }
    let {
      path: $,
      submission: H,
      error: oe,
    } = bp(d.v7_normalizeFormMethod, !0, Y, D);
    if (oe) {
      Zt(T, j, oe, { flushSync: B });
      return;
    }
    let ae = Wi(F, $);
    if (((M = (D && D.preventScrollReset) === !0), H && Ot(H.formMethod))) {
      fx(T, j, $, ae, F, q.active, B, H);
      return;
    }
    Ue.set(T, { routeId: j, path: $ }), px(T, j, $, ae, F, q.active, B, H);
  }
  async function fx(T, j, L, D, B, W, Y, F) {
    nl(), Ue.delete(T);
    function q(Me) {
      if (!Me.route.action && !Me.route.lazy) {
        let tn = tt(405, { method: F.formMethod, pathname: L, routeId: j });
        return Zt(T, j, tn, { flushSync: Y }), !0;
      }
      return !1;
    }
    if (!W && q(D)) return;
    let $ = w.fetchers.get(T);
    En(T, G1(F, $), { flushSync: Y });
    let H = new AbortController(),
      oe = Vr(e.history, L, H.signal, F);
    if (W) {
      let Me = await Ks(B, L, oe.signal);
      if (Me.type === "aborted") return;
      if (Me.type === "error") {
        let { error: tn } = Ws(L, Me);
        Zt(T, j, tn, { flushSync: Y });
        return;
      } else if (Me.matches) {
        if (((B = Me.matches), (D = Wi(B, L)), q(D))) return;
      } else {
        Zt(T, j, tt(404, { pathname: L }), { flushSync: Y });
        return;
      }
    }
    I.set(T, H);
    let ae = z,
      ie = (await Mi("action", w, oe, [D], B, T))[D.route.id];
    if (oe.signal.aborted) {
      I.get(T) === H && I.delete(T);
      return;
    }
    if (d.v7_fetcherPersist && $e.has(T)) {
      if (gr(ie) || pt(ie)) {
        En(T, jn(void 0));
        return;
      }
    } else {
      if (gr(ie))
        if ((I.delete(T), Z > ae)) {
          En(T, jn(void 0));
          return;
        } else
          return (
            Be.add(T), En(T, Vi(F)), sr(oe, ie, !1, { fetcherSubmission: F })
          );
      if (pt(ie)) {
        Zt(T, j, ie.error);
        return;
      }
    }
    if (Dn(ie)) throw tt(400, { type: "defer-action" });
    let _e = w.navigation.location || w.location,
      be = Vr(e.history, _e, H.signal),
      Ni = l || o,
      Jt =
        w.navigation.state !== "idle"
          ? fr(Ni, w.navigation.location, a)
          : w.matches;
    ee(Jt, "Didn't find any matches after fetcher action");
    let Or = ++z;
    re.set(T, Or);
    let Pn = Vi(F, ie.data);
    w.fetchers.set(T, Pn);
    let [Ys, en] = Rp(
      e.history,
      w,
      Jt,
      F,
      _e,
      !1,
      d.v7_skipActionErrorRevalidation,
      de,
      ne,
      b,
      $e,
      Ue,
      Be,
      Ni,
      a,
      [D.route.id, ie]
    );
    en
      .filter((Me) => Me.key !== T)
      .forEach((Me) => {
        let tn = Me.key,
          vf = w.fetchers.get(tn),
          wx = Vi(void 0, vf ? vf.data : void 0);
        w.fetchers.set(tn, wx),
          I.has(tn) && Tn(tn),
          Me.controller && I.set(tn, Me.controller);
      }),
      et({ fetchers: new Map(w.fetchers) });
    let Xs = () => en.forEach((Me) => Tn(Me.key));
    H.signal.addEventListener("abort", Xs);
    let { loaderResults: Qs, fetcherResults: Zs } = await af(w, Jt, Ys, en, be);
    if (H.signal.aborted) return;
    H.signal.removeEventListener("abort", Xs),
      re.delete(T),
      I.delete(T),
      en.forEach((Me) => I.delete(Me.key));
    let Q = vo(Qs);
    if (Q) return sr(be, Q.result, !1);
    if (((Q = vo(Zs)), Q)) return Be.add(Q.key), sr(be, Q.result, !1);
    let { loaderData: je, errors: dt } = Op(w, Jt, Ys, Qs, void 0, en, Zs, Et);
    if (w.fetchers.has(T)) {
      let Me = jn(ie.data);
      w.fetchers.set(T, Me);
    }
    df(Or),
      w.navigation.state === "loading" && Or > Z
        ? (ee(k, "Expected pending action"),
          R && R.abort(),
          Ir(w.navigation.location, {
            matches: Jt,
            loaderData: je,
            errors: dt,
            fetchers: new Map(w.fetchers),
          }))
        : (et({
            errors: dt,
            loaderData: _p(w.loaderData, je, Jt, dt),
            fetchers: new Map(w.fetchers),
          }),
          (de = !1));
  }
  async function px(T, j, L, D, B, W, Y, F) {
    let q = w.fetchers.get(T);
    En(T, Vi(F, q ? q.data : void 0), { flushSync: Y });
    let $ = new AbortController(),
      H = Vr(e.history, L, $.signal);
    if (W) {
      let ie = await Ks(B, L, H.signal);
      if (ie.type === "aborted") return;
      if (ie.type === "error") {
        let { error: _e } = Ws(L, ie);
        Zt(T, j, _e, { flushSync: Y });
        return;
      } else if (ie.matches) (B = ie.matches), (D = Wi(B, L));
      else {
        Zt(T, j, tt(404, { pathname: L }), { flushSync: Y });
        return;
      }
    }
    I.set(T, $);
    let oe = z,
      me = (await Mi("loader", w, H, [D], B, T))[D.route.id];
    if (
      (Dn(me) && (me = (await gd(me, H.signal, !0)) || me),
      I.get(T) === $ && I.delete(T),
      !H.signal.aborted)
    ) {
      if ($e.has(T)) {
        En(T, jn(void 0));
        return;
      }
      if (gr(me))
        if (Z > oe) {
          En(T, jn(void 0));
          return;
        } else {
          Be.add(T), await sr(H, me, !1);
          return;
        }
      if (pt(me)) {
        Zt(T, j, me.error);
        return;
      }
      ee(!Dn(me), "Unhandled fetcher deferred data"), En(T, jn(me.data));
    }
  }
  async function sr(T, j, L, D) {
    let {
      submission: B,
      fetcherSubmission: W,
      replace: Y,
    } = D === void 0 ? {} : D;
    j.response.headers.has("X-Remix-Revalidate") && (de = !0);
    let F = j.response.headers.get("Location");
    ee(F, "Expected a Location header on the redirect Response"),
      (F = Dp(F, new URL(T.url), a));
    let q = js(w.location, F, { _isRedirect: !0 });
    if (n) {
      let ie = !1;
      if (j.response.headers.has("X-Remix-Reload-Document")) ie = !0;
      else if (md.test(F)) {
        const _e = e.history.createURL(F);
        ie = _e.origin !== t.location.origin || Ci(_e.pathname, a) == null;
      }
      if (ie) {
        Y ? t.location.replace(F) : t.location.assign(F);
        return;
      }
    }
    R = null;
    let $ =
        Y === !0 || j.response.headers.has("X-Remix-Replace")
          ? Re.Replace
          : Re.Push,
      { formMethod: H, formAction: oe, formEncType: ae } = w.navigation;
    !B && !W && H && oe && ae && (B = Bp(w.navigation));
    let me = B || W;
    if (E1.has(j.response.status) && me && Ot(me.formMethod))
      await ir($, q, {
        submission: Ee({}, me, { formAction: F }),
        preventScrollReset: M,
        enableViewTransition: L ? _ : void 0,
      });
    else {
      let ie = Al(q, B);
      await ir($, q, {
        overrideNavigation: ie,
        fetcherSubmission: W,
        preventScrollReset: M,
        enableViewTransition: L ? _ : void 0,
      });
    }
  }
  async function Mi(T, j, L, D, B, W) {
    let Y,
      F = {};
    try {
      Y = await R1(u, T, j, L, D, B, W, s, i);
    } catch (q) {
      return (
        D.forEach(($) => {
          F[$.route.id] = { type: fe.error, error: q };
        }),
        F
      );
    }
    for (let [q, $] of Object.entries(Y))
      if (F1($)) {
        let H = $.result;
        F[q] = {
          type: fe.redirect,
          response: I1(H, L, q, B, a, d.v7_relativeSplatPath),
        };
      } else F[q] = await D1($);
    return F;
  }
  async function af(T, j, L, D, B) {
    let W = T.matches,
      Y = Mi("loader", T, B, L, j, null),
      F = Promise.all(
        D.map(async (H) => {
          if (H.matches && H.match && H.controller) {
            let ae = (
              await Mi(
                "loader",
                T,
                Vr(e.history, H.path, H.controller.signal),
                [H.match],
                H.matches,
                H.key
              )
            )[H.match.route.id];
            return { [H.key]: ae };
          } else
            return Promise.resolve({
              [H.key]: { type: fe.error, error: tt(404, { pathname: H.path }) },
            });
        })
      ),
      q = await Y,
      $ = (await F).reduce((H, oe) => Object.assign(H, oe), {});
    return (
      await Promise.all([U1(j, q, B.signal, W, T.loaderData), $1(j, $, D)]),
      { loaderResults: q, fetcherResults: $ }
    );
  }
  function nl() {
    (de = !0),
      ne.push(...il()),
      Ue.forEach((T, j) => {
        I.has(j) && (b.add(j), Tn(j));
      });
  }
  function En(T, j, L) {
    L === void 0 && (L = {}),
      w.fetchers.set(T, j),
      et(
        { fetchers: new Map(w.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      );
  }
  function Zt(T, j, L, D) {
    D === void 0 && (D = {});
    let B = Qr(w.matches, j);
    Hs(T),
      et(
        { errors: { [B.route.id]: L }, fetchers: new Map(w.fetchers) },
        { flushSync: (D && D.flushSync) === !0 }
      );
  }
  function lf(T) {
    return (
      d.v7_fetcherPersist &&
        (Rt.set(T, (Rt.get(T) || 0) + 1), $e.has(T) && $e.delete(T)),
      w.fetchers.get(T) || T1
    );
  }
  function Hs(T) {
    let j = w.fetchers.get(T);
    I.has(T) && !(j && j.state === "loading" && re.has(T)) && Tn(T),
      Ue.delete(T),
      re.delete(T),
      Be.delete(T),
      $e.delete(T),
      b.delete(T),
      w.fetchers.delete(T);
  }
  function hx(T) {
    if (d.v7_fetcherPersist) {
      let j = (Rt.get(T) || 0) - 1;
      j <= 0 ? (Rt.delete(T), $e.add(T)) : Rt.set(T, j);
    } else Hs(T);
    et({ fetchers: new Map(w.fetchers) });
  }
  function Tn(T) {
    let j = I.get(T);
    ee(j, "Expected fetch controller: " + T), j.abort(), I.delete(T);
  }
  function uf(T) {
    for (let j of T) {
      let L = lf(j),
        D = jn(L.data);
      w.fetchers.set(j, D);
    }
  }
  function cf() {
    let T = [],
      j = !1;
    for (let L of Be) {
      let D = w.fetchers.get(L);
      ee(D, "Expected fetcher: " + L),
        D.state === "loading" && (Be.delete(L), T.push(L), (j = !0));
    }
    return uf(T), j;
  }
  function df(T) {
    let j = [];
    for (let [L, D] of re)
      if (D < T) {
        let B = w.fetchers.get(L);
        ee(B, "Expected fetcher: " + L),
          B.state === "loading" && (Tn(L), re.delete(L), j.push(L));
      }
    return uf(j), j.length > 0;
  }
  function mx(T, j) {
    let L = w.blockers.get(T) || _i;
    return rr.get(T) !== j && rr.set(T, j), L;
  }
  function ff(T) {
    w.blockers.delete(T), rr.delete(T);
  }
  function Gs(T, j) {
    let L = w.blockers.get(T) || _i;
    ee(
      (L.state === "unblocked" && j.state === "blocked") ||
        (L.state === "blocked" && j.state === "blocked") ||
        (L.state === "blocked" && j.state === "proceeding") ||
        (L.state === "blocked" && j.state === "unblocked") ||
        (L.state === "proceeding" && j.state === "unblocked"),
      "Invalid blocker state transition: " + L.state + " -> " + j.state
    );
    let D = new Map(w.blockers);
    D.set(T, j), et({ blockers: D });
  }
  function pf(T) {
    let { currentLocation: j, nextLocation: L, historyAction: D } = T;
    if (rr.size === 0) return;
    rr.size > 1 && Mr(!1, "A router only supports one blocker at a time");
    let B = Array.from(rr.entries()),
      [W, Y] = B[B.length - 1],
      F = w.blockers.get(W);
    if (
      !(F && F.state === "proceeding") &&
      Y({ currentLocation: j, nextLocation: L, historyAction: D })
    )
      return W;
  }
  function rl(T) {
    let j = tt(404, { pathname: T }),
      L = l || o,
      { matches: D, route: B } = Fp(L);
    return il(), { notFoundMatches: D, route: B, error: j };
  }
  function Ws(T, j) {
    return {
      boundaryId: Qr(j.partialMatches).route.id,
      error: tt(400, {
        type: "route-discovery",
        pathname: T,
        message:
          j.error != null && "message" in j.error ? j.error : String(j.error),
      }),
    };
  }
  function il(T) {
    let j = [];
    return (
      Et.forEach((L, D) => {
        (!T || T(D)) && (L.cancel(), j.push(D), Et.delete(D));
      }),
      j
    );
  }
  function gx(T, j, L) {
    if (((S = T), (g = j), (m = L || null), !v && w.navigation === Rl)) {
      v = !0;
      let D = mf(w.location, w.matches);
      D != null && et({ restoreScrollPosition: D });
    }
    return () => {
      (S = null), (g = null), (m = null);
    };
  }
  function hf(T, j) {
    return (
      (m &&
        m(
          T,
          j.map((D) => e1(D, w.loaderData))
        )) ||
      T.key
    );
  }
  function vx(T, j) {
    if (S && g) {
      let L = hf(T, j);
      S[L] = g();
    }
  }
  function mf(T, j) {
    if (S) {
      let L = hf(T, j),
        D = S[L];
      if (typeof D == "number") return D;
    }
    return null;
  }
  function qs(T, j, L) {
    if (c) {
      if (x.has(L)) return { active: !1, matches: T };
      if (T) {
        if (Object.keys(T[0].params).length > 0)
          return { active: !0, matches: _o(j, L, a, !0) };
      } else return { active: !0, matches: _o(j, L, a, !0) || [] };
    }
    return { active: !1, matches: null };
  }
  async function Ks(T, j, L) {
    let D = T;
    for (;;) {
      let B = l == null,
        W = l || o;
      try {
        await L1(c, j, D, W, s, i, rx, L);
      } catch (q) {
        return { type: "error", error: q, partialMatches: D };
      } finally {
        B && (o = [...o]);
      }
      if (L.aborted) return { type: "aborted" };
      let Y = fr(W, j, a);
      if (Y) return gf(j, x), { type: "success", matches: Y };
      let F = _o(W, j, a, !0);
      if (
        !F ||
        (D.length === F.length &&
          D.every((q, $) => q.route.id === F[$].route.id))
      )
        return gf(j, x), { type: "success", matches: null };
      D = F;
    }
  }
  function gf(T, j) {
    if (j.size >= y) {
      let L = j.values().next().value;
      j.delete(L);
    }
    j.add(T);
  }
  function yx(T) {
    (s = {}), (l = Ms(T, i, void 0, s));
  }
  function xx(T, j) {
    let L = l == null;
    Gv(T, j, l || o, s, i), L && ((o = [...o]), et({}));
  }
  return (
    (A = {
      get basename() {
        return a;
      },
      get future() {
        return d;
      },
      get state() {
        return w;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: ix,
      subscribe: ox,
      enableScrollRestoration: gx,
      navigate: sf,
      fetch: dx,
      revalidate: ax,
      createHref: (T) => e.history.createHref(T),
      encodeLocation: (T) => e.history.encodeLocation(T),
      getFetcher: lf,
      deleteFetcher: hx,
      dispose: sx,
      getBlocker: mx,
      deleteBlocker: ff,
      patchRoutes: xx,
      _internalFetchControllers: I,
      _internalActiveDeferreds: Et,
      _internalSetRoutes: yx,
    }),
    A
  );
}
function j1(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Ku(e, t, n, r, i, s, o, l) {
  let a, u;
  if (o) {
    a = [];
    for (let d of t)
      if ((a.push(d), d.route.id === o)) {
        u = d;
        break;
      }
  } else (a = t), (u = t[t.length - 1]);
  let c = hd(i || ".", pd(a, s), Ci(e.pathname, n) || e.pathname, l === "path");
  return (
    i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !vd(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : dn([n, c.pathname])),
    Nr(c)
  );
}
function bp(e, t, n, r) {
  if (!r || !j1(r)) return { path: n };
  if (r.formMethod && !B1(r.formMethod))
    return { path: n, error: tt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: tt(400, { type: "invalid-body" }) }),
    s = r.formMethod || "get",
    o = e ? s.toUpperCase() : s.toLowerCase(),
    l = Wv(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Ot(o)) return i();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((h, y) => {
              let [x, S] = y;
              return (
                "" +
                h +
                x +
                "=" +
                S +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Ot(o)) return i();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  ee(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, u;
  if (r.formData) (a = Yu(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (a = Yu(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (u = Ip(a));
  else if (r.body == null) (a = new URLSearchParams()), (u = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (u = Ip(a));
    } catch {
      return i();
    }
  let c = {
    formMethod: o,
    formAction: l,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Ot(c.formMethod)) return { path: n, submission: c };
  let d = Sn(n);
  return (
    t && d.search && vd(d.search) && a.append("index", ""),
    (d.search = "?" + a),
    { path: Nr(d), submission: c }
  );
}
function M1(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Rp(e, t, n, r, i, s, o, l, a, u, c, d, p, h, y, x) {
  let S = x ? (pt(x[1]) ? x[1].error : x[1].data) : void 0,
    m = e.createURL(t.location),
    g = e.createURL(i),
    v = x && pt(x[1]) ? x[0] : void 0,
    E = v ? M1(n, v) : n,
    C = x ? x[1].statusCode : void 0,
    N = o && C && C >= 400,
    A = E.filter((k, M) => {
      let { route: R } = k;
      if (R.lazy) return !0;
      if (R.loader == null) return !1;
      if (s)
        return typeof R.loader != "function" || R.loader.hydrate
          ? !0
          : t.loaderData[R.id] === void 0 &&
              (!t.errors || t.errors[R.id] === void 0);
      if (N1(t.loaderData, t.matches[M], k) || a.some((G) => G === k.route.id))
        return !0;
      let _ = t.matches[M],
        V = k;
      return Ap(
        k,
        Ee(
          {
            currentUrl: m,
            currentParams: _.params,
            nextUrl: g,
            nextParams: V.params,
          },
          r,
          {
            actionResult: S,
            actionStatus: C,
            defaultShouldRevalidate: N
              ? !1
              : l ||
                m.pathname + m.search === g.pathname + g.search ||
                m.search !== g.search ||
                Hv(_, V),
          }
        )
      );
    }),
    w = [];
  return (
    d.forEach((k, M) => {
      if (s || !n.some((X) => X.route.id === k.routeId) || c.has(M)) return;
      let R = fr(h, k.path, y);
      if (!R) {
        w.push({
          key: M,
          routeId: k.routeId,
          path: k.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let _ = t.fetchers.get(M),
        V = Wi(R, k.path),
        G = !1;
      p.has(M)
        ? (G = !1)
        : u.has(M)
        ? (u.delete(M), (G = !0))
        : _ && _.state !== "idle" && _.data === void 0
        ? (G = l)
        : (G = Ap(
            V,
            Ee(
              {
                currentUrl: m,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: g,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: S,
                actionStatus: C,
                defaultShouldRevalidate: N ? !1 : l,
              }
            )
          )),
        G &&
          w.push({
            key: M,
            routeId: k.routeId,
            path: k.path,
            matches: R,
            match: V,
            controller: new AbortController(),
          });
    }),
    [A, w]
  );
}
function N1(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Hv(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Ap(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function L1(e, t, n, r, i, s, o, l) {
  let a = [t, ...n.map((u) => u.route.id)].join("-");
  try {
    let u = o.get(a);
    u ||
      ((u = e({
        path: t,
        matches: n,
        patch: (c, d) => {
          l.aborted || Gv(c, d, r, i, s);
        },
      })),
      o.set(a, u)),
      u && V1(u) && (await u);
  } finally {
    o.delete(a);
  }
}
function Gv(e, t, n, r, i) {
  if (e) {
    var s;
    let o = r[e];
    ee(o, "No route found to patch children into: routeId = " + e);
    let l = Ms(
      t,
      i,
      [
        e,
        "patch",
        String(((s = o.children) == null ? void 0 : s.length) || "0"),
      ],
      r
    );
    o.children ? o.children.push(...l) : (o.children = l);
  } else {
    let o = Ms(t, i, ["patch", String(n.length || "0")], r);
    n.push(...o);
  }
}
async function k1(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  ee(i, "No route found in manifest");
  let s = {};
  for (let o in r) {
    let a = i[o] !== void 0 && o !== "hasErrorBoundary";
    Mr(
      !a,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !a && !ZS.has(o) && (s[o] = r[o]);
  }
  Object.assign(i, s), Object.assign(i, Ee({}, t(i), { lazy: void 0 }));
}
async function b1(e) {
  let { matches: t } = e,
    n = t.filter((i) => i.shouldLoad);
  return (await Promise.all(n.map((i) => i.resolve()))).reduce(
    (i, s, o) => Object.assign(i, { [n[o].route.id]: s }),
    {}
  );
}
async function R1(e, t, n, r, i, s, o, l, a, u) {
  let c = s.map((h) => (h.route.lazy ? k1(h.route, a, l) : void 0)),
    d = s.map((h, y) => {
      let x = c[y],
        S = i.some((g) => g.route.id === h.route.id);
      return Ee({}, h, {
        shouldLoad: S,
        resolve: async (g) => (
          g &&
            r.method === "GET" &&
            (h.route.lazy || h.route.loader) &&
            (S = !0),
          S
            ? A1(t, r, h, x, g, u)
            : Promise.resolve({ type: fe.data, result: void 0 })
        ),
      });
    }),
    p = await e({
      matches: d,
      request: r,
      params: s[0].params,
      fetcherKey: o,
      context: u,
    });
  try {
    await Promise.all(c);
  } catch {}
  return p;
}
async function A1(e, t, n, r, i, s) {
  let o,
    l,
    a = (u) => {
      let c,
        d = new Promise((y, x) => (c = x));
      (l = () => c()), t.signal.addEventListener("abort", l);
      let p = (y) =>
          typeof u != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : u(
                { request: t, params: n.params, context: s },
                ...(y !== void 0 ? [y] : [])
              ),
        h = (async () => {
          try {
            return { type: "data", result: await (i ? i((x) => p(x)) : p()) };
          } catch (y) {
            return { type: "error", result: y };
          }
        })();
      return Promise.race([h, d]);
    };
  try {
    let u = n.route[e];
    if (r)
      if (u) {
        let c,
          [d] = await Promise.all([
            a(u).catch((p) => {
              c = p;
            }),
            r,
          ]);
        if (c !== void 0) throw c;
        o = d;
      } else if ((await r, (u = n.route[e]), u)) o = await a(u);
      else if (e === "action") {
        let c = new URL(t.url),
          d = c.pathname + c.search;
        throw tt(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: fe.data, result: void 0 };
    else if (u) o = await a(u);
    else {
      let c = new URL(t.url),
        d = c.pathname + c.search;
      throw tt(404, { pathname: d });
    }
    ee(
      o.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (u) {
    return { type: fe.error, result: u };
  } finally {
    l && t.signal.removeEventListener("abort", l);
  }
  return o;
}
async function D1(e) {
  let { result: t, type: n } = e;
  if (qv(t)) {
    let u;
    try {
      let c = t.headers.get("Content-Type");
      c && /\bapplication\/json\b/.test(c)
        ? t.body == null
          ? (u = null)
          : (u = await t.json())
        : (u = await t.text());
    } catch (c) {
      return { type: fe.error, error: c };
    }
    return n === fe.error
      ? {
          type: fe.error,
          error: new pa(t.status, t.statusText, u),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: fe.data, data: u, statusCode: t.status, headers: t.headers };
  }
  if (n === fe.error) {
    if (zp(t)) {
      var r;
      if (t.data instanceof Error) {
        var i;
        return {
          type: fe.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
        };
      }
      t = new pa(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: fe.error, error: t, statusCode: Ga(t) ? t.status : void 0 };
  }
  if (z1(t)) {
    var s, o;
    return {
      type: fe.deferred,
      deferredData: t,
      statusCode: (s = t.init) == null ? void 0 : s.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (zp(t)) {
    var l, a;
    return {
      type: fe.data,
      data: t.data,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        (a = t.init) != null && a.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: fe.data, data: t };
}
function I1(e, t, n, r, i, s) {
  let o = e.headers.get("Location");
  if (
    (ee(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !md.test(o))
  ) {
    let l = r.slice(0, r.findIndex((a) => a.route.id === n) + 1);
    (o = Ku(new URL(t.url), l, i, !0, o, s)), e.headers.set("Location", o);
  }
  return e;
}
function Dp(e, t, n) {
  if (md.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      s = Ci(i.pathname, n) != null;
    if (i.origin === t.origin && s) return i.pathname + i.search + i.hash;
  }
  return e;
}
function Vr(e, t, n, r) {
  let i = e.createURL(Wv(t)).toString(),
    s = { signal: n };
  if (r && Ot(r.formMethod)) {
    let { formMethod: o, formEncType: l } = r;
    (s.method = o.toUpperCase()),
      l === "application/json"
        ? ((s.headers = new Headers({ "Content-Type": l })),
          (s.body = JSON.stringify(r.json)))
        : l === "text/plain"
        ? (s.body = r.text)
        : l === "application/x-www-form-urlencoded" && r.formData
        ? (s.body = Yu(r.formData))
        : (s.body = r.formData);
  }
  return new Request(i, s);
}
function Yu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ip(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function O1(e, t, n, r, i) {
  let s = {},
    o = null,
    l,
    a = !1,
    u = {},
    c = n && pt(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((d) => {
      if (!(d.route.id in t)) return;
      let p = d.route.id,
        h = t[p];
      if (
        (ee(!gr(h), "Cannot handle redirect results in processLoaderData"),
        pt(h))
      ) {
        let y = h.error;
        c !== void 0 && ((y = c), (c = void 0)), (o = o || {});
        {
          let x = Qr(e, p);
          o[x.route.id] == null && (o[x.route.id] = y);
        }
        (s[p] = void 0),
          a || ((a = !0), (l = Ga(h.error) ? h.error.status : 500)),
          h.headers && (u[p] = h.headers);
      } else
        Dn(h)
          ? (r.set(p, h.deferredData),
            (s[p] = h.deferredData.data),
            h.statusCode != null &&
              h.statusCode !== 200 &&
              !a &&
              (l = h.statusCode),
            h.headers && (u[p] = h.headers))
          : ((s[p] = h.data),
            h.statusCode && h.statusCode !== 200 && !a && (l = h.statusCode),
            h.headers && (u[p] = h.headers));
    }),
    c !== void 0 && n && ((o = { [n[0]]: c }), (s[n[0]] = void 0)),
    { loaderData: s, errors: o, statusCode: l || 200, loaderHeaders: u }
  );
}
function Op(e, t, n, r, i, s, o, l) {
  let { loaderData: a, errors: u } = O1(t, r, i, l);
  return (
    s.forEach((c) => {
      let { key: d, match: p, controller: h } = c,
        y = o[d];
      if (
        (ee(y, "Did not find corresponding fetcher result"),
        !(h && h.signal.aborted))
      )
        if (pt(y)) {
          let x = Qr(e.matches, p == null ? void 0 : p.route.id);
          (u && u[x.route.id]) || (u = Ee({}, u, { [x.route.id]: y.error })),
            e.fetchers.delete(d);
        } else if (gr(y)) ee(!1, "Unhandled fetcher revalidation redirect");
        else if (Dn(y)) ee(!1, "Unhandled fetcher deferred data");
        else {
          let x = jn(y.data);
          e.fetchers.set(d, x);
        }
    }),
    { loaderData: a, errors: u }
  );
}
function _p(e, t, n, r) {
  let i = Ee({}, t);
  for (let s of n) {
    let o = s.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 && s.route.loader && (i[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function Vp(e) {
  return e
    ? pt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Qr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Fp(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function tt(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: s,
      message: o,
    } = t === void 0 ? {} : t,
    l = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((l = "Bad Request"),
        s === "route-discovery"
          ? (a =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnNavigation()` ' +
              (`function threw the following error:
` +
                o))
          : i && n && r
          ? (a =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : s === "defer-action"
          ? (a = "defer() is not supported in actions")
          : s === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((l = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((l = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((l = "Method Not Allowed"),
        i && n && r
          ? (a =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new pa(e || 500, l, new Error(a), !0)
  );
}
function vo(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (gr(i)) return { key: r, result: i };
  }
}
function Wv(e) {
  let t = typeof e == "string" ? Sn(e) : e;
  return Nr(Ee({}, t, { hash: "" }));
}
function _1(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function V1(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function F1(e) {
  return qv(e.result) && S1.has(e.result.status);
}
function Dn(e) {
  return e.type === fe.deferred;
}
function pt(e) {
  return e.type === fe.error;
}
function gr(e) {
  return (e && e.type) === fe.redirect;
}
function zp(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function z1(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function qv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function B1(e) {
  return w1.has(e.toLowerCase());
}
function Ot(e) {
  return y1.has(e.toLowerCase());
}
async function U1(e, t, n, r, i) {
  let s = Object.entries(t);
  for (let o = 0; o < s.length; o++) {
    let [l, a] = s[o],
      u = e.find((p) => (p == null ? void 0 : p.route.id) === l);
    if (!u) continue;
    let c = r.find((p) => p.route.id === u.route.id),
      d = c != null && !Hv(c, u) && (i && i[u.route.id]) !== void 0;
    Dn(a) &&
      d &&
      (await gd(a, n, !1).then((p) => {
        p && (t[l] = p);
      }));
  }
}
async function $1(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: i, routeId: s, controller: o } = n[r],
      l = t[i];
    e.find((u) => (u == null ? void 0 : u.route.id) === s) &&
      Dn(l) &&
      (ee(
        o,
        "Expected an AbortController for revalidating fetcher deferred result"
      ),
      await gd(l, o.signal, !0).then((u) => {
        u && (t[i] = u);
      }));
  }
}
async function gd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: fe.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: fe.error, error: i };
      }
    return { type: fe.data, data: e.deferredData.data };
  }
}
function vd(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Wi(e, t) {
  let n = typeof t == "string" ? Sn(t).search : t.search;
  if (e[e.length - 1].route.index && vd(n || "")) return e[e.length - 1];
  let r = Bv(e);
  return r[r.length - 1];
}
function Bp(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: s,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Al(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function H1(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Vi(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function G1(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function jn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function W1(e, t) {
  try {
    let n = e.sessionStorage.getItem($v);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, s] of Object.entries(r || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch {}
}
function q1(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem($v, JSON.stringify(n));
    } catch (r) {
      Mr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ha() {
  return (
    (ha = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ha.apply(this, arguments)
  );
}
const Wa = P.createContext(null),
  Kv = P.createContext(null),
  Dr = P.createContext(null),
  yd = P.createContext(null),
  Qn = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Yv = P.createContext(null);
function K1(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Fs() || ee(!1);
  let { basename: r, navigator: i } = P.useContext(Dr),
    { hash: s, pathname: o, search: l } = Qv(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : dn([r, o])),
    i.createHref({ pathname: a, search: l, hash: s })
  );
}
function Fs() {
  return P.useContext(yd) != null;
}
function Zn() {
  return Fs() || ee(!1), P.useContext(yd).location;
}
function Xv(e) {
  P.useContext(Dr).static || P.useLayoutEffect(e);
}
function Y1() {
  let { isDataRoute: e } = P.useContext(Qn);
  return e ? uE() : X1();
}
function X1() {
  Fs() || ee(!1);
  let e = P.useContext(Wa),
    { basename: t, future: n, navigator: r } = P.useContext(Dr),
    { matches: i } = P.useContext(Qn),
    { pathname: s } = Zn(),
    o = JSON.stringify(pd(i, n.v7_relativeSplatPath)),
    l = P.useRef(!1);
  return (
    Xv(() => {
      l.current = !0;
    }),
    P.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = hd(u, JSON.parse(o), s, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : dn([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, s, e]
    )
  );
}
const Q1 = P.createContext(null);
function Z1(e) {
  let t = P.useContext(Qn).outlet;
  return t && P.createElement(Q1.Provider, { value: e }, t);
}
function Qv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = P.useContext(Dr),
    { matches: i } = P.useContext(Qn),
    { pathname: s } = Zn(),
    o = JSON.stringify(pd(i, r.v7_relativeSplatPath));
  return P.useMemo(() => hd(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function J1(e, t, n, r) {
  Fs() || ee(!1);
  let { navigator: i } = P.useContext(Dr),
    { matches: s } = P.useContext(Qn),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Zn(),
    c;
  c = u;
  let d = c.pathname || "/",
    p = d;
  if (a !== "/") {
    let x = a.replace(/^\//, "").split("/");
    p = "/" + d.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let h = fr(e, { pathname: p });
  return iE(
    h &&
      h.map((x) =>
        Object.assign({}, x, {
          params: Object.assign({}, l, x.params),
          pathname: dn([
            a,
            i.encodeLocation
              ? i.encodeLocation(x.pathname).pathname
              : x.pathname,
          ]),
          pathnameBase:
            x.pathnameBase === "/"
              ? a
              : dn([
                  a,
                  i.encodeLocation
                    ? i.encodeLocation(x.pathnameBase).pathname
                    : x.pathnameBase,
                ]),
        })
      ),
    s,
    n,
    r
  );
}
function eE() {
  let e = lE(),
    t = Ga(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: i }, n) : null,
    null
  );
}
const tE = P.createElement(eE, null);
class nE extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          Qn.Provider,
          { value: this.props.routeContext },
          P.createElement(Yv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function rE(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = P.useContext(Wa);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Qn.Provider, { value: t }, r)
  );
}
function iE(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = o.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    c >= 0 || ee(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: p, errors: h } = n,
          y =
            d.route.loader &&
            p[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, p) => {
    let h,
      y = !1,
      x = null,
      S = null;
    n &&
      ((h = l && d.route.id ? l[d.route.id] : void 0),
      (x = d.route.errorElement || tE),
      a &&
        (u < 0 && p === 0
          ? (cE("route-fallback"), (y = !0), (S = null))
          : u === p &&
            ((y = !0), (S = d.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, p + 1)),
      g = () => {
        let v;
        return (
          h
            ? (v = x)
            : y
            ? (v = S)
            : d.route.Component
            ? (v = P.createElement(d.route.Component, null))
            : d.route.element
            ? (v = d.route.element)
            : (v = c),
          P.createElement(rE, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? P.createElement(nE, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: h,
          children: g(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var Zv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Zv || {}),
  ma = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ma || {});
function sE(e) {
  let t = P.useContext(Wa);
  return t || ee(!1), t;
}
function oE(e) {
  let t = P.useContext(Kv);
  return t || ee(!1), t;
}
function aE(e) {
  let t = P.useContext(Qn);
  return t || ee(!1), t;
}
function Jv(e) {
  let t = aE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ee(!1), n.route.id;
}
function lE() {
  var e;
  let t = P.useContext(Yv),
    n = oE(ma.UseRouteError),
    r = Jv(ma.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function uE() {
  let { router: e } = sE(Zv.UseNavigateStable),
    t = Jv(ma.UseNavigateStable),
    n = P.useRef(!1);
  return (
    Xv(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, ha({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const Up = {};
function cE(e, t, n) {
  Up[e] || (Up[e] = !0);
}
function dE(e) {
  return Z1(e.context);
}
function fE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Re.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = e;
  Fs() && ee(!1);
  let a = t.replace(/^\/*/, "/"),
    u = P.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: o,
        future: ha({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, o]
    );
  typeof r == "string" && (r = Sn(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: p = "",
      state: h = null,
      key: y = "default",
    } = r,
    x = P.useMemo(() => {
      let S = Ci(c, a);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: p, state: h, key: y },
            navigationType: i,
          };
    }, [a, c, d, p, h, y, i]);
  return x == null
    ? null
    : P.createElement(
        Dr.Provider,
        { value: u },
        P.createElement(yd.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
function pE(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ns() {
  return (
    (Ns = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ns.apply(this, arguments)
  );
}
function hE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function mE(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function gE(e, t) {
  return e.button === 0 && (!t || t === "_self") && !mE(e);
}
const vE = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  yE = "6";
try {
  window.__reactRouterVersion = yE;
} catch {}
function xE(e, t) {
  return C1({
    basename: void 0,
    future: Ns({}, void 0, { v7_prependBasename: !0 }),
    history: YS({ window: void 0 }),
    hydrationData: wE(),
    routes: e,
    mapRouteProperties: pE,
    unstable_dataStrategy: void 0,
    unstable_patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function wE() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Ns({}, t, { errors: SE(t.errors) })), t;
}
function SE(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new pa(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let s = window[i.__subType];
        if (typeof s == "function")
          try {
            let o = new s(i.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let s = new Error(i.message);
        (s.stack = ""), (n[r] = s);
      }
    } else n[r] = i;
  return n;
}
const EE = P.createContext({ isTransitioning: !1 }),
  TE = P.createContext(new Map()),
  PE = "startTransition",
  $p = Ox[PE],
  CE = "flushSync",
  Hp = KS[CE];
function jE(e) {
  $p ? $p(e) : e();
}
function Fi(e) {
  Hp ? Hp(e) : e();
}
class ME {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function NE(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, s] = P.useState(n.state),
    [o, l] = P.useState(),
    [a, u] = P.useState({ isTransitioning: !1 }),
    [c, d] = P.useState(),
    [p, h] = P.useState(),
    [y, x] = P.useState(),
    S = P.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    g = P.useCallback(
      (w) => {
        m ? jE(w) : w();
      },
      [m]
    ),
    v = P.useCallback(
      (w, k) => {
        let {
          deletedFetchers: M,
          unstable_flushSync: R,
          unstable_viewTransitionOpts: _,
        } = k;
        M.forEach((G) => S.current.delete(G)),
          w.fetchers.forEach((G, X) => {
            G.data !== void 0 && S.current.set(X, G.data);
          });
        let V =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!_ || V) {
          R ? Fi(() => s(w)) : g(() => s(w));
          return;
        }
        if (R) {
          Fi(() => {
            p && (c && c.resolve(), p.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: _.currentLocation,
                nextLocation: _.nextLocation,
              });
          });
          let G = n.window.document.startViewTransition(() => {
            Fi(() => s(w));
          });
          G.finished.finally(() => {
            Fi(() => {
              d(void 0), h(void 0), l(void 0), u({ isTransitioning: !1 });
            });
          }),
            Fi(() => h(G));
          return;
        }
        p
          ? (c && c.resolve(),
            p.skipTransition(),
            x({
              state: w,
              currentLocation: _.currentLocation,
              nextLocation: _.nextLocation,
            }))
          : (l(w),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: _.currentLocation,
              nextLocation: _.nextLocation,
            }));
      },
      [n.window, p, c, S, g]
    );
  P.useLayoutEffect(() => n.subscribe(v), [n, v]),
    P.useEffect(() => {
      a.isTransitioning && !a.flushSync && d(new ME());
    }, [a]),
    P.useEffect(() => {
      if (c && o && n.window) {
        let w = o,
          k = c.promise,
          M = n.window.document.startViewTransition(async () => {
            g(() => s(w)), await k;
          });
        M.finished.finally(() => {
          d(void 0), h(void 0), l(void 0), u({ isTransitioning: !1 });
        }),
          h(M);
      }
    }, [g, o, c, n.window]),
    P.useEffect(() => {
      c && o && i.location.key === o.location.key && c.resolve();
    }, [c, p, i.location, o]),
    P.useEffect(() => {
      !a.isTransitioning &&
        y &&
        (l(y.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        x(void 0));
    }, [a.isTransitioning, y]),
    P.useEffect(() => {}, []);
  let E = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (w) => n.navigate(w),
        push: (w, k, M) =>
          n.navigate(w, {
            state: k,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (w, k, M) =>
          n.navigate(w, {
            replace: !0,
            state: k,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [n]
    ),
    C = n.basename || "/",
    N = P.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: C }),
      [n, E, C]
    ),
    A = P.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      Wa.Provider,
      { value: N },
      P.createElement(
        Kv.Provider,
        { value: i },
        P.createElement(
          TE.Provider,
          { value: S.current },
          P.createElement(
            EE.Provider,
            { value: a },
            P.createElement(
              fE,
              {
                basename: C,
                location: i.location,
                navigationType: i.historyAction,
                navigator: E,
                future: A,
              },
              i.initialized || n.future.v7_partialHydration
                ? P.createElement(LE, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const LE = P.memo(kE);
function kE(e) {
  let { routes: t, future: n, state: r } = e;
  return J1(t, void 0, r, n);
}
const bE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  RE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  J = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      p = hE(t, vE),
      { basename: h } = P.useContext(Dr),
      y,
      x = !1;
    if (typeof u == "string" && RE.test(u) && ((y = u), bE))
      try {
        let v = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
          C = Ci(E.pathname, h);
        E.origin === v.origin && C != null
          ? (u = C + E.search + E.hash)
          : (x = !0);
      } catch {}
    let S = K1(u, { relative: i }),
      m = AE(u, {
        replace: o,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function g(v) {
      r && r(v), v.defaultPrevented || m(v);
    }
    return P.createElement(
      "a",
      Ns({}, p, { href: y || S, onClick: x || s ? r : g, ref: n, target: a })
    );
  });
var Gp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Gp || (Gp = {}));
var Wp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Wp || (Wp = {}));
function AE(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = Y1(),
    u = Zn(),
    c = Qv(e, { relative: o });
  return P.useCallback(
    (d) => {
      if (gE(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : Nr(u) === Nr(c);
        a(e, {
          replace: p,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, c, r, i, n, e, s, o, l]
  );
}
const qp = (e) => {
    let t;
    const n = new Set(),
      r = (u, c) => {
        const d = typeof u == "function" ? u(t) : u;
        if (!Object.is(d, t)) {
          const p = t;
          (t =
            c ?? (typeof d != "object" || d === null)
              ? d
              : Object.assign({}, t, d)),
            n.forEach((h) => h(t, p));
        }
      },
      i = () => t,
      l = {
        setState: r,
        getState: i,
        getInitialState: () => a,
        subscribe: (u) => (n.add(u), () => n.delete(u)),
      },
      a = (t = e(r, i, l));
    return l;
  },
  DE = (e) => (e ? qp(e) : qp),
  IE = (e) => e;
function OE(e, t = IE) {
  const n = Se.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return Se.useDebugValue(n), n;
}
const Kp = (e) => {
    const t = DE(e),
      n = (r) => OE(t, r);
    return Object.assign(n, t), n;
  },
  _E = (e) => (e ? Kp(e) : Kp),
  wr = _E((e) => ({
    status1: !1,
    openFormulaire: () => e({ status1: !0 }),
    closeFormulaire: () => e({ status1: !1 }),
  }));
function VE(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function Ls(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Xu = (e) => Array.isArray(e);
function ey(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function ks(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Yp(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function xd(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Yp(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Yp(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function qa(e, t, n) {
  const r = e.getProps();
  return xd(r, t, n !== void 0 ? n : r.custom, e);
}
const wd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Sd = ["initial", ...wd],
  zs = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Jn = new Set(zs),
  Kt = (e) => e * 1e3,
  Yt = (e) => e / 1e3,
  FE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  zE = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  BE = { type: "keyframes", duration: 0.8 },
  UE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  $E = (e, { keyframes: t }) =>
    t.length > 2
      ? BE
      : Jn.has(e)
      ? e.startsWith("scale")
        ? zE(t[1])
        : FE
      : UE;
function Ed(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const HE = { skipAnimations: !1, useManualTiming: !1 },
  GE = (e) => e !== null;
function Ka(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(GE),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const Ze = (e) => e;
function WE(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    s.has(u) && (a.schedule(u), e()), u(o);
  }
  const a = {
    schedule: (u, c = !1, d = !1) => {
      const h = d && r ? t : n;
      return c && s.add(u), h.has(u) || h.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(l),
        (r = !1),
        i && ((i = !1), a.process(u));
    },
  };
  return a;
}
const yo = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  qE = 40;
function ty(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = yo.reduce((m, g) => ((m[g] = WE(s)), m), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: d,
      postRender: p,
    } = o,
    h = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, qE), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        p.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(h);
    };
  return {
    schedule: yo.reduce((m, g) => {
      const v = o[g];
      return (m[g] = (E, C = !1, N = !1) => (n || y(), v.schedule(E, C, N))), m;
    }, {}),
    cancel: (m) => {
      for (let g = 0; g < yo.length; g++) o[yo[g]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: ue,
    cancel: xn,
    state: Ge,
    steps: Dl,
  } = ty(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ze, !0),
  ny = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  KE = 1e-7,
  YE = 12;
function XE(e, t, n, r, i) {
  let s,
    o,
    l = 0;
  do (o = t + (n - t) / 2), (s = ny(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > KE && ++l < YE);
  return o;
}
function Bs(e, t, n, r) {
  if (e === t && n === r) return Ze;
  const i = (s) => XE(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : ny(i(s), t, r));
}
const ry = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  iy = (e) => (t) => 1 - e(1 - t),
  sy = Bs(0.33, 1.53, 0.69, 0.99),
  Td = iy(sy),
  oy = ry(Td),
  ay = (e) =>
    (e *= 2) < 1 ? 0.5 * Td(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Pd = (e) => 1 - Math.sin(Math.acos(e)),
  ly = iy(Pd),
  uy = ry(Pd),
  cy = (e) => /^0[^.\s]+$/u.test(e);
function QE(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || cy(e)
    : !0;
}
let Qu = Ze;
const dy = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  fy = (e) => (t) => typeof t == "string" && t.startsWith(e),
  py = fy("--"),
  ZE = fy("var(--"),
  Cd = (e) => (ZE(e) ? JE.test(e.split("/*")[0].trim()) : !1),
  JE =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  eT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function tT(e) {
  const t = eT.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function hy(e, t, n = 1) {
  const [r, i] = tT(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return dy(o) ? parseFloat(o) : o;
  }
  return Cd(i) ? hy(i, t, n + 1) : i;
}
const Wn = (e, t, n) => (n > t ? t : n < e ? e : n),
  ji = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  bs = { ...ji, transform: (e) => Wn(0, 1, e) },
  xo = { ...ji, default: 1 },
  Us = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Mn = Us("deg"),
  Xt = Us("%"),
  K = Us("px"),
  nT = Us("vh"),
  rT = Us("vw"),
  Xp = {
    ...Xt,
    parse: (e) => Xt.parse(e) / 100,
    transform: (e) => Xt.transform(e * 100),
  },
  iT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Qp = (e) => e === ji || e === K,
  Zp = (e, t) => parseFloat(e.split(", ")[t]),
  Jp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Zp(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Zp(s[1], e) : 0;
      }
    },
  sT = new Set(["x", "y", "z"]),
  oT = zs.filter((e) => !sT.has(e));
function aT(e) {
  const t = [];
  return (
    oT.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const vi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Jp(4, 13),
  y: Jp(5, 14),
};
vi.translateX = vi.x;
vi.translateY = vi.y;
const my = (e) => (t) => t.test(e),
  lT = { test: (e) => e === "auto", parse: (e) => e },
  gy = [ji, K, Xt, Mn, rT, nT, lT],
  eh = (e) => gy.find(my(e)),
  Sr = new Set();
let Zu = !1,
  Ju = !1;
function vy() {
  if (Ju) {
    const e = Array.from(Sr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = aT(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var l;
            (l = r.getValue(s)) === null || l === void 0 || l.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Ju = !1), (Zu = !1), Sr.forEach((e) => e.complete()), Sr.clear();
}
function yy() {
  Sr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ju = !0);
  });
}
function uT() {
  yy(), vy();
}
class jd {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Sr.add(this),
          Zu || ((Zu = !0), ue.read(yy), ue.resolveKeyframes(vy)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Sr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Sr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const is = (e) => Math.round(e * 1e5) / 1e5,
  Md = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function cT(e) {
  return e == null;
}
const dT =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Nd = (e, t) => (n) =>
    !!(
      (typeof n == "string" && dT.test(n) && n.startsWith(e)) ||
      (t && !cT(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  xy = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, l] = r.match(Md);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  fT = (e) => Wn(0, 255, e),
  Il = { ...ji, transform: (e) => Math.round(fT(e)) },
  vr = {
    test: Nd("rgb", "red"),
    parse: xy("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Il.transform(e) +
      ", " +
      Il.transform(t) +
      ", " +
      Il.transform(n) +
      ", " +
      is(bs.transform(r)) +
      ")",
  };
function pT(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ec = { test: Nd("#"), parse: pT, transform: vr.transform },
  Zr = {
    test: Nd("hsl", "hue"),
    parse: xy("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Xt.transform(is(t)) +
      ", " +
      Xt.transform(is(n)) +
      ", " +
      is(bs.transform(r)) +
      ")",
  },
  Xe = {
    test: (e) => vr.test(e) || ec.test(e) || Zr.test(e),
    parse: (e) =>
      vr.test(e) ? vr.parse(e) : Zr.test(e) ? Zr.parse(e) : ec.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? vr.transform(e)
        : Zr.transform(e),
  },
  hT =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function mT(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Md)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(hT)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const wy = "number",
  Sy = "color",
  gT = "var",
  vT = "var(",
  th = "${}",
  yT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Rs(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const l = t
    .replace(
      yT,
      (a) => (
        Xe.test(a)
          ? (r.color.push(s), i.push(Sy), n.push(Xe.parse(a)))
          : a.startsWith(vT)
          ? (r.var.push(s), i.push(gT), n.push(a))
          : (r.number.push(s), i.push(wy), n.push(parseFloat(a))),
        ++s,
        th
      )
    )
    .split(th);
  return { values: n, split: l, indexes: r, types: i };
}
function Ey(e) {
  return Rs(e).values;
}
function Ty(e) {
  const { split: t, types: n } = Rs(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const l = n[o];
        l === wy
          ? (s += is(i[o]))
          : l === Sy
          ? (s += Xe.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const xT = (e) => (typeof e == "number" ? 0 : e);
function wT(e) {
  const t = Ey(e);
  return Ty(e)(t.map(xT));
}
const qn = {
    test: mT,
    parse: Ey,
    createTransformer: Ty,
    getAnimatableNone: wT,
  },
  ST = new Set(["brightness", "contrast", "saturate", "opacity"]);
function ET(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Md) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = ST.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const TT = /\b([a-z-]*)\(.*?\)/gu,
  tc = {
    ...qn,
    getAnimatableNone: (e) => {
      const t = e.match(TT);
      return t ? t.map(ET).join(" ") : e;
    },
  },
  PT = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    radius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    backgroundPositionX: K,
    backgroundPositionY: K,
  },
  CT = {
    rotate: Mn,
    rotateX: Mn,
    rotateY: Mn,
    rotateZ: Mn,
    scale: xo,
    scaleX: xo,
    scaleY: xo,
    scaleZ: xo,
    skew: Mn,
    skewX: Mn,
    skewY: Mn,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: bs,
    originX: Xp,
    originY: Xp,
    originZ: K,
  },
  nh = { ...ji, transform: Math.round },
  Ld = {
    ...PT,
    ...CT,
    zIndex: nh,
    size: K,
    fillOpacity: bs,
    strokeOpacity: bs,
    numOctaves: nh,
  },
  jT = {
    ...Ld,
    color: Xe,
    backgroundColor: Xe,
    outlineColor: Xe,
    fill: Xe,
    stroke: Xe,
    borderColor: Xe,
    borderTopColor: Xe,
    borderRightColor: Xe,
    borderBottomColor: Xe,
    borderLeftColor: Xe,
    filter: tc,
    WebkitFilter: tc,
  },
  kd = (e) => jT[e];
function Py(e, t) {
  let n = kd(e);
  return (
    n !== tc && (n = qn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const MT = new Set(["auto", "none", "0"]);
function NT(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !MT.has(s) && Rs(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = Py(n, i);
}
class Cy extends jd {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && ((u = u.trim()), Cd(u))) {
        const c = hy(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !iT.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = eh(i),
      l = eh(s);
    if (o !== l)
      if (Qp(o) && Qp(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) QE(t[i]) && r.push(i);
    r.length && NT(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = vi[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      l = i[o];
    (i[o] = vi[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ya(e) {
  return typeof e == "function";
}
let Vo;
function LT() {
  Vo = void 0;
}
const Qt = {
    now: () => (
      Vo === void 0 &&
        Qt.set(
          Ge.isProcessing || HE.useManualTiming
            ? Ge.timestamp
            : performance.now()
        ),
      Vo
    ),
    set: (e) => {
      (Vo = e), queueMicrotask(LT);
    },
  },
  rh = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (qn.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function kT(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function bT(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = rh(i, t),
    l = rh(s, t);
  return !o || !l ? !1 : kT(e) || ((n === "spring" || Ya(n)) && r);
}
const RT = 40;
class jy {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Qt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > RT
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && uT(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Qt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !bT(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        a == null || a(Ka(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function My(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const AT = 5;
function Ny(e, t, n) {
  const r = Math.max(t - AT, 0);
  return My(n - e(r), t - r);
}
const Ol = 0.001,
  DT = 0.01,
  IT = 10,
  OT = 0.05,
  _T = 1;
function VT({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    o = 1 - t;
  (o = Wn(OT, _T, o)),
    (e = Wn(DT, IT, Yt(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            p = c - n,
            h = nc(u, o),
            y = Math.exp(-d);
          return Ol - (p / h) * y;
        }),
        (s = (u) => {
          const d = u * o * e,
            p = d * n + n,
            h = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            x = nc(Math.pow(u, 2), o);
          return ((-i(u) + Ol > 0 ? -1 : 1) * ((p - h) * y)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Ol + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const l = 5 / e,
    a = zT(i, s, l);
  if (((e = Kt(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const FT = 12;
function zT(e, t, n) {
  let r = n;
  for (let i = 1; i < FT; i++) r = r - e(r) / t(r);
  return r;
}
function nc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const BT = ["duration", "bounce"],
  UT = ["stiffness", "damping", "mass"];
function ih(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function $T(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!ih(e, UT) && ih(e, BT)) {
    const n = VT(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function bd({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: p,
    } = $T({ ...r, velocity: -Yt(r.velocity || 0) }),
    h = d || 0,
    y = a / (2 * Math.sqrt(l * u)),
    x = s - i,
    S = Yt(Math.sqrt(l / u)),
    m = Math.abs(x) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let g;
  if (y < 1) {
    const v = nc(S, y);
    g = (E) => {
      const C = Math.exp(-y * S * E);
      return (
        s - C * (((h + y * S * x) / v) * Math.sin(v * E) + x * Math.cos(v * E))
      );
    };
  } else if (y === 1) g = (v) => s - Math.exp(-S * v) * (x + (h + S * x) * v);
  else {
    const v = S * Math.sqrt(y * y - 1);
    g = (E) => {
      const C = Math.exp(-y * S * E),
        N = Math.min(v * E, 300);
      return (
        s - (C * ((h + y * S * x) * Math.sinh(N) + v * x * Math.cosh(N))) / v
      );
    };
  }
  return {
    calculatedDuration: (p && c) || null,
    next: (v) => {
      const E = g(v);
      if (p) o.done = v >= c;
      else {
        let C = 0;
        y < 1 && (C = v === 0 ? Kt(h) : Ny(g, v, E));
        const N = Math.abs(C) <= n,
          A = Math.abs(s - E) <= t;
        o.done = N && A;
      }
      return (o.value = o.done ? s : E), o;
    },
  };
}
function sh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    p = { done: !1, value: d },
    h = (w) => (l !== void 0 && w < l) || (a !== void 0 && w > a),
    y = (w) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - w) < Math.abs(a - w)
        ? l
        : a;
  let x = n * t;
  const S = d + x,
    m = o === void 0 ? S : o(S);
  m !== S && (x = m - d);
  const g = (w) => -x * Math.exp(-w / r),
    v = (w) => m + g(w),
    E = (w) => {
      const k = g(w),
        M = v(w);
      (p.done = Math.abs(k) <= u), (p.value = p.done ? m : M);
    };
  let C, N;
  const A = (w) => {
    h(p.value) &&
      ((C = w),
      (N = bd({
        keyframes: [p.value, y(p.value)],
        velocity: Ny(v, w, p.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    A(0),
    {
      calculatedDuration: null,
      next: (w) => {
        let k = !1;
        return (
          !N && C === void 0 && ((k = !0), E(w), A(w)),
          C !== void 0 && w >= C ? N.next(w - C) : (!k && E(w), p)
        );
      },
    }
  );
}
const HT = Bs(0.42, 0, 1, 1),
  GT = Bs(0, 0, 0.58, 1),
  Ly = Bs(0.42, 0, 0.58, 1),
  ky = (e) => Array.isArray(e) && typeof e[0] != "number",
  Rd = (e) => Array.isArray(e) && typeof e[0] == "number",
  oh = {
    linear: Ze,
    easeIn: HT,
    easeInOut: Ly,
    easeOut: GT,
    circIn: Pd,
    circInOut: uy,
    circOut: ly,
    backIn: Td,
    backInOut: oy,
    backOut: sy,
    anticipate: ay,
  },
  ah = (e) => {
    if (Rd(e)) {
      Qu(e.length === 4);
      const [t, n, r, i] = e;
      return Bs(t, n, r, i);
    } else if (typeof e == "string") return Qu(oh[e] !== void 0), oh[e];
    return e;
  },
  WT = (e, t) => (n) => t(e(n)),
  fn = (...e) => e.reduce(WT),
  Lr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  xe = (e, t, n) => e + (t - e) * n;
function _l(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function qT({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = _l(a, l, e + 1 / 3)), (s = _l(a, l, e)), (o = _l(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function ga(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Vl = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  KT = [ec, vr, Zr],
  YT = (e) => KT.find((t) => t.test(e));
function lh(e) {
  const t = YT(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Zr && (n = qT(n)), n;
}
const uh = (e, t) => {
    const n = lh(e),
      r = lh(t);
    if (!n || !r) return ga(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Vl(n.red, r.red, s)),
      (i.green = Vl(n.green, r.green, s)),
      (i.blue = Vl(n.blue, r.blue, s)),
      (i.alpha = xe(n.alpha, r.alpha, s)),
      vr.transform(i)
    );
  },
  rc = new Set(["none", "hidden"]);
function XT(e, t) {
  return rc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function QT(e, t) {
  return (n) => xe(e, t, n);
}
function Ad(e) {
  return typeof e == "number"
    ? QT
    : typeof e == "string"
    ? Cd(e)
      ? ga
      : Xe.test(e)
      ? uh
      : eP
    : Array.isArray(e)
    ? by
    : typeof e == "object"
    ? Xe.test(e)
      ? uh
      : ZT
    : ga;
}
function by(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Ad(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function ZT(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ad(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function JT(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      l = e.indexes[o][i[o]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[s] = a), i[o]++;
  }
  return r;
}
const eP = (e, t) => {
  const n = qn.createTransformer(t),
    r = Rs(e),
    i = Rs(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (rc.has(e) && !i.values.length) || (rc.has(t) && !r.values.length)
      ? XT(e, t)
      : fn(by(JT(r, i), i.values), n)
    : ga(e, t);
};
function Ry(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? xe(e, t, n)
    : Ad(e)(e, t);
}
function tP(e, t, n) {
  const r = [],
    i = n || Ry,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || Ze : t;
      l = fn(a, l);
    }
    r.push(l);
  }
  return r;
}
function Ay(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Qu(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = tP(t, r, i),
    l = o.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Lr(e[c], e[c + 1], u);
      return o[c](d);
    };
  return n ? (u) => a(Wn(e[0], e[s - 1], u)) : a;
}
function Dy(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Lr(0, t, r);
    e.push(xe(n, 1, i));
  }
}
function Iy(e) {
  const t = [0];
  return Dy(t, e.length - 1), t;
}
function nP(e, t) {
  return e.map((n) => n * t);
}
function rP(e, t) {
  return e.map(() => t || Ly).splice(0, e.length - 1);
}
function va({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = ky(r) ? r.map(ah) : ah(r),
    s = { done: !1, value: t[0] },
    o = nP(n && n.length === t.length ? n : Iy(t), e),
    l = Ay(o, t, { ease: Array.isArray(i) ? i : rP(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((s.value = l(a)), (s.done = a >= e), s),
  };
}
const ic = 2e4;
function Oy(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ic; ) (t += n), (r = e.next(t));
  return t >= ic ? 1 / 0 : t;
}
const iP = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ue.update(t, !0),
      stop: () => xn(t),
      now: () => (Ge.isProcessing ? Ge.timestamp : Qt.now()),
    };
  },
  sP = { decay: sh, inertia: sh, tween: va, keyframes: va, spring: bd },
  oP = (e) => e / 100;
class Dd extends jy {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || jd,
      l = (a, u) => this.onKeyframesResolved(a, u);
    (this.resolver = new o(s, l, n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      l = Ya(n) ? n : sP[n] || va;
    let a, u;
    l !== va &&
      typeof t[0] != "number" &&
      ((a = fn(oP, Ry(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = Oy(c));
    const { calculatedDuration: d } = c,
      p = d + i,
      h = p * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: d,
      resolvedDuration: p,
      totalDuration: h,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: w } = this.options;
      return { done: !0, value: w[w.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: p,
      repeat: h,
      repeatType: y,
      repeatDelay: x,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - p * (this.speed >= 0 ? 1 : -1),
      g = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let v = this.currentTime,
      E = s;
    if (h) {
      const w = Math.min(this.currentTime, c) / d;
      let k = Math.floor(w),
        M = w % 1;
      !M && w >= 1 && (M = 1),
        M === 1 && k--,
        (k = Math.min(k, h + 1)),
        !!(k % 2) &&
          (y === "reverse"
            ? ((M = 1 - M), x && (M -= x / d))
            : y === "mirror" && (E = o)),
        (v = Wn(0, 1, M) * d);
    }
    const C = g ? { done: !1, value: a[0] } : E.next(v);
    l && (C.value = l(C.value));
    let { done: N } = C;
    !g &&
      u !== null &&
      (N = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const A =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && N));
    return (
      A && i !== void 0 && (C.value = Ka(a, this.options, i)),
      S && S(C.value),
      A && this.finish(),
      C
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Yt(t.calculatedDuration) : 0;
  }
  get time() {
    return Yt(this.currentTime);
  }
  set time(t) {
    (t = Kt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Yt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = iP, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const _y = new Set(["opacity", "clipPath", "filter", "transform"]),
  aP = 10,
  lP = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / aP), 2);
    for (let i = 0; i < r; i++) n += e(Lr(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function Id(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const uP = { linearEasing: void 0 };
function cP(e, t) {
  const n = Id(e);
  return () => {
    var r;
    return (r = uP[t]) !== null && r !== void 0 ? r : n();
  };
}
const ya = cP(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Vy(e) {
  return !!(
    (typeof e == "function" && ya()) ||
    !e ||
    (typeof e == "string" && (e in sc || ya())) ||
    Rd(e) ||
    (Array.isArray(e) && e.every(Vy))
  );
}
const qi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  sc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: qi([0, 0.65, 0.55, 1]),
    circOut: qi([0.55, 0, 1, 0.45]),
    backIn: qi([0.31, 0.01, 0.66, -0.59]),
    backOut: qi([0.33, 1.53, 0.69, 0.99]),
  };
function Fy(e, t) {
  if (e)
    return typeof e == "function" && ya()
      ? lP(e, t)
      : Rd(e)
      ? qi(e)
      : Array.isArray(e)
      ? e.map((n) => Fy(n, t) || sc.easeOut)
      : sc[e];
}
function dP(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Fy(l, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function ch(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const fP = Id(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  xa = 10,
  pP = 2e4;
function hP(e) {
  return Ya(e.type) || e.type === "spring" || !Vy(e.ease);
}
function mP(e, t) {
  const n = new Dd({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < pP; ) (r = n.sample(s)), i.push(r.value), (s += xa);
  return { times: void 0, keyframes: i, duration: s - xa, ease: "linear" };
}
const zy = { anticipate: ay, backInOut: oy, circInOut: uy };
function gP(e) {
  return e in zy;
}
class dh extends jy {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new Cy(
      s,
      (o, l) => this.onKeyframesResolved(o, l),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: l,
      motionValue: a,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof o == "string" && ya() && gP(o) && (o = zy[o]), hP(this.options))
    ) {
      const {
          onComplete: p,
          onUpdate: h,
          motionValue: y,
          element: x,
          ...S
        } = this.options,
        m = mP(t, S);
      (t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = m.duration),
        (s = m.times),
        (o = m.ease),
        (l = "keyframes");
    }
    const d = dP(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (ch(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: p } = this.options;
            a.set(Ka(t, this.options, n)),
              p && p(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: i, times: s, type: l, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Yt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Yt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Kt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ze;
      const { animation: r } = n;
      ch(r, t);
    }
    return Ze;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: l,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: p,
          ...h
        } = this.options,
        y = new Dd({
          ...h,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: l,
          isGenerator: !0,
        }),
        x = Kt(this.time);
      u.setWithVelocity(y.sample(x - xa).value, y.sample(x).value, xa);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: l,
    } = t;
    return (
      fP() &&
      r &&
      _y.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      l !== "inertia"
    );
  }
}
const vP = Id(() => window.ScrollTimeline !== void 0);
class By {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      vP() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function yP({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Od =
    (e, t, n, r = {}, i, s) =>
    (o) => {
      const l = Ed(r, e) || {},
        a = l.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - Kt(a);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: (p) => {
          t.set(p), l.onUpdate && l.onUpdate(p);
        },
        onComplete: () => {
          o(), l.onComplete && l.onComplete();
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i,
      };
      yP(l) || (c = { ...c, ...$E(e, c) }),
        c.duration && (c.duration = Kt(c.duration)),
        c.repeatDelay && (c.repeatDelay = Kt(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let d = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (d = !0)),
        d && !s && t.get() !== void 0)
      ) {
        const p = Ka(c.keyframes, l);
        if (p !== void 0)
          return (
            ue.update(() => {
              c.onUpdate(p), c.onComplete();
            }),
            new By([])
          );
      }
      return !s && dh.supports(c) ? new dh(c) : new Dd(c);
    },
  xP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  wP = (e) => (Xu(e) ? e[e.length - 1] || 0 : e);
function _d(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Xa(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Vd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return _d(this.subscriptions, t), () => Xa(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const fh = 30,
  SP = (e) => !isNaN(parseFloat(e)),
  ss = { current: void 0 };
class EP {
  constructor(t, n = {}) {
    (this.version = "11.11.9"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = Qt.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Qt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = SP(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Vd());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ue.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return ss.current && ss.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Qt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > fh
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, fh);
    return My(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function yi(e, t) {
  return new EP(e, t);
}
function TP(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, yi(n));
}
function Fd(e, t) {
  const n = qa(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = wP(s[o]);
    TP(e, o, l);
  }
}
const Qa = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  PP = "framerAppearId",
  Uy = "data-" + Qa(PP);
function $y(e) {
  return e.props[Uy];
}
const Fe = (e) => !!(e && e.getVelocity);
function CP(e) {
  return !!(Fe(e) && e.add);
}
function oc(e, t) {
  if (!e.applyWillChange) return;
  const n = e.getValue("willChange");
  if (CP(n)) return n.add(t);
}
function jP({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function zd(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in a) {
    const p = e.getValue(
        d,
        (s = e.latestValues[d]) !== null && s !== void 0 ? s : null
      ),
      h = a[d];
    if (h === void 0 || (c && jP(c, d))) continue;
    const y = { delay: n, ...Ed(o || {}, d) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = $y(e);
      if (m) {
        const g = window.MotionHandoffAnimation(m, d, ue);
        g !== null && ((y.startTime = g), (x = !0));
      }
    }
    oc(e, d),
      p.start(
        Od(d, p, h, e.shouldReduceMotion && Jn.has(d) ? { type: !1 } : y, e, x)
      );
    const S = p.animation;
    S && u.push(S);
  }
  return (
    l &&
      Promise.all(u).then(() => {
        ue.update(() => {
          l && Fd(e, l);
        });
      }),
    u
  );
}
function ac(e, t, n = {}) {
  var r;
  const i = qa(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(zd(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: p,
            } = s;
            return MP(e, t, c + u, d, p, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, l] : [l, o];
    return u().then(() => c());
  } else return Promise.all([o(), l(n.delay)]);
}
function MP(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(NP)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            ac(u, t, { ...s, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function NP(e, t) {
  return e.sortNodePosition(t);
}
function Hy(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => ac(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = ac(e, t, n);
  else {
    const i = typeof t == "function" ? qa(e, t, n.custom) : t;
    r = Promise.all(zd(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const LP = Sd.length;
function Gy(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Gy(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < LP; n++) {
    const r = Sd[n],
      i = e.props[r];
    (ks(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const kP = [...wd].reverse(),
  bP = wd.length;
function RP(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Hy(e, n, r)));
}
function AP(e) {
  let t = RP(e),
    n = ph(),
    r = !0;
  const i = (a) => (u, c) => {
    var d;
    const p = qa(
      e,
      c,
      a === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (p) {
      const { transition: h, transitionEnd: y, ...x } = p;
      u = { ...u, ...x, ...y };
    }
    return u;
  };
  function s(a) {
    t = a(e);
  }
  function o(a) {
    const { props: u } = e,
      c = Gy(e.parent) || {},
      d = [],
      p = new Set();
    let h = {},
      y = 1 / 0;
    for (let S = 0; S < bP; S++) {
      const m = kP[S],
        g = n[m],
        v = u[m] !== void 0 ? u[m] : c[m],
        E = ks(v),
        C = m === a ? g.isActive : null;
      C === !1 && (y = S);
      let N = v === c[m] && v !== u[m] && E;
      if (
        (N && r && e.manuallyAnimateOnMount && (N = !1),
        (g.protectedKeys = { ...h }),
        (!g.isActive && C === null) ||
          (!v && !g.prevProp) ||
          Ls(v) ||
          typeof v == "boolean")
      )
        continue;
      const A = DP(g.prevProp, v);
      let w = A || (m === a && g.isActive && !N && E) || (S > y && E),
        k = !1;
      const M = Array.isArray(v) ? v : [v];
      let R = M.reduce(i(m), {});
      C === !1 && (R = {});
      const { prevResolvedValues: _ = {} } = g,
        V = { ..._, ...R },
        G = (ne) => {
          (w = !0),
            p.has(ne) && ((k = !0), p.delete(ne)),
            (g.needsAnimating[ne] = !0);
          const b = e.getValue(ne);
          b && (b.liveStyle = !1);
        };
      for (const ne in V) {
        const b = R[ne],
          I = _[ne];
        if (h.hasOwnProperty(ne)) continue;
        let z = !1;
        Xu(b) && Xu(I) ? (z = !ey(b, I)) : (z = b !== I),
          z
            ? b != null
              ? G(ne)
              : p.add(ne)
            : b !== void 0 && p.has(ne)
            ? G(ne)
            : (g.protectedKeys[ne] = !0);
      }
      (g.prevProp = v),
        (g.prevResolvedValues = R),
        g.isActive && (h = { ...h, ...R }),
        r && e.blockInitialAnimation && (w = !1),
        w &&
          (!(N && A) || k) &&
          d.push(...M.map((ne) => ({ animation: ne, options: { type: m } })));
    }
    if (p.size) {
      const S = {};
      p.forEach((m) => {
        const g = e.getBaseTarget(m),
          v = e.getValue(m);
        v && (v.liveStyle = !0), (S[m] = g ?? null);
      }),
        d.push({ animation: S });
    }
    let x = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((p) => {
        var h;
        return (h = p.animationState) === null || h === void 0
          ? void 0
          : h.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = o(a);
    for (const p in n) n[p].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = ph()), (r = !0);
    },
  };
}
function DP(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ey(t, e) : !1;
}
function or(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ph() {
  return {
    animate: or(!0),
    whileInView: or(),
    whileHover: or(),
    whileTap: or(),
    whileDrag: or(),
    whileFocus: or(),
    exit: or(),
  };
}
class er {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class IP extends er {
  constructor(t) {
    super(t), t.animationState || (t.animationState = AP(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ls(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let OP = 0;
class _P extends er {
  constructor() {
    super(...arguments), (this.id = OP++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const VP = { animation: { Feature: IP }, exit: { Feature: _P } },
  Wy = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function Za(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const FP = (e) => (t) => Wy(t) && e(t, Za(t));
function ln(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function pn(e, t, n, r) {
  return ln(e, t, FP(n), r);
}
const hh = (e, t) => Math.abs(e - t);
function zP(e, t) {
  const n = hh(e.x, t.x),
    r = hh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class qy {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = zl(this.lastMoveEventInfo, this.history),
          p = this.startEvent !== null,
          h = zP(d.offset, { x: 0, y: 0 }) >= 3;
        if (!p && !h) return;
        const { point: y } = d,
          { timestamp: x } = Ge;
        this.history.push({ ...y, timestamp: x });
        const { onStart: S, onMove: m } = this.handlers;
        p ||
          (S && S(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, p) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Fl(p, this.transformPagePoint)),
          ue.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, p) => {
        this.end();
        const { onEnd: h, onSessionEnd: y, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = zl(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Fl(p, this.transformPagePoint),
          this.history
        );
        this.startEvent && h && h(d, S), y && y(d, S);
      }),
      !Wy(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = Za(t),
      l = Fl(o, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = Ge;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, zl(l, this.history)),
      (this.removeListeners = fn(
        pn(this.contextWindow, "pointermove", this.handlePointerMove),
        pn(this.contextWindow, "pointerup", this.handlePointerUp),
        pn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), xn(this.updatePoint);
  }
}
function Fl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function mh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function zl({ point: e }, t) {
  return {
    point: e,
    delta: mh(e, Ky(t)),
    offset: mh(e, BP(t)),
    velocity: UP(t, 0.1),
  };
}
function BP(e) {
  return e[0];
}
function Ky(e) {
  return e[e.length - 1];
}
function UP(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Ky(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Kt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = Yt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Yy(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const gh = Yy("dragHorizontal"),
  vh = Yy("dragVertical");
function Xy(e) {
  let t = !1;
  if (e === "y") t = vh();
  else if (e === "x") t = gh();
  else {
    const n = gh(),
      r = vh();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Qy() {
  const e = Xy(!0);
  return e ? (e(), !1) : !0;
}
function Jr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const Zy = 1e-4,
  $P = 1 - Zy,
  HP = 1 + Zy,
  Jy = 0.01,
  GP = 0 - Jy,
  WP = 0 + Jy;
function yt(e) {
  return e.max - e.min;
}
function qP(e, t, n) {
  return Math.abs(e - t) <= n;
}
function yh(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = xe(t.min, t.max, e.origin)),
    (e.scale = yt(n) / yt(t)),
    (e.translate = xe(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= $P && e.scale <= HP) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= GP && e.translate <= WP) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function os(e, t, n, r) {
  yh(e.x, t.x, n.x, r ? r.originX : void 0),
    yh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function xh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + yt(t));
}
function KP(e, t, n) {
  xh(e.x, t.x, n.x), xh(e.y, t.y, n.y);
}
function wh(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + yt(t));
}
function as(e, t, n) {
  wh(e.x, t.x, n.x), wh(e.y, t.y, n.y);
}
function YP(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? xe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? xe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Sh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function XP(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Sh(e.x, n, i), y: Sh(e.y, t, r) };
}
function Eh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function QP(e, t) {
  return { x: Eh(e.x, t.x), y: Eh(e.y, t.y) };
}
function ZP(e, t) {
  let n = 0.5;
  const r = yt(e),
    i = yt(t);
  return (
    i > r
      ? (n = Lr(t.min, t.max - r, e.min))
      : r > i && (n = Lr(e.min, e.max - i, t.min)),
    Wn(0, 1, n)
  );
}
function JP(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const lc = 0.35;
function eC(e = lc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = lc),
    { x: Th(e, "left", "right"), y: Th(e, "top", "bottom") }
  );
}
function Th(e, t, n) {
  return { min: Ph(e, t), max: Ph(e, n) };
}
function Ph(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ch = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ei = () => ({ x: Ch(), y: Ch() }),
  jh = () => ({ min: 0, max: 0 }),
  Ne = () => ({ x: jh(), y: jh() });
function Pt(e) {
  return [e("x"), e("y")];
}
function e0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function tC({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function nC(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Bl(e) {
  return e === void 0 || e === 1;
}
function uc({ scale: e, scaleX: t, scaleY: n }) {
  return !Bl(e) || !Bl(t) || !Bl(n);
}
function ur(e) {
  return (
    uc(e) ||
    t0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function t0(e) {
  return Mh(e.x) || Mh(e.y);
}
function Mh(e) {
  return e && e !== "0%";
}
function wa(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Nh(e, t, n, r, i) {
  return i !== void 0 && (e = wa(e, i, r)), wa(e, n, r) + t;
}
function cc(e, t = 0, n = 1, r, i) {
  (e.min = Nh(e.min, t, n, r, i)), (e.max = Nh(e.max, t, n, r, i));
}
function n0(e, { x: t, y: n }) {
  cc(e.x, t.translate, t.scale, t.originPoint),
    cc(e.y, n.translate, n.scale, n.originPoint);
}
const Lh = 0.999999999999,
  kh = 1.0000000000001;
function rC(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    (s = n[l]), (o = s.projectionDelta);
    const { visualElement: a } = s.options;
    (a && a.props.style && a.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        ni(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), n0(e, o)),
      r && ur(s.latestValues) && ni(e, s.latestValues));
  }
  t.x < kh && t.x > Lh && (t.x = 1), t.y < kh && t.y > Lh && (t.y = 1);
}
function ti(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function bh(e, t, n, r, i = 0.5) {
  const s = xe(e.min, e.max, i);
  cc(e, t, n, s, r);
}
function ni(e, t) {
  bh(e.x, t.x, t.scaleX, t.scale, t.originX),
    bh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function r0(e, t) {
  return e0(nC(e.getBoundingClientRect(), t));
}
function iC(e, t, n) {
  const r = r0(e, n),
    { scroll: i } = t;
  return i && (ti(r.x, i.offset.x), ti(r.y, i.offset.y)), r;
}
const i0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  sC = new WeakMap();
class oC {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ne()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Za(c, "page").point);
      },
      s = (c, d) => {
        const { drag: p, dragPropagation: h, onDragStart: y } = this.getProps();
        if (
          p &&
          !h &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Xy(p)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Pt((S) => {
            let m = this.getAxisMotionValue(S).get() || 0;
            if (Xt.test(m)) {
              const { projection: g } = this.visualElement;
              if (g && g.layout) {
                const v = g.layout.layoutBox[S];
                v && (m = yt(v) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[S] = m;
          }),
          y && ue.postRender(() => y(c, d)),
          oc(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (c, d) => {
        const {
          dragPropagation: p,
          dragDirectionLock: h,
          onDirectionLock: y,
          onDrag: x,
        } = this.getProps();
        if (!p && !this.openGlobalLock) return;
        const { offset: S } = d;
        if (h && this.currentDirection === null) {
          (this.currentDirection = aC(S)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, S),
          this.updateAxis("y", d.point, S),
          this.visualElement.render(),
          x && x(c, d);
      },
      l = (c, d) => this.stop(c, d),
      a = () =>
        Pt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new qy(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: i0(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && ue.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !wo(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = YP(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && Jr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = XP(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = eC(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Pt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = JP(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Jr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = iC(r, i.root, this.visualElement.getTransformPagePoint());
    let o = QP(i.layout.layoutBox, s);
    if (n) {
      const l = n(tC(o));
      (this.hasMutatedConstraints = !!l), l && (o = e0(l));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = Pt((c) => {
        if (!wo(c, n, this.currentDirection)) return;
        let d = (a && a[c]) || {};
        o && (d = { min: 0, max: 0 });
        const p = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: p,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      oc(this.visualElement, t), r.start(Od(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Pt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Pt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Pt((n) => {
      const { drag: r } = this.getProps();
      if (!wo(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - xe(o, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Jr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Pt((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = ZP({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Pt((o) => {
        if (!wo(o, t, null)) return;
        const l = this.getAxisMotionValue(o),
          { min: a, max: u } = this.constraints[o];
        l.set(xe(a, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    sC.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = pn(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Jr(a) && a.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      ue.read(r);
    const o = ln(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Pt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += a[c].translate),
                d.set(d.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = lc,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l,
    };
  }
}
function wo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function aC(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class lC extends er {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ze),
      (this.removeListeners = Ze),
      (this.controls = new oC(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ze);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Rh = (e) => (t, n) => {
  e && ue.postRender(() => e(t, n));
};
class uC extends er {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ze);
  }
  onPointerDown(t) {
    this.session = new qy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: i0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Rh(t),
      onStart: Rh(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && ue.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = pn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Bd = P.createContext(null);
function cC() {
  const e = P.useContext(Bd);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = P.useId();
  P.useEffect(() => r(i), []);
  const s = P.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, s] : [!0];
}
const s0 = P.createContext({}),
  o0 = P.createContext({}),
  Fo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ah(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const zi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (K.test(e)) e = parseFloat(e);
        else return e;
      const n = Ah(e, t.target.x),
        r = Ah(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  dC = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = qn.parse(e);
      if (i.length > 5) return r;
      const s = qn.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + o] /= l), (i[1 + o] /= a);
      const u = xe(l, a, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  Sa = {};
function fC(e) {
  Object.assign(Sa, e);
}
const { schedule: Ud, cancel: UL } = ty(queueMicrotask, !1);
class pC extends P.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    fC(hC),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Fo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              ue.postRender(() => {
                const l = o.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Ud.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function a0(e) {
  const [t, n] = cC(),
    r = P.useContext(s0);
  return f.jsx(pC, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: P.useContext(o0),
    isPresent: t,
    safeToRemove: n,
  });
}
const hC = {
    borderRadius: {
      ...zi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: zi,
    borderTopRightRadius: zi,
    borderBottomLeftRadius: zi,
    borderBottomRightRadius: zi,
    boxShadow: dC,
  },
  l0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  mC = l0.length,
  Dh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Ih = (e) => typeof e == "number" || K.test(e);
function gC(e, t, n, r, i, s) {
  i
    ? ((e.opacity = xe(0, n.opacity !== void 0 ? n.opacity : 1, vC(r))),
      (e.opacityExit = xe(t.opacity !== void 0 ? t.opacity : 1, 0, yC(r))))
    : s &&
      (e.opacity = xe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < mC; o++) {
    const l = `border${l0[o]}Radius`;
    let a = Oh(t, l),
      u = Oh(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Ih(a) === Ih(u)
        ? ((e[l] = Math.max(xe(Dh(a), Dh(u), r), 0)),
          (Xt.test(u) || Xt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = xe(t.rotate || 0, n.rotate || 0, r));
}
function Oh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const vC = u0(0, 0.5, ly),
  yC = u0(0.5, 0.95, Ze);
function u0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Lr(e, t, r)));
}
function _h(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Tt(e, t) {
  _h(e.x, t.x), _h(e.y, t.y);
}
function Vh(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Fh(e, t, n, r, i) {
  return (
    (e -= t), (e = wa(e, 1 / n, r)), i !== void 0 && (e = wa(e, 1 / i, r)), e
  );
}
function xC(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (Xt.test(t) &&
      ((t = parseFloat(t)), (t = xe(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let l = xe(s.min, s.max, r);
  e === s && (l -= t),
    (e.min = Fh(e.min, t, n, l, i)),
    (e.max = Fh(e.max, t, n, l, i));
}
function zh(e, t, [n, r, i], s, o) {
  xC(e, t[n], t[r], t[i], t.scale, s, o);
}
const wC = ["x", "scaleX", "originX"],
  SC = ["y", "scaleY", "originY"];
function Bh(e, t, n, r) {
  zh(e.x, t, wC, n ? n.x : void 0, r ? r.x : void 0),
    zh(e.y, t, SC, n ? n.y : void 0, r ? r.y : void 0);
}
function Uh(e) {
  return e.translate === 0 && e.scale === 1;
}
function c0(e) {
  return Uh(e.x) && Uh(e.y);
}
function $h(e, t) {
  return e.min === t.min && e.max === t.max;
}
function EC(e, t) {
  return $h(e.x, t.x) && $h(e.y, t.y);
}
function Hh(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function d0(e, t) {
  return Hh(e.x, t.x) && Hh(e.y, t.y);
}
function Gh(e) {
  return yt(e.x) / yt(e.y);
}
function Wh(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class TC {
  constructor() {
    this.members = [];
  }
  add(t) {
    _d(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Xa(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function PC(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: p,
      skewX: h,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      p && (r += `rotateY(${p}deg) `),
      h && (r += `skewX(${h}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const CC = (e, t) => e.depth - t.depth;
class jC {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    _d(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Xa(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(CC),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function zo(e) {
  const t = Fe(e) ? e.get() : e;
  return xP(t) ? t.toValue() : t;
}
function MC(e, t) {
  const n = Qt.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (xn(r), e(s - t));
    };
  return ue.read(r, !0), () => xn(r);
}
function f0(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function p0(e, t, n) {
  const r = Fe(e) ? e : yi(e);
  return r.start(Od("", r, t, n)), r.animation;
}
const cr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ki = typeof window < "u" && window.MotionDebug !== void 0,
  Ul = ["", "X", "Y", "Z"],
  NC = { visibility: "hidden" },
  qh = 1e3;
let LC = 0;
function $l(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function h0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = $y(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ue, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && h0(r);
}
function m0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      (this.id = LC++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Ki &&
              (cr.totalNodes =
                cr.resolvedTargetDeltas =
                cr.recalculatedProjection =
                  0),
            this.nodes.forEach(RC),
            this.nodes.forEach(_C),
            this.nodes.forEach(VC),
            this.nodes.forEach(AC),
            Ki && window.MotionDebug.record(cr);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new jC());
    }
    addEventListener(o, l) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Vd()),
        this.eventHandlers.get(o).add(l)
      );
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = f0(o)), (this.instance = o);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const p = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = MC(p, 250)),
            Fo.hasAnimatedSinceResize &&
              ((Fo.hasAnimatedSinceResize = !1), this.nodes.forEach(Yh));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: p,
              hasRelativeTargetChanged: h,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || $C,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } =
                  c.getProps(),
                g = !this.targetLayout || !d0(this.targetLayout, y) || h,
                v = !p && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (p && (g || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, v);
                const E = { ...Ed(x, "layout"), onPlay: S, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((E.delay = 0), (E.type = !1)),
                  this.startAnimation(E);
              } else
                p || Yh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        xn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(FC),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          h0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Kh);
        return;
      }
      this.isUpdating || this.nodes.forEach(IC),
        (this.isUpdating = !1),
        this.nodes.forEach(OC),
        this.nodes.forEach(kC),
        this.nodes.forEach(bC),
        this.clearAllSnapshots();
      const l = Qt.now();
      (Ge.delta = Wn(0, 1e3 / 60, l - Ge.timestamp)),
        (Ge.timestamp = l),
        (Ge.isProcessing = !0),
        Dl.update.process(Ge),
        Dl.preRender.process(Ge),
        Dl.render.process(Ge),
        (Ge.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ud.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(DC), this.sharedNodes.forEach(zC);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ue.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ue.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ne()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !c0(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (l || ur(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        o && (a = this.removeTransform(a)),
        HC(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: l } = this.options;
      if (!l) return Ne();
      const a = l.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(GC)
        )
      ) {
        const { scroll: c } = this.root;
        c && (ti(a.x, c.offset.x), ti(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Ne();
      if (
        (Tt(a, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: p } = c;
        c !== this.root &&
          d &&
          p.layoutScroll &&
          (d.wasRoot && Tt(a, o), ti(a.x, d.offset.x), ti(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(o, l = !1) {
      const a = Ne();
      Tt(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          ni(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          ur(c.latestValues) && ni(a, c.latestValues);
      }
      return ur(this.latestValues) && ni(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = Ne();
      Tt(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !ur(u.latestValues)) continue;
        uc(u.latestValues) && u.updateSnapshot();
        const c = Ne(),
          d = u.measurePageBox();
        Tt(c, d),
          Bh(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ur(this.latestValues) && Bh(l, this.latestValues), l;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ge.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: p } = this.options;
      if (!(!this.layout || !(d || p))) {
        if (
          ((this.resolvedRelativeTargetAt = Ge.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ne()),
              (this.relativeTargetOrigin = Ne()),
              as(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              Tt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ne()), (this.targetWithTransforms = Ne())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                KP(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Tt(this.target, this.layout.layoutBox),
                n0(this.target, this.targetDelta))
              : Tt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ne()),
                (this.relativeTargetOrigin = Ne()),
                as(this.relativeTargetOrigin, this.target, h.target),
                Tt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ki && cr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          uc(this.parent.latestValues) ||
          t0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ge.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Tt(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x,
        h = this.treeScale.y;
      rC(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = Ne()));
      const { target: y } = l;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Vh(this.prevProjectionDelta.x, this.projectionDelta.x),
          Vh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        os(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== p ||
          this.treeScale.y !== h ||
          !Wh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Wh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Ki && cr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var l;
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        o)
      ) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ei()),
        (this.projectionDelta = ei()),
        (this.projectionDeltaWithTransform = ei());
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        d = ei();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const p = Ne(),
        h = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        x = h !== y,
        S = this.getStack(),
        m = !S || S.members.length <= 1,
        g = !!(x && !m && this.options.crossfade === !0 && !this.path.some(UC));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (E) => {
        const C = E / 1e3;
        Xh(d.x, o.x, C),
          Xh(d.y, o.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (as(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            BC(this.relativeTarget, this.relativeTargetOrigin, p, C),
            v && EC(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = Ne()),
            Tt(v, this.relativeTarget)),
          x &&
            ((this.animationValues = c), gC(c, u, this.latestValues, C, g, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (xn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ue.update(() => {
          (Fo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = p0(0, qh, {
              ...o,
              onUpdate: (l) => {
                this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(qh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!l || !a || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          g0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || Ne();
          const d = yt(this.layout.layoutBox.x);
          (a.x.min = o.target.x.min), (a.x.max = a.x.min + d);
          const p = yt(this.layout.layoutBox.y);
          (a.y.min = o.target.y.min), (a.y.max = a.y.min + p);
        }
        Tt(l, a),
          ni(l, c),
          os(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new TC()),
        this.sharedNodes.get(o).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let l = !1;
      const { latestValues: a } = o;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && $l("z", o, u, this.animationValues);
      for (let c = 0; c < Ul.length; c++)
        $l(`rotate${Ul[c]}`, o, u, this.animationValues),
          $l(`skew${Ul[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return NC;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = zo(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = zo(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !ur(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const p = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = PC(
          this.projectionDeltaWithTransform,
          this.treeScale,
          p
        )),
        c && (u.transform = c(p, u.transform));
      const { x: h, y } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (a =
                    (l = p.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : p.opacityExit)
          : (u.opacity =
              d === this
                ? p.opacity !== void 0
                  ? p.opacity
                  : ""
                : p.opacityExit !== void 0
                ? p.opacityExit
                : 0);
      for (const x in Sa) {
        if (p[x] === void 0) continue;
        const { correct: S, applyTo: m } = Sa[x],
          g = u.transform === "none" ? p[x] : S(p[x], d);
        if (m) {
          const v = m.length;
          for (let E = 0; E < v; E++) u[m[E]] = g;
        } else u[x] = g;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? zo(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Kh),
        this.root.sharedNodes.clear();
    }
  };
}
function kC(e) {
  e.updateLayout();
}
function bC(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Pt((d) => {
          const p = o ? n.measuredBox[d] : n.layoutBox[d],
            h = yt(p);
          (p.min = r[d].min), (p.max = p.min + h);
        })
      : g0(s, n.layoutBox, r) &&
        Pt((d) => {
          const p = o ? n.measuredBox[d] : n.layoutBox[d],
            h = yt(r[d]);
          (p.max = p.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const l = ei();
    os(l, r, n.layoutBox);
    const a = ei();
    o ? os(a, e.applyTransform(i, !0), n.measuredBox) : os(a, r, n.layoutBox);
    const u = !c0(l);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: p, layout: h } = d;
        if (p && h) {
          const y = Ne();
          as(y, n.layoutBox, p.layoutBox);
          const x = Ne();
          as(x, r, h.layoutBox),
            d0(y, x) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function RC(e) {
  Ki && cr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function AC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function DC(e) {
  e.clearSnapshot();
}
function Kh(e) {
  e.clearMeasurements();
}
function IC(e) {
  e.isLayoutDirty = !1;
}
function OC(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Yh(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function _C(e) {
  e.resolveTargetDelta();
}
function VC(e) {
  e.calcProjection();
}
function FC(e) {
  e.resetSkewAndRotation();
}
function zC(e) {
  e.removeLeadSnapshot();
}
function Xh(e, t, n) {
  (e.translate = xe(t.translate, 0, n)),
    (e.scale = xe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Qh(e, t, n, r) {
  (e.min = xe(t.min, n.min, r)), (e.max = xe(t.max, n.max, r));
}
function BC(e, t, n, r) {
  Qh(e.x, t.x, n.x, r), Qh(e.y, t.y, n.y, r);
}
function UC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const $C = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Zh = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Jh = Zh("applewebkit/") && !Zh("chrome/") ? Math.round : Ze;
function em(e) {
  (e.min = Jh(e.min)), (e.max = Jh(e.max));
}
function HC(e) {
  em(e.x), em(e.y);
}
function g0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !qP(Gh(t), Gh(n), 0.2))
  );
}
function GC(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const WC = m0({
    attachResizeListener: (e, t) => ln(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Hl = { current: void 0 },
  v0 = m0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Hl.current) {
        const e = new WC({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Hl.current = e);
      }
      return Hl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  qC = {
    pan: { Feature: uC },
    drag: { Feature: lC, ProjectionNode: v0, MeasureLayout: a0 },
  };
function tm(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (s, o) => {
      if (s.pointerType === "touch" || Qy()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t);
      const a = l[r];
      a && ue.postRender(() => a(s, o));
    };
  return pn(e.current, n, i, { passive: !e.getProps()[r] });
}
class KC extends er {
  mount() {
    this.unmount = fn(tm(this.node, !0), tm(this.node, !1));
  }
  unmount() {}
}
class YC extends er {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = fn(
      ln(this.node.current, "focus", () => this.onFocus()),
      ln(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const y0 = (e, t) => (t ? (e === t ? !0 : y0(e, t.parentElement)) : !1);
function Gl(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Za(n));
}
class XC extends er {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ze),
      (this.removeEndListeners = Ze),
      (this.removeAccessibleListeners = Ze),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = pn(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                p = !d && !y0(this.node.current, l.target) ? c : u;
              p && ue.update(() => p(l, a));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = pn(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = fn(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                Gl("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ue.postRender(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ln(this.node.current, "keyup", o)),
              Gl("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = ln(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Gl("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = ln(this.node.current, "blur", r);
        this.removeAccessibleListeners = fn(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ue.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Qy()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ue.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = pn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = ln(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = fn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const dc = new WeakMap(),
  Wl = new WeakMap(),
  QC = (e) => {
    const t = dc.get(e.target);
    t && t(e);
  },
  ZC = (e) => {
    e.forEach(QC);
  };
function JC({ root: e, ...t }) {
  const n = e || document;
  Wl.has(n) || Wl.set(n, {});
  const r = Wl.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(ZC, { root: e, ...t })), r[i];
}
function ej(e, t, n) {
  const r = JC(t);
  return (
    dc.set(e, n),
    r.observe(e),
    () => {
      dc.delete(e), r.unobserve(e);
    }
  );
}
const tj = { some: 0, all: 1 };
class nj extends er {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : tj[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          p = u ? c : d;
        p && p(a);
      };
    return ej(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(rj(t, n)) && this.startObserver();
  }
  unmount() {}
}
function rj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const ij = {
    inView: { Feature: nj },
    tap: { Feature: XC },
    focus: { Feature: YC },
    hover: { Feature: KC },
  },
  sj = { layout: { ProjectionNode: v0, MeasureLayout: a0 } },
  $d = P.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ja = P.createContext({}),
  Hd = typeof window < "u",
  Gd = Hd ? P.useLayoutEffect : P.useEffect,
  x0 = P.createContext({ strict: !1 });
function oj(e, t, n, r, i) {
  var s, o;
  const { visualElement: l } = P.useContext(Ja),
    a = P.useContext(x0),
    u = P.useContext(Bd),
    c = P.useContext($d).reducedMotion,
    d = P.useRef();
  (r = r || a.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const p = d.current,
    h = P.useContext(o0);
  p &&
    !p.projection &&
    i &&
    (p.type === "html" || p.type === "svg") &&
    aj(d.current, n, i, h),
    P.useInsertionEffect(() => {
      p && p.update(n, u);
    });
  const y = n[Uy],
    x = P.useRef(
      !!y &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, y)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, y))
    );
  return (
    Gd(() => {
      p &&
        ((window.MotionIsMounted = !0),
        p.updateFeatures(),
        Ud.render(p.render),
        x.current && p.animationState && p.animationState.animateChanges());
    }),
    P.useEffect(() => {
      p &&
        (!x.current && p.animationState && p.animationState.animateChanges(),
        x.current &&
          (queueMicrotask(() => {
            var S;
            (S = window.MotionHandoffMarkAsComplete) === null ||
              S === void 0 ||
              S.call(window, y);
          }),
          (x.current = !1)));
    }),
    p
  );
}
function aj(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : w0(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (l && Jr(l)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u,
    });
}
function w0(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : w0(e.parent);
}
function lj(e, t, n) {
  return P.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Jr(n) && (n.current = r));
    },
    [t]
  );
}
function el(e) {
  return Ls(e.animate) || Sd.some((t) => ks(e[t]));
}
function S0(e) {
  return !!(el(e) || e.variants);
}
function uj(e, t) {
  if (el(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ks(n) ? n : void 0,
      animate: ks(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function cj(e) {
  const { initial: t, animate: n } = uj(e, P.useContext(Ja));
  return P.useMemo(() => ({ initial: t, animate: n }), [nm(t), nm(n)]);
}
function nm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const rm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  xi = {};
for (const e in rm) xi[e] = { isEnabled: (t) => rm[e].some((n) => !!t[n]) };
function dj(e) {
  for (const t in e) xi[t] = { ...xi[t], ...e[t] };
}
const fj = Symbol.for("motionComponentSymbol");
function pj({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && dj(e);
  function s(l, a) {
    let u;
    const c = { ...P.useContext($d), ...l, layoutId: hj(l) },
      { isStatic: d } = c,
      p = cj(l),
      h = r(l, d);
    if (!d && Hd) {
      mj();
      const y = gj(c);
      (u = y.MeasureLayout),
        (p.visualElement = oj(i, h, c, t, y.ProjectionNode));
    }
    return f.jsxs(Ja.Provider, {
      value: p,
      children: [
        u && p.visualElement
          ? f.jsx(u, { visualElement: p.visualElement, ...c })
          : null,
        n(i, l, lj(h, p.visualElement, a), h, d, p.visualElement),
      ],
    });
  }
  const o = P.forwardRef(s);
  return (o[fj] = i), o;
}
function hj({ layoutId: e }) {
  const t = P.useContext(s0).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function mj(e, t) {
  P.useContext(x0).strict;
}
function gj(e) {
  const { drag: t, layout: n } = xi;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const vj = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Wd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(vj.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function E0(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const T0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function P0(e, t, n, r) {
  E0(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(T0.has(i) ? i : Qa(i), t.attrs[i]);
}
function C0(e, { layout: t, layoutId: n }) {
  return (
    Jn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Sa[e] || e === "opacity"))
  );
}
function qd(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (Fe(i[o]) ||
      (t.style && Fe(t.style[o])) ||
      C0(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return (
    n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), s
  );
}
function j0(e, t, n) {
  const r = qd(e, t, n);
  for (const i in e)
    if (Fe(e[i]) || Fe(t[i])) {
      const s =
        zs.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function tl(e) {
  const t = P.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function yj(e) {
  if (Jn.has(e)) return "transform";
  if (_y.has(e)) return Qa(e);
}
function xj(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  i,
  s,
  o,
  l
) {
  const a = { latestValues: wj(i, s, o, l ? !1 : e, t), renderState: n() };
  return r && (a.mount = (u) => r(i, u, a)), a;
}
const M0 = (e) => (t, n) => {
  const r = P.useContext(Ja),
    i = P.useContext(Bd),
    s = () => xj(e, t, r, i, n);
  return n ? s() : tl(s);
};
function im(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    const s = xd(e, r[i]);
    if (s) {
      const { transitionEnd: o, transition: l, ...a } = s;
      n(a, o);
    }
  }
}
function wj(e, t, n, r, i) {
  var s;
  const o = {},
    l = new Set(),
    a =
      r &&
      ((s = e.style) === null || s === void 0 ? void 0 : s.willChange) ===
        void 0,
    u = i(e, {});
  for (const S in u) o[S] = zo(u[S]);
  let { initial: c, animate: d } = e;
  const p = el(e),
    h = S0(e);
  t &&
    h &&
    !p &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), d === void 0 && (d = t.animate));
  let y = n ? n.initial === !1 : !1;
  y = y || c === !1;
  const x = y ? d : c;
  return (
    x &&
      typeof x != "boolean" &&
      !Ls(x) &&
      im(e, x, (S, m) => {
        for (const g in S) {
          let v = S[g];
          if (Array.isArray(v)) {
            const E = y ? v.length - 1 : 0;
            v = v[E];
          }
          v !== null && (o[g] = v);
        }
        for (const g in m) o[g] = m[g];
      }),
    a &&
      (d &&
        c !== !1 &&
        !Ls(d) &&
        im(e, d, (S) => {
          for (const m in S) {
            const g = yj(m);
            g && l.add(g);
          }
        }),
      l.size && (o.willChange = Array.from(l).join(","))),
    o
  );
}
const Kd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  N0 = () => ({ ...Kd(), attrs: {} }),
  L0 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Sj = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Ej = zs.length;
function Tj(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < Ej; s++) {
    const o = zs[s],
      l = e[o];
    if (l === void 0) continue;
    let a = !0;
    if (
      (typeof l == "number"
        ? (a = l === (o.startsWith("scale") ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = L0(l, Ld[o]);
      if (!a) {
        i = !1;
        const c = Sj[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Yd(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    l = !1;
  for (const a in t) {
    const u = t[a];
    if (Jn.has(a)) {
      o = !0;
      continue;
    } else if (py(a)) {
      i[a] = u;
      continue;
    } else {
      const c = L0(u, Ld[a]);
      a.startsWith("origin") ? ((l = !0), (s[a] = c)) : (r[a] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Tj(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
function sm(e, t, n) {
  return typeof e == "string" ? e : K.transform(t + n * e);
}
function Pj(e, t, n) {
  const r = sm(t, e.x, e.width),
    i = sm(n, e.y, e.height);
  return `${r} ${i}`;
}
const Cj = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  jj = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Mj(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Cj : jj;
  e[s.offset] = K.transform(-r);
  const o = K.transform(t),
    l = K.transform(n);
  e[s.array] = `${o} ${l}`;
}
function Xd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  d
) {
  if ((Yd(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: p, style: h, dimensions: y } = e;
  p.transform && (y && (h.transform = p.transform), delete p.transform),
    y &&
      (i !== void 0 || s !== void 0 || h.transform) &&
      (h.transformOrigin = Pj(
        y,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (p.x = t),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    o !== void 0 && Mj(p, o, l, a, !1);
}
const Qd = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  Nj = {
    useVisualState: M0({
      scrapeMotionValuesFromProps: j0,
      createRenderState: N0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ue.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ue.render(() => {
            Xd(n, r, Qd(t.tagName), e.transformTemplate), P0(t, n);
          });
      },
    }),
  },
  Lj = {
    useVisualState: M0({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: qd,
      createRenderState: Kd,
    }),
  };
function k0(e, t, n) {
  for (const r in t) !Fe(t[r]) && !C0(r, n) && (e[r] = t[r]);
}
function kj({ transformTemplate: e }, t) {
  return P.useMemo(() => {
    const n = Kd();
    return Yd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function bj(e, t) {
  const n = e.style || {},
    r = {};
  return k0(r, n, e), Object.assign(r, kj(e, t)), r;
}
function Rj(e, t) {
  const n = {},
    r = bj(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const Aj = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ea(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Aj.has(e)
  );
}
let b0 = (e) => !Ea(e);
function Dj(e) {
  e && (b0 = (t) => (t.startsWith("on") ? !Ea(t) : e(t)));
}
try {
  Dj(require("@emotion/is-prop-valid").default);
} catch {}
function Ij(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((b0(i) ||
        (n === !0 && Ea(i)) ||
        (!t && !Ea(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Oj(e, t, n, r) {
  const i = P.useMemo(() => {
    const s = N0();
    return (
      Xd(s, t, Qd(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    k0(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function _j(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (Wd(n) ? Oj : Rj)(r, s, o, n),
      u = Ij(r, typeof n == "string", e),
      c = n !== P.Fragment ? { ...u, ...a, ref: i } : {},
      { children: d } = r,
      p = P.useMemo(() => (Fe(d) ? d.get() : d), [d]);
    return P.createElement(n, { ...c, children: p });
  };
}
function Vj(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(Wd(r) ? Nj : Lj),
      preloadedFeatures: e,
      useRender: _j(i),
      createVisualElement: t,
      Component: r,
    };
    return pj(o);
  };
}
const fc = { current: null },
  R0 = { current: !1 };
function Fj() {
  if (((R0.current = !0), !!Hd))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (fc.current = e.matches);
      e.addListener(t), t();
    } else fc.current = !1;
}
function zj(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (Fe(i)) e.addValue(r, i);
    else if (Fe(s)) e.addValue(r, yi(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, yi(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const wi = new WeakMap(),
  Bj = [...gy, Xe, qn],
  Uj = (e) => Bj.find(my(e)),
  om = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class A0 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    l = {}
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = jd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const p = Qt.now();
        this.renderScheduledAt < p &&
          ((this.renderScheduledAt = p), ue.render(this.render, !1, !0));
      });
    const { latestValues: a, renderState: u } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = el(n)),
      (this.isVariantNode = S0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const p in d) {
      const h = d[p];
      a[p] !== void 0 && Fe(h) && h.set(a[p], !1);
    }
  }
  mount(t) {
    (this.current = t),
      wi.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      R0.current || Fj(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : fc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    wi.delete(this.current),
      this.projection && this.projection.unmount(),
      xn(this.notifyUpdate),
      xn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Jn.has(t),
      i = n.on("change", (l) => {
        (this.latestValues[t] = l),
          this.props.onUpdate && ue.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in xi) {
      const n = xi[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ne();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < om.length; r++) {
      const i = om[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = zj(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = yi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (dy(i) || cy(i))
          ? (i = parseFloat(i))
          : !Uj(i) && qn.test(n) && (i = Py(t, n)),
        this.setBaseTarget(t, Fe(i) ? i.get() : i)),
      Fe(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = xd(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Fe(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Vd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class D0 extends A0 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Cy);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function $j(e) {
  return window.getComputedStyle(e);
}
class I0 extends D0 {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = E0);
  }
  readValueFromInstance(t, n) {
    if (Jn.has(n)) {
      const r = kd(n);
      return (r && r.default) || 0;
    } else {
      const r = $j(t),
        i = (py(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return r0(t, n);
  }
  build(t, n, r) {
    Yd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qd(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Fe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class O0 extends D0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ne);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Jn.has(n)) {
      const r = kd(n);
      return (r && r.default) || 0;
    }
    return (n = T0.has(n) ? n : Qa(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return j0(t, n, r);
  }
  build(t, n, r) {
    Xd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    P0(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Qd(t.tagName)), super.mount(t);
  }
}
const Hj = (e, t) =>
    Wd(e) ? new O0(t) : new I0(t, { allowProjection: e !== P.Fragment }),
  Gj = Vj({ ...VP, ...ij, ...qC, ...sj }, Hj),
  Nt = VE(Gj);
function _0(e) {
  const t = tl(() => yi(e)),
    { isStatic: n } = P.useContext($d);
  if (n) {
    const [, r] = P.useState(e);
    P.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function V0(e, t) {
  const n = _0(t()),
    r = () => n.set(t());
  return (
    r(),
    Gd(() => {
      const i = () => ue.preRender(r, !1, !0),
        s = e.map((o) => o.on("change", i));
      return () => {
        s.forEach((o) => o()), xn(r);
      };
    }),
    n
  );
}
const Wj = (e) => e && typeof e == "object" && e.mix,
  qj = (e) => (Wj(e) ? e.mix : void 0);
function Kj(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    s = e[2 + n],
    o = e[3 + n],
    l = Ay(i, s, { mixer: qj(s[0]), ...o });
  return t ? l(r) : l;
}
function Yj(e) {
  (ss.current = []), e();
  const t = V0(ss.current, e);
  return (ss.current = void 0), t;
}
function Xj(e, t, n, r) {
  if (typeof e == "function") return Yj(e);
  const i = typeof t == "function" ? t : Kj(t, n, r);
  return Array.isArray(e) ? am(e, i) : am([e], ([s]) => i(s));
}
function am(e, t) {
  const n = tl(() => []);
  return V0(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function F0(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    n
      ? (((r = n[e]) !== null && r !== void 0) ||
          (n[e] = i.querySelectorAll(e)),
        (e = n[e]))
      : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
function Qj(e) {
  e.values.forEach((t) => t.stop());
}
function pc(e, t) {
  [...t].reverse().forEach((r) => {
    const i = e.getVariant(r);
    i && Fd(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((s) => {
          pc(s, t);
        });
  });
}
function Zj(e, t) {
  if (Array.isArray(t)) return pc(e, t);
  if (typeof t == "string") return pc(e, [t]);
  Fd(e, t);
}
function Jj() {
  const e = new Set(),
    t = {
      subscribe(n) {
        return e.add(n), () => void e.delete(n);
      },
      start(n, r) {
        const i = [];
        return (
          e.forEach((s) => {
            i.push(Hy(s, n, { transitionOverride: r }));
          }),
          Promise.all(i)
        );
      },
      set(n) {
        return e.forEach((r) => {
          Zj(r, n);
        });
      },
      stop() {
        e.forEach((n) => {
          Qj(n);
        });
      },
      mount() {
        return () => {
          t.stop();
        };
      },
    };
  return t;
}
function eM(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Oy(r), ic);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: Yt(i),
  };
}
function Zd(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function z0(e, t, n, r) {
  return typeof e == "string" && Zd(t)
    ? F0(e, n, r)
    : e instanceof NodeList
    ? Array.from(e)
    : Array.isArray(e)
    ? e
    : [e];
}
function lm(e, t, n, r) {
  var i;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : (i = r.get(t)) !== null && i !== void 0
    ? i
    : e;
}
const tM = (e, t, n) => {
  const r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function nM(e, t) {
  return ky(e) ? e[tM(0, e.length, t)] : e;
}
function rM(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    i.at > t && i.at < n && (Xa(e, i), r--);
  }
}
function iM(e, t, n, r, i, s) {
  rM(e, i, s);
  for (let o = 0; o < t.length; o++)
    e.push({ value: t[o], at: xe(i, s, r[o]), easing: nM(n, o) });
}
function sM(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
const oM = "easeInOut";
function aM(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  const s = t.duration || 0.3,
    o = new Map(),
    l = new Map(),
    a = {},
    u = new Map();
  let c = 0,
    d = 0,
    p = 0;
  for (let h = 0; h < e.length; h++) {
    const y = e[h];
    if (typeof y == "string") {
      u.set(y, d);
      continue;
    } else if (!Array.isArray(y)) {
      u.set(y.name, lm(d, y.at, c, u));
      continue;
    }
    let [x, S, m = {}] = y;
    m.at !== void 0 && (d = lm(d, m.at, c, u));
    let g = 0;
    const v = (E, C, N, A = 0, w = 0) => {
      const k = lM(E),
        { delay: M = 0, times: R = Iy(k), type: _ = "keyframes", ...V } = C;
      let { ease: G = t.ease || "easeOut", duration: X } = C;
      const de = typeof M == "function" ? M(A, w) : M,
        ne = k.length,
        b = Ya(_) ? _ : i == null ? void 0 : i[_];
      if (ne <= 2 && b) {
        let re = 100;
        if (ne === 2 && dM(k)) {
          const Rt = k[1] - k[0];
          re = Math.abs(Rt);
        }
        const Be = { ...V };
        X !== void 0 && (Be.duration = Kt(X));
        const Ue = eM(Be, re, b);
        (G = Ue.ease), (X = Ue.duration);
      }
      X ?? (X = s);
      const I = d + de,
        z = I + X;
      R.length === 1 && R[0] === 0 && (R[1] = 1);
      const Z = R.length - k.length;
      Z > 0 && Dy(R, Z),
        k.length === 1 && k.unshift(null),
        iM(N, k, G, R, I, z),
        (g = Math.max(de + X, g)),
        (p = Math.max(z, p));
    };
    if (Fe(x)) {
      const E = um(x, l);
      v(S, m, cm("default", E));
    } else {
      const E = z0(x, S, r, a),
        C = E.length;
      for (let N = 0; N < C; N++) {
        (S = S), (m = m);
        const A = E[N],
          w = um(A, l);
        for (const k in S) v(S[k], uM(m, k), cm(k, w), N, C);
      }
    }
    (c = d), (d += g);
  }
  return (
    l.forEach((h, y) => {
      for (const x in h) {
        const S = h[x];
        S.sort(sM);
        const m = [],
          g = [],
          v = [];
        for (let C = 0; C < S.length; C++) {
          const { at: N, value: A, easing: w } = S[C];
          m.push(A), g.push(Lr(0, p, N)), v.push(w || "easeOut");
        }
        g[0] !== 0 && (g.unshift(0), m.unshift(m[0]), v.unshift(oM)),
          g[g.length - 1] !== 1 && (g.push(1), m.push(null)),
          o.has(y) || o.set(y, { keyframes: {}, transition: {} });
        const E = o.get(y);
        (E.keyframes[x] = m),
          (E.transition[x] = { ...t, duration: p, ease: v, times: g, ...n });
      }
    }),
    o
  );
}
function um(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function cm(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function lM(e) {
  return Array.isArray(e) ? e : [e];
}
function uM(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
const cM = (e) => typeof e == "number",
  dM = (e) => e.every(cM);
function fM(e, t) {
  return e in t;
}
class pM extends A0 {
  constructor() {
    super(...arguments), (this.type = "object");
  }
  readValueFromInstance(t, n) {
    if (fM(n, t)) {
      const r = t[n];
      if (typeof r == "string" || typeof r == "number") return r;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(t, n) {
    delete n.output[t];
  }
  measureInstanceViewportBox() {
    return Ne();
  }
  build(t, n) {
    Object.assign(t.output, n);
  }
  renderInstance(t, { output: n }) {
    Object.assign(t, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function hM(e) {
  const t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = f0(e) ? new O0(t) : new I0(t);
  n.mount(e), wi.set(e, n);
}
function mM(e) {
  const t = {
      presenceContext: null,
      props: {},
      visualState: { renderState: { output: {} }, latestValues: {} },
    },
    n = new pM(t);
  n.mount(e), wi.set(e, n);
}
function gM(e, t) {
  return Fe(e) || typeof e == "number" || (typeof e == "string" && !Zd(t));
}
function B0(e, t, n, r) {
  const i = [];
  if (gM(e, t)) i.push(p0(e, (Zd(t) && t.default) || t, n && (n.default || n)));
  else {
    const s = z0(e, t, r),
      o = s.length;
    for (let l = 0; l < o; l++) {
      const a = s[l],
        u = a instanceof Element ? hM : mM;
      wi.has(a) || u(a);
      const c = wi.get(a),
        d = { ...n };
      "delay" in d && typeof d.delay == "function" && (d.delay = d.delay(l, o)),
        i.push(...zd(c, { ...t, transition: d }, {}));
    }
  }
  return i;
}
function vM(e, t, n) {
  const r = [];
  return (
    aM(e, t, n, { spring: bd }).forEach(
      ({ keyframes: s, transition: o }, l) => {
        r.push(...B0(l, s, o));
      }
    ),
    r
  );
}
function yM(e) {
  return Array.isArray(e) && Array.isArray(e[0]);
}
function xM(e) {
  function t(n, r, i) {
    let s = [];
    return yM(n) ? (s = vM(n, r, e)) : (s = B0(n, r, i, e)), new By(s);
  }
  return t;
}
const wM = xM();
function SM() {
  const e = tl(Jj);
  return Gd(e.mount, []), e;
}
const EM = SM,
  TM = { some: 0, all: 1 };
function PM(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const s = F0(e),
    o = new WeakMap(),
    l = (u) => {
      u.forEach((c) => {
        const d = o.get(c.target);
        if (c.isIntersecting !== !!d)
          if (c.isIntersecting) {
            const p = t(c);
            typeof p == "function" ? o.set(c.target, p) : a.unobserve(c.target);
          } else d && (d(c), o.delete(c.target));
      });
    },
    a = new IntersectionObserver(l, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : TM[i],
    });
  return s.forEach((u) => a.observe(u)), () => a.disconnect();
}
function U0(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  const [s, o] = P.useState(!1);
  return (
    P.useEffect(() => {
      if (!e.current || (i && s)) return;
      const l = () => (o(!0), i ? void 0 : () => o(!1)),
        a = { root: (t && t.current) || void 0, margin: n, amount: r };
      return PM(e.current, l, a);
    }, [t, e, n, i, r]),
    s
  );
}
const CM = ({ isOpen: e, onClose: t }) => {
    const n = wr((r) => r.openFormulaire);
    return f.jsxs(Nt.div, {
      className: "sideNav",
      initial: { x: "-100%" },
      animate: { x: e ? "0%" : "-100%" },
      transition: { duration: 0.3 },
      children: [
        f.jsx("button", {
          className: "closeSideNav",
          onClick: t,
          children: "×",
        }),
        f.jsxs("ul", {
          children: [
            f.jsx("li", {
              children: f.jsx(J, {
                to: "/",
                onClick: t,
                children: "Le Groupe",
              }),
            }),
            f.jsx("li", {
              children: f.jsx(J, {
                to: "/Expertise",
                onClick: t,
                children: "Expertises",
              }),
            }),
            f.jsx("li", {
              children: f.jsx(J, {
                to: "/la-Maison-Des-Entreprises",
                onClick: t,
                children: "La Maison des Entreprises",
              }),
            }),
            f.jsx("li", {
              children: f.jsx(J, {
                to: "insight",
                onClick: t,
                children: "Insight",
              }),
            }),
            f.jsx("li", {
              children: f.jsx(J, {
                to: "#",
                onClick: t,
                children: "Espace Client",
              }),
            }),
            f.jsx("li", {
              onClick: n,
              children: f.jsx(J, { to: "", children: "Contactez nous" }),
            }),
          ],
        }),
      ],
    });
  },
  jM = () => {
    const e = wr((y) => y.status1),
      t = wr((y) => y.openFormulaire),
      n = wr((y) => y.closeFormulaire),
      r = Zn(),
      [i, s] = P.useState(r.pathname),
      [o, l] = P.useState(null),
      [a, u] = P.useState(!1),
      c = {
        enter: {
          opacity: 1,
          rotateX: 0,
          transition: { duration: 0.2 },
          display: "block",
        },
        exit: {
          opacity: 0,
          rotateX: -15,
          transition: { duration: 0.1, delay: 0.1 },
          transitionEnd: { display: "none" },
        },
      };
    P.useEffect(() => {
      s(r.pathname);
    }, [r]);
    const d = (y) => l(y),
      p = () => l(null),
      h = () => u(!a);
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx("nav", {
          className: "containerHeader",
          children: f.jsxs("div", {
            className: "navbarre",
            children: [
              f.jsx(J, {
                to: "",
                children: f.jsx("img", {
                  src: "./images/Logo.png",
                  alt: "Logo",
                }),
              }),
              f.jsx("div", {
                className: "itemsNavbarre",
                children: f.jsxs("ul", {
                  className: "line-1",
                  children: [
                    f.jsxs(Nt.div, {
                      className: "boxItem",
                      onMouseEnter: () => d("groupe"),
                      onMouseLeave: p,
                      children: [
                        f.jsx(J, {
                          to: "/",
                          className: i === "/" ? "red" : "",
                          onClick: () => s("/"),
                          children: "Le Groupe",
                        }),
                        f.jsx(Nt.div, {
                          className: "sub-menu",
                          initial: "exit",
                          animate: o === "groupe" ? "enter" : "exit",
                          variants: c,
                          children: f.jsx("div", {
                            className: "sub-menu-container",
                            children: f.jsxs("div", {
                              className: "items",
                              children: [
                                f.jsx("span", {
                                  className: "sub-menu-item",
                                  children: f.jsx(J, {
                                    to: "/#qui-sommes-nous",
                                    children: "Qui sommes Nous ?",
                                  }),
                                }),
                                f.jsx("span", {
                                  className: "sub-menu-item",
                                  children: f.jsx(J, {
                                    to: "/#nos-pole-partenaires",
                                    children: "Nos Pôle partenaires",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    f.jsxs(Nt.div, {
                      className: "boxItem",
                      onMouseEnter: () => d("expertise"),
                      onMouseLeave: p,
                      children: [
                        f.jsx(J, {
                          to: "/Expertise",
                          className: i === "/Expertise" ? "red" : "",
                          onClick: () => s("/Expertise"),
                          children: "Expertises",
                        }),
                        f.jsx(Nt.div, {
                          className: "sub-menu",
                          initial: "exit",
                          animate: o === "expertise" ? "enter" : "exit",
                          variants: c,
                          children: f.jsx("div", {
                            className: "sub-menu-container",
                            children: f.jsxs("div", {
                              className: "items",
                              children: [
                                f.jsx("span", {
                                  className: "sub-menu-item",
                                  children: f.jsx(J, {
                                    to: "Conseil-Formation",
                                    children: "Conseil-Formation",
                                  }),
                                }),
                                f.jsx("span", {
                                  className: "sub-menu-item",
                                  children: f.jsx(J, {
                                    to: "Expertise-IT",
                                    children: "Expertise-IT",
                                  }),
                                }),
                                f.jsx("span", {
                                  className: "sub-menu-item",
                                  children: f.jsx(J, {
                                    to: "Finance",
                                    children: "Finance",
                                  }),
                                }),
                                f.jsx("span", {
                                  className: "sub-menu-item",
                                  children: f.jsx(J, {
                                    to: "Expertise-comptable-fiscalite",
                                    children: "Expertise-comptable-fiscalite",
                                  }),
                                }),
                                f.jsx("span", {
                                  className: "sub-menu-item",
                                  children: f.jsx(J, {
                                    to: "Immobilier",
                                    children: "Immobilier",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    f.jsx("li", {
                      className: "boxItem",
                      children: f.jsx(J, {
                        to: "/la-Maison-Des-Entreprises",
                        className:
                          i === "/la-Maison-Des-Entreprises" ? "purple" : "",
                        onClick: () => s("/la-Maison-Des-Entreprises"),
                        children: "La Maison des Entreprises",
                      }),
                    }),
                    f.jsx("li", {
                      className: "boxItem",
                      children: f.jsx(J, {
                        to: "insight",
                        className: i === "#" ? "red" : "",
                        onClick: () => s("#"),
                        children: "Insight",
                      }),
                    }),
                    f.jsx("li", {
                      className: "boxItemd",
                      children: f.jsx(J, {
                        to: "#",
                        className:
                          i === "/la-Maison-Des-Entreprises"
                            ? "purpleSpaceCLient"
                            : "",
                        onClick: () => s("#"),
                        children: "Espace Client",
                      }),
                    }),
                  ],
                }),
              }),
              f.jsx("div", {
                className: "buttonJoin",
                children: f.jsx("button", {
                  className:
                    i === "/la-Maison-Des-Entreprises" ? "purpleBtn" : "",
                  onClick: t,
                  children: "Contactez nous",
                }),
              }),
              f.jsx("button", {
                className: "menuButton",
                onClick: h,
                children: f.jsx("span", { children: ". . ." }),
              }),
            ],
          }),
        }),
        e &&
          f.jsx("div", {
            className: "overlay",
            children: f.jsxs("div", {
              className: "formContainer1",
              children: [
                f.jsx("button", {
                  className: "closeButton",
                  onClick: n,
                  children: "x",
                }),
                f.jsx("h2", { children: "Envoyer un email" }),
                f.jsxs("form", {
                  children: [
                    f.jsxs("label", {
                      children: [
                        "Nom",
                        f.jsx("input", {
                          type: "text",
                          placeholder: "Exemple(Patrick)",
                        }),
                      ],
                    }),
                    f.jsxs("label", {
                      children: [
                        "Prenom",
                        f.jsx("input", {
                          type: "text",
                          placeholder: "Exemple(Kouame)",
                        }),
                      ],
                    }),
                    f.jsxs("label", {
                      children: [
                        "E-mail",
                        f.jsx("input", {
                          type: "email",
                          placeholder: "E-mail",
                        }),
                      ],
                    }),
                    f.jsx("button", { type: "submit", children: "Envoyer" }),
                  ],
                }),
              ],
            }),
          }),
        f.jsx(CM, { isOpen: a, onClose: h }),
      ],
    });
  },
  MM = () => {
    const e = wr((t) => t.openFormulaire);
    return f.jsxs("footer", {
      className: "containerFooter ",
      children: [
        f.jsxs("div", {
          className: "section-margin ligne1Footer ",
          children: [
            f.jsxs("div", {
              className: "colone1Footer",
              children: [
                f.jsx("img", { src: "./images/Logo.png", alt: "" }),
                f.jsx("span", { children: "Subscribe" }),
                f.jsxs("div", {
                  className: "lastBoxColone1",
                  children: [
                    f.jsx("span", {
                      children:
                        "Inscrivez-vous à notre newsletter et profitez de nos dernières informations.",
                    }),
                    f.jsxs("form", {
                      className: "newsLetter",
                      children: [
                        f.jsx("input", {
                          type: "text",
                          name: "newsletter",
                          placeholder: "Enter your email",
                        }),
                        f.jsx("img", {
                          src: "./icons/arrow_right.svg",
                          alt: "arrow",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className: "coloneFooter",
              children: [
                f.jsx("span", {
                  className: "title",
                  children: "Bureau Abidjan",
                }),
                f.jsxs("div", {
                  className: "spancolon2Footer",
                  children: [
                    f.jsxs("span", {
                      className: "spansFooter",
                      children: [
                        "Abidjan, Boulevard Latrille",
                        f.jsx("br", {}),
                        " Rue du lycée technique face",
                        " ",
                        f.jsx("br", {}),
                        "Palm Club Hôtel",
                      ],
                    }),
                    f.jsxs("span", {
                      className: "spansFooter",
                      children: [
                        "contact@c2s-groupe.com",
                        f.jsx("br", {}),
                        "lamaisondesentreprises@c2s-groupe.com",
                      ],
                    }),
                    f.jsx("span", {
                      className: "spansFooter",
                      children: "+(225) 2721387275",
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className: "coloneFooter",
              children: [
                f.jsx("span", {
                  className: "title",
                  children: "Bureau France",
                }),
                f.jsxs("div", {
                  className: "spancolon2Footer",
                  children: [
                    f.jsxs("span", {
                      className: "spansFooter",
                      children: [
                        "33, Boulevard Saint Michel, ",
                        f.jsx("br", {}),
                        " Le Mans",
                      ],
                    }),
                    f.jsx("span", {
                      className: "spansFooter",
                      children: "+(33) 7 58 64 96 35",
                    }),
                    f.jsx("span", {
                      className: "spansFooter",
                      children: "+(33) 7 51 55 08 61",
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className: "coloneFooter",
              children: [
                f.jsx("span", {
                  className: "title",
                  children: "Liens rapides",
                }),
                f.jsxs("div", {
                  className: "spancolon2Footer",
                  children: [
                    f.jsxs("span", {
                      className: "spansFooter",
                      children: [
                        f.jsx(J, {
                          to: "Conseil-Formation",
                          children: "Conseil & formation",
                        }),
                        " ",
                      ],
                    }),
                    f.jsx("span", {
                      className: "spansFooter",
                      children: f.jsx(J, {
                        to: "Expertise-IT",
                        children: "Expertise IT ",
                      }),
                    }),
                    f.jsx("span", {
                      className: "spansFooter",
                      children: f.jsx(J, {
                        to: "Finance",
                        children: " Finance",
                      }),
                    }),
                    f.jsx("span", {
                      className: "spansFooter",
                      children: f.jsxs(J, {
                        to: "Expertise-comptable-fiscalite",
                        children: ["Expertise comptable & fiscalité", " "],
                      }),
                    }),
                    f.jsx("span", {
                      className: "spansFooter",
                      children: f.jsx(J, {
                        to: "Immobilier",
                        children: "Immobilier",
                      }),
                    }),
                    f.jsx("span", {
                      className: "spansFooter",
                      children: f.jsx(J, {
                        to: "la-Maison-Des-Entreprises",
                        children: "La maison des entreprises",
                      }),
                    }),
                    f.jsx("span", {
                      className: "spansFooter",
                      children: f.jsx(J, {
                        to: "insight",
                        children: "Insight",
                      }),
                    }),
                    f.jsx("span", {
                      className: "spansFooter",
                      children: f.jsx(J, { to: "#", children: "À propos" }),
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className: "coloneFooter",
              children: [
                f.jsx("span", { className: "title", children: "Support" }),
                f.jsx("span", {
                  className: "colortextFooter",
                  children: f.jsx("button", {
                    onClick: e,
                    children: "Contactez nous",
                  }),
                }),
                f.jsx("span", {
                  className: "colortextFooter",
                  children: f.jsx(J, { to: "#", children: "Contactez Nous " }),
                }),
                f.jsxs("div", {
                  className: "boxNetwork",
                  children: [
                    f.jsx("div", { className: "boxImageNetwork" }),
                    f.jsxs("div", {
                      className: "linkedreseau",
                      children: [
                        f.jsx("img", { src: "./icons/facebook.svg", alt: "" }),
                        f.jsx("img", { src: "./icons/linkedin.svg", alt: "" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        f.jsx("span", {
          className: "copiryght",
          children: "Copyright © 2024 C2S, All rights reserved.",
        }),
      ],
    });
  };
function NM() {
  const [e, t] = P.useState(!1),
    n = Zn();
  return (
    P.useEffect(() => {
      t(!0);
      const r = setTimeout(() => {
        t(!1);
      }, 100);
      return () => clearTimeout(r);
    }, [n]),
    f.jsxs("main", {
      children: [
        f.jsx(jM, {}),
        e && f.jsx("div", { className: "loader" }),
        f.jsx(dE, {}),
        f.jsx(MM, {}),
      ],
    })
  );
}
const LM = "" + new URL("../images/imageBlock1.jpg", import.meta.url).href;
function kM() {
  return f.jsx(Nt.div, {
    className: "block1 sectionMargin",
    children: f.jsxs("div", {
      className: "imageBlock1",
      children: [
        f.jsx("img", { src: LM, alt: "imageHero" }),
        f.jsx("span", {
          className: "text2",
          children: "“Le chemin de l’excellence, c’est la discipline.’’",
        }),
        f.jsx("h2", { children: "Olivier de Kersauson" }),
      ],
    }),
  });
}
var hc = new Map(),
  So = new WeakMap(),
  dm = 0,
  bM = void 0;
function RM(e) {
  return e
    ? (So.has(e) || ((dm += 1), So.set(e, dm.toString())), So.get(e))
    : "0";
}
function AM(e) {
  return Object.keys(e)
    .sort()
    .filter((t) => e[t] !== void 0)
    .map((t) => `${t}_${t === "root" ? RM(e.root) : e[t]}`)
    .toString();
}
function DM(e) {
  const t = AM(e);
  let n = hc.get(t);
  if (!n) {
    const r = new Map();
    let i;
    const s = new IntersectionObserver((o) => {
      o.forEach((l) => {
        var a;
        const u = l.isIntersecting && i.some((c) => l.intersectionRatio >= c);
        e.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = u),
          (a = r.get(l.target)) == null ||
            a.forEach((c) => {
              c(u, l);
            });
      });
    }, e);
    (i =
      s.thresholds ||
      (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (n = { id: t, observer: s, elements: r }),
      hc.set(t, n);
  }
  return n;
}
function IM(e, t, n = {}, r = bM) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const a = e.getBoundingClientRect();
    return (
      t(r, {
        isIntersecting: r,
        target: e,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: a,
        intersectionRect: a,
        rootBounds: a,
      }),
      () => {}
    );
  }
  const { id: i, observer: s, elements: o } = DM(n),
    l = o.get(e) || [];
  return (
    o.has(e) || o.set(e, l),
    l.push(t),
    s.observe(e),
    function () {
      l.splice(l.indexOf(t), 1),
        l.length === 0 && (o.delete(e), s.unobserve(e)),
        o.size === 0 && (s.disconnect(), hc.delete(i));
    }
  );
}
function Jd({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: s,
  skip: o,
  initialInView: l,
  fallbackInView: a,
  onChange: u,
} = {}) {
  var c;
  const [d, p] = P.useState(null),
    h = P.useRef(),
    [y, x] = P.useState({ inView: !!l, entry: void 0 });
  (h.current = u),
    P.useEffect(() => {
      if (o || !d) return;
      let v;
      return (
        (v = IM(
          d,
          (E, C) => {
            x({ inView: E, entry: C }),
              h.current && h.current(E, C),
              C.isIntersecting && s && v && (v(), (v = void 0));
          },
          {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t,
          },
          a
        )),
        () => {
          v && v();
        }
      );
    }, [Array.isArray(e) ? e.toString() : e, d, i, r, s, o, n, a, t]);
  const S = (c = y.entry) == null ? void 0 : c.target,
    m = P.useRef();
  !d &&
    S &&
    !s &&
    !o &&
    m.current !== S &&
    ((m.current = S), x({ inView: !!l, entry: void 0 }));
  const g = [p, y.inView, y.entry];
  return (g.ref = g[0]), (g.inView = g[1]), (g.entry = g[2]), g;
}
function kr({ title: e, sousTitre: t, description: n, image: r }) {
  const { ref: i, inView: s } = Jd({ threshold: 0.001 }),
    [o, l] = P.useState("down");
  return (
    P.useEffect(() => {
      const a = () => {
        const c = window.scrollY;
        l(c > u ? "down" : "up"), (u = c);
      };
      let u = window.scrollY;
      return (
        window.addEventListener("scroll", a),
        () => {
          window.removeEventListener("scroll", a);
        }
      );
    }, []),
    f.jsxs(Nt.div, {
      className: "containerBlock2",
      ref: i,
      initial: { y: 100, opacity: 0 },
      animate: { y: s ? (o === "down" ? 10 : -50) : 150, opacity: s ? 1 : 0 },
      transition: { type: "spring", stiffness: 100, damping: 20 },
      children: [
        f.jsxs("div", {
          className: "titles sectionMargin",
          children: [
            f.jsx("h1", { children: e }),
            f.jsx("span", { children: t }),
          ],
        }),
        f.jsxs("div", {
          className: "items sectionMargin",
          children: [
            f.jsx("div", {
              className: "boxtext",
              children: f.jsx("span", { children: n }),
            }),
            f.jsx("div", {
              className: "boximg",
              children: f.jsx("img", { src: r, alt: "" }),
            }),
          ],
        }),
      ],
    })
  );
}
const ef = ({ text1: e, text2: t, couleurT1: n, couleurT2: r }) =>
    f.jsxs("div", {
      className: "gg1",
      children: [
        f.jsx("span", { style: { color: n }, children: e }),
        f.jsx("span", { style: { color: r }, children: t }),
      ],
    }),
  OM = ({ text: e, status: t, color: n }) =>
    f.jsx("div", {
      className: "mainContainerText2",
      style: { padding: t ? "70px 75px" : "", color: n || "" },
      children: f.jsx("p", { children: e }),
    });
function _M() {
  const { ref: e, inView: t } = Jd({ threshold: 0.1 }),
    [n, r] = P.useState("down");
  return (
    P.useEffect(() => {
      const i = () => {
        const o = window.scrollY;
        r(o > s ? "down" : "up"), (s = o);
      };
      let s = window.scrollY;
      return (
        window.addEventListener("scroll", i),
        () => {
          window.removeEventListener("scroll", i);
        }
      );
    }, []),
    f.jsx("div", {
      className: "containerBlock4",
      ref: e,
      children: f.jsx(Nt.div, {
        ref: e,
        initial: { y: 100, opacity: 0 },
        animate: { y: t ? (n === "down" ? 10 : -90) : 100, opacity: t ? 1 : 0 },
        transition: { type: "spring", stiffness: 100, damping: 20 },
        children: f.jsx("div", {
          className: "itemsBlock3  widthBlockColomn",
          children: f.jsxs("div", {
            className: "line1 ",
            children: [
              f.jsx(ef, {
                text1: "Nos",
                text2: "Valeurs",
                couleurT1: "white",
                couleurT2: "white",
              }),
              f.jsx(OM, {
                status: !0,
                text: "Intégrité, Agilité, Innovation et Excellence sont au cœur de nos actions. Ces valeurs nous permettent d'offrir aux organisations, qu'elles soient publiques ou privées, des solutions adaptées pour améliorer l'expérience client, renforcer la performance des entreprises, faciliter la gestion du changement, impulser la transformation numérique et développer les compétences.",
                color: "white",
              }),
            ],
          }),
        }),
      }),
    })
  );
}
function fm(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function tf(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : fm(t[n]) &&
          fm(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          tf(e[n], t[n]);
    });
}
const $0 = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function hn() {
  const e = typeof document < "u" ? document : {};
  return tf(e, $0), e;
}
const VM = {
  document: $0,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function St() {
  const e = typeof window < "u" ? window : {};
  return tf(e, VM), e;
}
function FM(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function zM(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Ta(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Pa() {
  return Date.now();
}
function BM(e) {
  const t = St();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function UM(e, t) {
  t === void 0 && (t = "x");
  const n = St();
  let r, i, s;
  const o = BM(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Eo(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function $M(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ht() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !$M(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, o = i.length; s < o; s += 1) {
        const l = i[s],
          a = Object.getOwnPropertyDescriptor(r, l);
        a !== void 0 &&
          a.enumerable &&
          (Eo(e[l]) && Eo(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : ht(e[l], r[l])
            : !Eo(e[l]) && Eo(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : ht(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function To(e, t, n) {
  e.style.setProperty(t, n);
}
function H0(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = St(),
    s = -t.translate;
  let o = null,
    l;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > s ? "next" : "prev",
    c = (p, h) => (u === "next" && p >= h) || (u === "prev" && p <= h),
    d = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const p = Math.max(Math.min((l - o) / a, 1), 0),
        h = 0.5 - Math.cos(p * Math.PI) / 2;
      let y = s + h * (n - s);
      if ((c(y, n) && (y = n), t.wrapperEl.scrollTo({ [r]: y }), c(y, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: y });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function un(e, t) {
  t === void 0 && (t = "");
  const n = [...e.children];
  return (
    e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter((r) => r.matches(t)) : n
  );
}
function HM(e, t) {
  const n = t.contains(e);
  return !n && t instanceof HTMLSlotElement
    ? [...t.assignedElements()].includes(e)
    : n;
}
function Ca(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function mc(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : FM(t))), n;
}
function GM(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function WM(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function In(e, t) {
  return St().getComputedStyle(e, null).getPropertyValue(t);
}
function pm(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function qM(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) n.push(r), (r = r.parentElement);
  return n;
}
function KM(e, t) {
  function n(r) {
    r.target === e && (t.call(e, r), e.removeEventListener("transitionend", n));
  }
  t && e.addEventListener("transitionend", n);
}
function hm(e, t, n) {
  const r = St();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
function ja(e) {
  let { swiper: t, extendParams: n, on: r } = e;
  n({ controller: { control: void 0, inverse: !1, by: "slide" } }),
    (t.controller = { control: void 0 });
  function i(u, c) {
    const d = (function () {
      let x, S, m;
      return (g, v) => {
        for (S = -1, x = g.length; x - S > 1; )
          (m = (x + S) >> 1), g[m] <= v ? (S = m) : (x = m);
        return x;
      };
    })();
    (this.x = u), (this.y = c), (this.lastIndex = u.length - 1);
    let p, h;
    return (
      (this.interpolate = function (x) {
        return x
          ? ((h = d(this.x, x)),
            (p = h - 1),
            ((x - this.x[p]) * (this.y[h] - this.y[p])) /
              (this.x[h] - this.x[p]) +
              this.y[p])
          : 0;
      }),
      this
    );
  }
  function s(u) {
    t.controller.spline = t.params.loop
      ? new i(t.slidesGrid, u.slidesGrid)
      : new i(t.snapGrid, u.snapGrid);
  }
  function o(u, c) {
    const d = t.controller.control;
    let p, h;
    const y = t.constructor;
    function x(S) {
      if (S.destroyed) return;
      const m = t.rtlTranslate ? -t.translate : t.translate;
      t.params.controller.by === "slide" &&
        (s(S), (h = -t.controller.spline.interpolate(-m))),
        (!h || t.params.controller.by === "container") &&
          ((p =
            (S.maxTranslate() - S.minTranslate()) /
            (t.maxTranslate() - t.minTranslate())),
          (Number.isNaN(p) || !Number.isFinite(p)) && (p = 1),
          (h = (m - t.minTranslate()) * p + S.minTranslate())),
        t.params.controller.inverse && (h = S.maxTranslate() - h),
        S.updateProgress(h),
        S.setTranslate(h, t),
        S.updateActiveIndex(),
        S.updateSlidesClasses();
    }
    if (Array.isArray(d))
      for (let S = 0; S < d.length; S += 1)
        d[S] !== c && d[S] instanceof y && x(d[S]);
    else d instanceof y && c !== d && x(d);
  }
  function l(u, c) {
    const d = t.constructor,
      p = t.controller.control;
    let h;
    function y(x) {
      x.destroyed ||
        (x.setTransition(u, t),
        u !== 0 &&
          (x.transitionStart(),
          x.params.autoHeight &&
            Ta(() => {
              x.updateAutoHeight();
            }),
          KM(x.wrapperEl, () => {
            p && x.transitionEnd();
          })));
    }
    if (Array.isArray(p))
      for (h = 0; h < p.length; h += 1)
        p[h] !== c && p[h] instanceof d && y(p[h]);
    else p instanceof d && c !== p && y(p);
  }
  function a() {
    t.controller.control &&
      t.controller.spline &&
      ((t.controller.spline = void 0), delete t.controller.spline);
  }
  r("beforeInit", () => {
    if (
      typeof window < "u" &&
      (typeof t.params.controller.control == "string" ||
        t.params.controller.control instanceof HTMLElement)
    ) {
      (typeof t.params.controller.control == "string"
        ? [...document.querySelectorAll(t.params.controller.control)]
        : [t.params.controller.control]
      ).forEach((c) => {
        if (
          (t.controller.control || (t.controller.control = []), c && c.swiper)
        )
          t.controller.control.push(c.swiper);
        else if (c) {
          const d = `${t.params.eventsPrefix}init`,
            p = (h) => {
              t.controller.control.push(h.detail[0]),
                t.update(),
                c.removeEventListener(d, p);
            };
          c.addEventListener(d, p);
        }
      });
      return;
    }
    t.controller.control = t.params.controller.control;
  }),
    r("update", () => {
      a();
    }),
    r("resize", () => {
      a();
    }),
    r("observerUpdate", () => {
      a();
    }),
    r("setTranslate", (u, c, d) => {
      !t.controller.control ||
        t.controller.control.destroyed ||
        t.controller.setTranslate(c, d);
    }),
    r("setTransition", (u, c, d) => {
      !t.controller.control ||
        t.controller.control.destroyed ||
        t.controller.setTransition(c, d);
    }),
    Object.assign(t.controller, { setTranslate: o, setTransition: l });
}
function Ma(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: s } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    l,
    a = s && s.autoplay ? s.autoplay.delay : 3e3,
    u = s && s.autoplay ? s.autoplay.delay : 3e3,
    c,
    d = new Date().getTime(),
    p,
    h,
    y,
    x,
    S,
    m,
    g;
  function v(b) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (b.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", v),
        !(g || (b.detail && b.detail.bySwiperTouchMove)) && M()));
  }
  const E = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (p = !0) : p && ((u = c), (p = !1));
      const b = t.autoplay.paused ? c : d + u - new Date().getTime();
      (t.autoplay.timeLeft = b),
        i("autoplayTimeLeft", b, b / a),
        (l = requestAnimationFrame(() => {
          E();
        }));
    },
    C = () => {
      let b;
      return (
        t.virtual && t.params.virtual.enabled
          ? (b = t.slides.filter((z) =>
              z.classList.contains("swiper-slide-active")
            )[0])
          : (b = t.slides[t.activeIndex]),
        b ? parseInt(b.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    N = (b) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(l), E();
      let I = typeof b > "u" ? t.params.autoplay.delay : b;
      (a = t.params.autoplay.delay), (u = t.params.autoplay.delay);
      const z = C();
      !Number.isNaN(z) &&
        z > 0 &&
        typeof b > "u" &&
        ((I = z), (a = z), (u = z)),
        (c = I);
      const Z = t.params.speed,
        re = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(Z, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, Z, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(Z, !0, !0), i("autoplay"))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, Z, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                N();
              })));
        };
      return (
        I > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              re();
            }, I)))
          : requestAnimationFrame(() => {
              re();
            }),
        I
      );
    },
    A = () => {
      (d = new Date().getTime()),
        (t.autoplay.running = !0),
        N(),
        i("autoplayStart");
    },
    w = () => {
      (t.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(l),
        i("autoplayStop");
    },
    k = (b, I) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(o), b || (m = !0);
      const z = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", v)
            : M();
      };
      if (((t.autoplay.paused = !0), I)) {
        S && (c = t.params.autoplay.delay), (S = !1), z();
        return;
      }
      (c = (c || t.params.autoplay.delay) - (new Date().getTime() - d)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), z());
    },
    M = () => {
      (t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((d = new Date().getTime()),
        m ? ((m = !1), N(c)) : N(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    R = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const b = hn();
      b.visibilityState === "hidden" && ((m = !0), k(!0)),
        b.visibilityState === "visible" && M();
    },
    _ = (b) => {
      b.pointerType === "mouse" &&
        ((m = !0), (g = !0), !(t.animating || t.autoplay.paused) && k(!0));
    },
    V = (b) => {
      b.pointerType === "mouse" && ((g = !1), t.autoplay.paused && M());
    },
    G = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", _),
        t.el.addEventListener("pointerleave", V));
    },
    X = () => {
      t.el &&
        typeof t.el != "string" &&
        (t.el.removeEventListener("pointerenter", _),
        t.el.removeEventListener("pointerleave", V));
    },
    de = () => {
      hn().addEventListener("visibilitychange", R);
    },
    ne = () => {
      hn().removeEventListener("visibilitychange", R);
    };
  r("init", () => {
    t.params.autoplay.enabled && (G(), de(), A());
  }),
    r("destroy", () => {
      X(), ne(), t.autoplay.running && w();
    }),
    r("_freeModeStaticRelease", () => {
      (y || m) && M();
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? w() : k(!0, !0);
    }),
    r("beforeTransitionStart", (b, I, z) => {
      t.destroyed ||
        !t.autoplay.running ||
        (z || !t.params.autoplay.disableOnInteraction ? k(!0, !0) : w());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          w();
          return;
        }
        (h = !0),
          (y = !1),
          (m = !1),
          (x = setTimeout(() => {
            (m = !0), (y = !0), k(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !h)) {
        if (
          (clearTimeout(x),
          clearTimeout(o),
          t.params.autoplay.disableOnInteraction)
        ) {
          (y = !1), (h = !1);
          return;
        }
        y && t.params.cssMode && M(), (y = !1), (h = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (S = !0);
    }),
    Object.assign(t.autoplay, { start: A, stop: w, pause: k, resume: M });
}
let ql;
function YM() {
  const e = St(),
    t = hn();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function G0() {
  return ql || (ql = YM()), ql;
}
let Kl;
function XM(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = G0(),
    r = St(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = r.screen.width,
    a = r.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = i === "Win32";
  let y = i === "MacIntel";
  const x = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      y &&
      n.touch &&
      x.indexOf(`${l}x${a}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (y = !1)),
    u && !h && ((o.os = "android"), (o.android = !0)),
    (c || p || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function W0(e) {
  return e === void 0 && (e = {}), Kl || (Kl = XM(e)), Kl;
}
let Yl;
function QM() {
  const e = St(),
    t = W0();
  let n = !1;
  function r() {
    const l = e.navigator.userAgent.toLowerCase();
    return (
      l.indexOf("safari") >= 0 &&
      l.indexOf("chrome") < 0 &&
      l.indexOf("android") < 0
    );
  }
  if (r()) {
    const l = String(e.navigator.userAgent);
    if (l.includes("Version/")) {
      const [a, u] = l
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      n = a < 16 || (a === 16 && u < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    s = r(),
    o = s || (i && t.ios);
  return {
    isSafari: n || s,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: i,
  };
}
function ZM() {
  return Yl || (Yl = QM()), Yl;
}
function JM(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = St();
  let s = null,
    o = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((d) => {
          o = i.requestAnimationFrame(() => {
            const { width: p, height: h } = t;
            let y = p,
              x = h;
            d.forEach((S) => {
              let { contentBoxSize: m, contentRect: g, target: v } = S;
              (v && v !== t.el) ||
                ((y = g ? g.width : (m[0] || m).inlineSize),
                (x = g ? g.height : (m[0] || m).blockSize));
            }),
              (y !== p || x !== h) && l();
          });
        })),
        s.observe(t.el));
    },
    u = () => {
      o && i.cancelAnimationFrame(o),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", c);
    });
}
function eN(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    o = St(),
    l = function (c, d) {
      d === void 0 && (d = {});
      const p = o.MutationObserver || o.WebkitMutationObserver,
        h = new p((y) => {
          if (t.__preventObserver__) return;
          if (y.length === 1) {
            i("observerUpdate", y[0]);
            return;
          }
          const x = function () {
            i("observerUpdate", y[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(x)
            : o.setTimeout(x, 0);
        });
      h.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(h);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = qM(t.hostEl);
          for (let d = 0; d < c.length; d += 1) l(c[d]);
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      s.forEach((c) => {
        c.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", a),
    r("destroy", u);
}
var tN = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, o = new Array(s), l = 0; l < s; l++)
        o[l] = arguments[l];
      t.apply(r, o);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function nN() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(In(r, "padding-left") || 0, 10) -
        parseInt(In(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(In(r, "padding-top") || 0, 10) -
        parseInt(In(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function rN() {
  const e = this;
  function t(M, R) {
    return parseFloat(M.getPropertyValue(e.getDirectionLabel(R)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: o, wrongRTL: l } = e,
    a = e.virtual && n.virtual.enabled,
    u = a ? e.virtual.slides.length : e.slides.length,
    c = un(i, `.${e.params.slideClass}, swiper-slide`),
    d = a ? e.virtual.slides.length : c.length;
  let p = [];
  const h = [],
    y = [];
  let x = n.slidesOffsetBefore;
  typeof x == "function" && (x = n.slidesOffsetBefore.call(e));
  let S = n.slidesOffsetAfter;
  typeof S == "function" && (S = n.slidesOffsetAfter.call(e));
  const m = e.snapGrid.length,
    g = e.slidesGrid.length;
  let v = n.spaceBetween,
    E = -x,
    C = 0,
    N = 0;
  if (typeof s > "u") return;
  typeof v == "string" && v.indexOf("%") >= 0
    ? (v = (parseFloat(v.replace("%", "")) / 100) * s)
    : typeof v == "string" && (v = parseFloat(v)),
    (e.virtualSize = -v),
    c.forEach((M) => {
      o ? (M.style.marginLeft = "") : (M.style.marginRight = ""),
        (M.style.marginBottom = ""),
        (M.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (To(r, "--swiper-centered-offset-before", ""),
      To(r, "--swiper-centered-offset-after", ""));
  const A = n.grid && n.grid.rows > 1 && e.grid;
  A ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let w;
  const k =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (M) => typeof n.breakpoints[M].slidesPerView < "u"
    ).length > 0;
  for (let M = 0; M < d; M += 1) {
    w = 0;
    let R;
    if (
      (c[M] && (R = c[M]),
      A && e.grid.updateSlide(M, R, c),
      !(c[M] && In(R, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        k && (c[M].style[e.getDirectionLabel("width")] = "");
        const _ = getComputedStyle(R),
          V = R.style.transform,
          G = R.style.webkitTransform;
        if (
          (V && (R.style.transform = "none"),
          G && (R.style.webkitTransform = "none"),
          n.roundLengths)
        )
          w = e.isHorizontal() ? hm(R, "width") : hm(R, "height");
        else {
          const X = t(_, "width"),
            de = t(_, "padding-left"),
            ne = t(_, "padding-right"),
            b = t(_, "margin-left"),
            I = t(_, "margin-right"),
            z = _.getPropertyValue("box-sizing");
          if (z && z === "border-box") w = X + b + I;
          else {
            const { clientWidth: Z, offsetWidth: re } = R;
            w = X + de + ne + b + I + (re - Z);
          }
        }
        V && (R.style.transform = V),
          G && (R.style.webkitTransform = G),
          n.roundLengths && (w = Math.floor(w));
      } else
        (w = (s - (n.slidesPerView - 1) * v) / n.slidesPerView),
          n.roundLengths && (w = Math.floor(w)),
          c[M] && (c[M].style[e.getDirectionLabel("width")] = `${w}px`);
      c[M] && (c[M].swiperSlideSize = w),
        y.push(w),
        n.centeredSlides
          ? ((E = E + w / 2 + C / 2 + v),
            C === 0 && M !== 0 && (E = E - s / 2 - v),
            M === 0 && (E = E - s / 2 - v),
            Math.abs(E) < 1 / 1e3 && (E = 0),
            n.roundLengths && (E = Math.floor(E)),
            N % n.slidesPerGroup === 0 && p.push(E),
            h.push(E))
          : (n.roundLengths && (E = Math.floor(E)),
            (N - Math.min(e.params.slidesPerGroupSkip, N)) %
              e.params.slidesPerGroup ===
              0 && p.push(E),
            h.push(E),
            (E = E + w + v)),
        (e.virtualSize += w + v),
        (C = w),
        (N += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + S),
    o &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + v}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + v}px`),
    A && e.grid.updateWrapperSize(w, p),
    !n.centeredSlides)
  ) {
    const M = [];
    for (let R = 0; R < p.length; R += 1) {
      let _ = p[R];
      n.roundLengths && (_ = Math.floor(_)),
        p[R] <= e.virtualSize - s && M.push(_);
    }
    (p = M),
      Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(e.virtualSize - s);
  }
  if (a && n.loop) {
    const M = y[0] + v;
    if (n.slidesPerGroup > 1) {
      const R = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        _ = M * n.slidesPerGroup;
      for (let V = 0; V < R; V += 1) p.push(p[p.length - 1] + _);
    }
    for (let R = 0; R < e.virtual.slidesBefore + e.virtual.slidesAfter; R += 1)
      n.slidesPerGroup === 1 && p.push(p[p.length - 1] + M),
        h.push(h[h.length - 1] + M),
        (e.virtualSize += M);
  }
  if ((p.length === 0 && (p = [0]), v !== 0)) {
    const M =
      e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter((R, _) =>
      !n.cssMode || n.loop ? !0 : _ !== c.length - 1
    ).forEach((R) => {
      R.style[M] = `${v}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let M = 0;
    y.forEach((_) => {
      M += _ + (v || 0);
    }),
      (M -= v);
    const R = M > s ? M - s : 0;
    p = p.map((_) => (_ <= 0 ? -x : _ > R ? R + S : _));
  }
  if (n.centerInsufficientSlides) {
    let M = 0;
    y.forEach((_) => {
      M += _ + (v || 0);
    }),
      (M -= v);
    const R = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (M + R < s) {
      const _ = (s - M - R) / 2;
      p.forEach((V, G) => {
        p[G] = V - _;
      }),
        h.forEach((V, G) => {
          h[G] = V + _;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: p,
      slidesGrid: h,
      slidesSizesGrid: y,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    To(r, "--swiper-centered-offset-before", `${-p[0]}px`),
      To(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`
      );
    const M = -e.snapGrid[0],
      R = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((_) => _ + M)),
      (e.slidesGrid = e.slidesGrid.map((_) => _ + R));
  }
  if (
    (d !== u && e.emit("slidesLengthChange"),
    p.length !== m &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    h.length !== g && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const M = `${n.containerModifierClass}backface-hidden`,
      R = e.el.classList.contains(M);
    d <= n.maxBackfaceHiddenSlides
      ? R || e.el.classList.add(M)
      : R && e.el.classList.remove(M);
  }
}
function iN(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (l) => (r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const l = t.activeIndex + s;
        if (l > t.slides.length && !r) break;
        n.push(o(l));
      }
  else n.push(o(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const l = n[s].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function sN() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const mm = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function oN(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  i && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < r.length; a += 1) {
    const u = r[a];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const d =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      p =
        (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      h = -(o - c),
      y = h + t.slidesSizesGrid[a],
      x = h >= 0 && h <= t.size - t.slidesSizesGrid[a],
      S =
        (h >= 0 && h < t.size - 1) ||
        (y > 1 && y <= t.size) ||
        (h <= 0 && y >= t.size);
    S && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(a)),
      mm(u, S, n.slideVisibleClass),
      mm(u, x, n.slideFullyVisibleClass),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -p : p);
  }
}
function aN(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: o, progressLoop: l } = t;
  const a = s,
    u = o;
  if (r === 0) (i = 0), (s = !0), (o = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (s = c || i <= 0), (o = d || i >= 1), c && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      p = t.slidesGrid[c],
      h = t.slidesGrid[d],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      x = Math.abs(e);
    x >= p ? (l = (x - p) / y) : (l = (x + y - h) / y), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: l, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !a && t.emit("reachBeginning toEdge"),
    o && !u && t.emit("reachEnd toEdge"),
    ((a && !s) || (u && !o)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const Xl = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function lN() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    l = (d) => un(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let a, u, c;
  if (s)
    if (n.loop) {
      let d = i - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${d}"]`));
    } else a = l(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((a = t.filter((d) => d.column === i)[0]),
        (c = t.filter((d) => d.column === i + 1)[0]),
        (u = t.filter((d) => d.column === i - 1)[0]))
      : (a = t[i]);
  a &&
    (o ||
      ((c = WM(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = GM(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((d) => {
      Xl(d, d === a, n.slideActiveClass),
        Xl(d, d === c, n.slideNextClass),
        Xl(d, d === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Bo = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Ql = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  gc = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        l = [o - t];
      l.push(...Array.from({ length: t }).map((a, u) => o + r + u)),
        e.slides.forEach((a, u) => {
          l.includes(a.column) && Ql(e, u);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= s + t; o += 1) {
        const l = ((o % n) + n) % n;
        (l < i || l > s) && Ql(e, l);
      }
    else
      for (let o = Math.max(i - t, 0); o <= Math.min(s + t, n - 1); o += 1)
        o !== i && (o > s || o < i) && Ql(e, o);
  };
function uN(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function cN(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: l } = t;
  let a = e,
    u;
  const c = (h) => {
    let y = h - t.virtual.slidesBefore;
    return (
      y < 0 && (y = t.virtual.slides.length + y),
      y >= t.virtual.slides.length && (y -= t.virtual.slides.length),
      y
    );
  };
  if ((typeof a > "u" && (a = uN(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const h = Math.min(i.slidesPerGroupSkip, a);
    u = h + Math.floor((a - h) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), a === s && !t.params.loop)) {
    u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (a === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(a);
    return;
  }
  const d = t.grid && i.grid && i.grid.rows > 1;
  let p;
  if (t.virtual && i.virtual.enabled && i.loop) p = c(a);
  else if (d) {
    const h = t.slides.filter((x) => x.column === a)[0];
    let y = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(y) && (y = Math.max(t.slides.indexOf(h), 0)),
      (p = Math.floor(y / i.grid.rows));
  } else if (t.slides[a]) {
    const h = t.slides[a].getAttribute("data-swiper-slide-index");
    h ? (p = parseInt(h, 10)) : (p = a);
  } else p = a;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: p,
    previousIndex: s,
    activeIndex: a,
  }),
    t.initialized && gc(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== p && t.emit("realIndexChange"), t.emit("slideChange"));
}
function dN(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !i && l.matches && l.matches(`.${r.slideClass}, swiper-slide`) && (i = l);
    });
  let s = !1,
    o;
  if (i) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === i) {
        (s = !0), (o = l);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var fN = {
  updateSize: nN,
  updateSlides: rN,
  updateAutoHeight: iN,
  updateSlidesOffset: sN,
  updateSlidesProgress: oN,
  updateProgress: aN,
  updateSlidesClasses: lN,
  updateActiveIndex: cN,
  updateClickedSlide: dN,
};
function pN(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = UM(s, e);
  return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0;
}
function hN(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: o } = n;
  let l = 0,
    a = 0;
  const u = 0;
  n.isHorizontal() ? (l = r ? -e : e) : (a = e),
    i.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : a),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function mN() {
  return -this.snapGrid[0];
}
function gN() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function vN(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: o, wrapperEl: l } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const a = s.minTranslate(),
    u = s.maxTranslate();
  let c;
  if (
    (r && e > a ? (c = a) : r && e < u ? (c = u) : (c = e),
    s.updateProgress(c),
    o.cssMode)
  ) {
    const d = s.isHorizontal();
    if (t === 0) l[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return (
          H0({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      l.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (p) {
              !s ||
                s.destroyed ||
                (p.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var yN = {
  getTranslate: pN,
  setTranslate: hN,
  minTranslate: mN,
  maxTranslate: gN,
  translateTo: vN,
};
function xN(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function q0(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: o } = t;
  let l = r;
  if (
    (l || (s > o ? (l = "next") : s < o ? (l = "prev") : (l = "reset")),
    t.emit(`transition${i}`),
    n && s !== o)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      l === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function wN(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    q0({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function SN(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      q0({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var EN = { setTransition: xN, transitionStart: wN, transitionEnd: SN };
function TN(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: p,
    wrapperEl: h,
    enabled: y,
  } = s;
  if (
    (!y && !r && !i) ||
    s.destroyed ||
    (s.animating && l.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = s.params.speed);
  const x = Math.min(s.params.slidesPerGroupSkip, o);
  let S = x + Math.floor((o - x) / s.params.slidesPerGroup);
  S >= a.length && (S = a.length - 1);
  const m = -a[S];
  if (l.normalizeSlideIndex)
    for (let C = 0; C < u.length; C += 1) {
      const N = -Math.floor(m * 100),
        A = Math.floor(u[C] * 100),
        w = Math.floor(u[C + 1] * 100);
      typeof u[C + 1] < "u"
        ? N >= A && N < w - (w - A) / 2
          ? (o = C)
          : N >= A && N < w && (o = C + 1)
        : N >= A && (o = C);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (p
        ? m > s.translate && m > s.minTranslate()
        : m < s.translate && m < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        m > s.translate &&
        m > s.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (c || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(m);
  let g;
  o > d ? (g = "next") : o < d ? (g = "prev") : (g = "reset");
  const v = s.virtual && s.params.virtual.enabled;
  if (!(v && i) && ((p && -m === s.translate) || (!p && m === s.translate)))
    return (
      s.updateActiveIndex(o),
      l.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      l.effect !== "slide" && s.setTranslate(m),
      g !== "reset" && (s.transitionStart(n, g), s.transitionEnd(n, g)),
      !1
    );
  if (l.cssMode) {
    const C = s.isHorizontal(),
      N = p ? m : -m;
    if (t === 0)
      v &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        v && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              h[C ? "scrollLeft" : "scrollTop"] = N;
            }))
          : (h[C ? "scrollLeft" : "scrollTop"] = N),
        v &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    else {
      if (!s.support.smoothScroll)
        return (
          H0({ swiper: s, targetPosition: N, side: C ? "left" : "top" }), !0
        );
      h.scrollTo({ [C ? "left" : "top"]: N, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(m),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, g),
    t === 0
      ? s.transitionEnd(n, g)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (N) {
            !s ||
              s.destroyed ||
              (N.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, g)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function PN(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let l;
      if (s) {
        const p = o * i.params.grid.rows;
        l = i.slides.filter(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === p
        )[0].column;
      } else l = i.getSlideIndexByData(o);
      const a = s
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let c = i.params.slidesPerView;
      c === "auto"
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let d = a - l < c;
      if (
        (u && (d = d || l < Math.ceil(c / 2)),
        r && u && i.params.slidesPerView !== "auto" && !s && (d = !1),
        d)
      ) {
        const p = u
          ? l < i.activeIndex
            ? "prev"
            : "next"
          : l - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? l + 1 : l - a + 1,
          slideRealIndex: p === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const p = o * i.params.grid.rows;
        o = i.slides.filter(
          (h) => h.getAttribute("data-swiper-slide-index") * 1 === p
        )[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, t, n, r);
    }),
    i
  );
}
function CN(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: o } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let l = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const a = r.activeIndex < s.slidesPerGroupSkip ? 1 : l,
    u = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !u && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n);
}
function jN(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: u,
    } = r;
  if (!a || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = l ? r.translate : -r.translate;
  function p(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const h = p(d),
    y = s.map((m) => p(m));
  let x = s[y.indexOf(h) - 1];
  if (typeof x > "u" && i.cssMode) {
    let m;
    s.forEach((g, v) => {
      h >= g && (m = v);
    }),
      typeof m < "u" && (x = s[m > 0 ? m - 1 : m]);
  }
  let S = 0;
  if (
    (typeof x < "u" &&
      ((S = o.indexOf(x)),
      S < 0 && (S = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((S = S - r.slidesPerViewDynamic("previous", !0) + 1),
        (S = Math.max(S, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const m =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(m, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(S, e, t, n);
      }),
      !0
    );
  return r.slideTo(S, e, t, n);
}
function MN(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function NN(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, s),
    l = o + Math.floor((s - o) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[l]) {
    const u = i.snapGrid[l],
      c = i.snapGrid[l + 1];
    a - u > (c - u) * r && (s += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[l - 1],
      c = i.snapGrid[l];
    a - u <= (c - u) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function LN() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              un(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Ta(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            un(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
          )),
          Ta(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var kN = {
  slideTo: TN,
  slideToLoop: PN,
  slideNext: CN,
  slidePrev: jN,
  slideReset: MN,
  slideToClosest: NN,
  slideToClickedSlide: LN,
};
function bN(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      un(r, `.${n.slideClass}, swiper-slide`).forEach((d, p) => {
        d.setAttribute("data-swiper-slide-index", p);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (s ? n.grid.rows : 1),
    l = t.slides.length % o !== 0,
    a = s && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let d = 0; d < c; d += 1) {
        const p = t.isElement
          ? mc("swiper-slide", [n.slideBlankClass])
          : mc("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(p);
      }
    };
  if (l) {
    if (n.loopAddBlankSlides) {
      const c = o - (t.slides.length % o);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      Ca(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (a) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      Ca(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function RN(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: l,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: d,
      slidesEl: p,
      params: h,
    } = a,
    { centeredSlides: y } = h;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && h.virtual.enabled)
  ) {
    n &&
      (!h.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && a.snapIndex < h.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = d),
      a.emit("loopFix");
    return;
  }
  let x = h.slidesPerView;
  x === "auto"
    ? (x = a.slidesPerViewDynamic())
    : ((x = Math.ceil(parseFloat(h.slidesPerView, 10))),
      y && x % 2 === 0 && (x = x + 1));
  const S = h.slidesPerGroupAuto ? x : h.slidesPerGroup;
  let m = S;
  m % S !== 0 && (m += S - (m % S)),
    (m += h.loopAdditionalSlides),
    (a.loopedSlides = m);
  const g = a.grid && h.grid && h.grid.rows > 1;
  u.length < x + m
    ? Ca(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : g &&
      h.grid.fill === "row" &&
      Ca(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const v = [],
    E = [];
  let C = a.activeIndex;
  typeof s > "u"
    ? (s = a.getSlideIndex(
        u.filter((V) => V.classList.contains(h.slideActiveClass))[0]
      ))
    : (C = s);
  const N = r === "next" || !r,
    A = r === "prev" || !r;
  let w = 0,
    k = 0;
  const M = g ? Math.ceil(u.length / h.grid.rows) : u.length,
    _ = (g ? u[s].column : s) + (y && typeof i > "u" ? -x / 2 + 0.5 : 0);
  if (_ < m) {
    w = Math.max(m - _, S);
    for (let V = 0; V < m - _; V += 1) {
      const G = V - Math.floor(V / M) * M;
      if (g) {
        const X = M - G - 1;
        for (let de = u.length - 1; de >= 0; de -= 1)
          u[de].column === X && v.push(de);
      } else v.push(M - G - 1);
    }
  } else if (_ + x > M - m) {
    k = Math.max(_ - (M - m * 2), S);
    for (let V = 0; V < k; V += 1) {
      const G = V - Math.floor(V / M) * M;
      g
        ? u.forEach((X, de) => {
            X.column === G && E.push(de);
          })
        : E.push(G);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    A &&
      v.forEach((V) => {
        (u[V].swiperLoopMoveDOM = !0),
          p.prepend(u[V]),
          (u[V].swiperLoopMoveDOM = !1);
      }),
    N &&
      E.forEach((V) => {
        (u[V].swiperLoopMoveDOM = !0),
          p.append(u[V]),
          (u[V].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    h.slidesPerView === "auto"
      ? a.updateSlides()
      : g &&
        ((v.length > 0 && A) || (E.length > 0 && N)) &&
        a.slides.forEach((V, G) => {
          a.grid.updateSlide(G, V, a.slides);
        }),
    h.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (v.length > 0 && A) {
      if (typeof t > "u") {
        const V = a.slidesGrid[C],
          X = a.slidesGrid[C + w] - V;
        l
          ? a.setTranslate(a.translate - X)
          : (a.slideTo(C + Math.ceil(w), 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - X),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - X)));
      } else if (i) {
        const V = g ? v.length / h.grid.rows : v.length;
        a.slideTo(a.activeIndex + V, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (E.length > 0 && N)
      if (typeof t > "u") {
        const V = a.slidesGrid[C],
          X = a.slidesGrid[C - k] - V;
        l
          ? a.setTranslate(a.translate - X)
          : (a.slideTo(C - k, 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - X),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - X)));
      } else {
        const V = g ? E.length / h.grid.rows : E.length;
        a.slideTo(a.activeIndex - V, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = c),
    (a.allowSlideNext = d),
    a.controller && a.controller.control && !o)
  ) {
    const V = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((G) => {
          !G.destroyed &&
            G.params.loop &&
            G.loopFix({
              ...V,
              slideTo: G.params.slidesPerView === h.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...V,
          slideTo:
            a.controller.control.params.slidesPerView === h.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function AN() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var DN = { loopCreate: bN, loopFix: RN, loopDestroy: AN };
function IN(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function ON() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var _N = { setGrabCursor: IN, unsetGrabCursor: ON };
function VN(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === hn() || r === St()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function gm(e, t, n) {
  const r = St(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return s && (n <= o || n >= r.innerWidth - o)
    ? s === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function FN(e) {
  const t = this,
    n = hn();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    gm(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: o, enabled: l } = t;
  if (
    !l ||
    (!s.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let a = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !HM(a, t.wrapperEl)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "",
    c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (a = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    p = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (p ? VN(d, a) : a.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !a.closest(s.swipeHandler)) return;
  (o.currentX = r.pageX), (o.currentY = r.pageY);
  const h = o.currentX,
    y = o.currentY;
  if (!gm(t, r, h)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = h),
    (o.startY = y),
    (i.touchStartTime = Pa()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let x = !0;
  a.matches(i.focusableElements) &&
    ((x = !1), a.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== a &&
      (r.pointerType === "mouse" ||
        (r.pointerType !== "mouse" && !a.matches(i.focusableElements))) &&
      n.activeElement.blur();
  const S = x && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || S) &&
    !a.isContentEditable &&
    r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function zN(e) {
  const t = hn(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: o, enabled: l } = n;
  if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (r.touchId !== null || a.pointerId !== r.pointerId))
  )
    return;
  let u;
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].filter((N) => N.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else u = a;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = u.pageX,
    d = u.pageY;
  if (a.preventedByNestedSwiper) {
    (s.startX = c), (s.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: c, startY: d, currentX: c, currentY: d }),
        (r.touchStartTime = Pa()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < s.startY && n.translate <= n.maxTranslate()) ||
        (d > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < s.startX && n.translate <= n.maxTranslate()) ||
      (c > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    (t.activeElement &&
      t.activeElement.matches(r.focusableElements) &&
      t.activeElement !== a.target &&
      a.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement &&
      a.target === t.activeElement &&
      a.target.matches(r.focusableElements))
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", a),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = c),
    (s.currentY = d);
  const p = s.currentX - s.startX,
    h = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(p ** 2 + h ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let N;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : p * p + h * h >= 25 &&
        ((N = (Math.atan2(Math.abs(h), Math.abs(p)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? N > i.touchAngle
          : 90 - N > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (a.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let y = n.isHorizontal() ? p : h,
    x = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (o ? 1 : -1)), (x = Math.abs(x) * (o ? 1 : -1))),
    (s.diff = y),
    (y *= i.touchRatio),
    o && ((y = -y), (x = -x));
  const S = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = x > 0 ? "prev" : "next");
  const m = n.params.loop && !i.cssMode,
    g =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (m && g && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const N = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(N);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let v;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      S !== n.touchesDirection &&
      m &&
      g &&
      Math.abs(y) >= 1)
  ) {
    Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", a),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate);
  let E = !0,
    C = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (C = 0),
    y > 0
      ? (m &&
          g &&
          !v &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((E = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** C)))
      : y < 0 &&
        (m &&
          g &&
          !v &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((E = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** C))),
    E && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function BN(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((C) => C.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: c,
  } = t;
  if (!c || (!o.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const d = Pa(),
    p = d - n.touchStartTime;
  if (t.allowClick) {
    const C = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((C && C[0]) || r.target, C),
      t.emit("tap click", r),
      p < 300 &&
        d - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = Pa()),
    Ta(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let h;
  if (
    (o.followFinger
      ? (h = a ? t.translate : -t.translate)
      : (h = -n.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h });
    return;
  }
  const y = h >= -t.maxTranslate() && !t.params.loop;
  let x = 0,
    S = t.slidesSizesGrid[0];
  for (
    let C = 0;
    C < u.length;
    C += C < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const N = C < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[C + N] < "u"
      ? (y || (h >= u[C] && h < u[C + N])) && ((x = C), (S = u[C + N] - u[C]))
      : (y || h >= u[C]) && ((x = C), (S = u[u.length - 1] - u[u.length - 2]));
  }
  let m = null,
    g = null;
  o.rewind &&
    (t.isBeginning
      ? (g =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (m = 0));
  const v = (h - u[x]) / S,
    E = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (p > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (v >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? m : x + E)
        : t.slideTo(x)),
      t.swipeDirection === "prev" &&
        (v > 1 - o.longSwipesRatio
          ? t.slideTo(x + E)
          : g !== null && v < 0 && Math.abs(v) > o.longSwipesRatio
          ? t.slideTo(g)
          : t.slideTo(x));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(x + E)
        : t.slideTo(x)
      : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : x + E),
        t.swipeDirection === "prev" && t.slideTo(g !== null ? g : x));
  }
}
function vm() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function UN(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function $N() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function HN(e) {
  const t = this;
  Bo(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function GN() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const K0 = (e, t) => {
  const n = hn(),
    { params: r, el: i, wrapperEl: s, device: o } = e,
    l = !!r.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  !i ||
    typeof i == "string" ||
    (n[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    i[a]("touchstart", e.onTouchStart, { passive: !1 }),
    i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("touchend", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    r.cssMode && s[a]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          vm,
          !0
        )
      : e[u]("observerUpdate", vm, !0),
    i[a]("load", e.onLoad, { capture: !0 }));
};
function WN() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = FN.bind(e)),
    (e.onTouchMove = zN.bind(e)),
    (e.onTouchEnd = BN.bind(e)),
    (e.onDocumentTouchStart = GN.bind(e)),
    t.cssMode && (e.onScroll = $N.bind(e)),
    (e.onClick = UN.bind(e)),
    (e.onLoad = HN.bind(e)),
    K0(e, "on");
}
function qN() {
  K0(this, "off");
}
var KN = { attachEvents: WN, detachEvents: qN };
const ym = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function YN() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const a = (o in s ? s[o] : void 0) || e.originalParams,
    u = ym(e, r),
    c = ym(e, a),
    d = e.params.grabCursor,
    p = a.grabCursor,
    h = r.enabled;
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    d && !p ? e.unsetGrabCursor() : !d && p && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((v) => {
      if (typeof a[v] > "u") return;
      const E = r[v] && r[v].enabled,
        C = a[v] && a[v].enabled;
      E && !C && e[v].disable(), !E && C && e[v].enable();
    });
  const y = a.direction && a.direction !== r.direction,
    x = r.loop && (a.slidesPerView !== r.slidesPerView || y),
    S = r.loop;
  y && n && e.changeDirection(), ht(e.params, a);
  const m = e.params.enabled,
    g = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    h && !m ? e.disable() : !h && m && e.enable(),
    (e.currentBreakpoint = o),
    e.emit("_beforeBreakpoint", a),
    n &&
      (x
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !S && g
        ? (e.loopCreate(t), e.updateSlides())
        : S && !g && e.loopDestroy()),
    e.emit("breakpoint", a);
}
function XN(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = St(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: s * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: u } = o[l];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a)
      : u <= n.clientWidth && (r = a);
  }
  return r || "max";
}
var QN = { setBreakpoint: YN, getBreakpoint: XN };
function ZN(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function JN() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    o = ZN(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...o), i.classList.add(...t), e.emitContainerClasses();
}
function eL() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var tL = { addClasses: JN, removeClasses: eL };
function nL() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var rL = { checkOverflow: nL },
  vc = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function iL(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      ht(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      ht(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      ht(t, r);
  };
}
const Zl = {
    eventsEmitter: tN,
    update: fN,
    translate: yN,
    transition: EN,
    slide: kN,
    loop: DN,
    grabCursor: _N,
    events: KN,
    breakpoints: QN,
    checkOverflow: rL,
    classes: tL,
  },
  Jl = {};
let nf = class nn {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = ht({}, n)),
      t && !n.el && (n.el = t);
    const o = hn();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const p = ht({}, n, { el: d });
          c.push(new nn(p));
        }),
        c
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = G0()),
      (l.device = W0({ userAgent: n.userAgent })),
      (l.browser = ZM()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const a = {};
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: iL(n, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const u = ht({}, vc, a);
    return (
      (l.params = ht({}, u, Jl, n)),
      (l.originalParams = ht({}, l.params)),
      (l.passedParams = ht({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((c) => {
          l.on(c, l.params.on[c]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = un(n, `.${r.slideClass}, swiper-slide`),
      s = pm(i[0]);
    return pm(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = un(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: u,
      } = r;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
        p;
      for (let h = u + 1; h < s.length; h += 1)
        s[h] &&
          !p &&
          ((d += Math.ceil(s[h].swiperSlideSize)), (c += 1), d > a && (p = !0));
      for (let h = u - 1; h >= 0; h -= 1)
        s[h] &&
          !p &&
          ((d += s[h].swiperSlideSize), (c += 1), d > a && (p = !0));
    } else if (t === "current")
      for (let d = u + 1; d < s.length; d += 1)
        (n ? o[d] + l[d] - o[u] < a : o[d] - o[u] < a) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Bo(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(o.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : un(r, i())[0];
    return (
      !o &&
        n.params.createElements &&
        ((o = mc("div", n.params.wrapperClass)),
        r.append(o),
        un(r, `.${n.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: o,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || In(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || In(r, "direction") === "rtl"),
        wrongRTL: In(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? Bo(n, s)
          : s.addEventListener("load", (o) => {
              Bo(n, o.target);
            });
      }),
      gc(n),
      (n.initialized = !0),
      gc(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: o, slides: l } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s && typeof s != "string" && s.removeAttribute("style"),
          o && o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((a) => {
          r.off(a);
        }),
        t !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), zM(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    ht(Jl, t);
  }
  static get extendedDefaults() {
    return Jl;
  }
  static get defaults() {
    return vc;
  }
  static installModule(t) {
    nn.prototype.__modules__ || (nn.prototype.__modules__ = []);
    const n = nn.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => nn.installModule(n)), nn)
      : (nn.installModule(t), nn);
  }
};
Object.keys(Zl).forEach((e) => {
  Object.keys(Zl[e]).forEach((t) => {
    nf.prototype[t] = Zl[e][t];
  });
});
nf.use([JM, eN]);
const Y0 = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function br(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function ui(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : br(t[r]) && br(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : ui(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function X0(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Q0(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Z0(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function J0(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function sL(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function oL(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a,
  } = e;
  const u = i.filter(
      (k) => k !== "children" && k !== "direction" && k !== "wrapperClass"
    ),
    {
      params: c,
      pagination: d,
      navigation: p,
      scrollbar: h,
      virtual: y,
      thumbs: x,
    } = t;
  let S, m, g, v, E, C, N, A;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (S = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (m = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (g = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || l) &&
      (c.scrollbar || c.scrollbar === !1) &&
      h &&
      !h.el &&
      (v = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || o) &&
      (r.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (E = !0);
  const w = (k) => {
    t[k] &&
      (t[k].destroy(),
      k === "navigation"
        ? (t.isElement && (t[k].prevEl.remove(), t[k].nextEl.remove()),
          (c[k].prevEl = void 0),
          (c[k].nextEl = void 0),
          (t[k].prevEl = void 0),
          (t[k].nextEl = void 0))
        : (t.isElement && t[k].el.remove(),
          (c[k].el = void 0),
          (t[k].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (c.loop && !r.loop ? (C = !0) : !c.loop && r.loop ? (N = !0) : (A = !0)),
    u.forEach((k) => {
      if (br(c[k]) && br(r[k]))
        Object.assign(c[k], r[k]),
          (k === "navigation" || k === "pagination" || k === "scrollbar") &&
            "enabled" in r[k] &&
            !r[k].enabled &&
            w(k);
      else {
        const M = r[k];
        (M === !0 || M === !1) &&
        (k === "navigation" || k === "pagination" || k === "scrollbar")
          ? M === !1 && w(k)
          : (c[k] = r[k]);
      }
    }),
    u.includes("controller") &&
      !m &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") && n && y && c.virtual.enabled
      ? ((y.slides = n), y.update(!0))
      : i.includes("virtual") &&
        y &&
        c.virtual.enabled &&
        (n && (y.slides = n), y.update(!0)),
    i.includes("children") && n && c.loop && (A = !0),
    S && x.init() && x.update(!0),
    m && (t.controller.control = c.controller.control),
    g &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (c.pagination.el = a),
      d.init(),
      d.render(),
      d.update()),
    v &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        t.el.appendChild(l)),
      l && (c.scrollbar.el = l),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    E &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          t.el.appendChild(o))),
      s && (c.navigation.nextEl = s),
      o && (c.navigation.prevEl = o),
      p.init(),
      p.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (C || A) && t.loopDestroy(),
    (N || A) && t.loopCreate(),
    t.update();
}
function aL(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  ui(n, vc), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    o = Y0.map((a) => a.replace(/_/, "")),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach((a) => {
      typeof e[a] > "u" ||
        (o.indexOf(a) >= 0
          ? br(e[a])
            ? ((n[a] = {}), (i[a] = {}), ui(n[a], e[a]), ui(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
          ? t
            ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (s[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function lL(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: o,
    swiper: l,
  } = e;
  X0(t) &&
    r &&
    i &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    Q0(t) &&
      s &&
      ((l.params.pagination.el = s), (l.originalParams.pagination.el = s)),
    Z0(t) &&
      o &&
      ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(n);
}
function uL(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const o = (a) => {
    s.indexOf(a) < 0 && s.push(a);
  };
  if (n && r) {
    const a = r.map(i),
      u = n.map(i);
    a.join("") !== u.join("") && o("children"),
      r.length !== n.length && o("children");
  }
  return (
    Y0.filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (br(e[a]) && br(t[a])) {
            const u = Object.keys(e[a]),
              c = Object.keys(t[a]);
            u.length !== c.length
              ? o(a)
              : (u.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a);
                }),
                c.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a);
                }));
          } else e[a] !== t[a] && o(a);
      }),
    s
  );
}
const cL = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Na() {
  return (
    (Na = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Na.apply(this, arguments)
  );
}
function ex(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function tx(e) {
  const t = [];
  return (
    Se.Children.toArray(e).forEach((n) => {
      ex(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          tx(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function dL(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    Se.Children.toArray(e).forEach((r) => {
      if (ex(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = tx(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function fL(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let d = c;
      return (
        c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: o } = n,
    l = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = l; c < a; c += 1) c >= s && c <= o && u.push(t[r(c)]);
  return u.map((c, d) =>
    Se.cloneElement(c, {
      swiper: e,
      style: i,
      key: c.props.virtualIndex || c.key || `slide-${d}`,
    })
  );
}
function ls(e, t) {
  return typeof window > "u" ? P.useEffect(e, t) : P.useLayoutEffect(e, t);
}
const xm = P.createContext(null),
  pL = P.createContext(null),
  As = P.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: o,
        ...l
      } = e === void 0 ? {} : e,
      a = !1;
    const [u, c] = P.useState("swiper"),
      [d, p] = P.useState(null),
      [h, y] = P.useState(!1),
      x = P.useRef(!1),
      S = P.useRef(null),
      m = P.useRef(null),
      g = P.useRef(null),
      v = P.useRef(null),
      E = P.useRef(null),
      C = P.useRef(null),
      N = P.useRef(null),
      A = P.useRef(null),
      { params: w, passedParams: k, rest: M, events: R } = aL(l),
      { slides: _, slots: V } = dL(s),
      G = () => {
        y(!h);
      };
    Object.assign(w.on, {
      _containerClasses(I, z) {
        c(z);
      },
    });
    const X = () => {
      Object.assign(w.on, R), (a = !0);
      const I = { ...w };
      if (
        (delete I.wrapperClass,
        (m.current = new nf(I)),
        m.current.virtual && m.current.params.virtual.enabled)
      ) {
        m.current.virtual.slides = _;
        const z = {
          cache: !1,
          slides: _,
          renderExternal: p,
          renderExternalUpdate: !1,
        };
        ui(m.current.params.virtual, z),
          ui(m.current.originalParams.virtual, z);
      }
    };
    S.current || X(), m.current && m.current.on("_beforeBreakpoint", G);
    const de = () => {
        a ||
          !R ||
          !m.current ||
          Object.keys(R).forEach((I) => {
            m.current.on(I, R[I]);
          });
      },
      ne = () => {
        !R ||
          !m.current ||
          Object.keys(R).forEach((I) => {
            m.current.off(I, R[I]);
          });
      };
    P.useEffect(() => () => {
      m.current && m.current.off("_beforeBreakpoint", G);
    }),
      P.useEffect(() => {
        !x.current &&
          m.current &&
          (m.current.emitSlidesClasses(), (x.current = !0));
      }),
      ls(() => {
        if ((t && (t.current = S.current), !!S.current))
          return (
            m.current.destroyed && X(),
            lL(
              {
                el: S.current,
                nextEl: E.current,
                prevEl: C.current,
                paginationEl: N.current,
                scrollbarEl: A.current,
                swiper: m.current,
              },
              w
            ),
            o && !m.current.destroyed && o(m.current),
            () => {
              m.current && !m.current.destroyed && m.current.destroy(!0, !1);
            }
          );
      }, []),
      ls(() => {
        de();
        const I = uL(k, g.current, _, v.current, (z) => z.key);
        return (
          (g.current = k),
          (v.current = _),
          I.length &&
            m.current &&
            !m.current.destroyed &&
            oL({
              swiper: m.current,
              slides: _,
              passedParams: k,
              changedParams: I,
              nextEl: E.current,
              prevEl: C.current,
              scrollbarEl: A.current,
              paginationEl: N.current,
            }),
          () => {
            ne();
          }
        );
      }),
      ls(() => {
        cL(m.current);
      }, [d]);
    function b() {
      return w.virtual
        ? fL(m.current, _, d)
        : _.map((I, z) =>
            Se.cloneElement(I, { swiper: m.current, swiperSlideIndex: z })
          );
    }
    return Se.createElement(
      r,
      Na({ ref: S, className: J0(`${u}${n ? ` ${n}` : ""}`) }, M),
      Se.createElement(
        pL.Provider,
        { value: m.current },
        V["container-start"],
        Se.createElement(
          i,
          { className: sL(w.wrapperClass) },
          V["wrapper-start"],
          b(),
          V["wrapper-end"]
        ),
        X0(w) &&
          Se.createElement(
            Se.Fragment,
            null,
            Se.createElement("div", {
              ref: C,
              className: "swiper-button-prev",
            }),
            Se.createElement("div", { ref: E, className: "swiper-button-next" })
          ),
        Z0(w) &&
          Se.createElement("div", { ref: A, className: "swiper-scrollbar" }),
        Q0(w) &&
          Se.createElement("div", { ref: N, className: "swiper-pagination" }),
        V["container-end"]
      )
    );
  });
As.displayName = "Swiper";
const rf = P.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: o,
    lazy: l,
    virtualIndex: a,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const d = P.useRef(null),
    [p, h] = P.useState("swiper-slide"),
    [y, x] = P.useState(!1);
  function S(E, C, N) {
    C === d.current && h(N);
  }
  ls(() => {
    if (
      (typeof u < "u" && (d.current.swiperSlideIndex = u),
      t && (t.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        p !== "swiper-slide" && h("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", S),
        () => {
          s && s.off("_slideClass", S);
        }
      );
    }
  }),
    ls(() => {
      s && d.current && !s.destroyed && h(s.getSlideClasses(d.current));
    }, [s]);
  const m = {
      isActive: p.indexOf("swiper-slide-active") >= 0,
      isVisible: p.indexOf("swiper-slide-visible") >= 0,
      isPrev: p.indexOf("swiper-slide-prev") >= 0,
      isNext: p.indexOf("swiper-slide-next") >= 0,
    },
    g = () => (typeof r == "function" ? r(m) : r),
    v = () => {
      x(!0);
    };
  return Se.createElement(
    n,
    Na(
      {
        ref: d,
        className: J0(`${p}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: v,
      },
      c
    ),
    o &&
      Se.createElement(
        xm.Provider,
        { value: m },
        Se.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          g(),
          l &&
            !y &&
            Se.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !o &&
      Se.createElement(
        xm.Provider,
        { value: m },
        g(),
        l &&
          !y &&
          Se.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
rf.displayName = "SwiperSlide";
const we = "" + new URL("../images/image1Block4.jpg", import.meta.url).href,
  nx = "" + new URL("../images/image2Block4.jpg", import.meta.url).href,
  Uo = "" + new URL("../images/image3Block4.jpg", import.meta.url).href,
  wm = [
    {
      img: we,
      title: "Management",
      content:
        "L'entreprise met à votre disposition une expertise pointue dans le domaine du management. Elle accompagne les organisations à chaque étape de leur développement en offrant des solutions adaptées pour améliorer la gestion des équipes, des projets et des performances globales. Grâce à des spécialistes, elle aide les clients à renforcer leur leadership, optimiser leurs processus et atteindre leurs objectifs stratégiques, tout en favorisant un environnement de travail productif et innovant.",
    },
    {
      img: nx,
      title: "Ressources Humaines",
      content:
        "L'entreprise propose un accompagnement personnalisé pour optimiser la gestion des Ressources Humaines. Elle aide ses clients à attirer, développer et fidéliser les talents tout en renforçant les pratiques RH. Grâce à son expertise, elle accompagne les entreprises dans la gestion du capital humain, la formation, et l'amélioration des processus de recrutement, tout en veillant à créer un cadre de travail motivant et performant.",
    },
    {
      img: Uo,
      title: "Solutions Numériques (IT)",
      content:
        "Notre entreprise propose des solutions innovantes pour accompagner les organisations dans leur transformation digitale. Nous aidons nos clients à optimiser leur système d'information, à développer des applications sur mesure et à sécuriser leurs données. Grâce à notre expertise en informatique et en nouvelles technologies, nous accompagnons les entreprises dans la mise en place de solutions numériques performantes et adaptées à leurs besoins.",
    },
    {
      img: Uo,
      title: "Finance",
      content:
        "Nous offrons un accompagnement financier sur-mesure, adapté aux besoins de chaque entreprise. Nos services incluent la gestion financière, l'optimisation des ressources, la planification budgétaire et l'accompagnement dans les décisions d'investissement. Grâce à notre expertise, nous aidons les entreprises à améliorer leur rentabilité et à prendre des décisions éclairées pour une croissance durable.",
    },
    {
      img: Uo,
      title: "Relation client",
      content:
        "L'expertise en relation client permet de créer des interactions de qualité avec vos clients, renforçant ainsi leur fidélité. Nous vous aidons à mettre en place des stratégies de gestion efficaces, à optimiser les canaux de communication et à améliorer l'expérience client. Grâce à des solutions personnalisées, vous pourrez mieux répondre aux attentes de vos clients et maximiser leur satisfaction.",
    },
  ],
  Sm = [
    { img: we, title: "MTN", content: "Explication du projet" },
    { img: nx, title: "ORANGE", content: "Explication du projet" },
    { img: Uo, title: "Bouygues", content: "Explication du projet" },
  ];
function hL() {
  const [e, t] = P.useState(0),
    n = P.useRef(null),
    r = P.useRef(null),
    [i, s] = P.useState("img"),
    o = P.useCallback(
      (c) => {
        var p, h;
        if (e === c.activeIndex) return;
        (h = (p = (i === "img" ? r : n).current) == null ? void 0 : p.swiper) ==
          null || h[c.swipeDirection === "prev" ? "slidePrev" : "slideNext"]();
      },
      [e, i]
    ),
    l = () => {
      var c, d, p, h;
      (d = (c = n.current) == null ? void 0 : c.swiper) == null ||
        d.slidePrev(),
        (h = (p = r.current) == null ? void 0 : p.swiper) == null ||
          h.slidePrev();
    },
    a = () => {
      var c, d, p, h;
      (d = (c = n.current) == null ? void 0 : c.swiper) == null ||
        d.slideNext(),
        (h = (p = r.current) == null ? void 0 : p.swiper) == null ||
          h.slideNext();
    },
    u = P.useMemo(
      () => (c) =>
        wm.map((d, p) =>
          f.jsx(
            rf,
            {
              children: c
                ? f.jsx("img", { src: d.img, alt: `img-${p}` })
                : f.jsxs("div", {
                    className: "swiper-slide-content",
                    children: [
                      f.jsx("div", { className: "title", children: d.title }),
                      f.jsx("p", { children: d.content }),
                      f.jsx(J, {
                        to: "/expertise",
                        children: f.jsx("button", { children: "Voir plus" }),
                      }),
                    ],
                  }),
            },
            p
          )
        ),
      []
    );
  return f.jsxs("section", {
    className: "swiper-demo sectionMargin",
    children: [
      f.jsxs("div", {
        className: "title",
        children: [
          f.jsx("span", { children: "Nos" }),
          f.jsx("h1", { children: "Domaine d'intervention" }),
        ],
      }),
      f.jsxs("div", {
        className: "swiper-container sectionMargin",
        children: [
          f.jsx("div", {
            className: "swiper-imgs",
            children: f.jsx(As, {
              onTouchStart: () => s("img"),
              ref: n,
              onRealIndexChange: (c) => t(c.realIndex),
              loop: !0,
              onSlideChange: (c) => i === "img" && o(c),
              modules: [ja, Ma],
              className: "charmi",
              autoplay: { delay: 2500, disableOnInteraction: !1 },
              children: u(!0),
            }),
          }),
          f.jsx("div", {
            className: "swiper-infos",
            children: f.jsxs(As, {
              onTouchStart: () => s("content"),
              ref: r,
              onSlideChange: (c) => i === "content" && o(c),
              modules: [ja, Ma],
              className: "charmi",
              loop: !0,
              autoplay: { delay: 2500, disableOnInteraction: !1 },
              children: [
                f.jsxs("div", {
                  className: "button-container",
                  onMouseEnter: () => s("btn"),
                  children: [
                    f.jsx("button", { onClick: l, children: "←" }),
                    f.jsx("button", { onClick: a, children: "→" }),
                  ],
                }),
                f.jsxs("div", {
                  className: "current-index",
                  children: [
                    f.jsx("span", {
                      children: (e + 1).toString().padStart(2, "0"),
                    }),
                    f.jsxs("span", {
                      children: [" / ", wm.length.toString().padStart(2, "0")],
                    }),
                  ],
                }),
                u(!1),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function mL() {
  const { ref: e, inView: t } = Jd({ threshold: 0.001 }),
    [n, r] = P.useState("down");
  return (
    P.useEffect(() => {
      const i = () => {
        const o = window.scrollY;
        r(o > s ? "down" : "up"), (s = o);
      };
      let s = window.scrollY;
      return (
        window.addEventListener("scroll", i),
        () => {
          window.removeEventListener("scroll", i);
        }
      );
    }, []),
    f.jsx("div", {
      className: "containerBlock5 sectionMargin",
      ref: e,
      children: f.jsx(Nt.div, {
        ref: e,
        initial: { y: 100, opacity: 0 },
        animate: { y: t ? (n === "down" ? 10 : -60) : 100, opacity: t ? 1 : 0 },
        transition: { type: "spring", stiffness: 100, damping: 20 },
        children: f.jsx(hL, {}),
      }),
    })
  );
}
const gL = () =>
  f.jsx("div", {
    className: "conatiner6 sectionMargin",
    children: f.jsxs("div", {
      className: "texteblock6",
      children: [
        f.jsx("h1", {
          children:
            "Ils nous ont fait confiance, et nous avons su les fidéliser.",
        }),
        f.jsx("span", {
          children:
            "Découvrez comment notre engagement et notre expertise ont transformé des partenariats en relations durables.",
        }),
      ],
    }),
  });
function vL() {
  const [e, t] = P.useState(0),
    n = P.useRef(null),
    r = P.useRef(null),
    [i, s] = P.useState("img"),
    o = P.useCallback(
      (c) => {
        var p, h;
        if (e === c.activeIndex) return;
        (h = (p = (i === "img" ? r : n).current) == null ? void 0 : p.swiper) ==
          null || h[c.swipeDirection === "prev" ? "slidePrev" : "slideNext"]();
      },
      [e, i]
    ),
    l = () => {
      var c, d, p, h;
      (d = (c = n.current) == null ? void 0 : c.swiper) == null ||
        d.slidePrev(),
        (h = (p = r.current) == null ? void 0 : p.swiper) == null ||
          h.slidePrev();
    },
    a = () => {
      var c, d, p, h;
      (d = (c = n.current) == null ? void 0 : c.swiper) == null ||
        d.slideNext(),
        (h = (p = r.current) == null ? void 0 : p.swiper) == null ||
          h.slideNext();
    },
    u = P.useMemo(
      () => (c) =>
        Sm.map((d, p) =>
          f.jsx(
            rf,
            {
              children: c
                ? f.jsx("img", { src: d.img, alt: `img-${p}` })
                : f.jsxs("div", {
                    className: "swiper-slide-content",
                    children: [
                      f.jsx("div", { className: "title", children: d.title }),
                      f.jsx("p", { children: d.content }),
                      f.jsx(J, {
                        to: "/expertise",
                        children: f.jsx("button", { children: "Voir plus" }),
                      }),
                    ],
                  }),
            },
            p
          )
        ),
      []
    );
  return f.jsx("section", {
    className: "swiper-demo2 sectionMargin",
    children: f.jsxs("div", {
      className: "swiper-container",
      children: [
        f.jsx("div", {
          className: "swiper-imgs2",
          children: f.jsx(As, {
            onTouchStart: () => s("img"),
            ref: n,
            onRealIndexChange: (c) => t(c.realIndex),
            loop: !0,
            onSlideChange: (c) => i === "img" && o(c),
            modules: [ja, Ma],
            className: "charmi",
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            children: u(!0),
          }),
        }),
        f.jsx("div", {
          className: "swiper-infos2",
          children: f.jsxs(As, {
            onTouchStart: () => s("content"),
            ref: r,
            onSlideChange: (c) => i === "content" && o(c),
            modules: [ja, Ma],
            className: "charmi",
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            children: [
              f.jsxs("div", {
                className: "button-container",
                onMouseEnter: () => s("btn"),
                children: [
                  f.jsx("button", { onClick: l, children: "←" }),
                  f.jsx("button", { onClick: a, children: "→" }),
                ],
              }),
              f.jsxs("div", {
                className: "current-index",
                children: [
                  f.jsx("span", {
                    children: (e + 1).toString().padStart(2, "0"),
                  }),
                  f.jsxs("span", {
                    children: [" / ", Sm.length.toString().padStart(2, "0")],
                  }),
                ],
              }),
              u(!1),
            ],
          }),
        }),
      ],
    }),
  });
}
function yL() {
  return f.jsx("div", {
    className: "containerBlock7",
    children: f.jsx(vL, {}),
  });
}
const eu = "" + new URL("../video/video1.mp4", import.meta.url).href,
  Em = "" + new URL("../video/video.mp4", import.meta.url).href,
  Po = [eu, Em, eu, eu, Em],
  xL = () => {
    const e = P.useRef(null),
      t = P.useRef([]);
    P.useEffect(() => {
      const r = e.current;
      if (!r) return;
      let i = 0;
      const s = 1,
        o = () => {
          (i += s),
            i >= r.scrollWidth / 2 && (i = 0),
            (r.scrollLeft = i),
            n(),
            requestAnimationFrame(o);
        };
      o();
    }, []);
    const n = () => {
      const r = e.current;
      if (!r) return;
      const i = r.offsetWidth,
        s = r.scrollLeft + i / 2;
      t.current.forEach((o) => {
        if (!o) return;
        const l = o.offsetLeft,
          a = l + o.offsetWidth;
        l < s && a > s - i / 2 ? o.play() : o.pause();
      });
    };
    return f.jsx("div", {
      className: "infinite-slide-container",
      ref: e,
      children: f.jsxs("div", {
        className: "infinite-slide-content",
        children: [
          Po.map((r, i) =>
            f.jsx(
              "div",
              {
                className: "cardsSlite2",
                children: f.jsx("video", {
                  ref: (s) => (t.current[i] = s),
                  src: r,
                  loop: !0,
                  muted: !0,
                  style: { width: "100%", height: "auto" },
                }),
              },
              i
            )
          ),
          Po.map((r, i) =>
            f.jsx(
              "div",
              {
                className: "cardsSlite",
                children: f.jsx("video", {
                  ref: (s) => (t.current[i + Po.length] = s),
                  src: r,
                  loop: !0,
                  muted: !0,
                  style: { width: "100%", height: "auto" },
                }),
              },
              i + Po.length
            )
          ),
        ],
      }),
    });
  },
  wL = () =>
    f.jsxs("div", {
      className: "containerblock8",
      children: [
        f.jsx("h1", { children: "Nos clients témoignent" }),
        f.jsx(xL, {}),
      ],
    }),
  Tm = ({ slides: e, direction: t = "right" }) => {
    const n = P.useRef(null);
    return (
      P.useEffect(() => {
        const r = n.current;
        if (!r) return;
        let i = 0;
        const s = 1,
          o = () => {
            (i += t === "right" ? s : -s),
              i >= r.scrollWidth / 2
                ? (i = 0)
                : i <= 0 && (i = r.scrollWidth / 2),
              (r.scrollLeft = i),
              requestAnimationFrame(o);
          };
        o();
      }, [t]),
      f.jsx("div", {
        className: "infinite-slide-container",
        ref: n,
        children: f.jsxs("div", {
          className: "infinite-slide-content",
          children: [
            e
              ? e.map((r, i) =>
                  f.jsxs(
                    "div",
                    {
                      className: "cardsSlite",
                      children: [
                        f.jsx("img", { src: r.image, alt: `Slide ${i + 1}` }),
                        r.text && f.jsx("span", { children: r.text }),
                      ],
                    },
                    i
                  )
                )
              : null,
            e
              ? e.map((r, i) =>
                  f.jsxs(
                    "div",
                    {
                      className: "cardsSlite",
                      children: [
                        f.jsx("img", { src: r.image, alt: `Slide ${i + 1}` }),
                        r.text && f.jsx("span", { children: r.text }),
                      ],
                    },
                    i + e.length
                  )
                )
              : null,
          ],
        }),
      })
    );
  },
  Ut = "" + new URL("../images/logoslidetest.jpg", import.meta.url).href,
  tr = () => {
    const e = [
        { image: Ut },
        { image: Ut },
        { image: Ut },
        { image: Ut },
        { image: Ut },
      ],
      t = [
        { image: Ut },
        { image: Ut },
        { image: Ut },
        { image: Ut },
        { image: Ut },
      ];
    return f.jsxs("div", {
      className: "boxPartenaires sectionMargin",
      children: [
        f.jsxs("div", {
          className: "line1partenaire",
          children: [
            f.jsx("h1", { children: "Ils nous font confiance" }),
            f.jsx(Tm, { slides: e, direction: "left" }),
          ],
        }),
        f.jsxs("div", {
          className: "line1partenaire",
          children: [
            f.jsx("h1", { children: "Nos Partenaires" }),
            f.jsx(Tm, { slides: t, direction: "right" }),
          ],
        }),
      ],
    });
  };
function SL() {
  return f.jsx("div", {
    className: "containerBlock9 sectionMargin",
    children: f.jsx(tr, {}),
  });
}
const le = "" + new URL("../images/header2.jpg", import.meta.url).href,
  dr = "" + new URL("../images/imageExemple.png", import.meta.url).href,
  EL = ({ texts: e, speed: t }) => {
    const [n, r] = P.useState(0),
      [i, s] = P.useState(!0);
    return (
      P.useEffect(() => {
        const o = setInterval(() => {
          s(!1),
            setTimeout(() => {
              r((l) => (l + 1) % e.length), s(!0);
            }, t / 7);
        }, t);
        return () => clearInterval(o);
      }, [e, t]),
      f.jsxs("div", {
        className: "fade-container",
        children: [
          f.jsx("img", {
            src: e[n].icone,
            alt: "image a afficher",
            className: `fade-text ${i ? "fade-in" : "fade-out"}`,
          }),
          f.jsx("h2", {
            className: `fade-text ${i ? "fade-in" : "fade-out"}`,
            children: e[n].title,
          }),
          " ",
          f.jsx("span", {
            className: `fade-text ${i ? "fade-in" : "fade-out"}`,
            children: e[n].content,
          }),
          " ",
        ],
      })
    );
  };
function TL() {
  const [e, t] = P.useState(!0),
    n = () => {
      t(!1);
    };
  return f.jsxs("div", {
    className: "hero",
    children: [
      e && f.jsx("div", { className: "loader" }),
      f.jsx("video", {
        className: "video",
        autoPlay: !0,
        loop: !0,
        muted: !0,
        onCanPlayThrough: n,
        children: f.jsx("source", {
          src: "./video/video.mp4",
          type: "video/mp4",
        }),
      }),
      f.jsx("div", {
        className: "textHero sectionMargin",
        children: f.jsx("span", {
          children: f.jsx(EL, {
            texts: [
              {
                icone: "./icons/icone3.svg",
                title: "Conseils stratégiques et renforcement des compétences",
                content:
                  "Nous transformons votre organisation grâce à des conseils stratégiques efficaces et renforçons les compétences de vos équipes.",
              },
              {
                icone: "./icons/icone1.svg",
                title: "Optimisation des systèmes d'informations",
                content:
                  "Nous optimisons vos systèmes d’informations pour garantir des performances accrues et une sécurité renforcée.",
              },
              {
                icone: "./icons/icone2.svg",
                title: "Évaluation des performances financières",
                content:
                  "Nous évaluons vos performances financières pour la structurer efficacement et en augmenter la valeur.",
              },
            ],
            speed: 6e3,
          }),
        }),
      }),
      f.jsxs("div", {
        className: "lineBotHero",
        children: [f.jsx("span", { children: "SCROLL" }), f.jsx("span", {})],
      }),
    ],
  });
}
const Ie = ({
  icone: e,
  titre: t,
  description: n,
  btnName: r,
  image: i,
  background: s,
  color: o,
}) =>
  f.jsx("div", {
    className: "utilsPresentation",
    children: f.jsxs("div", {
      className: "containerPresentation sectionMargin",
      style: { background: s || "" },
      children: [
        f.jsxs("div", {
          className: "line1Presentation",
          children: [
            f.jsx("img", {
              src: e || "",
              alt: "",
              style: { display: "transparent" },
            }),
            f.jsx("h1", { children: t }),
            f.jsx("span", { style: { color: o || "" }, children: n }),
            f.jsx("button", {
              style: { display: r ? "" : "none" },
              children: r,
            }),
          ],
        }),
        f.jsx("div", {
          className: "line2Presentation",
          children: f.jsx("img", { src: i || "", alt: "" }),
        }),
      ],
    }),
  });
function PL() {
  return f.jsx("div", {
    className: "containerQuiSommeNous",
    children: f.jsx("div", {
      className: "items sectionMargin",
      children: f.jsx(Ie, {
        titre: "Votre partenaire de transformation et de croissance",
        description: `C2S Groupe, nous sommes un Consortium de sociétés de Conseil en Management et Stratégie, Ingénierie des\r
organisations, Finance, expertise comptable & fiscalité, Ingénierie informatique et transformation digitale.`,
        image: "./images/logoc2s.png",
      }),
    }),
  });
}
const Si = ({ image: e, titre: t, description: n, btnName: r, color: i }) => {
    const s = wr((o) => o.openFormulaire);
    return f.jsxs("div", {
      className: "UtilsBigImagePresentation",
      children: [
        f.jsx("img", { src: e, alt: "" }),
        f.jsxs("div", {
          className: "textUtilsBigImagePresentation",
          children: [
            f.jsx("h1", { children: t }),
            f.jsx("span", { style: { color: i }, children: n }),
            f.jsx("button", { onClick: s, children: r }),
          ],
        }),
      ],
    });
  },
  CL = "" + new URL("../images/Apropos.png", import.meta.url).href,
  pe = ({ image: e, titre: t, description: n, background: r, color: i }) =>
    f.jsxs("div", {
      className: "boxes",
      style: { background: r || "" },
      children: [
        f.jsx("div", {
          className: "boxImg",
          children: f.jsx("img", { src: e, alt: "" }),
        }),
        f.jsxs("div", {
          className: "textBoxes",
          style: { color: i || "" },
          children: [
            f.jsx("h1", { children: t }),
            f.jsx("span", { style: { color: i || "" }, children: n }),
          ],
        }),
        f.jsx("div", {
          className: "rond",
          children: Array.from({ length: 3 }).map((s, o) =>
            f.jsx("span", {}, o)
          ),
        }),
      ],
    });
function jL() {
  return f.jsxs("div", {
    className: "titreBoxesPresentation sectionMargin",
    children: [
      f.jsx("div", { id: "nos-pole-partenaires" }),
      f.jsx("h1", {
        children:
          "UNE ÉQUIPE PLURIPROFESSIONNELLE À VOS CÔTÉS POUR VOUS APPORTER DES SOLUTIONS SUR-MESURE:",
      }),
      f.jsxs("div", {
        className: "organigrame",
        children: [
          f.jsxs("div", {
            className: "boxLine2 sectionMargin",
            children: [
              f.jsx("div", {
                className: "block2Box2",
                children: f.jsx("img", { src: dr, alt: "" }),
              }),
              f.jsxs("div", {
                className: "line2",
                children: [
                  f.jsx("h1", { children: "Jean Baptiste N’DAKON" }),
                  f.jsx("span", { children: "Partner Pole Finance" }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "boxLine2 sectionMargin",
            children: [
              f.jsxs("div", {
                className: "line2",
                children: [
                  f.jsx("h1", { children: "Nadine FLAN" }),
                  f.jsx("span", {
                    children: "Partner Pole Conseil en Stratégie & Formation",
                  }),
                ],
              }),
              f.jsx("div", {
                className: "block2Box2",
                children: f.jsx("img", { src: dr, alt: "" }),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "boxLine2 sectionMargin",
            children: [
              f.jsx("div", {
                className: "block2Box2",
                children: f.jsx("img", { src: dr, alt: "" }),
              }),
              f.jsxs("div", {
                className: "line2",
                children: [
                  f.jsx("h1", { children: "Koné Ahmed Cheick" }),
                  f.jsx("span", {
                    children: "Partner Pole Expertise Comptable & Fiscalité",
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "boxLine2 sectionMargin",
            children: [
              f.jsxs("div", {
                className: "line2",
                children: [
                  f.jsx("h1", { children: "Aurélien OUABI" }),
                  f.jsx("span", { children: "Partner Pole IT" }),
                ],
              }),
              f.jsx("div", {
                className: "block2Box2",
                children: f.jsx("img", { src: dr, alt: "" }),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "boxLine2 sectionMargin",
            children: [
              f.jsx("div", {
                className: "block2Box2",
                children: f.jsx("img", { src: dr, alt: "" }),
              }),
              f.jsxs("div", {
                className: "line2",
                children: [
                  f.jsx("h1", { children: "Blaise YOMANFOU" }),
                  f.jsx("span", {
                    children: "Partner Pole Développement commercial",
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "boxLine2 sectionMargin",
            children: [
              f.jsxs("div", {
                className: "line2",
                children: [
                  f.jsx("h1", { children: "Franck Hilaire AYEKOUE" }),
                  f.jsx("span", { children: "Partner Pole Immobilier" }),
                ],
              }),
              f.jsx("div", {
                className: "block2Box2",
                children: f.jsx("img", { src: dr, alt: "" }),
              }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        className: "cards",
        children: [
          f.jsx(J, {
            to: "Conseil-Formation",
            children: f.jsx(pe, { titre: "CONSEIL STRATÉGIQUE & FORMATION" }),
          }),
          f.jsx(J, {
            to: "Expertise-IT",
            children: f.jsx(pe, { titre: "EXPERTISE IT" }),
          }),
          f.jsx(J, {
            to: "Finance",
            children: f.jsx(pe, { titre: "FINANCE" }),
          }),
          f.jsx(J, {
            to: "Expertise-comptable-fiscalite",
            children: f.jsx(pe, { titre: "FISCALITÉ" }),
          }),
          f.jsx(J, {
            to: "Expertise-comptable-fiscalite",
            children: f.jsx(pe, { titre: "EXPERTISE COMPTABLE" }),
          }),
          f.jsx(J, {
            to: "Immobilier",
            children: f.jsx(pe, { titre: "IMMOBILIER" }),
          }),
        ],
      }),
    ],
  });
}
function tu({ Counter: e, multiple: t, duration: n, delayBefore: r }) {
  const [i, s] = P.useState("down"),
    o = P.useRef(null),
    l = U0(o, { once: !t }),
    a = EM(),
    u = _0(0),
    c = Xj(u, Math.round);
  return (
    P.useEffect(() => {
      let d = window.scrollY;
      const p = () => {
        const h = window.scrollY;
        h > d ? s("down") : s("up"), (d = h);
      };
      return (
        window.addEventListener("scroll", p),
        () => {
          window.removeEventListener("scroll", p);
        }
      );
    }, []),
    P.useEffect(() => {
      if (l) return wM(u, e, { duration: n, delay: r }).stop;
    }, [l, u, e, n, r]),
    P.useEffect(() => {
      l
        ? i === "down"
          ? a.start({
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 1,
              },
            })
          : i === "up" &&
            a.start({
              y: -50,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 1,
              },
            })
        : a.start({ y: 100, opacity: 0 });
    }, [l, i, a]),
    f.jsx("div", {
      children: f.jsx(Nt.div, {
        className: "countBox",
        ref: o,
        initial: { y: 100, opacity: 0 },
        animate: a,
        whileHover: { width: "320px", height: "320px" },
        transition: { type: "spring" },
        children: c,
      }),
    })
  );
}
function ML() {
  return f.jsx("div", {
    className: "conatinerBlock6",
    children: f.jsx("div", {
      className: "itemsBLock6 sectionMargin",
      children: f.jsxs("div", {
        className: "perfBoxBLock6",
        children: [
          f.jsx("h1", { className: "textPerf", children: "Nos performances" }),
          f.jsxs("div", {
            className: "boxStatistique",
            children: [
              f.jsx("h2", { children: "Nombres d'employés" }),
              f.jsx(tu, { Counter: 20, delayBefore: 0, duration: 6 }),
            ],
          }),
          f.jsxs("div", {
            className: "boxStatistique",
            children: [
              f.jsx("h2", { children: "Nombres de projets majeurs" }),
              f.jsx(tu, { Counter: 100, delayBefore: 1, duration: 6 }),
            ],
          }),
          f.jsxs("div", {
            className: "boxStatistique",
            children: [
              f.jsx("h2", { children: "Exemple" }),
              f.jsx(tu, { Counter: 100, delayBefore: 2, duration: 6 }),
            ],
          }),
        ],
      }),
    }),
  });
}
const NL = () => {
    const e = Zn();
    P.useEffect(() => {
      if (e.hash) {
        const n = document.getElementById(e.hash.substring(1));
        n && n.scrollIntoView({ behavior: "smooth" });
      }
    }, [e]);
    const t = [
      {
        title: "Intégrité",
        items: [
          "Mettre la cohérence, la transparence et la confiance au coeur de la relation avec nos clients & collaborateurs.",
        ],
      },
      {
        title: "Agilité",
        items: [
          "Notre organisation est flexible et s’adapte aux évolutions rapides, aux changements afin d’apporter des solutions à nos clients",
        ],
      },
      {
        title: "Innovation",
        items: [
          "Avec audace et imagination, nous tachons de travailler à créer les services pour stimuler la croissance et la transformation chez nos clients.",
        ],
      },
      {
        title: "Excellence",
        items: [
          "Notre souci du détail, notre exigence et notre volonté à satisfaire constamment nous oblige à l’excellence.",
        ],
      },
    ];
    return f.jsxs("main", {
      className: "containerIndex",
      children: [
        f.jsx(TL, {}),
        f.jsx(PL, {}),
        f.jsx(kM, {}),
        f.jsx("div", { id: "qui-sommes-nous" }),
        f.jsx("br", {}),
        f.jsx("div", {
          className: "containerApropos sectionMargin",
          children: f.jsxs("div", {
            className: "line1",
            children: [
              f.jsx("div", {
                className: "boximg",
                children: f.jsx("img", { src: CL, alt: "" }),
              }),
              f.jsxs("p", {
                className: "TextBoxe gap",
                children: [
                  f.jsxs("span", {
                    className: "text1",
                    children: [
                      f.jsxs("div", {
                        className: "premierparagraph",
                        children: [
                          f.jsx("span", { className: "N", children: "N" }),
                          f.jsx("span", {
                            children:
                              "ous sommes un consortium de sociétés de conseil en Management et Stratégie, Ingénierie",
                          }),
                        ],
                      }),
                      f.jsx("span", {
                        children:
                          "des organisations, Finance, Expertise comptable & fiscalité, Ingénierie informatique et transformation digitale.",
                      }),
                    ],
                  }),
                  f.jsx("span", {
                    children:
                      "Nos interventions touchent tant les métiers du management que des ressources humaines, de la finance, du marketing, de la relation client, de l’informatique et des solutions numériques, grâce à nos experts africains et dans le reste du monde.",
                  }),
                  f.jsx("span", {
                    children:
                      "Nos valeurs que sont Intégrité, Agilité, Innovation et Excellence nous permettent d’apporter aux",
                  }),
                ],
              }),
              f.jsxs("p", {
                className: "TextBoxe",
                children: [
                  f.jsx("span", {
                    children:
                      "organisations des secteurs publics et privés, des solutions pour l’amélioration de l’expérience client, l’amélioration de la performance des business, de la résistance au changement, de la transformation numérique et du renforcement des capacités.",
                  }),
                  f.jsx("span", {
                    children:
                      "Ainsi C2S Group, se positionne comme LE partenaire de transformation et de croissance, doté d’une excellente maîtrise de l’environnement local des affaires par son expertise avérée découlant du haut niveau de compétences de ses experts métiers ainsi que sa capacité à offrir un service de qualité premium à l’occasion de chaque mission effectuée.",
                  }),
                ],
              }),
            ],
          }),
        }),
        f.jsx(kr, {
          image: dr,
          title: "Un Duo",
          sousTitre: "GAGNANT",
          description:
            "Notre pluri-expertise locale et des solutions sur mesure pour propulser vos performances, avec vous comme moteur de nos initiatives.",
        }),
        f.jsx(jL, {}),
        f.jsx(mL, {}),
        f.jsx(_M, {}),
        f.jsx("div", {
          className: "values sectionMargin",
          children: t.map((n, r) =>
            f.jsxs(
              Nt.div,
              {
                className: "value",
                initial: { opacity: 0, y: -50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                viewport: { once: !0 },
                children: [
                  f.jsx("h2", { className: "value-title", children: n.title }),
                  f.jsx("ul", {
                    className: "value-items",
                    children: n.items.map((i, s) =>
                      f.jsx("li", { children: i }, s)
                    ),
                  }),
                ],
              },
              r
            )
          ),
        }),
        f.jsx(gL, {}),
        f.jsx(yL, {}),
        f.jsx(wL, {}),
        f.jsx(ML, {}),
        f.jsx(SL, {}),
        f.jsx(Si, {
          btnName: "Nous rejoindre",
          description: "Rejoignez notre equipe C2S Groupe",
          image: le,
          titre: "Candidature spontanée",
          color: "white",
        }),
      ],
    });
  },
  nr = ({ image: e, title: t, description: n, display: r }) => {
    const i = Zn(),
      [s, o] = P.useState(i.pathname);
    P.useEffect(() => {
      o(i.pathname);
    }, [i]);
    const l = wr((a) => a.openFormulaire);
    return f.jsxs("div", {
      className: "containerHeader2",
      children: [
        f.jsx("img", { src: e, alt: "header" }),
        f.jsxs("div", {
          className: "text",
          children: [
            f.jsx("h1", { children: t }),
            f.jsx("p", { children: n }),
            f.jsx("button", {
              style: { display: r },
              onClick: l,
              children: "Contactez Nous",
            }),
          ],
        }),
        f.jsxs("div", {
          className: "lineBotHero",
          children: [
            f.jsx("span", { children: "SCROLL" }),
            f.jsx("span", {
              className: s === "/la-Maison-Des-Entreprises" ? "purpleline" : "",
            }),
          ],
        }),
      ],
    });
  },
  LL = ({ image: e, title: t, delaying: n, liens: r }) => {
    const i = P.useRef(null),
      s = U0(i, { once: !0 });
    return (
      P.useEffect(() => {
        console.log("en vue", s);
      }, [s]),
      f.jsx(J, {
        to: r,
        children: f.jsxs(Nt.div, {
          ref: i,
          className: "containerCardsExpertise",
          initial: { opacity: 0 },
          animate: s ? { opacity: 1 } : { opacity: 0 },
          transition: { duration: 1, delay: n },
          children: [
            f.jsx("img", { src: e, alt: "expertise" }),
            f.jsx("h1", { children: t }),
          ],
        }),
      })
    );
  },
  Bi = "" + new URL("../images/testExpertise.jpg", import.meta.url).href,
  kL = () => {
    const e = [
      { image: Bi, title: "Conseil & formation", liens: "/Conseil-Formation" },
      {
        image: Bi,
        title: "Expertise IT",
        delaying: 0.3,
        liens: "/Expertise-IT",
      },
      { image: Bi, title: "Finance", delaying: 0.6, liens: "/Finance" },
      {
        image: Bi,
        title: "Expertise comptable & fiscalité",
        delaying: 0.9,
        liens: "/Expertise-comptable-fiscalite",
      },
      { image: Bi, title: "Immobilier", delaying: 1.2, liens: "/Immobilier" },
    ];
    return f.jsxs("div", {
      className: "containerExpertise",
      children: [
        f.jsx(nr, {
          image: le,
          title: "Expertises",
          description:
            "Découvrez nos domaines d'expertise variés et adaptés à vos besoins professionnels.",
        }),
        f.jsxs("div", {
          className: "boxExpertises sectionMargin",
          children: [
            f.jsx("div", {
              className: "boxCradsExpertise",
              children: e
                ? e.map((t, n) =>
                    f.jsx(
                      LL,
                      {
                        liens: t.liens ? t.liens : "",
                        image: t.image,
                        title: t.title,
                        delaying: t.delaying,
                      },
                      n
                    )
                  )
                : null,
            }),
            f.jsx(tr, {}),
          ],
        }),
      ],
    });
  },
  bL = ({ titre: e, soustitre: t, description: n }) =>
    f.jsx("div", {
      className: "UtilsCardsLikePriceProps",
      children: f.jsxs("div", {
        className: "maintain sectionMargin",
        children: [
          f.jsx("h1", { children: e }),
          f.jsx("h1", { children: t }),
          f.jsx("span", { children: n }),
        ],
      }),
    }),
  Ht = ({
    icone: e,
    titre: t,
    description: n,
    image: r,
    background: i,
    color: s,
  }) => {
    const [o, l] = P.useState(window.innerWidth < 650);
    return (
      P.useEffect(() => {
        const a = () => {
          l(window.innerWidth < 650);
        };
        return (
          window.addEventListener("resize", a),
          () => window.removeEventListener("resize", a)
        );
      }, []),
      f.jsx("div", {
        className: "utilsPresentation2",
        children: f.jsx("div", {
          className: "containerPresentation sectionMargin",
          style: { background: i },
          children: o
            ? f.jsxs(f.Fragment, {
                children: [
                  f.jsxs("div", {
                    className: "line1Presentation",
                    children: [
                      f.jsx("img", {
                        src: e,
                        alt: "",
                        style: { display: e ? "" : "none" },
                      }),
                      f.jsx("h1", { children: t }),
                      f.jsx("span", { style: { color: s }, children: n }),
                    ],
                  }),
                  f.jsx("div", {
                    className: "line2Presentation",
                    children: f.jsx("img", { src: r, alt: "" }),
                  }),
                ],
              })
            : f.jsxs(f.Fragment, {
                children: [
                  f.jsx("div", {
                    className: "line2Presentation",
                    children: f.jsx("img", { src: r, alt: "" }),
                  }),
                  f.jsxs("div", {
                    className: "line1Presentation",
                    children: [
                      f.jsx("img", {
                        src: e,
                        alt: "",
                        style: { display: e ? "" : "none" },
                      }),
                      f.jsx("h1", { children: t }),
                      f.jsx("span", { style: { color: s }, children: n }),
                    ],
                  }),
                ],
              }),
        }),
      })
    );
  };
function RL() {
  return f.jsxs("div", {
    className: "latecontainer",
    children: [
      f.jsx(nr, {
        image: le,
        title: "Conseil & formation",
        description:
          "Notre pôle conseil et formation vous accompagne dans la mise en place de solutions sur mesure, adaptées à vos besoins.",
      }),
      f.jsx(kr, {
        image: le,
        title: "Notre",
        sousTitre: "Savoir faire",
        description: `Le pôle conseil et formation de C2S Group joue un rôle essentiel dans\r
l’accompagnement de nos clients. Il se compose d'experts spécialisés dans divers\r
domaines, capables d'apporter des solutions adaptées aux enjeux spécifiques de\r
chaque organisation.`,
      }),
      f.jsxs("div", {
        className: "twoComponents",
        children: [
          f.jsx(bL, {
            titre: "Nos Etapes",
            description:
              "Notre approche se décline en plusieurs étapes, qui sont autant de jalons pour garantir la réussite de votre projet.",
            soustitre: "",
          }),
          f.jsxs("div", {
            className: "BoxCardsTwoComponents",
            children: [
              f.jsx(pe, {
                titre: "1 ére étape",
                description: "Analyse des besoins des clients.",
                image: "./icons/radio.png",
              }),
              f.jsx(pe, {
                titre: "2 éme étape",
                description:
                  "Élaboration de stratégies sur mesure pour optimiser les performances.",
                image: "./icons/radio.png",
              }),
              f.jsx(pe, {
                titre: "3 éme étape",
                description: "Accompagnement à la Mise en Œuvre",
                image: "./icons/radio.png",
              }),
              f.jsx(pe, {
                titre: "4 éme étape",
                description: "Suivi et Évaluation",
                image: "./icons/radio.png",
              }),
            ],
          }),
        ],
      }),
      f.jsx("div", {
        className: "missions sectionMargin",
        children: f.jsx("h1", { children: "Mise en oeuvre " }),
      }),
      f.jsx("div", {
        className: "missions sectionMargin",
        children: f.jsx("h4", { children: "Analyse des besoins des clients " }),
      }),
      f.jsxs("div", {
        className: "containerCF",
        children: [
          f.jsx(Ie, {
            description: `Réalisation d'un état des lieux pour comprendre les\r
forces, faiblesses, opportunités et menaces (analyse SWOT).\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Diagnostic",
            background: "",
            color: "Black",
          }),
          f.jsx(Ht, {
            description: `Utilisation d'outils d'analyse de marché et\r
d'études sectorielles pour évaluer le positionnement de votre\r
entreprise.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Collecte de Données",
            background: "",
            color: "Black",
          }),
          f.jsx(Ie, {
            description: `analyse des données collectées pour se faire\r
des convictions et élaborer une stratégie adaptée\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Analyse de la data",
            background: "",
            color: "Black",
          }),
          f.jsx("div", {
            className: "missions sectionMargin",
            children: f.jsx("h4", {
              children:
                "Élaboration de stratégies sur mesure pour optimiser les performances",
            }),
          }),
          f.jsx(Ht, {
            description: `Aider les clients à clarifier leur vision à long\r
terme et à définir des objectifs mesurables.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Vision et Objectifs",
            background: "",
            color: "Black",
          }),
          f.jsx(Ie, {
            description: `Développement de plans d'action détaillés,\r
incluant des étapes concrètes et des indicateurs de performance.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Plans d'Action",
            background: "",
            color: "Black",
          }),
          f.jsx("div", {
            className: "missions sectionMargin",
            children: f.jsx("h4", {
              children: "Accompagnement à la Mise en Œuvre",
            }),
          }),
          f.jsx(Ht, {
            description: `Assistance dans la mise en place des actions\r
définies, avec une attention particulière à la gestion des\r
ressources humaines et matérielles.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Coordination",
            background: "",
            color: "Black",
          }),
          f.jsx(Ie, {
            description: `Stratégies pour accompagner les\r
équipes dans l'adoption des nouvelles orientations, en minimisant\r
les résistances.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Gestion du Changement",
            background: "",
            color: "Black",
          }),
          f.jsx("div", {
            className: "missions sectionMargin",
            children: f.jsx("h4", { children: "Suivi et Évaluation" }),
          }),
          f.jsx(Ht, {
            description: `Définition et suivi des indicateurs de performance pour\r
mesurer l’efficacité des stratégies mises en place.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Gestion du Changement",
            background: "",
            color: "Black",
          }),
          f.jsx(Ie, {
            description: `Évaluation régulière des résultats et ajustement\r
des stratégies en fonction des évolutions du marché et des\r
feedbacks des équipes.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Ajustements",
            background: "",
            color: "Black",
          }),
          f.jsx(kr, {
            image: le,
            title: "Nos domaines",
            sousTitre: "d'intervention",
            description: `Notre service de conseil est conçu pour\r
accompagner les entreprises dans leur\r
développement stratégique et opérationnel. Nos\r
experts analysent vos besoins spécifiques et vous\r
fournissent des recommandations sur mesure\r
pour optimiser vos processus, améliorer votre\r
performance et atteindre vos objectifs.`,
          }),
          f.jsx(Ht, {
            description: `Nous établissons les différents scénarios de\r
programmation et réalisons les études de\r
marché et de faisabilité. Nou assistons le Maitre\r
d’Ouvrage dans sa définition architecturale et\r
urbanistique.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Définition du projet",
            background: "",
            color: "Black",
          }),
          f.jsx(Ie, {
            description: `Accompagnement dans la mise en oeuvre\r
de projets complexes, de la planification à\r
l’exécution.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Gestion de projet",
            background: "",
            color: "Black",
          }),
          f.jsx(Ht, {
            description: `Aide à l’adoption de nouvelles technologies\r
pour améliorer l’efficacité opérationnelle.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Transformation digitale",
            background: "",
            color: "Black",
          }),
          f.jsx(Ie, {
            description: `Stratégies de gestion des talents, développement\r
de la culture d’entreprise et optimisation des\r
performances.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Ressources Humaines",
            background: "",
            color: "Black",
          }),
          f.jsx(Ht, {
            description: `L’expérience client joue un rôle crucial dans la\r
transformation digitale. Nous analysons vos\r
parcours client, vos canaux d’intéraction, vos\r
processus métiers, vos KPIs et vos outils de\r
pilotage de la performance pour vous proposer\r
une stratégie CX optimale.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "L’Expérience client",
            background: "",
            color: "Black",
          }),
        ],
      }),
      f.jsx(tr, {}),
      f.jsx(Si, {
        btnName: "Nous contacter",
        image: le,
        description:
          "Nos experts se tiennent à votre disposition pour vous accompagner dans la mise en place de solutions sur mesure, adaptées à vos besoins.",
        titre: "Besoin d'un accompagnement sur mesure ?",
        color: "white",
      }),
    ],
  });
}
function AL() {
  const e = [
      {
        title: "Audit informatique",
        description:
          "Nous évaluons vos systèmes et infrastructures existants pour identifier les points d’amélioration et les rendre plus robustes.",
      },
      {
        title: "Schéma directeur informatique",
        description:
          "Nous élaborons votre stratégie alignées sur les objectifs stratégiques, et nous accompagnons la définition de votre schéma directeur.",
      },
      {
        title: "Développement d’applications",
        description:
          "Développement sur-mesure: nous faisons la création d’ applications spécifiques répondant à votre besoin unique",
      },
      {
        title: "Intégration de systèmes",
        description:
          "nous assurons la communication entre différents logiciels et systèmes au sein de votre organisation",
      },
      {
        title: "Gestion de projets IT",
        description:
          "Gestion de projet: planification, exécution, et suivi de projets technologiques, avec des méthodologies comme Agile ou SCRUM",
      },
      {
        title: "Maintenance & support",
        description:
          "Assistance aux utilisateurs finaux pour résoudre les problèmes techniques liés aux logiciels et matériels . maintenance des systèmes.",
      },
    ],
    t = [
      {
        type: 1,
        grandtitre: "Audit informatique",
        titre: "Objectifs de la Mission",
        description:
          "Identifier les vulnérabilités des systèmes et des réseaux pour protéger les données sensibles , analyser l’efficacité des systèmes d’information pour garantir qu’ils répondent aux besoins de l’organisation , vérifier que l’organisation respecte les lois et normes en matière de sécurité des données (ex. : RGPD, ISO 27001) , proposer des recommandations pour optimiser les processus et les pratiques informatiques.",
        image: le,
      },
      {
        type: 2,
        grandtitre: "Schéma directeur informatique",
        titre: "Objectifs de la Mission",
        description:
          "Définir une stratégie informatique alignée sur les objectifs stratégiques de l’entreprise , identifier les besoins et les priorités en matière de systèmes d’information , définir les orientations et les priorités en matière de technologies de l’information , élaborer un plan d’action pour la mise en œuvre de la stratégie informatique.",
        image: le,
      },
      {
        type: 1,
        grandtitre: "Développement d’applications",
        titre: "Objectifs de la Mission",
        description:
          "Développer des logiciels qui répondent précisément aux exigences fonctionnelles et techniques des utilisateurs , Améliorer l'efficacité opérationnelle à travers dessolutions automatisées et des flux de travail optimisés, Créer des systèmes capables de s'adapter à l'évolution des besoins de l'entreprise",
        image: le,
      },
      {
        type: 2,
        grandtitre: "Intégration de systèmes",
        titre: "Objectifs de la Mission",
        description:
          "Assurer la communication entre différents logiciels et systèmes , garantir l’interopérabilité des systèmes d’information , optimiser les processus métier en intégrant des solutions logicielles , améliorer la productivité et la performance de l’organisation.",
        image: le,
      },
      {
        type: 1,
        grandtitre: "Gestion de projets IT",
        titre: "Objectifs de la Mission",
        description:
          "S'assurer que le projet répond aux attentes des parties prenantes et atteint les résultats escomptés , Utiliser efficacement les ressources humaines, financières et matérielles ; Identifier, évaluer et atténuer les risques associés au projet.",
        image: le,
      },
      {
        type: 2,
        grandtitre: "Maintenance & support",
        titre: "Objectifs de la Mission",
        image: le,
        description:
          "Minimiser les temps d'arrêt des systèmes et des applications , identifier et résoudre rapidement les problèmes rencontrés par les utilisateurs , évaluer et optimiser les systèmes pour améliorer leur performance et leur fiabilité.",
      },
    ];
  return f.jsxs("div", {
    children: [
      f.jsx(nr, {
        image: le,
        title: "Pole Solutions IT",
        description: `Notre pole en Ingénierie Informatique offre une gamme variée de services liés aux\r
technologies de l'information et à l'ingénierie logicielle. Nos principales activités`,
      }),
      f.jsx(kr, {
        image: le,
        title: "Notre",
        sousTitre: "Savoir faire",
        description:
          "Le pôle en Ingénierie Informatique, spécialisé en conseil stratégique IT, offre des services couvrant le développement logiciel, l'intégration de systèmes, et la transformation digitale. Il accompagne les entreprises dans la conception de solutions technologiques adaptées, tout en assurant la gestion des infrastructures, la sécurité des données et l'optimisation des processus. L'objectif est d'améliorer l'agilité, la compétitivité et la performance numérique des organisations.",
      }),
      f.jsxs("div", {
        className: "domainedintervention sectionMargin",
        children: [
          f.jsx("h1", {
            className: "red",
            children: "Nos domaines d'intervention",
          }),
          f.jsx("div", {
            className: "containerIt",
            children: e.map((n, r) =>
              f.jsxs(
                "div",
                {
                  className: "boxDomaine",
                  children: [
                    f.jsx("span", { className: "linered" }),
                    f.jsxs("div", {
                      className: "text",
                      children: [
                        f.jsx("h1", { children: n.title }),
                        f.jsx("span", { children: n.description }),
                      ],
                    }),
                    f.jsx("img", { src: "", alt: "" }),
                  ],
                },
                r
              )
            ),
          }),
          f.jsx("div", {
            className: "explain",
            children: t.map((n, r) =>
              f.jsxs(
                Se.Fragment,
                {
                  children: [
                    f.jsx("h1", { children: n.grandtitre }),
                    n.type === 1
                      ? f.jsx(Ie, {
                          titre: n.titre,
                          image: n.image,
                          description: n.description,
                        })
                      : f.jsx(Ht, {
                          titre: n.titre,
                          image: n.image,
                          description: n.description,
                        }),
                  ],
                },
                r
              )
            ),
          }),
          f.jsxs("div", {
            className: "clp",
            children: [
              f.jsx(pe, {
                titre: "Une equipe devouée",
                description: "",
                image: "./icons/guichets.svg",
              }),
              f.jsx(pe, {
                titre: "Une grande expertise",
                description: "",
                image: "./icons/guichets.svg",
              }),
              f.jsx(pe, {
                titre: "disponible 24/24",
                description: "",
                image: "./icons/guichets.svg",
              }),
            ],
          }),
        ],
      }),
      f.jsx(tr, {}),
      f.jsx(Si, {
        btnName: "Contactez-nous",
        image: le,
        description: `Nous serons Ravis de le coder pour vous !\r
`,
        titre: "Vous avez un projet ?",
        color: "white",
      }),
    ],
  });
}
function DL() {
  const e = [
    {
      title: "Analyse Financière",
      description:
        "Evaluation de la santé financière de l’organisation à travers des ratios financiers, des bilans et comptes de résultat ,• Identification des forces et faiblesses financières.",
    },
    {
      title: "Élaboration de stratégies",
      description:
        "Développement de stratégies financières adaptées aux objectifs à court et long terme de l’entreprise. Conseils sur les options de financement, y compris les prêts, les investissements et le capital-risque.",
    },
    {
      title: "Gesttion de la trésorerie",
      description:
        "Optimisation des flux de trésorerie pour assurer la liquidité nécessaire aux opérations. Mise en place de politique de gestion des créances et des dettes.",
    },
    {
      title: "Évaluation d'invesstissement",
      description:
        "Analyse des projets d’investissements pour déterminer leur viabilité et leur rentabilité. Utilisation d’outils d’ évaluation tels que le retour sur investissement et l’analyse coût- bénéfice.",
    },
  ];
  return f.jsxs("div", {
    children: [
      f.jsx(nr, {
        image: le,
        title: "Finance",
        description:
          "Notre mission est d’aider les entreprises et les organisations à optimiser leur gestion financière, à prendre des décisions éclairées et à améliorer leur performance financière.",
      }),
      f.jsx(kr, {
        image: le,
        title: "Gestion",
        sousTitre: "Financiere",
        description: `La mission de conseil en finance vise à aider les entreprises et les organisations à\r
optimiser leur gestion financière, à prendre des décisions éclairées et à améliorer leur\r
performance financière. Cette mission peut couvrir divers aspects, allant de l'analyse\r
financière à la stratégie d'investissement. Les principales composantes de notre\r
mission.`,
      }),
      f.jsx("div", {
        className: "domainedintervention sectionMargin",
        children: f.jsx("div", {
          className: "containerIt",
          children: e.map((t, n) =>
            f.jsxs(
              "div",
              {
                className: "boxDomaine",
                children: [
                  f.jsx("span", { className: "linered" }),
                  f.jsxs("div", {
                    className: "text",
                    children: [
                      f.jsx("h1", { children: t.title }),
                      f.jsx("span", { children: t.description }),
                    ],
                  }),
                  f.jsx("img", { src: "", alt: "" }),
                ],
              },
              n
            )
          ),
        }),
      }),
      f.jsx("div", {
        className: "TextObjectif",
        children: f.jsxs("div", {
          className: "presentationObjt1 sectionMargin",
          children: [
            f.jsx(ef, {
              text1: "Notre",
              text2: "Objectif",
              couleurT1: "#e82928",
              couleurT2: "black",
            }),
            f.jsx("div", {
              className: "",
              children: f.jsx(Ie, {
                titre: "Maximiser les chances de succès de votre projet",
              }),
            }),
            f.jsxs("div", {
              className: "cardslike",
              children: [
                f.jsx(pe, { titre: "Evaluations d’entreprises" }),
                f.jsx(pe, {
                  titre: "Montages financiers, études de faisabilité",
                }),
                f.jsx(pe, { titre: "Rédaction de Business Planest" }),
                f.jsx(pe, {
                  titre:
                    "Recherche de fonds propres ou de financements extérieurs, de nouveaux investisseurs",
                }),
                f.jsx(pe, {
                  titre: "Structuration et restructuration financière",
                }),
              ],
            }),
          ],
        }),
      }),
      f.jsx("div", {
        className: "bigInformation",
        children: f.jsx(Si, {
          btnName: "Contactez Nous",
          titre: "Réseau bancaire - caution et garanties",
          description: `Que vous soyez un Etat, un\r
établissement financier, une\r
organisation publique ou privée\r
ou que vous apparteniez à un\r
secteur réglementé, vous êtes\r
exposé à des risques divers.\r
Vous pourriez sûrement faire\r
appel à une garantie financière\r
pour votre projet ou pour une\r
opération de levée de fonds.`,
          image: le,
          color: "white",
        }),
      }),
      f.jsx("div", {
        className: "presentationObjt1",
        children: f.jsx(Ht, {
          description: `Grâce à son réseau de banques et assureurs\r
nationaux et internationaux, C2S Finances sfait un tour d’horizon des solutions qui\r
s’offrent à vous en termes de couverture de\r
risque à travers les prestations suivantes :`,
        }),
      }),
      f.jsxs("div", {
        className: "cardslike sectionMargin",
        children: [
          f.jsx(pe, { titre: "Echanges interbancaires sécurisés" }),
          f.jsx(pe, { titre: "Emission de LC ou SBLC" }),
          f.jsx(pe, {
            titre: `Confirmation\r
de LC et SBLC`,
          }),
          f.jsx(pe, {
            titre: `Ouvertures\r
de lignes de\r
trade`,
          }),
          f.jsx(pe, {
            titre: `Structuration\r
d’obligations`,
          }),
          f.jsx(pe, {
            titre: `Cautions\r
bancaires`,
          }),
          f.jsx(pe, {
            titre: `Cautions\r
d’enlèvement`,
          }),
          f.jsx(pe, {
            titre: `Escompte\r
de traite`,
          }),
        ],
      }),
      f.jsx(tr, {}),
      f.jsx(Si, {
        btnName: "Contactez-nous",
        image: le,
        description: `Nous sommes là pour vous aider !\r
`,
        titre: "Besoin d'un conseil en finance ?",
        color: "white",
      }),
    ],
  });
}
function IL() {
  return f.jsxs("div", {
    children: [
      f.jsx(nr, {
        image: le,
        title: "Expertise Comptable , Fiscalite",
        description:
          "Soucieux de vous accompagner dans la gestion de votre entreprise, nous vous proposons des services d’expertise comptable et fiscale adaptés à vos besoins.",
      }),
      f.jsx(kr, {
        image: le,
        title: "Notre",
        sousTitre: "Engagement",
        description: `Nous vous accompagnons pour une optimisation fiscale,\r
conformité légale et externalisation de votre service\r
comptable. Notre mission est de vous aider à gérer votre entreprise en toute sérénité.Nous vous proposons des services d’expertise comptable et fiscale adaptés à vos besoins.`,
      }),
      f.jsx("div", {
        className: "textCf sectionMargin",
        children: f.jsx(ef, {
          text1: "Nos domaines",
          text2: "d'intervention",
          couleurT1: "#e82928",
          couleurT2: "black",
        }),
      }),
      f.jsxs("div", {
        className: "containercf",
        children: [
          f.jsx(Ie, {
            description: `Mettre en place ou améliorer les procédures de contrôle\r
interne pour assurer la fiabilité des informations financières\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Audit & contrôle interne",
            background: "",
            color: "Black",
          }),
          f.jsx(Ie, {
            description: `Réaliser des vérifications pour s’assurer du respect de\r
toutes les obligations fiscales et éviter les redressements,\r
fournir des recommandations sur la structuration des\r
affaires pour optimiser les charges fiscales. Représenter\r
votre organisation en cas de litige avec l’administration\r
fiscale.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Audit & conseil fiscal",
            background: "",
            color: "black",
          }),
          f.jsx(Ie, {
            description: `Nous assurons la gestion de bout en bout de votre\r
comptabilité.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Assistance comptable externalisée",
            background: "",
            color: "black",
          }),
          f.jsx(Ie, {
            description: `Veille Réglementaire : Suivre les évolutions des normes\r
comptables (IFRS, GAAP) et fiscales.\r
Assistance en Cas de Contrôle : Accompagner les\r
entreprises lors des audits et contrôles par les autorités\r
fiscales.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Conformité et reglementation",
            background: "",
            color: "black",
          }),
        ],
      }),
      f.jsx(tr, {}),
    ],
  });
}
function OL() {
  return f.jsxs("div", {
    children: [
      f.jsx(nr, {
        image: le,
        title: "Immobilier",
        description:
          "Nous vous accompagnons pour la définition de votre projet immobilier, sa structuration, sa coordination complète et sa gestion administrative et financière.",
      }),
      f.jsx(kr, {
        image: le,
        title: "Notre",
        sousTitre: "Engagement",
        description: `Nous vous accompagnons pour la définition\r
de votre projet immobilier, sa structuration,\r
sa coordination complète et sa gestion\r
administrative et financière pour une réalisation dans les meilleures conditions.`,
      }),
      f.jsxs("div", {
        className: "presentationImmobilier",
        children: [
          f.jsx(Ie, {
            description: `Nous établissons les différents scénarios de\r
programmation et réalisons les études de\r
marché et de faisabilité. Nou assistons le Maitre\r
d’Ouvrage dans sa définition architecturale et\r
urbanistique.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Définition du projet",
            background: "",
            color: "Black",
          }),
          f.jsx(Ie, {
            description: `assister le MO à recruter l'équipe de maîtrise\r
d'oeuvre en charge des études architecturales\r
(architecte) et techniques (différents bureaux\r
d'études) du projet, puis collaborer avec la\r
maîtrise d'oeuvre pour l'obtention du permis de\r
construire et des autorisations préalables\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Structuration du projet",
            background: "",
            color: "Black",
          }),
          f.jsx(Ie, {
            description: `Nous assurons la coordination entre l'architecte\r
et les bureaux d'études techniques en vue\r
d'établir des plans satisfaisant les exigences du\r
MO et respectant la réglementation.\r
`,
            icone: "./icons/icone1.svg",
            image: we,
            titre: "Coordination complète",
            background: "",
            color: "Black",
          }),
        ],
      }),
      f.jsx(tr, {}),
      f.jsx(Si, {
        btnName: "Contactez-nous",
        image: le,
        description: `\r
Contactez-nous pour en discuter ensemble.`,
        titre: "Un projet immobilier en vue ?",
        color: "Black",
      }),
    ],
  });
}
const _L = ({ image: e, titre: t, description: n }) =>
    f.jsxs("div", {
      className: "boxtextLaMaison sectionMargin",
      children: [
        f.jsx("div", {
          className: "boximg",
          children: f.jsx("img", { src: e, alt: "" }),
        }),
        f.jsxs("div", {
          className: "colone2",
          children: [
            f.jsx("h1", { children: t }),
            f.jsx("span", { children: n }),
          ],
        }),
      ],
    }),
  VL = ({ onClose: e }) => {
    const [t, n] = P.useState(null),
      r = (s) => {
        s.target.files && s.target.files.length > 0 && n(s.target.files[0]);
      },
      i = () => {
        const s = document.createElement("a");
        (s.href = "./document/doc.pdf"),
          (s.download = "Formulaire-Unique.pdf"),
          s.click();
      };
    return f.jsx("div", {
      className: "overlay2",
      children: f.jsxs("div", {
        className: "formContainer1",
        children: [
          f.jsx("button", {
            className: "closeButton",
            onClick: e,
            children: "x",
          }),
          f.jsx("h2", { children: "Formulaire Unique" }),
          f.jsxs("form", {
            children: [
              f.jsxs("label", {
                children: [
                  "Nom",
                  f.jsx("input", { type: "text", placeholder: "Nom" }),
                ],
              }),
              f.jsxs("label", {
                children: [
                  "Prénom",
                  f.jsx("input", { type: "text", placeholder: "Prénom" }),
                ],
              }),
              f.jsxs("label", {
                children: [
                  "E-mail",
                  f.jsx("input", { type: "email", placeholder: "E-mail" }),
                ],
              }),
              f.jsxs("label", {
                children: [
                  "Document à Importer",
                  f.jsx("input", { type: "file", onChange: r }),
                ],
              }),
              t
                ? f.jsx("button", {
                    type: "submit",
                    className: "envoyer",
                    children: "Envoyer",
                  })
                : null,
            ],
          }),
          f.jsx("button", {
            className: "downloadButton",
            onClick: i,
            children: "Télécharger le Formulaire unique",
          }),
        ],
      }),
    });
  };
function FL() {
  const [e, t] = P.useState(!1),
    n = () => t(!e),
    r = [
      {
        image: "./icons/api.svg",
        titre:
          "Accompagnement A La Sélection D'un Local Professionnel Ou D'un Terrain Industriel",
        description:
          "Nos experts en immobiliers et du foncier vous facilitent la tâche dans la sélection de votre local ou de votre terrain, procèdent aux vérifications et accompagnent dans l'élaboration des actes. juridiques et le suivi des procédures administratives. Notre appui intervient également de la prise en charge de vos démarches pour les abonnements. (eau, électricité, téléphone, internet…)",
      },
      {
        image: "./icons/api.svg",
        titre: "Accompagnement à la Création",
        description:
          "En relation avec les API ou nos partenaires Notaires avec qui nous souhaitons tisser des partenariats stratégiques, nous vous orientons dans le choix de la forme juridique de votre entreprise et vous accompagnons dans les formalités de création.",
      },
      {
        image: "./icons/api.svg",
        titre: "Domiciliation",
        description:
          "En relation avec nos partenaires, nous vous accompagnons dans votre choix de solution optimale pour votre domiciliation totale ou partielle.",
      },
      {
        image: "./icons/api.svg",
        titre: "Recruter Ou Externaliser Ses Ressources Humaines",
        description:
          "Vous avez finalisé la création de votre entreprise et souhaitez recruter vos collaborateurs ? Nos experts RH vousorientent sur les meilleurs choix à faire et vous accompagnent que ce soit pour la sélection des meilleurs profils grâce à notre base de données fournie. Si vous souhaitez avoir recours à l’externalisation de tout ou partie de vos ressources humaines ou d’un service, LA MAISON DES ENTREPRISES reste votre partenaire privilégié. N’hésitez pas également à nous contacter pour les obligations de déclarations ou d’obtention de permis de travail.",
      },
      {
        image: "./icons/api.svg",
        titre: "Formalités Administratives",
        description:
          "En relation avec nos partenaires institutionnels, nous assistons les entreprises et investisseurs dans la gestion de leurs démarches administratives. Si vous êtes dans une activité règlementée et avez une obligation d'obtenir un permis ou un agrément contactez notre Centre. Par ailleurs, si vous souhaitez lancer une étude, notamment une étude de marché ou une étude réglementaire, nous pouvons vous assister à travers nos experts.",
      },
      {
        image: "./icons/api.svg",
        titre: "Strategies - Gestion Et Finances",
        description:
          "LA MAISON DES ENTREPRISES est avant tout une agence-conseil en stratégies composée de plusieurs experts notament en gouvernance d'entreprises, organisation, corporate finance, droit, marketing, système d'information Notre ambition est d'être le Partenaire de Transformation et de Croissance des entreprises. Nous sommes ouverts pour la rédaction de vos supports de gestion et la mise en place de vos logiciels de gestion en vue d’accompagner votre processus de digitalisation. LA MAISON est également spécialisée en structuration financière et est en même de vous accompagnez dans la structuration de vos projets ainsi que la facilitation pour la levée de fonds grâce à ses partenaires financiers.",
      },
      {
        image: "./icons/api.svg",
        titre: "Accompagner Le Développement Commercial",
        description:
          "Nous accompagnons la stratégie de croissance des entreprises notamment par la définition d'une stratégie en adéquation avec l'environnement, l'identification d'opportunités commerciales, la facilitation pour des partenariats stratégiques, des fusions ou des rachats.",
      },
      {
        image: "./icons/api.svg",
        titre: "Flexibilité",
        description:
          "LA MAISON DES ENTREPRISES s'adapte aux besoins des entreprises et reste ouverte à toute sorte de requête non inscrite dans ses services offerts.",
      },
      {
        image: "./icons/api.svg",
        titre: "Gestion Des Obligations Fiscales Et Sociales",
        description:
          "Vous souhaitez procéder à un rattachement fiscal et social ou vous souhaitez être accompagné dans toutes problématiques d'ordre fiscal et social, LA MAISON DES ENTREPRISES est à votre service.",
      },
    ];
  return f.jsxs("div", {
    className: "containerMaisonDesEntreprises",
    children: [
      f.jsx(nr, { image: le, display: "none" }),
      f.jsx(Ie, {
        image: le,
        titre: "Bienvenue au centre unique d'accompagnement des entreprises",
        description: `Le continent africain a d’énormes potentialités en termes de ressources minières, agricoles, démographiques et bien d’autres. Mais pour prendre toute sa place dans l’économie mondiale, l’Afrique a besoin d’investissements massifs sur beaucoup de chantiers de développement.\r
En vue d’attirer les investisseurs, et améliorer le climat des affaires, plusieurs gouvernements africains ont mis en place des Agences de Promotion des Investissements-API à l’instar de la Côte d’Ivoire qui a institué le Centre de Promotion des Investissements -CEPICI.`,
      }),
      f.jsx(Ht, {
        image: le,
        description:
          "Ces API ont attiré de nombreux investisseurs et permis la création de plusieurs entreprises qui ont besoin cependant, en raison de leur méconnaissance du marché, d’être accompagnés aux niveaux administratif, stratégique, commercial, logistique, financier et dans plusieurs autres domaines afin d’atteindre les objectifs notamment des plans nationaux de développement.",
      }),
      f.jsx(Ie, {
        image: le,
        description:
          "C’est dans ce contexte qu’un Groupe de réflexion composé de personnalités du milieu des affaires en Afrique a envisagé la mise en place de LA MAISON DES ENTREPRISES Premier Centre Unique d’Accompagnement des Entreprises qui aura pour rôle de répondre aux problématiques des entreprises ou investisseurs qui ont passé ou non le cap de la création. Pour les entreprises déjà en exploitation, ce Centre se veut un partenaire de facilitation des affaires.",
      }),
      f.jsxs("div", {
        className: "service-header",
        children: [
          f.jsx("h1", { children: "Nos Services Aux Entreprises" }),
          f.jsxs("div", {
            className: "underline",
            children: [
              f.jsx("span", { className: "dots", children: "• • •" }),
              f.jsx("span", { className: "line" }),
            ],
          }),
          f.jsx("p", {
            children:
              "Répondre aux besoins des entreprises en un seul guichet ou en un seul clic.",
          }),
        ],
      }),
      f.jsx("div", {
        className: "containBoxapport",
        children: f.jsx("div", {
          className: "boxApport sectionMargin",
          children: r.map((i, s) => f.jsx(_L, { ...i }, s)),
        }),
      }),
      f.jsxs("div", {
        className: "features-section",
        children: [
          f.jsx("h2", { children: "Nos Atouts" }),
          f.jsxs("div", {
            className: "underline",
            children: [
              f.jsx("span", { className: "dots", children: "• • •" }),
              f.jsx("span", { className: "line" }),
            ],
          }),
          f.jsxs("div", {
            className: "features-container sectionMargin",
            children: [
              f.jsxs("div", {
                className: "feature-card",
                children: [
                  f.jsx("img", {
                    src: "./icons/formulaire.svg",
                    alt: "Trophy Icon",
                    className: "icon",
                  }),
                  f.jsx("h3", {
                    children: "UN FORMULAIRE UNIQUE DE DEMANDE DE SERVICES",
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "feature-card",
                children: [
                  f.jsx("img", {
                    src: "./icons/guichets.svg",
                    alt: "Guichet Icon",
                    className: "icon",
                  }),
                  f.jsx("h3", {
                    children: "TOUS LES SERVICES EN UN SEUL GUICHET",
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "feature-card",
                children: [
                  f.jsx("img", {
                    src: "./icons/accord.svg",
                    alt: "Develop Icon",
                    className: "icon",
                  }),
                  f.jsx("h3", {
                    children:
                      "UN MOYEN UNIQUE POUR LANCER OU DÉVELOPPER SES ACTIVITÉS EN TOUTE QUIÉTUDE",
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "feature-card",
                children: [
                  f.jsx("img", {
                    src: "./icons/croissance.svg",
                    alt: "Growth Icon",
                    className: "icon",
                  }),
                  f.jsx("h3", { children: "UN ACCÉLÉRATEUR DE CROISSANCE" }),
                ],
              }),
            ],
          }),
          f.jsx(tr, {}),
          f.jsx("section", {
            className: "form-section",
            children: f.jsxs("div", {
              className: "content sectionMargin",
              children: [
                f.jsxs("h1", {
                  children: [
                    "Besoin d'un accompagnement ?",
                    f.jsx("br", {}),
                    "Renseignez le formulaire unique",
                  ],
                }),
                f.jsx("p", {
                  children:
                    "Nos experts auront le plaisir de vous satisfaire dans de meilleurs délais.",
                }),
                f.jsx(J, {
                  to: "#",
                  onClick: n,
                  className: "btn",
                  children: "Formulaire Unique",
                }),
              ],
            }),
          }),
          e && f.jsx(VL, { onClose: n }),
          f.jsxs("section", {
            className: "faq-section ",
            children: [
              f.jsx("h1", { children: "Foire Aux Questions" }),
              f.jsxs("div", {
                className: "faq-container sectionMargin",
                children: [
                  f.jsxs("div", {
                    className: "faq",
                    children: [
                      f.jsx("h3", {
                        children:
                          "Quels services proposez-vous aux entreprises ?",
                      }),
                      f.jsx("p", {
                        children:
                          "Notre centre d'accompagnement des entreprises offre une gamme complète de services pour aider les entrepreneurs et les entreprises à prospérer. Nous proposons des conseils en stratégie commerciale, des plans de développement, des formations sur mesure, un soutien financier, des ressources pour le marketing et bien plus encore. Notre objectif est de vous aider à atteindre vos objectifs commerciaux avec succès.",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "faq",
                    children: [
                      f.jsx("h3", {
                        children: "Comment puis-je accéder à vos services ?",
                      }),
                      f.jsx("p", {
                        children:
                          "Il existe plusieurs façons d'accéder à nos services. Vous pouvez nous contacter par téléphone au : + (225) 27 21 38 72 75 pour prendre rendez-vous avec un conseiller. De plus, vous pouvez également nous envoyer un e-mail à contact@c2s-groupe.com ou remplir le formulaire de contact sur notre site web. Notre équipe se fera un plaisir de vous aider et de planifier une réunion pour discuter de vos besoins spécifiques.",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "faq",
                    children: [
                      f.jsx("h3", {
                        children:
                          "Comment puis-je mesurer l'efficacité de votre accompagnement ?",
                      }),
                      f.jsx("p", {
                        children:
                          "L'efficacité de notre accompagnement peut être mesurée de différentes manières, en fonction des objectifs spécifiques de votre entreprise. Nous suivons régulièrement les progrès réalisés, les résultats obtenus et les indicateurs de performance clés pour évaluer l'impact de notre accompagnement. De plus, nous recueillons régulièrement les retours des entrepreneurs que nous avons accompagnés afin d'améliorer continuellement nos services.",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "faq",
                    children: [
                      f.jsx("h3", {
                        children:
                          "Quels types d'entreprises pouvez-vous accompagner ?",
                      }),
                      f.jsx("p", {
                        children:
                          "Notre centre d'accompagnement des entreprises est ouvert à tous les types d'entreprises, qu'elles soient petites, moyennes ou grandes. Nous soutenons les entrepreneurs individuels, les startups, les entreprises en croissance et même les entreprises établies qui cherchent à se développer.",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "faq",
                    children: [
                      f.jsx("h3", {
                        children:
                          "Quels avantages puis-je attendre de votre accompagnement ?",
                      }),
                      f.jsx("p", {
                        children:
                          "En faisant appel à notre centre d'accompagnement des entreprises, vous bénéficiez d'une expertise approfondie, de conseils personnalisés et de ressources spécifiques à vos besoins. Nous vous aidons à élaborer des stratégies efficaces, à améliorer vos opérations, à renforcer votre présence sur le marché, à accéder à des financements et à développer vos compétences en gestion d'entreprise.",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "faq",
                    children: [
                      f.jsx("h3", {
                        children:
                          "Comment se déroule le processus d'accompagnement ?",
                      }),
                      f.jsx("p", {
                        children:
                          "Le processus d'accompagnement varie en fonction des besoins spécifiques de chaque entreprise. Dans un premier temps, nous effectuons une évaluation approfondie de votre entreprise, de ses objectifs et de ses opportunités. Ensuite, nous travaillons ensemble pour élaborer un plan d'action adapté à vos objectifs.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function zL() {
  return f.jsx("div", { children: f.jsx(nr, { image: le, title: "Soon..." }) });
}
const BL = xE([
  {
    path: "/",
    element: f.jsx(NM, {}),
    children: [
      { path: "", element: f.jsx(NL, {}) },
      { path: "expertise", element: f.jsx(kL, {}) },
      { path: "Conseil-Formation", element: f.jsx(RL, {}) },
      { path: "Expertise-IT", element: f.jsx(AL, {}) },
      { path: "Finance", element: f.jsx(DL, {}) },
      { path: "Expertise-comptable-fiscalite", element: f.jsx(IL, {}) },
      { path: "Immobilier", element: f.jsx(OL, {}) },
      { path: "la-Maison-Des-Entreprises", element: f.jsx(FL, {}) },
      { path: "insight", element: f.jsx(zL, {}) },
    ],
  },
  { path: "*", element: f.jsx("div", { children: "404" }) },
]);
Vv(document.getElementById("root")).render(f.jsx(NE, { router: BL }));
