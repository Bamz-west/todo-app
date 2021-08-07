import React, { Component } from 'react';
import Axios from 'axios';
import TodoCard from './TodoCard';


class SingleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            todo: {}
        }
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        Axios.get(`/api/todo/${id}`).then((res) => {
            this.setState({
                loading: false,
                todo: res.data
            })
        });
    }


    render() {
        if(this.state.loading){
            return(
                <h3>Loading...</h3>
            );
        }
        return(
            <div>
                <TodoCard title={this.state.todo.title} isDone={this.state.todo.is_done} id={this.state.todo.id} />
            </div>
        );
    }
}


export default SingleItem;