import React from 'react'

import './about.css'


import Academic from './Academic/Academic.js'

class Info extends React.Component{

  render(){

    return(
  <div id="about">

      <section className="about" >

          <h4> About me:</h4>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu orci in enim rutrum ultrices sit amet vel dolor.
          Pellentesque dictum lacinia enim sit amet lobortis. Sed et nulla quis eros gravida pretium.
          Integer interdum semper urna, sed mollis leo fermentum quis. Nulla in mauris vitae massa volutpat tincidunt. Pellentesque quis ante egestas nulla egestas eleifend sed nec mauris. Maecenas in erat id risus placerat posuere. Pellentesque non quam elit. Pellentesque suscipit turpis eget lacus feugiat, vel auctor nibh pulvinar. Nulla vitae velit et mi lobortis commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vitae gravida mi, non auctor metus. Donec et lacinia est. Quisque vel mauris molestie, malesuada lorem sit amet, molestie risus. Fusce condimentum purus eget mattis consequat. Etiam pharetra finibus turpis.

          What I enjoy
           </p>

        </section>


        <section className="school" id="academic">

            <Academic/>

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

              Courses: Udemy Courses

           <div>

           </div>
        </section>






</div>
    )
  }
}



export default Info
