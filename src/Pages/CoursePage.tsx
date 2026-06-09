import "./CoursePage.css";
import course1 from "../assets/Images/banner2.jpg";
import course2 from "../assets/Images/student2.jpg";
import course3 from "../assets/Images/student1.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
const Course = () => {
  return (
    <>
      <section className="header">
        <nav>
          <Link to="/home">
            <img src={logo} />
          </Link>
          <div className="nav-links" id="navLinks">
            {/* <i className="fa-solid fa-times" onclick="hideMenu()"></i> */}
            <ul>
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/course">COURSE</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          {/* <i className="fa-solid fa-bars" onclick="showMenu()"></i> */}
        </nav>
        <div className="hero-content">
          <h1>Our Courses</h1>
          <p>
            Discover programs designed to help you become a leader, innovator,
            and problem solver.
          </p>
        </div>
      </section>

      <section className="courses">
        <div className="title">
          <h2>Popular Programs</h2>
          <p>Choose from a variety of world-class courses.</p>
        </div>

        <div className="course-grid">
          <div className="course-card">
            <img src={course1} alt="Computer Science" />
            <div className="card-content">
              <h3>Computer Science</h3>
              <p>
                Learn software engineering, AI, cybersecurity and cloud
                computing.
              </p>
            </div>
          </div>

          <div className="course-card">
            <img src={course2} alt="Engineering" />
            <div className="card-content">
              <h3>Engineering</h3>
              <p>
                Build practical skills in civil, electrical and mechanical
                engineering.
              </p>
            </div>
          </div>

          <div className="course-card">
            <img src={course3} alt="Business" />
            <div className="card-content">
              <h3>Business Administration</h3>
              <p>
                Master leadership, entrepreneurship and strategic management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="title">
          <h2>Why Choose Us?</h2>
        </div>

        <div className="benefit-grid">
          <div className="benefit-card">
            <h3>Experienced Lecturers</h3>
            <p>
              Learn from professionals with years of academic and industry
              experience.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Modern Facilities</h3>
            <p>
              State-of-the-art classrooms, laboratories and digital libraries.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Career Support</h3>
            <p>
              Internship opportunities and career guidance for all students.
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <h2>20K+</h2>
          <p>Students</p>
        </div>

        <div className="stat">
          <h2>500+</h2>
          <p>Lecturers</p>
        </div>

        <div className="stat">
          <h2>95%</h2>
          <p>Employment Rate</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Programs</p>
        </div>
      </section>

      <section className="admission">
        <h2>Ready To Join Us?</h2>
        <p>
          Take the next step toward achieving your academic and career goals.
        </p>
        <Link to="/register">
          <button>Apply Now</button>
        </Link>
      </section>
    </>
  );
};

export default Course;
