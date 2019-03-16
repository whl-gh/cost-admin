import React from "react";
import { Breadcrumb, Icon } from "antd";
import router from "../router";

let Item = Breadcrumb.Item;

let getPath = ()=>{
    let curr_pathName = window.location.pathname;
    for(let n=0;n<router.length;n++){
        if(router[n].module){
            for(let m=0; m<router[n].routes.length;m++){
                if(router[n].routes[m].path === curr_pathName){
                    return [
                        {
                            text: router[n].module,
                            icon: router[n].icon 
                        },
                        {
                            text: router[n].routes[m].text
                        }
                    ];
                }
            }
        }else{
            if(router[n].path === curr_pathName){
                return [{
                    text: router[n].text,
                    icon: router[n].icon
                }];
            }
        }
    }
}

let Path = (props)=>{
    let path_list = getPath();
    return (
    <Breadcrumb className="location">
        {
            path_list.map((path, i)=>{
                if(i>0){
                    return <Item key={i.toString()}>{path.text}</Item>
                }
                return (
                    <Item key={i.toString()}>
                        <Icon type={path.icon} />
                        <span>{path.text}</span>
                    </Item>
                );
            })
        }
    </Breadcrumb>
    );
}

export default Path;