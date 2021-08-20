
import React from 'react'

import 'font-awesome/css/font-awesome.min.css';
import './accomplishments.css'

const Accomplishments = () => {


  return (
    <div className="accomplishments">
      <ul className="menu">


          <div className="acc-item">
               <a className="lnk" href= "/about#academic" rel="noreferrer">
                  <li className="list-item"> <i className="fa fa-graduation-cap"></i> </li>
                  <div className="content">
                    <p className="content-title">School</p>
                    <p className="content-desc"> Description about school </p>
                  </div>
              </a>

          </div>


          <div className="acc-item">
               <a className="lnk" href= "/about#conferences" rel="noreferrer">
                  <li className="list-item"> <i className="fa fa-signal"></i> </li>

                  <div className="content">
                    <p className="content-title">Conferences </p>
                    <p className="content-desc"> Description about school </p>
                  </div>

              </a>


          </div>



          <div className="acc-item">
               <a className="lnk" href= "/projects" rel="noreferrer">
                  <li className="list-item"> <i className="fa fa-book"></i> </li>
                  <div className="content">
                    <p className="content-title">Projects </p>
                    <p className="content-desc"> Description about school </p>
                  </div>
              </a>


          </div>


          <div className="acc-item">
               <a className="lnk" href= "/projects" rel="noreferrer">
                  <li className="list-item"> <i className="fas fa-project-diagram"></i> </li>
                  <div className="content">
                    <p className="content-title">Projects </p>
                    <p className="content-desc"> Description about school </p>
                  </div>
              </a>


          </div>





      </ul>
    </div>
  )
}

export default Accomplishments
