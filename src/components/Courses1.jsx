import { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { getCourse } from "../courses";

const Courses1 = ({ courseId }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    getCourse(courseId).then((c) => setCourse(c));
  }, []);
  if (!course) {
    return null;
  }
  return (
    <>
      <Link to="/">Return to list</Link>
      <div className="course">
        <h2>{course.title}</h2>
        <img alt={course.title} src={course.img} />
        <p>{course.description}</p>

        <div className="tags">
          <span className="tags__title">Tags: </span>
          {course.tags.map((t, i) => (
            <span key={t}>
              {t} {`${i === course.tags.length - 1 ? "" : ",  "}`}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses1;
