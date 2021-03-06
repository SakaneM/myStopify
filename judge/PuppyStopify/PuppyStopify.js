"use strict";
// interface = オブジェクトに名前をつける機能
// interface PuppyPauser {
//   isPaused(): boolean;
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var PuppyStopify = /** @class */ (function () {
    // new PuppyStopify(pauser,runner) (=インスタンス化)した時にこのconstrunctorが実行される
    // construnctorはrunnerを受け取り、３つのプロパティを設定
    function PuppyStopify(runner) {
        this.pauser = false;
        this.runner = runner;
        this.value = [];
        // this.value = nowvalue;
    }
    PuppyStopify.prototype.step = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                res = this.runner.next();
                if (!res.done) {
                    if (!this.pauser) {
                        setTimeout(function () {
                            _this.step();
                        }, 0);
                    }
                    else {
                        this.value.push(res.value);
                        // console.log("Pause:"+this.value); 
                    }
                }
                else {
                    this.pauser = true;
                    this.value.push(res.value);
                    console.log("All fin:" + this.value);
                }
                resolve(); //ここでstep()のresolveを返す
                return [2 /*return*/];
            });
        }); });
    };
    PuppyStopify.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.step()];
                    case 1:
                        _a.sent(); // resolveが呼ばれるまで流れをストップする
                        if (this.value.length === 0) {
                            // throw new Error("No output.");    
                        }
                        return [2 /*return*/, this.value[this.value.length - 1]];
                }
            });
        });
    };
    return PuppyStopify;
}());
module.exports = PuppyStopify;
