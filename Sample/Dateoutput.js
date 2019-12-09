var $__T = stopify;
var $__R = $__T.newRTS("lazy");
var $S = stopify.init($__R);
function handleNew(constr, ...args) {
    var target = null; $__R.remainingStack--;
    if (!$__R.mode) {
        const $frame = $__R.stack.pop();
        target = $frame.index;
        [result0, obj0, app0, app1] = $frame.locals
    }
    function captureLocals(frame) {
        frame.locals = [result0, obj0, app0, app1]
    }
    var restoreNextFrame = () => {
        return handleNew.call(this, constr, ...args)
    };
    var app0, app1, obj0, result0;
    if ($__R.mode) app0 = $__T.knownBuiltIns.includes(constr);
    if ($__R.mode && app0 || !$__R.mode && target === 1) {
        if ($__R.mode) {
            app1 = new constr(...args);
            $__R.remainingStack++
        }
        return app1
    }
    if ($__R.mode) obj0 = Object.create(constr.prototype);
    try {
        if ($__R.mode) {
            result0 = constr.apply(obj0, args)
        }
        else if (target === 3) result0 = $__R.stack[$__R.stack.length - 1].f()
    }
    catch (exn0) {
        if (exn0 instanceof $__T.Capture) {
            exn0.stack.push({ kind: "rest", f: restoreNextFrame, index: 3 });
            captureLocals(exn0.stack[exn0.stack.length - 1])
        }
        else {
            $__R.pushTrace(": in handleNew")
        }
        throw exn0
    }
    if ($__R.mode) $__R.remainingStack++;
    return typeof result0 === "object" ? result0 : obj0;
    $__R.remainingStack++
}
function $top() {
    var target = null;
    $__R.remainingStack--;
    if (!$__R.mode) {
        const $frame = $__R.stack.pop();
        target = $frame.index;
        [app2, app3, app4, app5] = $frame.locals
    }
    function captureLocals(frame) {
        frame.locals = [app2, app3, app4, app5]
    }
    var restoreNextFrame = () => {
        return $top.call(this)
    };
    var app2, app3, app4, app5;
    try {
        if ($__R.mode) {
            app2 = $S.g.document.createElement("div")
        }
        else if (target === 4)
            app2 = $__R.stack[$__R.stack.length - 1].f()
    }
    catch (exn1) {
        if (exn1 instanceof $__T.Capture) {
            exn1.stack.push({
                kind: "rest",
                f: restoreNextFrame,
                index: 4
            });
            captureLocals(exn1.stack[exn1.stack.length - 1])
        }
        else {
            $__R.pushTrace("Line 1")
        }
        throw exn1
    }
    if ($__R.mode) $S.g.elt = app2;
    try {
        if ($__R.mode) {
            app3 = $S.g.document.body.appendChild($S.g.elt)
        }
        else if (target === 5) app3 = $__R.stack[$__R.stack.length - 1].f()
    }
    catch (exn2) {
        if (exn2 instanceof $__T.Capture) {
            exn2.stack.push({ kind: "rest", f: restoreNextFrame, index: 5 });
            captureLocals(exn2.stack[exn2.stack.length - 1])
        }
        else { $__R.pushTrace("Line 2") }
        throw exn2
    }
    if ($__R.mode) {
        $S.g.i = 0; $S.g.j = 0
    }
    if ($__R.mode || !$__R.mode && (target === 7 || target === 6)) 
    loop_break0: 
    while ($__R.mode || !$__R.mode && (target === 7 || target === 6)) {
        if ($__R.mode || !$__R.mode && (target === 7 || target === 6)) loop_continue0: {
            try {
                if ($__R.mode) {
                    app4 = $S.suspend()
                }
                else if (target === 6) app4 = $__R.stack[$__R.stack.length - 1].f()
            } catch (exn3) {
                if (exn3 instanceof $__T.Capture) {
                    exn3.stack.push({ kind: "rest", f: restoreNextFrame, index: 6 });
                    captureLocals(exn3.stack[exn3.stack.length - 1])
                }
                else {
                    $__R.pushTrace("")
                } throw exn3
            }
            if ($__R.mode && $S.g.i++ == 10000000 || !$__R.mode && target === 7) {
                if ($__R.mode) $S.g.j++;
                try {
                    if ($__R.mode) {
                        app5 = handleNew($S.g.Date)
                    }
                    else if (target === 7) app5 = $__R.stack[$__R.stack.length - 1].f()
                } catch (exn4) {
                    if (exn4 instanceof $__T.Capture) {
                        exn4.stack.push({
                            kind: "rest",
                            f: restoreNextFrame,
                            index: 7
                        });
                        captureLocals(exn4.stack[exn4.stack.length - 1])
                    }
                    else {
                        $__R.pushTrace("")
                    } throw exn4
                }
                if ($__R.mode) {
                    $S.g.elt.innerText = "Still running ... " + app5; $S.g.i = 0
                }
            }
        }
    }
    $__R.remainingStack++
}
$__R.runtime($top, result => {
    $S.onEnd(result)
});