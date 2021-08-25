import React from 'react'

import './projects.scss'

import UniModal from './UniModal/UniModal.js'


class Projects extends React.Component{
  constructor(){
    super()
        this.state={ showPortfolio: false , showPokemon: false , showCovid: false, showTravelBlog: false , showimageClass: false
        ,showDormRental: false}
  }
  render(){

const changeState = (project)=>{
switch(project){
  case 'portfolio':
   this.state.showPortfolio ? this.setState({showPortfolio: false}) :  this.setState({showPortfolio: true})
   break;

 case 'pokemon':
   this.state.showPokemon ? this.setState({showPokemon: false}) :  this.setState({showPokemon: true})
   break;

    case 'covid':
    this.state.showCovid ? this.setState({showCovid: false}) :  this.setState({showCovid: true})
    break;

    case 'travelBlog':
    this.state.showTravelBlog ? this.setState({showTravelBlog: false}) :  this.setState({showTravelBlog: true})
    break;

    case 'imageClass':
     this.state.showimageClass ? this.setState({showimageClass: false}) :  this.setState({showimageClass: true})
     break;

     case 'dormRental':
      this.state.showDormRental ? this.setState({showDormRental: false}) :  this.setState({showDormRental: true})
      break;

         default:
            return null
        }


}


    return(
      <div>

        <h1 className='title'> Projects </h1>

          <section>


            <div className="project-grid">

                <div className='project-desc'>
                  <a className="desc-title effect1" href='/'  target="_blank" rel="noreferrer">Portfolio</a>
                      <p className="desc effect1"> Description about portfolio  </p>
                      <div className="desc-learn effect1" onClick={()=>changeState('portfolio')}>
                          {this.state.showPortfolio ?
                              <UniModal link={'/'}
                                  desc={' Description about portfolio '} title={'Portfolio'}
                                  lang={['JavaScript' , 'ReactJS' , 'HTML' ,'CSS' , 'SCSS'] }
                                  github={'/https://github.com/ndnied91/portfolio'}
                                          /> : <div className="learn_btn"> LEARN MORE </div>  }
                      </div>
                      <img className="pic effect"  src="assets/portfolio.png" alt='portfolio' />
                </div>





              <div className='project-desc'>
                    <a className="desc-title poke effect1" href='/'  target="_blank" rel="noreferrer">Pokemon Guessing Game</a>
                    <p className="desc effect1"> Description about pokemon game  </p>
                    <div className="desc-learn effect1" onClick={()=>changeState('pokemon')}>
                        {this.state.showPokemon ?
                          <UniModal link={'/'}
                              desc={' Description about pokemon '} title={'Pokemon Guessing Game'}
                              lang={['JavaScript' , 'ReactJS' , 'HTML' ,'CSS' , 'SASS'] }
                              github={'https://github.com/ndnied91/whos_that_pokemon'}
                                      />
                           : <div className="learn_btn" > LEARN MORE </div>  }
                    </div>
                    <img className="pic poke effect" src="assets/poke1.png"  alt='pokemon'/>
             </div>



                <div className='project-desc'>
                      <a className="desc-title effect1" href='http://covidvisualizer.herokuapp.com'  target="_blank" rel="noreferrer">Covid-19 Visualizer</a>
                      <p className="desc effect1"> Description about covid tracker  </p>
                      <div className="desc-learn effect1" onClick={()=>changeState('covid')}>
                          {this.state.showCovid ?
                            <UniModal link={'http://covidvisualizer.herokuapp.com'}
                                desc={'Description about covid tracker'} title={'Covid-19 Visualizer'}
                                lang={['JavaScript' , 'ReactJS' , 'HTML' ,'CSS' , 'SASS' , 'Redux' , 'NodeJS' , 'MongoDB'] }
                                github={'https://github.com/ndnied91/covidTracker'}
                                        />
                                : <div className="learn_btn"> LEARN MORE </div>  }
                      </div>
                      <img className="pic tracker effect" src="../assets/covid1.png" alt='covid' />
               </div>



               <div className='project-desc'>
                     <a className="desc-title effect1" href='https://traveling-the-world.herokuapp.com'  target="_blank" rel="noreferrer">Travel Blog</a>
                     <p className="desc effect1"> Description about Travel Blog  </p>
                     <div className="desc-learn effect1" onClick={()=>changeState('travelBlog')}>
                         {this.state.showTravelBlog ?

                           <UniModal link={'https://traveling-the-world.herokuapp.com'}
                               desc={'Description about Travel Blog'} title={'Travel Blog'}
                               lang={['JavaScript' , 'ReactJS' , 'HTML' ,'CSS' , 'SASS' , 'Redux' , 'NodeJS' , 'MongoDB'] }
                               github={'https://github.com/ndnied91/blog_project'}
                                       />
                            : <div className="learn_btn"> LEARN MORE </div>  }
                     </div>


                     <img className="pic tweak effect" src="assets/travel.png" alt='travel' />
              </div>

              <div className='project-desc'>
                    <a className="desc-title effect1" href='http://yoda.kean.edu/~niedzwid/CPS4721/hw3.1.html'  target="_blank" rel="noreferrer">Image Classifer</a>
                    <p className="desc"> Description about Image Classifier  </p>
                    <div className="desc-learn effect1" onClick={()=>changeState('imageClass')}>
                        {this.state.showimageClass ?
                          <UniModal link={'http://yoda.kean.edu/~niedzwid/CPS4721/hw3.1.html'}

                              desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus semper id, volutpat ante dui, eu sollicitudin magna lacinia eget. Sed fermentum dolor pellentesque eget.'}

                              title={'Image Classifer'}
                              lang={['JavaScript' ,'Python' , 'PHP' , 'Bash' , 'CSS' , 'HTML' ] }
                              github={'https://github.com/ndnied91/DataMining-Image-Classifier'}
                                      />
                                       : <div className="learn_btn"> LEARN MORE </div>  }
                    </div>
                    <img className="pic image effect1" src="assets/image.png" alt='image_class' />
             </div>


             <div className='project-desc'>
                   <a className="desc-title effect1" href='https://enigmatic-bastion-91344.herokuapp.com'  target="_blank" rel="noreferrer">Kean Dorm Rental</a>
                   <p className="desc effect1"> Description about portfolio  </p>
                   <div className="desc-learn effect1" onClick={()=>changeState('dormRental')}>
                       {this.state.showDormRental ?
                         <UniModal link={'https://enigmatic-bastion-91344.herokuapp.com'}
                             desc={'Description about Dorm Rental System'} title={'Kean Dorm Rental'}
                             lang={['JavaScript' , 'ReactJS' , 'HTML' ,'CSS' , 'SCSS' , 'Redux' , 'NodeJS' , 'MongoDB'] }
                             github={'https://github.com/ndnied91/Dorm-Project'}
                                     />
                          : <div className="learn_btn"> LEARN MORE </div>  }
                   </div>
                   <img className="pic kean effect" src="assets/kean1.png" alt='kean' />
            </div>



            </div>
          </section>


      </div>
    )
  }
}
export default Projects
