import React from 'react'
import './resume.css'

const Resume = () =>(
  <div style={{'height': '1000px'}}>
    <object data="/assets/Daniel_Niedzwiedzki_Resume.pdf" height="100%" width="100%" type="application/pdf">
         <iframe src="/assets/Daniel_Niedzwiedzki_Resume.pdf"  height="1000px" width="100%" type="application/pdf" />
    </object>
  </div>
)


export default Resume


// <iframe className="resume" title='uniqueTitle' src="/assets/Daniel_Niedzwiedzki_Resume.pdf" />
