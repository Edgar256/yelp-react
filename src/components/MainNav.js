import React from 'react';

function MainNav(props){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light yelp-red-bg">
                <div className="container">
                <a class="navbar-brand logo-link" href="#">
                    <img src="https://s3-media0.fl.yelpcdn.com/assets/public/default.yelp_design_web.yji-e02121e4b885bf89645bdc9ea402a681.png" alt="yelp logo"></img>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mt-2 mt-lg-0">                    
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Find: Tacos, cheap dinner, Max's" />
                        <input class="form-control mr-sm-2" type="search" placeholder="Near: San Francisco, CA" />
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon_svg"><path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1 0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0 1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5 5S16 7.467 16 10.5 13.533 16 10.5 16z"></path></svg>
                        </span>
                        <button class="btn btn-outline-success my-2 my-sm-0 btnLogin" type="submit">Login</button>
                        <button class="btn btn-outline-success my-2 my-sm-0 btnSignup" type="submit">SignUp</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default MainNav;