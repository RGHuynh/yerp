import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ButtonLogin from './components/ButtonLogin/ButtonLogin';
import InputBox from './components/InputBox/InputBox';
import Logo from './components/Logo/Logo';
import SubmitButton from './components/SubmitButton/SubmitButton';

describe('When testing with ReactDOM', () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  })
})

describe("When setting up function component return a value", () => {
  it("Logo", () => {
    expect(Logo).not.toBeNull();
  });

  it("SubmitButton", () => {
    expect(SubmitButton).not.toBeNull();
  });

  it("InputBox", () => {
    expect(InputBox).not.toBeNull();
  });

  it("ButtonLogin", () => {
    expect(ButtonLogin).not.toBeNull();
  });
});
