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
    Judge.prototype.makeDouble = function (a) {
        return 2 * a;
    };
    Judge.prototype.getFunc = function (func) {
        // public getFunc(func: string):number{
        // Puppyのfunc部を返す
        return this.makeDouble;
    };
    Judge.prototype.expect = function (func, inputs) {
        // inputs.forEach((value: number|string) => {　//入力の数指定ができない
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            var ans = func(input);
            this.output.push(ans);
            //outputで出力を管理
            //pushする際に型エラーが起きたらどうするか
        }
        ;
        return this;
    };
    Judge.prototype.toBe = function (matchVal) {
        var ans = this.output.shift();
        console.log('   youranswer:', ans);
        if (matchVal === ans) {
            this.output = [];
            return true;
        }
        this.output = [];
        return false;
    };
    Judge.prototype.match = function (matchVal) {
        var _this = this;
        var count = this.output.length;
        matchVal.forEach(function (match) {
            var ans = _this.output.shift();
            console.log('   youranswer:', ans);
            if (match === ans) {
                count--;
            }
        });
        if (count === 0 && this.output.length === 0) {
            //全て正解 && 出力結果に過不足なければtrue
            return true;
        }
        this.output = [];
        return false;
    };
    Judge.prototype.test = function (testname, score, func) {
        console.log('test:', testname);
        if (func()) {
            // イベントを呼ぶ処理(maxscore)に置き換える
            console.log('   score:', score);
        }
        // イベントを呼ぶ(0点)
        else {
            console.log('   score:', 0);
        }
    };
    return Judge;
}());
module.exports = Judge;
