import React from 'react'

// import { Link } from "react-router-dom";

import { Link,NavLink } from "react-router-dom";

import ButtonStyles from './ButtonStyles'

import './home.css'


const Home=()=>{


    const objStyle={
      height: '50%'
    }



  return(
    <div className="container">

        <section className="intro">

            <img src="https://avatars.githubusercontent.com/u/25380503?v=4" height="300px" alt="pic of me"/>

            <div style={objStyle}>

                <h3> Who am I </h3>

                  Hello, my name is Daniel Niedzwiedzki and I am a Full Stack Developer based out of NJ / NY.
                   I am highly experienced in designing & developing full stack custom websites whilst cultivating an unmatched user experience.
                  <br/>
                  <br/>
                  I recently graduated with a Bachellors of Science degreee in Computer Science / Data Science from
                    <span> <a href="https://www.kean.edu" target="_blank"> Kean University  </a> </span>
                  <br/>
                  <br/>
                  I have passion for creating intuitive, dynamic user friendly websites.
            </div>

        </section>




        <section>


        <h4> Accomplishments:</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu orci in enim rutrum ultrices sit amet vel dolor.
        Pellentesque dictum lacinia enim sit amet lobortis. Sed et nulla quis eros gravida pretium.
        Integer interdum semper urna, sed mollis leo fermentum quis. Nulla in mauris vitae massa volutpat tincidunt. Pellentesque quis ante egestas nulla egestas eleifend sed nec mauris. Maecenas in erat id risus placerat posuere. Pellentesque non quam elit. Pellentesque suscipit turpis eget lacus feugiat, vel auctor nibh pulvinar. Nulla vitae velit et mi lobortis commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vitae gravida mi, non auctor metus. Donec et lacinia est. Quisque vel mauris molestie, malesuada lorem sit amet, molestie risus. Fusce condimentum purus eget mattis consequat. Etiam pharetra finibus turpis.


         </p>



         </section>





          <ButtonStyles>
                   <section className="direction">
              <NavLink key={1} to={'/about'}  exact className="current"> About my journey </NavLink>
              <NavLink key={1} to={'/project'}  exact className="current">View my work </NavLink>
                </section>
         </ButtonStyles>
     </div>
  )
}

export default Home


//
// <section className="direction">
//  <NavUnlisted to="/about"> About my journey</NavUnlisted>
//  <NavUnlisted to="/projects"> View my work </NavUnlisted>
// </section>
