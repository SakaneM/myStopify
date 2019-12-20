// import PuppyCode = require('./code');

class Judge {
    output = [] as any;

    public total(score: number){
        //合計点をUIイベントに送信
        console.log('maxscore:', score);
    }

    // public gcd(a: number[]): number{
    //     console.log(a[0],a[1])
    //     if (a[1] === 0){
    //         return a[0]
    //     }
    //     return this.gcd([a[1], a[0] % a[1]])
    // }
    public makeDouble(a: number):number{
        return 2*a
    }

    public getFunc(func: string):(arg: any) => any{
        // public getFunc(func: string):number{
        // Puppyのfunc部を返す
        return this.makeDouble
    }

    public expect(func: (any0: any) => any, inputs: number[]|string[]|number[][]){
        // inputs.forEach((value: number|string) => {　//入力の数指定ができない
        for(const input of inputs){
            const ans = func(input);
            this.output.push(ans);
            //outputで出力を管理
            //pushする際に型エラーが起きたらどうするか
        };
        return this;
    }

    public toBe(matchVal: number|string) {
        const ans = this.output.shift()
        console.log('   youranswer:',ans)
        if (matchVal === ans) {
            this.output = []
            return true;
        }
        this.output = []
        return false;
    }

    public match(matchVal: number[]|string[]){
        var count = this.output.length
        matchVal.forEach((match: number|string) => {
            const ans = this.output.shift()
            console.log('   youranswer:',ans)
            if (match === ans){
                count--;
            }
        })
        if (count === 0 && this.output.length === 0){
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
            console.log('   score:',score);
        }
        // イベントを呼ぶ(0点)
        else{
            console.log('   score:',0);
        }
    }
}

export = Judge;