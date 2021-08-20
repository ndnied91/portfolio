import React from 'react'

import './contact.scss'

class Contact extends React.Component{
  render(){
    return(
       <div>
        <h3 className="contact_title">Contact Info</h3>

        <section className="contact_info">


          <p className="contact">
            Email: <i className="mail large icon "></i>  <a href= "mailto: danielniedzwiedzki.1@gmail.com" target="_blank" rel="noreferrer"> danielniedzwiedzki.1@gmail.com</a>
          </p>

          <p className="contact">
            LinkedIn: <i className="linkedin large icon "></i>  <a href="https://www.linkedin.com/in/daniel-niedzwiedzki/" target="_blank" rel="noreferrer"> Daniel Niedzwiedzki</a>
          </p>

          <p className="contact">
            GitHub: <i className="github large icon "></i>  <a href="https://github.com/ndnied91" target="_blank" rel="noreferrer">  ndnied91</a>
          </p>

          <p className="contact">
            Facebook: <i className="facebook large icon "></i>  <a href="https://www.facebook.com/daniel.niedzwiedzki.31" target="_blank" rel="noreferrer"> Daniel Niedzwiedzki</a>
          </p>


          <p className="contact">
            Instagram: <i className="instagram large icon "></i>  <a href="https://www.instagram.com/danny_n00/" target="_blank" rel="noreferrer"> @danny_n00</a>
          </p>





        </section>

     </div>
   )
  }
}
export default Contact
