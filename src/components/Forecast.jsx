export default function Forecast() {
  return (
    <div>
       <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
                <div className="d-flex align-items-center">
                    <img src="img/unfold_logo.png" alt="Unfold Logo" height="60" />
                    <span className="visually-hidden">Forecast</span>
                </div>
                <nav className="d-none d-md-flex gap-4">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/tracker" className="nav-link">Daily Check-In</a>
                    <a href="/generator" className="nav-link">Shift Generator</a>
                    <a href="/about" className="nav-link">About</a>
                    <a href="/joy" className="nav-link">Joy Bubble</a>
                    <a href="/reflection" className="nav-link">Reflection Pond</a>
                </nav>
                <button className="btn menu-toggle d-md-none" aria-label="Menu">&#9776;</button>
            </header>

            <main className="container-fluid">
                <section className="hero-section text-center py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold mb-4">Emotional Forecast</h1>
                        <p className="lead mb-5">Check in with your emotional weather and find patterns in your wellbeing</p>
                        
                        <div className="d-flex justify-content-center mb-5">
                            <div className="weather-icon" style={{fontSize: '8rem'}}>🌤️</div>
                        </div>
                        <p className="fs-5 mb-4">Understanding your emotional patterns can help you prepare for tomorrow.</p>
                    </div>
                </section>

                <section className="py-5 bg-cream">
                    <div className="container">
                        <h2 className="text-center mb-5 text-dark-green">Today's Emotional Weather</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="weather-card p-5 rounded shadow-sm bg-white text-center">
                                    <div className="current-weather mb-4">
                                        <div className="weather-icon mb-3" style={{fontSize: '4rem'}}>☀️</div>
                                        <h3 className="text-dark-green">Mostly Sunny</h3>
                                        <p className="text-muted">Feeling optimistic with occasional clouds of stress</p>
                                    </div>
                                    <div className="weather-details">
                                        <div className="row text-center">
                                            <div className="col-4">
                                                <div className="weather-stat">
                                                    <h5 className="text-dark-green">Energy</h5>
                                                    <p className="fs-4 text-dark-green">7/10</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="weather-stat">
                                                    <h5 className="text-dark-green">Mood</h5>
                                                    <p className="fs-4 text-dark-green">Content</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="weather-stat">
                                                    <h5 className="text-dark-green">Sleep</h5>
                                                    <p className="fs-4 text-dark-green">8/10</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">7-Day Emotional Pattern</h2>
                        <div className="row g-3">
                            <div className="col-lg-1 col-md-6">
                                <div className="forecast-day p-3 rounded bg-light-green text-center">
                                    <h6 className="text-dark-green">Mon</h6>
                                    <div className="day-icon mb-2">🌧️</div>
                                    <small className="text-dark-green">Stressed</small>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-6">
                                <div className="forecast-day p-3 rounded bg-light-green text-center">
                                    <h6 className="text-dark-green">Tue</h6>
                                    <div className="day-icon mb-2">⛅</div>
                                    <small className="text-dark-green">Mixed</small>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-6">
                                <div className="forecast-day p-3 rounded bg-light-green text-center">
                                    <h6 className="text-dark-green">Wed</h6>
                                    <div className="day-icon mb-2">☀️</div>
                                    <small className="text-dark-green">Happy</small>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-6">
                                <div className="forecast-day p-3 rounded bg-light-green text-center">
                                    <h6 className="text-dark-green">Thu</h6>
                                    <div className="day-icon mb-2">☀️</div>
                                    <small className="text-dark-green">Good</small>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-6">
                                <div className="forecast-day p-3 rounded bg-light-green text-center">
                                    <h6 className="text-dark-green">Fri</h6>
                                    <div className="day-icon mb-2">🌤️</div>
                                    <small className="text-dark-green">Content</small>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-6">
                                <div className="forecast-day p-3 rounded bg-light-green text-center">
                                    <h6 className="text-dark-green">Sat</h6>
                                    <div className="day-icon mb-2">☀️</div>
                                    <small className="text-dark-green">Joyful</small>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-6">
                                <div className="forecast-day p-3 rounded bg-light-green text-center">
                                    <h6 className="text-dark-green">Sun</h6>
                                    <div className="day-icon mb-2">🌈</div>
                                    <small className="text-dark-green">Great</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-cream">
                    <div className="container">
                        <h2 className="text-center mb-5 text-dark-green">Weekly Insights</h2>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="insight-card p-4 rounded bg-white">
                                    <h4 className="text-dark-green mb-3">🌟 Patterns Noticed</h4>
                                    <ul className="text-dark-green">
                                        <li>Energy levels tend to dip on Mondays</li>
                                        <li>Mood improves significantly toward weekends</li>
                                        <li>Sleep quality affects next-day energy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="insight-card p-4 rounded bg-white">
                                    <h4 className="text-dark-green mb-3">💡 Suggestions</h4>
                                    <ul className="text-dark-green">
                                        <li>Try a gentle Monday morning routine</li>
                                        <li>Plan something fun for Tuesday evenings</li>
                                        <li>Maintain consistent sleep schedule</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 text-center">
                    <div className="container">
                        <h3 className="mb-4">Need to Reset?</h3>
                        <p className="lead mb-4">When the emotional weather gets stormy, find calm in your reset room.</p>
                        <a href="/reset-room" className="btn joy-btn btn-lg">Enter Reset Room</a>
                    </div>
                </section>
            </main>

            <footer className="bg-dark text-light py-4 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Unfold</h5>
                            <p className="mb-0">A digital wellness garden for students</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <p className="mb-0">&copy; 2025 Unfold | Group A8 | University of Washington</p>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  );
}
