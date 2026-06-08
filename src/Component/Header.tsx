import "./Header.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
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
                <Link to="./">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="./">COURSE</Link>
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

        {/* <!-- nav header ends here--> */}
        {/* <!-- main section  --> */}
        <div className="head-main-section">
          <h1>World's Biggest University</h1>
          <p>
            Making website is now one of the easiest thing in the world you just
            need to learn HTML, CSS, <br />
            javascript, and we are good to go
          </p>
          <a href="#" className="hero-btn">
            Visit us to know more
          </a>
        </div>
        {/* <!-- main section  ends here --> */}
      </section>
    </div>
  );
};

export default Header;
