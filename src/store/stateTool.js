import { makeAutoObservable } from 'mobx';

class ToolState{
    tool=null
    constructor() {
        makeAutoObservable(this)
    }
    setToll(toll){
        this.tool=toll
    }
}

export default new ToolState()