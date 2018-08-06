import React from 'react';

export default function InputBox(props) {
  return(
    <input className={props.class} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
  );
}