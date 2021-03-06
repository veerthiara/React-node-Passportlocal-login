import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from './actions';
import {withRouter} from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    console.log(this.state)
    {this.props.submitlogin(this.state.username, this.state.password, this.props.history)}

    event.preventDefault() ;
  }
  render() {
    return (
      <div id="fullBg">
        <div className="login" >
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              class="btn"
            >
            Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {username: state.username,
          password: state.password
  };
}

export default connect(mapStateToProps, actions)(withRouter(Login));
