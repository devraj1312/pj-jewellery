import '../App.css';

function Footer() {
  return (
<footer className="footer py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <h3 className="brand-name mb-3">Priya Jewellers</h3>
                    <p>Crafting timeless elegance with every piece. Experience the finest in luxury jewelry.</p>
                    <div className="social-links mt-3">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-pinterest"></i></a>
                        <a href="#"><i className="bi bi-youtube"></i></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-4">
                    <h5>Quick Links</h5>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#collections">Collections</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-4">
                    <h5>Categories</h5>
                    <ul className="footer-links">
                        <li><a href="#">Rings</a></li>
                        <li><a href="#">Necklaces</a></li>
                        <li><a href="#">Earrings</a></li>
                        <li><a href="#">Bangles</a></li>
                        <li><a href="#">Bracelets</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-4">
                    <h5>Support</h5>
                    <ul className="footer-links">
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Care Tips</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-4">
                    <h5>Newsletter</h5>
                    <p className="small">Subscribe for exclusive offers</p>
                    <form className="newsletter-form">
                        <input type="email" className="form-control mb-2" placeholder="Your email" />
                        <button type="submit" className="btn btn-gold w-100">Subscribe</button>
                    </form>
                </div>
            </div>
            <hr class="my-4" />
            <div class="row">
                <div class="col-md-6 text-center text-md-start">
                    <p class="mb-0">&copy; 2026 Priya Jewellers. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <a href="#" class="footer-link">Privacy Policy</a> | 
                    <a href="#" class="footer-link">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;