import React from 'react';
import './style/app.scss'
import SettingsBar from "./components/settingsBar/SettingsBar";
import ToolBar from "./components/toolBar/ToolBar";
import Canvas from "./components/canvas/Canvas";

export const App=()=>{
  return(
      <div className='app'>
          <ToolBar/>
          <SettingsBar/>
          <Canvas/>
      </div>
  )
}