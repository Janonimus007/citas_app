import React from 'react';

const InputForm = (props) => {
  return (
    <>
    <label>{props.label}</label>
       <input
        placeholder={props.placeholder}
        className={props.className}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  )
}
export default InputForm;