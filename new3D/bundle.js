const e = 1e-6;
let t = "undefined" != typeof Float32Array ? Float32Array : Array;
const n = Math.random;
const i = Math.PI / 180;
var o = Object.freeze({
  EPSILON: e,
  get ARRAY_TYPE() {
    return t
  },
  RANDOM: n,
  setMatrixArrayType: function (e) {
    t = e
  },
  toRadian: function (e) {
    return e * i
  },
  equals: function (t, n) {
    return Math.abs(t - n) <= e * Math.max(1, Math.abs(t), Math.abs(n))
  }
});

function a(e, t, n) {
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = n[0],
    l = n[1],
    u = n[2],
    c = n[3];
  return e[0] = i * s + a * l, e[1] = o * s + r * l, e[2] = i * u + a * c, e[3] = o * u + r * c, e
}

function r(e, t, n) {
  return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e
}
const s = a,
  l = r;
var u = Object.freeze({
  create: function () {
    let e = new t(4);
    return t != Float32Array && (e[1] = 0, e[2] = 0), e[0] = 1, e[3] = 1, e
  },
  clone: function (e) {
    let n = new t(4);
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n
  },
  copy: function (e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
  },
  identity: function (e) {
    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e
  },
  fromValues: function (e, n, i, o) {
    let a = new t(4);
    return a[0] = e, a[1] = n, a[2] = i, a[3] = o, a
  },
  set: function (e, t, n, i, o) {
    return e[0] = t, e[1] = n, e[2] = i, e[3] = o, e
  },
  transpose: function (e, t) {
    if (e === t) {
      let n = t[1];
      e[1] = t[2], e[2] = n
    } else e[0] = t[0], e[1] = t[2], e[2] = t[1], e[3] = t[3];
    return e
  },
  invert: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2],
      a = t[3],
      r = n * a - o * i;
    return r ? (r = 1 / r, e[0] = a * r, e[1] = -i * r, e[2] = -o * r, e[3] = n * r, e) : null
  },
  adjoint: function (e, t) {
    let n = t[0];
    return e[0] = t[3], e[1] = -t[1], e[2] = -t[2], e[3] = n, e
  },
  determinant: function (e) {
    return e[0] * e[3] - e[2] * e[1]
  },
  multiply: a,
  rotate: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = Math.sin(n),
      l = Math.cos(n);
    return e[0] = i * l + a * s, e[1] = o * l + r * s, e[2] = i * -s + a * l, e[3] = o * -s + r * l, e
  },
  scale: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = n[0],
      l = n[1];
    return e[0] = i * s, e[1] = o * s, e[2] = a * l, e[3] = r * l, e
  },
  fromRotation: function (e, t) {
    let n = Math.sin(t),
      i = Math.cos(t);
    return e[0] = i, e[1] = n, e[2] = -n, e[3] = i, e
  },
  fromScaling: function (e, t) {
    return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e
  },
  str: function (e) {
    return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
  },
  frob: function (e) {
    return Math.hypot(e[0], e[1], e[2], e[3])
  },
  LDU: function (e, t, n, i) {
    return e[2] = i[2] / i[0], n[0] = i[0], n[1] = i[1], n[3] = i[3] - e[2] * n[1], [e, t, n]
  },
  add: function (e, t, n) {
    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e
  },
  subtract: r,
  exactEquals: function (e, t) {
    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]
  },
  equals: function (t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = n[0],
      l = n[1],
      u = n[2],
      c = n[3];
    return Math.abs(i - s) <= e * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(o - l) <= e * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - u) <= e * Math.max(1, Math.abs(a), Math.abs(u)) && Math.abs(r - c) <= e * Math.max(1, Math.abs(r), Math.abs(c))
  },
  multiplyScalar: function (e, t, n) {
    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e
  },
  multiplyScalarAndAdd: function (e, t, n, i) {
    return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e[3] = t[3] + n[3] * i, e
  },
  mul: s,
  sub: l
});

function c(e, t, n) {
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = t[4],
    l = t[5],
    u = n[0],
    c = n[1],
    d = n[2],
    f = n[3],
    h = n[4],
    p = n[5];
  return e[0] = i * u + a * c, e[1] = o * u + r * c, e[2] = i * d + a * f, e[3] = o * d + r * f, e[4] = i * h + a * p + s, e[5] = o * h + r * p + l, e
}

function d(e, t, n) {
  return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e
}
const f = c,
  h = d;
var p = Object.freeze({
  create: function () {
    let e = new t(6);
    return t != Float32Array && (e[1] = 0, e[2] = 0, e[4] = 0, e[5] = 0), e[0] = 1, e[3] = 1, e
  },
  clone: function (e) {
    let n = new t(6);
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n
  },
  copy: function (e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
  },
  identity: function (e) {
    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
  },
  fromValues: function (e, n, i, o, a, r) {
    let s = new t(6);
    return s[0] = e, s[1] = n, s[2] = i, s[3] = o, s[4] = a, s[5] = r, s
  },
  set: function (e, t, n, i, o, a, r) {
    return e[0] = t, e[1] = n, e[2] = i, e[3] = o, e[4] = a, e[5] = r, e
  },
  invert: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2],
      a = t[3],
      r = t[4],
      s = t[5],
      l = n * a - i * o;
    return l ? (l = 1 / l, e[0] = a * l, e[1] = -i * l, e[2] = -o * l, e[3] = n * l, e[4] = (o * s - a * r) * l, e[5] = (i * r - n * s) * l, e) : null
  },
  determinant: function (e) {
    return e[0] * e[3] - e[1] * e[2]
  },
  multiply: c,
  rotate: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = Math.sin(n),
      c = Math.cos(n);
    return e[0] = i * c + a * u, e[1] = o * c + r * u, e[2] = i * -u + a * c, e[3] = o * -u + r * c, e[4] = s, e[5] = l, e
  },
  scale: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = n[0],
      c = n[1];
    return e[0] = i * u, e[1] = o * u, e[2] = a * c, e[3] = r * c, e[4] = s, e[5] = l, e
  },
  translate: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = n[0],
      c = n[1];
    return e[0] = i, e[1] = o, e[2] = a, e[3] = r, e[4] = i * u + a * c + s, e[5] = o * u + r * c + l, e
  },
  fromRotation: function (e, t) {
    let n = Math.sin(t),
      i = Math.cos(t);
    return e[0] = i, e[1] = n, e[2] = -n, e[3] = i, e[4] = 0, e[5] = 0, e
  },
  fromScaling: function (e, t) {
    return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e[4] = 0, e[5] = 0, e
  },
  fromTranslation: function (e, t) {
    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = t[0], e[5] = t[1], e
  },
  str: function (e) {
    return "mat2d(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ")"
  },
  frob: function (e) {
    return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], 1)
  },
  add: function (e, t, n) {
    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e
  },
  subtract: d,
  multiplyScalar: function (e, t, n) {
    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e
  },
  multiplyScalarAndAdd: function (e, t, n, i) {
    return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e[3] = t[3] + n[3] * i, e[4] = t[4] + n[4] * i, e[5] = t[5] + n[5] * i, e
  },
  exactEquals: function (e, t) {
    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5]
  },
  equals: function (t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = n[0],
      c = n[1],
      d = n[2],
      f = n[3],
      h = n[4],
      p = n[5];
    return Math.abs(i - u) <= e * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(o - c) <= e * Math.max(1, Math.abs(o), Math.abs(c)) && Math.abs(a - d) <= e * Math.max(1, Math.abs(a), Math.abs(d)) && Math.abs(r - f) <= e * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(s - h) <= e * Math.max(1, Math.abs(s), Math.abs(h)) && Math.abs(l - p) <= e * Math.max(1, Math.abs(l), Math.abs(p))
  },
  mul: f,
  sub: h
});

function m() {
  let e = new t(9);
  return t != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e
}

function _(e, t, n) {
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = t[4],
    l = t[5],
    u = t[6],
    c = t[7],
    d = t[8],
    f = n[0],
    h = n[1],
    p = n[2],
    m = n[3],
    _ = n[4],
    v = n[5],
    g = n[6],
    b = n[7],
    T = n[8];
  return e[0] = f * i + h * r + p * u, e[1] = f * o + h * s + p * c, e[2] = f * a + h * l + p * d, e[3] = m * i + _ * r + v * u, e[4] = m * o + _ * s + v * c, e[5] = m * a + _ * l + v * d, e[6] = g * i + b * r + T * u, e[7] = g * o + b * s + T * c, e[8] = g * a + b * l + T * d, e
}

function v(e, t, n) {
  return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e
}
const g = _,
  b = v;
var T = Object.freeze({
  create: m,
  fromMat4: function (e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
  },
  clone: function (e) {
    let n = new t(9);
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n
  },
  copy: function (e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
  },
  fromValues: function (e, n, i, o, a, r, s, l, u) {
    let c = new t(9);
    return c[0] = e, c[1] = n, c[2] = i, c[3] = o, c[4] = a, c[5] = r, c[6] = s, c[7] = l, c[8] = u, c
  },
  set: function (e, t, n, i, o, a, r, s, l, u) {
    return e[0] = t, e[1] = n, e[2] = i, e[3] = o, e[4] = a, e[5] = r, e[6] = s, e[7] = l, e[8] = u, e
  },
  identity: function (e) {
    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
  },
  transpose: function (e, t) {
    if (e === t) {
      let n = t[1],
        i = t[2],
        o = t[5];
      e[1] = t[3], e[2] = t[6], e[3] = n, e[5] = t[7], e[6] = i, e[7] = o
    } else e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8];
    return e
  },
  invert: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2],
      a = t[3],
      r = t[4],
      s = t[5],
      l = t[6],
      u = t[7],
      c = t[8],
      d = c * r - s * u,
      f = -c * a + s * l,
      h = u * a - r * l,
      p = n * d + i * f + o * h;
    return p ? (p = 1 / p, e[0] = d * p, e[1] = (-c * i + o * u) * p, e[2] = (s * i - o * r) * p, e[3] = f * p, e[4] = (c * n - o * l) * p, e[5] = (-s * n + o * a) * p, e[6] = h * p, e[7] = (-u * n + i * l) * p, e[8] = (r * n - i * a) * p, e) : null
  },
  adjoint: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2],
      a = t[3],
      r = t[4],
      s = t[5],
      l = t[6],
      u = t[7],
      c = t[8];
    return e[0] = r * c - s * u, e[1] = o * u - i * c, e[2] = i * s - o * r, e[3] = s * l - a * c, e[4] = n * c - o * l, e[5] = o * a - n * s, e[6] = a * u - r * l, e[7] = i * l - n * u, e[8] = n * r - i * a, e
  },
  determinant: function (e) {
    let t = e[0],
      n = e[1],
      i = e[2],
      o = e[3],
      a = e[4],
      r = e[5],
      s = e[6],
      l = e[7],
      u = e[8];
    return t * (u * a - r * l) + n * (-u * o + r * s) + i * (l * o - a * s)
  },
  multiply: _,
  translate: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = t[6],
      c = t[7],
      d = t[8],
      f = n[0],
      h = n[1];
    return e[0] = i, e[1] = o, e[2] = a, e[3] = r, e[4] = s, e[5] = l, e[6] = f * i + h * r + u, e[7] = f * o + h * s + c, e[8] = f * a + h * l + d, e
  },
  rotate: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = t[6],
      c = t[7],
      d = t[8],
      f = Math.sin(n),
      h = Math.cos(n);
    return e[0] = h * i + f * r, e[1] = h * o + f * s, e[2] = h * a + f * l, e[3] = h * r - f * i, e[4] = h * s - f * o, e[5] = h * l - f * a, e[6] = u, e[7] = c, e[8] = d, e
  },
  scale: function (e, t, n) {
    let i = n[0],
      o = n[1];
    return e[0] = i * t[0], e[1] = i * t[1], e[2] = i * t[2], e[3] = o * t[3], e[4] = o * t[4], e[5] = o * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
  },
  fromTranslation: function (e, t) {
    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = t[0], e[7] = t[1], e[8] = 1, e
  },
  fromRotation: function (e, t) {
    let n = Math.sin(t),
      i = Math.cos(t);
    return e[0] = i, e[1] = n, e[2] = 0, e[3] = -n, e[4] = i, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
  },
  fromScaling: function (e, t) {
    return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = t[1], e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
  },
  fromMat2d: function (e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = 0, e[3] = t[2], e[4] = t[3], e[5] = 0, e[6] = t[4], e[7] = t[5], e[8] = 1, e
  },
  fromQuat: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2],
      a = t[3],
      r = n + n,
      s = i + i,
      l = o + o,
      u = n * r,
      c = i * r,
      d = i * s,
      f = o * r,
      h = o * s,
      p = o * l,
      m = a * r,
      _ = a * s,
      v = a * l;
    return e[0] = 1 - d - p, e[3] = c - v, e[6] = f + _, e[1] = c + v, e[4] = 1 - u - p, e[7] = h - m, e[2] = f - _, e[5] = h + m, e[8] = 1 - u - d, e
  },
  normalFromMat4: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2],
      a = t[3],
      r = t[4],
      s = t[5],
      l = t[6],
      u = t[7],
      c = t[8],
      d = t[9],
      f = t[10],
      h = t[11],
      p = t[12],
      m = t[13],
      _ = t[14],
      v = t[15],
      g = n * s - i * r,
      b = n * l - o * r,
      T = n * u - a * r,
      x = i * l - o * s,
      S = i * u - a * s,
      w = o * u - a * l,
      y = c * m - d * p,
      P = c * _ - f * p,
      M = c * v - h * p,
      O = d * _ - f * m,
      N = d * v - h * m,
      E = f * v - h * _,
      A = g * E - b * N + T * O + x * M - S * P + w * y;
    return A ? (A = 1 / A, e[0] = (s * E - l * N + u * O) * A, e[1] = (l * M - r * E - u * P) * A, e[2] = (r * N - s * M + u * y) * A, e[3] = (o * N - i * E - a * O) * A, e[4] = (n * E - o * M + a * P) * A, e[5] = (i * M - n * N - a * y) * A, e[6] = (m * w - _ * S + v * x) * A, e[7] = (_ * T - p * w - v * b) * A, e[8] = (p * S - m * T + v * g) * A, e) : null
  },
  projection: function (e, t, n) {
    return e[0] = 2 / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = -2 / n, e[5] = 0, e[6] = -1, e[7] = 1, e[8] = 1, e
  },
  str: function (e) {
    return "mat3(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ")"
  },
  frob: function (e) {
    return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8])
  },
  add: function (e, t, n) {
    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e
  },
  subtract: v,
  multiplyScalar: function (e, t, n) {
    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e
  },
  multiplyScalarAndAdd: function (e, t, n, i) {
    return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e[3] = t[3] + n[3] * i, e[4] = t[4] + n[4] * i, e[5] = t[5] + n[5] * i, e[6] = t[6] + n[6] * i, e[7] = t[7] + n[7] * i, e[8] = t[8] + n[8] * i, e
  },
  exactEquals: function (e, t) {
    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8]
  },
  equals: function (t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = t[6],
      c = t[7],
      d = t[8],
      f = n[0],
      h = n[1],
      p = n[2],
      m = n[3],
      _ = n[4],
      v = n[5],
      g = n[6],
      b = n[7],
      T = n[8];
    return Math.abs(i - f) <= e * Math.max(1, Math.abs(i), Math.abs(f)) && Math.abs(o - h) <= e * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(a - p) <= e * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(r - m) <= e * Math.max(1, Math.abs(r), Math.abs(m)) && Math.abs(s - _) <= e * Math.max(1, Math.abs(s), Math.abs(_)) && Math.abs(l - v) <= e * Math.max(1, Math.abs(l), Math.abs(v)) && Math.abs(u - g) <= e * Math.max(1, Math.abs(u), Math.abs(g)) && Math.abs(c - b) <= e * Math.max(1, Math.abs(c), Math.abs(b)) && Math.abs(d - T) <= e * Math.max(1, Math.abs(d), Math.abs(T))
  },
  mul: g,
  sub: b
});

function x(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
}

function S(e, t, n) {
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = t[4],
    l = t[5],
    u = t[6],
    c = t[7],
    d = t[8],
    f = t[9],
    h = t[10],
    p = t[11],
    m = t[12],
    _ = t[13],
    v = t[14],
    g = t[15],
    b = n[0],
    T = n[1],
    x = n[2],
    S = n[3];
  return e[0] = b * i + T * s + x * d + S * m, e[1] = b * o + T * l + x * f + S * _, e[2] = b * a + T * u + x * h + S * v, e[3] = b * r + T * c + x * p + S * g, b = n[4], T = n[5], x = n[6], S = n[7], e[4] = b * i + T * s + x * d + S * m, e[5] = b * o + T * l + x * f + S * _, e[6] = b * a + T * u + x * h + S * v, e[7] = b * r + T * c + x * p + S * g, b = n[8], T = n[9], x = n[10], S = n[11], e[8] = b * i + T * s + x * d + S * m, e[9] = b * o + T * l + x * f + S * _, e[10] = b * a + T * u + x * h + S * v, e[11] = b * r + T * c + x * p + S * g, b = n[12], T = n[13], x = n[14], S = n[15], e[12] = b * i + T * s + x * d + S * m, e[13] = b * o + T * l + x * f + S * _, e[14] = b * a + T * u + x * h + S * v, e[15] = b * r + T * c + x * p + S * g, e
}

function w(e, t, n) {
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = i + i,
    l = o + o,
    u = a + a,
    c = i * s,
    d = i * l,
    f = i * u,
    h = o * l,
    p = o * u,
    m = a * u,
    _ = r * s,
    v = r * l,
    g = r * u;
  return e[0] = 1 - (h + m), e[1] = d + g, e[2] = f - v, e[3] = 0, e[4] = d - g, e[5] = 1 - (c + m), e[6] = p + _, e[7] = 0, e[8] = f + v, e[9] = p - _, e[10] = 1 - (c + h), e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e
}

function y(e, t) {
  return e[0] = t[12], e[1] = t[13], e[2] = t[14], e
}

function P(e, t) {
  let n = t[0],
    i = t[1],
    o = t[2],
    a = t[4],
    r = t[5],
    s = t[6],
    l = t[8],
    u = t[9],
    c = t[10];
  return e[0] = Math.hypot(n, i, o), e[1] = Math.hypot(a, r, s), e[2] = Math.hypot(l, u, c), e
}

function M(e, n) {
  let i = new t(3);
  P(i, n);
  let o = 1 / i[0],
    a = 1 / i[1],
    r = 1 / i[2],
    s = n[0] * o,
    l = n[1] * a,
    u = n[2] * r,
    c = n[4] * o,
    d = n[5] * a,
    f = n[6] * r,
    h = n[8] * o,
    p = n[9] * a,
    m = n[10] * r,
    _ = s + d + m,
    v = 0;
  return _ > 0 ? (v = 2 * Math.sqrt(_ + 1), e[3] = .25 * v, e[0] = (f - p) / v, e[1] = (h - u) / v, e[2] = (l - c) / v) : s > d && s > m ? (v = 2 * Math.sqrt(1 + s - d - m), e[3] = (f - p) / v, e[0] = .25 * v, e[1] = (l + c) / v, e[2] = (h + u) / v) : d > m ? (v = 2 * Math.sqrt(1 + d - s - m), e[3] = (h - u) / v, e[0] = (l + c) / v, e[1] = .25 * v, e[2] = (f + p) / v) : (v = 2 * Math.sqrt(1 + m - s - d), e[3] = (l - c) / v, e[0] = (h + u) / v, e[1] = (f + p) / v, e[2] = .25 * v), e
}

function O(e, t, n) {
  return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e[9] = t[9] - n[9], e[10] = t[10] - n[10], e[11] = t[11] - n[11], e[12] = t[12] - n[12], e[13] = t[13] - n[13], e[14] = t[14] - n[14], e[15] = t[15] - n[15], e
}
const N = S,
  E = O;
var A = Object.freeze({
  create: function () {
    let e = new t(16);
    return t != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e
  },
  clone: function (e) {
    let n = new t(16);
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15], n
  },
  copy: function (e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
  },
  fromValues: function (e, n, i, o, a, r, s, l, u, c, d, f, h, p, m, _) {
    let v = new t(16);
    return v[0] = e, v[1] = n, v[2] = i, v[3] = o, v[4] = a, v[5] = r, v[6] = s, v[7] = l, v[8] = u, v[9] = c, v[10] = d, v[11] = f, v[12] = h, v[13] = p, v[14] = m, v[15] = _, v
  },
  set: function (e, t, n, i, o, a, r, s, l, u, c, d, f, h, p, m, _) {
    return e[0] = t, e[1] = n, e[2] = i, e[3] = o, e[4] = a, e[5] = r, e[6] = s, e[7] = l, e[8] = u, e[9] = c, e[10] = d, e[11] = f, e[12] = h, e[13] = p, e[14] = m, e[15] = _, e
  },
  identity: x,
  transpose: function (e, t) {
    if (e === t) {
      let n = t[1],
        i = t[2],
        o = t[3],
        a = t[6],
        r = t[7],
        s = t[11];
      e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = i, e[9] = a, e[11] = t[14], e[12] = o, e[13] = r, e[14] = s
    } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
    return e
  },
  invert: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2],
      a = t[3],
      r = t[4],
      s = t[5],
      l = t[6],
      u = t[7],
      c = t[8],
      d = t[9],
      f = t[10],
      h = t[11],
      p = t[12],
      m = t[13],
      _ = t[14],
      v = t[15],
      g = n * s - i * r,
      b = n * l - o * r,
      T = n * u - a * r,
      x = i * l - o * s,
      S = i * u - a * s,
      w = o * u - a * l,
      y = c * m - d * p,
      P = c * _ - f * p,
      M = c * v - h * p,
      O = d * _ - f * m,
      N = d * v - h * m,
      E = f * v - h * _,
      A = g * E - b * N + T * O + x * M - S * P + w * y;
    return A ? (A = 1 / A, e[0] = (s * E - l * N + u * O) * A, e[1] = (o * N - i * E - a * O) * A, e[2] = (m * w - _ * S + v * x) * A, e[3] = (f * S - d * w - h * x) * A, e[4] = (l * M - r * E - u * P) * A, e[5] = (n * E - o * M + a * P) * A, e[6] = (_ * T - p * w - v * b) * A, e[7] = (c * w - f * T + h * b) * A, e[8] = (r * N - s * M + u * y) * A, e[9] = (i * M - n * N - a * y) * A, e[10] = (p * S - m * T + v * g) * A, e[11] = (d * T - c * S - h * g) * A, e[12] = (s * P - r * O - l * y) * A, e[13] = (n * O - i * P + o * y) * A, e[14] = (m * b - p * x - _ * g) * A, e[15] = (c * x - d * b + f * g) * A, e) : null
  },
  adjoint: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2],
      a = t[3],
      r = t[4],
      s = t[5],
      l = t[6],
      u = t[7],
      c = t[8],
      d = t[9],
      f = t[10],
      h = t[11],
      p = t[12],
      m = t[13],
      _ = t[14],
      v = t[15];
    return e[0] = s * (f * v - h * _) - d * (l * v - u * _) + m * (l * h - u * f), e[1] = -(i * (f * v - h * _) - d * (o * v - a * _) + m * (o * h - a * f)), e[2] = i * (l * v - u * _) - s * (o * v - a * _) + m * (o * u - a * l), e[3] = -(i * (l * h - u * f) - s * (o * h - a * f) + d * (o * u - a * l)), e[4] = -(r * (f * v - h * _) - c * (l * v - u * _) + p * (l * h - u * f)), e[5] = n * (f * v - h * _) - c * (o * v - a * _) + p * (o * h - a * f), e[6] = -(n * (l * v - u * _) - r * (o * v - a * _) + p * (o * u - a * l)), e[7] = n * (l * h - u * f) - r * (o * h - a * f) + c * (o * u - a * l), e[8] = r * (d * v - h * m) - c * (s * v - u * m) + p * (s * h - u * d), e[9] = -(n * (d * v - h * m) - c * (i * v - a * m) + p * (i * h - a * d)), e[10] = n * (s * v - u * m) - r * (i * v - a * m) + p * (i * u - a * s), e[11] = -(n * (s * h - u * d) - r * (i * h - a * d) + c * (i * u - a * s)), e[12] = -(r * (d * _ - f * m) - c * (s * _ - l * m) + p * (s * f - l * d)), e[13] = n * (d * _ - f * m) - c * (i * _ - o * m) + p * (i * f - o * d), e[14] = -(n * (s * _ - l * m) - r * (i * _ - o * m) + p * (i * l - o * s)), e[15] = n * (s * f - l * d) - r * (i * f - o * d) + c * (i * l - o * s), e
  },
  determinant: function (e) {
    let t = e[0],
      n = e[1],
      i = e[2],
      o = e[3],
      a = e[4],
      r = e[5],
      s = e[6],
      l = e[7],
      u = e[8],
      c = e[9],
      d = e[10],
      f = e[11],
      h = e[12],
      p = e[13],
      m = e[14],
      _ = e[15];
    return (t * r - n * a) * (d * _ - f * m) - (t * s - i * a) * (c * _ - f * p) + (t * l - o * a) * (c * m - d * p) + (n * s - i * r) * (u * _ - f * h) - (n * l - o * r) * (u * m - d * h) + (i * l - o * s) * (u * p - c * h)
  },
  multiply: S,
  translate: function (e, t, n) {
    let i, o, a, r, s, l, u, c, d, f, h, p, m = n[0],
      _ = n[1],
      v = n[2];
    return t === e ? (e[12] = t[0] * m + t[4] * _ + t[8] * v + t[12], e[13] = t[1] * m + t[5] * _ + t[9] * v + t[13], e[14] = t[2] * m + t[6] * _ + t[10] * v + t[14], e[15] = t[3] * m + t[7] * _ + t[11] * v + t[15]) : (i = t[0], o = t[1], a = t[2], r = t[3], s = t[4], l = t[5], u = t[6], c = t[7], d = t[8], f = t[9], h = t[10], p = t[11], e[0] = i, e[1] = o, e[2] = a, e[3] = r, e[4] = s, e[5] = l, e[6] = u, e[7] = c, e[8] = d, e[9] = f, e[10] = h, e[11] = p, e[12] = i * m + s * _ + d * v + t[12], e[13] = o * m + l * _ + f * v + t[13], e[14] = a * m + u * _ + h * v + t[14], e[15] = r * m + c * _ + p * v + t[15]), e
  },
  scale: function (e, t, n) {
    let i = n[0],
      o = n[1],
      a = n[2];
    return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e[3] = t[3] * i, e[4] = t[4] * o, e[5] = t[5] * o, e[6] = t[6] * o, e[7] = t[7] * o, e[8] = t[8] * a, e[9] = t[9] * a, e[10] = t[10] * a, e[11] = t[11] * a, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
  },
  rotate: function (t, n, i, o) {
    let a, r, s, l, u, c, d, f, h, p, m, _, v, g, b, T, x, S, w, y, P, M, O, N, E = o[0],
      A = o[1],
      C = o[2],
      R = Math.hypot(E, A, C);
    return R < e ? null : (E *= R = 1 / R, A *= R, C *= R, a = Math.sin(i), s = 1 - (r = Math.cos(i)), l = n[0], u = n[1], c = n[2], d = n[3], f = n[4], h = n[5], p = n[6], m = n[7], _ = n[8], v = n[9], g = n[10], b = n[11], T = E * E * s + r, x = A * E * s + C * a, S = C * E * s - A * a, w = E * A * s - C * a, y = A * A * s + r, P = C * A * s + E * a, M = E * C * s + A * a, O = A * C * s - E * a, N = C * C * s + r, t[0] = l * T + f * x + _ * S, t[1] = u * T + h * x + v * S, t[2] = c * T + p * x + g * S, t[3] = d * T + m * x + b * S, t[4] = l * w + f * y + _ * P, t[5] = u * w + h * y + v * P, t[6] = c * w + p * y + g * P, t[7] = d * w + m * y + b * P, t[8] = l * M + f * O + _ * N, t[9] = u * M + h * O + v * N, t[10] = c * M + p * O + g * N, t[11] = d * M + m * O + b * N, n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t)
  },
  rotateX: function (e, t, n) {
    let i = Math.sin(n),
      o = Math.cos(n),
      a = t[4],
      r = t[5],
      s = t[6],
      l = t[7],
      u = t[8],
      c = t[9],
      d = t[10],
      f = t[11];
    return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = a * o + u * i, e[5] = r * o + c * i, e[6] = s * o + d * i, e[7] = l * o + f * i, e[8] = u * o - a * i, e[9] = c * o - r * i, e[10] = d * o - s * i, e[11] = f * o - l * i, e
  },
  rotateY: function (e, t, n) {
    let i = Math.sin(n),
      o = Math.cos(n),
      a = t[0],
      r = t[1],
      s = t[2],
      l = t[3],
      u = t[8],
      c = t[9],
      d = t[10],
      f = t[11];
    return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * o - u * i, e[1] = r * o - c * i, e[2] = s * o - d * i, e[3] = l * o - f * i, e[8] = a * i + u * o, e[9] = r * i + c * o, e[10] = s * i + d * o, e[11] = l * i + f * o, e
  },
  rotateZ: function (e, t, n) {
    let i = Math.sin(n),
      o = Math.cos(n),
      a = t[0],
      r = t[1],
      s = t[2],
      l = t[3],
      u = t[4],
      c = t[5],
      d = t[6],
      f = t[7];
    return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * o + u * i, e[1] = r * o + c * i, e[2] = s * o + d * i, e[3] = l * o + f * i, e[4] = u * o - a * i, e[5] = c * o - r * i, e[6] = d * o - s * i, e[7] = f * o - l * i, e
  },
  fromTranslation: function (e, t) {
    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e
  },
  fromScaling: function (e, t) {
    return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
  },
  fromRotation: function (t, n, i) {
    let o, a, r, s = i[0],
      l = i[1],
      u = i[2],
      c = Math.hypot(s, l, u);
    return c < e ? null : (s *= c = 1 / c, l *= c, u *= c, o = Math.sin(n), r = 1 - (a = Math.cos(n)), t[0] = s * s * r + a, t[1] = l * s * r + u * o, t[2] = u * s * r - l * o, t[3] = 0, t[4] = s * l * r - u * o, t[5] = l * l * r + a, t[6] = u * l * r + s * o, t[7] = 0, t[8] = s * u * r + l * o, t[9] = l * u * r - s * o, t[10] = u * u * r + a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
  },
  fromXRotation: function (e, t) {
    let n = Math.sin(t),
      i = Math.cos(t);
    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i, e[6] = n, e[7] = 0, e[8] = 0, e[9] = -n, e[10] = i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
  },
  fromYRotation: function (e, t) {
    let n = Math.sin(t),
      i = Math.cos(t);
    return e[0] = i, e[1] = 0, e[2] = -n, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = n, e[9] = 0, e[10] = i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
  },
  fromZRotation: function (e, t) {
    let n = Math.sin(t),
      i = Math.cos(t);
    return e[0] = i, e[1] = n, e[2] = 0, e[3] = 0, e[4] = -n, e[5] = i, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
  },
  fromRotationTranslation: w,
  fromQuat2: function (e, n) {
    let i = new t(3),
      o = -n[0],
      a = -n[1],
      r = -n[2],
      s = n[3],
      l = n[4],
      u = n[5],
      c = n[6],
      d = n[7],
      f = o * o + a * a + r * r + s * s;
    return f > 0 ? (i[0] = 2 * (l * s + d * o + u * r - c * a) / f, i[1] = 2 * (u * s + d * a + c * o - l * r) / f, i[2] = 2 * (c * s + d * r + l * a - u * o) / f) : (i[0] = 2 * (l * s + d * o + u * r - c * a), i[1] = 2 * (u * s + d * a + c * o - l * r), i[2] = 2 * (c * s + d * r + l * a - u * o)), w(e, n, i), e
  },
  getTranslation: y,
  getScaling: P,
  getRotation: M,
  fromRotationTranslationScale: function (e, t, n, i) {
    let o = t[0],
      a = t[1],
      r = t[2],
      s = t[3],
      l = o + o,
      u = a + a,
      c = r + r,
      d = o * l,
      f = o * u,
      h = o * c,
      p = a * u,
      m = a * c,
      _ = r * c,
      v = s * l,
      g = s * u,
      b = s * c,
      T = i[0],
      x = i[1],
      S = i[2];
    return e[0] = (1 - (p + _)) * T, e[1] = (f + b) * T, e[2] = (h - g) * T, e[3] = 0, e[4] = (f - b) * x, e[5] = (1 - (d + _)) * x, e[6] = (m + v) * x, e[7] = 0, e[8] = (h + g) * S, e[9] = (m - v) * S, e[10] = (1 - (d + p)) * S, e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e
  },
  fromRotationTranslationScaleOrigin: function (e, t, n, i, o) {
    let a = t[0],
      r = t[1],
      s = t[2],
      l = t[3],
      u = a + a,
      c = r + r,
      d = s + s,
      f = a * u,
      h = a * c,
      p = a * d,
      m = r * c,
      _ = r * d,
      v = s * d,
      g = l * u,
      b = l * c,
      T = l * d,
      x = i[0],
      S = i[1],
      w = i[2],
      y = o[0],
      P = o[1],
      M = o[2],
      O = (1 - (m + v)) * x,
      N = (h + T) * x,
      E = (p - b) * x,
      A = (h - T) * S,
      C = (1 - (f + v)) * S,
      R = (_ + g) * S,
      L = (p + b) * w,
      I = (_ - g) * w,
      D = (1 - (f + m)) * w;
    return e[0] = O, e[1] = N, e[2] = E, e[3] = 0, e[4] = A, e[5] = C, e[6] = R, e[7] = 0, e[8] = L, e[9] = I, e[10] = D, e[11] = 0, e[12] = n[0] + y - (O * y + A * P + L * M), e[13] = n[1] + P - (N * y + C * P + I * M), e[14] = n[2] + M - (E * y + R * P + D * M), e[15] = 1, e
  },
  fromQuat: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2],
      a = t[3],
      r = n + n,
      s = i + i,
      l = o + o,
      u = n * r,
      c = i * r,
      d = i * s,
      f = o * r,
      h = o * s,
      p = o * l,
      m = a * r,
      _ = a * s,
      v = a * l;
    return e[0] = 1 - d - p, e[1] = c + v, e[2] = f - _, e[3] = 0, e[4] = c - v, e[5] = 1 - u - p, e[6] = h + m, e[7] = 0, e[8] = f + _, e[9] = h - m, e[10] = 1 - u - d, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
  },
  frustum: function (e, t, n, i, o, a, r) {
    let s = 1 / (n - t),
      l = 1 / (o - i),
      u = 1 / (a - r);
    return e[0] = 2 * a * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * a * l, e[6] = 0, e[7] = 0, e[8] = (n + t) * s, e[9] = (o + i) * l, e[10] = (r + a) * u, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = r * a * 2 * u, e[15] = 0, e
  },
  perspective: function (e, t, n, i, o) {
    let a, r = 1 / Math.tan(t / 2);
    return e[0] = r / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, null != o && o !== 1 / 0 ? (a = 1 / (i - o), e[10] = (o + i) * a, e[14] = 2 * o * i * a) : (e[10] = -1, e[14] = -2 * i), e
  },
  perspectiveFromFieldOfView: function (e, t, n, i) {
    let o = Math.tan(t.upDegrees * Math.PI / 180),
      a = Math.tan(t.downDegrees * Math.PI / 180),
      r = Math.tan(t.leftDegrees * Math.PI / 180),
      s = Math.tan(t.rightDegrees * Math.PI / 180),
      l = 2 / (r + s),
      u = 2 / (o + a);
    return e[0] = l, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = u, e[6] = 0, e[7] = 0, e[8] = -(r - s) * l * .5, e[9] = (o - a) * u * .5, e[10] = i / (n - i), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = i * n / (n - i), e[15] = 0, e
  },
  ortho: function (e, t, n, i, o, a, r) {
    let s = 1 / (t - n),
      l = 1 / (i - o),
      u = 1 / (a - r);
    return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * l, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * u, e[11] = 0, e[12] = (t + n) * s, e[13] = (o + i) * l, e[14] = (r + a) * u, e[15] = 1, e
  },
  lookAt: function (t, n, i, o) {
    let a, r, s, l, u, c, d, f, h, p, m = n[0],
      _ = n[1],
      v = n[2],
      g = o[0],
      b = o[1],
      T = o[2],
      S = i[0],
      w = i[1],
      y = i[2];
    return Math.abs(m - S) < e && Math.abs(_ - w) < e && Math.abs(v - y) < e ? x(t) : (d = m - S, f = _ - w, h = v - y, a = b * (h *= p = 1 / Math.hypot(d, f, h)) - T * (f *= p), r = T * (d *= p) - g * h, s = g * f - b * d, (p = Math.hypot(a, r, s)) ? (a *= p = 1 / p, r *= p, s *= p) : (a = 0, r = 0, s = 0), l = f * s - h * r, u = h * a - d * s, c = d * r - f * a, (p = Math.hypot(l, u, c)) ? (l *= p = 1 / p, u *= p, c *= p) : (l = 0, u = 0, c = 0), t[0] = a, t[1] = l, t[2] = d, t[3] = 0, t[4] = r, t[5] = u, t[6] = f, t[7] = 0, t[8] = s, t[9] = c, t[10] = h, t[11] = 0, t[12] = -(a * m + r * _ + s * v), t[13] = -(l * m + u * _ + c * v), t[14] = -(d * m + f * _ + h * v), t[15] = 1, t)
  },
  targetTo: function (e, t, n, i) {
    let o = t[0],
      a = t[1],
      r = t[2],
      s = i[0],
      l = i[1],
      u = i[2],
      c = o - n[0],
      d = a - n[1],
      f = r - n[2],
      h = c * c + d * d + f * f;
    h > 0 && (c *= h = 1 / Math.sqrt(h), d *= h, f *= h);
    let p = l * f - u * d,
      m = u * c - s * f,
      _ = s * d - l * c;
    return (h = p * p + m * m + _ * _) > 0 && (p *= h = 1 / Math.sqrt(h), m *= h, _ *= h), e[0] = p, e[1] = m, e[2] = _, e[3] = 0, e[4] = d * _ - f * m, e[5] = f * p - c * _, e[6] = c * m - d * p, e[7] = 0, e[8] = c, e[9] = d, e[10] = f, e[11] = 0, e[12] = o, e[13] = a, e[14] = r, e[15] = 1, e
  },
  str: function (e) {
    return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")"
  },
  frob: function (e) {
    return Math.hypot(e[0], e[1], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
  },
  add: function (e, t, n) {
    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e[9] = t[9] + n[9], e[10] = t[10] + n[10], e[11] = t[11] + n[11], e[12] = t[12] + n[12], e[13] = t[13] + n[13], e[14] = t[14] + n[14], e[15] = t[15] + n[15], e
  },
  subtract: O,
  multiplyScalar: function (e, t, n) {
    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12] * n, e[13] = t[13] * n, e[14] = t[14] * n, e[15] = t[15] * n, e
  },
  multiplyScalarAndAdd: function (e, t, n, i) {
    return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e[3] = t[3] + n[3] * i, e[4] = t[4] + n[4] * i, e[5] = t[5] + n[5] * i, e[6] = t[6] + n[6] * i, e[7] = t[7] + n[7] * i, e[8] = t[8] + n[8] * i, e[9] = t[9] + n[9] * i, e[10] = t[10] + n[10] * i, e[11] = t[11] + n[11] * i, e[12] = t[12] + n[12] * i, e[13] = t[13] + n[13] * i, e[14] = t[14] + n[14] * i, e[15] = t[15] + n[15] * i, e
  },
  exactEquals: function (e, t) {
    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[15] === t[15]
  },
  equals: function (t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = t[6],
      c = t[7],
      d = t[8],
      f = t[9],
      h = t[10],
      p = t[11],
      m = t[12],
      _ = t[13],
      v = t[14],
      g = t[15],
      b = n[0],
      T = n[1],
      x = n[2],
      S = n[3],
      w = n[4],
      y = n[5],
      P = n[6],
      M = n[7],
      O = n[8],
      N = n[9],
      E = n[10],
      A = n[11],
      C = n[12],
      R = n[13],
      L = n[14],
      I = n[15];
    return Math.abs(i - b) <= e * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(o - T) <= e * Math.max(1, Math.abs(o), Math.abs(T)) && Math.abs(a - x) <= e * Math.max(1, Math.abs(a), Math.abs(x)) && Math.abs(r - S) <= e * Math.max(1, Math.abs(r), Math.abs(S)) && Math.abs(s - w) <= e * Math.max(1, Math.abs(s), Math.abs(w)) && Math.abs(l - y) <= e * Math.max(1, Math.abs(l), Math.abs(y)) && Math.abs(u - P) <= e * Math.max(1, Math.abs(u), Math.abs(P)) && Math.abs(c - M) <= e * Math.max(1, Math.abs(c), Math.abs(M)) && Math.abs(d - O) <= e * Math.max(1, Math.abs(d), Math.abs(O)) && Math.abs(f - N) <= e * Math.max(1, Math.abs(f), Math.abs(N)) && Math.abs(h - E) <= e * Math.max(1, Math.abs(h), Math.abs(E)) && Math.abs(p - A) <= e * Math.max(1, Math.abs(p), Math.abs(A)) && Math.abs(m - C) <= e * Math.max(1, Math.abs(m), Math.abs(C)) && Math.abs(_ - R) <= e * Math.max(1, Math.abs(_), Math.abs(R)) && Math.abs(v - L) <= e * Math.max(1, Math.abs(v), Math.abs(L)) && Math.abs(g - I) <= e * Math.max(1, Math.abs(g), Math.abs(I))
  },
  mul: N,
  sub: E
});

function C() {
  let e = new t(3);
  return t != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e
}

function R(e) {
  let t = e[0],
    n = e[1],
    i = e[2];
  return Math.hypot(t, n, i)
}

function L(e, n, i) {
  let o = new t(3);
  return o[0] = e, o[1] = n, o[2] = i, o
}

function I(e, t, n) {
  return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e
}

function D(e, t, n) {
  return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e
}

function z(e, t, n) {
  return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e
}

function F(e, t) {
  let n = t[0] - e[0],
    i = t[1] - e[1],
    o = t[2] - e[2];
  return Math.hypot(n, i, o)
}

function U(e, t) {
  let n = t[0] - e[0],
    i = t[1] - e[1],
    o = t[2] - e[2];
  return n * n + i * i + o * o
}

function k(e) {
  let t = e[0],
    n = e[1],
    i = e[2];
  return t * t + n * n + i * i
}

function H(e, t) {
  let n = t[0],
    i = t[1],
    o = t[2],
    a = n * n + i * i + o * o;
  return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e
}

function J(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
}

function V(e, t, n) {
  let i = t[0],
    o = t[1],
    a = t[2],
    r = n[0],
    s = n[1],
    l = n[2];
  return e[0] = o * l - a * s, e[1] = a * r - i * l, e[2] = i * s - o * r, e
}
const j = I,
  B = D,
  X = z,
  G = F,
  W = U,
  Z = R,
  q = k;
let K = null;
var Y = Object.freeze({
  create: C,
  clone: function (e) {
    var n = new t(3);
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n
  },
  length: R,
  fromValues: L,
  copy: function (e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
  },
  set: function (e, t, n, i) {
    return e[0] = t, e[1] = n, e[2] = i, e
  },
  add: function (e, t, n) {
    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e
  },
  subtract: I,
  multiply: D,
  divide: z,
  ceil: function (e, t) {
    return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e
  },
  floor: function (e, t) {
    return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e
  },
  min: function (e, t, n) {
    return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e
  },
  max: function (e, t, n) {
    return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e
  },
  round: function (e, t) {
    return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e
  },
  scale: function (e, t, n) {
    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e
  },
  scaleAndAdd: function (e, t, n, i) {
    return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e
  },
  distance: F,
  squaredDistance: U,
  squaredLength: k,
  negate: function (e, t) {
    return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
  },
  inverse: function (e, t) {
    return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e
  },
  normalize: H,
  dot: J,
  cross: V,
  lerp: function (e, t, n, i) {
    let o = t[0],
      a = t[1],
      r = t[2];
    return e[0] = o + i * (n[0] - o), e[1] = a + i * (n[1] - a), e[2] = r + i * (n[2] - r), e
  },
  hermite: function (e, t, n, i, o, a) {
    let r = a * a,
      s = r * (2 * a - 3) + 1,
      l = r * (a - 2) + a,
      u = r * (a - 1),
      c = r * (3 - 2 * a);
    return e[0] = t[0] * s + n[0] * l + i[0] * u + o[0] * c, e[1] = t[1] * s + n[1] * l + i[1] * u + o[1] * c, e[2] = t[2] * s + n[2] * l + i[2] * u + o[2] * c, e
  },
  bezier: function (e, t, n, i, o, a) {
    let r = 1 - a,
      s = r * r,
      l = a * a,
      u = s * r,
      c = 3 * a * s,
      d = 3 * l * r,
      f = l * a;
    return e[0] = t[0] * u + n[0] * c + i[0] * d + o[0] * f, e[1] = t[1] * u + n[1] * c + i[1] * d + o[1] * f, e[2] = t[2] * u + n[2] * c + i[2] * d + o[2] * f, e
  },
  random: function (e, t) {
    t = t || 1;
    let i = 2 * n() * Math.PI,
      o = 2 * n() - 1,
      a = Math.sqrt(1 - o * o) * t;
    return e[0] = Math.cos(i) * a, e[1] = Math.sin(i) * a, e[2] = o * t, e
  },
  transformMat4: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = n[3] * i + n[7] * o + n[11] * a + n[15];
    return r = r || 1, e[0] = (n[0] * i + n[4] * o + n[8] * a + n[12]) / r, e[1] = (n[1] * i + n[5] * o + n[9] * a + n[13]) / r, e[2] = (n[2] * i + n[6] * o + n[10] * a + n[14]) / r, e
  },
  transformMat3: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2];
    return e[0] = i * n[0] + o * n[3] + a * n[6], e[1] = i * n[1] + o * n[4] + a * n[7], e[2] = i * n[2] + o * n[5] + a * n[8], e
  },
  transformQuat: function (e, t, n) {
    let i = n[0],
      o = n[1],
      a = n[2],
      r = n[3],
      s = t[0],
      l = t[1],
      u = t[2],
      c = o * u - a * l,
      d = a * s - i * u,
      f = i * l - o * s,
      h = o * f - a * d,
      p = a * c - i * f,
      m = i * d - o * c,
      _ = 2 * r;
    return c *= _, d *= _, f *= _, h *= 2, p *= 2, m *= 2, e[0] = s + c + h, e[1] = l + d + p, e[2] = u + f + m, e
  },
  rotateX: function (e, t, n, i) {
    let o = [],
      a = [];
    return o[0] = t[0] - n[0], o[1] = t[1] - n[1], o[2] = t[2] - n[2], a[0] = o[0], a[1] = o[1] * Math.cos(i) - o[2] * Math.sin(i), a[2] = o[1] * Math.sin(i) + o[2] * Math.cos(i), e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e
  },
  rotateY: function (e, t, n, i) {
    let o = [],
      a = [];
    return o[0] = t[0] - n[0], o[1] = t[1] - n[1], o[2] = t[2] - n[2], a[0] = o[2] * Math.sin(i) + o[0] * Math.cos(i), a[1] = o[1], a[2] = o[2] * Math.cos(i) - o[0] * Math.sin(i), e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e
  },
  rotateZ: function (e, t, n, i) {
    let o = [],
      a = [];
    return o[0] = t[0] - n[0], o[1] = t[1] - n[1], o[2] = t[2] - n[2], a[0] = o[0] * Math.cos(i) - o[1] * Math.sin(i), a[1] = o[0] * Math.sin(i) + o[1] * Math.cos(i), a[2] = o[2], e[0] = a[0] + n[0], e[1] = a[1] + n[1], e[2] = a[2] + n[2], e
  },
  angle: function (e, t) {
    let n = L(e[0], e[1], e[2]),
      i = L(t[0], t[1], t[2]);
    H(n, n), H(i, i);
    let o = J(n, i);
    return o > 1 ? 0 : o < -1 ? Math.PI : Math.acos(o)
  },
  zero: function (e) {
    return e[0] = 0, e[1] = 0, e[2] = 0, e
  },
  str: function (e) {
    return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
  },
  exactEquals: function (e, t) {
    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2]
  },
  equals: function (t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = n[0],
      s = n[1],
      l = n[2];
    return Math.abs(i - r) <= e * Math.max(1, Math.abs(i), Math.abs(r)) && Math.abs(o - s) <= e * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(a - l) <= e * Math.max(1, Math.abs(a), Math.abs(l))
  },
  sub: j,
  mul: B,
  div: X,
  dist: G,
  sqrDist: W,
  len: Z,
  sqrLen: q,
  forEach: function (e, t, n, i, o, a) {
    let r, s;
    for (K || (K = C()), t || (t = 3), n || (n = 0), s = i ? Math.min(i * t + n, e.length) : e.length, r = n; r < s; r += t) K[0] = e[r], K[1] = e[r + 1], K[2] = e[r + 2], o(K, K, a), e[r] = K[0], e[r + 1] = K[1], e[r + 2] = K[2];
    return e
  }
});

function Q() {
  let e = new t(4);
  return t != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e
}

function $(e) {
  let n = new t(4);
  return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n
}

function ee(e, n, i, o) {
  let a = new t(4);
  return a[0] = e, a[1] = n, a[2] = i, a[3] = o, a
}

function te(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
}

function ne(e, t, n, i, o) {
  return e[0] = t, e[1] = n, e[2] = i, e[3] = o, e
}

function ie(e, t, n) {
  return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e
}

function oe(e, t, n) {
  return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e
}

function ae(e, t, n) {
  return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e[3] = t[3] * n[3], e
}

function re(e, t, n) {
  return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e[3] = t[3] / n[3], e
}

function se(e, t, n) {
  return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e
}

function le(e, t) {
  let n = t[0] - e[0],
    i = t[1] - e[1],
    o = t[2] - e[2],
    a = t[3] - e[3];
  return Math.hypot(n, i, o, a)
}

function ue(e, t) {
  let n = t[0] - e[0],
    i = t[1] - e[1],
    o = t[2] - e[2],
    a = t[3] - e[3];
  return n * n + i * i + o * o + a * a
}

function ce(e) {
  let t = e[0],
    n = e[1],
    i = e[2],
    o = e[3];
  return Math.hypot(t, n, i, o)
}

function de(e) {
  let t = e[0],
    n = e[1],
    i = e[2],
    o = e[3];
  return t * t + n * n + i * i + o * o
}

function fe(e, t) {
  let n = t[0],
    i = t[1],
    o = t[2],
    a = t[3],
    r = n * n + i * i + o * o + a * a;
  return r > 0 && (r = 1 / Math.sqrt(r)), e[0] = n * r, e[1] = i * r, e[2] = o * r, e[3] = a * r, e
}

function he(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
}

function pe(e, t, n, i) {
  let o = t[0],
    a = t[1],
    r = t[2],
    s = t[3];
  return e[0] = o + i * (n[0] - o), e[1] = a + i * (n[1] - a), e[2] = r + i * (n[2] - r), e[3] = s + i * (n[3] - s), e
}

function me(e, t) {
  return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]
}

function _e(t, n) {
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = n[0],
    l = n[1],
    u = n[2],
    c = n[3];
  return Math.abs(i - s) <= e * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(o - l) <= e * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - u) <= e * Math.max(1, Math.abs(a), Math.abs(u)) && Math.abs(r - c) <= e * Math.max(1, Math.abs(r), Math.abs(c))
}
const ve = oe,
  ge = ae,
  be = re,
  Te = le,
  xe = ue,
  Se = ce,
  we = de;
let ye = null;
var Pe = Object.freeze({
  create: Q,
  clone: $,
  fromValues: ee,
  copy: te,
  set: ne,
  add: ie,
  subtract: oe,
  multiply: ae,
  divide: re,
  ceil: function (e, t) {
    return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e[3] = Math.ceil(t[3]), e
  },
  floor: function (e, t) {
    return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e[3] = Math.floor(t[3]), e
  },
  min: function (e, t, n) {
    return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e[3] = Math.min(t[3], n[3]), e
  },
  max: function (e, t, n) {
    return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e[3] = Math.max(t[3], n[3]), e
  },
  round: function (e, t) {
    return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e[3] = Math.round(t[3]), e
  },
  scale: se,
  scaleAndAdd: function (e, t, n, i) {
    return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e[3] = t[3] + n[3] * i, e
  },
  distance: le,
  squaredDistance: ue,
  length: ce,
  squaredLength: de,
  negate: function (e, t) {
    return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e
  },
  inverse: function (e, t) {
    return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e
  },
  normalize: fe,
  dot: he,
  cross: function (e, t, n, i) {
    let o = n[0] * i[1] - n[1] * i[0],
      a = n[0] * i[2] - n[2] * i[0],
      r = n[0] * i[3] - n[3] * i[0],
      s = n[1] * i[2] - n[2] * i[1],
      l = n[1] * i[3] - n[3] * i[1],
      u = n[2] * i[3] - n[3] * i[2],
      c = t[0],
      d = t[1],
      f = t[2],
      h = t[3];
    return e[0] = d * u - f * l + h * s, e[1] = -c * u + f * r - h * a, e[2] = c * l - d * r + h * o, e[3] = -c * s + d * a - f * o, e
  },
  lerp: pe,
  random: function (e, t) {
    var i, o, a, r, s, l;
    t = t || 1;
    do {
      s = (i = 2 * n() - 1) * i + (o = 2 * n() - 1) * o
    } while (s >= 1);
    do {
      l = (a = 2 * n() - 1) * a + (r = 2 * n() - 1) * r
    } while (l >= 1);
    var u = Math.sqrt((1 - s) / l);
    return e[0] = t * i, e[1] = t * o, e[2] = t * a * u, e[3] = t * r * u, e
  },
  transformMat4: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3];
    return e[0] = n[0] * i + n[4] * o + n[8] * a + n[12] * r, e[1] = n[1] * i + n[5] * o + n[9] * a + n[13] * r, e[2] = n[2] * i + n[6] * o + n[10] * a + n[14] * r, e[3] = n[3] * i + n[7] * o + n[11] * a + n[15] * r, e
  },
  transformQuat: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = n[0],
      s = n[1],
      l = n[2],
      u = n[3],
      c = u * i + s * a - l * o,
      d = u * o + l * i - r * a,
      f = u * a + r * o - s * i,
      h = -r * i - s * o - l * a;
    return e[0] = c * u + h * -r + d * -l - f * -s, e[1] = d * u + h * -s + f * -r - c * -l, e[2] = f * u + h * -l + c * -s - d * -r, e[3] = t[3], e
  },
  zero: function (e) {
    return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e
  },
  str: function (e) {
    return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
  },
  exactEquals: me,
  equals: _e,
  sub: ve,
  mul: ge,
  div: be,
  dist: Te,
  sqrDist: xe,
  len: Se,
  sqrLen: we,
  forEach: function (e, t, n, i, o, a) {
    let r, s;
    for (ye || (ye = Q()), t || (t = 4), n || (n = 0), s = i ? Math.min(i * t + n, e.length) : e.length, r = n; r < s; r += t) ye[0] = e[r], ye[1] = e[r + 1], ye[2] = e[r + 2], ye[3] = e[r + 3], o(ye, ye, a), e[r] = ye[0], e[r + 1] = ye[1], e[r + 2] = ye[2], e[r + 3] = ye[3];
    return e
  }
});

function Me() {
  let e = new t(4);
  return t != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e[3] = 1, e
}

function Oe(e, t, n) {
  n *= .5;
  let i = Math.sin(n);
  return e[0] = i * t[0], e[1] = i * t[1], e[2] = i * t[2], e[3] = Math.cos(n), e
}

function Ne(e, t, n) {
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = n[0],
    l = n[1],
    u = n[2],
    c = n[3];
  return e[0] = i * c + r * s + o * u - a * l, e[1] = o * c + r * l + a * s - i * u, e[2] = a * c + r * u + i * l - o * s, e[3] = r * c - i * s - o * l - a * u, e
}

function Ee(e, t, n) {
  n *= .5;
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = Math.sin(n),
    l = Math.cos(n);
  return e[0] = i * l + r * s, e[1] = o * l + a * s, e[2] = a * l - o * s, e[3] = r * l - i * s, e
}

function Ae(e, t, n) {
  n *= .5;
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = Math.sin(n),
    l = Math.cos(n);
  return e[0] = i * l - a * s, e[1] = o * l + r * s, e[2] = a * l + i * s, e[3] = r * l - o * s, e
}

function Ce(e, t, n) {
  n *= .5;
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = Math.sin(n),
    l = Math.cos(n);
  return e[0] = i * l + o * s, e[1] = o * l - i * s, e[2] = a * l + r * s, e[3] = r * l - a * s, e
}

function Re(e, t) {
  let n = t[0],
    i = t[1],
    o = t[2],
    a = t[3],
    r = Math.sqrt(n * n + i * i + o * o),
    s = Math.exp(a),
    l = r > 0 ? s * Math.sin(r) / r : 0;
  return e[0] = n * l, e[1] = i * l, e[2] = o * l, e[3] = s * Math.cos(r), e
}

function Le(e, t) {
  let n = t[0],
    i = t[1],
    o = t[2],
    a = t[3],
    r = Math.sqrt(n * n + i * i + o * o),
    s = r > 0 ? Math.atan2(r, a) / r : 0;
  return e[0] = n * s, e[1] = i * s, e[2] = o * s, e[3] = .5 * Math.log(n * n + i * i + o * o + a * a), e
}

function Ie(t, n, i, o) {
  let a, r, s, l, u, c = n[0],
    d = n[1],
    f = n[2],
    h = n[3],
    p = i[0],
    m = i[1],
    _ = i[2],
    v = i[3];
  return (r = c * p + d * m + f * _ + h * v) < 0 && (r = -r, p = -p, m = -m, _ = -_, v = -v), 1 - r > e ? (a = Math.acos(r), s = Math.sin(a), l = Math.sin((1 - o) * a) / s, u = Math.sin(o * a) / s) : (l = 1 - o, u = o), t[0] = l * c + u * p, t[1] = l * d + u * m, t[2] = l * f + u * _, t[3] = l * h + u * v, t
}

function De(e, t) {
  let n, i = t[0] + t[4] + t[8];
  if (i > 0) n = Math.sqrt(i + 1), e[3] = .5 * n, n = .5 / n, e[0] = (t[5] - t[7]) * n, e[1] = (t[6] - t[2]) * n, e[2] = (t[1] - t[3]) * n;
  else {
    let i = 0;
    t[4] > t[0] && (i = 1), t[8] > t[3 * i + i] && (i = 2);
    let o = (i + 1) % 3,
      a = (i + 2) % 3;
    n = Math.sqrt(t[3 * i + i] - t[3 * o + o] - t[3 * a + a] + 1), e[i] = .5 * n, n = .5 / n, e[3] = (t[3 * o + a] - t[3 * a + o]) * n, e[o] = (t[3 * o + i] + t[3 * i + o]) * n, e[a] = (t[3 * a + i] + t[3 * i + a]) * n
  }
  return e
}
const ze = $,
  Fe = ee,
  Ue = te,
  ke = ne,
  He = ie,
  Je = Ne,
  Ve = se,
  je = he,
  Be = pe,
  Xe = ce,
  Ge = Xe,
  We = de,
  Ze = We,
  qe = fe,
  Ke = me,
  Ye = _e;
let Qe = null,
  $e = null,
  et = null;
let tt = null,
  nt = null;
let it = null;
var ot = Object.freeze({
  create: Me,
  identity: function (e) {
    return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
  },
  setAxisAngle: Oe,
  getAxisAngle: function (t, n) {
    let i = 2 * Math.acos(n[3]),
      o = Math.sin(i / 2);
    return o > e ? (t[0] = n[0] / o, t[1] = n[1] / o, t[2] = n[2] / o) : (t[0] = 1, t[1] = 0, t[2] = 0), i
  },
  getAngle: function (e, t) {
    let n = je(e, t);
    return Math.acos(2 * n * n - 1)
  },
  multiply: Ne,
  rotateX: Ee,
  rotateY: Ae,
  rotateZ: Ce,
  calculateW: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2];
    return e[0] = n, e[1] = i, e[2] = o, e[3] = Math.sqrt(Math.abs(1 - n * n - i * i - o * o)), e
  },
  exp: Re,
  ln: Le,
  pow: function (e, t, n) {
    return Le(e, t), Ve(e, e, n), Re(e, e), e
  },
  slerp: Ie,
  random: function (e) {
    let t = n(),
      i = n(),
      o = n(),
      a = Math.sqrt(1 - t),
      r = Math.sqrt(t);
    return e[0] = a * Math.sin(2 * Math.PI * i), e[1] = a * Math.cos(2 * Math.PI * i), e[2] = r * Math.sin(2 * Math.PI * o), e[3] = r * Math.cos(2 * Math.PI * o), e
  },
  invert: function (e, t) {
    let n = t[0],
      i = t[1],
      o = t[2],
      a = t[3],
      r = n * n + i * i + o * o + a * a,
      s = r ? 1 / r : 0;
    return e[0] = -n * s, e[1] = -i * s, e[2] = -o * s, e[3] = a * s, e
  },
  conjugate: function (e, t) {
    return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e
  },
  fromMat3: De,
  fromEuler: function (e, t, n, i) {
    let o = .5 * Math.PI / 180;
    t *= o, n *= o, i *= o;
    let a = Math.sin(t),
      r = Math.cos(t),
      s = Math.sin(n),
      l = Math.cos(n),
      u = Math.sin(i),
      c = Math.cos(i);
    return e[0] = a * l * c - r * s * u, e[1] = r * s * c + a * l * u, e[2] = r * l * u - a * s * c, e[3] = r * l * c + a * s * u, e
  },
  str: function (e) {
    return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
  },
  clone: ze,
  fromValues: Fe,
  copy: Ue,
  set: ke,
  add: He,
  mul: Je,
  scale: Ve,
  dot: je,
  lerp: Be,
  length: Xe,
  len: Ge,
  squaredLength: We,
  sqrLen: Ze,
  normalize: qe,
  exactEquals: Ke,
  equals: Ye,
  rotationTo: function (e, t, n) {
    Qe || (Qe = C(), $e = L(1, 0, 0), et = L(0, 1, 0));
    let i = J(t, n);
    return i < -.999999 ? (V(Qe, $e, t), Z(Qe) < 1e-6 && V(Qe, et, t), H(Qe, Qe), Oe(e, Qe, Math.PI), e) : i > .999999 ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e) : (V(Qe, t, n), e[0] = Qe[0], e[1] = Qe[1], e[2] = Qe[2], e[3] = 1 + i, qe(e, e))
  },
  sqlerp: function (e, t, n, i, o, a) {
    return tt || (tt = Me(), nt = Me()), Ie(tt, t, o, a), Ie(nt, n, i, a), Ie(e, tt, nt, 2 * a * (1 - a)), e
  },
  setAxes: function (e, t, n, i) {
    return it || (it = m()), it[0] = n[0], it[3] = n[1], it[6] = n[2], it[1] = i[0], it[4] = i[1], it[7] = i[2], it[2] = -t[0], it[5] = -t[1], it[8] = -t[2], qe(e, De(e, it))
  }
});

function at(e, t, n) {
  let i = .5 * n[0],
    o = .5 * n[1],
    a = .5 * n[2],
    r = t[0],
    s = t[1],
    l = t[2],
    u = t[3];
  return e[0] = r, e[1] = s, e[2] = l, e[3] = u, e[4] = i * u + o * l - a * s, e[5] = o * u + a * r - i * l, e[6] = a * u + i * s - o * r, e[7] = -i * r - o * s - a * l, e
}

function rt(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e
}
const st = Ue;
const lt = Ue;

function ut(e, t, n) {
  let i = t[0],
    o = t[1],
    a = t[2],
    r = t[3],
    s = n[4],
    l = n[5],
    u = n[6],
    c = n[7],
    d = t[4],
    f = t[5],
    h = t[6],
    p = t[7],
    m = n[0],
    _ = n[1],
    v = n[2],
    g = n[3];
  return e[0] = i * g + r * m + o * v - a * _, e[1] = o * g + r * _ + a * m - i * v, e[2] = a * g + r * v + i * _ - o * m, e[3] = r * g - i * m - o * _ - a * v, e[4] = i * c + r * s + o * u - a * l + d * g + p * m + f * v - h * _, e[5] = o * c + r * l + a * s - i * u + f * g + p * _ + h * m - d * v, e[6] = a * c + r * u + i * l - o * s + h * g + p * v + d * _ - f * m, e[7] = r * c - i * s - o * l - a * u + p * g - d * m - f * _ - h * v, e
}
const ct = ut;
const dt = je;
const ft = Xe,
  ht = ft,
  pt = We,
  mt = pt;
var _t = Object.freeze({
  create: function () {
    let e = new t(8);
    return t != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[3] = 1, e
  },
  clone: function (e) {
    let n = new t(8);
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n
  },
  fromValues: function (e, n, i, o, a, r, s, l) {
    let u = new t(8);
    return u[0] = e, u[1] = n, u[2] = i, u[3] = o, u[4] = a, u[5] = r, u[6] = s, u[7] = l, u
  },
  fromRotationTranslationValues: function (e, n, i, o, a, r, s) {
    let l = new t(8);
    l[0] = e, l[1] = n, l[2] = i, l[3] = o;
    let u = .5 * a,
      c = .5 * r,
      d = .5 * s;
    return l[4] = u * o + c * i - d * n, l[5] = c * o + d * e - u * i, l[6] = d * o + u * n - c * e, l[7] = -u * e - c * n - d * i, l
  },
  fromRotationTranslation: at,
  fromTranslation: function (e, t) {
    return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = .5 * t[0], e[5] = .5 * t[1], e[6] = .5 * t[2], e[7] = 0, e
  },
  fromRotation: function (e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e
  },
  fromMat4: function (e, n) {
    let i = Me();
    M(i, n);
    let o = new t(3);
    return y(o, n), at(e, i, o), e
  },
  copy: rt,
  identity: function (e) {
    return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e
  },
  set: function (e, t, n, i, o, a, r, s, l) {
    return e[0] = t, e[1] = n, e[2] = i, e[3] = o, e[4] = a, e[5] = r, e[6] = s, e[7] = l, e
  },
  getReal: st,
  getDual: function (e, t) {
    return e[0] = t[4], e[1] = t[5], e[2] = t[6], e[3] = t[7], e
  },
  setReal: lt,
  setDual: function (e, t) {
    return e[4] = t[0], e[5] = t[1], e[6] = t[2], e[7] = t[3], e
  },
  getTranslation: function (e, t) {
    let n = t[4],
      i = t[5],
      o = t[6],
      a = t[7],
      r = -t[0],
      s = -t[1],
      l = -t[2],
      u = t[3];
    return e[0] = 2 * (n * u + a * r + i * l - o * s), e[1] = 2 * (i * u + a * s + o * r - n * l), e[2] = 2 * (o * u + a * l + n * s - i * r), e
  },
  translate: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = .5 * n[0],
      l = .5 * n[1],
      u = .5 * n[2],
      c = t[4],
      d = t[5],
      f = t[6],
      h = t[7];
    return e[0] = i, e[1] = o, e[2] = a, e[3] = r, e[4] = r * s + o * u - a * l + c, e[5] = r * l + a * s - i * u + d, e[6] = r * u + i * l - o * s + f, e[7] = -i * s - o * l - a * u + h, e
  },
  rotateX: function (e, t, n) {
    let i = -t[0],
      o = -t[1],
      a = -t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = t[6],
      c = t[7],
      d = s * r + c * i + l * a - u * o,
      f = l * r + c * o + u * i - s * a,
      h = u * r + c * a + s * o - l * i,
      p = c * r - s * i - l * o - u * a;
    return Ee(e, t, n), i = e[0], o = e[1], a = e[2], r = e[3], e[4] = d * r + p * i + f * a - h * o, e[5] = f * r + p * o + h * i - d * a, e[6] = h * r + p * a + d * o - f * i, e[7] = p * r - d * i - f * o - h * a, e
  },
  rotateY: function (e, t, n) {
    let i = -t[0],
      o = -t[1],
      a = -t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = t[6],
      c = t[7],
      d = s * r + c * i + l * a - u * o,
      f = l * r + c * o + u * i - s * a,
      h = u * r + c * a + s * o - l * i,
      p = c * r - s * i - l * o - u * a;
    return Ae(e, t, n), i = e[0], o = e[1], a = e[2], r = e[3], e[4] = d * r + p * i + f * a - h * o, e[5] = f * r + p * o + h * i - d * a, e[6] = h * r + p * a + d * o - f * i, e[7] = p * r - d * i - f * o - h * a, e
  },
  rotateZ: function (e, t, n) {
    let i = -t[0],
      o = -t[1],
      a = -t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = t[6],
      c = t[7],
      d = s * r + c * i + l * a - u * o,
      f = l * r + c * o + u * i - s * a,
      h = u * r + c * a + s * o - l * i,
      p = c * r - s * i - l * o - u * a;
    return Ce(e, t, n), i = e[0], o = e[1], a = e[2], r = e[3], e[4] = d * r + p * i + f * a - h * o, e[5] = f * r + p * o + h * i - d * a, e[6] = h * r + p * a + d * o - f * i, e[7] = p * r - d * i - f * o - h * a, e
  },
  rotateByQuatAppend: function (e, t, n) {
    let i = n[0],
      o = n[1],
      a = n[2],
      r = n[3],
      s = t[0],
      l = t[1],
      u = t[2],
      c = t[3];
    return e[0] = s * r + c * i + l * a - u * o, e[1] = l * r + c * o + u * i - s * a, e[2] = u * r + c * a + s * o - l * i, e[3] = c * r - s * i - l * o - u * a, s = t[4], l = t[5], u = t[6], c = t[7], e[4] = s * r + c * i + l * a - u * o, e[5] = l * r + c * o + u * i - s * a, e[6] = u * r + c * a + s * o - l * i, e[7] = c * r - s * i - l * o - u * a, e
  },
  rotateByQuatPrepend: function (e, t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = n[0],
      l = n[1],
      u = n[2],
      c = n[3];
    return e[0] = i * c + r * s + o * u - a * l, e[1] = o * c + r * l + a * s - i * u, e[2] = a * c + r * u + i * l - o * s, e[3] = r * c - i * s - o * l - a * u, s = n[4], l = n[5], u = n[6], c = n[7], e[4] = i * c + r * s + o * u - a * l, e[5] = o * c + r * l + a * s - i * u, e[6] = a * c + r * u + i * l - o * s, e[7] = r * c - i * s - o * l - a * u, e
  },
  rotateAroundAxis: function (t, n, i, o) {
    if (Math.abs(o) < e) return rt(t, n);
    let a = Math.hypot(i[0], i[1], i[2]);
    o *= .5;
    let r = Math.sin(o),
      s = r * i[0] / a,
      l = r * i[1] / a,
      u = r * i[2] / a,
      c = Math.cos(o),
      d = n[0],
      f = n[1],
      h = n[2],
      p = n[3];
    t[0] = d * c + p * s + f * u - h * l, t[1] = f * c + p * l + h * s - d * u, t[2] = h * c + p * u + d * l - f * s, t[3] = p * c - d * s - f * l - h * u;
    let m = n[4],
      _ = n[5],
      v = n[6],
      g = n[7];
    return t[4] = m * c + g * s + _ * u - v * l, t[5] = _ * c + g * l + v * s - m * u, t[6] = v * c + g * u + m * l - _ * s, t[7] = g * c - m * s - _ * l - v * u, t
  },
  add: function (e, t, n) {
    return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e
  },
  multiply: ut,
  mul: ct,
  scale: function (e, t, n) {
    return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e
  },
  dot: dt,
  lerp: function (e, t, n, i) {
    let o = 1 - i;
    return dt(t, n) < 0 && (i = -i), e[0] = t[0] * o + n[0] * i, e[1] = t[1] * o + n[1] * i, e[2] = t[2] * o + n[2] * i, e[3] = t[3] * o + n[3] * i, e[4] = t[4] * o + n[4] * i, e[5] = t[5] * o + n[5] * i, e[6] = t[6] * o + n[6] * i, e[7] = t[7] * o + n[7] * i, e
  },
  invert: function (e, t) {
    let n = pt(t);
    return e[0] = -t[0] / n, e[1] = -t[1] / n, e[2] = -t[2] / n, e[3] = t[3] / n, e[4] = -t[4] / n, e[5] = -t[5] / n, e[6] = -t[6] / n, e[7] = t[7] / n, e
  },
  conjugate: function (e, t) {
    return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e[4] = -t[4], e[5] = -t[5], e[6] = -t[6], e[7] = t[7], e
  },
  length: ft,
  len: ht,
  squaredLength: pt,
  sqrLen: mt,
  normalize: function (e, t) {
    let n = pt(t);
    if (n > 0) {
      n = Math.sqrt(n);
      let i = t[0] / n,
        o = t[1] / n,
        a = t[2] / n,
        r = t[3] / n,
        s = t[4],
        l = t[5],
        u = t[6],
        c = t[7],
        d = i * s + o * l + a * u + r * c;
      e[0] = i, e[1] = o, e[2] = a, e[3] = r, e[4] = (s - i * d) / n, e[5] = (l - o * d) / n, e[6] = (u - a * d) / n, e[7] = (c - r * d) / n
    }
    return e
  },
  str: function (e) {
    return "quat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ")"
  },
  exactEquals: function (e, t) {
    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7]
  },
  equals: function (t, n) {
    let i = t[0],
      o = t[1],
      a = t[2],
      r = t[3],
      s = t[4],
      l = t[5],
      u = t[6],
      c = t[7],
      d = n[0],
      f = n[1],
      h = n[2],
      p = n[3],
      m = n[4],
      _ = n[5],
      v = n[6],
      g = n[7];
    return Math.abs(i - d) <= e * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(o - f) <= e * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(a - h) <= e * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(r - p) <= e * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(s - m) <= e * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(l - _) <= e * Math.max(1, Math.abs(l), Math.abs(_)) && Math.abs(u - v) <= e * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(c - g) <= e * Math.max(1, Math.abs(c), Math.abs(g))
  }
});

function vt() {
  let e = new t(2);
  return t != Float32Array && (e[0] = 0, e[1] = 0), e
}

function gt(e, t, n) {
  return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
}

function bt(e, t, n) {
  return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e
}

function Tt(e, t, n) {
  return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e
}

function xt(e, t) {
  var n = t[0] - e[0],
    i = t[1] - e[1];
  return Math.hypot(n, i)
}

function St(e, t) {
  var n = t[0] - e[0],
    i = t[1] - e[1];
  return n * n + i * i
}

function wt(e) {
  var t = e[0],
    n = e[1];
  return Math.hypot(t, n)
}

function yt(e) {
  var t = e[0],
    n = e[1];
  return t * t + n * n
}
const Pt = wt,
  Mt = gt,
  Ot = bt,
  Nt = Tt,
  Et = xt,
  At = St,
  Ct = yt;
let Rt = null;
var Lt = Object.freeze({
    create: vt,
    clone: function (e) {
      let n = new t(2);
      return n[0] = e[0], n[1] = e[1], n
    },
    fromValues: function (e, n) {
      let i = new t(2);
      return i[0] = e, i[1] = n, i
    },
    copy: function (e, t) {
      return e[0] = t[0], e[1] = t[1], e
    },
    set: function (e, t, n) {
      return e[0] = t, e[1] = n, e
    },
    add: function (e, t, n) {
      return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
    },
    subtract: gt,
    multiply: bt,
    divide: Tt,
    ceil: function (e, t) {
      return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e
    },
    floor: function (e, t) {
      return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e
    },
    min: function (e, t, n) {
      return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e
    },
    max: function (e, t, n) {
      return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e
    },
    round: function (e, t) {
      return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e
    },
    scale: function (e, t, n) {
      return e[0] = t[0] * n, e[1] = t[1] * n, e
    },
    scaleAndAdd: function (e, t, n, i) {
      return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e
    },
    distance: xt,
    squaredDistance: St,
    length: wt,
    squaredLength: yt,
    negate: function (e, t) {
      return e[0] = -t[0], e[1] = -t[1], e
    },
    inverse: function (e, t) {
      return e[0] = 1 / t[0], e[1] = 1 / t[1], e
    },
    normalize: function (e, t) {
      var n = t[0],
        i = t[1],
        o = n * n + i * i;
      return o > 0 && (o = 1 / Math.sqrt(o)), e[0] = t[0] * o, e[1] = t[1] * o, e
    },
    dot: function (e, t) {
      return e[0] * t[0] + e[1] * t[1]
    },
    cross: function (e, t, n) {
      var i = t[0] * n[1] - t[1] * n[0];
      return e[0] = e[1] = 0, e[2] = i, e
    },
    lerp: function (e, t, n, i) {
      var o = t[0],
        a = t[1];
      return e[0] = o + i * (n[0] - o), e[1] = a + i * (n[1] - a), e
    },
    random: function (e, t) {
      t = t || 1;
      var i = 2 * n() * Math.PI;
      return e[0] = Math.cos(i) * t, e[1] = Math.sin(i) * t, e
    },
    transformMat2: function (e, t, n) {
      var i = t[0],
        o = t[1];
      return e[0] = n[0] * i + n[2] * o, e[1] = n[1] * i + n[3] * o, e
    },
    transformMat2d: function (e, t, n) {
      var i = t[0],
        o = t[1];
      return e[0] = n[0] * i + n[2] * o + n[4], e[1] = n[1] * i + n[3] * o + n[5], e
    },
    transformMat3: function (e, t, n) {
      var i = t[0],
        o = t[1];
      return e[0] = n[0] * i + n[3] * o + n[6], e[1] = n[1] * i + n[4] * o + n[7], e
    },
    transformMat4: function (e, t, n) {
      let i = t[0],
        o = t[1];
      return e[0] = n[0] * i + n[4] * o + n[12], e[1] = n[1] * i + n[5] * o + n[13], e
    },
    rotate: function (e, t, n, i) {
      let o = t[0] - n[0],
        a = t[1] - n[1],
        r = Math.sin(i),
        s = Math.cos(i);
      return e[0] = o * s - a * r + n[0], e[1] = o * r + a * s + n[1], e
    },
    angle: function (e, t) {
      let n = e[0],
        i = e[1],
        o = t[0],
        a = t[1],
        r = n * n + i * i;
      r > 0 && (r = 1 / Math.sqrt(r));
      let s = o * o + a * a;
      s > 0 && (s = 1 / Math.sqrt(s));
      let l = (n * o + i * a) * r * s;
      return l > 1 ? 0 : l < -1 ? Math.PI : Math.acos(l)
    },
    zero: function (e) {
      return e[0] = 0, e[1] = 0, e
    },
    str: function (e) {
      return "vec2(" + e[0] + ", " + e[1] + ")"
    },
    exactEquals: function (e, t) {
      return e[0] === t[0] && e[1] === t[1]
    },
    equals: function (t, n) {
      let i = t[0],
        o = t[1],
        a = n[0],
        r = n[1];
      return Math.abs(i - a) <= e * Math.max(1, Math.abs(i), Math.abs(a)) && Math.abs(o - r) <= e * Math.max(1, Math.abs(o), Math.abs(r))
    },
    len: Pt,
    sub: Mt,
    mul: Ot,
    div: Nt,
    dist: Et,
    sqrDist: At,
    sqrLen: Ct,
    forEach: function (e, t, n, i, o, a) {
      let r, s;
      for (Rt || (Rt = vt()), t || (t = 2), n || (n = 0), s = i ? Math.min(i * t + n, e.length) : e.length, r = n; r < s; r += t) Rt[0] = e[r], Rt[1] = e[r + 1], o(Rt, Rt, a), e[r] = Rt[0], e[r + 1] = Rt[1];
      return e
    }
  }),
  It = function () {
    var e = document.createElement("div");

    function t(t) {
      return e.appendChild(t.dom), t
    }

    function n(t) {
      for (var n = 0; n < e.children.length; n++) e.children[n].style.display = n === t ? "block" : "none"
    }
    e.id = "stats", e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
    var i = (performance || Date).now(),
      o = i,
      a = 0,
      r = t(new It.Panel("FPS", "#0ff", "#002")),
      s = t(new It.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory) var l = t(new It.Panel("MB", "#f08", "#201"));
    return {
      REVISION: 16,
      dom: e,
      addPanel: t,
      showPanel: n,
      begin: function () {
        i = (performance || Date).now()
      },
      end: function () {
        a++;
        var e = (performance || Date).now();
        if (s.update(e - i, 200), e >= o + 1e3 && (r.update(1e3 * a / (e - o), 100), o = e, a = 0, l)) {
          var t = performance.memory;
          l.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576)
        }
        return e
      },
      update: function () {
        i = this.end()
      },
      domElement: e,
      setMode: n
    }
  };

function Dt(e, t) {
  const n = e.__state.conversionName.toString(),
    i = Math.round(e.r),
    o = Math.round(e.g),
    a = Math.round(e.b),
    r = e.a,
    s = Math.round(e.h),
    l = e.s.toFixed(1),
    u = e.v.toFixed(1);
  if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
    let t = e.hex.toString(16);
    for (; t.length < 6;) t = "0" + t;
    return "#" + t
  }
  return "CSS_RGB" === n ? "rgb(" + i + "," + o + "," + a + ")" : "CSS_RGBA" === n ? "rgba(" + i + "," + o + "," + a + "," + r + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + i + "," + o + "," + a + "]" : "RGBA_ARRAY" === n ? "[" + i + "," + o + "," + a + "," + r + "]" : "RGB_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + a + "}" : "RGBA_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + a + ",a:" + r + "}" : "HSV_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + u + "}" : "HSVA_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + u + ",a:" + r + "}" : "unknown format"
}
It.Panel = function (e, t, n) {
  var i = 1 / 0,
    o = 0,
    a = Math.round,
    r = a(window.devicePixelRatio || 1),
    s = 80 * r,
    l = 48 * r,
    u = 3 * r,
    c = 2 * r,
    d = 3 * r,
    f = 15 * r,
    h = 74 * r,
    p = 30 * r,
    m = document.createElement("canvas");
  m.width = s, m.height = l, m.style.cssText = "width:80px;height:48px";
  var _ = m.getContext("2d");
  return _.font = "bold " + 9 * r + "px Helvetica,Arial,sans-serif", _.textBaseline = "top", _.fillStyle = n, _.fillRect(0, 0, s, l), _.fillStyle = t, _.fillText(e, u, c), _.fillRect(d, f, h, p), _.fillStyle = n, _.globalAlpha = .9, _.fillRect(d, f, h, p), {
    dom: m,
    update: function (l, v) {
      i = Math.min(i, l), o = Math.max(o, l), _.fillStyle = n, _.globalAlpha = 1, _.fillRect(0, 0, s, f), _.fillStyle = t, _.fillText(a(l) + " " + e + " (" + a(i) + "-" + a(o) + ")", u, c), _.drawImage(m, d + r, f, h - r, p, d, f, h - r, p), _.fillRect(d + h - r, f, r, p), _.fillStyle = n, _.globalAlpha = .9, _.fillRect(d + h - r, f, r, a((1 - l / v) * p))
    }
  }
};
const zt = Array.prototype.forEach,
  Ft = Array.prototype.slice,
  Ut = {
    BREAK: {},
    extend: function (e) {
      return this.each(Ft.call(arguments, 1), (function (t) {
        (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
          this.isUndefined(t[n]) || (e[n] = t[n])
        }.bind(this))
      }), this), e
    },
    defaults: function (e) {
      return this.each(Ft.call(arguments, 1), (function (t) {
        (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
          this.isUndefined(e[n]) && (e[n] = t[n])
        }.bind(this))
      }), this), e
    },
    compose: function () {
      const e = Ft.call(arguments);
      return function () {
        let t = Ft.call(arguments);
        for (let n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
        return t[0]
      }
    },
    each: function (e, t, n) {
      if (e)
        if (zt && e.forEach && e.forEach === zt) e.forEach(t, n);
        else if (e.length === e.length + 0) {
        let i, o;
        for (i = 0, o = e.length; i < o; i++)
          if (i in e && t.call(n, e[i], i) === this.BREAK) return
      } else
        for (const i in e)
          if (t.call(n, e[i], i) === this.BREAK) return
    },
    defer: function (e) {
      setTimeout(e, 0)
    },
    debounce: function (e, t, n) {
      let i;
      return function () {
        const o = this,
          a = arguments;

        function r() {
          i = null, n || e.apply(o, a)
        }
        const s = n || !i;
        clearTimeout(i), i = setTimeout(r, t), s && e.apply(o, a)
      }
    },
    toArray: function (e) {
      return e.toArray ? e.toArray() : Ft.call(e)
    },
    isUndefined: function (e) {
      return void 0 === e
    },
    isNull: function (e) {
      return null === e
    },
    isNaN: function (e) {
      return isNaN(e)
    },
    isArray: Array.isArray || function (e) {
      return e.constructor === Array
    },
    isObject: function (e) {
      return e === Object(e)
    },
    isNumber: function (e) {
      return e === e + 0
    },
    isString: function (e) {
      return e === e + ""
    },
    isBoolean: function (e) {
      return !1 === e || !0 === e
    },
    isFunction: function (e) {
      return e instanceof Function
    }
  },
  kt = [{
    litmus: Ut.isString,
    conversions: {
      THREE_CHAR_HEX: {
        read: function (e) {
          const t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
          return null !== t && {
            space: "HEX",
            hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0)
          }
        },
        write: Dt
      },
      SIX_CHAR_HEX: {
        read: function (e) {
          const t = e.match(/^#([A-F0-9]{6})$/i);
          return null !== t && {
            space: "HEX",
            hex: parseInt("0x" + t[1].toString(), 0)
          }
        },
        write: Dt
      },
      CSS_RGB: {
        read: function (e) {
          const t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
          return null !== t && {
            space: "RGB",
            r: parseFloat(t[1]),
            g: parseFloat(t[2]),
            b: parseFloat(t[3])
          }
        },
        write: Dt
      },
      CSS_RGBA: {
        read: function (e) {
          const t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
          return null !== t && {
            space: "RGB",
            r: parseFloat(t[1]),
            g: parseFloat(t[2]),
            b: parseFloat(t[3]),
            a: parseFloat(t[4])
          }
        },
        write: Dt
      }
    }
  }, {
    litmus: Ut.isNumber,
    conversions: {
      HEX: {
        read: function (e) {
          return {
            space: "HEX",
            hex: e,
            conversionName: "HEX"
          }
        },
        write: function (e) {
          return e.hex
        }
      }
    }
  }, {
    litmus: Ut.isArray,
    conversions: {
      RGB_ARRAY: {
        read: function (e) {
          return 3 === e.length && {
            space: "RGB",
            r: e[0],
            g: e[1],
            b: e[2]
          }
        },
        write: function (e) {
          return [e.r, e.g, e.b]
        }
      },
      RGBA_ARRAY: {
        read: function (e) {
          return 4 === e.length && {
            space: "RGB",
            r: e[0],
            g: e[1],
            b: e[2],
            a: e[3]
          }
        },
        write: function (e) {
          return [e.r, e.g, e.b, e.a]
        }
      }
    }
  }, {
    litmus: Ut.isObject,
    conversions: {
      RGBA_OBJ: {
        read: function (e) {
          return !!(Ut.isNumber(e.r) && Ut.isNumber(e.g) && Ut.isNumber(e.b) && Ut.isNumber(e.a)) && {
            space: "RGB",
            r: e.r,
            g: e.g,
            b: e.b,
            a: e.a
          }
        },
        write: function (e) {
          return {
            r: e.r,
            g: e.g,
            b: e.b,
            a: e.a
          }
        }
      },
      RGB_OBJ: {
        read: function (e) {
          return !!(Ut.isNumber(e.r) && Ut.isNumber(e.g) && Ut.isNumber(e.b)) && {
            space: "RGB",
            r: e.r,
            g: e.g,
            b: e.b
          }
        },
        write: function (e) {
          return {
            r: e.r,
            g: e.g,
            b: e.b
          }
        }
      },
      HSVA_OBJ: {
        read: function (e) {
          return !!(Ut.isNumber(e.h) && Ut.isNumber(e.s) && Ut.isNumber(e.v) && Ut.isNumber(e.a)) && {
            space: "HSV",
            h: e.h,
            s: e.s,
            v: e.v,
            a: e.a
          }
        },
        write: function (e) {
          return {
            h: e.h,
            s: e.s,
            v: e.v,
            a: e.a
          }
        }
      },
      HSV_OBJ: {
        read: function (e) {
          return !!(Ut.isNumber(e.h) && Ut.isNumber(e.s) && Ut.isNumber(e.v)) && {
            space: "HSV",
            h: e.h,
            s: e.s,
            v: e.v
          }
        },
        write: function (e) {
          return {
            h: e.h,
            s: e.s,
            v: e.v
          }
        }
      }
    }
  }];
let Ht, Jt;
const Vt = function () {
  Jt = !1;
  const e = arguments.length > 1 ? Ut.toArray(arguments) : arguments[0];
  return Ut.each(kt, (function (t) {
    if (t.litmus(e)) return Ut.each(t.conversions, (function (t, n) {
      if (Ht = t.read(e), !1 === Jt && !1 !== Ht) return Jt = Ht, Ht.conversionName = n, Ht.conversion = t, Ut.BREAK
    })), Ut.BREAK
  })), Jt
};
let jt;
const Bt = {
  hsv_to_rgb: function (e, t, n) {
    const i = Math.floor(e / 60) % 6,
      o = e / 60 - Math.floor(e / 60),
      a = n * (1 - t),
      r = n * (1 - o * t),
      s = n * (1 - (1 - o) * t),
      l = [
        [n, s, a],
        [r, n, a],
        [a, n, s],
        [a, r, n],
        [s, a, n],
        [n, a, r]
      ][i];
    return {
      r: 255 * l[0],
      g: 255 * l[1],
      b: 255 * l[2]
    }
  },
  rgb_to_hsv: function (e, t, n) {
    const i = Math.min(e, t, n),
      o = Math.max(e, t, n),
      a = o - i;
    let r, s;
    return 0 === o ? {
      h: NaN,
      s: 0,
      v: 0
    } : (r = e === o ? (t - n) / a : t === o ? 2 + (n - e) / a : 4 + (e - t) / a, (r /= 6) < 0 && (r += 1), {
      h: 360 * r,
      s: s = a / o,
      v: o / 255
    })
  },
  rgb_to_hex: function (e, t, n) {
    let i = this.hex_with_component(0, 2, e);
    return i = this.hex_with_component(i, 1, t), i = this.hex_with_component(i, 0, n)
  },
  component_from_hex: function (e, t) {
    return e >> 8 * t & 255
  },
  hex_with_component: function (e, t, n) {
    return n << (jt = 8 * t) | e & ~(255 << jt)
  }
};
let Xt = !1;
class Gt {
  constructor() {
    if (Xt || (Xt = !0, Wt(Gt.prototype, "r", 2), Wt(Gt.prototype, "g", 1), Wt(Gt.prototype, "b", 0), Zt(Gt.prototype, "h"), Zt(Gt.prototype, "s"), Zt(Gt.prototype, "v"), Object.defineProperty(Gt.prototype, "a", {
        get: function () {
          return this.__state.a
        },
        set: function (e) {
          this.__state.a = e
        }
      }), Object.defineProperty(Gt.prototype, "hex", {
        get: function () {
          return "HEX" !== this.__state.space && (this.__state.hex = Bt.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex
        },
        set: function (e) {
          this.__state.space = "HEX", this.__state.hex = e
        }
      })), this.__state = Vt.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");
    this.__state.a = this.__state.a || 1
  }
  toString() {
    return Dt(this)
  }
  toHexString() {
    return Dt(this, !0)
  }
  toOriginal() {
    return this.__state.conversion.write(this)
  }
}

function Wt(e, t, n) {
  Object.defineProperty(e, t, {
    get: function () {
      return "RGB" === this.__state.space ? this.__state[t] : (Gt.recalculateRGB(this, t, n), this.__state[t])
    },
    set: function (e) {
      "RGB" !== this.__state.space && (Gt.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
    }
  })
}

function Zt(e, t) {
  Object.defineProperty(e, t, {
    get: function () {
      return "HSV" === this.__state.space ? this.__state[t] : (Gt.recalculateHSV(this), this.__state[t])
    },
    set: function (e) {
      "HSV" !== this.__state.space && (Gt.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e
    }
  })
}
Gt.recalculateRGB = function (e, t, n) {
  if ("HEX" === e.__state.space) e.__state[t] = Bt.component_from_hex(e.__state.hex, n);
  else {
    if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");
    Ut.extend(e.__state, Bt.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
  }
}, Gt.recalculateHSV = function (e) {
  const t = Bt.rgb_to_hsv(e.r, e.g, e.b);
  Ut.extend(e.__state, {
    s: t.s,
    v: t.v
  }), Ut.isNaN(t.h) ? Ut.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h
}, Gt.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
class qt {
  constructor(e, t) {
    this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0
  }
  onChange(e) {
    return this.__onChange = e, this
  }
  onFinishChange(e) {
    return this.__onFinishChange = e, this
  }
  setValue(e) {
    return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
  }
  getValue() {
    return this.object[this.property]
  }
  updateDisplay() {
    return this
  }
  isModified() {
    return this.initialValue !== this.getValue()
  }
}
const Kt = {
    HTMLEvents: ["change"],
    MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
    KeyboardEvents: ["keydown"]
  },
  Yt = {},
  Qt = /(\d+(\.\d+)?)px/;

function $t(e) {
  if ("0" === e || Ut.isUndefined(e)) return 0;
  const t = e.match(Qt);
  return Ut.isNull(t) ? 0 : parseFloat(t[1])
}
const en = {
  init: function () {
    Ut.each(Kt, (function (e, t) {
      Ut.each(e, (function (e) {
        Yt[e] = t
      }))
    }))
  },
  makeSelectable: function (e, t) {
    void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () {
      return !1
    } : function () {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
  },
  makeFullscreen: function (e, t, n) {
    let i = n,
      o = t;
    Ut.isUndefined(o) && (o = !0), Ut.isUndefined(i) && (i = !0), e.style.position = "absolute", o && (e.style.left = 0, e.style.right = 0), i && (e.style.top = 0, e.style.bottom = 0)
  },
  fakeEvent: function (e, t, n, i) {
    const o = n || {},
      a = Yt[t];
    if (!a) throw new Error("Event type " + t + " not supported.");
    const r = document.createEvent(a);
    switch (a) {
      case "MouseEvents": {
        const e = o.x || o.clientX || 0,
          n = o.y || o.clientY || 0;
        r.initMouseEvent(t, o.bubbles || !1, o.cancelable || !0, window, o.clickCount || 1, 0, 0, e, n, !1, !1, !1, !1, 0, null);
        break
      }
      case "KeyboardEvents": {
        const e = r.initKeyboardEvent || r.initKeyEvent;
        Ut.defaults(o, {
          cancelable: !0,
          ctrlKey: !1,
          altKey: !1,
          shiftKey: !1,
          metaKey: !1,
          keyCode: void 0,
          charCode: void 0
        }), e(t, o.bubbles || !1, o.cancelable, window, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.keyCode, o.charCode);
        break
      }
      default:
        r.initEvent(t, o.bubbles || !1, o.cancelable || !0)
    }
    Ut.defaults(r, i), e.dispatchEvent(r)
  },
  bind: function (e, t, n, i) {
    const o = i || {
      passive: !1
    };
    return e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent && e.attachEvent("on" + t, n), en
  },
  unbind: function (e, t, n, i) {
    const o = i || !1;
    return e.removeEventListener ? e.removeEventListener(t, n, o) : e.detachEvent && e.detachEvent("on" + t, n), en
  },
  addClass: function (e, t) {
    if (void 0 === e.className) e.className = t;
    else if (e.className !== t) {
      const n = e.className.split(/ +/); - 1 === n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
    }
    return en
  },
  removeClass: function (e, t) {
    if (t)
      if (e.className === t) e.removeAttribute("class");
      else {
        const n = e.className.split(/ +/),
          i = n.indexOf(t); - 1 !== i && (n.splice(i, 1), e.className = n.join(" "))
      }
    else e.className = void 0;
    return en
  },
  hasClass: function (e, t) {
    return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
  },
  getWidth: function (e) {
    const t = getComputedStyle(e);
    return $t(t["border-left-width"]) + $t(t["border-right-width"]) + $t(t["padding-left"]) + $t(t["padding-right"]) + $t(t.width)
  },
  getHeight: function (e) {
    const t = getComputedStyle(e);
    return $t(t["border-top-width"]) + $t(t["border-bottom-width"]) + $t(t["padding-top"]) + $t(t["padding-bottom"]) + $t(t.height)
  },
  getOffset: function (e) {
    let t = e;
    const n = {
      left: 0,
      top: 0
    };
    if (t.offsetParent)
      do {
        n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent
      } while (t);
    return n
  },
  isActive: function (e) {
    return e === document.activeElement && (e.type || e.href)
  }
};
class tn extends qt {
  constructor(e, t) {
    super(e, t);
    const n = this;
    this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), en.bind(this.__checkbox, "change", (function () {
      n.setValue(!n.__prev)
    }), !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
  }
  setValue(e) {
    const t = super.setValue(e);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), t
  }
  updateDisplay() {
    return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), super.updateDisplay()
  }
}
class nn extends qt {
  constructor(e, t, n) {
    super(e, t);
    let i = n;
    const o = this;
    if (this.__select = document.createElement("select"), Ut.isArray(i)) {
      const e = {};
      Ut.each(i, (function (t) {
        e[t] = t
      })), i = e
    }
    Ut.each(i, (function (e, t) {
      const n = document.createElement("option");
      n.innerHTML = t, n.setAttribute("value", e), o.__select.appendChild(n)
    })), this.updateDisplay(), en.bind(this.__select, "change", (function () {
      const e = this.options[this.selectedIndex].value;
      o.setValue(e)
    })), this.domElement.appendChild(this.__select)
  }
  setValue(e) {
    const t = super.setValue(e);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), t
  }
  updateDisplay() {
    return en.isActive(this.__select) ? this : (this.__select.value = this.getValue(), super.updateDisplay())
  }
}
class on extends qt {
  constructor(e, t) {
    super(e, t);
    const n = this;

    function i() {
      n.setValue(n.__input.value)
    }
    this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), en.bind(this.__input, "keyup", i), en.bind(this.__input, "change", i), en.bind(this.__input, "blur", (function () {
      n.__onFinishChange && n.__onFinishChange.call(n, n.getValue())
    })), en.bind(this.__input, "keydown", (function (e) {
      13 === e.keyCode && this.blur()
    })), this.updateDisplay(), this.domElement.appendChild(this.__input)
  }
  updateDisplay() {
    return en.isActive(this.__input) || (this.__input.value = this.getValue()), super.updateDisplay()
  }
}

function an(e) {
  const t = e.toString();
  return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
}
class rn extends qt {
  constructor(e, t, n) {
    super(e, t);
    const i = n || {};
    this.__min = i.min, this.__max = i.max, this.__step = i.step, Ut.isUndefined(this.__step) ? 0 === this.initialValue ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(this.initialValue)) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = an(this.__impliedStep)
  }
  setValue(e) {
    let t = e;
    return void 0 !== this.__min && t < this.__min ? t = this.__min : void 0 !== this.__max && t > this.__max && (t = this.__max), void 0 !== this.__step && t % this.__step != 0 && (t = Math.round(t / this.__step) * this.__step), super.setValue(t)
  }
  min(e) {
    return this.__min = e, this
  }
  max(e) {
    return this.__max = e, this
  }
  step(e) {
    return this.__step = e, this.__impliedStep = e, this.__precision = an(e), this
  }
}
class sn extends rn {
  constructor(e, t, n) {
    super(e, t, n), this.__truncationSuspended = !1;
    const i = this;
    let o;

    function a() {
      i.__onFinishChange && i.__onFinishChange.call(i, i.getValue())
    }

    function r(e) {
      const t = o - e.clientY;
      i.setValue(i.getValue() + t * i.__impliedStep), o = e.clientY
    }

    function s() {
      en.unbind(window, "mousemove", r), en.unbind(window, "mouseup", s), a()
    }
    this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), en.bind(this.__input, "change", (function () {
      const e = parseFloat(i.__input.value);
      Ut.isNaN(e) || i.setValue(e)
    })), en.bind(this.__input, "blur", (function () {
      a()
    })), en.bind(this.__input, "mousedown", (function (e) {
      en.bind(window, "mousemove", r), en.bind(window, "mouseup", s), o = e.clientY
    })), en.bind(this.__input, "keydown", (function (e) {
      13 === e.keyCode && (i.__truncationSuspended = !0, this.blur(), i.__truncationSuspended = !1, a())
    })), this.updateDisplay(), this.domElement.appendChild(this.__input)
  }
  updateDisplay() {
    return this.__input.value = this.__truncationSuspended ? this.getValue() : function (e, t) {
      const n = Math.pow(10, t);
      return Math.round(e * n) / n
    }(this.getValue(), this.__precision), super.updateDisplay()
  }
}

function ln(e, t, n, i, o) {
  return i + (e - t) / (n - t) * (o - i)
}
class un extends rn {
  constructor(e, t, n, i, o) {
    super(e, t, {
      min: n,
      max: i,
      step: o
    });
    const a = this;

    function r(e) {
      e.preventDefault();
      const t = a.__background.getBoundingClientRect();
      return a.setValue(ln(e.clientX, t.left, t.right, a.__min, a.__max)), !1
    }

    function s() {
      en.unbind(window, "mousemove", r), en.unbind(window, "mouseup", s), a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
    }

    function l(e) {
      const t = e.touches[0].clientX,
        n = a.__background.getBoundingClientRect();
      a.setValue(ln(t, n.left, n.right, a.__min, a.__max))
    }

    function u() {
      en.unbind(window, "touchmove", l), en.unbind(window, "touchend", u), a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
    }
    this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), en.bind(this.__background, "mousedown", (function (e) {
      document.activeElement.blur(), en.bind(window, "mousemove", r), en.bind(window, "mouseup", s), r(e)
    })), en.bind(this.__background, "touchstart", (function (e) {
      if (1 !== e.touches.length) return;
      en.bind(window, "touchmove", l), en.bind(window, "touchend", u), l(e)
    })), en.addClass(this.__background, "slider"), en.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
  }
  updateDisplay() {
    const e = (this.getValue() - this.__min) / (this.__max - this.__min);
    return this.__foreground.style.width = 100 * e + "%", super.updateDisplay()
  }
}
class cn extends qt {
  constructor(e, t, n) {
    super(e, t);
    const i = this;
    this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === n ? "Fire" : n, en.bind(this.__button, "click", (function (e) {
      return e.preventDefault(), i.fire(), !1
    })), en.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
  }
  fire() {
    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
  }
}
class dn extends qt {
  constructor(e, t) {
    super(e, t), this.__color = new Gt(this.getValue()), this.__temp = new Gt(0);
    const n = this;
    this.domElement = document.createElement("div"), en.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", en.bind(this.__input, "keydown", (function (e) {
      13 === e.keyCode && u.call(this)
    })), en.bind(this.__input, "blur", u), en.bind(this.__selector, "mousedown", (function () {
      en.addClass(this, "drag").bind(window, "mouseup", (function () {
        en.removeClass(n.__selector, "drag")
      }))
    })), en.bind(this.__selector, "touchstart", (function () {
      en.addClass(this, "drag").bind(window, "touchend", (function () {
        en.removeClass(n.__selector, "drag")
      }))
    }));
    const i = document.createElement("div");
    var o;

    function a(e) {
      d(e), en.bind(window, "mousemove", d), en.bind(window, "touchmove", d), en.bind(window, "mouseup", s), en.bind(window, "touchend", s)
    }

    function r(e) {
      f(e), en.bind(window, "mousemove", f), en.bind(window, "touchmove", f), en.bind(window, "mouseup", l), en.bind(window, "touchend", l)
    }

    function s() {
      en.unbind(window, "mousemove", d), en.unbind(window, "touchmove", d), en.unbind(window, "mouseup", s), en.unbind(window, "touchend", s), c()
    }

    function l() {
      en.unbind(window, "mousemove", f), en.unbind(window, "touchmove", f), en.unbind(window, "mouseup", l), en.unbind(window, "touchend", l), c()
    }

    function u() {
      const e = Vt(this.value);
      !1 !== e ? (n.__color.__state = e, n.setValue(n.__color.toOriginal())) : this.value = n.__color.toString()
    }

    function c() {
      n.__onFinishChange && n.__onFinishChange.call(n, n.__color.toOriginal())
    }

    function d(e) {
      -1 === e.type.indexOf("touch") && e.preventDefault();
      const t = n.__saturation_field.getBoundingClientRect(),
        {
          clientX: i,
          clientY: o
        } = e.touches && e.touches[0] || e;
      let a = (i - t.left) / (t.right - t.left),
        r = 1 - (o - t.top) / (t.bottom - t.top);
      return r > 1 ? r = 1 : r < 0 && (r = 0), a > 1 ? a = 1 : a < 0 && (a = 0), n.__color.v = r, n.__color.s = a, n.setValue(n.__color.toOriginal()), !1
    }

    function f(e) {
      -1 === e.type.indexOf("touch") && e.preventDefault();
      const t = n.__hue_field.getBoundingClientRect(),
        {
          clientY: i
        } = e.touches && e.touches[0] || e;
      let o = 1 - (i - t.top) / (t.bottom - t.top);
      return o > 1 ? o = 1 : o < 0 && (o = 0), n.__color.h = 360 * o, n.setValue(n.__color.toOriginal()), !1
    }
    Ut.extend(this.__selector.style, {
      width: "122px",
      height: "102px",
      padding: "3px",
      backgroundColor: "#222",
      boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
    }), Ut.extend(this.__field_knob.style, {
      position: "absolute",
      width: "12px",
      height: "12px",
      border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
      boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
      borderRadius: "12px",
      zIndex: 1
    }), Ut.extend(this.__hue_knob.style, {
      position: "absolute",
      width: "15px",
      height: "2px",
      borderRight: "4px solid #fff",
      zIndex: 1
    }), Ut.extend(this.__saturation_field.style, {
      width: "100px",
      height: "100px",
      border: "1px solid #555",
      marginRight: "3px",
      display: "inline-block",
      cursor: "pointer"
    }), Ut.extend(i.style, {
      width: "100%",
      height: "100%",
      background: "none"
    }), hn(i, "top", "rgba(0,0,0,0)", "#000"), Ut.extend(this.__hue_field.style, {
      width: "15px",
      height: "100px",
      border: "1px solid #555",
      cursor: "ns-resize",
      position: "absolute",
      top: "3px",
      right: "3px"
    }), (o = this.__hue_field).style.background = "", o.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", o.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", Ut.extend(this.__input.style, {
      outline: "none",
      textAlign: "center",
      color: "#fff",
      border: 0,
      fontWeight: "bold",
      textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
    }), en.bind(this.__saturation_field, "mousedown", a), en.bind(this.__saturation_field, "touchstart", a), en.bind(this.__field_knob, "mousedown", a), en.bind(this.__field_knob, "touchstart", a), en.bind(this.__hue_field, "mousedown", r), en.bind(this.__hue_field, "touchstart", r), this.__saturation_field.appendChild(i), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
  }
  updateDisplay() {
    const e = Vt(this.getValue());
    if (!1 !== e) {
      let t = !1;
      Ut.each(Gt.COMPONENTS, (function (n) {
        if (!Ut.isUndefined(e[n]) && !Ut.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {}
      }), this), t && Ut.extend(this.__color.__state, e)
    }
    Ut.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
    const t = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
      n = 255 - t;
    Ut.extend(this.__field_knob.style, {
      marginLeft: 100 * this.__color.s - 7 + "px",
      marginTop: 100 * (1 - this.__color.v) - 7 + "px",
      backgroundColor: this.__temp.toHexString(),
      border: this.__field_knob_border + "rgb(" + t + "," + t + "," + t + ")"
    }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, hn(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), Ut.extend(this.__input.style, {
      backgroundColor: this.__color.toHexString(),
      color: "rgb(" + t + "," + t + "," + t + ")",
      textShadow: this.__input_textShadow + "rgba(" + n + "," + n + "," + n + ",.7)"
    })
  }
}
const fn = ["-moz-", "-o-", "-webkit-", "-ms-", ""];

function hn(e, t, n, i) {
  e.style.background = "", Ut.each(fn, (function (o) {
    e.style.cssText += "background: " + o + "linear-gradient(" + t + ", " + n + " 0%, " + i + " 100%); "
  }))
}
const pn = {
    load: function (e, t) {
      const n = t || document,
        i = n.createElement("link");
      i.type = "text/css", i.rel = "stylesheet", i.href = e, n.getElementsByTagName("head")[0].appendChild(i)
    },
    inject: function (e, t) {
      const n = t || document,
        i = document.createElement("style");
      i.type = "text/css", i.innerHTML = e;
      const o = n.getElementsByTagName("head")[0];
      try {
        o.appendChild(i)
      } catch (e) {}
    }
  },
  mn = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>',
  _n = function (e, t) {
    const n = e[t];
    return Ut.isArray(arguments[2]) || Ut.isObject(arguments[2]) ? new nn(e, t, arguments[2]) : Ut.isNumber(n) ? Ut.isNumber(arguments[2]) && Ut.isNumber(arguments[3]) ? Ut.isNumber(arguments[4]) ? new un(e, t, arguments[2], arguments[3], arguments[4]) : new un(e, t, arguments[2], arguments[3]) : Ut.isNumber(arguments[4]) ? new sn(e, t, {
      min: arguments[2],
      max: arguments[3],
      step: arguments[4]
    }) : new sn(e, t, {
      min: arguments[2],
      max: arguments[3]
    }) : Ut.isString(n) ? new on(e, t) : Ut.isFunction(n) ? new cn(e, t, "") : Ut.isBoolean(n) ? new tn(e, t) : null
  };
var vn = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
  setTimeout(e, 1e3 / 60)
};
class gn {
  constructor() {
    this.backgroundElement = document.createElement("div"), Ut.extend(this.backgroundElement.style, {
      backgroundColor: "rgba(0,0,0,0.8)",
      top: 0,
      left: 0,
      display: "none",
      zIndex: "1000",
      opacity: 0,
      WebkitTransition: "opacity 0.2s linear",
      transition: "opacity 0.2s linear"
    }), en.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), Ut.extend(this.domElement.style, {
      position: "fixed",
      display: "none",
      zIndex: "1001",
      opacity: 0,
      WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
      transition: "transform 0.2s ease-out, opacity 0.2s linear"
    }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
    const e = this;
    en.bind(this.backgroundElement, "click", (function () {
      e.hide()
    }))
  }
  show() {
    const e = this;
    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), Ut.defer((function () {
      e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
    }))
  }
  hide() {
    const e = this,
      t = function () {
        e.domElement.style.display = "none", e.backgroundElement.style.display = "none", en.unbind(e.domElement, "webkitTransitionEnd", t), en.unbind(e.domElement, "transitionend", t), en.unbind(e.domElement, "oTransitionEnd", t)
      };
    en.bind(this.domElement, "webkitTransitionEnd", t), en.bind(this.domElement, "transitionend", t), en.bind(this.domElement, "oTransitionEnd", t), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
  }
  layout() {
    this.domElement.style.left = window.innerWidth / 2 - en.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - en.getHeight(this.domElement) / 2 + "px"
  }
}
const bn = "dg",
  Tn = 20,
  xn = "Default";
let Sn, wn, yn = !0,
  Pn = !1;
const Mn = [];
class On {
  constructor(e) {
    ! function () {
      if (Nn) return;
      Nn = !0, en.init();
      var e = function (e) {
        if (e && "undefined" != typeof window) {
          var t = document.createElement("style");
          return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e
        }
      }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");
      pn.inject(e), en.bind(window, "keydown", On._keydownHandler, !1), Ut.extend(On.prototype, {
        add: function (e, t) {
          return Ln(this, e, t, {
            factoryArgs: Array.prototype.slice.call(arguments, 2)
          })
        },
        addColor: function (e, t) {
          return Ln(this, e, t, {
            color: !0
          })
        },
        remove: function (e) {
          this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
          const t = this;
          Ut.defer((function () {
            t.onResize()
          }))
        },
        destroy: function () {
          if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
          this.autoPlace && wn.removeChild(this.domElement);
          const e = this;
          Ut.each(this.__folders, (function (t) {
            e.removeFolder(t)
          })), en.unbind(window, "keydown", On._keydownHandler, !1), An(this)
        },
        addFolder: function (e) {
          if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
          const t = {
            name: e,
            parent: this
          };
          t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
          const n = new On(t);
          this.__folders[e] = n;
          const i = En(this, n.domElement);
          return en.addClass(i, "folder"), n
        },
        removeFolder: function (e) {
          this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], An(e);
          const t = this;
          Ut.each(e.__folders, (function (t) {
            e.removeFolder(t)
          })), Ut.defer((function () {
            t.onResize()
          }))
        },
        open: function () {
          this.closed = !1
        },
        close: function () {
          this.closed = !0
        },
        hide: function () {
          this.domElement.style.display = "none"
        },
        show: function () {
          this.domElement.style.display = ""
        },
        onResize: function () {
          const e = this.getRoot();
          if (e.scrollable) {
            const t = en.getOffset(e.__ul).top;
            let n = 0;
            Ut.each(e.__ul.childNodes, (function (t) {
              e.autoPlace && t === e.__save_row || (n += en.getHeight(t))
            })), window.innerHeight - t - Tn < n ? (en.addClass(e.domElement, On.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - Tn + "px") : (en.removeClass(e.domElement, On.CLASS_TOO_TALL), e.__ul.style.height = "auto")
          }
          e.__resize_handle && Ut.defer((function () {
            e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
          })), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
        },
        onResizeDebounced: Ut.debounce((function () {
          this.onResize()
        }), 50),
        remember: function () {
          if (Ut.isUndefined(Sn) && ((Sn = new gn).domElement.innerHTML = mn), this.parent) throw new Error("You can only call remember on a top level GUI.");
          const e = this;
          Ut.each(Array.prototype.slice.call(arguments), (function (t) {
            0 === e.__rememberedObjects.length && Fn(e), -1 === e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t)
          })), this.autoPlace && Un(this, this.width)
        },
        getRoot: function () {
          let e = this;
          for (; e.parent;) e = e.parent;
          return e
        },
        getSaveObject: function () {
          const e = this.load;
          return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = kn(this)), e.folders = {}, Ut.each(this.__folders, (function (t, n) {
            e.folders[n] = t.getSaveObject()
          })), e
        },
        save: function () {
          this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = kn(this), Cn(this, !1), this.saveToLocalStorageIfPossible()
        },
        saveAs: function (e) {
          this.load.remembered || (this.load.remembered = {}, this.load.remembered[xn] = kn(this, !0)), this.load.remembered[e] = kn(this), this.preset = e, Dn(this, e, !0), this.saveToLocalStorageIfPossible()
        },
        revert: function (e) {
          Ut.each(this.__controllers, (function (t) {
            this.getRoot().load.remembered ? Rn(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue())
          }), this), Ut.each(this.__folders, (function (e) {
            e.revert(e)
          })), e || Cn(this.getRoot(), !1)
        },
        listen: function (e) {
          const t = 0 === this.__listening.length;
          this.__listening.push(e), t && function e(t) {
            0 !== t.length && vn.call(window, (function () {
              e(t)
            }));
            Ut.each(t, (function (e) {
              e.updateDisplay()
            }))
          }(this.__listening)
        },
        updateDisplay: function () {
          Ut.each(this.__controllers, (function (e) {
            e.updateDisplay()
          })), Ut.each(this.__folders, (function (e) {
            e.updateDisplay()
          }))
        }
      })
    }();
    const t = this;
    let n = e || {};
    this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), en.addClass(this.domElement, bn), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], n = Ut.defaults(n, {
      closeOnTop: !1,
      autoPlace: !0,
      width: On.DEFAULT_WIDTH
    }), n = Ut.defaults(n, {
      resizable: n.autoPlace,
      hideable: n.autoPlace
    }), Ut.isUndefined(n.load) ? n.load = {
      preset: xn
    } : n.preset && (n.load.preset = n.preset), Ut.isUndefined(n.parent) && n.hideable && Mn.push(this), n.resizable = Ut.isUndefined(n.parent) && n.resizable, n.autoPlace && Ut.isUndefined(n.scrollable) && (n.scrollable = !0);
    let i, o, a = "true" === localStorage.getItem(In(this, "isLocal"));
    if (Object.defineProperties(this, {
        parent: {
          get: function () {
            return n.parent
          }
        },
        scrollable: {
          get: function () {
            return n.scrollable
          }
        },
        autoPlace: {
          get: function () {
            return n.autoPlace
          }
        },
        closeOnTop: {
          get: function () {
            return n.closeOnTop
          }
        },
        preset: {
          get: function () {
            return t.parent ? t.getRoot().preset : n.load.preset
          },
          set: function (e) {
            t.parent ? t.getRoot().preset = e : n.load.preset = e,
              function (e) {
                for (let t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t)
              }(this), t.revert()
          }
        },
        width: {
          get: function () {
            return n.width
          },
          set: function (e) {
            n.width = e, Un(t, e)
          }
        },
        name: {
          get: function () {
            return n.name
          },
          set: function (e) {
            n.name = e, o && (o.innerHTML = n.name)
          }
        },
        closed: {
          get: function () {
            return n.closed
          },
          set: function (e) {
            n.closed = e, n.closed ? en.addClass(t.__ul, On.CLASS_CLOSED) : en.removeClass(t.__ul, On.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = e ? On.TEXT_OPEN : On.TEXT_CLOSED)
          }
        },
        load: {
          get: function () {
            return n.load
          }
        },
        useLocalStorage: {
          get: function () {
            return a
          },
          set: function (e) {
            a = e, e ? en.bind(window, "unload", i) : en.unbind(window, "unload", i), localStorage.setItem(In(t, "isLocal"), e)
          }
        }
      }), Ut.isUndefined(n.parent)) {
      if (this.closed = n.closed || !1, en.addClass(this.domElement, On.CLASS_MAIN), en.makeSelectable(this.domElement, !1), a) {
        t.useLocalStorage = !0;
        const e = localStorage.getItem(In(this, "gui"));
        e && (n.load = JSON.parse(e))
      }
      this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = On.TEXT_CLOSED, en.addClass(this.__closeButton, On.CLASS_CLOSE_BUTTON), n.closeOnTop ? (en.addClass(this.__closeButton, On.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (en.addClass(this.__closeButton, On.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), en.bind(this.__closeButton, "click", (function () {
        t.closed = !t.closed
      }))
    } else {
      void 0 === n.closed && (n.closed = !0);
      const e = document.createTextNode(n.name);
      en.addClass(e, "controller-name"), o = En(t, e);
      const i = function (e) {
        return e.preventDefault(), t.closed = !t.closed, !1
      };
      en.addClass(this.__ul, On.CLASS_CLOSED), en.addClass(o, "title"), en.bind(o, "click", i), n.closed || (this.closed = !1)
    }
    n.autoPlace && (Ut.isUndefined(n.parent) && (yn && (wn = document.createElement("div"), en.addClass(wn, bn), en.addClass(wn, On.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(wn), yn = !1), wn.appendChild(this.domElement), en.addClass(this.domElement, On.CLASS_AUTO_PLACE)), this.parent || Un(t, n.width)), this.__resizeHandler = function () {
      t.onResizeDebounced()
    }, en.bind(window, "resize", this.__resizeHandler), en.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), en.bind(this.__ul, "transitionend", this.__resizeHandler), en.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), n.resizable && function (e) {
      let t;

      function n(n) {
        return n.preventDefault(), e.width += t - n.clientX, e.onResize(), t = n.clientX, !1
      }

      function i() {
        en.removeClass(e.__closeButton, On.CLASS_DRAG), en.unbind(window, "mousemove", n), en.unbind(window, "mouseup", i)
      }

      function o(o) {
        return o.preventDefault(), t = o.clientX, en.addClass(e.__closeButton, On.CLASS_DRAG), en.bind(window, "mousemove", n), en.bind(window, "mouseup", i), !1
      }
      e.__resize_handle = document.createElement("div"), Ut.extend(e.__resize_handle.style, {
        width: "6px",
        marginLeft: "-3px",
        height: "200px",
        cursor: "ew-resize",
        position: "absolute"
      }), en.bind(e.__resize_handle, "mousedown", o), en.bind(e.__closeButton, "mousedown", o), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
    }(this), i = function () {
      "true" === localStorage.getItem(In(t, "isLocal")) && localStorage.setItem(In(t, "gui"), JSON.stringify(t.getSaveObject()))
    }, this.saveToLocalStorageIfPossible = i, n.parent || function () {
      const e = t.getRoot();
      e.width += 1, Ut.defer((function () {
        e.width -= 1
      }))
    }()
  }
}
On.toggleHide = function () {
  Pn = !Pn, Ut.each(Mn, (function (e) {
    e.domElement.style.display = Pn ? "none" : ""
  }))
}, On.CLASS_AUTO_PLACE = "a", On.CLASS_AUTO_PLACE_CONTAINER = "ac", On.CLASS_MAIN = "main", On.CLASS_CONTROLLER_ROW = "cr", On.CLASS_TOO_TALL = "taller-than-window", On.CLASS_CLOSED = "closed", On.CLASS_CLOSE_BUTTON = "close-button", On.CLASS_CLOSE_TOP = "close-top", On.CLASS_CLOSE_BOTTOM = "close-bottom", On.CLASS_DRAG = "drag", On.DEFAULT_WIDTH = 245, On.TEXT_CLOSED = "Close Controls", On.TEXT_OPEN = "Open Controls", On._keydownHandler = function (e) {
  "text" === document.activeElement.type || 72 !== e.which && 72 !== e.keyCode || On.toggleHide()
};
let Nn = !1;

function En(e, t, n) {
  const i = document.createElement("li");
  return t && i.appendChild(t), n ? e.__ul.insertBefore(i, n) : e.__ul.appendChild(i), e.onResize(), i
}

function An(e) {
  en.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && en.unbind(window, "unload", e.saveToLocalStorageIfPossible)
}

function Cn(e, t) {
  const n = e.__preset_select[e.__preset_select.selectedIndex];
  n.innerHTML = t ? n.value + "*" : n.value
}

function Rn(e, t) {
  const n = e.getRoot(),
    i = n.__rememberedObjects.indexOf(t.object);
  if (-1 !== i) {
    let o = n.__rememberedObjectIndecesToControllers[i];
    if (void 0 === o && (o = {}, n.__rememberedObjectIndecesToControllers[i] = o), o[t.property] = t, n.load && n.load.remembered) {
      const o = n.load.remembered;
      let a;
      if (o[e.preset]) a = o[e.preset];
      else {
        if (!o[xn]) return;
        a = o[xn]
      }
      if (a[i] && void 0 !== a[i][t.property]) {
        const e = a[i][t.property];
        t.initialValue = e, t.setValue(e)
      }
    }
  }
}

function Ln(e, t, n, i) {
  if (void 0 === t[n]) throw new Error(`Object "${t}" has no property "${n}"`);
  let o;
  if (i.color) o = new dn(t, n);
  else {
    const a = [t, n].concat(i.factoryArgs);
    o = _n.apply(e, a)
  }
  i.before instanceof qt && (i.before = i.before.__li), Rn(e, o), en.addClass(o.domElement, "c");
  const a = document.createElement("span");
  en.addClass(a, "property-name"), a.innerHTML = o.property;
  const r = document.createElement("div");
  r.appendChild(a), r.appendChild(o.domElement);
  const s = En(e, r, i.before);
  return en.addClass(s, On.CLASS_CONTROLLER_ROW), o instanceof dn ? en.addClass(s, "color") : en.addClass(s, typeof o.getValue()),
    function (e, t, n) {
      if (n.__li = t, n.__gui = e, Ut.extend(n, {
          options: function (t) {
            if (arguments.length > 1) {
              const t = n.__li.nextElementSibling;
              return n.remove(), Ln(e, n.object, n.property, {
                before: t,
                factoryArgs: [Ut.toArray(arguments)]
              })
            }
            if (Ut.isArray(t) || Ut.isObject(t)) {
              const i = n.__li.nextElementSibling;
              return n.remove(), Ln(e, n.object, n.property, {
                before: i,
                factoryArgs: [t]
              })
            }
          },
          name: function (e) {
            return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
          },
          listen: function () {
            return n.__gui.listen(n), n
          },
          remove: function () {
            return n.__gui.remove(n), n
          }
        }), n instanceof un) {
        const e = new sn(n.object, n.property, {
          min: n.__min,
          max: n.__max,
          step: n.__step
        });
        Ut.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], (function (t) {
          const i = n[t],
            o = e[t];
          n[t] = e[t] = function () {
            const t = Array.prototype.slice.call(arguments);
            return o.apply(e, t), i.apply(n, t)
          }
        })), en.addClass(t, "has-slider"), n.domElement.insertBefore(e.domElement, n.domElement.firstElementChild)
      } else if (n instanceof sn) {
        const t = function (t) {
          if (Ut.isNumber(n.__min) && Ut.isNumber(n.__max)) {
            const t = n.__li.firstElementChild.firstElementChild.innerHTML,
              i = n.__gui.__listening.indexOf(n) > -1;
            n.remove();
            const o = Ln(e, n.object, n.property, {
              before: n.__li.nextElementSibling,
              factoryArgs: [n.__min, n.__max, n.__step]
            });
            return o.name(t), i && o.listen(), o
          }
          return t
        };
        n.min = Ut.compose(t, n.min), n.max = Ut.compose(t, n.max)
      } else n instanceof tn ? (en.bind(t, "click", (function () {
        en.fakeEvent(n.__checkbox, "click")
      })), en.bind(n.__checkbox, "click", (function (e) {
        e.stopPropagation()
      }))) : n instanceof cn ? (en.bind(t, "click", (function () {
        en.fakeEvent(n.__button, "click")
      })), en.bind(t, "mouseover", (function () {
        en.addClass(n.__button, "hover")
      })), en.bind(t, "mouseout", (function () {
        en.removeClass(n.__button, "hover")
      }))) : n instanceof dn && (en.addClass(t, "color"), n.updateDisplay = Ut.compose((function (e) {
        return t.style.borderLeftColor = n.__color.toString(), e
      }), n.updateDisplay), n.updateDisplay());
      n.setValue = Ut.compose((function (t) {
        return e.getRoot().__preset_select && n.isModified() && Cn(e.getRoot(), !0), t
      }), n.setValue)
    }(e, s, o), e.__controllers.push(o), o
}

function In(e, t) {
  return document.location.href + "." + t
}

function Dn(e, t, n) {
  const i = document.createElement("option");
  i.innerHTML = t, i.value = t, e.__preset_select.appendChild(i), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
}

function zn(e, t) {
  t.style.display = e.useLocalStorage ? "block" : "none"
}

function Fn(e) {
  const t = e.__save_row = document.createElement("li");
  en.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), en.addClass(t, "save-row");
  const n = document.createElement("span");
  n.innerHTML = "&nbsp;", en.addClass(n, "button gears");
  const i = document.createElement("span");
  i.innerHTML = "Save", en.addClass(i, "button"), en.addClass(i, "save");
  const o = document.createElement("span");
  o.innerHTML = "New", en.addClass(o, "button"), en.addClass(o, "save-as");
  const a = document.createElement("span");
  a.innerHTML = "Revert", en.addClass(a, "button"), en.addClass(a, "revert");
  const r = e.__preset_select = document.createElement("select");
  e.load && e.load.remembered ? Ut.each(e.load.remembered, (function (t, n) {
    Dn(e, n, n === e.preset)
  })) : Dn(e, xn, !1), en.bind(r, "change", (function () {
    for (let t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
    e.preset = this.value
  })), t.appendChild(r), t.appendChild(n), t.appendChild(i), t.appendChild(o), t.appendChild(a); {
    const t = document.getElementById("dg-local-explain"),
      n = document.getElementById("dg-local-storage");
    document.getElementById("dg-save-locally").style.display = "block", "true" === localStorage.getItem(In(0, "isLocal")) && n.setAttribute("checked", "checked"), zn(e, t), en.bind(n, "change", (function () {
      e.useLocalStorage = !e.useLocalStorage, zn(e, t)
    }))
  }
  const s = document.getElementById("dg-new-constructor");
  en.bind(s, "keydown", (function (e) {
    !e.metaKey || 67 !== e.which && 67 !== e.keyCode || Sn.hide()
  })), en.bind(n, "click", (function () {
    s.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), Sn.show(), s.focus(), s.select()
  })), en.bind(i, "click", (function () {
    e.save()
  })), en.bind(o, "click", (function () {
    const t = prompt("Enter a new preset name.");
    t && e.saveAs(t)
  })), en.bind(a, "click", (function () {
    e.revert()
  }))
}

function Un(e, t) {
  e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
}

function kn(e, t) {
  const n = {};
  return Ut.each(e.__rememberedObjects, (function (i, o) {
    const a = {},
      r = e.__rememberedObjectIndecesToControllers[o];
    Ut.each(r, (function (e, n) {
      a[n] = t ? e.initialValue : e.getValue()
    })), n[o] = a
  })), n
}
const Hn = On;
var Jn, Vn = "l=1.0\ntype=1\ngis=0\n3d=2\nstart=2020-07-24\nend=2020-11-01\nnote=This license applies to the evaluation version of TWaver. The License is limited to noncommercial use. Noncommercial use relates only to educational, research, personal or evaluation purposes. Any other use is commercial use. You may not use the Software in connection with any business activities.And You are not permitted to modify the software or attempt to decipher, decompile, disassemble or reverse engineer this Software.\nsignature=498fff01bfe5917d2ea0802a6137313fe74ea9382cd772aefca9c5aef737db712538a92e60d5d914db121522cd5a8c38455b42eae6230c24ba4f24d6709db3283d8d4f1d561e49bd2be7c1b3b51238c4388ed3570e7eacbd6f6f6286cc3e7edd94bfcbe90a703913ee18e18130a6209654a11fde1c4f7fdc83131b38fb171ea257fb60a4a498c205ba2632fc136c972d0798659e516979ae6e4c77d3b355983046caffe0c738993beff835ae395c32d8fb8fadd3f7c0ea8408eafb7f2620871d4e48b327e06f4b294770d4f8e8920eab9e6cbf823098ce07930cf9cb46fec888db6bc47c21186fdc9c52361888565be3ff1b1226c6c196d0307a61d81764a6972d265d847dd5bfa5a6ec700b598acfcdbd3efdacb5f2cdb1bfafb0af2d9a3c0053a6579bc6290a38e0ebbbb99fb19169c38da059fb84f2b7a60c651a2a3d1972a5d3f10dc5a92e7178ef6b5ea5690f8cbfe1b8ef4cc341b8a54a0b3e6bfbbae348495f1713e88fb3bffcbc106861e7ecdab642b81e719b52787158fd04b6d2030cab292dc3eeeeba4f920c10a089695d463a11ef089cb56d9a7a304bbd8831df99b550e3eb5968c975d31164cc316d09d22648dcef19f5585f323156534ca3330ccdc2381d4949448be08e535da77928a0cfab7e52a95f6fd7a965e95ae1f00305589c7b625e48b98aadf7529c87dbfae4d95f48e142f630a3d1f6c183f4dd351d7092226196bc726669bf339a376394840a0852826914a06338ad52d9b47169e8be56a5ed7b301d656953183ec9904e5474a351fc72b025843a1ee74886229db9735e73a3ffafa702374cfe5607b85316576217e2b277f8b7666961370aaa297cbd286ba21784a9fd7e59b12aeaf9882b04541eb997af91e43c15206d9e0595";

function jn(e, t, n) {
  null != e && ("number" == typeof e ? this.fromNumber(e, t, n) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
}

function Bn() {
  return new jn(null)
}
"Microsoft Internet Explorer" == navigator.appName ? (jn.prototype.am = function (e, t, n, i, o, a) {
  for (var r = 32767 & t, s = t >> 15; --a >= 0;) {
    var l = 32767 & this[e],
      u = this[e++] >> 15,
      c = s * l + u * r;
    o = ((l = r * l + ((32767 & c) << 15) + n[i] + (1073741823 & o)) >>> 30) + (c >>> 15) + s * u + (o >>> 30), n[i++] = 1073741823 & l
  }
  return o
}, Jn = 30) : "Netscape" != navigator.appName ? (jn.prototype.am = function (e, t, n, i, o, a) {
  for (; --a >= 0;) {
    var r = t * this[e++] + n[i] + o;
    o = Math.floor(r / 67108864), n[i++] = 67108863 & r
  }
  return o
}, Jn = 26) : (jn.prototype.am = function (e, t, n, i, o, a) {
  for (var r = 16383 & t, s = t >> 14; --a >= 0;) {
    var l = 16383 & this[e],
      u = this[e++] >> 14,
      c = s * l + u * r;
    o = ((l = r * l + ((16383 & c) << 14) + n[i] + o) >> 28) + (c >> 14) + s * u, n[i++] = 268435455 & l
  }
  return o
}, Jn = 28), jn.prototype.DB = Jn, jn.prototype.DM = (1 << Jn) - 1, jn.prototype.DV = 1 << Jn;
jn.prototype.FV = Math.pow(2, 52), jn.prototype.F1 = 52 - Jn, jn.prototype.F2 = 2 * Jn - 52;
var Xn, Gn, Wn = "0123456789abcdefghijklmnopqrstuvwxyz",
  Zn = new Array;
for (Xn = "0".charCodeAt(0), Gn = 0; Gn <= 9; ++Gn) Zn[Xn++] = Gn;
for (Xn = "a".charCodeAt(0), Gn = 10; Gn < 36; ++Gn) Zn[Xn++] = Gn;
for (Xn = "A".charCodeAt(0), Gn = 10; Gn < 36; ++Gn) Zn[Xn++] = Gn;

function qn(e) {
  return Wn.charAt(e)
}

function Kn(e, t) {
  var n = Zn[e.charCodeAt(t)];
  return null == n ? -1 : n
}

function Yn(e) {
  var t = Bn();
  return t.fromInt(e), t
}

function Qn(e) {
  var t, n = 1;
  return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, n += 1), n
}

function $n(e) {
  this.m = e
}

function ei(e) {
  this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
}

function ti(e, t) {
  return e & t
}

function ni(e, t) {
  return e | t
}

function ii(e, t) {
  return e ^ t
}

function oi(e, t) {
  return e & ~t
}

function ai(e) {
  if (0 == e) return -1;
  var t = 0;
  return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8), 0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t, t
}

function ri(e) {
  for (var t = 0; 0 != e;) e &= e - 1, ++t;
  return t
}

function si() {}

function li(e) {
  return e
}

function ui(e) {
  this.r2 = Bn(), this.q3 = Bn(), jn.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e), this.m = e
}
$n.prototype.convert = function (e) {
  return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
}, $n.prototype.revert = function (e) {
  return e
}, $n.prototype.reduce = function (e) {
  e.divRemTo(this.m, null, e)
}, $n.prototype.mulTo = function (e, t, n) {
  e.multiplyTo(t, n), this.reduce(n)
}, $n.prototype.sqrTo = function (e, t) {
  e.squareTo(t), this.reduce(t)
}, ei.prototype.convert = function (e) {
  var t = Bn();
  return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(jn.ZERO) > 0 && this.m.subTo(t, t), t
}, ei.prototype.revert = function (e) {
  var t = Bn();
  return e.copyTo(t), this.reduce(t), t
}, ei.prototype.reduce = function (e) {
  for (; e.t <= this.mt2;) e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var n = 32767 & e[t],
      i = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
    for (e[n = t + this.m.t] += this.m.am(0, i, e, t, 0, this.m.t); e[n] >= e.DV;) e[n] -= e.DV, e[++n]++
  }
  e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
}, ei.prototype.mulTo = function (e, t, n) {
  e.multiplyTo(t, n), this.reduce(n)
}, ei.prototype.sqrTo = function (e, t) {
  e.squareTo(t), this.reduce(t)
}, jn.prototype.copyTo = function (e) {
  for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
  e.t = this.t, e.s = this.s
}, jn.prototype.fromInt = function (e) {
  this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
}, jn.prototype.fromString = function (e, t) {
  var n;
  if (16 == t) n = 4;
  else if (8 == t) n = 3;
  else if (256 == t) n = 8;
  else if (2 == t) n = 1;
  else if (32 == t) n = 5;
  else {
    if (4 != t) return void this.fromRadix(e, t);
    n = 2
  }
  this.t = 0, this.s = 0;
  for (var i = e.length, o = !1, a = 0; --i >= 0;) {
    var r = 8 == n ? 255 & e[i] : Kn(e, i);
    r < 0 ? "-" == e.charAt(i) && (o = !0) : (o = !1, 0 == a ? this[this.t++] = r : a + n > this.DB ? (this[this.t - 1] |= (r & (1 << this.DB - a) - 1) << a, this[this.t++] = r >> this.DB - a) : this[this.t - 1] |= r << a, (a += n) >= this.DB && (a -= this.DB))
  }
  8 == n && 0 != (128 & e[0]) && (this.s = -1, a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)), this.clamp(), o && jn.ZERO.subTo(this, this)
}, jn.prototype.clamp = function () {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t
}, jn.prototype.dlShiftTo = function (e, t) {
  var n;
  for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
  for (n = e - 1; n >= 0; --n) t[n] = 0;
  t.t = this.t + e, t.s = this.s
}, jn.prototype.drShiftTo = function (e, t) {
  for (var n = e; n < this.t; ++n) t[n - e] = this[n];
  t.t = Math.max(this.t - e, 0), t.s = this.s
}, jn.prototype.lShiftTo = function (e, t) {
  var n, i = e % this.DB,
    o = this.DB - i,
    a = (1 << o) - 1,
    r = Math.floor(e / this.DB),
    s = this.s << i & this.DM;
  for (n = this.t - 1; n >= 0; --n) t[n + r + 1] = this[n] >> o | s, s = (this[n] & a) << i;
  for (n = r - 1; n >= 0; --n) t[n] = 0;
  t[r] = s, t.t = this.t + r + 1, t.s = this.s, t.clamp()
}, jn.prototype.rShiftTo = function (e, t) {
  t.s = this.s;
  var n = Math.floor(e / this.DB);
  if (n >= this.t) t.t = 0;
  else {
    var i = e % this.DB,
      o = this.DB - i,
      a = (1 << i) - 1;
    t[0] = this[n] >> i;
    for (var r = n + 1; r < this.t; ++r) t[r - n - 1] |= (this[r] & a) << o, t[r - n] = this[r] >> i;
    i > 0 && (t[this.t - n - 1] |= (this.s & a) << o), t.t = this.t - n, t.clamp()
  }
}, jn.prototype.subTo = function (e, t) {
  for (var n = 0, i = 0, o = Math.min(e.t, this.t); n < o;) i += this[n] - e[n], t[n++] = i & this.DM, i >>= this.DB;
  if (e.t < this.t) {
    for (i -= e.s; n < this.t;) i += this[n], t[n++] = i & this.DM, i >>= this.DB;
    i += this.s
  } else {
    for (i += this.s; n < e.t;) i -= e[n], t[n++] = i & this.DM, i >>= this.DB;
    i -= e.s
  }
  t.s = i < 0 ? -1 : 0, i < -1 ? t[n++] = this.DV + i : i > 0 && (t[n++] = i), t.t = n, t.clamp()
}, jn.prototype.multiplyTo = function (e, t) {
  var n = this.abs(),
    i = e.abs(),
    o = n.t;
  for (t.t = o + i.t; --o >= 0;) t[o] = 0;
  for (o = 0; o < i.t; ++o) t[o + n.t] = n.am(0, i[o], t, o, 0, n.t);
  t.s = 0, t.clamp(), this.s != e.s && jn.ZERO.subTo(t, t)
}, jn.prototype.squareTo = function (e) {
  for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0;) e[n] = 0;
  for (n = 0; n < t.t - 1; ++n) {
    var i = t.am(n, t[n], e, 2 * n, 0, 1);
    (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, i, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1)
  }
  e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp()
}, jn.prototype.divRemTo = function (e, t, n) {
  var i = e.abs();
  if (!(i.t <= 0)) {
    var o = this.abs();
    if (o.t < i.t) return null != t && t.fromInt(0), void(null != n && this.copyTo(n));
    null == n && (n = Bn());
    var a = Bn(),
      r = this.s,
      s = e.s,
      l = this.DB - Qn(i[i.t - 1]);
    l > 0 ? (i.lShiftTo(l, a), o.lShiftTo(l, n)) : (i.copyTo(a), o.copyTo(n));
    var u = a.t,
      c = a[u - 1];
    if (0 != c) {
      var d = c * (1 << this.F1) + (u > 1 ? a[u - 2] >> this.F2 : 0),
        f = this.FV / d,
        h = (1 << this.F1) / d,
        p = 1 << this.F2,
        m = n.t,
        _ = m - u,
        v = null == t ? Bn() : t;
      for (a.dlShiftTo(_, v), n.compareTo(v) >= 0 && (n[n.t++] = 1, n.subTo(v, n)), jn.ONE.dlShiftTo(u, v), v.subTo(a, a); a.t < u;) a[a.t++] = 0;
      for (; --_ >= 0;) {
        var g = n[--m] == c ? this.DM : Math.floor(n[m] * f + (n[m - 1] + p) * h);
        if ((n[m] += a.am(0, g, n, _, 0, u)) < g)
          for (a.dlShiftTo(_, v), n.subTo(v, n); n[m] < --g;) n.subTo(v, n)
      }
      null != t && (n.drShiftTo(u, t), r != s && jn.ZERO.subTo(t, t)), n.t = u, n.clamp(), l > 0 && n.rShiftTo(l, n), r < 0 && jn.ZERO.subTo(n, n)
    }
  }
}, jn.prototype.invDigit = function () {
  if (this.t < 1) return 0;
  var e = this[0];
  if (0 == (1 & e)) return 0;
  var t = 3 & e;
  return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
}, jn.prototype.isEven = function () {
  return 0 == (this.t > 0 ? 1 & this[0] : this.s)
}, jn.prototype.exp = function (e, t) {
  if (e > 4294967295 || e < 1) return jn.ONE;
  var n = Bn(),
    i = Bn(),
    o = t.convert(this),
    a = Qn(e) - 1;
  for (o.copyTo(n); --a >= 0;)
    if (t.sqrTo(n, i), (e & 1 << a) > 0) t.mulTo(i, o, n);
    else {
      var r = n;
      n = i, i = r
    } return t.revert(n)
}, jn.prototype.toString = function (e) {
  if (this.s < 0) return "-" + this.negate().toString(e);
  var t;
  if (16 == e) t = 4;
  else if (8 == e) t = 3;
  else if (2 == e) t = 1;
  else if (32 == e) t = 5;
  else {
    if (4 != e) return this.toRadix(e);
    t = 2
  }
  var n, i = (1 << t) - 1,
    o = !1,
    a = "",
    r = this.t,
    s = this.DB - r * this.DB % t;
  if (r-- > 0)
    for (s < this.DB && (n = this[r] >> s) > 0 && (o = !0, a = qn(n)); r >= 0;) s < t ? (n = (this[r] & (1 << s) - 1) << t - s, n |= this[--r] >> (s += this.DB - t)) : (n = this[r] >> (s -= t) & i, s <= 0 && (s += this.DB, --r)), n > 0 && (o = !0), o && (a += qn(n));
  return o ? a : "0"
}, jn.prototype.negate = function () {
  var e = Bn();
  return jn.ZERO.subTo(this, e), e
}, jn.prototype.abs = function () {
  return this.s < 0 ? this.negate() : this
}, jn.prototype.compareTo = function (e) {
  var t = this.s - e.s;
  if (0 != t) return t;
  var n = this.t;
  if (0 != (t = n - e.t)) return t;
  for (; --n >= 0;)
    if (0 != (t = this[n] - e[n])) return t;
  return 0
}, jn.prototype.bitLength = function () {
  return this.t <= 0 ? 0 : this.DB * (this.t - 1) + Qn(this[this.t - 1] ^ this.s & this.DM)
}, jn.prototype.mod = function (e) {
  var t = Bn();
  return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(jn.ZERO) > 0 && e.subTo(t, t), t
}, jn.prototype.modPowInt = function (e, t) {
  var n;
  return n = e < 256 || t.isEven() ? new $n(t) : new ei(t), this.exp(e, n)
}, jn.ZERO = Yn(0), jn.ONE = Yn(1), si.prototype.convert = li, si.prototype.revert = li, si.prototype.mulTo = function (e, t, n) {
  e.multiplyTo(t, n)
}, si.prototype.sqrTo = function (e, t) {
  e.squareTo(t)
}, ui.prototype.convert = function (e) {
  if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
  if (e.compareTo(this.m) < 0) return e;
  var t = Bn();
  return e.copyTo(t), this.reduce(t), t
}, ui.prototype.revert = function (e) {
  return e
}, ui.prototype.reduce = function (e) {
  for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0;) e.dAddOffset(1, this.m.t + 1);
  for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;) e.subTo(this.m, e)
}, ui.prototype.mulTo = function (e, t, n) {
  e.multiplyTo(t, n), this.reduce(n)
}, ui.prototype.sqrTo = function (e, t) {
  e.squareTo(t), this.reduce(t)
};
var ci = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
  di = (1 << 26) / ci[ci.length - 1];

function fi() {
  this.i = 0, this.j = 0, this.S = new Array
}
jn.prototype.chunkSize = function (e) {
  return Math.floor(Math.LN2 * this.DB / Math.log(e))
}, jn.prototype.toRadix = function (e) {
  if (null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36) return "0";
  var t = this.chunkSize(e),
    n = Math.pow(e, t),
    i = Yn(n),
    o = Bn(),
    a = Bn(),
    r = "";
  for (this.divRemTo(i, o, a); o.signum() > 0;) r = (n + a.intValue()).toString(e).substr(1) + r, o.divRemTo(i, o, a);
  return a.intValue().toString(e) + r
}, jn.prototype.fromRadix = function (e, t) {
  this.fromInt(0), null == t && (t = 10);
  for (var n = this.chunkSize(t), i = Math.pow(t, n), o = !1, a = 0, r = 0, s = 0; s < e.length; ++s) {
    var l = Kn(e, s);
    l < 0 ? "-" == e.charAt(s) && 0 == this.signum() && (o = !0) : (r = t * r + l, ++a >= n && (this.dMultiply(i), this.dAddOffset(r, 0), a = 0, r = 0))
  }
  a > 0 && (this.dMultiply(Math.pow(t, a)), this.dAddOffset(r, 0)), o && jn.ZERO.subTo(this, this)
}, jn.prototype.fromNumber = function (e, t, n) {
  if ("number" == typeof t)
    if (e < 2) this.fromInt(1);
    else
      for (this.fromNumber(e, n), this.testBit(e - 1) || this.bitwiseTo(jn.ONE.shiftLeft(e - 1), ni, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(t);) this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(jn.ONE.shiftLeft(e - 1), this);
  else {
    var i = new Array,
      o = 7 & e;
    i.length = 1 + (e >> 3), t.nextBytes(i), o > 0 ? i[0] &= (1 << o) - 1 : i[0] = 0, this.fromString(i, 256)
  }
}, jn.prototype.bitwiseTo = function (e, t, n) {
  var i, o, a = Math.min(e.t, this.t);
  for (i = 0; i < a; ++i) n[i] = t(this[i], e[i]);
  if (e.t < this.t) {
    for (o = e.s & this.DM, i = a; i < this.t; ++i) n[i] = t(this[i], o);
    n.t = this.t
  } else {
    for (o = this.s & this.DM, i = a; i < e.t; ++i) n[i] = t(o, e[i]);
    n.t = e.t
  }
  n.s = t(this.s, e.s), n.clamp()
}, jn.prototype.changeBit = function (e, t) {
  var n = jn.ONE.shiftLeft(e);
  return this.bitwiseTo(n, t, n), n
}, jn.prototype.addTo = function (e, t) {
  for (var n = 0, i = 0, o = Math.min(e.t, this.t); n < o;) i += this[n] + e[n], t[n++] = i & this.DM, i >>= this.DB;
  if (e.t < this.t) {
    for (i += e.s; n < this.t;) i += this[n], t[n++] = i & this.DM, i >>= this.DB;
    i += this.s
  } else {
    for (i += this.s; n < e.t;) i += e[n], t[n++] = i & this.DM, i >>= this.DB;
    i += e.s
  }
  t.s = i < 0 ? -1 : 0, i > 0 ? t[n++] = i : i < -1 && (t[n++] = this.DV + i), t.t = n, t.clamp()
}, jn.prototype.dMultiply = function (e) {
  this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp()
}, jn.prototype.dAddOffset = function (e, t) {
  if (0 != e) {
    for (; this.t <= t;) this[this.t++] = 0;
    for (this[t] += e; this[t] >= this.DV;) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t]
  }
}, jn.prototype.multiplyLowerTo = function (e, t, n) {
  var i, o = Math.min(this.t + e.t, t);
  for (n.s = 0, n.t = o; o > 0;) n[--o] = 0;
  for (i = n.t - this.t; o < i; ++o) n[o + this.t] = this.am(0, e[o], n, o, 0, this.t);
  for (i = Math.min(e.t, t); o < i; ++o) this.am(0, e[o], n, o, 0, t - o);
  n.clamp()
}, jn.prototype.multiplyUpperTo = function (e, t, n) {
  --t;
  var i = n.t = this.t + e.t - t;
  for (n.s = 0; --i >= 0;) n[i] = 0;
  for (i = Math.max(t - this.t, 0); i < e.t; ++i) n[this.t + i - t] = this.am(t - i, e[i], n, 0, 0, this.t + i - t);
  n.clamp(), n.drShiftTo(1, n)
}, jn.prototype.modInt = function (e) {
  if (e <= 0) return 0;
  var t = this.DV % e,
    n = this.s < 0 ? e - 1 : 0;
  if (this.t > 0)
    if (0 == t) n = this[0] % e;
    else
      for (var i = this.t - 1; i >= 0; --i) n = (t * n + this[i]) % e;
  return n
}, jn.prototype.millerRabin = function (e) {
  var t = this.subtract(jn.ONE),
    n = t.getLowestSetBit();
  if (n <= 0) return !1;
  var i = t.shiftRight(n);
  (e = e + 1 >> 1) > ci.length && (e = ci.length);
  for (var o = Bn(), a = 0; a < e; ++a) {
    o.fromInt(ci[Math.floor(Math.random() * ci.length)]);
    var r = o.modPow(i, this);
    if (0 != r.compareTo(jn.ONE) && 0 != r.compareTo(t)) {
      for (var s = 1; s++ < n && 0 != r.compareTo(t);)
        if (0 == (r = r.modPowInt(2, this)).compareTo(jn.ONE)) return !1;
      if (0 != r.compareTo(t)) return !1
    }
  }
  return !0
}, jn.prototype.clone = function () {
  var e = Bn();
  return this.copyTo(e), e
}, jn.prototype.intValue = function () {
  if (this.s < 0) {
    if (1 == this.t) return this[0] - this.DV;
    if (0 == this.t) return -1
  } else {
    if (1 == this.t) return this[0];
    if (0 == this.t) return 0
  }
  return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
}, jn.prototype.byteValue = function () {
  return 0 == this.t ? this.s : this[0] << 24 >> 24
}, jn.prototype.shortValue = function () {
  return 0 == this.t ? this.s : this[0] << 16 >> 16
}, jn.prototype.signum = function () {
  return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
}, jn.prototype.toByteArray = function () {
  var e = this.t,
    t = new Array;
  t[0] = this.s;
  var n, i = this.DB - e * this.DB % 8,
    o = 0;
  if (e-- > 0)
    for (i < this.DB && (n = this[e] >> i) != (this.s & this.DM) >> i && (t[o++] = n | this.s << this.DB - i); e >= 0;) i < 8 ? (n = (this[e] & (1 << i) - 1) << 8 - i, n |= this[--e] >> (i += this.DB - 8)) : (n = this[e] >> (i -= 8) & 255, i <= 0 && (i += this.DB, --e)), 0 != (128 & n) && (n |= -256), 0 == o && (128 & this.s) != (128 & n) && ++o, (o > 0 || n != this.s) && (t[o++] = n);
  return t
}, jn.prototype.equals = function (e) {
  return 0 == this.compareTo(e)
}, jn.prototype.min = function (e) {
  return this.compareTo(e) < 0 ? this : e
}, jn.prototype.max = function (e) {
  return this.compareTo(e) > 0 ? this : e
}, jn.prototype.and = function (e) {
  var t = Bn();
  return this.bitwiseTo(e, ti, t), t
}, jn.prototype.or = function (e) {
  var t = Bn();
  return this.bitwiseTo(e, ni, t), t
}, jn.prototype.xor = function (e) {
  var t = Bn();
  return this.bitwiseTo(e, ii, t), t
}, jn.prototype.andNot = function (e) {
  var t = Bn();
  return this.bitwiseTo(e, oi, t), t
}, jn.prototype.not = function () {
  for (var e = Bn(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
  return e.t = this.t, e.s = ~this.s, e
}, jn.prototype.shiftLeft = function (e) {
  var t = Bn();
  return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t
}, jn.prototype.shiftRight = function (e) {
  var t = Bn();
  return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t
}, jn.prototype.getLowestSetBit = function () {
  for (var e = 0; e < this.t; ++e)
    if (0 != this[e]) return e * this.DB + ai(this[e]);
  return this.s < 0 ? this.t * this.DB : -1
}, jn.prototype.bitCount = function () {
  for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n) e += ri(this[n] ^ t);
  return e
}, jn.prototype.testBit = function (e) {
  var t = Math.floor(e / this.DB);
  return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
}, jn.prototype.setBit = function (e) {
  return this.changeBit(e, ni)
}, jn.prototype.clearBit = function (e) {
  return this.changeBit(e, oi)
}, jn.prototype.flipBit = function (e) {
  return this.changeBit(e, ii)
}, jn.prototype.add = function (e) {
  var t = Bn();
  return this.addTo(e, t), t
}, jn.prototype.subtract = function (e) {
  var t = Bn();
  return this.subTo(e, t), t
}, jn.prototype.multiply = function (e) {
  var t = Bn();
  return this.multiplyTo(e, t), t
}, jn.prototype.divide = function (e) {
  var t = Bn();
  return this.divRemTo(e, t, null), t
}, jn.prototype.remainder = function (e) {
  var t = Bn();
  return this.divRemTo(e, null, t), t
}, jn.prototype.divideAndRemainder = function (e) {
  var t = Bn(),
    n = Bn();
  return this.divRemTo(e, t, n), new Array(t, n)
}, jn.prototype.modPow = function (e, t) {
  var n, i, o = e.bitLength(),
    a = Yn(1);
  if (o <= 0) return a;
  n = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6, i = o < 8 ? new $n(t) : t.isEven() ? new ui(t) : new ei(t);
  var r = new Array,
    s = 3,
    l = n - 1,
    u = (1 << n) - 1;
  if (r[1] = i.convert(this), n > 1) {
    var c = Bn();
    for (i.sqrTo(r[1], c); s <= u;) r[s] = Bn(), i.mulTo(c, r[s - 2], r[s]), s += 2
  }
  var d, f, h = e.t - 1,
    p = !0,
    m = Bn();
  for (o = Qn(e[h]) - 1; h >= 0;) {
    for (o >= l ? d = e[h] >> o - l & u : (d = (e[h] & (1 << o + 1) - 1) << l - o, h > 0 && (d |= e[h - 1] >> this.DB + o - l)), s = n; 0 == (1 & d);) d >>= 1, --s;
    if ((o -= s) < 0 && (o += this.DB, --h), p) r[d].copyTo(a), p = !1;
    else {
      for (; s > 1;) i.sqrTo(a, m), i.sqrTo(m, a), s -= 2;
      s > 0 ? i.sqrTo(a, m) : (f = a, a = m, m = f), i.mulTo(m, r[d], a)
    }
    for (; h >= 0 && 0 == (e[h] & 1 << o);) i.sqrTo(a, m), f = a, a = m, m = f, --o < 0 && (o = this.DB - 1, --h)
  }
  return i.revert(a)
}, jn.prototype.modInverse = function (e) {
  var t = e.isEven();
  if (this.isEven() && t || 0 == e.signum()) return jn.ZERO;
  for (var n = e.clone(), i = this.clone(), o = Yn(1), a = Yn(0), r = Yn(0), s = Yn(1); 0 != n.signum();) {
    for (; n.isEven();) n.rShiftTo(1, n), t ? (o.isEven() && a.isEven() || (o.addTo(this, o), a.subTo(e, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(e, a), a.rShiftTo(1, a);
    for (; i.isEven();) i.rShiftTo(1, i), t ? (r.isEven() && s.isEven() || (r.addTo(this, r), s.subTo(e, s)), r.rShiftTo(1, r)) : s.isEven() || s.subTo(e, s), s.rShiftTo(1, s);
    n.compareTo(i) >= 0 ? (n.subTo(i, n), t && o.subTo(r, o), a.subTo(s, a)) : (i.subTo(n, i), t && r.subTo(o, r), s.subTo(a, s))
  }
  return 0 != i.compareTo(jn.ONE) ? jn.ZERO : s.compareTo(e) >= 0 ? s.subtract(e) : s.signum() < 0 ? (s.addTo(e, s), s.signum() < 0 ? s.add(e) : s) : s
}, jn.prototype.pow = function (e) {
  return this.exp(e, new si)
}, jn.prototype.gcd = function (e) {
  var t = this.s < 0 ? this.negate() : this.clone(),
    n = e.s < 0 ? e.negate() : e.clone();
  if (t.compareTo(n) < 0) {
    var i = t;
    t = n, n = i
  }
  var o = t.getLowestSetBit(),
    a = n.getLowestSetBit();
  if (a < 0) return t;
  for (o < a && (a = o), a > 0 && (t.rShiftTo(a, t), n.rShiftTo(a, n)); t.signum() > 0;)(o = t.getLowestSetBit()) > 0 && t.rShiftTo(o, t), (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n), t.compareTo(n) >= 0 ? (t.subTo(n, t), t.rShiftTo(1, t)) : (n.subTo(t, n), n.rShiftTo(1, n));
  return a > 0 && n.lShiftTo(a, n), n
}, jn.prototype.isProbablePrime = function (e) {
  var t, n = this.abs();
  if (1 == n.t && n[0] <= ci[ci.length - 1]) {
    for (t = 0; t < ci.length; ++t)
      if (n[0] == ci[t]) return !0;
    return !1
  }
  if (n.isEven()) return !1;
  for (t = 1; t < ci.length;) {
    for (var i = ci[t], o = t + 1; o < ci.length && i < di;) i *= ci[o++];
    for (i = n.modInt(i); t < o;)
      if (i % ci[t++] == 0) return !1
  }
  return n.millerRabin(e)
}, jn.prototype.square = function () {
  var e = Bn();
  return this.squareTo(e), e
}, fi.prototype.init = function (e) {
  var t, n, i;
  for (t = 0; t < 256; ++t) this.S[t] = t;
  for (n = 0, t = 0; t < 256; ++t) n = n + this.S[t] + e[t % e.length] & 255, i = this.S[t], this.S[t] = this.S[n], this.S[n] = i;
  this.i = 0, this.j = 0
}, fi.prototype.next = function () {
  var e;
  return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255]
};
var hi, pi, mi, _i = 256;

function vi() {
  var e;
  e = (new Date).getTime(), pi[mi++] ^= 255 & e, pi[mi++] ^= e >> 8 & 255, pi[mi++] ^= e >> 16 & 255, pi[mi++] ^= e >> 24 & 255, mi >= _i && (mi -= _i)
}
if (null == pi) {
  var gi;
  if (pi = new Array, mi = 0, "Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto) {
    var bi = window.crypto.random(32);
    for (gi = 0; gi < bi.length; ++gi) pi[mi++] = 255 & bi.charCodeAt(gi)
  }
  for (; mi < _i;) gi = Math.floor(65536 * Math.random()), pi[mi++] = gi >>> 8, pi[mi++] = 255 & gi;
  mi = 0, vi()
}

function Ti() {
  if (null == hi) {
    for (vi(), (hi = new fi).init(pi), mi = 0; mi < pi.length; ++mi) pi[mi] = 0;
    mi = 0
  }
  return hi.next()
}

function xi() {}

function Si(e, t) {
  return new jn(e, t)
}

function wi() {
  this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
}
xi.prototype.nextBytes = function (e) {
  var t;
  for (t = 0; t < e.length; ++t) e[t] = Ti()
}, wi.prototype.doPublic = function (e) {
  return e.modPowInt(this.e, this.n)
}, wi.prototype.setPublic = function (e, t) {
  this.n = Si(e, 16), this.e = parseInt(t, 16)
}, wi.prototype.encrypt = function (e) {
  var t = function (e, t) {
    if (t < e.length + 11) return null;
    for (var n = new Array, i = e.length - 1; i >= 0 && t > 0;) {
      var o = e.charCodeAt(i--);
      o < 128 ? n[--t] = o : o > 127 && o < 2048 ? (n[--t] = 63 & o | 128, n[--t] = o >> 6 | 192) : (n[--t] = 63 & o | 128, n[--t] = o >> 6 & 63 | 128, n[--t] = o >> 12 | 224)
    }
    n[--t] = 0;
    for (var a = new xi, r = new Array; t > 2;) {
      for (r[0] = 0; 0 == r[0];) a.nextBytes(r);
      n[--t] = r[0]
    }
    return n[--t] = 2, n[--t] = 0, new jn(n)
  }(e, this.n.bitLength() + 7 >> 3);
  if (null == t) return null;
  var n = this.doPrivate(t);
  if (null == n) return null;
  var i = n.toString(16);
  return 0 == (1 & i.length) ? i : "0" + i
}, wi.prototype.doPrivate = function (e) {
  if (null == this.p || null == this.q) return e.modPow(this.d, this.n);
  for (var t = e.mod(this.p).modPow(this.dmp1, this.p), n = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(n) < 0;) t = t.add(this.p);
  return t.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
}, wi.prototype.setPrivate = function (e, t, n) {
  this.n = Si(e, 16), this.e = parseInt(t, 16), this.d = Si(n, 16)
}, wi.prototype.setPrivateEx = function (e, t, n, i, o, a, r, s) {
  this.n = Si(e, 16), this.e = parseInt(t, 16), this.d = Si(n, 16), this.p = Si(i, 16), this.q = Si(o, 16), this.dmp1 = Si(a, 16), this.dmq1 = Si(r, 16), this.coeff = Si(s, 16)
}, wi.prototype.decrypt = function (e) {
  var t = Si(e, 16),
    n = this.doPublic(t);
  return null == n ? null : function (e, t) {
    for (var n = e.toByteArray(), i = 0; i < n.length && 0 == n[i];) ++i;
    if (n.length - i != t - 1 || 2 != n[i]) return null;
    for (++i; 0 != n[i];)
      if (++i >= n.length) return null;
    for (var o = ""; ++i < n.length;) {
      var a = 255 & n[i];
      a < 128 ? o += String.fromCharCode(a) : a > 191 && a < 224 ? (o += String.fromCharCode((31 & a) << 6 | 63 & n[i + 1]), ++i) : (o += String.fromCharCode((15 & a) << 12 | (63 & n[i + 1]) << 6 | 63 & n[i + 2]), i += 2)
    }
    return o
  }(n, this.n.bitLength() + 7 >> 3)
};
var yi = function (e = Vn) {
    return Pi.v(e)
  },
  Pi = {},
  Mi = "6a384c1259bdb5e731ec96b3174683f48a2c56a85e52e7a5bb20b58711ce50c1a294bd5e1d1752e766085e9ae94bae6d217c25dbb5fcdb86a8a9a7e180fa066723d00fcb85fcf7c9d29f8cc8859f53244a49c0bc30dcc45156daf8843ce1d24fe8ebc9a3c186bb26e9d0714041aef160304c1db8cc5728cf4acb39d29755f319",
  Oi = "10001";
Pi.cross = function (e) {
  if (e) {
    for (var t = "", n = 0; n < e.length;) n + 1 < e.length ? (t += e[n + 1], t += e[n]) : t += e[n], n += 2;
    return t
  }
  return null
}, Pi.reverse = function (e) {
  if (e) {
    for (var t = "", n = e.length; n > 0; n--) t += e[n - 1];
    return t
  }
  return null
}, Pi.v = function (e) {
  if (e) {
    var t = Pi;
    if (t.start = null, t.beginDate = null, t.end = null, t.endDate = null, t.gis = null, t["3D"] = null, t["3d"] = null, t.l = null, t.__li__ = null, e.indexOf("signature=") > 0) {
      var n = e.split("signature="),
        i = n[0],
        o = n[1],
        a = new wi;
      a.setPublic(Mi, Oi);
      for (var r = o, s = r.length, l = 0, u = "", c = ""; l < s;) u = r.substr(l, 256), c += a.decrypt(u), l += 256;
      if (c === i) return t.i(e), !0
    }
  }
  return !1
}, Pi.i = function (e) {
  var t = Pi;
  t.__li__ = e;
  var n, i, o, a, r = e.split("\n");
  for (n = 0; n < r.length; n++) i = (a = r[n].split("="))[0], o = a[1], t[i] = o;
  null != t.start && (t.beginDate = new Date(Date.parse(t.start.replace(/-/g, "/")))), null != t.end && (t.endDate = new Date(Date.parse(t.end.replace(/-/g, "/"))));
  var s = t.gis;
  null != s && (s = parseInt(s)), s && (t._isPermissionGIS = !0);
  var l = t["3D"] || t["3d"];
  null != l && (l = parseInt(l)), l && (t._isPermission3D = !0), null != t.l && (t.version = t.l)
};
var Ni = function (e) {
  if (! function (e) {
      return void 0 !== e.__li__ && e._isPermission3D
    }(e)) return !0;
  var t = new Date;
  return null != e.beginDate && e.beginDate.getTime() - t.getTime() >= 0 || null != e.endDate && e.endDate.getTime() - t.getTime() <= 0
};
Pi.$z = function (e) {
  var t = new wi;
  t.setPublic(Mi, Oi);
  for (var n = e, i = n.length, o = 0, a = "", r = ""; o < i;) a = n.substr(o, 256), r += t.decrypt(a), o += 256;
  return r
}, Pi.twm = function (e) {
  var t = Pi,
    n = t.$z("4cd18113d0c7046bfe51f7a3fbd41c2b7cf14dd785d6ea7cec9da17710d3acfb8ce0cb9cf10839f4bd51e88819de19cdc0db09278584396156fcb65abe0353ac49d01326b30efa0ea98a07da9f8ceeb7572fc1b37b5965ba6103ccba4913b62e36e49425c6ff21a2f008830c59cff8f29058769f858c8a9f0bab3eaea7fb8a9e"),
    i = this.type,
    o = this.markText;
  if (e[t.$z("648be38cd61c870e95ffc1ea0676af40736c1365015abc326e891a4de67b4de3d4b05da70b9aebedc83ec26ecf71eb74c72f42f6d9a4be2d507d2f67d2860b7b66e3ba1d565e15923f2db335ff922eef17c01b59818b583d5656412d6cc9d9ba70001c2c88e3efd492c6b13a07fda5f325b333138a2036f4696542ec137cc341")] = t.__li__, "3" !== i || Ni(Pi) || void 0 !== o) {
    void 0 === e.__liLabel && (e.__liLabel = document.createElement("div")), void 0 === t.startDate && (t.startDate = new Date);
    var a = (new Date).getTime() - t.startDate.getTime(),
      r = "2" === i ? 7200 : 300;
    if (!(a < 1e3 * r)) {
      var s = Ni(t) && a > 1e3 * r,
        l = o;
      if (s ? l = t.$z("0dd629dbd0ce341ecdd447e35ddc3135a0b46916f7571a687f38ae665cf0ae095fee885e14329caa75112d8787508da17285b0897845d8ccae73e6a2727dd19f1ca335fe139d0e60d240f9ececc78f81c2c5667f51aeed4135b9c4bb436b8acb7cd418eeeb404bc4f3bcdedb481ac0edff7644435ce2b9f2bda78c892bd56d73") : "2" != i || void 0 !== l && "" != l ? "1" != i || o || (l = n) : l = t.$z("644d54bf9c59afbd8a742a9e7e2731f23f149ccb7f04c3547548c50ac2d77faea108b55f1f6261e99869f1c06b84e8abdefdf45b5170048531421f3d528123972ba2f03d70f37c33f1341dc12f986e0089e42bab517e2a05b455d12d90991bbba9bc45c715a81943062ea5fa5408c8b1b9270d260cc5a67b38ecc4178ce512fc"), void 0 !== l) {
        var u = e.__liLabel;
        u.innerHTML = l, u.type = i, u.mark = o, u.expired = s, e._xyz = u, s && (e._canvas.style.opacity = .1)
      }
    }
  }
}, yi();
var Ei = {
    $license: Vn,
    __v: yi,
    __l: Pi
  },
  Ai = "1.0.2";
let Ci = !0;
const Ri = Ci = !1;
let Li = null,
  Ii = null,
  Di = null;

function zi(e, ...t) {
  Li ? Li(e, ...t) : Ri && console.log(e, ...t)
}

function Fi(e, ...t) {
  Ii ? Ii(e, ...t) : Ri && console.warn(e, ...t)
}

function Ui(e, ...t) {
  Di ? Di(e, ...t) : Ri && console.error(e, ...t)
}

function ki(e) {
  Li = e
}

function Hi(e) {
  Ii = e
}

function Ji(e) {
  Di = e
}

function Vi(e) {
  return {
    x: (e.touches ? e.touches[0] : e).clientX,
    y: (e.touches ? e.touches[0] : e).clientY
  }
}

function ji(e) {
  return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof HTMLVideoElement
}

function Bi(e) {
  return e instanceof Blob || e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof HTMLVideoElement
}

function Xi() {
  return /chrome/i.test(navigator.userAgent)
}

function Gi() {
  return !/chrome/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent)
}
const Wi = "undefined" != typeof ImageBitmap;

function Zi(e) {
  return e instanceof ImageData || Wi && e instanceof ImageBitmap
}

function qi(e, t, n) {
  let i = window.devicePixelRatio || 1;
  /Mobile/.test(navigator.userAgent) && (i = 1);
  const o = t || e.width,
    a = n || e.height;
  e.width = o * i, e.height = a * i, e.style.width = `${o}px`, e.style.height = `${a}px`
}

function Ki(e, t) {
  return new Promise((n, i) => {
    const o = new XMLHttpRequest;
    o.onreadystatechange = function (e) {
      if (4 === this.readyState)
        if (200 === this.status) {
          let e = o.response;
          "json" === t && "string" == typeof e && (e = JSON.parse(e)), n(e)
        } else Ui("ajax error:", this.statusText), i(new Error(`${this.responseURL} ${this.statusText}`))
    }, o.open("get", e), t && (o.responseType = t), o.send()
  })
}

function Yi(e) {
  let t = e;
  return e instanceof Blob && (t = URL.createObjectURL(e)), new Promise((n, i) => {
    const o = new Image;
    o.crossOrigin = "anonymous", o.onload = function () {
      o.onload = null, o.onerror = null, e instanceof Blob && URL.revokeObjectURL(t), n(o)
    }, o.onerror = function (e) {
      o.onload = null, o.onerror = null, i(e)
    }, o.src = t
  })
}

function Qi(e, t, n) {
  const i = new AbortController;
  let o = !1;
  return fetch(e, {
    signal: i.signal
  }).then(e => {
    switch (t.responseType) {
      case "json":
        return e.json();
      case "arrayBuffer":
        return e.arrayBuffer();
      case "image":
        return e.blob();
      default:
        return e.text()
    }
  }).then(e => "image" === t.responseType ? createImageBitmap(e) : e).then(e => {
    o = !0, n(null, e)
  }).catch(e => {
    20 !== e.code && n(new Error(e.message))
  }), {
    abort() {
      o || i.abort()
    }
  }
}
const $i = {
  premultiplyAlpha: "none"
};

function eo(e) {
  return Bi(e) ? createImageBitmap(e) : Xi() ? fetch(e).then(e => e.blob()).then(e => createImageBitmap(e, $i)).then(t => ("string" == typeof e && e.startsWith("blob:") && URL.revokeObjectURL(e), t)) : new Promise((t, n) => {
    const i = new Image;
    i.crossOrigin = "anonymous", i.onload = function () {
      i.onload = null, t(createImageBitmap(i, 0, 0, i.width, i.height, $i))
    }, i.onerror = function (e) {
      i.onerror = null, n(e)
    }, i.src = e
  })
}

function to(e, t) {
  const {
    name: n
  } = t, i = `_${n}`;
  e[i] = t.value;
  const o = {
    configurable: !0,
    enumerable: !0,
    get: t.get || function () {
      return this[i]
    }
  };
  t.noSet || (o.set = t.set || function (e) {
    const o = this,
      a = o[i];
    let r = e;
    t.converter && (r = t.converter(r, n)), o[i] = r, t.dirty && (o[t.dirty] = !0), t.callback && t.callback.call(o, a, r), o.fire({
      type: "change",
      data: o,
      property: n,
      oldValue: a,
      newValue: r
    })
  }), Object.defineProperty(e, n, o)
}

function no(e, t) {
  t.forEach(t => {
    to(e, t)
  })
}

function io(e) {
  const t = new Blob([`(${e.toString()})()`], {
    type: "application/javascript"
  });
  return URL.createObjectURL(t)
}

function oo(e, t = 300) {
  let n;
  return i => {
    n && clearTimeout(n), n = setTimeout(e, t, i)
  }
}

function ao() {
  return Math.random()
}

function ro(e) {
  return e.ctrlKey || e.metaKey
}

function so(e) {
  if ("string" != typeof e) return null;
  let t = e.lastIndexOf("/"),
    n = e;
  return t >= 0 && (n = e.substring(t + 1)), (t = n.lastIndexOf(".")) >= 0 && (n = n.substring(0, t)), n
}

function lo(e) {
  const t = (navigator.browserLanguage || navigator.language).toLowerCase(),
    n = document.createElement("div");
  n.style.color = "#5b5b5b", n.style.fontSize = "".concat(22, "px"), n.style.textAlign = "center", n.style.position = "absolute", n.style.left = "10px", n.style.top = "320px", n.style["-webkit-user-select"] = "none", n.style["-moz-user-select"] = "none", n.style["-ms-user-select"] = "none", n.style["user-select"] = "none", n.style.width = "".concat(document.documentElement.clientWidth, "px"), t.indexOf("en") > -1 ? n.innerHTML = "Your browser does not support WebGL2. Supported browsers are Chrome, Firefox, Edge 79+" : n.innerHTML = "您的浏览器不支持WebGL2. 支持的浏览器有Chrome, Firefox, Edge 79+.", e.appendChild(n)
}

function uo(e) {
  return Ei.$license = e, Ei.__v(e)
}

function co() {
  return Ei.$license
}

function fo(e, t) {
  const n = document.createElement("div");
  return n.setAttribute("id", "licenseDiv"), n.style.color = "#5b5b5b", n.style.fontSize = "".concat(22, "px"), n.style.textAlign = "right", n.style.position = "absolute", n.style.right = "40px", n.style.bottom = "20px", n.style["-webkit-user-select"] = "none", n.style["-moz-user-select"] = "none", n.style["-ms-user-select"] = "none", n.style["user-select"] = "none", n.innerHTML = t, e.appendChild(n), n
}
class ho {
  constructor(e, t) {
    this.center = e || Y.create(), this.radius = t || 0
  }
  isInFrustum(e) {
    const {
      planes: t
    } = e, {
      radius: n,
      center: i
    } = this;
    for (let e = 0; e < 6; e++) {
      const o = t[e];
      if (Y.dot(o, i) + o[3] <= -n) return !1
    }
    return !0
  }
  intersect(e) {
    return Y.distance(this.center, e.center) <= this.radius + e.radius
  }
  containPoint(e) {
    return Y.distance(e, this.center) <= this.radius
  }
}
let po, mo, _o, vo = !1;

function go() {
  vo || (vo = !0, po = Y.create(), mo = Y.create(), _o = new Array(12))
}
class bo {
  constructor(e, t) {
    go();
    const n = this,
      i = new Float32Array(24),
      o = new Array(8);
    n._rawPoints = i, n._points = o, n._halfSize = new Array(3);
    for (let e = 0; e < 8; e++) o[e] = new Float32Array(i.buffer, 12 * e, 3);
    [n.max, n.min] = [o[0], o[6]], n.boundingSphere = new ho, e && n.reset(e, t)
  }
  reset(e, t) {
    const n = this._points,
      i = this.min,
      o = this.max,
      a = this._halfSize;
    e && Y.copy(i, e), t && Y.copy(o, t), a[0] = Math.max((o[0] - i[0]) / 2, 0), a[1] = Math.max((o[1] - i[1]) / 2, 0), a[2] = Math.max((o[2] - i[2]) / 2, 0), this.boundingSphere.radius = Y.length(a), Y.add(this.boundingSphere.center, i, a), [n[0][0], n[0][1], n[0][2]] = o, [n[3][0], n[1][1], n[1][2]] = o, [n[4][0], n[4][1], n[2][2]] = o, [n[7][0], n[5][1], n[3][2]] = o, [n[1][0], n[2][1], n[4][2]] = i, [n[2][0], n[3][1], n[5][2]] = i, [n[5][0], n[6][1], n[6][2]] = i, [n[6][0], n[7][1], n[7][2]] = i
  }
  union(e) {
    if (e.isEmpty()) return;
    const t = this;
    t.isEmpty() ? t.reset(e.min, e.max) : ([_o[0], _o[1], _o[2]] = t.min, [_o[3], _o[4], _o[5]] = t.max, [_o[6], _o[7], _o[8]] = e.min, [_o[9], _o[10], _o[11]] = e.max, t.fromPoints(_o))
  }
  transform(e, t) {
    bo.transform(e, t || this, this)
  }
  fromPoints(e, t = 3) {
    bo.fromPoints(e, this, t)
  }
  isEmpty() {
    return this.boundingSphere.radius <= 0
  }
  isInFrustum(e) {
    const {
      planes: t
    } = e, n = this._points;
    if (!this.boundingSphere.intersect(e.boundingSphere)) return !1;
    if (!this.boundingSphere.isInFrustum(e)) return !1;
    for (let e = 0; e < 6; e++) {
      const i = t[e];
      let o = 8;
      for (let e = 0; e < 8 && Y.dot(i, n[e]) + i[3] < 0; e++) o--;
      if (!o) return !1
    }
    return !0
  }
  static transform(e, t, n) {
    const i = n || new bo;
    for (let n = 0; n < 8; n++) Y.transformMat4(i._points[n], t._points[n], e);
    return bo.fromPoints(i._rawPoints, i), i
  }
  static fromPoints(e, t, n = 3) {
    if (go(), 3 === n) {
      Y.set(po, e[0], e[1], e[2]), Y.set(mo, e[0], e[1], e[2]);
      for (let t = 3, n = e.length; t < n; t += 3) e[t] < po[0] && (po[0] = e[t]), e[t + 1] < po[1] && (po[1] = e[t + 1]), e[t + 2] < po[2] && (po[2] = e[t + 2]), e[t] > mo[0] && (mo[0] = e[t]), e[t + 1] > mo[1] && (mo[1] = e[t + 1]), e[t + 2] > mo[2] && (mo[2] = e[t + 2])
    } else if (2 === n) {
      Y.set(po, e[0], e[1], 0), Y.set(mo, e[0], e[1], 0);
      for (let t = 2, n = e.length; t < n; t += 2) e[t] < po[0] && (po[0] = e[t]), e[t + 1] < po[1] && (po[1] = e[t + 1]), e[t] > mo[0] && (mo[0] = e[t]), e[t + 1] > mo[1] && (mo[1] = e[t + 1])
    }
    return t ? (t.reset(po, mo), t) : new bo(po, mo)
  }
}
class To {
  constructor(e, t) {
    const n = this;
    To.COUNT++, n._gl = e, n._usage = e[t.usage || "STATIC_DRAW"], n.size = t.size, n._stride = t.stride || 0, n.name = t.name, "position" !== n.name || n.size || (n.size = 3), n.buffer = t.buffer || e.createBuffer(), !t.buffer && t.data && n.bindData(t.data), "position" !== n.name && "index" !== n.name || (n.data = t.data)
  }
  bindData(e) {
    const t = this,
      n = t._gl;
    "position" === t.name && (t._stride ? t.count = e.length / t._stride : t.count = e.length / t.size), "offset" === t.name && (t.instanceCount = e.length / 16), n.bindBuffer(t.TYPE, t.buffer), n.bufferData(t.TYPE, e, t._usage), "position" !== t.name && "index" !== t.name || (t.data = e)
  }
  dispose() {
    this._gl.deleteBuffer(this.buffer), this.buffer = null, this._gl = null, To.COUNT--
  }
}
To.COUNT = 0;
class xo extends To {
  constructor(e, t) {
    let n, {
        data: i
      } = t,
      o = i.BYTES_PER_ELEMENT;
    o ? n = 1 === o ? 5121 : 2 === o ? 5123 : 5125 : (i.length <= 256 ? (n = 5121, o = 1, i = new Uint8Array(i)) : i.length <= 65536 ? (n = 5123, o = 2, i = new Uint16Array(i)) : (n = 5125, o = 4, i = new Uint32Array(i)), t.data = i), t.name = "index", super(e, t);
    this.elementType = n, this.elementSize = o, this.count = i.length
  }
  get TYPE() {
    return WebGLRenderingContext.ELEMENT_ARRAY_BUFFER
  }
}
const So = {
  position: {
    location: 0,
    size: 3
  },
  normal: {
    location: 1,
    size: 3
  },
  uv: {
    location: 2,
    size: 2
  },
  uv1: {
    location: 15,
    size: 2
  },
  tangent: {
    location: 3,
    size: 4
  },
  color: {
    location: 4,
    size: 4
  },
  instance: {
    location: 5,
    size: 16
  },
  joint: {
    location: 9,
    size: 4
  },
  weight: {
    location: 10,
    size: 4
  },
  position0: {
    location: 9,
    size: 3
  },
  position1: {
    location: 10,
    size: 3
  },
  normal0: {
    location: 11,
    size: 3
  },
  normal1: {
    location: 12,
    size: 3
  },
  tangent0: {
    location: 13,
    size: 4
  },
  tangent1: {
    location: 14,
    size: 4
  }
};
class wo extends To {
  constructor(e, t) {
    super(e, t);
    const n = this;
    n._offset = t.offset || 0, n._type = t.type || e.FLOAT, "position" === n.name && (n._stride ? n.count = t.data.length / n._stride : n.count = t.data.length / n.size), this._location = t.location, "instance" === n.name && (n.instanceCount = t.data.length / 16)
  }
  bindAttrib(e) {
    const t = this,
      n = t._gl,
      i = So[e];
    let o = this._location,
      {
        size: a
      } = this;
    if (null == o && i && (o = i.location), null == a && i && (a = i.size), n.bindBuffer(n.ARRAY_BUFFER, t.buffer), a > 4)
      for (let t = 0, i = a / 4; t < i; t++) n.enableVertexAttribArray(o + t), n.vertexAttribPointer(o + t, 4, n.FLOAT, !1, 4 * a, 16 * t), "instance" === e && n.vertexAttribDivisor(o + t, 1);
    else n.enableVertexAttribArray(o), n.vertexAttribPointer(o, a, t._type, !1, t._stride, t._offset)
  }
  get TYPE() {
    return WebGLRenderingContext.ARRAY_BUFFER
  }
}
let yo = 0;
const {
  EPSILON: Po
} = o;
let Mo, Oo, No, Eo, Ao, Co, Ro, Lo, Io = !1;
class Do {
  constructor(e) {
    Io || (Io = !0, Mo = Y.create(), Oo = Y.create(), No = Y.create(), Eo = Y.create(), Ao = Y.create(), Co = Y.create(), Ro = Y.create(), Lo = Y.create());
    const t = this;
    t.cache = new WeakMap, t.id = ++yo, t._program = null, t.__mode = e.mode || "TRIANGLES", t._counts = e.counts, t._buffers = e.buffers, t._color = !!e.buffers.color, t._instance = !!e.buffers.instance;
    const n = e.buffers.position;
    n.min ? t.boundingBox = new bo(n.min, n.max) : t.boundingBox = bo.fromPoints(n.data || n, null, e.buffers.position && e.buffers.position.size || 3)
  }
  _init(e) {
    Do.COUNT++;
    const t = this._buffers,
      n = new Map;
    this._mode = e[this.__mode];
    const i = {};
    i._vao = e.createVertexArray(), i._bufferMap = {}, e.bindVertexArray(i._vao), Object.keys(t).forEach(o => {
      const a = t[o];
      if ("index" === o) i._indexBuffer = new xo(e, {
        data: a
      });
      else {
        const t = a.data || a,
          r = n.get(t),
          s = new wo(e, {
            name: o,
            buffer: r && r.buffer,
            data: t,
            stride: a.stride,
            offset: a.offset,
            type: a.type,
            size: a.size,
            usage: a.usage,
            location: a.location
          });
        i._bufferMap[o] = s, s.bindAttrib(o), r || n.set(t, s), "position" === o && (i._vertexBuffer = s), "instance" === o && (i._instanceBuffer = s)
      }
    }), e.bindVertexArray(null), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), this.cache.set(e, i)
  }
  setPosition(e) {
    this.setBufferData("position", e)
  }
  setBufferData(e, t) {
    const n = this,
      i = n._gl,
      o = n.cache.get(i);
    if (i) {
      let a = o._bufferMap[e];
      i.bindVertexArray(o._vao), a ? (a.bindData(t), "position" === e && bo.fromPoints(t, n.boundingBox)) : (a = new wo(i, {
        name: e,
        data: t
      }), o._bufferMap[e] = a, a.bindAttrib(e), "position" === e && (o._vertexBuffer = a, bo.fromPoints(t, n.boundingBox)), "instance" === e && (o._instanceBuffer = a), "color" === e && (n._color = !0))
    } else n._buffers[e] = t, "instance" === e && (n._instance = !0)
  }
  _getGLCache(e) {
    let t = this.cache.get(e);
    return t || (this._gl = e, this._init(e), t = this.cache.get(e)), t
  }
  bind(e) {
    const t = this,
      n = this._getGLCache(e);
    e._vao !== t && (e.bindVertexArray(n._vao), e._vao = t)
  }
  draw(e, t, n) {
    const i = this;
    i.bind(e);
    const o = i.cache.get(e);
    if (i._instanceBuffer)
      if (o._indexBuffer) {
        const {
          elementType: n
        } = o._indexBuffer;
        e.drawElementsInstanced(i._mode, o._indexBuffer.count, n, t || 0, i._instanceBuffer.instanceCount)
      } else e.drawArraysInstanced(i._mode, t || 0, o._vertexBuffer.count, o._instanceBuffer.instanceCount);
    else if (o._indexBuffer)
      if (i._counts) i._counts.forEach(t => {
        const {
          elementType: n,
          elementSize: a
        } = o._indexBuffer;
        e.drawElements(i._mode, t.count, n, t.offset * a)
      });
      else {
        const {
          elementType: n
        } = o._indexBuffer;
        e.drawElements(i._mode, o._indexBuffer.count, n, t || 0)
      }
    else i._counts ? i._counts.forEach(t => {
      e.drawArrays(i._mode, t.offset, t.count)
    }) : e.drawArrays(i._mode, t || 0, n || o._vertexBuffer.count)
  }
  bindFeedback(e) {
    const t = this._getGLCache(e);
    e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, 0, t._vertexBuffer.buffer)
  }
  drawFeedback(e, t, n) {
    e.enable(e.RASTERIZER_DISCARD), e.beginTransformFeedback(this._mode), this.draw(e, t, n), e.endTransformFeedback(), e.disable(e.RASTERIZER_DISCARD)
  }
  dispose(e) {
    const t = this,
      n = t.cache.get(e);
    if (!n) return;
    const i = n._bufferMap;
    e && (Object.keys(i).forEach(e => {
      i[e].dispose()
    }), e.deleteVertexArray(n._vao), n._vao = null, t._gl = null, n._bufferMap = {}, t._program = null), Do.COUNT--
  }
  intersect(e, t) {
    if ("TRIANGLES" !== this.__mode && "TRIANGLE_STRIP" !== this.__mode && "TRIANGLE_FAN" !== this.__mode) return null;
    const n = this.cache.get(this._gl),
      i = n._indexBuffer && n._indexBuffer.data,
      o = n._vertexBuffer.data,
      {
        size: a
      } = n._vertexBuffer,
      r = i && i.length || n._vertexBuffer.count;
    let s, l = Number.MAX_VALUE,
      u = !1;

    function c() {
      Y.sub(Eo, Oo, Mo), Y.sub(Ao, No, Mo), Y.cross(Ro, t, Ao);
      const n = Y.dot(Eo, Ro);
      if (n > -Po && n < Po) return !1;
      const i = 1 / n;
      Y.sub(Co, e, Mo);
      const o = Y.dot(Co, Ro) * i;
      if (o < 0 || o > 1) return !1;
      Y.cross(Lo, Co, Eo);
      const a = Y.dot(t, Lo) * i;
      return !(a < 0 || o + a > 1) && (s = Y.dot(Ao, Lo) * i) >= 0
    }
    if (i) {
      let e = 0;
      for (let t = 0; t < r; t += 3) e = 3 * i[t], Y.set(Mo, o[e], o[e + 1], o[e + 2]), e = 3 * i[t + 1], Y.set(Oo, o[e], o[e + 1], o[e + 2]), e = 3 * i[t + 2], Y.set(No, o[e], o[e + 1], o[e + 2]), c() && s < l && (l = s, u || (u = !0))
    } else {
      let e = 0;
      for (let t = 0; t < r; t += a) Y.set(Mo, o[e++], o[e++], o[e++]), Y.set(Oo, o[e++], o[e++], o[e++]), Y.set(No, o[e++], o[e++], o[e++]), c() && s < l && (l = s, u || (u = !0))
    }
    if (u) {
      const n = Y.create();
      return Y.scaleAndAdd(n, e, t, l), {
        position: n,
        t: l
      }
    }
    return null
  }
}
Do.COUNT = 0;
const zo = {},
  Fo = {};

function Uo(e, t) {
  const n = [],
    i = [],
    o = [],
    a = [];
  let r;
  for (r = 0; r < e.length; r += 3) a[r + 0] = 0, a[r + 1] = 0, a[r + 2] = 0;
  if (t)
    for (r = 0; r < t.length; r += 3) {
      n[0] = e[3 * t[r + 2] + 0] - e[3 * t[r + 1] + 0], n[1] = e[3 * t[r + 2] + 1] - e[3 * t[r + 1] + 1], n[2] = e[3 * t[r + 2] + 2] - e[3 * t[r + 1] + 2], i[0] = e[3 * t[r] + 0] - e[3 * t[r + 1] + 0], i[1] = e[3 * t[r] + 1] - e[3 * t[r + 1] + 1], i[2] = e[3 * t[r] + 2] - e[3 * t[r + 1] + 2], o[0] = n[1] * i[2] - n[2] * i[1], o[1] = n[2] * i[0] - n[0] * i[2], o[2] = n[0] * i[1] - n[1] * i[0];
      for (let e = 0; e < 3; e++) a[3 * t[r + e] + 0] += o[0], a[3 * t[r + e] + 1] += o[1], a[3 * t[r + e] + 2] += o[2]
    } else
      for (r = 0; r < e.length; r += 9) {
        n[0] = e[r + 6 + 0] - e[r + 3 + 0], n[1] = e[r + 6 + 1] - e[r + 3 + 1], n[2] = e[r + 6 + 2] - e[r + 3 + 2], i[0] = e[r + 0] - e[r + 3 + 0], i[1] = e[r + 1] - e[r + 3 + 1], i[2] = e[r + 2] - e[r + 3 + 2], o[0] = n[1] * i[2] - n[2] * i[1], o[1] = n[2] * i[0] - n[0] * i[2], o[2] = n[0] * i[1] - n[1] * i[0];
        for (let e = 0; e < 3; e++) a[r + 3 * e + 0] += o[0], a[r + 3 * e + 1] += o[1], a[r + 3 * e + 2] += o[2]
      }
  for (r = 0; r < e.length; r += 3) {
    o[0] = a[r + 0], o[1] = a[r + 1], o[2] = a[r + 2];
    let e = Y.length(o);
    0 === e && (e = 1), a[r + 0] = o[0] / e, a[r + 1] = o[1] / e, a[r + 2] = o[2] / e
  }
  return new Float32Array(a)
}

function ko(e) {
  const t = e.index,
    n = e.uv.data || e.uv,
    i = e.position.data || e.position,
    o = [],
    a = [],
    r = Y.create(),
    s = Y.create(),
    l = Y.create(),
    u = Lt.create(),
    c = Lt.create(),
    d = Lt.create(),
    f = Y.create(),
    h = Y.create(),
    p = Y.create();
  let m, _;
  for (m = 0, _ = i.length / 3; m < _; m++) o[m] = Y.create();
  for (m = 0, _ = t.length; m < _; m += 3) {
    const e = t[m],
      a = t[m + 1],
      _ = t[m + 2];
    Y.set(r, i[3 * e], i[3 * e + 1], i[3 * e + 2]), Y.set(s, i[3 * a], i[3 * a + 1], i[3 * a + 2]), Y.set(l, i[3 * _], i[3 * _ + 1], i[3 * _ + 2]), Y.subtract(f, s, r), Y.subtract(h, l, r), Lt.set(u, n[2 * e], n[2 * e + 1]), Lt.set(c, n[2 * a], n[2 * a + 1]), Lt.set(d, n[2 * _], n[2 * _ + 1]);
    const v = c[0] - u[0],
      g = c[1] - u[1],
      b = d[0] - u[0],
      T = d[1] - u[1],
      x = 1 / (v * T - b * g);
    Y.set(p, x * (T * f[0] - g * h[0]), x * (T * f[1] - g * h[1]), x * (T * f[2] - g * h[2])), Y.add(o[e], o[e], p), Y.add(o[a], o[a], p), Y.add(o[_], o[_], p)
  }
  for (m = 0, _ = o.length; m < _; m++) Y.normalize(o[m], o[m]), a.push(o[m][0], o[m][1], o[m][2], 1);
  return new Float32Array(a)
}

function Ho(e, t) {
  const {
    buffers: n
  } = t;
  return n.normal || (n.normal = Uo(n.position, n.index)), n.position0 && !n.normal0 && (n.normal0 = Uo(n.position0, n.index)), !n.tangent && n.uv && (n.tangent = ko(n)), t.buffers = n, zo[e] = t, t
}

function Jo(e) {
  Object.keys(Fo).forEach(t => {
    Fo[t].dispose(e)
  })
}

function Vo(e = 1) {
  const t = .5 * e;
  return {
    position: new Float32Array([-t, -t, t, t, -t, t, t, t, t, -t, t, t, -t, -t, -t, -t, t, -t, t, t, -t, t, -t, -t, -t, t, -t, -t, t, t, t, t, t, t, t, -t, -t, -t, -t, t, -t, -t, t, -t, t, -t, -t, t, t, -t, -t, t, t, -t, t, t, t, t, -t, t, -t, -t, -t, -t, -t, t, -t, t, t, -t, t, -t]),
    normal: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0]),
    uv: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1]),
    index: [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]
  }
}

function jo(e = 1, t = 8, n = 0, i = 2 * Math.PI) {
  const o = [],
    a = [],
    r = [],
    s = [];
  a.push(0, 0, 0), r.push(0, 0, 1), s.push(.5, .5);
  for (let o = 0, l = 3; o <= t; o++, l += 3) {
    const u = n + o / t * i;
    a.push(e * Math.cos(u), e * Math.sin(u), 0), r.push(0, 0, 1), s.push((a[l] / e + 1) / 2, (a[l + 1] / e + 1) / 2)
  }
  for (let e = 1; e <= t; e++) o.push(e, e + 1, 0);
  return {
    position: new Float32Array(a),
    normal: new Float32Array(r),
    uv: new Float32Array(s),
    index: o
  }
}

function Bo(e, t, n, i, o = 2 * Math.PI) {
  const a = [],
    r = [],
    s = [],
    l = [];
  let u, c, d;
  for (u = 0; u <= e; u++) {
    d = 2 * Math.PI * u / e;
    const l = Math.cos(d),
      f = Math.sin(d);
    for (c = 0; c <= t; c++) {
      const d = o * c / t,
        h = (l * n + i) * Math.cos(d),
        p = f * n,
        m = (l * n + i) * Math.sin(d),
        _ = l * Math.cos(d),
        v = l * Math.sin(d),
        g = 1 / t * c;
      let b = 1 / e * u + .5;
      b > 1 && (b -= 1), b = 1 - b, a.push(h, p, m), r.push(_, f, v), s.push(g, b)
    }
  }
  for (u = 0; u < e; u++)
    for (c = 0; c < t; c++) d = (t + 1) * u + c, l.push(d, d + t + 1, d + 1), l.push(d + t + 1, d + t + 2, d + 1);
  return {
    position: new Float32Array(a),
    normal: new Float32Array(r),
    uv: new Float32Array(s),
    index: l
  }
}

function Xo(e = 1, t = 8, n = 6, i = 0, o = 2 * Math.PI, a = 0, r = Math.PI) {
  const s = a + r;
  let l = 0;
  const u = [],
    c = Y.create(),
    d = Y.create(),
    f = [],
    h = [],
    p = [],
    m = [];
  for (let s = 0; s <= n; s++) {
    const f = [],
      _ = s / n;
    for (let n = 0; n <= t; n++) {
      const s = n / t;
      c[0] = -e * Math.cos(i + s * o) * Math.sin(a + _ * r), c[1] = e * Math.cos(a + _ * r), c[2] = e * Math.sin(i + s * o) * Math.sin(a + _ * r), h.push(c[0], c[1], c[2]), Y.normalize(d, c), p.push(d[0], d[1], d[2]), m.push(s, 1 - _), f.push(l++)
    }
    u.push(f)
  }
  for (let e = 0; e < n; e++)
    for (let i = 0; i < t; i++) {
      const t = u[e][i + 1],
        o = u[e][i],
        r = u[e + 1][i],
        l = u[e + 1][i + 1];
      (0 !== e || a > 0) && f.push(t, o, l), (e !== n - 1 || s < Math.PI) && f.push(o, r, l)
    }
  return {
    position: new Float32Array(h),
    normal: new Float32Array(p),
    uv: new Float32Array(m),
    index: f
  }
}

function Go(e = 1, t = 1, n = 1, i = 30, o = 1, a = !1, r = 0, s = 2 * Math.PI) {
  const l = [],
    u = [],
    c = [],
    d = [];
  let f = 0;
  const h = [],
    p = n / 2;

  function m(n) {
    let o, a = 0,
      h = 0;
    const m = Lt.create(),
      _ = Y.create(),
      v = !0 === n ? e : t,
      g = !0 === n ? 1 : -1;
    for (h = f, o = 1; o <= i; o++) u.push(0, p * g, 0), c.push(0, g, 0), d.push(.5, .5), f++;
    for (a = f, o = 0; o <= i; o++) {
      const e = o / i * s + r,
        t = Math.cos(e),
        n = Math.sin(e);
      _[0] = v * n, _[1] = p * g, _[2] = v * t, u.push(_[0], _[1], _[2]), c.push(0, g, 0), m[0] = .5 * t + .5, m[1] = .5 * n * g + .5, d.push(m[0], m[1]), f++
    }
    for (o = 0; o < i; o++) {
      const e = h + o,
        t = a + o;
      !0 === n ? l.push(t, t + 1, e) : l.push(t + 1, t, e)
    }
  }
  return function () {
    let a, m, _ = Y.create();
    const v = Y.create(),
      g = (t - e) / n;
    for (m = 0; m <= o; m++) {
      const l = [],
        b = m / o,
        T = b * (t - e) + e;
      for (a = 0; a <= i; a++) {
        const e = a / i,
          t = e * s + r,
          o = Math.sin(t),
          h = Math.cos(t);
        v[0] = T * o, v[1] = -b * n + p, v[2] = T * h, u.push(v[0], v[1], v[2]), _ = Y.fromValues(o, g, h), Y.normalize(_, _), c.push(_[0], _[1], _[2]), d.push(e, 1 - b), l.push(f++)
      }
      h.push(l)
    }
    for (a = 0; a < i; a++)
      for (m = 0; m < o; m++) {
        const e = h[m][a],
          t = h[m + 1][a],
          n = h[m + 1][a + 1],
          i = h[m][a + 1];
        l.push(e, t, i), l.push(t, n, i)
      }
  }(), !1 === a && (e > 0 && m(!0), t > 0 && m(!1)), {
    position: new Float32Array(u),
    normal: new Float32Array(c),
    uv: new Float32Array(d),
    index: l
  }
}

function Wo(e = 1, t = 1, n = 1, i = 1) {
  const o = e / 2,
    a = t / 2,
    r = n,
    s = i,
    l = r + 1,
    u = s + 1,
    c = e / r,
    d = t / s,
    f = [],
    h = [],
    p = [],
    m = [];
  for (let e = 0; e < u; e++) {
    const t = e * d - a;
    for (let n = 0; n < l; n++) {
      const i = n * c - o;
      h.push(i, -t, 0), p.push(0, 0, 1), m.push(n / r, 1 - e / s)
    }
  }
  for (let e = 0; e < s; e++)
    for (let t = 0; t < r; t++) {
      const n = t + l * e,
        i = t + l * (e + 1),
        o = t + 1 + l * (e + 1),
        a = t + 1 + l * e;
      f.push(n, i, a), f.push(i, o, a)
    }
  return {
    position: new Float32Array(h),
    normal: new Float32Array(p),
    uv: new Float32Array(m),
    index: f
  }
}
let Zo, qo, Ko, Yo = !1;

function Qo(e, t = !0) {
  if (t) {
    Yo || (Yo = !0, Ho("cube", {
      buffers: Vo(1)
    }), Ho("torus", {
      buffers: Bo(32, 32, .25, .5)
    }), Ho("sphere", {
      buffers: Xo(.5, 32, 32)
    }), Ho("cone", {
      buffers: Go(.5, 0, 1, 32, 32, !0, !0)
    }), Ho("cylinder", {
      buffers: Go(.5, .5, 1, 32, 32, !0, !0)
    }), Ho("plane", {
      buffers: Wo(1, 1, 1, 1)
    }));
    let t = Fo[e];
    if (!t) {
      const n = zo[e];
      n && (t = new Do(n), Fo[e] = t)
    }
    return t
  }
  const n = zo[e];
  return n && new Do(n)
}
class $o {
  constructor() {
    this._listeners = {}
  }
  on(e, t, n) {
    if (!e || !t) return this;
    const i = this._listeners,
      o = i[e],
      a = {
        listener: t,
        thisArg: n
      },
      r = t._listener || t;
    return o ? Array.isArray(o) ? o.some(e => (e.listener._listener || e.listener) === r && e.thisArg === a.thisArg) || o.push(a) : (o.listener._listener || o.listener) === r && o.thisArg === a.thisArg || (i[e] = [o, a]) : i[e] = a, this
  }
  once(e, t, n) {
    if (!e || !t) return this;
    const i = this,
      o = o => {
        t.call(n, o), i.off(e, t, n)
      };
    return o._listener = t, i.on(e, o, n), i
  }
  off(e, t, n) {
    if (!e) return this._listeners = {}, this;
    const i = this._listeners,
      o = i[e];
    return Array.isArray(o) ? o.some((e, i) => (e.listener._listener || e.listener) === t && e.thisArg === n && (o.splice(i, 1), !0)) : o && (o.listener._listener || o.listener) === t && o.thisArg === n && delete i[e], t || delete i[e], this
  }
  fire(e) {
    const t = this._listeners,
      n = t[e.type],
      i = t.all;
    let o;
    return o = Array.isArray(n) ? i ? n.concat(i) : n.slice() : n ? i ? [].concat(n, i) : n : Array.isArray(i) ? i.slice() : i, Array.isArray(o) ? o.forEach(t => {
      t.listener.call(t.thisArg, e)
    }) : o && o.listener.call(o.thisArg, e), this
  }
}
let ea, ta, na, ia = !1;
class oa {
  constructor() {
    ia || (ia = !0, Zo = A.create(), qo = A.create(), Ko = A.create());
    this.planes = [Pe.create(), Pe.create(), Pe.create(), Pe.create(), Pe.create(), Pe.create()], this.points = [Y.create(), Y.create(), Y.create(), Y.create(), Y.create(), Y.create(), Y.create(), Y.create()], this.boundingSphere = new ho
  }
  _calculatePlane(e) {
    const {
      planes: t
    } = this;
    Pe.set(t[0], e[3] + e[2], e[7] + e[6], e[11] + e[10], e[15] + e[14]), Pe.set(t[1], e[3] - e[2], e[7] - e[6], e[11] - e[10], e[15] - e[14]), Pe.set(t[2], e[3] + e[0], e[7] + e[4], e[11] + e[8], e[15] + e[12]), Pe.set(t[3], e[3] - e[0], e[7] - e[4], e[11] - e[8], e[15] - e[12]), Pe.set(t[4], e[3] - e[1], e[7] - e[5], e[11] - e[9], e[15] - e[13]), Pe.set(t[5], e[3] + e[1], e[7] + e[5], e[11] + e[9], e[15] + e[13]), t.forEach(e => {
      Pe.scale(e, e, 1 / Y.length(e))
    })
  }
  _calculateBoundingSphere(e, t, n, i, o) {
    const a = Math.tan(e * Math.PI / 180 / 2),
      r = n + t,
      s = n - t,
      l = Math.sqrt(1 + (1 / i) ** 2) * a * i,
      u = l * l,
      {
        boundingSphere: c
      } = this;
    u >= s / r ? (Y.set(c.center, 0, 0, -n), c.radius = n * l) : (Y.set(c.center, 0, 0, -.5 * r * (1 + u)), c.radius = .5 * Math.sqrt(s * s + 2 * (n * n + t * t) * u + r * r * u * u)), Y.transformMat4(c.center, c.center, o)
  }
  _calculatePoints(e, t, n, i, o) {
    const {
      points: a
    } = this, r = Math.tan(e * Math.PI / 180 / 2), s = r * t, l = s * i, u = r * n, c = u * i;
    Y.set(a[0], -l, s, -t), Y.set(a[1], -l, -s, -t), Y.set(a[2], l, -s, -t), Y.set(a[3], l, s, -t), Y.set(a[4], -c, u, -n), Y.set(a[5], -c, -u, -n), Y.set(a[6], c, -u, -n), Y.set(a[7], c, u, -n);
    for (let e = 0; e < 8; e++) Y.transformMat4(a[e], a[e], o)
  }
  fromCamera(e) {
    const {
      fovy: t,
      near: n,
      far: i,
      aspect: o,
      worldMatrix: a,
      projectViewMatrix: r
    } = e;
    this._calculatePlane(r), this._calculateBoundingSphere(t, n, i, o, a), this._calculatePoints(t, n, i, o, a)
  }
  fromMatrix(e, t, n, i, o) {
    A.invert(Ko, e), A.perspective(Zo, t / 180 * Math.PI, o, n, i), A.mul(qo, Zo, e), this._calculatePlane(qo), this._calculateBoundingSphere(t, n, i, o, Ko), this._calculatePoints(t, n, i, o, Ko)
  }
}
let aa = !1;
class ra {
  constructor(e = Y.fromValues(1, 0, 0), t = 0) {
    aa || (aa = !0, ea = Y.create(), ta = Y.create(), na = T.create()), this.normal = e, this.constant = t
  }
  set(e, t) {
    return Y.copy(this.normal, e), this.constant = t, this
  }
  setComponents(e, t, n, i) {
    return Y.set(this.normal, e, t, n), this.constant = i, this
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return Y.copy(this.normal, e), this.constant = -Y.dot(t, this.normal), this
  }
  setFromCoplanarPoints(e, t, n) {
    return Y.sub(ea, n, t), Y.sub(ta, e, t), Y.cross(ea, ea, ta), Y.normalize(ea, ea), this.setFromNormalAndCoplanarPoint(ea, e), this
  }
  clone() {
    return (new ra).copy(this)
  }
  copy(e) {
    return Y.copy(this.normal, e.normal), this.constant = e.constant, this
  }
  normalize() {
    const e = 1 / Y.length(this.normal);
    return Y.scale(this.normal, this.normal, e), this.constant *= e, this
  }
  negate() {
    return this.constant *= -1, Y.negate(this.normal, this.normal), this
  }
  distanceToPoint(e) {
    return Y.dot(this.normal, e) + this.constant
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius
  }
  projectPoint(e, t) {
    return Y.copy(t, this.normal), Y.scale(t, t, -this.distanceToPoint(e)), Y.add(t, t, e), t
  }
  intersectLine(e, t) {
    const n = e.delta(ea),
      i = Y.dot(this.normal, n);
    if (0 === i) return 0 === this.distanceToPoint(e.start) ? Y.copy(t, e.start) : void 0;
    const o = -(Y.dot(e.start, this.normal) + this.constant) / i;
    return o < 0 || o > 1 ? void 0 : (Y.copy(t, n), Y.scale(t, t, o), Y.add(t, t, e.start), t)
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0
  }
  intersectsBox(e) {
    return e.intersectsPlane(this)
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this)
  }
  coplanarPoint(e) {
    return Y.copy(e, this.normal), Y.scale(e, e, -this.constant), e
  }
  applyMatrix4(e, t) {
    const n = t || T.normalFromMat4(na, e);
    return this.coplanarPoint(ea), Y.transformMat4(ea, ea, e), Y.transformMat3(this.normal, this.normal, n), Y.normalize(this.normal, this.normal), this.constant = -Y.dot(ea, this.normal), this
  }
  translate(e) {
    return this.constant -= Y.dot(e, this.normal), this
  }
  equals(e) {
    return Y.equals(e.normal, this.normal) && e.constant === this.constant
  }
}
let sa = 0,
  la = !0,
  ua = !1;
class ca {
  constructor(e) {
    ua || (ua = !0, la = !Gi());
    ca.COUNT++, this.id = ++sa, this._options = e, this.type = e.type || "2D", this._initialized = !1, this._imageLoaded = !1, this._loadError = !1, this._texture = null, this._unit = 0
  }
  bind(e, t) {
    const n = this;
    n._gl || (n._gl = e, n._init && n._init(e)), n._texture || (n._texture = e.createTexture());
    const i = n._options,
      o = e[`TEXTURE_${i.type||"2D"}`];
    let a = "RGBA";
    const r = i.format || "RGBA8";
    if ("RGB16F" === r && (a = "RGB"), "DEPTH_COMPONENT16" !== r && "DEPTH_COMPONENT24" !== r && "DEPTH_COMPONENT32F" !== r || (a = "DEPTH_COMPONENT"), "RG8" === r && (a = "RG"), n._unit = t, e.activeTexture(e.TEXTURE0 + t), e.bindTexture(o, n._texture), !n._initialized) {
      n._initialized = !0;
      const {
        width: t,
        height: s
      } = i;
      if (e._anisotropicExt && (null == i.anisotropy || i.anisotropy > 1)) {
        let t = i.anisotropy || 16;
        t = Math.min(e._max_anisotropy, t), e.texParameterf(o, e._anisotropicExt.TEXTURE_MAX_ANISOTROPY_EXT, t)
      }
      if (i.compareFunc && e.texParameteri(o, e.TEXTURE_COMPARE_FUNC, e[i.compareFunc]), i.compareMode && e.texParameteri(o, e.TEXTURE_COMPARE_MODE, e[i.compareMode]), e.texParameteri(o, e.TEXTURE_MAG_FILTER, e[i.magFilter || "LINEAR"]), e.texParameteri(o, e.TEXTURE_MIN_FILTER, e[i.minFilter || (t && s ? "LINEAR" : "LINEAR_MIPMAP_NEAREST")]), e.texParameteri(o, e.TEXTURE_WRAP_S, e[i.wrapS || "REPEAT"]), e.texParameteri(o, e.TEXTURE_WRAP_T, e[i.wrapT || "REPEAT"]), la && e.texParameteri(o, e.TEXTURE_WRAP_R, e[i.wrapR || "REPEAT"]), t && s)
        if ("CUBE_MAP" === i.type)
          for (let n = 0; n < 6; n++) e.texImage2D(n + e.TEXTURE_CUBE_MAP_POSITIVE_X, 0, e[r], t, s, 0, e[a], e[i.dataType || "UNSIGNED_BYTE"], i.data || null);
        else i.data ? e.texImage2D(o, 0, e[r], t, s, 0, e[a], e[i.dataType || "UNSIGNED_BYTE"], i.data || null) : "2D_ARRAY" === i.type ? e.texStorage3D(o, 1, e[r], t, s, i.layers) : e.texStorage2D(o, 1, e[r], t, s);
      else if (!n._imageLoaded)
        if ("CUBE_MAP" === i.type)
          for (let t = 0; t < 6; t++) e.texImage2D(t + e.TEXTURE_CUBE_MAP_POSITIVE_X, 0, e[r], 1, 1, 0, e[a], e[i.dataType || "UNSIGNED_BYTE"], new Uint8Array([127, 127, 127, 255]));
        else e.texImage2D(o, 0, e[r], 1, 1, 0, e[a], e[i.dataType || "UNSIGNED_BYTE"], new Uint8Array([127, 127, 127, 255]))
    }
  }
  dispose() {
    const e = this._gl,
      t = e[`TEXTURE_${this._options.type||"2D"}`];
    e.activeTexture(e.TEXTURE0 + this._unit), e.bindTexture(t, null), e.deleteTexture(this._texture), this._texture = null, this._gl = null, ca.COUNT--
  }
}
ca.COUNT = 0;
let da = 0;
class fa {
  constructor(e) {
    this.id = ++da, this._width = e.width, this._height = e.height, this._dataType = e.dataType, this._format = e.format, this._type = e.type, this._layers = e.layers, this._wrapS = e.wrapS || "CLAMP_TO_EDGE", this._wrapT = e.wrapT || "CLAMP_TO_EDGE", this._wrapR = e.wrapR || "CLAMP_TO_EDGE", this._minFilter = e.minFilter || "NEAREST", this._magFilter = e.magFilter || "NEAREST", this._compareFunc = e.compareFunc, this._compareMode = e.compareMode, this._depth = e.depth, this._stencil = e.stencil, this._colorCount = null == e.colorCount ? 1 : e.colorCount, this._clearColor = e.clearColor || new Float32Array([0, 0, 0, 0]), this._sharedFramebuffer = e.sharedFramebuffer, this._textures = [], this._renderbuffer = null, this._framebuffer = null, this._gl = null
  }
  _init() {
    fa.COUNT++;
    const e = this,
      t = e._gl,
      n = e._width,
      i = e._height,
      o = e._depth,
      a = e._stencil,
      r = e._textures;
    e._framebuffer = t.createFramebuffer();
    for (let t = 0; t < e._colorCount; t++) r[t] = new ca({
      type: e._type,
      layers: e._layers,
      width: n,
      height: i,
      minFilter: e._minFilter,
      magFilter: e._magFilter,
      wrapS: e._wrapS,
      wrapT: e._wrapT,
      wrapR: e._wrapR,
      dataType: e._dataType,
      format: e._format,
      compareFunc: e._compareFunc,
      compareMode: e._compareMode,
      anisotropy: 0
    });
    if ("2D_ARRAY" !== e._type) {
      t.bindFramebuffer(t.FRAMEBUFFER, e._framebuffer);
      const s = [];
      for (let n = 0; n < e._colorCount; n++)
        if (r[n].bind(t, 0), e._compareMode) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r[n]._texture, 0);
        else {
          const e = t.COLOR_ATTACHMENT0 + n;
          s.push(e), t.framebufferTexture2D(t.FRAMEBUFFER, e, t.TEXTURE_2D, r[n]._texture, 0)
        } if (o && o.format) e._depthTexture = new ca({
        width: n,
        height: i,
        minFilter: o.minFilter || "NEAREST",
        magFilter: o.magFilter || "NEAREST",
        wrapS: o.wrapS || "CLAMP_TO_EDGE",
        wrapT: o.wrapT || "CLAMP_TO_EDGE",
        format: o.format,
        anisotropy: 0
      }), e._depthTexture.bind(t, 0), t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, e._depthTexture._texture, 0);
      else if (o || a) {
        let r, s;
        o && !a ? (r = t.DEPTH_COMPONENT16, s = t.DEPTH_ATTACHMENT) : o ? (r = t.DEPTH_STENCIL, s = t.DEPTH_STENCIL_ATTACHMENT) : (r = t.STENCIL_INDEX8, s = t.STENCIL_ATTACHMENT), e._sharedFramebuffer && e._sharedFramebuffer._renderbuffer ? e._renderbuffer = e._sharedFramebuffer._renderbuffer : e._renderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, e._renderbuffer), t.renderbufferStorage(t.RENDERBUFFER, r, n, i), t.framebufferRenderbuffer(t.FRAMEBUFFER, s, t.RENDERBUFFER, e._renderbuffer)
      }
      s.length && t.drawBuffers(s), t.bindFramebuffer(t.FRAMEBUFFER, null), t.bindRenderbuffer(t.RENDERBUFFER, null), t.bindTexture(t.TEXTURE_2D, null)
    }
  }
  getWidth() {
    return this._width
  }
  getHeight() {
    return this._height
  }
  bind(e, t = 0, n = !0) {
    const i = this;
    if (i._gl || (i._gl = e, i._init()), e.bindFramebuffer(e.FRAMEBUFFER, i._framebuffer), e.viewport(0, 0, i._width, i._height), "2D_ARRAY" === i._type && (i._textures[0].bind(e, 0), e.framebufferTextureLayer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, i._textures[0]._texture, 0, t)), n) {
      if ("2D_ARRAY" !== i._type && !i._compareMode)
        for (let t = 0; t < i._colorCount; t++) e.clearBufferfv(e.COLOR, t, i._clearColor);
      (i._depth || i._compareMode) && e.clearBufferfi(e.DEPTH_STENCIL, 0, 1, 0)
    }
  }
  unbind() {
    const e = this._gl;
    e.bindFramebuffer(e.FRAMEBUFFER, e._renderFramebuffer), e.viewport(0, 0, e.canvas.width, e.canvas.height)
  }
  bindTexture(e, t) {
    this._textures[t || 0].bind(this._gl, e)
  }
  bindDepthTexture(e) {
    this._depthTexture && this._depthTexture.bind(this._gl, e)
  }
  getTexture(e) {
    return this._textures[e]
  }
  setSize(e, t) {
    this._width === e && this._height === t || (this.dispose(), this._width = e, this._height = t)
  }
  dispose() {
    const e = this,
      t = e._gl;
    e._textures.forEach(e => {
      e.dispose()
    }), e._depthTexture && e._depthTexture.dispose(), e._renderbuffer && t.deleteRenderbuffer(e._renderbuffer), e._framebuffer && t.deleteFramebuffer(e._framebuffer), e._textures = [], e._depthTexture = null, e._renderbuffer = null, e._framebuffer = null, e._gl = null, fa.COUNT--
  }
}
fa.COUNT = 0;
const ha = "#version 300 es\nprecision highp float;\nlayout(std140, column_major) uniform;\n\n",
  pa = "#ifdef MORPH_TARGETS\n  #if MORPH_TARGETS_COUNT > 0\n    layout(location = 9) in vec3 a_position0;\n  #endif\n  #if MORPH_TARGETS_COUNT > 1\n    layout(location = 10) in vec3 a_position1;\n  #endif\n  #if MORPH_TARGETS_COUNT > 2\n    in vec3 a_position2;\n  #endif\n  #if MORPH_TARGETS_COUNT > 3\n    in vec3 a_position3;\n  #endif\n  uniform float u_weights[MORPH_TARGETS_COUNT];\n#endif\n\n#ifdef SKIN\n  layout(location = 9) in vec4 a_joint;\n  layout(location = 10) in vec4 a_weight;\n  uniform mat4 u_jointMatrix[SKIN_JOINTS_COUNT];\n#endif\n\n#ifdef INSTANCE\n  layout(location = 5) in mat4 a_instance;\n#endif\n\n#if defined(LIGHT) || defined(ENV_MAP)\n  layout(location = 1) in vec3 a_normal;\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      layout(location = 11) in vec3 a_normal0;\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      layout(location = 12) in vec3 a_normal1;\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      in vec3 a_normal2;\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      in vec3 a_normal3;\n    #endif\n  #endif\n  #ifdef SKIN\n    uniform mat4 u_jointNormalMatrix[SKIN_JOINTS_COUNT];\n  #endif\n  uniform mat3 u_normalMatrix;\n  out vec3 v_normal;\n#endif\n\n#if defined(NORMAL_MAP)\n  layout(location = 3) in vec4 a_tangent;\n  out mat3 v_TBN;\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      layout(location = 13) in vec4 a_tangent0;\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      layout(location = 14) in vec4 a_tangent1;\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      in vec4 a_tangent2;\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      in vec4 a_tangent3;\n    #endif\n  #endif\n#endif\n\n#if defined(DIFFUSE_MAP) || defined(NORMAL_MAP) || defined(BUMP_MAP) || defined(EMISSIVE_MAP) || defined(AMBIENT_MAP) || defined(SPECULAR_MAP)\n  layout(location = 2) in vec2 a_uv;\n  uniform mat3 u_textureMatrix;\n  out vec2 v_uv;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  out vec3 v_modelPosition;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  out vec3 v_worldPosition;\n#endif\n\n#ifdef VERTEX_COLOR\n  layout(location = 4) in vec4 a_color;\n  out vec4 v_color;\n#endif\n\n#ifdef DIRECTION_SHADOW\n  #define CASCADED_COUNT 4\n  uniform mat4 u_shadowMapProjectViewMatrix_0;\n  uniform mat4 u_shadowMapProjectViewMatrix_1;\n  uniform mat4 u_shadowMapProjectViewMatrix_2;\n  uniform mat4 u_shadowMapProjectViewMatrix_3;\n  out vec4 v_shadowMapPosition[CASCADED_COUNT];\n#endif\n#ifdef SPOT_SHADOW\n  #if SPOT_SHADOW > 0\n    uniform mat4 u_spotShadowMapProjectViewMatrix_0;\n  #endif\n  #if SPOT_SHADOW > 1\n    uniform mat4 u_spotShadowMapProjectViewMatrix_1;\n  #endif\n  #if SPOT_SHADOW > 2\n    uniform mat4 u_spotShadowMapProjectViewMatrix_2;\n  #endif\n  #if SPOT_SHADOW > 3\n    uniform mat4 u_spotShadowMapProjectViewMatrix_3;\n  #endif\n  out vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n#endif\n\n#ifdef POINT\n  uniform float u_pointSize;\n#endif\n\nlayout(location = 0) in vec3 a_position;\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  vec3 position = a_position;\n\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      position += a_position0 * u_weights[0];\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      position += a_position1 * u_weights[1];\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      position += a_position2 * u_weights[2];\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      position += a_position3 * u_weights[3];\n    #endif\n  #endif\n\n  vec4 finalPosition = vec4(position, 1.0);\n\n  #ifdef SKIN\n    mat4 skinMat =\n      a_weight.x * u_jointMatrix[int(a_joint.x)] +\n      a_weight.y * u_jointMatrix[int(a_joint.y)] +\n      a_weight.z * u_jointMatrix[int(a_joint.z)] +\n      a_weight.w * u_jointMatrix[int(a_joint.w)];\n    finalPosition = skinMat * finalPosition;\n  #endif\n\n  #ifdef INSTANCE\n    finalPosition = a_instance * finalPosition;\n  #else\n    finalPosition = u_modelMatrix * finalPosition;\n  #endif\n\n  vec4 worldPosition = finalPosition;\n  gl_Position = u_projectViewMatrix * worldPosition;\n  #ifdef POINT\n    gl_PointSize = u_pointSize;\n  #endif\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    v_worldPosition = worldPosition.xyz;\n  #endif\n\n  #ifdef DIRECTION_SHADOW\n    v_shadowMapPosition[0] = u_shadowMapProjectViewMatrix_0 * worldPosition;\n    v_shadowMapPosition[1] = u_shadowMapProjectViewMatrix_1 * worldPosition;\n    v_shadowMapPosition[2] = u_shadowMapProjectViewMatrix_2 * worldPosition;\n    v_shadowMapPosition[3] = u_shadowMapProjectViewMatrix_3 * worldPosition;\n  #endif\n  #ifdef SPOT_SHADOW\n    #if SPOT_SHADOW > 0\n      v_spotShadowMapPosition[0] = u_spotShadowMapProjectViewMatrix_0 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 1\n      v_spotShadowMapPosition[1] = u_spotShadowMapProjectViewMatrix_1 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 2\n      v_spotShadowMapPosition[2] = u_spotShadowMapProjectViewMatrix_2 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 3\n      v_spotShadowMapPosition[3] = u_spotShadowMapProjectViewMatrix_3 * worldPosition;\n    #endif\n  #endif\n\n  #if defined(LIGHT) || defined(ENV_MAP)\n    vec3 finalNormal = a_normal;\n    #ifdef MORPH_TARGETS\n      #if MORPH_TARGETS_COUNT > 0\n        finalNormal += a_normal0 * u_weights[0];\n      #endif\n      #if MORPH_TARGETS_COUNT > 1\n        finalNormal += a_normal1 * u_weights[1];\n      #endif\n      #if MORPH_TARGETS_COUNT > 2\n        finalNormal += a_normal2 * u_weights[2];\n      #endif\n      #if MORPH_TARGETS_COUNT > 3\n        finalNormal += a_normal3 * u_weights[3];\n      #endif\n    #endif\n    #ifdef SKIN\n      mat4 skinNormalMat =\n        a_weight.x * u_jointNormalMatrix[int(a_joint.x)] +\n        a_weight.y * u_jointNormalMatrix[int(a_joint.y)] +\n        a_weight.z * u_jointNormalMatrix[int(a_joint.z)] +\n        a_weight.w * u_jointNormalMatrix[int(a_joint.w)];\n      finalNormal = mat3(skinNormalMat) * finalNormal;\n    #endif\n    v_normal = u_normalMatrix * finalNormal;\n  #endif\n\n  #if defined(NORMAL_MAP)\n    vec4 finalTangent = a_tangent;\n    #ifdef MORPH_TARGETS\n      #if MORPH_TARGETS_COUNT > 0\n        finalTangent += a_tangent0 * u_weights[0];\n      #endif\n      #if MORPH_TARGETS_COUNT > 1\n        finalTangent += a_tangent1 * u_weights[1];\n      #endif\n      #if MORPH_TARGETS_COUNT > 2\n        finalTangent += a_tangent2 * u_weights[2];\n      #endif\n      #if MORPH_TARGETS_COUNT > 3\n        finalTangent += a_tangent3 * u_weights[3];\n      #endif\n    #endif\n    vec3 normal = normalize(finalNormal);\n    vec3 tangent = normalize(finalTangent.xyz);\n    vec3 bitangent = cross(normal, tangent) * finalTangent.w;\n    v_TBN = mat3(u_modelMatrix) * mat3(tangent, bitangent, normal);\n  #endif\n\n  #if defined(DIFFUSE_MAP) || defined(NORMAL_MAP) || defined(BUMP_MAP) || defined(EMISSIVE_MAP) || defined(AMBIENT_MAP) || defined(SPECULAR_MAP)\n    #ifdef FLIP_Y\n      v_uv = (u_textureMatrix * vec3(a_uv.x, 1.0 - a_uv.y, 1.0)).xy;\n    #else\n      v_uv = (u_textureMatrix * vec3(a_uv, 1.0)).xy;\n    #endif\n  #endif\n\n  #ifdef VERTEX_COLOR\n    v_color = a_color;\n  #endif\n\n  #if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n    v_modelPosition = finalPosition.xyz;\n  #endif\n}\n",
  ma = '#ifdef VERTEX_COLOR\n  in vec4 v_color;\n#endif\n\n#ifdef DIFFUSE_MAP\n  uniform sampler2D u_diffuseSampler;\n#endif\n\n#ifdef DIFFUSE_CUBE_MAP\n  uniform samplerCube u_diffuseSampler;\n#endif\n\n#if defined(LIGHT) || defined(ENV_MAP)\n  in vec3 v_normal;\n#endif\n\n#if defined(DIFFUSE_MAP) || defined(NORMAL_MAP) || defined(BUMP_MAP) || defined(EMISSIVE_MAP) || defined(AMBIENT_MAP) || defined(SPECULAR_MAP)\n  in vec2 v_uv;\n#endif\n\n#ifdef ENV_MAP\n  uniform samplerCube u_envSampler;\n#endif\n\n#ifdef EMISSIVE_MAP\n  uniform sampler2D u_emissiveSampler;\n  uniform vec3 u_emissiveColor;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  uniform vec3 u_eyePosition;\n  in vec3 v_worldPosition;\n#endif\n\n#ifdef LIGHT\n  uniform vec3 u_ambientLightColor;\n  uniform vec3 u_ambientColor;\n  uniform float u_shininess;\n\n  #ifdef AMBIENT_MAP\n    uniform sampler2D u_ambientSampler;\n  #endif\n  #ifdef SPECULAR_MAP\n    uniform sampler2D u_specularSampler;\n  #else\n    uniform vec3 u_specularColor;\n  #endif\n  #if defined(NORMAL_MAP)\n    uniform sampler2D u_normalSampler;\n    in mat3 v_TBN;\n  #endif\n  \n  #if defined(BUMP_MAP)\n    uniform sampler2D u_bumpSampler;\n    uniform float u_bumpScale;\n  \n    //Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen\n    // http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf\n    // https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderChunk/bumpmap_pars_fragment.glsl\n    vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm) {\n      vec2 dSTdx = dFdx(v_uv);\n      vec2 dSTdy = dFdy(v_uv);\n      float Hll = u_bumpScale * texture(u_bumpSampler, v_uv).x;\n      float dBx = u_bumpScale * texture(u_bumpSampler, v_uv + dSTdx).x - Hll;\n      float dBy = u_bumpScale * texture(u_bumpSampler, v_uv + dSTdy).x - Hll;\n  \n      vec3 vSigmaX = vec3(dFdx(surf_pos.x), dFdx(surf_pos.y), dFdx(surf_pos.z));\n      vec3 vSigmaY = vec3(dFdy(surf_pos.x), dFdy(surf_pos.y), dFdy(surf_pos.z));\n      vec3 vN = surf_norm;\n      vec3 R1 = cross(vSigmaY, vN);\n      vec3 R2 = cross(vN, vSigmaX);\n  \n      float fDet = dot(vSigmaX, R1);\n      fDet *= (float(gl_FrontFacing) * 2.0 - 1.0);\n  \n      vec3 vGrad = sign(fDet) * (dBx * R1 + dBy * R2);\n      return normalize(abs(fDet) * surf_norm - vGrad);\n    }\n  #endif\n\n  #define PCF_SHADOW\n  #ifdef DIRECTION_SHADOW\n    #define CASCADED_COUNT 4\n    in vec4 v_shadowMapPosition[CASCADED_COUNT];\n    uniform highp sampler2DArrayShadow u_directionShadowMapSampler;\n    uniform vec4 u_cascadedEnd;\n  \n    float calculateDirectionShadow(int layer) {\n      vec3 position = v_shadowMapPosition[layer].xyz / v_shadowMapPosition[layer].w;\n      position = position * 0.5 + 0.5;\n      if (position.x <= 0.0 || position.x >= 1.0 || position.y <= 0.0 || position.y >= 1.0) {\n        return 1.0;\n      }\n      vec4 shadowUv = vec4(position.xy, float(layer), position.z - 0.005);\n  \n      #ifdef PCF_SHADOW\n        vec2 size = 1.0 / vec2(2048.0, 2048.0);\n        float depth = 0.0;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = texture(u_directionShadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n        return depth;\n      #else\n        float depth = texture(u_directionShadowMapSampler, shadowUv);\n        return depth;\n      #endif\n    }\n  #endif\n  \n  #ifdef POINT_SHADOW\n    const float pointLightNear = 0.1;\n    const float pointLightFar = 1000.0;\n    #if POINT_SHADOW > 0\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_0;\n    #endif\n    #if POINT_SHADOW > 1\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_1;\n    #endif\n    #if POINT_SHADOW > 2\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_2;\n    #endif\n    #if POINT_SHADOW > 3\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_3;\n    #endif\n    // https://stackoverflow.com/questions/10786951/omnidirectional-shadow-mapping-with-depth-cubemap\n    float vectorToDepthValue(vec3 vec, float n, float f) {\n      vec3 absVec = abs(vec);\n      float localZcomp = max(absVec.x, max(absVec.y, absVec.z));\n      float normZComp = (f + n) / (f - n) - (2.0 * f * n) / (f - n) / localZcomp;\n      return (normZComp + 1.0) * 0.5;\n    }\n  \n    float calculatePointShadow(samplerCubeShadow shadowMapSampler, vec3 lightToPosition) {\n      float depth = vectorToDepthValue(lightToPosition, pointLightNear, pointLightFar);\n      return texture(shadowMapSampler, vec4(lightToPosition, depth));\n    }\n  #endif\n  \n  #ifdef SPOT_SHADOW\n    in vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n    #if SPOT_SHADOW > 0\n      uniform highp sampler2DShadow u_spotShadowMapSampler_0;\n    #endif\n    #if SPOT_SHADOW > 1\n      uniform highp sampler2DShadow u_spotShadowMapSampler_1;\n    #endif\n    #if SPOT_SHADOW > 2\n      uniform highp sampler2DShadow u_spotShadowMapSampler_2;\n    #endif\n    #if SPOT_SHADOW > 3\n      uniform highp sampler2DShadow u_spotShadowMapSampler_3;\n    #endif\n  \n    float calculateSpotShadow(sampler2DShadow shadowMapSampler, vec4 spotShadowMapPosition) {\n      vec4 position = spotShadowMapPosition;\n  \n      float depth = 0.0;\n      #ifdef PCF_SHADOW\n        vec4 shadowUv = position;\n        vec2 size = 1.0 / vec2(2048.0, 2048.0) * position.w;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = textureProj(shadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n      #else\n        depth = textureProj(shadowMapSampler, position);\n      #endif\n      return depth;\n    }\n  #endif\n\n  struct LightInfo {\n    vec3 diffuseColor;\n    vec3 specularColor;\n  };\n  \n  #if DIRECTION_LIGHT_COUNT\n    struct DirectionLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform DirectionLight u_directionLights[DIRECTION_LIGHT_COUNT];\n  \n    LightInfo calculateDirectionLightInfo(DirectionLight light, vec3 eyeDirection, vec3 normal) {\n      LightInfo info;\n      vec3 lightDirection = normalize(-light.direction);\n      float ndl = dot(lightDirection, normal);\n      float diffuse = max(ndl, 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n  \n      #ifdef DIRECTION_SHADOW\n        if (light.shadow) {\n          int layer = 3;\n          if (gl_FragCoord.z <= u_cascadedEnd.x) {\n            layer = 0;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.y) {\n            layer = 1;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.z) {\n            layer = 2;\n          }\n          float shadow = calculateDirectionShadow(layer);\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      info.diffuseColor = light.diffuseColor * diffuse;\n      info.specularColor = light.specularColor * specular;\n      return info;\n    }\n  #endif\n  \n  #if POINT_LIGHT_COUNT\n    struct PointLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 position;\n      float distance;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform PointLight u_pointLights[POINT_LIGHT_COUNT];\n  \n    LightInfo calculatePointLightInfo(PointLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightToPosition = light.position - v_worldPosition;\n      float distance = length(lightToPosition);\n      vec3 lightDirection = normalize(lightToPosition);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n      #ifdef POINT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if POINT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_0, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_1, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_2, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_3, -lightToPosition);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n  \n  #if SPOT_LIGHT_COUNT\n    struct SpotLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      vec3 position;\n      float distance;\n      float innerAngle;\n      float outerAngle;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform SpotLight u_spotLights[SPOT_LIGHT_COUNT];\n  \n    LightInfo calculateSpotLightInfo(SpotLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightDirection = light.position - v_worldPosition;\n      float distance = length(lightDirection);\n      lightDirection = normalize(lightDirection);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n  \n      #ifdef SPOT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if SPOT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_0, v_spotShadowMapPosition[0]);\n            }\n          #endif\n          #if SPOT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_1, v_spotShadowMapPosition[1]);\n            }\n          #endif\n          #if SPOT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_2, v_spotShadowMapPosition[2]);\n            }\n          #endif\n          #if SPOT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_3, v_spotShadowMapPosition[3]);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      float theta = dot(lightDirection, normalize(-light.direction));\n      float epsilon = light.innerAngle - light.outerAngle;\n      float intensity = clamp((theta - light.outerAngle) / epsilon, 0.0, 1.0);\n      attenuation *= intensity;\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n#endif\n\n#if defined(CLIPPLANE)\n  uniform vec4 u_clipPlane;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  in vec3 v_modelPosition;\n#endif\n\n#ifdef FOG\n  uniform vec3 u_fogColor;\n  uniform float u_fogNear;\n  uniform float u_fogFar;\n#endif\n\n#ifdef ALPHA_TEST\n  uniform float u_alphaCutoff;\n#endif\n\nconst vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nuniform vec4 u_diffuseColor;\nout vec4 fragColor;\n\nvoid main () {\n  #ifdef CLIPPLANE\n    float clipDistance = dot(v_modelPosition, u_clipPlane.xyz);\n    if (clipDistance >= u_clipPlane.w) {\n      discard;\n    }\n  #endif\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n  #endif\n\n  #ifdef DIFFUSE_MAP\n    vec4 baseColor = texture(u_diffuseSampler, v_uv);\n    baseColor.rgb = gammaInput(baseColor.rgb);\n  #else\n    #ifdef DIFFUSE_CUBE_MAP\n      // http://marcinignac.com/blog/pragmatic-pbr-hdr/\n      vec4 baseColor = texture(u_diffuseSampler, normalize(vec3(-v_modelPosition.x, v_modelPosition.y, v_modelPosition.z)));\n      baseColor.rgb = gammaInput(baseColor.rgb);\n    #else\n      vec4 baseColor = vec4(1.0);\n    #endif\n  #endif\n\n  baseColor *= u_diffuseColor;\n\n  #ifdef VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n\n  #ifdef ALPHA_TEST\n    if (baseColor.a < u_alphaCutoff) {\n      discard;\n    }\n    baseColor.a = 1.0;\n  #endif\n  #ifndef BLEND\n    baseColor.a = 1.0;\n  #endif\n\n  vec3 emissiveColor = vec3(0.0);\n  #ifdef EMISSIVE_MAP\n    emissiveColor = u_emissiveColor * texture(u_emissiveSampler, v_uv).rgb;\n  #endif\n\n  #ifdef LIGHT\n    #if defined(NORMAL_MAP)\n      vec3 normal = normalize((texture(u_normalSampler, v_uv) * 2.0 - 1.0).rgb);\n      normal = normalize(v_TBN * normal);\n    #else\n      #if defined(BUMP_MAP)\n        vec3 normal = perturbNormalArb(v_worldPosition, normalize(v_normal));\n      #else\n        vec3 normal = normalize(v_normal);\n      #endif\n    #endif\n\n    if (!gl_FrontFacing) {\n      normal = -normal;\n    }\n\n    vec3 diffuseBase = vec3(0.0);\n    vec3 specularBase = vec3(0.0);\n    vec3 eyeDirection = normalize(eyeSpacePosition);\n\n    #if DIRECTION_LIGHT_COUNT\n      for (int i = 0; i < DIRECTION_LIGHT_COUNT; i++) {\n        DirectionLight light = u_directionLights[i];\n        LightInfo info = calculateDirectionLightInfo(light, eyeDirection, normal);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n      }\n    #endif\n    \n    #if POINT_LIGHT_COUNT\n      int shadowPointLightIndex = 0;\n      for (int i = 0; i < POINT_LIGHT_COUNT; i++) {\n        PointLight light = u_pointLights[i];\n        LightInfo info = calculatePointLightInfo(light, eyeDirection, normal, shadowPointLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowPointLightIndex++;\n        }\n      }\n    #endif\n    \n    #if SPOT_LIGHT_COUNT\n      int shadowSpotLightIndex = 0;\n      for (int i = 0; i < SPOT_LIGHT_COUNT; i++) {\n        SpotLight light = u_spotLights[i];\n        LightInfo info = calculateSpotLightInfo(light, eyeDirection, normal, shadowSpotLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowSpotLightIndex++;\n        }\n      }\n    #endif\n\n    #ifdef AMBIENT_MAP\n      vec3 ambientSamplerColor = texture(u_ambientSampler, v_uv).rgb;\n    #else\n      vec3 ambientSamplerColor = vec3(1.0);\n    #endif\n\n    #ifdef SPECULAR_MAP\n      vec3 specularMaterialColor = gammaInput(texture(u_specularSampler, v_uv).rgb);\n    #else\n      vec3 specularMaterialColor = u_specularColor;\n    #endif\n\n    diffuseBase += u_ambientColor * u_ambientLightColor;\n    specularBase *= specularMaterialColor;\n    vec3 finalColor = diffuseBase;\n    finalColor *= baseColor.rgb * ambientSamplerColor;\n    finalColor += emissiveColor + specularBase;\n    baseColor.rgb = finalColor;\n  #else\n    baseColor.rgb += emissiveColor;\n  #endif\n\n  #ifdef ENV_MAP\n    #ifdef REFRACTIVE\n      vec3 R = refract(-normalize(eyeSpacePosition), normal, 1.0 / 1.52);\n    #else\n      vec3 R = reflect(-normalize(eyeSpacePosition), normal);\n    #endif\n    R.x = -R.x;\n    // TODO Reflection Map\n    baseColor.rgb = mix(baseColor.rgb, baseColor.rgb * gammaInput(texture(u_envSampler, R).rgb), 1.0);\n    // baseColor.rgb = gammaInput(texture(u_envSampler, R).rgb);\n  #endif\n\n  fragColor = baseColor;\n\n  #ifdef FOG\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  #endif\n}\n',
  _a = "#ifdef MORPH_TARGETS\n  #if MORPH_TARGETS_COUNT > 0\n    layout(location = 9) in vec3 a_position0;\n  #endif\n  #if MORPH_TARGETS_COUNT > 1\n    layout(location = 10) in vec3 a_position1;\n  #endif\n  #if MORPH_TARGETS_COUNT > 2\n    in vec3 a_position2;\n  #endif\n  #if MORPH_TARGETS_COUNT > 3\n    in vec3 a_position3;\n  #endif\n  uniform float u_weights[MORPH_TARGETS_COUNT];\n#endif\n\n#ifdef SKIN\n  layout(location = 9) in vec4 a_joint;\n  layout(location = 10) in vec4 a_weight;\n  uniform mat4 u_jointMatrix[SKIN_JOINTS_COUNT];\n#endif\n\n#ifdef INSTANCE\n  layout(location = 5) in mat4 a_instance;\n#endif\n\n#if defined(LIGHT)\n  layout(location = 1) in vec3 a_normal;\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      layout(location = 11) in vec3 a_normal0;\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      layout(location = 12) in vec3 a_normal1;\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      in vec3 a_normal2;\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      in vec3 a_normal3;\n    #endif\n  #endif\n  #ifdef SKIN\n    uniform mat4 u_jointNormalMatrix[SKIN_JOINTS_COUNT];\n  #endif\n  uniform mat3 u_normalMatrix;\n  out vec3 v_normal;\n#endif\n\n#if defined(NORMAL_MAP)\n  layout(location = 3) in vec4 a_tangent;\n  out mat3 v_TBN;\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      layout(location = 13) in vec4 a_tangent0;\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      layout(location = 14) in vec4 a_tangent1;\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      in vec4 a_tangent2;\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      in vec4 a_tangent3;\n    #endif\n  #endif\n#endif\n\n#if defined(BASE_COLOR_MAP) || defined(NORMAL_MAP) || defined(EMISSIVE_MAP) || defined(METALLIC_ROUGHNESS_MAP) || defined(OCCLUSION_MAP) || defined(SPECULAR_MAP) || defined(DIFFUSE_MAP)\n  layout(location = 2) in vec2 a_uv;\n  uniform mat3 u_textureMatrix;\n  out vec2 v_uv;\n  #ifdef USE_UV1\n    layout(location = 15) in vec2 a_uv1;\n    out vec2 v_uv1;\n  #endif\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  out vec3 v_modelPosition;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  out vec3 v_worldPosition;\n#endif\n\n#ifdef VERTEX_COLOR\n  layout(location = 4) in vec4 a_color;\n  out vec4 v_color;\n#endif\n\n#ifdef DIRECTION_SHADOW\n  #define CASCADED_COUNT 4\n  uniform mat4 u_shadowMapProjectViewMatrix_0;\n  uniform mat4 u_shadowMapProjectViewMatrix_1;\n  uniform mat4 u_shadowMapProjectViewMatrix_2;\n  uniform mat4 u_shadowMapProjectViewMatrix_3;\n  out vec4 v_shadowMapPosition[CASCADED_COUNT];\n#endif\n#ifdef SPOT_SHADOW\n  #if SPOT_SHADOW > 0\n    uniform mat4 u_spotShadowMapProjectViewMatrix_0;\n  #endif\n  #if SPOT_SHADOW > 1\n    uniform mat4 u_spotShadowMapProjectViewMatrix_1;\n  #endif\n  #if SPOT_SHADOW > 2\n    uniform mat4 u_spotShadowMapProjectViewMatrix_2;\n  #endif\n  #if SPOT_SHADOW > 3\n    uniform mat4 u_spotShadowMapProjectViewMatrix_3;\n  #endif\n  out vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n#endif\n\nlayout(location = 0) in vec3 a_position;\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  vec3 position = a_position;\n\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      position += a_position0 * u_weights[0];\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      position += a_position1 * u_weights[1];\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      position += a_position2 * u_weights[2];\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      position += a_position3 * u_weights[3];\n    #endif\n  #endif\n\n  vec4 finalPosition = vec4(position, 1.0);\n\n  #ifdef SKIN\n    mat4 skinMat =\n      a_weight.x * u_jointMatrix[int(a_joint.x)] +\n      a_weight.y * u_jointMatrix[int(a_joint.y)] +\n      a_weight.z * u_jointMatrix[int(a_joint.z)] +\n      a_weight.w * u_jointMatrix[int(a_joint.w)];\n    finalPosition = skinMat * finalPosition;\n  #endif\n\n  #ifdef INSTANCE\n    finalPosition = a_instance * finalPosition;\n  #else\n    finalPosition = u_modelMatrix * finalPosition;\n  #endif\n\n  vec4 worldPosition = finalPosition;\n  gl_Position = u_projectViewMatrix * worldPosition;\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    v_worldPosition = worldPosition.xyz;\n  #endif\n\n  #ifdef DIRECTION_SHADOW\n    v_shadowMapPosition[0] = u_shadowMapProjectViewMatrix_0 * worldPosition;\n    v_shadowMapPosition[1] = u_shadowMapProjectViewMatrix_1 * worldPosition;\n    v_shadowMapPosition[2] = u_shadowMapProjectViewMatrix_2 * worldPosition;\n    v_shadowMapPosition[3] = u_shadowMapProjectViewMatrix_3 * worldPosition;\n  #endif\n  #ifdef SPOT_SHADOW\n    #if SPOT_SHADOW > 0\n      v_spotShadowMapPosition[0] = u_spotShadowMapProjectViewMatrix_0 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 1\n      v_spotShadowMapPosition[1] = u_spotShadowMapProjectViewMatrix_1 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 2\n      v_spotShadowMapPosition[2] = u_spotShadowMapProjectViewMatrix_2 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 3\n      v_spotShadowMapPosition[3] = u_spotShadowMapProjectViewMatrix_3 * worldPosition;\n    #endif\n  #endif\n\n  #if defined(LIGHT)\n    vec3 finalNormal = a_normal;\n    #ifdef MORPH_TARGETS\n      #if MORPH_TARGETS_COUNT > 0\n        finalNormal += a_normal0 * u_weights[0];\n      #endif\n      #if MORPH_TARGETS_COUNT > 1\n        finalNormal += a_normal1 * u_weights[1];\n      #endif\n      #if MORPH_TARGETS_COUNT > 2\n        finalNormal += a_normal2 * u_weights[2];\n      #endif\n      #if MORPH_TARGETS_COUNT > 3\n        finalNormal += a_normal3 * u_weights[3];\n      #endif\n    #endif\n    #ifdef SKIN\n      mat4 skinNormalMat =\n        a_weight.x * u_jointNormalMatrix[int(a_joint.x)] +\n        a_weight.y * u_jointNormalMatrix[int(a_joint.y)] +\n        a_weight.z * u_jointNormalMatrix[int(a_joint.z)] +\n        a_weight.w * u_jointNormalMatrix[int(a_joint.w)];\n      finalNormal = mat3(skinNormalMat) * finalNormal;\n    #endif\n    v_normal = u_normalMatrix * finalNormal;\n  #endif\n\n  #if defined(NORMAL_MAP)\n    vec4 finalTangent = a_tangent;\n    #ifdef MORPH_TARGETS\n      #if MORPH_TARGETS_COUNT > 0\n        finalTangent += a_tangent0 * u_weights[0];\n      #endif\n      #if MORPH_TARGETS_COUNT > 1\n        finalTangent += a_tangent1 * u_weights[1];\n      #endif\n      #if MORPH_TARGETS_COUNT > 2\n        finalTangent += a_tangent2 * u_weights[2];\n      #endif\n      #if MORPH_TARGETS_COUNT > 3\n        finalTangent += a_tangent3 * u_weights[3];\n      #endif\n    #endif\n    vec3 normal = normalize(finalNormal);\n    vec3 tangent = normalize(finalTangent.xyz);\n    vec3 bitangent = cross(normal, tangent) * finalTangent.w;\n    v_TBN = mat3(u_modelMatrix) * mat3(tangent, bitangent, normal);\n  #endif\n\n  #if defined(BASE_COLOR_MAP) || defined(NORMAL_MAP) || defined(EMISSIVE_MAP) || defined(METALLIC_ROUGHNESS_MAP) || defined(OCCLUSION_MAP) || defined(SPECULAR_MAP) || defined(DIFFUSE_MAP)\n    #ifdef FLIP_Y\n      v_uv = (u_textureMatrix * vec3(a_uv.x, 1.0 - a_uv.y, 1.0)).xy;\n      #ifdef USE_UV1\n        v_uv1 = (u_textureMatrix * vec3(a_uv1.x, 1.0 - a_uv1.y, 1.0)).xy;\n      #endif\n    #else\n      v_uv = (u_textureMatrix * vec3(a_uv, 1.0)).xy;\n      #ifdef USE_UV1\n        v_uv1 = (u_textureMatrix * vec3(a_uv1, 1.0)).xy;\n      #endif\n    #endif\n  #endif\n\n  #ifdef VERTEX_COLOR\n    v_color = a_color;\n  #endif\n\n  #if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n    v_modelPosition = finalPosition.xyz;\n  #endif\n}\n",
  va = 'const float M_PI = 3.141592653589793;\nconst float c_minRoughness = 0.04;\n\n#ifdef PBR_TYPE_METALNESS\n  uniform vec4 u_baseColorFactor;\n  uniform float u_metallicFactor;\n  uniform float u_roughnessFactor;\n#endif\n\n#ifdef PBR_TYPE_SPECULAR\n  uniform vec4 u_diffuseFactor;\n  uniform vec3 u_specularFactor;\n  uniform float u_glossinessFactor;\n#endif\n\n#ifdef VERTEX_COLOR\n  in vec4 v_color;\n#endif\n\n#ifdef BASE_COLOR_MAP\n  uniform sampler2D u_baseColorSampler;\n  #if BASE_COLOR_MAP_UV == 0\n    #define vBaseColorUV v_uv\n  #else\n    #define vBaseColorUV v_uv1\n  #endif\n#endif\n\n#ifdef METALLIC_ROUGHNESS_MAP\n  uniform sampler2D u_metallicRoughnessSampler;\n  #if METALLIC_ROUGHNESS_MAP_UV == 0\n    #define vMetallicRoughnessUV v_uv\n  #else\n    #define vMetallicRoughnessUV v_uv1\n  #endif\n#endif\n\n#ifdef METALLIC_MAP\n  uniform sampler2D u_metallicSampler;\n  #if METALLIC_MAP_UV == 0\n    #define vMetallicUV v_uv\n  #else\n    #define vMetallicUV v_uv1\n  #endif\n#endif\n\n#ifdef ROUGHNESS_MAP\n  uniform sampler2D u_roughnessSampler;\n  #if ROUGHNESS_MAP_UV == 0\n    #define vRoughnessUV v_uv\n  #else\n    #define vRoughnessUV v_uv1\n  #endif\n#endif\n\n#ifdef DIFFUSE_MAP\n  uniform sampler2D u_diffuseSampler;\n  #if DIFFUSE_MAP_UV == 0\n    #define vDiffuseUV v_uv\n  #else\n    #define vDiffuseUV v_uv1\n  #endif\n#endif\n\n#ifdef SPECULAR_GLOSSINESS_MAP\n  uniform sampler2D u_specularGlossinessSampler;\n  #if SPECULAR_GLOSSINESS_MAP_UV == 0\n    #define vSpecularGlossinessUV v_uv\n  #else\n    #define vSpecularGlossinessUV v_uv1\n  #endif\n#endif\n\n#ifdef SPECULAR_MAP\n  uniform sampler2D u_specularSampler;\n  #if SPECULAR_MAP_UV == 0\n    #define vSpecularUV v_uv\n  #else\n    #define vSpecularUV v_uv1\n  #endif\n#endif\n\n#ifdef GLOSSINESS_MAP\n  uniform sampler2D u_glossinessSampler;\n  #if GLOSSINESS_MAP_UV == 0\n    #define vGlossinessUV v_uv\n  #else\n    #define vGlossinessUV v_uv1\n  #endif\n#endif\n\n#if defined(BASE_COLOR_MAP) || defined(NORMAL_MAP) || defined(EMISSIVE_MAP) || defined(METALLIC_ROUGHNESS_MAP) || defined(OCCLUSION_MAP) || defined(SPECULAR_GLOSSINESS_MAP) || defined(DIFFUSE_MAP)\n  in vec2 v_uv;\n  #ifdef USE_UV1\n    in vec2 v_uv1;\n  #endif\n#endif\n\n#if defined(LIGHT)\n  in vec3 v_normal;\n#endif\n\n#ifdef OCCLUSION_MAP\n  uniform sampler2D u_occlusionSampler;\n  #if OCCLUSION_MAP_UV == 0\n    #define vOcclusionUV v_uv\n  #else\n    #define vOcclusionUV v_uv1\n  #endif\n#endif\n\n#if defined(OCCLUSION_MAP) || defined(AO_FROM_R_CHANNEL)\n  uniform float u_occlusionStrength;\n#endif\n\n#ifdef EMISSIVE_MAP\n  uniform sampler2D u_emissiveSampler;\n  uniform vec3 u_emissiveColor;\n  #if EMISSIVE_MAP_UV == 0\n    #define vEmissiveUV v_uv\n  #else\n    #define vEmissiveUV v_uv1\n  #endif\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  uniform vec3 u_eyePosition;\n  in vec3 v_worldPosition;\n#endif\n\n#ifdef LIGHT\n  #ifdef NORMAL_MAP\n    uniform sampler2D u_normalSampler;\n    #if NORMAL_MAP_UV == 0\n      #define vNormalUV v_uv\n    #else\n      #define vNormalUV v_uv1\n    #endif\n    uniform float u_normalScale;\n    in mat3 v_TBN;\n  #endif\n  #ifdef IBL\n    uniform samplerCube u_diffuseEnvSampler;\n    uniform samplerCube u_specularEnvSampler;\n    uniform sampler2D u_brdfLUTSampler;\n    uniform float u_iblDiffuseIntensity;\n    uniform float u_iblSpecularIntensity;\n  #endif\n\n  #define PCF_SHADOW\n  #ifdef DIRECTION_SHADOW\n    #define CASCADED_COUNT 4\n    in vec4 v_shadowMapPosition[CASCADED_COUNT];\n    uniform highp sampler2DArrayShadow u_directionShadowMapSampler;\n    uniform vec4 u_cascadedEnd;\n  \n    float calculateDirectionShadow(int layer) {\n      vec3 position = v_shadowMapPosition[layer].xyz / v_shadowMapPosition[layer].w;\n      position = position * 0.5 + 0.5;\n      if (position.x <= 0.0 || position.x >= 1.0 || position.y <= 0.0 || position.y >= 1.0) {\n        return 1.0;\n      }\n      vec4 shadowUv = vec4(position.xy, float(layer), position.z - 0.005);\n  \n      #ifdef PCF_SHADOW\n        vec2 size = 1.0 / vec2(2048.0, 2048.0);\n        float depth = 0.0;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = texture(u_directionShadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n        return depth;\n      #else\n        float depth = texture(u_directionShadowMapSampler, shadowUv);\n        return depth;\n      #endif\n    }\n  #endif\n  \n  #ifdef POINT_SHADOW\n    const float pointLightNear = 0.1;\n    const float pointLightFar = 1000.0;\n    #if POINT_SHADOW > 0\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_0;\n    #endif\n    #if POINT_SHADOW > 1\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_1;\n    #endif\n    #if POINT_SHADOW > 2\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_2;\n    #endif\n    #if POINT_SHADOW > 3\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_3;\n    #endif\n    // https://stackoverflow.com/questions/10786951/omnidirectional-shadow-mapping-with-depth-cubemap\n    float vectorToDepthValue(vec3 vec, float n, float f) {\n      vec3 absVec = abs(vec);\n      float localZcomp = max(absVec.x, max(absVec.y, absVec.z));\n      float normZComp = (f + n) / (f - n) - (2.0 * f * n) / (f - n) / localZcomp;\n      return (normZComp + 1.0) * 0.5;\n    }\n  \n    float calculatePointShadow(samplerCubeShadow shadowMapSampler, vec3 lightToPosition) {\n      float depth = vectorToDepthValue(lightToPosition, pointLightNear, pointLightFar);\n      return texture(shadowMapSampler, vec4(lightToPosition, depth));\n    }\n  #endif\n  \n  #ifdef SPOT_SHADOW\n    in vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n    #if SPOT_SHADOW > 0\n      uniform highp sampler2DShadow u_spotShadowMapSampler_0;\n    #endif\n    #if SPOT_SHADOW > 1\n      uniform highp sampler2DShadow u_spotShadowMapSampler_1;\n    #endif\n    #if SPOT_SHADOW > 2\n      uniform highp sampler2DShadow u_spotShadowMapSampler_2;\n    #endif\n    #if SPOT_SHADOW > 3\n      uniform highp sampler2DShadow u_spotShadowMapSampler_3;\n    #endif\n  \n    float calculateSpotShadow(sampler2DShadow shadowMapSampler, vec4 spotShadowMapPosition) {\n      vec4 position = spotShadowMapPosition;\n  \n      float depth = 0.0;\n      #ifdef PCF_SHADOW\n        vec4 shadowUv = position;\n        vec2 size = 1.0 / vec2(2048.0, 2048.0) * position.w;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = textureProj(shadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n      #else\n        depth = textureProj(shadowMapSampler, position);\n      #endif\n      return depth;\n    }\n  #endif\n\n  struct LightInfo {\n    vec3 diffuseColor;\n    vec3 specularColor;\n  };\n  \n  #if DIRECTION_LIGHT_COUNT\n    struct DirectionLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform DirectionLight u_directionLights[DIRECTION_LIGHT_COUNT];\n  \n    LightInfo calculateDirectionLightInfo(DirectionLight light, vec3 v, vec3 n, float NdotV,\n        vec3 specularEnvironmentR0, vec3 specularEnvironmentR90, float roughnessSq) {\n      LightInfo info;\n  \n      vec3 l = normalize(-light.direction);\n      vec3 h = normalize(l+v); // Half vector between both l and v\n  \n      float NdotL = clamp(dot(n, l), 0.001, 1.0);\n      float NdotH = clamp(dot(n, h), 0.0, 1.0);\n      float VdotH = clamp(dot(v, h), 0.0, 1.0);\n  \n      vec3 F = specularEnvironmentR0 + (specularEnvironmentR90 - specularEnvironmentR0) * pow(clamp(1.0 - VdotH, 0.0, 1.0), 5.0);\n  \n      float attenuationL = 2.0 * NdotL / (NdotL + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotL * NdotL)));\n      float attenuationV = 2.0 * NdotV / (NdotV + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotV * NdotV)));\n      float G = attenuationL * attenuationV;\n  \n      float f = (NdotH * roughnessSq - NdotH) * NdotH + 1.0;\n      float D = roughnessSq / (M_PI * f * f);\n  \n      // Calculation of analytical lighting contribution\n      vec3 diffuse = NdotL * (1.0 - F) * light.diffuseColor;\n      vec3 specular = NdotL * F * G * D / NdotL * light.specularColor;\n  \n      #ifdef DIRECTION_SHADOW\n        if (light.shadow) {\n          int layer = 3;\n          if (gl_FragCoord.z <= u_cascadedEnd.x) {\n            layer = 0;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.y) {\n            layer = 1;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.z) {\n            layer = 2;\n          }\n          float shadow = calculateDirectionShadow(layer);\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      info.diffuseColor = light.diffuseColor * diffuse;\n      info.specularColor = light.specularColor * specular;\n      return info;\n    }\n  #endif\n  \n  #if POINT_LIGHT_COUNT\n    struct PointLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 position;\n      float distance;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform PointLight u_pointLights[POINT_LIGHT_COUNT];\n  \n    LightInfo calculatePointLightInfo(PointLight light, vec3 v, vec3 n, float NdotV,\n        vec3 specularEnvironmentR0, vec3 specularEnvironmentR90, float roughnessSq, int shadowLightIndex) {\n      LightInfo info;\n  \n      vec3 l = light.position - v_worldPosition;\n      vec3 lightToPosition = l;\n      float distance = length(l);\n      l = normalize(l);\n      vec3 h = normalize(l+v); // Half vector between both l and v\n  \n      float NdotL = clamp(dot(n, l), 0.001, 1.0);\n      float NdotH = clamp(dot(n, h), 0.0, 1.0);\n      float VdotH = clamp(dot(v, h), 0.0, 1.0);\n  \n      vec3 F = specularEnvironmentR0 + (specularEnvironmentR90 - specularEnvironmentR0) * pow(clamp(1.0 - VdotH, 0.0, 1.0), 5.0);\n  \n      float attenuationL = 2.0 * NdotL / (NdotL + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotL * NdotL)));\n      float attenuationV = 2.0 * NdotV / (NdotV + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotV * NdotV)));\n      float G = attenuationL * attenuationV;\n  \n      float f = (NdotH * roughnessSq - NdotH) * NdotH + 1.0;\n      float D = roughnessSq / (M_PI * f * f);\n  \n      // Calculation of analytical lighting contribution\n      vec3 diffuse = NdotL * (1.0 - F) * light.diffuseColor;\n      vec3 specular = NdotL * F * G * D / NdotL * light.specularColor;\n  \n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n      #ifdef POINT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if POINT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_0, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_1, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_2, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_3, -lightToPosition);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n  \n  #if SPOT_LIGHT_COUNT\n    struct SpotLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      vec3 position;\n      float distance;\n      float innerAngle;\n      float outerAngle;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform SpotLight u_spotLights[SPOT_LIGHT_COUNT];\n  \n    LightInfo calculateSpotLightInfo(SpotLight light, vec3 v, vec3 n, float NdotV,\n        vec3 specularEnvironmentR0, vec3 specularEnvironmentR90, float roughnessSq, int shadowLightIndex) {\n      LightInfo info;\n  \n      vec3 l = light.position - v_worldPosition;\n      float distance = length(l);\n      l = normalize(l);\n      vec3 h = normalize(l+v); // Half vector between both l and v\n  \n      float NdotL = clamp(dot(n, l), 0.001, 1.0);\n      float NdotH = clamp(dot(n, h), 0.0, 1.0);\n      float VdotH = clamp(dot(v, h), 0.0, 1.0);\n  \n      vec3 F = specularEnvironmentR0 + (specularEnvironmentR90 - specularEnvironmentR0) * pow(clamp(1.0 - VdotH, 0.0, 1.0), 5.0);\n  \n      float attenuationL = 2.0 * NdotL / (NdotL + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotL * NdotL)));\n      float attenuationV = 2.0 * NdotV / (NdotV + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotV * NdotV)));\n      float G = attenuationL * attenuationV;\n  \n      float f = (NdotH * roughnessSq - NdotH) * NdotH + 1.0;\n      float D = roughnessSq / (M_PI * f * f);\n  \n      // Calculation of analytical lighting contribution\n      vec3 diffuse = NdotL * (1.0 - F) * light.diffuseColor;\n      vec3 specular = NdotL * F * G * D / NdotL * light.specularColor;\n  \n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n  \n      #ifdef SPOT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if SPOT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_0, v_spotShadowMapPosition[0]);\n            }\n          #endif\n          #if SPOT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_1, v_spotShadowMapPosition[1]);\n            }\n          #endif\n          #if SPOT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_2, v_spotShadowMapPosition[2]);\n            }\n          #endif\n          #if SPOT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_3, v_spotShadowMapPosition[3]);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      float theta = dot(l, normalize(-light.direction));\n      float epsilon = light.innerAngle - light.outerAngle;\n      float intensity = clamp((theta - light.outerAngle) / epsilon, 0.0, 1.0);\n      attenuation *= intensity;\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n#endif\n\n#if defined(CLIPPLANE)\n  uniform vec4 u_clipPlane;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  in vec3 v_modelPosition;\n#endif\n\n#ifdef FOG\n  uniform vec3 u_fogColor;\n  uniform float u_fogNear;\n  uniform float u_fogFar;\n#endif\n\n#ifdef ALPHA_TEST\n  uniform float u_alphaCutoff;\n#endif\n\nconst vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nout vec4 fragColor;\n\nvoid main () {\n  #ifdef CLIPPLANE\n    float clipDistance = dot(v_modelPosition, u_clipPlane.xyz);\n    if (clipDistance >= u_clipPlane.w) {\n      discard;\n    }\n  #endif\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n  #endif\n\n  float aoFactor = 0.0;\n  #ifdef PBR_TYPE_METALNESS\n    float metallicFactor = u_metallicFactor;\n    float roughnessFactor = u_roughnessFactor;\n    #if defined(METALLIC_ROUGHNESS_MAP)\n      vec4 metallicRoughness = texture(u_metallicRoughnessSampler, vMetallicRoughnessUV);\n      metallicFactor *= metallicRoughness.b;\n      roughnessFactor *= metallicRoughness.g;\n      aoFactor = metallicRoughness.r;\n    #else\n      #ifdef METALLIC_MAP\n        metallicFactor *= texture(u_metallicSampler, vMetallicUV).r;\n      #endif\n      #ifdef ROUGHNESS_MAP\n        roughnessFactor *= texture(u_roughnessSampler, vRoughnessUV).r;\n      #endif\n    #endif\n\n    roughnessFactor = clamp(roughnessFactor, c_minRoughness, 1.0);\n    metallicFactor = clamp(metallicFactor, 0.0, 1.0);\n    float alphaRoughness = roughnessFactor * roughnessFactor;\n    float roughnessSq = alphaRoughness * alphaRoughness;\n\n    vec4 baseColor = u_baseColorFactor;\n    #if defined(BASE_COLOR_MAP)\n      vec4 baseColorSamplerColor = texture(u_baseColorSampler, vBaseColorUV);\n      baseColorSamplerColor.rgb = gammaInput(baseColorSamplerColor.rgb);\n      #if defined(BLEND) || defined(ALPHA_TEST)\n        baseColor *= baseColorSamplerColor;\n      #else\n        baseColor.rgb *= baseColorSamplerColor.rgb;\n      #endif\n    #endif\n  #else\n    vec4 baseColor = u_diffuseFactor;\n    #if defined(DIFFUSE_MAP)\n      vec4 diffuseSamplerColor = texture(u_diffuseSampler, vDiffuseUV);\n      diffuseSamplerColor.rgb = gammaInput(diffuseSamplerColor.rgb);\n      #if defined(BLEND) || defined(ALPHA_TEST)\n        baseColor *= diffuseSamplerColor;\n      #else\n        baseColor.rgb *= diffuseSamplerColor.rgb;\n      #endif\n    #endif\n  #endif\n\n  #ifdef VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n\n  #ifdef ALPHA_TEST\n    if (baseColor.a < u_alphaCutoff) {\n      discard;\n    }\n    baseColor.a = 1.0;\n  #endif\n  #ifndef BLEND\n    baseColor.a = 1.0;\n  #endif\n\n  #ifdef LIGHT\n    #ifdef PBR_TYPE_METALNESS\n      vec3 f0 = vec3(0.04);\n      vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);\n      diffuseColor *= 1.0 - metallicFactor;\n      vec3 specularColor = mix(f0, baseColor.rgb, metallicFactor);\n      float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);\n    #else\n      vec3 specularFactor = u_specularFactor;\n      float glossinessFactor = u_glossinessFactor;\n      #if defined(SPECULAR_GLOSSINESS_MAP)\n        vec4 specularGlossinessColor = texture(u_specularGlossinessSampler, vSpecularGlossinessUV);\n        specularFactor *= gammaInput(specularGlossinessColor.rgb);\n        glossinessFactor *= specularGlossinessColor.a;\n      #else\n        #ifdef SPECULAR_MAP\n          specularFactor *= gammaInput(texture(u_specularSampler, vSpecularUV).rgb);\n        #endif\n        #ifdef GLOSSINESS_MAP\n          glossinessFactor *= gammaInput(texture(u_glossinessSampler, vGlossinessUV).rgb).r;\n        #endif\n      #endif\n\n      vec3 specularColor = specularFactor;\n      // Compute reflectance.\n      float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);\n      vec3 diffuseColor = baseColor.rgb * (1.0 - reflectance);\n      float roughnessFactor = clamp(1.0 - glossinessFactor, 0.04, 1.0);\n      float alphaRoughness = roughnessFactor * roughnessFactor;\n      float roughnessSq = alphaRoughness * alphaRoughness;\n    #endif\n\n    // For typical incident reflectance range (between 4% to 100%) set the grazing reflectance to 100% for typical fresnel effect.\n    // For very low reflectance range on highly diffuse objects (below 4%), incrementally reduce grazing reflecance to 0%.\n    float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);\n    vec3 specularEnvironmentR0 = specularColor.rgb;\n    vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;\n\n    #ifdef NORMAL_MAP\n      vec3 normalSampler = (texture(u_normalSampler, vNormalUV) * 2.0 - 1.0).rgb;\n      vec3 n = normalize(normalSampler * vec3(u_normalScale, u_normalScale, 1.0));\n      n = normalize(v_TBN * n);\n    #else\n      vec3 n = normalize(v_normal);\n    #endif\n\n    if (!gl_FrontFacing) {\n      n = -n;\n    }\n\n    vec3 v = normalize(eyeSpacePosition);\n    vec3 reflection = -normalize(reflect(v, n));\n    float NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);\n\n    vec3 diffuseBase = vec3(0.0);\n    vec3 specularBase = vec3(0.0);\n\n    #if DIRECTION_LIGHT_COUNT\n      for (int i = 0; i < DIRECTION_LIGHT_COUNT; i++) {\n        DirectionLight light = u_directionLights[i];\n        LightInfo info = calculateDirectionLightInfo(light, v, n, NdotV,\n          specularEnvironmentR0, specularEnvironmentR90, roughnessSq);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n      }\n    #endif\n    \n    #if POINT_LIGHT_COUNT\n      int shadowPointLightIndex = 0;\n      for (int i = 0; i < POINT_LIGHT_COUNT; i++) {\n        PointLight light = u_pointLights[i];\n        LightInfo info = calculatePointLightInfo(light, v, n, NdotV,\n          specularEnvironmentR0, specularEnvironmentR90, roughnessSq, shadowPointLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowPointLightIndex++;\n        }\n      }\n    #endif\n    \n    #if SPOT_LIGHT_COUNT\n      int shadowLightIndex = 0;\n      for (int i = 0; i < SPOT_LIGHT_COUNT; i++) {\n        SpotLight light = u_spotLights[i];\n        LightInfo info = calculateSpotLightInfo(light, v, n, NdotV,\n          specularEnvironmentR0, specularEnvironmentR90, roughnessSq, shadowLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowLightIndex++;\n        }\n      }\n    #endif\n\n    // Calculation of analytical lighting contribution\n    vec3 diffuseContrib = diffuseBase * diffuseColor / M_PI;\n    vec3 specContrib = specularBase / (4.0 * NdotV);\n    vec3 color = diffuseContrib + specContrib;\n\n    // Calculate lighting contribution from image based lighting source (IBL)\n    #ifdef IBL\n      vec3 brdf = gammaInput(texture(u_brdfLUTSampler, vec2(NdotV, 1.0 - roughnessFactor)).rgb);\n      brdf = gammaInput(brdf);\n      vec3 diffuseLight = texture(u_diffuseEnvSampler, n).rgb;\n      diffuseLight = gammaInput(diffuseLight);\n\n      float mipCount = 9.0; // resolution of 512x512\n      float lod = (roughnessFactor * mipCount);\n      vec3 specularLight = textureLod(u_specularEnvSampler, reflection, lod).rgb;\n      specularLight = gammaInput(specularLight);\n\n      vec3 diffuse = diffuseLight * diffuseColor;\n      vec3 specular = specularLight * (specularColor * brdf.x + brdf.y);\n\n      color += (diffuse * u_iblDiffuseIntensity + specular * u_iblSpecularIntensity);\n    #endif\n  #else\n    vec3 color = baseColor.rgb;\n  #endif\n\n  #if defined(OCCLUSION_MAP) || defined(AO_FROM_R_CHANNEL)\n    #ifdef OCCLUSION_MAP\n      aoFactor = texture(u_occlusionSampler, vOcclusionUV).r;\n    #endif\n    color = mix(color, color * aoFactor, u_occlusionStrength);\n  #endif\n\n  #ifdef EMISSIVE_MAP\n    vec3 emissive = gammaInput(texture(u_emissiveSampler, vEmissiveUV).rgb) * u_emissiveColor;\n    color += emissive;\n  #endif\n\n  fragColor = vec4(color, baseColor.a);\n\n  #ifdef FOG\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  #endif\n}\n',
  ga = "#ifdef MORPH_TARGETS\n  #if MORPH_TARGETS_COUNT > 0\n    layout(location = 9) in vec3 a_position0;\n  #endif\n  #if MORPH_TARGETS_COUNT > 1\n    layout(location = 10) in vec3 a_position1;\n  #endif\n  #if MORPH_TARGETS_COUNT > 2\n    in vec3 a_position2;\n  #endif\n  #if MORPH_TARGETS_COUNT > 3\n    in vec3 a_position3;\n  #endif\n  uniform float u_weights[MORPH_TARGETS_COUNT];\n#endif\n\n#ifdef SKIN\n  layout(location = 9) in vec4 a_joint;\n  layout(location = 10) in vec4 a_weight;\n  uniform mat4 u_jointMatrix[SKIN_JOINTS_COUNT];\n#endif\n\n#ifdef INSTANCE\n  layout(location = 5) in mat4 a_instance;\n#endif\n\nlayout(location = 0) in vec3 a_position;\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  vec3 position = a_position;\n\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      position += a_position0 * u_weights[0];\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      position += a_position1 * u_weights[1];\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      position += a_position2 * u_weights[2];\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      position += a_position3 * u_weights[3];\n    #endif\n  #endif\n\n  vec4 finalPosition = vec4(position, 1.0);\n\n  #ifdef SKIN\n    mat4 skinMat =\n      a_weight.x * u_jointMatrix[int(a_joint.x)] +\n      a_weight.y * u_jointMatrix[int(a_joint.y)] +\n      a_weight.z * u_jointMatrix[int(a_joint.z)] +\n      a_weight.w * u_jointMatrix[int(a_joint.w)];\n    finalPosition = skinMat * finalPosition;\n  #endif\n\n  #ifdef INSTANCE\n    finalPosition = a_instance * finalPosition;\n  #else\n    finalPosition = u_modelMatrix * finalPosition;\n  #endif\n\n  vec4 worldPosition = finalPosition;\n  gl_Position = u_projectViewMatrix * worldPosition;\n}\n",
  ba = "void main () {\n}\n",
  Ta = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
  xa = 'const vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nuniform sampler2D u_sampler;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = texture(u_sampler, v_uv);\n  // fragColor.rgb = tonemapACES(fragColor.rgb);\n  fragColor.rgb = gammaOutput(fragColor.rgb);\n}',
  Sa = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
  wa = "uniform sampler2D u_sampler;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = texture(u_sampler, v_uv);\n}",
  ya = "layout(location = 1) in vec3 a_normal;\n\n#if defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n  layout(location = 3) in vec4 a_tangent;\n  out mat3 v_TBN;\n#endif\n\n#if defined(MIX_MAP) || defined(DIFFUSE_MAP1) || defined(DIFFUSE_MAP2) || defined(DIFFUSE_MAP3) || defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n  layout(location = 2) in vec2 a_uv;\n  out vec2 v_uv;\n#endif\n\n#if defined(LIGHT)\n  uniform mat3 u_normalMatrix;\n  out vec3 v_normal;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  out vec3 v_modelPosition;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  out vec3 v_worldPosition;\n#endif\n\n#ifdef VERTEX_COLOR\n  layout(location = 4) in vec4 a_color;\n  out vec4 v_color;\n#endif\n\n#ifdef DIRECTION_SHADOW\n  #define CASCADED_COUNT 4\n  uniform mat4 u_shadowMapProjectViewMatrix_0;\n  uniform mat4 u_shadowMapProjectViewMatrix_1;\n  uniform mat4 u_shadowMapProjectViewMatrix_2;\n  uniform mat4 u_shadowMapProjectViewMatrix_3;\n  out vec4 v_shadowMapPosition[CASCADED_COUNT];\n#endif\n#ifdef SPOT_SHADOW\n  #if SPOT_SHADOW > 0\n    uniform mat4 u_spotShadowMapProjectViewMatrix_0;\n  #endif\n  #if SPOT_SHADOW > 1\n    uniform mat4 u_spotShadowMapProjectViewMatrix_1;\n  #endif\n  #if SPOT_SHADOW > 2\n    uniform mat4 u_spotShadowMapProjectViewMatrix_2;\n  #endif\n  #if SPOT_SHADOW > 3\n    uniform mat4 u_spotShadowMapProjectViewMatrix_3;\n  #endif\n  out vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n#endif\n\nlayout(location = 0) in vec3 a_position;\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  vec3 position = a_position;\n  vec4 finalPosition = vec4(position, 1.0);\n  vec4 worldPosition = u_modelMatrix * finalPosition;\n  gl_Position = u_projectViewMatrix * worldPosition;\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    v_worldPosition = worldPosition.xyz;\n  #endif\n\n  #ifdef DIRECTION_SHADOW\n    v_shadowMapPosition[0] = u_shadowMapProjectViewMatrix_0 * worldPosition;\n    v_shadowMapPosition[1] = u_shadowMapProjectViewMatrix_1 * worldPosition;\n    v_shadowMapPosition[2] = u_shadowMapProjectViewMatrix_2 * worldPosition;\n    v_shadowMapPosition[3] = u_shadowMapProjectViewMatrix_3 * worldPosition;\n  #endif\n  #ifdef SPOT_SHADOW\n    #if SPOT_SHADOW > 0\n      v_spotShadowMapPosition[0] = u_spotShadowMapProjectViewMatrix_0 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 1\n      v_spotShadowMapPosition[1] = u_spotShadowMapProjectViewMatrix_1 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 2\n      v_spotShadowMapPosition[2] = u_spotShadowMapProjectViewMatrix_2 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 3\n      v_spotShadowMapPosition[3] = u_spotShadowMapProjectViewMatrix_3 * worldPosition;\n    #endif\n  #endif\n\n  #if defined(LIGHT)\n    vec3 finalNormal = a_normal;\n    v_normal = u_normalMatrix * finalNormal;\n  #endif\n\n  #if defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n    vec4 finalTangent = a_tangent;\n    vec3 normal = normalize(finalNormal);\n    vec3 tangent = normalize(finalTangent.xyz);\n    vec3 bitangent = cross(normal, tangent) * finalTangent.w;\n    v_TBN = mat3(u_modelMatrix) * mat3(tangent, bitangent, normal);\n  #endif\n\n  #if defined(MIX_MAP) || defined(DIFFUSE_MAP1) || defined(DIFFUSE_MAP2) || defined(DIFFUSE_MAP3) || defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n    v_uv = a_uv;\n  #endif\n\n  #ifdef VERTEX_COLOR\n    v_color = a_color;\n  #endif\n\n  #if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n    v_modelPosition = finalPosition.xyz;\n  #endif\n}\n",
  Pa = '#ifdef VERTEX_COLOR\n  in vec4 v_color;\n#endif\n\n#ifdef DIFFUSE_MAP1\n  uniform sampler2D u_diffuseSampler1;\n#endif\n\n#ifdef DIFFUSE_MAP2\n  uniform sampler2D u_diffuseSampler2;\n#endif\n\n#ifdef DIFFUSE_MAP3\n  uniform sampler2D u_diffuseSampler3;\n#endif\n\n#ifdef MIX_MAP\n  uniform sampler2D u_mixSampler;\n#endif\n\n#if defined(LIGHT)\n  in vec3 v_normal;\n#endif\n\n#if defined(MIX_MAP) || defined(DIFFUSE_MAP1) || defined(DIFFUSE_MAP2) || defined(DIFFUSE_MAP3) || defined(NORMAL_MAP)\n  #if defined(MIX_MAP)\n    uniform vec2 u_textureScale;\n  #endif\n  #if defined(DIFFUSE_MAP1)\n    uniform vec2 u_textureScale1;\n  #endif\n  #if defined(DIFFUSE_MAP2)\n    uniform vec2 u_textureScale2;\n  #endif\n  #if defined(DIFFUSE_MAP3)\n    uniform vec2 u_textureScale3;\n  #endif\n  in vec2 v_uv;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  uniform vec3 u_eyePosition;\n  in vec3 v_worldPosition;\n#endif\n\n#ifdef LIGHT\n  uniform float u_shininess;\n  uniform vec3 u_specularColor;\n\n  #ifdef NORMAL_MAP\n    #if defined(NORMAL_MAP1)\n      uniform sampler2D u_normalSampler1;\n    #endif\n    #if defined(NORMAL_MAP2)\n      uniform sampler2D u_normalSampler2;\n    #endif\n    #if defined(NORMAL_MAP3)\n      uniform sampler2D u_normalSampler3;\n    #endif\n    in mat3 v_TBN;\n  #endif\n\n  #define PCF_SHADOW\n  #ifdef DIRECTION_SHADOW\n    #define CASCADED_COUNT 4\n    in vec4 v_shadowMapPosition[CASCADED_COUNT];\n    uniform highp sampler2DArrayShadow u_directionShadowMapSampler;\n    uniform vec4 u_cascadedEnd;\n  \n    float calculateDirectionShadow(int layer) {\n      vec3 position = v_shadowMapPosition[layer].xyz / v_shadowMapPosition[layer].w;\n      position = position * 0.5 + 0.5;\n      if (position.x <= 0.0 || position.x >= 1.0 || position.y <= 0.0 || position.y >= 1.0) {\n        return 1.0;\n      }\n      vec4 shadowUv = vec4(position.xy, float(layer), position.z - 0.005);\n  \n      #ifdef PCF_SHADOW\n        vec2 size = 1.0 / vec2(2048.0, 2048.0);\n        float depth = 0.0;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = texture(u_directionShadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n        return depth;\n      #else\n        float depth = texture(u_directionShadowMapSampler, shadowUv);\n        return depth;\n      #endif\n    }\n  #endif\n  \n  #ifdef POINT_SHADOW\n    const float pointLightNear = 0.1;\n    const float pointLightFar = 1000.0;\n    #if POINT_SHADOW > 0\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_0;\n    #endif\n    #if POINT_SHADOW > 1\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_1;\n    #endif\n    #if POINT_SHADOW > 2\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_2;\n    #endif\n    #if POINT_SHADOW > 3\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_3;\n    #endif\n    // https://stackoverflow.com/questions/10786951/omnidirectional-shadow-mapping-with-depth-cubemap\n    float vectorToDepthValue(vec3 vec, float n, float f) {\n      vec3 absVec = abs(vec);\n      float localZcomp = max(absVec.x, max(absVec.y, absVec.z));\n      float normZComp = (f + n) / (f - n) - (2.0 * f * n) / (f - n) / localZcomp;\n      return (normZComp + 1.0) * 0.5;\n    }\n  \n    float calculatePointShadow(samplerCubeShadow shadowMapSampler, vec3 lightToPosition) {\n      float depth = vectorToDepthValue(lightToPosition, pointLightNear, pointLightFar);\n      return texture(shadowMapSampler, vec4(lightToPosition, depth));\n    }\n  #endif\n  \n  #ifdef SPOT_SHADOW\n    in vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n    #if SPOT_SHADOW > 0\n      uniform highp sampler2DShadow u_spotShadowMapSampler_0;\n    #endif\n    #if SPOT_SHADOW > 1\n      uniform highp sampler2DShadow u_spotShadowMapSampler_1;\n    #endif\n    #if SPOT_SHADOW > 2\n      uniform highp sampler2DShadow u_spotShadowMapSampler_2;\n    #endif\n    #if SPOT_SHADOW > 3\n      uniform highp sampler2DShadow u_spotShadowMapSampler_3;\n    #endif\n  \n    float calculateSpotShadow(sampler2DShadow shadowMapSampler, vec4 spotShadowMapPosition) {\n      vec4 position = spotShadowMapPosition;\n  \n      float depth = 0.0;\n      #ifdef PCF_SHADOW\n        vec4 shadowUv = position;\n        vec2 size = 1.0 / vec2(2048.0, 2048.0) * position.w;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = textureProj(shadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n      #else\n        depth = textureProj(shadowMapSampler, position);\n      #endif\n      return depth;\n    }\n  #endif\n\n  struct LightInfo {\n    vec3 diffuseColor;\n    vec3 specularColor;\n  };\n  \n  #if DIRECTION_LIGHT_COUNT\n    struct DirectionLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform DirectionLight u_directionLights[DIRECTION_LIGHT_COUNT];\n  \n    LightInfo calculateDirectionLightInfo(DirectionLight light, vec3 eyeDirection, vec3 normal) {\n      LightInfo info;\n      vec3 lightDirection = normalize(-light.direction);\n      float ndl = dot(lightDirection, normal);\n      float diffuse = max(ndl, 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n  \n      #ifdef DIRECTION_SHADOW\n        if (light.shadow) {\n          int layer = 3;\n          if (gl_FragCoord.z <= u_cascadedEnd.x) {\n            layer = 0;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.y) {\n            layer = 1;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.z) {\n            layer = 2;\n          }\n          float shadow = calculateDirectionShadow(layer);\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      info.diffuseColor = light.diffuseColor * diffuse;\n      info.specularColor = light.specularColor * specular;\n      return info;\n    }\n  #endif\n  \n  #if POINT_LIGHT_COUNT\n    struct PointLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 position;\n      float distance;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform PointLight u_pointLights[POINT_LIGHT_COUNT];\n  \n    LightInfo calculatePointLightInfo(PointLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightToPosition = light.position - v_worldPosition;\n      float distance = length(lightToPosition);\n      vec3 lightDirection = normalize(lightToPosition);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n      #ifdef POINT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if POINT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_0, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_1, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_2, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_3, -lightToPosition);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n  \n  #if SPOT_LIGHT_COUNT\n    struct SpotLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      vec3 position;\n      float distance;\n      float innerAngle;\n      float outerAngle;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform SpotLight u_spotLights[SPOT_LIGHT_COUNT];\n  \n    LightInfo calculateSpotLightInfo(SpotLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightDirection = light.position - v_worldPosition;\n      float distance = length(lightDirection);\n      lightDirection = normalize(lightDirection);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n  \n      #ifdef SPOT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if SPOT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_0, v_spotShadowMapPosition[0]);\n            }\n          #endif\n          #if SPOT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_1, v_spotShadowMapPosition[1]);\n            }\n          #endif\n          #if SPOT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_2, v_spotShadowMapPosition[2]);\n            }\n          #endif\n          #if SPOT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_3, v_spotShadowMapPosition[3]);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      float theta = dot(lightDirection, normalize(-light.direction));\n      float epsilon = light.innerAngle - light.outerAngle;\n      float intensity = clamp((theta - light.outerAngle) / epsilon, 0.0, 1.0);\n      attenuation *= intensity;\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n#endif\n\n#if defined(CLIPPLANE)\n  uniform vec4 u_clipPlane;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  in vec3 v_modelPosition;\n#endif\n\n#ifdef FOG\n  uniform vec3 u_fogColor;\n  uniform float u_fogNear;\n  uniform float u_fogFar;\n#endif\n\nconst vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nuniform vec4 u_diffuseColor;\nout vec4 fragColor;\n\nvoid main () {\n  #ifdef CLIPPLANE\n    float clipDistance = dot(v_modelPosition, u_clipPlane.xyz);\n    if (clipDistance >= u_clipPlane.w) {\n      discard;\n    }\n  #endif\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n  #endif\n\n  #ifdef MIX_MAP\n    vec4 mixColor = texture(u_mixSampler, v_uv * u_textureScale);\n    vec4 baseColor = mixColor;\n    #ifdef DIFFUSE_MAP1\n      vec3 diffuseColor1 = texture(u_diffuseSampler1, v_uv * u_textureScale1).rgb;\n      diffuseColor1 = gammaInput(diffuseColor1);\n    #else\n      vec3 diffuseColor1 = vec3(1.0);\n    #endif\n    #ifdef DIFFUSE_MAP2\n      vec3 diffuseColor2 = texture(u_diffuseSampler2, v_uv * u_textureScale2).rgb;\n      diffuseColor2 = gammaInput(diffuseColor2);\n    #else\n      vec3 diffuseColor2 = vec3(1.0);\n    #endif\n    #ifdef DIFFUSE_MAP3\n      vec3 diffuseColor3 = texture(u_diffuseSampler3, v_uv * u_textureScale3).rgb;\n      diffuseColor3 = gammaInput(diffuseColor3);\n    #else\n      vec3 diffuseColor3 = vec3(1.0);\n    #endif\n    diffuseColor1 *= baseColor.r;\n    diffuseColor2 = mix(diffuseColor1, diffuseColor2, baseColor.g);\n    baseColor.rgb = mix(diffuseColor2, diffuseColor3, baseColor.b);\n  #else\n    vec4 baseColor = vec4(1.0);\n  #endif\n\n  #ifdef VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n\n  baseColor.a *= u_diffuseColor.a;\n\n  #ifdef LIGHT\n    #ifdef NORMAL_MAP\n      #if defined(NORMAL_MAP1)\n        vec3 normalColor1 = texture(u_normalSampler1, v_uv * u_textureScale1).rgb;\n      #else\n        vec3 normalColor1 = vec3(1.0);\n      #endif\n      #if defined(NORMAL_MAP2)\n        vec3 normalColor2 = texture(u_normalSampler2, v_uv * u_textureScale2).rgb;\n      #else\n        vec3 normalColor2 = vec3(1.0);\n      #endif\n      #if defined(NORMAL_MAP3)\n        vec3 normalColor3 = texture(u_normalSampler3, v_uv * u_textureScale3).rgb;\n      #else\n        vec3 normalColor3 = vec3(1.0);\n      #endif\n      normalColor1 *= mixColor.r;\n      normalColor2 = mix(normalColor1, normalColor2, mixColor.g);\n      vec3 normalColor = mix(normalColor2, normalColor3, mixColor.b);\n      vec3 normal = normalize((normalColor * 2.0 - 1.0).rgb);\n      normal = normalize(v_TBN * normal);\n    #else\n      vec3 normal = normalize(v_normal);\n    #endif\n\n    if (!gl_FrontFacing) {\n      normal = -normal;\n    }\n\n    vec3 diffuseBase = vec3(0.0);\n    vec3 specularBase = vec3(0.0);\n    vec3 eyeDirection = normalize(eyeSpacePosition);\n\n    #if DIRECTION_LIGHT_COUNT\n      for (int i = 0; i < DIRECTION_LIGHT_COUNT; i++) {\n        DirectionLight light = u_directionLights[i];\n        LightInfo info = calculateDirectionLightInfo(light, eyeDirection, normal);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n      }\n    #endif\n    \n    #if POINT_LIGHT_COUNT\n      int shadowPointLightIndex = 0;\n      for (int i = 0; i < POINT_LIGHT_COUNT; i++) {\n        PointLight light = u_pointLights[i];\n        LightInfo info = calculatePointLightInfo(light, eyeDirection, normal, shadowPointLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowPointLightIndex++;\n        }\n      }\n    #endif\n    \n    #if SPOT_LIGHT_COUNT\n      int shadowSpotLightIndex = 0;\n      for (int i = 0; i < SPOT_LIGHT_COUNT; i++) {\n        SpotLight light = u_spotLights[i];\n        LightInfo info = calculateSpotLightInfo(light, eyeDirection, normal, shadowSpotLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowSpotLightIndex++;\n        }\n      }\n    #endif\n\n    specularBase *= u_specularColor;\n    vec3 finalColor = clamp(diffuseBase * u_diffuseColor.rgb * baseColor.rgb, 0.0, 1.0);\n    finalColor += specularBase;\n    baseColor = vec4(finalColor, baseColor.a);\n  #else\n    baseColor = vec4(u_diffuseColor.rgb * baseColor.rgb, baseColor.a);\n  #endif\n  fragColor = baseColor;\n\n  #ifdef FOG\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  #endif\n}\n',
  Ma = "#ifdef MORPH_TARGETS\n  #if MORPH_TARGETS_COUNT > 0\n    layout(location = 9) in vec3 a_position0;\n  #endif\n  #if MORPH_TARGETS_COUNT > 1\n    layout(location = 10) in vec3 a_position1;\n  #endif\n  #if MORPH_TARGETS_COUNT > 2\n    in vec3 a_position2;\n  #endif\n  #if MORPH_TARGETS_COUNT > 3\n    in vec3 a_position3;\n  #endif\n  uniform float u_weights[MORPH_TARGETS_COUNT];\n#endif\n\n#ifdef SKIN\n  layout(location = 9) in vec4 a_joint;\n  layout(location = 10) in vec4 a_weight;\n  uniform mat4 u_jointMatrix[SKIN_JOINTS_COUNT];\n#endif\n\n#ifdef INSTANCE\n  layout(location = 5) in mat4 a_instance;\n#endif\n\nlayout(location = 0) in vec3 a_position;\n\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\n#if defined(BILLBOARD) \n  uniform mat4 u_projectMatrix;\n  uniform mat4 u_viewMatrix;\n  uniform vec3 u_scale;\n  uniform bool u_vertical;\n#endif\n\nvoid main () {\n  vec3 position = a_position;\n\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      position += a_position0 * u_weights[0];\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      position += a_position1 * u_weights[1];\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      position += a_position2 * u_weights[2];\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      position += a_position3 * u_weights[3];\n    #endif\n  #endif\n\n  vec4 finalPosition = vec4(position, 1.0);\n\n  #ifdef SKIN\n    mat4 skinMat =\n      a_weight.x * u_jointMatrix[int(a_joint.x)] +\n      a_weight.y * u_jointMatrix[int(a_joint.y)] +\n      a_weight.z * u_jointMatrix[int(a_joint.z)] +\n      a_weight.w * u_jointMatrix[int(a_joint.w)];\n    finalPosition = skinMat * finalPosition;\n  #endif\n\n  #ifdef INSTANCE\n    finalPosition = a_instance * finalPosition;\n  #else\n    finalPosition = u_modelMatrix * finalPosition;\n  #endif\n\n  vec4 worldPosition = finalPosition;\n\n  #if defined(BILLBOARD)\n    mat4 modelViewMatrix = u_viewMatrix * u_modelMatrix;\n\n    modelViewMatrix[0][0] = u_scale[0];\n    modelViewMatrix[0][1] = 0.0;\n    modelViewMatrix[0][2] = 0.0;\n\n    if (!u_vertical) {\n      modelViewMatrix[1][0] = 0.0;\n      modelViewMatrix[1][1] = u_scale[1];\n      modelViewMatrix[1][2] = 0.0;\n    }\n\n    modelViewMatrix[2][0] = 0.0;\n    modelViewMatrix[2][1] = 0.0;\n    modelViewMatrix[2][2] = u_scale[2];\n\n    gl_Position = u_projectMatrix * modelViewMatrix * vec4(a_position, 1.0);\n  #else \n    gl_Position = u_projectViewMatrix * worldPosition;\n  #endif\n}\n",
  Oa = "uniform vec4 u_color;\nout vec4 fragColor;\n\nvoid main () {\n  fragColor = u_color;\n}\n",
  Na = "#if defined(DIFFUSE_MAP)\n  uniform mat3 u_textureMatrix;\n#endif\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_viewMatrix;\nuniform vec3 u_scale;\nuniform bool u_vertical;\nuniform mat4 u_projectMatrix;\nuniform bool u_fixedSize;\n\nlayout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  #if defined(DIFFUSE_MAP)\n    #ifdef FLIP_Y\n      v_uv = (u_textureMatrix * vec3(a_uv.x, 1.0 - a_uv.y, 1.0)).xy;\n    #else\n      v_uv = (u_textureMatrix * vec3(a_uv, 1.0)).xy;\n    #endif\n  #else \n    v_uv = a_uv;\n  #endif\n\n  mat4 modelViewMatrix = u_viewMatrix * u_modelMatrix;\n\n  vec3 scale = u_scale;\n  if (u_fixedSize) {\n    vec4 mvPosition = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);\n    scale *= -mvPosition.z;\n  }\n\n  // First colunm.\n  modelViewMatrix[0][0] = scale[0];\n  modelViewMatrix[0][1] = 0.0;\n  modelViewMatrix[0][2] = 0.0;\n\n  if (!u_vertical) {\n    // Second colunm.\n    modelViewMatrix[1][0] = 0.0;\n    modelViewMatrix[1][1] = scale[1];\n    modelViewMatrix[1][2] = 0.0;\n  }\n\n  // Thrid colunm.\n  modelViewMatrix[2][0] = 0.0;\n  modelViewMatrix[2][1] = 0.0;\n  modelViewMatrix[2][2] = scale[2];\n\n  gl_Position = u_projectMatrix * modelViewMatrix * vec4(a_position, 1.0);\n}\n",
  Ea = "#ifdef DIFFUSE_MAP\n  uniform sampler2D u_sampler;\n#endif\n\nuniform vec4 u_diffuseColor;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n  #ifdef DIFFUSE_MAP\n    vec4 baseColor = texture(u_sampler, v_uv);\n  #else\n    vec4 baseColor = vec4(1.0);\n  #endif\n  fragColor = vec4(baseColor.rgb * u_diffuseColor.rgb, baseColor.a * u_diffuseColor.a);\n}\n",
  Aa = "layout(location = 0) in vec3 a_position;\n\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  gl_Position = u_projectViewMatrix * u_modelMatrix * vec4(a_position, 1.0);\n}",
  Ca = "out vec4 fragColor;\n\nvoid main () {\n  fragColor = vec4(1.0);\n}",
  Ra = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main () {\n  gl_Position = vec4(a_position, 1.0);\n  v_uv = a_uv;\n}",
  La = "uniform sampler2D u_sampler;\nuniform vec2 u_resolution;\nuniform vec3 u_outlineColor;\nuniform float u_outlineWidth;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n  vec2 texel = u_resolution * u_outlineWidth;\n  float tleft = texture(u_sampler, v_uv + texel * vec2(-1, -1)).r;\n  float left = texture(u_sampler, v_uv + texel * vec2(-1,  0)).r;\n  float bleft = texture(u_sampler, v_uv + texel * vec2(-1,  1)).r;\n  float top = texture(u_sampler, v_uv + texel * vec2(0, -1)).r;\n  float bottom = texture(u_sampler, v_uv + texel * vec2(0,  1)).r;\n  float tright = texture(u_sampler, v_uv + texel * vec2(1, -1)).r;\n  float right = texture(u_sampler, v_uv + texel * vec2(1,  0)).r;\n  float bright = texture(u_sampler, v_uv + texel * vec2(1,  1)).r;\n\n  float x = tleft + 2.0 * left + bleft - tright - 2.0 * right - bright;\n  float y = -tleft - 2.0 * top - tright + bleft + 2.0 * bottom + bright;\n  float gradient = length(vec2(x, y));\n\n  if (gradient == 0.0) {\n    discard;\n  } else {\n    fragColor = vec4(u_outlineColor, 1.0);\n  }\n}",
  Ia = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
  Da = "uniform sampler2D u_sampler;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = texture(u_sampler, v_uv);\n}",
  za = "layout(location = 0) in vec3 a_position;\n\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main() {\n  gl_Position = u_projectViewMatrix * u_modelMatrix * vec4(a_position, 1.0);\n}",
  Fa = "uniform vec3 u_glowColor;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = vec4(u_glowColor, 1.0);\n}",
  Ua = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
  ka = "uniform vec2 u_resolution;\nuniform vec2 u_direction;\nuniform sampler2D u_sampler;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\n// https://github.com/Jam3/glsl-fast-gaussian-blur\nvoid main() {\n  vec4 color = vec4(0.0);\n  vec2 off1 = vec2(1.3846153846) * u_direction;\n  vec2 off2 = vec2(3.2307692308) * u_direction;\n  color += texture(u_sampler, v_uv) * 0.2270270270;\n  color += texture(u_sampler, v_uv + (off1 * u_resolution)) * 0.3162162162;\n  color += texture(u_sampler, v_uv - (off1 * u_resolution)) * 0.3162162162;\n  color += texture(u_sampler, v_uv + (off2 * u_resolution)) * 0.0702702703;\n  color += texture(u_sampler, v_uv - (off2 * u_resolution)) * 0.0702702703;\n  fragColor = color;\n}",
  Ha = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
  Ja = "#define MIP_MAP_COUNT 5\n\nuniform float u_strength;\nuniform float u_radius;\nuniform sampler2D u_samplerBlur1;\nuniform sampler2D u_samplerBlur2;\nuniform sampler2D u_samplerBlur3;\nuniform sampler2D u_samplerBlur4;\nuniform sampler2D u_samplerBlur5;\nin vec2 v_uv;\nout vec4 fragColor;\n\nconst float c_factors[MIP_MAP_COUNT] = float[](\n  1.0, 0.8, 0.6, 0.4, 0.2\n);\nconst vec3 c_tintColors[MIP_MAP_COUNT] = vec3[](\n  vec3(1.0, 1.0, 1.0),\n  vec3(1.0, 1.0, 1.0),\n  vec3(1.0, 1.0, 1.0),\n  vec3(1.0, 1.0, 1.0),\n  vec3(1.0, 1.0, 1.0)\n);\n\nfloat lerpBloomFactor(const in float factor) {\n  float mirrorFactor = 1.2 - factor;\n  return mix(factor, mirrorFactor, u_radius);\n}\n\nvoid main () {\n  fragColor = u_strength * clamp((\n    lerpBloomFactor(c_factors[0]) * vec4(c_tintColors[0], 1.0) * texture(u_samplerBlur1, v_uv) +\n    lerpBloomFactor(c_factors[1]) * vec4(c_tintColors[1], 1.0) * texture(u_samplerBlur2, v_uv) +\n    lerpBloomFactor(c_factors[2]) * vec4(c_tintColors[2], 1.0) * texture(u_samplerBlur3, v_uv) +\n    lerpBloomFactor(c_factors[3]) * vec4(c_tintColors[3], 1.0) * texture(u_samplerBlur4, v_uv) +\n    lerpBloomFactor(c_factors[4]) * vec4(c_tintColors[4], 1.0) * texture(u_samplerBlur5, v_uv)\n  ), 0., 1.);\n}",
  Va = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
  ja = "uniform vec2 u_resolution;\nuniform vec2 u_direction;\nuniform sampler2D u_sampler;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nfloat gaussianPdf(in float x, in float sigma) {\n  return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;\n}\n\nvoid main() {\n  float fSigma = float(KERNEL_RADIUS);\n  float weightSum = gaussianPdf(0.0, fSigma);\n  vec3 diffuseSum = texture(u_sampler, v_uv).rgb * weightSum;\n  for(int i = 1; i < KERNEL_RADIUS; i++) {\n    float x = float(i);\n    float w = gaussianPdf(x, fSigma);\n    vec2 uvOffset = u_direction * u_resolution * x;\n    vec3 sample1 = texture(u_sampler, v_uv + uvOffset).rgb;\n    vec3 sample2 = texture(u_sampler, v_uv - uvOffset).rgb;\n    diffuseSum += (sample1 + sample2) * w;\n    weightSum += 2.0 * w;\n  }\n  fragColor = vec4(diffuseSum / weightSum, 1.0);\n}",
  Ba = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
  Xa = 'const vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\nuniform sampler2D u_sampler;\nuniform float u_threshold;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nconst float c_smoothWidth = 0.01;\n\nvoid main() {\n  vec4 color = texture(u_sampler, v_uv);\n  float brightness = luminance(color.rgb);\n  float percent = smoothstep(u_threshold, u_threshold + c_smoothWidth, brightness);\n  fragColor = mix(vec4(0.0), color, percent);\n}',
  Ga = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
  Wa = "uniform sampler2D u_samplerPosition;\nuniform sampler2D u_samplerNormal;\nuniform sampler2D u_samplerNormalMap;\nuniform vec2 u_windowSize;\nuniform float u_occluderBias;\nuniform float u_samplingRadius;\nuniform vec2 u_attenuation;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nfloat SamplePixels (vec3 srcPosition, vec3 srcNormal, vec2 uv) {\n  // Get the 3D position of the destination pixel\n  vec3 dstPosition = texture(u_samplerPosition, uv).xyz;\n\n  // Calculate ambient occlusion amount between these two points\n  // It is simular to diffuse lighting. Objects directly above the fragment cast\n  // the hardest shadow and objects closer to the horizon have minimal effect.\n  vec3 positionVec = dstPosition - srcPosition;\n  float intensity = max(dot(normalize(positionVec), srcNormal) - u_occluderBias, 0.0);\n\n  // Attenuate the occlusion, similar to how you attenuate a light source.\n  // The further the distance between points, the less effect AO has on the fragment.\n  float dist = length(positionVec);\n  float attenuation = 1.0 / (u_attenuation.x + (u_attenuation.y * dist));\n\n  return intensity * attenuation;\n}\n\nvoid main() {\n  // Get position and normal vector for this fragment\n  vec4 position = texture(u_samplerPosition, v_uv);\n  vec3 srcPosition = position.xyz;\n  vec3 srcNormal = texture(u_samplerNormal, v_uv).xyz;\n  vec2 randVec = normalize(texture(u_samplerNormalMap, v_uv).xy * 2.0 - 1.0);\n  float srcDepth = position.w;\n\n  // The following variable specifies how many pixels we skip over after each\n  // iteration in the ambient occlusion loop. We can't sample every pixel within\n  // the sphere of influence because that's too slow. We only need to sample\n  // some random pixels nearby to apprxomate the solution.\n  //\n  // Pixels far off in the distance will not sample as many pixels as those close up.\n  float kernelRadius = u_samplingRadius * (1.0 - srcDepth);\n\n  // Sample neighbouring pixels\n  vec2 kernel[4];\n  kernel[0] = vec2(0.0, 1.0);   // top\n  kernel[1] = vec2(1.0, 0.0);   // right\n  kernel[2] = vec2(0.0, -1.0);  // bottom\n  kernel[3] = vec2(-1.0, 0.0);  // left\n\n  const float Sin45 = 0.707107; // 45 degrees = sin(PI / 4)\n\n  // Sample from 16 pixels, which should be enough to appromixate a result. You can\n  // sample from more pixels, but it comes at the cost of performance.\n  float occlusion = 0.0;\n  for (int i = 0; i < 4; ++i)\n  {\n    vec2 k1 = reflect(kernel[i], randVec);\n    vec2 k2 = vec2(k1.x * Sin45 - k1.y * Sin45,\n             k1.x * Sin45 + k1.y * Sin45);\n    k1 *= u_windowSize;\n    k2 *= u_windowSize;\n\n    occlusion += SamplePixels(srcPosition, srcNormal, v_uv + k1 * kernelRadius);\n    occlusion += SamplePixels(srcPosition, srcNormal, v_uv + k2 * kernelRadius * 0.75);\n    occlusion += SamplePixels(srcPosition, srcNormal, v_uv + k1 * kernelRadius * 0.5);\n    occlusion += SamplePixels(srcPosition, srcNormal, v_uv + k2 * kernelRadius * 0.25);\n  }\n\n  // Average and clamp ambient occlusion\n  occlusion /= 16.0;\n  occlusion = clamp(occlusion, 0.0, 1.0);\n\n  fragColor.x = occlusion;\n}",
  Za = "layout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\n\nuniform mat4 u_projectMatrix;\nuniform mat4 u_viewModelMatrix;\nuniform mat3 u_viewNormalMatrix;\n\nout vec4 v_viewPosition;\nout vec3 v_viewNormal;\n\nvoid main () {\n  v_viewNormal = u_viewNormalMatrix * a_normal;\n  v_viewPosition = u_viewModelMatrix * vec4(a_position, 1.0);\n  gl_Position = u_projectMatrix * v_viewPosition;\n}",
  qa = "uniform float u_linearDepth;\n\nin vec4 v_viewPosition;\nin vec3 v_viewNormal;\nlayout (location = 0) out vec4 position;\nlayout (location = 1) out vec4 normal;\n\nvoid main() {\n  float linearDepth = length(v_viewPosition) / u_linearDepth;\n  position = vec4(v_viewPosition.xyz, linearDepth);\n  normal = vec4(normalize(v_viewNormal), 1.0);\n  if (!gl_FrontFacing) {\n    normal = -normal;\n  }\n}",
  Ka = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
  Ya = "uniform sampler2D u_samplerScene;\nuniform sampler2D u_samplerSSAO;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n  vec4 texColor = texture(u_samplerScene, v_uv);\n  float ao = texture(u_samplerSSAO, v_uv).r;\n  fragColor.rgb = clamp(texColor.rgb - ao, 0.0, 1.0);\n  fragColor.a = texColor.a;\n}",
  Qa = "uniform vec3 u_eyePosition;\nuniform float u_pointSize;\nuniform float u_maxDistance;\nuniform mat4 u_projectViewMatrix;\n\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in float a_age;\nlayout(location = 2) in float a_life;\n\nout float v_age;\nout float v_life;\n\nvoid main() {\n  v_age = a_age;\n  v_life = a_life;\n  float sizeRatio = 1.0 - smoothstep(0.0, 1.0, distance(u_eyePosition, a_position) / u_maxDistance);\n  gl_PointSize = (u_pointSize + 20.0 * (1.0 - a_age / a_life)) * sizeRatio;\n  gl_Position = u_projectViewMatrix * vec4(a_position, 1.0);\n}",
  $a = "uniform vec3 u_pointColor;\nuniform sampler2D u_particle;\n\nin float v_age;\nin float v_life;\n\nout vec4 fragColor;\n\n// http://iquilezles.org/www/articles/palettes/palettes.htm\nvec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {\n  return a + b * cos(6.28318 * (c * t + d));\n}\n\nvoid main() {\n  float t =  v_age / v_life;\n  vec3 color = u_pointColor;\n  // color = palette(t,\n  //   vec3(0.5, 0.5, 0.5),\n  //   vec3(0.5, 0.5, 0.5),\n  //   vec3(1.0, 1.0, 1.0),\n  //   vec3(0.00, 0.10, 0.20));\n  vec4 particleColor = texture(u_particle, gl_PointCoord);\n  fragColor = vec4(color, 1.0 - t) * particleColor;\n}",
  er = "uniform float u_timeDelta;\nuniform sampler2D u_rgNoise;\nuniform vec2 u_gravity;\nuniform vec3 u_origin;\nuniform float u_minTheta;\nuniform float u_maxTheta;\nuniform float u_minSpeed;\nuniform float u_maxSpeed;\n\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in float a_age;\nlayout(location = 2) in float a_life;\nlayout(location = 3) in vec2 a_velocity;\n\nout vec3 v_position;\nout float v_age;\nout float v_life;\nout vec2 v_velocity;\n\nvoid main() {\n  if (a_age >= a_life) {\n    ivec2 noise_coord = ivec2(gl_VertexID % 512, gl_VertexID / 512);\n    vec2 rand = texelFetch(u_rgNoise, noise_coord, 0).rg;\n    float theta = u_minTheta + rand.r*(u_maxTheta - u_minTheta);\n    float x = cos(theta);\n    float y = sin(theta);\n\n    v_position = u_origin;\n    v_age = 0.0;\n    v_life = a_life;\n    v_velocity = vec2(x, y) * (u_minSpeed + rand.g * (u_maxSpeed - u_minSpeed));\n  } else {\n    v_position = a_position + vec3(a_velocity, 0.0) * u_timeDelta;\n    v_age = a_age + u_timeDelta;\n    v_life = a_life;\n    v_velocity = a_velocity + u_gravity * u_timeDelta;\n  }\n}",
  tr = "void main() {\n  discard;\n}",
  nr = "layout(location = 0) in vec3 a_position;\n\nuniform mat4 u_viewMatrix;\nuniform mat4 u_projectMatrix;\n\nout vec3 v_modelPosition;\n\nvoid main() {\n  v_modelPosition = vec3(-a_position.x, a_position.y, a_position.z);\n  mat4 viewMatrix = u_viewMatrix;\n  viewMatrix[3].xyz = vec3(0.0, 0.0, 0.0);\n  vec4 position = u_projectMatrix * viewMatrix * vec4(a_position, 1.0);\n  gl_Position = position.xyww;\n}",
  ir = 'const vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nuniform samplerCube u_sampler;\n\nin vec3 v_modelPosition;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = texture(u_sampler, v_modelPosition);\n}',
  or = "#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  out vec3 v_modelPosition;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  out vec3 v_worldPosition;\n#endif\n\n#ifdef VERTEX_COLOR\n  layout(location = 4) in vec4 a_color;\n  out vec4 v_color;\n#endif\n\nlayout(location = 0) in vec3 a_position;\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  vec3 position = a_position;\n  vec4 finalPosition = vec4(position, 1.0);\n  vec4 worldPosition = u_modelMatrix * finalPosition;\n  gl_Position = u_projectViewMatrix * worldPosition;\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    v_worldPosition = worldPosition.xyz;\n  #endif\n\n  #ifdef VERTEX_COLOR\n    v_color = a_color;\n  #endif\n\n  #if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n    v_modelPosition = finalPosition.xyz;\n  #endif\n}",
  ar = "uniform vec4 u_wireframeColor;\n\n#ifdef VERTEX_COLOR\n  in vec4 v_color;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  uniform vec3 u_eyePosition;\n  in vec3 v_worldPosition;\n#endif\n\n#if defined(CLIPPLANE)\n  uniform vec4 u_clipPlane;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  in vec3 v_modelPosition;\n#endif\n\n#ifdef FOG\n  uniform vec3 u_fogColor;\n  uniform float u_fogNear;\n  uniform float u_fogFar;\n#endif\n\nout vec4 fragColor;\n\nvoid main () {\n  #ifdef CLIPPLANE\n    float clipDistance = dot(v_modelPosition, u_clipPlane.xyz);\n    if (clipDistance >= u_clipPlane.w) {\n      discard;\n    }\n  #endif\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n  #endif\n\n  vec4 baseColor = u_wireframeColor;\n\n  #ifdef VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n\n  fragColor = baseColor;\n\n  #ifdef FOG\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  #endif\n}\n",
  rr = "layout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\n\nconst float pi = 3.14159;\n\nuniform mat4 u_projectMatrix;\nuniform mat4 u_viewMatrix;\nuniform mat4 u_modelMatrix;\n\nuniform float u_time;\n\nuniform bool u_enable[8];\nuniform float u_amplitude[8];\nuniform float u_wavelength[8];\nuniform float u_direction[8];\n\nout vec3 v_vPos;\n\n#if defined(LIGHT)\n  uniform mat3 u_normalMatrix;\n  out vec3 v_normal;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  out vec3 v_modelPosition;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  out vec3 v_worldPosition;\n#endif\n\n#ifdef VERTEX_COLOR\n  layout(location = 4) in vec4 a_color;\n  out vec4 v_color;\n#endif\n\n#ifdef DIRECTION_SHADOW\n  #define CASCADED_COUNT 4\n  uniform mat4 u_shadowMapProjectViewMatrix_0;\n  uniform mat4 u_shadowMapProjectViewMatrix_1;\n  uniform mat4 u_shadowMapProjectViewMatrix_2;\n  uniform mat4 u_shadowMapProjectViewMatrix_3;\n  out vec4 v_shadowMapPosition[CASCADED_COUNT];\n#endif\n#ifdef SPOT_SHADOW\n  #if SPOT_SHADOW > 0\n    uniform mat4 u_spotShadowMapProjectViewMatrix_0;\n  #endif\n  #if SPOT_SHADOW > 1\n    uniform mat4 u_spotShadowMapProjectViewMatrix_1;\n  #endif\n  #if SPOT_SHADOW > 2\n    uniform mat4 u_spotShadowMapProjectViewMatrix_2;\n  #endif\n  #if SPOT_SHADOW > 3\n    uniform mat4 u_spotShadowMapProjectViewMatrix_3;\n  #endif\n  out vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n#endif\n\n\nfloat wave(int i) {\n  float phase = 2.0 * pi / u_wavelength[i];\n  float d = u_direction[i] * pi / 180.0;\n  vec2 dir = vec2(cos(d), sin(d));\n  float theta = dot(dir, a_position.xy);\n  return u_amplitude[i] * sin(theta * phase + u_time * phase);\n}\n\nfloat bigWaveHeight() {\n  float height = 0.0;\n  for (int i = 0; i < 4; i++) {\n    if (u_enable[i]) {\n      height += wave(i);\n    }\n  }\n  return height;\n}\n\nvoid main(void) {\n  vec3 position = a_position;\n  vec4 finalPosition = vec4(position, 1.0);\n  vec4 worldPosition = u_modelMatrix * finalPosition;\n\n  float height = bigWaveHeight();\n  v_vPos = vec3(a_position.xy, height);\n  gl_Position = u_projectMatrix * u_viewMatrix * u_modelMatrix * vec4(a_position.xy, height, 1.0);\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    v_worldPosition = worldPosition.xyz;\n  #endif\n\n  #ifdef DIRECTION_SHADOW\n    v_shadowMapPosition[0] = u_shadowMapProjectViewMatrix_0 * worldPosition;\n    v_shadowMapPosition[1] = u_shadowMapProjectViewMatrix_1 * worldPosition;\n    v_shadowMapPosition[2] = u_shadowMapProjectViewMatrix_2 * worldPosition;\n    v_shadowMapPosition[3] = u_shadowMapProjectViewMatrix_3 * worldPosition;\n  #endif\n  #ifdef SPOT_SHADOW\n    #if SPOT_SHADOW > 0\n      v_spotShadowMapPosition[0] = u_spotShadowMapProjectViewMatrix_0 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 1\n      v_spotShadowMapPosition[1] = u_spotShadowMapProjectViewMatrix_1 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 2\n      v_spotShadowMapPosition[2] = u_spotShadowMapProjectViewMatrix_2 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 3\n      v_spotShadowMapPosition[3] = u_spotShadowMapProjectViewMatrix_3 * worldPosition;\n    #endif\n  #endif\n\n  #if defined(LIGHT)\n    vec3 finalNormal = a_normal;\n    v_normal = u_normalMatrix * finalNormal;\n  #endif\n\n  #if defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n    vec4 finalTangent = a_tangent;\n    vec3 normal = normalize(finalNormal);\n    vec3 tangent = normalize(finalTangent.xyz);\n    vec3 bitangent = cross(normal, tangent) * finalTangent.w;\n    v_TBN = mat3(u_modelMatrix) * mat3(tangent, bitangent, normal);\n  #endif\n\n  #if defined(MIX_MAP) || defined(DIFFUSE_MAP1) || defined(DIFFUSE_MAP2) || defined(DIFFUSE_MAP3) || defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n    v_uv = a_uv;\n  #endif\n\n  #ifdef VERTEX_COLOR\n    v_color = a_color;\n  #endif\n\n  #if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n    v_modelPosition = finalPosition.xyz;\n  #endif\n}",
  sr = '#ifdef VERTEX_COLOR\n  in vec4 v_color;\n#endif\n\n#if defined(LIGHT)\n  in vec3 v_normal;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  uniform vec3 u_eyePosition;\n  in vec3 v_worldPosition;\n#endif\n\n#ifdef LIGHT\n  uniform vec3 u_ambientLightColor;\n  uniform vec3 u_ambientColor;\n  uniform float u_shininess;\n  uniform vec3 u_specularColor;\n\n  #define PCF_SHADOW\n  #ifdef DIRECTION_SHADOW\n    #define CASCADED_COUNT 4\n    in vec4 v_shadowMapPosition[CASCADED_COUNT];\n    uniform highp sampler2DArrayShadow u_directionShadowMapSampler;\n    uniform vec4 u_cascadedEnd;\n  \n    float calculateDirectionShadow(int layer) {\n      vec3 position = v_shadowMapPosition[layer].xyz / v_shadowMapPosition[layer].w;\n      position = position * 0.5 + 0.5;\n      if (position.x <= 0.0 || position.x >= 1.0 || position.y <= 0.0 || position.y >= 1.0) {\n        return 1.0;\n      }\n      vec4 shadowUv = vec4(position.xy, float(layer), position.z - 0.005);\n  \n      #ifdef PCF_SHADOW\n        vec2 size = 1.0 / vec2(2048.0, 2048.0);\n        float depth = 0.0;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = texture(u_directionShadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n        return depth;\n      #else\n        float depth = texture(u_directionShadowMapSampler, shadowUv);\n        return depth;\n      #endif\n    }\n  #endif\n  \n  #ifdef POINT_SHADOW\n    const float pointLightNear = 0.1;\n    const float pointLightFar = 1000.0;\n    #if POINT_SHADOW > 0\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_0;\n    #endif\n    #if POINT_SHADOW > 1\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_1;\n    #endif\n    #if POINT_SHADOW > 2\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_2;\n    #endif\n    #if POINT_SHADOW > 3\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_3;\n    #endif\n    // https://stackoverflow.com/questions/10786951/omnidirectional-shadow-mapping-with-depth-cubemap\n    float vectorToDepthValue(vec3 vec, float n, float f) {\n      vec3 absVec = abs(vec);\n      float localZcomp = max(absVec.x, max(absVec.y, absVec.z));\n      float normZComp = (f + n) / (f - n) - (2.0 * f * n) / (f - n) / localZcomp;\n      return (normZComp + 1.0) * 0.5;\n    }\n  \n    float calculatePointShadow(samplerCubeShadow shadowMapSampler, vec3 lightToPosition) {\n      float depth = vectorToDepthValue(lightToPosition, pointLightNear, pointLightFar);\n      return texture(shadowMapSampler, vec4(lightToPosition, depth));\n    }\n  #endif\n  \n  #ifdef SPOT_SHADOW\n    in vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n    #if SPOT_SHADOW > 0\n      uniform highp sampler2DShadow u_spotShadowMapSampler_0;\n    #endif\n    #if SPOT_SHADOW > 1\n      uniform highp sampler2DShadow u_spotShadowMapSampler_1;\n    #endif\n    #if SPOT_SHADOW > 2\n      uniform highp sampler2DShadow u_spotShadowMapSampler_2;\n    #endif\n    #if SPOT_SHADOW > 3\n      uniform highp sampler2DShadow u_spotShadowMapSampler_3;\n    #endif\n  \n    float calculateSpotShadow(sampler2DShadow shadowMapSampler, vec4 spotShadowMapPosition) {\n      vec4 position = spotShadowMapPosition;\n  \n      float depth = 0.0;\n      #ifdef PCF_SHADOW\n        vec4 shadowUv = position;\n        vec2 size = 1.0 / vec2(2048.0, 2048.0) * position.w;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = textureProj(shadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n      #else\n        depth = textureProj(shadowMapSampler, position);\n      #endif\n      return depth;\n    }\n  #endif\n\n  struct LightInfo {\n    vec3 diffuseColor;\n    vec3 specularColor;\n  };\n  \n  #if DIRECTION_LIGHT_COUNT\n    struct DirectionLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform DirectionLight u_directionLights[DIRECTION_LIGHT_COUNT];\n  \n    LightInfo calculateDirectionLightInfo(DirectionLight light, vec3 eyeDirection, vec3 normal) {\n      LightInfo info;\n      vec3 lightDirection = normalize(-light.direction);\n      float ndl = dot(lightDirection, normal);\n      float diffuse = max(ndl, 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n  \n      #ifdef DIRECTION_SHADOW\n        if (light.shadow) {\n          int layer = 3;\n          if (gl_FragCoord.z <= u_cascadedEnd.x) {\n            layer = 0;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.y) {\n            layer = 1;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.z) {\n            layer = 2;\n          }\n          float shadow = calculateDirectionShadow(layer);\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      info.diffuseColor = light.diffuseColor * diffuse;\n      info.specularColor = light.specularColor * specular;\n      return info;\n    }\n  #endif\n  \n  #if POINT_LIGHT_COUNT\n    struct PointLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 position;\n      float distance;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform PointLight u_pointLights[POINT_LIGHT_COUNT];\n  \n    LightInfo calculatePointLightInfo(PointLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightToPosition = light.position - v_worldPosition;\n      float distance = length(lightToPosition);\n      vec3 lightDirection = normalize(lightToPosition);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n      #ifdef POINT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if POINT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_0, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_1, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_2, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_3, -lightToPosition);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n  \n  #if SPOT_LIGHT_COUNT\n    struct SpotLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      vec3 position;\n      float distance;\n      float innerAngle;\n      float outerAngle;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform SpotLight u_spotLights[SPOT_LIGHT_COUNT];\n  \n    LightInfo calculateSpotLightInfo(SpotLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightDirection = light.position - v_worldPosition;\n      float distance = length(lightDirection);\n      lightDirection = normalize(lightDirection);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n  \n      #ifdef SPOT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if SPOT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_0, v_spotShadowMapPosition[0]);\n            }\n          #endif\n          #if SPOT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_1, v_spotShadowMapPosition[1]);\n            }\n          #endif\n          #if SPOT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_2, v_spotShadowMapPosition[2]);\n            }\n          #endif\n          #if SPOT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_3, v_spotShadowMapPosition[3]);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      float theta = dot(lightDirection, normalize(-light.direction));\n      float epsilon = light.innerAngle - light.outerAngle;\n      float intensity = clamp((theta - light.outerAngle) / epsilon, 0.0, 1.0);\n      attenuation *= intensity;\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n#endif\n\n#if defined(CLIPPLANE)\n  uniform vec4 u_clipPlane;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  in vec3 v_modelPosition;\n#endif\n\n#ifdef FOG\n  uniform vec3 u_fogColor;\n  uniform float u_fogNear;\n  uniform float u_fogFar;\n#endif\n\nconst vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nconst float pi = 3.14159;\n\nuniform vec3 u_waterCenter;\nuniform float u_time;\n\nuniform bool u_enable[8];\nuniform float u_amplitude[8];\nuniform float u_wavelength[8];\nuniform float u_direction[8];\nuniform float u_transparency;\n\nuniform sampler2D u_diffuseSampler;\n\nin vec3 v_vPos;\nout vec4 fragColor;\n\nvec3 waveNormal() {\n  float dx = 0.0;\n  float dy = 0.0;\n  for (int i = 0; i < 8; i++) {\n    if (u_enable[i]) {\n      float phase = 2.0 * pi / u_wavelength[i];;\n      float d = u_direction[i] * pi/180.0;\n      vec2 dir = vec2(cos(d), sin(d));\n      float theta = dot(dir, v_vPos.xy);\n      float angle = theta * phase + u_time * phase;\n\n      dx += u_amplitude[i] * dir.y * phase * cos(angle);\n      dy += u_amplitude[i] * dir.x * phase * cos(angle);\n    }\n  }\n  vec3 n = vec3(-dx, -dy, 1.0);\n  return normalize(n);\n}\n\nvoid main(void) {\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n  #endif\n\n  vec4 baseColor = vec4(1.0);\n \n  #ifdef VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n\n\n  #ifdef LIGHT\n    vec3 normal = normalize(v_normal);\n\n    if (!gl_FrontFacing) {\n      normal = -normal;\n    }\n\n    vec3 diffuseBase = vec3(0.0);\n    vec3 specularBase = vec3(0.0);\n    vec3 eyeDirection = normalize(eyeSpacePosition);\n\n    #if DIRECTION_LIGHT_COUNT\n      for (int i = 0; i < DIRECTION_LIGHT_COUNT; i++) {\n        DirectionLight light = u_directionLights[i];\n        LightInfo info = calculateDirectionLightInfo(light, eyeDirection, normal);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n      }\n    #endif\n    \n    #if POINT_LIGHT_COUNT\n      int shadowPointLightIndex = 0;\n      for (int i = 0; i < POINT_LIGHT_COUNT; i++) {\n        PointLight light = u_pointLights[i];\n        LightInfo info = calculatePointLightInfo(light, eyeDirection, normal, shadowPointLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowPointLightIndex++;\n        }\n      }\n    #endif\n    \n    #if SPOT_LIGHT_COUNT\n      int shadowSpotLightIndex = 0;\n      for (int i = 0; i < SPOT_LIGHT_COUNT; i++) {\n        SpotLight light = u_spotLights[i];\n        LightInfo info = calculateSpotLightInfo(light, eyeDirection, normal, shadowSpotLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowSpotLightIndex++;\n        }\n      }\n    #endif\n    \n    diffuseBase += u_ambientColor * u_ambientLightColor;\n    specularBase *= u_specularColor;\n    vec3 finalColor = clamp(diffuseBase * baseColor.rgb, 0.0, 1.0);\n    finalColor += specularBase;\n    baseColor = vec4(finalColor, baseColor.a);\n  #endif\n  fragColor = baseColor;\n\n  #ifdef FOG\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  #endif\n\n  vec3 normal1 = waveNormal();\n  vec3 eye = normalize(u_waterCenter - v_vPos);\n\n  vec3 reflection = reflect(eye, normal1);\n  vec2 texPoint = reflection.xy / reflection.z;\n  vec2 texCoord = texPoint * 0.5 + 0.5;\n  vec3 skyColor = texture(u_diffuseSampler, texCoord).rgb;\n\n  fragColor = vec4(skyColor.rgb * fragColor.rgb, u_transparency);\n}',
  lr = {
    5126: 1,
    35664: 2,
    35665: 3,
    35666: 4,
    35676: 16
  };
let ur = 0;
class cr {
  constructor(e) {
    cr.COUNT++, this.id = ++ur, this._attributes = null, this._uniforms = null, this._program = null, this._vertexSource = e.vertex, this._fragmentSource = e.fragment, this._transformFeedback = e.transformFeedback, this._error = null
  }
  setSource(e, t) {
    const n = this,
      i = n._gl;

    function o(e, t) {
      const o = i.createShader(e);
      if (i.shaderSource(o, t), i.compileShader(o), !i.getShaderParameter(o, i.COMPILE_STATUS) && !i.isContextLost()) {
        const a = e === i.VERTEX_SHADER ? "vertex" : "fragment",
          r = t.split("\n").map((e, t) => `${t+1}: ${e}`).join("\n");
        return n._error = `Create ${a} shader ${i.getShaderInfoLog(o)}\n${r}`, Ui(n._error), i.deleteShader(o), null
      }
      return o
    }
    const a = o(i.VERTEX_SHADER, e);
    if (!a) return !1;
    const r = o(i.FRAGMENT_SHADER, t);
    if (!r) return !1;
    const s = i.createProgram();
    if (i.attachShader(s, a), i.attachShader(s, r), n._transformFeedback && i.transformFeedbackVaryings(s, n._transformFeedback.varyings, i[n._transformFeedback.bufferMode || "INTERLEAVED_ATTRIBS"]), i.linkProgram(s), !i.getProgramParameter(s, i.LINK_STATUS) && !i.isContextLost()) return n._error = `Link program error: ${i.getProgramInfoLog(s)}`, Ui(n._error), i.deleteProgram(s), !1;
    Ri || (i.detachShader(s, a), i.detachShader(s, r)), i.deleteShader(a), i.deleteShader(r), n._program && n._gl.deleteProgram(n._program), n._error = null, n._program = s, n._vertexSource = e, n._fragmentSource = t;
    const l = {};
    n._attributes = l;
    const u = new Map;
    n._uniforms = u;
    const c = i.getProgramParameter(s, i.ACTIVE_ATTRIBUTES);
    for (let e = 0; e < c; e++) {
      const t = i.getActiveAttrib(s, e);
      if (t) {
        const e = t.name.substr(2);
        l[e] = {
          name: e,
          location: i.getAttribLocation(s, t.name),
          type: t.type,
          size: lr[t.type]
        }
      }
    }
    const d = i.getProgramParameter(s, i.ACTIVE_UNIFORMS);
    for (let e = 0; e < d; e++) {
      const t = i.getActiveUniform(s, e);
      if (t) {
        u.set(t.name, {
          location: i.getUniformLocation(s, t.name),
          type: t.type
        });
        const e = t.name.indexOf("["),
          n = t.name.indexOf("."),
          o = t.name.substr(0, e);
        if (e > 0 && n < 0) {
          const e = i.getUniformLocation(s, o);
          u.set(o, {
            location: e,
            type: t.type,
            array: !0
          })
        }
      }
    }
    return !0
  }
  use(e) {
    const t = this;
    return t._gl || (t._gl = e, t.setSource(t._vertexSource, t._fragmentSource)), e._program !== t && (e.useProgram(t._program), e._program = t, !0)
  }
  bindUniforms(e) {
    const t = this;
    t._program && Object.keys(e).forEach(n => {
      const i = e[n];
      t.bindUniform(n, i)
    })
  }
  bindUniform(e, t) {
    if (null == t || !this._program) return;
    const n = this._gl,
      i = this._uniforms.get(e);
    if (!i) return;
    const {
      type: o,
      location: a
    } = i, r = i.array;
    switch (o) {
      case n.INT:
      case n.BOOL:
      case n.SAMPLER_2D:
      case n.SAMPLER_2D_ARRAY:
      case n.SAMPLER_2D_ARRAY_SHADOW:
      case n.SAMPLER_2D_SHADOW:
      case n.SAMPLER_3D:
      case n.SAMPLER_CUBE:
      case n.SAMPLER_CUBE_SHADOW:
        r ? n.uniform1iv(a, t) : n.uniform1i(a, t);
        break;
      case n.INT_VEC2:
      case n.BOOL_VEC2:
        r ? n.uniform2iv(a, t) : n.uniform2i(a, t);
        break;
      case n.INT_VEC3:
      case n.BOOL_VEC3:
        r ? n.uniform3iv(a, t) : n.uniform3i(a, t);
        break;
      case n.INT_VEC4:
      case n.BOOL_VEC4:
        r ? n.uniform4iv(a, t) : n.uniform4i(a, t);
        break;
      case n.FLOAT:
        r ? n.uniform1fv(a, t) : n.uniform1f(a, t);
        break;
      case n.FLOAT_VEC2:
        n.uniform2fv(a, t);
        break;
      case n.FLOAT_VEC3:
        n.uniform3fv(a, t);
        break;
      case n.FLOAT_VEC4:
        n.uniform4fv(a, t);
        break;
      case n.FLOAT_MAT2:
        n.uniformMatrix2fv(a, !1, t);
        break;
      case n.FLOAT_MAT3:
        n.uniformMatrix3fv(a, !1, t);
        break;
      case n.FLOAT_MAT4:
        n.uniformMatrix4fv(a, !1, t)
    }
  }
  dispose() {
    this._gl.deleteProgram(this._program), this._program = null, this._gl = null, cr.COUNT--
  }
}

function dr(e, t, n) {
  return new cr({
    vertex: ha + e,
    fragment: ha + t,
    transformFeedback: n
  })
}

function fr() {
  let e, t, n;
  onmessage = function (i) {
    const o = i.data;
    var a;
    "init" === o.type ? (e = o.config, a = o.transcoderBinary, t = new Promise(e => {
      Module = {
        wasmBinary: a,
        onRuntimeInitialized: e
      }
    }).then(() => {
      const {
        BasisFile: e,
        initializeBasis: t
      } = Module;
      n = e, t(), postMessage({
        type: "init"
      })
    }), createBasisModule()) : "transcode" === o.type && t.then(() => {
      try {
        const {
          width: t,
          height: i,
          mipmaps: a
        } = function (t) {
          const i = new n(new Uint8Array(t)),
            o = i.getImageWidth(0, 0),
            a = i.getImageHeight(0, 0),
            r = i.getNumLevels(0);

          function s() {
            i.close(), i.delete()
          }
          if (!o || !a || !r) throw s(), new Error("BasisTextureLoader:  Invalid .basis file");
          if (!i.startTranscoding()) throw s(), new Error("BasisTextureLoader: .startTranscoding failed");
          i.getHasAlpha() && Fi("BasisTextureLoader: Alpha not yet implemented.");
          const l = [];
          for (let t = 0; t < r; t++) {
            const n = i.getImageWidth(0, t),
              o = i.getImageHeight(0, t),
              a = new Uint8Array(i.getImageTranscodedSizeInBytes(0, t, e.format));
            if (!i.transcodeImage(a, 0, t, e.format, e.etcSupported ? 0 : e.dxtSupported ? 1 : 0, 0)) throw s(), new Error(`BasisTextureLoader: .transcodeImage failed.--\x3e${e.format}`);
            l.push({
              data: a,
              width: n,
              height: o
            })
          }
          return s(), {
            width: o,
            height: a,
            mipmaps: l
          }
        }(o.buffer), r = [];
        for (let e = 0; e < a.length; ++e) r.push(a[e].data.buffer);
        postMessage({
          type: "transcode",
          id: o.id,
          width: t,
          height: i,
          mipmaps: a
        }, r)
      } catch (e) {
        Ui(e), postMessage({
          type: "error",
          id: o.id,
          error: e.message
        })
      }
    })
  }
}
cr.COUNT = 0;
const hr = {
    cTFETC1: 0,
    cTFBC1: 1,
    cTFBC4: 2,
    cTFPVRTC1_4_OPAQUE_ONLY: 3,
    cTFBC7_M6_OPAQUE_ONLY: 4,
    cTFETC2: 5,
    cTFBC3: 6,
    cTFBC5: 7
  },
  pr = {};
let mr, _r, vr;
pr[hr.cTFBC1] = 33776, pr[hr.cTFBC3] = 33779, pr[hr.cTFETC1] = 36196, pr[hr.cTFPVRTC1_4_OPAQUE_ONLY] = 35840;
class gr {
  loadBasisTexture(e, t, n) {
    this.basisTexture = e, this.onload = n, this.initWorkder(t)
  }
  initWorkder(e) {
    vr = vr || function (e) {
      if ((vr = vr || {}).etcSupported = !!e.getExtension("WEBGL_compressed_texture_etc1"), vr.dxtSupported = !!e.getExtension("WEBGL_compressed_texture_s3tc"), vr.pvrtcSupported = !!e.getExtension("WEBGL_compressed_texture_pvrtc") || !!e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), vr.etcSupported) vr.format = hr.cTFETC1;
      else if (vr.dxtSupported) vr.format = hr.cTFBC1;
      else {
        if (!vr.pvrtcSupported) throw new Error("BasisTexture: No suitable compressed texture format found.");
        vr.format = hr.cTFPVRTC1_4_OPAQUE_ONLY
      }
      return vr
    }(e);
    const t = this,
      n = this.basisTexture._getBasisTranscoderPath();
    if (null == _r) {
      const e = `${n}basis_transcoder.wasm`,
        i = Ki(`${n}basis_transcoder.js`),
        o = Ki(e, "arraybuffer");
      Promise.all([i, o]).then(([e, t]) => {
        mr = function (e, t) {
          const n = e.toString(),
            i = ["/* basis_transcoder.js */", "var Module;", "function createBasisModule () {", ` ${t}`, "  return Module;", "}", "", "/* worker */", n.substring(n.indexOf("{") + 1, n.lastIndexOf("}"))].join("\n");
          return URL.createObjectURL(new Blob([i]))
        }(fr, e), _r = t
      }).then(() => {
        t.createWorker(mr)
      })
    } else this.createWorker(mr)
  }
  createWorker(e) {
    const t = new Worker(e),
      n = this;
    return t.postMessage({
      type: "init",
      config: vr,
      transcoderBinary: _r
    }), t.onmessage = function (e) {
      const t = e.data;
      switch (t.type) {
        case "init":
          n.loadBasis(t);
          break;
        case "transcode":
          n.onTranscode(t);
          break;
        case "error":
          Ui(t);
          break;
        default:
          Ui(`Unexpected message, "${t.type}"`)
      }
    }, this.worker = t, t
  }
  onTranscode(e) {
    this.onload(e, vr)
  }
  loadBasis(e) {
    const {
      basisTexture: t
    } = this, n = t._options.url, {
      worker: i
    } = this;
    Ki(n, "arraybuffer").then(e => {
      i.postMessage({
        type: "transcode",
        buffer: e
      })
    })
  }
}
class br extends ca {
  constructor(e) {
    super(e), this._targetFormat = ""
  }
  _getBasisTranscoderPath() {
    return br.BASIS_TRANSCODER_PATH
  }
  _init(e) {
    const t = new gr,
      n = this;
    n._gl = e, t.loadBasisTexture(this, e, (e, t) => {
      n._mipCount = e.mipmaps.length, n._imageData = e, n._basisConfig = t, n._imageLoaded = !0
    })
  }
  bind(e, t) {
    if (super.bind(e, t), this._imageLoaded) {
      this._imageLoaded = !1;
      const t = this._imageData,
        i = (n = this._basisConfig, pr[n.format]),
        {
          mipmaps: o
        } = t;
      for (let t = 0; t < o.length; t++) {
        const n = o[t];
        e.compressedTexImage2D(e.TEXTURE_2D, t, i, n.width, n.height, 0, n.data)
      }
    }
    var n
  }
}
br.BASIS_TRANSCODER_PATH = "/";
const Tr = 542327876,
  xr = 131072,
  Sr = 4,
  wr = 512,
  yr = 1024,
  Pr = 2048,
  Mr = 4096,
  Or = 8192,
  Nr = 16384,
  Er = 32768;
const Ar = 827611204,
  Cr = 861165636,
  Rr = 894720068,
  Lr = 31,
  Ir = 0,
  Dr = 1,
  zr = 2,
  Fr = 3,
  Ur = 4,
  kr = 7,
  Hr = 20,
  Jr = 21,
  Vr = 28;

function jr(e, t) {
  const n = new Int32Array(e, 0, Lr);
  let i, o;
  if (n[Ir] !== Tr) return Ui("Invalid magic number in DDS header"), 0;
  if (!n[Hr] & Sr) return Ui("Unsupported format, must contain a FourCC code"), 0;
  const a = n[Jr];
  switch (a) {
    case Ar:
      i = 8, o = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
      break;
    case Cr:
      i = 16, o = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
      break;
    case Rr:
      i = 16, o = "SRGB8_ALPHA8" === t ? "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT" : "COMPRESSED_RGBA_S3TC_DXT5_EXT";
      break;
    default:
      return Ui("Unsupported FourCC code:", (r = a, String.fromCharCode(255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255))), null
  }
  var r;
  let s = 1;
  n[zr] & xr && (s = Math.max(1, n[kr]));
  const l = n[Vr],
    u = !!(l & wr);
  if (u && (!(l & yr) || !(l & Pr) || !(l & Mr) || !(l & Or) || !(l & Nr) || !(l & Er))) return Ui("Incomplete cubemap faces"), null;
  const c = u ? 6 : 1,
    d = new Array(c);
  let f = n[Dr] + 4;
  for (let t = 0; t < c; t++) {
    let a = n[Ur],
      r = n[Fr];
    const l = new Array(s);
    d[t] = l;
    for (let t = 0; t < s; ++t) {
      const n = Math.max(4, a) * Math.max(4, r) * i / 4 / 4,
        s = new Uint8Array(e, f, n);
      l[t] = {
        level: t,
        format: o,
        width: a,
        height: r,
        data: s
      }, f += n, a > 1 && (a *= .5), r > 1 && (r *= .5)
    }
  }
  return d
}
class Br extends ca {
  _init(e) {
    const t = this;
    t._gl = e;
    const n = t._options,
      {
        url: i
      } = n,
      o = Ki(i, "arraybuffer");
    return o.then(o => {
      t._image = jr(o, n.format), e.initingTextures && delete e.initingTextures[i], t._imageLoaded = !0, e.cache && e.cache.textures.trigger.fire({
        type: "load",
        source: t
      })
    }).catch(n => {
      e.cache && e.cache.textures.trigger.fire({
        type: "error",
        error: n,
        source: t
      })
    }), e.initingTextures && (e.initingTextures[i] = o), o
  }
  bind(e, t) {
    super.bind(e, t), this._imageLoaded && (this._imageLoaded = !1, e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAX_LEVEL, this._image[0].length - 1), 1 === this._image.length ? this._image[0].forEach(t => {
      e.compressedTexImage2D(e.TEXTURE_2D, t.level, e._s3tc[t.format], t.width, t.height, 0, t.data)
    }) : this._image.forEach((t, n) => {
      t.forEach(t => {
        e.compressedTexImage2D(n + e.TEXTURE_CUBE_MAP_POSITIVE_X, t.level, e._s3tc[t.format], t.width, t.height, 0, t.data)
      })
    }), this._image = null)
  }
}
const Xr = "FORMAT=32-bit_rle_rgbe",
  Gr = "-Y ([0-9]+) \\+X ([0-9]+)";

function Wr(e) {
  const t = new Uint8Array(e);
  let n = 0;
  const i = t.length,
    o = 10;

  function a() {
    let e = "";
    do {
      const i = t[n];
      if (i === o) {
        ++n;
        break
      }
      e += String.fromCharCode(i)
    } while (++n < i);
    return e
  }
  let r = 0,
    s = 0,
    l = !1;
  for (let e = 0; e < 20; e++) {
    const e = a();
    e.match(Xr) && (l = !0);
    const t = e.match(Gr);
    if (t) {
      s = Number(t[1]), r = Number(t[2]);
      break
    }
  }
  if (!l) throw new Error("File is not run length encoded!");
  const u = new Uint8Array(r * s * 4);
  ! function (e, t, n, i, o, a) {
    const r = new Array(4);
    let s, l, u, c;
    const d = new Array(2),
      f = e.length;
    let h = n,
      p = i,
      m = a;

    function _(t) {
      let n = 0;
      do {
        t[n++] = e[p]
      } while (++p < f && n < t.length);
      return n
    }

    function v(t, n, i) {
      let o = 0;
      do {
        t[n + o++] = e[p]
      } while (++p < f && o < i);
      return o
    }

    function g(e, t, n) {
      const i = 4 * n,
        o = v(e, t, i);
      if (o < i) throw new Error(`Error reading raw pixels: got ${o} bytes, expected ${i}`)
    }
    for (; m > 0;) {
      if (_(r) < r.length) throw new Error(`Error reading bytes: expected ${r.length}`);
      if (2 !== r[0] || 2 !== r[1] || 0 != (128 & r[2])) return [t[h++], t[h++], t[h++], t[h++]] = r, void g(t, h, o * m - 1);
      if (((255 & r[2]) << 8 | 255 & r[3]) !== o) throw new Error(`Wrong scanline width ${(255&r[2])<<8|255&r[3]}, expected ${o}`);
      s || (s = new Array(4 * o)), l = 0;
      for (let e = 0; e < 4; e++)
        for (u = (e + 1) * o; l < u;) {
          if (_(d) < d.length) throw new Error("Error reading 2-byte buffer");
          if ((255 & d[0]) > 128) {
            if (0 === (c = (255 & d[0]) - 128) || c > u - l) throw new Error("Bad scanline data");
            for (; c-- > 0;)[, s[l++]] = d
          } else {
            if (0 === (c = 255 & d[0]) || c > u - l) throw new Error("Bad scanline data");
            if ([, s[l++]] = d, --c > 0) {
              if (v(s, l, c) < c) throw new Error("Error reading non-run data");
              l += c
            }
          }
        }
      for (let e = 0; e < o; e++) t[h + 0] = s[e], t[h + 1] = s[e + o], t[h + 2] = s[e + 2 * o], t[h + 3] = s[e + 3 * o], h += 4;
      m--
    }
  }(t, u, 0, n, r, s);
  const c = new Float32Array(r * s * 3);
  for (let e = 0, t = 0; e < u.length; e += 4, t += 3) {
    const n = u[e + 0] / 255,
      i = u[e + 1] / 255,
      o = u[e + 2] / 255,
      a = 2 ** (u[e + 3] - 128);
    c[t + 0] = n * a, c[t + 1] = i * a, c[t + 2] = o * a
  }
  return {
    width: r,
    height: s,
    data: c
  }
}
class Zr extends ca {
  _init(e) {
    const t = this;
    t._gl = e;
    const n = t._options,
      {
        url: i
      } = n,
      o = Ki(i, "arraybuffer");
    return o.then(n => {
      t._image = Wr(n), e.initingTextures && delete e.initingTextures[i], t._imageLoaded = !0, e.cache && e.cache.textures.trigger.fire({
        type: "load",
        source: t
      })
    }).catch(n => {
      e.cache && e.cache.textures.trigger.fire({
        type: "error",
        error: n,
        source: t
      })
    }), e.initingTextures && (e.initingTextures[i] = o), o
  }
  bind(e, t) {
    super.bind(e, t), this._imageLoaded && (this._imageLoaded = !1, e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0), e.texImage2D(e.TEXTURE_2D, 0, e.RGB16F, this._image.width, this._image.height, 0, e.RGB, e.FLOAT, this._image.data), this._image = null)
  }
}
const qr = {
  premultiplyAlpha: "none"
};
class Kr extends ca {
  _init(e) {
    const t = this;
    t._gl = e;
    const n = t._options,
      i = n.url;
    let o = null;

    function a(t, i, a, r) {
      Wi && !n.notUseImageBitmap ? Zi(t) ? i(null, t, null, a, r) : Bi(t) ? createImageBitmap(t).then(e => {
        i(t, e, "load", a, r)
      }) : Xi() ? (o = fetch(t).then(e => e.blob()).then(e => createImageBitmap(e, qr)).then(e => {
        "string" == typeof t && t.startsWith("blob:") && URL.revokeObjectURL(t), i(t, e, "load", a, r)
      }).catch(e => {
        i(t, null, "error", a, r)
      }), e.initingTextures && (e.initingTextures[t] = o)) : (o = Yi(t).then(e => createImageBitmap(e, 0, 0, e.width, e.height, qr)).then(e => {
        i(t, e, "load", a, r)
      }), e.initingTextures && (e.initingTextures[t] = o)) : ji(t) ? i(t, t, "load", a, r) : (o = Yi(t).then(e => {
        i(t, e, "load", a, r)
      }), e.initingTextures && (e.initingTextures[t] = o))
    }
    if (i) {
      let o = 1;
      const r = function (n, i, a) {
          n && e.initingTextures && delete e.initingTextures[n], "error" === a && (t._loadError = !0), 0 === --o && (t._loadError || (t._imageLoaded = !0), n && e.cache && e.cache.textures.trigger.fire({
            type: a,
            source: t
          }))
        },
        {
          mipCount: s
        } = n;
      if (t._mipCount = s, "CUBE_MAP" === n.type) s > 1 ? (o = i.length * s, t._image = [], i.forEach((e, n) => {
        const i = e.lastIndexOf("."),
          o = e.substring(0, i),
          l = e.substring(i);
        for (let e = 0; e < s; e++) a(`${o}_${e}${l}`, (e, n, i, o, a) => {
          let s = t._image[o];
          s || (s = [], t._image[o] = s), s[a] = n, r(e, n, i)
        }, n, e)
      })) : (o = i.length, t._image = [], i.forEach((e, n) => {
        a(e, (e, n, i, o, a) => {
          t._image[o] = n, r(e, n, i)
        }, n)
      }));
      else if (s > 1) {
        o = s, t._image = [];
        const e = i.lastIndexOf("."),
          n = i.substring(0, e),
          l = i.substring(e);
        for (let e = 0; e < s; e++) a(`${n}_${e}${l}`, (e, n, i, o, a) => {
          t._image[a] = n, r(e, n, i)
        }, null, e)
      } else a(i, (e, n, i) => {
        t._image = n, r(e, n, i)
      })
    }
    return o
  }
  bind(e, t) {
    super.bind(e, t);
    const n = this,
      i = n._options,
      o = e[`TEXTURE_${i.type||"2D"}`];
    let a = "RGBA";
    const r = i.format || "RGBA8";
    if ("RGB16F" === r && (a = "RGB"), "DEPTH_COMPONENT16" !== r && "DEPTH_COMPONENT24" !== r && "DEPTH_COMPONENT32F" !== r || (a = "DEPTH_COMPONENT"), "RG8" === r && (a = "RG"), n._imageLoaded) {
      n._imageLoaded = !1;
      const t = n._mipCount;
      if ("CUBE_MAP" === i.type) t ? n._image.forEach((t, n) => {
        t.forEach((o, s) => {
          e.texImage2D(n + e.TEXTURE_CUBE_MAP_POSITIVE_X, s, e[r], e[a], e[i.dataType || "UNSIGNED_BYTE"], t[s])
        })
      }) : n._image.forEach((t, n) => {
        e.texImage2D(n + e.TEXTURE_CUBE_MAP_POSITIVE_X, 0, e[r], e[a], e[i.dataType || "UNSIGNED_BYTE"], t)
      });
      else if (t)
        for (let s = 0; s < t; s++) e.texImage2D(o, s, e[r], e[a], e[i.dataType || "UNSIGNED_BYTE"], n._image[s]);
      else e.texImage2D(o, 0, e[r], e[a], e[i.dataType || "UNSIGNED_BYTE"], n._image);
      t || null != i.mipmap && !i.mipmap || e.generateMipmap(o), n._image.close && n._image.close(), n._image = null
    }
  }
  update(e) {
    const t = this._gl,
      n = this._options,
      i = t[`TEXTURE_${n.type||"2D"}`],
      o = n.format || "RGBA8";
    t.activeTexture(t.TEXTURE0 + this._unit), t.bindTexture(i, this._texture), t.texImage2D(i, 0, t[o], t.RGBA, t[n.dataType || "UNSIGNED_BYTE"], e), (null == n.mipmap || n.mipmap) && t.generateMipmap(i)
  }
}
class Yr {
  constructor() {
    this.cache = new Map
  }
  register(e, t) {
    e && t && this.cache.set(e, t)
  }
  get(e) {
    const t = this.cache;
    return t.has(e) ? t.get(e) : null
  }
}
class Qr {
  constructor(e, t) {
    this.name = e, this.value = t
  }
  toString() {
    return `${this.name}:${this.value}`
  }
}

function $r(e) {
  return "string" == typeof e ? WebGLRenderingContext[e] : e
}
const es = {
  diffuseImage: !0,
  diffuseImage1: !0,
  diffuseImage2: !0,
  diffuseImage3: !0,
  envImage: !0,
  specularGlossinessImage: !0,
  specularImage: !0,
  glossinessImage: !0,
  baseColorImage: !0,
  emissiveImage: !0
};

function ts(e, t) {
  let n = null;
  return (n = "string" == typeof e || ji(e) || Zi(e) ? {
    url: e
  } : e) instanceof ca || es[t] && (n.format = "SRGB8_ALPHA8"), n
}
let ns = !1;
let is = 1;
class os extends $o {
  constructor(e) {
    var t;
    t = os.prototype, ns || (ns = !0, no(t, [{
      name: "emissiveColor"
    }, {
      name: "emissiveImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "emissiveImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "doubleSided",
      value: !1
    }, {
      name: "depthWrite",
      value: !0
    }, {
      name: "stencilTest",
      value: !1
    }, {
      name: "stencilOp",
      value: "KEEP"
    }, {
      name: "stencilRef",
      value: 1
    }, {
      name: "stencilFunc",
      value: "ALWAYS"
    }, {
      name: "transparency",
      value: 1
    }, {
      name: "transparent",
      value: !1,
      dirty: "_dirty"
    }, {
      name: "gammaInput",
      value: !1,
      dirty: "_dirty"
    }, {
      name: "alphaTest",
      value: !1,
      dirty: "_dirty"
    }, {
      name: "alphaCutoff",
      value: .5
    }, {
      name: "flipY",
      value: !0,
      dirty: "_dirty"
    }, {
      name: "blendMode",
      value: "normal",
      callback(e, t) {
        this._resetBlendMode()
      }
    }, {
      name: "premultipliedAlpha",
      value: !1,
      callback(e, t) {
        this._resetBlendMode()
      }
    }, {
      name: "blendEquationColor",
      value: WebGLRenderingContext.FUNC_ADD,
      converter: $r
    }, {
      name: "blendEquationAlpha",
      value: WebGLRenderingContext.FUNC_ADD,
      converter: $r
    }, {
      name: "blendFuncSrcColor",
      value: WebGLRenderingContext.SRC_ALPHA,
      converter: $r
    }, {
      name: "blendFuncSrcAlpha",
      value: WebGLRenderingContext.ONE,
      converter: $r
    }, {
      name: "blendFuncDstColor",
      value: WebGLRenderingContext.ONE_MINUS_SRC_ALPHA,
      converter: $r
    }, {
      name: "blendFuncDstAlpha",
      value: WebGLRenderingContext.ONE_MINUS_SRC_ALPHA,
      converter: $r
    }, {
      name: "light",
      value: !0,
      dirty: "_dirty"
    }, {
      name: "clipPlane",
      value: null,
      dirty: "_dirty"
    }, {
      name: "normalImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "normalImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "bumpImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "bumpImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "bumpScale",
      value: 1
    }, {
      name: "castShadow",
      value: !0
    }, {
      name: "receiveShadow",
      value: !0,
      dirty: "_dirty"
    }, {
      name: "pointSize",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "textureScale",
      dirty: "_dirtyTextureMatrix"
    }, {
      name: "tsx",
      get() {
        return this.textureScale[0]
      },
      set(e) {
        this.textureScale[0] = e, this.textureScale = this.textureScale
      }
    }, {
      name: "tsy",
      get() {
        return this.textureScale[1]
      },
      set(e) {
        this.textureScale[1] = e, this.textureScale = this.textureScale
      }
    }, {
      name: "textureOffset",
      dirty: "_dirtyTextureMatrix"
    }, {
      name: "tx",
      get() {
        return this.textureOffset[0]
      },
      set(e) {
        this.textureOffset[0] = e, this.textureOffset = this.textureOffset
      }
    }, {
      name: "ty",
      get() {
        return this.textureOffset[1]
      },
      set(e) {
        this.textureOffset[1] = e, this.textureOffset = this.textureOffset
      }
    }, {
      name: "textureRotation",
      value: 0,
      dirty: "_dirtyTextureMatrix"
    }, {
      name: "textureMatrix",
      noSet: !0,
      get() {
        const e = this,
          t = e._textureMatrix;
        return e._dirtyTextureMatrix && (e._dirtyTextureMatrix = !1, T.fromTranslation(t, e._textureOffset), T.rotate(t, t, -e._textureRotation), T.scale(t, t, e._textureScale)), t
      }
    }])), super();
    const n = this;
    n.id = is++, n._dirty = !0, n._key = "", n._keys = [], n._shadowMapKey = "", n._shadowMapkeys = [], n._textureScale = Lt.fromValues(1, 1), n._textureOffset = Lt.fromValues(0, 0), n._textureMatrix = T.create(), n._dirtyTextureMatrix = !1, n._emissiveColor = Y.fromValues(1, 1, 1), e && (n.options = e)
  }
  _pushMapAndUVDefine(e, t) {
    const n = this._keys;
    n.push(e);
    const i = `${e}_UV`;
    n.push(new Qr(i, t)), 0 !== t && -1 === n.indexOf("USE_UV1") && n.push("USE_UV1")
  }
  set options(e) {
    Object.keys(e).forEach(t => {
      this[t] = e[t]
    })
  }
  getKey(e, t, n) {
    const i = this;
    if (i._dirty) {
      const o = [];
      i._keys = o;
      const a = [];
      if (i._shadowMapKeys = a, i._pointSize > 0 && o.push("POINT"), i._clipPlane && o.push("CLIPPLANE"), i._flipY && o.push("FLIP_Y"), i._transparent && o.push("BLEND"), i._alphaTest && o.push("ALPHA_TEST"), i._gammaInput && o.push("GAMMA_INPUT"), n._info && n._info.weights && n._info.weights.length && (a.push("MORPH_TARGETS"), a.push(new Qr("MORPH_TARGETS_COUNT", n._info.weights.length))), n.skin && n.skin.joints.length > 0 && (a.push("SKIN"), a.push(new Qr("SKIN_JOINTS_COUNT", n.skin.joints.length))), t._color && o.push("VERTEX_COLOR"), t._instance && a.push("INSTANCE"), i._light && e.lights.count) {
        o.push("LIGHT");
        const t = e._renderer._lightDefines;
        Object.keys(t).forEach(e => {
          o.push(t[e])
        }), i._normalImage ? i._pushMapAndUVDefine("NORMAL_MAP", i._normalImageUV) : i._bumpImage && i._pushMapAndUVDefine("BUMP_MAP", i._bumpImageUV)
      }
      i._emissiveImage && i._pushMapAndUVDefine("EMISSIVE_MAP", i._emissiveImageUV), i._receiveShadow && e._renderer._shadowLightCount > 0 && (e._renderer._shadowLightMap.DIRECTION > 0 && o.push("DIRECTION_SHADOW"), e._renderer._shadowLightMap.POINT > 0 && o.push(new Qr("POINT_SHADOW", e._renderer._shadowLightMap.POINT)), e._renderer._shadowLightMap.SPOT > 0 && o.push(new Qr("SPOT_SHADOW", e._renderer._shadowLightMap.SPOT))), e._enableFog && o.push("FOG"), a.forEach(e => {
        o.push(e)
      }), i._shadowMapKey = a.join(",")
    }
    return i._key
  }
  _bindUniforms(e, t, n) {
    const i = this;
    if (t._material = i, e.u_textureMatrix = i.textureMatrix, e.u_clipPlane = i.clipPlane, e.u_emissiveColor = i.emissiveColor, e.u_pointSize = i.pointSize, e.u_bumpScale = i.bumpScale, i._alphaTest && (e.u_alphaCutoff = i.alphaCutoff), i._normalImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i._normalImage).bind(t, n), e.u_normalSampler = n
    } else if (i._bumpImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i._bumpImage).bind(t, n), e.u_bumpSampler = n
    }
    if (i._emissiveImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i._emissiveImage, !0).bind(t, n), e.u_emissiveSampler = n
    }
  }
  _resetBlendMode() {
    const e = this._blendMode,
      t = this._premultipliedAlpha;
    let n, i, o, a, r, s;
    "normal" === e ? t ? (n = "FUNC_ADD", i = "FUNC_ADD", o = "ONE", r = "ONE_MINUS_SRC_ALPHA", a = "ONE", s = "ONE_MINUS_SRC_ALPHA") : (n = "FUNC_ADD", i = "FUNC_ADD", o = "SRC_ALPHA", r = "ONE_MINUS_SRC_ALPHA", a = "ONE", s = "ONE_MINUS_SRC_ALPHA") : "additive" === e ? t ? (n = "FUNC_ADD", i = "FUNC_ADD", o = "ONE", r = "ONE", a = "ONE", s = "ONE") : (n = "FUNC_ADD", i = "FUNC_ADD", o = "SRC_ALPHA", r = "ONE", a = "ONE", s = "ONE") : "multiply" === e && (n = "FUNC_ADD", i = "FUNC_ADD", o = "ZERO", r = "SRC_COLOR", a = "ZERO", s = "SRC_ALPHA"), this._blendEquationColor = WebGLRenderingContext[n], this._blendEquationAlpha = WebGLRenderingContext[i], this._blendFuncSrcColor = WebGLRenderingContext[o], this._blendFuncSrcAlpha = WebGLRenderingContext[a], this._blendFuncDstColor = WebGLRenderingContext[r], this._blendFuncDstAlpha = WebGLRenderingContext[s]
  }
}
class as extends os {
  draw(e, t, n) {}
}
let rs = !1;
class ss extends os {
  constructor(e) {
    var t;
    t = ss.prototype, rs || (rs = !0, no(t, [{
      name: "TYPE",
      get: () => "PBR"
    }, {
      name: "VERTEX_SHADER",
      get: () => _a
    }, {
      name: "FRAGMENT_SHADER",
      get: () => va
    }, {
      name: "type",
      value: "metalness",
      dirty: "_dirty"
    }, {
      name: "baseColorFactor"
    }, {
      name: "baseColorImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "baseColorImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "metallicFactor",
      value: 1
    }, {
      name: "roughnessFactor",
      value: 1
    }, {
      name: "metallicRoughnessImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "metallicRoughnessImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "metallicImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "metallicImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "roughnessImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "roughnessImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "diffuseFactor"
    }, {
      name: "diffuseImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "diffuseImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "specularFactor"
    }, {
      name: "glossinessFactor",
      value: 1
    }, {
      name: "specularGlossinessImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "specularGlossinessImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "specularImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "specularImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "glossinessImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "glossinessImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "occlusionImageUV",
      value: 0,
      dirty: "_dirty"
    }, {
      name: "occlusionImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "enableIBL",
      value: !0,
      dirty: "_dirty"
    }, {
      name: "enableAOChannel",
      value: !1,
      dirty: "_dirty"
    }])), super(e);
    const n = this;
    n.__baseColorFactor = Pe.create(), n.__diffuseFactor = Pe.create(), n.normalScale = 1, n.occlusionStrength = 1, n._baseColorFactor || (n._baseColorFactor = Pe.fromValues(1, 1, 1, 1)), n._diffuseFactor || (n._diffuseFactor = Pe.fromValues(1, 1, 1, 1)), n._specularFactor || (n._specularFactor = Y.fromValues(1, 1, 1))
  }
  getKey(e, t, n) {
    const i = this;
    if (i._dirty) {
      super.getKey(e, t, n), i._dirty = !1;
      const o = i._keys;
      "metalness" === i._type ? (o.push("PBR_TYPE_METALNESS"), i._metallicRoughnessImage ? (i._pushMapAndUVDefine("METALLIC_ROUGHNESS_MAP", i._metallicRoughnessImageUV), i._enableAOChannel && o.push("AO_FROM_R_CHANNEL")) : (i._metallicImage && i._pushMapAndUVDefine("METALLIC_MAP", i._metallicImageUV), i._roughnessImage && i._pushMapAndUVDefine("ROUGHNESS_MAP", i._roughnessImageUV)), i._baseColorImage && i._pushMapAndUVDefine("BASE_COLOR_MAP", i._baseColorImageUV)) : (o.push("PBR_TYPE_SPECULAR"), i._specularGlossinessImage ? i._pushMapAndUVDefine("SPECULAR_GLOSSINESS_MAP", i._specularGlossinessImageUV) : (i._specularImage && i._pushMapAndUVDefine("SPECULAR_MAP", i._specularImageUV), i._glossinessImage && i._pushMapAndUVDefine("GLOSSINESS_MAP", i._glossinessImageUV)), i._diffuseImage && i._pushMapAndUVDefine("DIFFUSE_MAP", i._diffuseImageUV)), i._light && e.lights.count && i._enableIBL && e.brdfLUTImage && e.diffuseEnvImage && e.specularEnvImage && o.push("IBL"), i._occlusionImage && i._pushMapAndUVDefine("OCCLUSION_MAP", i._occlusionImageUV), i._key = `${i.TYPE},${o.join(",")}`
    }
    return i._key
  }
  _bindUniforms(e, t, n) {
    const i = this;
    if (super._bindUniforms(e, t, n), e.u_metallicFactor = i.metallicFactor, e.u_roughnessFactor = i.roughnessFactor, e.u_occlusionStrength = i.occlusionStrength, e.u_normalScale = i.normalScale, e.u_specularFactor = i.specularFactor, e.u_glossinessFactor = i.glossinessFactor, i.occlusionImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i.occlusionImage).bind(t, n), e.u_occlusionSampler = n
    }
    if (n.diffuseEnvImage) {
      const i = e._nextSamplerId++;
      t.cache.textures.get(n.diffuseEnvImage, !0).bind(t, i), e.u_diffuseEnvSampler = i
    }
    if (n.specularEnvImage) {
      const i = e._nextSamplerId++;
      t.cache.textures.get(n.specularEnvImage, !0).bind(t, i), e.u_specularEnvSampler = i
    }
    if (n.brdfLUTImage) {
      const i = e._nextSamplerId++;
      t.cache.textures.get(n.brdfLUTImage, !0).bind(t, i), e.u_brdfLUTSampler = i
    }
    if ("metalness" === i._type) {
      if (Pe.copy(i.__baseColorFactor, i.baseColorFactor), i.__baseColorFactor[0] **= 2.2, i.__baseColorFactor[1] **= 2.2, i.__baseColorFactor[2] **= 2.2, i.__baseColorFactor[3] *= i.transparency, e.u_baseColorFactor = i.__baseColorFactor, i.metallicRoughnessImage) {
        const n = e._nextSamplerId++;
        t.cache.textures.get(i.metallicRoughnessImage).bind(t, n), e.u_metallicRoughnessSampler = n
      } else {
        if (i.metallicImage) {
          const n = e._nextSamplerId++;
          t.cache.textures.get(i.metallicImage).bind(t, n), e.u_metallicSampler = n
        }
        if (i.roughnessImage) {
          const n = e._nextSamplerId++;
          t.cache.textures.get(i.roughnessImage).bind(t, n), e.u_roughnessSampler = n
        }
      }
      if (i.baseColorImage) {
        const n = e._nextSamplerId++;
        t.cache.textures.get(i.baseColorImage, !0).bind(t, n), e.u_baseColorSampler = n
      }
    } else {
      if (Pe.copy(i.__diffuseFactor, i.diffuseFactor), i.__diffuseFactor[3] *= i.transparency, e.u_diffuseFactor = i.__diffuseFactor, i.specularGlossinessImage) {
        const n = e._nextSamplerId++;
        t.cache.textures.get(i.specularGlossinessImage, !0).bind(t, n), e.u_specularGlossinessSampler = n
      } else {
        if (i.specularImage) {
          const n = e._nextSamplerId++;
          t.cache.textures.get(i.specularImage, !0).bind(t, n), e.u_specularSampler = n
        }
        if (i.specularImage && i.glossinessImage) {
          const n = e._nextSamplerId++;
          t.cache.textures.get(i.glossinessImage, !0).bind(t, n), e.u_glossinessSampler = n
        }
      }
      if (i.diffuseImage) {
        const n = e._nextSamplerId++;
        t.cache.textures.get(i.diffuseImage, !0).bind(t, n), e.u_diffuseSampler = n
      }
    }
  }
}
class ls extends os {
  constructor(e) {
    super(e);
    const t = this;
    t._program = new cr({
      vertex: e.vertex,
      fragment: e.fragment
    });
    const n = e.uniforms || [];
    t.uniforms = [];
    const i = e.textures || [];
    t.textures = [], t._uniformValues = {};
    const o = [];
    Array.isArray(i) ? i.forEach(e => {
      t.textures.push(e), o.push({
        name: e,
        converter: ts
      })
    }) : Object.keys(i).forEach((e, n) => {
      t.textures.push(e), o.push({
        name: e,
        value: ts(i[e]),
        converter: ts
      }), t._uniformValues[`u_${e}`] = n
    }), Array.isArray(n) ? n.forEach(e => {
      t.uniforms.push(e), o.push({
        name: e
      })
    }) : Object.keys(n).forEach(e => {
      t.uniforms.push(e), o.push({
        name: e,
        value: n[e]
      })
    }), no(this, o), delete e.vertex, delete e.fragment, delete e.uniforms, delete e.textures, t.options = e
  }
  draw(e, t, n) {
    const i = this,
      o = t._renderer._gl,
      a = t._renderer._camera,
      r = i._program,
      s = i._uniformValues;
    r.use(o), i !== o._material && (r.bindUniforms(t._renderer._uniforms), s.u_projectViewMatrix = a.projectViewMatrix, s.u_projectMatrix = a.projectMatrix, s.u_viewMatrix = a.viewMatrix, s.u_pointSize = i.pointSize, s.u_textureMatrix = i.textureMatrix, i.uniforms.forEach(e => {
      s[`u_${e}`] = i[e]
    }), r.bindUniforms(s), o._material = i, i.textures.forEach((e, t) => {
      o.cache.textures.get(i[e]).bind(o, t)
    })), r.bindUniform("u_modelMatrix", e.worldMatrix), r.bindUniform("u_normalMatrix", e._normalMatrix), n.draw(o)
  }
}
let us = !1;
class cs extends os {
  constructor(e) {
    var t;
    t = cs.prototype, us || (us = !0, no(t, [{
      name: "TYPE",
      get: () => "STD"
    }, {
      name: "VERTEX_SHADER",
      get: () => pa
    }, {
      name: "FRAGMENT_SHADER",
      get: () => ma
    }, {
      name: "ambientColor"
    }, {
      name: "ambientImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "diffuseColor"
    }, {
      name: "diffuseImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "specularColor"
    }, {
      name: "specularImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "shininess",
      value: 64
    }, {
      name: "envImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "refractive",
      value: !1,
      dirty: "_dirty"
    }])), super(e);
    const n = this;
    n.__diffuseColor = Pe.create(), n._ambientColor || (n._ambientColor = Y.fromValues(1, 1, 1)), n._diffuseColor || (n._diffuseColor = Pe.fromValues(1, 1, 1, 1)), n._specularColor || (n._specularColor = Y.fromValues(1, 1, 1))
  }
  getKey(e, t, n) {
    const i = this;
    if (i._dirty) {
      super.getKey(e, t, n), i._dirty = !1;
      const o = i._keys;
      i._diffuseImage && ("CUBE_MAP" === i._diffuseImage.type ? o.push("DIFFUSE_CUBE_MAP") : o.push("DIFFUSE_MAP")), i._envImage && (o.push("ENV_MAP"), i._refractive && o.push("REFRACTIVE")), i._light && e.lights.count && (i._ambientImage && o.push("AMBIENT_MAP"), i._specularImage && o.push("SPECULAR_MAP")), i._key = `${i.TYPE},${o.join(",")}`
    }
    return i._key
  }
  _bindUniforms(e, t, n) {
    const i = this;
    if (super._bindUniforms(e, t, n), Pe.copy(i.__diffuseColor, i._diffuseColor), i.__diffuseColor[3] *= i.transparency, e.u_ambientColor = i._ambientColor, i.__diffuseColor[0] **= 2.2, i.__diffuseColor[1] **= 2.2, i.__diffuseColor[2] **= 2.2, e.u_diffuseColor = i.__diffuseColor, e.u_specularColor = i.specularColor, e.u_shininess = i.shininess, i._diffuseImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i._diffuseImage, !0).bind(t, n), e.u_diffuseSampler = n
    }
    if (i._ambientImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i._ambientImage).bind(t, n), e.u_ambientSampler = n
    }
    if (i._specularImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i._specularImage, !0).bind(t, n), e.u_specularSampler = n
    }
    if (i._envImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i._envImage, !0).bind(t, n), e.u_envSampler = n
    }
  }
}
let ds = null;

function fs() {
  return ds || (ds = new cs), ds
}
let hs = !1;
class ps extends os {
  constructor(e) {
    var t;
    t = ps.prototype, hs || (hs = !0, no(t, [{
      name: "TYPE",
      get: () => "BILLBOARD"
    }, {
      name: "VERTEX_SHADER",
      get: () => Na
    }, {
      name: "FRAGMENT_SHADER",
      get: () => Ea
    }, {
      name: "diffuseColor"
    }, {
      name: "diffuseImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "vertical",
      value: !1
    }, {
      name: "fixedSize",
      value: !1
    }])), super(e);
    const n = this;
    n.__diffuseColor = Pe.create(), n._diffuseColor || (n._diffuseColor = Pe.fromValues(1, 1, 1, 1))
  }
  getKey(e, t, n) {
    const i = this;
    if (i._dirty) {
      super.getKey(e, t, n), i._dirty = !1;
      const o = i._keys;
      i._shadowMapKeys.push("BILLBOARD"), i._diffuseImage && o.push("DIFFUSE_MAP"), i._key = `${i.TYPE},${o.join(",")}`, i._shadowMapKey = i._shadowMapKeys.join(",")
    }
    return i._key
  }
  _bindUniforms(e, t, n) {
    const i = this;
    if (super._bindUniforms(e, t, n), Pe.copy(i.__diffuseColor, i.diffuseColor), i.__diffuseColor[3] *= i.transparency, e.u_diffuseColor = i.__diffuseColor, e.u_vertical = i.vertical, e.u_fixedSize = i.fixedSize, i._diffuseImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i._diffuseImage, !0).bind(t, n), e.u_sampler = n
    }
  }
}
let ms = null;
let _s = !1;
class vs extends os {
  constructor(e) {
    var t;
    t = vs.prototype, _s || (_s = !0, no(t, [{
      name: "TYPE",
      get: () => "Terrain"
    }, {
      name: "VERTEX_SHADER",
      get: () => ya
    }, {
      name: "FRAGMENT_SHADER",
      get: () => Pa
    }, {
      name: "diffuseColor"
    }, {
      name: "mixImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "diffuseImage1",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "diffuseImage2",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "diffuseImage3",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "normalImage1",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "normalImage2",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "normalImage3",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "textureScale1"
    }, {
      name: "textureScale2"
    }, {
      name: "textureScale3"
    }, {
      name: "specularColor"
    }, {
      name: "shininess",
      value: 64
    }])), super(e);
    const n = this;
    n.__diffuseColor = Pe.create(), n._textureScale1 || (n._textureScale1 = Lt.fromValues(1, 1)), n._textureScale2 || (n._textureScale2 = Lt.fromValues(1, 1)), n._textureScale3 || (n._textureScale3 = Lt.fromValues(1, 1)), n._diffuseColor || (n._diffuseColor = Pe.fromValues(1, 1, 1, 1)), n._specularColor || (n._specularColor = Y.fromValues(1, 1, 1))
  }
  getKey(e, t, n) {
    const i = this;
    if (i._dirty) {
      super.getKey(e, t, n), i._dirty = !1;
      const o = i._keys;
      i._mixImage && o.push("MIX_MAP"), i._diffuseImage1 && o.push("DIFFUSE_MAP1"), i._diffuseImage2 && o.push("DIFFUSE_MAP2"), i._diffuseImage3 && o.push("DIFFUSE_MAP3"), i._light && e.lights.count && (i._normalImage1 && o.push("NORMAL_MAP1"), i._normalImage2 && o.push("NORMAL_MAP2"), i._normalImage3 && o.push("NORMAL_MAP3"), (i._normalImage1 || i._normalImage2 || i._normalImage3) && o.push("NORMAL_MAP")), i._key = `${i.TYPE},${o.join(",")}`
    }
    return i._key
  }
  _bindUniforms(e, t, n) {
    const i = this;
    if (super._bindUniforms(e, t, n), Pe.copy(i.__diffuseColor, i.diffuseColor), i.__diffuseColor[3] *= i.transparency, e.u_textureScale = i.textureScale, e.u_textureScale1 = i.textureScale1, e.u_textureScale2 = i.textureScale2, e.u_textureScale3 = i.textureScale3, e.u_diffuseColor = i.__diffuseColor, e.u_specularColor = i.specularColor, e.u_shininess = i.shininess, i.mixImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i.mixImage).bind(t, n), e.u_mixSampler = n
    }
    if (i.diffuseImage1) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i.diffuseImage1, !0).bind(t, n), e.u_diffuseSampler1 = n
    }
    if (i.diffuseImage2) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i.diffuseImage2, !0).bind(t, n), e.u_diffuseSampler2 = n
    }
    if (i.diffuseImage3) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i.diffuseImage3, !0).bind(t, n), e.u_diffuseSampler3 = n
    }
    if (i.normalImage1) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i.normalImage1).bind(t, n), e.u_normalSampler1 = n
    }
    if (i.normalImage2) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i.normalImage2).bind(t, n), e.u_normalSampler2 = n
    }
    if (i.normalImage3) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i.normalImage3).bind(t, n), e.u_normalSampler3 = n
    }
  }
}
let gs = !1;
class bs extends os {
  constructor(e) {
    var t;
    t = bs.prototype, gs || (gs = !0, no(t, [{
      name: "TYPE",
      get: () => "WATER"
    }, {
      name: "VERTEX_SHADER",
      get: () => rr
    }, {
      name: "FRAGMENT_SHADER",
      get: () => sr
    }, {
      name: "diffuseImage",
      value: null,
      dirty: "_dirty",
      converter: ts
    }, {
      name: "waterCenter"
    }])), super(e);
    const n = this;
    n._waterCenter || (n._waterCenter = Y.fromValues(0, 0, 0))
  }
  getKey(e, t, n) {
    const i = this;
    if (i._dirty) {
      super.getKey(e, t, n), i._dirty = !1;
      const o = i._keys;
      i._key = `${i.TYPE},${o.join(",")}`
    }
    return i._key
  }
  _bindUniforms(e, t, n) {
    const i = this;
    if (super._bindUniforms(e, t, n), e.u_enable = new Int32Array([0, 0, 0, 0, 1, 1, 1, 1]), e.u_amplitude = new Float32Array([.5, .4, .2, .1, .01, .01, .01, .01]), e.u_wavelength = new Float32Array([20, 15, 12, 10, 3, 3, 1.2, .8]), e.u_direction = new Float32Array([45, 120, 170, 65, 170, 110, 80, 60]), e.u_transparency = i.transparency, e.u_waterCenter = i.waterCenter, e.u_specularColor = i.specularColor, i._diffuseImage) {
      const n = e._nextSamplerId++;
      t.cache.textures.get(i._diffuseImage, !0).bind(t, n), e.u_diffuseSampler = n
    }
  }
}
let Ts = !1;
class xs extends os {
  constructor(e = {}) {
    var t;
    t = xs.prototype, Ts || (Ts = !0, no(t, [{
      name: "TYPE",
      get: () => "Wireframe"
    }, {
      name: "VERTEX_SHADER",
      get: () => or
    }, {
      name: "FRAGMENT_SHADER",
      get: () => ar
    }, {
      name: "wireframeColor"
    }])), super(e), this.__wireframeColor = Pe.create(), this._wireframeColor || (this._wireframeColor = Pe.fromValues(69 / 255, 132 / 255, 206 / 255, 1))
  }
  getKey(e, t, n) {
    const i = this;
    if (i._dirty) {
      super.getKey(e, t, n), i._dirty = !1;
      const o = i._keys;
      i._key = `${i.TYPE},${o.join(",")}`
    }
    return i._key
  }
  _bindUniforms(e, t, n) {
    super._bindUniforms(e, t, n), Pe.copy(this.__wireframeColor, this.wireframeColor), this.__wireframeColor[3] *= this.transparency, e.u_wireframeColor = this.__wireframeColor
  }
}
const Ss = .0174532925,
  ws = [],
  ys = [],
  Ps = [],
  Ms = [],
  Os = [];
let Ns = 0;
const Es = new Uint16Array(3),
  As = new Uint16Array(3),
  Cs = new Uint16Array(3),
  Rs = Y.create(),
  Ls = Y.create(),
  Is = Y.create(),
  Ds = Y.create(),
  zs = Y.create(),
  Fs = Y.create(),
  Us = Y.create();

function ks(e, t, n) {
  n[0] = e[0] * t[0] + t[12], n[1] = e[1] * t[5] + t[13], n[2] = e[2] * t[10] + t[14]
}

function Hs(e, t, n = null, i = 1) {
  ! function (e, t) {
    const n = {};
    let i, o, a, r, s, l, u = 0;
    for (s = 0, l = e.length; s < l; s += 3) i = e[s], o = e[s + 1], a = e[s + 2], void 0 === n[r = `${Math.round(1e4*i)}_${Math.round(1e4*o)}_${Math.round(1e4*a)}`] && (n[r] = u / 3, ws[u++] = i, ws[u++] = o, ws[u++] = a), ys[s / 3] = n[r];
    for (s = 0, l = t.length; s < l; s++) Ms[s] = ys[t[s]], Ps[Ms[s]] = t[s]
  }(e, t),
  function (e, t) {
    Ns = 0;
    for (let n = 0, i = e; n < i; n += 3) {
      const e = 3 * Ms[n],
        i = 3 * Ms[n + 1],
        o = 3 * Ms[n + 2];
      t ? (Es[0] = ws[e], Es[1] = ws[e + 1], Es[2] = ws[e + 2], As[0] = ws[i], As[1] = ws[i + 1], As[2] = ws[i + 2], Cs[0] = ws[o], Cs[1] = ws[o + 1], Cs[2] = ws[o + 2], ks(Es, t, Rs), ks(As, t, Ls), ks(Cs, t, Is)) : (Rs[0] = ws[e], Rs[1] = ws[e + 1], Rs[2] = ws[e + 2], Ls[0] = ws[i], Ls[1] = ws[i + 1], Ls[2] = ws[i + 2], Is[0] = ws[o], Is[1] = ws[o + 1], Is[2] = ws[o + 2]), Y.sub(Ds, Is, Ls), Y.sub(zs, Rs, Ls), Y.cross(Fs, Ds, zs), Y.normalize(Us, Fs);
      const a = Os[Ns] || (Os[Ns] = {
        normal: Y.create()
      });
      Y.copy(a.normal, Us), Ns++
    }
  }(t.length, n);
  const o = [],
    a = Math.cos(Ss * i),
    r = {};
  let s, l, u, c, d, f, h, p, m, _, v, g = !1;
  for (let e = 0, n = t.length; e < n; e += 3) {
    const t = e / 3;
    for (let n = 0; n < 3; n++) s = Ms[e + n], l = Ms[e + (n + 1) % 3], u = Math.min(s, l), c = Math.max(s, l), void 0 === r[d = `${u},${c}`] ? r[d] = {
      index1: u,
      index2: c,
      face1: t,
      face2: void 0
    } : r[d].face2 = t
  }
  return Object.keys(r).forEach(e => {
    void 0 !== (f = r[e]).face2 && (h = Os[f.face1].normal, p = Os[f.face2].normal, (m = Y.dot(h, p)) > a) || (_ = Ps[f.index1], v = Ps[f.index2], (!g && _ > 65535 || v > 65535) && (g = !0), o.push(_), o.push(v))
  }), g ? new Uint32Array(o) : new Uint16Array(o)
}
let Js, Vs, js, Bs = 1,
  Xs = !1;
class Gs extends $o {
  constructor(e) {
    var t;
    t = Gs.prototype, Xs || (Xs = !0, Js = A.create(), Vs = Y.create(), js = Pe.create(), no(t, [{
      name: "position",
      value: null,
      dirty: "_dirtyMatrix",
      get() {
        const e = this;
        return e._dirtyPositionScaleRotation && e._refreshPositionScaleRotation(), e._position
      },
      callback() {
        this._makeWorldMatrixDirty()
      }
    }, {
      name: "name",
      get() {
        return this._name
      },
      set(e) {
        this._name = e
      }
    }, {
      name: "x",
      get() {
        return this.position[0]
      },
      set(e) {
        this.position[0] = e, this.position = this.position
      }
    }, {
      name: "y",
      get() {
        return this.position[1]
      },
      set(e) {
        this.position[1] = e, this.position = this.position
      }
    }, {
      name: "z",
      get() {
        return this.position[2]
      },
      set(e) {
        this.position[2] = e, this.position = this.position
      }
    }, {
      name: "scale",
      value: null,
      dirty: "_dirtyMatrix",
      get() {
        const e = this;
        return e._dirtyPositionScaleRotation && e._refreshPositionScaleRotation(), e._scale
      },
      callback() {
        this._makeWorldMatrixDirty()
      }
    }, {
      name: "sx",
      get() {
        return this.scale[0]
      },
      set(e) {
        this.scale[0] = e, this.scale = this.scale
      }
    }, {
      name: "sy",
      get() {
        return this.scale[1]
      },
      set(e) {
        this.scale[1] = e, this.scale = this.scale
      }
    }, {
      name: "sz",
      get() {
        return this.scale[2]
      },
      set(e) {
        this.scale[2] = e, this.scale = this.scale
      }
    }, {
      name: "rotation",
      value: null,
      dirty: "_dirtyMatrix",
      get() {
        const e = this;
        return e._dirtyPositionScaleRotation && e._refreshPositionScaleRotation(), e._rotation
      },
      callback(e, t) {
        const n = this._quaternion,
          i = .5 * t[0],
          o = .5 * t[1],
          a = .5 * t[2],
          r = Math.sin(i),
          s = Math.cos(i),
          l = Math.sin(o),
          u = Math.cos(o),
          c = Math.sin(a),
          d = Math.cos(a);
        n[0] = r * u * d - s * l * c, n[1] = s * l * d + r * u * c, n[2] = s * u * c - r * l * d, n[3] = s * u * d + r * l * c, this._makeWorldMatrixDirty()
      }
    }, {
      name: "rx",
      get() {
        return this.rotation[0]
      },
      set(e) {
        this.rotation[0] = e, this.rotation = this.rotation
      }
    }, {
      name: "ry",
      get() {
        return this.rotation[1]
      },
      set(e) {
        this.rotation[1] = e, this.rotation = this.rotation
      }
    }, {
      name: "rz",
      get() {
        return this.rotation[2]
      },
      set(e) {
        this.rotation[2] = e, this.rotation = this.rotation
      }
    }, {
      name: "quaternion",
      value: null,
      dirty: "_dirtyMatrix",
      get() {
        const e = this;
        return e._dirtyPositionScaleRotation && e._refreshPositionScaleRotation(), e._quaternion
      },
      callback(e, t) {
        this._refreshRotation(), this._makeWorldMatrixDirty()
      }
    }, {
      name: "material",
      value: null,
      converter: e => {
        if (e instanceof os) return e;
        const {
          TYPE: t
        } = e;
        switch (delete e.TYPE, t) {
          case "DRAW":
            return new as(e);
          case "PBR":
            return new ss(e);
          case "SHADER":
            return new ls(e);
          case "TERRAIN":
            return new vs(e);
          case "WIREFRAME":
            return new xs(e);
          case "WATER":
            return new bs(e);
          case "BILLBOARD":
            return new ps(e);
          default:
            return new cs(e)
        }
      },
      callback(e, t) {
        const n = this;
        e && e.off("all", n._handleMaterialChange, n), t && t.on("all", n._handleMaterialChange, n)
      }
    }, {
      name: "mesh",
      value: null,
      dirty: "_dirtyBoundingBox",
      callback(e, t) {
        const n = this;
        if (e && e.primitives.forEach(e => {
            e.material.off("all", n._handleMaterialChange, n)
          }), t)
          if (t.primitives.forEach(e => {
              e.material.on("all", n._handleMaterialChange, n)
            }), 1 === t.primitives.length) t.boundingBox = t.primitives[0].vao.boundingBox;
          else {
            const e = new bo;
            t.boundingBox = e, t.primitives.forEach(t => {
              const {
                boundingBox: n
              } = t.vao;
              e.min[0] = Math.min(e.min[0], n.min[0]), e.min[1] = Math.min(e.min[1], n.min[1]), e.min[2] = Math.min(e.min[2], n.min[2]), e.max[0] = Math.max(e.max[0], n.max[0]), e.max[1] = Math.max(e.max[1], n.max[1]), e.max[2] = Math.max(e.max[2], n.max[2])
            }), e.reset()
          }
      },
      get() {
        if (this._instancesDirty && this._mesh) {
          const e = new Float32Array(16 * this._instances.length);
          this._instances.forEach((t, n) => {
            e.set(t.worldMatrix, 16 * n)
          }), this._mesh.primitives.forEach(t => {
            t.vao.setBufferData("instance", e)
          }), this._instancesDirty = !1
        }
        return this._mesh
      }
    }, {
      name: "children",
      value: null,
      noSet: !0
    }, {
      name: "modelMatrix",
      value: null,
      get() {
        const e = this;
        return e._dirtyMatrix && (e._dirtyMatrix = !1, e._refreshModelMatrix()), e._modelMatrix
      },
      callback(e, t) {
        this._makeWorldMatrixDirty(), this._dirtyPositionScaleRotation = !0
      }
    }, {
      name: "worldMatrix",
      value: null,
      get() {
        const e = this;
        if (e.parent) {
          let t = e._worldMatrix;
          return e._dirtyWorldMatrix && (e._dirtyWorldMatrix = !1, t || (t = A.create(), e._worldMatrix = t), A.multiply(t, e.parent.worldMatrix, e.modelMatrix), T.normalFromMat4(e._normalMatrix, t)), t
        }
        return e.modelMatrix
      },
      callback(e, t) {
        const n = this;
        if (n.parent) {
          const e = n._modelMatrix;
          A.invert(e, n.parent.worldMatrix), A.multiply(e, e, t), T.normalFromMat4(n._normalMatrix, t)
        } else n._worldMatrix = null, n._modelMatrix = t;
        n._makeWorldMatrixDirty(), n._dirtyPositionScaleRotation = !0
      }
    }, {
      name: "client",
      get() {
        return this._clientMap
      },
      set(e) {
        const t = this;
        "object" == typeof e && Object.keys(e).forEach(n => {
          t._clientMap.set(n, e[n])
        })
      }
    }, {
      name: "parent",
      value: null,
      callback(e, t) {
        if (t === e) return;
        const n = this;
        e && e._children.splice(e._children.indexOf(n), 1), t ? (t._children.push(n), n._visible = t._visible) : n._worldMatrix = null, n._makeWorldMatrixDirty(), t && !t._childrenBoundingBox && (t._childrenBoundingBox = new bo), t && (t._dirtyChildrenBoundingBox = !0)
      }
    }, {
      name: "glow",
      value: !1
    }, {
      name: "outline",
      value: !1
    }, {
      name: "visible",
      value: !0,
      callback(e, t) {
        this.children.forEach(e => {
          e.visible = t
        })
      }
    }, {
      name: "selected",
      value: !1
    }, {
      name: "selectable",
      value: !0
    }, {
      name: "type",
      value: null,
      dirty: "_dirtyBoundingBox",
      callback(e, t) {
        e !== t && (this._vao = Qo(t))
      }
    }, {
      name: "vao",
      value: null,
      dirty: "_dirtyBoundingBox",
      converter: e => e instanceof Do ? e : new Do(e),
      get() {
        if (this._instancesDirty && this._vao) {
          const e = new Float32Array(16 * this._instances.length);
          this._instances.forEach((t, n) => {
            e.set(t.worldMatrix, 16 * n)
          }), this._vao.setBufferData("instance", e), this._instancesDirty = !1
        }
        return this._vao
      }
    }, {
      name: "boundingBox",
      get() {
        const e = this,
          t = e._boundingBox;
        if (e._dirtyBoundingBox || e._dirtyChildrenBoundingBox) {
          let n;
          e._dirtyBoundingBox = !1, e.mesh ? n = e.mesh.boundingBox : e.vao && (n = e.vao.boundingBox), e._dirtyChildrenBoundingBox && e._childrenBoundingBox && e._children.forEach(t => {
            e._childrenBoundingBox.union(t.boundingBox)
          }), n ? (e._bodyBoundingBox = n, e.parent && (e.parent._bodyBoundingBox = n), t.transform(e.worldMatrix, n), e._childrenBoundingBox && t.union(e._childrenBoundingBox)) : e._childrenBoundingBox && t.reset(e._childrenBoundingBox.min, e._childrenBoundingBox.max), e._dirtyChildrenBoundingBox = !1
        }
        return t
      }
    }])), super();
    const n = this;
    n.id = Bs++, n._name = null, n._modelMatrix = A.create(), n._worldMatrix = null, n._normalMatrix = T.create(), n._children = [], n._position = Y.create(), n._scale = Y.fromValues(1, 1, 1), n._fixedSize = 5, n._rotation = Y.create(), n._quaternion = ot.create(), n._type = null, n._dirtyMatrix = !1, n._dirtyWorldMatrix = !1, n._dirtyPositionScaleRotation = !1, n._lods = null, n._boundingBox = new bo, n._childrenBoundingBox = null, n._dirtyBoundingBox = !0, n._dirtyChildrenBoundingBox = !0, n._clientMap = new Map, e && (n.options = e)
  }
  set options(e) {
    Object.keys(e).forEach(t => {
      this[t] = e[t]
    })
  }
  addChild(e) {
    e.parent !== this && (e.parent = this)
  }
  setPosition(e, t, n) {
    return this.position = Y.fromValues(e, t, n), this
  }
  setScale(e, t, n) {
    return this.scale = Y.fromValues(e, t, n), this
  }
  setRotation(e, t, n) {
    return this.rotation = Y.fromValues(e, t, n), this
  }
  clone(e = {}) {
    const {
      parent: t,
      cloneMesh: n
    } = e, i = this, o = new Gs;
    if (o.position = Y.clone(i.position), o.scale = Y.clone(i.scale), o.rotation = Y.clone(i.rotation), o.parent = t || i.parent, i.material && (o.material = i.material), i.mesh)
      if (n) {
        const e = {};
        e.name = i.mesh.name, e.boundingBox = i.mesh.boundingBox, e.primitives = i.mesh.primitives.map(e => {
          return {
            vao: e.vao,
            material: new ss({
              ...e.material
            })
          }
        }), o.mesh = e
      } else o.mesh = i.mesh;
    return i.vao && (o.vao = i.vao), i.children && i.children.forEach(e => {
      e.mesh ? e.clone({
        parent: o,
        cloneMesh: n
      }) : e.clone({
        parent: o
      })
    }), o.outline = i.outline, o.glow = i.glow, o.visible = i.visible, o.selectable = i.selectable, o.type = i.type, i.client.forEach((e, t) => {
      o.c(t, e)
    }), o
  }
  _makeWorldMatrixDirty() {
    const e = this;
    e._dirtyWorldMatrix = !0, e._dirtyBoundingBox = !0, e.parent && (e.parent._dirtyChildrenBoundingBox = !0), e._children.length && e._children.forEach(e => {
      e._makeWorldMatrixDirty()
    })
  }
  _refreshModelMatrix() {
    const e = this._modelMatrix;
    return A.fromRotationTranslationScale(e, this._quaternion, this._position, this._scale), T.normalFromMat4(this._normalMatrix, this.worldMatrix), e
  }
  _refreshPositionScaleRotation() {
    const e = this._position,
      t = this._scale,
      n = this._quaternion,
      i = this._modelMatrix;
    this._dirtyPositionScaleRotation = !1, A.getTranslation(e, i), A.getScaling(t, i);
    const o = 1 / t[0],
      a = 1 / t[1],
      r = 1 / t[2];
    Js[0] = i[0] * o, Js[1] = i[1] * o, Js[2] = i[2] * o, Js[4] = i[4] * a, Js[5] = i[5] * a, Js[6] = i[6] * a, Js[8] = i[8] * r, Js[9] = i[9] * r, Js[10] = i[10] * r, A.getRotation(n, Js), this._refreshRotation()
  }
  _refreshRotation() {
    const e = this._quaternion,
      t = this._rotation,
      n = e[0] * e[0],
      i = e[1] * e[1],
      o = e[2] * e[2],
      a = e[3] * e[3];
    t[0] = Math.atan2(2 * (e[0] * e[3] + e[2] * e[1]), a - n - i + o), t[1] = Math.asin(Math.min(Math.max(2 * (e[1] * e[3] - e[0] * e[2]), -1), 1)), t[2] = Math.atan2(2 * (e[0] * e[1] + e[2] * e[3]), a + n - i - o)
  }
  _handleMaterialChange(e) {
    this.fire(e)
  }
  addLOD(e, t) {
    const n = this,
      i = n._lods,
      o = {
        distance: e,
        data: t
      };
    let a, r, s;
    if (i) {
      if (e <= (s = i[r = i.length - 1]).distance) i.push(o);
      else
        for (a = 0; a <= r; a++)
          if (e >= (s = i[a]).distance) {
            i.splice(a, 0, o);
            break
          }
    } else n._lods = [o];
    n.fire({
      type: "change",
      data: n,
      property: "lod",
      oldValue: i,
      newValue: i
    })
  }
  removeLOD(e) {
    const t = this,
      n = t._lods;
    if (n) {
      for (let t = n.length - 1; t >= 0; t--) {
        if (n[t].data === e) {
          n.splice(t, 1);
          break
        }
      }
      n.length || (t._lods = null), t.fire({
        type: "change",
        data: t,
        property: "lod",
        oldValue: n,
        newValue: n
      })
    }
  }
  getLOD(e) {
    const t = this,
      n = t._lods,
      i = Y.distance(e, t._boundingBox.boundingSphere.center);
    if (t.__distance = i, !n) return t;
    let o = 0;
    const a = n.length - 1;
    let r = n[a];
    if (i <= r.distance) return t;
    for (; o <= a; o++)
      if (i >= (r = n[o]).distance) return r.data;
    return null
  }
  forEach(e, t) {
    0 !== this.children.length && this.children.forEach(n => {
      e(n), t && n.forEach(e, t)
    })
  }
  toBoxHelper() {
    const e = this;
    const t = new Gs;
    return t.material = new cs({
      castShadow: !1
    }), t.vao = function () {
      const t = e.boundingBox._points;
      return new Do({
        buffers: {
          index: [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7],
          position: new Float32Array([t[0][0], t[0][1], t[0][2], t[1][0], t[1][1], t[1][2], t[2][0], t[2][1], t[2][2], t[3][0], t[3][1], t[3][2], t[4][0], t[4][1], t[4][2], t[5][0], t[5][1], t[5][2], t[6][0], t[6][1], t[6][2], t[7][0], t[7][1], t[7][2], t[0][0], t[0][1], t[0][2], t[4][0], t[4][1], t[4][2], t[5][0], t[5][1], t[5][2], t[1][0], t[1][1], t[1][2], t[3][0], t[3][1], t[3][2], t[7][0], t[7][1], t[7][2], t[6][0], t[6][1], t[6][2], t[2][0], t[2][1], t[2][2], t[1][0], t[1][1], t[1][2], t[2][0], t[2][1], t[2][2], t[6][0], t[6][1], t[6][2], t[5][0], t[5][1], t[5][2], t[0][0], t[0][1], t[0][2], t[3][0], t[3][1], t[3][2], t[7][0], t[7][1], t[7][2], t[4][0], t[4][1], t[4][2]])
        },
        mode: "LINES"
      })
    }(), t
  }
  toWireframe(e = {}) {
    function t(t) {
      const n = !e || null == e.removeInnerEdge || e.removeInnerEdge;
      let {
        index: i
      } = t._buffers;
      i = i.data || i;
      let o, {
        position: a
      } = t._buffers;
      if (a = a.data || a, n) o = Hs(a, i);
      else {
        o = [];
        for (let e = 0; e < i.length; e += 3) o.push(i[e], i[e + 1], i[e + 1], i[e + 2], i[e + 2], i[e])
      }
      return new Do({
        buffers: {
          position: t._buffers.position,
          index: o
        },
        mode: "LINES"
      })
    }
    const n = new xs({
      wireframeColor: e && e.wireframeColor
    });
    return function e(i, o, a) {
      const r = new Gs;
      if (i.mesh) {
        const e = i.mesh.primitives.map(e => {
          return {
            vao: t(e.vao),
            material: n
          }
        });
        r.mesh = {
          primitives: e
        }
      } else i.vao && (r.material = n, r.vao = t(i.vao));
      return o && (r.parent = o, r.modelMatrix = A.clone(i.modelMatrix)), a && (r.modelMatrix = A.clone(a)), i.children.forEach(t => {
        e(t, r)
      }), r
    }(this, null, this.worldMatrix)
  }
  addInstance(e) {
    let t = this._instances;
    t || (this.type && (this._vao = Qo(this.type, !1)), t = [], this._instances = t), t.push(e), this._instancesDirty || (this._instancesDirty = !0)
  }
  c(e, t) {
    return void 0 === t ? this.getClient(e) : (this.setClient(e, t), this)
  }
  setClient(e, t) {
    this._clientMap.set(e, t)
  }
  getClient(e) {
    return this._clientMap.get(e)
  }
  intersect(e, t) {
    A.invert(Js, this.worldMatrix), Y.transformMat4(Vs, e, Js), Pe.set(js, t[0], t[1], t[2], 0), Pe.transformMat4(js, js, Js), Y.normalize(js, js);
    let n = null;
    return this.mesh ? this.mesh.primitives.forEach(e => {
      const t = e.vao.intersect(Vs, js);
      t && (n ? t.t < n.t && (n = t) : n = t)
    }) : this.vao && (n = this.vao.intersect(Vs, js)), n ? (Y.transformMat4(n.position, n.position, this.worldMatrix), {
      position: n.position,
      distance: Y.distance(e, n.position),
      data: this
    }) : null
  }
}
class Ws extends Gs {
  constructor() {
    super(), this.type = "cube"
  }
}
class Zs extends Gs {
  constructor() {
    super(), this.type = "sphere"
  }
}
class qs extends Gs {
  constructor() {
    super(), this.type = "torus"
  }
}
let Ks = null;
class Ys extends Gs {
  constructor(e) {
    var t;
    super(e), this.mode = "axis", this.visible = !1, this.size = e.size || 1.5, this.scene = e.scene, this.vao = (t = this.size, Ks || (Ks = new Do({
      buffers: {
        color: new Float32Array([1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1]),
        position: new Float32Array([t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0])
      },
      mode: "LINES"
    })), Ks), this.material = new cs({
      castShadow: !1,
      light: !1
    })
  }
  fixAllSize(e) {
    let t = Y.create(),
      n = Y.create();
    t = A.getTranslation(t, this.worldMatrix), n = A.getTranslation(n, e.worldMatrix);
    let i = Y.distance(t, n) / this._fixedSize;
    0 === i && (i = 1e-5), this.setScale(i, i, i)
  }
  setSize(e) {
    this.vao._buffers.position[0] = e, this.vao._buffers.position[7] = e, this.vao._buffers.position[14] = e
  }
}
let Qs = !1;
class $s extends $o {
  constructor() {
    var e;
    e = $s.prototype, Qs || (Qs = !0, no(e, [{
      name: "datas",
      value: null,
      noSet: !0
    }, {
      name: "count",
      value: null,
      get() {
        return this._datas.length
      },
      noSet: !0
    }])), super();
    this._datas = [], this._datasMap = {}
  }
  add(e) {
    const t = this,
      n = t._datas,
      i = t._datasMap;
    return t.contains(e) ? t : (n.push(e), i[e.id] = e, e.on("all", t._handleDataChange, t), t.fire({
      type: "add",
      data: e
    }), e.children && e.children.length && e.children.forEach(e => {
      t.add(e)
    }), t)
  }
  remove(e) {
    const t = this,
      n = t._datas,
      i = n.indexOf(e);
    if (i >= 0) {
      const {
        children: o
      } = e;
      if (n.splice(i, 1), delete t._datasMap[e.id], e.off("all", t._handleDataChange, t), t.fire({
          type: "remove",
          data: e
        }), o && o.length)
        for (let e = o.length - 1; e >= 0; e--) t.remove(o[e])
    }
    return t
  }
  _handleDataChange(e) {
    this.fire(e)
  }
  contains(e) {
    return !!this._datasMap[e.id]
  }
  forEach(e, t) {
    return this._datas.forEach(e, t), this
  }
  clear() {
    const e = this._datas;
    return this._datas = [], this._datasMap = {}, this.fire({
      type: "clear",
      datas: e
    }), this
  }
  get(e) {
    return this._datas[e]
  }
  getById(e) {
    return this._datasMap[e]
  }
}
let el = null;
class tl extends Gs {
  constructor(e) {
    super(e), this.vao = (el || (el = new Do({
      buffers: {
        position: new Float32Array([.5, .5, 0, -.5, .5, 0, -.5, -.5, 0, -.5, -.5, 0, .5, -.5, 0, .5, .5, 0]),
        uv: new Float32Array([1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1])
      }
    })), el)
  }
}
let nl = null;
class il extends Gs {
  constructor(e) {
    super(), this.mode = "BoxHelper", this.vao = function (e) {
      if (e) {
        const t = e.boundingBox._points;
        nl = new Do({
          buffers: {
            index: [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7],
            position: new Float32Array([t[0][0], t[0][1], t[0][2], t[1][0], t[1][1], t[1][2], t[2][0], t[2][1], t[2][2], t[3][0], t[3][1], t[3][2], t[4][0], t[4][1], t[4][2], t[5][0], t[5][1], t[5][2], t[6][0], t[6][1], t[6][2], t[7][0], t[7][1], t[7][2], t[0][0], t[0][1], t[0][2], t[4][0], t[4][1], t[4][2], t[5][0], t[5][1], t[5][2], t[1][0], t[1][1], t[1][2], t[3][0], t[3][1], t[3][2], t[7][0], t[7][1], t[7][2], t[6][0], t[6][1], t[6][2], t[2][0], t[2][1], t[2][2], t[1][0], t[1][1], t[1][2], t[2][0], t[2][1], t[2][2], t[6][0], t[6][1], t[6][2], t[5][0], t[5][1], t[5][2], t[0][0], t[0][1], t[0][2], t[3][0], t[3][1], t[3][2], t[7][0], t[7][1], t[7][2], t[4][0], t[4][1], t[4][2]])
          },
          mode: "LINES"
        })
      }
      return nl
    }(e), this.material = new cs({
      castShadow: !1
    })
  }
}
let ol = !1;
class al extends $o {
  constructor() {
    var e;
    e = al.prototype, ol || (ol = !0, no(e, [{
      name: "datas",
      value: null,
      noSet: !0
    }])), super(), this._datas = []
  }
  add(e) {
    if (!e) return;
    const t = this._datas;
    let n;
    Array.isArray(e) ? e.forEach(i => {
      (n = t.indexOf(i)) < 0 && !(i instanceof tl && e.selectable) && t.push(i)
    }) : (n = t.indexOf(e)) < 0 && !(e instanceof tl) && e.selectable && t.push(e), this.fire({
      type: "add",
      datas: t
    })
  }
  remove(e) {
    if (!e) return;
    const t = this._datas,
      n = [];
    let i;
    Array.isArray(e) ? e.forEach(e => {
      (i = t.indexOf(e)) >= 0 && (t.splice(i, 1), n.push(e))
    }) : (i = t.indexOf(e)) >= 0 && (t.splice(i, 1), n.push(e)), this.fire({
      type: "remove",
      remove: n
    })
  }
  set(e) {
    const t = this,
      n = t._datas;
    if (e) {
      t.clear();
      const i = t._datas;
      Array.isArray(e) ? e.forEach(e => {
        e.selectable && i.push(e)
      }) : e.selectable && i.push(e), 0 !== i.length && t.fire({
        type: "set",
        datas: i,
        old: n
      })
    } else t.clear()
  }
  clear() {
    const e = this._datas;
    this._datas = [], this.fire({
      type: "clear",
      remove: e
    })
  }
  contains(e) {
    return this._datas.indexOf(e) >= 0
  }
}
const rl = {
  easeNone: (e, t, n, i) => n * e / i + t,
  easeIn(e, t, n, i) {
    const o = e / i;
    return n * o * o + t
  },
  easeOut(e, t, n, i) {
    const o = e / i;
    return -n * o * (o - 2) + t
  },
  easeBoth(e, t, n, i) {
    const o = e / (i / 2);
    if (o < 1) return n / 2 * o * o + t;
    const a = o - 1;
    return -n / 2 * (a * (a - 2) - 1) + t
  },
  easeInStrong(e, t, n, i) {
    const o = e / i;
    return n * o * o * o * o + t
  },
  easeOutStrong(e, t, n, i) {
    const o = e / i - 1;
    return -n * (o * o * o * o - 1) + t
  },
  easeBothStrong(e, t, n, i) {
    const o = e / (i / 2);
    if (o < 1) return n / 2 * o * o * o * o + t;
    const a = o - 2;
    return -n / 2 * (a * a * a * a - 2) + t
  },
  elasticIn(e, t, n, i, o, a) {
    let r, s = e,
      l = o,
      u = a;
    return 0 === e ? t : 1 === (s /= i) ? t + n : (u || (u = .3 * i), !l || l < Math.abs(n) ? (l = n, r = u / 4) : r = u / (2 * Math.PI) * Math.asin(n / l), -l * 2 ** (10 * (s -= 1)) * Math.sin((s * i - r) * (2 * Math.PI) / u) + t)
  },
  elasticOut(e, t, n, i, o, a) {
    let r, s = e,
      l = o,
      u = a;
    return 0 === s ? t : 1 === (s /= i) ? t + n : (u || (u = .3 * i), !l || l < Math.abs(n) ? (l = n, r = u / 4) : r = u / (2 * Math.PI) * Math.asin(n / l), l * 2 ** (-10 * s) * Math.sin((s * i - r) * (2 * Math.PI) / u) + n + t)
  },
  elasticBoth(e, t, n, i, o, a) {
    let r, s = e,
      l = o,
      u = a;
    return 0 === e ? t : 2 === (s /= i / 2) ? t + n : (u || (u = i * (.3 * 1.5)), !l || l < Math.abs(n) ? (l = n, r = u / 4) : r = u / (2 * Math.ppI) * Math.asin(n / l), s < 1 ? l * 2 ** (10 * (s -= 1)) * Math.sin((s * i - r) * (2 * Math.PI) / u) * -.5 + t : l * 2 ** (-10 * (s -= 1)) * Math.sin((s * i - r) * (2 * Math.PI) / u) * .5 + n + t)
  },
  backIn(e, t, n, i, o = 1.70158) {
    let a = e;
    return e === i && (a -= .001), n * (a /= i) * a * ((o + 1) * a - o) + t
  },
  backOut(e, t, n, i, o = 1.70158) {
    const a = e / i - 1;
    return n * (a * a * ((o + 1) * a + o) + 1) + t
  },
  backBoth(e, t, n, i, o = 5.70158) {
    const a = e / (i / 2),
      r = 1.525 * o;
    if (a < 1) return n / 2 * (a * a * ((r + 1) * a - r)) + t;
    const s = a - 2;
    return n / 2 * (s * s * ((r + 1) * s + r) + 2) + t
  },
  bounceIn: (e, t, n, i) => n - rl.bounceOut(i - e, 0, n, i) + t,
  bounceOut(e, t, n, i) {
    const o = e / i;
    if (o < 1 / 2.75) return n * (7.5625 * o * o) + t;
    if (o < 2 / 2.75) {
      const e = o - 1.5 / 2.75;
      return n * (7.5625 * e * e + .75) + t
    }
    if (o < 2.5 / 2.75) {
      const e = o - 2.25 / 2.75;
      return n * (7.5625 * e * e + .9375) + t
    }
    const a = o - 2.625 / 2.75;
    return n * (7.5625 * a * a + .984375) + t
  },
  bounceBoth: (e, t, n, i) => e < i / 2 ? .5 * rl.bounceIn(2 * e, 0, n, i) + t : .5 * rl.bounceOut(2 * e - i, 0, n, i) + .5 * n + t
};
let sl = {},
  ll = 1,
  ul = !1,
  cl = 0;

function dl(e, t) {
  e.started || (e.started = !0, e.onPlay && e.onPlay());
  let n = t;
  e.filter && (n = e.filter(n)), e.onUpdate && e.onUpdate(n)
}

function fl(e) {
  const {
    type: t,
    from: n,
    to: i
  } = e;
  "number" === t ? e.delta = i - n : "point" === t ? 2 === n.length ? e.delta = [i[0] - n[0], i[1] - n[1]] : 3 === n.length && (e.delta = [i[0] - n[0], i[1] - n[1], i[2] - n[2]]) : "rect" === t ? e.delta = {
    x: i.x - n.x,
    y: i.y - n.y,
    w: i.w - n.w,
    h: i.h - n.h
  } : "color" === t && (e.delta = [i[0] - n[0], i[1] - n[1], i[2] - n[2], i[3] - n[3]])
}

function hl(e, t) {
  return sl[e.id] && (t && dl(e, e.to), e.onStop && e.onStop(), e.time = 0, e.total = 0, e.start = null, e.count = 0, e.started = !1, e.stopped = !1, e.paused = !1, e.pausedTime = null, e.pausedTotal = 0, delete sl[e.id]), e
}

function pl(e) {
  Object.keys(sl).forEach(t => {
    const n = sl[t];
    if (n)
      if (null == n.start && (n.lastTime = e, n.start = e), n.paused) n.pausedTime || (n.pausedTime = e);
      else {
        if (n.timePerFrame > 0) {
          if (n.frameTime += e - n.lastTime, n.lastTime = e, n.frameTime < n.timePerFrame) return void(n.paused || ul || (ul = !0));
          n.frameTime %= n.timePerFrame
        }
        if (n.pausedTime && (n.pausedTotal += e - n.pausedTime, n.pausedTime = null), n.total = e - n.start - n.pausedTotal, n.total > n.delay) {
          n.time = n.total - n.delay;
          let e = !1;
          if (n.time >= n.dur && (n.time = n.dur, n.total >= n.finish && (e = !0)), n.stopped || dl(n, function (e, t) {
              const {
                type: n,
                delta: i,
                from: o,
                time: a,
                dur: r
              } = e;
              let s = rl[e.easing || "easeNone"];
              s || (s = rl.easeNone);
              let l = t;
              return "number" === n ? l = s(a, o, i, r) : "point" === n ? 2 === o.length ? l = [s(a, o[0], i[0], r), s(a, o[1], i[1], r)] : 3 === o.length && (l = [s(a, o[0], i[0], r), s(a, o[1], i[1], r), s(a, o[2], i[2], r)]) : "rect" === n ? l = {
                x: s(a, o.x, i.x, r),
                y: s(a, o.y, i.y, r),
                w: s(a, o.w, i.w, r),
                h: s(a, o.h, i.h, r)
              } : "color" === n ? l = [s(a, o[0], i[0], r), s(a, o[1], i[1], r), s(a, o[2], i[2], r), s(a, o[3], i[3], r)] : "set" === n ? e.time && (l = e.to) : "group_set" === n && (l = e.to[e.groupIndex]), e.current = l, l
            }(n)), n.stopped = e, n.total >= n.finish)
            if (n.count++, n.count >= n.repeat) hl(n, !1), n.onDone && n.onDone();
            else if (n.time = 0, n.total = 0, n.start = null, n.stopped = !1, n.reverse) {
            const {
              from: e
            } = n;
            n.from = n.to, n.to = e, fl(n)
          }
        }
        n.paused || ul || (ul = !0)
      }
  })
}

function ml(e) {
  cl = requestAnimationFrame(ml), ul && (ul = !1, pl(e))
}
let _l, vl = !1;
class gl {
  constructor(e) {
    vl || (vl = !0, requestAnimationFrame(ml));
    const t = this;
    t.type = null == e.type ? "number" : e.type, t.delay = null == e.delay ? 0 : e.delay, t.dur = null == e.dur ? 1e3 : e.dur, t.interval = null == e.interval ? 0 : e.interval, null == e.finish ? t.finish = t.delay + t.dur + t.interval : (t.finish = e.finish, t.interval = t.finish - t.delay - t.dur), t.repeat = null == e.repeat ? 1 : e.repeat, t.reverse = null == e.reverse || e.reverse, t.easing = null == e.easing ? "easeNone" : e.easing, t.onUpdate = e.onUpdate, t.onDone = e.onDone, t.onStop = e.onStop, t.onPlay = e.onPlay, t.filter = e.filter, t.from = e.from || 0, t.to = null == e.to ? 1 : e.to;
    const n = e.fps || gl.fps;
    t.timePerFrame = n > 0 ? 1e3 / n : 0, t.frameTime = 0, t.lastTime = 0, t.start = null, t.time = 0, t.total = 0, t.count = 0, t.started = !1, t.stopped = !1, t.paused = !1, t.pausedTime = null, t.pausedTotal = 0, t.id = ll++
  }
  play() {
    return sl[(e = this).id] || (ul = !0, sl[e.id] = e, fl(e)), e.resume(), e;
    var e
  }
  stop(e) {
    return hl(this, e)
  }
  pause() {
    this.stopped || (this.paused = !0)
  }
  resume() {
    this.paused && (this.paused = !1, ul = !0)
  }
  isPaused() {
    return this.paused
  }
  clone() {
    return new gl(this)
  }
  chain(e) {
    const t = this;
    let n;
    return t.next = e, e.pre = t, t.onDone ? (n = t.onDone, t.onDone = function () {
      n.call(t), e.play()
    }) : t.onDone = function () {
      e.play()
    }, t
  }
  static dispose() {
    cl && (cancelAnimationFrame(cl), cl = 0)
  }
  static stopAllAnimates(e) {
    Object.keys(sl).forEach(t => {
      const n = sl[t];
      n && n.stop(e)
    }), sl = {}
  }
  static pauseAllAnimates() {
    Object.keys(sl).forEach(e => {
      const t = sl[e];
      t && t.pause()
    })
  }
  static resumeAllAnimates() {
    Object.keys(sl).forEach(e => {
      const t = sl[e];
      t && t.resume()
    })
  }
}

function bl(e) {
  const t = e.touches[0],
    n = e.touches[1],
    i = t.clientX - n.clientX,
    o = t.clientY - n.clientY;
  return Math.sqrt(i * i + o * o)
}
gl.fps = 0;
let Tl = !1;
class xl extends $o {
  constructor(e) {
    var t;
    t = xl.prototype, Tl || (Tl = !0, _l = Y.create(), no(t, [{
      name: "target",
      callback() {
        this._refreshDistance()
      }
    }, {
      name: "up",
      dirty: "_viewDirty"
    }, {
      name: "distance",
      callback(e, t) {
        const n = this;
        let i = t;
        i < n._minDistance && (i = n._minDistance), i > n._maxDistance && (i = n._maxDistance), n._distance = i, n._viewDirty = !0
      }
    }, {
      name: "position",
      callback(e, t) {
        this._refreshDistance()
      },
      get() {
        return this.projectViewMatrix && this._position
      }
    }, {
      name: "vRotation",
      value: 0,
      callback(e, t) {
        const n = this;
        let i = t;
        i > n._maxVRotation && (i = n._maxVRotation), i < n._minVRotation && (i = n._minVRotation), n._vRotation = i, n._viewDirty = !0
      }
    }, {
      name: "hRotation",
      value: 0,
      callback(e, t) {
        const n = t % (2 * Math.PI);
        this._hRotation = n, this._viewDirty = !0
      }
    }, {
      name: "fovy",
      value: 60,
      dirty: "_projectDirty",
      callback(e, t) {
        this.__fovy = t / 180 * Math.PI, this._tanHalfFovy = Math.tan(this.__fovy / 2)
      }
    }, {
      name: "aspect",
      dirty: "_projectDirty"
    }, {
      name: "near",
      converter: e => e <= 0 ? .1 : e,
      value: .1,
      dirty: "_projectDirty"
    }, {
      name: "far",
      value: 1e3,
      dirty: "_projectDirty"
    }, {
      name: "minDistance",
      value: .1
    }, {
      name: "maxDistance",
      value: 1e3
    }, {
      name: "minVRotation",
      value: -Math.PI / 2 * .95
    }, {
      name: "maxVRotation",
      value: Math.PI / 2 * .95
    }, {
      name: "lockY",
      value: !1
    }, {
      name: "viewMatrix",
      noSet: !0,
      get() {
        const e = this,
          t = e._viewMatrix,
          n = e._rotateMatrix,
          i = e._position;
        return e._viewDirty && (A.identity(n), A.translate(n, n, e._target), A.rotateY(n, n, e._hRotation), A.rotateX(n, n, e._vRotation), Y.set(_l, 0, 0, e._distance), Y.transformMat4(i, _l, n), A.lookAt(t, i, e._target, e._up), A.invert(e._worldMatrix, t), e._viewDirty = !1, A.mul(e.projectViewMatrix, e.projectMatrix, e.viewMatrix), e._frustum.fromCamera(e), e._viewDirty = !1), t
      }
    }, {
      name: "worldMatrix",
      noSet: !0,
      get() {
        return this.projectViewMatrix && this._worldMatrix
      }
    }, {
      name: "projectMatrix",
      noSet: !0,
      get() {
        const e = this,
          t = e._projectMatrix;
        return e._projectDirty && (A.perspective(t, e.__fovy, e._aspect, e._near, e._far), e._projectDirty = !1, A.mul(e.projectViewMatrix, e.projectMatrix, e.viewMatrix), e._frustum.fromCamera(e), e._projectDirty = !1), t
      }
    }, {
      name: "projectViewMatrix",
      noSet: !0,
      get() {
        const e = this,
          t = e._projectViewMatrix;
        return (e._projectDirty || e._viewDirty) && (A.mul(t, e.projectMatrix, e.viewMatrix), e._frustum.fromCamera(e), e.fire({
          type: "change",
          data: e,
          property: "projectViewMatrix",
          oldValue: t,
          newValue: t
        })), t
      }
    }, {
      name: "frustum",
      noSet: !0,
      get() {
        const e = this,
          t = e._projectViewMatrix,
          n = e._frustum;
        return (e._projectDirty || e._viewDirty) && (A.mul(t, e.projectMatrix, e.viewMatrix), n.fromCamera(e)), n
      }
    }, {
      name: "enableEasing",
      value: !0,
      callback(e, t) {
        this._enableEasing = t
      }
    }, {
      name: "enableZoom",
      value: !0,
      callback(e, t) {
        this._enableZoom = t
      }
    }, {
      name: "enableRotate",
      value: !0,
      callback(e, t) {
        this._enableRotate = t
      }
    }, {
      name: "enablePan",
      value: !0,
      callback(e, t) {
        this._enablePan = t
      }
    }, {
      name: "zoomSpeed",
      value: 1
    }, {
      name: "rotateSpeed",
      value: 1
    }, {
      name: "panSpeed",
      value: 1
    }])), super();
    const n = this;
    n._viewMatrix = A.create(), n._worldMatrix = A.create(), n._projectMatrix = A.create(), n._projectViewMatrix = A.create(), n._rotateMatrix = A.create(), n._viewDirty = !0, n._projectDirty = !0, n._frustum = new oa, n._position = Y.fromValues(0, 0, 10), n._distance = 10, n._target = Y.create(), n._up = Y.fromValues(0, 1, 0), n._aspect = 1, n._dur = 800, n._rotateDistance = 1.001, this.fovy = 60, e && (n.options = e)
  }
  set options(e) {
    Object.keys(e).forEach(t => {
      this[t] = e[t]
    })
  }
  _refreshDistance() {
    Y.subtract(_l, this._position, this._target);
    const e = Math.sqrt(_l[0] * _l[0] + _l[2] * _l[2]);
    this._hRotation = Math.atan2(_l[0], _l[2]), this._vRotation = -Math.atan2(_l[1], e), this._distance = Y.length(_l), this._viewDirty = !0
  }
  attach(e) {
    const t = this;
    if (t._canvas) return;
    t._canvas = e, t.aspect = e.width / e.height;
    let n, i, o, a, {
      lastPoint: r
    } = t;
    t._handleMouseMove = function (e) {
      if (t._suspended) return;
      const s = Vi(e),
        l = s.x - r.x,
        u = s.y - r.y;
      if (e.touches) switch (e.touches.length) {
        case 1:
          o = !0;
          break;
        case 2:
          i = !0;
          break;
        case 3:
          n = !0
      }
      if (i && t._enableZoom) {
        const n = bl(e);
        n < a ? t.zoomOut() : n > a && t.zoomIn(), a = n
      } else n && t._enablePan ? t.pan(l, u) : o && t._enableRotate && t.rotate(l, u);
      t.lastPoint = s, r = s
    }, t._clean = function () {
      r = null, window.removeEventListener("mousemove", t._handleMouseMove), window.removeEventListener("mouseup", t._handleMouseUp), window.removeEventListener("touchmove", t._handleMouseMove), window.removeEventListener("touchend", t._handleMouseUp)
    }, t._handleMouseUp = function (e) {
      if (t._enableEasing) {
        const e = Y.fromValues(t.firstPoint.x, t.firstPoint.y, 0),
          o = Y.fromValues(t.lastPoint.x, t.lastPoint.y, 0),
          a = Y.create();
        Y.lerp(a, e, o, t._rotateDistance), n && t._enablePan && t.playAnimate(o, a, "point", t.pan), !t._enableRotate || n || i || t.playAnimate(o, a, "point", t.rotate)
      }
      t._clean()
    }, t._handleMouseDown = function (e) {
      e.preventDefault(), null != e.button && 0 !== e.button && 2 !== e.button || (i = !1, o = !0, e.touches && e.touches.length > 1 ? a = bl(e) : (n = 2 === e.button, t._suspended || (t._canvas.focus(), r = Vi(e), t.lastPoint = r, t.firstPoint = r, window.addEventListener("mousemove", t._handleMouseMove), window.addEventListener("mouseup", t._handleMouseUp), window.addEventListener("touchmove", t._handleMouseMove), window.addEventListener("touchend", t._handleMouseUp))))
    }, t._handleWheel = function (e) {
      e.preventDefault(), !t._suspended && t._enableZoom && (e.deltaY > 0 ? t.zoomOut() : e.deltaY < 0 && t.zoomIn())
    }, t._handleKeydown = function (e) {
      if (t._suspended || !t._enablePan) return;
      const {
        keyCode: n
      } = e, i = 65 === n || 37 === n, o = 68 === n || 39 === n, a = 87 === n || 38 === n, r = 83 === n || 40 === n;
      let s = 0,
        l = 0;
      (i || o || a || r) && (i && (s += 5), o && (s -= 5), a && (l += 5), r && (l -= 5), t.pan(s, l))
    }, t._handleContextmenu = function (e) {
      e.preventDefault()
    }, e.addEventListener("mousedown", t._handleMouseDown), e.addEventListener("touchstart", t._handleMouseDown, {
      passive: !1
    }), e.addEventListener("wheel", t._handleWheel, {
      passive: !1
    }), e.addEventListener("blur", t._clean), e.addEventListener("keydown", t._handleKeydown), e.addEventListener("contextmenu", t._handleContextmenu)
  }
  playAnimate(e, t, n, i) {
    const o = this;
    this._animate, this._animate = new gl({
      from: e,
      to: t,
      type: n,
      dur: o._dur,
      reverse: !1,
      easing: "easeOutStrong",
      onUpdate(t) {
        if ("point" === n) {
          const n = t[0] - e[0],
            a = t[1] - e[1];
          i && i.call(o, n, a)
        } else "number" === n && (o.distance = t)
      }
    }).play()
  }
  detach() {
    const e = this._canvas;
    e && (e.removeEventListener("mousedown", this._handleMouseDown), e.removeEventListener("touchstart", this._handleMouseDown), e.removeEventListener("wheel", this._handleWheel), e.removeEventListener("blur", this._clean), e.removeEventListener("keydown", this._handleKeydown), e.removeEventListener("contextmenu", this._handleContextmenu))
  }
  zoomIn() {
    this._enableEasing ? this.playAnimate(this._distance, this._distance * (1 - .1 * this.zoomSpeed), "number") : this.distance *= 1 - .1 * this.zoomSpeed
  }
  zoomOut() {
    this._enableEasing ? this.playAnimate(this._distance, this._distance * (1 + .1 * this.zoomSpeed), "number") : this.distance *= 1 + .1 * this.zoomSpeed
  }
  pan(e, t) {
    const n = this._position,
      i = this._target,
      o = this._viewMatrix,
      a = this.distance / this._canvas.clientHeight;
    Y.set(_l, o[0], o[4], o[8]), Y.scale(_l, _l, -e * a * this.panSpeed), Y.add(n, n, _l), Y.add(i, i, _l), Y.set(_l, o[1], o[5], o[9]), Y.scale(_l, _l, t * a * this.panSpeed), Y.add(n, n, _l), Y.add(i, i, _l), this.position = n, this.target = i
  }
  rotate(e, t) {
    const n = this._canvas;
    let i = this._vRotation,
      o = this._hRotation;
    const a = 360 / n.width * window.devicePixelRatio * Math.PI / 180;
    i += -t * (180 / n.height * window.devicePixelRatio * Math.PI / 180) * this.rotateSpeed, o += -e * a * this.rotateSpeed, this.vRotation = i, this.hRotation = o
  }
}

function Sl(e, t) {
  const n = e * t,
    i = new Uint8Array(2 * n);
  for (let e = 0, t = 0; e < n; ++e) i[t++] = 255 * ao(), i[t++] = 255 * ao();
  return i
}

function wl(e) {
  return {
    position: {
      data: e,
      usage: "DYNAMIC_COPY",
      offset: 0,
      stride: 28,
      size: 3
    },
    age: {
      data: e,
      usage: "DYNAMIC_COPY",
      offset: 12,
      stride: 28,
      size: 1,
      location: 1
    },
    life: {
      data: e,
      usage: "DYNAMIC_COPY",
      offset: 16,
      stride: 28,
      size: 1,
      location: 2
    },
    velocity: {
      data: e,
      usage: "DYNAMIC_COPY",
      offset: 20,
      stride: 28,
      size: 2,
      location: 3
    }
  }
}
class yl {
  constructor(e) {
    this._particles = [], this._scene = e, this._init()
  }
  _init() {
    this._updateProgram = dr(er, tr, {
      varyings: ["v_position", "v_age", "v_life", "v_velocity"]
    }), this._renderProgram = dr(Qa, $a), this._noiseTexture = new ca({
      width: 512,
      height: 512,
      data: Sl(512, 512),
      format: "RG8",
      wrapS: "MIRRORED_REPEAT",
      wrapT: "MIRRORED_REPEAT",
      minFilter: "NEAREST",
      magFilter: "NEAREST"
    })
  }
  add(e) {
    const t = function (e, t, n) {
        const i = new Float32Array(7 * e);
        for (let o = 0, a = 0; o < e; ++o) {
          i[a++] = 0, i[a++] = 0, i[a++] = 0;
          const e = t + ao() * (n - t);
          i[a++] = e + 1, i[a++] = e, i[a++] = 0, i[a++] = 0
        }
        return i
      }(e.count, e.minAge, e.maxAge),
      n = {
        vaos: [new Do({
          buffers: wl(t),
          mode: "POINT"
        }), new Do({
          buffers: wl(t),
          mode: "POINT"
        })],
        read: 0,
        write: 1,
        oldTimestamp: 0,
        totalTime: 0,
        bornParticles: 0,
        count: e.count,
        birthRate: e.birthRate,
        gravity: e.gravity,
        origin: e.origin,
        minTheta: e.minTheta,
        maxTheta: e.maxTheta,
        minSpeed: e.minSpeed,
        maxSpeed: e.maxSpeed,
        maxDistance: e.maxDistance || 100,
        pointSize: e.pointSize,
        pointColor: e.pointColor,
        texture: new Kr({
          url: e.image
        }),
        clientMap: new Map,
        setClient(e, t) {
          this.clientMap.set(e, t)
        },
        getClient(e) {
          return this.clientMap.get(e)
        }
      };
    return this._particles.push(n), n
  }
  draw(e) {
    const t = this,
      n = t._scene,
      {
        camera: i
      } = n,
      o = n._renderer,
      a = o._gl;
    t._particles.length && (o.state.setBlend(!0), o.state.setBlendMode(a.FUNC_ADD, a.FUNC_ADD, a.SRC_ALPHA, a.ONE, a.SRC_ALPHA, a.ONE), o.state.setDepthMask(!1), t._particles.forEach(n => {
      const o = n.bornParticles;
      let r = 0;
      if (0 !== n.oldTimestamp && (r = e - n.oldTimestamp) > 500 && (r = 0), n.bornParticles < n.count && (n.bornParticles = Math.min(n.count, Math.floor(n.bornParticles + n.birthRate * r))), n.oldTimestamp = e, o) {
        t._updateProgram.use(a), t._updateProgram.bindUniforms({
          u_timeDelta: r / 1e3,
          u_totalTime: n.totalTime,
          u_gravity: n.gravity,
          u_origin: n.origin,
          u_minTheta: n.minTheta,
          u_maxTheta: n.maxTheta,
          u_minSpeed: n.minSpeed,
          u_maxSpeed: n.maxSpeed,
          u_rgNoise: 0
        }), n.totalTime += r, t._noiseTexture.bind(a, 0);
        const e = n.vaos[n.read];
        n.vaos[n.write].bindFeedback(a), e.drawFeedback(a, 0, o), t._renderProgram.use(a), t._renderProgram.bindUniforms({
          u_eyePosition: i.position,
          u_pointSize: n.pointSize,
          u_maxDistance: n.maxDistance,
          u_pointColor: n.pointColor,
          u_projectViewMatrix: i.projectViewMatrix,
          u_particle: 0
        }), n.texture.bind(a, 0), e.draw(a, 0, o), [n.read, n.write] = [n.write, n.read]
      }
    }), o.state.setBlend(!1), o.state.setDepthMask(!0))
  }
}
let Pl, Ml, Ol, Nl, El, Al, Cl, Rl, Ll = 1,
  Il = !1;
class Dl extends $o {
  constructor(e) {
    var t;
    t = Dl.prototype, Il || (Il = !0, no(t, [{
      name: "diffuseColor",
      value: null
    }, {
      name: "specularColor",
      value: null
    }, {
      name: "intensity",
      value: 1
    }, {
      name: "shadow",
      value: !1
    }, {
      name: "shadowDarkness",
      value: 1
    }, {
      name: "parent",
      value: null,
      dirty: "_dirty",
      callback(e, t) {
        const n = this;
        e && e.off("all", n._parentChangeHandler, n), t && t.on("all", n._parentChangeHandler, n)
      }
    }])), super();
    const n = this;
    n.id = Ll++, e && (n.options = e), n.__diffuseColor = Y.create(), n.__specularColor = Y.create(), n._diffuseColor || (n._diffuseColor = Y.fromValues(1, 1, 1)), n._specularColor || (n._specularColor = Y.fromValues(1, 1, 1))
  }
  set options(e) {
    Object.keys(e).forEach(t => {
      this[t] = e[t]
    })
  }
  _parentChangeHandler() {
    this._dirty = !0
  }
}
const zl = 4,
  Fl = .95;
let Ul, kl, Hl, Jl, Vl, jl, Bl, Xl, Gl, Wl = !1;
class Zl extends Dl {
  constructor(e) {
    var t;
    t = Zl.prototype, Wl || (Wl = !0, Pl = Pe.create(), Ml = Y.create(), Ol = Y.create(), Nl = Y.create(), El = Y.create(), Al = Y.fromValues(2, 2, 2), Cl = Y.fromValues(0, 0, 0), Rl = [Y.create(), Y.create(), Y.create(), Y.create(), Y.create(), Y.create(), Y.create(), Y.create()], Ul = [0, 8, 30, 100, 0], kl = Y.create(), Hl = A.create(), Jl = A.create(), no(t, [{
      name: "TYPE",
      get: () => "DIRECTION"
    }, {
      name: "direction",
      value: null,
      dirty: "_dirty"
    }])), super(e);
    const n = this;
    n._direction || (n.direction = Y.fromValues(-1, -1, -1)), n._shadowMapProjectViewMatrix = [A.create(), A.create(), A.create(), A.create()], n._cascadedEnd = Pe.create(), n._frustums = [new oa, new oa, new oa, new oa]
  }
  _refreshShadowMapMatrix(e) {
    const t = this,
      n = t._shadowMapProjectViewMatrix,
      i = t._cascadedEnd,
      {
        camera: o
      } = e,
      {
        fovy: a,
        near: r,
        far: s,
        aspect: l
      } = o;
    A.lookAt(Hl, Cl, t.direction, o._up), Ul[0] = r, Ul[zl] = s;
    const u = r,
      c = r + (s - r),
      d = c - u,
      f = c / u;
    for (let e = 0; e < zl; e++) {
      const n = (e + 1) / zl,
        i = u + d * n,
        r = Fl * (u * f ** n - i) + i;
      Ul[e + 1] = r, t._frustums[e].fromMatrix(o.viewMatrix, a, Ul[e], Ul[e + 1], l)
    }
    for (let a = 0; a < zl; a++) {
      Y.set(Ml, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), Y.set(Ol, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
      for (let e = 0; e < 8; e++) Y.transformMat4(Rl[e], t._frustums[a].points[e], Hl), Ml[0] = Math.min(Ml[0], Rl[e][0]), Ml[1] = Math.min(Ml[1], Rl[e][1]), Ml[2] = Math.min(Ml[2], Rl[e][2]), Ol[0] = Math.max(Ol[0], Rl[e][0]), Ol[1] = Math.max(Ol[1], Rl[e][1]), Ol[2] = Math.max(Ol[2], Rl[e][2]);
      Y.set(Nl, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), Y.set(El, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
      const r = e._renderer._allList;
      for (let e = 0; e < r.length; e++) {
        const t = r[e];
        if (t.material.castShadow)
          for (let e = 0; e < 8; e++) Y.transformMat4(Rl[e], t.data.boundingBox._points[e], Hl), Nl[0] = Math.min(Nl[0], Rl[e][0]), Nl[1] = Math.min(Nl[1], Rl[e][1]), Nl[2] = Math.min(Nl[2], Rl[e][2]), El[0] = Math.max(El[0], Rl[e][0]), El[1] = Math.max(El[1], Rl[e][1]), El[2] = Math.max(El[2], Rl[e][2])
      }
      Ml[0] = Math.max(Ml[0], Nl[0]), Ml[1] = Math.max(Ml[1], Nl[1]), Ml[2] = Math.max(Ml[2], Nl[2]), Ol[0] = Math.min(Ol[0], El[0]), Ol[1] = Math.min(Ol[1], El[1]), Ol[2] = Math.min(Ol[2], El[2]), Y.sub(Ml, Ml, Al), Y.add(Ol, Ol, Al), A.ortho(Jl, Ml[0], Ol[0], Ml[1], Ol[1], -Ol[2], -Ml[2]), A.mul(n[a], Jl, Hl);
      const s = Ul[a + 1];
      Y.set(kl, 0, 0, -s), Y.transformMat4(kl, kl, o.projectMatrix), i[a] = .5 * kl[2] + .5
    }
  }
  _refreshShadowMapFramebuffer(e) {
    const t = e._renderer,
      n = t._gl;
    this._shadowMapFramebuffer || (this._shadowMapFramebuffer = new fa({
      type: "2D_ARRAY",
      layers: Zl.CASCADED_COUNT,
      width: 2048,
      height: 2048,
      dataType: "FLOAT",
      format: "DEPTH_COMPONENT32F",
      compareFunc: "LESS",
      compareMode: "COMPARE_REF_TO_TEXTURE",
      minFilter: "LINEAR",
      magFilter: "LINEAR"
    })), this._refreshShadowMapMatrix(e);
    for (let e = 0; e < Zl.CASCADED_COUNT; e++) this._shadowMapFramebuffer.bind(n, e), t._shadowMapUniforms.u_projectViewMatrix = this._shadowMapProjectViewMatrix[e], n._program = null, t._drawShadow();
    n.bindFramebuffer(n.FRAMEBUFFER, null)
  }
  _validate() {
    if (this._dirty && (this._dirty = !1, this.__direction || (this.__direction = Y.create()), Y.normalize(this.__direction, this._direction), this.parent)) {
      const e = this._direction;
      Pe.set(Pl, e[0], e[1], e[2], 0), Pe.transformMat4(Pl, Pl, this.parent.worldMatrix), Y.set(this.__direction, Pl[0], Pl[1], Pl[2]), Y.normalize(this.__direction, this.__direction)
    }
  }
}
Zl.CASCADED_COUNT = zl;
let ql, Kl, Yl, Ql = !1;
class $l extends Dl {
  constructor(e) {
    var t;
    t = $l.prototype, Ql || (Ql = !0, Vl = Pe.create(), jl = A.create(), Bl = A.create(), Xl = Y.create(), Gl = A.create(), A.fromTranslation(Gl, Y.fromValues(.5, .5, .5)), A.scale(Gl, Gl, Y.fromValues(.5, .5, .5)), no(t, [{
      name: "TYPE",
      get: () => "SPOT"
    }, {
      name: "direction",
      value: null,
      dirty: "_dirty"
    }, {
      name: "position",
      value: null,
      dirty: "_dirty"
    }, {
      name: "distance",
      value: 1e3
    }, {
      name: "innerAngle",
      value: Math.PI / 8
    }, {
      name: "outerAngle",
      value: Math.PI / 6
    }])), super(e);
    const n = this;
    n._shadowMapProjectViewMatrix = A.create(), n._shadowMapBiasProjectViewMatrix = A.create(), n._position || (n.position = Y.fromValues(0, 1, 0)), n._direction || (n.direction = Y.fromValues(0, -1, 0))
  }
  _refreshShadowMapMatrix(e) {
    const t = this._shadowMapProjectViewMatrix;
    Y.add(Xl, this.position, this.direction), A.lookAt(jl, this.position, Xl, e._up), A.perspective(Bl, 2 * this.outerAngle, 1, .1, this.distance), A.mul(t, Bl, jl), A.mul(this._shadowMapBiasProjectViewMatrix, Gl, t)
  }
  _refreshShadowMapFramebuffer(e) {
    const t = e._renderer,
      n = t._gl;
    this._shadowMapFramebuffer || (this._shadowMapFramebuffer = new fa({
      width: 2048,
      height: 2048,
      minFilter: "LINEAR",
      magFilter: "LINEAR",
      dataType: "UNSIGNED_SHORT",
      format: "DEPTH_COMPONENT16",
      compareFunc: "LESS",
      compareMode: "COMPARE_REF_TO_TEXTURE"
    })), this._refreshShadowMapMatrix(e._camera), n.enable(n.POLYGON_OFFSET_FILL), n.colorMask(!1, !1, !1, !1), n.polygonOffset(2, 4), this._shadowMapFramebuffer.bind(n), t._shadowMapUniforms.u_projectViewMatrix = this._shadowMapProjectViewMatrix, n._program = null, t._drawShadow(), n.bindFramebuffer(n.FRAMEBUFFER, null), n.colorMask(!0, !0, !0, !0), n.disable(n.POLYGON_OFFSET_FILL)
  }
  _validate() {
    if (this._dirty && (this._dirty = !1, this.__direction || (this.__direction = Y.create()), this.__position || (this.__position = Y.create()), Y.normalize(this.__direction, this._direction), Y.copy(this.__position, this._position), this.parent)) {
      const e = this._direction;
      Pe.set(Vl, e[0], e[1], e[2], 0), Pe.transformMat4(Vl, Vl, this.parent.worldMatrix), Y.set(this.__direction, Vl[0], Vl[1], Vl[2]), Y.normalize(this.__direction, this.__direction), Y.transformMat4(this.__position, this._position, this.parent.worldMatrix)
    }
  }
}
let eu = !1;
class tu extends Dl {
  constructor(e) {
    var t;
    t = tu.prototype, eu || (eu = !0, ql = A.create(), Kl = A.create(), Yl = [{
      direction: Y.fromValues(1, 0, 0),
      up: Y.fromValues(0, -1, 0)
    }, {
      direction: Y.fromValues(-1, 0, 0),
      up: Y.fromValues(0, -1, 0)
    }, {
      direction: Y.fromValues(0, 1, 0),
      up: Y.fromValues(0, 0, 1)
    }, {
      direction: Y.fromValues(0, -1, 0),
      up: Y.fromValues(0, 0, -1)
    }, {
      direction: Y.fromValues(0, 0, 1),
      up: Y.fromValues(0, -1, 0)
    }, {
      direction: Y.fromValues(0, 0, -1),
      up: Y.fromValues(0, -1, 0)
    }], no(t, [{
      name: "TYPE",
      get: () => "POINT"
    }, {
      name: "position",
      value: null,
      dirty: "_dirty"
    }, {
      name: "distance",
      value: 1e3
    }])), super(e);
    const n = this;
    n._position || (n.position = Y.fromValues(1, 1, 1))
  }
  _refreshShadowMapMatrix(e) {
    A.perspective(Kl, Math.PI / 2, 1, .1, 1e3);
    for (let e = 0; e < 6; e++) Y.add(this._matrices[e].target, this.position, Yl[e].direction), A.lookAt(ql, this.position, this._matrices[e].target, Yl[e].up), A.mul(this._matrices[e].projectViewMatrix, Kl, ql)
  }
  _refreshShadowMapFramebuffer(e) {
    const t = e._renderer,
      n = t._gl;
    if (!this._framebuffer) {
      this._depthTexture = new ca({
        width: 2048,
        height: 2048,
        type: "CUBE_MAP",
        minFilter: "LINEAR",
        magFilter: "LINEAR",
        wrapS: "CLAMP_TO_EDGE",
        wrapT: "CLAMP_TO_EDGE",
        wrapR: "CLAMP_TO_EDGE",
        anisotropy: 0,
        mipmap: !1,
        dataType: "UNSIGNED_SHORT",
        format: "DEPTH_COMPONENT16",
        compareFunc: "LESS",
        compareMode: "COMPARE_REF_TO_TEXTURE"
      }), this._framebuffer = n.createFramebuffer(), this._matrices = [];
      for (let e = 0; e < 6; e++) this._matrices.push({
        projectViewMatrix: A.create(),
        target: Y.fromValues(0, 0, 0)
      })
    }
    this._refreshShadowMapMatrix(e._camera), n.enable(n.POLYGON_OFFSET_FILL), n.colorMask(!1, !1, !1, !1), n.polygonOffset(2, 4), n.bindFramebuffer(n.FRAMEBUFFER, this._framebuffer), this._depthTexture.bind(n, 0), n.viewport(0, 0, this._depthTexture._options.width, this._depthTexture._options.height);
    for (let e = 0; e < 6; e++) n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_CUBE_MAP_POSITIVE_X + e, this._depthTexture._texture, 0), n.clear(n.DEPTH_BUFFER_BIT), t._shadowMapUniforms.u_projectViewMatrix = this._matrices[e].projectViewMatrix, n._program = null, t._drawShadow();
    n.bindFramebuffer(n.FRAMEBUFFER, null), n.colorMask(!0, !0, !0, !0), n.disable(n.POLYGON_OFFSET_FILL)
  }
  _validate() {
    this._dirty && (this._dirty = !1, this.__position || (this.__position = Y.create()), Y.copy(this.__position, this._position), this.parent && Y.transformMat4(this.__position, this._position, this.parent.worldMatrix))
  }
}
const nu = {
    DRACO_DECODER_PATH: "/"
  },
  iu = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    COLOR_0: "color",
    JOINTS_0: "joint",
    WEIGHTS_0: "weight"
  },
  ou = {
    5121: Uint8Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  },
  au = {
    5121: 1,
    5123: 2,
    5125: 4,
    5126: 4
  },
  ru = {
    0: "POINTS",
    1: "LINES",
    2: "LINE_LOOP",
    3: "LINE_STRIP",
    4: "TRIANGLES",
    5: "TRIANGLE_STRIP",
    6: "TRIANGLE_FAN"
  },
  su = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  },
  lu = {
    translation: 3,
    rotation: 4,
    scale: 3
  },
  uu = {
    33071: "CLAMP_TO_EDGE",
    10497: "REPEAT",
    33648: "MIRRORED_REPEAT"
  },
  cu = {
    9728: "NEAREST",
    9729: "LINEAR",
    9984: "NEAREST_MIPMAP_NEAREST",
    9985: "LINEAR_MIPMAP_NEAREST",
    9986: "NEAREST_MIPMAP_LINEAR",
    9987: "LINEAR_MIPMAP_LINEAR"
  };

function du() {
  let e, t;
  const n = {
    onModuleLoaded() {
      t = Date.now() - t, postMessage("init")
    }
  };
  onmessage = function (i) {
    const {
      data: o
    } = i;
    switch (o.type) {
      case "init":
        t = Date.now(), importScripts(`${o.path}draco_wasm_wrapper_gltf.js`), fetch(`${o.path}draco_decoder_gltf.wasm`).then(e => e.arrayBuffer()).then(t => {
          n.wasmBinary = t, e = DracoDecoderModule(n)
        });
        break;
      case "decode":
        ! function (n, i, o) {
          const a = Date.now(),
            r = new e.DecoderBuffer;
          r.Init(i, i.length);
          const s = new e.Decoder,
            l = s.GetEncodedGeometryType(r);
          let u, c;
          if (l === e.TRIANGULAR_MESH ? (u = new e.Mesh, c = s.DecodeBufferToMesh(r, u)) : (u = new e.PointCloud, c = s.DecodeBufferToPointCloud(r, u)), !c.ok() || 0 === c.ptr) return e.destroy(r), e.destroy(s), e.destroy(u), void postMessage({
            error: `Draco decode error: ${c.error_msg()}`
          });
          e.destroy(r);
          let d = 0;
          l === e.TRIANGULAR_MESH && (d = u.num_faces());
          const f = u.num_points();
          let h;
          const p = {},
            m = [];
          let _;
          if (Object.keys(n).forEach(t => {
              const i = s.GetAttributeByUniqueId(u, n[t]);
              "POSITION" === t && (h = i);
              const o = i.num_components(),
                a = f * o,
                r = new Float32Array(a);
              p[t] = r, m.push(r.buffer);
              const l = new e.DracoFloat32Array;
              s.GetAttributeFloatForAllPoints(u, i, l);
              for (let e = 0; e < a; e++) r[e] = l.GetValue(e);
              e.destroy(l)
            }), l === e.TRIANGULAR_MESH) {
            const t = new e.DracoInt32Array;
            let n, i, a;
            if ("TRIANGLE_STRIP" === o)
              for (_ = new(i = (n = s.GetTriangleStripsFromMesh(u, t)) <= 256 ? Uint8Array : n <= 65536 ? Uint16Array : Uint32Array)(n), m.push(_.buffer), a = 0; a < n; ++a) _[a] = t.GetValue(a);
            else
              for (_ = new(i = (n = 3 * d) <= 256 ? Uint8Array : n <= 65536 ? Uint16Array : Uint32Array)(n), m.push(_.buffer), a = 0; a < d; ++a) {
                s.GetFaceFromMesh(u, a, t);
                const e = 3 * a;
                _[e] = t.GetValue(0), _[e + 1] = t.GetValue(1), _[e + 2] = t.GetValue(2)
              }
            e.destroy(t)
          }
          const v = new e.AttributeQuantizationTransform;
          v.InitFromAttribute(h) && Fi("AttributeQuantizationTransform", v.range(), v.quantization_bits(), v.min_value(0), v.min_value(1), v.min_value(2)), e.destroy(v), e.destroy(s), e.destroy(u), postMessage({
            time: Date.now() - a,
            initTime: t,
            datas: p,
            indices: _
          }, m)
        }(o.attributes, o.encodedData, o.mode)
    }
  }
}

function fu(e, t, n) {
  const i = new XMLHttpRequest;
  return i.onreadystatechange = function (e) {
    if (4 === this.readyState)
      if (200 === this.status) {
        let e = i.response;
        "json" === t && "string" == typeof e && (e = JSON.parse(e)), n(null, e)
      } else Ui("ajax error:", this.statusText), n(`${this.responseURL} ${this.statusText}`, null)
  }, i.open("get", e), t && (i.responseType = t), i.send(), i
}
let hu;
nu.parse = function (e, t) {
  hu || (hu = io(du));
  const n = e.lastIndexOf("/"),
    i = n < 0 ? "./" : e.substr(0, n + 1),
    o = e.endsWith(".glb");
  fu(e, o ? "arraybuffer" : "json", (e, n) => {
    e ? t && t(e) : nu.parseData(i, n, t, o)
  })
}, nu.parseJSONData = function (e, t, n) {
  return nu.parseData(e, t, n, !1)
}, nu.parseBinaryData = function (e, t, n, i = 0) {
  return nu.parseData(e, t, n, !0, i)
}, nu.parseData = function (e, t, n, i, o = 0) {
  const a = [];
  let r = 0;
  const s = [],
    l = [],
    u = [],
    c = [],
    d = [],
    f = [],
    h = [];
  let p, m, _ = [],
    v = 0;

  function g() {
    p.meshes.forEach(e => {
      const t = [],
        n = {
          primitives: t
        };
      l.push(n), null != e.name && (n.name = e.name), null != e.weights && (n.weights = e.weights), e.primitives.forEach(e => {
        const i = {},
          o = {
            buffers: i
          };
        t.push(o), null != e.mode && (o.mode = ru[e.mode]), Object.keys(e.attributes).forEach(t => {
          const n = s[e.attributes[t]],
            o = {
              data: n.buffer,
              type: n.type,
              stride: n.stride,
              offset: n.byteOffset,
              size: n.size
            };
          "POSITION" === t && (n.min && (o.min = n.min), n.max && (o.max = n.max)), iu[t] && (i[iu[t]] = o)
        }), e.targets && (n.targetCount = e.targets.length, e.targets.forEach((e, t) => {
          let n = s[e.POSITION];
          i[`position${t}`] = {
            data: n.buffer,
            type: n.type,
            stride: n.stride,
            offset: n.byteOffset,
            size: n.size
          }, e.NORMAL && (n = s[e.NORMAL], i[`normal${t}`] = {
            data: n.buffer,
            type: n.type,
            stride: n.stride,
            offset: n.byteOffset,
            size: n.size
          }), e.TANGENT && (n = s[e.TANGENT], i[`tangent${t}`] = {
            data: n.buffer,
            type: n.type,
            stride: n.stride,
            offset: n.byteOffset,
            size: n.size
          })
        })), null != e.indices && (i.index = s[e.indices].buffer), null != e.material && (o.material = e.material)
      })
    });
    const t = p.extensions && p.extensions.KHR_lights_punctual;
    t && t.lights && (_ = t.lights), p.nodes && p.nodes.forEach(e => {
      const t = {},
        n = e.extensions && e.extensions.KHR_lights_punctual,
        i = e.extensions && e.extensions.MSFT_lod,
        o = e.extras && e.extras.MSFT_screencoverage;
      if (c.push(t), null != e.name && (t.name = e.name), e.rotation && (t.rotation = e.rotation), e.translation && (t.translation = e.translation), e.scale && (t.scale = e.scale), e.matrix && (t.matrix = e.matrix), e.weights && (t.weights = e.weights), e.children && (t.children = e.children), null != e.mesh && (t.mesh = e.mesh), null != e.camera && (t.camera = p.cameras[e.camera]), n && (t.light = _[n.light]), i && i.ids && o) {
        const e = [];
        t.lods = e, o.forEach((t, n) => {
          e.push({
            screencoverage: t,
            id: i.ids[n]
          })
        })
      }
    }), p.skins && p.skins.forEach(e => {
      const t = s[e.inverseBindMatrices],
        n = new Array(e.joints.length),
        i = {
          joints: e.joints,
          inverseBindMatrices: n,
          skeleton: e.skeleton
        };
      for (let i = 0; i < e.joints.length; i++) n[i] = new Float32Array(t.buffer.buffer, t.offset + 16 * i * 4, 16);
      u.push(i)
    }), p.nodes && p.nodes.forEach((e, t) => {
      const n = c[t];
      null != e.skin && (n.skin = u[e.skin])
    }), p.animations && p.animations.forEach(e => {
      const t = [],
        n = {
          channels: t
        },
        i = [];
      d.push(n), null != e.name && (n.name = e.name), e.samplers.forEach(e => {
        i.push({
          input: s[e.input].buffer,
          interpolation: e.interpolation,
          output: s[e.output]
        })
      }), e.channels.forEach(e => {
        const n = c[e.target.node],
          o = l[n.mesh],
          {
            path: a
          } = e.target,
          r = i[e.sampler],
          s = r.output,
          {
            buffer: u
          } = s.buffer,
          d = [];
        let f, h;
        if ("weights" === a) {
          const {
            targetCount: e
          } = o, t = s.count / e;
          for (f = 0; f < t; f++) h = s.buffer.byteOffset + 4 * f * e, d.push(new Float32Array(u, h, e));
          r.splitOutput = d, n.weights || (n.weights = o.weights.slice(0))
        } else {
          const e = lu[a];
          for (f = 0; f < s.count; f++) h = s.buffer.byteOffset + 4 * f * e, d.push(new Float32Array(u, h, e));
          r.output = d, "translation" !== a || n.translation || (n.translation = Y.create()), "rotation" !== a || n.rotation || (n.rotation = ot.create()), "scale" !== a || n.scale || (n.scale = Y.fromValues(1, 1, 1))
        }
        t.push({
          node: e.target.node,
          sampler: r,
          path: a
        })
      })
    }), p.textures && p.textures.forEach(t => {
      const n = {};
      if (f.push(n), null != t.sampler) {
        const e = p.samplers[t.sampler];
        e.magFilter && (n.magFilter = cu[e.magFilter]), e.minFilter && (n.minFilter = cu[e.minFilter]), e.wrapS && (n.wrapS = uu[e.wrapS]), e.wrapT && (n.wrapT = uu[e.wrapT])
      }
      if (null != t.source) {
        const i = p.images[t.source];
        if (i.uri) i.uri.match(/data:image/) ? n.url = i.uri : n.url = e + i.uri;
        else {
          const e = p.bufferViews[i.bufferView];
          let t = a[e.buffer];
          if (t.buffer) {
            const n = t.byteOffset + (e.byteOffset || 0);
            t = new DataView(t.buffer, n, e.byteLength)
          } else t = new DataView(t, e.byteOffset || 0, e.byteLength);
          n.url = new Blob([t], {
            type: i.mimeType
          })
        }
      }
    }), n(null, {
      nodes: c,
      scenes: p.scenes,
      scene: p.scenes[p.scene || 0],
      meshes: l,
      animations: d,
      textures: f,
      materials: p.materials,
      lights: _
    })
  }
  const b = [];

  function T(e) {
    const t = ou[e.componentType],
      n = au[e.componentType],
      i = su[e.type] || 1,
      o = p.bufferViews[e.bufferView],
      r = o && o.byteStride || 0,
      s = o && a[o.buffer],
      l = e.byteOffset || 0,
      u = o && o.byteOffset || 0;
    let c = l + u;
    const {
      count: d
    } = e;
    let f, h = !1,
      m = b[e.bufferView];
    return r ? (r !== n * i && (h = !0, c = u), f = d * (r / n)) : f = d * i, h && m ? m : (s && (m = s.buffer ? new t(s.buffer, s.byteOffset + c, f) : new t(s, c, f)), h && (b[e.bufferView] = m), m)
  }

  function x() {
    p.accessors.forEach(e => {
      const t = p.bufferViews[e.bufferView],
        n = T(e),
        i = t && t.byteStride || 0,
        o = au[e.componentType],
        a = su[e.type] || 1,
        r = i === o * a ? 0 : e.byteOffset || 0;
      if (e.sparse) {
        const {
          sparse: t
        } = e;
        t.indices.count = t.count, t.values.componentType = e.componentType, t.values.count = t.count * a;
        const i = T(t.indices),
          o = T(t.values);
        for (let e = 0; e < t.count; e++) {
          const t = i[e] * a,
            r = e * a;
          for (let e = 0; e < a; e++) n[t + e] = o[r + e]
        }
      }
      s.push({
        buffer: n,
        byteOffset: r,
        offset: (e.byteOffset || 0) + (t && t.byteOffset || 0),
        count: e.count,
        stride: i,
        type: e.componentType,
        size: a,
        min: e.min,
        max: e.max
      })
    }), p.meshes.forEach(e => {
      e.primitives.forEach(e => {
        const t = e.extensions && e.extensions.KHR_draco_mesh_compression;
        if (t) {
          const n = new Worker(hu),
            i = p.bufferViews[t.bufferView],
            o = new Int8Array(a[i.buffer], i.byteOffset, i.byteLength);
          n.onmessage = function (i) {
            const a = i.data;
            "init" === a ? n.postMessage({
              type: "decode",
              encodedData: o,
              attributes: t.attributes,
              mode: null == e.mode ? "TRIANGLES" : ru[e.mode]
            }, [o.buffer]) : (v++, a.error ? Ui(a.error) : (null != e.indices && (s[e.indices].buffer = a.indices), Object.keys(a.datas).forEach(t => {
              const n = e.attributes[t];
              s[n].buffer = a.datas[t]
            })), v === h.length && g())
          }, h.push(n), n.postMessage({
            type: "init",
            path: nu.DRACO_DECODER_PATH
          })
        }
      })
    }), 0 === h.length && g()
  }

  function S(e, t) {
    a[t] = e, ++r === m && x()
  }
  if (i) {
    const e = new Int32Array(t, o, 3),
      i = e[2];
    let r, s = o + 12;
    if (1179937895 !== e[0]) return void(n && n("Invalid magic number in GLB header"));
    if (2 !== e[1]) return void(n && n(`Unsupported glTF version: ${e[1]}`));
    if (1313821514 !== (r = new Int32Array(t, s, 2))[1]) return void(n && n("First chunk should be JSON"));
    for (p = new DataView(t, s + 8, r[0]), p = JSON.parse(new TextDecoder("utf-8").decode(p)), s += 8 + r[0]; s < i;) 5130562 === (r = new Int32Array(t, s, 2))[1] && (a[0] = new DataView(t, s + 8, r[0])), s += 8 + r[0];
    x()
  } else m = (p = t).buffers.length, p.buffers.forEach((t, i) => {
    t.uri && (0 === t.uri.indexOf("data:") ? S(function (e) {
      const t = e.indexOf(","),
        n = atob(e.substr(t + 1)),
        i = n.length,
        o = new Uint8Array(i);
      for (let e = 0; e < i; e++) o[e] = n.charCodeAt(e);
      return o.buffer
    }(t.uri), i) : fu(e + t.uri, "arraybuffer", (e, t) => {
      e ? n && n(e) : S(t, i)
    }))
  })
};
const pu = /\s+/;
var mu = {
  parse: function (e, t, n) {
    const i = e + (e.endsWith("/") ? "" : "/");
    return Promise.all([Ki(`${i+t}.obj`), Ki(`${i+t}.mtl`)]).then(e => (function (e = "", t, n) {
      if (!t) return null;
      let i = e;
      i.endsWith("/") || (i += "/"), i += i.endsWith("/") ? "" : "/";
      const o = {
          vertices: [],
          normals: [],
          uvs: [],
          indices: [],
          index: 0,
          parts: []
        },
        a = {},
        r = new Map,
        s = [],
        l = [],
        u = [],
        c = {};
      let d, f, h;

      function p(e) {
        let t = r.get(e);
        if (null != t) o.indices.push(t);
        else {
          t = o.index, r.set(e, t), o.indices.push(t), o.index += 1;
          const n = e.split("/");
          let i = 3 * (parseInt(n[0], 10) - 1);
          null == s[i + 2] && Ui("vertices overflow:", i, s.length), o.vertices.push(s[i], s[i + 1], s[i + 2]), n[1] && (i = 2 * (parseInt(n[1], 10) - 1), null == l[i + 1] && Ui("uvs overflow", i, l.length), o.uvs.push(l[i], l[i + 1])), n[2] && (i = 3 * (parseInt(n[2], 10) - 1), null == u[i + 2] && Ui("normals overflow", i, u.length), o.normals.push(u[i], u[i + 1], u[i + 2]))
        }
        return h.count++, t
      }
      return a.default = new cs, n && n.trim().split("\n").forEach(e => {
        const t = e.trim();
        if (!t || t.startsWith("#")) return;
        const n = t.split(pu);
        switch (n.shift()) {
          case "newmtl":
            f = new cs, a[n[0]] = f;
            break;
          case "Ka":
            f.ambientColor = Y.fromValues(+n[0], +n[1], +n[2], null == n[3] ? 1 : +n[3]);
            break;
          case "Kd":
            f.diffuseColor = Pe.fromValues(+n[0], +n[1], +n[2], null == n[3] ? 1 : +n[3]);
            break;
          case "Ks":
            f.specularColor = Y.fromValues(+n[0], +n[1], +n[2]);
            break;
          case "Ns":
            f.shininess = +n[0];
            break;
          case "d":
            f.transparency = +n[0], f.transparent = 1 !== f.transparency;
            break;
          case "map_Kd":
            f.diffuseImage = i + n[n.length - 1];
            break;
          case "map_Ka":
            f.ambientImage = i + n[n.length - 1];
            break;
          case "map_Ks":
            f.specularImage = i + n[n.length - 1]
        }
      }), t.trim().split("\n").forEach(e => {
        const t = e.trim();
        if (!t || "#" === t.charAt(0)) return;
        const n = t.split(pu);
        switch (n.shift()) {
          case "v":
            s.push(parseFloat(n[0]), parseFloat(n[1]), parseFloat(n[2]));
            break;
          case "vn":
            u.push(parseFloat(n[0]), parseFloat(n[1]), parseFloat(n[2]));
            break;
          case "vt":
            l.push(parseFloat(n[0]), parseFloat(n[1]));
            break;
          case "usemtl": {
            d = a[n[0]] ? n[0] : "default", f = a[d];
            const e = h ? h.offset + h.count : 0,
              t = c[d];
            t ? t.counts.push(h = {
              offset: e,
              count: 0
            }) : o.parts.push(c[d] = {
              counts: [h = {
                offset: e,
                count: 0
              }],
              name: d,
              material: f
            });
            break
          }
          case "f":
            for (let e = 1, t = n.length - 1; e < t; e++) p(n[0]), p(n[e]), p(n[e + 1])
        }
      }), {
        buffers: {
          position: new Float32Array(o.vertices),
          normal: o.normals.length ? new Float32Array(o.normals) : null,
          uv: o.uvs.length ? new Float32Array(o.uvs) : null,
          index: o.indices
        },
        parts: o.parts
      }
    })(i, e[0], e[1]))
  }
};
class _u {
  constructor(e) {
    this.cache = new WeakMap, this.trigger = new $o, this.gl = e
  }
  get(e, t = !1) {
    if (!e) return null;
    if (e instanceof ca) return e;
    const {
      cache: n
    } = this;
    let i = n.get(e);
    return i || (e.format || !0 === t && (e.format = "SRGB8_ALPHA8"), i = _u.createTexture(e), n.set(e, i)), i
  }
  static createTexture(e) {
    const {
      url: t
    } = e;
    if ("string" == typeof t) {
      if (t.endsWith(".dds")) return new Br(e);
      if (t.endsWith(".hdr")) return new Zr(e);
      if (t.endsWith(".basis")) return new br(e)
    }
    return e.width && e.height ? new ca(e) : new Kr(e)
  }
}
class vu {
  constructor(e) {
    this.enableCullFace = !0, this.enableDepthWrite = !0, this.enableDepthTest = !0, this.blend = !1, this._gl = e
  }
  setBlend(e) {
    const t = this._gl;
    this.blend !== e && (e ? t.enable(t.BLEND) : t.disable(t.BLEND), this.blend = e)
  }
  setDefaultBlendMode() {
    const e = this._gl;
    this.setBlendMode(e.FUNC_ADD, e.FUNC_ADD, e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)
  }
  setBlendMode(e, t, n, i, o, a) {
    const r = this._gl;
    this.blendEquationColor === e && this.blendEquationAlpha === t && this.blendFuncSrcColor === n && this.blendFuncDstColor === i && this.blendFuncSrcAlpha === o && this.blendFuncDstAlpha === a || (r.blendEquationSeparate(e, t), r.blendFuncSeparate(n, i, o, a), this.blendEquationColor = e, this.blendEquationAlpha = t, this.blendFuncSrcColor = n, this.blendFuncDstColor = i, this.blendFuncSrcAlpha = o, this.blendFuncDstAlpha = a)
  }
  setCullFace(e) {
    const t = this._gl;
    this.enableCullFace !== e && (e ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE), this.enableCullFace = e)
  }
  setDepthMask(e) {
    const t = this._gl;
    this.enableDepthWrite !== e && (e ? t.depthMask(!0) : t.depthMask(!1), this.enableDepthWrite = e)
  }
  setDepthTest(e) {
    const t = this._gl;
    this.enableDepthTest !== e && (e ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST), this.enableDepthTest = e)
  }
  setMaterialState(e) {
    this.blend && this.setBlendMode(e.blendEquationColor, e.blendEquationAlpha, e.blendFuncSrcColor, e.blendFuncDstColor, e.blendFuncSrcAlpha, e.blendFuncDstAlpha), this.setCullFace(!e.doubleSided), this.setDepthMask(e.depthWrite), this.setStencilTest(e.stencilTest, e.stencilFunc, e.stencilRef, e.stencilOp)
  }
  setStencilTest(e, t, n, i) {
    const o = this._gl;
    this.stencilTest !== e ? (e ? (o.enable(o.STENCIL_TEST), this.setStencilFuncAndRef(t, n), this.setStencilOp(i)) : o.disable(o.STENCIL_TEST), this.stencilTest = e) : this.stencilTest && (this.setStencilFuncAndRef(t, n), this.setStencilOp(i))
  }
  setStencilOp(e) {
    const t = this._gl;
    if (this.stencilOp !== e) {
      let n = ["KEEP", "KEEP", "KEEP"];
      "string" == typeof e ? n = [e, e, e] : Array.isArray(e) && (n = e), t.stencilOp(t[n[0]], t[n[1]], t[n[2]]), this.stencilOp = e
    }
  }
  setStencilFuncAndRef(e, t) {
    const n = this._gl;
    this.stencilRef === t && this.stencilFunc === e || (n.stencilFunc(n[e], t, 255), this.stencilFunc = e, this.stencilRef = t)
  }
}
class gu extends $o {
  constructor(e) {
    super();
    this._scene = e, this._gl = e._gl
  }
  pass(e, t) {}
  dispose() {}
  getOutputTexture() {
    return null
  }
}
let bu = !1;
class Tu extends gu {
  constructor(e) {
    var t;
    t = Tu.prototype, bu || (bu = !0, no(t, [{
      name: "outlineColor"
    }, {
      name: "outlineWidth",
      value: 2
    }])), super(e);
    this._outlineColor = [1, .6, .2], this._programOutline = dr(Aa, Ca), this._programBlend = dr(Ra, La), this._width = e._canvas.width, this._height = e._canvas.height, this._resolution = Lt.fromValues(1 / this._width, 1 / this._height), this._framebufferOutline = new fa({
      width: this._width,
      height: this._height
    })
  }
  setSize(e, t) {
    this._width === e && this._height === t || (this._width = e, this._height = t, Lt.set(this._resolution, 1 / this._width, 1 / this._height), this._framebufferOutline.setSize(e, t))
  }
  pass(e, t) {
    const n = this,
      i = n._gl,
      {
        quadVao: o
      } = i.cache,
      a = n._scene;
    n._framebufferOutline.bind(i), n._programOutline.use(i), n._programOutline.bindUniform("u_projectViewMatrix", a.camera.projectViewMatrix), a.outlines.forEach(e => {
      if (e.visible)
        if (n._programOutline.bindUniforms({
            u_modelMatrix: e.worldMatrix
          }), e.mesh) e.mesh.primitives.forEach(e => {
          e.vao.draw(i)
        });
        else {
          const {
            vao: t
          } = e;
          t && t.draw(i)
        }
    }), n._framebufferOutline.unbind(), i.bindFramebuffer(i.FRAMEBUFFER, a._renderer._renderFramebuffer), n._programBlend.use(i), n._programBlend.bindUniforms({
      u_sampler: 0,
      u_resolution: n._resolution,
      u_outlineColor: n._outlineColor,
      u_outlineWidth: n._outlineWidth
    }), n._framebufferOutline.bindTexture(0), o.draw(i)
  }
  getOutputTexture() {
    return null
  }
}
let xu = !1;
class Su extends gu {
  constructor(e) {
    var t;
    t = Su.prototype, xu || (xu = !0, no(t, [{
      name: "enabled",
      value: !1,
      callback(e, t) {
        this._scene._rebuildProgram = !0
      }
    }, {
      name: "threshold",
      value: .7
    }, {
      name: "strength",
      value: .3
    }, {
      name: "radius",
      value: .4
    }])), super(e);
    const n = this;
    n._inited = !1, n._hDirection = Lt.fromValues(1, 0), n._vDirection = Lt.fromValues(0, 1), n._width = n._scene._canvas.width, n._height = n._scene._canvas.height, n._mipMapCount = 5, n._thresholdProgram = dr(Ba, Xa), n._bloomProgram = dr(Ha, Ja), n._fbos = [], n._blurPrograms = [];
    let i = Math.round(n._width / 2),
      o = Math.round(n._height / 2);
    n._thresholdFramebuffer = new fa({
      minFilter: "LINEAR",
      magFilter: "LINEAR",
      width: i,
      height: o,
      format: "RGBA16F",
      dataType: "FLOAT"
    });
    for (let e = 0; e < n._mipMapCount; e++) n._fbos.push([new fa({
      minFilter: "LINEAR",
      magFilter: "LINEAR",
      width: i,
      height: o,
      format: "RGBA16F",
      dataType: "FLOAT"
    }), new fa({
      minFilter: "LINEAR",
      magFilter: "LINEAR",
      width: i,
      height: o,
      format: "RGBA16F",
      dataType: "FLOAT"
    })]), n._blurPrograms.push(dr(Va, `#define KERNEL_RADIUS ${2*(e+1)+1}\n${ja}`)), i = Math.round(i / 2), o = Math.round(o / 2)
  }
  _init() {
    const e = this,
      t = e._gl;
    e._inited = !0, e._thresholdProgram.use(t), e._thresholdProgram.bindUniform("u_sampler", 0), e._bloomProgram.use(t), e._bloomProgram.bindUniform("u_samplerBlur1", 0), e._bloomProgram.bindUniform("u_samplerBlur2", 1), e._bloomProgram.bindUniform("u_samplerBlur3", 2), e._bloomProgram.bindUniform("u_samplerBlur4", 3), e._bloomProgram.bindUniform("u_samplerBlur5", 4);
    let n = Math.round(e._width / 2),
      i = Math.round(e._height / 2);
    for (let o = 0; o < e._mipMapCount; o++) e._blurPrograms[o].use(t), e._blurPrograms[o].bindUniform("u_resolution", Lt.fromValues(1 / n, 1 / i)), e._blurPrograms[o].bindUniform("u_sampler", 0), n = Math.round(n / 2), i = Math.round(i / 2)
  }
  pass(e, t) {
    const n = this,
      i = n._gl,
      o = n._scene,
      {
        state: a
      } = o._renderer,
      {
        quadVao: r
      } = i.cache;
    n._inited || n._init(), n._thresholdFramebuffer.bind(i), n._thresholdProgram.use(i), n._thresholdProgram.bindUniform("u_threshold", n._threshold ** 2.2), t.bindTexture(0), r.draw(i);
    let s = n._thresholdFramebuffer;
    for (let e = 0; e < n._mipMapCount; e++) n._blurPrograms[e].use(i), n._fbos[e][1].bind(i), n._blurPrograms[e].bindUniform("u_direction", n._hDirection), s.bindTexture(0), r.draw(i), n._fbos[e][0].bind(i), n._blurPrograms[e].bindUniform("u_direction", n._vDirection), n._fbos[e][1].bindTexture(0), r.draw(i), [s] = n._fbos[e];
    t.bind(i, 0, !1), a.setBlend(!0), a.setBlendMode(i.FUNC_ADD, i.FUNC_ADD, i.SRC_ALPHA, i.ONE, i.SRC_ALPHA, i.ONE), a.setDepthMask(!1), a.setDepthTest(!1), n._bloomProgram.use(i), n._bloomProgram.bindUniform("u_strength", n._strength), n._bloomProgram.bindUniform("u_radius", n._radius), n._fbos[0][0].bindTexture(0), n._fbos[1][0].bindTexture(1), n._fbos[2][0].bindTexture(2), n._fbos[3][0].bindTexture(3), n._fbos[4][0].bindTexture(4), r.draw(i), a.setBlend(!1), a.setDepthMask(!0), a.setDepthTest(!0)
  }
  setSize(e, t) {
    const n = this;
    if (n._width === e && n._height === t) return;
    n._width = e, n._height = t;
    let i = Math.round(n._width / 2),
      o = Math.round(n._height / 2);
    n._thresholdFramebuffer.setSize(i, o);
    for (let e = 0; e < n._mipMapCount; e++) n._fbos[e][0].setSize(i, o), n._fbos[e][1].setSize(i, o), n._blurPrograms[e].use(n._gl), n._blurPrograms[e].bindUniform("u_resolution", Lt.fromValues(1 / i, 1 / o)), i = Math.round(i / 2), o = Math.round(o / 2)
  }
  getOutputTexture() {
    return null
  }
}
let wu = !1;
class yu extends gu {
  constructor(e) {
    var t;
    t = yu.prototype, wu || (wu = !0, no(t, [{
      name: "enabled",
      value: !0
    }, {
      name: "glowColor"
    }, {
      name: "blurCount",
      value: 5
    }, {
      name: "blurScale",
      value: 1
    }, {
      name: "blurSize",
      value: 512,
      callback(e, t) {
        this._colorFramebuffer.setSize(t, t), this._fbos[0].setSize(t, t), this._fbos[1].setSize(t, t)
      }
    }])), super(e);
    const n = this;
    n._glowColor = [0, 148 / 255, 200 / 255], n._hDirection = Lt.create(), n._vDirection = Lt.create(), n._resolution = Lt.create(), n._colorProgram = dr(za, Fa), n._blurProgram = dr(Ua, ka), n._glowProgram = dr(Ia, Da), n._colorFramebuffer = new fa({
      width: n._blurSize,
      height: n._blurSize,
      depth: !0,
      stencil: !0,
      minFilter: "LINEAR",
      magFilter: "LINEAR"
    }), n._fbos = [];
    for (let e = 0; e < 2; e += 1) n._fbos.push(new fa({
      width: n._blurSize,
      height: n._blurSize,
      depth: !1,
      stencil: !1,
      minFilter: "LINEAR",
      magFilter: "LINEAR"
    }))
  }
  pass(e, t) {
    const n = this,
      i = n._gl,
      {
        quadVao: o
      } = i.cache,
      a = n._scene;

    function r(e) {
      i.colorMask(!1, !1, !1, !1), a._renderer._allList.forEach(e => {
        e.data.glow || e.data instanceof tl || (n._colorProgram.bindUniforms({
          u_modelMatrix: e.data.worldMatrix
        }), a._renderer.state.setCullFace(!e.material.doubleSided), e.vao.draw(i))
      }), a._renderer.state.setStencilTest(!0, "ALWAYS", 1, ["KEEP", "KEEP", "REPLACE"]), e && i.colorMask(!0, !0, !0, !0), a._renderer._allList.forEach(e => {
        e.data.glow && (n._colorProgram.bindUniforms({
          u_modelMatrix: e.data.worldMatrix
        }), a._renderer.state.setCullFace(!e.material.doubleSided), e.vao.draw(i))
      })
    }
    n._colorFramebuffer.bind(i), n._colorProgram.use(i), n._colorProgram.bindUniforms({
      u_glowColor: n._glowColor,
      u_projectViewMatrix: a.camera.projectViewMatrix
    }), r(!0), a._renderer.state.setStencilTest(!1);
    let s = !0,
      l = !0;
    Lt.set(n._hDirection, n._blurScale, 0), Lt.set(n._vDirection, 0, n._blurScale), Lt.set(n._resolution, 1 / n._blurSize, 1 / n._blurSize), i.canvas.width >= i.canvas.height ? n._vDirection[1] *= i.canvas.width / i.canvas.height : n._hDirection[0] *= i.canvas.height / i.canvas.width, n._blurProgram.use(i), n._blurProgram.bindUniforms({
      u_resolution: n._resolution,
      u_sampler: 0
    });
    const u = n._enabled ? 2 * n._blurCount : 0;
    0 === u && n._fbos[0].bind(i);
    for (let e = 0; e < u; e++) n._fbos[s ? 1 : 0].bind(i), n._blurProgram.bindUniform("u_direction", s ? n._hDirection : n._vDirection), l ? n._colorFramebuffer.bindTexture(0) : n._fbos[s ? 0 : 1].bindTexture(0), o.draw(i), s = !s, l && (l = !1);
    t.bind(i, 0, !1), i.clear(i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT), n._colorProgram.use(i), r(!1), i.clear(i.DEPTH_BUFFER_BIT), a._renderer.state.setStencilTest(!0, "EQUAL", 0, "KEEP"), i.colorMask(!0, !0, !0, !0), a._renderer.state.setBlend(!0), a._renderer.state.setBlendMode(i.FUNC_ADD, i.FUNC_ADD, i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA), n._glowProgram.use(i), n._glowProgram.bindUniforms({
      u_sampler: 0
    }), n._fbos[0].bindTexture(0), o.draw(i), a._renderer.state.setBlend(!1), a._renderer.state.setStencilTest(!1)
  }
  getOutputTexture() {
    return null
  }
}
const Pu = "data:image/png;base64,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";
let Mu = !1;
class Ou extends gu {
  constructor(e) {
    var t;
    t = Ou.prototype, Mu || (Mu = !0, no(t, [{
      name: "occluderBias",
      value: .05
    }, {
      name: "samplingRadius",
      value: 20
    }, {
      name: "attenuation"
    }])), super(e);
    this._attenuation = [1, 5], this._deferProgram = dr(Za, qa), this._program = dr(Ga, Wa), this._blendProgram = dr(Ka, Ya), this._deferFramebuffer = new fa({
      width: e._canvas.width,
      height: e._canvas.height,
      depth: !0,
      stencil: !1,
      format: "RGBA16F",
      dataType: "FLOAT",
      colorCount: 2
    }), this._ssaoFramebuffer = new fa({
      width: e._canvas.width,
      height: e._canvas.height,
      depth: !1,
      stencil: !1
    }), this._normalMapTexture = new Kr({
      url: Pu,
      anisotropy: 1,
      mipmap: !1,
      minFilter: "LINEAR",
      magFilter: "LINEAR"
    })
  }
  setSize(e, t) {
    this._width === e && this._height === t || (this._width = e, this._height = t, this._deferFramebuffer.setSize(e, t), this._ssaoFramebuffer.setSize(e, t))
  }
  pass(e, t) {
    const n = this,
      i = n._gl,
      o = n._scene,
      {
        quadVao: a
      } = i.cache,
      {
        camera: r
      } = n._scene,
      {
        projectMatrix: s
      } = r;
    n._deferFramebuffer.bind(i), n._deferProgram.use(i), n._deferProgram.bindUniforms({
      u_projectMatrix: s,
      u_linearDepth: r.far - r.near
    }), o._renderer._allList.forEach(e => {
      e.data._viewNormalMatrix || (e.data._viewNormalMatrix = T.create(), e.data._viewModelMatrix = A.create()), A.multiply(e.data._viewModelMatrix, r.viewMatrix, e.data.worldMatrix), T.normalFromMat4(e.data._viewNormalMatrix, e.data._viewModelMatrix), n._deferProgram.bindUniforms({
        u_viewModelMatrix: e.data._viewModelMatrix,
        u_viewNormalMatrix: e.data._viewNormalMatrix
      }), o._renderer.state.setCullFace(!e.material.doubleSided), e.vao.draw(i)
    }), n._ssaoFramebuffer.bind(i), n._program.use(i), n._program.bindUniforms({
      u_samplerPosition: 0,
      u_samplerNormal: 1,
      u_samplerNormalMap: 2,
      u_windowSize: [1 / i.canvas.width, 1 / i.canvas.height],
      u_occluderBias: n._occluderBias,
      u_samplingRadius: n._samplingRadius,
      u_attenuation: n._attenuation
    }), n._deferFramebuffer.bindTexture(0), n._deferFramebuffer.bindTexture(1, 1), n._normalMapTexture.bind(i, 2), a.draw(i), t.bind(i), n._blendProgram.use(i), n._blendProgram.bindUniforms({
      u_samplerScene: 0,
      u_samplerSSAO: 1
    }), e.bindTexture(0), n._ssaoFramebuffer.bindTexture(1), a.draw(i)
  }
  getOutputTexture() {
    return null
  }
}
const Nu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA4LTI0VDEyOjA1OjMxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA4LTI0VDEyOjA1OjMxKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOC0yNFQxMjowNTozMSswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplMjZjNzUwZC1iOTIzLTQ0NDMtYWIzMy0yZGYzMjBjMTA1MDMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5ZjdiNjdhMS1iNTU5LTJkNGMtYTUz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";
let Eu = !1;
class Au extends gu {
  constructor(e) {
    var t;
    t = Au.prototype, Eu || (Eu = !0, no(t, [{
      name: "enabled",
      value: !1,
      callback(e, t) {
        this._scene._rebuildProgram = !0
      }
    }, {
      name: "enabledDepth",
      value: !1,
      callback(e, t) {
        this._scene._rebuildProgram = !0
      }
    }, {
      name: "depthImageUrl",
      value: ""
    }, {
      name: "focus",
      value: 30
    }, {
      name: "aperture",
      value: 1
    }, {
      name: "maxblur",
      value: 1
    }])), super(e);
    this._depthProgram = dr("\n      precision highp float;\n      layout(location = 0) in vec3 a_position;\n      layout(location = 2) in vec2 a_uv;\n\n      out vec2 v_uv;\n\n      void main () {\n        v_uv = a_uv;\n        gl_Position = vec4(a_position, 1.0);\n      }\n    ", "\n      precision highp float;\n      uniform sampler2D u_sampler;\n      uniform sampler2D u_depth;\n      uniform float u_maxblur;\n      uniform float u_aperture;\n      uniform float u_near;\n      uniform float u_far;\n      uniform float u_focus;\n      uniform float u_aspect;\n      uniform bool u_enabledDepth;\n\n      in vec2 v_uv;\n      out vec4 fragColor;\n\n      float getDepth(const in vec2 uv){\n        return texture(u_depth,uv).r;\n      }\n\n      float perspectiveDepthToViewZ(const in float depth, const in float near, const in float far) {\n        return (near * far) / ((far - near) * depth - far);\n      }\n\n      float getViewZ (const in float depth) {\n        return perspectiveDepthToViewZ(depth, u_near, u_far);\n      }\n\n      void main(){\n        vec2 dofblur;\n        vec2 aspectcorrect = vec2(1.0, u_aspect);\n        float viewZ = getViewZ(getDepth(v_uv));\n        float factor = (u_focus + viewZ);\n        if (u_enabledDepth) {\n          dofblur = vec2 (clamp(factor * u_aperture * 0.000002, -u_maxblur, u_maxblur));\n        } else {\n          dofblur = vec2 (clamp(texture(u_depth, v_uv).a * u_aperture * 0.01, -u_maxblur, u_maxblur));\n        }\n        vec2 dofblur9 = dofblur * 0.9;\n        vec2 dofblur7 = dofblur * 0.7;\n        vec2 dofblur4 = dofblur * 0.4;\n        vec4 col = vec4(0.0);\n        col += texture(u_sampler,v_uv.xy);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.0, 0.4) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.15, 0.37) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.29, 0.29) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.37, 0.15) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.40, 0.0) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.37, -0.15) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.29, -0.29) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.15, -0.37) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.0, -0.4) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.15, 0.37) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.29, 0.29) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.37, 0.15) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.4, 0.0) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.37, -0.15) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.29, -0.29) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.15, -0.37) * aspectcorrect) * dofblur);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.15, 0.37) * aspectcorrect) * dofblur9);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.37, 0.15) * aspectcorrect) * dofblur9);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.37, -0.15) * aspectcorrect) * dofblur9);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.15, -0.37) * aspectcorrect) * dofblur9);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.15, 0.37) * aspectcorrect) * dofblur9);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.37, 0.15) * aspectcorrect) * dofblur9);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.37, -0.15) * aspectcorrect) * dofblur9);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.15, -0.37) * aspectcorrect) * dofblur9);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.29, 0.29) * aspectcorrect) * dofblur7);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.40, 0.0) * aspectcorrect) * dofblur7);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.29, -0.29) * aspectcorrect) * dofblur7);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.0, -0.4) * aspectcorrect) * dofblur7);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.29, 0.29) * aspectcorrect) * dofblur7);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.4, 0.0) * aspectcorrect) * dofblur7);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.29, -0.29) * aspectcorrect) * dofblur7);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.0, 0.4) * aspectcorrect) * dofblur7);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.29, 0.29) * aspectcorrect) * dofblur4);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.4, 0.0) * aspectcorrect) * dofblur4);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.29, -0.29) * aspectcorrect) * dofblur4);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.0, -0.4) * aspectcorrect) * dofblur4);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.29, 0.29) * aspectcorrect) * dofblur4);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.4, 0.0) * aspectcorrect) * dofblur4);\n        col += texture(u_sampler, v_uv.xy + (vec2(-0.29, -0.29) * aspectcorrect) * dofblur4);\n        col += texture(u_sampler, v_uv.xy + (vec2(0.0, 0.4) * aspectcorrect) * dofblur4);\n        fragColor = col / 41.0;\n        fragColor.a = 1.0;\n      }\n    ")
  }
  _init() {
    const e = this._gl;
    this._depthProgram.use(e), this._depthProgram.bindUniforms({
      u_sampler: 0,
      u_depth: 1
    })
  }
  pass(e, t) {
    const n = this,
      i = n._gl,
      o = n._scene,
      {
        quadVao: a
      } = i.cache;
    n._inited || n._init(), n._normalMapTexture || (n._normalMapTexture = new Kr({
      url: n.depthImageUrl ? n.depthImageUrl : Nu,
      minFilter: "LINEAR",
      magFilter: "LINEAR",
      wrapS: "REPEAT",
      wrapT: "REPEAT",
      mipmap: !1
    })), t.bind(i), n._depthProgram.use(i), n._depthProgram.bindUniforms({
      u_sampler: 0,
      u_depth: 1,
      u_focus: n._focus,
      u_maxblur: n._maxblur,
      u_aperture: n._aperture,
      u_near: o._camera.near,
      u_far: o._camera.far,
      u_aspect: o._camera.aspect,
      u_enabledDepth: n.enabledDepth
    }), e.bindTexture(0), n.enabledDepth ? e.bindDepthTexture(1) : n._normalMapTexture.bind(i, 1), a.draw(i)
  }
}
class Cu {
  constructor(e, t = {}) {
    const n = this,
      i = e._canvas,
      o = e._camera;
    n._scene = e, n._canvas = i, n._camera = o, n._opaqueList = [], n._transparentList = [], n._allList = [], n._dirty = !0, n._lightDirty = !1, n._shadowLightMap = {
      DIRECTION: 0,
      POINT: 0,
      SPOT: 0
    }, n._shadowLightCount = 0, n._programs = {}, n._uniforms = {}, n._materialUniforms = {}, n._dataUniforms = {
      u_color: Pe.fromValues(0, 0, 0, 0)
    }, n._pickingPrograms = {}, n._pickingUniforms = {}, n._shadowMapPrograms = {}, n._shadowMapUniforms = {}, n._viewport = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, this._useMultisample = !Gi(), n._lightMap = {
      DIRECTION: [],
      POINT: [],
      SPOT: []
    }, n._lightDefines = {
      DIRECTION: new Qr("DIRECTION_LIGHT_COUNT", 0),
      POINT: new Qr("POINT_LIGHT_COUNT", 0),
      SPOT: new Qr("SPOT_LIGHT_COUNT", 0)
    }, e.lights.on("all", n._handleLightChange, n), n._time = 0, n._frameTime = 0, n._lastTime = 0, n._resolution = Lt.create(), o.on("all", () => {
      if (this._lightDirty = !0, e._needSort = !0, this.redraw(), Ei.__l.twm(n), this._xyz) {
        const e = this._xyz.innerHTML,
          t = document.getElementById("licenseDiv");
        t ? t.innerHTML = e : fo(document.body, e)
      }
    });
    const a = i.getContext("webgl2", {
      alpha: t.alpha || !1,
      depth: null == t.depth || t.depth,
      premultipliedAlpha: t.premultipliedAlpha || !1,
      preserveDrawingBuffer: !0,
      antialias: null == t.antialias || t.antialias,
      stencil: t.stencil || !1
    });
    if (!("undefined" != typeof WebGL2RenderingContext && a instanceof WebGL2RenderingContext)) return void lo(document.body);
    n._gl = a, e._gl = a, this.state = new vu(a);
    const r = a.getExtension("EXT_texture_filter_anisotropic");
    r && (a._anisotropicExt = r, a._max_anisotropy = a.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT)), a.getExtension("EXT_color_buffer_float"), a.getExtension("OES_texture_float_linear"), a._s3tc = a.getExtension("WEBGL_compressed_texture_s3tc");
    const s = a.getExtension("WEBGL_compressed_texture_s3tc_srgb");

    function l() {
      a.cache && a.cache.textures.trigger.off("load", n._handleImageLoaded, n), a.cache = {
        textures: new _u(a)
      }, a.cache.textures.trigger.on("load", n._handleImageLoaded, n), a.cache.quadVao = new Do({
        buffers: {
          position: new Float32Array([1, 1, 0, -1, 1, 0, -1, -1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0]),
          uv: new Float32Array([1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1])
        }
      }), a.cache.vaos = {}, a.enable(a.CULL_FACE), a.frontFace(a.CCW), a.depthMask(!0), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), n.state.setDefaultBlendMode(), n._outputProgram = dr(Ta, xa), n._outputProgram.use(a), n._outputProgram.bindUniforms({
        u_sampler: 0
      }), n._debugProgram = dr(Sa, wa), n._debugProgram.use(a), n._debugProgram.bindUniforms({
        u_sampler: 0
      }), n._renderPass = [], n._useMultisample ? (n._inFramebuffer = new fa({
        width: a.canvas.width,
        height: a.canvas.height,
        depth: !0,
        stencil: !0,
        format: "RGBA16F",
        dataType: "FLOAT"
      }), n._outFramebuffer = new fa({
        width: a.canvas.width,
        height: a.canvas.height,
        depth: !0,
        stencil: !0,
        format: "RGBA16F",
        dataType: "FLOAT"
      }), n._colorRenderbuffer = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, n._colorRenderbuffer), a.renderbufferStorageMultisample(a.RENDERBUFFER, 4, a.RGBA16F, a.canvas.width, a.canvas.height), n._depthRenderbuffer = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, n._depthRenderbuffer), a.renderbufferStorageMultisample(a.RENDERBUFFER, 4, a.DEPTH24_STENCIL8, a.canvas.width, a.canvas.height), a._renderFramebuffer = a.createFramebuffer(), n._renderFramebuffer = a._renderFramebuffer, a.bindFramebuffer(a.FRAMEBUFFER, n._renderFramebuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.RENDERBUFFER, n._colorRenderbuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, n._depthRenderbuffer), a.bindRenderbuffer(a.RENDERBUFFER, null), a.bindFramebuffer(a.FRAMEBUFFER, null), n._inFramebuffer._sharedFramebuffer = n._outFramebuffer, n._outFramebuffer._sharedFramebuffer = n._inFramebuffer) : (a._renderFramebuffer = null, n._renderFramebuffer = null), n._outlineEffect = new Tu(e), n._outlineEffect.on("all", e._handleChange, e), n._bloomEffect = new Su(e), n._bloomEffect.on("all", e._handleChange, e), n._glowEffect = new yu(e), n._glowEffect.on("all", e._handleChange, e), n._ssaoEffect = new Ou(e), n._ssaoEffect.on("all", e._handleChange, e), n._dofEffect = new Au(e), n._dofEffect.on("all", e._handleChange, e);
      const t = A.create(),
        r = A.create(),
        s = A.create(),
        l = n._camera.position;
      n.render = (u, c) => {
        e.axis.fixAllSize(o);
        const d = e._xrManager._xrSession,
          f = e._xrManager._xrRefSpaceOffset,
          h = n._uniforms;
        let p;
        if (n._time = u, c && d && f && (p = c.getViewerPose(f))) {
          e._xrManager.handleInputSource(c, p, f), n._preDraw(u);
          const {
            session: i
          } = c, o = i.renderState.baseLayer;
          a.bindFramebuffer(a.FRAMEBUFFER, o.framebuffer);
          const d = e._clearColor;
          a.clearColor(d[0], d[1], d[2], d[3]), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), p.views.forEach((e, i) => {
            const c = o.getViewport(e);
            a.viewport(c.x, c.y, c.width, c.height), A.copy(t, e.transform.inverse.matrix), A.copy(r, e.projectionMatrix), A.mul(s, r, t);
            const d = e.transform.position;
            Y.set(l, d.x, d.y, d.z), h.u_eyePosition = l, h.u_projectViewMatrix = s, h.u_viewMatrix = t, h.u_projectMatrix = r, i >= 1 && a.clear(a.DEPTH_BUFFER_BIT), n.draw(u)
          })
        }
        if (!1 !== e.onAnimationFrame(u)) {
          if (e._timePerFrame > 0 && !p) {
            if (n._frameTime += u - n._lastTime, n._lastTime = u, n._frameTime < e._timePerFrame) return;
            n._frameTime %= e._timePerFrame
          }
          if (n._dirty || p) {
            if (p || (n._preDraw(u), h.u_eyePosition = o.position, h.u_projectViewMatrix = o.projectViewMatrix, h.u_viewMatrix = o.viewMatrix, h.u_projectMatrix = o.projectMatrix), a.bindFramebuffer(a.FRAMEBUFFER, n._renderFramebuffer), n._setViewport(0, 0, i.width, i.height), n._useMultisample) {
              const t = [...e._clearColor];
              t[0] **= 2.2, t[1] **= 2.2, t[2] **= 2.2, a.clearBufferfv(a.COLOR, 0, t), a.clearBufferfi(a.DEPTH_STENCIL, 0, 1, 0)
            } else {
              const t = e._clearColor;
              a.clearColor(t[0], t[1], t[2], t[3]), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
            }
            n.draw(u), n._postDraw(), e.onAfterAnimationFrame()
          }
        }
      };
      const u = t => {
        n._aniamtionId = window.requestAnimationFrame(u), e._xrManager._xrSession || n.render(t, null)
      };
      n._aniamtionId = window.requestAnimationFrame(u)
    }
    a._s3tc && s && (a._s3tc.COMPRESSED_SRGB_S3TC_DXT1_EXT = s.COMPRESSED_SRGB_S3TC_DXT1_EXT, a._s3tc.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, a._s3tc.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, a._s3tc.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), a.initingTextures = {}, i.addEventListener("webglcontextlost", e => {
      Fi("webglcontextlost", e), e.preventDefault(), Object.keys(a.initingTextures).forEach(e => {
        const t = a.initingTextures[e];
        t.onload && (t.onload = null), t.onreadystatechange && (t.onreadystatechange = null), t.onmessage && (t.onmessage = null)
      }), a.initingTextures = {}, n._aniamtionId && window.cancelAnimationFrame(n._aniamtionId)
    }), i.addEventListener("webglcontextrestored", e => {
      Fi("webglcontextrestored", e), l()
    }), l()
  }
  redraw() {
    this._dirty = !0
  }
  _setViewport(e, t, n, i) {
    const o = this._viewport;
    o.x = e, o.y = t, o.width = n, o.height = i, this._gl._viewport = o, this._gl.viewport(e, t, n, i)
  }
  _preDraw(e) {
    const t = this,
      n = t._gl,
      i = t._scene,
      o = t._uniforms;
    this._lightDirty && this._resetLight(), this._scene.lights.forEach(e => {
      e.shadow && e._refreshShadowMapFramebuffer(this._scene)
    }), i._rebuildProgram && (t._programs = {}, i._rebuildProgram = !1, i._needSort = !0, i.datas.forEach(e => {
      e.mesh ? e.mesh.primitives.forEach(e => {
        e.material._dirty = !0
      }) : e.material && (e.material._dirty = !0)
    }), fs()._dirty = !0), this._sort(), t._dirty = !1, t._invalidatePicking = !0, i._enableAnimation && i._handleAnimation(e), o._nextSamplerId = 0, o.u_fogColor = i._fogColor, o.u_fogNear = i._fogNear, o.u_fogFar = i._fogFar, o.u_ambientLightColor = i._ambientColor, o.u_iblDiffuseIntensity = i._iblDiffuseIntensity, o.u_iblSpecularIntensity = i._iblSpecularIntensity, o.u_time = e / 1e3, o.u_resolution = t._resolution;
    let a = 0,
      r = 0;
    i.lights.forEach(e => {
      if (e.shadow) {
        const t = o._nextSamplerId++;
        e._shadowMapFramebuffer ? e._shadowMapFramebuffer.bindTexture(t) : e._depthTexture.bind(n, t), "DIRECTION" === e.TYPE && (o.u_directionShadowMapSampler = t), "POINT" === e.TYPE && (o[`u_pointShadowMapSampler_${a}`] = t, a++), "SPOT" === e.TYPE && (o[`u_spotShadowMapSampler_${r}`] = t, r++)
      }
    })
  }
  draw(e) {
    this._gl._program = null, this._gl._material = null, this._gl._vao = null, this._draw(), this._scene._particleSystem.draw(e)
  }
  _postDraw() {
    const e = this,
      t = e._gl,
      n = e._scene;
    if (n.outlines.size && e._outlineEffect.pass(), e._renderPass.forEach(e => {
        e.pass()
      }), e._useMultisample && (e._outFramebuffer.bind(t), t.bindFramebuffer(t.READ_FRAMEBUFFER, e._renderFramebuffer), t.blitFramebuffer(0, 0, t.canvas.width, t.canvas.height, 0, 0, t.canvas.width, t.canvas.height, t.COLOR_BUFFER_BIT, t.NEAREST), t.blitFramebuffer(0, 0, t.canvas.width, t.canvas.height, 0, 0, t.canvas.width, t.canvas.height, t.DEPTH_BUFFER_BIT, t.NEAREST)), n._enableSSAO && ([e._inFramebuffer, e._outFramebuffer] = [e._outFramebuffer, e._inFramebuffer], e._ssaoEffect.pass(e._inFramebuffer, e._outFramebuffer)), n.glows.size && e._glowEffect.pass(null, e._outFramebuffer), e._dofEffect.enabled && ([e._inFramebuffer, e._outFramebuffer] = [e._outFramebuffer, e._inFramebuffer], e._dofEffect.pass(e._inFramebuffer, e._outFramebuffer)), e._bloomEffect.enabled && e._bloomEffect.pass(null, e._outFramebuffer), e._useMultisample) {
      t.bindFramebuffer(t.FRAMEBUFFER, null);
      const i = e._viewport;
      t.viewport(i.x, i.y, i.width, i.height);
      const o = n._clearColor;
      t.clearColor(o[0], o[1], o[2], o[3]), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), e._outputProgram.use(t), e._outputProgram.bindUniform("u_exposure", n._exposure), e._outFramebuffer.bindTexture(0), t.cache.quadVao.draw(t)
    }
  }
  _draw() {
    this.state.setBlend(!1), this._opaqueList.forEach(e => {
      this._drawData(e)
    }), this._drawSkybox(), this.state.setBlend(!0), this._transparentList.forEach(e => {
      this._drawData(e)
    }), this.state.setBlend(!1), this.state.setDepthMask(!0)
  }
  _drawSkybox() {
    const {
      skyboxImage: e
    } = this._scene, t = this._gl;
    e && (this._skyboxVao || (this._skyboxVao = new Do({
      buffers: Vo(2)
    })), this._skyboxProgram || (this._skyboxProgram = dr(nr, ir), this._skyboxProgram.bindUniform("u_sampler", 0)), this.state.setCullFace(!1), this.state.setStencilTest(!1), this._skyboxProgram.use(t), this._skyboxProgram.bindUniform("u_viewMatrix", this._camera.viewMatrix), this._skyboxProgram.bindUniform("u_projectMatrix", this._camera.projectMatrix), t.cache.textures.get(e, !0).bind(t, 0), this._skyboxVao.draw(t))
  }
  _getOverrideMaterial(e) {
    return e.material
  }
  _drawData(e) {
    const {
      data: t,
      lod: n,
      vao: i
    } = e, o = this._getOverrideMaterial(e), a = this, r = a._gl, s = a._scene, l = a._camera, u = a._dataUniforms, c = a._uniforms, d = a._programs;
    if (a.state.setMaterialState(o), o.draw) o.draw(n, s, i);
    else {
      const e = o._key;
      let f = d[e];
      f || (f = function (e) {
        let t = `#define SHADER_NAME ${e.TYPE}_VERTEX\n`,
          n = `#define SHADER_NAME ${e.TYPE}_FRAGMENT\n`,
          i = "";
        return e._keys.forEach(e => {
          e.name ? i += `#define ${e.name} ${e.value}\n` : i += `#define ${e}\n`
        }), t += i, t += e.VERTEX_SHADER, n += i, dr(t, n += e.FRAGMENT_SHADER)
      }(o), d[e] = f), f.use(r) && (c.u_eyePosition = l.position, c.u_projectViewMatrix = l.projectViewMatrix, c.u_viewMatrix = l.viewMatrix, c.u_projectMatrix = l.projectMatrix, f.bindUniforms(c)), a._setDataUniform(u, t, n), o !== r._material && (a._materialUniforms._nextSamplerId = c._nextSamplerId, o._bindUniforms(a._materialUniforms, r, s), f.bindUniforms(a._materialUniforms)), f.bindUniforms(u), i.draw(r)
    }
  }
  _setDataUniform(e, t, n) {
    e.u_modelMatrix = t.worldMatrix, e.u_scale = t.scale, e.u_normalMatrix = t._normalMatrix, n._info && n._info.weights ? e.u_weights = n._info.weights : e.u_weights = null, n.skin ? (e.u_jointMatrix = n.skin.jointMatrix, e.u_jointNormalMatrix = n.skin.jointNormalMatrix) : (e.u_jointMatrix = null, e.u_jointNormalMatrix = null)
  }
  _drawPicking() {
    this._allList.forEach(e => {
      this._drawPickingData(e)
    })
  }
  _drawPickingData(e) {
    const {
      data: t,
      lod: n,
      vao: i,
      material: o
    } = e, a = this._gl, r = this._dataUniforms, s = this._pickingUniforms, l = this._pickingPrograms;
    this.state.setCullFace(!o.doubleSided);
    const u = o._shadowMapKey;
    let c = l[u];
    c || (c = function (e) {
      let t = `#define SHADER_NAME PICKING_${e.TYPE}_VERTEX\n`,
        n = `#define SHADER_NAME PICKING_${e.TYPE}_FRAGMENT\n`,
        i = "";
      return e._shadowMapKeys.forEach(e => {
        e.name ? i += `#define ${e.name} ${e.value}\n` : i += `#define ${e}\n`
      }), t += i, n += i, dr(t += Ma, n += Oa)
    }(o), l[u] = c), t instanceof tl && (s.u_viewMatrix = this._camera.viewMatrix, s.u_projectMatrix = this._camera.projectMatrix, s.u_modelMatrix = t.worldMatrix, s.u_vertical = t.material.vertical, s.u_scale = t.scale), c.use(a) && c.bindUniforms(s);
    const {
      id: d
    } = t, f = r.u_color;
    f[0] = (d >> 24 & 255) / 255, f[1] = (d >> 16 & 255) / 255, f[2] = (d >> 8 & 255) / 255, f[3] = (255 & d) / 255, this._setDataUniform(r, t, n), c.bindUniforms(r), i.draw(a)
  }
  _drawShadow() {
    this._allList.forEach(e => {
      e.material.castShadow && this._drawShadowData(e)
    })
  }
  _drawShadowData(e) {
    const {
      data: t,
      lod: n,
      vao: i,
      material: o
    } = e, a = this._gl, r = this._dataUniforms, s = this._shadowMapUniforms, l = this._shadowMapPrograms;
    this.state.setCullFace(!o.doubleSided);
    const u = o._shadowMapKey;
    let c = l[u];
    c || (c = function (e) {
      let t = `#define SHADER_NAME SHADOW_${e.TYPE}_VERTEX\n`,
        n = `#define SHADER_NAME SHADOW_${e.TYPE}_FRAGMENT\n`,
        i = "";
      return e._shadowMapKeys.forEach(e => {
        e.name ? i += `#define ${e.name} ${e.value}\n` : i += `#define ${e}\n`
      }), t += i, n += i, dr(t += ga, n += ba)
    }(o), l[u] = c), c.use(a) && c.bindUniforms(s), this._setDataUniform(r, t, n), c.bindUniforms(r), i.draw(a)
  }
  _sort() {
    if (!this._scene._needSort) return;
    const e = this._scene;
    e._needSort = !1;
    const t = [],
      n = [];
    this._opaqueList = t, this._transparentList = n;
    const i = [];
    this._allList = i;
    const o = e.datas._datas,
      {
        frustum: a,
        position: r
      } = this._camera;
    for (let s, l = 0, u = o.length; l < u; l++)
      if ((s = o[l]).visible && s.boundingBox.isInFrustum(a)) {
        const o = s.getLOD(r);
        if (o)
          if (o.mesh) o.mesh.primitives.forEach(a => {
            const r = {
              data: s,
              lod: o,
              vao: a.vao,
              material: a.material
            };
            r.material.getKey(e, r.vao, r.data), (a.material.transparent ? n : t).push(r), i.push(r)
          });
          else if (o.vao) {
          const a = o.material || (o instanceof tl ? (ms || (ms = new ps), ms) : fs()),
            r = {
              data: s,
              lod: o,
              vao: o.vao,
              material: a
            };
          r.material.getKey(e, r.vao, r.data), (a.transparent ? n : t).push(r), i.push(r)
        }
      } t.sort((e, t) => e.material.id === t.material.id ? e.vao === t.vao ? e.data.__distance - t.data.__distance : e.vao.id - t.vao.id : e.material._key.localeCompare(t.material._key)), n.sort((e, t) => t.data.__distance - e.data.__distance), i.sort((e, t) => e.vao === t.vao ? e.data.__distance - t.data.__distance : e.vao.id - t.vao.id)
  }
  _handleLightChange(e) {
    const t = this,
      n = t._lightMap;
    let i;
    "add" === e.type ? (i = e.data.TYPE, t._lightDefines[i].value++, n[i].push(e.data), t._scene._rebuildProgram = !0) : "remove" === e.type ? (i = e.data.TYPE, t._lightDefines[i].value--, n[i].splice(n[i].indexOf(e.data), 1), t._scene._rebuildProgram = !0) : "clear" === e.type ? (e.datas.forEach(e => {
      const i = e.TYPE;
      t._lightDefines[i].value--, n[i].splice(n[i].indexOf(e), 1)
    }), t._scene._rebuildProgram = !0) : "change" === e.type && "shadow" === e.property && (t._scene._rebuildProgram = !0), t._lightDirty = !0, t.redraw()
  }
  _resetLight() {
    const e = this,
      t = e._uniforms,
      n = e._lightMap;
    e._lightDirty = !1, e._shadowLightMap.DIRECTION = 0, e._shadowLightMap.POINT = 0, e._shadowLightMap.SPOT = 0, e._shadowLightCount = 0, Object.keys(n).forEach(i => {
      n[i].forEach((n, o) => {
        if (n.shadow) {
          if ("DIRECTION" === i && e._shadowLightMap.DIRECTION < 1) {
            for (let e = 0; e < Zl.CASCADED_COUNT; e++) t[`u_shadowMapProjectViewMatrix_${e}`] = n._shadowMapProjectViewMatrix[e];
            t.u_cascadedEnd = n._cascadedEnd, e._shadowLightMap[i]++
          }
          if ("POINT" === i && e._shadowLightMap.POINT < 4 && e._shadowLightMap[i]++, "SPOT" === i && e._shadowLightMap.SPOT < 4) {
            const o = e._shadowLightMap[i];
            t[`u_spotShadowMapProjectViewMatrix_${o}`] = n._shadowMapBiasProjectViewMatrix, e._shadowLightMap[i]++
          }
          e._shadowLightCount++
        }
        const a = `u_${i.toLowerCase()}Lights[${o}].`;
        Y.scale(n.__diffuseColor, n.diffuseColor, n.intensity), Y.scale(n.__specularColor, n.specularColor, n.intensity), t[`${a}shadow`] = n.shadow, t[`${a}shadowDarkness`] = n.shadowDarkness, t[`${a}diffuseColor`] = n.__diffuseColor, t[`${a}specularColor`] = n.__specularColor, n._validate && n._validate(), "DIRECTION" !== i && "SPOT" !== i || (t[`${a}direction`] = n.__direction), "POINT" !== i && "SPOT" !== i || (t[`${a}position`] = n.__position, t[`${a}distance`] = n.distance), "SPOT" === i && (t[`${a}innerAngle`] = Math.cos(n.innerAngle), t[`${a}outerAngle`] = Math.cos(n.outerAngle))
      })
    })
  }
  _handleImageLoaded(e) {
    this.redraw()
  }
  addPass(e) {
    this._renderPass.push(e)
  }
  removePass(e) {
    const t = this._renderPass.indexOf(e);
    t >= 0 && (this._renderPass.splice(t, 1), e.dispose())
  }
  setSize(e, t) {
    const n = this._gl,
      i = this._canvas;
    Lt.set(this._resolution, i.width, i.height), this._useMultisample && this._inFramebuffer && (this._inFramebuffer.setSize(i.width, i.height), this._outFramebuffer.setSize(i.width, i.height), this._useMultisample && (n.bindRenderbuffer(n.RENDERBUFFER, this._colorRenderbuffer), n.renderbufferStorageMultisample(n.RENDERBUFFER, 4, n.RGBA16F, n.canvas.width, n.canvas.height), n.bindRenderbuffer(n.RENDERBUFFER, this._depthRenderbuffer), n.renderbufferStorageMultisample(n.RENDERBUFFER, 4, n.DEPTH24_STENCIL8, n.canvas.width, n.canvas.height), n.bindRenderbuffer(n.RENDERBUFFER, null)), this._bloomEffect.setSize(i.width, i.height), this._ssaoEffect.setSize(i.width, i.height), this._outlineEffect.setSize(i.width, i.height)), this.redraw()
  }
  getDataAt(e) {
    const t = this,
      n = t._scene,
      i = t._gl,
      o = n.getPointAt(e),
      a = new Uint8Array(4),
      r = t._pickingUniforms;
    t._pickingFramebuffer || (t._pickingFramebuffer = new fa({
      width: 512,
      height: 512,
      depth: !0
    }));
    const s = t._pickingFramebuffer._width,
      l = t._pickingFramebuffer._height,
      u = Math.floor(o.x * s / n._width),
      c = Math.floor(l - o.y * l / n._height);
    t._invalidatePicking ? (t._pickingFramebuffer.bind(i), r.u_projectViewMatrix = t._camera.projectViewMatrix, t._drawPicking(), t._invalidatePicking = !1) : i.bindFramebuffer(i.FRAMEBUFFER, t._pickingFramebuffer._framebuffer), i.readPixels(u, c, 1, 1, i.RGBA, i.UNSIGNED_BYTE, a), i.bindFramebuffer(i.FRAMEBUFFER, null);
    const d = (a[0] << 24) + (a[1] << 16) + (a[2] << 8) + a[3];
    return n.datas.getById(d)
  }
  createProgram(e) {
    return new cr(e)
  }
  createTexture(e) {
    return _u.createTexture(e)
  }
  createFramebuffer(e) {
    return new fa(e)
  }
  createVertexArray(e) {
    return new Do(e)
  }
  dispose() {
    Jo(this._gl), this._gl.cache.textures.trigger.off("load", this._handleImageLoaded, this), this._scene._xrManager.dispose(), this._aniamtionId && (window.cancelAnimationFrame(this._aniamtionId), this._aniamtionId = null)
  }
}
let Ru, Lu, Iu, Du, zu, Fu, Uu, ku, Hu, Ju, Vu, ju, Bu, Xu, Gu, Wu, Zu, qu = !1,
  Ku = !1,
  Yu = !1,
  Qu = 0,
  $u = null,
  ec = null,
  tc = !1;
class nc {
  constructor(e) {
    tc || (tc = !0, Ru = Lt.create(), Lu = Lt.create(), Iu = Y.create(), Du = Y.create(), zu = Y.fromValues(1, 1, 1), Fu = A.create(), Uu = Y.create(), ku = Y.create(), Hu = Y.create(), Ju = Y.create(), Vu = Y.create(), ju = Y.create(), Bu = ot.create(), Xu = ot.create()), this._scene = e, this._renderer = e._renderer, this._gl = e._renderer._gl, this._rotateStep = 45, this._trackingSpaceHeadingDegrees = 0, this._controllers = {}
  }
  init() {
    navigator.xr ? navigator.xr.isSessionSupported("immersive-vr").then(e => {
      this._xrSupported = e, e || (this._xrFailReason = "Your browser does not support immersive-vr")
    }) : (this._xrSupported = !1, this._xrFailReason = "Your browser does not support WebXR")
  }
  get rotateStep() {
    return this._rotateStep
  }
  set rotateStep(e) {
    this._rotateStep = e
  }
  onXRSessionEnd() {
    this._xrSession = null, this._xrRefSpaceBase = null, this._xrRefSpaceOffset = null;
    const e = this._controllers;
    e.left && (e.left.visible = !1), e.right && (e.right.visible = !1), this._grid && (this._grid.visible = !1), this._jumpRay && (this._jumpRay.visible = !1), this._cursorRay && (this._cursorRay.visible = !1), this._cursorPoint && (this._cursorPoint.visible = !1), this._renderer._dirty = !0
  }
  onXRSelectStart(e) {}
  onXRSelect(e) {}
  onXRSelectEnd(e) {}
  enterXR() {
    this._xrSupported || Ui(this._xrFailReason), !this._xrSupported || this._xrSession || this._enteringXR || (this._enteringXR = !0, navigator.xr.requestSession("immersive-vr", {
      requiredFeatures: ["local-floor"],
      optionalFeatures: ["bounded-floor"]
    }).then(e => {
      this._xrSession = e, e.addEventListener("end", () => {
        this.onXRSessionEnd()
      }), e.addEventListener("selectstart", e => {
        this.onXRSelectStart(e)
      }), e.addEventListener("select", e => {
        this.onXRSelect(e)
      }), e.addEventListener("selectend", e => {
        this.onXRSelectEnd(e)
      }), this._gl.makeXRCompatible().then(() => {
        e.updateRenderState({
          depthNear: this._scene._camera.near,
          depthFar: this._scene._camera.far,
          baseLayer: new XRWebGLLayer(e, this._gl)
        }), e.requestReferenceSpace("local-floor").then(e => {
          this._xrRefSpaceBase = e, this._xrRefSpaceOffset = e
        });
        const t = (n, i) => {
          this._aniamtionId = e.requestAnimationFrame(t), this._renderer.render(n, i)
        };
        this._aniamtionId = e.requestAnimationFrame(t)
      })
    }).catch(() => {
      Ui("Immersive vr not supported")
    }).finally(() => {
      this._enteringXR = !1
    }))
  }
  exitXR() {
    this._xrSession && !this._exitingXR && (this._exitingXR = !0, this._xrSession.end().finally(() => {
      this._xrSession = null, this._xrRefSpaceBase = null, this._xrRefSpaceOffset = null, this._exitingXR = !1
    }))
  }
  setController(e) {
    e.visible = !1, e.selectable = !1, this._scene.add(e), this._controllers = {
      left: e,
      right: this._scene.add({
        visible: !1,
        selectable: !1,
        mesh: e.mesh
      })
    }
  }
  setCursorRay(e) {
    e.visible = !1, e.selectable = !1, this._scene.add(e), this._cursorRay = e
  }
  setCursorPoint(e) {
    e.visible = !1, e.selectable = !1, this._scene.add(e), this._cursorPoint = e
  }
  setJumpRay(e) {
    e.visible = !1, e.selectable = !1, this._scene.add(e), this._jumpRay = e
  }
  setGrid(e) {
    e.visible = !1, e.selectable = !1, this._scene.add(e), this._grid = e
  }
  dispose() {
    this._xrSession && this._xrSession.cancelAnimationFrame(this._aniamtionId)
  }
  handleInputSource(e, t, n) {
    const i = this._controllers;
    i.left && (i.left.visible = !1), i.right && (i.right.visible = !1), this._grid && (this._grid.visible = !1), this._jumpRay && (this._jumpRay.visible = !1), this._cursorRay && (this._cursorRay.visible = !1), this._cursorPoint && (this._cursorPoint.visible = !1);
    let o = !1;
    e.session.inputSources.forEach(t => {
      const a = i[t.handedness];
      if (a && t.gripSpace) {
        const i = e.getPose(t.gripSpace, n),
          r = e.getPose(t.targetRaySpace, n);
        if (i && (a.visible = !0, a.modelMatrix = i.transform.matrix, this._cursorRay && this._cursorPoint && r && (Y.set(Iu, 0, 0, 0), Y.transformMat4(Iu, Iu, r.transform.matrix), Y.set(Du, 0, 0, -1), Y.transformMat4(Du, Du, r.transform.matrix), Y.sub(Du, Du, Iu), Y.normalize(Du, Du), ec = this._scene.intersect(Iu, Du), qu || (this._cursorRay.visible = !0, ec ? (this._cursorPoint.visible = !0, this._cursorPoint.position = ec.position, zu[2] = ec.distance / 10, A.fromScaling(Fu, zu), A.mul(Fu, r.transform.matrix, Fu), this._cursorRay.modelMatrix = Fu) : this._cursorRay.modelMatrix = r.transform.matrix)), t.gamepad))
          if (t.gamepad.buttons[2].pressed) {
            if (o = !0, Ku = !1, this._grid && this._jumpRay && (qu = !!ec, this._grid.visible = !0, this._jumpRay.visible = qu, qu)) {
              const e = new Float32Array([Iu[0], Iu[1], Iu[2], ec.position[0], ec.position[1], ec.position[2]]);
              this._jumpRay.vao.setPosition(e)
            }
          } else if (t.gamepad.buttons[2].touched) Yu ? $u === t && Lt.copy(Lu, t.gamepad.axes) : (Yu = !0, $u = t, Lt.copy(Ru, t.gamepad.axes), Lt.copy(Lu, t.gamepad.axes));
        else if (Yu && $u === t) {
          const e = Lu[0] - Ru[0];
          Math.abs(e) > .1 && (Ku = !0, Qu = -Math.sin(e) * this.rotateStep), Yu = !1
        }
      }
    }), o || qu && (qu = !1, this._teleport(t, ec.position)), Ku && (Ku = !1, this._teleport(t, null), Qu = 0)
  }
  _teleport(e, t) {
    Y.set(Uu, e.transform.position.x, 0, e.transform.position.z), Y.sub(Hu, Uu, ju), Y.copy(ku, Uu), t && ([ku[0], , ku[2]] = t, ku[1] = 0), ot.identity(Bu), ot.rotateY(Bu, Bu, Qu * Math.PI / 180), Y.transformQuat(Ju, Hu, Bu), this._trackingSpaceHeadingDegrees += Qu, Y.sub(ju, ku, Ju), ot.identity(Xu), ot.rotateY(Xu, Xu, -this._trackingSpaceHeadingDegrees * Math.PI / 180), Y.negate(Vu, ju), Y.transformQuat(Vu, Vu, Xu);
    const n = new XRRigidTransform({
      x: Vu[0],
      y: Vu[1],
      z: Vu[2]
    }, {
      x: Xu[0],
      y: Xu[1],
      z: Xu[2],
      w: Xu[3]
    });
    this._xrRefSpaceOffset = this._xrRefSpaceBase.getOffsetReferenceSpace(n)
  }
}
let ic = !1;
class oc extends $o {
  constructor(e, t = {}) {
    var n;
    n = oc.prototype, ic || (ic = !0, Gu = Y.create(), Wu = Y.fromValues(1, 1, 1), Zu = ot.create(), no(n, [{
      name: "ambientColor"
    }, {
      name: "clearColor"
    }, {
      name: "enableSSAO",
      value: !1
    }, {
      name: "enableFog",
      value: !1,
      callback() {
        this._rebuildProgram = !0
      }
    }, {
      name: "fogColor"
    }, {
      name: "fogNear",
      value: 100
    }, {
      name: "fogFar",
      value: 200
    }, {
      name: "enableAnimation",
      value: !0
    }, {
      name: "enableAutoResize",
      value: !1,
      callback(e, t) {
        const n = this;
        e !== t && (t ? window.addEventListener("resize", n._handleResize) : window.removeEventListener("resize", n._handleResize))
      }
    }, {
      name: "camera",
      noSet: !0
    }, {
      name: "xrManager",
      noSet: !0
    }, {
      name: "canvas",
      noSet: !0
    }, {
      name: "renderer",
      noSet: !0
    }, {
      name: "glowEffect",
      get() {
        return this._renderer._glowEffect
      },
      noSet: !0
    }, {
      name: "bloomEffect",
      get() {
        return this._renderer._bloomEffect
      },
      noSet: !0
    }, {
      name: "dofEffect",
      get() {
        return this._renderer._dofEffect
      },
      noSet: !0
    }, {
      name: "outlineEffect",
      get() {
        return this._renderer._outlineEffect
      },
      noSet: !0
    }, {
      name: "brdfLUTImage",
      value: null
    }, {
      name: "diffuseEnvImage",
      value: null
    }, {
      name: "specularEnvImage",
      value: null
    }, {
      name: "iblDiffuseIntensity",
      value: 1
    }, {
      name: "iblSpecularIntensity",
      value: 1
    }, {
      name: "exposure",
      value: 1
    }, {
      name: "fps",
      callback() {
        this._timePerFrame = this._fps > 0 ? 1e3 / this._fps : 0
      }
    }, {
      name: "skyboxImage"
    }])), super();
    const i = this;
    let o;
    e && ("string" == typeof e ? o = document.getElementById(e) : "string" == typeof e.canvas ? o = document.getElementById(e.canvas) : e.canvas instanceof HTMLCanvasElement && (o = e.canvas)), o || (o = document.createElement("canvas")), o.tabIndex = 0, o.style.outline = "none", o.addEventListener("keydown", i._handleKeydown), i.selection = new al, i.glTFResource = new Yr, i.selection.on("all", i._handleDataSelectionChange, i), i.datas = new $s, i.datas.on("all", i._handleDataChange, i), i.lights = new $s, i.skins = new Set, i.glows = new Set, i.outlines = new Set, i._particleSystem = new yl(i), i.animations = [], i._fps = 30, i._timePerFrame = i._fps > 0 ? 1e3 / i._fps : 0, i._canvas = o, i._needSort = !0, i._camera = new xl(e.camera), i._camera.attach(o), i._fogColor = Y.fromValues(1, 1, 1), i._ambientColor = Y.fromValues(.1, .1, .1), i._clearColor = Pe.fromValues(0, 0, 0, 1), i._handleResize = oo(() => {
      i.setSize(window.innerWidth, window.innerHeight)
    }), null == e.enableAutoResize && (i.enableAutoResize = !0), i._renderer = new Cu(i, t), i.setSize(window.innerWidth, window.innerHeight), i.on("all", i._handleChange, i), i.axis = new Ys({
      scene: i
    }), i.add(i.axis), i._xrManager = new nc(i), i._xrManager.init(), "string" != typeof e && Object.keys(e).forEach(t => {
      const n = e[t];
      "canvas" !== t && "camera" !== t && ("lights" !== t ? "datas" !== t ? "billboards" !== t ? this[t] = n : n.forEach(e => {
        i.addBillboard(e)
      }) : n.forEach(e => {
        i.add(e)
      }) : n.forEach(e => {
        i.addLight(e)
      }))
    })
  }
  _handleChange(e) {
    this.redraw()
  }
  _handleKeydown(e) {
    ro(e) && e.shiftKey && 76 === e.keyCode && zi(co())
  }
  onAnimationFrame(e) {}
  onAfterAnimationFrame() {}
  redraw() {
    this._renderer.redraw()
  }
  loadOBJ(e, t, n) {
    const i = n && n.onlyLoad;
    return mu.parse(e, t).then(e => {
      const t = [],
        {
          buffers: n
        } = e;
      n.normal || (n.normal = Uo(n.position, n.index)), n.tangent || (n.tangent = ko(n)), e.parts.forEach(e => {
        const i = {
          vao: new Do({
            buffers: n,
            counts: e.counts
          }),
          material: e.material
        };
        t.push(i)
      });
      const o = new Gs;
      return o.mesh = {
        primitives: t
      }, i || this.add(o), o
    })
  }
  registerResource(e) {
    const {
      url: t,
      arrayBuffer: n
    } = e, i = e.name || so(t), o = e.options || {};
    o.onlyLoad = !0, n ? this.loadGLTFData(t, o).then(e => {
      this.glTFResource.register(i, e.root)
    }) : this.loadGLTF(t, o).then(e => {
      this.glTFResource.register(i, e.root)
    })
  }
  getGLTFResource(e) {
    return this.glTFResource.get(e)
  }
  loadGLTF(e, t) {
    return new Promise((n, i) => {
      nu.parse(e, (e, o) => {
        e ? i && i(e) : this._loadGLTF(o, t, n)
      })
    })
  }
  loadGLTFData(e, t, n) {
    return new Promise((i, o) => {
      nu.parseBinaryData(e, t, (e, t) => {
        e ? o && o(e) : this._loadGLTF(t, n, i)
      }, n && n.byteOffset)
    })
  }
  _loadGLTF(e, t, n) {
    const i = [],
      o = new Gs,
      a = new Array(e.nodes.length),
      r = [],
      s = [],
      {
        textures: l
      } = e,
      u = t && t.onlyLoad,
      c = !u && t && t.loadLights,
      d = !u && t && t.loadCameras,
      f = t && t.generateNormal,
      h = t && t.generateTangent,
      p = t && t.forceTextureOptions,
      m = !(!t || !t.useIBLWhenMissingTexture),
      _ = t && t.defaultMaterialOptions,
      v = !t || null == t.loadTexture || t.loadTexture,
      g = [],
      b = this._gl;
    let T = Pe.fromValues(.5, .5, .5, 1);

    function x(e, t, n) {
      let i = n;
      p && (i = {
        ...n,
        ...p
      }), e[t] = i, v && g.push(b.cache.textures.get(e[t])._init(b))
    }
    if (t && t.defaultDiffuseColor && (T = t.defaultDiffuseColor), e.meshes.forEach(t => {
        const n = [],
          o = {
            primitives: n
          };
        t.name && (o.name = t.name), i.push(o), t.primitives.forEach(t => {
          const {
            buffers: i
          } = t;
          f && !i.normal && (i.normal = Uo(i.position.data, i.index)), f && i.position0 && !i.normal0 && (i.normal0 = Uo(i.position0.data, i.index)), h && !i.tangent && i.uv && (i.tangent = ko(i));
          const o = {
            vao: new Do(t)
          };
          let a, r;
          if (null != t.material && e.materials[t.material]) {
            const n = (r = e.materials[t.material]).extensions && r.extensions.KHR_materials_common,
              i = r.extensions && r.extensions.KHR_technique_webgl,
              o = r.extensions && r.extensions.KHR_techniques_webgl;
            if (i)(a = new cs(_)).flipY = !1, a.light = !1, i.values && null != i.values.diffuse && x(a, "diffuseImage", l[i.values.diffuse]);
            else if (o) {
              if ((a = new cs(_)).flipY = !1, a.light = !1, o.values && o.values.u_diffuse) {
                const e = o.values.u_diffuse.index;
                x(a, "diffuseImage", l[e])
              }
            } else if (n) {
              const {
                values: e
              } = n;
              (a = new cs(_)).flipY = !1, r.extensions && r.extensions.KHR_materials_unlit && (a.light = !1), e.diffuse.length ? a.diffuseColor = e.diffuse : x(a, "diffuseImage", l[e.diffuse.index]), e.emission && (e.emission.length ? a.emissionColor = e.emission.slice(0, 3) : x(a, "emissionImage", l[e.emission.index])), e.specular && (e.specular.length ? a.specularColor = e.specular.slice(0, 3) : x(a, "specularImage", l[e.specular.index])), a.shininess = e.shininess, a.doubleSided = e.doubleSided, a.transparency = e.transparency, a.transparent = e.transparent
            } else {
              (a = new ss(_)).flipY = !1, r.extensions && r.extensions.KHR_materials_unlit && (a.light = !1), "BLEND" === r.alphaMode ? a.transparent = !0 : "MASK" === r.alphaMode && (a.alphaTest = !0, null != r.alphaCutoff && (a.alphaCutoff = r.alphaCutoff)), a.doubleSided = !0 === r.doubleSided;
              const {
                pbrMetallicRoughness: e
              } = r, t = r.extensions && r.extensions.KHR_materials_pbrSpecularGlossiness;
              if (t) {
                a.type = "specular", t.diffuseFactor && (a.diffuseFactor = t.diffuseFactor);
                const {
                  diffuseTexture: e
                } = t;
                e && (x(a, "diffuseImage", l[e.index]), a.diffuseImageUV = e.texCoord || 0), null != t.specularFactor && (a.specularFactor = t.specularFactor), null != t.glossinessFactor && (a.glossinessFactor = t.glossinessFactor);
                const {
                  specularGlossinessTexture: n
                } = t;
                if (n) {
                  const e = n.index;
                  x(a, "specularGlossinessImage", l[e]), a.enableIBL = !0, a.specularGlossinessImageUV = n.texCoord || 0
                } else a.enableIBL = m
              } else if (e) {
                e.baseColorFactor && (a.baseColorFactor = e.baseColorFactor);
                const {
                  baseColorTexture: t
                } = e;
                if (t) {
                  x(a, "baseColorImage", l[t.index]), a.baseColorImageUV = t.texCoord || 0;
                  const e = t.extensions && t.extensions.KHR_texture_transform;
                  e && (e.scale && (a.textureScale = e.scale), e.offset && (a.textureOffset = e.offset), e.rotation && (a.textureRotation = e.rotation))
                }
                null != e.metallicFactor && (a.metallicFactor = e.metallicFactor), null != e.roughnessFactor && (a.roughnessFactor = e.roughnessFactor);
                const {
                  metallicRoughnessTexture: n
                } = e;
                if (n) {
                  const e = n.index;
                  x(a, "metallicRoughnessImage", l[e]), a.enableIBL = !0, a.metallicRoughnessImageUV = n.texCoord || 0
                } else a.enableIBL = m
              }
              const {
                normalTexture: n
              } = r;
              n && (x(a, "normalImage", l[n.index]), a.normalScale = n.scale || 1, a.normalImageUV = n.texCoord || 0);
              const {
                emissiveTexture: i
              } = r;
              i && (x(a, "emissiveImage", l[i.index]), a.emissiveImageUV = i.texCoord || 0, r.emissiveFactor && (a.emissiveColor = r.emissiveFactor));
              const {
                occlusionTexture: o
              } = r;
              o && (e && e.metallicRoughnessTexture && e.metallicRoughnessTexture.index === o.index ? a.enableAOChannel = !0 : (x(a, "occlusionImage", l[o.index]), a.occlusionStrength = o.strength || 1, a.occlusionImageUV = o.texCoord || 0))
            }
            const s = r.extensions && r.extensions.KHR_blend;
            s && ([a.blendEquationColor, a.blendEquationAlpha] = s.blendEquation, [a.blendFuncSrcColor, a.blendFuncDstColor, a.blendFuncSrcAlpha, a.blendFuncDstAlpha] = s.blendFactors)
          } else(a = new cs(_)).diffuseColor = T;
          r && r.name && (a.name = r.name), o.material = a, n.push(o)
        })
      }), e.nodes.forEach((e, t) => {
        const n = new Gs,
          o = {};
        if (n._info = o, e.name && (o.name = e.name, n.name = e.name), e.rotation && (o.rotation = e.rotation, n.quaternion = e.rotation), e.translation && (o.translation = e.translation, n.position = e.translation), e.scale && (o.scale = e.scale, n.scale = e.scale), e.matrix && (n.modelMatrix = e.matrix), e.weights && (o.weights = e.weights), null != e.mesh && (n.mesh = i[e.mesh]), e.skin && (n.skin = e.skin), e.light) {
          const t = e.light;
          let i;
          "directional" === t.type ? i = new Zl({
            direction: Y.fromValues(0, 0, -1)
          }) : "point" === t.type ? i = new tu({
            position: Y.fromValues(0, 0, 0)
          }) : "spot" === t.type && (i = new $l({
            direction: Y.fromValues(0, 0, -1),
            position: Y.fromValues(0, 0, 0),
            innerAngle: t.innerConeAngle || 0,
            outerAngle: t.outerConeAngle || Math.PI / 4
          })), i && (t.range && (i.distance = t.range || Number.MAX_VALUE), t.name && (i.name = t.name), i.specularColor = t.color || Y.fromValues(1, 1, 1), i.diffuseColor = i.specularColor, i.intensity = t.intensity || 1, i.parent = n, r.push(i))
        }
        e.camera && s.push({
          camera: e.camera,
          data: n
        }), a[t] = n
      }), a.forEach((t, n) => {
        const i = e.nodes[n];
        i.lods && i.lods.forEach(e => {
          t.addLOD(10 * (1 - e.screencoverage), a[e.id])
        })
      }), e.scene.nodes.forEach(t => {
        ! function t(n, i) {
          const r = a[n],
            s = e.nodes[n];
          i ? r.parent = i : s.light || s.camera || (r.parent = o, o.addChild(r)), s.children && s.children.forEach(e => {
            t(e, r)
          })
        }(t)
      }), d && s.length) {
      const e = s[0].data.worldMatrix,
        t = this.camera._position,
        n = this.camera._target;
      A.getTranslation(t, e), Y.copy(n, o.boundingBox.boundingSphere.center), this.camera.position = t, this.camera.target = n;
      const i = s[0].camera;
      "perspective" === i.type && (this.camera.fovy = 180 * i.perspective.yfov / Math.PI, this.camera.far = i.perspective.zfar, this.camera.near = i.perspective.znear)
    }
    a.forEach(e => {
      if (e.skin) {
        const {
          skin: t
        } = e;
        if (t.node) return;
        t.node = e, null != t.skeleton && (t.node = a[t.skeleton]), t._inverseNodeMatrix = A.create();
        const n = t.joints.map(e => a[e]);
        t._joints = n;
        const i = new Array(n.length);
        t.jointMatrixs = i;
        const o = new Float32Array(16 * n.length);
        t.jointMatrix = o;
        const r = new Array(n.length);
        t.jointNormalMatrixs = r;
        const s = new Float32Array(16 * n.length);
        t.jointNormalMatrix = s;
        for (let e = 0; e < n.length; e++) i[e] = new Float32Array(o.buffer, 16 * e * 4, 16), r[e] = new Float32Array(s.buffer, 16 * e * 4, 16);
        t.update = () => {
          const e = t._inverseNodeMatrix;
          A.invert(e, t.node.worldMatrix), t._joints.forEach((n, i) => {
            A.multiply(t.jointMatrixs[i], n.worldMatrix, t.inverseBindMatrices[i]), A.multiply(t.jointMatrixs[i], e, t.jointMatrixs[i]), A.invert(t.jointNormalMatrixs[i], t.jointMatrixs[i]), A.transpose(t.jointNormalMatrixs[i], t.jointNormalMatrixs[i])
          })
        }, t.update()
      }
    }), e.animations.forEach(e => {
      e.enabled = !1, e.channels.forEach(e => {
        e.node = a[e.node]
      }), u || this.addAnimation(e)
    }), c && r.forEach(e => {
      this.addLight(e)
    }), n && Promise.all(g).then(() => {
      u || this.add(o), n({
        root: o,
        cameras: s,
        lights: r,
        animations: e.animations
      })
    })
  }
  addAnimation(e) {
    this.animations.push(e), this.onAnimationAdd(e)
  }
  onAnimationAdd(e) {}
  startAnimation(e) {
    this.animations.forEach(t => {
      t.name === e && (t.enabled = !0)
    }), this.redraw()
  }
  stopAnimation(e) {
    this.animations.forEach(t => {
      t.name === e && (t.enabled = !1)
    }), this.redraw()
  }
  _handleAnimation(e) {
    const t = this;
    let n = !1;
    t.animations.forEach(t => {
      t.enabled && (n = !0, t.channels.forEach(t => {
        const {
          input: n
        } = t.sampler, i = t.sampler.splitOutput || t.sampler.output, o = n[n.length - 1];
        if (o <= 0) return;
        const a = e / 1e3 % o;
        let r, s, l, u;
        n.some((e, t) => 0 !== t && e > a && (r = n[t - 1], s = e, l = i[t - 1], u = i[t], !0));
        const c = (a - r) / (s - r),
          {
            node: d
          } = t,
          f = d._info;
        if ("rotation" === t.path) ot.slerp(f.rotation, l, u, c);
        else if ("translation" === t.path) Y.lerp(f.translation, l, u, c);
        else if ("scale" === t.path) Y.lerp(f.scale, l, u, c);
        else if ("weights" === t.path) {
          const e = 1 - c,
            {
              weights: t
            } = f;
          for (let n = 0; n < l.length; n++) t[n] = e * l[n] + c * u[n]
        }
        "weights" !== t.path && (A.fromRotationTranslationScale(d._modelMatrix, f.rotation || Zu, f.translation || Gu, f.scale || Wu), d.modelMatrix = d._modelMatrix)
      }))
    }), n && t.skins.size && t.skins.forEach(e => {
      e.skin.update()
    }), n && t.redraw()
  }
  addParticle(e) {
    return this._particleSystem.add(e)
  }
  removeParticle(e) {
    const t = this._particleSystem._particles,
      n = t.indexOf(e);
    return n >= 0 && t.splice(n, 1), this
  }
  clearParticle() {
    this._particleSystem._particles = []
  }
  add(e) {
    let t;
    return t = e instanceof Gs ? e : new Gs(e), this.datas.add(t), t
  }
  addBillboard(e) {
    let t;
    return t = e instanceof tl ? e : new tl(e), this.datas.add(t), t
  }
  remove(e) {
    this.datas.remove(e)
  }
  clear() {
    this.datas.clear()
  }
  _handleDataSelectionChange(e) {
    const {
      type: t
    } = e;
    if ("add" === t) {
      const {
        datas: t
      } = e;
      t.forEach(e => {
        e.glow = !0
      })
    } else if ("remove" === t) {
      e.remove.forEach(e => {
        e.glow = !1
      })
    } else if ("set" === t) {
      const {
        datas: t,
        old: n
      } = e;
      t.forEach(e => {
        e.glow = !0
      }), n.forEach(e => {
        e.glow = !1
      })
    } else if ("clear" === t) {
      e.remove.forEach(e => {
        e.glow = !1
      })
    }
  }
  _handleDataChange(e) {
    const t = this,
      {
        type: n,
        data: i
      } = e;
    if ("add" === n) i.skin && t.skins.add(i), i.glow && t.glows.add(i), i.outline && t.outlines.add(i), t._needSort = !0;
    else if ("remove" === n) {
      i.skin && t.skins.delete(i), i.glow && t.glows.delete(i), i.outline && t.outlines.delete(i);
      for (let e, n = t.animations.length - 1; n >= 0; n--) {
        e = t.animations[n];
        for (let o = 0; o < e.channels.length; o++)
          if (e.channels[o].node === i) {
            t.animations.splice(n, 1);
            break
          }
      }
      t._needSort = !0
    } else if ("clear" === n) t.animations = [], t.skins.clear(), t.glows.clear(), t.outlines.clear(), t._needSort = !0;
    else if ("change" === n) {
      switch (e.property) {
        case "glow":
          e.newValue ? t.glows.add(i) : t.glows.delete(i);
          break;
        case "outline":
          e.newValue ? t.outlines.add(i) : t.outlines.delete(i)
      }
      t._needSort = !0
    }
    t.redraw()
  }
  dispose() {
    this.clear(), this._renderer.dispose(), this.enableAutoResize && window.removeEventListener("resize", this._handleResize), this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas), this._canvas.removeEventListener("keydown", this._handleKeydown)
  }
  enterFullscreen() {
    const e = this._canvas;
    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
  }
  addPass(e) {
    this._renderer.addPass(e)
  }
  removePass(e) {
    this._renderer.removePass(e)
  }
  setSize(e, t) {
    qi(this._canvas, e, t), this._camera.aspect = e / t, this._width = e, this._height = t, this._renderer && this._renderer.setSize(e, t)
  }
  addLight(e) {
    let t;
    if (e instanceof Dl) t = e;
    else switch (e.type) {
      case "POINT":
        t = new tu(e);
        break;
      case "SPOT":
        t = new $l(e);
        break;
      default:
        t = new Zl(e)
    }
    return this.lights.add(t), t
  }
  removeLight(e) {
    this.lights.remove(e)
  }
  enterXR() {
    this._xrManager.enterXR()
  }
  exitXR() {
    this._xrManager.exitXR()
  }
  getPointAt(e) {
    const t = this._canvas.getBoundingClientRect(),
      n = Vi(e);
    return {
      x: n.x - t.left,
      y: n.y - t.top
    }
  }
  getDataAt(e) {
    return this._renderer.getDataAt(e)
  }
  getIntersectionPosition(e, t) {
    if (!t) return null;
    const n = Y.create(),
      i = Y.create(),
      o = A.create(),
      a = this.getPointAt(e);
    return A.invert(o, this._camera.projectViewMatrix), a.x = a.x / this._width * 2 - 1, a.y = 1 - a.y / this._height * 2, Y.set(n, a.x, a.y, -1), Y.transformMat4(n, n, o), Y.set(i, a.x, a.y, 1), Y.transformMat4(i, i, o), Y.sub(i, i, n), Y.normalize(i, i), t.intersect(n, i)
  }
  getDataAndPositionAt(e) {
    const t = this.getDataAt(e);
    if (!t) return null;
    const n = Y.create(),
      i = Y.create(),
      o = A.create(),
      a = this.getPointAt(e);
    return A.invert(o, this._camera.projectViewMatrix), a.x = a.x / this._width * 2 - 1, a.y = 1 - a.y / this._height * 2, Y.set(n, a.x, a.y, -1), Y.transformMat4(n, n, o), Y.set(i, a.x, a.y, 1), Y.transformMat4(i, i, o), Y.sub(i, i, n), Y.normalize(i, i), t.intersect(n, i)
  }
  intersect(e, t) {
    let n = null;
    return this.datas.forEach(i => {
      if (!i.visible || !i.selectable) return;
      const o = i.intersect(e, t);
      o && (n ? o.distance < n.distance && (n = o) : n = o)
    }), n
  }
  toggleCaptureVideo() {
    if (window.MediaRecorder && this._canvas.captureStream) {
      if (!this._mediaRecorder) {
        this._chunks = [], this._stream = this._canvas.captureStream();
        const e = {
          mimeType: "video/webm"
        };
        this._mediaRecorder = new MediaRecorder(this._stream, e), this._mediaRecorder.onstop = t => {
          const n = new Blob(this._chunks, {
            type: e.mimeType
          });
          this._chunks = [];
          const i = document.createElement("a");
          i.download = `scene-${(new Date).getTime()}.webm`, i.href = URL.createObjectURL(n), setTimeout(() => {
            URL.revokeObjectURL(i.href)
          }, 4e4), setTimeout(() => {
            i.dispatchEvent(new MouseEvent("click"))
          }, 0)
        }, this._mediaRecorder.ondataavailable = e => {
          this._chunks.push(e.data)
        }
      }
      this._isCapturing ? this._mediaRecorder.stop() : this._mediaRecorder.start(), this._isCapturing = !this._isCapturing
    } else Fi("MediaRecorder and HTMLCanvasElement#captureStream are not supported")
  }
  updateTexture(e, t) {
    e && t && (ji(t) ? this._gl.cache.textures.cache.get(e).update(t) : Yi(t).then(t => {
      this._gl.cache.textures.cache.get(e).update(t)
    }), this.redraw())
  }
  showAxis(e) {
    this.axis.visible = e
  }
  setAxisSize(e) {
    this.axis.setSize(e)
  }
  getVersion() {
    return Ai
  }
  getLicense() {
    return co()
  }
}
const ac = "\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nattribute vec3 a_position;\nvarying vec2 v_uv;\n\nconst vec2 SCALE = vec2(0.5, 0.5);\n\nvoid main () {\n  gl_Position = vec4(a_position.xy, 0.0, 1.0);\n  v_uv = (a_position.xy * SCALE) + SCALE;\n}\n",
  rc = "\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nuniform vec2 u_windowSize;\nuniform sampler2D u_sampler;\nuniform int u_orientation;\nuniform float u_blurRadius;\n\nvarying vec2 v_uv;\n\nconst float MAX_BLUR_RADIUS = 10.0;\n\nvoid main () {\n  vec4 color = vec4(0.0);\n  vec2 texelOffset;\n  if (u_orientation == 0) {\n    texelOffset = vec2(u_windowSize.x, 0.0);\n  } else {\n    texelOffset = vec2(0.0, u_windowSize.y);\n  }\n\n  float blurAmount = min(floor(u_blurRadius), MAX_BLUR_RADIUS);\n  float halfBlur = blurAmount * 0.5;\n  for (float i = 0.0; i < MAX_BLUR_RADIUS; ++i) {\n    if (i >= blurAmount) {\n      break;\n    }\n    float offset = i - halfBlur;\n    vec2 vOffset = v_uv + (texelOffset * offset);\n    color += texture2D(u_sampler, vOffset);\n  }\n\n  gl_FragColor = color / blurAmount;\n}\n",
  sc = "\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nuniform sampler2D u_sampler0; // color texture\nuniform sampler2D u_sampler1; // Blurred texture\n\nuniform vec2 u_windowSize;\nuniform float u_pixelRatio;\nuniform float u_tiltShiftType; // 0 tilt, 1 circle\nuniform float u_gradientRadius;\nuniform vec2 u_fromPoint;\nuniform vec2 u_toPoint;\nuniform vec2 u_center;\n\nvarying vec2 v_uv;\n\nfloat distanceFromPoint (in vec2 point) {\n  if (u_fromPoint.x == u_toPoint.x) {\n    return abs(point.x - u_fromPoint.x);\n  }\n  float lineK = (u_toPoint.y - u_fromPoint.y) / (u_toPoint.x - u_fromPoint.x);\n  float lineC = (u_toPoint.x * u_fromPoint.y - u_fromPoint.x * u_toPoint.y) /\n    (u_toPoint.x - u_fromPoint.x);\n  return abs(lineK * point.x - point.y + lineC) / (sqrt(lineK * lineK + 1.0));\n}\n\nvoid main () {\n  vec4 color = texture2D(u_sampler0, v_uv);\n  vec4 blur = texture2D(u_sampler1, v_uv);\n  vec2 point = vec2(\n    gl_FragCoord.x / u_pixelRatio,\n    (u_windowSize.y - gl_FragCoord.y) / u_pixelRatio\n  );\n  float _distance = 0.0;\n\n  if (u_tiltShiftType == 0.0) {\n    _distance = distanceFromPoint(point);\n  } else {\n    _distance = distance(u_center, point);\n  }\n\n  if (_distance >= u_gradientRadius) {\n    gl_FragColor = blur;\n  } else {\n    float percent = _distance / u_gradientRadius;\n    gl_FragColor = blur * percent + color * (1.0 - percent);\n  }\n}\n";
let lc = !1;
class uc extends gu {
  constructor(e) {
    var t;
    t = uc.prototype, lc || (lc = !0, no(t, [{
      name: "tiltShiftType",
      value: 0
    }, {
      name: "blurRadius",
      value: 3
    }, {
      name: "gradientRadius",
      value: 50
    }, {
      name: "fromPoint"
    }, {
      name: "toPoint"
    }, {
      name: "center"
    }])), super(e);
    this._fromPoint = [0, 0], this._toPoint = [0, 0], this._center = [0, 0], this._blurProgram = new cr({
      vertex: ac,
      fragment: rc
    }), this._tiltShiftProgram = new cr({
      vertex: ac,
      fragment: sc
    }), this._hBlurFramebuffer = new fa({
      width: 128,
      height: 128,
      depth: !1,
      stencil: !1
    }), this._vBlurFramebuffer = new fa({
      width: 128,
      height: 128,
      depth: !1,
      stencil: !1
    })
  }
  pass(e, t) {
    const n = this._gl,
      {
        quadVao: i
      } = n.cache,
      o = this._blurProgram,
      a = this._tiltShiftProgram,
      r = this._hBlurFramebuffer,
      s = this._vBlurFramebuffer;
    r.bind(n), o.use(n), o.bindUniforms({
      u_windowSize: [1 / r.getWidth(), 1 / r.getHeight()],
      u_sampler: 0,
      u_orientation: 0,
      u_blurRadius: this._blurRadius
    }), e.bindTexture(0), i.draw(n), s.bind(n), o.bindUniforms({
      u_orientation: 1
    }), r.bindTexture(0), i.draw(n), t ? t.bind(n) : (n.bindFramebuffer(n.FRAMEBUFFER, null), n.viewport(0, 0, n.canvas.width, n.canvas.height), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT)), a.use(n), a.bindUniforms({
      u_windowSize: [n.canvas.width, n.canvas.height],
      u_pixelRatio: window.devicePixelRatio,
      u_tiltShiftType: this._tiltShiftType,
      u_sampler0: 0,
      u_sampler1: 1,
      u_fromPoint: this._fromPoint,
      u_toPoint: this._toPoint,
      u_gradientRadius: this._gradientRadius,
      u_center: this._center
    }), e.bindTexture(0), s.bindTexture(1), i.draw(n)
  }
  getOutputTexture() {
    return this._vBlurFramebuffer.getTexture(0)
  }
}
const cc = "\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nattribute vec3 a_position;\n\nvarying vec2 v_uv;\n\nconst vec2 SCALE = vec2(0.5, 0.5);\n\nvoid main() {\n  v_uv = (a_position.xy * SCALE) + SCALE;\n  gl_Position = vec4(a_position.xy, 0.0, 1.0);\n}\n",
  dc = "\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nuniform sampler2D u_sampler;\nuniform vec2 u_center;\nuniform float u_strength;\nuniform vec2 u_windowSize;\n\nvarying vec2 v_uv;\n\nfloat random(vec3 scale, float seed) {\n  /* use the fragment position for a different seed per-pixel */\n  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main() {\n  vec4 color = vec4(0.0);\n  float total = 0.0;\n  vec2 toCenter = u_center - v_uv * u_windowSize;\n\n  /* randomize the lookup values to hide the fixed number of samples */\n  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n  for (float t = 0.0; t <= 10.0; t++) {\n    float percent = (t + offset) / 10.0;\n    float weight = 4.0 * (percent - percent * percent);\n    vec4 sample = texture2D(u_sampler, v_uv + toCenter * percent * u_strength / u_windowSize);\n\n    /* switch to pre-multiplied alpha to correctly blur transparent images */\n    sample.rgb *= sample.a;\n\n    color += sample * weight;\n    total += weight;\n  }\n\n  gl_FragColor = color / total;\n\n  /* switch back from pre-multiplied alpha */\n  gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n";
let fc = !1;
class hc extends gu {
  constructor(e) {
    var t;
    t = hc.prototype, fc || (fc = !0, no(t, [{
      name: "center"
    }, {
      name: "strength",
      value: 0
    }])), super(e);
    this._center = [0, 0], this._program = new cr({
      vertex: cc,
      fragment: dc
    })
  }
  pass(e, t) {
    const n = this._gl,
      {
        quadVao: i
      } = n.cache,
      o = this._program;
    t ? t.bind(n) : (n.bindFramebuffer(n.FRAMEBUFFER, null), n.viewport(0, 0, n.canvas.width, n.canvas.height), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT)), o.use(n), o.bindUniforms({
      u_sampler: 0,
      u_center: this._center,
      u_strength: this._strength,
      u_windowSize: [n.canvas.width / window.devicePixelRatio, n.canvas.height / window.devicePixelRatio]
    }), e.bindTexture(0), i.draw(n)
  }
  getOutputTexture() {
    return null
  }
}
let pc = !1;
class mc extends gu {
  constructor(e) {
    var t;
    t = mc.prototype, pc || (pc = !0, no(t, [{
      name: "flowImage",
      value: ""
    }, {
      name: "uvOffsetX",
      value: 0
    }, {
      name: "speed",
      value: 1
    }])), super(e);
    this.hidden = !1;
    this._flowProgram = dr("\n         layout(location = 0) in vec3 a_position;\n         layout(location = 2) in vec2 a_uv;\n         out vec2 v_uv;\n         void main () {\n          v_uv = a_uv;\n          vec4 position = vec4(a_position, 1.0);\n          gl_Position = position;\n          gl_Position.z = -0.5;\n         }\n     ", "\n        uniform sampler2D u_sampler;\n        uniform float uvOffsetX;\n        in vec2 v_uv;\n        out vec4 fragColor;\n        void main(){\n          vec2 uv = vec2(v_uv);\n          uv.x += 1.0 - uvOffsetX;\n          vec4 color = texture(u_sampler, uv);\n          fragColor = color;\n        }\n     "), this.play()
  }
  pass(e, t) {
    const n = this,
      i = n._gl,
      o = n._flowProgram,
      {
        quadVao: a
      } = i.cache;
    if (this.hidden) return;
    let r;
    if (n._flowTexture) r = n._flowTexture;
    else {
      if (n.flowImage) r = new Kr({
        url: n.flowImage,
        minFilter: "LINEAR",
        magFilter: "LINEAR",
        wrapS: "REPEAT",
        wrapT: "REPEAT",
        mipmap: !1
      });
      else {
        const e = n.createCanvas();
        r = new Kr({
          url: e,
          minFilter: "LINEAR_MIPMAP_LINEAR",
          magFilter: "LINEAR",
          wrapS: "REPEAT",
          wrapT: "REPEAT",
          mipmap: !0
        })
      }
      n._flowTexture = r
    }
    i.enable(i.BLEND), i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA), n.stencilTest("EQUAL"), o.use(i), o.bindUniform("uvOffsetX", n.uvOffsetX), r.bind(i, 0), a.draw(i), i.disable(i.BLEND), n.stencilTest("ALWAYS")
  }
  createCanvas() {
    const e = document.createElement("canvas");
    e.width = 1024, e.height = 1024;
    const t = e.getContext("2d");
    return t.strokeStyle = "white", t.lineWidth = 10, t.shadowColor = "white", t.shadowBlur = 20, t.beginPath(), t.moveTo(492, 2), t.lineTo(532, 1022), t.stroke(), e
  }
  stencilTest(e = "ALWAYS") {
    this._scene._renderer.state.setStencilTest(!0, e, 1, "KEEP")
  }
  dispose() {
    this._flowProgram.dispose(), this._flowTexture.dispose()
  }
  stop() {
    this.animate && this.animate.stop(!1), this.uvOffsetX = 0, this.hidden = !0, this._scene._renderer._dirty = !0
  }
  play() {
    const e = this;
    this.stop(), this.hidden = !1, this.animate = new gl({
      onUpdate(t) {
        e.uvOffsetX += e.speed / 100, e._scene._renderer._dirty = !0
      },
      onDone() {
        this.play()
      }
    }).play()
  }
}
var _c = gc,
  vc = gc;

function gc(e, t, n) {
  n = n || 2;
  var i, o, a, r, s, l, u, c = t && t.length,
    d = c ? t[0] * n : e.length,
    f = bc(e, 0, d, n, !0),
    h = [];
  if (!f || f.next === f.prev) return h;
  if (c && (f = function (e, t, n, i) {
      var o, a, r, s, l, u = [];
      for (o = 0, a = t.length; o < a; o++) r = t[o] * i, s = o < a - 1 ? t[o + 1] * i : e.length, (l = bc(e, r, s, i, !1)) === l.next && (l.steiner = !0), u.push(Ac(l));
      for (u.sort(Mc), o = 0; o < u.length; o++) Oc(u[o], n), n = Tc(n, n.next);
      return n
    }(e, t, f, n)), e.length > 80 * n) {
    i = a = e[0], o = r = e[1];
    for (var p = n; p < d; p += n)(s = e[p]) < i && (i = s), (l = e[p + 1]) < o && (o = l), s > a && (a = s), l > r && (r = l);
    u = 0 !== (u = Math.max(a - i, r - o)) ? 1 / u : 0
  }
  return xc(f, h, n, i, o, u), h
}

function bc(e, t, n, i, o) {
  var a, r;
  if (o === jc(e, t, n, i) > 0)
    for (a = t; a < n; a += i) r = Hc(a, e[a], e[a + 1], r);
  else
    for (a = n - i; a >= t; a -= i) r = Hc(a, e[a], e[a + 1], r);
  return r && Ic(r, r.next) && (Jc(r), r = r.next), r
}

function Tc(e, t) {
  if (!e) return e;
  t || (t = e);
  var n, i = e;
  do {
    if (n = !1, i.steiner || !Ic(i, i.next) && 0 !== Lc(i.prev, i, i.next)) i = i.next;
    else {
      if (Jc(i), (i = t = i.prev) === i.next) break;
      n = !0
    }
  } while (n || i !== t);
  return t
}

function xc(e, t, n, i, o, a, r) {
  if (e) {
    !r && a && function (e, t, n, i) {
      var o = e;
      do {
        null === o.z && (o.z = Ec(o.x, o.y, t, n, i)), o.prevZ = o.prev, o.nextZ = o.next, o = o.next
      } while (o !== e);
      o.prevZ.nextZ = null, o.prevZ = null,
        function (e) {
          var t, n, i, o, a, r, s, l, u = 1;
          do {
            for (n = e, e = null, a = null, r = 0; n;) {
              for (r++, i = n, s = 0, t = 0; t < u && (s++, i = i.nextZ); t++);
              for (l = u; s > 0 || l > 0 && i;) 0 !== s && (0 === l || !i || n.z <= i.z) ? (o = n, n = n.nextZ, s--) : (o = i, i = i.nextZ, l--), a ? a.nextZ = o : e = o, o.prevZ = a, a = o;
              n = i
            }
            a.nextZ = null, u *= 2
          } while (r > 1)
        }(o)
    }(e, i, o, a);
    for (var s, l, u = e; e.prev !== e.next;)
      if (s = e.prev, l = e.next, a ? wc(e, i, o, a) : Sc(e)) t.push(s.i / n), t.push(e.i / n), t.push(l.i / n), Jc(e), e = l.next, u = l.next;
      else if ((e = l) === u) {
      r ? 1 === r ? xc(e = yc(Tc(e), t, n), t, n, i, o, a, 2) : 2 === r && Pc(e, t, n, i, o, a) : xc(Tc(e), t, n, i, o, a, 1);
      break
    }
  }
}

function Sc(e) {
  var t = e.prev,
    n = e,
    i = e.next;
  if (Lc(t, n, i) >= 0) return !1;
  for (var o = e.next.next; o !== e.prev;) {
    if (Cc(t.x, t.y, n.x, n.y, i.x, i.y, o.x, o.y) && Lc(o.prev, o, o.next) >= 0) return !1;
    o = o.next
  }
  return !0
}

function wc(e, t, n, i) {
  var o = e.prev,
    a = e,
    r = e.next;
  if (Lc(o, a, r) >= 0) return !1;
  for (var s = o.x < a.x ? o.x < r.x ? o.x : r.x : a.x < r.x ? a.x : r.x, l = o.y < a.y ? o.y < r.y ? o.y : r.y : a.y < r.y ? a.y : r.y, u = o.x > a.x ? o.x > r.x ? o.x : r.x : a.x > r.x ? a.x : r.x, c = o.y > a.y ? o.y > r.y ? o.y : r.y : a.y > r.y ? a.y : r.y, d = Ec(s, l, t, n, i), f = Ec(u, c, t, n, i), h = e.prevZ, p = e.nextZ; h && h.z >= d && p && p.z <= f;) {
    if (h !== e.prev && h !== e.next && Cc(o.x, o.y, a.x, a.y, r.x, r.y, h.x, h.y) && Lc(h.prev, h, h.next) >= 0) return !1;
    if (h = h.prevZ, p !== e.prev && p !== e.next && Cc(o.x, o.y, a.x, a.y, r.x, r.y, p.x, p.y) && Lc(p.prev, p, p.next) >= 0) return !1;
    p = p.nextZ
  }
  for (; h && h.z >= d;) {
    if (h !== e.prev && h !== e.next && Cc(o.x, o.y, a.x, a.y, r.x, r.y, h.x, h.y) && Lc(h.prev, h, h.next) >= 0) return !1;
    h = h.prevZ
  }
  for (; p && p.z <= f;) {
    if (p !== e.prev && p !== e.next && Cc(o.x, o.y, a.x, a.y, r.x, r.y, p.x, p.y) && Lc(p.prev, p, p.next) >= 0) return !1;
    p = p.nextZ
  }
  return !0
}

function yc(e, t, n) {
  var i = e;
  do {
    var o = i.prev,
      a = i.next.next;
    !Ic(o, a) && Dc(o, i, i.next, a) && Uc(o, a) && Uc(a, o) && (t.push(o.i / n), t.push(i.i / n), t.push(a.i / n), Jc(i), Jc(i.next), i = e = a), i = i.next
  } while (i !== e);
  return Tc(i)
}

function Pc(e, t, n, i, o, a) {
  var r = e;
  do {
    for (var s = r.next.next; s !== r.prev;) {
      if (r.i !== s.i && Rc(r, s)) {
        var l = kc(r, s);
        return r = Tc(r, r.next), l = Tc(l, l.next), xc(r, t, n, i, o, a), void xc(l, t, n, i, o, a)
      }
      s = s.next
    }
    r = r.next
  } while (r !== e)
}

function Mc(e, t) {
  return e.x - t.x
}

function Oc(e, t) {
  if (t = function (e, t) {
      var n, i = t,
        o = e.x,
        a = e.y,
        r = -1 / 0;
      do {
        if (a <= i.y && a >= i.next.y && i.next.y !== i.y) {
          var s = i.x + (a - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
          if (s <= o && s > r) {
            if (r = s, s === o) {
              if (a === i.y) return i;
              if (a === i.next.y) return i.next
            }
            n = i.x < i.next.x ? i : i.next
          }
        }
        i = i.next
      } while (i !== t);
      if (!n) return null;
      if (o === r) return n;
      var l, u = n,
        c = n.x,
        d = n.y,
        f = 1 / 0;
      i = n;
      do {
        o >= i.x && i.x >= c && o !== i.x && Cc(a < d ? o : r, a, c, d, a < d ? r : o, a, i.x, i.y) && (l = Math.abs(a - i.y) / (o - i.x), Uc(i, e) && (l < f || l === f && (i.x > n.x || i.x === n.x && Nc(n, i))) && (n = i, f = l)), i = i.next
      } while (i !== u);
      return n
    }(e, t)) {
    var n = kc(t, e);
    Tc(n, n.next)
  }
}

function Nc(e, t) {
  return Lc(e.prev, e, t.prev) < 0 && Lc(t.next, e, e.next) < 0
}

function Ec(e, t, n, i, o) {
  return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * o) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * o) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
}

function Ac(e) {
  var t = e,
    n = e;
  do {
    (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next
  } while (t !== e);
  return n
}

function Cc(e, t, n, i, o, a, r, s) {
  return (o - r) * (t - s) - (e - r) * (a - s) >= 0 && (e - r) * (i - s) - (n - r) * (t - s) >= 0 && (n - r) * (a - s) - (o - r) * (i - s) >= 0
}

function Rc(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && ! function (e, t) {
    var n = e;
    do {
      if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Dc(n, n.next, e, t)) return !0;
      n = n.next
    } while (n !== e);
    return !1
  }(e, t) && (Uc(e, t) && Uc(t, e) && function (e, t) {
    var n = e,
      i = !1,
      o = (e.x + t.x) / 2,
      a = (e.y + t.y) / 2;
    do {
      n.y > a != n.next.y > a && n.next.y !== n.y && o < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
    } while (n !== e);
    return i
  }(e, t) && (Lc(e.prev, e, t.prev) || Lc(e, t.prev, t)) || Ic(e, t) && Lc(e.prev, e, e.next) > 0 && Lc(t.prev, t, t.next) > 0)
}

function Lc(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
}

function Ic(e, t) {
  return e.x === t.x && e.y === t.y
}

function Dc(e, t, n, i) {
  var o = Fc(Lc(e, t, n)),
    a = Fc(Lc(e, t, i)),
    r = Fc(Lc(n, i, e)),
    s = Fc(Lc(n, i, t));
  return o !== a && r !== s || (!(0 !== o || !zc(e, n, t)) || (!(0 !== a || !zc(e, i, t)) || (!(0 !== r || !zc(n, e, i)) || !(0 !== s || !zc(n, t, i)))))
}

function zc(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y)
}

function Fc(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0
}

function Uc(e, t) {
  return Lc(e.prev, e, e.next) < 0 ? Lc(e, t, e.next) >= 0 && Lc(e, e.prev, t) >= 0 : Lc(e, t, e.prev) < 0 || Lc(e, e.next, t) < 0
}

function kc(e, t) {
  var n = new Vc(e.i, e.x, e.y),
    i = new Vc(t.i, t.x, t.y),
    o = e.next,
    a = t.prev;
  return e.next = t, t.prev = e, n.next = o, o.prev = n, i.next = n, n.prev = i, a.next = i, i.prev = a, i
}

function Hc(e, t, n, i) {
  var o = new Vc(e, t, n);
  return i ? (o.next = i.next, o.prev = i, i.next.prev = o, i.next = o) : (o.prev = o, o.next = o), o
}

function Jc(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
}

function Vc(e, t, n) {
  this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
}

function jc(e, t, n, i) {
  for (var o = 0, a = t, r = n - i; a < n; a += i) o += (e[r] - e[a]) * (e[a + 1] + e[r + 1]), r = a;
  return o
}

function Bc(e, t) {
  const n = e[0] - t[0],
    i = e[1] - t[1];
  return n * n + i * i
}

function Xc(e, t, n) {
  let i = t[0],
    o = t[1],
    a = n[0] - i,
    r = n[1] - o;
  if (0 !== a || 0 !== r) {
    const t = ((e[0] - i) * a + (e[1] - o) * r) / (a * a + r * r);
    t > 1 ? [i, o] = n : t > 0 && (i += a * t, o += r * t)
  }
  return (a = e[0] - i) * a + (r = e[1] - o) * r
}

function Gc(e, t) {
  const n = e.length - 1,
    i = [e[0]];
  return function e(t, n, i, o, a) {
    let r, s = o;
    for (let e = n + 1; e < i; e++) {
      const o = Xc(t[e], t[n], t[i]);
      o > s && (r = e, s = o)
    }
    s > o && (r - n > 1 && e(t, n, r, o, a), a.push(t[r]), i - r > 1 && e(t, r, i, o, a))
  }(e, 0, n, t, i), i.push(e[n]), i
}

function Wc(e, t, n) {
  if (e.length <= 2) return e;
  const i = void 0 !== t ? t * t : 1;
  let o = n ? e : function (e, t) {
    let n = e[0];
    const i = [n];
    let o;
    for (let a = 1, r = e.length; a < r; a++) Bc(o = e[a], n) > t && (i.push(o), n = o);
    return n !== o && i.push(o), i
  }(e, i);
  return o = Gc(o, i)
}

function Zc(e, t, n = 2) {
  return _c(e, t, n)
}

function qc(e) {
  return _c.flatten(e)
}

function Kc(e, t, n) {
  if (n - t < 3) return 0;
  let i = 0;
  for (let o = 2 * (n - 1), a = 2 * t; a < 2 * n;) {
    const t = e[o],
      n = e[o + 1],
      r = e[a],
      s = e[a + 1];
    o = a, a += 2, i += t * s - r * n
  }
  return i
}
gc.deviation = function (e, t, n, i) {
  var o = t && t.length,
    a = o ? t[0] * n : e.length,
    r = Math.abs(jc(e, 0, a, n));
  if (o)
    for (var s = 0, l = t.length; s < l; s++) {
      var u = t[s] * n,
        c = s < l - 1 ? t[s + 1] * n : e.length;
      r -= Math.abs(jc(e, u, c, n))
    }
  var d = 0;
  for (s = 0; s < i.length; s += 3) {
    var f = i[s] * n,
      h = i[s + 1] * n,
      p = i[s + 2] * n;
    d += Math.abs((e[f] - e[p]) * (e[h + 1] - e[f + 1]) - (e[f] - e[h]) * (e[p + 1] - e[f + 1]))
  }
  return 0 === r && 0 === d ? 0 : Math.abs((d - r) / r)
}, gc.flatten = function (e) {
  for (var t = e[0][0].length, n = {
      vertices: [],
      holes: [],
      dimensions: t
    }, i = 0, o = 0; o < e.length; o++) {
    for (var a = 0; a < e[o].length; a++)
      for (var r = 0; r < t; r++) n.vertices.push(e[o][a][r]);
    o > 0 && (i += e[o - 1].length, n.holes.push(i))
  }
  return n
}, _c.default = vc;
const Yc = [];

function Qc(e, t, n, i) {
  const o = Y.dot(t, n),
    a = Math.acos(o) * i;
  return Y.scaleAndAdd(Yc, n, t, -o), Y.normalize(Yc, Yc), Y.scale(e, t, Math.cos(a)), Y.scaleAndAdd(e, e, Yc, Math.sin(a)), e
}

function $c(e, t, n) {
  for (let i = 0; i < e.length; i++) t[0] = Math.min(e[i][0], t[0]), t[1] = Math.min(e[i][1], t[1]), n[0] = Math.max(e[i][0], n[0]), n[1] = Math.max(e[i][1], n[1])
}
const ed = [],
  td = [],
  nd = [];

function id(e, t, n, i, o, a, r, s) {
  const l = null != r;
  let u = o,
    c = null;
  c = new Uint32Array(i - n);
  for (let o = n; o < i; o++) {
    const d = o === i - 1 ? n : o + 1,
      f = o === n ? i - 1 : o - 1,
      h = e[2 * f],
      p = e[2 * f + 1],
      m = e[2 * o],
      _ = e[2 * o + 1],
      v = e[2 * d],
      g = e[2 * d + 1];
    if (ed[0] = m - h, ed[1] = _ - p, td[0] = v - m, td[1] = g - _, Lt.normalize(ed, ed), Lt.normalize(td, td), c[o] = u, s || o !== n)
      if (s || o !== i - 1) {
        Lt.add(nd, td, ed);
        const e = nd[1];
        nd[1] = -nd[0], nd[0] = e, Lt.normalize(nd, nd);
        const n = Lt.dot(nd, td),
          i = Math.sqrt(1 - n * n),
          o = a * Math.min(10, 1 / i),
          s = a * n < 0;
        if (l && 1 / i > r && s) {
          const e = m + nd[0] * a,
            n = _ + nd[1] * a,
            o = Math.acos(i) / 2,
            r = Math.tan(o) * Math.abs(a);
          t[2 * u] = e + nd[1] * r, t[2 * u + 1] = n - nd[0] * r, t[2 * ++u] = e - nd[1] * r, t[2 * u + 1] = n + nd[0] * r, u++
        } else t[2 * u] = m + nd[0] * o, t[2 * u + 1] = _ + nd[1] * o, u++
      } else Lt.set(nd, ed[1], -ed[0]), Lt.normalize(nd, nd), t[2 * u] = m + nd[0] * a, t[2 * u + 1] = _ + nd[1] * a, u++;
    else Lt.set(nd, td[1], -td[0]), Lt.normalize(nd, nd), t[2 * u] = m + nd[0] * a, t[2 * u + 1] = _ + nd[1] * a, u++
  }
  return c
}

function od(e, t, n, i, o) {
  const a = null != i ? [] : new Float32Array(e.length);
  if (id(e, a, 0, t && t.length ? t[0] : e.length / 2, 0, n, i, o), t)
    for (let r = 0; r < t.length; r++) {
      const s = t[r];
      id(e, a, s, t[r + 1] || e.length / 2, null != i ? a.length / 2 : s, n, i, o)
    }
  return a
}

function ad(e, t, n, i) {
  for (let o = 0; o < Math.floor((i - n) / 2); o++)
    for (let a = 0; a < t; a++) {
      const r = (o + n) * t + a,
        s = (i - o - 1) * t + a,
        l = e[r];
      e[r] = e[s], e[s] = l
    }
  return e
}

function rd(e) {
  e.depth = null == e.depth ? 1 : e.depth, e.bevelSize = e.bevelSize || 0, e.bevelSegments = null == e.bevelSegments ? 2 : e.bevelSegments, e.smoothSide = e.smoothSide || !1, e.smoothBevel = e.smoothBevel || !1, e.simplify = e.simplify || 0, "number" == typeof e.depth && (e.bevelSize = Math.min(e.bevelSegments > 0 ? e.bevelSize : 0, e.depth / 2)), e.bevelSize > 0 || (e.bevelSegments = 0), e.bevelSegments = Math.round(e.bevelSegments);
  const {
    boundingRect: t
  } = e;
  if (e.translate = e.translate || [0, 0], e.scale = e.scale || [1, 1], e.fitRect) {
    const n = null == e.fitRect.x ? t.x || 0 : e.fitRect.x,
      i = null == e.fitRect.y ? t.y || 0 : e.fitRect.y;
    let o = e.fitRect.width,
      a = e.fitRect.height;
    null == o ? null != a ? o = a / t.height * t.width : (o = t.width, a = t.height) : null == a && (a = o / t.width * t.height), e.scale = [o / t.width, a / t.height], e.translate = [(n - t.x) * e.scale[0], (i - t.y) * e.scale[1]]
  }
}
const sd = [
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 0],
  [1, 1],
  [0, 1]
];

function ld(e, {
  vertices: t,
  topVertices: n,
  depth: i,
  rect: o
}, a, r, s, l) {
  const u = r - a,
    c = l.smoothSide ? 1 : 2,
    d = u * c,
    f = l.smoothBevel ? 1 : 2,
    h = Math.min(i / 2, l.bevelSize),
    {
      bevelSegments: p
    } = l,
    m = s.vertex,
    _ = Math.max(o.width, o.height);
  if (h > 0) {
    const o = [0, 0, 1];
    Y.set(td, 0, 0, -1);
    let r = 0;
    const l = new Float32Array(u);
    for (let v = 0; v < 2; v++) {
      const g = 0 === v ? i - h : h;
      for (let b = 0; b <= p * f; b++) {
        let T, x, S = 0;
        for (let w = 0; w < u; w++) {
          for (let r = 0; r < c; r++) {
            const c = 2 * ((w + r) % u + a);
            ed[0] = t[c] - n[c], ed[1] = t[c + 1] - n[c + 1], ed[2] = 0;
            const m = Math.sqrt(ed[0] * ed[0] + ed[1] * ed[1]);
            ed[0] /= m, ed[1] /= m;
            const y = (Math.floor(b / f) + b % f) / p;
            0 === v ? Qc(nd, o, ed, y) : Qc(nd, ed, td, y);
            const P = 0 === v ? y : 1 - y,
              M = h * Math.sin(P * Math.PI / 2),
              O = m * Math.cos(P * Math.PI / 2),
              N = h * m / Math.sqrt(M * M + O * O),
              E = nd[0] * N + n[c],
              A = nd[1] * N + n[c + 1],
              C = nd[2] * N + g;
            if (e.normal0[3 * s.vertex] = i, e.normal0[3 * s.vertex + 1] = i, e.normal0[3 * s.vertex + 2] = i, e.position[3 * s.vertex] = E, e.position[3 * s.vertex + 1] = A, e.position[3 * s.vertex + 2] = C, (w > 0 || r > 0) && (S += Math.sqrt((T - E) * (T - E) + (x - A) * (x - A))), b > 0 || v > 0) {
              const t = 3 * (s.vertex - d),
                n = e.position[t],
                i = e.position[t + 1],
                o = e.position[t + 2];
              l[w] += Math.sqrt((n - E) * (n - E) + (i - A) * (i - A) + (o - C) * (o - C))
            }
            e.uv[2 * s.vertex] = S / _, e.uv[2 * s.vertex + 1] = l[w] / _, T = E, x = A, s.vertex++
          }
          if (f > 1 && b % f || 1 === f && b >= 1)
            for (let t = 0; t < 6; t++) {
              const n = (sd[t][0] + w * c) % d,
                i = sd[t][1] + r;
              e.indices[s.index++] = (i - 1) * d + n + m
            }
        }
        r++
      }
    }
  } else
    for (let n = 0; n < 2; n++) {
      const o = 0 === n ? i - h : h;
      for (let n = 0; n < u; n++)
        for (let r = 0; r < c; r++) {
          const l = 2 * ((n + r) % u + a),
            c = t[l],
            d = t[l + 1];
          e.normal0[3 * s.vertex] = i, e.normal0[3 * s.vertex + 1] = i, e.normal0[3 * s.vertex + 2] = i, e.position[3 * s.vertex] = c, e.position[3 * s.vertex + 1] = d, e.position[3 * s.vertex + 2] = o, e.uv[2 * s.vertex] = 1 - r, e.uv[2 * s.vertex + 1] = o / i, s.vertex++
        }
    }
  const v = h > 0 ? p * f + 1 : 1;
  for (let t = 0; t < u; t++)
    for (let n = 0; n < 6; n++) {
      const i = (sd[n][0] + t * c) % d,
        o = sd[n][1] + v;
      e.indices[s.index++] = (o - 1) * d + i + m
    }
}

function ud({
  indices: e,
  vertices: t,
  topVertices: n,
  rect: i,
  depth: o,
  uvs: a
}, r, s, l) {
  if (t.length <= 4) return;
  const u = s.vertex,
    c = e.length;
  for (let t = 0; t < c; t++) r.indices[s.index++] = u + e[t];
  for (let e = 0; e < (l.excludeBottom ? 1 : 2); e++)
    for (let t = 0; t < n.length; t += 2) {
      const l = n[t],
        u = n[t + 1];
      r.normal0[3 * s.vertex] = o, r.normal0[3 * s.vertex + 1] = o, r.normal0[3 * s.vertex + 2] = o, r.position[3 * s.vertex] = l, r.position[3 * s.vertex + 1] = u, r.position[3 * s.vertex + 2] = (1 - e) * o, a || (r.uv[2 * s.vertex] = (l - i.x) / i.width, r.uv[2 * s.vertex + 1] = (u - i.y) / i.height), s.vertex++
    }
  if (!l.excludeBottom) {
    const n = t.length / 2;
    for (let t = 0; t < c; t += 3)
      for (let i = 0; i < 3; i++) r.indices[s.index++] = u + n + e[t + 2 - i]
  }
}

function cd(e, t) {
  let n = 0,
    i = 0,
    o = 0;
  const a = [];
  for (let r = 0; r < e.length; r++) {
    const {
      indices: s,
      vertices: l,
      holes: u,
      depth: c,
      distances: d,
      points: f
    } = e[r];
    f && a.push(f);
    const h = l.length / 2,
      p = Math.min(c / 2, t.bevelSize) > 0 ? t.bevelSegments : 0;
    d && (o += d.length), t.excludeTop || (n += s.length * (t.excludeBottom ? 1 : 2), i += h * (t.excludeBottom ? 1 : 2));
    const m = 2 + 2 * p;
    if (!t.excludeSide) {
      let e = 0,
        o = 0;
      for (let a = 0; a < (u ? u.length : 0) + 1; a++) {
        0 === a ? o = u && u.length ? u[0] : h : (e = u[a - 1], o = u[a] || h), n += 6 * (o - e) * (m - 1);
        const r = (o - e) * (t.smoothSide ? 1 : 2);
        i += r * m + (t.smoothBevel ? 0 : p * r * 2)
      }
    }
  }
  const r = {
    normal0: new Float32Array(3 * i),
    position: new Float32Array(3 * i),
    indices: new(i > 65535 ? Uint32Array : Uint16Array)(n),
    uv: new Float32Array(2 * i)
  };
  if (o > 0) {
    const t = new Float32Array(o);
    let n = 0,
      i = 0;
    for (let o = 0; o < e.length; o++) {
      const {
        distances: a,
        uvs: s
      } = e[o];
      t.set(a, n), n += a.length, r.uv.set(s, i), i += s.length
    }
    r.distance = t
  }
  const s = {
    vertex: 0,
    index: 0
  };
  if (!t.excludeTop)
    for (let n = 0; n < e.length; n++) ud(e[n], r, s, t);
  if (!t.excludeSide)
    for (let n = 0; n < e.length; n++) {
      const {
        holes: i,
        vertices: o
      } = e[n], a = o.length / 2;
      let l = 0,
        u = i && i.length ? i[0] : a;
      if (ld(r, e[n], l, u, s, t), i)
        for (let o = 0; o < i.length; o++) l = i[o], u = i[o + 1] || a, ld(r, e[n], l, u, s, t)
    }
  for (let e = 0; e < r.uv.length; e++) {
    const t = r.uv[e];
    t > 0 && Math.round(t) === t ? r.uv[e] = 1 : r.uv[e] = t % 1
  }
  return r.normal = function (e, t) {
    const n = [],
      i = [],
      o = [],
      a = [],
      r = [],
      s = [],
      l = e.length,
      u = new Float32Array(t.length);
    for (let c = 0; c < l;) {
      const l = 3 * e[c++],
        d = 3 * e[c++],
        f = 3 * e[c++];
      Y.set(n, t[l], t[l + 1], t[l + 2]), Y.set(i, t[d], t[d + 1], t[d + 2]), Y.set(o, t[f], t[f + 1], t[f + 2]), Y.sub(a, n, i), Y.sub(r, i, o), Y.cross(s, a, r);
      for (let e = 0; e < 3; e++) u[l + e] = u[l + e] + s[e], u[d + e] = u[d + e] + s[e], u[f + e] = u[f + e] + s[e]
    }
    for (let e = 0; e < u.length;) Y.set(s, u[e], u[e + 1], u[e + 2]), Y.normalize(s, s), [u[e++], u[e++], u[e++]] = s;
    return u
  }(r.indices, r.position), r.boundingRect = e[0] && e[0].rect, r.points = a, r
}

function dd(e, t, n) {
  const {
    lineWidth: i,
    transform: o
  } = n, a = e.length, r = new Float32Array(2 * a), s = n.translate || [0, 0], l = n.scale || [1, 1], u = new Float32Array(2 * a), c = new Float32Array(2 * a * 2);
  let d = 0;
  const f = Lt.create(),
    h = Lt.create();
  for (let t = 0, n = 0; t < a; t++) {
    if (o) {
      const i = o(e[t][0], e[t][1]);
      [r[n++], r[n++]] = i
    } else r[n++] = e[t][0] * l[0] + s[0], r[n++] = e[t][1] * l[1] + s[1];
    if (Lt.set(h, r[n - 2], r[n - 1]), 0 !== t) {
      d += Lt.distance(h, f)
    }
    u[t] = d, Lt.copy(f, h)
  }
  for (let e = 0; e < a; e++) u[e] /= d, u[2 * a - 1 - e] = u[e], c[2 * e] = u[e], c[2 * e + 1] = 0, c[2 * (2 * a - 1 - e)] = u[e], c[2 * (2 * a - 1 - e) + 1] = 1;
  const p = new Float32Array(r);
  Kc(r, 0, a);
  const m = [],
    _ = [],
    {
      miterLimit: v
    } = n,
    g = id(r, _, 0, a, 0, -i / 2, v, !1);
  ad(r, 2, 0, a);
  const b = id(r, m, 0, a, 0, -i / 2, v, !1),
    T = (m.length + _.length) / 2,
    x = new Float32Array(2 * T);
  let S = 0;
  const w = _.length / 2;
  for (let e = 0; e < _.length; e++) x[S++] = _[e];
  for (let e = 0; e < m.length; e++) x[S++] = m[e];
  const y = new(T > 65535 ? Uint32Array : Uint16Array)(3 * (2 * (a - 1) + (T - 2 * a)));
  let P = 0;
  for (let e = 0; e < a - 1; e++) {
    const t = e + 1;
    y[P++] = w - 1 - g[e], y[P++] = w - 1 - g[e] - 1, y[P++] = b[e] + 1 + w, y[P++] = w - 1 - g[e], y[P++] = b[e] + 1 + w, y[P++] = b[e] + w, b[t] - b[e] == 2 ? (y[P++] = b[e] + 2 + w, y[P++] = b[e] + 1 + w, y[P++] = w - g[t] - 1) : g[t] - g[e] == 2 && (y[P++] = b[t] + w, y[P++] = w - 1 - (g[e] + 1), y[P++] = w - 1 - (g[e] + 2))
  }
  const M = n.bevelSize > 0 ? od(x, [], n.bevelSize, null, !0) : x,
    {
      boundingRect: O
    } = n;
  return {
    vertices: x,
    indices: y,
    topVertices: M,
    distances: u,
    uvs: c,
    points: {
      points: p,
      name: n.name && n.name(t)
    },
    rect: {
      x: O.x * l[0] + s[0],
      y: O.y * l[1] + s[1],
      width: O.width * l[0],
      height: O.height * l[1]
    },
    depth: "function" == typeof n.depth ? n.depth(t) : n.depth,
    holes: []
  }
}

function fd(e, t = {}) {
  const n = [1 / 0, 1 / 0],
    i = [-1 / 0, -1 / 0];
  for (let t = 0; t < e.length; t++) $c(e[t][0], n, i);
  t.boundingRect = t.boundingRect || {
    x: n[0],
    y: n[1],
    width: i[0] - n[0],
    height: i[1] - n[1]
  }, rd(t);
  const o = [],
    a = t.translate || [0, 0],
    r = t.scale || [1, 1],
    {
      transform: s,
      boundingRect: l
    } = t,
    u = {
      x: l.x * r[0] + a[0],
      y: l.y * r[1] + a[1],
      width: l.width * r[0],
      height: l.height * r[1]
    },
    c = Math.min(l.width, l.height) / 1e5;
  return e.forEach((e, n) => {
    let i = function (e, t) {
      const n = [];
      for (let i = 0; i < e.length; i++) {
        const o = e[i],
          a = [],
          r = o.length;
        let s = o[r - 1][0],
          l = o[r - 1][1],
          u = 0;
        for (let e = 0; e < r; e++) {
          const n = o[e][0],
            i = o[e][1],
            r = n - s,
            c = i - l;
          (u += Math.sqrt(r * r + c * c)) > t && (a.push(o[e]), u = 0), s = n, l = i
        }
        a.length >= 3 && n.push(a)
      }
      return n.length > 0 ? n : null
    }(e, c);
    if (!i) return;
    const l = t.simplify / Math.max(r[0], r[1]);
    if (l > 0 && (i = function (e, t) {
        const n = [];
        for (let i = 0; i < e.length; i++) {
          let o = e[i];
          (o = Wc(o, t, !0)).length >= 3 && n.push(o)
        }
        return n.length > 0 ? n : null
      }(i, l)), !i) return;
    const {
      vertices: d,
      holes: f,
      dimensions: h
    } = _c.flatten(i);
    for (let e = 0; e < d.length;)
      if (s) {
        const t = s(d[e], d[e + 1]);
        [d[e], d[e + 1]] = t, e += 2
      } else d[e] = d[e++] * r[0] + a[0], d[e] = d[e++] * r[1] + a[1];
    if (function (e, t) {
        const n = e.length / 2;
        let i = 0,
          o = t && t.length ? t[0] : n;
        Kc(e, i, o) > 0 && ad(e, 2, i, o);
        for (let a = 1; a < (t ? t.length : 0) + 1; a++) Kc(e, i = t[a - 1], o = t[a] || n) < 0 && ad(e, 2, i, o)
      }(d, f), 2 !== h) throw new Error("Only 2D polygon points are supported");
    const p = t.bevelSize > 0 ? od(d, f, t.bevelSize, null, !0) : d,
      m = Zc(p, f, h);
    o.push({
      indices: m,
      vertices: d,
      topVertices: p,
      holes: f,
      rect: u,
      depth: "function" == typeof t.depth ? t.depth(n) : t.depth
    })
  }), cd(o, t)
}

function hd(e, t = {}) {
  const n = [1 / 0, 1 / 0],
    i = [-1 / 0, -1 / 0];
  for (let t = 0; t < e.length; t++) $c(e[t], n, i);
  t.boundingRect = t.boundingRect || {
    x: n[0],
    y: n[1],
    width: i[0] - n[0],
    height: i[1] - n[1]
  }, rd(t);
  const o = t.scale || [1, 1];
  null == t.lineWidth && (t.lineWidth = 1);
  const a = [];
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    const r = t.simplify / Math.max(o[0], o[1]);
    r > 0 && (i = Wc(i, r, !0)), a.push(dd(i, n, t))
  }
  return cd(a, t)
}

function pd(e, t = {}) {
  const n = [],
    i = [],
    o = [],
    a = [],
    r = [1 / 0, 1 / 0],
    s = [-1 / 0, -1 / 0];
  for (let l = 0; l < e.features.length; l++) {
    const u = e.features[l],
      {
        geometry: c
      } = u;
    if ((!t.filter || t.filter(u)) && c && c.coordinates) switch (c.type) {
      case "LineString":
        n.push(c.coordinates), o.push(l), $c(c.coordinates, r, s);
        break;
      case "MultiLineString":
        for (let e = 0; e < c.coordinates.length; e++) n.push(c.coordinates[e]), o.push(l), $c(c.coordinates[e], r, s);
        break;
      case "Polygon":
        i.push(c.coordinates), a.push(l), $c(c.coordinates[0], r, s);
        break;
      case "MultiPolygon":
        for (let e = 0; e < c.coordinates.length; e++) i.push(c.coordinates[e]), a.push(l), $c(c.coordinates[e][0], r, s)
    }
  }
  t.boundingRect = t.boundingRect || {
    x: r[0],
    y: r[1],
    width: s[0] - r[0],
    height: s[1] - r[1]
  };
  const l = t.depth,
    u = t.name;
  return {
    polyline: hd(n, Object.assign(t, {
      depth: t => "function" == typeof l ? l(e.features[o[t]]) : l,
      name: t => u && u(e.features[o[t]])
    })),
    polygon: fd(i, Object.assign(t, {
      depth: t => "function" == typeof l ? l(e.features[a[t]]) : l,
      name: t => u && u(e.features[a[t]])
    }))
  }
}
class md {
  constructor(e, t) {
    this.normal = e, this.w = t
  }
  clone() {
    return new md(this.normal.clone(), this.w)
  }
  flip() {
    this.normal = this.normal.negated(), this.w = -this.w
  }
  static fromPoints(e, t, n) {
    const i = t.minus(e).cross(n.minus(e)).unit();
    return new md(i, i.dot(e))
  }
}
class _d {
  constructor(e, t) {
    this.vertices = e, this.shared = t, this.plane = md.fromPoints(e[0].pos, e[1].pos, e[2].pos)
  }
  clone() {
    const e = this.vertices.map(e => e.clone());
    return new _d(e, this.shared)
  }
  flip() {
    this.vertices.reverse().forEach(e => {
      e.flip()
    }), this.plane.flip()
  }
  static splitPolygon(e, t, n, i, o, a) {
    let r = 0;
    const s = [];
    for (let n = 0; n < t.vertices.length; n++) {
      const i = e.normal.dot(t.vertices[n].pos) - e.w;
      let o;
      r |= o = i < -_d.EPSILON ? 2 : i > _d.EPSILON ? 1 : 0, s.push(o)
    }
    switch (r) {
      case 0:
        (e.normal.dot(t.plane.normal) > 0 ? n : i).push(t);
        break;
      case 1:
        o.push(t);
        break;
      case 2:
        a.push(t);
        break;
      case 3: {
        const n = [],
          i = [];
        for (let o = 0; o < t.vertices.length; o++) {
          const a = (o + 1) % t.vertices.length,
            r = s[o],
            l = s[a],
            u = t.vertices[o],
            c = t.vertices[a];
          if (2 !== r && n.push(u), 1 !== r && i.push(2 !== r ? u.clone() : u), 3 == (r | l)) {
            const t = (e.w - e.normal.dot(u.pos)) / e.normal.dot(c.pos.minus(u.pos)),
              o = u.interpolate(c, t);
            n.push(o), i.push(o.clone())
          }
        }
        n.length >= 3 && o.push(new _d(n, t.shared)), i.length >= 3 && a.push(new _d(i, t.shared));
        break
      }
    }
  }
}
_d.EPSILON = 1e-5;
class vd {
  constructor(e) {
    this.plane = null, this.front = null, this.back = null, this.polygons = [], e && this.build(e)
  }
  clone() {
    const e = new vd;
    return e.plane = this.plane && this.plane.clone(), e.front = this.front && this.front.clone(), e.back = this.back && this.back.clone(), e.polygons = this.polygons.map(e => e.clone()), e
  }
  invert() {
    for (let e = 0; e < this.polygons.length; e++) this.polygons[e].flip();
    this.plane.flip(), this.front && this.front.invert(), this.back && this.back.invert();
    const e = this.front;
    this.front = this.back, this.back = e
  }
  clipPolygons(e) {
    if (!this.plane) return e.slice();
    let t = [],
      n = [];
    for (let i = 0; i < e.length; i++) _d.splitPolygon(this.plane, e[i], t, n, t, n);
    return this.front && (t = this.front.clipPolygons(t)), n = this.back ? this.back.clipPolygons(n) : [], t.concat(n)
  }
  clipTo(e) {
    this.polygons = e.clipPolygons(this.polygons), this.front && this.front.clipTo(e), this.back && this.back.clipTo(e)
  }
  allPolygons() {
    let e = this.polygons.slice();
    return this.front && (e = e.concat(this.front.allPolygons())), this.back && (e = e.concat(this.back.allPolygons())), e
  }
  build(e) {
    if (!e.length) return;
    this.plane || (this.plane = e[0].plane.clone());
    const t = [],
      n = [];
    for (let i = 0; i < e.length; i++) _d.splitPolygon(this.plane, e[i], this.polygons, this.polygons, t, n);
    t.length && (this.front || (this.front = new vd), this.front.build(t)), n.length && (this.back || (this.back = new vd), this.back.build(n))
  }
}
class gd {
  constructor(e, t, n) {
    3 === arguments.length ? (this.x = e, this.y = t, this.z = n) : "x" in e ? (this.x = e.x, this.y = e.y, this.z = e.z) : [this.x, this.y, this.z] = e
  }
  clone() {
    return new gd(this.x, this.y, this.z)
  }
  negated() {
    return new gd(-this.x, -this.y, -this.z)
  }
  plus(e) {
    return new gd(this.x + e.x, this.y + e.y, this.z + e.z)
  }
  minus(e) {
    return new gd(this.x - e.x, this.y - e.y, this.z - e.z)
  }
  times(e) {
    return new gd(this.x * e, this.y * e, this.z * e)
  }
  dividedBy(e) {
    return new gd(this.x / e, this.y / e, this.z / e)
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z
  }
  lerp(e, t) {
    return this.plus(e.minus(this).times(t))
  }
  length() {
    return Math.sqrt(this.dot(this))
  }
  unit() {
    return this.dividedBy(this.length())
  }
  cross(e) {
    return new gd(this.y * e.z - this.z * e.y, this.z * e.x - this.x * e.z, this.x * e.y - this.y * e.x)
  }
}
class bd {
  constructor(e, t) {
    2 === arguments.length ? (this.x = e, this.y = t) : "x" in e ? (this.x = e.x, this.y = e.y) : [this.x, this.y] = e
  }
  clone() {
    return new bd(this.x, this.y)
  }
  negated() {
    return new bd(-this.x, -this.y)
  }
  plus(e) {
    return new bd(this.x + e.x, this.y + e.y)
  }
  minus(e) {
    return new bd(this.x - e.x, this.y - e.y)
  }
  times(e) {
    return new bd(this.x * e, this.y * e)
  }
  dividedBy(e) {
    return new bd(this.x / e, this.y / e)
  }
  dot(e) {
    return this.x * e.x + this.y * e.y
  }
  lerp(e, t) {
    return this.plus(e.minus(this).times(t))
  }
  length() {
    return Math.sqrt(this.dot(this))
  }
  unit() {
    return this.dividedBy(this.length())
  }
}
class Td {
  constructor(e, t, n) {
    this.pos = new gd(e), this.normal = new gd(t), this.uv = new bd(n)
  }
  clone() {
    return new Td(this.pos.clone(), this.normal.clone(), this.uv.clone())
  }
  flip() {
    this.normal = this.normal.negated()
  }
  interpolate(e, t) {
    return new Td(this.pos.lerp(e.pos, t), this.normal.lerp(e.normal, t), this.uv.lerp(e.uv, t))
  }
}
class xd {
  constructor(e) {
    this.polygons = e || []
  }
  clone() {
    const e = new xd;
    return e.polygons = this.polygons.map(e => e.clone()), e
  }
  toPolygons() {
    return this.polygons
  }
  union(e) {
    const t = new vd(this.clone().polygons),
      n = new vd(e.clone().polygons);
    return t.clipTo(n), n.clipTo(t), n.invert(), n.clipTo(t), n.invert(), t.build(n.allPolygons()), xd.fromPolygons(t.allPolygons())
  }
  subtract(e) {
    const t = new vd(this.clone().polygons),
      n = new vd(e.clone().polygons);
    return t.invert(), t.clipTo(n), n.clipTo(t), n.invert(), n.clipTo(t), n.invert(), t.build(n.allPolygons()), t.invert(), xd.fromPolygons(t.allPolygons())
  }
  intersect(e) {
    const t = new vd(this.clone().polygons),
      n = new vd(e.clone().polygons);
    return t.invert(), n.clipTo(t), n.invert(), t.clipTo(n), n.clipTo(t), t.build(n.allPolygons()), t.invert(), xd.fromPolygons(t.allPolygons())
  }
  inverse() {
    const e = this.clone();
    return e.polygons.forEach(e => {
      e.flip()
    }), e
  }
  static fromPolygons(e) {
    return new xd(e)
  }
  static cube(e = {}) {
    const t = new gd(e.center || [0, 0, 0]);
    let n = e.radius || [1, 1, 1];
    return n.length || (n = [e.radius, e.radius, e.radius]), xd.fromPolygons([
      [
        [0, 4, 6, 2],
        [-1, 0, 0]
      ],
      [
        [1, 3, 7, 5],
        [1, 0, 0]
      ],
      [
        [0, 1, 5, 4],
        [0, -1, 0]
      ],
      [
        [2, 6, 7, 3],
        [0, 1, 0]
      ],
      [
        [0, 2, 3, 1],
        [0, 0, -1]
      ],
      [
        [4, 5, 7, 6],
        [0, 0, 1]
      ]
    ].map(e => new xd.Polygon(e[0].map(i => {
      const o = new xd.Vector(t.x + n[0] * (2 * !!(1 & i) - 1), t.y + n[1] * (2 * !!(2 & i) - 1), t.z + n[2] * (2 * !!(4 & i) - 1));
      return new xd.Vertex(o, new xd.Vector(e[1]))
    }))))
  }
  static sphere(e = {}) {
    const t = new xd.Vector(e.center || [0, 0, 0]),
      n = e.radius || 1,
      i = e.slices || 16,
      o = e.stacks || 8,
      a = [];
    let r;

    function s(e, i) {
      const o = e * Math.PI * 2,
        a = e * Math.PI,
        s = new xd.Vector(Math.cos(o) * Math.sin(a), Math.cos(a), Math.sin(o) * Math.sin(a));
      r.push(new xd.Vertex(t.plus(s.times(n)), s))
    }
    for (let e = 0; e < i; e++)
      for (let t = 0; t < o; t++) r = [], s(e / i), t > 0 && s((e + 1) / i), t < o - 1 && s((e + 1) / i), s(e / i), a.push(new xd.Polygon(r));
    return xd.fromPolygons(a)
  }
  static cylinder(e = {}) {
    const t = new gd(e.start || [0, -1, 0]),
      n = new gd(e.end || [0, 1, 0]),
      i = n.minus(t),
      o = e.radius || 1,
      a = e.slices || 16,
      r = i.unit(),
      s = Math.abs(r.y) > .5,
      l = new gd(s, !s, 0).cross(r).unit(),
      u = l.cross(r).unit(),
      c = new Td(t, r.negated()),
      d = new Td(n, r.unit()),
      f = [];

    function h(e, n, a) {
      const s = n * Math.PI * 2,
        c = l.times(Math.cos(s)).plus(u.times(Math.sin(s))),
        d = t.plus(i.times(e)).plus(c.times(o)),
        f = c.times(1 - Math.abs(a)).plus(r.times(a));
      return new Td(d, f)
    }
    for (let e = 0; e < a; e++) {
      const t = e / a,
        n = (e + 1) / a;
      f.push(new _d([c, h(0, t, -1), h(0, n, -1)])), f.push(new _d([h(0, n, 0), h(0, t, 0), h(1, t, 0), h(1, n, 0)])), f.push(new _d([d, h(1, n, 1), h(1, t, 1)]))
    }
    return xd.fromPolygons(f)
  }
}

function Sd(e) {
  const t = {},
    n = [],
    i = {
      primitives: n
    },
    o = new Gs;
  return o.mesh = i, e.polygons.forEach(e => {
    let n = t[e.shared.id];
    n || (n = {
      polygons: [],
      material: e.shared
    }, t[e.shared.id] = n), n.polygons.push(e)
  }), Object.keys(t).forEach(e => {
    const i = t[e],
      o = [],
      a = [],
      r = [];
    i.polygons.forEach(e => {
      const {
        vertices: t
      } = e;
      for (let e = 2, n = t.length; e < n; e++) o.push(t[0].pos.x, t[0].pos.y, t[0].pos.z), o.push(t[e - 1].pos.x, t[e - 1].pos.y, t[e - 1].pos.z), o.push(t[e].pos.x, t[e].pos.y, t[e].pos.z), a.push(t[0].normal.x, t[0].normal.y, t[0].normal.z), a.push(t[e - 1].normal.x, t[e - 1].normal.y, t[e - 1].normal.z), a.push(t[e].normal.x, t[e].normal.y, t[e].normal.z), r.push(t[0].uv.x, t[0].uv.y), r.push(t[e - 1].uv.x, t[e - 1].uv.y), r.push(t[e].uv.x, t[e].uv.y)
    }), n.push({
      vao: new Do({
        buffers: {
          position: new Float32Array(o),
          normal: new Float32Array(a),
          uv: new Float32Array(r)
        }
      }),
      material: i.material
    })
  }), o
}

function wd(e) {
  const t = [],
    {
      vao: n,
      worldMatrix: i
    } = e;
  let o = n._buffers;
  o.index && (o = function (e) {
    !e.tangent && e.uv && (e.tangent = ko(e)), e.normal || (e.normal = Uo(e.position, e.index));
    const t = e.index,
      n = e.uv.data || e.uv,
      i = e.position.data || e.position,
      o = e.normal.data || e.normal,
      a = e.tangent.data || e.tangent,
      r = [],
      s = [],
      l = [],
      u = [];
    for (let e = 0, c = t.length; e < c; e++) {
      const c = t[e];
      s.push(i[3 * c], i[3 * c + 1], i[3 * c + 2]), n && r.push(n[2 * c], n[2 * c + 1]), o && l.push(o[3 * c], o[3 * c + 1], o[3 * c + 2]), a && u.push(a[4 * c], a[4 * c + 1], a[4 * c + 2], a[4 * c + 3])
    }
    return {
      uv: new Float32Array(r),
      position: new Float32Array(s),
      normal: new Float32Array(l),
      tangent: new Float32Array(u)
    }
  }(o));
  const a = o.position,
    r = o.normal,
    s = o.uv,
    l = e._normalMatrix,
    u = [],
    c = [],
    d = [];
  for (let e = 0, t = a.length; e < t; e += 3) d[0] = a[e], d[1] = a[e + 1], d[2] = a[e + 2], Y.transformMat4(d, d, i), u.push(d[0], d[1], d[2]), d[0] = r[e], d[1] = r[e + 1], d[2] = r[e + 2], Y.transformMat3(d, d, l), c.push(d[0], d[1], d[2]);
  for (let n = 0, i = u.length / 3; n < i; n += 3) {
    const i = n,
      o = n + 1,
      a = n + 2,
      r = [];
    let l = new gd(u[3 * i], u[3 * i + 1], u[3 * i + 2]),
      d = new gd(c[3 * i], c[3 * i + 1], c[3 * i + 2]),
      f = new bd(s[2 * i], s[2 * i + 1]);
    r.push(new Td(l, d, f)), l = new gd(u[3 * o], u[3 * o + 1], u[3 * o + 2]), d = new gd(c[3 * o], c[3 * o + 1], c[3 * o + 2]), f = new bd(s[2 * o], s[2 * o + 1]), r.push(new Td(l, d, f)), l = new gd(u[3 * a], u[3 * a + 1], u[3 * a + 2]), d = new gd(c[3 * a], c[3 * a + 1], c[3 * a + 2]), f = new bd(s[2 * a], s[2 * a + 1]), r.push(new Td(l, d, f));
    const h = new _d(r, e.material);
    t.push(h)
  }
  return xd.fromPolygons(t)
}
let yd, Pd, Md, Od, Nd, Ed, Ad, Cd, Rd, Ld, Id = !1;

function Dd(e, t, n) {
  let i = ao(),
    o = ao();
  i + o > 1 && (i = 1 - i, o = 1 - o);
  const a = 1 - i - o;
  return Y.copy(Od, e), Y.scale(Od, Od, i), Y.copy(yd, t), Y.scale(yd, yd, o), Y.add(Od, Od, yd), Y.copy(yd, n), Y.scale(yd, yd, a), Y.add(Od, Od, yd), Od
}

function zd(e, t, n) {
  Id || (Id = !0, yd = Y.create(), Pd = Y.create(), Md = Y.create(), Od = Y.create());
  let i = 0;
  const o = null != e,
    a = o ? e.length : t.length,
    r = new Float32Array(3 * n),
    s = new Array(o ? a / 3 : a / 9);
  let l, u, c, d;
  for (l = 0, d = 0; l < a; d++) o ? (u = 3 * e[l], Y.set(yd, t[u], t[u + 1], t[u + 2]), u = 3 * e[l + 1], Y.set(Pd, t[u], t[u + 1], t[u + 2]), u = 3 * e[l + 2], Y.set(Md, t[u], t[u + 1], t[u + 2]), l += 3) : (Y.set(yd, t[l + 0], t[l + 1], t[l + 2]), Y.set(Pd, t[l + 3], t[l + 4], t[l + 5]), Y.set(Md, t[l + 6], t[l + 7], t[l + 8]), l += 9), i += (f = yd, h = Pd, p = Md, Y.sub(yd, h, f), Y.sub(Pd, p, f), Y.cross(yd, yd, Pd), .5 * Y.length(yd)), s[d] = i;
  var f, h, p, m;
  for (l = 0; l < n; l++) m = ao() * i, d = function e(t, n) {
    if (n < t) return t;
    const i = t + Math.floor((n - t) / 2);
    return s[i] > m ? e(t, i - 1) : s[i] < m ? e(i + 1, n) : i
  }(0, s.length - 1), o ? (u = 3 * e[d *= 3], Y.set(yd, t[u], t[u + 1], t[u + 2]), u = 3 * e[d + 1], Y.set(Pd, t[u], t[u + 1], t[u + 2]), u = 3 * e[d + 2], Y.set(Md, t[u], t[u + 1], t[u + 2])) : (u = 9 * d, Y.set(yd, t[u + 0], t[u + 1], t[u + 2]), Y.set(Pd, t[u + 3], t[u + 4], t[u + 5]), Y.set(Md, t[u + 6], t[u + 7], t[u + 8])), c = Dd(yd, Pd, Md), u = 3 * l, [r[u], r[u + 1], r[u + 2]] = c;
  return r
}
let Fd = !1;

function Ud(e, t, n, i, o) {
  return Lt.add(e, n, i), Lt.normalize(e, e), Lt.set(t, -e[1], e[0]), Lt.set(Nd, -n[1], n[0]), o / Lt.dot(t, Nd)
}

function kd(e, t) {
  return Lt.set(e, -t[1], t[0]), e
}

function Hd(e, t, n) {
  return Lt.subtract(e, t, n), Lt.normalize(e, e), e
}

function Jd(e) {
  Fd || (Fd = !0, Nd = Lt.create(), Ed = Lt.create(), Ad = Lt.create(), Cd = Lt.create(), Rd = Lt.create(), Ld = Y.fromValues(0, 1, 0));
  const {
    thickness: t = 1,
    innerColor: n,
    outerColor: i
  } = e;
  let {
    points: o
  } = e;
  const a = t / 2;
  let r = o.length,
    s = null;
  const l = [];
  if (r <= 1) return null;
  let u = Lt.equals(o[0], o[r - 1]);
  u || null != e.closed && !e.closed || (o = o.concat(o[0]), r += 1, u = !0);
  const c = new Float32Array(2 * r * 3),
    d = new Float32Array(2 * r * 3),
    f = new Float32Array(2 * r * 2),
    h = new Float32Array(2 * r * 2);
  let p;
  n && i && (p = new Float32Array(2 * r * 4));
  let m = 0,
    _ = 0;

  function v(e, t, o, r) {
    Lt.scaleAndAdd(Nd, e, t, -o);
    let s = 3 * m;
    [c[s], c[s + 2]] = Nd, c[s + 1] = 0, [d[s], d[s + 1], d[s + 2]] = Ld, f[s = 2 * m] = Nd[0] - a, f[s + 1] = -Nd[1] - a, h[s] = -1, h[s + 1] = r, Lt.scaleAndAdd(Nd, e, t, o), s = 3 * (m + 1), [c[s], c[s + 2]] = Nd, c[s + 1] = 0, [d[s], d[s + 1], d[s + 2]] = Ld, f[s = 2 * (m + 1)] = Nd[0] - a, f[s + 1] = -Nd[1] - a, h[s] = 1, h[s + 1] = r, p && (s = 4 * m, [p[s], p[s + 1], p[s + 2], p[s + 3]] = n, s += 4, [p[s], p[s + 1], p[s + 2], p[s + 3]] = i), m += 2
  }
  for (let e = 1, t = 0; e < r; e++) {
    const n = o[e - 1],
      i = o[e],
      r = Lt.distance(n, i),
      u = e < o.length - 1 ? o[e + 1] : null,
      c = t;
    if (Hd(Ed, i, n), s || kd(s = Lt.create(), Ed), 1 === e && v(n, s, a, 0), _ += r, l.push(c + 0, c + 1, c + 2), u) {
      Hd(Ad, u, i);
      const e = Ud(Cd, Rd, Ed, Ad, a);
      v(i, Rd, e, _), l.push(c + 2, c + 1, c + 3), Lt.copy(s, Rd)
    } else kd(s, Ed), v(i, s, a, _), l.push(c + 2, c + 1, c + 3);
    t += 2
  }
  if (r > 2 && u) {
    const e = o[r - 2],
      t = o[0],
      n = o[1];
    Hd(Ed, t, e), Hd(Ad, n, t);
    const i = Ud(Cd, Rd, Ed, Ad, a);
    Lt.scaleAndAdd(Nd, t, Rd, -i), [c[0], c[2]] = Nd, f[0] = Nd[0] - a, f[1] = -Nd[1] - a, [c[c.length - 6], c[c.length - 4]] = Nd, f[f.length - 4] = Nd[0] - a, f[f.length - 3] = -Nd[1] - a, Lt.scaleAndAdd(Nd, t, Rd, i), [c[3], c[5]] = Nd, [c[c.length - 3], c[c.length - 1]] = Nd, f[2] = Nd[0] - a, f[3] = -Nd[1] - a, f[f.length - 2] = Nd[0] - a, f[f.length - 1] = -Nd[1] - a
  }
  for (let e = 0; e < h.length; e += 4) h[e + 3] = h[e + 1] / _, h[e + 1] = h[e + 3];
  const g = {
    index: l,
    position: c,
    percent: {
      data: h,
      size: 2,
      location: 3
    },
    normal: d,
    uv: f
  };
  return p && (g.color = p), g
}

function Vd(e) {
  const {
    points: t,
    startAngle: n = 0,
    endAngle: i = 2 * Math.PI,
    sideCount: o = 10
  } = e;
  let a = Number.NEGATIVE_INFINITY,
    r = Number.POSITIVE_INFINITY,
    s = 0;
  t.forEach(e => {
    e[1] < r && ([, r] = e), e[1] > a && ([, a] = e)
  }), s = a - r;
  const l = [],
    u = [],
    c = [],
    d = (i - n) / o;
  for (let e = 0; e < t.length; e += 1) {
    const i = t[e];
    for (let a = 0; a <= o; a += 1) {
      const f = n + d * a,
        h = i[0] * Math.cos(f),
        p = i[0] * Math.sin(f);
      u.push(h, i[1], p);
      const m = a / o,
        _ = (i[1] - r) / s;
      if (c.push(m, _), e < t.length - 1 && a < o) {
        const t = (o + 1) * e + a,
          n = t + 1;
        l.push(t, n, n + o + 1), l.push(t, n + o + 1, t + o + 1)
      }
    }
  }
  return {
    index: l,
    position: new Float32Array(u),
    normal: Uo(u, l),
    uv: new Float32Array(c)
  }
}

function jd(e, t, n, i, o) {
  return function (e, t, n) {
    return t + e * (n - t)
  }(function (e, t, n) {
    return (e - t) / (n - t)
  }(e, t, n), i, o)
}
const Bd = Math.PI / 180;
class Xd {
  constructor(e, t) {
    this.init(e, t)
  }
  init(e, t) {
    this.tileSize = 256, this.earthRadius = t || 6378137, this.initialResolution = 2 * Math.PI * this.earthRadius / this.tileSize, this.originShift = 2 * Math.PI * this.earthRadius / 2
  }
  latLonToMeters(e, t) {
    const n = t * this.originShift / 180;
    let i = Math.log(Math.tan((90 + e) * Math.PI / 360)) / Bd;
    return [n, i = i * this.originShift / 180]
  }
  metersToLatLon(e, t) {
    const n = e / this.originShift * 180;
    let i = t / this.originShift * 180;
    return [i = 180 / Math.PI * (2 * Math.atan(Math.exp(i * Bd)) - Math.PI / 2), n]
  }
  pixelsToMeters(e, t, n) {
    const i = this.resolution(n);
    return [e * i - this.originShift, t * i - this.originShift]
  }
  metersToPixels(e, t, n) {
    const i = this.resolution(n);
    return [(e + this.originShift) / i, (t + this.originShift) / i]
  }
  metersToTile(e, t, n) {
    const i = this.metersToPixels(e, t, n);
    return this.pixelsToTile(i[0], i[1])
  }
  pixelsToTile(e, t) {
    return [Math.ceil(e / this.tileSize) - 1, Math.ceil(t / this.tileSize) - 1]
  }
  latLonToTile(e, t, n) {
    const i = this.latLngToPixels(e, t, n);
    return this.pixelsToTile(i[0], i[1])
  }
  pixelsToRaster(e, t, n) {
    return [e, (this.tileSize << n) - t]
  }
  tileMetersBounds(e, t, n) {
    const i = this.pixelsToMeters(e * this.tileSize, t * this.tileSize, n),
      o = this.pixelsToMeters((e + 1) * this.tileSize, (t + 1) * this.tileSize, n);
    return [i[0], i[1], o[0], o[1]]
  }
  tilePixelsBounds(e, t, n) {
    const i = this.tileMetersBounds(e, t, n),
      o = this.metersToPixels(i[0], i[1], n),
      a = this.metersToPixels(i[2], i[3], n);
    return [o[0], o[1], a[0], a[1]]
  }
  tileLatLngBounds(e, t, n) {
    const i = this.tileMetersBounds(e, t, n),
      o = this.metersToLatLon(i[0], i[1]),
      a = this.metersToLatLon(i[2], i[3]);
    return [o[0], o[1], a[0], a[1]]
  }
  resolution(e) {
    return this.initialResolution / 2 ** e
  }
  zoomForPixelSize(e) {
    let t = 30;
    for (; e > this.resolution(t);)
      if (--t <= 0) return 0;
    return t
  }
  pixelsToLatLng(e, t, n) {
    const i = this.pixelsToMeters(e, t, n);
    return this.metersToLatLon(i[0], i[1])
  }
  latLngToPixels(e, t, n) {
    const i = this.latLonToMeters(e, t, n);
    return this.metersToPixels(i[0], i[1], n)
  }
  latLngToTile(e, t, n) {
    const i = this.latLonToMeters(e, t);
    return this.metersToTile(i[0], i[1], n)
  }
  latLngToTile1(e, t, n) {
    return [Math.ceil((t + 180) / 360 * 2 ** n) - 1, Math.ceil((Math.log(Math.tan((90 + e) * Bd / 2)) / Bd / 180 + 1) / 2 * 2 ** n) - 1]
  }
  latLngToTile2(e, t, n) {
    return [Math.ceil((t + 180) / 360 * 2 ** n) - 1, Math.ceil((1 - Math.log(Math.tan(e * Bd) + 1 / Math.cos(e * Bd)) / Math.PI) / 2 * 2 ** n) - 1]
  }
  tileXYToQuadKey(e, t, n) {
    let i = "";
    for (let o = n; o > 0; o--) {
      let n = 0;
      const a = 1 << o - 1;
      0 != (e & a) && n++, 0 != (t & a) && (n += 2), i += n
    }
    return i
  }
  quadKeyToTileXY(e) {
    let t = 0,
      n = 0;
    const i = e.split(""),
      o = i.length;
    for (let e = o; e > 0; e--) {
      const a = 1 << e - 1;
      switch (i[o - e]) {
        case "0":
          break;
        case "1":
          t |= a;
          break;
        case "2":
          n |= a;
          break;
        case "3":
          t |= a, n |= a;
          break;
        default:
          return null
      }
    }
    return {
      tx: t,
      ty: n,
      zoom: o
    }
  }
}
class Gd {
  constructor(e, t, n, i) {
    this.x = e, this.y = t, this.w = n, this.h = i
  }
  containsPoint(e, t) {
    return !(e < this.x) && (!(t < this.y) && (!(e > this.x + this.w) && t <= this.y + this.h))
  }
  isContained(e, t, n, i) {
    return this.x >= e && this.y >= t && this.x + this.w <= e + n && this.y + this.h <= t + i
  }
  intersect(e, t, n, i) {
    return !(e > this.x + this.w || e + n < this.x || t > this.y + this.h || t + i < this.y)
  }
  intersection(e) {
    if (this.intersect(e.x, e.y, e.x + e.w, e.y + e.h)) {
      const t = Math.max(this.x, e.x),
        n = Math.max(this.y, e.y),
        i = Math.min(this.x + this.w, e.x + e.w) - t,
        o = Math.min(this.y + this.h, e.y + e.h) - n;
      return new Gd(t, n, i, o)
    }
    return null
  }
}
class Wd {
  constructor(e, t, n, i) {
    this.layer = e, this.map = e.map, this.tx = t, this.ty = n, this.zoom = i, this.center = this.map.mercator.tileLatLngBounds(this.tx + .5, this.ty + .5, this.zoom), this.center[0] = -this.center[0];
    const o = this.map.mercator.latLngToPixels(-this.center[0], this.center[1], this.zoom);
    this.x = o[0] - this.map.viewRectCenterPixels[0], this.y = o[1] - this.map.viewRectCenterPixels[1], this.url = this.layer.getMapUrl(this.tx, this.ty, this.zoom), this.data = null, this.loaded = !1
  }
  load() {
    this.loaded || (this.request = Qi(this.url, this.layer.requestOption, (e, t) => {
      e ? Ui(e) : (this.loaded = !0, this.data = t, this.layer._onTileLoaded(this))
    }))
  }
}
class Zd {
  constructor(e, t) {
    const {
      provider: n,
      domains: i,
      type: o,
      color: a,
      convert: r,
      fog: s
    } = t;
    this.provider = n, this.domains = i, this.type = o, this.color = a, this.convert = r, this.fog = s, this.trigger = new $o, this.tiles = [], this.keys = [], this.loadedTiles = [], this.map = e, this._handleTileLoaded = e => {
      this.map.trigger.fire(e)
    }, this.trigger.on("all", this._handleTileLoaded)
  }
  _onTileLoaded(e) {
    this.tiles.splice(this.tiles.indexOf(e), 1), this.loadedTiles.push(e), this.onTileLoaded(e), this.trigger.fire({
      type: "TILE_LOADED",
      tile: e
    }), 0 === this.tiles.length && this.trigger.fire({
      type: "LOAD_COMPLETE",
      layer: this
    })
  }
  getMapUrl(e, t, n) {
    let i = this.provider;
    if (this.domains) {
      const e = Math.floor(Math.random() * this.domains.length);
      i = i.replace(/\{s\}/, this.domains[e])
    }
    return i = (i = (i = i.replace(/\{x\}/, e)).replace(/\{y\}/, t)).replace(/\{z\}/, n)
  }
  dispose() {
    this.trigger.off()
  }
}
class qd extends Zd {
  constructor(e, t) {
    super(e, t), this.layers = t.layers, this.material = t.material, this.requestOption = {
      responseType: "json"
    }
  }
  onTileLoaded(e) {
    const t = e.data;
    this.layers.forEach(e => {
      "buildings" === e.type && t.buildings && this.loadBuilding(e, t.buildings), "roads" === e.type && t.roads && this.loadRoad(e, t.roads)
    })
  }
  loadBuilding(e, t) {
    const {
      map: n
    } = this, i = pd(t, {
      depth: t => t.properties.height ? t.properties.height / 5 : e.defaultHeight || 20,
      transform(e, t) {
        const i = n.latLonToPixels(t, e);
        return i[1] = -i[1], i
      },
      excludeTop: !0,
      excludeBottom: !0,
      excludeSide: !1
    }).polygon;
    i.boundingRect && n.scene.add({
      rx: -Math.PI / 180 * 90,
      vao: {
        buffers: {
          index: i.indices,
          position: i.position,
          normal: i.normal,
          uv: i.uv
        }
      },
      material: e.buildMaterial
    });
    const o = pd(t, {
      depth: t => t.properties.height ? t.properties.height / 5 : e.defaultHeight || 20,
      transform(e, t) {
        const i = n.latLonToPixels(t, e);
        return i[1] = -i[1], i
      },
      excludeTop: !1,
      excludeBottom: !0,
      excludeSide: !0
    }).polygon;
    o.boundingRect && n.scene.add({
      rx: -Math.PI / 180 * 90,
      vao: {
        buffers: {
          index: o.indices,
          position: o.position,
          normal: o.normal,
          uv: o.uv
        }
      },
      material: e.topMaterial
    })
  }
  loadRoad(e, t) {
    const {
      map: n
    } = this, i = pd(t, {
      filter: t => e.filter && e.filter(t),
      depth: 0,
      lineWidth: e.styles && e.styles.lineWidth ? e.styles.lineWidth : 2,
      excludeBottom: !0,
      excludeSide: !0,
      transform(e, t) {
        const i = n.latLonToPixels(t, e);
        return i[1] = -i[1], i
      }
    }).polyline;
    if (i.boundingRect) {
      const t = n.scene.add({
        rx: -Math.PI / 180 * 90,
        vao: {
          buffers: {
            index: i.indices,
            position: i.position,
            normal: i.normal,
            uv: i.uv
          }
        },
        material: e.material
      });
      e.animate && e.animate(t)
    }
  }
}
const Kd = "#version 300 es\n#define SHADER_NAME SIMPLE_VERTEX\nprecision highp float;\n\nlayout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\nuniform mat3 u_normalMatrix;\n\nout vec2 v_uv;\nout vec3 v_worldPosition;\nvoid main () {\n  vec3 position = a_position;\n  vec4 finalPosition = vec4(position, 1.0);\n  finalPosition = u_modelMatrix * finalPosition;\n  vec4 worldPosition = finalPosition;\n  gl_Position = u_projectViewMatrix * u_modelMatrix * vec4(a_position, 1.0);\n  v_worldPosition = worldPosition.xyz;\n  v_uv = a_uv;\n}\n",
  Yd = "#version 300 es\n#define SHADER_NAME SIMPLE_FRAGMENT\nprecision highp float;\n\nuniform vec3 u_color;\nuniform bool u_convert;\nuniform sampler2D u_diffuseSampler;\nuniform vec3 u_fogColor;\nuniform float u_fogNear;\nuniform float u_fogFar;\nuniform vec3 u_eyePosition;\nuniform bool u_fog;\n\nin vec2 v_uv;\nin vec3 v_worldPosition;\nout vec4 fragColor;\n\nconst highp vec3 W = vec3(0.2125, 0.7154, 0.0721);\n\nvoid main () {\n  lowp vec4 textureColor = texture(u_diffuseSampler, vec2(v_uv.x, 1.0 - v_uv.y));\n  float luminance = 1.0 - dot(textureColor.rgb, W);\n\n  if (u_convert) {\n    fragColor = vec4((vec3(luminance) * u_color) , textureColor.a);\n  } else {\n    fragColor = textureColor;\n  }\n  if (u_fog) {\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  }\n}\n";
class Qd extends ls {
  constructor(e) {
    super({
      vertex: Kd,
      fragment: Yd,
      textures: {
        diffuseSampler: e.diffuseImage
      },
      uniforms: {
        color: e.color,
        convert: e.convert,
        fog: e.fog || !1
      },
      doubleSided: !0
    })
  }
}
class $d extends Zd {
  constructor(e, t) {
    super(e, t), this.debug = t.debug, this.requestOption = {
      responseType: "image"
    }
  }
  _createDebugImage(e) {
    const t = document.createElement("canvas");
    t.width = 256, t.height = 256;
    const n = t.getContext("2d");
    return n.fillStyle = "white", n.fillRect(0, 0, 256, 256), n.textAlign = "center", n.textBaseline = "middle", n.fillStyle = "black", n.font = "20px arial", n.fillText(`x: ${e.tx}`, 128, 108), n.fillText(`y: ${e.ty}`, 128, 128), n.fillText(`zoom: ${e.zoom}`, 128, 148), n.lineWidth = 2, n.strokeRect(0, 0, 256, 256), t
  }
  onTileLoaded(e) {
    const t = new Qd({
      diffuseImage: this.debug ? this._createDebugImage(e) : e.data,
      color: this.color || Y.fromValues(1, 1, 1),
      convert: this.convert || !1,
      fog: this.fog || !1
    });
    this.map.scene.add({
      rx: -Math.PI / 180 * 90,
      sx: 256,
      sy: 256,
      x: e.x,
      z: e.y,
      y: -.2,
      type: "plane",
      material: t
    })
  }
}
class ef {
  constructor(e) {
    const {
      width: t = 256,
      height: n = 256,
      minZoom: i = 0,
      maxZoom: o = 20,
      latitude: a = 0,
      longitude: r = 0,
      zoom: s = 0,
      layers: l = [],
      scene: u
    } = e;
    this.scene = u, this._needLoad = !1, this.mercator = new Xd(256), this.trigger = new $o, this.layers = [], this.viewRect = new Gd(0, 0, 0, 0), this.minZoom = i, this.maxZoom = o, this.latitude = a, this.longitude = r, this.zoom = s, this.width = t, this.height = n, l.forEach(e => {
      "geojson" === e.type ? this.addLayer(new qd(this, e)) : "image" === e.type && this.addLayer(new $d(this, e))
    })
  }
  addLayer(e) {
    this.layers.push(e), this.reload()
  }
  get width() {
    return this._width
  }
  set width(e) {
    this._width = e, this.viewRect.w = e, this.reload()
  }
  get height() {
    return this._height
  }
  set height(e) {
    this._height = e, this.viewRect.h = e, this.reload()
  }
  get minZoom() {
    return this._minZoom
  }
  set minZoom(e) {
    this._minZoom = e, this._zoom < e && (this._zoom = e), this.reload()
  }
  get maxZoom() {
    return this._maxZoom
  }
  set maxZoom(e) {
    this._maxZoom = e, this._zoom > e && (this._zoom = e), this.reload()
  }
  get latitude() {
    return this._latitude
  }
  set latitude(e) {
    this._latitude = e, this.reload()
  }
  get longitude() {
    return this._longitude
  }
  set longitude(e) {
    this._longitude = e, this.reload()
  }
  get zoom() {
    return this._zoom
  }
  set zoom(e) {
    this._zoom = Math.max(this._minZoom, Math.min(this._maxZoom, e)), this.reload()
  }
  setSize(e, t) {
    this.width = e, this.height = t
  }
  getLatLng() {
    return [this._latitude, this._longitude]
  }
  pixelsToLatLon(e, t, n) {
    const i = this.mercator.latLngToPixels(-this.latitude, this.longitude, n || this.zoom),
      o = this.mercator.pixelsToLatLng(i[0] + e, i[1] + t, n || this.zoom);
    return o[0] *= -1, o
  }
  latLonToPixels(e, t) {
    const n = this.viewRectCenterPixels,
      i = this.mercator.latLngToPixels(-e, t, this.zoom);
    return [i[0] - n[0], i[1] - n[1]]
  }
  canvasPixelToLatLng(e, t, n) {
    const i = this.mercator.latLngToPixels(-this.latitude, this.longitude, n || this.zoom);
    return new Gd(i[0] - this.viewRect.w / 2, i[1] - this.viewRect.h / 2, this.viewRect.w, this.viewRect.h)
  }
  getViewRectCenter() {
    return [jd(.5, 0, 1, -this.tlLatLng[0], -this.brLatLng[0]), jd(.5, 0, 1, this.tlLatLng[1], this.brLatLng[1])]
  }
  getViewRectCenterPixels() {
    return this.viewRectCenterPixels
  }
  viewRectTiles(e) {
    const t = e || this.zoom,
      n = this.mercator.latLonToTile(-this.tlLatLng[0], this.tlLatLng[1], t),
      i = this.mercator.latLonToTile(-this.brLatLng[0], this.brLatLng[1], t);
    let o = 0,
      a = 0;
    const r = [];
    for (let e = n[0]; e <= i[0]; e++) {
      a = 0;
      for (let s = n[1]; s <= i[1]; s++) {
        const n = this.mercator.tileXYToQuadKey(e, s, t);
        let i = !1;
        for (let e = 0; e < this.loadedTiles.length; e++)
          if (this.loadedTiles[e].key === n) {
            this.loadedTiles[e].viewRectPosition[0] = o, this.loadedTiles[e].viewRectPosition[1] = a, r.push(this.loadedTiles[e]), i = !0;
            break
          } if (!1 === i)
          for (let e = 0; e < this.tiles.length; e++)
            if (this.tiles[e].key === n) {
              this.tiles[e].viewRectPosition[0] = o, this.tiles[e].viewRectPosition[1] = a, r.push(this.tiles[e]), i = !0;
              break
            } a++
      }
      o++
    }
    return r
  }
  reload() {
    this._needLoad || (this._needLoad = !0, setTimeout(() => {
      this.load()
    }))
  }
  setView(e, t, n) {
    this.latitude = e, this.longitude = t, this.zoom = n
  }
  getVisibleTiles(e) {
    const t = this.tlTile,
      n = this.brTile,
      {
        zoom: i
      } = this,
      o = [];
    for (let a = t[0]; a <= n[0]; a++)
      for (let r = t[1]; r <= n[1]; r++) {
        const t = this.mercator.tileXYToQuadKey(a, r, i);
        if (-1 === e.keys.indexOf(t)) {
          const n = new Wd(e, a, r, i);
          n.quadKey = t, o.push(n), e.keys.push(t)
        }
      }
    return o
  }
  load() {
    this.viewRectCenterPixels = this.mercator.latLngToPixels(-this.latitude, this.longitude, this.zoom), this.tlLatLng = this.mercator.pixelsToLatLng(this.viewRectCenterPixels[0] - this._width / 2, this.viewRectCenterPixels[1] - this._height / 2, this.zoom), this.tlLatLng[0] = -this.tlLatLng[0], this.brLatLng = this.mercator.pixelsToLatLng(this.viewRectCenterPixels[0] + this._width / 2, this.viewRectCenterPixels[1] + this._height / 2, this.zoom), this.brLatLng[0] = -this.brLatLng[0], this.tlTile = this.mercator.latLonToTile(-this.tlLatLng[0], this.tlLatLng[1], this.zoom), this.brTile = this.mercator.latLonToTile(-this.brLatLng[0], this.brLatLng[1], this.zoom), this.layers.forEach(e => {
      const t = this.getVisibleTiles(e);
      for (let e = 0; e < t.length; e++) t[e].load();
      e.tiles = e.tiles.concat(t)
    })
  }
  resolution(e) {
    return this.mercator.resolution(e || this.zoom)
  }
  viewRectToPixels(e, t, n) {
    const i = this.mercator.latLngToPixels(-e, t, n);
    return new Gd(i[0], i[1], this.viewRect.w, this.viewRect.h)
  }
}

function tf(e) {
  return [255 * e[0], 255 * e[1], 255 * e[2]]
}

function nf(e) {
  return [e[0] / 255, e[1] / 255, e[2] / 255]
}

function of (e) {
  const t = tf(e),
    n = t;
  let i = "#";
  for (let e = 0; e < 3; e++) {
    let n = parseInt(t[e], 0).toString(16);
    n.length < 2 && (n = `0${n}`), i += n
  }
  return 7 !== i.length && (i = n), i
}

function af(e) {
  let t = e.toLowerCase();
  if (t && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) {
    if (4 === t.length) {
      let e = "#";
      for (let n = 1; n < 4; n += 1) e += t.slice(n, n + 1).concat(t.slice(n, n + 1));
      t = e
    }
    const e = [];
    for (let n = 1; n < 7; n += 2) e.push(parseInt(`0x${t.slice(n,n+2)}`, 0));
    return nf(e)
  }
  return t
}
const rf = {
    url: "",
    mipmap: !0,
    powerOfTwo: !0,
    minFilter: "LINEAR_MIPMAP_NEAREST",
    magFilter: "LINEAR",
    wrapS: "CLAMP_TO_EDGE",
    wrapT: "CLAMP_TO_EDGE",
    anisotropy: 16,
    format: "RGBA",
    type: "2D"
  },
  sf = {
    minFilter: {
      NEAREST: "NEAREST",
      LINEAR: "LINEAR",
      NEAREST_MIPMAP_NEAREST: "NEAREST_MIPMAP_NEAREST",
      LINEAR_MIPMAP_NEAREST: "LINEAR_MIPMAP_NEAREST",
      NEAREST_MIPMAP_LINEAR: "NEAREST_MIPMAP_LINEAR",
      LINEAR_MIPMAP_LINEAR: "LINEAR_MIPMAP_LINEAR"
    },
    magFilter: {
      NEAREST: "NEAREST",
      LINEAR: "LINEAR"
    },
    wrapS: {
      CLAMP_TO_EDGE: "CLAMP_TO_EDGE",
      REPEAT: "REPEAT"
    },
    wrapT: {
      CLAMP_TO_EDGE: "CLAMP_TO_EDGE",
      REPEAT: "REPEAT"
    },
    anisotropy: {
      min: 1,
      max: 16,
      step: 1
    },
    format: {
      RGBA: "RGBA",
      SRGB8: "SRGB8",
      SRGB8_ALPHA8: "SRGB8_ALPHA8"
    },
    type: {
      "2D": "2D",
      CUBE_MAP: "CUBE_MAP"
    }
  };

function lf(e, t = {}, n) {
  return Object.keys(e).forEach(i => {
    const o = e[i];
    n ? n(i, o) ? t[i] = o : delete t[i] : t[i] = o
  }), t
}
class uf {
  constructor(e) {
    this.data = e
  }
  addGUIColor(e, t, n) {
    const i = this.data;
    i._configType[t] = "color", i._config[t] = of (i[t]), i._controllers[t] = e.addColor(i._config, t).onChange(e => {
      const n = i[t],
        o = af(e);
      Y.copy(n, o), i[t] = n
    }).name(n)
  }
  addGUIPosition(e, t, n) {
    const i = this.data,
      o = e.addFolder(n),
      a = [];

    function r(e, n) {
      i._config[t][e] = i[t][n];
      const r = o.add(i._config[t], e).onChange(e => {
        const o = i[t];
        o[n] = e, i[t] = o
      }).name(e);
      a.push(r)
    }
    i._controllers[t] = a, i._configType[t] = "position", i._config[t] = {}, r("x", 0), r("y", 1), r("z", 2)
  }
  addGUIPosition4(e, t, n) {
    const i = this.data,
      o = e.addFolder(n),
      a = [];

    function r(e, n) {
      i._config[t][e] = i[t][n];
      const r = o.add(i._config[t], e).onChange(e => {
        const o = i[t];
        o[n] = e, i[t] = o
      }).name(e);
      a.push(r)
    }
    return i._controllers[t] = a, i._configType[t] = "position", i._config[t] = {}, r("x", 0), r("y", 1), r("z", 2), r("w", 3), o
  }
  addGUIValue(e, t, n, i, o) {
    const a = o || this.data;
    let r;
    const s = (r = i && null != i.min ? e.add(a, t, i.min, i.max, i.step) : e.add(a, t, i)).name(n).onChange(e => {
      a[t] = e
    });
    return a._controllers && (a._controllers[t] = s), s
  }
  addGUITexture(e, t, n) {
    const i = this.data,
      o = i[t],
      a = lf(rf);
    i._configType[t] = "texture";
    const r = e.addFolder(n),
      s = [];
    i._controllers[t] = s, o && ("string" == typeof o ? (a.url = o, o.endsWith(".dds") && (a.mipmap = !1)) : o.url ? lf(o, a, (e, t) => "url" !== e || "string" == typeof t && !t.startsWith("data:")) : delete a.url), i._config[t] = a, Object.keys(a).forEach(e => {
      const n = sf[e];
      let l;
      (l = n && null != n.min ? r.add(a, e, n.min, n.max, n.step) : r.add(a, e, n)).onFinishChange(e => {
        let n = a;
        "string" != typeof o && (n = function (e, t) {
          return Object.keys(e).forEach(n => {
            void 0 === t[n] ? e[n] !== rf[n] && (t[n] = e[n]) : e[n] !== t[n] && (t[n] = e[n])
          }), lf(t)
        }(a, o)), n.url ? 1 === Object.keys(n).length && (n = n.url) : n = null, i[t] = n
      }).name(e), s.push(l)
    })
  }
}
class cf extends uf {
  constructor(e) {
    super(e);
    e._controllers = {}, e._config = {}, e._configType = {}, e.on("all", this._handleChange, e)
  }
  _handleChange(e) {
    if ("change" === e.type) {
      const t = this,
        {
          property: n,
          newValue: i
        } = e;
      let o = t._config[n];
      const a = t._configType[n];
      o && ("color" === a ? t._config[n] = of (i) : "position" === a && i ? 4 === i.length ? [o.x, o.y, o.z] = i : [o.x, o.y, o.z, o.w] = i : "texture" === a && (i && "object" == typeof i ? Object.keys(i).forEach(e => {
        o[e] = i[e]
      }) : o.url = i)), "clearColor" === n && (t._config.clearAlpha = 255 * i[3], t._config.clearColor = of (i), t._controllers.clearAlpha.updateDisplay()), "modelMatrix" !== n && "worldMatrix" !== n || (o = t._config.position, [o.x, o.y, o.z] = t.position, o = t._config.scale, [o.x, o.y, o.z] = t.scale, o = t._config.rotation, [o.x, o.y, o.z] = t.rotation, t._controllers.position.forEach(e => {
        e.updateDisplay()
      }), t._controllers.rotation.forEach(e => {
        e.updateDisplay()
      }), t._controllers.scale.forEach(e => {
        e.updateDisplay()
      }));
      const r = t._controllers[n];
      Array.isArray(r) ? r.forEach(e => {
        e.updateDisplay()
      }) : r && r.updateDisplay()
    }
  }
  dispose() {
    const {
      data: e
    } = this;
    e._controllers = null, e._config = null, e._configType = null, e.off("all", this._handleChange, e)
  }
}
class df extends uf {
  constructor(e, t) {
    super(e), this.parentFolder = t, e.lights.on("all", e => {
      const n = e.data;

      function i(e) {
        t.removeFolder(e._lightFolder), e._config = null, e._lightFolder = null, e._controllers = null
      }
      "add" === e.type ? this.addLight(n, this.data.lights.count) : "remove" === e.type ? i(n) : "clear" === e.type && e.datas.forEach(e => {
        i(e)
      })
    })
  }
  addLight(e, t) {
    const {
      parentFolder: n
    } = this, i = n.addFolder(`${e.TYPE} Light ${t}`), o = new cf(e);
    e._lightFolder = i, o.addGUIColor(i, "diffuseColor", "Diffuse Color"), o.addGUIColor(i, "specularColor", "Specular Color"), o.addGUIValue(i, "intensity", "Intensity", {
      min: 0,
      max: 5,
      step: .1
    }), o.addGUIValue(i, "shadowDarkness", "ShadowDarkness", {
      min: 0,
      max: 1,
      step: .1
    }), o.addGUIValue(i, "shadow", "Shadow"), "DIRECTION" !== e.TYPE && "SPOT" !== e.TYPE || o.addGUIPosition(i, "direction", "Direction"), "POINT" !== e.TYPE && "SPOT" !== e.TYPE || (o.addGUIPosition(i, "position", "Position"), o.addGUIValue(i, "distance", "Distance")), "SPOT" === e.TYPE && (o.addGUIValue(i, "innerAngle", "Inner Angle", {
      min: 0,
      max: Math.PI,
      step: Math.PI / 100
    }), o.addGUIValue(i, "outerAngle", "Outer Angle", {
      min: 0,
      max: Math.PI,
      step: Math.PI / 100
    }))
  }
}
class ff extends cf {
  _handleChange(e) {
    if (super._handleChange(e), "change" === e.type) {
      const t = this,
        {
          property: n
        } = e;
      let i = t._config[n];
      "projectViewMatrix" !== n && "distance" !== n && "vRotation" !== n && "hRotation" !== n || (i = t._config.position, [i.x, i.y, i.z] = t.position, t._config.target && (i = t._config.target, [i.x, i.y, i.z] = t.target), t._controllers.position.forEach(e => {
        e.updateDisplay()
      }), t._controllers.target && t._controllers.target.forEach(e => {
        e.updateDisplay()
      }))
    }
  }
}

function hf(e, t) {
  const n = new cf(t);
  n.addGUIColor(e, "emissiveColor", "Emissive Color"), n.addGUITexture(e, "emissiveImage", "Emissive Image"), n.addGUIValue(e, "doubleSided", "Double Sided"), n.addGUIValue(e, "depthWrite", "Depth Write"), n.addGUIValue(e, "transparent", "Transparent"), n.addGUIValue(e, "transparency", "Transparency"), n.addGUIValue(e, "light", "Light"), n.addGUIValue(e, "flipY", "FlipY"), n.addGUITexture(e, "normalImage", "Normal Image"), n.addGUIValue(e, "castShadow", "Cast Shadow"), n.addGUIValue(e, "receiveShadow", "Receive Shadow"), n.addGUIValue(e, "pointSize", "Point Size", {
    min: 0,
    max: 256,
    step: 1
  }), t._config.clip = !!t.clipPlane;
  const i = e.addFolder("Clip");
  let o;
  if (n.addGUIValue(i, "clip", "Enable", null, t._config).onChange(e => {
      e ? (t.clipPlane || (t.clipPlane = [0, 1, 0, .5]), o = n.addGUIPosition4(i, "clipPlane", "Clip Plane")) : (i.removeFolder(o), t.clipPlane = null, o = null)
    }), t._config.clip && (o = n.addGUIPosition4(i, "clipPlane", "Clip Plane")), t instanceof cs) n.addGUIColor(e, "ambientColor", "Ambient Color"), n.addGUITexture(e, "ambientImage", "Ambient Image"), n.addGUIColor(e, "diffuseColor", "Diffuse Color"), n.addGUITexture(e, "diffuseImage", "Diffuse Image"), n.addGUIColor(e, "specularColor", "Specular Color"), n.addGUITexture(e, "specularImage", "Specular Image"), n.addGUIValue(e, "shininess", "Shininess"), n.addGUIValue(e, "refractive", "refractive");
  else if (t instanceof ss) n.addGUIValue(e, "type", "Type", ["metalness", "specular"]), n.addGUIColor(e, "baseColorFactor", "Base Color Factor"), n.addGUITexture(e, "baseColorImage", "Base Color Image"), n.addGUIValue(e, "metallicFactor", "Metallic Factor", {
    min: 0,
    max: 1,
    step: .1
  }), n.addGUIValue(e, "roughnessFactor", "Roughness Factor", {
    min: 0,
    max: 1,
    step: .1
  }), n.addGUITexture(e, "metallicRoughnessImage", "Metallic Roughness Image"), n.addGUITexture(e, "metallicImage", "Metallic Image"), n.addGUITexture(e, "roughnessImage", "Roughness Image"), n.addGUIColor(e, "diffuseFactor", "Diffuse Color Factor"), n.addGUITexture(e, "diffuseImage", "Diffuse Image"), n.addGUIColor(e, "specularFactor", "Specular Color Factor"), n.addGUIValue(e, "glossinessFactor", "Glossiness Factor", {
    min: 0,
    max: 1,
    step: .1
  }), n.addGUITexture(e, "specularGlossinessImage", "Specular Glossiness Image"), n.addGUITexture(e, "specularImage", "Specular Image"), n.addGUITexture(e, "glossinessImage", "Glossiness Image"), n.addGUITexture(e, "occlusionImage", "Occlusion Image"), n.addGUIValue(e, "enableIBL", "IBL"), n.addGUIValue(e, "enableAOChannel", "AO Channel");
  else if (t instanceof vs) n.addGUIColor(e, "diffuseColor", "Diffuse Color"), n.addGUITexture(e, "mixImage", "Mix Image"), n.addGUITexture(e, "diffuseImage1", "Diffuse Image1"), n.addGUITexture(e, "diffuseImage2", "Diffuse Image2"), n.addGUITexture(e, "diffuseImage3", "Diffuse Image3"), n.addGUITexture(e, "normalImage1", "Normal Image1"), n.addGUITexture(e, "normalImage2", "Normal Image2"), n.addGUITexture(e, "normalImage3", "Normal Image3"), n.addGUIColor(e, "specularColor", "Specular Color"), n.addGUIValue(e, "shininess", "Shininess");
  else if (t instanceof xs) {
    const t = e.addFolder("Wireframe");
    n.addGUIColor(t, "wireframeColor", "Color")
  }
  return n
}

function pf(e) {
  const t = new Hn;
  t.closed = !0;
  const n = new cf(e),
    i = t.addFolder("Scene");
  n.addGUIValue(i, "fps", "FPS", {
    min: 0,
    max: 60,
    setp: 1
  }), n.addGUIColor(i, "clearColor", "Clear Color"), e._config.clearAlpha = 255 * e.clearColor[3], e._controllers.clearAlpha = i.add(e._config, "clearAlpha", 0, 255, 1).name("Clear Alpha").onChange(t => {
    const {
      clearColor: n
    } = e;
    n[3] = t / 255, e.clearColor = n
  }), n.addGUIColor(i, "ambientColor", "Ambient Color");
  const o = i.addFolder("Fog");
  n.addGUIValue(o, "enableFog", "Enable Fog"), n.addGUIColor(o, "fogColor", "Fog Color"), n.addGUIValue(o, "fogNear", "Fog Near"), n.addGUIValue(o, "fogFar", "Fog Far"), n.addGUIValue(i, "enableSSAO", "Enable SSAO"), n.addGUIValue(i, "enableAnimation", "Animation"),
    function (e, t) {
      let n = t.animations.map(e => e.name);
      n.unshift("");
      let i = null,
        o = e.add({
          name: ""
        }, "name", n).name("Animations").onChange(e => {
          t.stopAnimation(i), t.startAnimation(e), i = e
        }),
        a = 0;
      t.onAnimationAdd = () => {
        a && clearTimeout(a), a = setTimeout(() => {
          (n = t.animations.map(e => e.name)).unshift(""), o = o.options(n).name("Animations").onChange(e => {
            t.stopAnimation(i), t.startAnimation(e), i = e
          })
        }, 100)
      }
    }(i, e), n.addGUIValue(i, "enableAutoResize", "Auto Resize"), n.addGUIValue(i, "iblDiffuseIntensity", "IBL Diffuse Intensity", {
      min: 0,
      max: 5,
      step: .1
    }), n.addGUIValue(i, "iblSpecularIntensity", "IBL Specular Intensity", {
      min: 0,
      max: 5,
      step: .1
    }), n.addGUIValue(i, "exposure", "Exposure", {
      min: 0,
      max: 5,
      step: .1
    });
  const a = i.addFolder("Light");
  a._extLights = new df(e, a), e.lights.forEach((e, t) => {
    a._extLights.addLight(e, t)
  });
  const r = t.addFolder("Camera"),
    s = new ff(e.camera);
  s.addGUIValue(r, "enableEasing", "EnableEasing"), s.addGUIValue(r, "enableZoom", "EnableZoom"), s.addGUIValue(r, "enableRotate", "EnableRotate"), s.addGUIValue(r, "enablePan", "EnablePan"), s.addGUIPosition(r, "position", "Position"), s.addGUIPosition(r, "target", "Target"), s.addGUIValue(r, "near", "Near"), s.addGUIValue(r, "far", "Far"), s.addGUIValue(r, "fovy", "Fovy"), s.addGUIValue(r, "minDistance", "Min Distance"), s.addGUIValue(r, "maxDistance", "Max Distance");
  const l = t.addFolder("Glow"),
    u = new cf(e.glowEffect);
  u.addGUIColor(l, "glowColor", "Glow Color"), u.addGUIValue(l, "blurCount", "Blur Count", {
    min: 0,
    max: 10,
    step: 1
  }), u.addGUIValue(l, "blurScale", "Blur Scale", {
    min: 0,
    max: 5,
    step: .1
  }), u.addGUIValue(l, "blurSize", "Blur Size", {
    "64*64": 64,
    "128*128": 128,
    "256*256": 256,
    "512*512": 512,
    "1024*1024": 1024
  });
  const c = t.addFolder("Bloom");
  t.bloomFolder = c;
  const d = new cf(e.bloomEffect);
  d.addGUIValue(c, "enabled", "Enabled"), d.addGUIValue(c, "threshold", "Threshold", {
    min: 0,
    max: 3,
    step: .1
  }), d.addGUIValue(c, "strength", "Strength", {
    min: 0,
    max: 5,
    step: .1
  }), d.addGUIValue(c, "radius", "Radius", {
    min: 0,
    max: 1,
    step: .1
  });
  const f = t.addFolder("Dof");
  t.dofFolder = f;
  const h = new cf(e.dofEffect);
  h.addGUIValue(f, "enabled", "Enabled"), h.addGUIValue(f, "aperture", "Aperture", {
    min: 0,
    max: 5,
    step: .1
  });
  const p = t.addFolder("Outline"),
    m = new cf(e.outlineEffect);
  m.addGUIColor(p, "outlineColor", "outline Color"), m.addGUIValue(p, "outlineWidth", "Outline Width", {
    min: 0,
    max: 10,
    step: 1
  });
  const _ = t.addFolder("XR");
  _.add(e, "enterXR").name("Enter XR"), _.add(e, "exitXR").name("Exit XR"), t.add(e, "enterFullscreen").name("Full Screen"), t.add(e, "clear").name("Clear"), t.add(e, "toggleCaptureVideo").name("Start capture video").onChange((function () {
    this.name(e._isCapturing ? "Start capture video" : "Stop capture video")
  }));
  let v, g = !1,
    b = !1,
    T = 0,
    x = 0;
  return e.canvas.addEventListener("mousedown", e => {
    g = !0, T = e.clientX, x = e.clientY
  }), e.canvas.addEventListener("mousemove", e => {
    g && e.clientX !== T && e.clientY !== x && (b = !0)
  }), e.canvas.addEventListener("mouseup", t => {
    const {
      selection: n
    } = e;
    if (!b) {
      const i = e.getDataAndPositionAt(t),
        o = i && i.data;
      o && o.selectable || n.clear(), ro(t) ? o && o.selectable && (n.contains(o) ? n.remove(o) : n.add(o)) : o !== v && (v && (document.body.removeChild(v._gui.domElement), n.clear(), v._dataGUI.dispose(), v._dataGUI = null, v._gui.destroy(), v._gui = null, v._materialGUIs.forEach(e => {
        e.dispose()
      }), v._materialGUIs = null), o && (! function (e) {
        const t = new cf(e),
          n = new Hn({
            autoPlace: !1
          });
        e._dataGUI = t, e._gui = n, n.domElement.style.position = "absolute", n.domElement.style.top = "0px", n.domElement.style.bottom = "0px", n.domElement.style.overflowY = "auto", document.body.appendChild(n.domElement), t.addGUIPosition(n, "position", "Position"), t.addGUIPosition(n, "scale", "Scale"), t.addGUIPosition(n, "rotation", "Rotation"), t.addGUIValue(n, "glow", "Glow"), t.addGUIValue(n, "outline", "Outline"), t.addGUIValue(n, "visible", "Visible"), e._materialGUIs = [], e.material ? e._materialGUIs.push(hf(n, e.material)) : e.mesh && e.mesh.primitives.forEach((t, i) => {
          const o = n.addFolder(`Material ${i}: ${t.material.name}`);
          e._materialGUIs.push(hf(o, t.material))
        })
      }(o), n.set(o)), v = o)
    }
    b = !1, g = !1
  }), t
}

function mf(e, t = "../") {
  e.brdfLUTImage = {
    url: `${t}asset/images/textures/brdfLUT.png`
  }, e.diffuseEnvImage = {
    url: [`${t}asset/images/textures/papermill/diffuse/diffuse_right_0.jpg`, `${t}asset/images/textures/papermill/diffuse/diffuse_left_0.jpg`, `${t}asset/images/textures/papermill/diffuse/diffuse_top_0.jpg`, `${t}asset/images/textures/papermill/diffuse/diffuse_bottom_0.jpg`, `${t}asset/images/textures/papermill/diffuse/diffuse_back_0.jpg`, `${t}asset/images/textures/papermill/diffuse/diffuse_front_0.jpg`],
    type: "CUBE_MAP",
    notUseImageBitmap: !0
  }, e.specularEnvImage = {
    url: [`${t}asset/images/textures/papermill/specular/specular_right.jpg`, `${t}asset/images/textures/papermill/specular/specular_left.jpg`, `${t}asset/images/textures/papermill/specular/specular_top.jpg`, `${t}asset/images/textures/papermill/specular/specular_bottom.jpg`, `${t}asset/images/textures/papermill/specular/specular_back.jpg`, `${t}asset/images/textures/papermill/specular/specular_front.jpg`],
    type: "CUBE_MAP",
    notUseImageBitmap: !0,
    mipCount: 10
  }
}
class _f {
  constructor(e, t, n, i, o) {
    if (this.loader = e, this.data = t, this.parentNode = n, this.path = i, this.arrayBuffer = o, this.hasChildren = t.children && t.children.length, this.isLoadingChildren = !1, this.isChildrenLoaded = !1, this.header = new Int32Array(o, 0, 7), 1835283298 !== this.header[0]) throw new Error("Invalid magic number in Batched 3D Model header");
    const a = this.header[3],
      r = this.header[4],
      s = this.header[5],
      l = this.header[6],
      u = new TextDecoder;
    let c = 28;
    if (a > 0) {
      const e = u.decode(new Uint8Array(o, c, a));
      this.featureTableJSON = JSON.parse(e), c += a
    } else this.featureTableJSON = {};
    if (r > 0 && (c += r), s > 0) {
      const e = u.decode(new Uint8Array(o, c, s));
      this.batchTableJSON = JSON.parse(e), c += s
    } else this.batchTableJSON = {};
    l > 0 && (c += l), this.byteOffset = c
  }
}
class vf {
  constructor(e) {
    this.options = e, e.onLoadRoot && (this.onLoadRoot = e.onLoadRoot.bind(this)), e.onLoadB3DM && (this.onLoadB3DM = e.onLoadB3DM.bind(this)), e.onLoadChildJSON && (this.onLoadChildJSON = e.onLoadChildJSON.bind(this)), this.path = e.path || "./", this.path.endsWith("/") || (this.path += "/"), this.datas = []
  }
  load() {
    const e = `${this.path}tileset.json`;
    this._loadJSON(e)
  }
  loadTileset(e, t, n, i) {
    let o = 0;
    const a = () => {
      ++o === e.children.length && i && i()
    };
    e.children.forEach(e => {
      if (e.content) {
        const o = e.content.uri || e.content.url;
        if (o.endsWith(".json")) {
          const a = this.onLoadChildJSON(e, n);
          this._loadJSON(t + o, a, i)
        } else o.endsWith(".b3dm") && this._loadB3DM(e, t, n, a)
      }
    })
  }
  _loadContent(e, t, n, i) {
    const o = e.content.uri || e.content.url;
    if (o.endsWith(".json")) {
      const a = this.onLoadChildJSON(e, n);
      this._loadJSON(t + o, a, i)
    } else o.endsWith(".b3dm") && this._loadB3DM(e, t, n, i)
  }
  _loadJSON(e, t, n) {
    const i = e.substr(0, e.lastIndexOf("/") + 1);
    fetch(e).then(e => e.json()).then(e => {
      t || (this.root = e.root, this.onLoadRoot(e.root)), e.root.content ? this._loadContent(e.root, i, t, n) : this.loadTileset(e.root, i, t, n)
    })
  }
  _loadB3DM(e, t, n, i) {
    const o = t + (e.content.uri || e.content.url);
    fetch(o).then(e => e.arrayBuffer()).then(o => {
      this.onLoadB3DM(new _f(this, e, n, t, o)), i && i()
    })
  }
  onLoadRoot(e) {}
  onLoadB3DM(e) {}
  onLoadChildJSON(e) {}
}
export {
  gl as Animate, Ys as Axis, br as BasisTexture, tl as Billboard, ps as BillboardMaterial, bo as BoundingBox, ho as BoundingSphere, il as BoxHelper, xl as Camera, Ws as Cube, Br as DDSTexture, Ri as DEBUG, Gs as Data, Zl as DirectionLight, Au as DofEffect, as as DrawMaterial, gu as Effect, mc as FlowEffect, fa as Framebuffer, oa as Frustum, nu as GLTFParser, Yr as GLTFResource, Hn as GUI, yu as GlowEffect, Zr as HDRTexture, Kr as ImageTexture, Dl as Light, ef as LightMap, os as Material, $s as Model, mu as ObjParser, Tu as OutlineEffect, ss as PBRMaterial, ra as Plane, tu as PointLight, cr as Program, Ou as SSAOEffect, cs as STDMaterial, oc as Scene, al as Selection, ls as ShaderMaterial, Zs as Sphere, $l as SpotLight, It as Stats, vs as TerrainMaterial, ca as Texture, vf as ThreeDTilesLoader, uc as TiltShiftEffect, qs as Torus, $o as Trigger, Do as VertexArray, bs as WaterMaterial, xs as WireframeMaterial, hc as ZoomBlurEffect, Ei as _l, Ho as addGeometry, fo as addLicenseExpiredTip, lo as addWebGLUnsupportedTip, Ki as ajax, Uo as calculateNormals, ko as calculateTangent, tf as convertGLColorToRGB, af as convertHEXColorToRGB, of as convertRGBColorToHEX, nf as convertRGBToGLColor, jo as createCircle, Vo as createCube, pf as createGUI, Vd as createLathe, Wo as createPlane, dr as createProgram, Xo as createSphere, Bo as createTorus, Go as createTruncatedCone, Qo as createVertexArray, oo as debounce, no as defineProperties, to as defineProperty, Jo as disposeVertexArrays, pd as extrudeGeoJSON, fd as extrudePolygon, hd as extrudePolyline, qc as flatten, io as fn2workerURL, Sd as fromCSG, Vi as getClientPoint, co as getLicense, so as getUrlName, o as glMatrix, Xi as isChrome, ro as isCtrlDown, ji as isImage, Zi as isImageBitmap, Wi as isImageBitmapAvailable, Bi as isImageBitmapSource, Gi as isSafari, eo as loadImageBitmap, Ui as logError, zi as logInfo, Fi as logWarn, u as mat2, p as mat2d, T as mat3, A as mat4, od as offsetPolygon, Jd as polylineToShape, ot as quat, _t as quat2, ao as random, zd as randomPointsInPrimitive, Qi as request, Yi as requestImage, qi as setCanvasSize, Ji as setLogError, ki as setLogInfo, Hi as setLogWarn, mf as setupSceneEnv, wd as toCSG, Zc as triangulate, uo as validateLicense, Lt as vec2, Y as vec3, Pe as vec4, Ai as version
};