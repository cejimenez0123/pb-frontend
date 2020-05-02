import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { connect} from "react-redux"
import HomeContainer from "./containers/HomeContainer"
import LogInForm from "./components/user/LogInForm"
import SignUpForm from "./components/user/SignUpForm"
import PrivateRoute from "./functions/PrivateRoute"
import ProfileContainer from './containers/ProfileContainer';
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
        <PrivateRoute to="/users/:user_id"><ProfileContainer/></PrivateRoute>
      </Router>
    </div>
  );
}
function mapDispatchToProps(dispatch){

}
function mapStateToProps(state){
  
}
export default App;
