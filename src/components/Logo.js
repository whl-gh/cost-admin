import React from 'react';
import logo from "../img/logo.png";
import logo_small from "../img/logo-small.png";

let Logo = ({ collapsed })=>{
    let path = collapsed ? logo_small : logo;
    return (
        <div className="logo">
            <img src={path} alt="年轻无极限" />
        </div>
    );
}

export default Logo;