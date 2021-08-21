import React from 'react'
import './academic.cscc'



const Academic = ()=>{

  const classes = [ 
  { class: 'SR/INTERACTIVE WEB VISUALZTN', year: '20FA'},
  { class: 'BIG DATA COMPUTING' ,year: '20FA'},
  { class: 'DATA MINING PRINCIPLES' , year:'20SP'},
  { class: 'IS/AI CHATBOTS' , year:'20SP'},
  { class: 'APPLIED STATISTICS II',year: '20SP'},
  { class: 'DATA VISUALIZATION' , year:'19FA'},
  { class: 'MACHINE LEARNING ALGORITHMS' ,year: '19FA' },
  { class: 'DATABASE MANAGEMENT SYSTEMS' , year:'19SP'},
  { class: 'OBJECT ORIENTED ANALYS & DSN' ,year:'19SP'},
  { class: 'SYSTEM PROGRAMMING' , year: '19SP'},
  { class: 'ALGORITHMIC THINKING' , year:'18FA'} ,
  { class: 'COMPUTER OPERATING SYSTEMS', year: '18FA'},
  { class: 'ANALYSIS OF ALGORITHMS', year:'18FA'} ,
  { class: 'MATRIX & LINEAR ALGEBRA', year:'18FA'},
  { class: 'COMPUTER ASSEMBLY LANG' , year:'18FA'},
  { class: 'PROGRAMMING THE WWW', year:'18SP'},
  { class: 'DISCRETE STRUCTURES', year:'17FA'},
  { class: 'APPLIED STATISTICS I' , year: '17FA'},
  { class: 'DATA STRUCTURES', year:'17FA'},
  { class: 'COMPUTER SYSTEMS', year:'17FA' },
  { class: 'COMPUTER ORGAN & PROGRAMMING', year: '17SP'},
  { class: 'FUNDAMENTALS OF COMPUTER SCIENCE',year: '16/FA'}
]

  const conferences =[
    {title:'Great Minds in Stem' , date: '01/21/21'},
    {title:'Kean Research Days' , date: '01/21/21'},
    {title:'NCur' , date: '01/21/20'},
  ]


const renderClasses = ()=>{
  return classes.map( (cls , index)=>{
    return <div key={index}> <strong>{cls.class} </strong> : { cls.year } </div>
  })
}

const renderConferences = ()=>{
  return conferences.map( (con , index)=>{
    return <div key={index}> <strong>{con.title} </strong> : { con.date } </div>
  })
}



  return(
    <div className="academics">

          <div className="classes">
              <h3> Academic Accomplishments </h3>
              <h4> Classes taken: </h4>
                    {renderClasses()}`
          </div>


        <div className="conferences" id="conferences">
              <h3>   Conferences: </h3>
               {renderConferences()}
        </div>


     </div>
  )
}


export default Academic
