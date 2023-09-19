import React from "react";

function Radio({ input, label }) {
  return(
    <>
      <label>
        <input {...input}></input>
        {label}
      </label>
    </>
  )
}

export default Radio;