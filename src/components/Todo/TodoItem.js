import React, { Component } from 'react';

class TodoItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    }
   
    render() {
        const { data, onChecked, deleteItem } = this.props;
        const isChecked = this.props.isChecked || false;
        console.log(isChecked)
        return (
            <ul>
                {
                    data.map((i) => {
                        if (isChecked ? !i.status : i.status ) {
                            return (
                                <li key={i.id}>
                                    <input type="checkbox" checked={isChecked ? !i.status : null} onChange={onChecked.bind(this, i.id)} />
                                    <span>{i.value}</span>
                                    <button onClick={deleteItem.bind(this, i.id)}>删除</button>
                                </li>
                            );
                        }
                    })
                }
            </ul>
        );
    }
}

export default TodoItem;
