import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let courses = await axios.get("../src/data/courses.js");
      setData(courses);
    };
    fetchData();
  }, []);

  let dataShow = data.map((show) => {
    return (
      <div>
        <div>{show.title} </div>
        <div>{show.category} </div>
        <div>{show.instructors} </div>
        <div>{show.price} </div>
      </div>
    );
  });

  return (
    <>
      <div>{dataShow}</div>
      <ShowCourse />
    </>
  );
};

export default App;
