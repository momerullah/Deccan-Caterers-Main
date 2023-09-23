import React from 'react';
import './Contact.css'; // Importing the CSS file for Contact component, create one if doesn't exist

const Contact = () => {
    return (
        <section id="contact" className="info-section">
            <div className="contact-section">
                <h2>Contact Us</h2>
                <p>Contact Name: Wajahat Ali</p>
                <p>Phone: <a href="tel:630-426-7001">630-426-7001</a></p>
                <p>Email: <a href="mailto:wajahat.ali@outlook.com">wajahat.ali@outlook.com</a></p>
                <p>We are always happy to assist you with your queries and orders. Feel free to contact us for any information or assistance you may need.</p>
            </div>
        </section>
    );
};

export default Contact;
