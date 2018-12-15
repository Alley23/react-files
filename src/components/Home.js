import React, { Component } from 'react';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            msg: '',
        };
    }
    run = () => {
        this.setState({
            msg: "数据已经获取"
        })
    }
    render() {
        return (
            <div>
                <h2>Home</h2>
                <button onClick={this.run}>点击调用run方法</button>
                <div>显示run方法数据：{this.state.msg}</div>
            </div>
        );
    }
}

export default Home;
