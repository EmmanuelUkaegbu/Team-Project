import "./Header.css";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div>
      <section className="header">
        <nav>
          <a href="index.html">
            <img src={logo} />
          </a>
          <div className="nav-links" id="navLinks">
            {/* <i className="fa-solid fa-times" onclick="hideMenu()"></i> */}
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">COURSE</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">CONTACT</a>
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
