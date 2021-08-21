import React from 'react'

import './contact.scss'

class Contact extends React.Component{
  render(){
    return(
       <div>
        <h3 className="contact_title">Lets connect!</h3>

        <div className="contact_info">



          <div className="contact_item">
              <div className="contact_content">
                   <a className="lnk" href= "mailto: danielniedzwiedzki.1@gmail.com" target="_blank" rel="noreferrer">
                      <li className="list-item_contact"> <i className="mail icon contact_icon"></i> </li>
                  </a>
              </div>

               <div className="info_content">
                  <a className="lnk" href= "mailto: danielniedzwiedzki.1@gmail.com" target="_blank" rel="noreferrer"> <p className="content-title">EMAIL</p> </a>
                  <p className="content">danielniedzwiedzki @gmail.com</p>
              </div>
          </div>





            <div className="contact_item">
                <div className="contact_content">
                     <a className="lnk"href="https://www.linkedin.com/in/daniel-niedzwiedzki/" target="_blank" rel="noreferrer">
                        <li className="list-item_contact"> <i className="linkedin icon contact_icon"></i> </li>
                    </a>
                </div>

                 <div className="info_content">
                    <a className="lnk" href="https://www.linkedin.com/in/daniel-niedzwiedzki/" target="_blank" rel="noreferrer"> <p className="content-title">LINKEDIN</p> </a>
                    <p className="content">Daniel Niedzwiedzki</p>
                </div>
            </div>


          <div className="contact_item">
              <div className="contact_content">
                   <a className="lnk" href= "https://github.com/ndnied91" target="_blank" rel="noreferrer">
                      <li className="list-item_contact"> <i className="github icon contact_icon"></i> </li>
                  </a>
              </div>

               <div className="info_content">
                  <a className="lnk" href= "https://github.com/ndnied91" target="_blank" rel="noreferrer"> <p className="content-title">GITHUB</p> </a>
                  <p className="content">ndnied91</p>
              </div>
          </div>





          <div className="contact_item">
              <div className="contact_content">
                   <a className="lnk" href="https://www.facebook.com/daniel.niedzwiedzki.31" target="_blank" rel="noreferrer">
                      <li className="list-item_contact"> <i className="facebook icon contact_icon"></i> </li>
                  </a>
              </div>

               <div className="info_content">
                  <a className="lnk" href="https://www.facebook.com/daniel.niedzwiedzki.31" target="_blank" rel="noreferrer" > <p className="content-title">FACEBOOK</p> </a>
                  <p className="content">Daniel Niedzwiedzki</p>
              </div>
          </div>



        <div className="contact_item">
            <div className="contact_content">
                 <a className="lnk" href= "https://www.instagram.com/danny_n00/" target="_blank" rel="noreferrer">
                    <li className="list-item_contact"> <i className="instagram icon contact_icon"></i> </li>
                </a>
            </div>

             <div className="info_content">
                <a className="lnk" href= "https://www.instagram.com/danny_n00/" target="_blank" rel="noreferrer"> <p className="content-title">INSTAGRAM</p> </a>
                <p className="content">@danny_n00</p>
            </div>
        </div>


        </div>

     </div>
   )
  }
}
export default Contact





//
//
//
// import React from 'react'
//
// import './contact.scss'
//
// class Contact extends React.Component{
//   render(){
//     return(
//        <div>
//         <h3 className="contact_title">Lets connect!</h3>
//
//         <section className="contact_info">
//
//
//           <p className="contact">
//              <i className="mail large icon contact_icon"></i>
//               <div>Email</div>
//               <a href= "mailto: danielniedzwiedzki.1@gmail.com" target="_blank" rel="noreferrer"> <p>danielniedzwiedzki.1@gmail.com</p> </a>
//           </p>
//
//
//
//           <div className="menu">
//
//             <div className="acc-item1">
//                 <div className="contact">
//                   LinkedIn: <i className="linkedin large icon "></i>  <a href="https://www.linkedin.com/in/daniel-niedzwiedzki/" target="_blank" rel="noreferrer"> Daniel Niedzwiedzki</a>
//                 </div>
//           </div>
//
//
//                 <div className="contact">
//                   GitHub: <i className="github large icon "></i>  <a href="https://github.com/ndnied91" target="_blank" rel="noreferrer"> ndnied91</a>
//                 </div>
//
//
//
//
//           <div className="contact">
//             Facebook: <i className="facebook large icon "></i>  <a href="https://www.facebook.com/daniel.niedzwiedzki.31" target="_blank" rel="noreferrer"> Daniel Niedzwiedzki</a>
//           </div>
//
//
//
//
//
//
//         </section>
//
//      </div>
//    )
//   }
// }
// export default Contact
