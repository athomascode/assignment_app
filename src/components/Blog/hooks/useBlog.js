import { useState } from "react";
import { get, post, put, remove } from "../../../utils/api";

export const useBlog = () => {
  const [blogList, setBlogList] = useState([]);
  const [blogDetails, setBlogDetails] = useState({});
  const [hasError, setHasError] = useState(false);
  

  const getBlogDetails = async(id) => {
    const response = await get(`posts/${id}`);
    response ?  setBlogDetails(response) : setHasError(true);
  }

  const getBlogList = async() => {
    const response = await get("posts");
    setBlogList(response);
  }

  const createBlog = async(values) => {
    const response = await post('posts', values);
    window.alert(JSON.stringify(response));
  }

  const editBlog = async(id, values) => {
    const response = await put(`posts/${id}`, values);
    if (response) {
      setBlogDetails(response);
      window.alert(JSON.stringify(response));
    }
    else {
      setHasError(true);
    }
  }

  const deleteBlogDetails = async(id, values) => {
    remove(`posts/${id}`, values);
    setBlogDetails({ id: '', body: '', title: '', userId: '' });
    window.alert(`Deleted details of ${id}`);
  }

  return {
    blogList,
    blogDetails,
    hasError,
    actions: {
      getBlogDetails,
      getBlogList,
      createBlog,
      editBlog,
      deleteBlogDetails,
    }
  }
};