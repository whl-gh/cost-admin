import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { LocaleProvider, Layout } from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
// 导入路由
import RouterMap from "./RouterMap";
// 导入自定义组件
import Sidebar from "../containers/Sidebar";
import Trigger from "../containers/Trigger";
import Copyright from "./Copyright";
import Path from "./Path";

// 使用语言包
moment.locale('zh-cn');

let { Header, Content, Footer }  = Layout;

let App = (props)=> (
  <Router>
    <LocaleProvider  locale={zhCN}>
      <Layout className="wrap">
        <Sidebar />
        <Layout>
          <Header className="nav">
            <Trigger />
          </Header>
          <Content className="container">
            <Path />
            <RouterMap />
            <Footer>
              <Copyright />
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </LocaleProvider>
  </Router>
);

export default App;
