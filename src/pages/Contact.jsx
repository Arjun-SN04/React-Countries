import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  // Handle input & textarea change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    // Data in object form
    const submittedData = {
      username: formData.username,
      email: formData.email,
      message: formData.message,
    };

    console.log("Form Data:", submittedData);

  
    setFormData({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">contact us</h2>

      <div className="contact-wrapper container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            className="form-control"
            required
            autoComplete="off"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="form-control"
            required
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows={10}
            placeholder="Enter your Message"
            className="form-control"
            required
            autoComplete="off"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
