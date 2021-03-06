import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class EditTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title || '',
            isDone: props.isDone || false
        };

        this.onChangeItem = this.onChangeItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeItem(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, isDone } = this.state;
        const { id, history } = this.props;

        // We're editing
        if(id) {
            Axios.put(`/api/todo/${id}`, {
                title: title,
                is_done: isDone === 'true'
            }).then(() => {
                this.props.updateState(title, isDone === 'true');
                this.props.toggleEdit();
            }).catch(() => {
                console.log('Promise error');
            });
        } else {
            // Not editing
            Axios.post('/api/todo', {
                title: title,
                is_done: isDone === 'true'
            }).then(() => {
                history.push('/');
            }).catch(() => {
                console.log('Promise error');
            });
        }
    }

    render() {
        const { title, isDone } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title of todo</label>
                    <input name="title" type="text" id="title" className="form-control" value={title} onChange={this.onChangeItem} />
                </div>
                <div className="form-group">
                    <label htmlFor="isDone">Todo completed?</label>
                    <select name="isDone" id="is-done" className="form-control" value={isDone} onChange={this.onChangeItem}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-danger" onClick={this.props.toggleEdit}>Cancel</button>
                    </div>
                </div>
            </form>
        );
    }
}


export default withRouter(EditTodo);