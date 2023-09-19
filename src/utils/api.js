import axios from "axios";

const api = axios.create(
  {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 50000,
    headers: {
      "Content-Type": "application/json",
    }
  }
);

const get = async(url) => {
  try {
    const response = await api.get(url);
    return response.data;
  }
  catch (error) {
    console.error(`Error making GET request to ${url}`, error);
    // throw error;
  }
}

const post = async(url, values) => {
  try {
    const response = await api.post(url, values);
    return response.data;
  }
  catch (error) {
    console.error(`Error making POST request to ${url}`, error);
    throw error;
  }
}

const put = async(url, values) => {
  try {
    const response = await api.put(url, values);
    return response.data;
  }
  catch (error) {
    console.error(`Error making PUT request to ${url}`, error);
    // throw error;
  }
}

const remove = async(url, values) => {
  try {
    const response = await api.delete(url, values);
    return response.data;
  }
  catch (error) {
    console.error(`Error making DELETE request to ${url}`, error);
    // throw error;
  }
}

export { get, post, put, remove };