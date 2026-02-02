import React from 'react';
import { motion } from 'framer-motion';
import './ProductShowcase.css';

const ProductShowcase = () => {
    return (
        <section className="product-showcase">
            <div className="product-sticky-wrapper">
                <div className="product-content-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="sticky-info"
                    >
                        <span className="chapter-number"></span>
                        <h2>The<br />Icon</h2>
                        <p>
                            Pure flavour. Fire-grilled, freshly paired, and simply seasoned with salt, oregano, and lemon.
                        </p>
                        <a href="/menu.pdf" download className="btn-outline interactive">Download Menu</a>
                    </motion.div>
                </div>

                <div className="product-visuals-right">

                    <div className="visual-card offset">
                        <img src="/images/dish.png" alt="Preparation" />
                        <span className="caption">Hand Prepared</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
