import React from 'react'
import './academic.scss'

import {conferences} from './data'

import {classes} from './data'

const Academic = ()=>{


const renderClasses = (year)=>{
  return classes.map( (cls , index)=>{
      if(cls.year.includes(year)){
          return <div className="class_item" key={index}> {cls.class} </div>
      }

  })
}

const renderConferences = ()=>{
  return conferences.map( (con , index)=>{
    return(
      <div className="con_info"key={index}>
                <h4>{con.title} </h4>
                  <span className="con_date"> { con.date } </span>
                  <p className="con_desc"> {con.desc}</p>
       </div>
    )
  })
}



  return(
    <div className="academics">

          <div className=''>
              <h3 className="about_title"> ACADEMIC ACCOMPLISHMENTS </h3>

                <p id="aca_desc"> Computer Science / Data Science Jan 21 <br/>Deans Honors List Recipient (Sept 2016- 2021) </p>
                <h4 className="title"> Related Classes Taken</h4>

              <br/>

              <h5 className="title"> Classes taken in 2020 </h5>
              <div className='classes'> {renderClasses('20')} </div>

              <h5 className="title"> Classes taken in 2019 </h5>
              <div className='classes'> {renderClasses('19')} </div>

              <h5 className="title"> Classes taken in 2018 </h5>
              <div className='classes'> {renderClasses('18')} </div>

              <h5 className="title"> Classes taken in 2017 </h5>
              <div className='classes'> {renderClasses('17')} </div>

          </div>



        <div className="conferences" id="conferences">
                <h3 className="about_title"> CONFERENCES</h3>
                <div className='con'> {renderConferences()} </div>


        </div>


     </div>
  )
}


export default Academic
