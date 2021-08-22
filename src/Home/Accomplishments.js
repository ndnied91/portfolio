
import React from 'react'

import 'font-awesome/css/font-awesome.min.css';
import './accomplishments.css'

const Accomplishments = () => {


  return (
    <div className="accomplishments">
      <ul className="menu">


          <div className="each-acc-item">
               <a className="acc-lnk" href= "/about#academics" rel="noreferrer">
                  <li className="acc-list-item"> <i className="fa fa-graduation-cap"></i> </li>
                  <div className="acc-content">
                    <p className="acc-content-title">School</p>
                    <p className="content-desc"> Description about school </p>
                  </div>
              </a>

          </div>


          <div className="each-acc-item">
               <a className="acc-lnk" href= "/about#conferences" rel="noreferrer">
                  <li className="acc-list-item"> <i className="fa fa-signal"></i> </li>

                  <div className="acc-content">
                    <p className="acc-content-title">Conferences </p>
                    <p className="content-desc"> Description about school </p>
                  </div>

              </a>


          </div>



          <div className="each-acc-item">
               <a className="acc-lnk" href= "/projects" rel="noreferrer">
                  <li className="acc-list-item"> <i className="fa fa-book"></i> </li>
                  <div className="acc-content">
                    <p className="acc-content-title">Projects </p>
                    <p className="content-desc"> Description about school </p>
                  </div>
              </a>


          </div>


          <div className="each-acc-item">
               <a className="acc-lnk" href= "/projects" rel="noreferrer">
                  <li className="acc-list-item"> <i className="fas fa-project-diagram"></i> </li>
                  <div className="acc-content">
                    <p className="acc-content-title">Projects </p>
                    <p className="content-desc"> Description about school </p>
                  </div>
              </a>


          </div>





      </ul>
    </div>
  )
}

export default Accomplishments
