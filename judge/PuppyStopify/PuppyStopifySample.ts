import PuppyStopify = require('./PuppyStopify');

const f = (a: number, b: number) => {            //元のコード
  while (a < b) {
    a = a + 1;
  }
  return a;
}

const f2 = (a: number, b: number) => {              //コンパイル後
  const gen = function* (a: number, b: number) {
    while (a < b) {
      yield 0;
      a = a + 1;
    }
    return a;                                       
  }
  return new PuppyStopify(gen(a, b)).run(); 
}

const g = (a: number, b: number) => {            //元のコード
  while (a < b) {
    f(1,2);
    a = a + 1;
  }
  return a;
}

const g2 = (a: number, b: number) => {              //コンパイル後
  const gen = function* (a: number, b: number) {
    while (a < b) {
      yield 0;
      f2(1,2); // stopify() を作るので
      a = a + 1;
    }
    return a;                                       
  }
  return new PuppyStopify(gen(a, b)).run(); 
}

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
let mystopify: PuppyStopify<any>|null = null;     
// １関数ごとにPupyStopifyを生成するようにする
// 同じpauserを見に行くようにする
const r2 = (n: number) => {                       //コンパイル後
  const gen_ = function* (n: number) {
    while(0 <= n){
      yield 0;
      console.log(n);
      n = n + 1;            // このnを結果として取得したい
      //永遠に{ value: 0, done: false }のジェネレーターが走るからiterator.valueはダメ
    }
  }
  mystopify = new PuppyStopify(gen_(n));
  return mystopify.run();
}

r2(0);
setTimeout(() => {
  console.log("stop");
  mystopify!.pauser = true;
}, 2000);

// const r2Iterator = r2(0);
// setTimeout(() => {
//   console.log("stop");
//   r2Iterator.pauser = true; 
// }, 2000);
// r2Iterator.run();