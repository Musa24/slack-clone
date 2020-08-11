import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat';
import { UserContext } from './contexts/UserContext';

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
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
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
