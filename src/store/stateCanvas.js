import {makeAutoObservable} from 'mobx';

class CanvasState {
    canvas = null
    undoList = [] //все действия которые делали
    redoList = [] //действия которые отменили

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas) {
        this.canvas = canvas
    }

    pushToUndo(data) {
        this.undoList.push(data)
    }

    pushToRedo(data) {
        this.redoList.push(data)
    }


    undo() {
        let ctx = this.canvas.getContext('2d')
        if (this.undoList.length < 0) {
            let dataUrl = this.undoList.pop()
            this.redoList.push(dataUrl)
            let img = new Image()
            img.src = dataUrl
            img.onload = () => {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.heigth)
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.heigth)
            }

        } else {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.heigth)
        }

    }

    redo() {
        let ctx = this.canvas.getContext('2d')
        if (this.redoList.length < 0) {
            let dataUrl = this.redoList.pop()
            this.undoList.push(dataUrl)
            let img = new Image()
            img.src = dataUrl
            img.onload = () => {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.heigth)
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.heigth)
            }

        }

    }
}

export default new CanvasState()