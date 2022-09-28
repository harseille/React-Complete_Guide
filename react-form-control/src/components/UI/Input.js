import React from 'react';

const Input = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.subTitle}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
      {props.isInValid && <p className="error-text">{props.errorText}</p>}
    </div>
  );
};

export default Input;
