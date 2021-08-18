import React from 'react'

import './projects.scss'

import ProjectPortFolio from './ProjectInfo/Project-PortFolio'
import Pokemon from './ProjectInfo/PokemonGuessing'
import CovidTracker from './ProjectInfo/CovidTracker'
import TravelBlog from './ProjectInfo/TravelBlog'
import ImageClass from './ProjectInfo/ImageClass'
import DormRental from './ProjectInfo/DormRental'

// import companyLogo from './path/to/logo.jpg'


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
     case 'dormRental':
      this.state.showDormRental ? this.setState({showDormRental: false}) :  this.setState({showDormRental: true})


         default:
            return null
        }


}






console.log(this.state.showCovid)

    return(
      <div>

        <h1> Projects </h1>

          <section>
            <h4>Most Recent Projects</h4>

            <div className="project-grid">


                <div className='project-desc'>
                  <a className="desc-title" href='/'  target="_blank" rel="noreferrer">Portfolio</a>
                      <p className="desc"> Description about portfolio  </p>
                      <div className="desc-learn" onClick={()=>changeState('portfolio')}>
                          {this.state.showPortfolio ? <ProjectPortFolio/> : <div> Learn more.. </div>  }
                      </div>
                      <img className="pic" src="assets/portfolio.png" />
                          {this.state.showPortfolio ? <ProjectPortFolio/> : null}
               </div>



              <div className='project-desc'>
                    <a className="desc-title" href='/'  target="_blank" rel="noreferrer">Pokemon Guessing Game</a>
                    <p className="desc"> Description about covid tracker  </p>
                    <div className="desc-learn" onClick={()=>changeState('pokemon')}>
                        {this.state.showPokemon ? <Pokemon/> : <div> Learn more.. </div>  }
                    </div>
                    <img className="pic poke" src="assets/pokemon.png" />
                        {this.state.showPokemon ? <Pokemon/> : null}
             </div>



                <div className='project-desc'>
                      <a className="desc-title" href='http://covidvisualizer.herokuapp.com'  target="_blank" rel="noreferrer">Covid Tracker</a>
                      <p className="desc"> Description about covid tracker  </p>
                      <div className="desc-learn" onClick={()=>changeState('covid')}>
                          {this.state.showCovid ? <CovidTracker/> : <div> Learn more.. </div>  }
                      </div>
                      <img className="pic" src="assets/covid.png" />
               </div>



               <div className='project-desc'>
                     <a className="desc-title" href='https://traveling-the-world.herokuapp.com'  target="_blank" rel="noreferrer">Travel Blog</a>
                     <p className="desc"> Description about portfolio  </p>
                     <div className="desc-learn" onClick={()=>changeState('travelBlog')}>
                         {this.state.showTravelBlog ? <TravelBlog/> : <div> Learn more.. </div>  }
                     </div>


                     <img className="pic tweak" src="assets/travel.png" />
              </div>

              <div className='project-desc'>
                    <a className="desc-title" href=''  target="_blank" rel="noreferrer">Image Classifer</a>
                    <p className="desc"> Description about portfolio  </p>
                    <div className="desc-learn" onClick={()=>changeState('imageClass')}>
                        {this.state.showimageClass ? <ImageClass/> : <div> Learn more.. </div>  }
                    </div>
                    <img className="pic" src="assets/image.png" />
             </div>


             <div className='project-desc'>
                   <a className="desc-title" href='https://enigmatic-bastion-91344.herokuapp.com'  target="_blank" rel="noreferrer">Kean Dorm Rental</a>
                   <p className="desc"> Description about portfolio  </p>
                   <div className="desc-learn" onClick={()=>changeState('dormRental')}>
                       {this.state.showDormRental ? <DormRental/> : <div> Learn more.. </div>  }
                   </div>
                   <img className="pic kean" src="assets/kean1.png" />
            </div>






            </div>
          </section>


      </div>
    )
  }
}
export default Projects






    // <img className="covid-pic" src="assets/covid.png" />
