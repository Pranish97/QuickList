import aboutImg from "../public/images/about.png";
import { BiRadioCircleMarked } from "react-icons/bi";
import aboutImg1 from "../public/images/about-image.png";
import aboutImg2 from "../public/images/about-image2.png"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content-row">
        <div className="about-text-box">
          <h1>About QuickLink</h1>
          <p>
            Welcome to Quicklist – your one-stop destination for all things
            essential and elegant. We are a modern eCommerce platform dedicated
            to bringing convenience, quality, and variety right to your
            fingertips. At Quicklist, we believe shopping should be simple,
            fast, and enjoyable. That’s why we’ve carefully curated a diverse
            range of products — from beauty and skincare essentials, fragrances
            that inspire, fresh and everyday groceries, to stylish furniture
            that transforms your space. Whether you’re enhancing your home,
            upgrading your self-care routine, or stocking your pantry, Quicklist
            offers trusted products tailored to your lifestyle.
          </p>
        </div>
        <div className="image-box">
          <img src={aboutImg} />
        </div>
      </div>

      <div className="about-content-box">
        <div className="image-section-box">
          <div className="box-item">
            <img src={aboutImg1} alt="" />
          </div>
          <div className="box-item"></div>
          <div className="box-item">
            
          </div>
          <div className="box-item">
            <img src={aboutImg2} alt="" />
          </div>
        </div>

        <div className="why-text-box">
          <h1> Why Choose Quicklist?</h1>
          <p>
           🛍️Wide Selection: Shop across multiple
            categories with ease.
            <br />
             🚚Reliable Delivery: Fast, secure, and timely to your doorstep.
            <br />
             💳Safe Shopping: Secure checkout and multiple payment options.{" "}
            <br />
             💬Customer First: Friendly support, always ready to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
