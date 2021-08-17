
import React from 'react'

import 'font-awesome/css/font-awesome.min.css';
import './accomplishments.css'

const Accomplishments = () => {


  return (
    <div className="accomplishments">
      <ul className="menu">


          <div className="acc-item">
               <a href= "/about#academic" rel="noreferrer">
                  <li className="list-item"> <i className="fa fa-graduation-cap"></i> </li>
              </a>
              <div className="content">
                <p className="content-title">School</p>
                <p className="content-desc"> Description about school </p>
              </div>
          </div>


          <div className="acc-item">
               <a href= "http://localhost:3000/about#conferences" rel="noreferrer">
                  <li className="list-item"> <i className="fa fa-signal"></i> </li>
              </a>

              <div className="content">
                <p className="content-title">Conferences </p>
                <p className="content-desc"> Description about school </p>
              </div>
          </div>



          <div className="acc-item">
               <a href= "/projects" rel="noreferrer">
                  <li className="list-item"> <i className="fa fa-book"></i> </li>
              </a>

              <div className="content">
                <p className="content-title">Projects </p>
                <p className="content-desc"> Description about school </p>
              </div>
          </div>


          <div className="acc-item">
               <a href= "/projects" rel="noreferrer">
                  <li className="list-item"> <i className="fas fa-project-diagram"></i> </li>
              </a>

              <div className="content">
                <p className="content-title">Projects </p>
                <p className="content-desc"> Description about school </p>
              </div>
          </div>





      </ul>
    </div>
  )
}

export default Accomplishments
