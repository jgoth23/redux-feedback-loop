import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TodaysFeeling from '../TodaysFeeling/TodaysFeeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Feedback from '../Feedback/Feedback'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          <TodaysFeeling />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
        <Route path="/supported" exact>
          <Supported />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>
        <Route path="/feedback" exact>
          <Feedback />
        </Route>
      </Router>
    </div>
  );
}

export default App;
