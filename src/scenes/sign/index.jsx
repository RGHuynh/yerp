import React from 'react';

export default class Sign extends React.Component {
  render() {
    return (
      <div class="background">
        <main class="main">
          <section class="account">
            <div class="account--logo">
              <img src="http://placehold.it/75" />
            </div>
            <section class="account--form">
              <h1 class="account--mainHeading">Sign up for a free YERP account</h1>
              <input class="account--emailInput" type="text" placeholder="Your Email"/>
              <input class="account--passwordInput" type="text" placeholder="Your password"/>
              <button class="account--createAccountBtn" type="button">Create Account</button>
              <h2 class="account--secondHeading">Already hav an account? Sign in</h2>
            </section>
          </section>
        </main>
      </div>
    );
  }
}