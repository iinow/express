
class Req {
    constructor(data){
        this.data = data
    }

    get data(){
        return this._data
    }

    set data(data){
        this._data = data
    }
}

let response = new Req("hello world")

console.log(JSON.stringify(response))