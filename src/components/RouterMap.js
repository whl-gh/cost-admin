import React, { Fragment } from "react";
import { Route } from "react-router-dom";
//导入路由
import routerConfig from "../router";

let RouterMap = (props)=>{
    return (
        <Fragment>
            {
                routerConfig.map((module, i) => {
                  if(!module.module){
                    return (
                      <Route path={module.path} component={module.component} key={`route-${i}`} />
                    );
                  }
                  return module.routes.map((route, j)=>{
                    if(route.exact){
                      return <Route path={route.path} exact component={route.component} key={`route-${i}-${j}`} />
                    }else{
                      return <Route path={route.path} component={route.component} key={`route-${i}-${j}`} />
                    }
                  });
                })
              }
        </Fragment>
    );   
};

export default RouterMap;