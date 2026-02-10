import React from 'react';
import '../App.css';

function Products() {
  return (
<section id="products" className="py-5 bg-cream">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="section-title">Featured Products</h2>
                <p className="section-subtitle">Handpicked selections from our finest collections</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="./assets/gold-biscuit.jpeg" alt="Diamond Necklace" />
                            <div className="product-badge">24KPure Gold</div>
                            <div className="product-icons">
                                <button className="icon-btn"><i className="bi bi-heart"></i></button>
                                <button className="icon-btn"><i className="bi bi-eye"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h4>24K Pure Gold Biscuit</h4>
                            <div className="product-meta">
                                <span><strong>Gold Type:</strong> Gold</span>
                                <span><strong>Karat:</strong> 24K</span>
                                <span><strong>Weight:</strong> 10g</span>
                            </div>
                            <div className="product-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                                <span>(4.5)</span>
                            </div>
                            <p className="product-price">₹2,45,000</p>
                            <button className="btn btn-gold w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/54fea560-e766-4564-bfe8-d98a628f1496.png" alt="Diamond Necklace" />
                            <div className="product-badge">New</div>
                            <div className="product-icons">
                                <button className="icon-btn"><i className="bi bi-heart"></i></button>
                                <button className="icon-btn"><i className="bi bi-eye"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h4>Exquisite Diamond Necklace</h4>
                            <div className="product-meta">
                                <span><strong>Gold Type:</strong> White Gold</span>
                                <span><strong>Karat:</strong>22K</span>
                                <span><strong>Weight:</strong> 13g</span>
                            </div>
                            <div className="product-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                                <span>(4.5)</span>
                            </div>
                            <p className="product-price">₹2,45,000</p>
                            <button className="btn btn-gold w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/dcbc45cd-8b92-4afa-bfdb-9d2dd2a5f634.png" alt="Diamond Ring" />
                            <div className="product-badge bestseller">Bestseller</div>
                            <div className="product-icons">
                                <button className="icon-btn"><i className="bi bi-heart"></i></button>
                                <button className="icon-btn"><i className="bi bi-eye"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h4>Elegant Diamond Ring</h4>
                            <div className="product-meta">
                                <span><strong>Gold Type:</strong> Gold</span>
                                <span><strong>Karat:</strong> 18K</span>
                                <span><strong>Weight:</strong> 05g</span>
                            </div>
                            <div className="product-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <span>(5.0)</span>
                            </div>
                            <p className="product-price">₹1,85,000</p>
                            <button className="btn btn-gold w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/e1a59514-e298-45c2-b5ca-8d64dd679c13.png" alt="Gold Earrings" />
                            <div className="product-icons">
                                <button className="icon-btn"><i className="bi bi-heart"></i></button>
                                <button className="icon-btn"><i className="bi bi-eye"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h4>Traditional Gold Earrings</h4>
                            <div className="product-meta">
                                <span><strong>Gold Type:</strong> Gold</span>
                                <span><strong>Karat:</strong> 22K</span>
                                <span><strong>Weight:</strong> 10g</span>
                            </div>
                            <div className="product-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star"></i>
                                <span>(4.0)</span>
                            </div>
                            <p className="product-price">₹65,000</p>
                            <button className="btn btn-gold w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/752dcea1-fe6b-48cb-ab2c-bc0d4e3e2265.png" alt="Gold Rings" />
                            <div className="product-icons">
                                <button className="icon-btn"><i className="bi bi-heart"></i></button>
                                <button className="icon-btn"><i className="bi bi-eye"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h4>Designer Gold Rings Set</h4>
                            <div className="product-meta">
                                <span><strong>Gold Type:</strong> Gold</span>
                                <span><strong>Karat:</strong> 18K</span>
                                <span><strong>Weight:</strong> 05g</span>
                            </div>
                            <div className="product-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                                <span>(4.5)</span>
                            </div>
                            <p className="product-price">₹95,000</p>
                            <button className="btn btn-gold w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/ec372c29-7222-4016-852a-cf5292afc72b.png" alt="Gold Necklace" />
                            <div className="product-badge">New</div>
                            <div className="product-icons">
                                <button className="icon-btn"><i className="bi bi-heart"></i></button>
                                <button className="icon-btn"><i className="bi bi-eye"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h4>Heritage Gold Necklace</h4>
                            <div className="product-meta">
                                <span><strong>Gold Type:</strong> Gold</span>
                                <span><strong>Karat:</strong> 18K</span>
                                <span><strong>Weight:</strong> 13g</span>
                            </div>
                            <div className="product-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <span>(5.0)</span>
                            </div>
                            <p className="product-price">₹3,25,000</p>
                            <button className="btn btn-gold w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://mgx-backend-cdn.metadl.com/generate/images/921220/2026-01-20/c9dbde69-a434-44e5-9b84-9dedaf616363.png" alt="Gold Bangles" />
                            <div className="product-icons">
                                <button className="icon-btn"><i className="bi bi-heart"></i></button>
                                <button className="icon-btn"><i className="bi bi-eye"></i></button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h4>Traditional Gold Bangles</h4>
                            <div className="product-meta">
                                <span><strong>Gold Type:</strong> Gold</span>
                                <span><strong>Karat:</strong> 18K</span>
                                <span><strong>Weight:</strong> 20g</span>
                            </div>
                            <div className="product-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                                <span>(4.5)</span>
                            </div>
                            <p className="product-price">₹1,45,000</p>
                            <button className="btn btn-gold w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
}


export default Products;