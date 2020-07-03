import React from 'react';
import { Switch, Route } from 'react-router-dom'


import Homepage from './pages/home/home.component'
import './App.css';

const AboutUs = () => (
  <div>About US</div>
) 

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/about-us' component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
