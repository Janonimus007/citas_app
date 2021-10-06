import React from 'react';

const InputForm = (props) => {
  return (
    <>
    <label>{props.label}</label>
       <input
        placeholder={props.placeholder}
        className={props.className}
        type={props.type}
      />
    </>
  )
}
export default InputForm;