import { baseApi } from "./baseApi";

baseApi.interceptors.response.use(
  response => response,
  error => {
    console.log(error.response?.data?.message || error.message)
    const message = 'An error has occurred.';
    return Promise.reject(new Error(message));
  }
);

export default baseApi; 