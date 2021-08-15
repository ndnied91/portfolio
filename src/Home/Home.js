import React from 'react'

import { NavLink } from "react-router-dom";


import ButtonStyles from './ButtonStyles'

import Accomplishments from './Accomplishments'

import './home.css'


const Home=()=>{
    const objStyle={ height: '50%' }



  return(
    <div className="container">


          <section className="intro" >
           <h1 className="section__title section__title--intro">
               Hi, I am <strong>Daniel <br/>Niedzwiedzki</strong>
           </h1>
           <p className="section__subtitle section__subtitle--intro">full-stack dev</p>
             <img src="https://avatars.githubusercontent.com/u/25380503?v=4" height="300px" alt="pic of me" className="intro__img"/>
       </section>





        <section>



        <div style={objStyle}>

               <h3> Who am I </h3>

                 Hello, my name is Daniel Niedzwiedzki and I am a Full Stack Developer based out of NJ / NY.
                  I am highly experienced in designing & developing full stack custom websites whilst cultivating an unmatched user experience.
                 <br/>

                 I recently graduated with a Bachellors of Science degreee in Computer Science / Data Science from
                   <span> <a href="https://www.kean.edu" target="_blank" rel="noreferrer"> Kean University  </a> </span>
                 <br/>

                 I have passion for creating intuitive, dynamic user friendly websites.
           </div>


        <h4> Accomplishments:</h4>
            <p>

            <Accomplishments/>


             </p>

         </section>





          <ButtonStyles>
                   <section className="direction">
              <NavLink key={1} to={'/about'}  exact className="current"> About my journey </NavLink>
              <NavLink key={2} to={'/project'}  exact className="current">View my work </NavLink>
                </section>
         </ButtonStyles>
     </div>
  )
}

export default Home








// <section className="introo">
//
//     <img src="https://avatars.githubusercontent.com/u/25380503?v=4" height="300px" alt="pic of me"/>
//
//     <div style={objStyle}>
//
//         <h3> Who am I </h3>
//
//           Hello, my name is Daniel Niedzwiedzki and I am a Full Stack Developer based out of NJ / NY.
//            I am highly experienced in designing & developing full stack custom websites whilst cultivating an unmatched user experience.
//           <br/>
//           <br/>
//           I recently graduated with a Bachellors of Science degreee in Computer Science / Data Science from
//             <span> <a href="https://www.kean.edu" target="_blank"> Kean University  </a> </span>
//           <br/>
//           <br/>
//           I have passion for creating intuitive, dynamic user friendly websites.
//     </div>
//
// </section>
