import React from 'react';
import Logo from './components/Logo/Logo';
import ButtonLogin from './components/ButtonLogin/ButtonLogin';
import InputBox from './components/InputBox/InputBox';

export default class Sign extends React.Component {
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
            <Logo></Logo> 
            <section class="account--form">
              <h1 class="account--mainHeading">Sign up for a free YERP account</h1>
              <form>
                <InputBox type="text" placeholder="Your Email" value={this.state.email} onChange={this.handleChange}></InputBox>
                <InputBox type="text" placeholder="Create a password" value={this.state.password} onChange={this.handleChange}></InputBox>
                <ButtonLogin type="button" label="Create Account"></ButtonLogin>
              </form>
              <h2 class="account--secondHeading">Already hav an account? Sign in</h2>
            </section>
          </section>
        </main>
      </div>
    );
  }
}