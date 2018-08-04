import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Logo from './components/Logo/Logo';
import ButtonLogin from './components/ButtonLogin/ButtonLogin';
import InputBox from './components/InputBox/InputBox';
import './index.css';
import YerpImage from '../../Yerp.svg';

export default class Reset extends React.Component {
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
              <h1 class="account--mainHeading">Sign in to your free YERP account</h1>
              <form>
                <InputBox class="account--input" type="text" placeholder="Your Email" value={this.state.email} onChange={this.handleChange}></InputBox>
                <ButtonLogin class="account--Btn" type="button" label="Search"></ButtonLogin>
              </form>
            </section>
          </section>
        </main>
      </div>
    );
  };
};