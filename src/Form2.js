import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.min.css';
import { message, Button, Row, Col, Typography } from 'antd';
import FormRender, { useForm } from 'form-render';

const { Title } = Typography;
import commonObj from './common';

const id = commonObj.getUrlParam('id') || '1';


const Form2 = () => {
    const [schema, setSchema] = useState({});
    const [title, setTitle] = useState('');

    useEffect(() => {
        var sData = {
            id: id
        }
        commonObj.request('GET', commonObj.API_URL.getInfo, sData, function(res){
            if("000000" == res.rtnCode){
                var data = res.data || {};
                var text = data.schemaText || "{}";
                var name = data.name||"示例表单"


                setSchema(JSON.parse(text||'{}'));
                setTitle(name||'');
            }
        });
    }, []);

    const form = useForm();
    const onFinish = (formData, errors) => {
        console.log('formData:', formData, 'errors', errors);
    };
    return (
        <div>
            <Row justify="center">
                <Title>{title}</Title>
            </Row>
            <FormRender form={form} schema={schema} onFinish={onFinish} />
            <Row justify="center">
                <Button type="primary" onClick={form.submit}>
                    提交
                </Button>
            </Row>
        </div>
    );
};

export default Form2;