import React from 'react';
import '../../style/toolbar.scss'
import BrushIcon from '@mui/icons-material/Brush';
import {Button} from "@mui/material";
import RectangleIcon from '@mui/icons-material/Rectangle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import stateTool from "../../store/stateTool";
import stateCanvas from "../../store/stateCanvas";
import Brush from "../../tools/Brush";
import Rect from "../../tools/Rect";

const ToolBar = () => {

    const changeColor=e=>{
        stateTool.setStrokeColor(e.target.value)
        stateTool.setFillColor(e.target.value)
    }

    const onClickBrushHandler=()=>{
        stateTool.setToll(new Brush(stateCanvas.canvas))
    }

    const onClickRectHandler=()=>{
        stateTool.setToll(new Rect(stateCanvas.canvas))
    }

    return (
        <div className='toolbar'>
            <Button className='toolbar_btn'><BrushIcon className='toolbar_icon' onClick={onClickBrushHandler}/></Button>
            <Button className='toolbar_btn'><RectangleIcon className='toolbar_icon' onClick={onClickRectHandler}/></Button>
            <Button className='toolbar_btn'><RadioButtonUncheckedIcon className='toolbar_icon'/></Button>
            <Button className='toolbar_btn'><ClearIcon className='toolbar_icon'/></Button>
            <Button className='toolbar_btn'><RemoveIcon className='toolbar_icon'/></Button>
            <input onChange={e=>changeColor(e)} type="color" style={{marginLeft:10}}/>
        </div>
    );
};

export default ToolBar;