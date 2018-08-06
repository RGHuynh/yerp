import React from 'react';

export default class ButtonLogin extends React.Component {
  // var putAccount = Route to backend database
  render() {
    return (
      <div>
        <button class={this.props.class} type={this.props.type} value={this.props.value}>{this.props.label}</button>
      </div>
      
    );
  }
}