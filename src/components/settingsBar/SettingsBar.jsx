import React from 'react';
import '../../style/toolbar.scss'
import stateTool from "../../store/stateTool";

const SettingsBar = () => {
    return (
        <div className='setting-bar'>
            <label style={{margin: '10px'}} htmlFor="line-width">Толщина линии</label>
            <input
                onChange={e => stateTool.setLineWidth(e.target.value)}
                style={{margin: '0 10px'}}
                id='line-width'
                type="number"
                defaultValue={1}
                min={1}
                max={50}/>
        </div>
    );
};

export default SettingsBar;