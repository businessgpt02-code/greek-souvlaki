import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="hero">
            <div className="hero-grid">
                <motion.div style={{ y: y1 }} className="hero-text-left">
                    <h1 className="outline-text">GREEK</h1>
                </motion.div>

                <div className="hero-center-image">
                    {/* Replaced generic background with a composed aesthetic */}
                    <motion.div
                        className="image-container"
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >

                        <div className="image-overlay-gradient"></div>
                    </motion.div>
                </div>

                <motion.div style={{ y: y2 }} className="hero-text-right">
                    <h1>SOUVLAKI</h1>
                </motion.div>
            </div>

            <motion.div style={{ opacity }} className="hero-footer">
                <span className="scrolling-text">EST. 2026 • COMING SOON • </span>
            </motion.div>
        </section>
    );
};

export default Hero;
