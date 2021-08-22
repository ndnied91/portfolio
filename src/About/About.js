import React from 'react'

import './about.scss'


import Academic from './Academic/Academic.js'

class Info extends React.Component{

  render(){

    return(
  <div id="about">

      <section className="about" >

          <h3 className="about_title"> ABOUT ME</h3>

          <p className="about_content">
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


                     <h3 className="about_title"> TECHNOLOGY USED </h3>

                     <div className="lang_section">
                         <p className="lang_title"> LANGUAGE</p>

                         <div className="langs">
                            <p>Java</p>
                            <p>JavaScript</p>
                            <p>Python</p>
                            <p>PHP</p>
                     </div>


                     </div>


                     <div className="lang_section">
                         <p className="lang_title"> MARK UP </p>
                         <div className="langs">
                              <p>HTML</p>
                              <p>JSX</p>
                              <p>CSS</p>
                              <p>SCSS</p>
                         </div>
                      </div>


                      <div className="lang_section">
                         <p className="lang_title"> LIBRARIES </p>
                         <div className="langs">
                              <p>ReactJS</p>
                              <p>NodeJS</p>
                              <p>Redux</p>
                              <p>TensorFlow</p>
                         </div>
                    </div>


                    <div className="lang_section">
                       <p className="lang_title"> DATABASES </p>
                       <div className="langs">
                            <p>MongoDB</p>
                            <p>MySQL</p>
                        </div>
                    </div>


                    <div className="lang_section">
                       <p className="lang_title"> CSS FRAMEWORKS  </p>
                       <div className="langs">
                            <p>Bootstrap</p>
                            <p>MaterialIO</p>
                            <p>SemanticUI</p>
                       </div>
                    </div>


                    <div className="lang_section">
                       <p className="lang_title"> MISC.  </p>
                       <div className="langs">
                            <p>Git</p>
                            <p>CLI</p>
                            <p>Bash</p>
                       </div>
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
