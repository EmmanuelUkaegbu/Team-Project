import { Link } from "react-router-dom";
import "./Header.css";
import Logopng from "../assets/Images/logo.png";

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
                <Link to="">HOME</Link>
              </li>
              <li>
                <Link to="">ABOUT</Link>
              </li>
              <li>
                <Link to="">COURSE</Link>
              </li>
              <li>
                <Link to="">BLOG</Link>
              </li>
              <li>
                <Link to="">CONTACT</Link>
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
          <Link to="#" className="hero-btn">
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
