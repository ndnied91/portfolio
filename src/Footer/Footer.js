import React from 'react'


import './footer.css'

const Footer = () =>{

  return(

         <div className="footer">

                 <div className="ui horizontal small divided link list">
                     <div className="icons">
                      <a className="ui item" href="https://github.com/ndnied91" target="_blank" rel="noreferrer"> <i className="github large icon"></i>  </a>
                      <a className="item" href="https://www.linkedin.com/in/daniel-niedzwiedzki/" target="_blank" rel="noreferrer"> <i className="linkedin large icon "></i> </a>
                      <a className="item" href="https://www.instagram.com/danny_n00/" target="_blank" rel="noreferrer"> <i className="instagram large icon"></i> </a>
                      <a href= "mailto: danielniedzwiedzki.1@gmail.com" className="item" > <i className="envelope large icon "></i> </a>
                          <div id='name'> Daniel Niedzwiedzki ©2021</div>
                     </div>
                 </div>

     </div>

   )
}

export default Footer
