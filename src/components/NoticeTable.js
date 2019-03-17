import React, { Component } from "react";
import { Table } from 'antd';

/*
noticeType: "0",//通知类型
title: "",//标题
model: "0",//所属环节
flow: "0",//流程名称
requirement: "0",//需求负责人
developer: "0",//技术负责人
tester: "0"//测试负责人
*/
class NoticeTable extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.columns = [
            {
                title: "通知类型",
                dataIndex: "noticeType",
                key: "noticeType"
            },
            {
                title: "标题",
                dataIndex: "title",
                key: "title",
                render: (text, item) => <span className="href" onClick={()=>{props.viewDetails(text, item)}}>{text}</span>,
            },
            {
                title: "所属环节",
                dataIndex: "model",
                key: "model"
            },
            {
                title: "流程名称",
                dataIndex: "flow",
                key: "flow"
            },
            {
                title: "需求负责人",
                dataIndex: "requirement",
                key: "requirement"
            },
            {
                title: "技术负责人",
                dataIndex: "developer",
                key: "developer"
            },
            {
                title: "测试负责人",
                dataIndex: "tester",
                key: "tester"
            },
            {
                title: "发布时间",
                dataIndex: "pubDate",
                key: "pubDate"
            }
        ];
    }
    
    render(){
        return <Table columns={this.columns} dataSource={this.props.data} size="small" />
    }
}

export default NoticeTable;

