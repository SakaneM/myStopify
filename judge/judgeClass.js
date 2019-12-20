"use strict";
// import PuppyCode = require('./code');
var Judge = /** @class */ (function () {
    function Judge() {
        this.output = [];
    }
    Judge.prototype.total = function (score) {
        //合計点をUIイベントに送信
        console.log('maxscore:', score);
    };
    // public gcd(a: number[]): number{
    //     console.log(a[0],a[1])
    //     if (a[1] === 0){
    //         return a[0]
    //     }
    //     return this.gcd([a[1], a[0] % a[1]])
    // }
    Judge.prototype.makeMulti = function (input) {
        return input[0] * input[1];
    };
    Judge.prototype.getFunc = function (func) {
        // public getFunc(func: string):number{
        // Puppyのfunc部を返す
        return this.makeMulti;
    };
    Judge.prototype.expect = function (func) {
        var inputs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            inputs[_i - 1] = arguments[_i];
        }
        var ans = func(inputs);
        this.output.push(ans);
        //outputで出力を管理
        //pushする際に型エラーが起きたらどうするか
        return this;
    };
    Judge.prototype.main = function (func, inputs) {
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            var ans = func(input);
            this.output.push(ans);
        }
        return this;
    };
    Judge.prototype.toBe = function (matchVal) {
        var ans = this.output.shift();
        if (matchVal === ans) {
            this.output = [];
            console.log('   youranswer:', ans, '  correct');
            return 1;
        }
        this.output = [];
        console.log('   youranswer:', ans);
        return 0;
    };
    Judge.prototype.match = function (matchVal) {
        var _this = this;
        var correct = 0;
        matchVal.forEach(function (match) {
            var ans = _this.output.shift();
            if (match === ans) {
                console.log('   youranswer:', ans, '  correct');
                correct++;
            }
            else {
                console.log('   youranswer:', ans);
            }
        });
        this.output = [];
        return correct;
    };
    Judge.prototype.test = function (testname, score, func) {
        console.log('test:', testname);
        console.log('   score:', score * func());
    };
    return Judge;
}());
module.exports = Judge;
