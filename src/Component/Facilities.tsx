import library from "../assets/images/library.png";
import basketball from "../assets/images/basketball.png";
import cafeteria from "../assets/images/cafeteria.png";
import "./Facilities.css";
const Facilities = () => {
  return (
    <div>
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="facilities-col">
            <img src={library} />

            <h3>World Class Library</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              consequatur sed suscipit expedita ipsa,
            </p>
          </div>

          <div className="facilities-col">
            <img src={basketball} />

            <h3>Largest Playground</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              consequatur sed suscipit expedita ipsa,
            </p>
          </div>

          <div className="facilities-col">
            <img src={cafeteria} />

            <h3>Tasty And Healthy Food</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              consequatur sed suscipit expedita ipsa,
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
