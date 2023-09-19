import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import Input from "../style/Input";
import Radio from "../style/Radio";
import { useValidation } from "../../utils/validation";

function FormComponent() {
  const [showError, setShowError] = useState(false);
  const { required } = useValidation();

  const onSubmit = async(values) => {
    if(!values.sauces) {
      setShowError(true);
    } else {
      setShowError(false);
    }
    window.alert(JSON.stringify(values));
  }
  

  return (
    <div>
      <h2>Form Practice</h2>
      <Form
        initialValues={{utensils: 'spoon'}}
        onSubmit={onSubmit}
        render={({handleSubmit, form, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit}>
            <div style={{textAlign: "center"}}>
              <div>                
                <Field 
                  name="firstName"
                  component={Input}
                  type="text"
                  placeholder="First Name"
                  validate={required}
                  label="First Name"
                />
              </div>
              <div>
                <label>Last Name</label>
                <Field
                  name="lastName"
                  component={Input}
                  type="text"
                  // placeholder="Last Name"
                  // validate={required}
                />
              </div>
              <div>
                <label>Employed</label>
                <Field
                  name="isEmployed"
                  component="input"
                  type="checkbox"
                />
              </div>
              <div>
                <label>Favourite color</label>
                <Field
                  name="favColor"
                  component="select"
                  // defaultValue="green"
                >
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="yellow">Yellow</option>
                </Field>
              </div>
              <div>
                <label>Sauces</label>
                <div>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="tomato"
                    /> 
                    Tomato
                  </label>
                </div>
                <div>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="mustard"
                    /> 
                    Mustard
                  </label>
                </div>
                <div>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="bbq"
                    /> 
                    BBQ
                  </label>
                </div>
                {showError && <span style={{color: 'red'}}>Checkbox error</span>}
              </div>
              <div>
                <label>Utensil</label>
                  <Field
                    name="utensils"
                    component={Radio}
                    value="spoon"
                    label="Spoon"
                    type="radio"
                  />
                  <Field
                    name="utensils"
                    component={Radio}
                    value="fork"
                    label="Fork"
                    type="radio"
                  />                  
              </div>
              <div>
                <label>Notes</label>
                <Field
                  name="notes"
                  component="textarea"
                />
              </div>
              <div>
                <button type="submit" disabled={submitting || pristine}>Submit</button>
                <button onClick={form.reset} disabled={submitting || pristine}>Reset</button>
              </div>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      >
      </Form>
    </div>
  )
}

export default FormComponent;