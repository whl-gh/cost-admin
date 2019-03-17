import React from "react";
import { Upload, Icon, Button } from "antd";

let NoticeDetails = ({item})=>{
    let fileList= [
        {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: require('../img/mv.jpg'),//https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png
            thumbUrl: require('../img/mv.jpg'),
        }
    ];
    let config = {
        disabled: true,
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        defaultFileList: [...fileList],
        className: 'upload-list-inline',
        onRemove: ()=>false
    }
    return (
        <div className="noticeDetails-wrap">
            <table className="noticeDetails-tbl">
                <caption>
                    <span>发布人：二栓子</span>        
                    <span>发布日期：2019-03-15</span>
                    <span>点击量： 5052</span>
                </caption>
                <tbody>
                    <tr>
                        <td className="noticeDetails-title">标题</td>
                        <td colSpan="5">{item.title}</td>
                    </tr>
                    <tr>
                        <td className="noticeDetails-title">所属环节</td>
                        <td>{item.model}</td>
                        <td className="noticeDetails-title">流程名称</td>
                        <td colSpan="3">{item.flow}</td>
                    </tr>
                    <tr>
                        <td className="noticeDetails-title">需求负责人</td>
                        <td>{item.requirement}</td>
                        <td className="noticeDetails-title">技术负责人</td>
                        <td>{item.developer}</td>
                        <td className="noticeDetails-title">测试负责人</td>
                        <td>{item.tester}</td>
                    </tr>
                    <tr>
                        <td className="noticeDetails-title">主要事项</td>
                        <td colSpan="5">关于[{item.title}]所暴露出来的问题，我要高度重视起来，通知相关部门和负责人进行限时整改，并在接下来的工作中作为一个常态狠抓落实，对顶风违纪者绝不姑息！</td>
                    </tr>
                    <tr>
                        <td className="noticeDetails-title">附件</td>
                        <td colSpan="5">
                            <Upload {...config}></Upload>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NoticeDetails;