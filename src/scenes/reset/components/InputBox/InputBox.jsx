import React from 'react';

export default class InputBox extends React.Component {
  render() {
    return(
      <input class={this.props.class} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>
    );
  }

}