import React from 'react'

import './about.css'

class Info extends React.Component{

  render(){

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

    const renderClasses = ()=>{
      return classes.map( (cls , index)=>{
        return <div key={index}> <strong>{cls.class} </strong> : { cls.year } </div>
      })
    }

    return(
  <div id="about">

      <section className="about" >

          <h4> About me:</h4>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu orci in enim rutrum ultrices sit amet vel dolor.
          Pellentesque dictum lacinia enim sit amet lobortis. Sed et nulla quis eros gravida pretium.
          Integer interdum semper urna, sed mollis leo fermentum quis. Nulla in mauris vitae massa volutpat tincidunt. Pellentesque quis ante egestas nulla egestas eleifend sed nec mauris. Maecenas in erat id risus placerat posuere. Pellentesque non quam elit. Pellentesque suscipit turpis eget lacus feugiat, vel auctor nibh pulvinar. Nulla vitae velit et mi lobortis commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vitae gravida mi, non auctor metus. Donec et lacinia est. Quisque vel mauris molestie, malesuada lorem sit amet, molestie risus. Fusce condimentum purus eget mattis consequat. Etiam pharetra finibus turpis.
           </p>

        </section>


        <section className="school" id="academic">
            <h4> Academic:</h4>
            <div>

            <p> Classes taken: </p>

                {renderClasses()}

              <div className="conferences" id="conferences">
                <p> Conferences: </p>
              </div>


            </div>
       </section>

         <section className="lang" id="language">
             <h4> Languages knows/used:</h4>
             <div>
             Javascript
             HTML / CSS
             Python
             PHP
             </div>

             <div>
              NodeJS
              React / Redux
             </div>

             <div>
              MongoDB
              MySQL
             </div>
        </section>


        <section className="extra-stuff">
           <h4> Extra Stuff:</h4>

           <div>

           </div>
        </section>






</div>
    )
  }
}



export default Info
