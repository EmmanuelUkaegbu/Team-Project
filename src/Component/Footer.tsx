import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TfiTwitterAlt } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { PiHandHeartDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <div>
      {/* <!-----------Footer-------------> */}
      <section className="footer">
        <h1>About Us</h1>

        <p>
          Whaobaogo Final project Cohort 4 <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
          cupiditate accusantium, animi ut facere alias deleniti cumque odio,
          nesciunt ab magni minus dignissimos accusamus cupiditate accusantium,
          animi ut facere alias consectetur repudiandae voluptas? Illum,
          blanditiis ab. rerum amet reiciendis tenetur? Voluptate, quae.
        </p>

        <div className="icons">
          <div className="icon-box">
            <Link to={"https://Facebook.com"}>
              <FaFacebookSquare className="facebook-icon" />
            </Link>
          </div>
          <div className="icon-box">
            <Link to="https://twitter.com">
              <TfiTwitterAlt className="twitter-icon" />
            </Link>
          </div>

          <div className="icon-box">
            <Link to="https://whatsapp.com">
              <IoLogoWhatsapp className="whatsapp-icon" />
            </Link>
          </div>
          <div className="icon-box">
            <Link to="https://instagram.com">
              <RiInstagramFill className="instagram-icon" />
            </Link>
          </div>
          <div className="icon-box">
            <Link to="https://linkedin.com">
              <GrLinkedin className="linkedin-icon" />
            </Link>
          </div>
        </div>
        <p>
          made with
          <PiHandHeartDuotone className="Love-icon" />
          by easy Tutorials
        </p>
      </section>
      {/* <!--------javascript for toogle-------> */}
    </div>
  );
};

export default Footer;
