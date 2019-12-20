"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Judge = require("./judgeClass");
var judge = new Judge();
// function doJudge(judge: typeof Judge){
// return (judge) => {
// 合計点を設定する
judge.total(20);
// 関数タイプ (単体テスト)
// const gcd = judge.getFunc('gcd');
judge.test('gcd(1,2)', 10, function () {
    return judge.expect(judge.getFunc('gcd'), [1, 2]).toBe(3);
});
// // 入出力タイプ (AOJタイプ)
// const main = judge.getFunc('main');
// judge.test('main', 10, () => {
//     const inputs = [
//         "",  // 入力バッファ
//     ]
//     return judge.expect(main(), inputs).match([
//         'Hello,World'  // 出力（答え）を指定する
//     ]);
// });
// }
// }
