import React from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';


const SingleTodoList = ({ title, isDone, onEdit, id, history }) => {
    return(
        <div className={`card ${isDone ? 'bg-success' : 'bg-danger'} text-white`}>
            <div className="card-body">
                <div className="card-title">
                    <h4>{title}</h4>
                </div>
                <div className="card-text">
                    {isDone ? 'This Task has been completed' : 'This Task is yet to be completed'}
                </div>
                <div className="d-flex justify-content-between align-items-end mt-5">
                    <button className="btn btn-link text-white" onClick={onEdit}>Edit</button>
                    <button className="btn btn-link text-white" onClick={() => {
                        Axios.delete(`/api/todo/${id}`).then(() => {
                            history.push('/');
                        });
                    }}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(SingleTodoList);