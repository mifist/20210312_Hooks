import { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { getCourse } from "../courses";

const Courses2 = ({ courseId }) => {
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

        {course.related.length ? (
          <div className="related">
            <h4 className="tags__title">Related Courses</h4>
            <ul id="related">
              {course.related.map((c) => (
                <li key={c.id}>
                  <Link to={`/${c.id}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Courses2;
