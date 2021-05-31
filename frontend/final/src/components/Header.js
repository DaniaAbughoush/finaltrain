import React, { Component } from 'react'
// import Navbar from 'react-bootstrap/Navbar'
// import {Link} from "react-router-dom";
export class Header extends Component {
    render() {
        return (
            <div>
             <nav>
     <ul>
<li>
    <a href="/"> home</a>
</li>
<li>
    <a href="/favariot"> Favariot</a>
</li>
     </ul>
                  </nav>  
            </div>
        )
    }
}

export default Header
