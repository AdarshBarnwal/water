import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Send Query</h2>
      <form className="contact-form">
        <div className="form-left">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Your Phone</label>
          <input type="tel" placeholder="Enter your phone" />
        </div>

        <div className="form-right">
          <label>Your Message</label>
          <textarea placeholder="Type your message here..."></textarea>

          <button type="submit" className="send-btn">
            Send Us
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
