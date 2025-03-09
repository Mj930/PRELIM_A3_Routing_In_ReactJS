import React from "react";
import "../styles.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container text-center">
      <h1 className="mb-3">📞 Contact Us</h1>
      <p className="lead">Get in touch with Lyceum of Alabang.</p>
      <div className="contact-details">
        <p>
          <FaEnvelope className="contact-icon" /> <strong>Email:</strong>{" "}
          info@lyceumalabang.edu.ph
        </p>
        <p>
          <FaPhone className="contact-icon" /> <strong>Phone:</strong> (09)
          8825-12340
        </p>
        <p>
          <FaMapMarkerAlt className="contact-icon" /> <strong>Address:</strong>{" "}
          Km. 30 National Road, Tunasan, Muntinlupa City
        </p>
      </div>
    </div>
  );
};

export default Contact;
