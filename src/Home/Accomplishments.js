
import React from 'react'

import 'font-awesome/css/font-awesome.min.css';
import './accomplishments.css'

const Accomplishments = () => {


  return (
    <div className="accomplishments">
      <ul className="acc_menu">


          <div className="each-acc-item">
               <a className="acc-lnk" href= "/about#academic_section" rel="noreferrer">
                  <li className="acc-list-item"> <i className="fa fa-graduation-cap"></i> </li>
                  <div className="acc-content">
                    <p className="acc-content-title">School</p>
                    <p className="content-desc">
                      Computer Sci /Data Sci <br/> 3.8 GPA </p>

                  </div>
              </a>

          </div>


          <div className="each-acc-item">
               <a className="acc-lnk" href= "/about#conf_section" rel="noreferrer">
                  <li className="acc-list-item"> <i className="fa fa-signal"></i> </li>

                  <div className="acc-content">
                    <p className="acc-content-title">Conferences </p>
                    <p className="content-desc"> Multiple national <br/> conferences attendee </p>
                  </div>

              </a>


          </div>




          <div className="each-acc-item">
               <a className="acc-lnk" href= "/projects" rel="noreferrer">
                  <li className="acc-list-item"> <i className="fas fa-project-diagram"></i> </li>
                  <div className="acc-content">
                    <p className="acc-content-title">Projects </p>
                    <p className="content-desc"> Versitle use of <br/> of multiple languages </p>
                </div>
              </a>
          </div>








          <div className="each-acc-item">
               <a className="acc-lnk" href= "/projects" rel="noreferrer">
                  <li className="acc-list-item"> <i className="fas fa-briefcase"></i> </li>
                  <div className="acc-content">
                    <p className="acc-content-title">Work Experience </p>
                    <p className="content-desc"> Experince in a fast paced <br/>tech environment </p>
                </div>
              </a>
          </div>







      </ul>
    </div>
  )
}

export default Accomplishments
