import React from 'react';
import SideDiv from './components/sidediv';
import Card from './components/Card';
export const Wrapper = () => {
  return (
    <div id="wrapper" style = {{display :"flex", direction: "row"}}>
        <SideDiv/>
        <Card/>
    </div>
  )
}
