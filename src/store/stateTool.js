import { makeAutoObservable } from 'mobx';

class ToolState{
    tool=null
    constructor() {
        makeAutoObservable(this)
    }
    setToll(toll){
        this.tool=toll
    }
    setFillColor(color){
        this.tool.fillColor=color
    }
    setStrokeColor(color){
        this.tool.strokeColor=color
    }
    setLineWidth(width){
        this.tool.lineWidth=width
    }
}

export default new ToolState()