export default function JoyBubble({ joyMoments }) {
    const defaultJoyMoments = joyMoments || [
        {
            id: 1,
            title: "Perfect cup of coffee",
            description: "Found the perfect coffee shop on campus with the most amazing latte",
            date: "2025-08-02",
            category: "Simple Pleasures",
            emoji: "☕"
        },
        {
            id: 2,
            title: "Ace that exam!",
            description: "Finally understood calculus and got an A on the midterm",
            date: "2025-08-01",
            category: "Achievement",
            emoji: "🎉"
        },
        {
            id: 3,
            title: "Sunset walk",
            description: "Took a peaceful walk around campus and watched the most beautiful sunset",
            date: "2025-07-31",
            category: "Nature",
            emoji: "🌅"
        },
        {
            id: 4,
            title: "Friend made me laugh",
            description: "My roommate told the funniest story and I couldn't stop laughing",
            date: "2025-07-30",
            category: "Social",
            emoji: "😄"
        },
        {
            id: 5,
            title: "Cozy reading time",
            description: "Spent the afternoon reading my favorite book in the library",
            date: "2025-07-29",
            category: "Self Care",
            emoji: "📚"
        },
        {
            id: 6,
            title: "Random act of kindness",
            description: "A stranger held the door for me when my hands were full",
            date: "2025-07-28",
            category: "Kindness",
            emoji: "💝"
        }
    ];
  return (
    <div>
            <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
                <div className="d-flex align-items-center">
                    <img src="img/unfold_logo.png" alt="Unfold Logo" height="60" />
                    <span className="visually-hidden">Joy Bubble</span>
                </div>
                <nav className="d-none d-md-flex gap-4">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/tracker" className="nav-link">Daily Check-In</a>
                    <a href="/generator" className="nav-link">Shift Generator</a>
                    <a href="/forecast" className="nav-link">Forecast</a>
                    <a href="/about" className="nav-link">About</a>
                    <a href="/reflection" className="nav-link">Reflection Pond</a>
                </nav>
                <button className="btn menu-toggle d-md-none" aria-label="Menu">&#9776;</button>
            </header>

            <main className="container-fluid">
                <section className="hero-section text-center py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold mb-4">Joy Bubble</h1>
                        <p className="lead mb-5">Collect and revisit moments of gratitude and joy</p>
                        
                        <div className="d-flex justify-content-center mb-5">
                            <img src="img/bubble_img.png" alt="Joy bubble illustration" className="img-fluid bubble-img" style={{maxHeight: '400px'}} />
                        </div>
                        <p className="fs-5 mb-4">Let the light in — you made this.</p>
                        <button className="btn bubble-btn btn-lg">Add New Joy Moment</button>
                    </div>
                </section>

                <section className="py-5 bg-cream">
                    <div className="container">
                        <h2 className="text-center mb-5 text-dark-green">Capture a Moment</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="form-card p-4 rounded bg-white">
                                    <form className="joy-form">
                                        <div className="row g-3">
                                            <div className="col-md-8">
                                                <label htmlFor="joyTitle" className="form-label text-dark-green">What made you smile today?</label>
                                                <input type="text" className="form-control" id="joyTitle" placeholder="Give your joy moment a title..." />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="joyCategory" className="form-label text-dark-green">Category</label>
                                                <select className="form-select" id="joyCategory">
                                                    <option value="">Choose category</option>
                                                    <option value="Achievement">Achievement</option>
                                                    <option value="Social">Social</option>
                                                    <option value="Nature">Nature</option>
                                                    <option value="Self Care">Self Care</option>
                                                    <option value="Simple Pleasures">Simple Pleasures</option>
                                                    <option value="Kindness">Kindness</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="joyDescription" className="form-label text-dark-green">Tell us more</label>
                                                <textarea className="form-control" id="joyDescription" rows="3" placeholder="Describe this joyful moment..."></textarea>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button type="submit" className="btn action-btn">Add to Joy Bubble</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">Your Joy Collection</h2>
                        <div className="row g-4">
                            {defaultJoyMoments.map(moment => (
                                <div key={moment.id} className="col-md-6 col-lg-4">
                                    <div className="joy-card h-100 p-4 rounded shadow-sm bg-light-green">
                                        <div className="joy-header d-flex align-items-center mb-3">
                                            <span className="joy-emoji me-3" style={{fontSize: '2rem'}}>{moment.emoji}</span>
                                            <div>
                                                <h5 className="text-dark-green mb-1">{moment.title}</h5>
                                                <small className="text-muted">{moment.date}</small>
                                            </div>
                                        </div>
                                        <p className="text-dark-green mb-3">{moment.description}</p>
                                        <span className="badge bg-green text-cream">{moment.category}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-cream">
                    <div className="container">
                        <h2 className="text-center mb-5 text-dark-green">Daily Gratitude</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <p className="text-dark-green fs-5 mb-4">
                                    Take a moment to reflect on three things you're grateful for today.
                                </p>
                                <div className="gratitude-bubbles d-flex flex-column gap-3">
                                    <div className="bubble">I'm grateful for...</div>
                                    <div className="bubble">I'm grateful for...</div>
                                    <div className="bubble">I'm grateful for...</div>
                                </div>
                                <button className="btn action-btn mt-4">Save Gratitude Practice</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">Your Joy Journey</h2>
                        <div className="row g-4 text-center">
                            <div className="col-md-3">
                                <div className="stat-card p-4 rounded bg-light-green">
                                    <h3 className="text-dark-green">{defaultJoyMoments.length}</h3>
                                    <p className="text-dark-green mb-0">Joy Moments</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="stat-card p-4 rounded bg-light-green">
                                    <h3 className="text-dark-green">7</h3>
                                    <p className="text-dark-green mb-0">Days Tracked</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="stat-card p-4 rounded bg-light-green">
                                    <h3 className="text-dark-green">3</h3>
                                    <p className="text-dark-green mb-0">Gratitude Entries</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="stat-card p-4 rounded bg-light-green">
                                    <h3 className="text-dark-green">☀️</h3>
                                    <p className="text-dark-green mb-0">Mood Trend</p>
                                </div>
                            </div>
                        </div>
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
