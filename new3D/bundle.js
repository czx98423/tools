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
        c = n[2],
        u = n[3];
    return e[0] = i * s + a * l, e[1] = o * s + r * l, e[2] = i * c + a * u, e[3] = o * c + r * u, e
}

function r(e, t, n) {
    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e
}
const s = a,
    l = r;
var c = Object.freeze({
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
            c = n[2],
            u = n[3];
        return Math.abs(i - s) <= e * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(o - l) <= e * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - c) <= e * Math.max(1, Math.abs(a), Math.abs(c)) && Math.abs(r - u) <= e * Math.max(1, Math.abs(r), Math.abs(u))
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

function u(e, t, n) {
    let i = t[0],
        o = t[1],
        a = t[2],
        r = t[3],
        s = t[4],
        l = t[5],
        c = n[0],
        u = n[1],
        d = n[2],
        f = n[3],
        h = n[4],
        _ = n[5];
    return e[0] = i * c + a * u, e[1] = o * c + r * u, e[2] = i * d + a * f, e[3] = o * d + r * f, e[4] = i * h + a * _ + s, e[5] = o * h + r * _ + l, e
}

function d(e, t, n) {
    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e
}
const f = u,
    h = d;
var _ = Object.freeze({
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
    multiply: u,
    rotate: function (e, t, n) {
        let i = t[0],
            o = t[1],
            a = t[2],
            r = t[3],
            s = t[4],
            l = t[5],
            c = Math.sin(n),
            u = Math.cos(n);
        return e[0] = i * u + a * c, e[1] = o * u + r * c, e[2] = i * -c + a * u, e[3] = o * -c + r * u, e[4] = s, e[5] = l, e
    },
    scale: function (e, t, n) {
        let i = t[0],
            o = t[1],
            a = t[2],
            r = t[3],
            s = t[4],
            l = t[5],
            c = n[0],
            u = n[1];
        return e[0] = i * c, e[1] = o * c, e[2] = a * u, e[3] = r * u, e[4] = s, e[5] = l, e
    },
    translate: function (e, t, n) {
        let i = t[0],
            o = t[1],
            a = t[2],
            r = t[3],
            s = t[4],
            l = t[5],
            c = n[0],
            u = n[1];
        return e[0] = i, e[1] = o, e[2] = a, e[3] = r, e[4] = i * c + a * u + s, e[5] = o * c + r * u + l, e
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
            c = n[0],
            u = n[1],
            d = n[2],
            f = n[3],
            h = n[4],
            _ = n[5];
        return Math.abs(i - c) <= e * Math.max(1, Math.abs(i), Math.abs(c)) && Math.abs(o - u) <= e * Math.max(1, Math.abs(o), Math.abs(u)) && Math.abs(a - d) <= e * Math.max(1, Math.abs(a), Math.abs(d)) && Math.abs(r - f) <= e * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(s - h) <= e * Math.max(1, Math.abs(s), Math.abs(h)) && Math.abs(l - _) <= e * Math.max(1, Math.abs(l), Math.abs(_))
    },
    mul: f,
    sub: h
});

function m() {
    let e = new t(9);
    return t != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e
}

function p(e, t, n) {
    let i = t[0],
        o = t[1],
        a = t[2],
        r = t[3],
        s = t[4],
        l = t[5],
        c = t[6],
        u = t[7],
        d = t[8],
        f = n[0],
        h = n[1],
        _ = n[2],
        m = n[3],
        p = n[4],
        g = n[5],
        v = n[6],
        x = n[7],
        b = n[8];
    return e[0] = f * i + h * r + _ * c, e[1] = f * o + h * s + _ * u, e[2] = f * a + h * l + _ * d, e[3] = m * i + p * r + g * c, e[4] = m * o + p * s + g * u, e[5] = m * a + p * l + g * d, e[6] = v * i + x * r + b * c, e[7] = v * o + x * s + b * u, e[8] = v * a + x * l + b * d, e
}

function g(e, t, n) {
    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e
}
const v = p,
    x = g;
var b = Object.freeze({
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
    fromValues: function (e, n, i, o, a, r, s, l, c) {
        let u = new t(9);
        return u[0] = e, u[1] = n, u[2] = i, u[3] = o, u[4] = a, u[5] = r, u[6] = s, u[7] = l, u[8] = c, u
    },
    set: function (e, t, n, i, o, a, r, s, l, c) {
        return e[0] = t, e[1] = n, e[2] = i, e[3] = o, e[4] = a, e[5] = r, e[6] = s, e[7] = l, e[8] = c, e
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
            c = t[7],
            u = t[8],
            d = u * r - s * c,
            f = -u * a + s * l,
            h = c * a - r * l,
            _ = n * d + i * f + o * h;
        return _ ? (_ = 1 / _, e[0] = d * _, e[1] = (-u * i + o * c) * _, e[2] = (s * i - o * r) * _, e[3] = f * _, e[4] = (u * n - o * l) * _, e[5] = (-s * n + o * a) * _, e[6] = h * _, e[7] = (-c * n + i * l) * _, e[8] = (r * n - i * a) * _, e) : null
    },
    adjoint: function (e, t) {
        let n = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            r = t[4],
            s = t[5],
            l = t[6],
            c = t[7],
            u = t[8];
        return e[0] = r * u - s * c, e[1] = o * c - i * u, e[2] = i * s - o * r, e[3] = s * l - a * u, e[4] = n * u - o * l, e[5] = o * a - n * s, e[6] = a * c - r * l, e[7] = i * l - n * c, e[8] = n * r - i * a, e
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
            c = e[8];
        return t * (c * a - r * l) + n * (-c * o + r * s) + i * (l * o - a * s)
    },
    multiply: p,
    translate: function (e, t, n) {
        let i = t[0],
            o = t[1],
            a = t[2],
            r = t[3],
            s = t[4],
            l = t[5],
            c = t[6],
            u = t[7],
            d = t[8],
            f = n[0],
            h = n[1];
        return e[0] = i, e[1] = o, e[2] = a, e[3] = r, e[4] = s, e[5] = l, e[6] = f * i + h * r + c, e[7] = f * o + h * s + u, e[8] = f * a + h * l + d, e
    },
    rotate: function (e, t, n) {
        let i = t[0],
            o = t[1],
            a = t[2],
            r = t[3],
            s = t[4],
            l = t[5],
            c = t[6],
            u = t[7],
            d = t[8],
            f = Math.sin(n),
            h = Math.cos(n);
        return e[0] = h * i + f * r, e[1] = h * o + f * s, e[2] = h * a + f * l, e[3] = h * r - f * i, e[4] = h * s - f * o, e[5] = h * l - f * a, e[6] = c, e[7] = u, e[8] = d, e
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
            c = n * r,
            u = i * r,
            d = i * s,
            f = o * r,
            h = o * s,
            _ = o * l,
            m = a * r,
            p = a * s,
            g = a * l;
        return e[0] = 1 - d - _, e[3] = u - g, e[6] = f + p, e[1] = u + g, e[4] = 1 - c - _, e[7] = h - m, e[2] = f - p, e[5] = h + m, e[8] = 1 - c - d, e
    },
    normalFromMat4: function (e, t) {
        let n = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            r = t[4],
            s = t[5],
            l = t[6],
            c = t[7],
            u = t[8],
            d = t[9],
            f = t[10],
            h = t[11],
            _ = t[12],
            m = t[13],
            p = t[14],
            g = t[15],
            v = n * s - i * r,
            x = n * l - o * r,
            b = n * c - a * r,
            w = i * l - o * s,
            M = i * c - a * s,
            S = o * c - a * l,
            y = u * m - d * _,
            T = u * p - f * _,
            E = u * g - h * _,
            P = d * p - f * m,
            A = d * g - h * m,
            C = f * g - h * p,
            I = v * C - x * A + b * P + w * E - M * T + S * y;
        return I ? (I = 1 / I, e[0] = (s * C - l * A + c * P) * I, e[1] = (l * E - r * C - c * T) * I, e[2] = (r * A - s * E + c * y) * I, e[3] = (o * A - i * C - a * P) * I, e[4] = (n * C - o * E + a * T) * I, e[5] = (i * E - n * A - a * y) * I, e[6] = (m * S - p * M + g * w) * I, e[7] = (p * b - _ * S - g * x) * I, e[8] = (_ * M - m * b + g * v) * I, e) : null
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
    subtract: g,
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
            c = t[6],
            u = t[7],
            d = t[8],
            f = n[0],
            h = n[1],
            _ = n[2],
            m = n[3],
            p = n[4],
            g = n[5],
            v = n[6],
            x = n[7],
            b = n[8];
        return Math.abs(i - f) <= e * Math.max(1, Math.abs(i), Math.abs(f)) && Math.abs(o - h) <= e * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(a - _) <= e * Math.max(1, Math.abs(a), Math.abs(_)) && Math.abs(r - m) <= e * Math.max(1, Math.abs(r), Math.abs(m)) && Math.abs(s - p) <= e * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(l - g) <= e * Math.max(1, Math.abs(l), Math.abs(g)) && Math.abs(c - v) <= e * Math.max(1, Math.abs(c), Math.abs(v)) && Math.abs(u - x) <= e * Math.max(1, Math.abs(u), Math.abs(x)) && Math.abs(d - b) <= e * Math.max(1, Math.abs(d), Math.abs(b))
    },
    mul: v,
    sub: x
});

function w(e) {
    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
}

function M(e, t, n) {
    let i = t[0],
        o = t[1],
        a = t[2],
        r = t[3],
        s = t[4],
        l = t[5],
        c = t[6],
        u = t[7],
        d = t[8],
        f = t[9],
        h = t[10],
        _ = t[11],
        m = t[12],
        p = t[13],
        g = t[14],
        v = t[15],
        x = n[0],
        b = n[1],
        w = n[2],
        M = n[3];
    return e[0] = x * i + b * s + w * d + M * m, e[1] = x * o + b * l + w * f + M * p, e[2] = x * a + b * c + w * h + M * g, e[3] = x * r + b * u + w * _ + M * v, x = n[4], b = n[5], w = n[6], M = n[7], e[4] = x * i + b * s + w * d + M * m, e[5] = x * o + b * l + w * f + M * p, e[6] = x * a + b * c + w * h + M * g, e[7] = x * r + b * u + w * _ + M * v, x = n[8], b = n[9], w = n[10], M = n[11], e[8] = x * i + b * s + w * d + M * m, e[9] = x * o + b * l + w * f + M * p, e[10] = x * a + b * c + w * h + M * g, e[11] = x * r + b * u + w * _ + M * v, x = n[12], b = n[13], w = n[14], M = n[15], e[12] = x * i + b * s + w * d + M * m, e[13] = x * o + b * l + w * f + M * p, e[14] = x * a + b * c + w * h + M * g, e[15] = x * r + b * u + w * _ + M * v, e
}

function S(e, t, n) {
    let i = t[0],
        o = t[1],
        a = t[2],
        r = t[3],
        s = i + i,
        l = o + o,
        c = a + a,
        u = i * s,
        d = i * l,
        f = i * c,
        h = o * l,
        _ = o * c,
        m = a * c,
        p = r * s,
        g = r * l,
        v = r * c;
    return e[0] = 1 - (h + m), e[1] = d + v, e[2] = f - g, e[3] = 0, e[4] = d - v, e[5] = 1 - (u + m), e[6] = _ + p, e[7] = 0, e[8] = f + g, e[9] = _ - p, e[10] = 1 - (u + h), e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e
}

function y(e, t) {
    return e[0] = t[12], e[1] = t[13], e[2] = t[14], e
}

function T(e, t) {
    let n = t[0],
        i = t[1],
        o = t[2],
        a = t[4],
        r = t[5],
        s = t[6],
        l = t[8],
        c = t[9],
        u = t[10];
    return e[0] = Math.hypot(n, i, o), e[1] = Math.hypot(a, r, s), e[2] = Math.hypot(l, c, u), e
}

function E(e, n) {
    let i = new t(3);
    T(i, n);
    let o = 1 / i[0],
        a = 1 / i[1],
        r = 1 / i[2],
        s = n[0] * o,
        l = n[1] * a,
        c = n[2] * r,
        u = n[4] * o,
        d = n[5] * a,
        f = n[6] * r,
        h = n[8] * o,
        _ = n[9] * a,
        m = n[10] * r,
        p = s + d + m,
        g = 0;
    return p > 0 ? (g = 2 * Math.sqrt(p + 1), e[3] = .25 * g, e[0] = (f - _) / g, e[1] = (h - c) / g, e[2] = (l - u) / g) : s > d && s > m ? (g = 2 * Math.sqrt(1 + s - d - m), e[3] = (f - _) / g, e[0] = .25 * g, e[1] = (l + u) / g, e[2] = (h + c) / g) : d > m ? (g = 2 * Math.sqrt(1 + d - s - m), e[3] = (h - c) / g, e[0] = (l + u) / g, e[1] = .25 * g, e[2] = (f + _) / g) : (g = 2 * Math.sqrt(1 + m - s - d), e[3] = (l - u) / g, e[0] = (h + c) / g, e[1] = (f + _) / g, e[2] = .25 * g), e
}

function P(e, t, n) {
    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e[9] = t[9] - n[9], e[10] = t[10] - n[10], e[11] = t[11] - n[11], e[12] = t[12] - n[12], e[13] = t[13] - n[13], e[14] = t[14] - n[14], e[15] = t[15] - n[15], e
}
const A = M,
    C = P;
var I = Object.freeze({
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
    fromValues: function (e, n, i, o, a, r, s, l, c, u, d, f, h, _, m, p) {
        let g = new t(16);
        return g[0] = e, g[1] = n, g[2] = i, g[3] = o, g[4] = a, g[5] = r, g[6] = s, g[7] = l, g[8] = c, g[9] = u, g[10] = d, g[11] = f, g[12] = h, g[13] = _, g[14] = m, g[15] = p, g
    },
    set: function (e, t, n, i, o, a, r, s, l, c, u, d, f, h, _, m, p) {
        return e[0] = t, e[1] = n, e[2] = i, e[3] = o, e[4] = a, e[5] = r, e[6] = s, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = f, e[12] = h, e[13] = _, e[14] = m, e[15] = p, e
    },
    identity: w,
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
            c = t[7],
            u = t[8],
            d = t[9],
            f = t[10],
            h = t[11],
            _ = t[12],
            m = t[13],
            p = t[14],
            g = t[15],
            v = n * s - i * r,
            x = n * l - o * r,
            b = n * c - a * r,
            w = i * l - o * s,
            M = i * c - a * s,
            S = o * c - a * l,
            y = u * m - d * _,
            T = u * p - f * _,
            E = u * g - h * _,
            P = d * p - f * m,
            A = d * g - h * m,
            C = f * g - h * p,
            I = v * C - x * A + b * P + w * E - M * T + S * y;
        return I ? (I = 1 / I, e[0] = (s * C - l * A + c * P) * I, e[1] = (o * A - i * C - a * P) * I, e[2] = (m * S - p * M + g * w) * I, e[3] = (f * M - d * S - h * w) * I, e[4] = (l * E - r * C - c * T) * I, e[5] = (n * C - o * E + a * T) * I, e[6] = (p * b - _ * S - g * x) * I, e[7] = (u * S - f * b + h * x) * I, e[8] = (r * A - s * E + c * y) * I, e[9] = (i * E - n * A - a * y) * I, e[10] = (_ * M - m * b + g * v) * I, e[11] = (d * b - u * M - h * v) * I, e[12] = (s * T - r * P - l * y) * I, e[13] = (n * P - i * T + o * y) * I, e[14] = (m * x - _ * w - p * v) * I, e[15] = (u * w - d * x + f * v) * I, e) : null
    },
    adjoint: function (e, t) {
        let n = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            r = t[4],
            s = t[5],
            l = t[6],
            c = t[7],
            u = t[8],
            d = t[9],
            f = t[10],
            h = t[11],
            _ = t[12],
            m = t[13],
            p = t[14],
            g = t[15];
        return e[0] = s * (f * g - h * p) - d * (l * g - c * p) + m * (l * h - c * f), e[1] = -(i * (f * g - h * p) - d * (o * g - a * p) + m * (o * h - a * f)), e[2] = i * (l * g - c * p) - s * (o * g - a * p) + m * (o * c - a * l), e[3] = -(i * (l * h - c * f) - s * (o * h - a * f) + d * (o * c - a * l)), e[4] = -(r * (f * g - h * p) - u * (l * g - c * p) + _ * (l * h - c * f)), e[5] = n * (f * g - h * p) - u * (o * g - a * p) + _ * (o * h - a * f), e[6] = -(n * (l * g - c * p) - r * (o * g - a * p) + _ * (o * c - a * l)), e[7] = n * (l * h - c * f) - r * (o * h - a * f) + u * (o * c - a * l), e[8] = r * (d * g - h * m) - u * (s * g - c * m) + _ * (s * h - c * d), e[9] = -(n * (d * g - h * m) - u * (i * g - a * m) + _ * (i * h - a * d)), e[10] = n * (s * g - c * m) - r * (i * g - a * m) + _ * (i * c - a * s), e[11] = -(n * (s * h - c * d) - r * (i * h - a * d) + u * (i * c - a * s)), e[12] = -(r * (d * p - f * m) - u * (s * p - l * m) + _ * (s * f - l * d)), e[13] = n * (d * p - f * m) - u * (i * p - o * m) + _ * (i * f - o * d), e[14] = -(n * (s * p - l * m) - r * (i * p - o * m) + _ * (i * l - o * s)), e[15] = n * (s * f - l * d) - r * (i * f - o * d) + u * (i * l - o * s), e
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
            c = e[8],
            u = e[9],
            d = e[10],
            f = e[11],
            h = e[12],
            _ = e[13],
            m = e[14],
            p = e[15];
        return (t * r - n * a) * (d * p - f * m) - (t * s - i * a) * (u * p - f * _) + (t * l - o * a) * (u * m - d * _) + (n * s - i * r) * (c * p - f * h) - (n * l - o * r) * (c * m - d * h) + (i * l - o * s) * (c * _ - u * h)
    },
    multiply: M,
    translate: function (e, t, n) {
        let i, o, a, r, s, l, c, u, d, f, h, _, m = n[0],
            p = n[1],
            g = n[2];
        return t === e ? (e[12] = t[0] * m + t[4] * p + t[8] * g + t[12], e[13] = t[1] * m + t[5] * p + t[9] * g + t[13], e[14] = t[2] * m + t[6] * p + t[10] * g + t[14], e[15] = t[3] * m + t[7] * p + t[11] * g + t[15]) : (i = t[0], o = t[1], a = t[2], r = t[3], s = t[4], l = t[5], c = t[6], u = t[7], d = t[8], f = t[9], h = t[10], _ = t[11], e[0] = i, e[1] = o, e[2] = a, e[3] = r, e[4] = s, e[5] = l, e[6] = c, e[7] = u, e[8] = d, e[9] = f, e[10] = h, e[11] = _, e[12] = i * m + s * p + d * g + t[12], e[13] = o * m + l * p + f * g + t[13], e[14] = a * m + c * p + h * g + t[14], e[15] = r * m + u * p + _ * g + t[15]), e
    },
    scale: function (e, t, n) {
        let i = n[0],
            o = n[1],
            a = n[2];
        return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e[3] = t[3] * i, e[4] = t[4] * o, e[5] = t[5] * o, e[6] = t[6] * o, e[7] = t[7] * o, e[8] = t[8] * a, e[9] = t[9] * a, e[10] = t[10] * a, e[11] = t[11] * a, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    },
    rotate: function (t, n, i, o) {
        let a, r, s, l, c, u, d, f, h, _, m, p, g, v, x, b, w, M, S, y, T, E, P, A, C = o[0],
            I = o[1],
            R = o[2],
            O = Math.hypot(C, I, R);
        return O < e ? null : (C *= O = 1 / O, I *= O, R *= O, a = Math.sin(i), s = 1 - (r = Math.cos(i)), l = n[0], c = n[1], u = n[2], d = n[3], f = n[4], h = n[5], _ = n[6], m = n[7], p = n[8], g = n[9], v = n[10], x = n[11], b = C * C * s + r, w = I * C * s + R * a, M = R * C * s - I * a, S = C * I * s - R * a, y = I * I * s + r, T = R * I * s + C * a, E = C * R * s + I * a, P = I * R * s - C * a, A = R * R * s + r, t[0] = l * b + f * w + p * M, t[1] = c * b + h * w + g * M, t[2] = u * b + _ * w + v * M, t[3] = d * b + m * w + x * M, t[4] = l * S + f * y + p * T, t[5] = c * S + h * y + g * T, t[6] = u * S + _ * y + v * T, t[7] = d * S + m * y + x * T, t[8] = l * E + f * P + p * A, t[9] = c * E + h * P + g * A, t[10] = u * E + _ * P + v * A, t[11] = d * E + m * P + x * A, n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t)
    },
    rotateX: function (e, t, n) {
        let i = Math.sin(n),
            o = Math.cos(n),
            a = t[4],
            r = t[5],
            s = t[6],
            l = t[7],
            c = t[8],
            u = t[9],
            d = t[10],
            f = t[11];
        return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = a * o + c * i, e[5] = r * o + u * i, e[6] = s * o + d * i, e[7] = l * o + f * i, e[8] = c * o - a * i, e[9] = u * o - r * i, e[10] = d * o - s * i, e[11] = f * o - l * i, e
    },
    rotateY: function (e, t, n) {
        let i = Math.sin(n),
            o = Math.cos(n),
            a = t[0],
            r = t[1],
            s = t[2],
            l = t[3],
            c = t[8],
            u = t[9],
            d = t[10],
            f = t[11];
        return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * o - c * i, e[1] = r * o - u * i, e[2] = s * o - d * i, e[3] = l * o - f * i, e[8] = a * i + c * o, e[9] = r * i + u * o, e[10] = s * i + d * o, e[11] = l * i + f * o, e
    },
    rotateZ: function (e, t, n) {
        let i = Math.sin(n),
            o = Math.cos(n),
            a = t[0],
            r = t[1],
            s = t[2],
            l = t[3],
            c = t[4],
            u = t[5],
            d = t[6],
            f = t[7];
        return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * o + c * i, e[1] = r * o + u * i, e[2] = s * o + d * i, e[3] = l * o + f * i, e[4] = c * o - a * i, e[5] = u * o - r * i, e[6] = d * o - s * i, e[7] = f * o - l * i, e
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
            c = i[2],
            u = Math.hypot(s, l, c);
        return u < e ? null : (s *= u = 1 / u, l *= u, c *= u, o = Math.sin(n), r = 1 - (a = Math.cos(n)), t[0] = s * s * r + a, t[1] = l * s * r + c * o, t[2] = c * s * r - l * o, t[3] = 0, t[4] = s * l * r - c * o, t[5] = l * l * r + a, t[6] = c * l * r + s * o, t[7] = 0, t[8] = s * c * r + l * o, t[9] = l * c * r - s * o, t[10] = c * c * r + a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
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
    fromRotationTranslation: S,
    fromQuat2: function (e, n) {
        let i = new t(3),
            o = -n[0],
            a = -n[1],
            r = -n[2],
            s = n[3],
            l = n[4],
            c = n[5],
            u = n[6],
            d = n[7],
            f = o * o + a * a + r * r + s * s;
        return f > 0 ? (i[0] = 2 * (l * s + d * o + c * r - u * a) / f, i[1] = 2 * (c * s + d * a + u * o - l * r) / f, i[2] = 2 * (u * s + d * r + l * a - c * o) / f) : (i[0] = 2 * (l * s + d * o + c * r - u * a), i[1] = 2 * (c * s + d * a + u * o - l * r), i[2] = 2 * (u * s + d * r + l * a - c * o)), S(e, n, i), e
    },
    getTranslation: y,
    getScaling: T,
    getRotation: E,
    fromRotationTranslationScale: function (e, t, n, i) {
        let o = t[0],
            a = t[1],
            r = t[2],
            s = t[3],
            l = o + o,
            c = a + a,
            u = r + r,
            d = o * l,
            f = o * c,
            h = o * u,
            _ = a * c,
            m = a * u,
            p = r * u,
            g = s * l,
            v = s * c,
            x = s * u,
            b = i[0],
            w = i[1],
            M = i[2];
        return e[0] = (1 - (_ + p)) * b, e[1] = (f + x) * b, e[2] = (h - v) * b, e[3] = 0, e[4] = (f - x) * w, e[5] = (1 - (d + p)) * w, e[6] = (m + g) * w, e[7] = 0, e[8] = (h + v) * M, e[9] = (m - g) * M, e[10] = (1 - (d + _)) * M, e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e
    },
    fromRotationTranslationScaleOrigin: function (e, t, n, i, o) {
        let a = t[0],
            r = t[1],
            s = t[2],
            l = t[3],
            c = a + a,
            u = r + r,
            d = s + s,
            f = a * c,
            h = a * u,
            _ = a * d,
            m = r * u,
            p = r * d,
            g = s * d,
            v = l * c,
            x = l * u,
            b = l * d,
            w = i[0],
            M = i[1],
            S = i[2],
            y = o[0],
            T = o[1],
            E = o[2],
            P = (1 - (m + g)) * w,
            A = (h + b) * w,
            C = (_ - x) * w,
            I = (h - b) * M,
            R = (1 - (f + g)) * M,
            O = (p + v) * M,
            L = (_ + x) * S,
            N = (p - v) * S,
            D = (1 - (f + m)) * S;
        return e[0] = P, e[1] = A, e[2] = C, e[3] = 0, e[4] = I, e[5] = R, e[6] = O, e[7] = 0, e[8] = L, e[9] = N, e[10] = D, e[11] = 0, e[12] = n[0] + y - (P * y + I * T + L * E), e[13] = n[1] + T - (A * y + R * T + N * E), e[14] = n[2] + E - (C * y + O * T + D * E), e[15] = 1, e
    },
    fromQuat: function (e, t) {
        let n = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            r = n + n,
            s = i + i,
            l = o + o,
            c = n * r,
            u = i * r,
            d = i * s,
            f = o * r,
            h = o * s,
            _ = o * l,
            m = a * r,
            p = a * s,
            g = a * l;
        return e[0] = 1 - d - _, e[1] = u + g, e[2] = f - p, e[3] = 0, e[4] = u - g, e[5] = 1 - c - _, e[6] = h + m, e[7] = 0, e[8] = f + p, e[9] = h - m, e[10] = 1 - c - d, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    },
    frustum: function (e, t, n, i, o, a, r) {
        let s = 1 / (n - t),
            l = 1 / (o - i),
            c = 1 / (a - r);
        return e[0] = 2 * a * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * a * l, e[6] = 0, e[7] = 0, e[8] = (n + t) * s, e[9] = (o + i) * l, e[10] = (r + a) * c, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = r * a * 2 * c, e[15] = 0, e
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
            c = 2 / (o + a);
        return e[0] = l, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = c, e[6] = 0, e[7] = 0, e[8] = -(r - s) * l * .5, e[9] = (o - a) * c * .5, e[10] = i / (n - i), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = i * n / (n - i), e[15] = 0, e
    },
    ortho: function (e, t, n, i, o, a, r) {
        let s = 1 / (t - n),
            l = 1 / (i - o),
            c = 1 / (a - r);
        return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * l, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * c, e[11] = 0, e[12] = (t + n) * s, e[13] = (o + i) * l, e[14] = (r + a) * c, e[15] = 1, e
    },
    lookAt: function (t, n, i, o) {
        let a, r, s, l, c, u, d, f, h, _, m = n[0],
            p = n[1],
            g = n[2],
            v = o[0],
            x = o[1],
            b = o[2],
            M = i[0],
            S = i[1],
            y = i[2];
        return Math.abs(m - M) < e && Math.abs(p - S) < e && Math.abs(g - y) < e ? w(t) : (d = m - M, f = p - S, h = g - y, a = x * (h *= _ = 1 / Math.hypot(d, f, h)) - b * (f *= _), r = b * (d *= _) - v * h, s = v * f - x * d, (_ = Math.hypot(a, r, s)) ? (a *= _ = 1 / _, r *= _, s *= _) : (a = 0, r = 0, s = 0), l = f * s - h * r, c = h * a - d * s, u = d * r - f * a, (_ = Math.hypot(l, c, u)) ? (l *= _ = 1 / _, c *= _, u *= _) : (l = 0, c = 0, u = 0), t[0] = a, t[1] = l, t[2] = d, t[3] = 0, t[4] = r, t[5] = c, t[6] = f, t[7] = 0, t[8] = s, t[9] = u, t[10] = h, t[11] = 0, t[12] = -(a * m + r * p + s * g), t[13] = -(l * m + c * p + u * g), t[14] = -(d * m + f * p + h * g), t[15] = 1, t)
    },
    targetTo: function (e, t, n, i) {
        let o = t[0],
            a = t[1],
            r = t[2],
            s = i[0],
            l = i[1],
            c = i[2],
            u = o - n[0],
            d = a - n[1],
            f = r - n[2],
            h = u * u + d * d + f * f;
        h > 0 && (u *= h = 1 / Math.sqrt(h), d *= h, f *= h);
        let _ = l * f - c * d,
            m = c * u - s * f,
            p = s * d - l * u;
        return (h = _ * _ + m * m + p * p) > 0 && (_ *= h = 1 / Math.sqrt(h), m *= h, p *= h), e[0] = _, e[1] = m, e[2] = p, e[3] = 0, e[4] = d * p - f * m, e[5] = f * _ - u * p, e[6] = u * m - d * _, e[7] = 0, e[8] = u, e[9] = d, e[10] = f, e[11] = 0, e[12] = o, e[13] = a, e[14] = r, e[15] = 1, e
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
    subtract: P,
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
            c = t[6],
            u = t[7],
            d = t[8],
            f = t[9],
            h = t[10],
            _ = t[11],
            m = t[12],
            p = t[13],
            g = t[14],
            v = t[15],
            x = n[0],
            b = n[1],
            w = n[2],
            M = n[3],
            S = n[4],
            y = n[5],
            T = n[6],
            E = n[7],
            P = n[8],
            A = n[9],
            C = n[10],
            I = n[11],
            R = n[12],
            O = n[13],
            L = n[14],
            N = n[15];
        return Math.abs(i - x) <= e * Math.max(1, Math.abs(i), Math.abs(x)) && Math.abs(o - b) <= e * Math.max(1, Math.abs(o), Math.abs(b)) && Math.abs(a - w) <= e * Math.max(1, Math.abs(a), Math.abs(w)) && Math.abs(r - M) <= e * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(s - S) <= e * Math.max(1, Math.abs(s), Math.abs(S)) && Math.abs(l - y) <= e * Math.max(1, Math.abs(l), Math.abs(y)) && Math.abs(c - T) <= e * Math.max(1, Math.abs(c), Math.abs(T)) && Math.abs(u - E) <= e * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(d - P) <= e * Math.max(1, Math.abs(d), Math.abs(P)) && Math.abs(f - A) <= e * Math.max(1, Math.abs(f), Math.abs(A)) && Math.abs(h - C) <= e * Math.max(1, Math.abs(h), Math.abs(C)) && Math.abs(_ - I) <= e * Math.max(1, Math.abs(_), Math.abs(I)) && Math.abs(m - R) <= e * Math.max(1, Math.abs(m), Math.abs(R)) && Math.abs(p - O) <= e * Math.max(1, Math.abs(p), Math.abs(O)) && Math.abs(g - L) <= e * Math.max(1, Math.abs(g), Math.abs(L)) && Math.abs(v - N) <= e * Math.max(1, Math.abs(v), Math.abs(N))
    },
    mul: A,
    sub: C
});

function R() {
    let e = new t(3);
    return t != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e
}

function O(e) {
    let t = e[0],
        n = e[1],
        i = e[2];
    return Math.hypot(t, n, i)
}

function L(e, n, i) {
    let o = new t(3);
    return o[0] = e, o[1] = n, o[2] = i, o
}

function N(e, t, n) {
    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e
}

function D(e, t, n) {
    return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e
}

function F(e, t, n) {
    return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e
}

function U(e, t) {
    let n = t[0] - e[0],
        i = t[1] - e[1],
        o = t[2] - e[2];
    return Math.hypot(n, i, o)
}

function V(e, t) {
    let n = t[0] - e[0],
        i = t[1] - e[1],
        o = t[2] - e[2];
    return n * n + i * i + o * o
}

function B(e) {
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

function G(e, t) {
    return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
}

function k(e, t, n) {
    let i = t[0],
        o = t[1],
        a = t[2],
        r = n[0],
        s = n[1],
        l = n[2];
    return e[0] = o * l - a * s, e[1] = a * r - i * l, e[2] = i * s - o * r, e
}
const z = N,
    j = D,
    W = F,
    q = U,
    X = V,
    Y = O,
    Z = B;
let K = null;
var J = Object.freeze({
    create: R,
    clone: function (e) {
        var n = new t(3);
        return n[0] = e[0], n[1] = e[1], n[2] = e[2], n
    },
    length: O,
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
    subtract: N,
    multiply: D,
    divide: F,
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
    distance: U,
    squaredDistance: V,
    squaredLength: B,
    negate: function (e, t) {
        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
    },
    inverse: function (e, t) {
        return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e
    },
    normalize: H,
    dot: G,
    cross: k,
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
            c = r * (a - 1),
            u = r * (3 - 2 * a);
        return e[0] = t[0] * s + n[0] * l + i[0] * c + o[0] * u, e[1] = t[1] * s + n[1] * l + i[1] * c + o[1] * u, e[2] = t[2] * s + n[2] * l + i[2] * c + o[2] * u, e
    },
    bezier: function (e, t, n, i, o, a) {
        let r = 1 - a,
            s = r * r,
            l = a * a,
            c = s * r,
            u = 3 * a * s,
            d = 3 * l * r,
            f = l * a;
        return e[0] = t[0] * c + n[0] * u + i[0] * d + o[0] * f, e[1] = t[1] * c + n[1] * u + i[1] * d + o[1] * f, e[2] = t[2] * c + n[2] * u + i[2] * d + o[2] * f, e
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
            c = t[2],
            u = o * c - a * l,
            d = a * s - i * c,
            f = i * l - o * s,
            h = o * f - a * d,
            _ = a * u - i * f,
            m = i * d - o * u,
            p = 2 * r;
        return u *= p, d *= p, f *= p, h *= 2, _ *= 2, m *= 2, e[0] = s + u + h, e[1] = l + d + _, e[2] = c + f + m, e
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
        let o = G(n, i);
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
    sub: z,
    mul: j,
    div: W,
    dist: q,
    sqrDist: X,
    len: Y,
    sqrLen: Z,
    forEach: function (e, t, n, i, o, a) {
        let r, s;
        for (K || (K = R()), t || (t = 3), n || (n = 0), s = i ? Math.min(i * t + n, e.length) : e.length, r = n; r < s; r += t) K[0] = e[r], K[1] = e[r + 1], K[2] = e[r + 2], o(K, K, a), e[r] = K[0], e[r + 1] = K[1], e[r + 2] = K[2];
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

function ce(e, t) {
    let n = t[0] - e[0],
        i = t[1] - e[1],
        o = t[2] - e[2],
        a = t[3] - e[3];
    return n * n + i * i + o * o + a * a
}

function ue(e) {
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

function _e(e, t, n, i) {
    let o = t[0],
        a = t[1],
        r = t[2],
        s = t[3];
    return e[0] = o + i * (n[0] - o), e[1] = a + i * (n[1] - a), e[2] = r + i * (n[2] - r), e[3] = s + i * (n[3] - s), e
}

function me(e, t) {
    return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3]
}

function pe(t, n) {
    let i = t[0],
        o = t[1],
        a = t[2],
        r = t[3],
        s = n[0],
        l = n[1],
        c = n[2],
        u = n[3];
    return Math.abs(i - s) <= e * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(o - l) <= e * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - c) <= e * Math.max(1, Math.abs(a), Math.abs(c)) && Math.abs(r - u) <= e * Math.max(1, Math.abs(r), Math.abs(u))
}
const ge = oe,
    ve = ae,
    xe = re,
    be = le,
    we = ce,
    Me = ue,
    Se = de;
let ye = null;
var Te = Object.freeze({
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
    squaredDistance: ce,
    length: ue,
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
            c = n[2] * i[3] - n[3] * i[2],
            u = t[0],
            d = t[1],
            f = t[2],
            h = t[3];
        return e[0] = d * c - f * l + h * s, e[1] = -u * c + f * r - h * a, e[2] = u * l - d * r + h * o, e[3] = -u * s + d * a - f * o, e
    },
    lerp: _e,
    random: function (e, t) {
        var i, o, a, r, s, l;
        t = t || 1;
        do {
            s = (i = 2 * n() - 1) * i + (o = 2 * n() - 1) * o
        } while (s >= 1);
        do {
            l = (a = 2 * n() - 1) * a + (r = 2 * n() - 1) * r
        } while (l >= 1);
        var c = Math.sqrt((1 - s) / l);
        return e[0] = t * i, e[1] = t * o, e[2] = t * a * c, e[3] = t * r * c, e
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
            c = n[3],
            u = c * i + s * a - l * o,
            d = c * o + l * i - r * a,
            f = c * a + r * o - s * i,
            h = -r * i - s * o - l * a;
        return e[0] = u * c + h * -r + d * -l - f * -s, e[1] = d * c + h * -s + f * -r - u * -l, e[2] = f * c + h * -l + u * -s - d * -r, e[3] = t[3], e
    },
    zero: function (e) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e
    },
    str: function (e) {
        return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
    },
    exactEquals: me,
    equals: pe,
    sub: ge,
    mul: ve,
    div: xe,
    dist: be,
    sqrDist: we,
    len: Me,
    sqrLen: Se,
    forEach: function (e, t, n, i, o, a) {
        let r, s;
        for (ye || (ye = Q()), t || (t = 4), n || (n = 0), s = i ? Math.min(i * t + n, e.length) : e.length, r = n; r < s; r += t) ye[0] = e[r], ye[1] = e[r + 1], ye[2] = e[r + 2], ye[3] = e[r + 3], o(ye, ye, a), e[r] = ye[0], e[r + 1] = ye[1], e[r + 2] = ye[2], e[r + 3] = ye[3];
        return e
    }
});

function Ee() {
    let e = new t(4);
    return t != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e[3] = 1, e
}

function Pe(e, t, n) {
    n *= .5;
    let i = Math.sin(n);
    return e[0] = i * t[0], e[1] = i * t[1], e[2] = i * t[2], e[3] = Math.cos(n), e
}

function Ae(e, t, n) {
    let i = t[0],
        o = t[1],
        a = t[2],
        r = t[3],
        s = n[0],
        l = n[1],
        c = n[2],
        u = n[3];
    return e[0] = i * u + r * s + o * c - a * l, e[1] = o * u + r * l + a * s - i * c, e[2] = a * u + r * c + i * l - o * s, e[3] = r * u - i * s - o * l - a * c, e
}

function Ce(e, t, n) {
    n *= .5;
    let i = t[0],
        o = t[1],
        a = t[2],
        r = t[3],
        s = Math.sin(n),
        l = Math.cos(n);
    return e[0] = i * l + r * s, e[1] = o * l + a * s, e[2] = a * l - o * s, e[3] = r * l - i * s, e
}

function Ie(e, t, n) {
    n *= .5;
    let i = t[0],
        o = t[1],
        a = t[2],
        r = t[3],
        s = Math.sin(n),
        l = Math.cos(n);
    return e[0] = i * l - a * s, e[1] = o * l + r * s, e[2] = a * l + i * s, e[3] = r * l - o * s, e
}

function Re(e, t, n) {
    n *= .5;
    let i = t[0],
        o = t[1],
        a = t[2],
        r = t[3],
        s = Math.sin(n),
        l = Math.cos(n);
    return e[0] = i * l + o * s, e[1] = o * l - i * s, e[2] = a * l + r * s, e[3] = r * l - a * s, e
}

function Oe(e, t) {
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

function Ne(t, n, i, o) {
    let a, r, s, l, c, u = n[0],
        d = n[1],
        f = n[2],
        h = n[3],
        _ = i[0],
        m = i[1],
        p = i[2],
        g = i[3];
    return (r = u * _ + d * m + f * p + h * g) < 0 && (r = -r, _ = -_, m = -m, p = -p, g = -g), 1 - r > e ? (a = Math.acos(r), s = Math.sin(a), l = Math.sin((1 - o) * a) / s, c = Math.sin(o * a) / s) : (l = 1 - o, c = o), t[0] = l * u + c * _, t[1] = l * d + c * m, t[2] = l * f + c * p, t[3] = l * h + c * g, t
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
const Fe = $,
    Ue = ee,
    Ve = te,
    Be = ne,
    He = ie,
    Ge = Ae,
    ke = se,
    ze = he,
    je = _e,
    We = ue,
    qe = We,
    Xe = de,
    Ye = Xe,
    Ze = fe,
    Ke = me,
    Je = pe;
let Qe = null,
    $e = null,
    et = null;
let tt = null,
    nt = null;
let it = null;
var ot = Object.freeze({
    create: Ee,
    identity: function (e) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
    },
    setAxisAngle: Pe,
    getAxisAngle: function (t, n) {
        let i = 2 * Math.acos(n[3]),
            o = Math.sin(i / 2);
        return o > e ? (t[0] = n[0] / o, t[1] = n[1] / o, t[2] = n[2] / o) : (t[0] = 1, t[1] = 0, t[2] = 0), i
    },
    getAngle: function (e, t) {
        let n = ze(e, t);
        return Math.acos(2 * n * n - 1)
    },
    multiply: Ae,
    rotateX: Ce,
    rotateY: Ie,
    rotateZ: Re,
    calculateW: function (e, t) {
        let n = t[0],
            i = t[1],
            o = t[2];
        return e[0] = n, e[1] = i, e[2] = o, e[3] = Math.sqrt(Math.abs(1 - n * n - i * i - o * o)), e
    },
    exp: Oe,
    ln: Le,
    pow: function (e, t, n) {
        return Le(e, t), ke(e, e, n), Oe(e, e), e
    },
    slerp: Ne,
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
            c = Math.sin(i),
            u = Math.cos(i);
        return e[0] = a * l * u - r * s * c, e[1] = r * s * u + a * l * c, e[2] = r * l * c - a * s * u, e[3] = r * l * u + a * s * c, e
    },
    str: function (e) {
        return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
    },
    clone: Fe,
    fromValues: Ue,
    copy: Ve,
    set: Be,
    add: He,
    mul: Ge,
    scale: ke,
    dot: ze,
    lerp: je,
    length: We,
    len: qe,
    squaredLength: Xe,
    sqrLen: Ye,
    normalize: Ze,
    exactEquals: Ke,
    equals: Je,
    rotationTo: function (e, t, n) {
        Qe || (Qe = R(), $e = L(1, 0, 0), et = L(0, 1, 0));
        let i = G(t, n);
        return i < -.999999 ? (k(Qe, $e, t), Y(Qe) < 1e-6 && k(Qe, et, t), H(Qe, Qe), Pe(e, Qe, Math.PI), e) : i > .999999 ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e) : (k(Qe, t, n), e[0] = Qe[0], e[1] = Qe[1], e[2] = Qe[2], e[3] = 1 + i, Ze(e, e))
    },
    sqlerp: function (e, t, n, i, o, a) {
        return tt || (tt = Ee(), nt = Ee()), Ne(tt, t, o, a), Ne(nt, n, i, a), Ne(e, tt, nt, 2 * a * (1 - a)), e
    },
    setAxes: function (e, t, n, i) {
        return it || (it = m()), it[0] = n[0], it[3] = n[1], it[6] = n[2], it[1] = i[0], it[4] = i[1], it[7] = i[2], it[2] = -t[0], it[5] = -t[1], it[8] = -t[2], Ze(e, De(e, it))
    }
});

function at(e, t, n) {
    let i = .5 * n[0],
        o = .5 * n[1],
        a = .5 * n[2],
        r = t[0],
        s = t[1],
        l = t[2],
        c = t[3];
    return e[0] = r, e[1] = s, e[2] = l, e[3] = c, e[4] = i * c + o * l - a * s, e[5] = o * c + a * r - i * l, e[6] = a * c + i * s - o * r, e[7] = -i * r - o * s - a * l, e
}

function rt(e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e
}
const st = Ve;
const lt = Ve;

function ct(e, t, n) {
    let i = t[0],
        o = t[1],
        a = t[2],
        r = t[3],
        s = n[4],
        l = n[5],
        c = n[6],
        u = n[7],
        d = t[4],
        f = t[5],
        h = t[6],
        _ = t[7],
        m = n[0],
        p = n[1],
        g = n[2],
        v = n[3];
    return e[0] = i * v + r * m + o * g - a * p, e[1] = o * v + r * p + a * m - i * g, e[2] = a * v + r * g + i * p - o * m, e[3] = r * v - i * m - o * p - a * g, e[4] = i * u + r * s + o * c - a * l + d * v + _ * m + f * g - h * p, e[5] = o * u + r * l + a * s - i * c + f * v + _ * p + h * m - d * g, e[6] = a * u + r * c + i * l - o * s + h * v + _ * g + d * p - f * m, e[7] = r * u - i * s - o * l - a * c + _ * v - d * m - f * p - h * g, e
}
const ut = ct;
const dt = ze;
const ft = We,
    ht = ft,
    _t = Xe,
    mt = _t;
var pt = Object.freeze({
    create: function () {
        let e = new t(8);
        return t != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[3] = 1, e
    },
    clone: function (e) {
        let n = new t(8);
        return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n
    },
    fromValues: function (e, n, i, o, a, r, s, l) {
        let c = new t(8);
        return c[0] = e, c[1] = n, c[2] = i, c[3] = o, c[4] = a, c[5] = r, c[6] = s, c[7] = l, c
    },
    fromRotationTranslationValues: function (e, n, i, o, a, r, s) {
        let l = new t(8);
        l[0] = e, l[1] = n, l[2] = i, l[3] = o;
        let c = .5 * a,
            u = .5 * r,
            d = .5 * s;
        return l[4] = c * o + u * i - d * n, l[5] = u * o + d * e - c * i, l[6] = d * o + c * n - u * e, l[7] = -c * e - u * n - d * i, l
    },
    fromRotationTranslation: at,
    fromTranslation: function (e, t) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = .5 * t[0], e[5] = .5 * t[1], e[6] = .5 * t[2], e[7] = 0, e
    },
    fromRotation: function (e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e
    },
    fromMat4: function (e, n) {
        let i = Ee();
        E(i, n);
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
            c = t[3];
        return e[0] = 2 * (n * c + a * r + i * l - o * s), e[1] = 2 * (i * c + a * s + o * r - n * l), e[2] = 2 * (o * c + a * l + n * s - i * r), e
    },
    translate: function (e, t, n) {
        let i = t[0],
            o = t[1],
            a = t[2],
            r = t[3],
            s = .5 * n[0],
            l = .5 * n[1],
            c = .5 * n[2],
            u = t[4],
            d = t[5],
            f = t[6],
            h = t[7];
        return e[0] = i, e[1] = o, e[2] = a, e[3] = r, e[4] = r * s + o * c - a * l + u, e[5] = r * l + a * s - i * c + d, e[6] = r * c + i * l - o * s + f, e[7] = -i * s - o * l - a * c + h, e
    },
    rotateX: function (e, t, n) {
        let i = -t[0],
            o = -t[1],
            a = -t[2],
            r = t[3],
            s = t[4],
            l = t[5],
            c = t[6],
            u = t[7],
            d = s * r + u * i + l * a - c * o,
            f = l * r + u * o + c * i - s * a,
            h = c * r + u * a + s * o - l * i,
            _ = u * r - s * i - l * o - c * a;
        return Ce(e, t, n), i = e[0], o = e[1], a = e[2], r = e[3], e[4] = d * r + _ * i + f * a - h * o, e[5] = f * r + _ * o + h * i - d * a, e[6] = h * r + _ * a + d * o - f * i, e[7] = _ * r - d * i - f * o - h * a, e
    },
    rotateY: function (e, t, n) {
        let i = -t[0],
            o = -t[1],
            a = -t[2],
            r = t[3],
            s = t[4],
            l = t[5],
            c = t[6],
            u = t[7],
            d = s * r + u * i + l * a - c * o,
            f = l * r + u * o + c * i - s * a,
            h = c * r + u * a + s * o - l * i,
            _ = u * r - s * i - l * o - c * a;
        return Ie(e, t, n), i = e[0], o = e[1], a = e[2], r = e[3], e[4] = d * r + _ * i + f * a - h * o, e[5] = f * r + _ * o + h * i - d * a, e[6] = h * r + _ * a + d * o - f * i, e[7] = _ * r - d * i - f * o - h * a, e
    },
    rotateZ: function (e, t, n) {
        let i = -t[0],
            o = -t[1],
            a = -t[2],
            r = t[3],
            s = t[4],
            l = t[5],
            c = t[6],
            u = t[7],
            d = s * r + u * i + l * a - c * o,
            f = l * r + u * o + c * i - s * a,
            h = c * r + u * a + s * o - l * i,
            _ = u * r - s * i - l * o - c * a;
        return Re(e, t, n), i = e[0], o = e[1], a = e[2], r = e[3], e[4] = d * r + _ * i + f * a - h * o, e[5] = f * r + _ * o + h * i - d * a, e[6] = h * r + _ * a + d * o - f * i, e[7] = _ * r - d * i - f * o - h * a, e
    },
    rotateByQuatAppend: function (e, t, n) {
        let i = n[0],
            o = n[1],
            a = n[2],
            r = n[3],
            s = t[0],
            l = t[1],
            c = t[2],
            u = t[3];
        return e[0] = s * r + u * i + l * a - c * o, e[1] = l * r + u * o + c * i - s * a, e[2] = c * r + u * a + s * o - l * i, e[3] = u * r - s * i - l * o - c * a, s = t[4], l = t[5], c = t[6], u = t[7], e[4] = s * r + u * i + l * a - c * o, e[5] = l * r + u * o + c * i - s * a, e[6] = c * r + u * a + s * o - l * i, e[7] = u * r - s * i - l * o - c * a, e
    },
    rotateByQuatPrepend: function (e, t, n) {
        let i = t[0],
            o = t[1],
            a = t[2],
            r = t[3],
            s = n[0],
            l = n[1],
            c = n[2],
            u = n[3];
        return e[0] = i * u + r * s + o * c - a * l, e[1] = o * u + r * l + a * s - i * c, e[2] = a * u + r * c + i * l - o * s, e[3] = r * u - i * s - o * l - a * c, s = n[4], l = n[5], c = n[6], u = n[7], e[4] = i * u + r * s + o * c - a * l, e[5] = o * u + r * l + a * s - i * c, e[6] = a * u + r * c + i * l - o * s, e[7] = r * u - i * s - o * l - a * c, e
    },
    rotateAroundAxis: function (t, n, i, o) {
        if (Math.abs(o) < e) return rt(t, n);
        let a = Math.hypot(i[0], i[1], i[2]);
        o *= .5;
        let r = Math.sin(o),
            s = r * i[0] / a,
            l = r * i[1] / a,
            c = r * i[2] / a,
            u = Math.cos(o),
            d = n[0],
            f = n[1],
            h = n[2],
            _ = n[3];
        t[0] = d * u + _ * s + f * c - h * l, t[1] = f * u + _ * l + h * s - d * c, t[2] = h * u + _ * c + d * l - f * s, t[3] = _ * u - d * s - f * l - h * c;
        let m = n[4],
            p = n[5],
            g = n[6],
            v = n[7];
        return t[4] = m * u + v * s + p * c - g * l, t[5] = p * u + v * l + g * s - m * c, t[6] = g * u + v * c + m * l - p * s, t[7] = v * u - m * s - p * l - g * c, t
    },
    add: function (e, t, n) {
        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e
    },
    multiply: ct,
    mul: ut,
    scale: function (e, t, n) {
        return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e
    },
    dot: dt,
    lerp: function (e, t, n, i) {
        let o = 1 - i;
        return dt(t, n) < 0 && (i = -i), e[0] = t[0] * o + n[0] * i, e[1] = t[1] * o + n[1] * i, e[2] = t[2] * o + n[2] * i, e[3] = t[3] * o + n[3] * i, e[4] = t[4] * o + n[4] * i, e[5] = t[5] * o + n[5] * i, e[6] = t[6] * o + n[6] * i, e[7] = t[7] * o + n[7] * i, e
    },
    invert: function (e, t) {
        let n = _t(t);
        return e[0] = -t[0] / n, e[1] = -t[1] / n, e[2] = -t[2] / n, e[3] = t[3] / n, e[4] = -t[4] / n, e[5] = -t[5] / n, e[6] = -t[6] / n, e[7] = t[7] / n, e
    },
    conjugate: function (e, t) {
        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e[4] = -t[4], e[5] = -t[5], e[6] = -t[6], e[7] = t[7], e
    },
    length: ft,
    len: ht,
    squaredLength: _t,
    sqrLen: mt,
    normalize: function (e, t) {
        let n = _t(t);
        if (n > 0) {
            n = Math.sqrt(n);
            let i = t[0] / n,
                o = t[1] / n,
                a = t[2] / n,
                r = t[3] / n,
                s = t[4],
                l = t[5],
                c = t[6],
                u = t[7],
                d = i * s + o * l + a * c + r * u;
            e[0] = i, e[1] = o, e[2] = a, e[3] = r, e[4] = (s - i * d) / n, e[5] = (l - o * d) / n, e[6] = (c - a * d) / n, e[7] = (u - r * d) / n
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
            c = t[6],
            u = t[7],
            d = n[0],
            f = n[1],
            h = n[2],
            _ = n[3],
            m = n[4],
            p = n[5],
            g = n[6],
            v = n[7];
        return Math.abs(i - d) <= e * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(o - f) <= e * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(a - h) <= e * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(r - _) <= e * Math.max(1, Math.abs(r), Math.abs(_)) && Math.abs(s - m) <= e * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(l - p) <= e * Math.max(1, Math.abs(l), Math.abs(p)) && Math.abs(c - g) <= e * Math.max(1, Math.abs(c), Math.abs(g)) && Math.abs(u - v) <= e * Math.max(1, Math.abs(u), Math.abs(v))
    }
});

function gt() {
    let e = new t(2);
    return t != Float32Array && (e[0] = 0, e[1] = 0), e
}

function vt(e, t, n) {
    return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
}

function xt(e, t, n) {
    return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e
}

function bt(e, t, n) {
    return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e
}

function wt(e, t) {
    var n = t[0] - e[0],
        i = t[1] - e[1];
    return Math.hypot(n, i)
}

function Mt(e, t) {
    var n = t[0] - e[0],
        i = t[1] - e[1];
    return n * n + i * i
}

function St(e) {
    var t = e[0],
        n = e[1];
    return Math.hypot(t, n)
}

function yt(e) {
    var t = e[0],
        n = e[1];
    return t * t + n * n
}
const Tt = St,
    Et = vt,
    Pt = xt,
    At = bt,
    Ct = wt,
    It = Mt,
    Rt = yt;
let Ot = null;
var Lt = Object.freeze({
        create: gt,
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
        subtract: vt,
        multiply: xt,
        divide: bt,
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
        distance: wt,
        squaredDistance: Mt,
        length: St,
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
        len: Tt,
        sub: Et,
        mul: Pt,
        div: At,
        dist: Ct,
        sqrDist: It,
        sqrLen: Rt,
        forEach: function (e, t, n, i, o, a) {
            let r, s;
            for (Ot || (Ot = gt()), t || (t = 2), n || (n = 0), s = i ? Math.min(i * t + n, e.length) : e.length, r = n; r < s; r += t) Ot[0] = e[r], Ot[1] = e[r + 1], o(Ot, Ot, a), e[r] = Ot[0], e[r + 1] = Ot[1];
            return e
        }
    }),
    Nt = function () {
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
            r = t(new Nt.Panel("FPS", "#0ff", "#002")),
            s = t(new Nt.Panel("MS", "#0f0", "#020"));
        if (self.performance && self.performance.memory) var l = t(new Nt.Panel("MB", "#f08", "#201"));
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
        c = e.v.toFixed(1);
    if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
        let t = e.hex.toString(16);
        for (; t.length < 6;) t = "0" + t;
        return "#" + t
    }
    return "CSS_RGB" === n ? "rgb(" + i + "," + o + "," + a + ")" : "CSS_RGBA" === n ? "rgba(" + i + "," + o + "," + a + "," + r + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + i + "," + o + "," + a + "]" : "RGBA_ARRAY" === n ? "[" + i + "," + o + "," + a + "," + r + "]" : "RGB_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + a + "}" : "RGBA_OBJ" === n ? "{r:" + i + ",g:" + o + ",b:" + a + ",a:" + r + "}" : "HSV_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + c + "}" : "HSVA_OBJ" === n ? "{h:" + s + ",s:" + l + ",v:" + c + ",a:" + r + "}" : "unknown format"
}
Nt.Panel = function (e, t, n) {
    var i = 1 / 0,
        o = 0,
        a = Math.round,
        r = a(window.devicePixelRatio || 1),
        s = 80 * r,
        l = 48 * r,
        c = 3 * r,
        u = 2 * r,
        d = 3 * r,
        f = 15 * r,
        h = 74 * r,
        _ = 30 * r,
        m = document.createElement("canvas");
    m.width = s, m.height = l, m.style.cssText = "width:80px;height:48px";
    var p = m.getContext("2d");
    return p.font = "bold " + 9 * r + "px Helvetica,Arial,sans-serif", p.textBaseline = "top", p.fillStyle = n, p.fillRect(0, 0, s, l), p.fillStyle = t, p.fillText(e, c, u), p.fillRect(d, f, h, _), p.fillStyle = n, p.globalAlpha = .9, p.fillRect(d, f, h, _), {
        dom: m,
        update: function (l, g) {
            i = Math.min(i, l), o = Math.max(o, l), p.fillStyle = n, p.globalAlpha = 1, p.fillRect(0, 0, s, f), p.fillStyle = t, p.fillText(a(l) + " " + e + " (" + a(i) + "-" + a(o) + ")", c, u), p.drawImage(m, d + r, f, h - r, _, d, f, h - r, _), p.fillRect(d + h - r, f, r, _), p.fillStyle = n, p.globalAlpha = .9, p.fillRect(d + h - r, f, r, a((1 - l / g) * _))
        }
    }
};
const Ft = Array.prototype.forEach,
    Ut = Array.prototype.slice,
    Vt = {
        BREAK: {},
        extend: function (e) {
            return this.each(Ut.call(arguments, 1), (function (t) {
                (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
                    this.isUndefined(t[n]) || (e[n] = t[n])
                }.bind(this))
            }), this), e
        },
        defaults: function (e) {
            return this.each(Ut.call(arguments, 1), (function (t) {
                (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) {
                    this.isUndefined(e[n]) && (e[n] = t[n])
                }.bind(this))
            }), this), e
        },
        compose: function () {
            const e = Ut.call(arguments);
            return function () {
                let t = Ut.call(arguments);
                for (let n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        },
        each: function (e, t, n) {
            if (e)
                if (Ft && e.forEach && e.forEach === Ft) e.forEach(t, n);
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
            return e.toArray ? e.toArray() : Ut.call(e)
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
    Bt = [{
        litmus: Vt.isString,
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
        litmus: Vt.isNumber,
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
        litmus: Vt.isArray,
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
        litmus: Vt.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function (e) {
                    return !!(Vt.isNumber(e.r) && Vt.isNumber(e.g) && Vt.isNumber(e.b) && Vt.isNumber(e.a)) && {
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
                    return !!(Vt.isNumber(e.r) && Vt.isNumber(e.g) && Vt.isNumber(e.b)) && {
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
                    return !!(Vt.isNumber(e.h) && Vt.isNumber(e.s) && Vt.isNumber(e.v) && Vt.isNumber(e.a)) && {
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
                    return !!(Vt.isNumber(e.h) && Vt.isNumber(e.s) && Vt.isNumber(e.v)) && {
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
let Ht, Gt;
const kt = function () {
    Gt = !1;
    const e = arguments.length > 1 ? Vt.toArray(arguments) : arguments[0];
    return Vt.each(Bt, (function (t) {
        if (t.litmus(e)) return Vt.each(t.conversions, (function (t, n) {
            if (Ht = t.read(e), !1 === Gt && !1 !== Ht) return Gt = Ht, Ht.conversionName = n, Ht.conversion = t, Vt.BREAK
        })), Vt.BREAK
    })), Gt
};
let zt;
const jt = {
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
        return n << (zt = 8 * t) | e & ~(255 << zt)
    }
};
let Wt = !1;
class qt {
    constructor() {
        if (Wt || (Wt = !0, Xt(qt.prototype, "r", 2), Xt(qt.prototype, "g", 1), Xt(qt.prototype, "b", 0), Yt(qt.prototype, "h"), Yt(qt.prototype, "s"), Yt(qt.prototype, "v"), Object.defineProperty(qt.prototype, "a", {
                get: function () {
                    return this.__state.a
                },
                set: function (e) {
                    this.__state.a = e
                }
            }), Object.defineProperty(qt.prototype, "hex", {
                get: function () {
                    return "HEX" !== this.__state.space && (this.__state.hex = jt.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex
                },
                set: function (e) {
                    this.__state.space = "HEX", this.__state.hex = e
                }
            })), this.__state = kt.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments");
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

function Xt(e, t, n) {
    Object.defineProperty(e, t, {
        get: function () {
            return "RGB" === this.__state.space ? this.__state[t] : (qt.recalculateRGB(this, t, n), this.__state[t])
        },
        set: function (e) {
            "RGB" !== this.__state.space && (qt.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
        }
    })
}

function Yt(e, t) {
    Object.defineProperty(e, t, {
        get: function () {
            return "HSV" === this.__state.space ? this.__state[t] : (qt.recalculateHSV(this), this.__state[t])
        },
        set: function (e) {
            "HSV" !== this.__state.space && (qt.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e
        }
    })
}
qt.recalculateRGB = function (e, t, n) {
    if ("HEX" === e.__state.space) e.__state[t] = jt.component_from_hex(e.__state.hex, n);
    else {
        if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");
        Vt.extend(e.__state, jt.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
    }
}, qt.recalculateHSV = function (e) {
    const t = jt.rgb_to_hsv(e.r, e.g, e.b);
    Vt.extend(e.__state, {
        s: t.s,
        v: t.v
    }), Vt.isNaN(t.h) ? Vt.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h
}, qt.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
class Zt {
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
    Jt = {},
    Qt = /(\d+(\.\d+)?)px/;

function $t(e) {
    if ("0" === e || Vt.isUndefined(e)) return 0;
    const t = e.match(Qt);
    return Vt.isNull(t) ? 0 : parseFloat(t[1])
}
const en = {
    init: function () {
        Vt.each(Kt, (function (e, t) {
            Vt.each(e, (function (e) {
                Jt[e] = t
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
        Vt.isUndefined(o) && (o = !0), Vt.isUndefined(i) && (i = !0), e.style.position = "absolute", o && (e.style.left = 0, e.style.right = 0), i && (e.style.top = 0, e.style.bottom = 0)
    },
    fakeEvent: function (e, t, n, i) {
        const o = n || {},
            a = Jt[t];
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
                Vt.defaults(o, {
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
        Vt.defaults(r, i), e.dispatchEvent(r)
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
class tn extends Zt {
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
class nn extends Zt {
    constructor(e, t, n) {
        super(e, t);
        let i = n;
        const o = this;
        if (this.__select = document.createElement("select"), Vt.isArray(i)) {
            const e = {};
            Vt.each(i, (function (t) {
                e[t] = t
            })), i = e
        }
        Vt.each(i, (function (e, t) {
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
class on extends Zt {
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
class rn extends Zt {
    constructor(e, t, n) {
        super(e, t);
        const i = n || {};
        this.__min = i.min, this.__max = i.max, this.__step = i.step, Vt.isUndefined(this.__step) ? 0 === this.initialValue ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(this.initialValue)) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = an(this.__impliedStep)
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
            Vt.isNaN(e) || i.setValue(e)
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
class cn extends rn {
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

        function c() {
            en.unbind(window, "touchmove", l), en.unbind(window, "touchend", c), a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
        }
        this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), en.bind(this.__background, "mousedown", (function (e) {
            document.activeElement.blur(), en.bind(window, "mousemove", r), en.bind(window, "mouseup", s), r(e)
        })), en.bind(this.__background, "touchstart", (function (e) {
            if (1 !== e.touches.length) return;
            en.bind(window, "touchmove", l), en.bind(window, "touchend", c), l(e)
        })), en.addClass(this.__background, "slider"), en.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
    }
    updateDisplay() {
        const e = (this.getValue() - this.__min) / (this.__max - this.__min);
        return this.__foreground.style.width = 100 * e + "%", super.updateDisplay()
    }
}
class un extends Zt {
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
class dn extends Zt {
    constructor(e, t) {
        super(e, t), this.__color = new qt(this.getValue()), this.__temp = new qt(0);
        const n = this;
        this.domElement = document.createElement("div"), en.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", en.bind(this.__input, "keydown", (function (e) {
            13 === e.keyCode && c.call(this)
        })), en.bind(this.__input, "blur", c), en.bind(this.__selector, "mousedown", (function () {
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
            en.unbind(window, "mousemove", d), en.unbind(window, "touchmove", d), en.unbind(window, "mouseup", s), en.unbind(window, "touchend", s), u()
        }

        function l() {
            en.unbind(window, "mousemove", f), en.unbind(window, "touchmove", f), en.unbind(window, "mouseup", l), en.unbind(window, "touchend", l), u()
        }

        function c() {
            const e = kt(this.value);
            !1 !== e ? (n.__color.__state = e, n.setValue(n.__color.toOriginal())) : this.value = n.__color.toString()
        }

        function u() {
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
        Vt.extend(this.__selector.style, {
            width: "122px",
            height: "102px",
            padding: "3px",
            backgroundColor: "#222",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        }), Vt.extend(this.__field_knob.style, {
            position: "absolute",
            width: "12px",
            height: "12px",
            border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            zIndex: 1
        }), Vt.extend(this.__hue_knob.style, {
            position: "absolute",
            width: "15px",
            height: "2px",
            borderRight: "4px solid #fff",
            zIndex: 1
        }), Vt.extend(this.__saturation_field.style, {
            width: "100px",
            height: "100px",
            border: "1px solid #555",
            marginRight: "3px",
            display: "inline-block",
            cursor: "pointer"
        }), Vt.extend(i.style, {
            width: "100%",
            height: "100%",
            background: "none"
        }), hn(i, "top", "rgba(0,0,0,0)", "#000"), Vt.extend(this.__hue_field.style, {
            width: "15px",
            height: "100px",
            border: "1px solid #555",
            cursor: "ns-resize",
            position: "absolute",
            top: "3px",
            right: "3px"
        }), (o = this.__hue_field).style.background = "", o.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", o.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", o.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", Vt.extend(this.__input.style, {
            outline: "none",
            textAlign: "center",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        }), en.bind(this.__saturation_field, "mousedown", a), en.bind(this.__saturation_field, "touchstart", a), en.bind(this.__field_knob, "mousedown", a), en.bind(this.__field_knob, "touchstart", a), en.bind(this.__hue_field, "mousedown", r), en.bind(this.__hue_field, "touchstart", r), this.__saturation_field.appendChild(i), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
    }
    updateDisplay() {
        const e = kt(this.getValue());
        if (!1 !== e) {
            let t = !1;
            Vt.each(qt.COMPONENTS, (function (n) {
                if (!Vt.isUndefined(e[n]) && !Vt.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {}
            }), this), t && Vt.extend(this.__color.__state, e)
        }
        Vt.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
        const t = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
            n = 255 - t;
        Vt.extend(this.__field_knob.style, {
            marginLeft: 100 * this.__color.s - 7 + "px",
            marginTop: 100 * (1 - this.__color.v) - 7 + "px",
            backgroundColor: this.__temp.toHexString(),
            border: this.__field_knob_border + "rgb(" + t + "," + t + "," + t + ")"
        }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, hn(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), Vt.extend(this.__input.style, {
            backgroundColor: this.__color.toHexString(),
            color: "rgb(" + t + "," + t + "," + t + ")",
            textShadow: this.__input_textShadow + "rgba(" + n + "," + n + "," + n + ",.7)"
        })
    }
}
const fn = ["-moz-", "-o-", "-webkit-", "-ms-", ""];

function hn(e, t, n, i) {
    e.style.background = "", Vt.each(fn, (function (o) {
        e.style.cssText += "background: " + o + "linear-gradient(" + t + ", " + n + " 0%, " + i + " 100%); "
    }))
}
const _n = {
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
    pn = function (e, t) {
        const n = e[t];
        return Vt.isArray(arguments[2]) || Vt.isObject(arguments[2]) ? new nn(e, t, arguments[2]) : Vt.isNumber(n) ? Vt.isNumber(arguments[2]) && Vt.isNumber(arguments[3]) ? Vt.isNumber(arguments[4]) ? new cn(e, t, arguments[2], arguments[3], arguments[4]) : new cn(e, t, arguments[2], arguments[3]) : Vt.isNumber(arguments[4]) ? new sn(e, t, {
            min: arguments[2],
            max: arguments[3],
            step: arguments[4]
        }) : new sn(e, t, {
            min: arguments[2],
            max: arguments[3]
        }) : Vt.isString(n) ? new on(e, t) : Vt.isFunction(n) ? new un(e, t, "") : Vt.isBoolean(n) ? new tn(e, t) : null
    };
var gn = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    setTimeout(e, 1e3 / 60)
};
class vn {
    constructor() {
        this.backgroundElement = document.createElement("div"), Vt.extend(this.backgroundElement.style, {
            backgroundColor: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            display: "none",
            zIndex: "1000",
            opacity: 0,
            WebkitTransition: "opacity 0.2s linear",
            transition: "opacity 0.2s linear"
        }), en.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), Vt.extend(this.domElement.style, {
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
        this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), Vt.defer((function () {
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
const xn = "dg",
    bn = 20,
    wn = "Default";
let Mn, Sn, yn = !0,
    Tn = !1;
const En = [];
class Pn {
    constructor(e) {
        ! function () {
            if (An) return;
            An = !0, en.init();
            var e = function (e) {
                if (e && "undefined" != typeof window) {
                    var t = document.createElement("style");
                    return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e
                }
            }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");
            _n.inject(e), en.bind(window, "keydown", Pn._keydownHandler, !1), Vt.extend(Pn.prototype, {
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
                    Vt.defer((function () {
                        t.onResize()
                    }))
                },
                destroy: function () {
                    if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
                    this.autoPlace && Sn.removeChild(this.domElement);
                    const e = this;
                    Vt.each(this.__folders, (function (t) {
                        e.removeFolder(t)
                    })), en.unbind(window, "keydown", Pn._keydownHandler, !1), In(this)
                },
                addFolder: function (e) {
                    if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
                    const t = {
                        name: e,
                        parent: this
                    };
                    t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
                    const n = new Pn(t);
                    this.__folders[e] = n;
                    const i = Cn(this, n.domElement);
                    return en.addClass(i, "folder"), n
                },
                removeFolder: function (e) {
                    this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], In(e);
                    const t = this;
                    Vt.each(e.__folders, (function (t) {
                        e.removeFolder(t)
                    })), Vt.defer((function () {
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
                        Vt.each(e.__ul.childNodes, (function (t) {
                            e.autoPlace && t === e.__save_row || (n += en.getHeight(t))
                        })), window.innerHeight - t - bn < n ? (en.addClass(e.domElement, Pn.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - bn + "px") : (en.removeClass(e.domElement, Pn.CLASS_TOO_TALL), e.__ul.style.height = "auto")
                    }
                    e.__resize_handle && Vt.defer((function () {
                        e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
                    })), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
                },
                onResizeDebounced: Vt.debounce((function () {
                    this.onResize()
                }), 50),
                remember: function () {
                    if (Vt.isUndefined(Mn) && ((Mn = new vn).domElement.innerHTML = mn), this.parent) throw new Error("You can only call remember on a top level GUI.");
                    const e = this;
                    Vt.each(Array.prototype.slice.call(arguments), (function (t) {
                        0 === e.__rememberedObjects.length && Un(e), -1 === e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t)
                    })), this.autoPlace && Vn(this, this.width)
                },
                getRoot: function () {
                    let e = this;
                    for (; e.parent;) e = e.parent;
                    return e
                },
                getSaveObject: function () {
                    const e = this.load;
                    return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = Bn(this)), e.folders = {}, Vt.each(this.__folders, (function (t, n) {
                        e.folders[n] = t.getSaveObject()
                    })), e
                },
                save: function () {
                    this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = Bn(this), Rn(this, !1), this.saveToLocalStorageIfPossible()
                },
                saveAs: function (e) {
                    this.load.remembered || (this.load.remembered = {}, this.load.remembered[wn] = Bn(this, !0)), this.load.remembered[e] = Bn(this), this.preset = e, Dn(this, e, !0), this.saveToLocalStorageIfPossible()
                },
                revert: function (e) {
                    Vt.each(this.__controllers, (function (t) {
                        this.getRoot().load.remembered ? On(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue())
                    }), this), Vt.each(this.__folders, (function (e) {
                        e.revert(e)
                    })), e || Rn(this.getRoot(), !1)
                },
                listen: function (e) {
                    const t = 0 === this.__listening.length;
                    this.__listening.push(e), t && function e(t) {
                        0 !== t.length && gn.call(window, (function () {
                            e(t)
                        }));
                        Vt.each(t, (function (e) {
                            e.updateDisplay()
                        }))
                    }(this.__listening)
                },
                updateDisplay: function () {
                    Vt.each(this.__controllers, (function (e) {
                        e.updateDisplay()
                    })), Vt.each(this.__folders, (function (e) {
                        e.updateDisplay()
                    }))
                }
            })
        }();
        const t = this;
        let n = e || {};
        this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), en.addClass(this.domElement, xn), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], n = Vt.defaults(n, {
            closeOnTop: !1,
            autoPlace: !0,
            width: Pn.DEFAULT_WIDTH
        }), n = Vt.defaults(n, {
            resizable: n.autoPlace,
            hideable: n.autoPlace
        }), Vt.isUndefined(n.load) ? n.load = {
            preset: wn
        } : n.preset && (n.load.preset = n.preset), Vt.isUndefined(n.parent) && n.hideable && En.push(this), n.resizable = Vt.isUndefined(n.parent) && n.resizable, n.autoPlace && Vt.isUndefined(n.scrollable) && (n.scrollable = !0);
        let i, o, a = "true" === localStorage.getItem(Nn(this, "isLocal"));
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
                        n.width = e, Vn(t, e)
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
                        n.closed = e, n.closed ? en.addClass(t.__ul, Pn.CLASS_CLOSED) : en.removeClass(t.__ul, Pn.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = e ? Pn.TEXT_OPEN : Pn.TEXT_CLOSED)
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
                        a = e, e ? en.bind(window, "unload", i) : en.unbind(window, "unload", i), localStorage.setItem(Nn(t, "isLocal"), e)
                    }
                }
            }), Vt.isUndefined(n.parent)) {
            if (this.closed = n.closed || !1, en.addClass(this.domElement, Pn.CLASS_MAIN), en.makeSelectable(this.domElement, !1), a) {
                t.useLocalStorage = !0;
                const e = localStorage.getItem(Nn(this, "gui"));
                e && (n.load = JSON.parse(e))
            }
            this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = Pn.TEXT_CLOSED, en.addClass(this.__closeButton, Pn.CLASS_CLOSE_BUTTON), n.closeOnTop ? (en.addClass(this.__closeButton, Pn.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (en.addClass(this.__closeButton, Pn.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), en.bind(this.__closeButton, "click", (function () {
                t.closed = !t.closed
            }))
        } else {
            void 0 === n.closed && (n.closed = !0);
            const e = document.createTextNode(n.name);
            en.addClass(e, "controller-name"), o = Cn(t, e);
            const i = function (e) {
                return e.preventDefault(), t.closed = !t.closed, !1
            };
            en.addClass(this.__ul, Pn.CLASS_CLOSED), en.addClass(o, "title"), en.bind(o, "click", i), n.closed || (this.closed = !1)
        }
        n.autoPlace && (Vt.isUndefined(n.parent) && (yn && (Sn = document.createElement("div"), en.addClass(Sn, xn), en.addClass(Sn, Pn.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Sn), yn = !1), Sn.appendChild(this.domElement), en.addClass(this.domElement, Pn.CLASS_AUTO_PLACE)), this.parent || Vn(t, n.width)), this.__resizeHandler = function () {
            t.onResizeDebounced()
        }, en.bind(window, "resize", this.__resizeHandler), en.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), en.bind(this.__ul, "transitionend", this.__resizeHandler), en.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), n.resizable && function (e) {
            let t;

            function n(n) {
                return n.preventDefault(), e.width += t - n.clientX, e.onResize(), t = n.clientX, !1
            }

            function i() {
                en.removeClass(e.__closeButton, Pn.CLASS_DRAG), en.unbind(window, "mousemove", n), en.unbind(window, "mouseup", i)
            }

            function o(o) {
                return o.preventDefault(), t = o.clientX, en.addClass(e.__closeButton, Pn.CLASS_DRAG), en.bind(window, "mousemove", n), en.bind(window, "mouseup", i), !1
            }
            e.__resize_handle = document.createElement("div"), Vt.extend(e.__resize_handle.style, {
                width: "6px",
                marginLeft: "-3px",
                height: "200px",
                cursor: "ew-resize",
                position: "absolute"
            }), en.bind(e.__resize_handle, "mousedown", o), en.bind(e.__closeButton, "mousedown", o), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
        }(this), i = function () {
            "true" === localStorage.getItem(Nn(t, "isLocal")) && localStorage.setItem(Nn(t, "gui"), JSON.stringify(t.getSaveObject()))
        }, this.saveToLocalStorageIfPossible = i, n.parent || function () {
            const e = t.getRoot();
            e.width += 1, Vt.defer((function () {
                e.width -= 1
            }))
        }()
    }
}
Pn.toggleHide = function () {
    Tn = !Tn, Vt.each(En, (function (e) {
        e.domElement.style.display = Tn ? "none" : ""
    }))
}, Pn.CLASS_AUTO_PLACE = "a", Pn.CLASS_AUTO_PLACE_CONTAINER = "ac", Pn.CLASS_MAIN = "main", Pn.CLASS_CONTROLLER_ROW = "cr", Pn.CLASS_TOO_TALL = "taller-than-window", Pn.CLASS_CLOSED = "closed", Pn.CLASS_CLOSE_BUTTON = "close-button", Pn.CLASS_CLOSE_TOP = "close-top", Pn.CLASS_CLOSE_BOTTOM = "close-bottom", Pn.CLASS_DRAG = "drag", Pn.DEFAULT_WIDTH = 245, Pn.TEXT_CLOSED = "Close Controls", Pn.TEXT_OPEN = "Open Controls", Pn._keydownHandler = function (e) {
    "text" === document.activeElement.type || 72 !== e.which && 72 !== e.keyCode || Pn.toggleHide()
};
let An = !1;

function Cn(e, t, n) {
    const i = document.createElement("li");
    return t && i.appendChild(t), n ? e.__ul.insertBefore(i, n) : e.__ul.appendChild(i), e.onResize(), i
}

function In(e) {
    en.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && en.unbind(window, "unload", e.saveToLocalStorageIfPossible)
}

function Rn(e, t) {
    const n = e.__preset_select[e.__preset_select.selectedIndex];
    n.innerHTML = t ? n.value + "*" : n.value
}

function On(e, t) {
    const n = e.getRoot(),
        i = n.__rememberedObjects.indexOf(t.object);
    if (-1 !== i) {
        let o = n.__rememberedObjectIndecesToControllers[i];
        if (void 0 === o && (o = {}, n.__rememberedObjectIndecesToControllers[i] = o), o[t.property] = t, n.load && n.load.remembered) {
            const o = n.load.remembered;
            let a;
            if (o[e.preset]) a = o[e.preset];
            else {
                if (!o[wn]) return;
                a = o[wn]
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
        o = pn.apply(e, a)
    }
    i.before instanceof Zt && (i.before = i.before.__li), On(e, o), en.addClass(o.domElement, "c");
    const a = document.createElement("span");
    en.addClass(a, "property-name"), a.innerHTML = o.property;
    const r = document.createElement("div");
    r.appendChild(a), r.appendChild(o.domElement);
    const s = Cn(e, r, i.before);
    return en.addClass(s, Pn.CLASS_CONTROLLER_ROW), o instanceof dn ? en.addClass(s, "color") : en.addClass(s, typeof o.getValue()),
        function (e, t, n) {
            if (n.__li = t, n.__gui = e, Vt.extend(n, {
                    options: function (t) {
                        if (arguments.length > 1) {
                            const t = n.__li.nextElementSibling;
                            return n.remove(), Ln(e, n.object, n.property, {
                                before: t,
                                factoryArgs: [Vt.toArray(arguments)]
                            })
                        }
                        if (Vt.isArray(t) || Vt.isObject(t)) {
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
                }), n instanceof cn) {
                const e = new sn(n.object, n.property, {
                    min: n.__min,
                    max: n.__max,
                    step: n.__step
                });
                Vt.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], (function (t) {
                    const i = n[t],
                        o = e[t];
                    n[t] = e[t] = function () {
                        const t = Array.prototype.slice.call(arguments);
                        return o.apply(e, t), i.apply(n, t)
                    }
                })), en.addClass(t, "has-slider"), n.domElement.insertBefore(e.domElement, n.domElement.firstElementChild)
            } else if (n instanceof sn) {
                const t = function (t) {
                    if (Vt.isNumber(n.__min) && Vt.isNumber(n.__max)) {
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
                n.min = Vt.compose(t, n.min), n.max = Vt.compose(t, n.max)
            } else n instanceof tn ? (en.bind(t, "click", (function () {
                en.fakeEvent(n.__checkbox, "click")
            })), en.bind(n.__checkbox, "click", (function (e) {
                e.stopPropagation()
            }))) : n instanceof un ? (en.bind(t, "click", (function () {
                en.fakeEvent(n.__button, "click")
            })), en.bind(t, "mouseover", (function () {
                en.addClass(n.__button, "hover")
            })), en.bind(t, "mouseout", (function () {
                en.removeClass(n.__button, "hover")
            }))) : n instanceof dn && (en.addClass(t, "color"), n.updateDisplay = Vt.compose((function (e) {
                return t.style.borderLeftColor = n.__color.toString(), e
            }), n.updateDisplay), n.updateDisplay());
            n.setValue = Vt.compose((function (t) {
                return e.getRoot().__preset_select && n.isModified() && Rn(e.getRoot(), !0), t
            }), n.setValue)
        }(e, s, o), e.__controllers.push(o), o
}

function Nn(e, t) {
    return document.location.href + "." + t
}

function Dn(e, t, n) {
    const i = document.createElement("option");
    i.innerHTML = t, i.value = t, e.__preset_select.appendChild(i), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
}

function Fn(e, t) {
    t.style.display = e.useLocalStorage ? "block" : "none"
}

function Un(e) {
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
    e.load && e.load.remembered ? Vt.each(e.load.remembered, (function (t, n) {
        Dn(e, n, n === e.preset)
    })) : Dn(e, wn, !1), en.bind(r, "change", (function () {
        for (let t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
        e.preset = this.value
    })), t.appendChild(r), t.appendChild(n), t.appendChild(i), t.appendChild(o), t.appendChild(a); {
        const t = document.getElementById("dg-local-explain"),
            n = document.getElementById("dg-local-storage");
        document.getElementById("dg-save-locally").style.display = "block", "true" === localStorage.getItem(Nn(0, "isLocal")) && n.setAttribute("checked", "checked"), Fn(e, t), en.bind(n, "change", (function () {
            e.useLocalStorage = !e.useLocalStorage, Fn(e, t)
        }))
    }
    const s = document.getElementById("dg-new-constructor");
    en.bind(s, "keydown", (function (e) {
        !e.metaKey || 67 !== e.which && 67 !== e.keyCode || Mn.hide()
    })), en.bind(n, "click", (function () {
        s.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), Mn.show(), s.focus(), s.select()
    })), en.bind(i, "click", (function () {
        e.save()
    })), en.bind(o, "click", (function () {
        const t = prompt("Enter a new preset name.");
        t && e.saveAs(t)
    })), en.bind(a, "click", (function () {
        e.revert()
    }))
}

function Vn(e, t) {
    e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
}

function Bn(e, t) {
    const n = {};
    return Vt.each(e.__rememberedObjects, (function (i, o) {
        const a = {},
            r = e.__rememberedObjectIndecesToControllers[o];
        Vt.each(r, (function (e, n) {
            a[n] = t ? e.initialValue : e.getValue()
        })), n[o] = a
    })), n
}
const Hn = Pn;
var Gn = "1.0.0";
let kn = !0;
const zn = kn = !1;
let jn = null,
    Wn = null,
    qn = null;

function Xn(e, ...t) {
    jn ? jn(e, ...t) : zn && console.log(e, ...t)
}

function Yn(e, ...t) {
    Wn ? Wn(e, ...t) : zn && console.warn(e, ...t)
}

function Zn(e, ...t) {
    qn ? qn(e, ...t) : zn && console.error(e, ...t)
}

function Kn(e) {
    jn = e
}

function Jn(e) {
    Wn = e
}

function Qn(e) {
    qn = e
}

function $n(e) {
    return {
        x: (e.touches ? e.touches[0] : e).clientX,
        y: (e.touches ? e.touches[0] : e).clientY
    }
}

function ei(e) {
    return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof HTMLVideoElement
}

function ti(e) {
    return e instanceof Blob || e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof HTMLVideoElement
}

function ni() {
    return /chrome/i.test(navigator.userAgent)
}

function ii() {
    return !/chrome/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent)
}
const oi = "undefined" != typeof ImageBitmap;

function ai(e) {
    return e instanceof ImageData || oi && e instanceof ImageBitmap
}

function ri(e, t, n) {
    let i = window.devicePixelRatio || 1;
    /Mobile/.test(navigator.userAgent) && (i = 1);
    const o = t || e.width,
        a = n || e.height;
    e.width = o * i, e.height = a * i, e.style.width = `${o}px`, e.style.height = `${a}px`
}

function si(e, t) {
    return new Promise((n, i) => {
        const o = new XMLHttpRequest;
        o.onreadystatechange = function (e) {
            if (4 === this.readyState)
                if (200 === this.status) {
                    let e = o.response;
                    "json" === t && "string" == typeof e && (e = JSON.parse(e)), n(e)
                } else Zn("ajax error:", this.statusText), i(new Error(`${this.responseURL} ${this.statusText}`))
        }, o.open("get", e), t && (o.responseType = t), o.send()
    })
}

function li(e) {
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

function ci(e, t, n) {
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
const ui = {
    premultiplyAlpha: "none"
};

function di(e) {
    return ti(e) ? createImageBitmap(e) : ni() ? fetch(e).then(e => e.blob()).then(e => createImageBitmap(e, ui)).then(t => ("string" == typeof e && e.startsWith("blob:") && URL.revokeObjectURL(e), t)) : new Promise((t, n) => {
        const i = new Image;
        i.crossOrigin = "anonymous", i.onload = function () {
            i.onload = null, t(createImageBitmap(i, 0, 0, i.width, i.height, ui))
        }, i.onerror = function (e) {
            i.onerror = null, n(e)
        }, i.src = e
    })
}

function fi(e, t) {
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

function hi(e, t) {
    t.forEach(t => {
        fi(e, t)
    })
}

function _i(e) {
    const t = new Blob([`(${e.toString()})()`], {
        type: "application/javascript"
    });
    return URL.createObjectURL(t)
}

function mi(e, t = 300) {
    let n;
    return i => {
        n && clearTimeout(n), n = setTimeout(e, t, i)
    }
}

function pi() {
    return Math.random()
}

function gi(e) {
    return e.ctrlKey || e.metaKey
}

function vi(e) {
    if ("string" != typeof e) return null;
    let t = e.lastIndexOf("/"),
        n = e;
    return t >= 0 && (n = e.substring(t + 1)), (t = n.lastIndexOf(".")) >= 0 && (n = n.substring(0, t)), n
}

function xi(e) {
    const t = (navigator.browserLanguage || navigator.language).toLowerCase(),
        n = document.createElement("div");
    n.style.color = "#5b5b5b", n.style.fontSize = "".concat(22, "px"), n.style.textAlign = "center", n.style.position = "absolute", n.style.left = "10px", n.style.top = "320px", n.style.width = "".concat(document.documentElement.clientWidth, "px"), t.indexOf("en") > -1 ? n.innerHTML = "Your browser does not support WebGL2. Supported browsers are Chrome, Firefox, Edge 79+" : n.innerHTML = "您的浏览器不支持WebGL2. 支持的浏览器有Chrome, Firefox, Edge 79+.", e.appendChild(n)
}
class bi {
    constructor(e, t) {
        this.center = e || J.create(), this.radius = t || 0
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
            if (J.dot(o, i) + o[3] <= -n) return !1
        }
        return !0
    }
    intersect(e) {
        return J.distance(this.center, e.center) <= this.radius + e.radius
    }
    containPoint(e) {
        return J.distance(e, this.center) <= this.radius
    }
}
let wi, Mi, Si, yi = !1;

function Ti() {
    yi || (yi = !0, wi = J.create(), Mi = J.create(), Si = new Array(12))
}
class Ei {
    constructor(e, t) {
        Ti();
        const n = this,
            i = new Float32Array(24),
            o = new Array(8);
        n._rawPoints = i, n._points = o, n._halfSize = new Array(3);
        for (let e = 0; e < 8; e++) o[e] = new Float32Array(i.buffer, 12 * e, 3);
        [n.max, n.min] = [o[0], o[6]], n.boundingSphere = new bi, e && n.reset(e, t)
    }
    reset(e, t) {
        const n = this._points,
            i = this.min,
            o = this.max,
            a = this._halfSize;
        e && J.copy(i, e), t && J.copy(o, t), a[0] = Math.max((o[0] - i[0]) / 2, 0), a[1] = Math.max((o[1] - i[1]) / 2, 0), a[2] = Math.max((o[2] - i[2]) / 2, 0), this.boundingSphere.radius = J.length(a), J.add(this.boundingSphere.center, i, a), [n[0][0], n[0][1], n[0][2]] = t, [n[3][0], n[1][1], n[1][2]] = t, [n[4][0], n[4][1], n[2][2]] = t, [n[7][0], n[5][1], n[3][2]] = t, [n[1][0], n[2][1], n[4][2]] = e, [n[2][0], n[3][1], n[5][2]] = e, [n[5][0], n[6][1], n[6][2]] = e, [n[6][0], n[7][1], n[7][2]] = e
    }
    union(e) {
        if (e.isEmpty()) return;
        const t = this;
        t.isEmpty() ? t.reset(e.min, e.max) : ([Si[0], Si[1], Si[2]] = t.min, [Si[3], Si[4], Si[5]] = t.max, [Si[6], Si[7], Si[8]] = e.min, [Si[9], Si[10], Si[11]] = e.max, t.fromPoints(Si))
    }
    transform(e, t) {
        Ei.transform(e, t || this, this)
    }
    fromPoints(e, t = 3) {
        Ei.fromPoints(e, this, t)
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
            for (let e = 0; e < 8 && J.dot(i, n[e]) + i[3] < 0; e++) o--;
            if (!o) return !1
        }
        return !0
    }
    static transform(e, t, n) {
        const i = n || new Ei;
        for (let n = 0; n < 8; n++) J.transformMat4(i._points[n], t._points[n], e);
        return Ei.fromPoints(i._rawPoints, i), i
    }
    static fromPoints(e, t, n = 3) {
        if (Ti(), 3 === n) {
            J.set(wi, e[0], e[1], e[2]), J.set(Mi, e[0], e[1], e[2]);
            for (let t = 3, n = e.length; t < n; t += 3) e[t] < wi[0] && (wi[0] = e[t]), e[t + 1] < wi[1] && (wi[1] = e[t + 1]), e[t + 2] < wi[2] && (wi[2] = e[t + 2]), e[t] > Mi[0] && (Mi[0] = e[t]), e[t + 1] > Mi[1] && (Mi[1] = e[t + 1]), e[t + 2] > Mi[2] && (Mi[2] = e[t + 2])
        } else if (2 === n) {
            J.set(wi, e[0], e[1], 0), J.set(Mi, e[0], e[1], 0);
            for (let t = 2, n = e.length; t < n; t += 2) e[t] < wi[0] && (wi[0] = e[t]), e[t + 1] < wi[1] && (wi[1] = e[t + 1]), e[t] > Mi[0] && (Mi[0] = e[t]), e[t + 1] > Mi[1] && (Mi[1] = e[t + 1])
        }
        return t ? (t.reset(wi, Mi), t) : new Ei(wi, Mi)
    }
}
class Pi {
    constructor(e, t) {
        const n = this;
        Pi.COUNT++, n._gl = e, n._usage = e[t.usage || "STATIC_DRAW"], n.size = t.size, n._stride = t.stride || 0, n.name = t.name, "position" !== n.name || n.size || (n.size = 3), n.buffer = t.buffer || e.createBuffer(), !t.buffer && t.data && n.bindData(t.data), "position" !== n.name && "index" !== n.name || (n.data = t.data)
    }
    bindData(e) {
        const t = this,
            n = t._gl;
        "position" === t.name && (t._stride ? t.count = e.length / t._stride : t.count = e.length / t.size), "offset" === t.name && (t.instanceCount = e.length / 16), n.bindBuffer(t.TYPE, t.buffer), n.bufferData(t.TYPE, e, t._usage), "position" !== t.name && "index" !== t.name || (t.data = e)
    }
    dispose() {
        this._gl.deleteBuffer(this.buffer), this.buffer = null, this._gl = null, Pi.COUNT--
    }
}
Pi.COUNT = 0;
class Ai extends Pi {
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
const Ci = {
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
class Ii extends Pi {
    constructor(e, t) {
        super(e, t);
        const n = this;
        n._offset = t.offset || 0, n._type = t.type || e.FLOAT, "position" === n.name && (n._stride ? n.count = t.data.length / n._stride : n.count = t.data.length / n.size), this._location = t.location, "instance" === n.name && (n.instanceCount = t.data.length / 16)
    }
    bindAttrib(e) {
        const t = this,
            n = t._gl,
            i = Ci[e];
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
let Ri = 0;
const {
    EPSILON: Oi
} = o;
let Li, Ni, Di, Fi, Ui, Vi, Bi, Hi, Gi = !1;
class ki {
    constructor(e) {
        Gi || (Gi = !0, Li = J.create(), Ni = J.create(), Di = J.create(), Fi = J.create(), Ui = J.create(), Vi = J.create(), Bi = J.create(), Hi = J.create());
        const t = this;
        t.cache = new WeakMap, t.id = ++Ri, t._program = null, t.__mode = e.mode || "TRIANGLES", t._counts = e.counts, t._buffers = e.buffers, t._color = !!e.buffers.color, t._instance = !!e.buffers.instance;
        const n = e.buffers.position;
        n.min ? t.boundingBox = new Ei(n.min, n.max) : t.boundingBox = Ei.fromPoints(n.data || n, null, e.buffers.position && e.buffers.position.size || 3)
    }
    _init(e) {
        ki.COUNT++;
        const t = this._buffers,
            n = new Map;
        this._mode = e[this.__mode];
        const i = {};
        i._vao = e.createVertexArray(), i._bufferMap = {}, e.bindVertexArray(i._vao), Object.keys(t).forEach(o => {
            const a = t[o];
            if ("index" === o) i._indexBuffer = new Ai(e, {
                data: a
            });
            else {
                const t = a.data || a,
                    r = n.get(t),
                    s = new Ii(e, {
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
            i.bindVertexArray(o._vao), a ? (a.bindData(t), "position" === e && Ei.fromPoints(t, n.boundingBox)) : (a = new Ii(i, {
                name: e,
                data: t
            }), o._bufferMap[e] = a, a.bindAttrib(e), "position" === e && (o._vertexBuffer = a, Ei.fromPoints(t, n.boundingBox)), "instance" === e && (o._instanceBuffer = a), "color" === e && (n._color = !0))
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
        }), e.deleteVertexArray(n._vao), n._vao = null, t._gl = null, n._bufferMap = {}, t._program = null), ki.COUNT--
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
            c = !1;

        function u() {
            J.sub(Fi, Ni, Li), J.sub(Ui, Di, Li), J.cross(Bi, t, Ui);
            const n = J.dot(Fi, Bi);
            if (n > -Oi && n < Oi) return !1;
            const i = 1 / n;
            J.sub(Vi, e, Li);
            const o = J.dot(Vi, Bi) * i;
            if (o < 0 || o > 1) return !1;
            J.cross(Hi, Vi, Fi);
            const a = J.dot(t, Hi) * i;
            return !(a < 0 || o + a > 1) && (s = J.dot(Ui, Hi) * i) >= 0
        }
        if (i) {
            let e = 0;
            for (let t = 0; t < r; t += 3) e = 3 * i[t], J.set(Li, o[e], o[e + 1], o[e + 2]), e = 3 * i[t + 1], J.set(Ni, o[e], o[e + 1], o[e + 2]), e = 3 * i[t + 2], J.set(Di, o[e], o[e + 1], o[e + 2]), u() && s < l && (l = s, c || (c = !0))
        } else {
            let e = 0;
            for (let t = 0; t < r; t += a) J.set(Li, o[e++], o[e++], o[e++]), J.set(Ni, o[e++], o[e++], o[e++]), J.set(Di, o[e++], o[e++], o[e++]), u() && s < l && (l = s, c || (c = !0))
        }
        if (c) {
            const n = J.create();
            return J.scaleAndAdd(n, e, t, l), {
                position: n,
                t: l
            }
        }
        return null
    }
}
ki.COUNT = 0;
const zi = {},
    ji = {};

function Wi(e, t) {
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
        let e = J.length(o);
        0 === e && (e = 1), a[r + 0] = o[0] / e, a[r + 1] = o[1] / e, a[r + 2] = o[2] / e
    }
    return new Float32Array(a)
}

function qi(e) {
    const t = e.index,
        n = e.uv.data || e.uv,
        i = e.position.data || e.position,
        o = [],
        a = [],
        r = J.create(),
        s = J.create(),
        l = J.create(),
        c = Lt.create(),
        u = Lt.create(),
        d = Lt.create(),
        f = J.create(),
        h = J.create(),
        _ = J.create();
    let m, p;
    for (m = 0, p = i.length / 3; m < p; m++) o[m] = J.create();
    for (m = 0, p = t.length; m < p; m += 3) {
        const e = t[m],
            a = t[m + 1],
            p = t[m + 2];
        J.set(r, i[3 * e], i[3 * e + 1], i[3 * e + 2]), J.set(s, i[3 * a], i[3 * a + 1], i[3 * a + 2]), J.set(l, i[3 * p], i[3 * p + 1], i[3 * p + 2]), J.subtract(f, s, r), J.subtract(h, l, r), Lt.set(c, n[2 * e], n[2 * e + 1]), Lt.set(u, n[2 * a], n[2 * a + 1]), Lt.set(d, n[2 * p], n[2 * p + 1]);
        const g = u[0] - c[0],
            v = u[1] - c[1],
            x = d[0] - c[0],
            b = d[1] - c[1],
            w = 1 / (g * b - x * v);
        J.set(_, w * (b * f[0] - v * h[0]), w * (b * f[1] - v * h[1]), w * (b * f[2] - v * h[2])), J.add(o[e], o[e], _), J.add(o[a], o[a], _), J.add(o[p], o[p], _)
    }
    for (m = 0, p = o.length; m < p; m++) J.normalize(o[m], o[m]), a.push(o[m][0], o[m][1], o[m][2], 1);
    return new Float32Array(a)
}

function Xi(e, t) {
    const {
        buffers: n
    } = t;
    return n.normal || (n.normal = Wi(n.position, n.index)), n.position0 && !n.normal0 && (n.normal0 = Wi(n.position0, n.index)), !n.tangent && n.uv && (n.tangent = qi(n)), t.buffers = n, zi[e] = t, t
}

function Yi(e) {
    Object.keys(ji).forEach(t => {
        ji[t].dispose(e)
    })
}

function Zi(e = 1) {
    const t = .5 * e;
    return {
        position: new Float32Array([-t, -t, t, t, -t, t, t, t, t, -t, t, t, -t, -t, -t, -t, t, -t, t, t, -t, t, -t, -t, -t, t, -t, -t, t, t, t, t, t, t, t, -t, -t, -t, -t, t, -t, -t, t, -t, t, -t, -t, t, t, -t, -t, t, t, -t, t, t, t, t, -t, t, -t, -t, -t, -t, -t, t, -t, t, t, -t, t, -t]),
        normal: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0]),
        uv: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1]),
        index: [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]
    }
}

function Ki(e = 1, t = 8, n = 0, i = 2 * Math.PI) {
    const o = [],
        a = [],
        r = [],
        s = [];
    a.push(0, 0, 0), r.push(0, 0, 1), s.push(.5, .5);
    for (let o = 0, l = 3; o <= t; o++, l += 3) {
        const c = n + o / t * i;
        a.push(e * Math.cos(c), e * Math.sin(c), 0), r.push(0, 0, 1), s.push((a[l] / e + 1) / 2, (a[l + 1] / e + 1) / 2)
    }
    for (let e = 1; e <= t; e++) o.push(e, e + 1, 0);
    return {
        position: new Float32Array(a),
        normal: new Float32Array(r),
        uv: new Float32Array(s),
        index: o
    }
}

function Ji(e, t, n, i, o = 2 * Math.PI) {
    const a = [],
        r = [],
        s = [],
        l = [];
    let c, u, d;
    for (c = 0; c <= e; c++) {
        d = 2 * Math.PI * c / e;
        const l = Math.cos(d),
            f = Math.sin(d);
        for (u = 0; u <= t; u++) {
            const d = o * u / t,
                h = (l * n + i) * Math.cos(d),
                _ = f * n,
                m = (l * n + i) * Math.sin(d),
                p = l * Math.cos(d),
                g = l * Math.sin(d),
                v = 1 / t * u;
            let x = 1 / e * c + .5;
            x > 1 && (x -= 1), x = 1 - x, a.push(h, _, m), r.push(p, f, g), s.push(v, x)
        }
    }
    for (c = 0; c < e; c++)
        for (u = 0; u < t; u++) d = (t + 1) * c + u, l.push(d, d + t + 1, d + 1), l.push(d + t + 1, d + t + 2, d + 1);
    return {
        position: new Float32Array(a),
        normal: new Float32Array(r),
        uv: new Float32Array(s),
        index: l
    }
}

function Qi(e = 1, t = 8, n = 6, i = 0, o = 2 * Math.PI, a = 0, r = Math.PI) {
    const s = a + r;
    let l = 0;
    const c = [],
        u = J.create(),
        d = J.create(),
        f = [],
        h = [],
        _ = [],
        m = [];
    for (let s = 0; s <= n; s++) {
        const f = [],
            p = s / n;
        for (let n = 0; n <= t; n++) {
            const s = n / t;
            u[0] = -e * Math.cos(i + s * o) * Math.sin(a + p * r), u[1] = e * Math.cos(a + p * r), u[2] = e * Math.sin(i + s * o) * Math.sin(a + p * r), h.push(u[0], u[1], u[2]), J.normalize(d, u), _.push(d[0], d[1], d[2]), m.push(s, 1 - p), f.push(l++)
        }
        c.push(f)
    }
    for (let e = 0; e < n; e++)
        for (let i = 0; i < t; i++) {
            const t = c[e][i + 1],
                o = c[e][i],
                r = c[e + 1][i],
                l = c[e + 1][i + 1];
            (0 !== e || a > 0) && f.push(t, o, l), (e !== n - 1 || s < Math.PI) && f.push(o, r, l)
        }
    return {
        position: new Float32Array(h),
        normal: new Float32Array(_),
        uv: new Float32Array(m),
        index: f
    }
}

function $i(e = 1, t = 1, n = 1, i = 30, o = 1, a = !1, r = 0, s = 2 * Math.PI) {
    const l = [],
        c = [],
        u = [],
        d = [];
    let f = 0;
    const h = [],
        _ = n / 2;

    function m(n) {
        let o, a = 0,
            h = 0;
        const m = Lt.create(),
            p = J.create(),
            g = !0 === n ? e : t,
            v = !0 === n ? 1 : -1;
        for (h = f, o = 1; o <= i; o++) c.push(0, _ * v, 0), u.push(0, v, 0), d.push(.5, .5), f++;
        for (a = f, o = 0; o <= i; o++) {
            const e = o / i * s + r,
                t = Math.cos(e),
                n = Math.sin(e);
            p[0] = g * n, p[1] = _ * v, p[2] = g * t, c.push(p[0], p[1], p[2]), u.push(0, v, 0), m[0] = .5 * t + .5, m[1] = .5 * n * v + .5, d.push(m[0], m[1]), f++
        }
        for (o = 0; o < i; o++) {
            const e = h + o,
                t = a + o;
            !0 === n ? l.push(t, t + 1, e) : l.push(t + 1, t, e)
        }
    }
    return function () {
        let a, m, p = J.create();
        const g = J.create(),
            v = (t - e) / n;
        for (m = 0; m <= o; m++) {
            const l = [],
                x = m / o,
                b = x * (t - e) + e;
            for (a = 0; a <= i; a++) {
                const e = a / i,
                    t = e * s + r,
                    o = Math.sin(t),
                    h = Math.cos(t);
                g[0] = b * o, g[1] = -x * n + _, g[2] = b * h, c.push(g[0], g[1], g[2]), p = J.fromValues(o, v, h), J.normalize(p, p), u.push(p[0], p[1], p[2]), d.push(e, 1 - x), l.push(f++)
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
        position: new Float32Array(c),
        normal: new Float32Array(u),
        uv: new Float32Array(d),
        index: l
    }
}

function eo(e = 1, t = 1, n = 1, i = 1) {
    const o = e / 2,
        a = t / 2,
        r = n,
        s = i,
        l = r + 1,
        c = s + 1,
        u = e / r,
        d = t / s,
        f = [],
        h = [],
        _ = [],
        m = [];
    for (let e = 0; e < c; e++) {
        const t = e * d - a;
        for (let n = 0; n < l; n++) {
            const i = n * u - o;
            h.push(i, -t, 0), _.push(0, 0, 1), m.push(n / r, 1 - e / s)
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
        normal: new Float32Array(_),
        uv: new Float32Array(m),
        index: f
    }
}
let to, no, io, oo = !1;

function ao(e, t = !0) {
    if (t) {
        oo || (oo = !0, Xi("cube", {
            buffers: Zi(1)
        }), Xi("torus", {
            buffers: Ji(32, 32, .25, .5)
        }), Xi("sphere", {
            buffers: Qi(.5, 32, 32)
        }), Xi("cone", {
            buffers: $i(.5, 0, 1, 32, 32, !0, !0)
        }), Xi("cylinder", {
            buffers: $i(.5, .5, 1, 32, 32, !0, !0)
        }), Xi("plane", {
            buffers: eo(1, 1, 1, 1)
        }));
        let t = ji[e];
        if (!t) {
            const n = zi[e];
            n && (t = new ki(n), ji[e] = t)
        }
        return t
    }
    const n = zi[e];
    return n && new ki(n)
}
class ro {
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
        return Array.isArray(o) ? o.some((e, i) => (e.listener._listener || e.listener) === t && e.thisArg === n && (o.splice(i, 1), !0)) : o && (o.listener._listener || o.listener) === t && o.thisArg === n && delete i[e], this
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
let so, lo, co, uo = !1;
class fo {
    constructor() {
        uo || (uo = !0, to = I.create(), no = I.create(), io = I.create());
        this.planes = [Te.create(), Te.create(), Te.create(), Te.create(), Te.create(), Te.create()], this.points = [J.create(), J.create(), J.create(), J.create(), J.create(), J.create(), J.create(), J.create()], this.boundingSphere = new bi
    }
    _calculatePlane(e) {
        const {
            planes: t
        } = this;
        Te.set(t[0], e[3] + e[2], e[7] + e[6], e[11] + e[10], e[15] + e[14]), Te.set(t[1], e[3] - e[2], e[7] - e[6], e[11] - e[10], e[15] - e[14]), Te.set(t[2], e[3] + e[0], e[7] + e[4], e[11] + e[8], e[15] + e[12]), Te.set(t[3], e[3] - e[0], e[7] - e[4], e[11] - e[8], e[15] - e[12]), Te.set(t[4], e[3] - e[1], e[7] - e[5], e[11] - e[9], e[15] - e[13]), Te.set(t[5], e[3] + e[1], e[7] + e[5], e[11] + e[9], e[15] + e[13]), t.forEach(e => {
            Te.scale(e, e, 1 / J.length(e))
        })
    }
    _calculateBoundingSphere(e, t, n, i, o) {
        const a = Math.tan(e * Math.PI / 180 / 2),
            r = n + t,
            s = n - t,
            l = Math.sqrt(1 + (1 / i) ** 2) * a * i,
            c = l * l,
            {
                boundingSphere: u
            } = this;
        c >= s / r ? (J.set(u.center, 0, 0, -n), u.radius = n * l) : (J.set(u.center, 0, 0, -.5 * r * (1 + c)), u.radius = .5 * Math.sqrt(s * s + 2 * (n * n + t * t) * c + r * r * c * c)), J.transformMat4(u.center, u.center, o)
    }
    _calculatePoints(e, t, n, i, o) {
        const {
            points: a
        } = this, r = Math.tan(e * Math.PI / 180 / 2), s = r * t, l = s * i, c = r * n, u = c * i;
        J.set(a[0], -l, s, -t), J.set(a[1], -l, -s, -t), J.set(a[2], l, -s, -t), J.set(a[3], l, s, -t), J.set(a[4], -u, c, -n), J.set(a[5], -u, -c, -n), J.set(a[6], u, -c, -n), J.set(a[7], u, c, -n);
        for (let e = 0; e < 8; e++) J.transformMat4(a[e], a[e], o)
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
        I.invert(io, e), I.perspective(to, t / 180 * Math.PI, o, n, i), I.mul(no, to, e), this._calculatePlane(no), this._calculateBoundingSphere(t, n, i, o, io), this._calculatePoints(t, n, i, o, io)
    }
}
let ho = !1;
class _o {
    constructor(e = J.fromValues(1, 0, 0), t = 0) {
        ho || (ho = !0, so = J.create(), lo = J.create(), co = b.create()), this.normal = e, this.constant = t
    }
    set(e, t) {
        return J.copy(this.normal, e), this.constant = t, this
    }
    setComponents(e, t, n, i) {
        return J.set(this.normal, e, t, n), this.constant = i, this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return J.copy(this.normal, e), this.constant = -J.dot(t, this.normal), this
    }
    setFromCoplanarPoints(e, t, n) {
        return J.sub(so, n, t), J.sub(lo, e, t), J.cross(so, so, lo), J.normalize(so, so), this.setFromNormalAndCoplanarPoint(so, e), this
    }
    clone() {
        return (new _o).copy(this)
    }
    copy(e) {
        return J.copy(this.normal, e.normal), this.constant = e.constant, this
    }
    normalize() {
        const e = 1 / J.length(this.normal);
        return J.scale(this.normal, this.normal, e), this.constant *= e, this
    }
    negate() {
        return this.constant *= -1, J.negate(this.normal, this.normal), this
    }
    distanceToPoint(e) {
        return J.dot(this.normal, e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return J.copy(t, this.normal), J.scale(t, t, -this.distanceToPoint(e)), J.add(t, t, e), t
    }
    intersectLine(e, t) {
        const n = e.delta(so),
            i = J.dot(this.normal, n);
        if (0 === i) return 0 === this.distanceToPoint(e.start) ? J.copy(t, e.start) : void 0;
        const o = -(J.dot(e.start, this.normal) + this.constant) / i;
        return o < 0 || o > 1 ? void 0 : (J.copy(t, n), J.scale(t, t, o), J.add(t, t, e.start), t)
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
        return J.copy(e, this.normal), J.scale(e, e, -this.constant), e
    }
    applyMatrix4(e, t) {
        const n = t || b.normalFromMat4(co, e);
        return this.coplanarPoint(so), J.transformMat4(so, so, e), J.transformMat3(this.normal, this.normal, n), J.normalize(this.normal, this.normal), this.constant = -J.dot(so, this.normal), this
    }
    translate(e) {
        return this.constant -= J.dot(e, this.normal), this
    }
    equals(e) {
        return J.equals(e.normal, this.normal) && e.constant === this.constant
    }
}
let mo = 0,
    po = !0,
    go = !1;
class vo {
    constructor(e) {
        go || (go = !0, po = !ii());
        vo.COUNT++, this.id = ++mo, this._options = e, this.type = e.type || "2D", this._initialized = !1, this._imageLoaded = !1, this._loadError = !1, this._texture = null, this._unit = 0
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
            if (i.compareFunc && e.texParameteri(o, e.TEXTURE_COMPARE_FUNC, e[i.compareFunc]), i.compareMode && e.texParameteri(o, e.TEXTURE_COMPARE_MODE, e[i.compareMode]), e.texParameteri(o, e.TEXTURE_MAG_FILTER, e[i.magFilter || "LINEAR"]), e.texParameteri(o, e.TEXTURE_MIN_FILTER, e[i.minFilter || (t && s ? "LINEAR" : "LINEAR_MIPMAP_NEAREST")]), e.texParameteri(o, e.TEXTURE_WRAP_S, e[i.wrapS || "REPEAT"]), e.texParameteri(o, e.TEXTURE_WRAP_T, e[i.wrapT || "REPEAT"]), po && e.texParameteri(o, e.TEXTURE_WRAP_R, e[i.wrapR || "REPEAT"]), t && s)
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
        e.activeTexture(e.TEXTURE0 + this._unit), e.bindTexture(t, null), e.deleteTexture(this._texture), this._texture = null, this._gl = null, vo.COUNT--
    }
}
vo.COUNT = 0;
let xo = 0;
class bo {
    constructor(e) {
        this.id = ++xo, this._width = e.width, this._height = e.height, this._dataType = e.dataType, this._format = e.format, this._type = e.type, this._layers = e.layers, this._wrapS = e.wrapS || "CLAMP_TO_EDGE", this._wrapT = e.wrapT || "CLAMP_TO_EDGE", this._wrapR = e.wrapR || "CLAMP_TO_EDGE", this._minFilter = e.minFilter || "NEAREST", this._magFilter = e.magFilter || "NEAREST", this._compareFunc = e.compareFunc, this._compareMode = e.compareMode, this._depth = e.depth, this._stencil = e.stencil, this._colorCount = null == e.colorCount ? 1 : e.colorCount, this._clearColor = e.clearColor || new Float32Array([0, 0, 0, 0]), this._sharedFramebuffer = e.sharedFramebuffer, this._textures = [], this._renderbuffer = null, this._framebuffer = null, this._gl = null
    }
    _init() {
        bo.COUNT++;
        const e = this,
            t = e._gl,
            n = e._width,
            i = e._height,
            o = e._depth,
            a = e._stencil,
            r = e._textures;
        e._framebuffer = t.createFramebuffer();
        for (let t = 0; t < e._colorCount; t++) r[t] = new vo({
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
                } if (o && o.format) e._depthTexture = new vo({
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
        }), e._depthTexture && e._depthTexture.dispose(), e._renderbuffer && t.deleteRenderbuffer(e._renderbuffer), e._framebuffer && t.deleteFramebuffer(e._framebuffer), e._textures = [], e._depthTexture = null, e._renderbuffer = null, e._framebuffer = null, e._gl = null, bo.COUNT--
    }
}
bo.COUNT = 0;
const wo = "#version 300 es\nprecision highp float;\nlayout(std140, column_major) uniform;\n\n",
    Mo = "#ifdef MORPH_TARGETS\n  #if MORPH_TARGETS_COUNT > 0\n    layout(location = 9) in vec3 a_position0;\n  #endif\n  #if MORPH_TARGETS_COUNT > 1\n    layout(location = 10) in vec3 a_position1;\n  #endif\n  #if MORPH_TARGETS_COUNT > 2\n    in vec3 a_position2;\n  #endif\n  #if MORPH_TARGETS_COUNT > 3\n    in vec3 a_position3;\n  #endif\n  uniform float u_weights[MORPH_TARGETS_COUNT];\n#endif\n\n#ifdef SKIN\n  layout(location = 9) in vec4 a_joint;\n  layout(location = 10) in vec4 a_weight;\n  uniform mat4 u_jointMatrix[SKIN_JOINTS_COUNT];\n#endif\n\n#ifdef INSTANCE\n  layout(location = 5) in mat4 a_instance;\n#endif\n\n#if defined(LIGHT) || defined(ENV_MAP)\n  layout(location = 1) in vec3 a_normal;\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      layout(location = 11) in vec3 a_normal0;\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      layout(location = 12) in vec3 a_normal1;\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      in vec3 a_normal2;\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      in vec3 a_normal3;\n    #endif\n  #endif\n  #ifdef SKIN\n    uniform mat4 u_jointNormalMatrix[SKIN_JOINTS_COUNT];\n  #endif\n  uniform mat3 u_normalMatrix;\n  out vec3 v_normal;\n#endif\n\n#if defined(NORMAL_MAP)\n  layout(location = 3) in vec4 a_tangent;\n  out mat3 v_TBN;\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      layout(location = 13) in vec4 a_tangent0;\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      layout(location = 14) in vec4 a_tangent1;\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      in vec4 a_tangent2;\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      in vec4 a_tangent3;\n    #endif\n  #endif\n#endif\n\n#if defined(DIFFUSE_MAP) || defined(NORMAL_MAP) || defined(BUMP_MAP) || defined(EMISSIVE_MAP) || defined(AMBIENT_MAP) || defined(SPECULAR_MAP)\n  layout(location = 2) in vec2 a_uv;\n  uniform mat3 u_textureMatrix;\n  out vec2 v_uv;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  out vec3 v_modelPosition;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  out vec3 v_worldPosition;\n#endif\n\n#ifdef VERTEX_COLOR\n  layout(location = 4) in vec4 a_color;\n  out vec4 v_color;\n#endif\n\n#ifdef DIRECTION_SHADOW\n  #define CASCADED_COUNT 4\n  uniform mat4 u_shadowMapProjectViewMatrix_0;\n  uniform mat4 u_shadowMapProjectViewMatrix_1;\n  uniform mat4 u_shadowMapProjectViewMatrix_2;\n  uniform mat4 u_shadowMapProjectViewMatrix_3;\n  out vec4 v_shadowMapPosition[CASCADED_COUNT];\n#endif\n#ifdef SPOT_SHADOW\n  #if SPOT_SHADOW > 0\n    uniform mat4 u_spotShadowMapProjectViewMatrix_0;\n  #endif\n  #if SPOT_SHADOW > 1\n    uniform mat4 u_spotShadowMapProjectViewMatrix_1;\n  #endif\n  #if SPOT_SHADOW > 2\n    uniform mat4 u_spotShadowMapProjectViewMatrix_2;\n  #endif\n  #if SPOT_SHADOW > 3\n    uniform mat4 u_spotShadowMapProjectViewMatrix_3;\n  #endif\n  out vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n#endif\n\n#ifdef POINT\n  uniform float u_pointSize;\n#endif\n\nlayout(location = 0) in vec3 a_position;\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  vec3 position = a_position;\n\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      position += a_position0 * u_weights[0];\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      position += a_position1 * u_weights[1];\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      position += a_position2 * u_weights[2];\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      position += a_position3 * u_weights[3];\n    #endif\n  #endif\n\n  vec4 finalPosition = vec4(position, 1.0);\n\n  #ifdef SKIN\n    mat4 skinMat =\n      a_weight.x * u_jointMatrix[int(a_joint.x)] +\n      a_weight.y * u_jointMatrix[int(a_joint.y)] +\n      a_weight.z * u_jointMatrix[int(a_joint.z)] +\n      a_weight.w * u_jointMatrix[int(a_joint.w)];\n    finalPosition = skinMat * finalPosition;\n  #endif\n\n  #ifdef INSTANCE\n    finalPosition = a_instance * finalPosition;\n  #else\n    finalPosition = u_modelMatrix * finalPosition;\n  #endif\n\n  vec4 worldPosition = finalPosition;\n  gl_Position = u_projectViewMatrix * worldPosition;\n  #ifdef POINT\n    gl_PointSize = u_pointSize;\n  #endif\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    v_worldPosition = worldPosition.xyz;\n  #endif\n\n  #ifdef DIRECTION_SHADOW\n    v_shadowMapPosition[0] = u_shadowMapProjectViewMatrix_0 * worldPosition;\n    v_shadowMapPosition[1] = u_shadowMapProjectViewMatrix_1 * worldPosition;\n    v_shadowMapPosition[2] = u_shadowMapProjectViewMatrix_2 * worldPosition;\n    v_shadowMapPosition[3] = u_shadowMapProjectViewMatrix_3 * worldPosition;\n  #endif\n  #ifdef SPOT_SHADOW\n    #if SPOT_SHADOW > 0\n      v_spotShadowMapPosition[0] = u_spotShadowMapProjectViewMatrix_0 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 1\n      v_spotShadowMapPosition[1] = u_spotShadowMapProjectViewMatrix_1 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 2\n      v_spotShadowMapPosition[2] = u_spotShadowMapProjectViewMatrix_2 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 3\n      v_spotShadowMapPosition[3] = u_spotShadowMapProjectViewMatrix_3 * worldPosition;\n    #endif\n  #endif\n\n  #if defined(LIGHT) || defined(ENV_MAP)\n    vec3 finalNormal = a_normal;\n    #ifdef MORPH_TARGETS\n      #if MORPH_TARGETS_COUNT > 0\n        finalNormal += a_normal0 * u_weights[0];\n      #endif\n      #if MORPH_TARGETS_COUNT > 1\n        finalNormal += a_normal1 * u_weights[1];\n      #endif\n      #if MORPH_TARGETS_COUNT > 2\n        finalNormal += a_normal2 * u_weights[2];\n      #endif\n      #if MORPH_TARGETS_COUNT > 3\n        finalNormal += a_normal3 * u_weights[3];\n      #endif\n    #endif\n    #ifdef SKIN\n      mat4 skinNormalMat =\n        a_weight.x * u_jointNormalMatrix[int(a_joint.x)] +\n        a_weight.y * u_jointNormalMatrix[int(a_joint.y)] +\n        a_weight.z * u_jointNormalMatrix[int(a_joint.z)] +\n        a_weight.w * u_jointNormalMatrix[int(a_joint.w)];\n      finalNormal = mat3(skinNormalMat) * finalNormal;\n    #endif\n    v_normal = u_normalMatrix * finalNormal;\n  #endif\n\n  #if defined(NORMAL_MAP)\n    vec4 finalTangent = a_tangent;\n    #ifdef MORPH_TARGETS\n      #if MORPH_TARGETS_COUNT > 0\n        finalTangent += a_tangent0 * u_weights[0];\n      #endif\n      #if MORPH_TARGETS_COUNT > 1\n        finalTangent += a_tangent1 * u_weights[1];\n      #endif\n      #if MORPH_TARGETS_COUNT > 2\n        finalTangent += a_tangent2 * u_weights[2];\n      #endif\n      #if MORPH_TARGETS_COUNT > 3\n        finalTangent += a_tangent3 * u_weights[3];\n      #endif\n    #endif\n    vec3 normal = normalize(finalNormal);\n    vec3 tangent = normalize(finalTangent.xyz);\n    vec3 bitangent = cross(normal, tangent) * finalTangent.w;\n    v_TBN = mat3(u_modelMatrix) * mat3(tangent, bitangent, normal);\n  #endif\n\n  #if defined(DIFFUSE_MAP) || defined(NORMAL_MAP) || defined(BUMP_MAP) || defined(EMISSIVE_MAP) || defined(AMBIENT_MAP) || defined(SPECULAR_MAP)\n    #ifdef FLIP_Y\n      v_uv = (u_textureMatrix * vec3(a_uv.x, 1.0 - a_uv.y, 1.0)).xy;\n    #else\n      v_uv = (u_textureMatrix * vec3(a_uv, 1.0)).xy;\n    #endif\n  #endif\n\n  #ifdef VERTEX_COLOR\n    v_color = a_color;\n  #endif\n\n  #if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n    v_modelPosition = finalPosition.xyz;\n  #endif\n}\n",
    So = '#ifdef VERTEX_COLOR\n  in vec4 v_color;\n#endif\n\n#ifdef DIFFUSE_MAP\n  uniform sampler2D u_diffuseSampler;\n#endif\n\n#ifdef DIFFUSE_CUBE_MAP\n  uniform samplerCube u_diffuseSampler;\n#endif\n\n#if defined(LIGHT) || defined(ENV_MAP)\n  in vec3 v_normal;\n#endif\n\n#if defined(DIFFUSE_MAP) || defined(NORMAL_MAP) || defined(BUMP_MAP) || defined(EMISSIVE_MAP) || defined(AMBIENT_MAP) || defined(SPECULAR_MAP)\n  in vec2 v_uv;\n#endif\n\n#ifdef ENV_MAP\n  uniform samplerCube u_envSampler;\n#endif\n\n#ifdef EMISSIVE_MAP\n  uniform sampler2D u_emissiveSampler;\n  uniform vec3 u_emissiveColor;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  uniform vec3 u_eyePosition;\n  in vec3 v_worldPosition;\n#endif\n\n#ifdef LIGHT\n  uniform vec3 u_ambientLightColor;\n  uniform vec3 u_ambientColor;\n  uniform float u_shininess;\n\n  #ifdef AMBIENT_MAP\n    uniform sampler2D u_ambientSampler;\n  #endif\n  #ifdef SPECULAR_MAP\n    uniform sampler2D u_specularSampler;\n  #else\n    uniform vec3 u_specularColor;\n  #endif\n  #if defined(NORMAL_MAP)\n    uniform sampler2D u_normalSampler;\n    in mat3 v_TBN;\n  #endif\n  \n  #if defined(BUMP_MAP)\n    uniform sampler2D u_bumpSampler;\n    uniform float u_bumpScale;\n  \n    //Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen\n    // http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf\n    // https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderChunk/bumpmap_pars_fragment.glsl\n    vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm) {\n      vec2 dSTdx = dFdx(v_uv);\n      vec2 dSTdy = dFdy(v_uv);\n      float Hll = u_bumpScale * texture(u_bumpSampler, v_uv).x;\n      float dBx = u_bumpScale * texture(u_bumpSampler, v_uv + dSTdx).x - Hll;\n      float dBy = u_bumpScale * texture(u_bumpSampler, v_uv + dSTdy).x - Hll;\n  \n      vec3 vSigmaX = vec3(dFdx(surf_pos.x), dFdx(surf_pos.y), dFdx(surf_pos.z));\n      vec3 vSigmaY = vec3(dFdy(surf_pos.x), dFdy(surf_pos.y), dFdy(surf_pos.z));\n      vec3 vN = surf_norm;\n      vec3 R1 = cross(vSigmaY, vN);\n      vec3 R2 = cross(vN, vSigmaX);\n  \n      float fDet = dot(vSigmaX, R1);\n      fDet *= (float(gl_FrontFacing) * 2.0 - 1.0);\n  \n      vec3 vGrad = sign(fDet) * (dBx * R1 + dBy * R2);\n      return normalize(abs(fDet) * surf_norm - vGrad);\n    }\n  #endif\n\n  #define PCF_SHADOW\n  #ifdef DIRECTION_SHADOW\n    #define CASCADED_COUNT 4\n    in vec4 v_shadowMapPosition[CASCADED_COUNT];\n    uniform highp sampler2DArrayShadow u_directionShadowMapSampler;\n    uniform vec4 u_cascadedEnd;\n  \n    float calculateDirectionShadow(int layer) {\n      vec3 position = v_shadowMapPosition[layer].xyz / v_shadowMapPosition[layer].w;\n      position = position * 0.5 + 0.5;\n      vec4 shadowUv = vec4(position.xy, float(layer), position.z - 0.005);\n  \n      #ifdef PCF_SHADOW\n        vec2 size = 1.0 / vec2(2048.0, 2048.0);\n        float depth = 0.0;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = texture(u_directionShadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n        return depth;\n      #else\n        float depth = texture(u_directionShadowMapSampler, shadowUv);\n        return depth;\n      #endif\n    }\n  #endif\n  \n  #ifdef POINT_SHADOW\n    const float pointLightNear = 0.1;\n    const float pointLightFar = 1000.0;\n    #if POINT_SHADOW > 0\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_0;\n    #endif\n    #if POINT_SHADOW > 1\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_1;\n    #endif\n    #if POINT_SHADOW > 2\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_2;\n    #endif\n    #if POINT_SHADOW > 3\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_3;\n    #endif\n    // https://stackoverflow.com/questions/10786951/omnidirectional-shadow-mapping-with-depth-cubemap\n    float vectorToDepthValue(vec3 vec, float n, float f) {\n      vec3 absVec = abs(vec);\n      float localZcomp = max(absVec.x, max(absVec.y, absVec.z));\n      float normZComp = (f + n) / (f - n) - (2.0 * f * n) / (f - n) / localZcomp;\n      return (normZComp + 1.0) * 0.5;\n    }\n  \n    float calculatePointShadow(samplerCubeShadow shadowMapSampler, vec3 lightToPosition) {\n      float depth = vectorToDepthValue(lightToPosition, pointLightNear, pointLightFar);\n      return texture(shadowMapSampler, vec4(lightToPosition, depth));\n    }\n  #endif\n  \n  #ifdef SPOT_SHADOW\n    in vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n    #if SPOT_SHADOW > 0\n      uniform highp sampler2DShadow u_spotShadowMapSampler_0;\n    #endif\n    #if SPOT_SHADOW > 1\n      uniform highp sampler2DShadow u_spotShadowMapSampler_1;\n    #endif\n    #if SPOT_SHADOW > 2\n      uniform highp sampler2DShadow u_spotShadowMapSampler_2;\n    #endif\n    #if SPOT_SHADOW > 3\n      uniform highp sampler2DShadow u_spotShadowMapSampler_3;\n    #endif\n  \n    float calculateSpotShadow(sampler2DShadow shadowMapSampler, vec4 spotShadowMapPosition) {\n      vec4 position = spotShadowMapPosition;\n  \n      float depth = 0.0;\n      #ifdef PCF_SHADOW\n        vec4 shadowUv = position;\n        vec2 size = 1.0 / vec2(2048.0, 2048.0) * position.w;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = textureProj(shadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n      #else\n        depth = textureProj(shadowMapSampler, position);\n      #endif\n      return depth;\n    }\n  #endif\n\n  struct LightInfo {\n    vec3 diffuseColor;\n    vec3 specularColor;\n  };\n  \n  #if DIRECTION_LIGHT_COUNT\n    struct DirectionLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform DirectionLight u_directionLights[DIRECTION_LIGHT_COUNT];\n  \n    LightInfo calculateDirectionLightInfo(DirectionLight light, vec3 eyeDirection, vec3 normal) {\n      LightInfo info;\n      vec3 lightDirection = normalize(-light.direction);\n      float ndl = dot(lightDirection, normal);\n      float diffuse = max(ndl, 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n  \n      #ifdef DIRECTION_SHADOW\n        if (light.shadow) {\n          int layer = 3;\n          if (gl_FragCoord.z <= u_cascadedEnd.x) {\n            layer = 0;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.y) {\n            layer = 1;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.z) {\n            layer = 2;\n          }\n          float shadow = calculateDirectionShadow(layer);\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      info.diffuseColor = light.diffuseColor * diffuse;\n      info.specularColor = light.specularColor * specular;\n      return info;\n    }\n  #endif\n  \n  #if POINT_LIGHT_COUNT\n    struct PointLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 position;\n      float distance;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform PointLight u_pointLights[POINT_LIGHT_COUNT];\n  \n    LightInfo calculatePointLightInfo(PointLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightToPosition = light.position - v_worldPosition;\n      float distance = length(lightToPosition);\n      vec3 lightDirection = normalize(lightToPosition);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n      #ifdef POINT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if POINT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_0, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_1, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_2, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_3, -lightToPosition);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n  \n  #if SPOT_LIGHT_COUNT\n    struct SpotLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      vec3 position;\n      float distance;\n      float innerAngle;\n      float outerAngle;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform SpotLight u_spotLights[SPOT_LIGHT_COUNT];\n  \n    LightInfo calculateSpotLightInfo(SpotLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightDirection = light.position - v_worldPosition;\n      float distance = length(lightDirection);\n      lightDirection = normalize(lightDirection);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n  \n      #ifdef SPOT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if SPOT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_0, v_spotShadowMapPosition[0]);\n            }\n          #endif\n          #if SPOT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_1, v_spotShadowMapPosition[1]);\n            }\n          #endif\n          #if SPOT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_2, v_spotShadowMapPosition[2]);\n            }\n          #endif\n          #if SPOT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_3, v_spotShadowMapPosition[3]);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      float theta = dot(lightDirection, normalize(-light.direction));\n      float epsilon = light.innerAngle - light.outerAngle;\n      float intensity = clamp((theta - light.outerAngle) / epsilon, 0.0, 1.0);\n      attenuation *= intensity;\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n#endif\n\n#if defined(CLIPPLANE)\n  uniform vec4 u_clipPlane;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  in vec3 v_modelPosition;\n#endif\n\n#ifdef FOG\n  uniform vec3 u_fogColor;\n  uniform float u_fogNear;\n  uniform float u_fogFar;\n#endif\n\n#ifdef ALPHA_TEST\n  uniform float u_alphaCutoff;\n#endif\n\nconst vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nuniform vec4 u_diffuseColor;\nout vec4 fragColor;\n\nvoid main () {\n  #ifdef CLIPPLANE\n    float clipDistance = dot(v_modelPosition, u_clipPlane.xyz);\n    if (clipDistance >= u_clipPlane.w) {\n      discard;\n    }\n  #endif\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n  #endif\n\n  #ifdef DIFFUSE_MAP\n    vec4 baseColor = texture(u_diffuseSampler, v_uv);\n    baseColor.rgb = gammaInput(baseColor.rgb);\n  #else\n    #ifdef DIFFUSE_CUBE_MAP\n      // http://marcinignac.com/blog/pragmatic-pbr-hdr/\n      vec4 baseColor = texture(u_diffuseSampler, normalize(vec3(-v_modelPosition.x, v_modelPosition.y, v_modelPosition.z)));\n      baseColor.rgb = gammaInput(baseColor.rgb);\n    #else\n      vec4 baseColor = vec4(1.0);\n    #endif\n  #endif\n\n  baseColor *= u_diffuseColor;\n\n  #ifdef VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n\n  #ifdef ALPHA_TEST\n    if (baseColor.a < u_alphaCutoff) {\n      discard;\n    }\n    baseColor.a = 1.0;\n  #endif\n  #ifndef BLEND\n    baseColor.a = 1.0;\n  #endif\n\n  vec3 emissiveColor = vec3(0.0);\n  #ifdef EMISSIVE_MAP\n    emissiveColor = u_emissiveColor * texture(u_emissiveSampler, v_uv).rgb;\n  #endif\n\n  #ifdef LIGHT\n    #if defined(NORMAL_MAP)\n      vec3 normal = normalize((texture(u_normalSampler, v_uv) * 2.0 - 1.0).rgb);\n      normal = normalize(v_TBN * normal);\n    #else\n      #if defined(BUMP_MAP)\n        vec3 normal = perturbNormalArb(v_worldPosition, normalize(v_normal));\n      #else\n        vec3 normal = normalize(v_normal);\n      #endif\n    #endif\n\n    if (!gl_FrontFacing) {\n      normal = -normal;\n    }\n\n    vec3 diffuseBase = vec3(0.0);\n    vec3 specularBase = vec3(0.0);\n    vec3 eyeDirection = normalize(eyeSpacePosition);\n\n    #if DIRECTION_LIGHT_COUNT\n      for (int i = 0; i < DIRECTION_LIGHT_COUNT; i++) {\n        DirectionLight light = u_directionLights[i];\n        LightInfo info = calculateDirectionLightInfo(light, eyeDirection, normal);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n      }\n    #endif\n    \n    #if POINT_LIGHT_COUNT\n      int shadowPointLightIndex = 0;\n      for (int i = 0; i < POINT_LIGHT_COUNT; i++) {\n        PointLight light = u_pointLights[i];\n        LightInfo info = calculatePointLightInfo(light, eyeDirection, normal, shadowPointLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowPointLightIndex++;\n        }\n      }\n    #endif\n    \n    #if SPOT_LIGHT_COUNT\n      int shadowSpotLightIndex = 0;\n      for (int i = 0; i < SPOT_LIGHT_COUNT; i++) {\n        SpotLight light = u_spotLights[i];\n        LightInfo info = calculateSpotLightInfo(light, eyeDirection, normal, shadowSpotLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowSpotLightIndex++;\n        }\n      }\n    #endif\n\n    #ifdef AMBIENT_MAP\n      vec3 ambientSamplerColor = texture(u_ambientSampler, v_uv).rgb;\n    #else\n      vec3 ambientSamplerColor = vec3(1.0);\n    #endif\n\n    #ifdef SPECULAR_MAP\n      vec3 specularMaterialColor = gammaInput(texture(u_specularSampler, v_uv).rgb);\n    #else\n      vec3 specularMaterialColor = u_specularColor;\n    #endif\n\n    diffuseBase += u_ambientColor * u_ambientLightColor;\n    specularBase *= specularMaterialColor;\n    vec3 finalColor = diffuseBase;\n    finalColor *= baseColor.rgb * ambientSamplerColor;\n    finalColor += emissiveColor + specularBase;\n    baseColor.rgb = finalColor;\n  #else\n    baseColor.rgb += emissiveColor;\n  #endif\n\n  #ifdef ENV_MAP\n    #ifdef REFRACTIVE\n      vec3 R = refract(-normalize(eyeSpacePosition), normal, 1.0 / 1.52);\n    #else\n      vec3 R = reflect(-normalize(eyeSpacePosition), normal);\n    #endif\n    R.x = -R.x;\n    // TODO Reflection Map\n    baseColor.rgb = mix(baseColor.rgb, baseColor.rgb * gammaInput(texture(u_envSampler, R).rgb), 1.0);\n    // baseColor.rgb = gammaInput(texture(u_envSampler, R).rgb);\n  #endif\n\n  fragColor = baseColor;\n  #ifdef GAMMA_CORRECTION\n    fragColor.rgb = gammaOutput(fragColor.rgb);\n  #endif\n\n  #ifdef FOG\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  #endif\n}\n',
    yo = "#ifdef MORPH_TARGETS\n  #if MORPH_TARGETS_COUNT > 0\n    layout(location = 9) in vec3 a_position0;\n  #endif\n  #if MORPH_TARGETS_COUNT > 1\n    layout(location = 10) in vec3 a_position1;\n  #endif\n  #if MORPH_TARGETS_COUNT > 2\n    in vec3 a_position2;\n  #endif\n  #if MORPH_TARGETS_COUNT > 3\n    in vec3 a_position3;\n  #endif\n  uniform float u_weights[MORPH_TARGETS_COUNT];\n#endif\n\n#ifdef SKIN\n  layout(location = 9) in vec4 a_joint;\n  layout(location = 10) in vec4 a_weight;\n  uniform mat4 u_jointMatrix[SKIN_JOINTS_COUNT];\n#endif\n\n#ifdef INSTANCE\n  layout(location = 5) in mat4 a_instance;\n#endif\n\n#if defined(LIGHT)\n  layout(location = 1) in vec3 a_normal;\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      layout(location = 11) in vec3 a_normal0;\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      layout(location = 12) in vec3 a_normal1;\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      in vec3 a_normal2;\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      in vec3 a_normal3;\n    #endif\n  #endif\n  #ifdef SKIN\n    uniform mat4 u_jointNormalMatrix[SKIN_JOINTS_COUNT];\n  #endif\n  uniform mat3 u_normalMatrix;\n  out vec3 v_normal;\n#endif\n\n#if defined(NORMAL_MAP)\n  layout(location = 3) in vec4 a_tangent;\n  out mat3 v_TBN;\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      layout(location = 13) in vec4 a_tangent0;\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      layout(location = 14) in vec4 a_tangent1;\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      in vec4 a_tangent2;\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      in vec4 a_tangent3;\n    #endif\n  #endif\n#endif\n\n#if defined(BASE_COLOR_MAP) || defined(NORMAL_MAP) || defined(EMISSIVE_MAP) || defined(METALLIC_ROUGHNESS_MAP) || defined(OCCLUSION_MAP) || defined(SPECULAR_MAP) || defined(DIFFUSE_MAP)\n  layout(location = 2) in vec2 a_uv;\n  uniform mat3 u_textureMatrix;\n  out vec2 v_uv;\n  #ifdef USE_UV1\n    layout(location = 15) in vec2 a_uv1;\n    out vec2 v_uv1;\n  #endif\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  out vec3 v_modelPosition;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  out vec3 v_worldPosition;\n#endif\n\n#ifdef VERTEX_COLOR\n  layout(location = 4) in vec4 a_color;\n  out vec4 v_color;\n#endif\n\n#ifdef DIRECTION_SHADOW\n  #define CASCADED_COUNT 4\n  uniform mat4 u_shadowMapProjectViewMatrix_0;\n  uniform mat4 u_shadowMapProjectViewMatrix_1;\n  uniform mat4 u_shadowMapProjectViewMatrix_2;\n  uniform mat4 u_shadowMapProjectViewMatrix_3;\n  out vec4 v_shadowMapPosition[CASCADED_COUNT];\n#endif\n#ifdef SPOT_SHADOW\n  #if SPOT_SHADOW > 0\n    uniform mat4 u_spotShadowMapProjectViewMatrix_0;\n  #endif\n  #if SPOT_SHADOW > 1\n    uniform mat4 u_spotShadowMapProjectViewMatrix_1;\n  #endif\n  #if SPOT_SHADOW > 2\n    uniform mat4 u_spotShadowMapProjectViewMatrix_2;\n  #endif\n  #if SPOT_SHADOW > 3\n    uniform mat4 u_spotShadowMapProjectViewMatrix_3;\n  #endif\n  out vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n#endif\n\nlayout(location = 0) in vec3 a_position;\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  vec3 position = a_position;\n\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      position += a_position0 * u_weights[0];\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      position += a_position1 * u_weights[1];\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      position += a_position2 * u_weights[2];\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      position += a_position3 * u_weights[3];\n    #endif\n  #endif\n\n  vec4 finalPosition = vec4(position, 1.0);\n\n  #ifdef SKIN\n    mat4 skinMat =\n      a_weight.x * u_jointMatrix[int(a_joint.x)] +\n      a_weight.y * u_jointMatrix[int(a_joint.y)] +\n      a_weight.z * u_jointMatrix[int(a_joint.z)] +\n      a_weight.w * u_jointMatrix[int(a_joint.w)];\n    finalPosition = skinMat * finalPosition;\n  #endif\n\n  #ifdef INSTANCE\n    finalPosition = a_instance * finalPosition;\n  #else\n    finalPosition = u_modelMatrix * finalPosition;\n  #endif\n\n  vec4 worldPosition = finalPosition;\n  gl_Position = u_projectViewMatrix * worldPosition;\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    v_worldPosition = worldPosition.xyz;\n  #endif\n\n  #ifdef DIRECTION_SHADOW\n    v_shadowMapPosition[0] = u_shadowMapProjectViewMatrix_0 * worldPosition;\n    v_shadowMapPosition[1] = u_shadowMapProjectViewMatrix_1 * worldPosition;\n    v_shadowMapPosition[2] = u_shadowMapProjectViewMatrix_2 * worldPosition;\n    v_shadowMapPosition[3] = u_shadowMapProjectViewMatrix_3 * worldPosition;\n  #endif\n  #ifdef SPOT_SHADOW\n    #if SPOT_SHADOW > 0\n      v_spotShadowMapPosition[0] = u_spotShadowMapProjectViewMatrix_0 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 1\n      v_spotShadowMapPosition[1] = u_spotShadowMapProjectViewMatrix_1 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 2\n      v_spotShadowMapPosition[2] = u_spotShadowMapProjectViewMatrix_2 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 3\n      v_spotShadowMapPosition[3] = u_spotShadowMapProjectViewMatrix_3 * worldPosition;\n    #endif\n  #endif\n\n  #if defined(LIGHT)\n    vec3 finalNormal = a_normal;\n    #ifdef MORPH_TARGETS\n      #if MORPH_TARGETS_COUNT > 0\n        finalNormal += a_normal0 * u_weights[0];\n      #endif\n      #if MORPH_TARGETS_COUNT > 1\n        finalNormal += a_normal1 * u_weights[1];\n      #endif\n      #if MORPH_TARGETS_COUNT > 2\n        finalNormal += a_normal2 * u_weights[2];\n      #endif\n      #if MORPH_TARGETS_COUNT > 3\n        finalNormal += a_normal3 * u_weights[3];\n      #endif\n    #endif\n    #ifdef SKIN\n      mat4 skinNormalMat =\n        a_weight.x * u_jointNormalMatrix[int(a_joint.x)] +\n        a_weight.y * u_jointNormalMatrix[int(a_joint.y)] +\n        a_weight.z * u_jointNormalMatrix[int(a_joint.z)] +\n        a_weight.w * u_jointNormalMatrix[int(a_joint.w)];\n      finalNormal = mat3(skinNormalMat) * finalNormal;\n    #endif\n    v_normal = u_normalMatrix * finalNormal;\n  #endif\n\n  #if defined(NORMAL_MAP)\n    vec4 finalTangent = a_tangent;\n    #ifdef MORPH_TARGETS\n      #if MORPH_TARGETS_COUNT > 0\n        finalTangent += a_tangent0 * u_weights[0];\n      #endif\n      #if MORPH_TARGETS_COUNT > 1\n        finalTangent += a_tangent1 * u_weights[1];\n      #endif\n      #if MORPH_TARGETS_COUNT > 2\n        finalTangent += a_tangent2 * u_weights[2];\n      #endif\n      #if MORPH_TARGETS_COUNT > 3\n        finalTangent += a_tangent3 * u_weights[3];\n      #endif\n    #endif\n    vec3 normal = normalize(finalNormal);\n    vec3 tangent = normalize(finalTangent.xyz);\n    vec3 bitangent = cross(normal, tangent) * finalTangent.w;\n    v_TBN = mat3(u_modelMatrix) * mat3(tangent, bitangent, normal);\n  #endif\n\n  #if defined(BASE_COLOR_MAP) || defined(NORMAL_MAP) || defined(EMISSIVE_MAP) || defined(METALLIC_ROUGHNESS_MAP) || defined(OCCLUSION_MAP) || defined(SPECULAR_MAP) || defined(DIFFUSE_MAP)\n    #ifdef FLIP_Y\n      v_uv = (u_textureMatrix * vec3(a_uv.x, 1.0 - a_uv.y, 1.0)).xy;\n      #ifdef USE_UV1\n        v_uv1 = (u_textureMatrix * vec3(a_uv1.x, 1.0 - a_uv1.y, 1.0)).xy;\n      #endif\n    #else\n      v_uv = (u_textureMatrix * vec3(a_uv, 1.0)).xy;\n      #ifdef USE_UV1\n        v_uv1 = (u_textureMatrix * vec3(a_uv1, 1.0)).xy;\n      #endif\n    #endif\n  #endif\n\n  #ifdef VERTEX_COLOR\n    v_color = a_color;\n  #endif\n\n  #if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n    v_modelPosition = finalPosition.xyz;\n  #endif\n}\n",
    To = 'const float M_PI = 3.141592653589793;\nconst float c_minRoughness = 0.04;\n\n#ifdef PBR_TYPE_METALNESS\n  uniform vec4 u_baseColorFactor;\n  uniform float u_metallicFactor;\n  uniform float u_roughnessFactor;\n#endif\n\n#ifdef PBR_TYPE_SPECULAR\n  uniform vec4 u_diffuseFactor;\n  uniform vec3 u_specularFactor;\n  uniform float u_glossinessFactor;\n#endif\n\n#ifdef VERTEX_COLOR\n  in vec4 v_color;\n#endif\n\n#ifdef BASE_COLOR_MAP\n  uniform sampler2D u_baseColorSampler;\n  #if BASE_COLOR_MAP_UV == 0\n    #define vBaseColorUV v_uv\n  #else\n    #define vBaseColorUV v_uv1\n  #endif\n#endif\n\n#ifdef METALLIC_ROUGHNESS_MAP\n  uniform sampler2D u_metallicRoughnessSampler;\n  #if METALLIC_ROUGHNESS_MAP_UV == 0\n    #define vMetallicRoughnessUV v_uv\n  #else\n    #define vMetallicRoughnessUV v_uv1\n  #endif\n#endif\n\n#ifdef METALLIC_MAP\n  uniform sampler2D u_metallicSampler;\n  #if METALLIC_MAP_UV == 0\n    #define vMetallicUV v_uv\n  #else\n    #define vMetallicUV v_uv1\n  #endif\n#endif\n\n#ifdef ROUGHNESS_MAP\n  uniform sampler2D u_roughnessSampler;\n  #if ROUGHNESS_MAP_UV == 0\n    #define vRoughnessUV v_uv\n  #else\n    #define vRoughnessUV v_uv1\n  #endif\n#endif\n\n#ifdef DIFFUSE_MAP\n  uniform sampler2D u_diffuseSampler;\n  #if DIFFUSE_MAP_UV == 0\n    #define vDiffuseUV v_uv\n  #else\n    #define vDiffuseUV v_uv1\n  #endif\n#endif\n\n#ifdef SPECULAR_GLOSSINESS_MAP\n  uniform sampler2D u_specularGlossinessSampler;\n  #if SPECULAR_GLOSSINESS_MAP_UV == 0\n    #define vSpecularGlossinessUV v_uv\n  #else\n    #define vSpecularGlossinessUV v_uv1\n  #endif\n#endif\n\n#ifdef SPECULAR_MAP\n  uniform sampler2D u_specularSampler;\n  #if SPECULAR_MAP_UV == 0\n    #define vSpecularUV v_uv\n  #else\n    #define vSpecularUV v_uv1\n  #endif\n#endif\n\n#ifdef GLOSSINESS_MAP\n  uniform sampler2D u_glossinessSampler;\n  #if GLOSSINESS_MAP_UV == 0\n    #define vGlossinessUV v_uv\n  #else\n    #define vGlossinessUV v_uv1\n  #endif\n#endif\n\n#if defined(BASE_COLOR_MAP) || defined(NORMAL_MAP) || defined(EMISSIVE_MAP) || defined(METALLIC_ROUGHNESS_MAP) || defined(OCCLUSION_MAP) || defined(SPECULAR_GLOSSINESS_MAP) || defined(DIFFUSE_MAP)\n  in vec2 v_uv;\n  #ifdef USE_UV1\n    in vec2 v_uv1;\n  #endif\n#endif\n\n#if defined(LIGHT)\n  in vec3 v_normal;\n#endif\n\n#ifdef OCCLUSION_MAP\n  uniform sampler2D u_occlusionSampler;\n  #if OCCLUSION_MAP_UV == 0\n    #define vOcclusionUV v_uv\n  #else\n    #define vOcclusionUV v_uv1\n  #endif\n#endif\n\n#if defined(OCCLUSION_MAP) || defined(AO_FROM_R_CHANNEL)\n  uniform float u_occlusionStrength;\n#endif\n\n#ifdef EMISSIVE_MAP\n  uniform sampler2D u_emissiveSampler;\n  uniform vec3 u_emissiveColor;\n  #if EMISSIVE_MAP_UV == 0\n    #define vEmissiveUV v_uv\n  #else\n    #define vEmissiveUV v_uv1\n  #endif\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  uniform vec3 u_eyePosition;\n  in vec3 v_worldPosition;\n#endif\n\n#ifdef LIGHT\n  #ifdef NORMAL_MAP\n    uniform sampler2D u_normalSampler;\n    #if NORMAL_MAP_UV == 0\n      #define vNormalUV v_uv\n    #else\n      #define vNormalUV v_uv1\n    #endif\n    uniform float u_normalScale;\n    in mat3 v_TBN;\n  #endif\n  #ifdef IBL\n    uniform samplerCube u_diffuseEnvSampler;\n    uniform samplerCube u_specularEnvSampler;\n    uniform sampler2D u_brdfLUTSampler;\n    uniform float u_iblDiffuseIntensity;\n    uniform float u_iblSpecularIntensity;\n  #endif\n\n  #define PCF_SHADOW\n  #ifdef DIRECTION_SHADOW\n    #define CASCADED_COUNT 4\n    in vec4 v_shadowMapPosition[CASCADED_COUNT];\n    uniform highp sampler2DArrayShadow u_directionShadowMapSampler;\n    uniform vec4 u_cascadedEnd;\n  \n    float calculateDirectionShadow(int layer) {\n      vec3 position = v_shadowMapPosition[layer].xyz / v_shadowMapPosition[layer].w;\n      position = position * 0.5 + 0.5;\n      vec4 shadowUv = vec4(position.xy, float(layer), position.z - 0.005);\n  \n      #ifdef PCF_SHADOW\n        vec2 size = 1.0 / vec2(2048.0, 2048.0);\n        float depth = 0.0;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = texture(u_directionShadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n        return depth;\n      #else\n        float depth = texture(u_directionShadowMapSampler, shadowUv);\n        return depth;\n      #endif\n    }\n  #endif\n  \n  #ifdef POINT_SHADOW\n    const float pointLightNear = 0.1;\n    const float pointLightFar = 1000.0;\n    #if POINT_SHADOW > 0\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_0;\n    #endif\n    #if POINT_SHADOW > 1\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_1;\n    #endif\n    #if POINT_SHADOW > 2\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_2;\n    #endif\n    #if POINT_SHADOW > 3\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_3;\n    #endif\n    // https://stackoverflow.com/questions/10786951/omnidirectional-shadow-mapping-with-depth-cubemap\n    float vectorToDepthValue(vec3 vec, float n, float f) {\n      vec3 absVec = abs(vec);\n      float localZcomp = max(absVec.x, max(absVec.y, absVec.z));\n      float normZComp = (f + n) / (f - n) - (2.0 * f * n) / (f - n) / localZcomp;\n      return (normZComp + 1.0) * 0.5;\n    }\n  \n    float calculatePointShadow(samplerCubeShadow shadowMapSampler, vec3 lightToPosition) {\n      float depth = vectorToDepthValue(lightToPosition, pointLightNear, pointLightFar);\n      return texture(shadowMapSampler, vec4(lightToPosition, depth));\n    }\n  #endif\n  \n  #ifdef SPOT_SHADOW\n    in vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n    #if SPOT_SHADOW > 0\n      uniform highp sampler2DShadow u_spotShadowMapSampler_0;\n    #endif\n    #if SPOT_SHADOW > 1\n      uniform highp sampler2DShadow u_spotShadowMapSampler_1;\n    #endif\n    #if SPOT_SHADOW > 2\n      uniform highp sampler2DShadow u_spotShadowMapSampler_2;\n    #endif\n    #if SPOT_SHADOW > 3\n      uniform highp sampler2DShadow u_spotShadowMapSampler_3;\n    #endif\n  \n    float calculateSpotShadow(sampler2DShadow shadowMapSampler, vec4 spotShadowMapPosition) {\n      vec4 position = spotShadowMapPosition;\n  \n      float depth = 0.0;\n      #ifdef PCF_SHADOW\n        vec4 shadowUv = position;\n        vec2 size = 1.0 / vec2(2048.0, 2048.0) * position.w;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = textureProj(shadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n      #else\n        depth = textureProj(shadowMapSampler, position);\n      #endif\n      return depth;\n    }\n  #endif\n\n  struct LightInfo {\n    vec3 diffuseColor;\n    vec3 specularColor;\n  };\n  \n  #if DIRECTION_LIGHT_COUNT\n    struct DirectionLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform DirectionLight u_directionLights[DIRECTION_LIGHT_COUNT];\n  \n    LightInfo calculateDirectionLightInfo(DirectionLight light, vec3 v, vec3 n, float NdotV,\n        vec3 specularEnvironmentR0, vec3 specularEnvironmentR90, float roughnessSq) {\n      LightInfo info;\n  \n      vec3 l = normalize(-light.direction);\n      vec3 h = normalize(l+v); // Half vector between both l and v\n  \n      float NdotL = clamp(dot(n, l), 0.001, 1.0);\n      float NdotH = clamp(dot(n, h), 0.0, 1.0);\n      float VdotH = clamp(dot(v, h), 0.0, 1.0);\n  \n      vec3 F = specularEnvironmentR0 + (specularEnvironmentR90 - specularEnvironmentR0) * pow(clamp(1.0 - VdotH, 0.0, 1.0), 5.0);\n  \n      float attenuationL = 2.0 * NdotL / (NdotL + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotL * NdotL)));\n      float attenuationV = 2.0 * NdotV / (NdotV + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotV * NdotV)));\n      float G = attenuationL * attenuationV;\n  \n      float f = (NdotH * roughnessSq - NdotH) * NdotH + 1.0;\n      float D = roughnessSq / (M_PI * f * f);\n  \n      // Calculation of analytical lighting contribution\n      vec3 diffuse = NdotL * (1.0 - F) * light.diffuseColor;\n      vec3 specular = NdotL * F * G * D / NdotL * light.specularColor;\n  \n      #ifdef DIRECTION_SHADOW\n        if (light.shadow) {\n          int layer = 3;\n          if (gl_FragCoord.z <= u_cascadedEnd.x) {\n            layer = 0;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.y) {\n            layer = 1;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.z) {\n            layer = 2;\n          }\n          float shadow = calculateDirectionShadow(layer);\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      info.diffuseColor = light.diffuseColor * diffuse;\n      info.specularColor = light.specularColor * specular;\n      return info;\n    }\n  #endif\n  \n  #if POINT_LIGHT_COUNT\n    struct PointLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 position;\n      float distance;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform PointLight u_pointLights[POINT_LIGHT_COUNT];\n  \n    LightInfo calculatePointLightInfo(PointLight light, vec3 v, vec3 n, float NdotV,\n        vec3 specularEnvironmentR0, vec3 specularEnvironmentR90, float roughnessSq, int shadowLightIndex) {\n      LightInfo info;\n  \n      vec3 l = light.position - v_worldPosition;\n      vec3 lightToPosition = l;\n      float distance = length(l);\n      l = normalize(l);\n      vec3 h = normalize(l+v); // Half vector between both l and v\n  \n      float NdotL = clamp(dot(n, l), 0.001, 1.0);\n      float NdotH = clamp(dot(n, h), 0.0, 1.0);\n      float VdotH = clamp(dot(v, h), 0.0, 1.0);\n  \n      vec3 F = specularEnvironmentR0 + (specularEnvironmentR90 - specularEnvironmentR0) * pow(clamp(1.0 - VdotH, 0.0, 1.0), 5.0);\n  \n      float attenuationL = 2.0 * NdotL / (NdotL + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotL * NdotL)));\n      float attenuationV = 2.0 * NdotV / (NdotV + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotV * NdotV)));\n      float G = attenuationL * attenuationV;\n  \n      float f = (NdotH * roughnessSq - NdotH) * NdotH + 1.0;\n      float D = roughnessSq / (M_PI * f * f);\n  \n      // Calculation of analytical lighting contribution\n      vec3 diffuse = NdotL * (1.0 - F) * light.diffuseColor;\n      vec3 specular = NdotL * F * G * D / NdotL * light.specularColor;\n  \n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n      #ifdef POINT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if POINT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_0, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_1, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_2, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_3, -lightToPosition);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n  \n  #if SPOT_LIGHT_COUNT\n    struct SpotLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      vec3 position;\n      float distance;\n      float innerAngle;\n      float outerAngle;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform SpotLight u_spotLights[SPOT_LIGHT_COUNT];\n  \n    LightInfo calculateSpotLightInfo(SpotLight light, vec3 v, vec3 n, float NdotV,\n        vec3 specularEnvironmentR0, vec3 specularEnvironmentR90, float roughnessSq, int shadowLightIndex) {\n      LightInfo info;\n  \n      vec3 l = light.position - v_worldPosition;\n      float distance = length(l);\n      l = normalize(l);\n      vec3 h = normalize(l+v); // Half vector between both l and v\n  \n      float NdotL = clamp(dot(n, l), 0.001, 1.0);\n      float NdotH = clamp(dot(n, h), 0.0, 1.0);\n      float VdotH = clamp(dot(v, h), 0.0, 1.0);\n  \n      vec3 F = specularEnvironmentR0 + (specularEnvironmentR90 - specularEnvironmentR0) * pow(clamp(1.0 - VdotH, 0.0, 1.0), 5.0);\n  \n      float attenuationL = 2.0 * NdotL / (NdotL + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotL * NdotL)));\n      float attenuationV = 2.0 * NdotV / (NdotV + sqrt(roughnessSq + (1.0 - roughnessSq) * (NdotV * NdotV)));\n      float G = attenuationL * attenuationV;\n  \n      float f = (NdotH * roughnessSq - NdotH) * NdotH + 1.0;\n      float D = roughnessSq / (M_PI * f * f);\n  \n      // Calculation of analytical lighting contribution\n      vec3 diffuse = NdotL * (1.0 - F) * light.diffuseColor;\n      vec3 specular = NdotL * F * G * D / NdotL * light.specularColor;\n  \n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n  \n      #ifdef SPOT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if SPOT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_0, v_spotShadowMapPosition[0]);\n            }\n          #endif\n          #if SPOT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_1, v_spotShadowMapPosition[1]);\n            }\n          #endif\n          #if SPOT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_2, v_spotShadowMapPosition[2]);\n            }\n          #endif\n          #if SPOT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_3, v_spotShadowMapPosition[3]);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      float theta = dot(l, normalize(-light.direction));\n      float epsilon = light.innerAngle - light.outerAngle;\n      float intensity = clamp((theta - light.outerAngle) / epsilon, 0.0, 1.0);\n      attenuation *= intensity;\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n#endif\n\n#if defined(CLIPPLANE)\n  uniform vec4 u_clipPlane;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  in vec3 v_modelPosition;\n#endif\n\n#ifdef FOG\n  uniform vec3 u_fogColor;\n  uniform float u_fogNear;\n  uniform float u_fogFar;\n#endif\n\n#ifdef ALPHA_TEST\n  uniform float u_alphaCutoff;\n#endif\n\nconst vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nout vec4 fragColor;\n\nvoid main () {\n  #ifdef CLIPPLANE\n    float clipDistance = dot(v_modelPosition, u_clipPlane.xyz);\n    if (clipDistance >= u_clipPlane.w) {\n      discard;\n    }\n  #endif\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n  #endif\n\n  float aoFactor = 0.0;\n  #ifdef PBR_TYPE_METALNESS\n    float metallicFactor = u_metallicFactor;\n    float roughnessFactor = u_roughnessFactor;\n    #if defined(METALLIC_ROUGHNESS_MAP)\n      vec4 metallicRoughness = texture(u_metallicRoughnessSampler, vMetallicRoughnessUV);\n      metallicFactor *= metallicRoughness.b;\n      roughnessFactor *= metallicRoughness.g;\n      aoFactor = metallicRoughness.r;\n    #else\n      #ifdef METALLIC_MAP\n        metallicFactor *= texture(u_metallicSampler, vMetallicUV).r;\n      #endif\n      #ifdef ROUGHNESS_MAP\n        roughnessFactor *= texture(u_roughnessSampler, vRoughnessUV).r;\n      #endif\n    #endif\n\n    roughnessFactor = clamp(roughnessFactor, c_minRoughness, 1.0);\n    metallicFactor = clamp(metallicFactor, 0.0, 1.0);\n    float alphaRoughness = roughnessFactor * roughnessFactor;\n    float roughnessSq = alphaRoughness * alphaRoughness;\n\n    vec4 baseColor = u_baseColorFactor;\n    #if defined(BASE_COLOR_MAP)\n      vec4 baseColorSamplerColor = texture(u_baseColorSampler, vBaseColorUV);\n      baseColorSamplerColor.rgb = gammaInput(baseColorSamplerColor.rgb);\n      #if defined(BLEND) || defined(ALPHA_TEST)\n        baseColor *= baseColorSamplerColor;\n      #else\n        baseColor.rgb *= baseColorSamplerColor.rgb;\n      #endif\n    #endif\n  #else\n    vec4 baseColor = u_diffuseFactor;\n    #if defined(DIFFUSE_MAP)\n      vec4 diffuseSamplerColor = texture(u_diffuseSampler, vDiffuseUV);\n      diffuseSamplerColor.rgb = gammaInput(diffuseSamplerColor.rgb);\n      #if defined(BLEND) || defined(ALPHA_TEST)\n        baseColor *= diffuseSamplerColor;\n      #else\n        baseColor.rgb *= diffuseSamplerColor.rgb;\n      #endif\n    #endif\n  #endif\n\n  #ifdef VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n\n  #ifdef ALPHA_TEST\n    if (baseColor.a < u_alphaCutoff) {\n      discard;\n    }\n    baseColor.a = 1.0;\n  #endif\n  #ifndef BLEND\n    baseColor.a = 1.0;\n  #endif\n\n  #ifdef LIGHT\n    #ifdef PBR_TYPE_METALNESS\n      vec3 f0 = vec3(0.04);\n      vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);\n      diffuseColor *= 1.0 - metallicFactor;\n      vec3 specularColor = mix(f0, baseColor.rgb, metallicFactor);\n      float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);\n    #else\n      vec3 specularFactor = u_specularFactor;\n      float glossinessFactor = u_glossinessFactor;\n      #if defined(SPECULAR_GLOSSINESS_MAP)\n        vec4 specularGlossinessColor = texture(u_specularGlossinessSampler, vSpecularGlossinessUV);\n        specularFactor *= gammaInput(specularGlossinessColor.rgb);\n        glossinessFactor *= specularGlossinessColor.a;\n      #else\n        #ifdef SPECULAR_MAP\n          specularFactor *= gammaInput(texture(u_specularSampler, vSpecularUV).rgb);\n        #endif\n        #ifdef GLOSSINESS_MAP\n          glossinessFactor *= gammaInput(texture(u_glossinessSampler, vGlossinessUV).rgb).r;\n        #endif\n      #endif\n\n      vec3 specularColor = specularFactor;\n      // Compute reflectance.\n      float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);\n      vec3 diffuseColor = baseColor.rgb * (1.0 - reflectance);\n      float roughnessFactor = clamp(1.0 - glossinessFactor, 0.04, 1.0);\n      float alphaRoughness = roughnessFactor * roughnessFactor;\n      float roughnessSq = alphaRoughness * alphaRoughness;\n    #endif\n\n    // For typical incident reflectance range (between 4% to 100%) set the grazing reflectance to 100% for typical fresnel effect.\n    // For very low reflectance range on highly diffuse objects (below 4%), incrementally reduce grazing reflecance to 0%.\n    float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);\n    vec3 specularEnvironmentR0 = specularColor.rgb;\n    vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;\n\n    #ifdef NORMAL_MAP\n      vec3 normalSampler = (texture(u_normalSampler, vNormalUV) * 2.0 - 1.0).rgb;\n      vec3 n = normalize(normalSampler * vec3(u_normalScale, u_normalScale, 1.0));\n      n = normalize(v_TBN * n);\n    #else\n      vec3 n = normalize(v_normal);\n    #endif\n\n    if (!gl_FrontFacing) {\n      n = -n;\n    }\n\n    vec3 v = normalize(eyeSpacePosition);\n    vec3 reflection = -normalize(reflect(v, n));\n    float NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);\n\n    vec3 diffuseBase = vec3(0.0);\n    vec3 specularBase = vec3(0.0);\n\n    #if DIRECTION_LIGHT_COUNT\n      for (int i = 0; i < DIRECTION_LIGHT_COUNT; i++) {\n        DirectionLight light = u_directionLights[i];\n        LightInfo info = calculateDirectionLightInfo(light, v, n, NdotV,\n          specularEnvironmentR0, specularEnvironmentR90, roughnessSq);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n      }\n    #endif\n    \n    #if POINT_LIGHT_COUNT\n      int shadowPointLightIndex = 0;\n      for (int i = 0; i < POINT_LIGHT_COUNT; i++) {\n        PointLight light = u_pointLights[i];\n        LightInfo info = calculatePointLightInfo(light, v, n, NdotV,\n          specularEnvironmentR0, specularEnvironmentR90, roughnessSq, shadowPointLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowPointLightIndex++;\n        }\n      }\n    #endif\n    \n    #if SPOT_LIGHT_COUNT\n      int shadowLightIndex = 0;\n      for (int i = 0; i < SPOT_LIGHT_COUNT; i++) {\n        SpotLight light = u_spotLights[i];\n        LightInfo info = calculateSpotLightInfo(light, v, n, NdotV,\n          specularEnvironmentR0, specularEnvironmentR90, roughnessSq, shadowLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowLightIndex++;\n        }\n      }\n    #endif\n\n    // Calculation of analytical lighting contribution\n    vec3 diffuseContrib = diffuseBase * diffuseColor / M_PI;\n    vec3 specContrib = specularBase / (4.0 * NdotV);\n    vec3 color = diffuseContrib + specContrib;\n\n    // Calculate lighting contribution from image based lighting source (IBL)\n    #ifdef IBL\n      vec3 brdf = gammaInput(texture(u_brdfLUTSampler, vec2(NdotV, 1.0 - roughnessFactor)).rgb);\n      brdf = gammaInput(brdf);\n      vec3 diffuseLight = texture(u_diffuseEnvSampler, n).rgb;\n      diffuseLight = gammaInput(diffuseLight);\n\n      float mipCount = 9.0; // resolution of 512x512\n      float lod = (roughnessFactor * mipCount);\n      vec3 specularLight = textureLod(u_specularEnvSampler, reflection, lod).rgb;\n      specularLight = gammaInput(specularLight);\n\n      vec3 diffuse = diffuseLight * diffuseColor;\n      vec3 specular = specularLight * (specularColor * brdf.x + brdf.y);\n\n      color += (diffuse * u_iblDiffuseIntensity + specular * u_iblSpecularIntensity);\n    #endif\n  #else\n    vec3 color = baseColor.rgb;\n  #endif\n\n  #if defined(OCCLUSION_MAP) || defined(AO_FROM_R_CHANNEL)\n    #ifdef OCCLUSION_MAP\n      aoFactor = texture(u_occlusionSampler, vOcclusionUV).r;\n    #endif\n    color = mix(color, color * aoFactor, u_occlusionStrength);\n  #endif\n\n  #ifdef EMISSIVE_MAP\n    vec3 emissive = gammaInput(texture(u_emissiveSampler, vEmissiveUV).rgb) * u_emissiveColor;\n    color += emissive;\n  #endif\n\n  fragColor = vec4(color, baseColor.a);\n  #ifdef GAMMA_CORRECTION\n    // fragColor.rgb = tonemapACES(fragColor.rgb);\n    fragColor.rgb = gammaOutput(fragColor.rgb);\n  #endif\n\n  #ifdef FOG\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  #endif\n}\n',
    Eo = "#ifdef MORPH_TARGETS\n  #if MORPH_TARGETS_COUNT > 0\n    layout(location = 9) in vec3 a_position0;\n  #endif\n  #if MORPH_TARGETS_COUNT > 1\n    layout(location = 10) in vec3 a_position1;\n  #endif\n  #if MORPH_TARGETS_COUNT > 2\n    in vec3 a_position2;\n  #endif\n  #if MORPH_TARGETS_COUNT > 3\n    in vec3 a_position3;\n  #endif\n  uniform float u_weights[MORPH_TARGETS_COUNT];\n#endif\n\n#ifdef SKIN\n  layout(location = 9) in vec4 a_joint;\n  layout(location = 10) in vec4 a_weight;\n  uniform mat4 u_jointMatrix[SKIN_JOINTS_COUNT];\n#endif\n\n#ifdef INSTANCE\n  layout(location = 5) in mat4 a_instance;\n#endif\n\nlayout(location = 0) in vec3 a_position;\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  vec3 position = a_position;\n\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      position += a_position0 * u_weights[0];\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      position += a_position1 * u_weights[1];\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      position += a_position2 * u_weights[2];\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      position += a_position3 * u_weights[3];\n    #endif\n  #endif\n\n  vec4 finalPosition = vec4(position, 1.0);\n\n  #ifdef SKIN\n    mat4 skinMat =\n      a_weight.x * u_jointMatrix[int(a_joint.x)] +\n      a_weight.y * u_jointMatrix[int(a_joint.y)] +\n      a_weight.z * u_jointMatrix[int(a_joint.z)] +\n      a_weight.w * u_jointMatrix[int(a_joint.w)];\n    finalPosition = skinMat * finalPosition;\n  #endif\n\n  #ifdef INSTANCE\n    finalPosition = a_instance * finalPosition;\n  #else\n    finalPosition = u_modelMatrix * finalPosition;\n  #endif\n\n  vec4 worldPosition = finalPosition;\n  gl_Position = u_projectViewMatrix * worldPosition;\n}\n",
    Po = "void main () {\n}\n",
    Ao = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
    Co = "uniform sampler2D u_sampler;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = texture(u_sampler, v_uv);\n}",
    Io = "layout(location = 1) in vec3 a_normal;\n\n#if defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n  layout(location = 3) in vec4 a_tangent;\n  out mat3 v_TBN;\n#endif\n\n#if defined(MIX_MAP) || defined(DIFFUSE_MAP1) || defined(DIFFUSE_MAP2) || defined(DIFFUSE_MAP3) || defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n  layout(location = 2) in vec2 a_uv;\n  out vec2 v_uv;\n#endif\n\n#if defined(LIGHT)\n  uniform mat3 u_normalMatrix;\n  out vec3 v_normal;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  out vec3 v_modelPosition;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  out vec3 v_worldPosition;\n#endif\n\n#ifdef VERTEX_COLOR\n  layout(location = 4) in vec4 a_color;\n  out vec4 v_color;\n#endif\n\n#ifdef DIRECTION_SHADOW\n  #define CASCADED_COUNT 4\n  uniform mat4 u_shadowMapProjectViewMatrix_0;\n  uniform mat4 u_shadowMapProjectViewMatrix_1;\n  uniform mat4 u_shadowMapProjectViewMatrix_2;\n  uniform mat4 u_shadowMapProjectViewMatrix_3;\n  out vec4 v_shadowMapPosition[CASCADED_COUNT];\n#endif\n#ifdef SPOT_SHADOW\n  #if SPOT_SHADOW > 0\n    uniform mat4 u_spotShadowMapProjectViewMatrix_0;\n  #endif\n  #if SPOT_SHADOW > 1\n    uniform mat4 u_spotShadowMapProjectViewMatrix_1;\n  #endif\n  #if SPOT_SHADOW > 2\n    uniform mat4 u_spotShadowMapProjectViewMatrix_2;\n  #endif\n  #if SPOT_SHADOW > 3\n    uniform mat4 u_spotShadowMapProjectViewMatrix_3;\n  #endif\n  out vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n#endif\n\nlayout(location = 0) in vec3 a_position;\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  vec3 position = a_position;\n  vec4 finalPosition = vec4(position, 1.0);\n  vec4 worldPosition = u_modelMatrix * finalPosition;\n  gl_Position = u_projectViewMatrix * worldPosition;\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    v_worldPosition = worldPosition.xyz;\n  #endif\n\n  #ifdef DIRECTION_SHADOW\n    v_shadowMapPosition[0] = u_shadowMapProjectViewMatrix_0 * worldPosition;\n    v_shadowMapPosition[1] = u_shadowMapProjectViewMatrix_1 * worldPosition;\n    v_shadowMapPosition[2] = u_shadowMapProjectViewMatrix_2 * worldPosition;\n    v_shadowMapPosition[3] = u_shadowMapProjectViewMatrix_3 * worldPosition;\n  #endif\n  #ifdef SPOT_SHADOW\n    #if SPOT_SHADOW > 0\n      v_spotShadowMapPosition[0] = u_spotShadowMapProjectViewMatrix_0 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 1\n      v_spotShadowMapPosition[1] = u_spotShadowMapProjectViewMatrix_1 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 2\n      v_spotShadowMapPosition[2] = u_spotShadowMapProjectViewMatrix_2 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 3\n      v_spotShadowMapPosition[3] = u_spotShadowMapProjectViewMatrix_3 * worldPosition;\n    #endif\n  #endif\n\n  #if defined(LIGHT)\n    vec3 finalNormal = a_normal;\n    v_normal = u_normalMatrix * finalNormal;\n  #endif\n\n  #if defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n    vec4 finalTangent = a_tangent;\n    vec3 normal = normalize(finalNormal);\n    vec3 tangent = normalize(finalTangent.xyz);\n    vec3 bitangent = cross(normal, tangent) * finalTangent.w;\n    v_TBN = mat3(u_modelMatrix) * mat3(tangent, bitangent, normal);\n  #endif\n\n  #if defined(MIX_MAP) || defined(DIFFUSE_MAP1) || defined(DIFFUSE_MAP2) || defined(DIFFUSE_MAP3) || defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n    v_uv = a_uv;\n  #endif\n\n  #ifdef VERTEX_COLOR\n    v_color = a_color;\n  #endif\n\n  #if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n    v_modelPosition = finalPosition.xyz;\n  #endif\n}\n",
    Ro = '#ifdef VERTEX_COLOR\n  in vec4 v_color;\n#endif\n\n#ifdef DIFFUSE_MAP1\n  uniform sampler2D u_diffuseSampler1;\n#endif\n\n#ifdef DIFFUSE_MAP2\n  uniform sampler2D u_diffuseSampler2;\n#endif\n\n#ifdef DIFFUSE_MAP3\n  uniform sampler2D u_diffuseSampler3;\n#endif\n\n#ifdef MIX_MAP\n  uniform sampler2D u_mixSampler;\n#endif\n\n#if defined(LIGHT)\n  in vec3 v_normal;\n#endif\n\n#if defined(MIX_MAP) || defined(DIFFUSE_MAP1) || defined(DIFFUSE_MAP2) || defined(DIFFUSE_MAP3) || defined(NORMAL_MAP)\n  #if defined(MIX_MAP)\n    uniform vec2 u_textureScale;\n  #endif\n  #if defined(DIFFUSE_MAP1)\n    uniform vec2 u_textureScale1;\n  #endif\n  #if defined(DIFFUSE_MAP2)\n    uniform vec2 u_textureScale2;\n  #endif\n  #if defined(DIFFUSE_MAP3)\n    uniform vec2 u_textureScale3;\n  #endif\n  in vec2 v_uv;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  uniform vec3 u_eyePosition;\n  in vec3 v_worldPosition;\n#endif\n\n#ifdef LIGHT\n  uniform float u_shininess;\n  uniform vec3 u_specularColor;\n\n  #ifdef NORMAL_MAP\n    #if defined(NORMAL_MAP1)\n      uniform sampler2D u_normalSampler1;\n    #endif\n    #if defined(NORMAL_MAP2)\n      uniform sampler2D u_normalSampler2;\n    #endif\n    #if defined(NORMAL_MAP3)\n      uniform sampler2D u_normalSampler3;\n    #endif\n    in mat3 v_TBN;\n  #endif\n\n  #define PCF_SHADOW\n  #ifdef DIRECTION_SHADOW\n    #define CASCADED_COUNT 4\n    in vec4 v_shadowMapPosition[CASCADED_COUNT];\n    uniform highp sampler2DArrayShadow u_directionShadowMapSampler;\n    uniform vec4 u_cascadedEnd;\n  \n    float calculateDirectionShadow(int layer) {\n      vec3 position = v_shadowMapPosition[layer].xyz / v_shadowMapPosition[layer].w;\n      position = position * 0.5 + 0.5;\n      vec4 shadowUv = vec4(position.xy, float(layer), position.z - 0.005);\n  \n      #ifdef PCF_SHADOW\n        vec2 size = 1.0 / vec2(2048.0, 2048.0);\n        float depth = 0.0;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = texture(u_directionShadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n        return depth;\n      #else\n        float depth = texture(u_directionShadowMapSampler, shadowUv);\n        return depth;\n      #endif\n    }\n  #endif\n  \n  #ifdef POINT_SHADOW\n    const float pointLightNear = 0.1;\n    const float pointLightFar = 1000.0;\n    #if POINT_SHADOW > 0\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_0;\n    #endif\n    #if POINT_SHADOW > 1\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_1;\n    #endif\n    #if POINT_SHADOW > 2\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_2;\n    #endif\n    #if POINT_SHADOW > 3\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_3;\n    #endif\n    // https://stackoverflow.com/questions/10786951/omnidirectional-shadow-mapping-with-depth-cubemap\n    float vectorToDepthValue(vec3 vec, float n, float f) {\n      vec3 absVec = abs(vec);\n      float localZcomp = max(absVec.x, max(absVec.y, absVec.z));\n      float normZComp = (f + n) / (f - n) - (2.0 * f * n) / (f - n) / localZcomp;\n      return (normZComp + 1.0) * 0.5;\n    }\n  \n    float calculatePointShadow(samplerCubeShadow shadowMapSampler, vec3 lightToPosition) {\n      float depth = vectorToDepthValue(lightToPosition, pointLightNear, pointLightFar);\n      return texture(shadowMapSampler, vec4(lightToPosition, depth));\n    }\n  #endif\n  \n  #ifdef SPOT_SHADOW\n    in vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n    #if SPOT_SHADOW > 0\n      uniform highp sampler2DShadow u_spotShadowMapSampler_0;\n    #endif\n    #if SPOT_SHADOW > 1\n      uniform highp sampler2DShadow u_spotShadowMapSampler_1;\n    #endif\n    #if SPOT_SHADOW > 2\n      uniform highp sampler2DShadow u_spotShadowMapSampler_2;\n    #endif\n    #if SPOT_SHADOW > 3\n      uniform highp sampler2DShadow u_spotShadowMapSampler_3;\n    #endif\n  \n    float calculateSpotShadow(sampler2DShadow shadowMapSampler, vec4 spotShadowMapPosition) {\n      vec4 position = spotShadowMapPosition;\n  \n      float depth = 0.0;\n      #ifdef PCF_SHADOW\n        vec4 shadowUv = position;\n        vec2 size = 1.0 / vec2(2048.0, 2048.0) * position.w;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = textureProj(shadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n      #else\n        depth = textureProj(shadowMapSampler, position);\n      #endif\n      return depth;\n    }\n  #endif\n\n  struct LightInfo {\n    vec3 diffuseColor;\n    vec3 specularColor;\n  };\n  \n  #if DIRECTION_LIGHT_COUNT\n    struct DirectionLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform DirectionLight u_directionLights[DIRECTION_LIGHT_COUNT];\n  \n    LightInfo calculateDirectionLightInfo(DirectionLight light, vec3 eyeDirection, vec3 normal) {\n      LightInfo info;\n      vec3 lightDirection = normalize(-light.direction);\n      float ndl = dot(lightDirection, normal);\n      float diffuse = max(ndl, 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n  \n      #ifdef DIRECTION_SHADOW\n        if (light.shadow) {\n          int layer = 3;\n          if (gl_FragCoord.z <= u_cascadedEnd.x) {\n            layer = 0;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.y) {\n            layer = 1;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.z) {\n            layer = 2;\n          }\n          float shadow = calculateDirectionShadow(layer);\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      info.diffuseColor = light.diffuseColor * diffuse;\n      info.specularColor = light.specularColor * specular;\n      return info;\n    }\n  #endif\n  \n  #if POINT_LIGHT_COUNT\n    struct PointLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 position;\n      float distance;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform PointLight u_pointLights[POINT_LIGHT_COUNT];\n  \n    LightInfo calculatePointLightInfo(PointLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightToPosition = light.position - v_worldPosition;\n      float distance = length(lightToPosition);\n      vec3 lightDirection = normalize(lightToPosition);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n      #ifdef POINT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if POINT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_0, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_1, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_2, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_3, -lightToPosition);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n  \n  #if SPOT_LIGHT_COUNT\n    struct SpotLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      vec3 position;\n      float distance;\n      float innerAngle;\n      float outerAngle;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform SpotLight u_spotLights[SPOT_LIGHT_COUNT];\n  \n    LightInfo calculateSpotLightInfo(SpotLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightDirection = light.position - v_worldPosition;\n      float distance = length(lightDirection);\n      lightDirection = normalize(lightDirection);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n  \n      #ifdef SPOT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if SPOT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_0, v_spotShadowMapPosition[0]);\n            }\n          #endif\n          #if SPOT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_1, v_spotShadowMapPosition[1]);\n            }\n          #endif\n          #if SPOT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_2, v_spotShadowMapPosition[2]);\n            }\n          #endif\n          #if SPOT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_3, v_spotShadowMapPosition[3]);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      float theta = dot(lightDirection, normalize(-light.direction));\n      float epsilon = light.innerAngle - light.outerAngle;\n      float intensity = clamp((theta - light.outerAngle) / epsilon, 0.0, 1.0);\n      attenuation *= intensity;\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n#endif\n\n#if defined(CLIPPLANE)\n  uniform vec4 u_clipPlane;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  in vec3 v_modelPosition;\n#endif\n\n#ifdef FOG\n  uniform vec3 u_fogColor;\n  uniform float u_fogNear;\n  uniform float u_fogFar;\n#endif\n\nconst vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nuniform vec4 u_diffuseColor;\nout vec4 fragColor;\n\nvoid main () {\n  #ifdef CLIPPLANE\n    float clipDistance = dot(v_modelPosition, u_clipPlane.xyz);\n    if (clipDistance >= u_clipPlane.w) {\n      discard;\n    }\n  #endif\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n  #endif\n\n  #ifdef MIX_MAP\n    vec4 mixColor = texture(u_mixSampler, v_uv * u_textureScale);\n    vec4 baseColor = mixColor;\n    #ifdef DIFFUSE_MAP1\n      vec3 diffuseColor1 = texture(u_diffuseSampler1, v_uv * u_textureScale1).rgb;\n      diffuseColor1 = gammaInput(diffuseColor1);\n    #else\n      vec3 diffuseColor1 = vec3(1.0);\n    #endif\n    #ifdef DIFFUSE_MAP2\n      vec3 diffuseColor2 = texture(u_diffuseSampler2, v_uv * u_textureScale2).rgb;\n      diffuseColor2 = gammaInput(diffuseColor2);\n    #else\n      vec3 diffuseColor2 = vec3(1.0);\n    #endif\n    #ifdef DIFFUSE_MAP3\n      vec3 diffuseColor3 = texture(u_diffuseSampler3, v_uv * u_textureScale3).rgb;\n      diffuseColor3 = gammaInput(diffuseColor3);\n    #else\n      vec3 diffuseColor3 = vec3(1.0);\n    #endif\n    diffuseColor1 *= baseColor.r;\n    diffuseColor2 = mix(diffuseColor1, diffuseColor2, baseColor.g);\n    baseColor.rgb = mix(diffuseColor2, diffuseColor3, baseColor.b);\n  #else\n    vec4 baseColor = vec4(1.0);\n  #endif\n\n  #ifdef VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n\n  baseColor.a *= u_diffuseColor.a;\n\n  #ifdef LIGHT\n    #ifdef NORMAL_MAP\n      #if defined(NORMAL_MAP1)\n        vec3 normalColor1 = texture(u_normalSampler1, v_uv * u_textureScale1).rgb;\n      #else\n        vec3 normalColor1 = vec3(1.0);\n      #endif\n      #if defined(NORMAL_MAP2)\n        vec3 normalColor2 = texture(u_normalSampler2, v_uv * u_textureScale2).rgb;\n      #else\n        vec3 normalColor2 = vec3(1.0);\n      #endif\n      #if defined(NORMAL_MAP3)\n        vec3 normalColor3 = texture(u_normalSampler3, v_uv * u_textureScale3).rgb;\n      #else\n        vec3 normalColor3 = vec3(1.0);\n      #endif\n      normalColor1 *= mixColor.r;\n      normalColor2 = mix(normalColor1, normalColor2, mixColor.g);\n      vec3 normalColor = mix(normalColor2, normalColor3, mixColor.b);\n      vec3 normal = normalize((normalColor * 2.0 - 1.0).rgb);\n      normal = normalize(v_TBN * normal);\n    #else\n      vec3 normal = normalize(v_normal);\n    #endif\n\n    if (!gl_FrontFacing) {\n      normal = -normal;\n    }\n\n    vec3 diffuseBase = vec3(0.0);\n    vec3 specularBase = vec3(0.0);\n    vec3 eyeDirection = normalize(eyeSpacePosition);\n\n    #if DIRECTION_LIGHT_COUNT\n      for (int i = 0; i < DIRECTION_LIGHT_COUNT; i++) {\n        DirectionLight light = u_directionLights[i];\n        LightInfo info = calculateDirectionLightInfo(light, eyeDirection, normal);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n      }\n    #endif\n    \n    #if POINT_LIGHT_COUNT\n      int shadowPointLightIndex = 0;\n      for (int i = 0; i < POINT_LIGHT_COUNT; i++) {\n        PointLight light = u_pointLights[i];\n        LightInfo info = calculatePointLightInfo(light, eyeDirection, normal, shadowPointLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowPointLightIndex++;\n        }\n      }\n    #endif\n    \n    #if SPOT_LIGHT_COUNT\n      int shadowSpotLightIndex = 0;\n      for (int i = 0; i < SPOT_LIGHT_COUNT; i++) {\n        SpotLight light = u_spotLights[i];\n        LightInfo info = calculateSpotLightInfo(light, eyeDirection, normal, shadowSpotLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowSpotLightIndex++;\n        }\n      }\n    #endif\n\n    specularBase *= u_specularColor;\n    vec3 finalColor = clamp(diffuseBase * u_diffuseColor.rgb * baseColor.rgb, 0.0, 1.0);\n    finalColor += specularBase;\n    baseColor = vec4(finalColor, baseColor.a);\n  #else\n    baseColor = vec4(u_diffuseColor.rgb * baseColor.rgb, baseColor.a);\n  #endif\n  fragColor = baseColor;\n  #ifdef GAMMA_CORRECTION\n    fragColor.rgb = gammaOutput(fragColor.rgb);\n  #endif\n\n  #ifdef FOG\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  #endif\n}\n',
    Oo = "#ifdef MORPH_TARGETS\n  #if MORPH_TARGETS_COUNT > 0\n    layout(location = 9) in vec3 a_position0;\n  #endif\n  #if MORPH_TARGETS_COUNT > 1\n    layout(location = 10) in vec3 a_position1;\n  #endif\n  #if MORPH_TARGETS_COUNT > 2\n    in vec3 a_position2;\n  #endif\n  #if MORPH_TARGETS_COUNT > 3\n    in vec3 a_position3;\n  #endif\n  uniform float u_weights[MORPH_TARGETS_COUNT];\n#endif\n\n#ifdef SKIN\n  layout(location = 9) in vec4 a_joint;\n  layout(location = 10) in vec4 a_weight;\n  uniform mat4 u_jointMatrix[SKIN_JOINTS_COUNT];\n#endif\n\n#ifdef INSTANCE\n  layout(location = 5) in mat4 a_instance;\n#endif\n\nlayout(location = 0) in vec3 a_position;\n\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\n#if defined(BILLBOARD) \n  uniform mat4 u_projectMatrix;\n  uniform mat4 u_viewMatrix;\n  uniform vec3 u_scale;\n  uniform bool u_vertical;\n#endif\n\nvoid main () {\n  vec3 position = a_position;\n\n  #ifdef MORPH_TARGETS\n    #if MORPH_TARGETS_COUNT > 0\n      position += a_position0 * u_weights[0];\n    #endif\n    #if MORPH_TARGETS_COUNT > 1\n      position += a_position1 * u_weights[1];\n    #endif\n    #if MORPH_TARGETS_COUNT > 2\n      position += a_position2 * u_weights[2];\n    #endif\n    #if MORPH_TARGETS_COUNT > 3\n      position += a_position3 * u_weights[3];\n    #endif\n  #endif\n\n  vec4 finalPosition = vec4(position, 1.0);\n\n  #ifdef SKIN\n    mat4 skinMat =\n      a_weight.x * u_jointMatrix[int(a_joint.x)] +\n      a_weight.y * u_jointMatrix[int(a_joint.y)] +\n      a_weight.z * u_jointMatrix[int(a_joint.z)] +\n      a_weight.w * u_jointMatrix[int(a_joint.w)];\n    finalPosition = skinMat * finalPosition;\n  #endif\n\n  #ifdef INSTANCE\n    finalPosition = a_instance * finalPosition;\n  #else\n    finalPosition = u_modelMatrix * finalPosition;\n  #endif\n\n  vec4 worldPosition = finalPosition;\n\n  #if defined(BILLBOARD)\n    mat4 modelViewMatrix = u_viewMatrix * u_modelMatrix;\n\n    modelViewMatrix[0][0] = u_scale[0];\n    modelViewMatrix[0][1] = 0.0;\n    modelViewMatrix[0][2] = 0.0;\n\n    if (!u_vertical) {\n      modelViewMatrix[1][0] = 0.0;\n      modelViewMatrix[1][1] = u_scale[1];\n      modelViewMatrix[1][2] = 0.0;\n    }\n\n    modelViewMatrix[2][0] = 0.0;\n    modelViewMatrix[2][1] = 0.0;\n    modelViewMatrix[2][2] = u_scale[2];\n\n    gl_Position = u_projectMatrix * modelViewMatrix * vec4(a_position, 1.0);\n  #else \n    gl_Position = u_projectViewMatrix * worldPosition;\n  #endif\n}\n",
    Lo = "uniform vec4 u_color;\nout vec4 fragColor;\n\nvoid main () {\n  fragColor = u_color;\n}\n",
    No = "#if defined(DIFFUSE_MAP)\n  uniform mat3 u_textureMatrix;\n#endif\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_viewMatrix;\nuniform vec3 u_scale;\nuniform bool u_vertical;\nuniform mat4 u_projectMatrix;\nuniform bool u_fixedSize;\n\nlayout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  #if defined(DIFFUSE_MAP)\n    #ifdef FLIP_Y\n      v_uv = (u_textureMatrix * vec3(a_uv.x, 1.0 - a_uv.y, 1.0)).xy;\n    #else\n      v_uv = (u_textureMatrix * vec3(a_uv, 1.0)).xy;\n    #endif\n  #else \n    v_uv = a_uv;\n  #endif\n\n  mat4 modelViewMatrix = u_viewMatrix * u_modelMatrix;\n\n  vec3 scale = u_scale;\n  if (u_fixedSize) {\n    vec4 mvPosition = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);\n    scale *= -mvPosition.z;\n  }\n\n  // First colunm.\n  modelViewMatrix[0][0] = scale[0];\n  modelViewMatrix[0][1] = 0.0;\n  modelViewMatrix[0][2] = 0.0;\n\n  if (!u_vertical) {\n    // Second colunm.\n    modelViewMatrix[1][0] = 0.0;\n    modelViewMatrix[1][1] = scale[1];\n    modelViewMatrix[1][2] = 0.0;\n  }\n\n  // Thrid colunm.\n  modelViewMatrix[2][0] = 0.0;\n  modelViewMatrix[2][1] = 0.0;\n  modelViewMatrix[2][2] = scale[2];\n\n  gl_Position = u_projectMatrix * modelViewMatrix * vec4(a_position, 1.0);\n}\n",
    Do = "  #ifdef DIFFUSE_MAP\n    uniform sampler2D u_sampler;\n  #endif\n\nuniform vec4 u_diffuseColor;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n\n  #ifdef DIFFUSE_MAP\n    vec4 baseColor = texture(u_sampler, v_uv);\n  #else\n    vec4 baseColor = vec4(1.0);\n  #endif\n\n  fragColor = vec4(baseColor.rgb * u_diffuseColor.rgb, baseColor.a * u_diffuseColor.a);\n}\n",
    Fo = "layout(location = 0) in vec3 a_position;\n\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  gl_Position = u_projectViewMatrix * u_modelMatrix * vec4(a_position, 1.0);\n}",
    Uo = "out vec4 fragColor;\n\nvoid main () {\n  fragColor = vec4(1.0);\n}",
    Vo = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main () {\n  gl_Position = vec4(a_position, 1.0);\n  v_uv = a_uv;\n}",
    Bo = "uniform sampler2D u_sampler;\nuniform vec2 u_resolution;\nuniform vec3 u_outlineColor;\nuniform float u_outlineWidth;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n  vec2 texel = u_resolution * u_outlineWidth;\n  float tleft = texture(u_sampler, v_uv + texel * vec2(-1, -1)).r;\n  float left = texture(u_sampler, v_uv + texel * vec2(-1,  0)).r;\n  float bleft = texture(u_sampler, v_uv + texel * vec2(-1,  1)).r;\n  float top = texture(u_sampler, v_uv + texel * vec2(0, -1)).r;\n  float bottom = texture(u_sampler, v_uv + texel * vec2(0,  1)).r;\n  float tright = texture(u_sampler, v_uv + texel * vec2(1, -1)).r;\n  float right = texture(u_sampler, v_uv + texel * vec2(1,  0)).r;\n  float bright = texture(u_sampler, v_uv + texel * vec2(1,  1)).r;\n\n  float x = tleft + 2.0 * left + bleft - tright - 2.0 * right - bright;\n  float y = -tleft - 2.0 * top - tright + bleft + 2.0 * bottom + bright;\n  float gradient = length(vec2(x, y));\n\n  if (gradient == 0.0) {\n    discard;\n  } else {\n    fragColor = vec4(u_outlineColor, 1.0);\n  }\n}",
    Ho = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
    Go = "uniform sampler2D u_sampler;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = texture(u_sampler, v_uv);\n}",
    ko = "layout(location = 0) in vec3 a_position;\n\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main() {\n  gl_Position = u_projectViewMatrix * u_modelMatrix * vec4(a_position, 1.0);\n}",
    zo = "uniform vec3 u_glowColor;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = vec4(u_glowColor, 1.0);\n}",
    jo = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
    Wo = "uniform vec2 u_resolution;\nuniform vec2 u_direction;\nuniform sampler2D u_sampler;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\n// https://github.com/Jam3/glsl-fast-gaussian-blur\nvoid main() {\n  vec4 color = vec4(0.0);\n  vec2 off1 = vec2(1.3846153846) * u_direction;\n  vec2 off2 = vec2(3.2307692308) * u_direction;\n  color += texture(u_sampler, v_uv) * 0.2270270270;\n  color += texture(u_sampler, v_uv + (off1 * u_resolution)) * 0.3162162162;\n  color += texture(u_sampler, v_uv - (off1 * u_resolution)) * 0.3162162162;\n  color += texture(u_sampler, v_uv + (off2 * u_resolution)) * 0.0702702703;\n  color += texture(u_sampler, v_uv - (off2 * u_resolution)) * 0.0702702703;\n  fragColor = color;\n}",
    qo = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
    Xo = 'const vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n#define MIP_MAP_COUNT 5\n\nuniform float u_strength;\nuniform float u_radius;\nuniform sampler2D u_samplerImage;\nuniform sampler2D u_samplerBlur1;\nuniform sampler2D u_samplerBlur2;\nuniform sampler2D u_samplerBlur3;\nuniform sampler2D u_samplerBlur4;\nuniform sampler2D u_samplerBlur5;\nin vec2 v_uv;\nout vec4 fragColor;\n\nconst float c_factors[MIP_MAP_COUNT] = float[](\n  1.0, 0.8, 0.6, 0.4, 0.2\n);\nconst vec3 c_tintColors[MIP_MAP_COUNT] = vec3[](\n  vec3(1.0, 1.0, 1.0),\n  vec3(1.0, 1.0, 1.0),\n  vec3(1.0, 1.0, 1.0),\n  vec3(1.0, 1.0, 1.0),\n  vec3(1.0, 1.0, 1.0)\n);\n\nfloat lerpBloomFactor(const in float factor) {\n  float mirrorFactor = 1.2 - factor;\n  return mix(factor, mirrorFactor, u_radius);\n}\n\nvoid main () {\n  fragColor = texture(u_samplerImage, v_uv);\n  vec4 blurColor = u_strength * (\n    lerpBloomFactor(c_factors[0]) * vec4(c_tintColors[0], 1.0) * texture(u_samplerBlur1, v_uv) +\n    lerpBloomFactor(c_factors[1]) * vec4(c_tintColors[1], 1.0) * texture(u_samplerBlur2, v_uv) +\n    lerpBloomFactor(c_factors[2]) * vec4(c_tintColors[2], 1.0) * texture(u_samplerBlur3, v_uv) +\n    lerpBloomFactor(c_factors[3]) * vec4(c_tintColors[3], 1.0) * texture(u_samplerBlur4, v_uv) +\n    lerpBloomFactor(c_factors[4]) * vec4(c_tintColors[4], 1.0) * texture(u_samplerBlur5, v_uv)\n  );\n  fragColor.rgb += blurColor.rgb;\n  // fragColor.rgb = tonemapACES(fragColor.rgb);\n  fragColor.rgb = gammaOutput(fragColor.rgb);\n}',
    Yo = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
    Zo = "uniform vec2 u_resolution;\nuniform vec2 u_direction;\nuniform sampler2D u_sampler;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nfloat gaussianPdf(in float x, in float sigma) {\n  return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;\n}\n\nvoid main() {\n  float fSigma = float(KERNEL_RADIUS);\n  float weightSum = gaussianPdf(0.0, fSigma);\n  vec3 diffuseSum = texture(u_sampler, v_uv).rgb * weightSum;\n  for(int i = 1; i < KERNEL_RADIUS; i++) {\n    float x = float(i);\n    float w = gaussianPdf(x, fSigma);\n    vec2 uvOffset = u_direction * u_resolution * x;\n    vec3 sample1 = texture(u_sampler, v_uv + uvOffset).rgb;\n    vec3 sample2 = texture(u_sampler, v_uv - uvOffset).rgb;\n    diffuseSum += (sample1 + sample2) * w;\n    weightSum += 2.0 * w;\n  }\n  fragColor = vec4(diffuseSum / weightSum, 1.0);\n}",
    Ko = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
    Jo = 'const vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\nuniform sampler2D u_sampler;\nuniform float u_threshold;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nconst float c_smoothWidth = 0.01;\n\nvoid main() {\n  vec4 color = texture(u_sampler, v_uv);\n  float brightness = luminance(color.rgb);\n  float percent = smoothstep(u_threshold, u_threshold + c_smoothWidth, brightness);\n  fragColor = mix(vec4(0.0), color, percent);\n}',
    Qo = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
    $o = "uniform sampler2D u_samplerPosition;\nuniform sampler2D u_samplerNormal;\nuniform sampler2D u_samplerNormalMap;\nuniform vec2 u_windowSize;\nuniform float u_occluderBias;\nuniform float u_samplingRadius;\nuniform vec2 u_attenuation;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nfloat SamplePixels (vec3 srcPosition, vec3 srcNormal, vec2 uv) {\n  // Get the 3D position of the destination pixel\n  vec3 dstPosition = texture(u_samplerPosition, uv).xyz;\n\n  // Calculate ambient occlusion amount between these two points\n  // It is simular to diffuse lighting. Objects directly above the fragment cast\n  // the hardest shadow and objects closer to the horizon have minimal effect.\n  vec3 positionVec = dstPosition - srcPosition;\n  float intensity = max(dot(normalize(positionVec), srcNormal) - u_occluderBias, 0.0);\n\n  // Attenuate the occlusion, similar to how you attenuate a light source.\n  // The further the distance between points, the less effect AO has on the fragment.\n  float dist = length(positionVec);\n  float attenuation = 1.0 / (u_attenuation.x + (u_attenuation.y * dist));\n\n  return intensity * attenuation;\n}\n\nvoid main() {\n  // Get position and normal vector for this fragment\n  vec4 position = texture(u_samplerPosition, v_uv);\n  vec3 srcPosition = position.xyz;\n  vec3 srcNormal = texture(u_samplerNormal, v_uv).xyz;\n  vec2 randVec = normalize(texture(u_samplerNormalMap, v_uv).xy * 2.0 - 1.0);\n  float srcDepth = position.w;\n\n  // The following variable specifies how many pixels we skip over after each\n  // iteration in the ambient occlusion loop. We can't sample every pixel within\n  // the sphere of influence because that's too slow. We only need to sample\n  // some random pixels nearby to apprxomate the solution.\n  //\n  // Pixels far off in the distance will not sample as many pixels as those close up.\n  float kernelRadius = u_samplingRadius * (1.0 - srcDepth);\n\n  // Sample neighbouring pixels\n  vec2 kernel[4];\n  kernel[0] = vec2(0.0, 1.0);   // top\n  kernel[1] = vec2(1.0, 0.0);   // right\n  kernel[2] = vec2(0.0, -1.0);  // bottom\n  kernel[3] = vec2(-1.0, 0.0);  // left\n\n  const float Sin45 = 0.707107; // 45 degrees = sin(PI / 4)\n\n  // Sample from 16 pixels, which should be enough to appromixate a result. You can\n  // sample from more pixels, but it comes at the cost of performance.\n  float occlusion = 0.0;\n  for (int i = 0; i < 4; ++i)\n  {\n    vec2 k1 = reflect(kernel[i], randVec);\n    vec2 k2 = vec2(k1.x * Sin45 - k1.y * Sin45,\n             k1.x * Sin45 + k1.y * Sin45);\n    k1 *= u_windowSize;\n    k2 *= u_windowSize;\n\n    occlusion += SamplePixels(srcPosition, srcNormal, v_uv + k1 * kernelRadius);\n    occlusion += SamplePixels(srcPosition, srcNormal, v_uv + k2 * kernelRadius * 0.75);\n    occlusion += SamplePixels(srcPosition, srcNormal, v_uv + k1 * kernelRadius * 0.5);\n    occlusion += SamplePixels(srcPosition, srcNormal, v_uv + k2 * kernelRadius * 0.25);\n  }\n\n  // Average and clamp ambient occlusion\n  occlusion /= 16.0;\n  occlusion = clamp(occlusion, 0.0, 1.0);\n\n  fragColor.x = occlusion;\n}",
    ea = "layout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\n\nuniform mat4 u_projectMatrix;\nuniform mat4 u_viewModelMatrix;\nuniform mat3 u_viewNormalMatrix;\n\nout vec4 v_viewPosition;\nout vec3 v_viewNormal;\n\nvoid main () {\n  v_viewNormal = u_viewNormalMatrix * a_normal;\n  v_viewPosition = u_viewModelMatrix * vec4(a_position, 1.0);\n  gl_Position = u_projectMatrix * v_viewPosition;\n}",
    ta = "uniform float u_linearDepth;\n\nin vec4 v_viewPosition;\nin vec3 v_viewNormal;\nlayout (location = 0) out vec4 position;\nlayout (location = 1) out vec4 normal;\n\nvoid main() {\n  float linearDepth = length(v_viewPosition) / u_linearDepth;\n  position = vec4(v_viewPosition.xyz, linearDepth);\n  normal = vec4(normalize(v_viewNormal), 1.0);\n  if (!gl_FrontFacing) {\n    normal = -normal;\n  }\n}",
    na = "layout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nout vec2 v_uv;\n\nvoid main() {\n  v_uv = a_uv;\n  gl_Position = vec4(a_position, 1.0);\n}",
    ia = "uniform sampler2D u_samplerScene;\nuniform sampler2D u_samplerSSAO;\n\nin vec2 v_uv;\nout vec4 fragColor;\n\nvoid main() {\n  vec4 texColor = texture(u_samplerScene, v_uv);\n  float ao = texture(u_samplerSSAO, v_uv).r;\n  fragColor.rgb = clamp(texColor.rgb - ao, 0.0, 1.0);\n  fragColor.a = texColor.a;\n}",
    oa = "uniform vec3 u_eyePosition;\nuniform float u_pointSize;\nuniform float u_maxDistance;\nuniform mat4 u_projectViewMatrix;\n\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in float a_age;\nlayout(location = 2) in float a_life;\n\nout float v_age;\nout float v_life;\n\nvoid main() {\n  v_age = a_age;\n  v_life = a_life;\n  float sizeRatio = 1.0 - smoothstep(0.0, 1.0, distance(u_eyePosition, a_position) / u_maxDistance);\n  gl_PointSize = (u_pointSize + 20.0 * (1.0 - a_age / a_life)) * sizeRatio;\n  gl_Position = u_projectViewMatrix * vec4(a_position, 1.0);\n}",
    aa = "uniform vec3 u_pointColor;\nuniform sampler2D u_particle;\n\nin float v_age;\nin float v_life;\n\nout vec4 fragColor;\n\n// http://iquilezles.org/www/articles/palettes/palettes.htm\nvec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {\n  return a + b * cos(6.28318 * (c * t + d));\n}\n\nvoid main() {\n  float t =  v_age / v_life;\n  vec3 color = u_pointColor;\n  // color = palette(t,\n  //   vec3(0.5, 0.5, 0.5),\n  //   vec3(0.5, 0.5, 0.5),\n  //   vec3(1.0, 1.0, 1.0),\n  //   vec3(0.00, 0.10, 0.20));\n  vec4 particleColor = texture(u_particle, gl_PointCoord);\n  fragColor = vec4(color, 1.0 - t) * particleColor;\n}",
    ra = "uniform float u_timeDelta;\nuniform sampler2D u_rgNoise;\nuniform vec2 u_gravity;\nuniform vec3 u_origin;\nuniform float u_minTheta;\nuniform float u_maxTheta;\nuniform float u_minSpeed;\nuniform float u_maxSpeed;\n\nlayout(location = 0) in vec3 a_position;\nlayout(location = 1) in float a_age;\nlayout(location = 2) in float a_life;\nlayout(location = 3) in vec2 a_velocity;\n\nout vec3 v_position;\nout float v_age;\nout float v_life;\nout vec2 v_velocity;\n\nvoid main() {\n  if (a_age >= a_life) {\n    ivec2 noise_coord = ivec2(gl_VertexID % 512, gl_VertexID / 512);\n    vec2 rand = texelFetch(u_rgNoise, noise_coord, 0).rg;\n    float theta = u_minTheta + rand.r*(u_maxTheta - u_minTheta);\n    float x = cos(theta);\n    float y = sin(theta);\n\n    v_position = u_origin;\n    v_age = 0.0;\n    v_life = a_life;\n    v_velocity = vec2(x, y) * (u_minSpeed + rand.g * (u_maxSpeed - u_minSpeed));\n  } else {\n    v_position = a_position + vec3(a_velocity, 0.0) * u_timeDelta;\n    v_age = a_age + u_timeDelta;\n    v_life = a_life;\n    v_velocity = a_velocity + u_gravity * u_timeDelta;\n  }\n}",
    sa = "void main() {\n  discard;\n}",
    la = "layout(location = 0) in vec3 a_position;\n\nuniform mat4 u_viewMatrix;\nuniform mat4 u_projectMatrix;\n\nout vec3 v_modelPosition;\n\nvoid main() {\n  v_modelPosition = vec3(-a_position.x, a_position.y, a_position.z);\n  mat4 viewMatrix = u_viewMatrix;\n  viewMatrix[3].xyz = vec3(0.0, 0.0, 0.0);\n  vec4 position = u_projectMatrix * viewMatrix * vec4(a_position, 1.0);\n  gl_Position = position.xyww;\n}",
    ca = 'const vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nuniform samplerCube u_sampler;\nuniform bool u_gammaOutput;\n\nin vec3 v_modelPosition;\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = texture(u_sampler, v_modelPosition);\n  if (u_gammaOutput) {\n    fragColor.rgb = gammaOutput(fragColor.rgb);\n  }\n}',
    ua = "#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  out vec3 v_modelPosition;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  out vec3 v_worldPosition;\n#endif\n\n#ifdef VERTEX_COLOR\n  layout(location = 4) in vec4 a_color;\n  out vec4 v_color;\n#endif\n\nlayout(location = 0) in vec3 a_position;\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\n\nvoid main () {\n  vec3 position = a_position;\n  vec4 finalPosition = vec4(position, 1.0);\n  vec4 worldPosition = u_modelMatrix * finalPosition;\n  gl_Position = u_projectViewMatrix * worldPosition;\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    v_worldPosition = worldPosition.xyz;\n  #endif\n\n  #ifdef VERTEX_COLOR\n    v_color = a_color;\n  #endif\n\n  #if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n    v_modelPosition = finalPosition.xyz;\n  #endif\n}",
    da = "uniform vec4 u_wireframeColor;\n\n#ifdef VERTEX_COLOR\n  in vec4 v_color;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  uniform vec3 u_eyePosition;\n  in vec3 v_worldPosition;\n#endif\n\n#if defined(CLIPPLANE)\n  uniform vec4 u_clipPlane;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  in vec3 v_modelPosition;\n#endif\n\n#ifdef FOG\n  uniform vec3 u_fogColor;\n  uniform float u_fogNear;\n  uniform float u_fogFar;\n#endif\n\nout vec4 fragColor;\n\nvoid main () {\n  #ifdef CLIPPLANE\n    float clipDistance = dot(v_modelPosition, u_clipPlane.xyz);\n    if (clipDistance >= u_clipPlane.w) {\n      discard;\n    }\n  #endif\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n  #endif\n\n  vec4 baseColor = u_wireframeColor;\n\n  #ifdef VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n\n  fragColor = baseColor;\n\n  #ifdef FOG\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  #endif\n}\n",
    fa = "layout(location = 0) in vec3 a_position;\nlayout(location = 1) in vec3 a_normal;\n\nconst float pi = 3.14159;\n\nuniform mat4 u_projectMatrix;\nuniform mat4 u_viewMatrix;\nuniform mat4 u_modelMatrix;\n\nuniform float u_time;\n\nuniform bool u_enable[8];\nuniform float u_amplitude[8];\nuniform float u_wavelength[8];\nuniform float u_direction[8];\n\nout vec3 v_vPos;\n\n#if defined(LIGHT)\n  uniform mat3 u_normalMatrix;\n  out vec3 v_normal;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  out vec3 v_modelPosition;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  out vec3 v_worldPosition;\n#endif\n\n#ifdef VERTEX_COLOR\n  layout(location = 4) in vec4 a_color;\n  out vec4 v_color;\n#endif\n\n#ifdef DIRECTION_SHADOW\n  #define CASCADED_COUNT 4\n  uniform mat4 u_shadowMapProjectViewMatrix_0;\n  uniform mat4 u_shadowMapProjectViewMatrix_1;\n  uniform mat4 u_shadowMapProjectViewMatrix_2;\n  uniform mat4 u_shadowMapProjectViewMatrix_3;\n  out vec4 v_shadowMapPosition[CASCADED_COUNT];\n#endif\n#ifdef SPOT_SHADOW\n  #if SPOT_SHADOW > 0\n    uniform mat4 u_spotShadowMapProjectViewMatrix_0;\n  #endif\n  #if SPOT_SHADOW > 1\n    uniform mat4 u_spotShadowMapProjectViewMatrix_1;\n  #endif\n  #if SPOT_SHADOW > 2\n    uniform mat4 u_spotShadowMapProjectViewMatrix_2;\n  #endif\n  #if SPOT_SHADOW > 3\n    uniform mat4 u_spotShadowMapProjectViewMatrix_3;\n  #endif\n  out vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n#endif\n\n\nfloat wave(int i) {\n  float phase = 2.0 * pi / u_wavelength[i];\n  float d = u_direction[i] * pi / 180.0;\n  vec2 dir = vec2(cos(d), sin(d));\n  float theta = dot(dir, a_position.xy);\n  return u_amplitude[i] * sin(theta * phase + u_time * phase);\n}\n\nfloat bigWaveHeight() {\n  float height = 0.0;\n  for (int i = 0; i < 4; i++) {\n    if (u_enable[i]) {\n      height += wave(i);\n    }\n  }\n  return height;\n}\n\nvoid main(void) {\n  vec3 position = a_position;\n  vec4 finalPosition = vec4(position, 1.0);\n  vec4 worldPosition = u_modelMatrix * finalPosition;\n\n  float height = bigWaveHeight();\n  v_vPos = vec3(a_position.xy, height);\n  gl_Position = u_projectMatrix * u_viewMatrix * u_modelMatrix * vec4(a_position.xy, height, 1.0);\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    v_worldPosition = worldPosition.xyz;\n  #endif\n\n  #ifdef DIRECTION_SHADOW\n    v_shadowMapPosition[0] = u_shadowMapProjectViewMatrix_0 * worldPosition;\n    v_shadowMapPosition[1] = u_shadowMapProjectViewMatrix_1 * worldPosition;\n    v_shadowMapPosition[2] = u_shadowMapProjectViewMatrix_2 * worldPosition;\n    v_shadowMapPosition[3] = u_shadowMapProjectViewMatrix_3 * worldPosition;\n  #endif\n  #ifdef SPOT_SHADOW\n    #if SPOT_SHADOW > 0\n      v_spotShadowMapPosition[0] = u_spotShadowMapProjectViewMatrix_0 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 1\n      v_spotShadowMapPosition[1] = u_spotShadowMapProjectViewMatrix_1 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 2\n      v_spotShadowMapPosition[2] = u_spotShadowMapProjectViewMatrix_2 * worldPosition;\n    #endif\n    #if SPOT_SHADOW > 3\n      v_spotShadowMapPosition[3] = u_spotShadowMapProjectViewMatrix_3 * worldPosition;\n    #endif\n  #endif\n\n  #if defined(LIGHT)\n    vec3 finalNormal = a_normal;\n    v_normal = u_normalMatrix * finalNormal;\n  #endif\n\n  #if defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n    vec4 finalTangent = a_tangent;\n    vec3 normal = normalize(finalNormal);\n    vec3 tangent = normalize(finalTangent.xyz);\n    vec3 bitangent = cross(normal, tangent) * finalTangent.w;\n    v_TBN = mat3(u_modelMatrix) * mat3(tangent, bitangent, normal);\n  #endif\n\n  #if defined(MIX_MAP) || defined(DIFFUSE_MAP1) || defined(DIFFUSE_MAP2) || defined(DIFFUSE_MAP3) || defined(NORMAL_MAP1) || defined(NORMAL_MAP2) || defined(NORMAL_MAP3)\n    v_uv = a_uv;\n  #endif\n\n  #ifdef VERTEX_COLOR\n    v_color = a_color;\n  #endif\n\n  #if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n    v_modelPosition = finalPosition.xyz;\n  #endif\n}",
    ha = '#ifdef VERTEX_COLOR\n  in vec4 v_color;\n#endif\n\n#if defined(LIGHT)\n  in vec3 v_normal;\n#endif\n\n#if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n  uniform vec3 u_eyePosition;\n  in vec3 v_worldPosition;\n#endif\n\n#ifdef LIGHT\n  uniform vec3 u_ambientLightColor;\n  uniform vec3 u_ambientColor;\n  uniform float u_shininess;\n  uniform vec3 u_specularColor;\n\n  #define PCF_SHADOW\n  #ifdef DIRECTION_SHADOW\n    #define CASCADED_COUNT 4\n    in vec4 v_shadowMapPosition[CASCADED_COUNT];\n    uniform highp sampler2DArrayShadow u_directionShadowMapSampler;\n    uniform vec4 u_cascadedEnd;\n  \n    float calculateDirectionShadow(int layer) {\n      vec3 position = v_shadowMapPosition[layer].xyz / v_shadowMapPosition[layer].w;\n      position = position * 0.5 + 0.5;\n      vec4 shadowUv = vec4(position.xy, float(layer), position.z - 0.005);\n  \n      #ifdef PCF_SHADOW\n        vec2 size = 1.0 / vec2(2048.0, 2048.0);\n        float depth = 0.0;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = texture(u_directionShadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n        return depth;\n      #else\n        float depth = texture(u_directionShadowMapSampler, shadowUv);\n        return depth;\n      #endif\n    }\n  #endif\n  \n  #ifdef POINT_SHADOW\n    const float pointLightNear = 0.1;\n    const float pointLightFar = 1000.0;\n    #if POINT_SHADOW > 0\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_0;\n    #endif\n    #if POINT_SHADOW > 1\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_1;\n    #endif\n    #if POINT_SHADOW > 2\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_2;\n    #endif\n    #if POINT_SHADOW > 3\n      uniform highp samplerCubeShadow u_pointShadowMapSampler_3;\n    #endif\n    // https://stackoverflow.com/questions/10786951/omnidirectional-shadow-mapping-with-depth-cubemap\n    float vectorToDepthValue(vec3 vec, float n, float f) {\n      vec3 absVec = abs(vec);\n      float localZcomp = max(absVec.x, max(absVec.y, absVec.z));\n      float normZComp = (f + n) / (f - n) - (2.0 * f * n) / (f - n) / localZcomp;\n      return (normZComp + 1.0) * 0.5;\n    }\n  \n    float calculatePointShadow(samplerCubeShadow shadowMapSampler, vec3 lightToPosition) {\n      float depth = vectorToDepthValue(lightToPosition, pointLightNear, pointLightFar);\n      return texture(shadowMapSampler, vec4(lightToPosition, depth));\n    }\n  #endif\n  \n  #ifdef SPOT_SHADOW\n    in vec4 v_spotShadowMapPosition[SPOT_SHADOW];\n    #if SPOT_SHADOW > 0\n      uniform highp sampler2DShadow u_spotShadowMapSampler_0;\n    #endif\n    #if SPOT_SHADOW > 1\n      uniform highp sampler2DShadow u_spotShadowMapSampler_1;\n    #endif\n    #if SPOT_SHADOW > 2\n      uniform highp sampler2DShadow u_spotShadowMapSampler_2;\n    #endif\n    #if SPOT_SHADOW > 3\n      uniform highp sampler2DShadow u_spotShadowMapSampler_3;\n    #endif\n  \n    float calculateSpotShadow(sampler2DShadow shadowMapSampler, vec4 spotShadowMapPosition) {\n      vec4 position = spotShadowMapPosition;\n  \n      float depth = 0.0;\n      #ifdef PCF_SHADOW\n        vec4 shadowUv = position;\n        vec2 size = 1.0 / vec2(2048.0, 2048.0) * position.w;\n        for (int x = -1; x <= 1; ++x) {\n          for (int y = -1; y <= 1; ++y) {\n            shadowUv.xy = position.xy + vec2(x, y) * size;\n            float pcfDepth = textureProj(shadowMapSampler, shadowUv);\n            depth += pcfDepth;\n          }\n        }\n        depth /= 9.0;\n      #else\n        depth = textureProj(shadowMapSampler, position);\n      #endif\n      return depth;\n    }\n  #endif\n\n  struct LightInfo {\n    vec3 diffuseColor;\n    vec3 specularColor;\n  };\n  \n  #if DIRECTION_LIGHT_COUNT\n    struct DirectionLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform DirectionLight u_directionLights[DIRECTION_LIGHT_COUNT];\n  \n    LightInfo calculateDirectionLightInfo(DirectionLight light, vec3 eyeDirection, vec3 normal) {\n      LightInfo info;\n      vec3 lightDirection = normalize(-light.direction);\n      float ndl = dot(lightDirection, normal);\n      float diffuse = max(ndl, 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n  \n      #ifdef DIRECTION_SHADOW\n        if (light.shadow) {\n          int layer = 3;\n          if (gl_FragCoord.z <= u_cascadedEnd.x) {\n            layer = 0;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.y) {\n            layer = 1;\n          } else if (gl_FragCoord.z <= u_cascadedEnd.z) {\n            layer = 2;\n          }\n          float shadow = calculateDirectionShadow(layer);\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      info.diffuseColor = light.diffuseColor * diffuse;\n      info.specularColor = light.specularColor * specular;\n      return info;\n    }\n  #endif\n  \n  #if POINT_LIGHT_COUNT\n    struct PointLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 position;\n      float distance;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform PointLight u_pointLights[POINT_LIGHT_COUNT];\n  \n    LightInfo calculatePointLightInfo(PointLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightToPosition = light.position - v_worldPosition;\n      float distance = length(lightToPosition);\n      vec3 lightDirection = normalize(lightToPosition);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n      #ifdef POINT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if POINT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_0, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_1, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_2, -lightToPosition);\n            }\n          #endif\n          #if POINT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculatePointShadow(u_pointShadowMapSampler_3, -lightToPosition);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n  \n  #if SPOT_LIGHT_COUNT\n    struct SpotLight {\n      vec3 diffuseColor;\n      vec3 specularColor;\n      vec3 direction;\n      vec3 position;\n      float distance;\n      float innerAngle;\n      float outerAngle;\n      bool shadow;\n      float shadowDarkness;\n    };\n    uniform SpotLight u_spotLights[SPOT_LIGHT_COUNT];\n  \n    LightInfo calculateSpotLightInfo(SpotLight light, vec3 eyeDirection, vec3 normal, int shadowLightIndex) {\n      LightInfo info;\n      vec3 lightDirection = light.position - v_worldPosition;\n      float distance = length(lightDirection);\n      lightDirection = normalize(lightDirection);\n      float diffuse = max(dot(lightDirection, normal), 0.0);\n      vec3 reflectDirection = reflect(-lightDirection, normal);\n      float specular = 0.0;\n      if (u_shininess > 0.0) {\n        #ifdef NORMAL_MAP\n          if (dot(lightDirection, v_normal) > 0.0) {\n        #endif\n        specular = pow(max(dot(reflectDirection, eyeDirection), 0.0), u_shininess);\n        #ifdef NORMAL_MAP\n          }\n        #endif\n      }\n      float attenuation = 1.0;\n      if (light.distance > 0.0) {\n        attenuation = max(1.0 - distance / light.distance, 0.0);\n      }\n  \n      #ifdef SPOT_SHADOW\n        if (light.shadow) {\n          float shadow = 0.0;\n          #if SPOT_SHADOW > 0\n            if (shadowLightIndex == 0) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_0, v_spotShadowMapPosition[0]);\n            }\n          #endif\n          #if SPOT_SHADOW > 1\n            if (shadowLightIndex == 1) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_1, v_spotShadowMapPosition[1]);\n            }\n          #endif\n          #if SPOT_SHADOW > 2\n            if (shadowLightIndex == 2) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_2, v_spotShadowMapPosition[2]);\n            }\n          #endif\n          #if SPOT_SHADOW > 3\n            if (shadowLightIndex == 3) {\n              shadow = calculateSpotShadow(u_spotShadowMapSampler_3, v_spotShadowMapPosition[3]);\n            }\n          #endif\n          diffuse *= shadow + (1. - shadow) * (1. - light.shadowDarkness);\n          specular *= shadow;\n        }\n      #endif\n  \n      float theta = dot(lightDirection, normalize(-light.direction));\n      float epsilon = light.innerAngle - light.outerAngle;\n      float intensity = clamp((theta - light.outerAngle) / epsilon, 0.0, 1.0);\n      attenuation *= intensity;\n      info.diffuseColor = light.diffuseColor * diffuse * attenuation;\n      info.specularColor = light.specularColor * specular * attenuation;\n      return info;\n    }\n  #endif\n#endif\n\n#if defined(CLIPPLANE)\n  uniform vec4 u_clipPlane;\n#endif\n\n#if defined(CLIPPLANE) || defined(DIFFUSE_CUBE_MAP)\n  in vec3 v_modelPosition;\n#endif\n\n#ifdef FOG\n  uniform vec3 u_fogColor;\n  uniform float u_fogNear;\n  uniform float u_fogFar;\n#endif\n\nconst vec3 gammaValue = vec3(2.2);\nconst vec3 gammaInvValue = vec3(1.0 / 2.2);\n\nuniform float u_exposure;\n\nvec3 gammaInput(vec3 color) {\n  #ifdef GAMMA_INPUT\n    return pow(color, gammaValue);\n  #else\n    return color;\n  #endif\n}\n\nvec3 gammaOutput(vec3 color) {\n  return pow(color, gammaInvValue);\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/common_graphics.fs\nfloat luminance(const vec3 linear) {\n  return dot(linear, vec3(0.2126, 0.7152, 0.0722));\n}\n\n// https://github.com/google/filament/blob/b3d758f3b3fdf91b750a7561a1c729649cf4c1e8/shaders/src/tone_mapping.fs\nvec3 tonemapACES(const vec3 color) {\n  vec3 x = color * u_exposure;\n  // Narkowicz 2015, "ACES Filmic Tone Mapping Curve"\n  const float a = 2.51;\n  const float b = 0.03;\n  const float c = 2.43;\n  const float d = 0.59;\n  const float e = 0.14;\n  return (x * (a * x + b)) / (x * (c * x + d) + e);\n}\n\n\nconst float pi = 3.14159;\n\nuniform vec3 u_waterCenter;\nuniform float u_time;\n\nuniform bool u_enable[8];\nuniform float u_amplitude[8];\nuniform float u_wavelength[8];\nuniform float u_direction[8];\nuniform float u_transparency;\n\nuniform sampler2D u_diffuseSampler;\n\nin vec3 v_vPos;\nout vec4 fragColor;\n\nvec3 waveNormal() {\n  float dx = 0.0;\n  float dy = 0.0;\n  for (int i = 0; i < 8; i++) {\n    if (u_enable[i]) {\n      float phase = 2.0 * pi / u_wavelength[i];;\n      float d = u_direction[i] * pi/180.0;\n      vec2 dir = vec2(cos(d), sin(d));\n      float theta = dot(dir, v_vPos.xy);\n      float angle = theta * phase + u_time * phase;\n\n      dx += u_amplitude[i] * dir.y * phase * cos(angle);\n      dy += u_amplitude[i] * dir.x * phase * cos(angle);\n    }\n  }\n  vec3 n = vec3(-dx, -dy, 1.0);\n  return normalize(n);\n}\n\nvoid main(void) {\n\n  #if defined(LIGHT) || defined(FOG) || defined(ENV_MAP)\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n  #endif\n\n  vec4 baseColor = vec4(1.0);\n \n  #ifdef VERTEX_COLOR\n    baseColor *= v_color;\n  #endif\n\n\n  #ifdef LIGHT\n    vec3 normal = normalize(v_normal);\n\n    if (!gl_FrontFacing) {\n      normal = -normal;\n    }\n\n    vec3 diffuseBase = vec3(0.0);\n    vec3 specularBase = vec3(0.0);\n    vec3 eyeDirection = normalize(eyeSpacePosition);\n\n    #if DIRECTION_LIGHT_COUNT\n      for (int i = 0; i < DIRECTION_LIGHT_COUNT; i++) {\n        DirectionLight light = u_directionLights[i];\n        LightInfo info = calculateDirectionLightInfo(light, eyeDirection, normal);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n      }\n    #endif\n    \n    #if POINT_LIGHT_COUNT\n      int shadowPointLightIndex = 0;\n      for (int i = 0; i < POINT_LIGHT_COUNT; i++) {\n        PointLight light = u_pointLights[i];\n        LightInfo info = calculatePointLightInfo(light, eyeDirection, normal, shadowPointLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowPointLightIndex++;\n        }\n      }\n    #endif\n    \n    #if SPOT_LIGHT_COUNT\n      int shadowSpotLightIndex = 0;\n      for (int i = 0; i < SPOT_LIGHT_COUNT; i++) {\n        SpotLight light = u_spotLights[i];\n        LightInfo info = calculateSpotLightInfo(light, eyeDirection, normal, shadowSpotLightIndex);\n        diffuseBase += info.diffuseColor;\n        specularBase += info.specularColor;\n        if (light.shadow) {\n          shadowSpotLightIndex++;\n        }\n      }\n    #endif\n    \n    diffuseBase += u_ambientColor * u_ambientLightColor;\n    specularBase *= u_specularColor;\n    vec3 finalColor = clamp(diffuseBase * baseColor.rgb, 0.0, 1.0);\n    finalColor += specularBase;\n    baseColor = vec4(finalColor, baseColor.a);\n  #endif\n  fragColor = baseColor;\n  #ifdef GAMMA_CORRECTION\n    fragColor.rgb = gammaOutput(fragColor.rgb);\n  #endif\n\n  #ifdef FOG\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  #endif\n\n  vec3 normal1 = waveNormal();\n  vec3 eye = normalize(u_waterCenter - v_vPos);\n\n  vec3 reflection = reflect(eye, normal1);\n  vec2 texPoint = reflection.xy / reflection.z;\n  vec2 texCoord = texPoint * 0.5 + 0.5;\n  vec3 skyColor = texture(u_diffuseSampler, texCoord).rgb;\n\n  fragColor = vec4(skyColor.rgb * fragColor.rgb, u_transparency);\n}',
    _a = {
        5126: 1,
        35664: 2,
        35665: 3,
        35666: 4,
        35676: 16
    };
let ma = 0;
class pa {
    constructor(e) {
        pa.COUNT++, this.id = ++ma, this._attributes = null, this._uniforms = null, this._program = null, this._vertexSource = e.vertex, this._fragmentSource = e.fragment, this._transformFeedback = e.transformFeedback, this._error = null
    }
    setSource(e, t) {
        const n = this,
            i = n._gl;

        function o(e, t) {
            const o = i.createShader(e);
            if (i.shaderSource(o, t), i.compileShader(o), !i.getShaderParameter(o, i.COMPILE_STATUS) && !i.isContextLost()) {
                const a = e === i.VERTEX_SHADER ? "vertex" : "fragment",
                    r = t.split("\n").map((e, t) => `${t+1}: ${e}`).join("\n");
                return n._error = `Create ${a} shader ${i.getShaderInfoLog(o)}\n${r}`, Zn(n._error), i.deleteShader(o), null
            }
            return o
        }
        const a = o(i.VERTEX_SHADER, e);
        if (!a) return !1;
        const r = o(i.FRAGMENT_SHADER, t);
        if (!r) return !1;
        const s = i.createProgram();
        if (i.attachShader(s, a), i.attachShader(s, r), n._transformFeedback && i.transformFeedbackVaryings(s, n._transformFeedback.varyings, i[n._transformFeedback.bufferMode || "INTERLEAVED_ATTRIBS"]), i.linkProgram(s), !i.getProgramParameter(s, i.LINK_STATUS) && !i.isContextLost()) return n._error = `Link program error: ${i.getProgramInfoLog(s)}`, Zn(n._error), i.deleteProgram(s), !1;
        zn || (i.detachShader(s, a), i.detachShader(s, r)), i.deleteShader(a), i.deleteShader(r), n._program && n._gl.deleteProgram(n._program), n._error = null, n._program = s, n._vertexSource = e, n._fragmentSource = t;
        const l = {};
        n._attributes = l;
        const c = new Map;
        n._uniforms = c;
        const u = i.getProgramParameter(s, i.ACTIVE_ATTRIBUTES);
        for (let e = 0; e < u; e++) {
            const t = i.getActiveAttrib(s, e);
            if (t) {
                const e = t.name.substr(2);
                l[e] = {
                    name: e,
                    location: i.getAttribLocation(s, t.name),
                    type: t.type,
                    size: _a[t.type]
                }
            }
        }
        const d = i.getProgramParameter(s, i.ACTIVE_UNIFORMS);
        for (let e = 0; e < d; e++) {
            const t = i.getActiveUniform(s, e);
            if (t) {
                c.set(t.name, {
                    location: i.getUniformLocation(s, t.name),
                    type: t.type
                });
                const e = t.name.indexOf("["),
                    n = t.name.indexOf("."),
                    o = t.name.substr(0, e);
                if (e > 0 && n < 0) {
                    const e = i.getUniformLocation(s, o);
                    c.set(o, {
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
        this._gl.deleteProgram(this._program), this._program = null, this._gl = null, pa.COUNT--
    }
}

function ga(e, t, n) {
    return new pa({
        vertex: wo + e,
        fragment: wo + t,
        transformFeedback: n
    })
}

function va() {
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
                    i.getHasAlpha() && Yn("BasisTextureLoader: Alpha not yet implemented.");
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
                Zn(e), postMessage({
                    type: "error",
                    id: o.id,
                    error: e.message
                })
            }
        })
    }
}
pa.COUNT = 0;
const xa = {
        cTFETC1: 0,
        cTFBC1: 1,
        cTFBC4: 2,
        cTFPVRTC1_4_OPAQUE_ONLY: 3,
        cTFBC7_M6_OPAQUE_ONLY: 4,
        cTFETC2: 5,
        cTFBC3: 6,
        cTFBC5: 7
    },
    ba = {};
let wa, Ma, Sa;
ba[xa.cTFBC1] = 33776, ba[xa.cTFBC3] = 33779, ba[xa.cTFETC1] = 36196, ba[xa.cTFPVRTC1_4_OPAQUE_ONLY] = 35840;
class ya {
    loadBasisTexture(e, t, n) {
        this.basisTexture = e, this.onload = n, this.initWorkder(t)
    }
    initWorkder(e) {
        Sa = Sa || function (e) {
            if ((Sa = Sa || {}).etcSupported = !!e.getExtension("WEBGL_compressed_texture_etc1"), Sa.dxtSupported = !!e.getExtension("WEBGL_compressed_texture_s3tc"), Sa.pvrtcSupported = !!e.getExtension("WEBGL_compressed_texture_pvrtc") || !!e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), Sa.etcSupported) Sa.format = xa.cTFETC1;
            else if (Sa.dxtSupported) Sa.format = xa.cTFBC1;
            else {
                if (!Sa.pvrtcSupported) throw new Error("BasisTexture: No suitable compressed texture format found.");
                Sa.format = xa.cTFPVRTC1_4_OPAQUE_ONLY
            }
            return Sa
        }(e);
        const t = this,
            n = this.basisTexture._getBasisTranscoderPath();
        if (null == Ma) {
            const e = `${n}basis_transcoder.wasm`,
                i = si(`${n}basis_transcoder.js`),
                o = si(e, "arraybuffer");
            Promise.all([i, o]).then(([e, t]) => {
                wa = function (e, t) {
                    const n = e.toString(),
                        i = ["/* basis_transcoder.js */", "var Module;", "function createBasisModule () {", ` ${t}`, "  return Module;", "}", "", "/* worker */", n.substring(n.indexOf("{") + 1, n.lastIndexOf("}"))].join("\n");
                    return URL.createObjectURL(new Blob([i]))
                }(va, e), Ma = t
            }).then(() => {
                t.createWorker(wa)
            })
        } else this.createWorker(wa)
    }
    createWorker(e) {
        const t = new Worker(e),
            n = this;
        return t.postMessage({
            type: "init",
            config: Sa,
            transcoderBinary: Ma
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
                    Zn(t);
                    break;
                default:
                    Zn(`Unexpected message, "${t.type}"`)
            }
        }, this.worker = t, t
    }
    onTranscode(e) {
        this.onload(e, Sa)
    }
    loadBasis(e) {
        const {
            basisTexture: t
        } = this, n = t._options.url, {
            worker: i
        } = this;
        si(n, "arraybuffer").then(e => {
            i.postMessage({
                type: "transcode",
                buffer: e
            })
        })
    }
}
class Ta extends vo {
    constructor(e) {
        super(e), this._targetFormat = ""
    }
    _getBasisTranscoderPath() {
        return Ta.BASIS_TRANSCODER_PATH
    }
    _init(e) {
        const t = new ya,
            n = this;
        n._gl = e, t.loadBasisTexture(this, e, (e, t) => {
            n._mipCount = e.mipmaps.length, n._imageData = e, n._basisConfig = t, n._imageLoaded = !0
        })
    }
    bind(e, t) {
        if (super.bind(e, t), this._imageLoaded) {
            this._imageLoaded = !1;
            const t = this._imageData,
                i = (n = this._basisConfig, ba[n.format]),
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
Ta.BASIS_TRANSCODER_PATH = "/";
const Ea = 542327876,
    Pa = 131072,
    Aa = 4,
    Ca = 512,
    Ia = 1024,
    Ra = 2048,
    Oa = 4096,
    La = 8192,
    Na = 16384,
    Da = 32768;
const Fa = 827611204,
    Ua = 861165636,
    Va = 894720068,
    Ba = 31,
    Ha = 0,
    Ga = 1,
    ka = 2,
    za = 3,
    ja = 4,
    Wa = 7,
    qa = 20,
    Xa = 21,
    Ya = 28;

function Za(e, t) {
    const n = new Int32Array(e, 0, Ba);
    let i, o;
    if (n[Ha] !== Ea) return Zn("Invalid magic number in DDS header"), 0;
    if (!n[qa] & Aa) return Zn("Unsupported format, must contain a FourCC code"), 0;
    const a = n[Xa];
    switch (a) {
        case Fa:
            i = 8, o = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
            break;
        case Ua:
            i = 16, o = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
            break;
        case Va:
            i = 16, o = "SRGB8_ALPHA8" === t ? "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT" : "COMPRESSED_RGBA_S3TC_DXT5_EXT";
            break;
        default:
            return Zn("Unsupported FourCC code:", (r = a, String.fromCharCode(255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255))), null
    }
    var r;
    let s = 1;
    n[ka] & Pa && (s = Math.max(1, n[Wa]));
    const l = n[Ya],
        c = !!(l & Ca);
    if (c && (!(l & Ia) || !(l & Ra) || !(l & Oa) || !(l & La) || !(l & Na) || !(l & Da))) return Zn("Incomplete cubemap faces"), null;
    const u = c ? 6 : 1,
        d = new Array(u);
    let f = n[Ga] + 4;
    for (let t = 0; t < u; t++) {
        let a = n[ja],
            r = n[za];
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
class Ka extends vo {
    _init(e) {
        const t = this;
        t._gl = e;
        const n = t._options,
            {
                url: i
            } = n,
            o = si(i, "arraybuffer");
        return o.then(o => {
            t._image = Za(o, n.format), e.initingTextures && delete e.initingTextures[i], t._imageLoaded = !0, e.cache && e.cache.textures.trigger.fire({
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
const Ja = "FORMAT=32-bit_rle_rgbe",
    Qa = "-Y ([0-9]+) \\+X ([0-9]+)";

function $a(e) {
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
        e.match(Ja) && (l = !0);
        const t = e.match(Qa);
        if (t) {
            s = Number(t[1]), r = Number(t[2]);
            break
        }
    }
    if (!l) throw new Error("File is not run length encoded!");
    const c = new Uint8Array(r * s * 4);
    ! function (e, t, n, i, o, a) {
        const r = new Array(4);
        let s, l, c, u;
        const d = new Array(2),
            f = e.length;
        let h = n,
            _ = i,
            m = a;

        function p(t) {
            let n = 0;
            do {
                t[n++] = e[_]
            } while (++_ < f && n < t.length);
            return n
        }

        function g(t, n, i) {
            let o = 0;
            do {
                t[n + o++] = e[_]
            } while (++_ < f && o < i);
            return o
        }

        function v(e, t, n) {
            const i = 4 * n,
                o = g(e, t, i);
            if (o < i) throw new Error(`Error reading raw pixels: got ${o} bytes, expected ${i}`)
        }
        for (; m > 0;) {
            if (p(r) < r.length) throw new Error(`Error reading bytes: expected ${r.length}`);
            if (2 !== r[0] || 2 !== r[1] || 0 != (128 & r[2])) return [t[h++], t[h++], t[h++], t[h++]] = r, void v(t, h, o * m - 1);
            if (((255 & r[2]) << 8 | 255 & r[3]) !== o) throw new Error(`Wrong scanline width ${(255&r[2])<<8|255&r[3]}, expected ${o}`);
            s || (s = new Array(4 * o)), l = 0;
            for (let e = 0; e < 4; e++)
                for (c = (e + 1) * o; l < c;) {
                    if (p(d) < d.length) throw new Error("Error reading 2-byte buffer");
                    if ((255 & d[0]) > 128) {
                        if (0 === (u = (255 & d[0]) - 128) || u > c - l) throw new Error("Bad scanline data");
                        for (; u-- > 0;)[, s[l++]] = d
                    } else {
                        if (0 === (u = 255 & d[0]) || u > c - l) throw new Error("Bad scanline data");
                        if ([, s[l++]] = d, --u > 0) {
                            if (g(s, l, u) < u) throw new Error("Error reading non-run data");
                            l += u
                        }
                    }
                }
            for (let e = 0; e < o; e++) t[h + 0] = s[e], t[h + 1] = s[e + o], t[h + 2] = s[e + 2 * o], t[h + 3] = s[e + 3 * o], h += 4;
            m--
        }
    }(t, c, 0, n, r, s);
    const u = new Float32Array(r * s * 3);
    for (let e = 0, t = 0; e < c.length; e += 4, t += 3) {
        const n = c[e + 0] / 255,
            i = c[e + 1] / 255,
            o = c[e + 2] / 255,
            a = 2 ** (c[e + 3] - 128);
        u[t + 0] = n * a, u[t + 1] = i * a, u[t + 2] = o * a
    }
    return {
        width: r,
        height: s,
        data: u
    }
}
class er extends vo {
    _init(e) {
        const t = this;
        t._gl = e;
        const n = t._options,
            {
                url: i
            } = n,
            o = si(i, "arraybuffer");
        return o.then(n => {
            t._image = $a(n), e.initingTextures && delete e.initingTextures[i], t._imageLoaded = !0, e.cache && e.cache.textures.trigger.fire({
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
const tr = {
    premultiplyAlpha: "none"
};
class nr extends vo {
    _init(e) {
        const t = this;
        t._gl = e;
        const n = t._options,
            i = n.url;
        let o = null;

        function a(t, i, a, r) {
            oi && !n.notUseImageBitmap ? ai(t) ? i(null, t, null, a, r) : ti(t) ? createImageBitmap(t).then(e => {
                i(t, e, "load", a, r)
            }) : ni() ? (o = fetch(t).then(e => e.blob()).then(e => createImageBitmap(e, tr)).then(e => {
                "string" == typeof t && t.startsWith("blob:") && URL.revokeObjectURL(t), i(t, e, "load", a, r)
            }).catch(e => {
                i(t, null, "error", a, r)
            }), e.initingTextures && (e.initingTextures[t] = o)) : (o = li(t).then(e => createImageBitmap(e, 0, 0, e.width, e.height, tr)).then(e => {
                i(t, e, "load", a, r)
            }), e.initingTextures && (e.initingTextures[t] = o)) : ei(t) ? i(t, t, "load", a, r) : (o = li(t).then(e => {
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
class ir {
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
class or {
    constructor(e, t) {
        this.name = e, this.value = t
    }
    toString() {
        return `${this.name}:${this.value}`
    }
}

function ar(e) {
    return "string" == typeof e ? WebGLRenderingContext[e] : e
}
const rr = {
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

function sr(e, t) {
    let n = null;
    return (n = "string" == typeof e || ei(e) || ai(e) ? {
        url: e
    } : e) instanceof vo || rr[t] && (n.format = "SRGB8_ALPHA8"), n
}
let lr = !1;
let cr = 1;
class ur extends ro {
    constructor(e) {
        var t;
        t = ur.prototype, lr || (lr = !0, hi(t, [{
            name: "emissiveColor"
        }, {
            name: "emissiveImageUV",
            value: 0,
            dirty: "_dirty"
        }, {
            name: "emissiveImage",
            value: null,
            dirty: "_dirty",
            converter: sr
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
            converter: ar
        }, {
            name: "blendEquationAlpha",
            value: WebGLRenderingContext.FUNC_ADD,
            converter: ar
        }, {
            name: "blendFuncSrcColor",
            value: WebGLRenderingContext.SRC_ALPHA,
            converter: ar
        }, {
            name: "blendFuncSrcAlpha",
            value: WebGLRenderingContext.ONE,
            converter: ar
        }, {
            name: "blendFuncDstColor",
            value: WebGLRenderingContext.ONE_MINUS_SRC_ALPHA,
            converter: ar
        }, {
            name: "blendFuncDstAlpha",
            value: WebGLRenderingContext.ONE_MINUS_SRC_ALPHA,
            converter: ar
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
            converter: sr
        }, {
            name: "bumpImageUV",
            value: 0,
            dirty: "_dirty"
        }, {
            name: "bumpImage",
            value: null,
            dirty: "_dirty",
            converter: sr
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
                return e._dirtyTextureMatrix && (e._dirtyTextureMatrix = !1, b.fromTranslation(t, e._textureOffset), b.rotate(t, t, -e._textureRotation), b.scale(t, t, e._textureScale)), t
            }
        }])), super();
        const n = this;
        n.id = cr++, n._dirty = !0, n._key = "", n._keys = [], n._shadowMapKey = "", n._shadowMapkeys = [], n._textureScale = Lt.fromValues(1, 1), n._textureOffset = Lt.fromValues(0, 0), n._textureMatrix = b.create(), n._dirtyTextureMatrix = !1, n._emissiveColor = J.fromValues(1, 1, 1), e && (n.options = e)
    }
    _pushMapAndUVDefine(e, t) {
        const n = this._keys;
        n.push(e);
        const i = `${e}_UV`;
        n.push(new or(i, t)), 0 !== t && -1 === n.indexOf("USE_UV1") && n.push("USE_UV1")
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
            if (i._shadowMapKeys = a, i._pointSize > 0 && o.push("POINT"), i._clipPlane && o.push("CLIPPLANE"), i._flipY && o.push("FLIP_Y"), i._transparent && o.push("BLEND"), i._alphaTest && o.push("ALPHA_TEST"), i._gammaInput && o.push("GAMMA_INPUT"), e._gammaCorrection && o.push("GAMMA_CORRECTION"), n._info && n._info.weights && n._info.weights.length && (a.push("MORPH_TARGETS"), a.push(new or("MORPH_TARGETS_COUNT", n._info.weights.length))), n.skin && n.skin.joints.length > 0 && (a.push("SKIN"), a.push(new or("SKIN_JOINTS_COUNT", n.skin.joints.length))), t._color && o.push("VERTEX_COLOR"), t._instance && a.push("INSTANCE"), i._light && e.lights.count) {
                o.push("LIGHT");
                const t = e._renderer._lightDefines;
                Object.keys(t).forEach(e => {
                    o.push(t[e])
                }), i._normalImage ? i._pushMapAndUVDefine("NORMAL_MAP", i._normalImageUV) : i._bumpImage && i._pushMapAndUVDefine("BUMP_MAP", i._bumpImageUV)
            }
            i._emissiveImage && i._pushMapAndUVDefine("EMISSIVE_MAP", i._emissiveImageUV), i._receiveShadow && e._renderer._shadowLightCount > 0 && (e._renderer._shadowLightMap.DIRECTION > 0 && o.push("DIRECTION_SHADOW"), e._renderer._shadowLightMap.POINT > 0 && o.push(new or("POINT_SHADOW", e._renderer._shadowLightMap.POINT)), e._renderer._shadowLightMap.SPOT > 0 && o.push(new or("SPOT_SHADOW", e._renderer._shadowLightMap.SPOT))), e._enableFog && o.push("FOG"), a.forEach(e => {
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
class dr extends ur {
    draw(e, t, n) {}
}
let fr = !1;
class hr extends ur {
    constructor(e) {
        var t;
        t = hr.prototype, fr || (fr = !0, hi(t, [{
            name: "TYPE",
            get: () => "PBR"
        }, {
            name: "VERTEX_SHADER",
            get: () => yo
        }, {
            name: "FRAGMENT_SHADER",
            get: () => To
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
            converter: sr
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
            converter: sr
        }, {
            name: "metallicImageUV",
            value: 0,
            dirty: "_dirty"
        }, {
            name: "metallicImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "roughnessImageUV",
            value: 0,
            dirty: "_dirty"
        }, {
            name: "roughnessImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "diffuseFactor"
        }, {
            name: "diffuseImage",
            value: null,
            dirty: "_dirty",
            converter: sr
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
            converter: sr
        }, {
            name: "specularImageUV",
            value: 0,
            dirty: "_dirty"
        }, {
            name: "specularImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "glossinessImageUV",
            value: 0,
            dirty: "_dirty"
        }, {
            name: "glossinessImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "occlusionImageUV",
            value: 0,
            dirty: "_dirty"
        }, {
            name: "occlusionImage",
            value: null,
            dirty: "_dirty",
            converter: sr
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
        n.__baseColorFactor = Te.create(), n.__diffuseFactor = Te.create(), n.normalScale = 1, n.occlusionStrength = 1, n._baseColorFactor || (n._baseColorFactor = Te.fromValues(1, 1, 1, 1)), n._diffuseFactor || (n._diffuseFactor = Te.fromValues(1, 1, 1, 1)), n._specularFactor || (n._specularFactor = J.fromValues(1, 1, 1))
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
            if (Te.copy(i.__baseColorFactor, i.baseColorFactor), i.__baseColorFactor[0] **= 2.2, i.__baseColorFactor[1] **= 2.2, i.__baseColorFactor[2] **= 2.2, i.__baseColorFactor[3] *= i.transparency, e.u_baseColorFactor = i.__baseColorFactor, i.metallicRoughnessImage) {
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
            if (Te.copy(i.__diffuseFactor, i.diffuseFactor), i.__diffuseFactor[3] *= i.transparency, e.u_diffuseFactor = i.__diffuseFactor, i.specularGlossinessImage) {
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
class _r extends ur {
    constructor(e) {
        super(e);
        const t = this;
        t._program = new pa({
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
                converter: sr
            })
        }) : Object.keys(i).forEach((e, n) => {
            t.textures.push(e), o.push({
                name: e,
                value: sr(i[e]),
                converter: sr
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
        }), hi(this, o), delete e.vertex, delete e.fragment, delete e.uniforms, delete e.textures, t.options = e
    }
    draw(e, t, n) {
        const i = this,
            o = t._renderer._gl,
            a = i._program,
            r = i._uniformValues;
        a.use(o), i !== o._material && (a.bindUniforms(t._renderer._uniforms), r.u_projectViewMatrix = t.camera.projectViewMatrix, r.u_projectMatrix = t.camera.projectMatrix, r.u_viewMatrix = t.camera.viewMatrix, r.u_pointSize = i.pointSize, r.u_textureMatrix = i.textureMatrix, i.uniforms.forEach(e => {
            r[`u_${e}`] = i[e]
        }), a.bindUniforms(r), o._material = i, i.textures.forEach((e, t) => {
            o.cache.textures.get(i[e]).bind(o, t)
        })), a.bindUniform("u_modelMatrix", e.worldMatrix), a.bindUniform("u_normalMatrix", e._normalMatrix), n.draw(o)
    }
}
let mr = !1;
class pr extends ur {
    constructor(e) {
        var t;
        t = pr.prototype, mr || (mr = !0, hi(t, [{
            name: "TYPE",
            get: () => "STD"
        }, {
            name: "VERTEX_SHADER",
            get: () => Mo
        }, {
            name: "FRAGMENT_SHADER",
            get: () => So
        }, {
            name: "ambientColor"
        }, {
            name: "ambientImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "diffuseColor"
        }, {
            name: "diffuseImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "specularColor"
        }, {
            name: "specularImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "shininess",
            value: 64
        }, {
            name: "envImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "refractive",
            value: !1,
            dirty: "_dirty"
        }])), super(e);
        const n = this;
        n.__diffuseColor = Te.create(), n._ambientColor || (n._ambientColor = J.fromValues(1, 1, 1)), n._diffuseColor || (n._diffuseColor = Te.fromValues(1, 1, 1, 1)), n._specularColor || (n._specularColor = J.fromValues(1, 1, 1))
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
        if (super._bindUniforms(e, t, n), Te.copy(i.__diffuseColor, i._diffuseColor), i.__diffuseColor[3] *= i.transparency, e.u_ambientColor = i._ambientColor, i.__diffuseColor[0] **= 2.2, i.__diffuseColor[1] **= 2.2, i.__diffuseColor[2] **= 2.2, e.u_diffuseColor = i.__diffuseColor, e.u_specularColor = i.specularColor, e.u_shininess = i.shininess, i._diffuseImage) {
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
let gr = null;

function vr() {
    return gr || (gr = new pr), gr
}
let xr = !1;
class br extends ur {
    constructor(e) {
        var t;
        t = br.prototype, xr || (xr = !0, hi(t, [{
            name: "TYPE",
            get: () => "BILLBOARD"
        }, {
            name: "VERTEX_SHADER",
            get: () => No
        }, {
            name: "FRAGMENT_SHADER",
            get: () => Do
        }, {
            name: "diffuseColor"
        }, {
            name: "diffuseImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "vertical",
            value: !1
        }, {
            name: "fixedSize",
            value: !1
        }])), super(e);
        const n = this;
        n.__diffuseColor = Te.create(), n._diffuseColor || (n._diffuseColor = Te.fromValues(1, 1, 1, 1))
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
        if (super._bindUniforms(e, t, n), Te.copy(i.__diffuseColor, i.diffuseColor), i.__diffuseColor[3] *= i.transparency, e.u_diffuseColor = i.__diffuseColor, e.u_vertical = i.vertical, e.u_fixedSize = i.fixedSize, i._diffuseImage) {
            const n = e._nextSamplerId++;
            t.cache.textures.get(i._diffuseImage, !0).bind(t, n), e.u_sampler = n
        }
    }
}
let wr = null;
let Mr = !1;
class Sr extends ur {
    constructor(e) {
        var t;
        t = Sr.prototype, Mr || (Mr = !0, hi(t, [{
            name: "TYPE",
            get: () => "Terrain"
        }, {
            name: "VERTEX_SHADER",
            get: () => Io
        }, {
            name: "FRAGMENT_SHADER",
            get: () => Ro
        }, {
            name: "diffuseColor"
        }, {
            name: "mixImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "diffuseImage1",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "diffuseImage2",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "diffuseImage3",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "normalImage1",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "normalImage2",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "normalImage3",
            value: null,
            dirty: "_dirty",
            converter: sr
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
        n.__diffuseColor = Te.create(), n._textureScale1 || (n._textureScale1 = Lt.fromValues(1, 1)), n._textureScale2 || (n._textureScale2 = Lt.fromValues(1, 1)), n._textureScale3 || (n._textureScale3 = Lt.fromValues(1, 1)), n._diffuseColor || (n._diffuseColor = Te.fromValues(1, 1, 1, 1)), n._specularColor || (n._specularColor = J.fromValues(1, 1, 1))
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
        if (super._bindUniforms(e, t, n), Te.copy(i.__diffuseColor, i.diffuseColor), i.__diffuseColor[3] *= i.transparency, e.u_textureScale = i.textureScale, e.u_textureScale1 = i.textureScale1, e.u_textureScale2 = i.textureScale2, e.u_textureScale3 = i.textureScale3, e.u_diffuseColor = i.__diffuseColor, e.u_specularColor = i.specularColor, e.u_shininess = i.shininess, i.mixImage) {
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
let yr = !1;
class Tr extends ur {
    constructor(e) {
        var t;
        t = Tr.prototype, yr || (yr = !0, hi(t, [{
            name: "TYPE",
            get: () => "WATER"
        }, {
            name: "VERTEX_SHADER",
            get: () => fa
        }, {
            name: "FRAGMENT_SHADER",
            get: () => ha
        }, {
            name: "diffuseImage",
            value: null,
            dirty: "_dirty",
            converter: sr
        }, {
            name: "waterCenter"
        }])), super(e);
        const n = this;
        n._waterCenter || (n._waterCenter = J.fromValues(0, 0, 0))
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
let Er = !1;
class Pr extends ur {
    constructor(e) {
        var t;
        t = Pr.prototype, Er || (Er = !0, hi(t, [{
            name: "TYPE",
            get: () => "Wireframe"
        }, {
            name: "VERTEX_SHADER",
            get: () => ua
        }, {
            name: "FRAGMENT_SHADER",
            get: () => da
        }, {
            name: "wireframeColor"
        }])), super(e), this.__wireframeColor = Te.create(), this._wireframeColor = Te.fromValues(69 / 255, 132 / 255, 206 / 255, 1)
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
        super._bindUniforms(e, t, n), Te.copy(this.__wireframeColor, this.wireframeColor), this.__wireframeColor[3] *= this.transparency, e.u_wireframeColor = this.__wireframeColor
    }
}
let Ar, Cr, Ir, Rr = 1,
    Or = !1;
class Lr extends ro {
    constructor(e) {
        var t;
        t = Lr.prototype, Or || (Or = !0, Ar = I.create(), Cr = J.create(), Ir = Te.create(), hi(t, [{
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
                    c = Math.cos(o),
                    u = Math.sin(a),
                    d = Math.cos(a);
                n[0] = r * c * d - s * l * u, n[1] = s * l * d + r * c * u, n[2] = s * c * u - r * l * d, n[3] = s * c * d + r * l * u, this._makeWorldMatrixDirty()
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
                if (e instanceof ur) return e;
                const {
                    TYPE: t
                } = e;
                switch (delete e.TYPE, t) {
                    case "DRAW":
                        return new dr(e);
                    case "PBR":
                        return new hr(e);
                    case "SHADER":
                        return new _r(e);
                    case "TERRAIN":
                        return new Sr(e);
                    case "WIREFRAME":
                        return new Pr(e);
                    case "WATER":
                        return new Tr(e);
                    case "BILLBOARD":
                        return new br(e);
                    default:
                        return new pr(e)
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
                        const e = new Ei;
                        t.boundingBox = e, t.primitives.forEach(t => {
                            const {
                                boundingBox: n
                            } = t.vao;
                            e.min[0] = Math.min(e.min[0], n.min[0]), e.min[1] = Math.min(e.min[1], n.min[1]), e.min[2] = Math.min(e.min[2], n.min[2]), e.max[0] = Math.max(e.max[0], n.max[0]), e.max[1] = Math.max(e.max[1], n.max[1]), e.max[2] = Math.max(e.max[2], n.max[2])
                        })
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
                    return e._dirtyWorldMatrix && (e._dirtyWorldMatrix = !1, t || (t = I.create(), e._worldMatrix = t), I.multiply(t, e.parent.worldMatrix, e.modelMatrix), b.normalFromMat4(e._normalMatrix, t)), t
                }
                return e.modelMatrix
            },
            callback(e, t) {
                const n = this;
                if (n.parent) {
                    const e = n._modelMatrix;
                    I.invert(e, n.parent.worldMatrix), I.multiply(e, e, t), b.normalFromMat4(n._normalMatrix, t)
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
                e && e._children.splice(e._children.indexOf(n), 1), t ? (t._children.push(n), n._visible = t._visible) : n._worldMatrix = null, n._makeWorldMatrixDirty(), t && !t._childrenBoundingBox && (t._childrenBoundingBox = new Ei), t && (t._dirtyChildrenBoundingBox = !0)
            }
        }, {
            name: "glow",
            value: !1
        }, {
            name: "bloom",
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
                e !== t && (this._vao = ao(t))
            }
        }, {
            name: "vao",
            value: null,
            dirty: "_dirtyBoundingBox",
            converter: e => e instanceof ki ? e : new ki(e),
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
                    }), n ? (t.transform(e.worldMatrix, n), e._childrenBoundingBox && t.union(e._childrenBoundingBox)) : e._childrenBoundingBox && t.reset(e._childrenBoundingBox.min, e._childrenBoundingBox.max), e._dirtyChildrenBoundingBox = !1
                }
                return t
            }
        }])), super();
        const n = this;
        n.id = Rr++, n._name = null, n._modelMatrix = I.create(), n._worldMatrix = null, n._normalMatrix = b.create(), n._children = [], n._position = J.create(), n._scale = J.fromValues(1, 1, 1), n._fixedSize = 5, n._rotation = J.create(), n._quaternion = ot.create(), n._type = null, n._dirtyMatrix = !1, n._dirtyWorldMatrix = !1, n._dirtyPositionScaleRotation = !1, n._lods = null, n._boundingBox = new Ei, n._childrenBoundingBox = null, n._dirtyBoundingBox = !0, n._dirtyChildrenBoundingBox = !0, n._clientMap = new Map, e && (n.options = e)
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
        return this.position = J.fromValues(e, t, n), this
    }
    setScale(e, t, n) {
        return this.scale = J.fromValues(e, t, n), this
    }
    setRotation(e, t, n) {
        return this.rotation = J.fromValues(e, t, n), this
    }
    clone(e = {}) {
        const {
            parent: t,
            cloneMesh: n
        } = e, i = this, o = new Lr;
        if (o.position = J.clone(i.position), o.scale = J.clone(i.scale), o.rotation = J.clone(i.rotation), o.parent = t || i.parent, i.material && (o.material = i.material), i.mesh)
            if (n) {
                const e = {};
                e.name = i.mesh.name, e.boundingBox = i.mesh.boundingBox, e.primitives = i.mesh.primitives.map(e => {
                    return {
                        vao: e.vao,
                        material: new hr({
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
        }), o.outline = i.outline, o.glow = i.glow, o.bloom = i.bloom, o.visible = i.visible, o.selectable = i.selectable, o.type = i.type, i.client.forEach((e, t) => {
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
        return I.fromRotationTranslationScale(e, this._quaternion, this._position, this._scale), b.normalFromMat4(this._normalMatrix, this.worldMatrix), e
    }
    _refreshPositionScaleRotation() {
        const e = this._position,
            t = this._scale,
            n = this._quaternion,
            i = this._modelMatrix;
        this._dirtyPositionScaleRotation = !1, I.getTranslation(e, i), I.getScaling(t, i);
        const o = 1 / t[0],
            a = 1 / t[1],
            r = 1 / t[2];
        Ar[0] = i[0] * o, Ar[1] = i[1] * o, Ar[2] = i[2] * o, Ar[4] = i[4] * a, Ar[5] = i[5] * a, Ar[6] = i[6] * a, Ar[8] = i[8] * r, Ar[9] = i[9] * r, Ar[10] = i[10] * r, I.getRotation(n, Ar), this._refreshRotation()
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
            i = J.distance(e, t._boundingBox.boundingSphere.center);
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
        const t = new Lr;
        return t.material = new pr({
            castShadow: !1
        }), t.vao = function () {
            const t = e.boundingBox._points;
            return new ki({
                buffers: {
                    index: [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7],
                    position: new Float32Array([t[0][0], t[0][1], t[0][2], t[1][0], t[1][1], t[1][2], t[2][0], t[2][1], t[2][2], t[3][0], t[3][1], t[3][2], t[4][0], t[4][1], t[4][2], t[5][0], t[5][1], t[5][2], t[6][0], t[6][1], t[6][2], t[7][0], t[7][1], t[7][2], t[0][0], t[0][1], t[0][2], t[4][0], t[4][1], t[4][2], t[5][0], t[5][1], t[5][2], t[1][0], t[1][1], t[1][2], t[3][0], t[3][1], t[3][2], t[7][0], t[7][1], t[7][2], t[6][0], t[6][1], t[6][2], t[2][0], t[2][1], t[2][2], t[1][0], t[1][1], t[1][2], t[2][0], t[2][1], t[2][2], t[6][0], t[6][1], t[6][2], t[5][0], t[5][1], t[5][2], t[0][0], t[0][1], t[0][2], t[3][0], t[3][1], t[3][2], t[7][0], t[7][1], t[7][2], t[4][0], t[4][1], t[4][2]])
                },
                mode: "LINES"
            })
        }(), t
    }
    toWireframe() {
        function e(e) {
            let {
                index: t
            } = e._buffers;
            t = t.data || t;
            const n = [];
            for (let e = 0; e < t.length; e += 3) n.push(t[e], t[e + 1], t[e + 1], t[e + 2], t[e + 2], t[e]);
            return new ki({
                buffers: {
                    position: e._buffers.position,
                    index: n
                },
                mode: "LINES"
            })
        }
        const t = this,
            n = new Lr,
            i = new Pr;
        if (t.mesh) {
            const o = t.mesh.primitives.map(t => {
                return {
                    vao: e(t.vao),
                    material: i
                }
            });
            n.mesh = {
                primitives: o
            }
        } else t.vao && (n.material = i, n.vao = e(t.vao));
        return n.parent = t, n
    }
    addInstance(e) {
        let t = this._instances;
        t || (this.type && (this._vao = ao(this.type, !1)), t = [], this._instances = t), t.push(e), this._instancesDirty || (this._instancesDirty = !0)
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
        I.invert(Ar, this.worldMatrix), J.transformMat4(Cr, e, Ar), Te.set(Ir, t[0], t[1], t[2], 0), Te.transformMat4(Ir, Ir, Ar), J.normalize(Ir, Ir);
        let n = null;
        return this.mesh ? this.mesh.primitives.forEach(e => {
            const t = e.vao.intersect(Cr, Ir);
            t && (n ? t.t < n.t && (n = t) : n = t)
        }) : this.vao && (n = this.vao.intersect(Cr, Ir)), n ? (J.transformMat4(n.position, n.position, this.worldMatrix), {
            position: n.position,
            distance: J.distance(e, n.position),
            data: this
        }) : null
    }
    fixSize(e) {
        if (this.visible) {
            let t = J.create(),
                n = J.create();
            t = I.getTranslation(t, this.worldMatrix), n = I.getTranslation(n, e.worldMatrix);
            let i = J.distance(t, n) / this._fixedSize;
            0 === i && (i = 1e-5), this.setScale(i, i, i)
        }
    }
}
class Nr extends Lr {
    constructor() {
        super(), this.type = "cube"
    }
}
class Dr extends Lr {
    constructor() {
        super(), this.type = "sphere"
    }
}
class Fr extends Lr {
    constructor() {
        super(), this.type = "torus"
    }
}
let Ur = null;
class Vr extends Lr {
    constructor(e) {
        var t;
        super(e), this.mode = "axis", this.visible = !1, this.size = e.size || 1.5, this.scene = e.scene, this.vao = (t = this.size, Ur || (Ur = new ki({
            buffers: {
                color: new Float32Array([1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1]),
                position: new Float32Array([t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0])
            },
            mode: "LINES"
        })), Ur), this.material = new pr({
            castShadow: !1,
            light: !1
        })
    }
    fixAllSize(e) {
        this.fixSize(e), this.children && this.children.forEach(t => {
            t.fixSize(e)
        })
    }
    setSize(e) {
        this.vao._buffers.position[0] = e, this.vao._buffers.position[7] = e, this.vao._buffers.position[14] = e
    }
}
let Br = !1;
class Hr extends ro {
    constructor() {
        var e;
        e = Hr.prototype, Br || (Br = !0, hi(e, [{
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
let Gr = null;
class kr extends Lr {
    constructor(e) {
        super(e), this.vao = (Gr || (Gr = new ki({
            buffers: {
                position: new Float32Array([.5, .5, 0, -.5, .5, 0, -.5, -.5, 0, -.5, -.5, 0, .5, -.5, 0, .5, .5, 0]),
                uv: new Float32Array([1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1])
            }
        })), Gr)
    }
}
let zr = null;
class jr extends Lr {
    constructor(e) {
        super(), this.mode = "BoxHelper", this.vao = function (e) {
            if (e) {
                const t = e.boundingBox._points;
                zr = new ki({
                    buffers: {
                        index: [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7],
                        position: new Float32Array([t[0][0], t[0][1], t[0][2], t[1][0], t[1][1], t[1][2], t[2][0], t[2][1], t[2][2], t[3][0], t[3][1], t[3][2], t[4][0], t[4][1], t[4][2], t[5][0], t[5][1], t[5][2], t[6][0], t[6][1], t[6][2], t[7][0], t[7][1], t[7][2], t[0][0], t[0][1], t[0][2], t[4][0], t[4][1], t[4][2], t[5][0], t[5][1], t[5][2], t[1][0], t[1][1], t[1][2], t[3][0], t[3][1], t[3][2], t[7][0], t[7][1], t[7][2], t[6][0], t[6][1], t[6][2], t[2][0], t[2][1], t[2][2], t[1][0], t[1][1], t[1][2], t[2][0], t[2][1], t[2][2], t[6][0], t[6][1], t[6][2], t[5][0], t[5][1], t[5][2], t[0][0], t[0][1], t[0][2], t[3][0], t[3][1], t[3][2], t[7][0], t[7][1], t[7][2], t[4][0], t[4][1], t[4][2]])
                    },
                    mode: "LINES"
                })
            }
            return zr
        }(e), this.bloom = !0, this.material = new pr({
            castShadow: !1
        })
    }
}
let Wr = !1;
class qr extends ro {
    constructor() {
        var e;
        e = qr.prototype, Wr || (Wr = !0, hi(e, [{
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
            (n = t.indexOf(i)) < 0 && !(i instanceof kr && e.selectable) && t.push(i)
        }) : (n = t.indexOf(e)) < 0 && !(e instanceof kr) && e.selectable && t.push(e), this.fire({
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
const Xr = {
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
            c = a;
        return 0 === e ? t : 1 === (s /= i) ? t + n : (c || (c = .3 * i), !l || l < Math.abs(n) ? (l = n, r = c / 4) : r = c / (2 * Math.PI) * Math.asin(n / l), -l * 2 ** (10 * (s -= 1)) * Math.sin((s * i - r) * (2 * Math.PI) / c) + t)
    },
    elasticOut(e, t, n, i, o, a) {
        let r, s = e,
            l = o,
            c = a;
        return 0 === s ? t : 1 === (s /= i) ? t + n : (c || (c = .3 * i), !l || l < Math.abs(n) ? (l = n, r = c / 4) : r = c / (2 * Math.PI) * Math.asin(n / l), l * 2 ** (-10 * s) * Math.sin((s * i - r) * (2 * Math.PI) / c) + n + t)
    },
    elasticBoth(e, t, n, i, o, a) {
        let r, s = e,
            l = o,
            c = a;
        return 0 === e ? t : 2 === (s /= i / 2) ? t + n : (c || (c = i * (.3 * 1.5)), !l || l < Math.abs(n) ? (l = n, r = c / 4) : r = c / (2 * Math.ppI) * Math.asin(n / l), s < 1 ? l * 2 ** (10 * (s -= 1)) * Math.sin((s * i - r) * (2 * Math.PI) / c) * -.5 + t : l * 2 ** (-10 * (s -= 1)) * Math.sin((s * i - r) * (2 * Math.PI) / c) * .5 + n + t)
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
    bounceIn: (e, t, n, i) => n - Xr.bounceOut(i - e, 0, n, i) + t,
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
    bounceBoth: (e, t, n, i) => e < i / 2 ? .5 * Xr.bounceIn(2 * e, 0, n, i) + t : .5 * Xr.bounceOut(2 * e - i, 0, n, i) + .5 * n + t
};
let Yr = {},
    Zr = 1,
    Kr = !1,
    Jr = 0;

function Qr(e, t) {
    e.started || (e.started = !0, e.onPlay && e.onPlay());
    let n = t;
    e.filter && (n = e.filter(n)), e.onUpdate && e.onUpdate(n)
}

function $r(e) {
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

function es(e, t) {
    return Yr[e.id] && (t && Qr(e, e.to), e.onStop && e.onStop(), e.time = 0, e.total = 0, e.start = null, e.count = 0, e.started = !1, e.stopped = !1, e.paused = !1, e.pausedTime = null, e.pausedTotal = 0, delete Yr[e.id]), e
}

function ts(e) {
    Object.keys(Yr).forEach(t => {
        const n = Yr[t];
        if (n)
            if (null == n.start && (n.lastTime = e, n.start = e), n.paused) n.pausedTime || (n.pausedTime = e);
            else {
                if (n.timePerFrame > 0) {
                    if (n.frameTime += e - n.lastTime, n.lastTime = e, n.frameTime < n.timePerFrame) return void(n.paused || Kr || (Kr = !0));
                    n.frameTime %= n.timePerFrame
                }
                if (n.pausedTime && (n.pausedTotal += e - n.pausedTime, n.pausedTime = null), n.total = e - n.start - n.pausedTotal, n.total > n.delay) {
                    n.time = n.total - n.delay;
                    let e = !1;
                    if (n.time >= n.dur && (n.time = n.dur, n.total >= n.finish && (e = !0)), n.stopped || Qr(n, function (e, t) {
                            const {
                                type: n,
                                delta: i,
                                from: o,
                                time: a,
                                dur: r
                            } = e;
                            let s = Xr[e.easing || "easeNone"];
                            s || (s = Xr.easeNone);
                            let l = t;
                            return "number" === n ? l = s(a, o, i, r) : "point" === n ? 2 === o.length ? l = [s(a, o[0], i[0], r), s(a, o[1], i[1], r)] : 3 === o.length && (l = [s(a, o[0], i[0], r), s(a, o[1], i[1], r), s(a, o[2], i[2], r)]) : "rect" === n ? l = {
                                x: s(a, o.x, i.x, r),
                                y: s(a, o.y, i.y, r),
                                w: s(a, o.w, i.w, r),
                                h: s(a, o.h, i.h, r)
                            } : "color" === n ? l = [s(a, o[0], i[0], r), s(a, o[1], i[1], r), s(a, o[2], i[2], r), s(a, o[3], i[3], r)] : "set" === n ? e.time && (l = e.to) : "group_set" === n && (l = e.to[e.groupIndex]), e.current = l, l
                        }(n)), n.stopped = e, n.total >= n.finish)
                        if (n.count++, n.count >= n.repeat) es(n, !1), n.onDone && n.onDone();
                        else if (n.time = 0, n.total = 0, n.start = null, n.stopped = !1, n.reverse) {
                        const {
                            from: e
                        } = n;
                        n.from = n.to, n.to = e, $r(n)
                    }
                }
                n.paused || Kr || (Kr = !0)
            }
    })
}

function ns(e) {
    Jr = requestAnimationFrame(ns), Kr && (Kr = !1, ts(e))
}
let is, os = !1;
class as {
    constructor(e) {
        os || (os = !0, requestAnimationFrame(ns));
        const t = this;
        t.type = null == e.type ? "number" : e.type, t.delay = null == e.delay ? 0 : e.delay, t.dur = null == e.dur ? 1e3 : e.dur, t.interval = null == e.interval ? 0 : e.interval, null == e.finish ? t.finish = t.delay + t.dur + t.interval : (t.finish = e.finish, t.interval = t.finish - t.delay - t.dur), t.repeat = null == e.repeat ? 1 : e.repeat, t.reverse = null == e.reverse || e.reverse, t.easing = null == e.easing ? "easeNone" : e.easing, t.onUpdate = e.onUpdate, t.onDone = e.onDone, t.onStop = e.onStop, t.onPlay = e.onPlay, t.filter = e.filter, t.from = e.from || 0, t.to = null == e.to ? 1 : e.to;
        const n = e.fps || as.fps;
        t.timePerFrame = n > 0 ? 1e3 / n : 0, t.frameTime = 0, t.lastTime = 0, t.start = null, t.time = 0, t.total = 0, t.count = 0, t.started = !1, t.stopped = !1, t.paused = !1, t.pausedTime = null, t.pausedTotal = 0, t.id = Zr++
    }
    play() {
        return Yr[(e = this).id] || (Kr = !0, Yr[e.id] = e, $r(e)), e.resume(), e;
        var e
    }
    stop(e) {
        return es(this, e)
    }
    pause() {
        this.stopped || (this.paused = !0)
    }
    resume() {
        this.paused && (this.paused = !1, Kr = !0)
    }
    isPaused() {
        return this.paused
    }
    clone() {
        return new as(this)
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
        Jr && (cancelAnimationFrame(Jr), Jr = 0)
    }
    static stopAllAnimates(e) {
        Object.keys(Yr).forEach(t => {
            const n = Yr[t];
            n && n.stop(e)
        }), Yr = {}
    }
    static pauseAllAnimates() {
        Object.keys(Yr).forEach(e => {
            const t = Yr[e];
            t && t.pause()
        })
    }
    static resumeAllAnimates() {
        Object.keys(Yr).forEach(e => {
            const t = Yr[e];
            t && t.resume()
        })
    }
}

function rs(e) {
    const t = e.touches[0],
        n = e.touches[1],
        i = t.clientX - n.clientX,
        o = t.clientY - n.clientY;
    return Math.sqrt(i * i + o * o)
}
as.fps = 0;
let ss = !1;
class ls extends ro {
    constructor(e) {
        var t;
        t = ls.prototype, ss || (ss = !0, is = J.create(), hi(t, [{
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
                return e._viewDirty && (I.identity(n), I.translate(n, n, e._target), I.rotateY(n, n, e._hRotation), I.rotateX(n, n, e._vRotation), J.set(is, 0, 0, e._distance), J.transformMat4(i, is, n), I.lookAt(t, i, e._target, e._up), I.invert(e._worldMatrix, t), e._viewDirty = !1, I.mul(e.projectViewMatrix, e.projectMatrix, e.viewMatrix), e._frustum.fromCamera(e), e._viewDirty = !1), t
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
                return e._projectDirty && (I.perspective(t, e.__fovy, e._aspect, e._near, e._far), e._projectDirty = !1, I.mul(e.projectViewMatrix, e.projectMatrix, e.viewMatrix), e._frustum.fromCamera(e), e._projectDirty = !1), t
            }
        }, {
            name: "projectViewMatrix",
            noSet: !0,
            get() {
                const e = this,
                    t = e._projectViewMatrix;
                return (e._projectDirty || e._viewDirty) && (I.mul(t, e.projectMatrix, e.viewMatrix), e._frustum.fromCamera(e), e.fire({
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
                return (e._projectDirty || e._viewDirty) && (I.mul(t, e.projectMatrix, e.viewMatrix), n.fromCamera(e)), n
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
        n._viewMatrix = I.create(), n._worldMatrix = I.create(), n._projectMatrix = I.create(), n._projectViewMatrix = I.create(), n._rotateMatrix = I.create(), n._viewDirty = !0, n._projectDirty = !0, n._frustum = new fo, n._position = J.fromValues(0, 0, 10), n._distance = 10, n._target = J.create(), n._up = J.fromValues(0, 1, 0), n._aspect = 1, n._dur = 800, n._rotateDistance = 1.001, this.fovy = 60, e && (n.options = e)
    }
    set options(e) {
        Object.keys(e).forEach(t => {
            this[t] = e[t]
        })
    }
    _refreshDistance() {
        J.subtract(is, this._position, this._target);
        const e = Math.sqrt(is[0] * is[0] + is[2] * is[2]);
        this._hRotation = Math.atan2(is[0], is[2]), this._vRotation = -Math.atan2(is[1], e), this._distance = J.length(is), this._viewDirty = !0
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
            const s = $n(e),
                l = s.x - r.x,
                c = s.y - r.y;
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
                const n = rs(e);
                n < a ? t.zoomOut() : n > a && t.zoomIn(), a = n
            } else n && t._enablePan ? t.pan(l, c) : o && t._enableRotate && t.rotate(l, c);
            t.lastPoint = s, r = s
        }, t._clean = function () {
            r = null, window.removeEventListener("mousemove", t._handleMouseMove), window.removeEventListener("mouseup", t._handleMouseUp), window.removeEventListener("touchmove", t._handleMouseMove), window.removeEventListener("touchend", t._handleMouseUp)
        }, t._handleMouseUp = function (e) {
            if (t._enableEasing) {
                const e = J.fromValues(t.firstPoint.x, t.firstPoint.y, 0),
                    o = J.fromValues(t.lastPoint.x, t.lastPoint.y, 0),
                    a = J.create();
                J.lerp(a, e, o, t._rotateDistance), n && t._enablePan && t.playAnimate(o, a, "point", t.pan), !t._enableRotate || n || i || t.playAnimate(o, a, "point", t.rotate)
            }
            t._clean()
        }, t._handleMouseDown = function (e) {
            e.preventDefault(), null != e.button && 0 !== e.button && 2 !== e.button || (i = !1, o = !0, e.touches && e.touches.length > 1 ? a = rs(e) : (n = 2 === e.button, t._suspended || (t._canvas.focus(), r = $n(e), t.lastPoint = r, t.firstPoint = r, window.addEventListener("mousemove", t._handleMouseMove), window.addEventListener("mouseup", t._handleMouseUp), window.addEventListener("touchmove", t._handleMouseMove), window.addEventListener("touchend", t._handleMouseUp))))
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
        this._animate, this._animate = new as({
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
        J.set(is, o[0], o[4], o[8]), J.scale(is, is, -e * a * this.panSpeed), J.add(n, n, is), J.add(i, i, is), J.set(is, o[1], o[5], o[9]), J.scale(is, is, t * a * this.panSpeed), J.add(n, n, is), J.add(i, i, is), this.position = n, this.target = i
    }
    rotate(e, t) {
        const n = this._canvas;
        let i = this._vRotation,
            o = this._hRotation;
        const a = 360 / n.width * window.devicePixelRatio * Math.PI / 180;
        i += -t * (180 / n.height * window.devicePixelRatio * Math.PI / 180) * this.rotateSpeed, o += -e * a * this.rotateSpeed, this.vRotation = i, this.hRotation = o
    }
}

function cs(e, t) {
    const n = e * t,
        i = new Uint8Array(2 * n);
    for (let e = 0, t = 0; e < n; ++e) i[t++] = 255 * pi(), i[t++] = 255 * pi();
    return i
}

function us(e) {
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
class ds {
    constructor(e) {
        this._particles = [], this._scene = e, this._init()
    }
    _init() {
        this._updateProgram = ga(ra, sa, {
            varyings: ["v_position", "v_age", "v_life", "v_velocity"]
        }), this._renderProgram = ga(oa, aa), this._noiseTexture = new vo({
            width: 512,
            height: 512,
            data: cs(512, 512),
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
                    const e = t + pi() * (n - t);
                    i[a++] = e + 1, i[a++] = e, i[a++] = 0, i[a++] = 0
                }
                return i
            }(e.count, e.minAge, e.maxAge),
            n = {
                vaos: [new ki({
                    buffers: us(t),
                    mode: "POINT"
                }), new ki({
                    buffers: us(t),
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
                texture: new nr({
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
let fs, hs, _s, ms, ps, gs, vs, xs, bs = 1,
    ws = !1;
class Ms extends ro {
    constructor(e) {
        var t;
        t = Ms.prototype, ws || (ws = !0, hi(t, [{
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
        n.id = bs++, e && (n.options = e), n.__diffuseColor = J.create(), n.__specularColor = J.create(), n._diffuseColor || (n._diffuseColor = J.fromValues(1, 1, 1)), n._specularColor || (n._specularColor = J.fromValues(1, 1, 1))
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
const Ss = 4,
    ys = .95;
let Ts, Es, Ps, As, Cs, Is, Rs, Os, Ls, Ns = !1;
class Ds extends Ms {
    constructor(e) {
        var t;
        t = Ds.prototype, Ns || (Ns = !0, fs = Te.create(), hs = J.create(), _s = J.create(), ms = J.create(), ps = J.create(), gs = J.fromValues(2, 2, 2), vs = J.fromValues(0, 0, 0), xs = [J.create(), J.create(), J.create(), J.create(), J.create(), J.create(), J.create(), J.create()], Ts = [0, 8, 30, 100, 0], Es = J.create(), Ps = I.create(), As = I.create(), hi(t, [{
            name: "TYPE",
            get: () => "DIRECTION"
        }, {
            name: "direction",
            value: null,
            dirty: "_dirty"
        }])), super(e);
        const n = this;
        n._direction || (n.direction = J.fromValues(-1, -1, -1)), n._shadowMapProjectViewMatrix = [I.create(), I.create(), I.create(), I.create()], n._cascadedEnd = Te.create(), n._frustums = [new fo, new fo, new fo, new fo]
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
        I.lookAt(Ps, vs, t.direction, o._up), Ts[0] = r, Ts[Ss] = s;
        const c = r,
            u = r + (s - r),
            d = u - c,
            f = u / c;
        for (let e = 0; e < Ss; e++) {
            const n = (e + 1) / Ss,
                i = c + d * n,
                r = ys * (c * f ** n - i) + i;
            Ts[e + 1] = r, t._frustums[e].fromMatrix(o.viewMatrix, a, Ts[e], Ts[e + 1], l)
        }
        for (let a = 0; a < Ss; a++) {
            J.set(hs, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), J.set(_s, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
            for (let e = 0; e < 8; e++) J.transformMat4(xs[e], t._frustums[a].points[e], Ps), hs[0] = Math.min(hs[0], xs[e][0]), hs[1] = Math.min(hs[1], xs[e][1]), hs[2] = Math.min(hs[2], xs[e][2]), _s[0] = Math.max(_s[0], xs[e][0]), _s[1] = Math.max(_s[1], xs[e][1]), _s[2] = Math.max(_s[2], xs[e][2]);
            J.set(ms, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), J.set(ps, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
            const r = e._renderer._allList;
            for (let e = 0; e < r.length; e++) {
                const n = r[e];
                if (n.material.castShadow && n.data.boundingBox.isInFrustum(t._frustums[a]))
                    for (let e = 0; e < 8; e++) J.transformMat4(xs[e], n.data.boundingBox._points[e], Ps), ms[0] = Math.min(ms[0], xs[e][0]), ms[1] = Math.min(ms[1], xs[e][1]), ms[2] = Math.min(ms[2], xs[e][2]), ps[0] = Math.max(ps[0], xs[e][0]), ps[1] = Math.max(ps[1], xs[e][1]), ps[2] = Math.max(ps[2], xs[e][2])
            }
            hs[0] = Math.max(hs[0], ms[0]), hs[1] = Math.max(hs[1], ms[1]), hs[2] = Math.max(hs[2], ms[2]), _s[0] = Math.min(_s[0], ps[0]), _s[1] = Math.min(_s[1], ps[1]), _s[2] = Math.min(_s[2], ps[2]), J.sub(hs, hs, gs), J.add(_s, _s, gs), I.ortho(As, hs[0], _s[0], hs[1], _s[1], -_s[2], -hs[2]), I.mul(n[a], As, Ps);
            const s = Ts[a + 1];
            J.set(Es, 0, 0, -s), J.transformMat4(Es, Es, o.projectMatrix), i[a] = .5 * Es[2] + .5
        }
    }
    _refreshShadowMapFramebuffer(e) {
        const t = e._renderer,
            n = t._gl;
        this._shadowMapFramebuffer || (this._shadowMapFramebuffer = new bo({
            type: "2D_ARRAY",
            layers: Ds.CASCADED_COUNT,
            width: 2048,
            height: 2048,
            dataType: "FLOAT",
            format: "DEPTH_COMPONENT32F",
            compareFunc: "LESS",
            compareMode: "COMPARE_REF_TO_TEXTURE",
            minFilter: "LINEAR",
            magFilter: "LINEAR"
        })), this._refreshShadowMapMatrix(e);
        for (let e = 0; e < Ds.CASCADED_COUNT; e++) this._shadowMapFramebuffer.bind(n, e), t._shadowMapUniforms.u_projectViewMatrix = this._shadowMapProjectViewMatrix[e], n._program = null, t._drawShadow();
        n.bindFramebuffer(n.FRAMEBUFFER, null)
    }
    _validate() {
        if (this._dirty && (this._dirty = !1, this.__direction || (this.__direction = J.create()), J.normalize(this.__direction, this._direction), this.parent)) {
            const e = this._direction;
            Te.set(fs, e[0], e[1], e[2], 0), Te.transformMat4(fs, fs, this.parent.worldMatrix), J.set(this.__direction, fs[0], fs[1], fs[2]), J.normalize(this.__direction, this.__direction)
        }
    }
}
Ds.CASCADED_COUNT = Ss;
let Fs, Us, Vs, Bs = !1;
class Hs extends Ms {
    constructor(e) {
        var t;
        t = Hs.prototype, Bs || (Bs = !0, Cs = Te.create(), Is = I.create(), Rs = I.create(), Os = J.create(), Ls = I.create(), I.fromTranslation(Ls, J.fromValues(.5, .5, .5)), I.scale(Ls, Ls, J.fromValues(.5, .5, .5)), hi(t, [{
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
        n._shadowMapProjectViewMatrix = I.create(), n._shadowMapBiasProjectViewMatrix = I.create(), n._position || (n.position = J.fromValues(0, 1, 0)), n._direction || (n.direction = J.fromValues(0, -1, 0))
    }
    _refreshShadowMapMatrix(e) {
        const t = this._shadowMapProjectViewMatrix;
        J.add(Os, this.position, this.direction), I.lookAt(Is, this.position, Os, e._up), I.perspective(Rs, 2 * this.outerAngle, 1, .1, this.distance), I.mul(t, Rs, Is), I.mul(this._shadowMapBiasProjectViewMatrix, Ls, t)
    }
    _refreshShadowMapFramebuffer(e) {
        const t = e._renderer,
            n = t._gl;
        this._shadowMapFramebuffer || (this._shadowMapFramebuffer = new bo({
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
        if (this._dirty && (this._dirty = !1, this.__direction || (this.__direction = J.create()), this.__position || (this.__position = J.create()), J.normalize(this.__direction, this._direction), J.copy(this.__position, this._position), this.parent)) {
            const e = this._direction;
            Te.set(Cs, e[0], e[1], e[2], 0), Te.transformMat4(Cs, Cs, this.parent.worldMatrix), J.set(this.__direction, Cs[0], Cs[1], Cs[2]), J.normalize(this.__direction, this.__direction), J.transformMat4(this.__position, this._position, this.parent.worldMatrix)
        }
    }
}
let Gs = !1;
class ks extends Ms {
    constructor(e) {
        var t;
        t = ks.prototype, Gs || (Gs = !0, Fs = I.create(), Us = I.create(), Vs = [{
            direction: J.fromValues(1, 0, 0),
            up: J.fromValues(0, -1, 0)
        }, {
            direction: J.fromValues(-1, 0, 0),
            up: J.fromValues(0, -1, 0)
        }, {
            direction: J.fromValues(0, 1, 0),
            up: J.fromValues(0, 0, 1)
        }, {
            direction: J.fromValues(0, -1, 0),
            up: J.fromValues(0, 0, -1)
        }, {
            direction: J.fromValues(0, 0, 1),
            up: J.fromValues(0, -1, 0)
        }, {
            direction: J.fromValues(0, 0, -1),
            up: J.fromValues(0, -1, 0)
        }], hi(t, [{
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
        n._position || (n.position = J.fromValues(1, 1, 1))
    }
    _refreshShadowMapMatrix(e) {
        I.perspective(Us, Math.PI / 2, 1, .1, 1e3);
        for (let e = 0; e < 6; e++) J.add(this._matrices[e].target, this.position, Vs[e].direction), I.lookAt(Fs, this.position, this._matrices[e].target, Vs[e].up), I.mul(this._matrices[e].projectViewMatrix, Us, Fs)
    }
    _refreshShadowMapFramebuffer(e) {
        const t = e._renderer,
            n = t._gl;
        if (!this._framebuffer) {
            this._depthTexture = new vo({
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
                projectViewMatrix: I.create(),
                target: J.fromValues(0, 0, 0)
            })
        }
        this._refreshShadowMapMatrix(e._camera), n.enable(n.POLYGON_OFFSET_FILL), n.colorMask(!1, !1, !1, !1), n.polygonOffset(2, 4), n.bindFramebuffer(n.FRAMEBUFFER, this._framebuffer), this._depthTexture.bind(n, 0), n.viewport(0, 0, this._depthTexture._options.width, this._depthTexture._options.height);
        for (let e = 0; e < 6; e++) n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_CUBE_MAP_POSITIVE_X + e, this._depthTexture._texture, 0), n.clear(n.DEPTH_BUFFER_BIT), t._shadowMapUniforms.u_projectViewMatrix = this._matrices[e].projectViewMatrix, n._program = null, t._drawShadow();
        n.bindFramebuffer(n.FRAMEBUFFER, null), n.colorMask(!0, !0, !0, !0), n.disable(n.POLYGON_OFFSET_FILL)
    }
    _validate() {
        this._dirty && (this._dirty = !1, this.__position || (this.__position = J.create()), J.copy(this.__position, this._position), this.parent && J.transformMat4(this.__position, this._position, this.parent.worldMatrix))
    }
}
const zs = {
        DRACO_DECODER_PATH: "/"
    },
    js = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv1",
        COLOR_0: "color",
        JOINTS_0: "joint",
        WEIGHTS_0: "weight"
    },
    Ws = {
        5121: Uint8Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    },
    qs = {
        5121: 1,
        5123: 2,
        5125: 4,
        5126: 4
    },
    Xs = {
        0: "POINTS",
        1: "LINES",
        2: "LINE_LOOP",
        3: "LINE_STRIP",
        4: "TRIANGLES",
        5: "TRIANGLE_STRIP",
        6: "TRIANGLE_FAN"
    },
    Ys = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    },
    Zs = {
        translation: 3,
        rotation: 4,
        scale: 3
    },
    Ks = {
        33071: "CLAMP_TO_EDGE",
        10497: "REPEAT",
        33648: "MIRRORED_REPEAT"
    },
    Js = {
        9728: "NEAREST",
        9729: "LINEAR",
        9984: "NEAREST_MIPMAP_NEAREST",
        9985: "LINEAR_MIPMAP_NEAREST",
        9986: "NEAREST_MIPMAP_LINEAR",
        9987: "LINEAR_MIPMAP_LINEAR"
    };

function Qs() {
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
                    let c, u;
                    if (l === e.TRIANGULAR_MESH ? (c = new e.Mesh, u = s.DecodeBufferToMesh(r, c)) : (c = new e.PointCloud, u = s.DecodeBufferToPointCloud(r, c)), !u.ok() || 0 === u.ptr) return e.destroy(r), e.destroy(s), e.destroy(c), void postMessage({
                        error: `Draco decode error: ${u.error_msg()}`
                    });
                    e.destroy(r);
                    let d = 0;
                    l === e.TRIANGULAR_MESH && (d = c.num_faces());
                    const f = c.num_points();
                    let h;
                    const _ = {},
                        m = [];
                    let p;
                    if (Object.keys(n).forEach(t => {
                            const i = s.GetAttributeByUniqueId(c, n[t]);
                            "POSITION" === t && (h = i);
                            const o = i.num_components(),
                                a = f * o,
                                r = new Float32Array(a);
                            _[t] = r, m.push(r.buffer);
                            const l = new e.DracoFloat32Array;
                            s.GetAttributeFloatForAllPoints(c, i, l);
                            for (let e = 0; e < a; e++) r[e] = l.GetValue(e);
                            e.destroy(l)
                        }), l === e.TRIANGULAR_MESH) {
                        const t = new e.DracoInt32Array;
                        let n, i, a;
                        if ("TRIANGLE_STRIP" === o)
                            for (p = new(i = (n = s.GetTriangleStripsFromMesh(c, t)) <= 256 ? Uint8Array : n <= 65536 ? Uint16Array : Uint32Array)(n), m.push(p.buffer), a = 0; a < n; ++a) p[a] = t.GetValue(a);
                        else
                            for (p = new(i = (n = 3 * d) <= 256 ? Uint8Array : n <= 65536 ? Uint16Array : Uint32Array)(n), m.push(p.buffer), a = 0; a < d; ++a) {
                                s.GetFaceFromMesh(c, a, t);
                                const e = 3 * a;
                                p[e] = t.GetValue(0), p[e + 1] = t.GetValue(1), p[e + 2] = t.GetValue(2)
                            }
                        e.destroy(t)
                    }
                    const g = new e.AttributeQuantizationTransform;
                    g.InitFromAttribute(h) && Yn("AttributeQuantizationTransform", g.range(), g.quantization_bits(), g.min_value(0), g.min_value(1), g.min_value(2)), e.destroy(g), e.destroy(s), e.destroy(c), postMessage({
                        time: Date.now() - a,
                        initTime: t,
                        datas: _,
                        indices: p
                    }, m)
                }(o.attributes, o.encodedData, o.mode)
        }
    }
}

function $s(e, t, n) {
    const i = new XMLHttpRequest;
    return i.onreadystatechange = function (e) {
        if (4 === this.readyState)
            if (200 === this.status) {
                let e = i.response;
                "json" === t && "string" == typeof e && (e = JSON.parse(e)), n(null, e)
            } else Zn("ajax error:", this.statusText), n(`${this.responseURL} ${this.statusText}`, null)
    }, i.open("get", e), t && (i.responseType = t), i.send(), i
}
let el;
zs.parse = function (e, t) {
    el || (el = _i(Qs));
    const n = e.lastIndexOf("/"),
        i = n < 0 ? "./" : e.substr(0, n + 1),
        o = e.endsWith(".glb");
    $s(e, o ? "arraybuffer" : "json", (e, n) => {
        e ? t && t(e) : zs.parseData(i, n, t, o)
    })
}, zs.parseJSONData = function (e, t, n) {
    return zs.parseData(e, t, n, !1)
}, zs.parseBinaryData = function (e, t, n, i = 0) {
    return zs.parseData(e, t, n, !0, i)
}, zs.parseData = function (e, t, n, i, o = 0) {
    const a = [];
    let r = 0;
    const s = [],
        l = [],
        c = [],
        u = [],
        d = [],
        f = [],
        h = [];
    let _, m, p = [],
        g = 0;

    function v() {
        _.meshes.forEach(e => {
            const t = [],
                n = {
                    primitives: t
                };
            l.push(n), null != e.name && (n.name = e.name), null != e.weights && (n.weights = e.weights), e.primitives.forEach(e => {
                const i = {},
                    o = {
                        buffers: i
                    };
                t.push(o), null != e.mode && (o.mode = Xs[e.mode]), Object.keys(e.attributes).forEach(t => {
                    const n = s[e.attributes[t]],
                        o = {
                            data: n.buffer,
                            type: n.type,
                            stride: n.stride,
                            offset: n.byteOffset,
                            size: n.size
                        };
                    "POSITION" === t && (n.min && (o.min = n.min), n.max && (o.max = n.max)), js[t] && (i[js[t]] = o)
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
        const t = _.extensions && _.extensions.KHR_lights_punctual;
        t && t.lights && (p = t.lights), _.nodes && _.nodes.forEach(e => {
            const t = {},
                n = e.extensions && e.extensions.KHR_lights_punctual,
                i = e.extensions && e.extensions.MSFT_lod,
                o = e.extras && e.extras.MSFT_screencoverage;
            if (u.push(t), null != e.name && (t.name = e.name), e.rotation && (t.rotation = e.rotation), e.translation && (t.translation = e.translation), e.scale && (t.scale = e.scale), e.matrix && (t.matrix = e.matrix), e.weights && (t.weights = e.weights), e.children && (t.children = e.children), null != e.mesh && (t.mesh = e.mesh), null != e.camera && (t.camera = _.cameras[e.camera]), n && (t.light = p[n.light]), i && i.ids && o) {
                const e = [];
                t.lods = e, o.forEach((t, n) => {
                    e.push({
                        screencoverage: t,
                        id: i.ids[n]
                    })
                })
            }
        }), _.skins && _.skins.forEach(e => {
            const t = s[e.inverseBindMatrices],
                n = new Array(e.joints.length),
                i = {
                    joints: e.joints,
                    inverseBindMatrices: n,
                    skeleton: e.skeleton
                };
            for (let i = 0; i < e.joints.length; i++) n[i] = new Float32Array(t.buffer.buffer, t.offset + 16 * i * 4, 16);
            c.push(i)
        }), _.nodes && _.nodes.forEach((e, t) => {
            const n = u[t];
            null != e.skin && (n.skin = c[e.skin])
        }), _.animations && _.animations.forEach(e => {
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
                const n = u[e.target.node],
                    o = l[n.mesh],
                    {
                        path: a
                    } = e.target,
                    r = i[e.sampler],
                    s = r.output,
                    {
                        buffer: c
                    } = s.buffer,
                    d = [];
                let f, h;
                if ("weights" === a) {
                    const {
                        targetCount: e
                    } = o, t = s.count / e;
                    for (f = 0; f < t; f++) h = s.buffer.byteOffset + 4 * f * e, d.push(new Float32Array(c, h, e));
                    r.splitOutput = d, n.weights || (n.weights = o.weights.slice(0))
                } else {
                    const e = Zs[a];
                    for (f = 0; f < s.count; f++) h = s.buffer.byteOffset + 4 * f * e, d.push(new Float32Array(c, h, e));
                    r.output = d, "translation" !== a || n.translation || (n.translation = J.create()), "rotation" !== a || n.rotation || (n.rotation = ot.create()), "scale" !== a || n.scale || (n.scale = J.fromValues(1, 1, 1))
                }
                t.push({
                    node: e.target.node,
                    sampler: r,
                    path: a
                })
            })
        }), _.textures && _.textures.forEach(t => {
            const n = {};
            if (f.push(n), null != t.sampler) {
                const e = _.samplers[t.sampler];
                e.magFilter && (n.magFilter = Js[e.magFilter]), e.minFilter && (n.minFilter = Js[e.minFilter]), e.wrapS && (n.wrapS = Ks[e.wrapS]), e.wrapT && (n.wrapT = Ks[e.wrapT])
            }
            if (null != t.source) {
                const i = _.images[t.source];
                if (i.uri) i.uri.match(/data:image/) ? n.url = i.uri : n.url = e + i.uri;
                else {
                    const e = _.bufferViews[i.bufferView];
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
            nodes: u,
            scenes: _.scenes,
            scene: _.scenes[_.scene || 0],
            meshes: l,
            animations: d,
            textures: f,
            materials: _.materials,
            lights: p
        })
    }
    const x = [];

    function b(e) {
        const t = Ws[e.componentType],
            n = qs[e.componentType],
            i = Ys[e.type] || 1,
            o = _.bufferViews[e.bufferView],
            r = o && o.byteStride || 0,
            s = o && a[o.buffer],
            l = e.byteOffset || 0,
            c = o && o.byteOffset || 0;
        let u = l + c;
        const {
            count: d
        } = e;
        let f, h = !1,
            m = x[e.bufferView];
        return r ? (r !== n * i && (h = !0, u = c), f = d * (r / n)) : f = d * i, h && m ? m : (s && (m = s.buffer ? new t(s.buffer, s.byteOffset + u, f) : new t(s, u, f)), h && (x[e.bufferView] = m), m)
    }

    function w() {
        _.accessors.forEach(e => {
            const t = _.bufferViews[e.bufferView],
                n = b(e),
                i = t && t.byteStride || 0,
                o = qs[e.componentType],
                a = Ys[e.type] || 1,
                r = i === o * a ? 0 : e.byteOffset || 0;
            if (e.sparse) {
                const {
                    sparse: t
                } = e;
                t.indices.count = t.count, t.values.componentType = e.componentType, t.values.count = t.count * a;
                const i = b(t.indices),
                    o = b(t.values);
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
        }), _.meshes.forEach(e => {
            e.primitives.forEach(e => {
                const t = e.extensions && e.extensions.KHR_draco_mesh_compression;
                if (t) {
                    const n = new Worker(el),
                        i = _.bufferViews[t.bufferView],
                        o = new Int8Array(a[i.buffer], i.byteOffset, i.byteLength);
                    n.onmessage = function (i) {
                        const a = i.data;
                        "init" === a ? n.postMessage({
                            type: "decode",
                            encodedData: o,
                            attributes: t.attributes,
                            mode: null == e.mode ? "TRIANGLES" : Xs[e.mode]
                        }, [o.buffer]) : (g++, a.error ? Zn(a.error) : (null != e.indices && (s[e.indices].buffer = a.indices), Object.keys(a.datas).forEach(t => {
                            const n = e.attributes[t];
                            s[n].buffer = a.datas[t]
                        })), g === h.length && v())
                    }, h.push(n), n.postMessage({
                        type: "init",
                        path: zs.DRACO_DECODER_PATH
                    })
                }
            })
        }), 0 === h.length && v()
    }

    function M(e, t) {
        a[t] = e, ++r === m && w()
    }
    if (i) {
        const e = new Int32Array(t, o, 3),
            i = e[2];
        let r, s = o + 12;
        if (1179937895 !== e[0]) return void(n && n("Invalid magic number in GLB header"));
        if (2 !== e[1]) return void(n && n(`Unsupported glTF version: ${e[1]}`));
        if (1313821514 !== (r = new Int32Array(t, s, 2))[1]) return void(n && n("First chunk should be JSON"));
        for (_ = new DataView(t, s + 8, r[0]), _ = JSON.parse(new TextDecoder("utf-8").decode(_)), s += 8 + r[0]; s < i;) 5130562 === (r = new Int32Array(t, s, 2))[1] && (a[0] = new DataView(t, s + 8, r[0])), s += 8 + r[0];
        w()
    } else m = (_ = t).buffers.length, _.buffers.forEach((t, i) => {
        t.uri && (0 === t.uri.indexOf("data:") ? M(function (e) {
            const t = e.indexOf(","),
                n = atob(e.substr(t + 1)),
                i = n.length,
                o = new Uint8Array(i);
            for (let e = 0; e < i; e++) o[e] = n.charCodeAt(e);
            return o.buffer
        }(t.uri), i) : $s(e + t.uri, "arraybuffer", (e, t) => {
            e ? n && n(e) : M(t, i)
        }))
    })
};
const tl = /\s+/;
var nl = {
    parse: function (e, t, n) {
        const i = e + (e.endsWith("/") ? "" : "/");
        return Promise.all([si(`${i+t}.obj`), si(`${i+t}.mtl`)]).then(e => (function (e = "", t, n) {
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
                c = [],
                u = {};
            let d, f, h;

            function _(e) {
                let t = r.get(e);
                if (null != t) o.indices.push(t);
                else {
                    t = o.index, r.set(e, t), o.indices.push(t), o.index += 1;
                    const n = e.split("/");
                    let i = 3 * (parseInt(n[0], 10) - 1);
                    null == s[i + 2] && Zn("vertices overflow:", i, s.length), o.vertices.push(s[i], s[i + 1], s[i + 2]), n[1] && (i = 2 * (parseInt(n[1], 10) - 1), null == l[i + 1] && Zn("uvs overflow", i, l.length), o.uvs.push(l[i], l[i + 1])), n[2] && (i = 3 * (parseInt(n[2], 10) - 1), null == c[i + 2] && Zn("normals overflow", i, c.length), o.normals.push(c[i], c[i + 1], c[i + 2]))
                }
                return h.count++, t
            }
            return a.default = new pr, n && n.trim().split("\n").forEach(e => {
                const t = e.trim();
                if (!t || t.startsWith("#")) return;
                const n = t.split(tl);
                switch (n.shift()) {
                    case "newmtl":
                        f = new pr, a[n[0]] = f;
                        break;
                    case "Ka":
                        f.ambientColor = J.fromValues(+n[0], +n[1], +n[2], null == n[3] ? 1 : +n[3]);
                        break;
                    case "Kd":
                        f.diffuseColor = Te.fromValues(+n[0], +n[1], +n[2], null == n[3] ? 1 : +n[3]);
                        break;
                    case "Ks":
                        f.specularColor = J.fromValues(+n[0], +n[1], +n[2]);
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
                const n = t.split(tl);
                switch (n.shift()) {
                    case "v":
                        s.push(parseFloat(n[0]), parseFloat(n[1]), parseFloat(n[2]));
                        break;
                    case "vn":
                        c.push(parseFloat(n[0]), parseFloat(n[1]), parseFloat(n[2]));
                        break;
                    case "vt":
                        l.push(parseFloat(n[0]), parseFloat(n[1]));
                        break;
                    case "usemtl": {
                        d = a[n[0]] ? n[0] : "default", f = a[d];
                        const e = h ? h.offset + h.count : 0,
                            t = u[d];
                        t ? t.counts.push(h = {
                            offset: e,
                            count: 0
                        }) : o.parts.push(u[d] = {
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
                        for (let e = 1, t = n.length - 1; e < t; e++) _(n[0]), _(n[e]), _(n[e + 1])
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
class il {
    constructor(e) {
        this.cache = new WeakMap, this.trigger = new ro, this.gl = e
    }
    get(e, t = !1) {
        if (!e) return null;
        if (e instanceof vo) return e;
        const {
            cache: n
        } = this;
        let i = n.get(e);
        return i || (e.format || !0 === t && (e.format = "SRGB8_ALPHA8"), i = il.createTexture(e), n.set(e, i)), i
    }
    static createTexture(e) {
        const {
            url: t
        } = e;
        if ("string" == typeof t) {
            if (t.endsWith(".dds")) return new Ka(e);
            if (t.endsWith(".hdr")) return new er(e);
            if (t.endsWith(".basis")) return new Ta(e)
        }
        return e.width && e.height ? new vo(e) : new nr(e)
    }
}
class ol {
    constructor(e) {
        this.enableCullFace = !0, this.enableDepthWrite = !0, this.blend = !1, this._gl = e
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
class al extends ro {
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
let rl = !1;
class sl extends al {
    constructor(e) {
        var t;
        t = sl.prototype, rl || (rl = !0, hi(t, [{
            name: "outlineColor"
        }, {
            name: "outlineWidth",
            value: 2
        }])), super(e);
        this._outlineColor = [1, .6, .2], this._programOutline = ga(Fo, Uo), this._programBlend = ga(Vo, Bo), this._width = e._canvas.width, this._height = e._canvas.height, this._resolution = Lt.fromValues(1 / this._width, 1 / this._height), this._framebufferOutline = new bo({
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
let ll = !1;
class cl extends al {
    constructor(e) {
        var t;
        t = cl.prototype, ll || (ll = !0, hi(t, [{
            name: "enabled",
            value: !1,
            callback(e, t) {
                this._scene._rebuildProgram = !0, this._scene._gammaCorrection = !t
            }
        }, {
            name: "threshold",
            value: .85
        }, {
            name: "strength",
            value: 1
        }, {
            name: "radius",
            value: .4
        }])), super(e);
        const n = this;
        n._inited = !1, n._hDirection = Lt.fromValues(1, 0), n._vDirection = Lt.fromValues(0, 1), n._width = n._scene._canvas.width, n._height = n._scene._canvas.height, n._mipMapCount = 5, n._thresholdProgram = ga(Ko, Jo), n._bloomProgram = ga(qo, Xo), n._blackMaterial = new pr({
            light: !1,
            diffuseColor: Te.fromValues(0, 0, 0, 1)
        }), n._blackDoubleSidedMaterial = new pr({
            light: !1,
            doubleSided: !0,
            diffuseColor: Te.fromValues(0, 0, 0, 1)
        }), n._fbos = [], n._blurPrograms = [];
        let i = n._width / 2,
            o = n._height / 2;
        n._thresholdFramebuffer = new bo({
            minFilter: "LINEAR",
            magFilter: "LINEAR",
            width: i,
            height: o
        }), n._filterFramebuffer = new bo({
            width: n._width,
            height: n._height,
            clearColor: new Float32Array([0, 0, 0, 1]),
            depth: !0
        });
        for (let e = 0; e < n._mipMapCount; e++) n._fbos.push([new bo({
            minFilter: "LINEAR",
            magFilter: "LINEAR",
            width: i,
            height: o
        }), new bo({
            minFilter: "LINEAR",
            magFilter: "LINEAR",
            width: i,
            height: o
        })]), n._blurPrograms.push(ga(Yo, `#define KERNEL_RADIUS ${2*(e+1)+1}\n${Zo}`)), i = Math.round(i / 2), o = Math.round(o / 2)
    }
    _init() {
        const e = this,
            t = e._gl;
        e._inited = !0, e._thresholdProgram.use(t), e._thresholdProgram.bindUniform("u_sampler", 0), e._bloomProgram.use(t), e._bloomProgram.bindUniform("u_samplerImage", 0), e._bloomProgram.bindUniform("u_samplerBlur1", 1), e._bloomProgram.bindUniform("u_samplerBlur2", 2), e._bloomProgram.bindUniform("u_samplerBlur3", 3), e._bloomProgram.bindUniform("u_samplerBlur4", 4), e._bloomProgram.bindUniform("u_samplerBlur5", 5);
        let n = e._width / 2,
            i = e._height / 2;
        for (let o = 0; o < e._mipMapCount; o++) e._blurPrograms[o].use(t), e._blurPrograms[o].bindUniform("u_resolution", Lt.fromValues(1 / n, 1 / i)), e._blurPrograms[o].bindUniform("u_sampler", 0), n = Math.round(n / 2), i = Math.round(i / 2)
    }
    pass(e, t) {
        const n = this,
            i = n._gl,
            o = n._scene,
            {
                quadVao: a
            } = i.cache;
        n._inited || n._init(), n._filterFramebuffer.bind(i);
        const r = o._renderer._getOverrideMaterial;
        o._renderer._getOverrideMaterial = function (e) {
            return e.data.bloom ? e.material : e.material.doubleSided ? n._blackDoubleSidedMaterial : n._blackMaterial
        }, o._renderer._hideSkybox = !0, o._renderer._draw(), o._renderer._hideSkybox = !1, o._renderer._getOverrideMaterial = r, n._thresholdFramebuffer.bind(i), n._thresholdProgram.use(i), n._thresholdProgram.bindUniform("u_threshold", n._threshold), n._filterFramebuffer.bindTexture(0), a.draw(i);
        let s = n._thresholdFramebuffer;
        for (let e = 0; e < n._mipMapCount; e++) n._blurPrograms[e].use(i), n._fbos[e][1].bind(i), n._blurPrograms[e].bindUniform("u_direction", n._hDirection), s.bindTexture(0), a.draw(i), n._fbos[e][0].bind(i), n._blurPrograms[e].bindUniform("u_direction", n._vDirection), n._fbos[e][1].bindTexture(0), a.draw(i), [s] = n._fbos[e];
        i.bindFramebuffer(i.FRAMEBUFFER, null);
        const l = n._scene._renderer._viewport;
        i.viewport(l.x, l.y, l.width, l.height);
        const c = n._scene._clearColor;
        i.clearColor(c[0], c[1], c[2], c[3]), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT), n._bloomProgram.use(i), n._bloomProgram.bindUniform("u_strength", n._strength), n._bloomProgram.bindUniform("u_radius", n._radius), n._bloomProgram.bindUniform("u_exposure", o._exposure), t.bindTexture(0), n._fbos[0][0].bindTexture(1), n._fbos[1][0].bindTexture(2), n._fbos[2][0].bindTexture(3), n._fbos[3][0].bindTexture(4), n._fbos[4][0].bindTexture(5), a.draw(i)
    }
    setSize(e, t) {
        const n = this;
        if (n._width === e && n._height === t) return;
        n._width = e, n._height = t;
        let i = n._width / 2,
            o = n._height / 2;
        n._thresholdFramebuffer.setSize(i, o), n._filterFramebuffer.setSize(n._width, n._height);
        for (let e = 0; e < n._mipMapCount; e++) n._fbos[e][0].setSize(i, o), n._fbos[e][1].setSize(i, o), n._blurPrograms[e].use(n._gl), n._blurPrograms[e].bindUniform("u_resolution", Lt.fromValues(1 / i, 1 / o)), i = Math.round(i / 2), o = Math.round(o / 2)
    }
    getOutputTexture() {
        return null
    }
}
let ul = !1;
class dl extends al {
    constructor(e) {
        var t;
        t = dl.prototype, ul || (ul = !0, hi(t, [{
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
        n._glowColor = [0, 148 / 255, 200 / 255], n._hDirection = Lt.create(), n._vDirection = Lt.create(), n._resolution = Lt.create(), n._colorProgram = ga(ko, zo), n._blurProgram = ga(jo, Wo), n._glowProgram = ga(Ho, Go), n._colorFramebuffer = new bo({
            width: n._blurSize,
            height: n._blurSize,
            depth: !0,
            stencil: !0,
            minFilter: "LINEAR",
            magFilter: "LINEAR"
        }), n._fbos = [];
        for (let e = 0; e < 2; e += 1) n._fbos.push(new bo({
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
                e.data.glow || e.data instanceof kr || (n._colorProgram.bindUniforms({
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
        const c = n._enabled ? 2 * n._blurCount : 0;
        0 === c && n._fbos[0].bind(i);
        for (let e = 0; e < c; e++) n._fbos[s ? 1 : 0].bind(i), n._blurProgram.bindUniform("u_direction", s ? n._hDirection : n._vDirection), l ? n._colorFramebuffer.bindTexture(0) : n._fbos[s ? 0 : 1].bindTexture(0), o.draw(i), s = !s, l && (l = !1);
        t.bind(i, 0, !1), i.clear(i.DEPTH_BUFFER_BIT | i.STENCIL_BUFFER_BIT), n._colorProgram.use(i), r(!1), i.clear(i.DEPTH_BUFFER_BIT), a._renderer.state.setStencilTest(!0, "EQUAL", 0, "KEEP"), i.colorMask(!0, !0, !0, !0), a._renderer.state.setBlend(!0), a._renderer.state.setBlendMode(i.FUNC_ADD, i.FUNC_ADD, i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA), n._glowProgram.use(i), n._glowProgram.bindUniforms({
            u_sampler: 0
        }), n._fbos[0].bindTexture(0), o.draw(i), a._renderer.state.setBlend(!1), a._renderer.state.setStencilTest(!1)
    }
    getOutputTexture() {
        return null
    }
}
const fl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAhB0lEQVR42h2a53IjSZalXbuHhKDMUiNs9nnXbN9vpnu6qzKTJGQo1+570L/KLIsEIsLvPef7ANL/93/rxy2PO+5V6j+KPUr+lfJQl0XtVNIy26BTzUaThcVh0uRAlliahmyMmtvW7tsphNbnu2l2U3FHkSNpTCBX5bscl9ARkyQVLPBaryQNQs6Rval4v8nmkNbImRNKl5yYEXlKlfXS0BDPtb4o/ZnXLqtJ2ybteSFZXUp+E+UuMrsZ8paHzMUaiZLX250rW05Hqq7E6qpSrqYJPG9rVY1bbZZJWOM7M39c6Y5zv7IQKRuqO11oVjMr1dtbm/r/FtddyV9K8itZm9wFWrfFEpfL3ojjQn+ITLowfcbcNrf/DcVo3kbl65nwXRaS48aI87w9ZPtJnSAsZjdoWvOEB9auKdBrpiU51i3rB1PjTty3MvIY7qKqyG4600xVqSvlXRBTvvRiXMvAY66cRbYGelD4n/lJ8ESXy9T9h65/KcuKefH0RGvd4z1DKnUU9cZK8srFwnrbZ1mneBvkPtg848ok9TkPXOssNJlmujd03WJtk75LIeJ6k7J63gk+4TmUbgunRr7MPHPPiE6Z2UCMoLgKoSUrW2sOLjAz8/q+0dvKW87zhduh7EJKtIRWMsWHuZy7uqdVOrWSTHQ78PJFWJ8F0/zCaLOpeV/7leM2Vh2lk6I43/Nyb2W/cdV46wPnpYsvDAPZSBrSIqLLWol1wU+3dY27Q/pSXORKvUy3XKTu73TpdZNr4oF2wnO238TfRO1lDkmLvfBnsrVrs+qyj2zZkXaWtuT4ksz2OHpNyuzY+yVfWvrs6xaUSdU1tlbcuqK5SlrWjzAe6GlX9xNNLQ1rbCZaWrdG+pSt0yoGRXzVRkcdqNWe5pCzSYx3bomt8avsJM2WkThtxngaSeVDLdlY4vMzlyuRJXpCyVpUrLeGvaVyX9QfDRFr0ZKbaR/fVnajrIvpPNanQMk1hlFQJkiu4yy2LvEos8mMlXmoo+2iTWlI1MogC+sSNkxdo9tz7SjtoihkKbrTrmaRlGg3b3ckp4bcS6OEpcpgiSR+ve/YZhtO7yV38pmKz6fcOxIDl5nd29pVrq9l2dHKECiJztx1qXPKNxG3/DVW4b3HcPc3fiJEDs57sj/n1JZ8YOpUiuG44nWsbcisQaoQ19fnW72X2u2ZO9fR2Pmu8jNpZNGcFMqLnZkweALGhVlUlgRzMRmhU9zCnfZ0S6yrDpePEccq0MzCmtUgyhYmpbtrvQmkYp7n1HjBFXF70iCUTI20lEFol3JXw62aIfQzVmjU/mJXVg8i+ZNJpGhDPyhGWSAXsBnDv9bbRtlEYfeltTFVkk2zfs/q9xxOjB+Lniqe5pmKjgd+NNEpHn1si/aiSi6GOl3ZSJhmpm6FNOzqybEh2ZIl16GheAyJBaIUn9Ld1F9KOX/Xe11PQhIehNNpF7C9BnHpWVeEX3R8iuNWMgK6rKs1pV+Zpzo3RQhipW8XESwzMUrh3GzKaDGRPBc6h4A46qrZrHim80doj5ReGtx1UEE2VeRELnwZFgyAiSLQFFKoZ/pHX/5Jpcyeclasf9I4WDKxIJDIKmPoqcvBpNip/UbuzPB9Xgttuy1fZLSZ6iobv91lt98cCsGTZs0Rx90hQLA+S2zG8vOavu3pxSnmOK2UfsvYtXuRpsvywqlkiyJDqy4RA12lZvfsVaeZzamn0ti6oakoSf32Mu9uLenTmsqgCylNtul7oMNSt1bsmciZTraivAyGztD4PWE9mhYdgMxg+zHdL2FQlXETTpUqEn8hT5le0ShHok9q6wg3JVGWqH4NQuQSBafnH+z5EOc0DOHmexMpJR/MjyhInJ5YR3qq27do7reweyaE4Ce54DE6c9Rp4TVuRFTSLtG3XP2U5SXGWyGtdGgemfaa3CMJHS5AfPg4vFW1SnIt9C2RT8XekPvV8dxm2nH6/R/85Rc/1XGYzvnYqijMqcydTCE8Z4Jb2YIfkPvO5j2ZlBSyshoz/V2mSfR2u7dtXmtDUzmEuDWNirj6fGFH3Zykefk3ejvj8UeSCgtKGbJQJQPj1sg+rAMeawrHSq6aHnF7RTE6Vnaq6DWyZjaJ+tKq7btzbfztWP9cRPtGYsShiG5KVnPpsvovVS+0CX5tO3KnlHk/1t4rbfIJrX1TR8MTfvBI5aXK1otAKmuZ+PLR1NJgMmsr46TQN7TlsQYaQ6yjkjff6LRdMXFCBVGTrEMqjoEZJOhAh1k2MiXULgbaHZzauHWkU/lnEzoqxVITBjsFlwlrCyvdT+WRbORGZVbi2TmbqOdhx/h3V3rGeEGOHZpoBSsZUe59og3W4kjryS1tGiemOp4dE1qQr3MZR5Zzlniyia5K77c8c+a7olD6mW6XzPfGLRzXpi6EGUmec/8lAVRxJoVFwMZuqrOgQ2Xz4OhiMk3diwRijUt1W26PqO56zeIoq0XxktJeJPDFaEaaKf+j5z3nfVl/SPrGiKd4SY0pJ7q6WCWJR6XuhLRk+6zyxQxX6mQql9K+tkIw1rcedx8LpikrmpwvYWB5YeqzxpHQmF5b9rd7fR4BVlTu3VcVB2dW4xklfCiR6MMd8xMCYynl6GWfY1VoMoQ3S46w32hKZFgpjuge8WxjL+IXTy9F20zKR6+/MTGFa2THd2fvBBMCdMqhEuznSMO98rWkHXVzejfiH5f8uqdkpuzg77wI56mImpjKXeWV+51QpNabGwcZKcl3RnqBFTyYbZmHrg120QMgpHpqKGKe8Kgnd8Vv3dHoADR57OO9FQikLkVJWKZgtYKzJa0LzaNN5djltDWg3FDQ092h3LfYdThIxSYCtom3CEzWB14KrTern4AhpFhWdxjdLDmZ7qptCvCkJiqahO2ldOH8gMIQ86fnIzUHYlNNZ77v07QCjZI66Ja6ZePj3nnLWDCc1Nig9KV84tlnHOOpELpzt4n3HQlmCxcEqNdKSZZ1BQQQlEshhs/LxpDUlWpC1oBarJGZ3lx9ypTmqdDntF/YXz/D846EPdiRppnVpnYL+QK17CVaLzrUUWh1KzZA4ZwoxnrRCIfxIG4htje8ARGvOW6SN+ugm8+tNKWiisJNDTqcOypsamdxquUbKMnEbdNG1M0JoaARjp9M2OW21eCM/aLzIZeToV1gMbGh8bkMK6YreE2ajQx7Ot9c07UA4xR1czM3k/YHZj2AUnKV1xfWO+aF3Rn1ZWnralWZbxwjIpSM0WQflSphPtP9b7n/YRzq81DlwmdwpWCLTSN6tAHgh6lP/IO1r1s1yGap1XrZ6mDrXaS24c1MQ+PSyMQuDxu/N5v5Z0P7BNRH1GB8HrsR4hPJJyWOlTWFb0jqST+1dMPNEdooevP+6S7iW2UTtzgnRbqFkc1FVqdAZcE8qy8Sqi7Son+uEpyrmHINf2Ph6595HOtVwHgQoan7VemFWTzTVEDjhpXemeU/wmHiCV6kmIyMHBSxHNHNbBJje8ri1w+xdg+qef9L358TkCXbKm+ZiEIbKmj9snIYsIil7pJy0vaJwO82jEMdoxY43jXfPsPQNUwUP5VRl/Nr8y2lS4QrSqAkCtgwc3tnwpnSIl2qB49P8IgdnJbqrSJhFLLwWj1LZtb00frAJVHQMre8xpqZ3sWcRFkuybSUzxIxtkLfsGjPUALMBl4Ng8eBfwoB9UYbV26pNETrYcV1T4eqz6yTs0jQyZVxvWPkQ9lDLBedevWvt16x53XxfMfjpRK+ymKkJJg9EWc2TFmMxZ8c7oo/3dza9AQtM7NYCdl7ZLS6c5qJbSuTPnNNcqBPiVwl6WinRLLb2ulxZjcSecfQa3jtAiByGTVagthgPYnJsSBWko3UqydN5lq1K1uR7Z1vwjVDr+Dysa1ivS8Mctd5iINeZW2wJ7xMPR5IovceUUNa03BvJZzKtmNsgxERw60V3nLpekLL/hp/dPKdxemTqZZwaeeWdKR+nMTvfIMRBjjNnhOEvrdBtPTPnHZVWoREhkvqDBSsAxEpIFJZq8B4Xn5pALzFlDdI00furU6N3bZS3Ut2yqGPKqagubZdaVf6s1E7POzZXTv9VHN74Unm3G2cCyXq14W/4sF5oncpmArj4NQT0nEC/aZy5vI5MafEcBTXJRyTllitRPbjCkNb2mkgHbQmY5d4QE6z/5PZatDgxKod0LOk7178ZtgHzF42DjpZTR7YNkbxExQIwwNRU/rE3aa4qXmriglQAAfGU8YXUkaEDPWFJKOfnbr3Xu8pRSrODXpndeW98650pFszwplJsdEqmkpRGUe2D+HvW2xRlgTiUZ+asqaEx2uKXFcxN+5FdrfzmoeGAxBSYo0Y/ynPQ2k3w5t8g/7sxX8Wfq4h4mEpqAc6qEgXw4nHdyHXEGHwOpYNJ+Zva9M95fZngguXh/SJ3KMLiN5XnfIN3czjfq6XqvY7cHEk3O8Tv0EgmrgXZtuchoFwSTWAbdH8FL7E8Fzsuq8mpGZVN0gcQ3q09q2UhT9d80V43nUgeranPIGx5KS23lfbc3Oh0MXdrc4EoYaGIooWkG4FAqBxn7kA7HdBeFl8pozoRuM2wv9w+l4fLPAly4AKSHaW+Z5LbQxj1mCjwnERd2AcxMJp+8riVv64lh8Uqt4OpIibi+/Y9JiV0UItPyh/skxYfhkzr9RUsqT0eimBs6+jHyYIVSI83YGlnPUsPx49smjN4oWnTtYpaV8DfEMxLDwfS1gpaSkcmSu6LXgTWw1XiXxfyDgG1vDPWp9ZZR2BqqYbZZlwIWi3nKN+rWW5qnwoQJJ9YaeUDlMiRP2JgYxkSDnBuP8g+Tvtnsd0zuSwgax1sp59G/TsOX5Yu9ry1XPFcRHjuYnHlK2TzZHQlViRVJalq7LWsFT9yfNOWZoUafSYvSSwftPjNIDMPE9ZdmypHE8BMrY31Z8rM6ZLa70p2+CtA9qxM3kmIFS9k3K9BfVbS4FGqVg8g5FuKxaav6ThhDXJ1fKH4Gnkh9XCWKxmbVWen/LhZC8tMomUpAmmqPI5p0OTapvLxtRWHcpl5GUNdxrbla0Llc+F6A2BPfR08zFXyr8wKCLcMx+iISL7OivEFmiMLug0SsihFuuaBAnm39p4usMbgLGyiTiMUhhvfivutEI0NKH3JFWhI6k/awiGCu1dlDoxsUh6AB7NyJHc9gTzmU4ksyis5CLhv6HSIJJuuFvI/v6gYzZyReh2LZzLAY17Y/1rXm8CboxomRbfMzrdw04CLVBGIPPmhi34zddbvImmB9nxQGxk0QhMjmSNqp8/VHcMWciyEobdeRbG1c9z/QYk9ewm486LhZObrr2Um0/syjjj6omJXtDzLZhYdadWy/KQhqCs3pBqVDBfcw9chDpfLOJqIWa/91vAFnPWRGP45zntWhnOtN+xJSS0Gc/1nNPY8JU5ODhpCO7rjXf/xEY05GXNM4MnyiYz/Nguyc6U71N8f0PZNcLbOVM8n3apfw75aZNLs44blZgUBJPlBip0R9PQzCXvUohJ+EiY0oHHoST81O1UB0nu89D0KVqCJVMmLU6YA/xFNMQFdERIipOTNe2c+kFrwedv2V6IkpRXcoLzPOo2jlbFHrRs3pT+4GH8S6IZv1T9JaUPZFufjx7uBYDNo2nv1GE8OVWdigET4NXuA7+ay/3odkEsxRu926cH8+7SxMRIbAi0z6BGZz8c+b2tP0V9krkNBel76MTmhRjCZmtXxcC3i1VH4q2tTHmCTLyk9oncM6ZwKksTChcxDsR8EHdoKVziGHAcail89PlHpq8rnZ7Kzxz+zcqTJL8T9/evmjp+I+QXyZYSuglBiJhuv9VwHmqDl7O5MYVq6xJpDwnC6jAzYiaxqdFW/CPg+9ciTs/NYVodVoEKyfxW5cDoDb9MabiavXa4k6TUsVJHK3pKbnW9gHkUhawwQei4qdLeotqJuYZnpudzpapa2eG0eigOZ5LQ7538NScP9BsgkebThF90PUuxW+t3y15Qdz3aNI85+NCYewFaIqZhBxmqGISdWWOwkPzKmy6UPXq5o/vAyRVT4fJspVdxlGGFw+IIZmh0NSK5nXITRd4iMT3FtLEIIzSUrLCmoZYWvL1LKfYEmw3Ae/LU0tK85LqWbeODMqwJV527ewScLC0Ha+BOO5aWq5yE4zaxth44p5pZTK3pXaqOuvce5qVNk6mvZM2q5Vtfy0xXIOojOP2ydebgA1gzzkJs6NMywL5njHZuzmXpAeR0CcTIQBpZfZAC1CFcD54vcsq56ZgGwIC++4kZeU+5Z4fZ2UbUO1GmnoXSu2Bk+ZH401e+Gt0PWdCySPP4ZgH9nPII8aKBWjHzKG/ixTQfpQxY+I7ax0e2Od+Qy1TsJPAD7TZr8u7omZKG9fmp6Cgf29trsbZZrdFemBK8RuKfEoYUj5lONXHW7nDgoNAau/x6LydX+hY1XTcbW4uwsr1gxFCHhUcspNjsql1NBzYJ+baJB6L2tYc9ZZk2NqRwfykNcJpBDJSgQLhEIFYlWDwlFaiu6cQxAG0pn0/p9avZaJIXElAgXbYd9KZanRo8MliL4gHxNFr5ycSgozV6jvn4N1meOV6WPgEIS/CCTRQyac7JjSA7ZhvOVq6kB/7SMoBVAJllZpspv0f2SZgeLN243AlWmI9JZ/xYIZyFt4RyHiKdHH/qAhxkqqBTOUB2pRAycieBKbrB9pvTFIf/0dsLZUHUt6yC34rGkmlB3ezVgdSJu4Ht8ZuPD1TuKe1YnOPAi/q1g0pXUxgDbjZsiCsnA64RuhKbYcxiLj6lRMyB++/Z7cYyXQob607QuyM9ZGYhCVgEm5miGDMoMD/pEMjhziLDMdR2DOezQHP3vrS9+TjHF8jkS0ZbX6N7H+l8jqoFjOsUkWT1s/oxtXLwjy8fUNSSmNzMfdRrRr6ItFF+aOO58L5wn+8hDqJ6QHvcabO4S6ubaNdEd49v+2aL58nogIXAuJlBuNsXGRq8caWr8cU91kVVxliZiuglWQI/sHCqY1fPG33eRTze6Hw3VOSUY5TO9oAne3D0R0u7wHdt+GL6ENJCg8wVw7nVp7VfYeiXfTQbs5EcBKJAAr8qIzsi2N7l7whP1qS80A6VjK1u2mVdEEl8YPEUeDfWCp5tE+6WHGi/+rXKNZVeNFfE0IrYxoJusNGesBMprS0g0EHGHy1vL6Td4ZqVeYXHJSiiigUQAmAVJUaiiuJ84vSbpyH0P+qGqFhzJ01E+IGo+oUuba1Kkw1SWwfaIqk6zBvNO2q2AsnQTNmqyVokR0nBUjJbbv1xhzZg2P+RyRQ2mvOVqaGl4UddhoahvhugMmltxn2IimElogt3aEBlpUVCJvZZ+7GmXzO90TxQg8UmnKYgcAtQQEauz8Dj5koSfuo+iSfSPSaPUKKlJcA51jCezh1/kfQey+PohSg2uBKkPDbs8knoqxE3XpAONQqatkeXk7qYeHBw4SRFwi5Mce6AwbG+m/xRFDtmsz0+cAVk8Z66jBetIm8gT4X4L9XL2lsy0kqOJm5RXWr0ghf4qqAKLSaiysctf2dy96mAXazFe1Gj/6V4Q2EW74gGpF6QRdNfZg4g5T2B/UA8afdwx1dRPopUBwBQElzQaFmBzyAsnKivjHyy8OLIVkswy0ifmf28Atvy6SoHs7lG5IenEe0NxNoAUxINpSk92RI7SPrnjcL0kIglRGUEi9U+pTaL6GHPTD0XMNkH5L0l7CxmRY+34loSnICUrlvtaKOCRSyFlosTId9cmGncOD3CuZfLZdQqLqsQ3BdAdWEC6wIvTsqiKfcm+p8YCck/oCaYu+Rzxf1jDxdS4a9LoHlOus1Nya4IrbevOe1EbGgjS5lCdVt62fENzqAiUCDUJExqSTPb0GBcxxKv6LHSEKUv25WrDjKgQ0/UnSJZCHBiE74eSGOjPyP2pP0uGAK9Eh28jShCXyAyfUbQwy2bpyD2Q/3BgBkG/G0rett0JYd9wboPqoSLOeziVahXES8rLxqbDXyHDMS6r9nm/c74UAedLncxdijsMiPWDImI0Ao2kXxVlSasjMIpWDGxDG3gYpmZbg1xiC/Gc0hmFG0qf/f1D8FPaBUSnWiHHNhTPnv6ruuPi/5tDF+aPyt6nqXUvsVEgq/RELGygdWC5bLM97B1UqFEvCEL2b0Et8AyYngggDsE5SikhJinx/QzEjtSgwzWFrmjeSm5U9gO9KtM+v7Aa08e3zPJoXoY2WRsk9RS03OlNHL+r69WycJ5iDAcNGNHyjWRHiuFEdyRmpl14SDMdcqvjyuRsKN6q9gOedWhxQHjqvdi95MivEAptmdqzrlQdaRxovEo9JSZpDlSBgOoGdEQBH/8YxJM0aKaLQcd24y72zLdk/4rfPAyEp2lhfCsmRmVJwKpqrso3m7yS1FKkn08uuotqfCvJvIGqQUYBtnyWxMXL8c++1sMlPM9qxMGgOZzJQ0smDr16F7EGrgs+SLOl3rQUdyRUqUi5mtKe6FOFDKg1wrtHmwyxxg/jXihYYV6pw1DjSGc5kX1vwCwJBS3O8p0dVUaRA1SIR8DucB6AU4b4jA3nsKv51YaTEXDiheBpbo95htBt5J0KHxdUYbJrFKRuM5M8MhHqj/Ztg9izlPlu5WqvRdnHY91CXngQMoqRvO4oqb3m5HOinat9CtzpfjM8GQHg2Os5W7Ur7L9pJcBt4rh0mgd+p99/zNddNWxEQ29T3oQZT6w/h7IYB5wFLnfMrye4PUq3AvVmoJmqLOjYEs24rdAPyS2O0dp28irVpmNOv0cGF8F20r5GV2n2/nxARHrkTl5W018l92F3Q2sOrmDFDDHk9ia1WBGO9Bbz3QAqsN7sj5nn0vTlVny/s88dfW4wXPRfSSMhVwCB1tBTsGJc963/AvzuJSi6OzcvhLfOlzuE1k321sjWlAfdg+De22Q8njlbuVURBfFjroliIY7AolyZsS1ARRwUEp77lnL2bWOK55z1fXxBfas8j7CucX+RsRUZRvaqY37xGxbgdS3vnldCz0Vv+OPz9OvdSAsvAd+V0SkyGJ5rm1SaY0BpQ1hspQJXJ3AKDlYHaEteXwml+0Dgb3W6ZAGn9c3Rp2Jf8EP0fptL7DWqaiul9FaKh3qQT8xcW4Sz5Qw4Fv5gtWuHJG0DTUpg/0klJZnr2fIzgrgu3RRCO23lWJUrhlVGTBW+y9vn1hWRC+PT28Fq3Oi3f3xWUi2NPGKvcITY0+cXoowJcwiHIH+xYDwofXLFpQChEgXpqEe0Af36o+qvYcl3eWOPYgvOQBD5LTJTjHugX870m3+QmQrCKh2bMmMIJw8fWPZEr4B/h/fQgep9L1W4awVOuZWEuGpVsM2TWy3g4Q0cYq7Xn2fYkelGtI2STrgdJk/Sa34NpQdLemrhp1mf8X6DUAT2Vsdf5CyY+ulyjFqJgFssBM4kFnF4wOYX+J8qTtaG9oi4zi8WmQcbbOySdD9VKDaJCbXmzbErzv54xjPttmnfOm0uwQltex8PSv+muEp4wXV8vj7lX0R+SaglHa2da8FEjtN2bRsCls/8sdnKhZcuuIZEYczBgoKafMs6OEFJ5zNQLYJ8UPheWmvtC14Ayg/TXVSy8GKBy4XXFd0ofx7Zf+7k3rdKDWFzuOGpVR3vrVc+iEoUL2r3COx5KsCucGZ8mqkBh8PIq6JbZwfbZ64qd7pwlnF262CDggo2WuQ9OOzzX+I9/d6ARxpVb4kbSuRYCRdZW0tpE4/TH4gYQLopl7wGeiK7IaxUDaSWDTJniH8bGOP0SBwsDKvtNyPTb/lPzkbLtntuxF2eTfbsYo5GWl4pKmUDaeheUWxNeKIAvhvOfyRYGAUuHUWpaVPOl7co3nGTU6GkYx+YXFrBBPCw0ZDcisZX/0i++G+rJ1kvySMaxEJJz4Uub7UeV1faDv/iM0zxhypDI9EX4te0WmsFjxeeIv+B5Lf0TI1OYIYfXwIZ8uD/XAWgh3W+lFS8171JggMWj7+jC1Q1gc6i0epjzf6sbDxv5z1ff85TU9qfC5zoKg7kvIgKXnP4bYOvI8np1/JjDt4/AXbpa7wIkqbzU2qoY4za5td8B9NM9ibkvyvDotxW8X+d7KCZlpLJ8Q7hFbc5iQGIkuDNTk3cueCHUmJVL2UxT6WTHoGxsUAxi5Ogb8qtZ3srPNvhpyKcJlSxRZIXgFOw9ITf2vElg3gvmvogmR1KD+Bi+jjRejuH92wg5HJ8gdglvHXIILl5ZU1qw2PPyRjCmDEVkeRYfTQ5SmyZovzvo7Jyp1xuFyU3EksPaKAYDfqq9Y/ocZ4GQ2n23rWftHZeLw6zqip9QZHeUhSmrx6495BHNqqvPpUWaVEaYWqtEN8fIdviX8V4gsV9zh8BFUvfQIBTqJpC6Ko+yj51WobTjvyfEfMcf7BRBl9uBSlhITubbhfcIbpU1oGsbYJY5CY7OeUdVszsYpqV8qzfHyrZ/kdD/iEi64isn2gt8TaG9u+beLSZp17QqesO0BuxpUS2tCvJF9Ri1kqnIkjUxWqlapc858D+EkcQ/1S8SCbpeI5Bhjtoh8MOdKsifKs/CHLKcdeHzJyggwu5m9H0S3axoumfCqYlYj3W5rkGl63yM88dAVr0mv6T5ch0+hgJfyXl7tRurMlUUhRNqV2Ls40OMnGMeRH4IYCzcHPtjliSMDzXd19VKofhq0z7Cl8T+RXgZEpaxjNjjfeXS9yJ7yaSWCqgJXAbZrqjrkp1Z807wvC/5sWf3fljTKyldxHP2exqTKGzjZFAsWCvvdEUyqTVfsu7jw9M6/FPZEdNN92YyqLNuMWEXX+HeAkfRuHyZ6Vgh22Jqw/TP8S1iiLlmOOBQkrhZWgEpKOjysyCXnWeuqOhCG4w8Z3Y73HVXSwaqq5XsGCIRPfiA7qzxEvct/Rp1g+Re1ZBfWTuCSwPorGEOSgDtTXwu88NZtskMdM6igFXWZogdBPhX2VgF6F8QxhGR+PKh8IUtp8EZhnXiQfHp8hdYO7WNq82S2BeMD7LmTMQ8UYo3aQNx7qpx3QSdlti6LuMmdEPGUoHmEcGBsqFhkrQYTxcIF/OLrvAquMLiU8/t64tqfySR9/eBiGFCvnNUnTCL7Dy3TmjlfrIi/PPV0vRSPSjARvtREUZHvR3JEMc6yaw1b3W7xAwl/j8dRdVBxXCfLMXj3Tik7QhTx+NUAPEdzcjfW48HrIyFl1j0BK+aRorTuU4TkuMh0EM3sRzvHYGvVimxuUcDjv6jue9imzI28CO2tmaAUFja06T7WDDzbwFCEo//9wY9hCWlkh5gAAAABJRU5ErkJggg==";
let hl = !1;
class _l extends al {
    constructor(e) {
        var t;
        t = _l.prototype, hl || (hl = !0, hi(t, [{
            name: "occluderBias",
            value: .05
        }, {
            name: "samplingRadius",
            value: 20
        }, {
            name: "attenuation"
        }])), super(e);
        this._attenuation = [1, 5], this._deferProgram = ga(ea, ta), this._program = ga(Qo, $o), this._blendProgram = ga(na, ia), this._deferFramebuffer = new bo({
            width: e._canvas.width,
            height: e._canvas.height,
            depth: !0,
            stencil: !1,
            format: "RGBA16F",
            colorCount: 2
        }), this._ssaoFramebuffer = new bo({
            width: e._canvas.width,
            height: e._canvas.height,
            depth: !1,
            stencil: !1
        }), this._normalMapTexture = new nr({
            url: fl,
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
            e.data._viewNormalMatrix || (e.data._viewNormalMatrix = b.create(), e.data._viewModelMatrix = I.create()), I.multiply(e.data._viewModelMatrix, r.viewMatrix, e.data.worldMatrix), b.normalFromMat4(e.data._viewNormalMatrix, e.data._viewModelMatrix), n._deferProgram.bindUniforms({
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
class ml {
    constructor(e, t = {}) {
        const n = this,
            i = e._canvas,
            o = e._camera;
        n._scene = e, n._canvas = i, n._camera = o, n._opaqueList = [], n._transparentList = [], n._allList = [], n._dirty = !0, n._lightDirty = !1, n._shadowLightMap = {
            DIRECTION: 0,
            POINT: 0,
            SPOT: 0
        }, n._shadowLightCount = 0, n._programs = {}, n._uniforms = {}, n._materialUniforms = {}, n._dataUniforms = {
            u_color: Te.fromValues(0, 0, 0, 0)
        }, n._pickingPrograms = {}, n._pickingUniforms = {}, n._shadowMapPrograms = {}, n._shadowMapUniforms = {}, n._viewport = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, this._useMultisample = !ii(), n._lightMap = {
            DIRECTION: [],
            POINT: [],
            SPOT: []
        }, n._lightDefines = {
            DIRECTION: new or("DIRECTION_LIGHT_COUNT", 0),
            POINT: new or("POINT_LIGHT_COUNT", 0),
            SPOT: new or("SPOT_LIGHT_COUNT", 0)
        }, e.lights.on("all", n._handleLightChange, n), n._time = 0, n._frameTime = 0, n._lastTime = 0, n._resolution = Lt.create(), o.on("all", () => {
            this._lightDirty = !0, e._needSort = !0, this.redraw()
        });
        const a = i.getContext("webgl2", {
            alpha: t.alpha || !1,
            depth: null == t.depth || t.depth,
            premultipliedAlpha: t.premultipliedAlpha || !1,
            preserveDrawingBuffer: !0,
            antialias: null == t.antialias || t.antialias,
            stencil: t.stencil || !1
        });
        if (!("undefined" != typeof WebGL2RenderingContext && a instanceof WebGL2RenderingContext)) return void xi(document.body);
        n._gl = a, e._gl = a, this.state = new ol(a);
        const r = a.getExtension("EXT_texture_filter_anisotropic");
        r && (a._anisotropicExt = r, a._max_anisotropy = a.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT)), a.getExtension("EXT_color_buffer_float"), a.getExtension("OES_texture_float_linear"), a._s3tc = a.getExtension("WEBGL_compressed_texture_s3tc");
        const s = a.getExtension("WEBGL_compressed_texture_s3tc_srgb");

        function l() {
            a.cache && a.cache.textures.trigger.off("load", n._handleImageLoaded, n), a.cache = {
                textures: new il(a)
            }, a.cache.textures.trigger.on("load", n._handleImageLoaded, n), a.cache.quadVao = new ki({
                buffers: {
                    position: new Float32Array([1, 1, 0, -1, 1, 0, -1, -1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0]),
                    uv: new Float32Array([1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1])
                }
            }), a.cache.vaos = {}, a.enable(a.CULL_FACE), a.frontFace(a.CCW), a.depthMask(!0), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), n.state.setDefaultBlendMode(), n._outputProgram = ga(Ao, Co), n._outputProgram.use(a), n._outputProgram.bindUniforms({
                u_sampler: 0
            }), n._debugProgram = ga(Ao, Co), n._debugProgram.use(a), n._debugProgram.bindUniforms({
                u_sampler: 0
            }), n._renderPass = [], n._useMultisample ? (n._inFramebuffer = new bo({
                width: a.canvas.width,
                height: a.canvas.height,
                depth: !0,
                stencil: !0
            }), n._outFramebuffer = new bo({
                width: a.canvas.width,
                height: a.canvas.height,
                depth: !0,
                stencil: !0
            }), n._colorRenderbuffer = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, n._colorRenderbuffer), a.renderbufferStorageMultisample(a.RENDERBUFFER, 4, a.RGBA8, a.canvas.width, a.canvas.height), n._depthRenderbuffer = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, n._depthRenderbuffer), a.renderbufferStorageMultisample(a.RENDERBUFFER, 4, a.DEPTH24_STENCIL8, a.canvas.width, a.canvas.height), a._renderFramebuffer = a.createFramebuffer(), n._renderFramebuffer = a._renderFramebuffer, a.bindFramebuffer(a.FRAMEBUFFER, n._renderFramebuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.RENDERBUFFER, n._colorRenderbuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, n._depthRenderbuffer), a.bindRenderbuffer(a.RENDERBUFFER, null), a.bindFramebuffer(a.FRAMEBUFFER, null), n._inFramebuffer._sharedFramebuffer = n._outFramebuffer, n._outFramebuffer._sharedFramebuffer = n._inFramebuffer) : (a._renderFramebuffer = null, n._renderFramebuffer = null), n._outlineEffect = new sl(e), n._outlineEffect.on("all", e._handleChange, e), n._bloomEffect = new cl(e), n._bloomEffect.on("all", e._handleChange, e), n._glowEffect = new dl(e), n._glowEffect.on("all", e._handleChange, e), n._ssaoEffect = new _l(e), n._ssaoEffect.on("all", e._handleChange, e);
            const t = I.create(),
                r = I.create(),
                s = I.create(),
                l = n._camera.position;
            n.render = (c, u) => {
                e.axis.fixAllSize(o);
                const d = e._xrManager._xrSession,
                    f = e._xrManager._xrRefSpaceOffset,
                    h = n._uniforms;
                let _;
                if (n._time = c, u && d && f && (_ = u.getViewerPose(f))) {
                    e._xrManager.handleInputSource(u, _, f), n._preDraw(c);
                    const {
                        session: i
                    } = u, o = i.renderState.baseLayer;
                    a.bindFramebuffer(a.FRAMEBUFFER, o.framebuffer);
                    const d = e._clearColor;
                    a.clearColor(d[0], d[1], d[2], d[3]), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), _.views.forEach((e, i) => {
                        const u = o.getViewport(e);
                        a.viewport(u.x, u.y, u.width, u.height), I.copy(t, e.transform.inverse.matrix), I.copy(r, e.projectionMatrix), I.mul(s, r, t);
                        const d = e.transform.position;
                        J.set(l, d.x, d.y, d.z), h.u_eyePosition = l, h.u_projectViewMatrix = s, h.u_viewMatrix = t, h.u_projectMatrix = r, i >= 1 && a.clear(a.DEPTH_BUFFER_BIT), n.draw(c)
                    })
                }
                if (!1 !== e.onAnimationFrame(c)) {
                    if (e._timePerFrame > 0 && !_) {
                        if (n._frameTime += c - n._lastTime, n._lastTime = c, n._frameTime < e._timePerFrame) return;
                        n._frameTime %= e._timePerFrame
                    }
                    if (n._dirty || _) {
                        if (_ || (n._preDraw(c), h.u_eyePosition = o.position, h.u_projectViewMatrix = o.projectViewMatrix, h.u_viewMatrix = o.viewMatrix, h.u_projectMatrix = o.projectMatrix), a.bindFramebuffer(a.FRAMEBUFFER, n._renderFramebuffer), n._setViewport(0, 0, i.width, i.height), n._useMultisample) a.clearBufferfv(a.COLOR, 0, e._clearColor), a.clearBufferfi(a.DEPTH_STENCIL, 0, 1, 0);
                        else {
                            const t = e._clearColor;
                            a.clearColor(t[0], t[1], t[2], t[3]), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
                        }
                        n.draw(c), n._postDraw(), e.onAfterAnimationFrame()
                    }
                }
            };
            const c = t => {
                n._aniamtionId = window.requestAnimationFrame(c), e._xrManager._xrSession || n.render(t, null)
            };
            n._aniamtionId = window.requestAnimationFrame(c)
        }
        a._s3tc && s && (a._s3tc.COMPRESSED_SRGB_S3TC_DXT1_EXT = s.COMPRESSED_SRGB_S3TC_DXT1_EXT, a._s3tc.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, a._s3tc.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, a._s3tc.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), a.initingTextures = {}, i.addEventListener("webglcontextlost", e => {
            Yn("webglcontextlost", e), e.preventDefault(), Object.keys(a.initingTextures).forEach(e => {
                const t = a.initingTextures[e];
                t.onload && (t.onload = null), t.onreadystatechange && (t.onreadystatechange = null), t.onmessage && (t.onmessage = null)
            }), a.initingTextures = {}, n._aniamtionId && window.cancelAnimationFrame(n._aniamtionId)
        }), i.addEventListener("webglcontextrestored", e => {
            Yn("webglcontextrestored", e), l()
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
        }), vr()._dirty = !0), this._sort(), t._dirty = !1, t._invalidatePicking = !0, i._enableAnimation && i._handleAnimation(e), o._nextSamplerId = 0, o.u_fogColor = i._fogColor, o.u_fogNear = i._fogNear, o.u_fogFar = i._fogFar, o.u_ambientLightColor = i._ambientColor, o.u_iblDiffuseIntensity = i._iblDiffuseIntensity, o.u_iblSpecularIntensity = i._iblSpecularIntensity, o.u_exposure = i._exposure, o.u_time = e / 1e3, o.u_resolution = t._resolution;
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
            }), e._useMultisample && (e._outFramebuffer.bind(t), t.bindFramebuffer(t.READ_FRAMEBUFFER, e._renderFramebuffer), t.blitFramebuffer(0, 0, t.canvas.width, t.canvas.height, 0, 0, t.canvas.width, t.canvas.height, t.COLOR_BUFFER_BIT, t.NEAREST)), n._enableSSAO && ([e._inFramebuffer, e._outFramebuffer] = [e._outFramebuffer, e._inFramebuffer], e._ssaoEffect.pass(e._inFramebuffer, e._outFramebuffer)), n.glows.size && e._glowEffect.pass(null, e._outFramebuffer), e._bloomEffect.enabled) e._bloomEffect.pass(null, e._outFramebuffer);
        else if (e._useMultisample) {
            t.bindFramebuffer(t.FRAMEBUFFER, null);
            const i = e._viewport;
            t.viewport(i.x, i.y, i.width, i.height);
            const o = n._clearColor;
            t.clearColor(o[0], o[1], o[2], o[3]), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), e._outputProgram.use(t), e._outFramebuffer.bindTexture(0), t.cache.quadVao.draw(t)
        }
    }
    _draw() {
        this.state.setBlend(!1), this._opaqueList.forEach(e => {
            this._drawData(e)
        }), this._hideSkybox || this._drawSkybox(), this.state.setBlend(!0), this._transparentList.forEach(e => {
            this._drawData(e)
        }), this.state.setBlend(!1), this.state.setDepthMask(!0)
    }
    _drawSkybox() {
        const {
            skyboxImage: e
        } = this._scene, t = this._gl;
        e && (this._skyboxVao || (this._skyboxVao = new ki({
            buffers: Zi(2)
        })), this._skyboxProgram || (this._skyboxProgram = ga(la, ca), this._skyboxProgram.bindUniform("u_sampler", 0)), this.state.setCullFace(!1), this.state.setStencilTest(!1), this._skyboxProgram.use(t), this._skyboxProgram.bindUniform("u_gammaOutput", !this._bloomEffect.enabled), this._skyboxProgram.bindUniform("u_viewMatrix", this._camera.viewMatrix), this._skyboxProgram.bindUniform("u_projectMatrix", this._camera.projectMatrix), t.cache.textures.get(e, !0).bind(t, 0), this._skyboxVao.draw(t))
    }
    _getOverrideMaterial(e) {
        return e.material
    }
    _drawData(e) {
        const {
            data: t,
            lod: n,
            vao: i
        } = e, o = this._getOverrideMaterial(e), a = this, r = a._gl, s = a._scene, l = a._dataUniforms, c = a._uniforms, u = a._programs;
        if (a.state.setMaterialState(o), o.draw) o.draw(n, s, i);
        else {
            const e = o._key;
            let d = u[e];
            d || (d = function (e) {
                let t = `#define SHADER_NAME ${e.TYPE}_VERTEX\n`,
                    n = `#define SHADER_NAME ${e.TYPE}_FRAGMENT\n`,
                    i = "";
                return e._keys.forEach(e => {
                    e.name ? i += `#define ${e.name} ${e.value}\n` : i += `#define ${e}\n`
                }), t += i, t += e.VERTEX_SHADER, n += i, ga(t, n += e.FRAGMENT_SHADER)
            }(o), u[e] = d), d.use(r) && d.bindUniforms(c), a._setDataUniform(l, t, n), o !== r._material && (a._materialUniforms._nextSamplerId = c._nextSamplerId, o._bindUniforms(a._materialUniforms, r, s), d.bindUniforms(a._materialUniforms)), d.bindUniforms(l), i.draw(r)
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
        const c = o._shadowMapKey;
        let u = l[c];
        u || (u = function (e) {
            let t = `#define SHADER_NAME PICKING_${e.TYPE}_VERTEX\n`,
                n = `#define SHADER_NAME PICKING_${e.TYPE}_FRAGMENT\n`,
                i = "";
            return e._shadowMapKeys.forEach(e => {
                e.name ? i += `#define ${e.name} ${e.value}\n` : i += `#define ${e}\n`
            }), t += i, n += i, ga(t += Oo, n += Lo)
        }(o), l[c] = u), t instanceof kr && (s.u_viewMatrix = this._camera.viewMatrix, s.u_projectMatrix = this._camera.projectMatrix, s.u_modelMatrix = t.worldMatrix, s.u_vertical = t.material.vertical, s.u_scale = t.scale), u.use(a) && u.bindUniforms(s);
        const {
            id: d
        } = t, f = r.u_color;
        f[0] = (d >> 24 & 255) / 255, f[1] = (d >> 16 & 255) / 255, f[2] = (d >> 8 & 255) / 255, f[3] = (255 & d) / 255, this._setDataUniform(r, t, n), u.bindUniforms(r), i.draw(a)
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
        const c = o._shadowMapKey;
        let u = l[c];
        u || (u = function (e) {
            let t = `#define SHADER_NAME SHADOW_${e.TYPE}_VERTEX\n`,
                n = `#define SHADER_NAME SHADOW_${e.TYPE}_FRAGMENT\n`,
                i = "";
            return e._shadowMapKeys.forEach(e => {
                e.name ? i += `#define ${e.name} ${e.value}\n` : i += `#define ${e}\n`
            }), t += i, n += i, ga(t += Eo, n += Po)
        }(o), l[c] = u), u.use(a) && u.bindUniforms(s), this._setDataUniform(r, t, n), u.bindUniforms(r), i.draw(a)
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
        for (let s, l = 0, c = o.length; l < c; l++)
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
                    const a = o.material || (o instanceof kr ? (wr || (wr = new br), wr) : vr()),
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
                        for (let e = 0; e < Ds.CASCADED_COUNT; e++) t[`u_shadowMapProjectViewMatrix_${e}`] = n._shadowMapProjectViewMatrix[e];
                        t.u_cascadedEnd = n._cascadedEnd, e._shadowLightMap[i]++
                    }
                    if ("POINT" === i && e._shadowLightMap.POINT < 4 && e._shadowLightMap[i]++, "SPOT" === i && e._shadowLightMap.SPOT < 4) {
                        const o = e._shadowLightMap[i];
                        t[`u_spotShadowMapProjectViewMatrix_${o}`] = n._shadowMapBiasProjectViewMatrix, e._shadowLightMap[i]++
                    }
                    e._shadowLightCount++
                }
                const a = `u_${i.toLowerCase()}Lights[${o}].`;
                J.scale(n.__diffuseColor, n.diffuseColor, n.intensity), J.scale(n.__specularColor, n.specularColor, n.intensity), t[`${a}shadow`] = n.shadow, t[`${a}shadowDarkness`] = n.shadowDarkness, t[`${a}diffuseColor`] = n.__diffuseColor, t[`${a}specularColor`] = n.__specularColor, n._validate && n._validate(), "DIRECTION" !== i && "SPOT" !== i || (t[`${a}direction`] = n.__direction), "POINT" !== i && "SPOT" !== i || (t[`${a}position`] = n.__position, t[`${a}distance`] = n.distance), "SPOT" === i && (t[`${a}innerAngle`] = Math.cos(n.innerAngle), t[`${a}outerAngle`] = Math.cos(n.outerAngle))
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
        Lt.set(this._resolution, i.width, i.height), this._useMultisample && this._inFramebuffer && (this._inFramebuffer.setSize(i.width, i.height), this._outFramebuffer.setSize(i.width, i.height), this._useMultisample && (n.bindRenderbuffer(n.RENDERBUFFER, this._colorRenderbuffer), n.renderbufferStorageMultisample(n.RENDERBUFFER, 4, n.RGBA8, n.canvas.width, n.canvas.height), n.bindRenderbuffer(n.RENDERBUFFER, this._depthRenderbuffer), n.renderbufferStorageMultisample(n.RENDERBUFFER, 4, n.DEPTH24_STENCIL8, n.canvas.width, n.canvas.height), n.bindRenderbuffer(n.RENDERBUFFER, null)), this._bloomEffect.setSize(i.width, i.height), this._ssaoEffect.setSize(i.width, i.height), this._outlineEffect.setSize(i.width, i.height)), this.redraw()
    }
    getDataAt(e) {
        const t = this,
            n = t._scene,
            i = t._gl,
            o = n.getPointAt(e),
            a = new Uint8Array(4),
            r = t._pickingUniforms;
        t._pickingFramebuffer || (t._pickingFramebuffer = new bo({
            width: 512,
            height: 512,
            depth: !0
        }));
        const s = t._pickingFramebuffer._width,
            l = t._pickingFramebuffer._height,
            c = Math.floor(o.x * s / n._width),
            u = Math.floor(l - o.y * l / n._height);
        t._invalidatePicking ? (t._pickingFramebuffer.bind(i), r.u_projectViewMatrix = t._camera.projectViewMatrix, t._drawPicking(), t._invalidatePicking = !1) : i.bindFramebuffer(i.FRAMEBUFFER, t._pickingFramebuffer._framebuffer), i.readPixels(c, u, 1, 1, i.RGBA, i.UNSIGNED_BYTE, a), i.bindFramebuffer(i.FRAMEBUFFER, null);
        const d = (a[0] << 24) + (a[1] << 16) + (a[2] << 8) + a[3];
        return n.datas.getById(d)
    }
    createProgram(e) {
        return new pa(e)
    }
    createTexture(e) {
        return il.createTexture(e)
    }
    createFramebuffer(e) {
        return new bo(e)
    }
    createVertexArray(e) {
        return new ki(e)
    }
    dispose() {
        Yi(this._gl), this._gl.cache.textures.trigger.off("load", this._handleImageLoaded, this), this._scene._xrManager.dispose(), this._aniamtionId && (window.cancelAnimationFrame(this._aniamtionId), this._aniamtionId = null)
    }
}
let pl, gl, vl, xl, bl, wl, Ml, Sl, yl, Tl, El, Pl, Al, Cl, Il, Rl, Ol, Ll = !1,
    Nl = !1,
    Dl = !1,
    Fl = 0,
    Ul = null,
    Vl = null,
    Bl = !1;
class Hl {
    constructor(e) {
        Bl || (Bl = !0, pl = Lt.create(), gl = Lt.create(), vl = J.create(), xl = J.create(), bl = J.fromValues(1, 1, 1), wl = I.create(), Ml = J.create(), Sl = J.create(), yl = J.create(), Tl = J.create(), El = J.create(), Pl = J.create(), Al = ot.create(), Cl = ot.create()), this._scene = e, this._renderer = e._renderer, this._gl = e._renderer._gl, this._rotateStep = 45, this._trackingSpaceHeadingDegrees = 0, this._controllers = {}
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
        this._xrSupported || Zn(this._xrFailReason), !this._xrSupported || this._xrSession || this._enteringXR || (this._enteringXR = !0, navigator.xr.requestSession("immersive-vr", {
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
            Zn("Immersive vr not supported")
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
                if (i && (a.visible = !0, a.modelMatrix = i.transform.matrix, this._cursorRay && this._cursorPoint && r && (J.set(vl, 0, 0, 0), J.transformMat4(vl, vl, r.transform.matrix), J.set(xl, 0, 0, -1), J.transformMat4(xl, xl, r.transform.matrix), J.sub(xl, xl, vl), J.normalize(xl, xl), Vl = this._scene.intersect(vl, xl), Ll || (this._cursorRay.visible = !0, Vl ? (this._cursorPoint.visible = !0, this._cursorPoint.position = Vl.position, bl[2] = Vl.distance / 10, I.fromScaling(wl, bl), I.mul(wl, r.transform.matrix, wl), this._cursorRay.modelMatrix = wl) : this._cursorRay.modelMatrix = r.transform.matrix)), t.gamepad))
                    if (t.gamepad.buttons[2].pressed) {
                        if (o = !0, Nl = !1, this._grid && this._jumpRay && (Ll = !!Vl, this._grid.visible = !0, this._jumpRay.visible = Ll, Ll)) {
                            const e = new Float32Array([vl[0], vl[1], vl[2], Vl.position[0], Vl.position[1], Vl.position[2]]);
                            this._jumpRay.vao.setPosition(e)
                        }
                    } else if (t.gamepad.buttons[2].touched) Dl ? Ul === t && Lt.copy(gl, t.gamepad.axes) : (Dl = !0, Ul = t, Lt.copy(pl, t.gamepad.axes), Lt.copy(gl, t.gamepad.axes));
                else if (Dl && Ul === t) {
                    const e = gl[0] - pl[0];
                    Math.abs(e) > .1 && (Nl = !0, Fl = -Math.sin(e) * this.rotateStep), Dl = !1
                }
            }
        }), o || Ll && (Ll = !1, this._teleport(t, Vl.position)), Nl && (Nl = !1, this._teleport(t, null), Fl = 0)
    }
    _teleport(e, t) {
        J.set(Ml, e.transform.position.x, 0, e.transform.position.z), J.sub(yl, Ml, Pl), J.copy(Sl, Ml), t && ([Sl[0], , Sl[2]] = t, Sl[1] = 0), ot.identity(Al), ot.rotateY(Al, Al, Fl * Math.PI / 180), J.transformQuat(Tl, yl, Al), this._trackingSpaceHeadingDegrees += Fl, J.sub(Pl, Sl, Tl), ot.identity(Cl), ot.rotateY(Cl, Cl, -this._trackingSpaceHeadingDegrees * Math.PI / 180), J.negate(El, Pl), J.transformQuat(El, El, Cl);
        const n = new XRRigidTransform({
            x: El[0],
            y: El[1],
            z: El[2]
        }, {
            x: Cl[0],
            y: Cl[1],
            z: Cl[2],
            w: Cl[3]
        });
        this._xrRefSpaceOffset = this._xrRefSpaceBase.getOffsetReferenceSpace(n)
    }
}
let Gl = !1;
class kl extends ro {
    constructor(e, t = {}) {
        var n;
        n = kl.prototype, Gl || (Gl = !0, Il = J.create(), Rl = J.fromValues(1, 1, 1), Ol = ot.create(), hi(n, [{
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
        e && ("string" == typeof e ? o = document.getElementById(e) : "string" == typeof e.canvas ? o = document.getElementById(e.canvas) : e.canvas instanceof HTMLCanvasElement && (o = e.canvas)), o || (o = document.createElement("canvas")), o.tabIndex = 0, o.style.outline = "none", i.selection = new qr, i.glTFResource = new ir, i.selection.on("all", i._handleDataSelectionChange, i), i.datas = new Hr, i.datas.on("all", i._handleDataChange, i), i.lights = new Hr, i.skins = new Set, i.glows = new Set, i.blooms = new Set, i.outlines = new Set, i._particleSystem = new ds(i), i.animations = [], i._fps = 30, i._timePerFrame = i._fps > 0 ? 1e3 / i._fps : 0, i._gammaCorrection = !0, i._canvas = o, i._needSort = !0, i._camera = new ls(e.camera), i._camera.attach(o), i._fogColor = J.fromValues(1, 1, 1), i._ambientColor = J.fromValues(.1, .1, .1), i._clearColor = Te.fromValues(0, 0, 0, 1), i._handleResize = mi(() => {
            i.setSize(window.innerWidth, window.innerHeight)
        }), null == e.enableAutoResize && (i.enableAutoResize = !0), i._renderer = new ml(i, t), i.setSize(window.innerWidth, window.innerHeight), i.on("all", i._handleChange, i), i.axis = new Vr({
            scene: i
        }), i.add(i.axis), i._xrManager = new Hl(i), i._xrManager.init(), "string" != typeof e && Object.keys(e).forEach(t => {
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
    onAnimationFrame(e) {}
    onAfterAnimationFrame() {}
    redraw() {
        this._renderer.redraw()
    }
    loadOBJ(e, t, n) {
        const i = n && n.onlyLoad;
        return nl.parse(e, t).then(e => {
            const t = [],
                {
                    buffers: n
                } = e;
            n.normal || (n.normal = Wi(n.position, n.index)), n.tangent || (n.tangent = qi(n)), e.parts.forEach(e => {
                const i = {
                    vao: new ki({
                        buffers: n,
                        counts: e.counts
                    }),
                    material: e.material
                };
                t.push(i)
            });
            const o = new Lr;
            return o.mesh = {
                primitives: t
            }, i || this.add(o), o
        })
    }
    registerResource(e) {
        const {
            url: t,
            arrayBuffer: n
        } = e, i = e.name || vi(t), o = e.options || {};
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
            zs.parse(e, (e, o) => {
                e ? i && i(e) : this._loadGLTF(o, t, n)
            })
        })
    }
    loadGLTFData(e, t, n) {
        return new Promise((i, o) => {
            zs.parseBinaryData(e, t, (e, t) => {
                e ? o && o(e) : this._loadGLTF(t, n, i)
            }, n && n.byteOffset)
        })
    }
    _loadGLTF(e, t, n) {
        const i = [],
            o = new Lr,
            a = new Array(e.nodes.length),
            r = [],
            s = [],
            {
                textures: l
            } = e,
            c = t && t.onlyLoad,
            u = !c && t && t.loadLights,
            d = !c && t && t.loadCameras,
            f = t && t.generateNormal,
            h = t && t.generateTangent,
            _ = t && t.forceTextureOptions,
            m = !(!t || !t.useIBLWhenMissingTexture),
            p = t && t.defaultMaterialOptions,
            g = !t || null == t.loadTexture || t.loadTexture,
            v = [],
            x = this._gl;
        let b = Te.fromValues(.5, .5, .5, 1);

        function w(e, t, n) {
            let i = n;
            _ && (i = {
                ...n,
                ..._
            }), e[t] = i, g && v.push(x.cache.textures.get(e[t])._init(x))
        }
        if (t && t.defaultDiffuseColor && (b = t.defaultDiffuseColor), e.meshes.forEach(t => {
                const n = [],
                    o = {
                        primitives: n
                    };
                t.name && (o.name = t.name), i.push(o), t.primitives.forEach(t => {
                    const {
                        buffers: i
                    } = t;
                    f && !i.normal && (i.normal = Wi(i.position.data, i.index)), f && i.position0 && !i.normal0 && (i.normal0 = Wi(i.position0.data, i.index)), h && !i.tangent && i.uv && (i.tangent = qi(i));
                    const o = {
                        vao: new ki(t)
                    };
                    let a, r;
                    if (null != t.material && e.materials[t.material]) {
                        const n = (r = e.materials[t.material]).extensions && r.extensions.KHR_materials_common,
                            i = r.extensions && r.extensions.KHR_technique_webgl,
                            o = r.extensions && r.extensions.KHR_techniques_webgl;
                        if (i)(a = new pr(p)).flipY = !1, a.light = !1, i.values && null != i.values.diffuse && w(a, "diffuseImage", l[i.values.diffuse]);
                        else if (o) {
                            if ((a = new pr(p)).flipY = !1, a.light = !1, o.values && o.values.u_diffuse) {
                                const e = o.values.u_diffuse.index;
                                w(a, "diffuseImage", l[e])
                            }
                        } else if (n) {
                            const {
                                values: e
                            } = n;
                            (a = new pr(p)).flipY = !1, r.extensions && r.extensions.KHR_materials_unlit && (a.light = !1), e.diffuse.length ? a.diffuseColor = e.diffuse : w(a, "diffuseImage", l[e.diffuse.index]), e.emission && (e.emission.length ? a.emissionColor = e.emission.slice(0, 3) : w(a, "emissionImage", l[e.emission.index])), e.specular && (e.specular.length ? a.specularColor = e.specular.slice(0, 3) : w(a, "specularImage", l[e.specular.index])), a.shininess = e.shininess, a.doubleSided = e.doubleSided, a.transparency = e.transparency, a.transparent = e.transparent
                        } else {
                            (a = new hr(p)).flipY = !1, r.extensions && r.extensions.KHR_materials_unlit && (a.light = !1), "BLEND" === r.alphaMode ? a.transparent = !0 : "MASK" === r.alphaMode && (a.alphaTest = !0, null != r.alphaCutoff && (a.alphaCutoff = r.alphaCutoff)), a.doubleSided = !0 === r.doubleSided;
                            const {
                                pbrMetallicRoughness: e
                            } = r, t = r.extensions && r.extensions.KHR_materials_pbrSpecularGlossiness;
                            if (t) {
                                a.type = "specular", t.diffuseFactor && (a.diffuseFactor = t.diffuseFactor);
                                const {
                                    diffuseTexture: e
                                } = t;
                                e && (w(a, "diffuseImage", l[e.index]), a.diffuseImageUV = e.texCoord || 0), null != t.specularFactor && (a.specularFactor = t.specularFactor), null != t.glossinessFactor && (a.glossinessFactor = t.glossinessFactor);
                                const {
                                    specularGlossinessTexture: n
                                } = t;
                                if (n) {
                                    const e = n.index;
                                    w(a, "specularGlossinessImage", l[e]), a.enableIBL = !0, a.specularGlossinessImageUV = n.texCoord || 0
                                } else a.enableIBL = m
                            } else if (e) {
                                e.baseColorFactor && (a.baseColorFactor = e.baseColorFactor);
                                const {
                                    baseColorTexture: t
                                } = e;
                                if (t) {
                                    w(a, "baseColorImage", l[t.index]), a.baseColorImageUV = t.texCoord || 0;
                                    const e = t.extensions && t.extensions.KHR_texture_transform;
                                    e && (e.scale && (a.textureScale = e.scale), e.offset && (a.textureOffset = e.offset), e.rotation && (a.textureRotation = e.rotation))
                                }
                                null != e.metallicFactor && (a.metallicFactor = e.metallicFactor), null != e.roughnessFactor && (a.roughnessFactor = e.roughnessFactor);
                                const {
                                    metallicRoughnessTexture: n
                                } = e;
                                if (n) {
                                    const e = n.index;
                                    w(a, "metallicRoughnessImage", l[e]), a.enableIBL = !0, a.metallicRoughnessImageUV = n.texCoord || 0
                                } else a.enableIBL = m
                            }
                            const {
                                normalTexture: n
                            } = r;
                            n && (w(a, "normalImage", l[n.index]), a.normalScale = n.scale || 1, a.normalImageUV = n.texCoord || 0);
                            const {
                                emissiveTexture: i
                            } = r;
                            i && (w(a, "emissiveImage", l[i.index]), a.emissiveImageUV = i.texCoord || 0, r.emissiveFactor && (a.emissiveColor = r.emissiveFactor));
                            const {
                                occlusionTexture: o
                            } = r;
                            o && (e && e.metallicRoughnessTexture && e.metallicRoughnessTexture.index === o.index ? a.enableAOChannel = !0 : (w(a, "occlusionImage", l[o.index]), a.occlusionStrength = o.strength || 1, a.occlusionImageUV = o.texCoord || 0))
                        }
                        const s = r.extensions && r.extensions.KHR_blend;
                        s && ([a.blendEquationColor, a.blendEquationAlpha] = s.blendEquation, [a.blendFuncSrcColor, a.blendFuncDstColor, a.blendFuncSrcAlpha, a.blendFuncDstAlpha] = s.blendFactors)
                    } else(a = new pr(p)).diffuseColor = b;
                    r && r.name && (a.name = r.name), o.material = a, n.push(o)
                })
            }), e.nodes.forEach((e, t) => {
                const n = new Lr,
                    o = {};
                if (n._info = o, e.name && (o.name = e.name, n.name = e.name), e.rotation && (o.rotation = e.rotation, n.quaternion = e.rotation), e.translation && (o.translation = e.translation, n.position = e.translation), e.scale && (o.scale = e.scale, n.scale = e.scale), e.matrix && (n.modelMatrix = e.matrix), e.weights && (o.weights = e.weights), null != e.mesh && (n.mesh = i[e.mesh]), e.skin && (n.skin = e.skin), e.light) {
                    const t = e.light;
                    let i;
                    "directional" === t.type ? i = new Ds({
                        direction: J.fromValues(0, 0, -1)
                    }) : "point" === t.type ? i = new ks({
                        position: J.fromValues(0, 0, 0)
                    }) : "spot" === t.type && (i = new Hs({
                        direction: J.fromValues(0, 0, -1),
                        position: J.fromValues(0, 0, 0),
                        innerAngle: t.innerConeAngle || 0,
                        outerAngle: t.outerConeAngle || Math.PI / 4
                    })), i && (t.range && (i.distance = t.range || Number.MAX_VALUE), t.name && (i.name = t.name), i.specularColor = t.color || J.fromValues(1, 1, 1), i.diffuseColor = i.specularColor, i.intensity = t.intensity || 1, i.parent = n, r.push(i))
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
            I.getTranslation(t, e), J.copy(n, o.boundingBox.boundingSphere.center), this.camera.position = t, this.camera.target = n;
            const i = s[0].camera;
            "perspective" === i.type && (this.camera.fovy = 180 * i.perspective.yfov / Math.PI, this.camera.far = i.perspective.zfar, this.camera.near = i.perspective.znear)
        }
        a.forEach(e => {
            if (e.skin) {
                const {
                    skin: t
                } = e;
                if (t.node) return;
                t.node = e, null != t.skeleton && (t.node = a[t.skeleton]), t._inverseNodeMatrix = I.create();
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
                    I.invert(e, t.node.worldMatrix), t._joints.forEach((n, i) => {
                        I.multiply(t.jointMatrixs[i], n.worldMatrix, t.inverseBindMatrices[i]), I.multiply(t.jointMatrixs[i], e, t.jointMatrixs[i]), I.invert(t.jointNormalMatrixs[i], t.jointMatrixs[i]), I.transpose(t.jointNormalMatrixs[i], t.jointNormalMatrixs[i])
                    })
                }, t.update()
            }
        }), e.animations.forEach(e => {
            e.enabled = !1, e.channels.forEach(e => {
                e.node = a[e.node]
            }), c || this.addAnimation(e)
        }), u && r.forEach(e => {
            this.addLight(e)
        }), n && Promise.all(v).then(() => {
            c || this.add(o), n({
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
                let r, s, l, c;
                n.some((e, t) => 0 !== t && e > a && (r = n[t - 1], s = e, l = i[t - 1], c = i[t], !0));
                const u = (a - r) / (s - r),
                    {
                        node: d
                    } = t,
                    f = d._info;
                if ("rotation" === t.path) ot.slerp(f.rotation, l, c, u);
                else if ("translation" === t.path) J.lerp(f.translation, l, c, u);
                else if ("scale" === t.path) J.lerp(f.scale, l, c, u);
                else if ("weights" === t.path) {
                    const e = 1 - u,
                        {
                            weights: t
                        } = f;
                    for (let n = 0; n < l.length; n++) t[n] = e * l[n] + u * c[n]
                }
                "weights" !== t.path && (I.fromRotationTranslationScale(d._modelMatrix, f.rotation || Ol, f.translation || Il, f.scale || Rl), d.modelMatrix = d._modelMatrix)
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
        return t = e instanceof Lr ? e : new Lr(e), this.datas.add(t), t
    }
    addBillboard(e) {
        let t;
        return t = e instanceof kr ? e : new kr(e), this.datas.add(t), t
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
        if ("add" === n) i.skin && t.skins.add(i), i.glow && t.glows.add(i), i.bloom && t.blooms.add(i), i.outline && t.outlines.add(i), t._needSort = !0;
        else if ("remove" === n) {
            i.skin && t.skins.delete(i), i.glow && t.glows.delete(i), i.bloom && t.blooms.delete(i), i.outline && t.outlines.delete(i);
            for (let e, n = t.animations.length - 1; n >= 0; n--) {
                e = t.animations[n];
                for (let o = 0; o < e.channels.length; o++)
                    if (e.channels[o].node === i) {
                        t.animations.splice(n, 1);
                        break
                    }
            }
            t._needSort = !0
        } else if ("clear" === n) t.animations = [], t.skins.clear(), t.glows.clear(), t.blooms.clear(), t.outlines.clear(), t._needSort = !0;
        else if ("change" === n) {
            switch (e.property) {
                case "glow":
                    e.newValue ? t.glows.add(i) : t.glows.delete(i);
                    break;
                case "bloom":
                    e.newValue ? t.blooms.add(i) : t.blooms.delete(i);
                    break;
                case "outline":
                    e.newValue ? t.outlines.add(i) : t.outlines.delete(i)
            }
            t._needSort = !0
        }
        t.redraw()
    }
    dispose() {
        this.clear(), this._renderer.dispose(), this.enableAutoResize && window.removeEventListener("resize", this._handleResize), this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas)
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
        ri(this._canvas, e, t), this._camera.aspect = e / t, this._width = e, this._height = t, this._renderer && this._renderer.setSize(e, t)
    }
    addLight(e) {
        let t;
        if (e instanceof Ms) t = e;
        else switch (e.type) {
            case "POINT":
                t = new ks(e);
                break;
            case "SPOT":
                t = new Hs(e);
                break;
            default:
                t = new Ds(e)
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
            n = $n(e);
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
        const n = J.create(),
            i = J.create(),
            o = I.create(),
            a = this.getPointAt(e);
        return I.invert(o, this._camera.projectViewMatrix), a.x = a.x / this._width * 2 - 1, a.y = 1 - a.y / this._height * 2, J.set(n, a.x, a.y, -1), J.transformMat4(n, n, o), J.set(i, a.x, a.y, 1), J.transformMat4(i, i, o), J.sub(i, i, n), J.normalize(i, i), t.intersect(n, i)
    }
    getDataAndPositionAt(e) {
        const t = this.getDataAt(e);
        if (!t) return null;
        const n = J.create(),
            i = J.create(),
            o = I.create(),
            a = this.getPointAt(e);
        return I.invert(o, this._camera.projectViewMatrix), a.x = a.x / this._width * 2 - 1, a.y = 1 - a.y / this._height * 2, J.set(n, a.x, a.y, -1), J.transformMat4(n, n, o), J.set(i, a.x, a.y, 1), J.transformMat4(i, i, o), J.sub(i, i, n), J.normalize(i, i), t.intersect(n, i)
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
        } else Yn("MediaRecorder and HTMLCanvasElement#captureStream are not supported")
    }
    updateTexture(e, t) {
        e && t && (this._gl.cache.textures.cache.get(e).update(t), this.redraw())
    }
    showAxis(e) {
        this.axis.visible = e
    }
    setAxisSize(e) {
        this.axis.setSize(e)
    }
}
const zl = "\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nattribute vec3 a_position;\nvarying vec2 v_uv;\n\nconst vec2 SCALE = vec2(0.5, 0.5);\n\nvoid main () {\n  gl_Position = vec4(a_position.xy, 0.0, 1.0);\n  v_uv = (a_position.xy * SCALE) + SCALE;\n}\n",
    jl = "\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nuniform vec2 u_windowSize;\nuniform sampler2D u_sampler;\nuniform int u_orientation;\nuniform float u_blurRadius;\n\nvarying vec2 v_uv;\n\nconst float MAX_BLUR_RADIUS = 10.0;\n\nvoid main () {\n  vec4 color = vec4(0.0);\n  vec2 texelOffset;\n  if (u_orientation == 0) {\n    texelOffset = vec2(u_windowSize.x, 0.0);\n  } else {\n    texelOffset = vec2(0.0, u_windowSize.y);\n  }\n\n  float blurAmount = min(floor(u_blurRadius), MAX_BLUR_RADIUS);\n  float halfBlur = blurAmount * 0.5;\n  for (float i = 0.0; i < MAX_BLUR_RADIUS; ++i) {\n    if (i >= blurAmount) {\n      break;\n    }\n    float offset = i - halfBlur;\n    vec2 vOffset = v_uv + (texelOffset * offset);\n    color += texture2D(u_sampler, vOffset);\n  }\n\n  gl_FragColor = color / blurAmount;\n}\n",
    Wl = "\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nuniform sampler2D u_sampler0; // color texture\nuniform sampler2D u_sampler1; // Blurred texture\n\nuniform vec2 u_windowSize;\nuniform float u_pixelRatio;\nuniform float u_tiltShiftType; // 0 tilt, 1 circle\nuniform float u_gradientRadius;\nuniform vec2 u_fromPoint;\nuniform vec2 u_toPoint;\nuniform vec2 u_center;\n\nvarying vec2 v_uv;\n\nfloat distanceFromPoint (in vec2 point) {\n  if (u_fromPoint.x == u_toPoint.x) {\n    return abs(point.x - u_fromPoint.x);\n  }\n  float lineK = (u_toPoint.y - u_fromPoint.y) / (u_toPoint.x - u_fromPoint.x);\n  float lineC = (u_toPoint.x * u_fromPoint.y - u_fromPoint.x * u_toPoint.y) /\n    (u_toPoint.x - u_fromPoint.x);\n  return abs(lineK * point.x - point.y + lineC) / (sqrt(lineK * lineK + 1.0));\n}\n\nvoid main () {\n  vec4 color = texture2D(u_sampler0, v_uv);\n  vec4 blur = texture2D(u_sampler1, v_uv);\n  vec2 point = vec2(\n    gl_FragCoord.x / u_pixelRatio,\n    (u_windowSize.y - gl_FragCoord.y) / u_pixelRatio\n  );\n  float _distance = 0.0;\n\n  if (u_tiltShiftType == 0.0) {\n    _distance = distanceFromPoint(point);\n  } else {\n    _distance = distance(u_center, point);\n  }\n\n  if (_distance >= u_gradientRadius) {\n    gl_FragColor = blur;\n  } else {\n    float percent = _distance / u_gradientRadius;\n    gl_FragColor = blur * percent + color * (1.0 - percent);\n  }\n}\n";
let ql = !1;
class Xl extends al {
    constructor(e) {
        var t;
        t = Xl.prototype, ql || (ql = !0, hi(t, [{
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
        this._fromPoint = [0, 0], this._toPoint = [0, 0], this._center = [0, 0], this._blurProgram = new pa({
            vertex: zl,
            fragment: jl
        }), this._tiltShiftProgram = new pa({
            vertex: zl,
            fragment: Wl
        }), this._hBlurFramebuffer = new bo({
            width: 128,
            height: 128,
            depth: !1,
            stencil: !1
        }), this._vBlurFramebuffer = new bo({
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
const Yl = "\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nattribute vec3 a_position;\n\nvarying vec2 v_uv;\n\nconst vec2 SCALE = vec2(0.5, 0.5);\n\nvoid main() {\n  v_uv = (a_position.xy * SCALE) + SCALE;\n  gl_Position = vec4(a_position.xy, 0.0, 1.0);\n}\n",
    Zl = "\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nuniform sampler2D u_sampler;\nuniform vec2 u_center;\nuniform float u_strength;\nuniform vec2 u_windowSize;\n\nvarying vec2 v_uv;\n\nfloat random(vec3 scale, float seed) {\n  /* use the fragment position for a different seed per-pixel */\n  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main() {\n  vec4 color = vec4(0.0);\n  float total = 0.0;\n  vec2 toCenter = u_center - v_uv * u_windowSize;\n\n  /* randomize the lookup values to hide the fixed number of samples */\n  float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n  for (float t = 0.0; t <= 10.0; t++) {\n    float percent = (t + offset) / 10.0;\n    float weight = 4.0 * (percent - percent * percent);\n    vec4 sample = texture2D(u_sampler, v_uv + toCenter * percent * u_strength / u_windowSize);\n\n    /* switch to pre-multiplied alpha to correctly blur transparent images */\n    sample.rgb *= sample.a;\n\n    color += sample * weight;\n    total += weight;\n  }\n\n  gl_FragColor = color / total;\n\n  /* switch back from pre-multiplied alpha */\n  gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n";
let Kl = !1;
class Jl extends al {
    constructor(e) {
        var t;
        t = Jl.prototype, Kl || (Kl = !0, hi(t, [{
            name: "center"
        }, {
            name: "strength",
            value: 0
        }])), super(e);
        this._center = [0, 0], this._program = new pa({
            vertex: Yl,
            fragment: Zl
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
let Ql = !1;
class $l extends al {
    constructor(e) {
        var t;
        t = $l.prototype, Ql || (Ql = !0, hi(t, [{
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
        this._flowProgram = ga("\n         layout(location = 0) in vec3 a_position;\n         layout(location = 2) in vec2 a_uv;\n         out vec2 v_uv;\n         void main () {\n          v_uv = a_uv;\n          vec4 position = vec4(a_position, 1.0);\n          gl_Position = position;\n          gl_Position.z = -0.5;\n         }\n     ", "\n        uniform sampler2D u_sampler;\n        uniform float uvOffsetX;\n        in vec2 v_uv;\n        out vec4 fragColor;\n        void main(){\n          vec2 uv = vec2(v_uv);\n          uv.x += 1.0 - uvOffsetX;\n          vec4 color = texture(u_sampler, uv);\n          fragColor = color;\n        }\n     "), this.play()
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
            if (n.flowImage) r = new nr({
                url: n.flowImage,
                minFilter: "LINEAR",
                magFilter: "LINEAR",
                wrapS: "REPEAT",
                wrapT: "REPEAT",
                mipmap: !1
            });
            else {
                const e = n.createCanvas();
                r = new nr({
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
        this.stop(), this.hidden = !1, this.animate = new as({
            onUpdate(t) {
                e.uvOffsetX += e.speed / 100, e._scene._renderer._dirty = !0
            },
            onDone() {
                this.play()
            }
        }).play()
    }
}
var ec = nc,
    tc = nc;

function nc(e, t, n) {
    n = n || 2;
    var i, o, a, r, s, l, c, u = t && t.length,
        d = u ? t[0] * n : e.length,
        f = ic(e, 0, d, n, !0),
        h = [];
    if (!f || f.next === f.prev) return h;
    if (u && (f = function (e, t, n, i) {
            var o, a, r, s, l, c = [];
            for (o = 0, a = t.length; o < a; o++) r = t[o] * i, s = o < a - 1 ? t[o + 1] * i : e.length, (l = ic(e, r, s, i, !1)) === l.next && (l.steiner = !0), c.push(_c(l));
            for (c.sort(uc), o = 0; o < c.length; o++) dc(c[o], n), n = oc(n, n.next);
            return n
        }(e, t, f, n)), e.length > 80 * n) {
        i = a = e[0], o = r = e[1];
        for (var _ = n; _ < d; _ += n)(s = e[_]) < i && (i = s), (l = e[_ + 1]) < o && (o = l), s > a && (a = s), l > r && (r = l);
        c = 0 !== (c = Math.max(a - i, r - o)) ? 1 / c : 0
    }
    return ac(f, h, n, i, o, c), h
}

function ic(e, t, n, i, o) {
    var a, r;
    if (o === Pc(e, t, n, i) > 0)
        for (a = t; a < n; a += i) r = yc(a, e[a], e[a + 1], r);
    else
        for (a = n - i; a >= t; a -= i) r = yc(a, e[a], e[a + 1], r);
    return r && vc(r, r.next) && (Tc(r), r = r.next), r
}

function oc(e, t) {
    if (!e) return e;
    t || (t = e);
    var n, i = e;
    do {
        if (n = !1, i.steiner || !vc(i, i.next) && 0 !== gc(i.prev, i, i.next)) i = i.next;
        else {
            if (Tc(i), (i = t = i.prev) === i.next) break;
            n = !0
        }
    } while (n || i !== t);
    return t
}

function ac(e, t, n, i, o, a, r) {
    if (e) {
        !r && a && function (e, t, n, i) {
            var o = e;
            do {
                null === o.z && (o.z = hc(o.x, o.y, t, n, i)), o.prevZ = o.prev, o.nextZ = o.next, o = o.next
            } while (o !== e);
            o.prevZ.nextZ = null, o.prevZ = null,
                function (e) {
                    var t, n, i, o, a, r, s, l, c = 1;
                    do {
                        for (n = e, e = null, a = null, r = 0; n;) {
                            for (r++, i = n, s = 0, t = 0; t < c && (s++, i = i.nextZ); t++);
                            for (l = c; s > 0 || l > 0 && i;) 0 !== s && (0 === l || !i || n.z <= i.z) ? (o = n, n = n.nextZ, s--) : (o = i, i = i.nextZ, l--), a ? a.nextZ = o : e = o, o.prevZ = a, a = o;
                            n = i
                        }
                        a.nextZ = null, c *= 2
                    } while (r > 1)
                }(o)
        }(e, i, o, a);
        for (var s, l, c = e; e.prev !== e.next;)
            if (s = e.prev, l = e.next, a ? sc(e, i, o, a) : rc(e)) t.push(s.i / n), t.push(e.i / n), t.push(l.i / n), Tc(e), e = l.next, c = l.next;
            else if ((e = l) === c) {
            r ? 1 === r ? ac(e = lc(oc(e), t, n), t, n, i, o, a, 2) : 2 === r && cc(e, t, n, i, o, a) : ac(oc(e), t, n, i, o, a, 1);
            break
        }
    }
}

function rc(e) {
    var t = e.prev,
        n = e,
        i = e.next;
    if (gc(t, n, i) >= 0) return !1;
    for (var o = e.next.next; o !== e.prev;) {
        if (mc(t.x, t.y, n.x, n.y, i.x, i.y, o.x, o.y) && gc(o.prev, o, o.next) >= 0) return !1;
        o = o.next
    }
    return !0
}

function sc(e, t, n, i) {
    var o = e.prev,
        a = e,
        r = e.next;
    if (gc(o, a, r) >= 0) return !1;
    for (var s = o.x < a.x ? o.x < r.x ? o.x : r.x : a.x < r.x ? a.x : r.x, l = o.y < a.y ? o.y < r.y ? o.y : r.y : a.y < r.y ? a.y : r.y, c = o.x > a.x ? o.x > r.x ? o.x : r.x : a.x > r.x ? a.x : r.x, u = o.y > a.y ? o.y > r.y ? o.y : r.y : a.y > r.y ? a.y : r.y, d = hc(s, l, t, n, i), f = hc(c, u, t, n, i), h = e.prevZ, _ = e.nextZ; h && h.z >= d && _ && _.z <= f;) {
        if (h !== e.prev && h !== e.next && mc(o.x, o.y, a.x, a.y, r.x, r.y, h.x, h.y) && gc(h.prev, h, h.next) >= 0) return !1;
        if (h = h.prevZ, _ !== e.prev && _ !== e.next && mc(o.x, o.y, a.x, a.y, r.x, r.y, _.x, _.y) && gc(_.prev, _, _.next) >= 0) return !1;
        _ = _.nextZ
    }
    for (; h && h.z >= d;) {
        if (h !== e.prev && h !== e.next && mc(o.x, o.y, a.x, a.y, r.x, r.y, h.x, h.y) && gc(h.prev, h, h.next) >= 0) return !1;
        h = h.prevZ
    }
    for (; _ && _.z <= f;) {
        if (_ !== e.prev && _ !== e.next && mc(o.x, o.y, a.x, a.y, r.x, r.y, _.x, _.y) && gc(_.prev, _, _.next) >= 0) return !1;
        _ = _.nextZ
    }
    return !0
}

function lc(e, t, n) {
    var i = e;
    do {
        var o = i.prev,
            a = i.next.next;
        !vc(o, a) && xc(o, i, i.next, a) && Mc(o, a) && Mc(a, o) && (t.push(o.i / n), t.push(i.i / n), t.push(a.i / n), Tc(i), Tc(i.next), i = e = a), i = i.next
    } while (i !== e);
    return oc(i)
}

function cc(e, t, n, i, o, a) {
    var r = e;
    do {
        for (var s = r.next.next; s !== r.prev;) {
            if (r.i !== s.i && pc(r, s)) {
                var l = Sc(r, s);
                return r = oc(r, r.next), l = oc(l, l.next), ac(r, t, n, i, o, a), void ac(l, t, n, i, o, a)
            }
            s = s.next
        }
        r = r.next
    } while (r !== e)
}

function uc(e, t) {
    return e.x - t.x
}

function dc(e, t) {
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
            var l, c = n,
                u = n.x,
                d = n.y,
                f = 1 / 0;
            i = n;
            do {
                o >= i.x && i.x >= u && o !== i.x && mc(a < d ? o : r, a, u, d, a < d ? r : o, a, i.x, i.y) && (l = Math.abs(a - i.y) / (o - i.x), Mc(i, e) && (l < f || l === f && (i.x > n.x || i.x === n.x && fc(n, i))) && (n = i, f = l)), i = i.next
            } while (i !== c);
            return n
        }(e, t)) {
        var n = Sc(t, e);
        oc(n, n.next)
    }
}

function fc(e, t) {
    return gc(e.prev, e, t.prev) < 0 && gc(t.next, e, e.next) < 0
}

function hc(e, t, n, i, o) {
    return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * o) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * o) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
}

function _c(e) {
    var t = e,
        n = e;
    do {
        (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next
    } while (t !== e);
    return n
}

function mc(e, t, n, i, o, a, r, s) {
    return (o - r) * (t - s) - (e - r) * (a - s) >= 0 && (e - r) * (i - s) - (n - r) * (t - s) >= 0 && (n - r) * (a - s) - (o - r) * (i - s) >= 0
}

function pc(e, t) {
    return e.next.i !== t.i && e.prev.i !== t.i && ! function (e, t) {
        var n = e;
        do {
            if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && xc(n, n.next, e, t)) return !0;
            n = n.next
        } while (n !== e);
        return !1
    }(e, t) && (Mc(e, t) && Mc(t, e) && function (e, t) {
        var n = e,
            i = !1,
            o = (e.x + t.x) / 2,
            a = (e.y + t.y) / 2;
        do {
            n.y > a != n.next.y > a && n.next.y !== n.y && o < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
        } while (n !== e);
        return i
    }(e, t) && (gc(e.prev, e, t.prev) || gc(e, t.prev, t)) || vc(e, t) && gc(e.prev, e, e.next) > 0 && gc(t.prev, t, t.next) > 0)
}

function gc(e, t, n) {
    return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
}

function vc(e, t) {
    return e.x === t.x && e.y === t.y
}

function xc(e, t, n, i) {
    var o = wc(gc(e, t, n)),
        a = wc(gc(e, t, i)),
        r = wc(gc(n, i, e)),
        s = wc(gc(n, i, t));
    return o !== a && r !== s || (!(0 !== o || !bc(e, n, t)) || (!(0 !== a || !bc(e, i, t)) || (!(0 !== r || !bc(n, e, i)) || !(0 !== s || !bc(n, t, i)))))
}

function bc(e, t, n) {
    return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y)
}

function wc(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0
}

function Mc(e, t) {
    return gc(e.prev, e, e.next) < 0 ? gc(e, t, e.next) >= 0 && gc(e, e.prev, t) >= 0 : gc(e, t, e.prev) < 0 || gc(e, e.next, t) < 0
}

function Sc(e, t) {
    var n = new Ec(e.i, e.x, e.y),
        i = new Ec(t.i, t.x, t.y),
        o = e.next,
        a = t.prev;
    return e.next = t, t.prev = e, n.next = o, o.prev = n, i.next = n, n.prev = i, a.next = i, i.prev = a, i
}

function yc(e, t, n, i) {
    var o = new Ec(e, t, n);
    return i ? (o.next = i.next, o.prev = i, i.next.prev = o, i.next = o) : (o.prev = o, o.next = o), o
}

function Tc(e) {
    e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
}

function Ec(e, t, n) {
    this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
}

function Pc(e, t, n, i) {
    for (var o = 0, a = t, r = n - i; a < n; a += i) o += (e[r] - e[a]) * (e[a + 1] + e[r + 1]), r = a;
    return o
}

function Ac(e, t) {
    const n = e[0] - t[0],
        i = e[1] - t[1];
    return n * n + i * i
}

function Cc(e, t, n) {
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

function Ic(e, t) {
    const n = e.length - 1,
        i = [e[0]];
    return function e(t, n, i, o, a) {
        let r, s = o;
        for (let e = n + 1; e < i; e++) {
            const o = Cc(t[e], t[n], t[i]);
            o > s && (r = e, s = o)
        }
        s > o && (r - n > 1 && e(t, n, r, o, a), a.push(t[r]), i - r > 1 && e(t, r, i, o, a))
    }(e, 0, n, t, i), i.push(e[n]), i
}

function Rc(e, t, n) {
    if (e.length <= 2) return e;
    const i = void 0 !== t ? t * t : 1;
    let o = n ? e : function (e, t) {
        let n = e[0];
        const i = [n];
        let o;
        for (let a = 1, r = e.length; a < r; a++) Ac(o = e[a], n) > t && (i.push(o), n = o);
        return n !== o && i.push(o), i
    }(e, i);
    return o = Ic(o, i)
}

function Oc(e, t, n = 2) {
    return ec(e, t, n)
}

function Lc(e) {
    return ec.flatten(e)
}

function Nc(e, t, n) {
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
nc.deviation = function (e, t, n, i) {
    var o = t && t.length,
        a = o ? t[0] * n : e.length,
        r = Math.abs(Pc(e, 0, a, n));
    if (o)
        for (var s = 0, l = t.length; s < l; s++) {
            var c = t[s] * n,
                u = s < l - 1 ? t[s + 1] * n : e.length;
            r -= Math.abs(Pc(e, c, u, n))
        }
    var d = 0;
    for (s = 0; s < i.length; s += 3) {
        var f = i[s] * n,
            h = i[s + 1] * n,
            _ = i[s + 2] * n;
        d += Math.abs((e[f] - e[_]) * (e[h + 1] - e[f + 1]) - (e[f] - e[h]) * (e[_ + 1] - e[f + 1]))
    }
    return 0 === r && 0 === d ? 0 : Math.abs((d - r) / r)
}, nc.flatten = function (e) {
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
}, ec.default = tc;
const Dc = [];

function Fc(e, t, n, i) {
    const o = J.dot(t, n),
        a = Math.acos(o) * i;
    return J.scaleAndAdd(Dc, n, t, -o), J.normalize(Dc, Dc), J.scale(e, t, Math.cos(a)), J.scaleAndAdd(e, e, Dc, Math.sin(a)), e
}

function Uc(e, t, n) {
    for (let i = 0; i < e.length; i++) t[0] = Math.min(e[i][0], t[0]), t[1] = Math.min(e[i][1], t[1]), n[0] = Math.max(e[i][0], n[0]), n[1] = Math.max(e[i][1], n[1])
}
const Vc = [],
    Bc = [],
    Hc = [];

function Gc(e, t, n, i, o, a, r, s) {
    const l = null != r;
    let c = o,
        u = null;
    u = new Uint32Array(i - n);
    for (let o = n; o < i; o++) {
        const d = o === i - 1 ? n : o + 1,
            f = o === n ? i - 1 : o - 1,
            h = e[2 * f],
            _ = e[2 * f + 1],
            m = e[2 * o],
            p = e[2 * o + 1],
            g = e[2 * d],
            v = e[2 * d + 1];
        if (Vc[0] = m - h, Vc[1] = p - _, Bc[0] = g - m, Bc[1] = v - p, Lt.normalize(Vc, Vc), Lt.normalize(Bc, Bc), u[o] = c, s || o !== n)
            if (s || o !== i - 1) {
                Lt.add(Hc, Bc, Vc);
                const e = Hc[1];
                Hc[1] = -Hc[0], Hc[0] = e, Lt.normalize(Hc, Hc);
                const n = Lt.dot(Hc, Bc),
                    i = Math.sqrt(1 - n * n),
                    o = a * Math.min(10, 1 / i),
                    s = a * n < 0;
                if (l && 1 / i > r && s) {
                    const e = m + Hc[0] * a,
                        n = p + Hc[1] * a,
                        o = Math.acos(i) / 2,
                        r = Math.tan(o) * Math.abs(a);
                    t[2 * c] = e + Hc[1] * r, t[2 * c + 1] = n - Hc[0] * r, t[2 * ++c] = e - Hc[1] * r, t[2 * c + 1] = n + Hc[0] * r, c++
                } else t[2 * c] = m + Hc[0] * o, t[2 * c + 1] = p + Hc[1] * o, c++
            } else Lt.set(Hc, Vc[1], -Vc[0]), Lt.normalize(Hc, Hc), t[2 * c] = m + Hc[0] * a, t[2 * c + 1] = p + Hc[1] * a, c++;
        else Lt.set(Hc, Bc[1], -Bc[0]), Lt.normalize(Hc, Hc), t[2 * c] = m + Hc[0] * a, t[2 * c + 1] = p + Hc[1] * a, c++
    }
    return u
}

function kc(e, t, n, i, o) {
    const a = null != i ? [] : new Float32Array(e.length);
    if (Gc(e, a, 0, t && t.length ? t[0] : e.length / 2, 0, n, i, o), t)
        for (let r = 0; r < t.length; r++) {
            const s = t[r];
            Gc(e, a, s, t[r + 1] || e.length / 2, null != i ? a.length / 2 : s, n, i, o)
        }
    return a
}

function zc(e, t, n, i) {
    for (let o = 0; o < Math.floor((i - n) / 2); o++)
        for (let a = 0; a < t; a++) {
            const r = (o + n) * t + a,
                s = (i - o - 1) * t + a,
                l = e[r];
            e[r] = e[s], e[s] = l
        }
    return e
}

function jc(e) {
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
const Wc = [
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 0],
    [1, 1],
    [0, 1]
];

function qc(e, {
    vertices: t,
    topVertices: n,
    depth: i,
    rect: o
}, a, r, s, l) {
    const c = r - a,
        u = l.smoothSide ? 1 : 2,
        d = c * u,
        f = l.smoothBevel ? 1 : 2,
        h = Math.min(i / 2, l.bevelSize),
        {
            bevelSegments: _
        } = l,
        m = s.vertex,
        p = Math.max(o.width, o.height);
    if (h > 0) {
        const o = [0, 0, 1];
        J.set(Bc, 0, 0, -1);
        let r = 0;
        const l = new Float32Array(c);
        for (let g = 0; g < 2; g++) {
            const v = 0 === g ? i - h : h;
            for (let i = 0; i <= _ * f; i++) {
                let x, b, w = 0;
                for (let M = 0; M < c; M++) {
                    for (let r = 0; r < u; r++) {
                        const u = 2 * ((M + r) % c + a);
                        Vc[0] = t[u] - n[u], Vc[1] = t[u + 1] - n[u + 1], Vc[2] = 0;
                        const m = Math.sqrt(Vc[0] * Vc[0] + Vc[1] * Vc[1]);
                        Vc[0] /= m, Vc[1] /= m;
                        const S = (Math.floor(i / f) + i % f) / _;
                        0 === g ? Fc(Hc, o, Vc, S) : Fc(Hc, Vc, Bc, S);
                        const y = 0 === g ? S : 1 - S,
                            T = h * Math.sin(y * Math.PI / 2),
                            E = m * Math.cos(y * Math.PI / 2),
                            P = h * m / Math.sqrt(T * T + E * E),
                            A = Hc[0] * P + n[u],
                            C = Hc[1] * P + n[u + 1],
                            I = Hc[2] * P + v;
                        if (e.position[3 * s.vertex] = A, e.position[3 * s.vertex + 1] = C, e.position[3 * s.vertex + 2] = I, (M > 0 || r > 0) && (w += Math.sqrt((x - A) * (x - A) + (b - C) * (b - C))), i > 0 || g > 0) {
                            const t = 3 * (s.vertex - d),
                                n = e.position[t],
                                i = e.position[t + 1],
                                o = e.position[t + 2];
                            l[M] += Math.sqrt((n - A) * (n - A) + (i - C) * (i - C) + (o - I) * (o - I))
                        }
                        e.uv[2 * s.vertex] = w / p, e.uv[2 * s.vertex + 1] = l[M] / p, x = A, b = C, s.vertex++
                    }
                    if (f > 1 && i % f || 1 === f && i >= 1)
                        for (let t = 0; t < 6; t++) {
                            const n = (Wc[t][0] + M * u) % d,
                                i = Wc[t][1] + r;
                            e.indices[s.index++] = (i - 1) * d + n + m
                        }
                }
                r++
            }
        }
    } else
        for (let n = 0; n < 2; n++) {
            const o = 0 === n ? i - h : h;
            for (let n = 0; n < c; n++)
                for (let r = 0; r < u; r++) {
                    const l = 2 * ((n + r) % c + a),
                        u = t[l],
                        d = t[l + 1];
                    e.position[3 * s.vertex] = u, e.position[3 * s.vertex + 1] = d, e.position[3 * s.vertex + 2] = o, e.uv[2 * s.vertex] = 1 - r, e.uv[2 * s.vertex + 1] = o / i, s.vertex++
                }
        }
    const g = h > 0 ? _ * f + 1 : 1;
    for (let t = 0; t < c; t++)
        for (let n = 0; n < 6; n++) {
            const i = (Wc[n][0] + t * u) % d,
                o = Wc[n][1] + g;
            e.indices[s.index++] = (o - 1) * d + i + m
        }
}

function Xc({
    indices: e,
    vertices: t,
    topVertices: n,
    rect: i,
    depth: o,
    uvs: a
}, r, s, l) {
    if (t.length <= 4) return;
    const c = s.vertex,
        u = e.length;
    for (let t = 0; t < u; t++) r.indices[s.index++] = c + e[t];
    for (let e = 0; e < (l.excludeBottom ? 1 : 2); e++)
        for (let t = 0; t < n.length; t += 2) {
            const l = n[t],
                c = n[t + 1];
            r.position[3 * s.vertex] = l, r.position[3 * s.vertex + 1] = c, r.position[3 * s.vertex + 2] = (1 - e) * o, a || (r.uv[2 * s.vertex] = (l - i.x) / i.width, r.uv[2 * s.vertex + 1] = (c - i.y) / i.height), s.vertex++
        }
    if (!l.excludeBottom) {
        const n = t.length / 2;
        for (let t = 0; t < u; t += 3)
            for (let i = 0; i < 3; i++) r.indices[s.index++] = c + n + e[t + 2 - i]
    }
}

function Yc(e, t) {
    let n = 0,
        i = 0,
        o = 0;
    const a = [];
    for (let r = 0; r < e.length; r++) {
        const {
            indices: s,
            vertices: l,
            holes: c,
            depth: u,
            distances: d,
            points: f
        } = e[r];
        f && a.push(f);
        const h = l.length / 2,
            _ = Math.min(u / 2, t.bevelSize) > 0 ? t.bevelSegments : 0;
        d && (o += d.length), t.excludeTop || (n += s.length * (t.excludeBottom ? 1 : 2), i += h * (t.excludeBottom ? 1 : 2));
        const m = 2 + 2 * _;
        if (!t.excludeSide) {
            let e = 0,
                o = 0;
            for (let a = 0; a < (c ? c.length : 0) + 1; a++) {
                0 === a ? o = c && c.length ? c[0] : h : (e = c[a - 1], o = c[a] || h), n += 6 * (o - e) * (m - 1);
                const r = (o - e) * (t.smoothSide ? 1 : 2);
                i += r * m + (t.smoothBevel ? 0 : _ * r * 2)
            }
        }
    }
    const r = {
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
        for (let n = 0; n < e.length; n++) Xc(e[n], r, s, t);
    if (!t.excludeSide)
        for (let n = 0; n < e.length; n++) {
            const {
                holes: i,
                vertices: o
            } = e[n], a = o.length / 2;
            let l = 0,
                c = i && i.length ? i[0] : a;
            if (qc(r, e[n], l, c, s, t), i)
                for (let o = 0; o < i.length; o++) l = i[o], c = i[o + 1] || a, qc(r, e[n], l, c, s, t)
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
            c = new Float32Array(t.length);
        for (let u = 0; u < l;) {
            const l = 3 * e[u++],
                d = 3 * e[u++],
                f = 3 * e[u++];
            J.set(n, t[l], t[l + 1], t[l + 2]), J.set(i, t[d], t[d + 1], t[d + 2]), J.set(o, t[f], t[f + 1], t[f + 2]), J.sub(a, n, i), J.sub(r, i, o), J.cross(s, a, r);
            for (let e = 0; e < 3; e++) c[l + e] = c[l + e] + s[e], c[d + e] = c[d + e] + s[e], c[f + e] = c[f + e] + s[e]
        }
        for (let e = 0; e < c.length;) J.set(s, c[e], c[e + 1], c[e + 2]), J.normalize(s, s), [c[e++], c[e++], c[e++]] = s;
        return c
    }(r.indices, r.position), r.boundingRect = e[0] && e[0].rect, r.points = a, r
}

function Zc(e, t, n) {
    const {
        lineWidth: i,
        transform: o
    } = n, a = e.length, r = new Float32Array(2 * a), s = n.translate || [0, 0], l = n.scale || [1, 1], c = new Float32Array(2 * a), u = new Float32Array(2 * a * 2);
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
        c[t] = d, Lt.copy(f, h)
    }
    for (let e = 0; e < a; e++) c[e] /= d, c[2 * a - 1 - e] = c[e], u[2 * e] = c[e], u[2 * e + 1] = 0, u[2 * (2 * a - 1 - e)] = c[e], u[2 * (2 * a - 1 - e) + 1] = 1;
    const _ = new Float32Array(r);
    Nc(r, 0, a) < 0 && zc(r, 2, 0, a);
    const m = [],
        p = [],
        {
            miterLimit: g
        } = n,
        v = Gc(r, p, 0, a, 0, -i / 2, g, !1);
    zc(r, 2, 0, a);
    const x = Gc(r, m, 0, a, 0, -i / 2, g, !1),
        b = (m.length + p.length) / 2,
        w = new Float32Array(2 * b);
    let M = 0;
    const S = p.length / 2;
    for (let e = 0; e < p.length; e++) w[M++] = p[e];
    for (let e = 0; e < m.length; e++) w[M++] = m[e];
    const y = new(b > 65535 ? Uint32Array : Uint16Array)(3 * (2 * (a - 1) + (b - 2 * a)));
    let T = 0;
    for (let e = 0; e < a - 1; e++) {
        const t = e + 1;
        y[T++] = S - 1 - v[e], y[T++] = S - 1 - v[e] - 1, y[T++] = x[e] + 1 + S, y[T++] = S - 1 - v[e], y[T++] = x[e] + 1 + S, y[T++] = x[e] + S, x[t] - x[e] == 2 ? (y[T++] = x[e] + 2 + S, y[T++] = x[e] + 1 + S, y[T++] = S - v[t] - 1) : v[t] - v[e] == 2 && (y[T++] = x[t] + S, y[T++] = S - 1 - (v[e] + 1), y[T++] = S - 1 - (v[e] + 2))
    }
    const E = n.bevelSize > 0 ? kc(w, [], n.bevelSize, null, !0) : w,
        {
            boundingRect: P
        } = n;
    return {
        vertices: w,
        indices: y,
        topVertices: E,
        distances: c,
        uvs: u,
        points: {
            points: _,
            name: n.name && n.name(t)
        },
        rect: {
            x: P.x * l[0] + s[0],
            y: P.y * l[1] + s[1],
            width: P.width * l[0],
            height: P.height * l[1]
        },
        depth: "function" == typeof n.depth ? n.depth(t) : n.depth,
        holes: []
    }
}

function Kc(e, t = {}) {
    const n = [1 / 0, 1 / 0],
        i = [-1 / 0, -1 / 0];
    for (let t = 0; t < e.length; t++) Uc(e[t][0], n, i);
    t.boundingRect = t.boundingRect || {
        x: n[0],
        y: n[1],
        width: i[0] - n[0],
        height: i[1] - n[1]
    }, jc(t);
    const o = [],
        a = t.translate || [0, 0],
        r = t.scale || [1, 1],
        {
            transform: s,
            boundingRect: l
        } = t,
        c = {
            x: l.x * r[0] + a[0],
            y: l.y * r[1] + a[1],
            width: l.width * r[0],
            height: l.height * r[1]
        },
        u = Math.min(l.width, l.height) / 1e5;
    return e.forEach((e, n) => {
        let i = function (e, t) {
            const n = [];
            for (let i = 0; i < e.length; i++) {
                const o = e[i],
                    a = [],
                    r = o.length;
                let s = o[r - 1][0],
                    l = o[r - 1][1],
                    c = 0;
                for (let e = 0; e < r; e++) {
                    const n = o[e][0],
                        i = o[e][1],
                        r = n - s,
                        u = i - l;
                    (c += Math.sqrt(r * r + u * u)) > t && (a.push(o[e]), c = 0), s = n, l = i
                }
                a.length >= 3 && n.push(a)
            }
            return n.length > 0 ? n : null
        }(e, u);
        if (!i) return;
        const l = t.simplify / Math.max(r[0], r[1]);
        if (l > 0 && (i = function (e, t) {
                const n = [];
                for (let i = 0; i < e.length; i++) {
                    let o = e[i];
                    (o = Rc(o, t, !0)).length >= 3 && n.push(o)
                }
                return n.length > 0 ? n : null
            }(i, l)), !i) return;
        const {
            vertices: d,
            holes: f,
            dimensions: h
        } = ec.flatten(i);
        for (let e = 0; e < d.length;)
            if (s) {
                const t = s(d[e], d[e + 1]);
                [d[e], d[e + 1]] = t, e += 2
            } else d[e] = d[e++] * r[0] + a[0], d[e] = d[e++] * r[1] + a[1];
        if (function (e, t) {
                const n = e.length / 2;
                let i = 0,
                    o = t && t.length ? t[0] : n;
                Nc(e, i, o) > 0 && zc(e, 2, i, o);
                for (let a = 1; a < (t ? t.length : 0) + 1; a++) Nc(e, i = t[a - 1], o = t[a] || n) < 0 && zc(e, 2, i, o)
            }(d, f), 2 !== h) throw new Error("Only 2D polygon points are supported");
        const _ = t.bevelSize > 0 ? kc(d, f, t.bevelSize, null, !0) : d,
            m = Oc(_, f, h);
        o.push({
            indices: m,
            vertices: d,
            topVertices: _,
            holes: f,
            rect: c,
            depth: "function" == typeof t.depth ? t.depth(n) : t.depth
        })
    }), Yc(o, t)
}

function Jc(e, t = {}) {
    const n = [1 / 0, 1 / 0],
        i = [-1 / 0, -1 / 0];
    for (let t = 0; t < e.length; t++) Uc(e[t], n, i);
    t.boundingRect = t.boundingRect || {
        x: n[0],
        y: n[1],
        width: i[0] - n[0],
        height: i[1] - n[1]
    }, jc(t);
    const o = t.scale || [1, 1];
    null == t.lineWidth && (t.lineWidth = 1);
    const a = [];
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        const r = t.simplify / Math.max(o[0], o[1]);
        r > 0 && (i = Rc(i, r, !0)), a.push(Zc(i, n, t))
    }
    return Yc(a, t)
}

function Qc(e, t = {}) {
    const n = [],
        i = [],
        o = [],
        a = [],
        r = [1 / 0, 1 / 0],
        s = [-1 / 0, -1 / 0];
    for (let l = 0; l < e.features.length; l++) {
        const c = e.features[l],
            {
                geometry: u
            } = c;
        if ((!t.filter || t.filter(c)) && u && u.coordinates) switch (u.type) {
            case "LineString":
                n.push(u.coordinates), o.push(l), Uc(u.coordinates, r, s);
                break;
            case "MultiLineString":
                for (let e = 0; e < u.coordinates.length; e++) n.push(u.coordinates[e]), o.push(l), Uc(u.coordinates[e], r, s);
                break;
            case "Polygon":
                i.push(u.coordinates), a.push(l), Uc(u.coordinates[0], r, s);
                break;
            case "MultiPolygon":
                for (let e = 0; e < u.coordinates.length; e++) i.push(u.coordinates[e]), a.push(l), Uc(u.coordinates[e][0], r, s)
        }
    }
    t.boundingRect = t.boundingRect || {
        x: r[0],
        y: r[1],
        width: s[0] - r[0],
        height: s[1] - r[1]
    };
    const l = t.depth,
        c = t.name;
    return {
        polyline: Jc(n, Object.assign(t, {
            depth: t => "function" == typeof l ? l(e.features[o[t]]) : l,
            name: t => c && c(e.features[o[t]])
        })),
        polygon: Kc(i, Object.assign(t, {
            depth: t => "function" == typeof l ? l(e.features[a[t]]) : l,
            name: t => c && c(e.features[a[t]])
        }))
    }
}
class $c {
    constructor(e, t) {
        this.normal = e, this.w = t
    }
    clone() {
        return new $c(this.normal.clone(), this.w)
    }
    flip() {
        this.normal = this.normal.negated(), this.w = -this.w
    }
    static fromPoints(e, t, n) {
        const i = t.minus(e).cross(n.minus(e)).unit();
        return new $c(i, i.dot(e))
    }
}
class eu {
    constructor(e, t) {
        this.vertices = e, this.shared = t, this.plane = $c.fromPoints(e[0].pos, e[1].pos, e[2].pos)
    }
    clone() {
        const e = this.vertices.map(e => e.clone());
        return new eu(e, this.shared)
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
            r |= o = i < -eu.EPSILON ? 2 : i > eu.EPSILON ? 1 : 0, s.push(o)
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
                        c = t.vertices[o],
                        u = t.vertices[a];
                    if (2 !== r && n.push(c), 1 !== r && i.push(2 !== r ? c.clone() : c), 3 == (r | l)) {
                        const t = (e.w - e.normal.dot(c.pos)) / e.normal.dot(u.pos.minus(c.pos)),
                            o = c.interpolate(u, t);
                        n.push(o), i.push(o.clone())
                    }
                }
                n.length >= 3 && o.push(new eu(n, t.shared)), i.length >= 3 && a.push(new eu(i, t.shared));
                break
            }
        }
    }
}
eu.EPSILON = 1e-5;
class tu {
    constructor(e) {
        this.plane = null, this.front = null, this.back = null, this.polygons = [], e && this.build(e)
    }
    clone() {
        const e = new tu;
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
        for (let i = 0; i < e.length; i++) eu.splitPolygon(this.plane, e[i], t, n, t, n);
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
        for (let i = 0; i < e.length; i++) eu.splitPolygon(this.plane, e[i], this.polygons, this.polygons, t, n);
        t.length && (this.front || (this.front = new tu), this.front.build(t)), n.length && (this.back || (this.back = new tu), this.back.build(n))
    }
}
class nu {
    constructor(e, t, n) {
        3 === arguments.length ? (this.x = e, this.y = t, this.z = n) : "x" in e ? (this.x = e.x, this.y = e.y, this.z = e.z) : [this.x, this.y, this.z] = e
    }
    clone() {
        return new nu(this.x, this.y, this.z)
    }
    negated() {
        return new nu(-this.x, -this.y, -this.z)
    }
    plus(e) {
        return new nu(this.x + e.x, this.y + e.y, this.z + e.z)
    }
    minus(e) {
        return new nu(this.x - e.x, this.y - e.y, this.z - e.z)
    }
    times(e) {
        return new nu(this.x * e, this.y * e, this.z * e)
    }
    dividedBy(e) {
        return new nu(this.x / e, this.y / e, this.z / e)
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
        return new nu(this.y * e.z - this.z * e.y, this.z * e.x - this.x * e.z, this.x * e.y - this.y * e.x)
    }
}
class iu {
    constructor(e, t) {
        2 === arguments.length ? (this.x = e, this.y = t) : "x" in e ? (this.x = e.x, this.y = e.y) : [this.x, this.y] = e
    }
    clone() {
        return new iu(this.x, this.y)
    }
    negated() {
        return new iu(-this.x, -this.y)
    }
    plus(e) {
        return new iu(this.x + e.x, this.y + e.y)
    }
    minus(e) {
        return new iu(this.x - e.x, this.y - e.y)
    }
    times(e) {
        return new iu(this.x * e, this.y * e)
    }
    dividedBy(e) {
        return new iu(this.x / e, this.y / e)
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
class ou {
    constructor(e, t, n) {
        this.pos = new nu(e), this.normal = new nu(t), this.uv = new iu(n)
    }
    clone() {
        return new ou(this.pos.clone(), this.normal.clone(), this.uv.clone())
    }
    flip() {
        this.normal = this.normal.negated()
    }
    interpolate(e, t) {
        return new ou(this.pos.lerp(e.pos, t), this.normal.lerp(e.normal, t), this.uv.lerp(e.uv, t))
    }
}
class au {
    constructor(e) {
        this.polygons = e || []
    }
    clone() {
        const e = new au;
        return e.polygons = this.polygons.map(e => e.clone()), e
    }
    toPolygons() {
        return this.polygons
    }
    union(e) {
        const t = new tu(this.clone().polygons),
            n = new tu(e.clone().polygons);
        return t.clipTo(n), n.clipTo(t), n.invert(), n.clipTo(t), n.invert(), t.build(n.allPolygons()), au.fromPolygons(t.allPolygons())
    }
    subtract(e) {
        const t = new tu(this.clone().polygons),
            n = new tu(e.clone().polygons);
        return t.invert(), t.clipTo(n), n.clipTo(t), n.invert(), n.clipTo(t), n.invert(), t.build(n.allPolygons()), t.invert(), au.fromPolygons(t.allPolygons())
    }
    intersect(e) {
        const t = new tu(this.clone().polygons),
            n = new tu(e.clone().polygons);
        return t.invert(), n.clipTo(t), n.invert(), t.clipTo(n), n.clipTo(t), t.build(n.allPolygons()), t.invert(), au.fromPolygons(t.allPolygons())
    }
    inverse() {
        const e = this.clone();
        return e.polygons.forEach(e => {
            e.flip()
        }), e
    }
    static fromPolygons(e) {
        return new au(e)
    }
    static cube(e = {}) {
        const t = new nu(e.center || [0, 0, 0]);
        let n = e.radius || [1, 1, 1];
        return n.length || (n = [e.radius, e.radius, e.radius]), au.fromPolygons([
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
        ].map(e => new au.Polygon(e[0].map(i => {
            const o = new au.Vector(t.x + n[0] * (2 * !!(1 & i) - 1), t.y + n[1] * (2 * !!(2 & i) - 1), t.z + n[2] * (2 * !!(4 & i) - 1));
            return new au.Vertex(o, new au.Vector(e[1]))
        }))))
    }
    static sphere(e = {}) {
        const t = new au.Vector(e.center || [0, 0, 0]),
            n = e.radius || 1,
            i = e.slices || 16,
            o = e.stacks || 8,
            a = [];
        let r;

        function s(e, i) {
            const o = e * Math.PI * 2,
                a = e * Math.PI,
                s = new au.Vector(Math.cos(o) * Math.sin(a), Math.cos(a), Math.sin(o) * Math.sin(a));
            r.push(new au.Vertex(t.plus(s.times(n)), s))
        }
        for (let e = 0; e < i; e++)
            for (let t = 0; t < o; t++) r = [], s(e / i), t > 0 && s((e + 1) / i), t < o - 1 && s((e + 1) / i), s(e / i), a.push(new au.Polygon(r));
        return au.fromPolygons(a)
    }
    static cylinder(e = {}) {
        const t = new nu(e.start || [0, -1, 0]),
            n = new nu(e.end || [0, 1, 0]),
            i = n.minus(t),
            o = e.radius || 1,
            a = e.slices || 16,
            r = i.unit(),
            s = Math.abs(r.y) > .5,
            l = new nu(s, !s, 0).cross(r).unit(),
            c = l.cross(r).unit(),
            u = new ou(t, r.negated()),
            d = new ou(n, r.unit()),
            f = [];

        function h(e, n, a) {
            const s = n * Math.PI * 2,
                u = l.times(Math.cos(s)).plus(c.times(Math.sin(s))),
                d = t.plus(i.times(e)).plus(u.times(o)),
                f = u.times(1 - Math.abs(a)).plus(r.times(a));
            return new ou(d, f)
        }
        for (let e = 0; e < a; e++) {
            const t = e / a,
                n = (e + 1) / a;
            f.push(new eu([u, h(0, t, -1), h(0, n, -1)])), f.push(new eu([h(0, n, 0), h(0, t, 0), h(1, t, 0), h(1, n, 0)])), f.push(new eu([d, h(1, n, 1), h(1, t, 1)]))
        }
        return au.fromPolygons(f)
    }
}

function ru(e) {
    const t = {},
        n = [],
        i = {
            primitives: n
        },
        o = new Lr;
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
            vao: new ki({
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

function su(e) {
    const t = [],
        {
            vao: n,
            worldMatrix: i
        } = e;
    let o = n._buffers;
    o.index && (o = function (e) {
        !e.tangent && e.uv && (e.tangent = qi(e)), e.normal || (e.normal = Wi(e.position, e.index));
        const t = e.index,
            n = e.uv.data || e.uv,
            i = e.position.data || e.position,
            o = e.normal.data || e.normal,
            a = e.tangent.data || e.tangent,
            r = [],
            s = [],
            l = [],
            c = [];
        for (let e = 0, u = t.length; e < u; e++) {
            const u = t[e];
            s.push(i[3 * u], i[3 * u + 1], i[3 * u + 2]), n && r.push(n[2 * u], n[2 * u + 1]), o && l.push(o[3 * u], o[3 * u + 1], o[3 * u + 2]), a && c.push(a[4 * u], a[4 * u + 1], a[4 * u + 2], a[4 * u + 3])
        }
        return {
            uv: new Float32Array(r),
            position: new Float32Array(s),
            normal: new Float32Array(l),
            tangent: new Float32Array(c)
        }
    }(o));
    const a = o.position,
        r = o.normal,
        s = o.uv,
        l = e._normalMatrix,
        c = [],
        u = [],
        d = [];
    for (let e = 0, t = a.length; e < t; e += 3) d[0] = a[e], d[1] = a[e + 1], d[2] = a[e + 2], J.transformMat4(d, d, i), c.push(d[0], d[1], d[2]), d[0] = r[e], d[1] = r[e + 1], d[2] = r[e + 2], J.transformMat3(d, d, l), u.push(d[0], d[1], d[2]);
    for (let n = 0, i = c.length / 3; n < i; n += 3) {
        const i = n,
            o = n + 1,
            a = n + 2,
            r = [];
        let l = new nu(c[3 * i], c[3 * i + 1], c[3 * i + 2]),
            d = new nu(u[3 * i], u[3 * i + 1], u[3 * i + 2]),
            f = new iu(s[2 * i], s[2 * i + 1]);
        r.push(new ou(l, d, f)), l = new nu(c[3 * o], c[3 * o + 1], c[3 * o + 2]), d = new nu(u[3 * o], u[3 * o + 1], u[3 * o + 2]), f = new iu(s[2 * o], s[2 * o + 1]), r.push(new ou(l, d, f)), l = new nu(c[3 * a], c[3 * a + 1], c[3 * a + 2]), d = new nu(u[3 * a], u[3 * a + 1], u[3 * a + 2]), f = new iu(s[2 * a], s[2 * a + 1]), r.push(new ou(l, d, f));
        const h = new eu(r, e.material);
        t.push(h)
    }
    return au.fromPolygons(t)
}
let lu, cu, uu, du, fu, hu, _u, mu, pu, gu, vu = !1;

function xu(e, t, n) {
    let i = pi(),
        o = pi();
    i + o > 1 && (i = 1 - i, o = 1 - o);
    const a = 1 - i - o;
    return J.copy(du, e), J.scale(du, du, i), J.copy(lu, t), J.scale(lu, lu, o), J.add(du, du, lu), J.copy(lu, n), J.scale(lu, lu, a), J.add(du, du, lu), du
}

function bu(e, t, n) {
    vu || (vu = !0, lu = J.create(), cu = J.create(), uu = J.create(), du = J.create());
    let i = 0;
    const o = null != e,
        a = o ? e.length : t.length,
        r = new Float32Array(3 * n),
        s = new Array(o ? a / 3 : a / 9);
    let l, c, u, d;
    for (l = 0, d = 0; l < a; d++) o ? (c = 3 * e[l], J.set(lu, t[c], t[c + 1], t[c + 2]), c = 3 * e[l + 1], J.set(cu, t[c], t[c + 1], t[c + 2]), c = 3 * e[l + 2], J.set(uu, t[c], t[c + 1], t[c + 2]), l += 3) : (J.set(lu, t[l + 0], t[l + 1], t[l + 2]), J.set(cu, t[l + 3], t[l + 4], t[l + 5]), J.set(uu, t[l + 6], t[l + 7], t[l + 8]), l += 9), i += (f = lu, h = cu, _ = uu, J.sub(lu, h, f), J.sub(cu, _, f), J.cross(lu, lu, cu), .5 * J.length(lu)), s[d] = i;
    var f, h, _, m;
    for (l = 0; l < n; l++) m = pi() * i, d = function e(t, n) {
        if (n < t) return t;
        const i = t + Math.floor((n - t) / 2);
        return s[i] > m ? e(t, i - 1) : s[i] < m ? e(i + 1, n) : i
    }(0, s.length - 1), o ? (c = 3 * e[d *= 3], J.set(lu, t[c], t[c + 1], t[c + 2]), c = 3 * e[d + 1], J.set(cu, t[c], t[c + 1], t[c + 2]), c = 3 * e[d + 2], J.set(uu, t[c], t[c + 1], t[c + 2])) : (c = 9 * d, J.set(lu, t[c + 0], t[c + 1], t[c + 2]), J.set(cu, t[c + 3], t[c + 4], t[c + 5]), J.set(uu, t[c + 6], t[c + 7], t[c + 8])), u = xu(lu, cu, uu), c = 3 * l, [r[c], r[c + 1], r[c + 2]] = u;
    return r
}
let wu = !1;

function Mu(e, t, n, i, o) {
    return Lt.add(e, n, i), Lt.normalize(e, e), Lt.set(t, -e[1], e[0]), Lt.set(fu, -n[1], n[0]), o / Lt.dot(t, fu)
}

function Su(e, t) {
    return Lt.set(e, -t[1], t[0]), e
}

function yu(e, t, n) {
    return Lt.subtract(e, t, n), Lt.normalize(e, e), e
}

function Tu(e) {
    wu || (wu = !0, fu = Lt.create(), hu = Lt.create(), _u = Lt.create(), mu = Lt.create(), pu = Lt.create(), gu = J.fromValues(0, 1, 0));
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
    let c = Lt.equals(o[0], o[r - 1]);
    c || null != e.closed && !e.closed || (o = o.concat(o[0]), r += 1, c = !0);
    const u = new Float32Array(2 * r * 3),
        d = new Float32Array(2 * r * 3),
        f = new Float32Array(2 * r * 2),
        h = new Float32Array(2 * r * 2);
    let _;
    n && i && (_ = new Float32Array(2 * r * 4));
    let m = 0,
        p = 0;

    function g(e, t, o, r) {
        Lt.scaleAndAdd(fu, e, t, -o);
        let s = 3 * m;
        [u[s], u[s + 2]] = fu, u[s + 1] = 0, [d[s], d[s + 1], d[s + 2]] = gu, f[s = 2 * m] = fu[0] - a, f[s + 1] = -fu[1] - a, h[s] = -1, h[s + 1] = r, Lt.scaleAndAdd(fu, e, t, o), s = 3 * (m + 1), [u[s], u[s + 2]] = fu, u[s + 1] = 0, [d[s], d[s + 1], d[s + 2]] = gu, f[s = 2 * (m + 1)] = fu[0] - a, f[s + 1] = -fu[1] - a, h[s] = 1, h[s + 1] = r, _ && (s = 4 * m, [_[s], _[s + 1], _[s + 2], _[s + 3]] = n, s += 4, [_[s], _[s + 1], _[s + 2], _[s + 3]] = i), m += 2
    }
    for (let e = 1, t = 0; e < r; e++) {
        const n = o[e - 1],
            i = o[e],
            r = Lt.distance(n, i),
            c = e < o.length - 1 ? o[e + 1] : null,
            u = t;
        if (yu(hu, i, n), s || Su(s = Lt.create(), hu), 1 === e && g(n, s, a, 0), p += r, l.push(u + 0, u + 1, u + 2), c) {
            yu(_u, c, i);
            const e = Mu(mu, pu, hu, _u, a);
            g(i, pu, e, p), l.push(u + 2, u + 1, u + 3), Lt.copy(s, pu)
        } else Su(s, hu), g(i, s, a, p), l.push(u + 2, u + 1, u + 3);
        t += 2
    }
    if (r > 2 && c) {
        const e = o[r - 2],
            t = o[0],
            n = o[1];
        yu(hu, t, e), yu(_u, n, t);
        const i = Mu(mu, pu, hu, _u, a);
        Lt.scaleAndAdd(fu, t, pu, -i), [u[0], u[2]] = fu, f[0] = fu[0] - a, f[1] = -fu[1] - a, [u[u.length - 6], u[u.length - 4]] = fu, f[f.length - 4] = fu[0] - a, f[f.length - 3] = -fu[1] - a, Lt.scaleAndAdd(fu, t, pu, i), [u[3], u[5]] = fu, [u[u.length - 3], u[u.length - 1]] = fu, f[2] = fu[0] - a, f[3] = -fu[1] - a, f[f.length - 2] = fu[0] - a, f[f.length - 1] = -fu[1] - a
    }
    for (let e = 0; e < h.length; e += 4) h[e + 3] = h[e + 1] / p, h[e + 1] = h[e + 3];
    const v = {
        index: l,
        position: u,
        percent: {
            data: h,
            size: 2,
            location: 3
        },
        normal: d,
        uv: f
    };
    return _ && (v.color = _), v
}

function Eu(e) {
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
        c = [],
        u = [],
        d = (i - n) / o;
    for (let e = 0; e < t.length; e += 1) {
        const i = t[e];
        for (let a = 0; a <= o; a += 1) {
            const f = n + d * a,
                h = i[0] * Math.cos(f),
                _ = i[0] * Math.sin(f);
            c.push(h, i[1], _);
            const m = a / o,
                p = (i[1] - r) / s;
            if (u.push(m, p), e < t.length - 1 && a < o) {
                const t = (o + 1) * e + a,
                    n = t + 1;
                l.push(t, n, n + o + 1), l.push(t, n + o + 1, t + o + 1)
            }
        }
    }
    return {
        index: l,
        position: new Float32Array(c),
        normal: Wi(c, l),
        uv: new Float32Array(u)
    }
}

function Pu(e, t, n, i, o) {
    return function (e, t, n) {
        return t + e * (n - t)
    }(function (e, t, n) {
        return (e - t) / (n - t)
    }(e, t, n), i, o)
}
const Au = Math.PI / 180;
class Cu {
    constructor(e, t) {
        this.init(e, t)
    }
    init(e, t) {
        this.tileSize = 256, this.earthRadius = t || 6378137, this.initialResolution = 2 * Math.PI * this.earthRadius / this.tileSize, this.originShift = 2 * Math.PI * this.earthRadius / 2
    }
    latLonToMeters(e, t) {
        const n = t * this.originShift / 180;
        let i = Math.log(Math.tan((90 + e) * Math.PI / 360)) / Au;
        return [n, i = i * this.originShift / 180]
    }
    metersToLatLon(e, t) {
        const n = e / this.originShift * 180;
        let i = t / this.originShift * 180;
        return [i = 180 / Math.PI * (2 * Math.atan(Math.exp(i * Au)) - Math.PI / 2), n]
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
        return [Math.ceil((t + 180) / 360 * 2 ** n) - 1, Math.ceil((Math.log(Math.tan((90 + e) * Au / 2)) / Au / 180 + 1) / 2 * 2 ** n) - 1]
    }
    latLngToTile2(e, t, n) {
        return [Math.ceil((t + 180) / 360 * 2 ** n) - 1, Math.ceil((1 - Math.log(Math.tan(e * Au) + 1 / Math.cos(e * Au)) / Math.PI) / 2 * 2 ** n) - 1]
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
class Iu {
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
            return new Iu(t, n, i, o)
        }
        return null
    }
}
class Ru {
    constructor(e, t, n, i) {
        this.layer = e, this.map = e.map, this.tx = t, this.ty = n, this.zoom = i, this.center = this.map.mercator.tileLatLngBounds(this.tx + .5, this.ty + .5, this.zoom), this.center[0] = -this.center[0];
        const o = this.map.mercator.latLngToPixels(-this.center[0], this.center[1], this.zoom);
        this.x = o[0] - this.map.viewRectCenterPixels[0], this.y = o[1] - this.map.viewRectCenterPixels[1], this.url = this.layer.getMapUrl(this.tx, this.ty, this.zoom), this.data = null, this.loaded = !1
    }
    load() {
        this.loaded || (this.request = ci(this.url, this.layer.requestOption, (e, t) => {
            e ? Zn(e) : (this.loaded = !0, this.data = t, this.layer._onTileLoaded(this))
        }))
    }
}
class Ou {
    constructor(e, t) {
        const {
            provider: n,
            domains: i,
            type: o,
            color: a,
            convert: r,
            fog: s
        } = t;
        this.provider = n, this.domains = i, this.type = o, this.color = a, this.convert = r, this.fog = s, this.trigger = new ro, this.tiles = [], this.keys = [], this.loadedTiles = [], this.map = e, this._handleTileLoaded = e => {
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
class Lu extends Ou {
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
        } = this, i = Qc(t, {
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
        const o = Qc(t, {
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
        } = this, i = Qc(t, {
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
                bloom: !0,
                material: e.material
            });
            e.animate && e.animate(t)
        }
    }
}
const Nu = "#version 300 es\n#define SHADER_NAME SIMPLE_VERTEX\nprecision highp float;\n\nlayout(location = 0) in vec3 a_position;\nlayout(location = 2) in vec2 a_uv;\n\nuniform mat4 u_projectViewMatrix;\nuniform mat4 u_modelMatrix;\nuniform mat3 u_normalMatrix;\n\nout vec2 v_uv;\nout vec3 v_worldPosition;\nvoid main () {\n  vec3 position = a_position;\n  vec4 finalPosition = vec4(position, 1.0);\n  finalPosition = u_modelMatrix * finalPosition;\n  vec4 worldPosition = finalPosition;\n  gl_Position = u_projectViewMatrix * u_modelMatrix * vec4(a_position, 1.0);\n  v_worldPosition = worldPosition.xyz;\n  v_uv = a_uv;\n}\n",
    Du = "#version 300 es\n#define SHADER_NAME SIMPLE_FRAGMENT\nprecision highp float;\n\nuniform vec3 u_color;\nuniform bool u_convert;\nuniform sampler2D u_diffuseSampler;\nuniform vec3 u_fogColor;\nuniform float u_fogNear;\nuniform float u_fogFar;\nuniform vec3 u_eyePosition;\nuniform bool u_fog;\n\nin vec2 v_uv;\nin vec3 v_worldPosition;\nout vec4 fragColor;\n\nconst highp vec3 W = vec3(0.2125, 0.7154, 0.0721);\n\nvoid main () {\n  lowp vec4 textureColor = texture(u_diffuseSampler, vec2(v_uv.x, 1.0 - v_uv.y));\n  float luminance = 1.0 - dot(textureColor.rgb, W);\n\n  if (u_convert) {\n    fragColor = vec4((vec3(luminance) * u_color) , textureColor.a);\n  } else {\n    fragColor = textureColor;\n  }\n  if (u_fog) {\n    vec3 eyeSpacePosition = u_eyePosition - v_worldPosition;\n    float distance = length(eyeSpacePosition);\n    float fogFactor = clamp((distance - u_fogNear) / (u_fogFar - u_fogNear), 0.0, 1.0);\n    fragColor.rgb = mix(fragColor.rgb, u_fogColor, fogFactor);\n  }\n}\n";
class Fu extends _r {
    constructor(e) {
        super({
            vertex: Nu,
            fragment: Du,
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
class Uu extends Ou {
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
        const t = new Fu({
            diffuseImage: this.debug ? this._createDebugImage(e) : e.data,
            color: this.color || J.fromValues(1, 1, 1),
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
class Vu {
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
            scene: c
        } = e;
        this.scene = c, this._needLoad = !1, this.mercator = new Cu(256), this.trigger = new ro, this.layers = [], this.viewRect = new Iu(0, 0, 0, 0), this.minZoom = i, this.maxZoom = o, this.latitude = a, this.longitude = r, this.zoom = s, this.width = t, this.height = n, l.forEach(e => {
            "geojson" === e.type ? this.addLayer(new Lu(this, e)) : "image" === e.type && this.addLayer(new Uu(this, e))
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
        return new Iu(i[0] - this.viewRect.w / 2, i[1] - this.viewRect.h / 2, this.viewRect.w, this.viewRect.h)
    }
    getViewRectCenter() {
        return [Pu(.5, 0, 1, -this.tlLatLng[0], -this.brLatLng[0]), Pu(.5, 0, 1, this.tlLatLng[1], this.brLatLng[1])]
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
                    const n = new Ru(e, a, r, i);
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
        return new Iu(i[0], i[1], this.viewRect.w, this.viewRect.h)
    }
}

function Bu(e) {
    return [255 * e[0], 255 * e[1], 255 * e[2]]
}

function Hu(e) {
    return [e[0] / 255, e[1] / 255, e[2] / 255]
}

function Gu(e) {
    const t = Bu(e),
        n = t;
    let i = "#";
    for (let e = 0; e < 3; e++) {
        let n = parseInt(t[e], 0).toString(16);
        n.length < 2 && (n = `0${n}`), i += n
    }
    return 7 !== i.length && (i = n), i
}

function ku(e) {
    let t = e.toLowerCase();
    if (t && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) {
        if (4 === t.length) {
            let e = "#";
            for (let n = 1; n < 4; n += 1) e += t.slice(n, n + 1).concat(t.slice(n, n + 1));
            t = e
        }
        const e = [];
        for (let n = 1; n < 7; n += 2) e.push(parseInt(`0x${t.slice(n,n+2)}`, 0));
        return Hu(e)
    }
    return t
}
const zu = {
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
    ju = {
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

function Wu(e, t = {}, n) {
    return Object.keys(e).forEach(i => {
        const o = e[i];
        n ? n(i, o) ? t[i] = o : delete t[i] : t[i] = o
    }), t
}
class qu {
    constructor(e) {
        this.data = e
    }
    addGUIColor(e, t, n) {
        const i = this.data;
        i._configType[t] = "color", i._config[t] = Gu(i[t]), i._controllers[t] = e.addColor(i._config, t).onChange(e => {
            const n = i[t],
                o = ku(e);
            J.copy(n, o), i[t] = n
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
            a = Wu(zu);
        i._configType[t] = "texture";
        const r = e.addFolder(n),
            s = [];
        i._controllers[t] = s, o && ("string" == typeof o ? (a.url = o, o.endsWith(".dds") && (a.mipmap = !1)) : o.url ? Wu(o, a, (e, t) => "url" !== e || "string" == typeof t && !t.startsWith("data:")) : delete a.url), i._config[t] = a, Object.keys(a).forEach(e => {
            const n = ju[e];
            let l;
            (l = n && null != n.min ? r.add(a, e, n.min, n.max, n.step) : r.add(a, e, n)).onFinishChange(e => {
                let n = a;
                "string" != typeof o && (n = function (e, t) {
                    return Object.keys(e).forEach(n => {
                        void 0 === t[n] ? e[n] !== zu[n] && (t[n] = e[n]) : e[n] !== t[n] && (t[n] = e[n])
                    }), Wu(t)
                }(a, o)), n.url ? 1 === Object.keys(n).length && (n = n.url) : n = null, i[t] = n
            }).name(e), s.push(l)
        })
    }
}
class Xu extends qu {
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
            o && ("color" === a ? t._config[n] = Gu(i) : "position" === a && i ? 4 === i.length ? [o.x, o.y, o.z] = i : [o.x, o.y, o.z, o.w] = i : "texture" === a && (i && "object" == typeof i ? Object.keys(i).forEach(e => {
                o[e] = i[e]
            }) : o.url = i)), "clearColor" === n && (t._config.clearAlpha = 255 * i[3], t._config.clearColor = Gu(i), t._controllers.clearAlpha.updateDisplay()), "modelMatrix" !== n && "worldMatrix" !== n || (o = t._config.position, [o.x, o.y, o.z] = t.position, o = t._config.scale, [o.x, o.y, o.z] = t.scale, o = t._config.rotation, [o.x, o.y, o.z] = t.rotation, t._controllers.position.forEach(e => {
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
class Yu extends qu {
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
        } = this, i = n.addFolder(`${e.TYPE} Light ${t}`), o = new Xu(e);
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
class Zu extends Xu {
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

function Ku(e, t) {
    const n = new Xu(t);
    n.addGUIColor(e, "emissiveColor", "Emissive Color"), n.addGUITexture(e, "emissiveImage", "Emissive Image"), n.addGUIValue(e, "doubleSided", "Double Sided"), n.addGUIValue(e, "depthWrite", "Depth Write"), n.addGUIValue(e, "transparent", "Transparent"), n.addGUIValue(e, "transparency", "Transparency"), n.addGUIValue(e, "light", "Light"), n.addGUIValue(e, "flipY", "FlipY"), n.addGUITexture(e, "normalImage", "Normal Image"), n.addGUIValue(e, "castShadow", "Cast Shadow"), n.addGUIValue(e, "receiveShadow", "Receive Shadow"), n.addGUIValue(e, "pointSize", "Point Size", {
        min: 0,
        max: 256,
        step: 1
    }), t._config.clip = !!t.clipPlane;
    const i = e.addFolder("Clip");
    let o;
    if (n.addGUIValue(i, "clip", "Enable", null, t._config).onChange(e => {
            e ? (t.clipPlane || (t.clipPlane = [0, 1, 0, .5]), o = n.addGUIPosition4(i, "clipPlane", "Clip Plane")) : (i.removeFolder(o), t.clipPlane = null, o = null)
        }), t._config.clip && (o = n.addGUIPosition4(i, "clipPlane", "Clip Plane")), t instanceof pr) n.addGUIColor(e, "ambientColor", "Ambient Color"), n.addGUITexture(e, "ambientImage", "Ambient Image"), n.addGUIColor(e, "diffuseColor", "Diffuse Color"), n.addGUITexture(e, "diffuseImage", "Diffuse Image"), n.addGUIColor(e, "specularColor", "Specular Color"), n.addGUITexture(e, "specularImage", "Specular Image"), n.addGUIValue(e, "shininess", "Shininess"), n.addGUIValue(e, "refractive", "refractive");
    else if (t instanceof hr) n.addGUIValue(e, "type", "Type", ["metalness", "specular"]), n.addGUIColor(e, "baseColorFactor", "Base Color Factor"), n.addGUITexture(e, "baseColorImage", "Base Color Image"), n.addGUIValue(e, "metallicFactor", "Metallic Factor", {
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
    else if (t instanceof Sr) n.addGUIColor(e, "diffuseColor", "Diffuse Color"), n.addGUITexture(e, "mixImage", "Mix Image"), n.addGUITexture(e, "diffuseImage1", "Diffuse Image1"), n.addGUITexture(e, "diffuseImage2", "Diffuse Image2"), n.addGUITexture(e, "diffuseImage3", "Diffuse Image3"), n.addGUITexture(e, "normalImage1", "Normal Image1"), n.addGUITexture(e, "normalImage2", "Normal Image2"), n.addGUITexture(e, "normalImage3", "Normal Image3"), n.addGUIColor(e, "specularColor", "Specular Color"), n.addGUIValue(e, "shininess", "Shininess");
    else if (t instanceof Pr) {
        const t = e.addFolder("Wireframe");
        n.addGUIColor(t, "wireframeColor", "Color")
    }
    return n
}

function Ju(e) {
    const t = new Hn;
    t.closed = !0;
    const n = new Xu(e),
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
    a._extLights = new Yu(e, a), e.lights.forEach((e, t) => {
        a._extLights.addLight(e, t)
    });
    const r = t.addFolder("Camera"),
        s = new Zu(e.camera);
    s.addGUIValue(r, "enableEasing", "EnableEasing"), s.addGUIValue(r, "enableZoom", "EnableZoom"), s.addGUIValue(r, "enableRotate", "EnableRotate"), s.addGUIValue(r, "enablePan", "EnablePan"), s.addGUIPosition(r, "position", "Position"), s.addGUIPosition(r, "target", "Target"), s.addGUIValue(r, "near", "Near"), s.addGUIValue(r, "far", "Far"), s.addGUIValue(r, "fovy", "Fovy"), s.addGUIValue(r, "minDistance", "Min Distance"), s.addGUIValue(r, "maxDistance", "Max Distance");
    const l = t.addFolder("Glow"),
        c = new Xu(e.glowEffect);
    c.addGUIColor(l, "glowColor", "Glow Color"), c.addGUIValue(l, "blurCount", "Blur Count", {
        min: 0,
        max: 10,
        step: 1
    }), c.addGUIValue(l, "blurScale", "Blur Scale", {
        min: 0,
        max: 5,
        step: .1
    }), c.addGUIValue(l, "blurSize", "Blur Size", {
        "64*64": 64,
        "128*128": 128,
        "256*256": 256,
        "512*512": 512,
        "1024*1024": 1024
    });
    const u = t.addFolder("Bloom");
    t.bloomFolder = u;
    const d = new Xu(e.bloomEffect);
    d.addGUIValue(u, "enabled", "Enabled"), d.addGUIValue(u, "threshold", "Threshold", {
        min: 0,
        max: 3,
        step: .1
    }), d.addGUIValue(u, "strength", "Strength", {
        min: 0,
        max: 5,
        step: .1
    }), d.addGUIValue(u, "radius", "Radius", {
        min: 0,
        max: 1,
        step: .1
    });
    const f = t.addFolder("Outline"),
        h = new Xu(e.outlineEffect);
    h.addGUIColor(f, "outlineColor", "outline Color"), h.addGUIValue(f, "outlineWidth", "Outline Width", {
        min: 0,
        max: 10,
        step: 1
    });
    const _ = t.addFolder("XR");
    _.add(e, "enterXR").name("Enter XR"), _.add(e, "exitXR").name("Exit XR"), t.add(e, "enterFullscreen").name("Full Screen"), t.add(e, "clear").name("Clear"), t.add(e, "toggleCaptureVideo").name("Start capture video").onChange((function () {
        this.name(e._isCapturing ? "Start capture video" : "Stop capture video")
    }));
    let m, p = !1,
        g = !1,
        v = 0,
        x = 0;
    return e.canvas.addEventListener("mousedown", e => {
        p = !0, v = e.clientX, x = e.clientY
    }), e.canvas.addEventListener("mousemove", e => {
        p && e.clientX !== v && e.clientY !== x && (g = !0)
    }), e.canvas.addEventListener("mouseup", t => {
        const {
            selection: n
        } = e;
        if (!g) {
            const i = e.getDataAndPositionAt(t),
                o = i && i.data;
            o && o.selectable || n.clear(), gi(t) ? o && o.selectable && (n.contains(o) ? n.remove(o) : n.add(o)) : o !== m && (m && (document.body.removeChild(m._gui.domElement), n.clear(), m._dataGUI.dispose(), m._dataGUI = null, m._gui.destroy(), m._gui = null, m._materialGUIs.forEach(e => {
                e.dispose()
            }), m._materialGUIs = null), o && (! function (e) {
                const t = new Xu(e),
                    n = new Hn({
                        autoPlace: !1
                    });
                e._dataGUI = t, e._gui = n, n.domElement.style.position = "absolute", n.domElement.style.top = "0px", n.domElement.style.bottom = "0px", n.domElement.style.overflowY = "auto", document.body.appendChild(n.domElement), t.addGUIPosition(n, "position", "Position"), t.addGUIPosition(n, "scale", "Scale"), t.addGUIPosition(n, "rotation", "Rotation"), t.addGUIValue(n, "glow", "Glow"), t.addGUIValue(n, "bloom", "Bloom"), t.addGUIValue(n, "outline", "Outline"), t.addGUIValue(n, "visible", "Visible"), e._materialGUIs = [], e.material ? e._materialGUIs.push(Ku(n, e.material)) : e.mesh && e.mesh.primitives.forEach((t, i) => {
                    const o = n.addFolder(`Material ${i}: ${t.material.name}`);
                    e._materialGUIs.push(Ku(o, t.material))
                })
            }(o), n.set(o)), m = o)
        }
        g = !1, p = !1
    }), t
}

function Qu(e, t = "../") {
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
class $u {
    constructor(e, t, n, i, o) {
        if (this.loader = e, this.data = t, this.parentNode = n, this.path = i, this.arrayBuffer = o, this.hasChildren = t.children && t.children.length, this.isLoadingChildren = !1, this.isChildrenLoaded = !1, this.header = new Int32Array(o, 0, 7), 1835283298 !== this.header[0]) throw new Error("Invalid magic number in Batched 3D Model header");
        const a = this.header[3],
            r = this.header[4],
            s = this.header[5],
            l = this.header[6],
            c = new TextDecoder;
        let u = 28;
        if (a > 0) {
            const e = c.decode(new Uint8Array(o, u, a));
            this.featureTableJSON = JSON.parse(e), u += a
        } else this.featureTableJSON = {};
        if (r > 0 && (u += r), s > 0) {
            const e = c.decode(new Uint8Array(o, u, s));
            this.batchTableJSON = JSON.parse(e), u += s
        } else this.batchTableJSON = {};
        l > 0 && (u += l), this.byteOffset = u
    }
}
class ed {
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
            this.onLoadB3DM(new $u(this, e, n, t, o)), i && i()
        })
    }
    onLoadRoot(e) {}
    onLoadB3DM(e) {}
    onLoadChildJSON(e) {}
}
export {
    as as Animate, Vr as Axis, Ta as BasisTexture, kr as Billboard, br as BillboardMaterial, Ei as BoundingBox, bi as BoundingSphere, jr as BoxHelper, ls as Camera, Nr as Cube, Ka as DDSTexture, zn as DEBUG, Lr as Data, Ds as DirectionLight, dr as DrawMaterial, al as Effect, $l as FlowEffect, bo as Framebuffer, fo as Frustum, zs as GLTFParser, ir as GLTFResource, Hn as GUI, dl as GlowEffect, er as HDRTexture, nr as ImageTexture, Ms as Light, Vu as LightMap, ur as Material, Hr as Model, nl as ObjParser, sl as OutlineEffect, hr as PBRMaterial, _o as Plane, ks as PointLight, pa as Program, _l as SSAOEffect, pr as STDMaterial, kl as Scene, qr as Selection, _r as ShaderMaterial, Dr as Sphere, Hs as SpotLight, Nt as Stats, Sr as TerrainMaterial, vo as Texture, ed as ThreeDTilesLoader, Xl as TiltShiftEffect, Fr as Torus, ro as Trigger, ki as VertexArray, Tr as WaterMaterial, Pr as WireframeMaterial, Jl as ZoomBlurEffect, Xi as addGeometry, xi as addWebGLUnsupportedTip, si as ajax, Wi as calculateNormals, qi as calculateTangent, Bu as convertGLColorToRGB, ku as convertHEXColorToRGB, Gu as convertRGBColorToHEX, Hu as convertRGBToGLColor, Ki as createCircle, Zi as createCube, Ju as createGUI, Eu as createLathe, eo as createPlane, ga as createProgram, Qi as createSphere, Ji as createTorus, $i as createTruncatedCone, ao as createVertexArray, mi as debounce, hi as defineProperties, fi as defineProperty, Yi as disposeVertexArrays, Qc as extrudeGeoJSON, Kc as extrudePolygon, Jc as extrudePolyline, Lc as flatten, _i as fn2workerURL, ru as fromCSG, $n as getClientPoint, vi as getUrlName, o as glMatrix, ni as isChrome, gi as isCtrlDown, ei as isImage, ai as isImageBitmap, oi as isImageBitmapAvailable, ti as isImageBitmapSource, ii as isSafari, di as loadImageBitmap, Zn as logError, Xn as logInfo, Yn as logWarn, c as mat2, _ as mat2d, b as mat3, I as mat4, kc as offsetPolygon, Tu as polylineToShape, ot as quat, pt as quat2, pi as random, bu as randomPointsInPrimitive, ci as request, li as requestImage, ri as setCanvasSize, Qn as setLogError, Kn as setLogInfo, Jn as setLogWarn, Qu as setupSceneEnv, su as toCSG, Oc as triangulate, Lt as vec2, J as vec3, Te as vec4, Gn as version
};