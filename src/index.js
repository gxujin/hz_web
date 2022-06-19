import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Form from './Form'
import Design from "./Design";
import commonObj from "./common";

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
        }else{
            element = <div>no found</div>;
        }
        return element;
    }
    render() {
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