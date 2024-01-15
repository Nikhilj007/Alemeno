import { useState } from "react";
import { api } from "./api.js";
import { Link } from "react-router-dom";
const CourseList = () => {
  const [data, setData] = useState(api);
  const handlechange = (e) => {
    const value = e.target.value.toLowerCase();
    const filterdata = api.filter((course) => {
      return (
        course.name.toLowerCase().includes(value) ||
        course.instructor.toLowerCase().includes(value)
      );
    });
    setData(filterdata);
  };

  return (
    <div>
      <div>
        <h1>Course List</h1>
        <p>Click on a course below to see course description</p>
        <input
          onChange={handlechange}
          type="text"
          placeholder="search by course name or instructor name"
        />

        {data.map((course) => {
          return (
            <>
              <Link to={`/course/${course.id}`} className="flex" style={{padding:"3rem"}} key={course.id}>
                <div>
                  <h2>Course Name:- {course.name}</h2>
                  <p>Course Duration:- {course.duration}</p>
                  <p>Course Schedule:- {course.schedule}</p>
                  <p>Course Instructor:- {course.instructor}</p>
                </div>
                <img width={"300px"} src={course.thumbnail} alt="" />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CourseList;
