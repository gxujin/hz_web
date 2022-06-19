import React from 'react';
import Generator from 'fr-generator';
import 'antd/dist/antd.min.css';
import {connectForm} from "form-render";
import {message} from "antd";
import commonObj from './common';

const id = commonObj.getUrlParam('id') || '1';

class Design extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            text: ""
        }
    }

    componentDidMount() {
        var that = this;
        commonObj.request('GET', commonObj.API_URL.getInfo, {id: id}, function(res){
            if("000000" == res.rtnCode){
                var data = res.data || {};
                var text = data.schemaText || "{}";
                var name = data.name||"示例表单"

                that.setState({
                    name : name,
                    text: text
                })
            }
        })
    }

    saveData = (data) => {
        data = data || {};
        var sData = {
            id: id,
            schemaText: JSON.stringify(data)
        }
        commonObj.request('POST', commonObj.API_URL.saveInfo, sData, function(res){
            if("000000" != res.rtnCode){
                message.error(res.rtnMsg);
            }else{
                message.info("保存成功");
            }
        })
    }

    render() {
        var text = this.state.text||"{}";
        var defaultValue = JSON.parse(text);

        const genRef = React.createRef();
        var that = this;

        return (
            <div style={{ height: '80vh' }}>
                <Generator
                    ref={genRef}
                    defaultValue={defaultValue}
                    extraButtons={[true, true, true, false, {
                        "type": "primary",
                        "text": "保存",
                        "onClick": function (e){
                            const value = genRef.current && genRef.current.getValue();
                            console.log(value);
                            that.saveData(value);
                        }
                    }]}
                />
            </div>
        );
    }
}
export default connectForm(Design);