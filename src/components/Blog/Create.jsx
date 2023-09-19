import React from "react";
import { Form, Field } from "react-final-form";
import Input from "../style/Input";
import { useBlog } from "./hooks/useBlog";

export default function Create() {
  const { actions } = useBlog();

  const onSubmit = async(values) => {
    actions.createBlog(values);  
  }

  return (
    <>
      <h2>Create form for POST API</h2>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit, form, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit}>
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
            <div>
              <button type="submit" disabled={submitting || pristine}>Submit</button>
            </div>
          </form>
        )}>

      </Form>
    </>
  )
}