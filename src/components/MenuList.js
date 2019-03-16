import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import router from "../router";

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

const Title = ({ type, text})=>(
    <span><Icon type={type} /><span>{text}</span></span>
);

let getOpenKeys = (prefix, curr_pathName, router)=>{
    for(let n=0; n<router.length; n++){
        if(router[n].module){
            for(let m=0;m<router[n].routes.length;m++){
                if(router[n].routes[m].path === curr_pathName){
                    return prefix+(n+1);
                };
            }
        }else if(curr_pathName===router[n].path){
            return prefix+(n+1);
        }
    }
}

let MenuList = ({ theme })=> {
    let prefix = "group-";
    let curr_pathName = window.location.pathname;
    let defaultSelectedKeys = [curr_pathName];
    let defaultOpenKeys = [];
    let openKey = getOpenKeys(prefix, curr_pathName, router);
    if(openKey){
        defaultOpenKeys.push(openKey);
    }
    return (
        <Menu theme={theme} mode="inline" defaultSelectedKeys={defaultSelectedKeys} defaultOpenKeys={defaultOpenKeys}>
            {
                router.map((module, i)=>{
                    if(module.module){
                        return (
                            <SubMenu key={`${prefix}${i+1}`} title={<Title type={module.icon} text={module.module} />}>
                                {
                                    module.routes.map((route, j)=>{
                                        return (
                                            <Item key={route.path}>
                                                <Link to={route.path}>{route.text}</Link>
                                            </Item>
                                        );
                                    })
                                }
                            </SubMenu>
                        );
                    }else{
                        return (
                            <Item key={module.path}>
                                <Link to={module.path}>
                                    <Icon type={module.icon} />
                                    <span>{module.text}</span>
                                </Link>
                            </Item>
                        );
                    }
                })
            }
        </Menu>
    );
}

export default MenuList;