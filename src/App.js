import React from 'react';
import { Switch, Route } from 'react-router-dom'


import Homepage from './pages/home/home.component'
import ShopPage from './pages/shop/shop.component'
import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
