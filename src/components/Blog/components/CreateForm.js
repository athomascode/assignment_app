import React from "react";
import { Field } from "react-final-form";
import Input from "../../style/Input";

export default function CreateForm() {
  return (
    <>
      <div>
        <Field
          name="userId"
          component={Input}
          type="text"
          placeholder="User ID"
          label="User ID"
          />
      </div>
      <div>
        <Field
          name="title"
          component={Input}
          type="text"
          placeholder="Title"
          label="Title"
          />
      </div>
      <div>
        <Field
          name="body"
          component={Input}
          type="text"
          placeholder="Body"
          label="Body"
          />
      </div>
    </>
  )
}