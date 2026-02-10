import React from 'react';
import '../App.css';

function Hero() {
  return (
     <section id="home" className="hero-section">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/9f687935-ea24-456d-9e17-0d0d4b5325cb.png" className="d-block w-100" alt="Luxury Jewelry Collection" />
                    <div className="carousel-caption">
                        <h1 className="display-3 fw-bold">Timeless Elegance</h1>
                        <p className="lead">Discover our exquisite collection of handcrafted jewelry</p>
                        <a href="#collections" className="btn btn-gold btn-lg">Explore Collections</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/54fea560-e766-4564-bfe8-d98a628f1496.png" className="d-block w-100" alt="Diamond Collection" />
                    <div className="carousel-caption">
                        <h1 className="display-3 fw-bold">Brilliant Diamonds</h1>
                        <p className="lead">Crafted with precision and passion</p>
                        <a href="#products" className="btn btn-gold btn-lg">Shop Now</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/ec372c29-7222-4016-852a-cf5292afc72b.png" className="d-block w-100" alt="Gold Necklaces" />
                    <div className="carousel-caption">
                        <h1 className="display-3 fw-bold">Heritage Gold</h1>
                        <p className="lead">Traditional designs meet modern aesthetics</p>
                        <a href="#collections" className="btn btn-gold btn-lg">View Collection</a>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    </section>
  );
}

export default Hero;
