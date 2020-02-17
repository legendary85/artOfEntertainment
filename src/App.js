import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from './components/layout/navbar/NavigationBar.js'
import Landing from './components/landing/Landing.js'
import About from './components/about/About.js'
import Packages from './components/packages/Packages.js'
// import ContactForm from './components/contact/ContactForm.js'
// // import DemoContactForm from './components/contact/DemoContactForm.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/layout/footer/Footer.js'


import './App.css';

function App() {
  return (


    <Router>
      <NavigationBar />
      <section>
        <Switch>
          <Route exact path='/' component={Landing}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/packages' component={Packages}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          {/* <Route exact path='/contact' component={ContactForm}></Route> */}
        </Switch>
      </section>
      <Footer style={{ color: 'blue' }} />
    </Router>
  );
}

export default App;
