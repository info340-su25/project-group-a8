
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="container-fluid">
            {/* Hero Section */}
            <section className="hero-section text-center py-5">
                <div className="container">
                    <h1 className="display-3 fw-bold mb-4">Welcome to Unfold</h1>
                    <p className="lead mb-5">Your digital wellness garden for reflection, growth, and joy</p>
                    
                    <div className="d-flex justify-content-center mb-5">
                        <img src="img/cute_lil_bear.png" alt="Cute bear mascot" className="img-fluid hero-mascot cute-lil-bear-img" style={{maxHeight: '500px'}} />
                    </div>
                    <p className="fs-5 mb-4">Take a moment to breathe, reflect, and reconnect with yourself.</p>
                    <Link to="/tracker" className="btn joy-btn btn-lg px-5 py-3">Start Your Daily Check-In</Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section py-5 bg-cream">
                <div className="container">
                    <h2 className="text-center mb-5">How to Unfold</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 rounded shadow-sm bg-white">
                                <div className="text-center mb-3">
                                    <div className="feature-icon mb-3">🌱</div>
                                    <h3 className="text-dark-green">Daily Check-In</h3>
                                </div>
                                <p className="text-muted mb-4 text-center">Track your mood, energy, sleep, and thoughts. Small moments of reflection can lead to big insights.</p>
                                <Link to="/tracker" className="btn btn-outline action-btn w-100">Start Tracking</Link>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 rounded shadow-sm bg-white">
                                <div className="text-center mb-3">
                                    <div className="feature-icon mb-3">✨</div>
                                    <h3 className="text-dark-green">One Small Shift</h3>
                                </div>
                                <p className="text-muted mb-4 text-center">Discover micro-habits and offline activities. Sometimes the smallest changes make the biggest difference.</p>
                                <Link to="/generator" className="btn btn-outline action-btn w-100">Generate Ideas</Link>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 rounded shadow-sm bg-white">
                                <div className="text-center mb-3">
                                    <div className="feature-icon mb-3">🌤️</div>
                                    <h3 className="text-dark-green">Emotional Forecast</h3>
                                </div>
                                <p className="text-muted mb-4 text-center">Check in with your emotional weather and find your reset room for when you need to recharge.</p>
                                <Link to="/forecast" className="btn btn-outline action-btn w-100">Check Forecast</Link>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 rounded shadow-sm bg-white">
                                <div className="text-center mb-3">
                                    <div className="feature-icon mb-3">💭</div>
                                    <h3 className="text-dark-green">Joy Bubble</h3>
                                </div>
                                <p className="text-muted mb-4 text-center">Collect and revisit moments of gratitude and joy. Let the light in — you made this.</p>
                                <Link to="/joy" className="btn btn-outline action-btn w-100">View Bubble</Link>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 rounded shadow-sm bg-white">
                                <div className="text-center mb-3">
                                    <div className="feature-icon mb-3">🪞</div>
                                    <h3 className="text-dark-green">Reflection Pond</h3>
                                </div>
                                <p className="text-muted mb-4 text-center">Look back on your journey and see how far you've come. Progress isn't always linear.</p>
                                <Link to="/reflection" className="btn btn-outline action-btn w-100">Reflect</Link>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 rounded shadow-sm bg-white">
                                <div className="text-center mb-3">
                                    <div className="feature-icon mb-3">🕯️</div>
                                    <h3 className="text-dark-green">Reset Room</h3>
                                </div>
                                <p className="text-muted mb-4 text-center">A calming digital space to breathe and reset when life feels overwhelming.</p>
                                <Link to="/reset-room" className="btn btn-outline action-btn w-100">Enter Room</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-5 text-center">
                <div className="container">
                    <h2 className="mb-4">Ready to begin your wellness journey?</h2>
                    <p className="lead mb-4">Start small. Start today. You deserve to unfold.</p>
                    <Link to="/tracker" className="btn action-btn btn-lg me-3">Begin Check-In</Link>
                    <Link to="/generator" className="btn btn-outline action-btn btn-lg">Get Inspiration</Link>
                </div>
            </section>
        </div>
    );
}