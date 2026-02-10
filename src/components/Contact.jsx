import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-bottom">
                    <div className="social-container">
                        <span className="social-label">Get in Touch</span>
                        <div className="contact-details-list">
                            <a href="tel:+84784508999" className="contact-detail-item interactive">
                                <FaPhoneAlt />
                                <span>+84 78 450 8999</span>
                            </a>
                            <a href="mailto:info@greeksouvlaki.store" className="contact-detail-item interactive">
                                <FaEnvelope />
                                <span>info@greeksouvlaki.store</span>
                            </a>
                        </div>
                    </div>
                    <div className="brand-watermark">
                        <span>GREEK SOUVLAKI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
