import React from 'react';
import '../../style/toolbar.scss'
import BrushIcon from '@mui/icons-material/Brush';
import {Button} from "@mui/material";
import RectangleIcon from '@mui/icons-material/Rectangle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';

const ToolBar = () => {
    return (
        <div className='toolbar'>
            <Button className='toolbar_btn'><BrushIcon className='toolbar_icon'/></Button>
            <Button className='toolbar_btn'><RectangleIcon className='toolbar_icon'/></Button>
            <Button className='toolbar_btn'><RadioButtonUncheckedIcon className='toolbar_icon'/></Button>
            <Button className='toolbar_btn'><ClearIcon className='toolbar_icon'/></Button>
            <Button className='toolbar_btn'><RemoveIcon className='toolbar_icon'/></Button>
        </div>
    );
};

export default ToolBar;