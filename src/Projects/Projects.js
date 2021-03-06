import React from 'react'

import './projects.scss'

import UniModal from './UniModal/UniModal.js'


class Projects extends React.Component{
  constructor(){
    super()
        this.state={ showPortfolio: false , showPokemon: false , showCovid: false, showTravelBlog: false , showimageClass: false
        ,showDormRental: false , twitterTracker: false}
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

      case 'twitterTracker':
       this.state.twitterTracker ? this.setState({twitterTracker: false}) :  this.setState({twitterTracker: true})
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
                       <div className="desc effect1">  <span>  ReactJS | NodeJS | SCSS </span>  </div>
                      <div className="desc-learn effect1" onClick={()=>changeState('portfolio')}>
                          {this.state.showPortfolio ?
                              <UniModal link={'/'}
                                  desc={'A portfolio project used to present all my work / background and info. Build with ReactJS, styled with SASS/CSS and hosted on Heroku'} title={'Portfolio'}
                                  lang={['JavaScript' , 'ReactJS' , 'HTML' ,'CSS' , 'SCSS'] }
                                  github={'/https://github.com/ndnied91/portfolio'}
                                          /> : <div className="learn_btn"> LEARN MORE </div>  }
                      </div>
                      <img className="pic effect"  src="assets/portfolio.png" alt='portfolio' />
                </div>





              <div className='project-desc'>
                    <a className="desc-title effect1" href='/'  target="_blank" rel="noreferrer">Who's That Pokemon?</a>
                      <div className="desc effect1">  <span>  JavaScript | ReactJS | NodeJS </span>  </div>
                    <div className="desc-learn effect1" onClick={()=>changeState('pokemon')}>
                        {this.state.showPokemon ?
                          <UniModal link={'https://github.com/ndnied91/whos_that_pokemon'}
                              desc={"The classic 'Who's That Pokemon!?' game from the Pokemon TV show. This project was created with ReactJS as the Front-End User Interface. An async call is made to a Pokemon API which retrieves all the necessary data for a specific Pokemon and renders the info for the user to guess."} title={'Pokemon Guessing Game'}
                              lang={['JavaScript' , 'ReactJS' , 'HTML' ,'CSS' , 'SASS'] }
                              github={'https://github.com/ndnied91/whos_that_pokemon'}
                                      />
                           : <div className="learn_btn" > LEARN MORE </div>  }
                    </div>
                    <img className="pic poke effect" src="assets/poke1.png"  alt='pokemon'/>
             </div>



                <div className='project-desc'>
                      <a className="desc-title effect1" href='http://covidvisualizer.herokuapp.com'  target="_blank" rel="noreferrer">Covid-19 Visualizer</a>

                      <div className="desc effect1">  <span>  ReactJS | Redux | MongoDB </span>  </div>
                      <div className="desc-learn effect1" onClick={()=>changeState('covid')}>
                          {this.state.showCovid ?
                            <UniModal link={'http://covidvisualizer.herokuapp.com'}
                                desc={'A visualizer depicting Covid-19 cases in relation to income/population on a state/county level. NodeJS used for all server-side rendering which includes a custom API and a scheduler that retrieves all Covid-19 data autonomously.'} title={'Covid-19 Visualizer'}
                                lang={['JavaScript' , 'ReactJS' , 'HTML' ,'CSS' , 'SASS' , 'Redux' , 'NodeJS' , 'MongoDB'] }
                                github={'https://github.com/ndnied91/covidTracker'}
                                        />
                                : <div className="learn_btn"> LEARN MORE </div>  }
                      </div>
                      <img className="pic tracker effect" src="../assets/covid1.png" alt='covid' />
               </div>



               <div className='project-desc'>
                     <a className="desc-title effect1" href='https://traveling-the-world.herokuapp.com'  target="_blank" rel="noreferrer">Travel Blog</a>
                         <div className="desc effect1">  <span>  JavaScript | ReactJS | PassportJS </span>  </div>

                     <div className="desc-learn effect1" onClick={()=>changeState('travelBlog')}>
                         {this.state.showTravelBlog ?

                           <UniModal link={'https://traveling-the-world.herokuapp.com'}
                               desc={'A travel blog developed with ReactJS and NodeJS. All travel blogs are saved within a MongoDB database. Redux used for all state management. PassportJS used for all user authentication.'} title={'Travel Blog'}
                               lang={['JavaScript' , 'ReactJS' , 'HTML' ,'CSS' , 'SASS' , 'Redux' , 'NodeJS' , 'MongoDB'] }
                               github={'https://github.com/ndnied91/blog_project'}
                                       />
                            : <div className="learn_btn"> LEARN MORE </div>  }
                     </div>


                     <img className="pic tweak effect" src="assets/travel.png" alt='travel' />
              </div>

              <div className='project-desc'>
                    <a className="desc-title effect1" href='http://yoda.kean.edu/~niedzwid/CPS4721/hw3.1.html'  target="_blank" rel="noreferrer">Image Classifer</a>

                      <div className="desc effect1">  <span>  Python | MySQL | TensorFlow </span>  </div>
                    <div className="desc-learn effect1" onClick={()=>changeState('imageClass')}>
                        {this.state.showimageClass ?
                          <UniModal link={'http://yoda.kean.edu/~niedzwid/CPS4721/hw3.1.html'}

                              desc={'Image Classifier which utilizes TensorFlow for machine learning. MySQL used for data storage. Unix shell script used as a mediatory between user interface and machine learning algorithm.'}

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
                   <div className="desc effect1">  <span>  JavaScript | NodeJS | MongoDB </span>  </div>
                   <div className="desc-learn effect1" onClick={()=>changeState('dormRental')}>
                       {this.state.showDormRental ?
                         <UniModal
                            link={'https://enigmatic-bastion-91344.herokuapp.com'}
                             desc={'Dorm rental system which enables students to rent out individual dorms for the semester. HTML/CSS used for all front-end and NodeJS used for backend API routing. MongoDB used to store all user and dorm data. An admin dashboard is developed to show currently rented out and available dorms.'} title={'Kean Dorm Rental'}
                             lang={['JavaScript' , 'ReactJS' , 'HTML' ,'CSS' , 'SCSS' , 'Redux' , 'NodeJS' , 'MongoDB'] }
                             github={'https://github.com/ndnied91/Dorm-Project'}
                                     />
                          : <div className="learn_btn"> LEARN MORE </div>  }
                   </div>
                   <img className="pic kean effect" src="assets/kean1.png" alt='kean' />
            </div>

            <div className='project-desc'>
                  <a className="desc-title effect1" href='http://eve.kean.edu/~niedzwid/CPS4721/indexProject.html'  target="_blank" rel="noreferrer">NBA Performace Tracker</a>
                  <div className="desc effect1">  <span>  PHP | MySQL | JavaScript </span>  </div>
                  <div className="desc-learn effect1" onClick={()=>changeState('twitterTracker')}>
                      {this.state.twitterTracker ?
                        <UniModal
                           link={'http://eve.kean.edu/~niedzwid/CPS4721/indexProject.html'}
                            desc={"Research project which utilizes JavaScript to collect Twitter data from a given player, this data is sorted and saved into a MySQL database. PHP is used for data analysis and visualization. A correlation graph is developed to display a player's popularity in regards to their in-game performance."} title={'NBA Performace Tracker'}
                            lang={['PHP' , 'JavaScript' , 'HTML' ,'CSS' , 'NodeJS' , 'MySQL'] }
                            github={'https://github.com/ndnied91/Dorm-Project'}
                                    />
                         : <div className="learn_btn"> LEARN MORE </div>  }
                  </div>
                  <img className="pic kean effect" src="assets/nba.png" alt='kean' />
           </div>



          </div> {/* project grid */}

          </section>

                      <div className="additional_code">
                        <p className="additional_code_item"><a href= 'https://github.com/ndnied91?tab=repositories' target="_blank" rel="noreferrer">  Additional Projects on Github  <i class="fab fa-github"></i> </a> </p>
                        <p className="additional_code_item"><a href= 'https://codepen.io/danny19911/pens/' target="_blank" rel="noreferrer">  Smaller Projects on CodePen  <i class="fab fa-codepen"></i> </a> </p>
                      </div>






      </div>
    )
  }
}
export default Projects
