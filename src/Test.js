import React from 'react';
import { message, Button, Space } from 'antd';


class Test extends React.Component {
    constructor() {
        super();
        // this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick = () => {
        console.log('this is: ', this);
    }

    handleClick2() {
        console.log('this is: ', this);
    }

    render() {
        return (
            <>
                <Space>
                    <Button type="primary" onClick={this.handleClick}>
                        点击
                    </Button>
                    <Button type="primary" onClick={this.handleClick2}>
                        点击2
                    </Button>
                </Space>
            </>
        );
    }
}
export default Test;