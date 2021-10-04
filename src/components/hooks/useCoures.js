import { useEffect, useState } from "react";
// here create the custom and useing anywhere
const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return [courses];
};

export default useCourses;
