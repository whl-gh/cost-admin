import React, { Component } from "react";
import { Form, Row, Col, Input, Select, Button, Icon } from "antd";

const Option = Select.Option;

class PreviewNotice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            noticeType: "0",//默认完全是
            title: "",
            model: "0",
            flow: "0",
            requirement: "0",
            developer: "0",
            tester: "0"
        };
    }
    
    handleReset = (e)=>{
        this.setState({
            noticeType: "0",
            title: "",
            model: "0",
            flow: "0",
            requirement: "0",
            developer: "0",
            tester: "0"
        });
    }
    toggle = ()=>{
        this.setState({
            expand: !this.state.expand
        })
    }
    noticeTypeChange = (val)=>{
        this.setState({ noticeType: val });
    }
    titleChange = (e)=>{
        let val = e.target.value.trim();
        this.setState({ title: val });
    }
    modelChange = (val)=>{
        this.setState({ model: val });
    }
    flowChange = (val)=>{
        this.setState({ flow: val });
    }
    testerChange = (val)=>{
        this.setState({ tester: val });
    }
    requirementChange = (val)=>{
        this.setState({ requirement: val });
    }
    developerChange = (val)=>{
        this.setState({ developer: val });
    }
    testerChange = (val)=>{
        this.setState({ tester: val });
    }
    handleSearch = (e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        let noticeTypeFiled = "通知类型";
        let noticeTitleFiled = "通知标题";
        let modelFiled = "所属环节";
        let flowFiled = "流程名称";
        let requirement = "需求负责人";
        let developer = "技术负责人";
        let tester = "测试负责人";
        return (
            <div className="previewNotice">
                {/* 查询条件 */}
                <Form layout="inline" className={this.state.expand ? "pv-form-aq" : "" } onSubmit={this.handleSearch}>
                    <Row gutter={24}>
                        <Col span={8}>
                        <Form.Item label={noticeTypeFiled} className="pv-form-item">
                            {getFieldDecorator(noticeTypeFiled, {
                            rules: [{
                                required: false,
                                message: `请选择${noticeTypeFiled}！`,
                            }],
                            })(<Select
                                showSearch
                                placeholder={`请选择${noticeTypeFiled}`}
                                optionFilterProp="children"
                                onChange={this.noticeTypeChange}
                                filterOption={(input, option) => option.props.children.toUpperCase().indexOf(input.toUpperCase()) >= 0}>
                                <Option value="0">全部</Option>
                                <Option value="1">功能上线通知</Option>
                                <Option value="2">Bug修复通知</Option>
                            </Select>)}
                        </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label={noticeTitleFiled} className="pv-form-item">
                                {getFieldDecorator(noticeTitleFiled, {
                                rules: [{
                                    required: false,
                                    message: `请选择${noticeTitleFiled}！`,
                                }], 
                                })(<Input placeholder="请输入通知标题" onChange={this.titleChange} />)}
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" htmlType="submit">查询</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>重置</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className="text-right">
                            <span className="pv-aq" onClick={this.toggle}>
                                { this.state.expand ? "精简查询 " : "高级查询 " } 
                                <Icon type={this.state.expand ? 'up' : 'down'} />
                            </span>
                        </Col>
                    </Row>
                    <div className="pv-aq-wrap">
                        <Row gutter={24}>
                            <Col span={8} className="text-center">
                                <Form.Item label={modelFiled} className="pv-form-item">
                                    {getFieldDecorator(modelFiled, {
                                    rules: [{
                                        required: false,
                                        message: `请选择${modelFiled}！`,
                                    }], 
                                    })(<Select
                                        showSearch
                                        placeholder={`请选择${modelFiled}`}
                                        optionFilterProp="children"
                                        onChange={this.modelChange}
                                        filterOption={(input, option) => option.props.children.toUpperCase().indexOf(input.toUpperCase()) >= 0}>                                      
                                        <Option value="0">全部</Option>
                                        <Option value="1">工程实施</Option>
                                        <Option value="2">工程验收</Option>
                                        <Option value="3">项目交付</Option>
                                        <Option value="4">项目运营</Option>
                                    </Select>)}
                                </Form.Item>
                            </Col>
                            <Col span={8} className="text-center">
                                <Form.Item label={flowFiled} className="pv-form-item">
                                    {getFieldDecorator(flowFiled, {
                                    rules: [{
                                        required: false,
                                        message: `请选择${flowFiled}！`,
                                    }], 
                                    })(<Select
                                        showSearch
                                        placeholder={`请选择${flowFiled}`}
                                        optionFilterProp="children"
                                        onChange={this.flowChange}
                                        filterOption={(input, option) => option.props.children.toUpperCase().indexOf(input.toUpperCase()) >= 0}>                                   
                                        <Option value="0">全部</Option>
                                        <Option value="1">工程实施</Option>
                                        <Option value="2">工程验收</Option>
                                        <Option value="3">项目交付</Option>
                                        <Option value="4">项目运营</Option>
                                    </Select>)}
                                </Form.Item>
                            </Col>
                            <Col span={8} className="text-center"></Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={8} className="text-center">
                                <Form.Item label={requirement} className="pv-form-item">
                                    {getFieldDecorator(requirement, {
                                    rules: [{
                                        required: false,
                                        message: `请选择${requirement}！`,
                                    }], 
                                    })(<Select
                                        showSearch
                                        placeholder={`请选择${requirement}`}
                                        optionFilterProp="children"
                                        onChange={this.requirementChange}
                                        filterOption={(input, option) => option.props.children.toUpperCase().indexOf(input.toUpperCase()) >= 0}>
                                        <Option value="0">全部</Option>
                                        <Option value="1">翠莲</Option>
                                        <Option value="2">秀莲</Option>
                                        <Option value="3">桂枝</Option>
                                        <Option value="4">桂香</Option>
                                    </Select>)}
                                </Form.Item>
                            </Col>
                            <Col span={8} className="text-center">
                                <Form.Item label={developer} className="pv-form-item">
                                    {getFieldDecorator(developer, {
                                    rules: [{
                                        required: false,
                                        message: `请选择${developer}！`,
                                    }], 
                                    })(<Select
                                        showSearch
                                        placeholder={`请选择${developer}`}
                                        optionFilterProp="children"
                                        onChange={this.developerChange}
                                        filterOption={(input, option) => option.props.children.toUpperCase().indexOf(input.toUpperCase()) >= 0}>
                                        <Option value="0">不限</Option>
                                        <Option value="1">张三</Option>
                                        <Option value="2">李四</Option>
                                        <Option value="3">王五</Option>
                                        <Option value="4">赵六</Option>
                                    </Select>)}
                                </Form.Item>
                            </Col>
                            <Col span={8} className="text-center">
                                <Form.Item label={tester} className="pv-form-item">
                                    {getFieldDecorator(tester, {
                                    rules: [{
                                        required: false,
                                        message: `请选择${tester}！`,
                                    }], 
                                    })(<Select
                                        showSearch
                                        placeholder={`请选择${tester}`}
                                        optionFilterProp="children"
                                        onChange={this.testerChange}
                                        filterOption={(input, option) => option.props.children.toUpperCase().indexOf(input.toUpperCase()) >= 0}>
                                        <Option value="0">不限</Option>
                                        <Option value="1">狗蛋</Option>
                                        <Option value="2">狗剩</Option>
                                        <Option value="3">狗娃</Option>
                                        <Option value="4">狗带</Option>
                                    </Select>)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                </Form>
                {/* 数据展示 */}
            </div>
        );
    }
}

export default Form.create({})(PreviewNotice);