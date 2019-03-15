import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { LocaleProvider, Layout } from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "antd/dist/antd.css";
// 导入自定义组件
import Logo from "../components/Logo";
import MenuList from "../components/MenuList";

// 使用语言包
moment.locale('zh-cn');

let { Header, Content, Footer, Sider }  = Layout;

class App extends Component {
  render() {
    return (
    <Router>
      <LocaleProvider  locale={zhCN}>
        <Layout className="wrap">
          <Sider>
            <Logo />
            <MenuList />
          </Sider>
          <Layout>
            <Header>1</Header>
            <Content>2</Content>
            <Footer className="text-center">
              {`Const Admin ©${new Date().getFullYear()} Created By WHL`}
            </Footer>
          </Layout>
        </Layout>
      </LocaleProvider>
    </Router>
    );
  }
}

export default App;
