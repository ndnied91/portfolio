import React from 'react'

import { NavLink } from "react-router-dom";

import ButtonStyles from './ButtonStyles'

import Accomplishments from './Accomplishments'

import './home.css'


const Home=()=>{
    const objStyle={ height: '50%' ,textAlign: 'center'}



  return(
    <div className="container">

          <section className="intro" >
           <h1 className="section__title section__title--intro">
               Hi, I am <strong>Daniel <br/>Niedzwiedzki</strong>
           </h1>

           <p className="section__subtitle section__subtitle--intro">full-stack dev</p>
             <img src="https://avatars.githubusercontent.com/u/25380503?v=4" height="300px" alt="pic of me" className="intro__img"/>
       </section>





        <section className="about">



        <div style={objStyle} className="about_centered">

               <h3 className="acc_title"> Who am I </h3>

               <p className='about_content'>
                 Hello, my name is Daniel Niedzwiedzki and I am a Full Stack Developer based out of NJ / NY.
                  I am highly experienced in designing & developing full stack custom websites whilst cultivating an unmatched user experience.
                 <br/>
              </p>

                <p className='about_content'>
                    I recently graduated with a Bachellors of Science degreee in Computer Science / Data Science from
                   <span> <a href="https://www.kean.edu" target="_blank" rel="noreferrer"> Kean University  </a> </span>
                </p>

                 <p className='about_content'>
                  I have passion for creating intuitive, dynamic user friendly websites.
                 </p>
           </div>


        <h3 className="acc_title"> Accomplishments</h3>

            <Accomplishments/>

         </section>





          <ButtonStyles>
             <section className="direction">
                <a className="current" href= "/about" rel="noreferrer"> About my Journey</a>
                <a className="current" href= "/projects" rel="noreferrer"> View My Work </a>
          </section>
         </ButtonStyles>
     </div>
  )
}

export default Home


// <a href= "/projects" rel="noreferrer">
