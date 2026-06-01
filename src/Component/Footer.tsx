import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
              <FacebookIcon className="facebook-icon" />
            </Link>
          </div>
          <div className="icon-box">
            <Link to="https://twitter.com">
              <XIcon className="twitter-icon" />
            </Link>
          </div>

          <div className="icon-box">
            <Link to="https://whatsapp.com">
              <WhatsAppIcon className="whatsapp-icon" />
            </Link>
          </div>
          <div className="icon-box">
            <Link to="https://instagram.com">
              <InstagramIcon className="instagram-icon" />
            </Link>
          </div>
          <div className="icon-box">
            <Link to="https://linkedin.com">
              <LinkedInIcon className="linkedin-icon" />
            </Link>
          </div>
        </div>
        <p>
          made with
          <FavoriteIcon className="Love-icon" />
          by easy Tutorials
        </p>
      </section>
      {/* <!--------javascript for toogle-------> */}
    </div>
  );
};

export default Footer;
