import React from 'react';
import { message, Button, Space } from 'antd';

console.log('this is Test2 a: ', this);
const Test2 = () => {

    console.log('this is Test2 b: ', this);

    function handleClick(){
        console.log('this is: ', this);
    }

    let handleClick2 = () =>{
        console.log('this is: ', this);
    }

    return (
        <>
            <Space>
                <Button type="primary" onClick={handleClick}>
                    点击
                </Button>
                <Button type="primary" onClick={handleClick2}>
                    点击2
                </Button>
            </Space>
        </>
    )
}
export default Test2;