import React from 'react'



import Academic from './Academic/Academic.js'
import Content from './Content/Content.js'

import Fader from './Fader.js'

import './about.scss'

class Info extends React.Component{

  render(){

// I enjoy creating things from scratch that anyone online can enjoy.
    return(

      <div className='mainSection'>
            <Fader>
                <div className="about_section">
                    <h3 className="about_title"> About Me</h3>

                    <p className="about_content">

                        <div style={{'padding': '10px'}}>
                           My interest with web development began in 2016 after taking a trip to Apple’s headquarters in Cupertino CA and envisioning ideas turning into full scale projects that anyone can enjoy. This one moment sparked an interest that I've been pursuing to this day.
                           <br/>
                        </div>

                           <br/>
                        <div style={{'padding': '10px'}}>
                           Fast forward to 2021 I've graduated with a Computer Science degree with a GPA of 3.8 and have over 4 years of web development experience.
                           <br/>
                           <br/>
                       </div>

                         <div style={{'padding': '10px'}}>
                           I love bringing my ideas to life using code. My passion lies with Full Stack Web Development using stacks such as <span className="boldish">ReactJS </span>,
                            <span className="boldish">NodeJS</span> and <span className="boldish">MongoDB</span>
                        </div>
                           <br/>
                        <div style={{'padding': '10px'}}>
                           These days I've been expanding my knowledge by building new projects using languages such as

                           <span className="boldish">Swift</span> , <span className="boldish">React Native</span> , <span className="boldish">GraphQL </span> and <span className="boldish">TypeScript </span> .
                        </div>


                    </p>
                 </div>
          </Fader>



          <div id="language">
            <Content/>
          </div>

    </div>
    )
  }
}



export default Info
