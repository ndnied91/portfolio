import React from 'react'

import './about.scss'

import colors from './css-colors.js'

import Academic from './Academic/Academic.js'
import Tools from './Tools/Tools.js'

import Fader from './Fader.js'

class Info extends React.Component{

  render(){


    return(
  <div id="about">
          <Fader>
           <div className="">
              <section className="about" >
                  <h3 className="about_title"> About Me</h3>

                  <p className="about_content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu orci in enim rutrum ultrices sit amet vel dolor.
                    Pellentesque dictum lacinia enim sit amet lobortis. Sed et nulla quis eros gravida pretium.
                    Integer interdum semper urna, sed mollis leo fermentum quis. Nulla in mauris vitae massa volutpat tincidunt.
                    Pellentesque quis ante egestas nulla egestas eleifend sed nec mauris. Maecenas in erat id risus placerat posuere.

                    What I enjoy
                  </p>

               </section>
           </div>
        </Fader>



          <Fader>
              <div className="">
                <h3 className="about_title"> ToolKit </h3>
                  <section id="language">
                    <Tools/>
                 </section>
            </div>
          </Fader>









        <Fader>
          <div className="">
            <section className="extra-stuff">
               <h4 className="about_title"> Extra Stuff</h4>

                  Courses: Udemy Courses

                  Google Grow
            </section>
          </div>
        </Fader>

</div>
    )
  }
}



export default Info
