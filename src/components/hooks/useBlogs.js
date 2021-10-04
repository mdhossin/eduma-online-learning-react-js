import { useEffect, useState } from "react";
// this is the custom hook anywhere now use this function because this is a custom hook
const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("./fakedatablogs.json");
      response = await response.json();
      setBlogs(response);
    }
    fetchMyAPI();
  }, []);

  return [blogs];
};
export default useBlogs;
