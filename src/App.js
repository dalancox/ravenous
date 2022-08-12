import React from 'react';
import { useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './util/Yelp';

import './App.css';


const App = () => {
  
  const [businesses, setBusinesses] = useState({})

  const searchYelp = (term, location, sortBy) => {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      setBusinesses({ businesses: businesses });
    })
  }
  
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
    );
  }

export default App;
