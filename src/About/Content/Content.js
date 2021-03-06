import React from 'react'

import Fader from '../Fader.js'
import './content.scss'

import {udemy} from '../Academic/data.js'


import Academic from '../Academic/Academic.js'

const Content = () =>{


const renderCourses = () =>{
  return(
    <div>
      {udemy.map( (course)=>{
        return <div >  <a className="extra_name" href={course.url }  rel="noreferrer"  target="_blank"> {course.name} </a> </div>
      })}
     </div>
  )
}






  return(
<div>
      <Fader>
              <h3 className="about_title"> ToolKit </h3>
                  <div className="lang_section">
                      <p className="lang_title"> language</p>

                      <div className="langs">
                        <div className="each_tool">
                        <i className="hov fab fa-java fa-3x"></i>
                        <p className="langs_desc"> Java </p>
                        </div>

                        <div className="each_tool">
                        <i className="fab fa-js fa-3x"></i>
                        <p className="langs_desc"> JavaScript </p>
                        </div>

                        <div className="each_tool">
                        <i className="fab fa-python fa-3x"></i>
                        <p className="langs_desc"> Python</p>
                        </div>

                        <div className="each_tool">
                        <i className="fab fa-php fa-3x"></i>
                        <p className="langs_desc"> PHP</p>
                       </div>
                      </div>
          </div>
    </Fader>


    <Fader>
        <div className="lang_section">
            <p className="lang_title"> mark up </p>

                <div className="langs">
                     <div className="each_tool">
                      <i className="fab fa-html5 fa-3x"></i>
                      <p className="langs_desc"> HTML </p>
                     </div>

                     <div className="each_tool">
                      <i className="fab iconify" data-icon="file-icons:jsx"></i>
                      <p className="langs_desc ll"> JSX </p>
                     </div>

                     <div className="each_tool">
                      <i class="fab fa-css3-alt fa-3x"></i>
                      <p className="langs_desc"> CSS </p>
                     </div>

                     <div className="each_tool">
                      <i class="fab fa-sass fa-3x"></i>
                      <p className="langs_desc"> SCSS </p>
                     </div>
            </div>
         </div>
     </Fader>




      <Fader>
           <div className="lang_section">
              <p className="lang_title"> libraries </p>

              <div className="langs">
                   <div className="each_tool">
                    <i class="fab fa-react fa-3x"></i>
                    <p className="langs_desc"> ReactJS </p>
                   </div>

                   <div className="each_tool">
                     <i class="fab iconify" data-icon="simple-icons:redux"></i>
                     <p className="langs_desc ll"> Redux </p>
                   </div>


                   <div className="each_tool">
                    <i class="fab fa-node-js fa-3x"></i>
                    <p className="langs_desc"> NodeJS </p>
                   </div>


                   <div className="each_tool">
                     <span>
                        <img className= 'tf' src='https://icons-for-free.com/iconfiles/png/512/tensorflow-1324440242699707768.png'/>
                     </span>
                     <p className="langs_desc"> TensorFlow </p>
                  </div>
              </div>
          </div>
    </Fader>



<Fader>
      <div className="lang_section">
        <p className="lang_title"> DATABASES </p>

        <div className="langs">
             <div className="each_tool">
               <span class="fab iconify" data-icon="cib:mongodb"></span>
               <p className="langs_desc"> MongoDB </p>
             </div>


             <div className="each_tool">
              <span class="fab iconify" data-icon="cib:mysql"></span>
              <p className="langs_desc"> MySQL </p>
             </div>
         </div>
      </div>
</Fader>



<Fader>
      <div className="lang_section">
        <p className="lang_title">CSS FRAMEWORKS</p>

        <div className="langs">
             <div className="each_tool">
                <i class="fab fa-bootstrap fa-3x"></i>
                <p className="langs_desc">Bootstrap</p>
              </div>

             <div className="each_tool">
                <span class="fab sm iconify" data-icon="logos:semantic-ui"></span>
                <p className="langs_desc">SemanticUI</p>
             </div>
        </div>
      </div>
</Fader>

<Fader>
      <div className="lang_section">
        <p className="lang_title"> MISC. </p>
          <div className="langs">
               <div className="each_tool">
                  <i className="fab fa-git fa-3x"></i>
                  <p className="langs_desc"> Git </p>
                </div>

               <div className="each_tool">
                  <i className="fab fa-github fa-3x"></i>
                  <p className="langs_desc"> GitHub </p>
                </div>

                <div className="each_tool">
                  <span className="fab iconify" data-icon="grommet-icons:cli"></span>
                   <p className="langs_desc ll"> CLI </p>
                </div>

               <div className="each_tool">
                  <span className="fab iconify" data-icon="simple-icons:gnubash"></span>
                  <p className="langs_desc ll"> Bash </p>
              </div>

          </div>
      </div>
    </Fader>

        <div className="extra-stuff ">
    <Fader>
           <h3 className="about_title"> Additional Courses Taken </h3>

           <div className="extra_content">

           {renderCourses()}

           </div>




    </Fader>
        </div>

              <div>
                <Academic/>
             </div>








  </div>
  )
}







export default Content
