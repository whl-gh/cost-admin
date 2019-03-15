import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class MenuList extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline">
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span>那v1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="user" />
                    <span>那v1</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="user" />
                    <span>那v1</span>
                </Menu.Item>
            </Menu>
        );
    }
}

export default MenuList;