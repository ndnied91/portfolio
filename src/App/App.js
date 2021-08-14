
import './App.css';
import Header from '../Header/Header.js'


import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../Home/Home.js'
import About from '../About/About.js'
import Experience from '../Experience/Experience.js'
import Contact from '../Contact/Contact.js'
import Resume from '../Resume/Resume.js'
import Footer from '../Footer/Footer.js'

function App() {
  return (
    <div className="container">

      <BrowserRouter>
            <Header/>
                <div >
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact from="/about" component={About} />
                    <Route exact from="/projects" component={Experience} />
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
