import { useLocation } from "react-router-dom";
import { api } from "./api.js";
import { useState } from "react";

function CourseDescription() {
  const location = useLocation();
  const id= location.pathname.split("/")[2];
  const [expandedWeek, setExpandedWeek] = useState(null);

  const handleWeekToggle = (week) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  return (
    <>
      <div className="course-description-container">
        <img
          className="course-thumbnail"
          src={api[id - 1].thumbnail}
          alt={api[id - 1].name}
        />
        <h2 className="course-instructor">
            Instructor: {api[id - 1].instructor}
        </h2>
        <h2 
        className={`course-status ${api[id-1].enrollmentStatus === "Open" ? "green" : "red" }`}
        >{api[id-1].enrollmentStatus}</h2>
        <h1 className="course-name">{api[id - 1].name}</h1>
        <p className="course-description">{api[id - 1].description}</p>
        <div className="course-details">
          <p>
            <strong>Duration:</strong> {api[id - 1].duration}
          </p>
          <p>
            <strong>Schedule:</strong> {api[id - 1].schedule}
          </p>
          <p>
            <strong>Location:</strong> {api[id - 1].location}
          </p>
        </div>
        <div className="course-section">
          <h2>Prerequisites:</h2>
          <ul className="prerequisites-list">
            {api[id - 1].prerequisites.map((prerequisite, idx) => (
              <li key={idx}>{prerequisite}</li>
            ))}
          </ul>
        </div>
        <div className="course-section">
          <h2>Syllabus:</h2>
          <ol className="syllabus-list">
            {api[id - 1].syllabus.map((syllabus, idx) => (
              <li key={idx}>
                <div
                  className="syllabus-header"
                  onClick={() => handleWeekToggle(syllabus.week)}
                >
                  <strong>Week {syllabus.week}</strong>
                    <span className="syllabus-toggle" style={{marginLeft:'5rem'}}>
                        {expandedWeek === syllabus.week ? "Close" : "Open"}
                    </span>
                </div>
                {expandedWeek === syllabus.week && (
                  <div className="syllabus-content"> {syllabus.topic}</div>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div className="course-section">
          <h2>Students:</h2>
          <ul className="students-list">
            {api[id - 1].students.map((student, idx) => (
              <li key={idx}>{student.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CourseDescription;
