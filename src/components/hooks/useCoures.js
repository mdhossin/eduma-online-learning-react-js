import { useEffect, useState } from "react";
// here create the custom and useing anywhere
const useCourses = () => {
  const [courses, setCourses] = useState([]);
  // here using async await
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("./fakedata.json");
      response = await response.json();
      setCourses(response);
    }

    fetchMyAPI();
  }, []);
  return [courses];
};

export default useCourses;
