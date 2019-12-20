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
    public makeMulti(input: number[]):number{
        return input[0]*input[1]
    }

    public getFunc(func: string):(...arg: any) => any{
        // public getFunc(func: string):number{
        // Puppyのfunc部を返す
        return this.makeMulti
    }

    public expect(func: (...any: any) => any, ...inputs: any){
        const ans = func(inputs);
        this.output.push(ans);
        //outputで出力を管理
        //pushする際に型エラーが起きたらどうするか
        return this;
    }

    public main(func: (arg: any) => any, inputs: any){
        for(const input of inputs){
            const ans = func(input);
            this.output.push(ans);
        }
        return this;
    }

    public toBe(matchVal: number|string) {
        const ans = this.output.shift()
        if (matchVal === ans) {
            this.output = []
            console.log('   youranswer:',ans,'  correct')
            return 1;
        }
        this.output = []
        console.log('   youranswer:',ans)
        return 0;
    }

    public match(matchVal: number[]|string[]): number{
        var correct = 0;
        matchVal.forEach((match: number|string) => {
            const ans = this.output.shift()
            if (match === ans){
                console.log('   youranswer:',ans,'  correct')
                correct++;
            }
            else{
                console.log('   youranswer:',ans)
            }
        })
        this.output = []
        return correct
    }

    public test(testname: string, score: number, func: () => number){
        console.log('test:', testname);
        console.log('   score:', score*func());
    }
}

export = Judge;