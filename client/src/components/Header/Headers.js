import React, {Component} from 'react';
import {connect} from 'react-redux';
import './header.css';
class Header extends Component{
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
      case false:
        return [
          <li key="1"><a href="/Signup">Signup</a></li>,
          <li key="2"><a href="/Login">login</a></li>
        ];
      default:
        return [
          <li key="1"><a href="/api/logout">Logout</a></li>

        ];

    }
  }
  render(){
    return(

        /*<div className="wrapper">
          <nav class="transparentBG">
            <div class="nav-wrapper">
              <a class="brand-logo center ">RemitBee</a>
              <ul className="right">
                    <li>
                      {this.renderContent()}
                    </li>
              </ul>
            </div>
          </nav >
        </div>*/
        <div class="navbar-fixed">
          <nav class="transparentBG">
            <div class="nav-wrapper">
              <div class="row">
                <div class="col s9">
                  <ul class="right">
                    <li key="1" >{this.renderContent()}</li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

    );
  }
}
function mapStateToProps({auth}){
  return {auth};
}

export default connect(mapStateToProps)(Header);
