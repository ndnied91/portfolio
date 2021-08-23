import React from 'react'



import Academic from './Academic/Academic.js'
import Content from './Content/Content.js'

import Fader from './Fader.js'

import './about.scss'

class Info extends React.Component{

  render(){


    return(

      <div className='mainSection'>
          <Fader>
              <div className="about_section">
                  <h3 className="about_title"> About Me</h3>

                  <p className="about_content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu orci in enim rutrum ultrices sit amet vel dolor.
                    Pellentesque dictum lacinia enim sit amet lobortis. Sed et nulla quis eros gravida pretium.
                    Integer interdum semper urna, sed mollis leo fermentum quis. Nulla in mauris vitae massa volutpat tincidunt.
                    Pellentesque quis ante egestas nulla egestas eleifend sed nec mauris. Maecenas in erat id risus placerat posuere.
                    What I enjoy
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
