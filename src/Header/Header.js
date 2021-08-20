import React from 'react'

import { NavLink } from "react-router-dom";


import NavUnlisted from './NavUnlisted'
import './header.scss'

import './hamburgers.css'

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

    document.body.style.overflow = 'hidden'
    // document.querySelector("#root > div > div.header > ul > div.hamburger.hamburger--spin > div").style.opacity = '0'

    this.state.menu ? this.setState({menu: false}) :  this.setState({menu: true})
}

const closeNav = ()=>{
  document.body.style.overflow = 'visible'
  this.setState({menu: false})

  // document.querySelector("#root > div > div.header > ul > div.hamburger.hamburger--spin > div").style.opacity = '1'

}


    return(

      <div className="header">
            <NavUnlisted>
              <a href="/" className="logo">DN</a>
                <div className={`hamburger hamburger--spin ${this.state.menu ? 'is-active' : ' '}`}    type="button">
                  <div className="hamburger-box" onClick={changeMenu}>
                    <div className="hamburger-inner" > </div>
                  </div>
            </div>

                <div className="overlay" id={this.state.menu ? "myNav" : ''} >
                  <div  className="closebtn" onClick={closeNav} >

                      <span className="hamburger-box hamburger--collapse is-active" onClick={changeMenu}>
                        <span style={{'color': 'white'}} className="hamburger-inner" onClick={changeMenu}> </span>
                      </span>

                  </div>
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
