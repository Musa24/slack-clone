import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="App-body">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <h2>Welcome</h2>
            </Route>
            <Route exact path="/room/:roomId">
              <Chat />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
