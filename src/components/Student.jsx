import { useState } from "react";
import { api } from "./api.js";
import ProgressBar from "./Progress.jsx";

const Student = () => {
  const [enrolledCourse,setEnrolledCourse] = useState(api.map(course => ({ ...course, completed: false })));
  enrolledCourse.filter((course) => {
    return course.students.some((student) => student.name === "Bob Smith");
  });
  const handleMarkAsComplete = (courseId) => {
    setEnrolledCourse(prevCourses => 
      prevCourses.map(course => 
        course.id === courseId ? { ...course, completed: true } : course
      )
    );
  };

  return <div >
    <h1>Student Dashboard of Bob</h1>
    <h2>Enrolled Courses</h2>
    <div className="flex" style={{margin:'0px'}}>{enrolledCourse.map((course) => {
      return (
        <div style={{border:'1px solid white', margin:'2rem', background:'#333', color:'white', padding:'1rem'}} key={course.id}>
          <img height={"180px"} src={course.thumbnail} alt="" />
          <h3>{course.name}</h3>
          <p>{course.instructor}</p>
          <p>{course.schedule}</p>
          <ProgressBar completed={course.completed}  progress={Math.floor(Math.random() * 101)}/>
          <p>{course.location}</p>
          <button onClick={()=>handleMarkAsComplete(course.id)}  style={{background:'green'}}>Mark as complete</button>
        </div>
      );
    })}</div>
  </div>;
};

export default Student;
