import "./About.css";
import image from "../assets/Images/library.png";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="header">
        <nav>
          <Link to="./index.html">
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
                <Link to="./">BLOG</Link>
              </li>
              <li>
                <Link to="./">CONTACT</Link>
              </li>
            </ul>
          </div>
          {/* <i className="fa-solid fa-bars" onclick="showMenu()"></i> */}
        </nav>

        <div className="head-main-section">
          <h1>About Our University</h1>
          <p>
            Empowering students with knowledge, innovation, and opportunities to
            shape the future.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <span className="section-tag">OUR STORY</span>
            <h2>Building Future Leaders Since 1998</h2>
            <p>
              We believe education goes beyond classrooms. Our mission is to
              provide students with world-class learning experiences, practical
              skills, and the confidence to excel in their careers.
            </p>

            <p>
              With experienced lecturers, modern facilities, and innovative
              teaching methods, we continue to inspire thousands of students
              worldwide.
            </p>
          </div>

          <div className="about-image">
            <img src={image} alt="Students" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat-card">
          <h2>15K+</h2>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <h2>120+</h2>
          <p>Courses</p>
        </div>

        <div className="stat-card">
          <h2>300+</h2>
          <p>Expert Tutors</p>
        </div>

        <div className="stat-card">
          <h2>25+</h2>
          <p>Years Experience</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="mission-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To provide accessible, high-quality education that empowers students
            to thrive in a rapidly changing world.
          </p>
        </div>

        <div className="mission-card">
          <h3>🚀 Our Vision</h3>
          <p>
            To become a global leader in education, innovation, and lifelong
            learning.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>

        <div className="features">
          <div className="feature">
            <h4>📚 Modern Curriculum</h4>
            <p>Industry-focused courses designed for real-world success.</p>
          </div>

          <div className="feature">
            <h4>🌍 Global Community</h4>
            <p>Connect with students and educators from around the world.</p>
          </div>

          <div className="feature">
            <h4>💼 Career Support</h4>
            <p>Internships, mentorships, and career development programs.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready To Begin Your Journey?</h2>
        <p>Join thousands of students building their future with us.</p>
        <Link to="/register">
          <button>Apply Now</button>
        </Link>
      </section>
    </div>
  );
};

export default About;
