import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeContainer from "./containers/HomeContainer"
import LogInForm from "./components/user/LogInForm"
import SignUpForm from "./components/user/SignUpForm"
function App() {
  return (
    <div className="App">
      < Router>
      <Route exact path="/" >
          <HomeContainer/>
        </Route>
        < Switch>
          <Route path="/login">
            <LogInForm/>
          </Route>
          <Route path="/signup">
            <SignUpForm/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
