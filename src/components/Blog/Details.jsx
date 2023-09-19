import React, { useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom";
import { useBlog } from "./hooks/useBlog";

export default function Details() {
  const { blogDetails, hasError, actions } = useBlog();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const paramTitle = searchParams.get("title");

  useEffect(()=> {
    actions.getBlogDetails(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <>
      { Object.keys(blogDetails).length !== 0 
        ?
          <>
            <h2>Blogposts Details API</h2>
            <p>{JSON.stringify(blogDetails)}</p> 
            {paramTitle && <p>{paramTitle}</p>}
          </>
        : 
          hasError && <h2>Not found !</h2>
      }
    </>
  )
}