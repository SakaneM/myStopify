"use strict";
// import PuppyCode = require('./code');
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
var Judge = /** @class */ (function () {
    function Judge() {
        this.output = [];
    }
    // constructor( ){
    //     this.output = this.output.;
    // }
    Judge.prototype.total = function (score) {
        //合計点をUIイベントに送信
        console.log(score);
    };
    Judge.prototype.gcd = function (inputs) {
        return 3;
    };
    // public getFunc(func: string):(inputs?: number[]|string[])　=> number|string{
    Judge.prototype.getFunc = function (func) {
        // Puppyのfunc部を返す
        // return puppy[main][func]
        return this.gcd([1, 2]);
    };
    // public expect(func: ((args: number|string) => number|string), inputs: number[]|string[]){
    Judge.prototype.expect = function (func, inputs) {
        var _this = this;
        // outputを計算する
        // inputs.forEach(async (value: number|string) => {
        //     const ans = await func(value);
        //     this.output.push(ans);
        // },Promise.resolve);
        inputs.forEach(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // const ans = await func();
                // this.output.push(ans);
                this.output.push(func);
                return [2 /*return*/];
            });
        }); }, Promise.resolve);
        return this;
    };
    Judge.prototype.toBe = function (matchVal) {
        if (matchVal === this.output.shift()) {
            return true;
        }
        return false;
    };
    Judge.prototype.match = function (matchVal) {
        var _this = this;
        matchVal.forEach(function (match) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (match === this.output.shift()) {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, false];
            });
        }); });
    };
    Judge.prototype.test = function (testname, score, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('test:', testname);
                        return [4 /*yield*/, callback()];
                    case 1:
                        if (_a.sent()) {
                            // イベントを呼ぶ処理(maxscore)
                            console.log('score:', score);
                        }
                        // イベントを呼ぶ(0score)
                        else {
                            console.log('score:', 0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Judge;
}());
module.exports = Judge;
