import React from 'react'

import { NavLink } from "react-router-dom";


import NavUnlisted from './NavUnlisted'
import './header.css'

class Header extends React.Component{

  constructor(props) {
      super(props);
          this.state = { menu: false , closeNav: false}
    }

  render(){

    const links = [
      {name: "Home",path:"/"},
      {name: "About",path:"/about"},
      {name: "Projects",path:"/projects"},
      {name: "Resume",path:"/resume"},
      {name: "Contact",path:"/contact"}

    ];

const changeMenu = () =>{
    this.state.menu ? this.setState({menu: false}) :  this.setState({menu: true})
}

const closeNav = ()=>{
  this.setState({menu: false})
}


    return(

      <div className="header">
            <NavUnlisted>
              <a href="/" className="logo">DN</a>
              <div className="hamburger" onClick={changeMenu}> <i className="fa fa-bars fa-2x"></i>  </div>

                <div className="overlay" id={this.state.menu ? "myNav" : ''} >

                  <div  className="closebtn" onClick={closeNav} > <i  className="fa fa-times" aria-hidden="true" ></i>  </div>
                    <div className="overlay-content header-right">
                       {links.map((link,index) => (
                       <NavLink key={index} to={link.path} onClick={closeNav} exact activeClassName="current">
                             <li>{link.name}</li>
                           </NavLink>
                   ))}
                   </div>
              </div>
            </NavUnlisted>
      </div>

    )
  }
}




export default Header




// overlay , overlay-content and closeBtn need to be removed when larger than 600px
