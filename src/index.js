import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Form from './Form'
import Design from "./Design";
import Form2 from './Form2'
import Demo from './Demo'
import commonObj from "./common";
import Base64Image from "./Image";
import Test from "./Test";
import Test2 from "./Test2";

console.log('this is index: ', this);

class App extends React.Component {
    constructor() {
        super();
    }
    get=()=>{
        var type = commonObj.getUrlParam("type");
        var element = <Form />;
        if('1' == type){
            element = <Design />;
        }else if('0' == type){
            element = <Form />;
        }else if('2' == type){
            element = <Form2 />;
        }else if('3' == type){
            element = <Demo />;
        }else if('4' == type){
            element = <Base64Image />;
        }else{
            element = <Test2 />;
        }
        return element;
    }
    render() {
        console.log('this is index render: ', this);
        return (
            <>
                {this.get()}
            </>
        )
    }
}

reactDom.render(<App />, document.getElementById('root'));

// reactDom.render(
//     (
//     <BrowserRouter basename={"/ys/web/page/form/build"}>
//         <Routes>
//             <Route index element={<Form />}></Route>
//             <Route path={"/form"} element={<Form />}/>
//             <Route path={"/design"} element={<Design />}/>
//         </Routes>
//     </BrowserRouter>
// ), document.getElementById('root'));