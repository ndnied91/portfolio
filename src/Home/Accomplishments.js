
import React from 'react'

import 'font-awesome/css/font-awesome.min.css';
import './accomplishments.css'

const Accomplishments = () => {


  return (
    <div className="accomplishments">
      <ul className="menu">
          <div className="acc-item">
                <li className="list-item"> <span> <a href= "http://localhost:3000/about#academic" rel="noreferrer">  <i class="fa fa-graduation-cap"></i> </a> </span> </li>
              <div className="content">
                <p className="content-title">School</p>
                <p className="content-desc"> Description about school </p>
              </div>

          </div>

          <div className="acc-item">

            <li className="list-item"> <span> <a href= "http://localhost:3000/about#conferences" rel="noreferrer">  <i class="fa fa-signal"></i> </a> </span>   </li>
              <div className="content">
                <p className="content-title">Conferences </p>
                <p className="content-desc"> Description about school </p>
              </div>
          </div>



          <div className="acc-item">
              <li className="list-item"> <span> <a href= "http://localhost:3000/projects" rel="noreferrer">  <i class="fa fa-book"></i> </a> </span> </li>
              <div className="content">
                  <p className="content-title">Projects </p>
                  <p className="content-desc"> Description about school </p>
              </div>
          </div>

          <div className="acc-item">
              <li className="list-item"> <i class="fas fa-project-diagram"></i> </li>
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
