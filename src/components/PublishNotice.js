import React from "react";
import { Button, TreeSelect, Select, Input, Upload, Icon  } from "antd";
import { treeDataUser, treeDataOrg } from "../source/treeData";

let PublishNotice = (props)=>{
    let uploadConfig = {
        action: '',//上传地址
        listType: 'picture',
        defaultFileList: [],
        className: 'upload-list-inline'
    };
    return (
        <div className="publishNotice">
            <table className="publishNotice-tbl">
                <caption>发布通知</caption>
                <tbody>
                    <tr>
                        <td className="publishNotice-title">发布人</td>
                        <td>
                            <TreeSelect
                                style={{ width: "100%" }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={treeDataUser}
                                placeholder="请选择人员"
                                treeDefaultExpandAll />
                        </td>
                        <td className="publishNotice-title">所属部门</td>
                        <td>
                            <TreeSelect
                                style={{ width: "100%" }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={treeDataOrg}
                                placeholder="请选择部门"
                                treeDefaultExpandAll />
                        </td>
                        <td className="publishNotice-title">通知类型</td>
                        <td>
                            <Select defaultValue="功能上线通知" style={{ width: "100%" }}>
                                <Select.Option value="功能上线通知">功能上线通知</Select.Option>
                                <Select.Option value="Bug修复通知">Bug修复通知</Select.Option>
                            </Select>
                        </td>
                    </tr>
                    <tr>
                        <td className="publishNotice-title">所属模块</td>
                        <td>
                            <Select defaultValue="模块2" style={{ width: "100%" }}>
                                <Select.Option value="模块1">模块1</Select.Option>
                                <Select.Option value="模块2">模块2</Select.Option>
                                <Select.Option value="模块3" disabled>模块3</Select.Option>
                                <Select.Option value="模块4">模块4</Select.Option>
                            </Select>
                        </td>
                        <td className="publishNotice-title">流程名称</td>
                        <td>
                            <Select defaultValue="流程2" style={{ width: "100%" }}>
                                <Select.Option value="流程1">流程1</Select.Option>
                                <Select.Option value="流程2" disabled>流程2</Select.Option>
                                <Select.Option value="流程3">流程3</Select.Option>
                                <Select.Option value="流程4">模块4</Select.Option>
                            </Select>
                        </td>
                        <td className="publishNotice-title">发布日期</td>
                        <td>{new Date().toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="publishNotice-title">需求负责人</td>
                        <td>
                            <TreeSelect
                                style={{ width: "100%" }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={treeDataUser}
                                placeholder="请选择人员"
                                treeDefaultExpandAll />
                        </td>
                        <td className="publishNotice-title">技术负责人</td>
                        <td>
                            <TreeSelect
                                style={{ width: "100%" }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={treeDataUser}
                                placeholder="请选择人员"
                                treeDefaultExpandAll />
                        </td>
                        <td className="publishNotice-title">测试负责人</td>
                        <td>
                            <TreeSelect
                                style={{ width: "100%" }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={treeDataUser}
                                placeholder="请选择人员"
                                treeDefaultExpandAll />
                        </td>
                    </tr>
                    <tr>
                        <td className="publishNotice-title">标题</td>
                        <td colSpan="5">
                            <Input placeholder="请输入标题" />
                        </td>
                    </tr>
                    <tr>
                        <td className="publishNotice-title">描述</td>
                        <td colSpan="5">
                            <Input.TextArea rows={4} placeholder="请填写简要的描述信息" />
                        </td>
                    </tr>
                    <tr>
                        <td className="publishNotice-title">附件</td>
                        <td colSpan="5">
                            <Upload {...uploadConfig}>
                                <Button>
                                    <Icon type="upload" /> Upload
                                </Button>
                            </Upload>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center">
                <Button type="primary">确定</Button>
            </div>
        </div>
    )
};

export default PublishNotice;