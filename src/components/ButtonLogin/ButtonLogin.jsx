import React from 'react';

export default function ButtonLogin(props) {
  return (
    <div>
      <button className={props.class} type={props.type} value={props.value}>{props.label}</button>
    </div>
  );
}