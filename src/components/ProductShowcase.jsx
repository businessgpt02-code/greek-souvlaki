import React from 'react';

import './ProductShowcase.css';

const ProductShowcase = () => {
    return (
        <section className="product-showcase">
            <div className="product-showcase-container">
                <div className="menu-image-wrapper">
                    <img src="/images/pic.jpg" alt="Menu Categories" className="menu-image" />
                </div>
                <div className="menu-action">
                    <a href="/menu.pdf" download className="btn-outline interactive">Download Menu</a>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
