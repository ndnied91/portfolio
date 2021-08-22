import React from 'react'


import './tools.scss'



const Tools = () =>{
  return(
<div>
          <div className="lang_section">
              <p className="lang_title"> language</p>

              <div className="langs">
                <div className="each_tool">
                <i className="fab fa-java fa-3x"></i>
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


        <div className="lang_section">
            <p className="lang_title"> mark up </p>

                <div className="langs">
                 <div className="each_tool">
                  <i className="fab fa-html5 fa-3x"></i>
                  <p className="langs_desc"> HTML </p>
                 </div>

                 <div className="each_tool">
                  <i className="iconify" data-icon="file-icons:jsx"></i>
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


       <div className="lang_section">
          <p className="lang_title"> libraries </p>

          <div className="langs">
               <div className="each_tool">
                <i class="fab fa-react fa-3x"></i>
                <p className="langs_desc"> ReactJS </p>
               </div>

               <div className="each_tool">
                 <i class="iconify" data-icon="simple-icons:redux"></i>
                 <p className="langs_desc ll"> Redux </p>
               </div>


               <div className="each_tool">
                <i class="fab fa-node-js fa-3x"></i>
                <p className="langs_desc"> NodeJS </p>
               </div>


               <div className="each_tool">
                 <span><img className= 'tf' src='https://icons-for-free.com/iconfiles/png/512/tensorflow-1324440242699707768.png'/></span>
                 <p className="langs_desc"> TensorFlow </p>
              </div>
          </div>


      </div>


      <div className="lang_section">
        <p className="lang_title"> DATABASES </p>

        <div className="langs">
             <div className="each_tool">
               <span class="iconify" data-icon="cib:mongodb"></span>
               <p className="langs_desc"> MongoDB </p>
             </div>


             <div className="each_tool">
              <span class="iconify" data-icon="cib:mysql"></span>
              <p className="langs_desc"> MySQL </p>
             </div>

         </div>
      </div>


      <div className="lang_section">
        <p className="lang_title"> CSS FRAMEWORKS  </p>

        <div className="langs">
             <div className="each_tool">
                <i class="fab fa-bootstrap fa-3x"></i>
                <p className="langs_desc"> Bootstrap </p>
              </div>

             <div className="each_tool">
                <span class="sm iconify" data-icon="logos:semantic-ui"></span>
                <p className="langs_desc"> SemanticUI </p>
             </div>
        </div>
      </div>


      <div className="lang_section">
        <p className="lang_title"> MISC. </p>
          <div className="langs">
               <div className="each_tool">
                  <i class="fab fa-git fa-3x"></i>
                  <p className="langs_desc"> Git </p>
                </div>

               <div className="each_tool">
                  <i class="fab fa-github fa-3x"></i>
                  <p className="langs_desc"> GitHub </p>
                </div>

                <div className="each_tool">
                  <span class="iconify" data-icon="grommet-icons:cli"></span>
                   <p className="langs_desc ll"> CLI </p>
                </div>

               <div className="each_tool">
                  <span class="iconify" data-icon="simple-icons:gnubash"></span>
                  <p className="langs_desc ll"> Bash </p>
              </div>

          </div>
      </div>
  </div>
  )
}







export default Tools
