import React, { useEffect } from "react"
import { useBlog } from "./hooks/useBlog";

export default function List() {
  const { blogList, actions } = useBlog();

  useEffect(() => {
    actions.getBlogList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <>
      <h2>Blogposts List API</h2>
      {
        blogList.map((item) => 
        <div>
          <p>======START============</p>
          <p>{item.body}</p> 
          <p>{item.title}</p>
        </div>
        ) 
      }
    </>
  )
}