import React from "react";
import { Layout } from "antd";
import Logo from "./Logo";
import MenuList from "./MenuList";

const Sidebar = ({ collapsed, toggle })=>(
    <Layout.Sider className="sider" collapsed={collapsed} onCollapse={toggle} collapsible={true}>
        <Logo collapsed={collapsed}/>
        <MenuList />
    </Layout.Sider>
);

export default Sidebar;