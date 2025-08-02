export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Unfold</h1>
        <p className="hero-subtitle">Your digital wellness garden for reflection, growth, and joy</p>
        <img src="img/cute_lil_bear.png" alt="Cute bear mascot" className="mascot-image" />
        <p className="hero-description">Take a moment to breathe, reflect, and reconnect with yourself.</p>
        <a href="/tracker" className="cta-button">Start Your Daily Check-In</a>
      </section>
      <section className="how-to-unfold">
        <h2>How to Unfold</h2>
                
        <div className="features-grid">
        <div className="feature-card">
        <h3>Daily Check-In</h3>
        <p>Track your mood, energy, sleep, and thoughts. Small moments of reflection can lead to big insights.</p>
        <a href="/tracker" className="feature-link">Start Tracking</a>
        </div>

        <div className="feature-card">
          <h3>One Small Shift</h3>
          <p>Discover micro-habits and offline activities. Sometimes the smallest changes make the biggest difference.</p>
          <a href="/generator" className="feature-link">Generate Ideas</a>
        </div>

      <div className="feature-card">
        <h3>Emotional Forecast</h3>
        <p>Check in with your emotional weather and find your reset room for when you need to recharge.</p>
        <a href="/forecast" className="feature-link">Check Forecast</a>
        </div>

       <div className="feature-card">
          <h3>Joy Bubble</h3>
           <p>Collect and revisit moments of gratitude and joy. Let the light in — you made this.</p>
            <a href="/joy" className="feature-link">View Bubble</a>
         </div>

        <div className="feature-card">
            <h3>Reflection Pond</h3>
             <p>Look back on your journey and see how far you've come. Progress isn't always linear.</p>
             <a href="/reflection" className="feature-link">Reflect</a>
          </div>

         <div className="feature-card">
            <h3>Reset Room</h3>
             <p>A calming digital space to breathe and reset when life feels overwhelming.</p>
              <a href="/reset-room" className="feature-link">Enter Room</a>
           </div>
         </div>
     </section>
    <section className="final-cta">
      <h2>Ready to begin your wellness journey?</h2>
       <p>Start small. Start today. You deserve to unfold.</p>
         <div className="cta-buttons">
          <a href="/tracker" className="cta-button">Begin Check-In</a>
          <a href="/generator" className="cta-button secondary">Get Inspiration</a>
        </div>
     </section>
    </div>
  );
}
