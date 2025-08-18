export default function Home() {
return (
    <>
    {/* Header - Consistent with other pages */}
    <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
     <div className="d-flex align-items-center">
       <img src="img/unfold_logo.png" alt="Unfold Logo" height="60" />
        <span className="visually-hidden">Home</span>
                </div>
                <nav className="d-none d-md-flex gap-4">
                    <a href="/tracker" className="nav-link">Daily Check-In</a>
                    <a href="/joy" className="nav-link">Joy Bubble</a>
                    <a href="/generator" className="nav-link">Shift Generator</a>
                    <a href="/forecast" className="nav-link">Forecast</a>
                </nav>
                <button className="btn menu-toggle d-md-none" aria-label="Menu">&#9776;</button>
    </header>

            {/* Main Content */}
            <main className="container-fluid ">
                {/* Hero Section */}
                <section className="hero-section text-center py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold mb-4 text-cream">Welcome to Unfold</h1>
                        <p className="lead mb-5">Your digital wellness garden for reflection, growth, and joy</p>
                        
                        <div className="d-flex justify-content-center mb-5">
                            <img src="img/cute_lil_bear.png" alt="Cute bear mascot" className="img-fluid hero-mascot cute-lil-bear-img" style={{maxHeight: '500px'}} />
                        </div>
                        <p className="fs-5 mb-4">Take a moment to breathe, reflect, and reconnect with yourself.</p>
                        <a href="/tracker" className="btn joy-btn btn-lg px-5 py-3">Start Your Daily Check-In</a>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section py-10 pb-5 bg-cream">
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
                                    <a href="/tracker" className="btn btn-outline action-btn action-btn w-100">Start Tracking</a>
                                </div>
                            </div>
                            
                            
                            <div className="col-md-6 col-lg-4">
                                <div className="feature-card h-100 p-4 rounded shadow-sm bg-white">
                                    <div className="text-center mb-3">
                                        <div className="feature-icon mb-3">🌤️</div>
                                        <h3 className="text-dark-green">Emotional Forecast</h3>
                                    </div>
                                    <p className="text-muted mb-4 text-center">Check in with your emotional weather and find your reset room for when you need to recharge.</p>
                                    <a href="/forecast" className="btn btn-outline action-btn w-100">Check Forecast</a>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4">
                                <div className="feature-card h-100 p-4 rounded shadow-sm bg-white">
                                    <div className="text-center mb-3">
                                        <div className="feature-icon mb-3">💭</div>
                                        <h3 className="text-dark-green">Joy Bubble</h3>
                                    </div>
                                    <p className="text-muted mb-4 text-center">Collect and revisit moments of gratitude and joy. Let the light in — you made this.</p>
                                    <a href="/joy" className="btn btn-outline action-btn w-100">View Bubble</a>
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
                        <a href="/tracker" className="btn action-btn btn-lg me-3">Begin Check-In</a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-dark-green text-cream py-4 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Unfold</h4>
                            <p className="mb-0">A digital wellness garden for students</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <p className="mb-0">&copy; 2025 Unfold | Group A8 | University of Washington</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}