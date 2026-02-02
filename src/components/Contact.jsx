import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <motion.div
                    className="newsletter-block"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="eyebrow">The Launch</span>
                    <h2>COMING SOON</h2>


                </motion.div>

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
