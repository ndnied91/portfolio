import React from 'react'
import './academic.scss'

import {conferences} from './data'

import {classes} from './data'
import Fader from '../Fader.js'

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



  const renderSections = (year)=> {
  return(
    <div className="lang_test">
        <h5 className="title"> CS Classes Taken in '{year} </h5>
        <div> {renderClasses(year)} </div>
    </div>
  )


}

  const printAll = ()=>{
    return(
      <div>
        <Fader>
              <div>
                {renderSections(20)}
                {renderSections(19)}
                {renderSections(18)}
                {renderSections(17)}
              </div>
           </Fader>
      </div>
    )
  }

  return(
    <div>
    <p id="conf_section"> </p>
          <div className="conferences" >
            <h3 className="about_title"> Academic Accomplishments </h3>
                  <h3 className="about_sub_title"> Conferences</h3>
                  <div className='con'> {renderConferences()} </div>
                  <p id="academic_section"></p>
          </div>


          <div className='academics' id="academics">

            <div id="aca_desc">
                  <p> Computer Science / Data Science Jan 21 </p>
                  <p> Deans Honors List Recipient (Sept 2016- 2021) </p>
            </div>

                  {printAll()}

          </div>
     </div>
  )
}


export default Academic
