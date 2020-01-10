"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var PuppyStopify = require("./PuppyStopify");
var f = function (a, b) {
    while (a < b) {
        a = a + 1;
    }
    return a;
};
var f2 = function (a, b) {
    var gen = function (a, b) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(a < b)) return [3 /*break*/, 2];
                    return [4 /*yield*/, 0];
                case 1:
                    _a.sent();
                    a = a + 1;
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/, a];
            }
        });
    };
    return new PuppyStopify(gen(a, b)).run();
};
var g = function (a, b) {
    while (a < b) {
        f(1, 2);
        a = a + 1;
    }
    return a;
};
var g2 = function (a, b) {
    var gen = function (a, b) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(a < b)) return [3 /*break*/, 2];
                    return [4 /*yield*/, 0];
                case 1:
                    _a.sent();
                    f2(1, 2); // stopify() を作るので
                    a = a + 1;
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/, a];
            }
        });
    };
    return new PuppyStopify(gen(a, b)).run();
};
// g2(0,5);
// const f2Iterator = f2(0,5);
// f2Iterator.run();
// const r = (n: number): number => {             //元のコード
//   if (n === 0) return 0;
//   return r(n);
// }
// const r2 = (n: number) => {                       //コンパイル後
//   const gen_ = function* (n: number) {
//     while(0 <= n){
//       yield 0;
//       console.log(n);
//       n = n + 1;            // ここをどうやって取得するか
//       //永遠に{ value: 0, done: false }のジェネレーターが走る
//     }
//   }
//   const mystopify = new PuppyStopify(gen_(n));
//   return mystopify;
// }
var mystopify = null;
var r2 = function (n) {
    var gen_ = function (n) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(0 <= n)) return [3 /*break*/, 2];
                    return [4 /*yield*/, 0];
                case 1:
                    _a.sent();
                    console.log(n);
                    n = n + 1; // このnを結果として取得したい
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    };
    mystopify = new PuppyStopify(gen_(n));
    return mystopify.run();
};
r2(0);
setTimeout(function () {
    console.log("stop");
    mystopify.pauser = true;
}, 2000);
// const r2Iterator = r2(0);
// setTimeout(() => {
//   console.log("stop");
//   r2Iterator.pauser = true; 
// }, 2000);
// r2Iterator.run();
