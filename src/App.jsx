import { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import Courses1 from "./components/Courses1";
import Courses2 from "./components/Courses2";
import { getCourses } from "./courses";
import "./style.css";

const CoursesList = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    getCourses().then((c) => setCourses(c));
  }, []);
  if (!courses) {
    return null;
  }

  return (
    <>
      <h2>Choose course</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            <Link to={c.id}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const Apps = [Courses1, Courses2];

const App = (props) => {
  const [selection, setSelection] = useState(0);
  const CourseInfo = Apps[selection];

  const renderNavLink = (index, content) => (
    <li>
      <button
        className={`nav-link ${selection === index ? "active" : ""}`}
        onClick={() => setSelection(index)}
      >
        {content}
      </button>
    </li>
  );
  return (
    <div className="courses-list">
      <h1>Course and Dependencies</h1>
      <ul className="courses-nav">
        {renderNavLink(0, "Courses1")}
        {renderNavLink(1, "Courses2")}
      </ul>
      <div>
        {CourseInfo ? (
          <Router>
            <CoursesList path="/" />
            <CourseInfo path="/:courseId" />
          </Router>
        ) : (
          "Choose a version"
        )}
      </div>
    </div>
  );
};

export default App;
