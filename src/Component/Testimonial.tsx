import "./Testimonial.css";
import user1 from "../assets/Images/user1.jpg";
import user2 from "../assets/Images/user2 (1).jpg";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const Testimonial = () => {
  return (
    <div>
      <section className="testimonials">
        <h1>What Our Student Say</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="testimonal-col">
            <img src={user1} />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate excepturi iste odit et odio impedit aliquid quidem
                aut repellendus. Doloribus necessitatibus nesciunt quasi quo
                incidunt eaque asperiores natus sapiente cum.
              </p>
              <h3>Christine Berkley</h3>
              <StarIcon className="fa fa-star" />
              <StarIcon className="fa fa-star" />
              <StarIcon className="fa fa-star" />
              <StarIcon className="fa fa-star" />
              <StarBorderIcon className="fa fa-star-o" />
            </div>
          </div>
          <div className="testimonal-col">
            <img src={user2} />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate excepturi iste odit et odio impedit aliquid quidem
                aut repellendus. Doloribus necessitatibus nesciunt quasi quo
                incidunt eaque asperiores natus sapiente cum.
              </p>
              <h3>David Byer</h3>
              <StarIcon className="fa fa-star" />
              <StarIcon className="fa fa-star" />
              <StarIcon className="fa fa-star" />
              <StarIcon className="fa fa-star" />
              <StarHalfIcon className="fa fa-star-half-o" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
