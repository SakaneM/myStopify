import Judge = require('./judgeClass');

const judge = new Judge(); 

// 合計点を設定する
judge.total(20);

// 関数タイプ (単体テスト,入出力が1対)
// const gcd = judge.getFunc('gcd');
// judge.test('gcd(1,2)', 10, () => {
//     return judge.expect(gcd,[[3,12]]).toBe(3);
// });
const double = judge.getFunc('double');
judge.test('Func double 12', 10, () => {
    return judge.expect(double,[12]).toBe(24);
});

// 入出力タイプ (AOJタイプ,入出力が複数)
// const main = judge.getFunc('main');
// judge.test('main', 10, () => {
//     const inputs = [
//         "",  // 入力バッファ
//     ]
//     return judge.expect(main, inputs).match([
//         'Hello,World'  // 出力（答え）を指定する
//     ]);
// });
judge.test('AOJ double 12,24,36', 10, () => {
    const inputs = [
        12,24,36
    ]
    return judge.expect(double, inputs).match([
        24,48,72
    ]);
});
