import React, { Component } from 'react';
import TodoItem from './TodoItem';
import storage from '../../model/storage';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: 0,
            todoLists: [],
        };
    }
    //  H获取缓存数据
    componentDidMount = () => {
        const getData = storage.get('todoLists');
        const ids = [];
        getData.map((i) => {
            ids.push(i.id);
        })
        const maxId = ids.length > 0 ? ids.sort().reverse()[0] : 0;
        this.setState({
            todoLists: storage.get('todoLists') || [],
            ids: maxId,
        })
    }

    // 添加TODO
    addItem = () => {
        const value = this.refs.valueRef.value;
        const { todoLists, ids } = this.state;
        if (!value) {
            return;
        }
        this.setState({
            todoLists: [...todoLists, { id: ids + 1, value, status: true }],
            ids: ids + 1,
        }, () => {
            this.refs.valueRef.value = '';
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

    render() {
        return (
            <div>
                <h2>Todolist</h2>
                <hr />
                <div>
                    <input ref="valueRef" />
                    <button onClick={this.addItem}>add</button>
                </div>
                <h3>待办事项</h3>
                <TodoItem
                    data={this.state.todoLists}
                    onChecked={this.onChecked}
                    deleteItem={this.deleteItem}
                />
                <h3>已完成事项</h3>
                <TodoItem
                    isChecked={true}
                    data={this.state.todoLists}
                    onChecked={this.onChecked}
                    deleteItem={this.deleteItem}
                />
            </div>
        );
    }
}

export default Todolist;
