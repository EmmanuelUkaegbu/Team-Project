import { Link } from "react-router-dom";
import "./Header.css";
import Logopng from "../../dist/assets/logo-B8xkW9QZ.png";

const Header = () => {
  return (
    <div>
      <section className="header">
        <nav>
          <Link to="index.html">
            <img src={Logopng} />
          </Link>

          <div className="nav-links" id="navLinks">
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
        </nav>

        {/* <!-- nav header ends here-->
      <!-- main section  --> */}
        <div className="head-main-section">
          <h1>World's Biggest University</h1>
          <p>
            Making website is now one of the easiest thing in the world you just
            need to learn HTML, CSS, <br />
            javascript, and we are good to go
          </p>

          <Link to="/about" className="hero-btn">
            Visit us to know more
          </Link>
        </div>
        {/* <!-- main section  ends here --> */}
      </section>
      ;
    </div>
  );
};

export default Header;
