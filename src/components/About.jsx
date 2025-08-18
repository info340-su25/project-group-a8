export default function About() {
  return (
        <div>

  <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
   <div className="d-flex align-items-center">
      <img src="img/unfold_logo.png" alt="Unfold Logo" height="60" />
      <span className="visually-hidden">About</span>
      </div>
       <nav className="d-none d-md-flex gap-4">
            <a href="/" className="nav-link">Home</a>
            <a href="/tracker" className="nav-link">Daily Check-In</a>
            <a href="/joy" className="nav-link">Joy Bubble</a>
            <a href="/forecast" className="nav-link">Forecast</a>
            <a href="/about" className="nav-link">About</a>
         </nav>
          <button className="btn menu-toggle d-md-none" aria-label="Menu">&#9776;</button>
            </header>

           
            <main className="container-fluid">
              
                <section className="hero-section text-center py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold mb-4">About Unfold</h1>
                        <p className="lead mb-5">Understanding our mission and approach to digital wellness</p>
                        
                        <div className="d-flex justify-content-center mb-5">
                            <img src="img/cute_lil_bear.png" alt="Cute bear mascot" className="img-fluid hero-mascot cute-lil-bear-img" style={{maxHeight: '400px'}} />
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-cream">
                    <div className="container">
                        <h2 className="text-center mb-5 text-dark-green">Our Mission</h2>
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <p className="text-center text-dark-green fs-5 mb-4">
                                    Unfold is designed to make mental health tracking feel less clinical and more like 
                                    tending to a personal garden. We believe that small, consistent moments of reflection 
                                    can lead to profound personal growth.
                                </p>
                                <p className="text-center text-dark-green">
                                    Our app provides a safe, judgment-free space where students can explore their 
                                    emotions, track their wellbeing, and discover personalized strategies for maintaining 
                                    mental health in a demanding academic environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                

                <section className="py-5 meet-the-team">
                    <div className="container">
                        <h2 className="text-center mb-5 text-dark-green">The Unfold Greenhouse</h2>
                            <div className="row g-4">
                            {/* Person 1 */}
                            <div className="col-12 col-md-6 col-lg-3">
                                <article className="team-card rounded-4 p-3 shadow-lg">
                                <img src="/img/team-ellie.jpg" alt="Ellie Marsh" className="team-avatar" width="96" height="96"/>
                                <div className="team-body">
                                    <h5 className="mb-1 text-dark-green">Ellie Marsh</h5>
                                    <div className="small mb-1"><strong>Double Degree:</strong> Informatics w/ Data Science & Psychology</div>
                                    <div className="small mb-2"><strong>Interests:</strong> UX/UI, Web Development, Neuroscience</div>
                                    <div className="d-flex gap-3 small">
                                    <a href="https://www.linkedin.com/in/ellie" target="_blank" rel="noreferrer" className="link-dark-green">LinkedIn</a>
                                    <a href="mailto:ellie.marsh27@gmail.com" className="link-dark-green">Email</a>
                                    </div>
                                </div>
                                </article>
                            </div>

                            {/* Person 2 */}
                            <div className="col-12 col-md-6 col-lg-3">
                                <article className="team-card rounded-4 p-3 shadow-sm">
                                <img src="/img/team-2.jpg" alt="Kristina Tran" className="team-avatar" width="96" height="96" />
                                <div className="team-body">
                                    <h5 className="mb-1 text-dark-green">Kristina Tran</h5>
                                    <div className="small mb-1"><strong>Double Degree:</strong> Biology & Informatics</div>
                                    <div className="small mb-2"><strong>Interests:</strong> Motion, branding, plants</div>
                                    <div className="d-flex gap-3 small">
                                    <a href="https://www.linkedin.com/in/name2" target="_blank" rel="noreferrer" className="link-dark-green">LinkedIn</a>
                                    <a href="mailto:name2@uw.edu" className="link-dark-green">Email</a>
                                    </div>
                                </div>
                                </article>
                            </div>

                            {/* Person 3 */}
                            <div className="col-12 col-md-6 col-lg-3">
                                <article className="team-card rounded-4 p-3 shadow-sm">
                                <img src="/img/team-3.jpg" alt="Fiona Evans" className="team-avatar" width="96" height="96" />
                                <div className="team-body">
                                    <h5 className="mb-1 text-dark-green">Fiona Evans</h5>
                                    <div className="small mb-1"><strong>Major:</strong> CS</div>
                                    <div className="small mb-2"><strong>Interests:</strong> Data viz, hiking, coffee</div>
                                    <div className="d-flex gap-3 small">
                                    <a href="https://www.linkedin.com/in/name3" target="_blank" rel="noreferrer" className="link-dark-green">LinkedIn</a>
                                    <a href="mailto:name3@uw.edu" className="link-dark-green">Email</a>
                                    </div>
                                </div>
                                </article>
                            </div>

                            {/* Person 4 */}
                            <div className="col-12 col-md-6 col-lg-3">
                                <article className="team-card rounded-4 p-3 shadow-sm">
                                <img src="/img/team-4.jpg" alt="Sangini Mehta" className="team-avatar" width="96" height="96" />
                                <div className="team-body">
                                    <h5 className="mb-1 text-dark-green">Sangini Mehta</h5>
                                    <div className="small mb-1"><strong>Major:</strong> HCDE</div>
                                    <div className="small mb-2"><strong>Interests:</strong> Accessibility, photography</div>
                                    <div className="d-flex gap-3 small">
                                    <a href="https://www.linkedin.com/in/name4" target="_blank" rel="noreferrer" className="link-dark-green">LinkedIn</a>
                                    <a href="mailto:name4@uw.edu" className="link-dark-green">Email</a>
                                    </div>
                                </div>
                                </article>
                                </div>
                                </div>

                    </div>
                </section>

         
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">Why Unfold?</h2>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="feature-card h-100 p-4 rounded shadow-sm bg-light-green">
                                    <h4 className="text-dark-green mb-3">🌱 Gentle Approach</h4>
                                    <p className="text-dark-green">
                                        Unlike clinical apps, Unfold uses warm, nature-inspired metaphors that make 
                                        mental health tracking feel nurturing rather than medical.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-card h-100 p-4 rounded shadow-sm bg-light-green">
                                    <h4 className="text-dark-green mb-3">📱 Student-Focused</h4>
                                    <p className="text-dark-green">
                                        Designed specifically for the unique stresses and schedules of college life, 
                                        with quick check-ins that fit into busy academic routines.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-card h-100 p-4 rounded shadow-sm bg-light-green">
                                    <h4 className="text-dark-green mb-3">🔒 Privacy First</h4>
                                    <p className="text-dark-green">
                                        Your personal reflections and data remain private and secure. We believe 
                                        mental health information should always be under your control.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-card h-100 p-4 rounded shadow-sm bg-light-green">
                                    <h4 className="text-dark-green mb-3">✨ Positive Focus</h4>
                                    <p className="text-dark-green">
                                        While acknowledging difficult emotions, Unfold emphasizes growth, gratitude, 
                                        and finding small moments of joy in daily life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-cream">
                    <div className="container">
                        <h2 className="text-center mb-5 text-dark-green">Get Support</h2>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <p className="text-dark-green mb-4">
                                    Remember, Unfold is a wellness tool, not a substitute for professional mental health care. 
                                    If you're experiencing a mental health crisis, please reach out for professional support.
                                </p>
                                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                                    <a href="tel:988" className="btn action-btn">Crisis Lifeline: 988</a>
                                    <a href="https://www.uw.edu/counseling" className="btn btn-outline action-btn" target="_blank" rel="noopener noreferrer">
                                        UW Counseling Center
                                    </a>
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


