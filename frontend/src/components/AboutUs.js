import React from 'react';
import '../App.css';
import cocofarm from '../../src/images/cocofarm.jpg';

function AboutUs() {
    return (
        <div>
            {/* Hero Section */}
            <section className="about-hero bg-success text-white py-5">
                <div className="container">
                    <h1 className="display-4 mb-4">About CocoHub</h1>
                    <p className="lead">
                        Your Trusted Marketplace for Premium Coconut-Based Products
                    </p>
                </div>
            </section>
            
            <div className="container my-5">
                {/* Who We Are */}
                <section className="mb-5">
                    <h2 className="text-success mb-4">Who We Are</h2>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="lead">
                                CocoHub is an e-commerce platform dedicated to promoting the coconut industry 
                                by offering organic, eco-friendly, and sustainable coconut products. We bridge 
                                the gap between coconut farmers and conscious consumers.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img 
                                src={cocofarm} 
                                alt="Coconut Farm" 
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="mb-5 py-4 bg-light rounded">
                    <h2 className="text-success text-center mb-4">Our Mission</h2>
                    <div className="row g-4">
                        <div className="col-md-3 text-center">
                            <i className="bi bi-globe fs-1 text-success"></i>
                            <h5>🧑‍🌾 Empower Farmers</h5>
                            <p>Ethical sourcing & fair trade practices</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <i className="bi bi-leaf fs-1 text-success"></i>
                            <h5>🌴 Promote Sustainability</h5>
                            <p>Eco-friendly coconut alternatives</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <i className="bi bi-star fs-1 text-success"></i>
                            <h5>🚚 Deliver Quality</h5>
                            <p>Finest coconut-derived products</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <i className="bi bi-briefcase fs-1 text-success"></i>
                            <h5>🏆 Simplify Business</h5>
                            <p>Digital marketplace solutions</p>
                        </div>
                    </div>
                </section>

                {/* Product Range */}
                <section className="mb-5">
                    <h2 className="text-success mb-4">Our Product Range</h2>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-success">
                                <div className="card-body">
                                    <h5 className="card-title text-success">🥥 Edible Products</h5>
                                    <ul className="list-unstyled">
                                        <li>Organic Coconut Oil</li>
                                        <li>Coconut Milk & Flour</li>
                                        <li>Desiccated Coconut</li>
                                        <li>Coco Cream</li>
                                        <li>Coconut Sugar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="mb-5 bg-success text-white p-4 rounded">
                    <h2 className="mb-4">Why Choose CocoHub?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5>Premium Quality</h5>
                                <p>Ethically sourced, natural, and organic products</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5>Sustainable Practices</h5>
                                <p>Biodegradable packaging & eco-friendly solutions</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3">
                                <h5>Global Reach</h5>
                                <p>Worldwide delivery for homes & businesses</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default AboutUs;