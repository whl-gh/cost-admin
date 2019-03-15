import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { LocaleProvider, Layout } from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
// 导入自定义组件
import Sidebar from "./Sidebar";
import Trigger from "./Trigger";
import Copyright from "../components/Copyright";

// 使用语言包
moment.locale('zh-cn');

let { Header, Content, Footer }  = Layout;

class App extends Component {
  render() {
    return (
    <Router>
      <LocaleProvider  locale={zhCN}>
        <Layout className="wrap">
          <Sidebar />
          <Layout>
            <Header className="nav">
              <Trigger />
            </Header>
            <Content>2</Content>
            <Footer>
              <Copyright />
            </Footer>
          </Layout>
        </Layout>
      </LocaleProvider>
    </Router>
    );
  }
}

export default App;
