import React from 'react';
import '../App.css';

function Collections() {
  return (
     <section id="collections" className="py-5">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="section-title">Our Collections</h2>
                <p className="section-subtitle">Explore our diverse range of premium jewelry</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                    <div className="category-card">
                        <div className="category-image">
                            <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/752dcea1-fe6b-48cb-ab2c-bc0d4e3e2265.png" alt="Rings Collection" />
                            <div className="category-overlay">
                                <a href="#products" className="btn btn-gold">View Collection</a>
                            </div>
                        </div>
                        <div className="category-info">
                            <h3>Rings</h3>
                            <p>Elegant designs for every occasion</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="category-card">
                        <div className="category-image">
                            <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/ec372c29-7222-4016-852a-cf5292afc72b.png" alt="Necklaces Collection" />
                            <div className="category-overlay">
                                <a href="#products" className="btn btn-gold">View Collection</a>
                            </div>
                        </div>
                        <div className="category-info">
                            <h3>Necklaces</h3>
                            <p>Stunning pieces that captivate</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="category-card">
                        <div className="category-image">
                            <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/37cbe04d-20e5-427a-98f0-edce770b8adc.png" alt="Earrings Collection" />
                            <div className="category-overlay">
                                <a href="#products" className="btn btn-gold">View Collection</a>
                            </div>
                        </div>
                        <div className="category-info">
                            <h3>Earrings</h3>
                            <p>Traditional and contemporary styles</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="category-card">
                        <div className="category-image">
                            <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/c9dbde69-a434-44e5-9b84-9dedaf616363.png" alt="Bangles Collection" />
                            <div className="category-overlay">
                                <a href="#products" className="btn btn-gold">View Collection</a>
                            </div>
                        </div>
                        <div className="category-info">
                            <h3>Bangles</h3>
                            <p>Timeless traditional craftsmanship</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}


export default Collections;
