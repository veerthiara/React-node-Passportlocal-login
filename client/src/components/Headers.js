import React, {Component} from 'react';
import {connect} from 'react-redux';
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
        <nav>
          <div className="nav-wrapper blue">
            <a class="brand-logo center">RemitBee</a>
            <ul className="right">
                  <li>
                    {this.renderContent()}
                  </li>
            </ul>
          </div>
        </nav >
    );
  }
}
function mapStateToProps({auth}){
  return {auth};
}

export default connect(mapStateToProps)(Header);
