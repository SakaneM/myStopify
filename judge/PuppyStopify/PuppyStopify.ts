// interface = オブジェクトに名前をつける機能
// interface PuppyPauser {
//   isPaused(): boolean;
// }

class PuppyStopify<T> {                 // 「T」は型引数で任意の型が入る　クラス付加の場合はvalue次第でTが決まる
  // runner: Generator<any, T, any>;    // 型指定 インスタンス化するときの引数
  // value: T[];                        // valueの型'T'は型引数利用時に決定される
  // pauser: PuppyPauser;
  // public constructor(pauser: PuppyPauser, runner: Generator<any, T, any>) { 
  //   this.pauser = pauser;           
  //   this.runner = runner;
  //   this.value = [];                 // valueはここで作られる
  // }

  // 以下メソッド
  // private async step() {
  //   const res = this.runner.next();
  //   console.log("#"+res.value);
  //   if(res.done){
  //     this.value.push(res.value); 
  //     console.log("All fin:"+this.value); 
  //   }
  //   else{
  //     await setTimeout(async () => {          // 非同期処理はrun()が終わってから再び実行されるからダメじゃん？
  //       console.log('settimeout:');
  //       await this.step();
  //     }, 0);  //アロー関数内のthisは呼出し元のthisが保証される
  //   }
  // }

  //Promise無しだと実行順は run()開始→step()開始→run()終了→step()内の非同期処理

  runner: Generator<any, T, any>;   // 型指定 インスタンス化するときの引数
  value: T[];                       // valueの型'T'は型引数利用時に決定される
  pauser: boolean;
  // new PuppyStopify(pauser,runner) (=インスタンス化)した時にこのconstrunctorが実行される
  // construnctorはrunnerを受け取り、３つのプロパティを設定
  public constructor(runner: Generator<any, T, any>) {
    this.pauser = false;
    this.runner = runner;
    this.value = [];
    // this.value = nowvalue;
  }

  public step() {
    return new Promise(async resolve => {
      const res = this.runner.next();
      if (!res.done) {
        if (!this.pauser) {
          setTimeout(() => {
            this.step();
          }, 0)
        }
        else{
          this.value.push(res.value); 
          console.log("Pause:"+this.value); 
        }
      }
      else {
        this.pauser = true;
        this.value.push(res.value); 
        console.log("All fin:"+this.value); 
      }

      resolve();      //ここでstep()のresolveを返す
    })
  }
  
  public async run() {
    await this.step();              // resolveが呼ばれるまで流れをストップする
    if (this.value.length === 0) {
      // throw new Error("No output.");    
    }
    return this.value[this.value.length-1];
  }

}
//実行順 run()開始→step()開始→stepでresolveが返される→run()終了

export = PuppyStopify;

