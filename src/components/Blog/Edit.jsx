import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useParams } from "react-router-dom";
import Input from "../style/Input";
import { useBlog } from "./hooks/useBlog";


export default function Edit() {
  const { blogDetails, hasError, actions } = useBlog();
  const { id } = useParams();

  const onSubmit = async(values) => {
    actions.editBlog(id, values); 
  }

  const deleteDetails = () => {
    actions.deleteBlogDetails(id);
  }

  useEffect(()=> {
    actions.getBlogDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 

  return (
    <>
      
      { Object.keys(blogDetails).length !== 0 
        ?
          <>
            <h2>Edit form for PUT API</h2>
            <Form
              initialValues={blogDetails}
              onSubmit={onSubmit}
              render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field
                      name="id"
                      component={Input}
                      type="text"
                      placeholder="ID"
                      label="ID"
                      />
                  </div>
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
                    <button type="button" onClick={deleteDetails}>Delete</button>
                  </div>
                </form>
              )}>
            </Form>
          </>
        : 
          hasError && <h2>Not found !</h2>
      }
      
    </>
  )
}