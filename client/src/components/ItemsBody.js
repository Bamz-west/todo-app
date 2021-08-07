import React, { Component } from 'react';
import _ from 'lodash';

import ListItems from './ListItems';
import ListItem from './ListItem';
import Axios from 'axios';


class ItemsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            todos: {}
        }
    }

    componentDidMount() {
        Axios.get('/api/todo').then(response => {
            this.setState({
                loading: false,
                todos: response.data
            });
        })
    }
    
    renderToDos() {
        return _.map(this.state.todos, todo => {
            return (
                <ListItem title={todo.title} isDone={todo.is_done} id={todo.id} />
            );
        });
    };

    render() {
        if (this.state.loading === true) {
            return(
                <h1>Loading...</h1>
            );
        }
        return(
            <ListItems>
                {this.renderToDos()}
            </ListItems>
        );
    }

}


export default ItemsBody;