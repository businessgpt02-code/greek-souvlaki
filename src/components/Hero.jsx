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

                <motion.img
                    src="/images/greek-souvlaki-logo.png"
                    alt="Greek Souvlaki Nha Trang"
                    className="hero-logo"
                    style={{ x: "-50%", y: "-50%" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />
            </div>

            <motion.div style={{ opacity }} className="hero-footer">
                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>

                    <span className="scroll-text">SCROLL DOWN</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
