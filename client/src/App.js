import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Login from './Login';
import Signup from './Signup';
import mainpage from './components/Main';
//import profile from './profile';
import Header from './components/Header/Headers';
const profile = () => <h2>Profile</h2>
const Success =() => <h2>Successsign</h2>

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return(
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={mainpage}/>
            <Route exact path="/Login" component ={Login}/>
            <Route exact path="/profile" component={profile}/>
            <Route exact path="/Signup" component={Signup}/>
            <Route exact path="/success" component={Success}/>
          </div>
        </BrowserRouter>
      </div>
    );
}
};

export default connect(null, actions)(App);
