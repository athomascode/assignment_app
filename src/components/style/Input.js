import React from "react";

function Input({ input, meta, placeholder, label }) {
  const showError = meta.error && meta.touched;
  return(
    <>
      <label>{label}</label>
      <input {...input} placeholder={placeholder || "Default"}></input>
      {showError &&
        <span style={{color: "red"}}>{meta.error}</span>
      }
    </>
  )
}

export default Input;