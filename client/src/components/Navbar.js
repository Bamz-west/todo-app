import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark mb-4">
                <Link to="/" className="navbar-brand">Todo</Link>
            </nav>
            <div className="navbar fixed-bottom">
                <Link to="/new" className="btn btn-outline-primary w-100 p-3">
                    Add new Todo
                </Link>
            </div>
        </div>
    );
};


export default Navbar;