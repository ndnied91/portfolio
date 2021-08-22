import React from 'react'

import './about.scss'


import Academic from './Academic/Academic.js'
import Tools from './Tools/Tools.js'

class Info extends React.Component{

  render(){

    return(
  <div id="about">


      <section className="about" >

          <h3 className="about_title"> About Me</h3>

          <p className="about_content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu orci in enim rutrum ultrices sit amet vel dolor.
          Pellentesque dictum lacinia enim sit amet lobortis. Sed et nulla quis eros gravida pretium.
          Integer interdum semper urna, sed mollis leo fermentum quis. Nulla in mauris vitae massa volutpat tincidunt. Pellentesque quis ante egestas nulla egestas eleifend sed nec mauris. Maecenas in erat id risus placerat posuere. Pellentesque non quam elit. Pellentesque suscipit turpis eget lacus feugiat, vel auctor nibh pulvinar. Nulla vitae velit et mi lobortis commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vitae gravida mi, non auctor metus. Donec et lacinia est. Quisque vel mauris molestie, malesuada lorem sit amet, molestie risus. Fusce condimentum purus eget mattis consequat. Etiam pharetra finibus turpis.

          What I enjoy
           </p>

        </section>






        <h3 className="about_title"> ToolKit </h3>
            <section className="lang" id="language">
                  <Tools/>
              </section>






        <section className="school">
            <Academic/>
       </section>




        <section className="extra-stuff">
           <h4 className="about_title"> Extra Stuff</h4>

              Courses: Udemy Courses

              Google Grow



           <div>

           </div>
        </section>






</div>
    )
  }
}



export default Info
