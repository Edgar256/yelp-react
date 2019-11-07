import React from 'react';

function Navigation(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand navbar-white" href="#">Write A Review</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Events<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Talk</a>
                    </li>
                    <span className="empty-menu-space"></span>
                    <form className="form-inline">
                    <button className="btn btn-login my-2 my-sm-0" type="submit">Login</button>
                    <button className="btn btn-signup my-2 my-sm-0" type="submit">SignUp</button>
                    </form>
                </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navigation;
