import '../App.css';

function About() {
  return (

<section id="about" className="py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/6681700d-669b-44a5-856d-c36da7ed86f9.png" alt="Craftsmanship" className="img-fluid rounded shadow" />
                </div>
                <div className="col-lg-6">
                    <h2 className="section-title">Our Heritage</h2>
                    <p className="lead mb-4">Crafting Excellence Since Generations</p>
                    <p>At Priya Jewellers, we blend traditional craftsmanship with contemporary design to create jewelry that tells a story. Each piece is meticulously handcrafted by our skilled artisans, ensuring the highest quality and attention to detail.</p>
                    <p>Our commitment to excellence has made us a trusted name in fine jewelry. From sourcing the finest materials to the final polish, every step reflects our dedication to perfection.</p>
                    <div className="row mt-4">
                        <div className="col-md-6 mb-3">
                            <div className="feature-box">
                                <i className="bi bi-gem feature-icon"></i>
                                <h5>Premium Quality</h5>
                                <p>Only the finest materials and gemstones</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="feature-box">
                                <i className="bi bi-award feature-icon"></i>
                                <h5>Certified Jewelry</h5>
                                <p>All pieces come with authenticity certificates</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="feature-box">
                                <i className="bi bi-shield-check feature-icon"></i>
                                <h5>Lifetime Warranty</h5>
                                <p>Comprehensive coverage on all purchases</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="feature-box">
                                <i className="bi bi-heart feature-icon"></i>
                                <h5>Custom Designs</h5>
                                <p>Personalized jewelry crafted for you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default About;