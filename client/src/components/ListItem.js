import React from 'react';
import { Link } from 'react-router-dom';


const ListItem = ({ title, isDone, id }) => {
    return(
        <Link to={`/${id}`} className={ `list-group-item ${isDone ? 'bg-success' : 'bg-danger'} text-white mb-3 d-flex justify-content-center align-items-center` }>
            <h5>{title}</h5>
        </Link>
    );
}


export default ListItem;