import React from 'react';
import 'antd/dist/antd.min.css';
import { message, Button, Row, Col, Typography } from 'antd';
import FormRender, { connectForm } from 'form-render';
const { Title } = Typography;
import commonObj from './common';

const id = commonObj.getUrlParam('id') || '1';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            text: ""
        }
    }

    componentDidMount() {
        var that = this;
        var sData = {
            id: id
        }
        commonObj.request('GET', commonObj.API_URL.getInfo, sData, function(res){
            if("000000" == res.rtnCode){
                var data = res.data || {};
                var text = data.schemaText || "{}";
                var name = data.name||"示例表单"

                that.setState({
                    name : name,
                    text: text
                })
            }
        });
    }

    render() {
        var name = this.state.name||"";
        var text = this.state.text||"{}";
        var schema = JSON.parse(text);

        const { form } = this.props;
        const onFinish = (formData, errors) => {
            console.log('formData:', formData, 'errors', errors);
        };

        return (
            <div>
                <Row justify="center">
                    <Title>{name}</Title>
                </Row>
                <FormRender form={form} schema={schema} onFinish={onFinish} />
                <Row justify="center">
                    <Button type="primary" onClick={form.submit}>
                        提交
                    </Button>
                </Row>
            </div>
        );
    }
}
export default connectForm(Form);