import React, { Component } from 'react';

import storage from '../model/storage';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: '',
            ids: 0,
            todoLists: [],
        };
    }
    //  H获取缓存数据
    componentDidMount = () => {
        console.log(storage.get('todoLists'))
      this.setState({
          todoLists: storage.get('todoLists') || [],
      })
    }

    // 添加TODO
    addItem = () => {
        const { todoLists, value, ids } = this.state;
        if (!value) {
            return;
        }
        this.setState({
            todoLists: [...todoLists, {id: ids + 1,  value, status: true}],
            ids: ids + 1,
        }, () => {
            this.setState({ value: "" });
            storage.set('todoLists', this.state.todoLists);
        })
    }
    // 删除
    deleteItem = (id) => {
        const { todoLists } = this.state;
        this.setState({
            todoLists: [...todoLists.filter(i => i.id !== id)],
        }, () => {
            storage.set('todoLists', this.state.todoLists);
        });
    }
    // 变更
    onChecked = (id, e) => {
        const { todoLists } = this.state;
        const getLists = todoLists;
        getLists.map((i) => {
            if (i.id === id) {
                i.status = !e.target.checked;
            };
        })
        this.setState({
            todolists: [...getLists],
        }, () => {
            storage.set('todoLists', this.state.todoLists);
        })
    }
    // 输入框输入事件监听
    onChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <h2>Todolist</h2>
                <hr/>
                <div>
                    <input
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                    <button onClick={this.addItem}>add</button>
                </div>
                <h3>待办事项</h3>
                <ul>
                    {
                        this.state.todoLists.map((i) => {
                            if (i.status) {
                                return (
                                    <li key={i.id}>
                                        <input type="checkbox" onChange={this.onChecked.bind(this, i.id)} />
                                        <span>{i.value}</span>
                                        <button onClick={this.deleteItem.bind(this, i.id)}>删除</button>
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
                <h3>已完成事项</h3>
                <ul>
                    {
                        this.state.todoLists.map((i) => {
                            if (!i.status) {
                                return (
                                    <li key={i.id}>
                                        <input type="checkbox" checked={!i.status} onChange={this.onChecked.bind(this, i.id)} />
                                        <span>{i.value}</span>
                                        <button onClick={this.deleteItem.bind(this, i.id)}>删除</button>
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Home;
