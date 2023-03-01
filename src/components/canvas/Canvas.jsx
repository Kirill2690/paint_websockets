import React, {useEffect, useRef} from 'react';
import '../../style/canvas.scss'
import {observer} from "mobx-react-lite";
import stateCanvas from "../../store/stateCanvas";
import stateTool from "../../store/stateTool";
import Brush from "../../tools/Brush";

const Canvas = observer(() => {

    const canvasRef = useRef()

    useEffect(() => {
        stateCanvas.setCanvas(canvasRef.current)
        stateTool.setToll(new Brush(canvasRef.current))
    }, [])

    const mouseDownHandler=()=>{
        stateCanvas.pushToUndo(canvasRef.current.toDataURL())
    }
    return (
        <div className='canvas'>
            <canvas onMouseDown={mouseDownHandler} ref={canvasRef} width={600} height={400}/>
        </div>
    );
});

export default Canvas;