// import PuppyCode = require('./code');

class Judge {
    output = [] as any;

    public total(score: number){
        //合計点をUIイベントに送信
        console.log('maxscore:', score);
    }

    public getFunc(func: string):(arg0: any) => any{
        // public getFunc(func: string):number{
        // Puppyのfunc部を返す
        return hoge
    }

    public expect(func: (any0: any) => any, inputs: number[]|string[]){
        inputs.forEach((value: number|string) => {
            const ans = func(value);
            this.output.push(ans);
            //outputで出力を管理
            //pushする際に型エラーが起きたらどうするか
        });
        return this;
    }

    public toBe(matchVal: number|string) {
        if (matchVal === this.output.shift()) {
            this.output = []
            return true;
        }
        this.output = []
        return false;
    }

    public match(matchVal: number[]|string[]){
        var count = this.output.length
        matchVal.forEach((match: number|string) => {
            if (match === this.output.shift()){
                count--;
            }
        })
        if (count === 0 && this.output === []){
            //全て正解 && 出力結果に過不足なければtrue
            return true;
        }
        this.output = []
        return false;
    }

    public test(testname: string, score: number, func: () => boolean){
        console.log('test:', testname);
        if (func()){
            // イベントを呼ぶ処理(maxscore)に置き換える
            console.log('score:',score);
        }
        // イベントを呼ぶ(0点)
        else{
            console.log('score:',0);
        }
    }
}

export = Judge;