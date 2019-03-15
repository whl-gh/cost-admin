import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

const Title = ({ type, text})=>(
    <span><Icon type={type} /><span>{text}</span></span>
);

class MenuList extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline">
                <Item key="1">
                    <Icon type="book" />
                    <span>通讯录</span>
                </Item>
                <SubMenu key="group1" title={<Title type="notification" text="上线通知" />}>
                    <Item>查看通知</Item>
                    <Item>发布通知</Item>
                </SubMenu>
                <SubMenu key="group2" title={<Title type="customer-service" text="客服专区" />}>
                    <Item>联系客服</Item>
                    <Item>查看单据</Item>
                </SubMenu>
                <SubMenu key="group3" title={<Title type="message" text="意见反馈" />}>
                    <Item>我要提Bug</Item>
                    <Item>我有新需求</Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default MenuList;