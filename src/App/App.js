
import './App.css';
import Header from '../Header/Header.js'


import { BrowserRouter, Route, Switch } from 'react-router-dom'


// import background from "../assets/kean.png";
//
// `url(${process.env.PUBLIC_URL + '/image.png'})`

import Home from '../Home/Home.js'
import About from '../About/About.js'
import Projects from '../Projects/Projects.js'
import Contact from '../Contact/Contact.js'
import Resume from '../Resume/Resume.js'
import Footer from '../Footer/Footer.js'

function App() {
  return (
    <div className="container">

    <div className="bd" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.png'})` }} > </div>
      <BrowserRouter>
            <Header/>
                <div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact from="/about" component={About} />
                    <Route exact from="/projects" component={Projects} />
                    <Route exact from="/contact" component={Contact} />
                    <Route exact from="/resume" component={Resume} />
                  </Switch>
                </div>
      </BrowserRouter>

  <Footer/>




    </div>
  );
}

export default App;
