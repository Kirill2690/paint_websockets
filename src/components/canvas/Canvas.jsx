import React, {useEffect, useRef} from 'react';
import '../../style/canvas.scss'
import {observer} from "mobx-react-lite";
import stateCanvas from "../../store/stateCanvas";

const Canvas = observer(() => {

    const canvasRef = useRef()

    useEffect(() => {
        stateCanvas.setCanvas()
    }, [])
    return (
        <div className='canvas'>
            <canvas ref={canvasRef} width={600} height={400}/>

        </div>
    );
});

export default Canvas;