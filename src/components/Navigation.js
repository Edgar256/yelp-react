import React from 'react';

function Navigation(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand navbar-white" href="#">Write A Review</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Events<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Talk</a>
                    </li>
                    <span className="empty-menu-space"></span>
                    <form class="form-inline">
                    <button class="btn btn-login my-2 my-sm-0" type="submit">Login</button>
                    <button class="btn btn-signup my-2 my-sm-0" type="submit">SignUp</button>
                    </form>
                </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navigation;
