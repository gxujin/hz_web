import axios from "axios";

axios.defaults.baseURL = 'http://47.114.77.210:8096';
// axios.defaults.baseURL = 'http://127.0.0.1:9000';
// axios.defaults.baseURL = '/8096';
axios.defaults.timeout = 5000;

const commonObj = {
    API_URL: {
        getInfo: '/api/form/get',
        saveInfo: '/api/form/updateSchemaText',
    },
    getUrlParam: function (key){
        var url = window.location.search;
        const result = new URLSearchParams(url);
        return result.get(key) || "";
    },
    request: function (method, url, data, succFun, errFun){
        method = method || "POST";
        method = method.toUpperCase();

        var config = {
            headers: {
                'Content-Type': 'application/json'
            },
            url: url,
            method: method,
            dataType: "json"
        }

        if('GET' == method){
            config.params = data || {};
        } else {
            config.data = data || {};
        }

        axios(config).then(
            res => {
                var resData = res.data || {};
                if(succFun){
                    succFun(resData);
                }
            }
        ).catch(
            err => {
                if(errFun){
                    errFun(err);
                }else{
                    console.error(err)
                }
            }
        )
    }
}

export default commonObj;