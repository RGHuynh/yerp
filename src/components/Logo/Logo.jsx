import React from 'react';

export default function Logo(props) {
  return(
    <div className="account--logo">
      <img src={props.yerpImage} />
    </div>
  );
}