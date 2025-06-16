import contactImage from "../public/images/contact.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image-box">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-form-wrapper">
        <div className="contact-form-box">
          <h1>Let's Get In Touch.</h1>
          <p>Or Just Reach Out to quickList@gmail.com</p>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name..." />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name..." />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email address..." />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+977 98XXXXXXXX" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Enter your main text here..."
                maxLength="300"
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
