(function($, Edge, compId) {
    var _ = null,
        y = true,
        n = false,
        x2 = '3.0.0.322',
        c = 'color',
        e11 = '${_btn}',
        e17 = '${_topic}',
        a = 'Base State',
        x = 'text',
        x16 = 'hidden',
        m = 'rect',
        dt = 'Default Timeline',
        x1 = '3.0.0',
        x8 = 'rgba(10,129,251,1.00)',
        i = 'none',
        x14 = 'rgba(213,241,255,1.00)',
        rt = 'right',
        lf = 'left',
        x19 = 'rgba(0,0,0,1.00)',
        e18 = '${_message}',
        x5 = 'Arial, Helvetica, sans-serif',
        h = 'height',
        l = 'normal',
        e15 = '${_Stage}',
        e10 = '${_email}',
        x13 = 'pointer',
        bg = 'background-color',
        fs = 'font-size',
        w = 'width',
        tp = 'top',
        x4 = '24',
        ta = 'text-align',
        ov = 'overflow',
        xc = 'rgba(0,0,0,1)',
        x12 = 'rgba(0,0,0,0.65)',
        x9 = 'stage',
        s = 'style';
    var im = 'images/';
    var s7 = "message",
        s6 = "topic",
        s3 = "email";
    var fonts = {};
    var P = Edge.P,
        T = Edge.T,
        A = Edge.A;
    var opts = {};
    var resources = [];
    var symbols = {
        "stage": {
            v: x1,
            mv: x1,
            b: x2,
            bS: a,
            stf: i,
            cg: i,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    id: 'email',
                    t: x,
                    r: ['14px', '29px', '508px', '30px', 'auto', 'auto'],
                    text: s3,
                    align: "right",
                    n: [x5, x4, xc, l, i, ""]
                }, {
                    id: 'topic',
                    t: x,
                    r: ['14px', '90px', '508px', '36px', 'auto', 'auto'],
                    text: s6,
                    align: "right",
                    n: [x5, x4, xc, l, i, l]
                }, {
                    id: 'message',
                    t: x,
                    r: ['14px', '151px', '508px', '210px', 'auto', 'auto'],
                    text: s7,
                    align: "right",
                    n: [x5, x4, "rgba(0,0,0,1.00)", l, i, l]
                }, {
                    id: 'btn',
                    t: m,
                    r: ['402px', '369px', '120px', '21px', 'auto', 'auto'],
                    cu: ['pointer'],
                    br: ["10px", "10px", "10px", "10px"],
                    f: [x8],
                    s: [0, xc, i],
                    boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65)"]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 0,
                    a: y,
                    tt: []
                }
            }
        }
    };
    var S1 = symbols[x9];
    var tl0 = S1.tl[dt].tt,
        st1 = S1.s[a] = {},
        A1 = A(_, tl0, st1);
    A1.A(e10).P(tp, 29).P(ta, rt).P(h, 30).P(w, 508).P(lf, 14).P(fs, 14);
    A1.A(e11).P(bg, x8, c).P("boxShadow.color", x12, "subproperty").P(lf, 402).P(w, 120).P(tp, 369).P("cursor", x13).P(h, 21).P("boxShadow.offsetV", 3, "subproperty").P("boxShadow.offsetH", 3, "subproperty").P("boxShadow.blur", 3, "subproperty");
    A1.A(e15).P(bg, x14, c).P(w, 550).P(h, 400).P(ov, x16);
    A1.A(e17).P(tp, 90).P(ta, rt).P(h, 36).P(w, 508).P(lf, 14).P(fs, 14);
    A1.A(e18).P(tp, 151).P(ta, rt).P(w, 508).P(c, x19, c).P(h, 210).P(lf, 14).P(fs, 14);
    Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);
    $(window).ready(function() {
        Edge.launchComposition(compId);
    });
})(jQuery, AdobeEdge, "EDGE-1094819765");