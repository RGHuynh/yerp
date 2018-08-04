import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Logo from './components/Logo/Logo';
import ButtonLogin from './components/ButtonLogin/ButtonLogin';
import InputBox from './components/InputBox/InputBox';
import './index.css';
import YerpImage from '../../Yerp.svg';

export default class Login extends React.Component{
  state = {
    email: '',
    password: ''
  };

  handleChange = (event) => {
    this.setState({
      email: event.target.email,
      password: event.target.password
    });
  };
  render() {
    return(
      <div class="background">
        <main class="main">
          <section class="account">
            <Logo yerpImage={YerpImage}></Logo> 
            <section class="account--form">
              <h1 class="account--mainHeading">Sign up for a free YERP account</h1>
              <form>
                <InputBox class="account--input" type="text" placeholder="Your Email" value={this.state.email} onChange={this.handleChange}></InputBox>
                <InputBox class="account--input" type="text" placeholder="Password" value={this.state.password} onChange={this.handleChange}></InputBox>
                <ButtonLogin class="account--Btn" type="button" label="Log in"></ButtonLogin>
              </form>
              <h2 class="account--secondHeading">Reset Password</h2>
            </section>
          </section>
        </main>
      </div>
    );
  };
};