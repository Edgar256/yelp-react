import React from 'react';

function CategoryFilterButtons(){
    return(
        <div className="category-filter">
            <div className="container">                
                <div><h3>The Best 10 Restaurants in San Francisco, CA</h3></div>
                <div>San Francisco, CA > Restaurants</div>
                <div>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M15 7h-5V5h5a1 1 0 0 1 0 2zm-2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-3 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zM7 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM2 6a1 1 0 0 1 1-1h1v2H3a1 1 0 0 1-1-1zm1 5h5v2H3a1 1 0 0 1 0-2zm13 1a1 1 0 0 1-1 1h-1v-2h1a1 1 0 0 1 1 1z"></path></svg>
                        All Filters
                    </button>
                    <div class="btn-group btn-group-justified">
                        <a href="#" class="btn">$</a>
                        <a href="#" class="btn">$$</a>
                        <a href="#" class="btn">$$$</a>
                        <a href="#" class="btn">$$$$</a>
                    </div>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M9 17A8 8 0 1 1 9 1a8 8 0 0 1 0 16zM9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.223 10.098a.998.998 0 0 1-.588-.192L8 9.256V5a1 1 0 0 1 2 0v3.24l2.812 2.05a1 1 0 0 1-.59 1.808z"></path></svg>
                        Open Now
                    </button>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M15.5 10c-1.93 0-3.5 1.57-3.5 3.5v.5H5.95a2.504 2.504 0 0 1-2.45 2 2.502 2.502 0 0 1-2.45-2H0v-2a5 5 0 0 1 5-5h3v2H7a1.5 1.5 0 0 0 0 3h2l2-4V5h1.94l-1-2H9V2h3.56l3.52 7.04c.653.085 1.28.308 1.838.665l-.537.842A3.502 3.502 0 0 0 15.5 10zM2.092 14c.207.58.757 1 1.408 1 .65 0 1.2-.42 1.408-1H2.092zM15.5 11c1.38 0 2.5 1.122 2.5 2.5S16.88 16 15.5 16 13 14.878 13 13.5s1.12-2.5 2.5-2.5zm0 4c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5z"></path></svg>
                        Delivery
                    </button>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M7.015 16l.98-5.166A.596.596 0 0 0 8 10.74V8.5a.503.503 0 0 0-.502-.503H6V6h2V5c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2v10H7.015zM13 5c0-1.103-.897-2-2-2s-2 .897-2 2v1h4V5zm-6 6H2V9h2V7H2V6h2.5a.5.5 0 0 1 .5.5V9h2v2zm-1.007 4.997H3.006L2.243 12H6.75l-.757 3.997z"></path></svg>
                        Takeout
                    </button>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M13.6 16H4.4C3.077 16 2 14.88 2 13.5v-9C2 3.12 3.077 2 4.4 2H5a1 1 0 0 1 2 0h4a1 1 0 0 1 2 0h.6C14.923 2 16 3.12 16 4.5v9c0 1.38-1.077 2.5-2.4 2.5zM15 7H3v6.5c0 .828.627 1.5 1.4 1.5h9.2c.773 0 1.4-.672 1.4-1.5V7zm-5 3h3v3h-3v-3z"></path></svg>
                        Reservation
                    </button>
                    <button className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M14.67 5.27l-1.585-1.22 1.22-1.586 1.585 1.22-1.22 1.585zM9.5 4.05c3.352.26 6 3.03 6 6.45a6.5 6.5 0 0 1-13 0c0-3.42 2.648-6.19 6-6.45V3H7V1h4v2H9.5v1.05zM4 10.5c0 2.757 2.243 5 5 5s5-2.243 5-5-2.243-5-5-5-5 2.243-5 5zM9.5 7v4.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 1 0z"></path></svg>
                        Waitlist
                    </button>
                </div>
                <div>
                    <div class="form-group filter-select">
                        <select class="form-control col-sm-3">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <select class="form-control col-sm-3">
                            <option>7:00pm</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <select class="form-control col-sm-3">
                            <option>2 people</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <span className="col-sm-2">
                            <button className="btn">Find Table</button>
                        </span>
                        <span className="col-sm-1">
                            Clear
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryFilterButtons;