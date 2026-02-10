import '../App.css';

function Contact() {
  return (
<section id="contact" className="py-5 bg-cream">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Visit our store or reach out to us</p>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="contact-info">
                        <h4 className="mb-4">Visit Our Store</h4>
                        <div className="store-location mb-4">
                            <h5><i className="bi bi-geo-alt-fill text-gold"></i> Priya Jewellers</h5>
                            <p>Bhoomi Trivas CHS, Bhoomi Trivas, Plot No.: 09, Opposite to Bank of India, Sector 34C, Kharghar<br />Navi Mumbai, Maharashtra 410210</p>
                        </div>
                        
                        <div className="mt-4">
                            <h5>Store Hours</h5>
                            <p>Monday - Saturday: 10:00 AM - 8:00 PM<br />Sunday: 11:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="contact-form">
                        <h4 class="mb-4">Send Us a Message</h4>
                        <form id="contactForm">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" placeholder="Phone Number" required />
                            </div>
                            <div className="mb-3">
                                <select className="form-select" required>
                                    <option value="" selected disabled>Select Interest</option>
                                    <option value="rings">Rings</option>
                                    <option value="necklaces">Necklaces</option>
                                    <option value="earrings">Earrings</option>
                                    <option value="bangles">Bangles</option>
                                    <option value="custom">Custom Design</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-gold w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Contact;