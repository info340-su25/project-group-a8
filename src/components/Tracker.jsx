export default function Tracker({ moodEntries }) {
    const defaultEntries = moodEntries || [
        {
            id: 1,
            date: "2025-08-02",
            mood: "Content",
            energy: 7,
            sleep: 8,
            thoughts: "Had a productive day working on my React project!"
        },
        {
            id: 2,
            date: "2025-08-01",
            mood: "Anxious",
            energy: 5,
            sleep: 6,
            thoughts: "Feeling overwhelmed with assignments but trying to stay positive."
        },
        {
            id: 3,
            date: "2025-07-31",
            mood: "Happy",
            energy: 9,
            sleep: 8,
            thoughts: "Great day with friends! Feeling grateful."
        }
    ];

    return (
        <div className="tracker-container">
            <header className="tracker-header">
                <h1>Daily Check-In</h1>
                <p>Track your mood, energy, sleep, and thoughts</p>
            </header>

            
            <section className="checkin-form">
                <h2>How are you feeling today?</h2>
                <form className="tracker-form">
                    <div className="form-group">
                        <label htmlFor="mood">Current Mood:</label>
                        <select id="mood" name="mood">
                            <option value="">Select your mood</option>
                            <option value="Happy">Happy</option>
                            <option value="Content">Content</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Anxious">Anxious</option>
                            <option value="Sad">Sad</option>
                            <option value="Stressed">Stressed</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="energy">Energy Level (1-10):</label>
                        <input type="range" id="energy" name="energy" min="1" max="10" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sleep">Sleep Quality (1-10):</label>
                        <input type="range" id="sleep" name="sleep" min="1" max="10" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="thoughts">Today's Thoughts:</label>
                        <textarea id="thoughts" name="thoughts" placeholder="What's on your mind today?"></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Save Check-In</button>
                </form>
            </section>

    
            <section className="previous-entries">
                <h2>Your Journey</h2>
                <div className="entries-list">
                    {defaultEntries.map(entry => (
                        <div key={entry.id} className="entry-card">
                            <div className="entry-header">
                                <span className="entry-date">{entry.date}</span>
                                <span className={`mood-badge mood-${entry.mood.toLowerCase()}`}>
                                    {entry.mood}
                                </span>
                            </div>
                            <div className="entry-stats">
                                <span>Energy: {entry.energy}/10</span>
                                <span>Sleep: {entry.sleep}/10</span>
                            </div>
                            <p className="entry-thoughts">{entry.thoughts}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}