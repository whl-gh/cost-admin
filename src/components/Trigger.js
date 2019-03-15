import React from "react";
import { Icon } from "antd";

let Trigger = ({ collapsed, toggle })=>(
    <Icon 
        className="trigger" 
        type={collapsed ? 'menu-unfold' : 'menu-fold'} 
        onClick={toggle} />
);

export default Trigger;