import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeerDetails from './BeerDetails';
import RandomBeer from './RandomBeer';
import Navbar from './NavBar';

function App() {
  return (
    <div className="container mt-2">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/beers/random" component={RandomBeer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
