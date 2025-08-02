export default function Proposal({ teamMembers, features }) {
    const defaultTeamMembers = teamMembers || [
        {
            id: 1,
            name: "Kristina",
            role: "Frontend Developer",
            responsibilities: "React setup, UI components, routing"
        },
        {
            id: 2,
            name: "Sangini", 
            role: "Frontend Developer",
            responsibilities: "Component development, data integration, styling"
        },
        {
            id: 3,
            name: "Ellie",
            role: "Frontend Developer",
            responsibilities: "Interactive features, state management, form handling"
        },
        {
            id: 4,
            name: "Fiona",
            role: "Frontend Developer & DevOps",
            responsibilities: "Final styling, Firebase deployment, visual consistency"
        }
    ];

    const defaultFeatures = features || [
        {
            id: 1,
            title: "Daily Check-In Tracker",
            description: "Users can log their daily mood, energy levels, sleep quality, and thoughts",
            priority: "High",
            status: "In Progress"
        },
        {
            id: 2,
            title: "Emotional Forecast",
            description: "Visual representation of emotional patterns and trends over time",
            priority: "Medium", 
            status: "Planned"
        },
        {
            id: 3,
            title: "Joy Bubble Gallery",
            description: "Collection space for positive moments, gratitude, and achievements",
            priority: "Medium",
            status: "Planned"
        },
        {
            id: 4,
            title: "Reset Room",
            description: "Calming digital space with breathing exercises and meditation tools",
            priority: "Low",
            status: "Future"
        },
        {
            id: 5,
            title: "Habit Suggestions",
            description: "Personalized micro-habits and wellness activity recommendations",
            priority: "Medium",
            status: "Planned"
        }
    ];

    return (
        <div className="proposal-container">
\            <header className="proposal-header">
                <h1>Unfold: Digital Wellness Garden</h1>
                <p className="project-tagline">Your space for reflection, growth, and joy</p>
            </header>

            <section className="problem-statement">
                <h2>Problem Statement</h2>
                <p>
                    Mental health awareness is growing, but many people struggle to find accessible, 
                    non-intimidating ways to track their emotional wellbeing and build positive habits. 
                    Traditional journaling can feel overwhelming, and clinical apps can feel cold or medical.
                </p>
                <p>
                    Young adults especially need tools that feel personal, encouraging, and integrated 
                    into their digital lives without adding stress or judgment.
                </p>
            </section>

            <section className="solution">
                <h2>Our Solution</h2>
                <p>
                    Unfold is a gentle, visually appealing wellness companion that makes emotional 
                    check-ins feel like tending to a digital garden rather than a clinical assessment. 
                    Through metaphorical spaces like "Joy Bubbles" and "Reset Rooms," users can 
                    track their mental health journey in a way that feels nurturing and positive.
                </p>
            </section>

            <section className="target-audience">
                <h2>Target Audience</h2>
                <ul>
                    <li>College students managing academic stress</li>
                    <li>Young professionals navigating work-life balance</li>
                    <li>Anyone interested in mindful self-reflection</li>
                    <li>People who find traditional mental health tools too clinical</li>
                </ul>
            </section>

            <section className="features-section">
                <h2>Key Features</h2>
                <div className="features-grid">
                    {defaultFeatures.map(feature => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-header">
                                <h3>{feature.title}</h3>
                                <span className={`priority-badge priority-${feature.priority.toLowerCase()}`}>
                                    {feature.priority}
                                </span>
                            </div>
                            <p>{feature.description}</p>
                            <span className={`status-badge status-${feature.status.toLowerCase().replace(' ', '-')}`}>
                                {feature.status}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="team-section">
                <h2>Team Members</h2>
                <div className="team-grid">
                    {defaultTeamMembers.map(member => (
                        <div key={member.id} className="team-member-card">
                            <h3>{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <p className="member-responsibilities">{member.responsibilities}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="technical-approach">
                <h2>Technical Approach</h2>
                <div className="tech-details">
                    <div className="tech-category">
                        <h3>Frontend</h3>
                        <ul>
                            <li>React with Vite for fast development</li>
                            <li>React Router for navigation</li>
                            <li>CSS3 for styling and animations</li>
                            <li>Responsive design for mobile compatibility</li>
                        </ul>
                    </div>
                    <div className="tech-category">
                        <h3>Backend & Data</h3>
                        <ul>
                            <li>Firebase for user authentication</li>
                            <li>Firestore for data storage</li>
                            <li>Local storage for offline functionality</li>
                        </ul>
                    </div>
                    <div className="tech-category">
                        <h3>Deployment</h3>
                        <ul>
                            <li>Firebase Hosting for production deployment</li>
                            <li>GitHub for version control and collaboration</li>
                        </ul>
                    </div>
                </div>
            </section>

x            <section className="timeline">
                <h2>Development Timeline</h2>
                <div className="timeline-items">
                    <div className="timeline-item completed">
                        <h4>Week 1: Setup & Planning</h4>
                        <p>Project setup, React scaffolding, basic routing</p>
                    </div>
                    <div className="timeline-item current">
                        <h4>Week 2: Core Components</h4>
                        <p>Convert HTML to React, implement basic tracking functionality</p>
                    </div>
                    <div className="timeline-item upcoming">
                        <h4>Week 3: Interactivity</h4>
                        <p>Add state management, form handling, data persistence</p>
                    </div>
                    <div className="timeline-item upcoming">
                        <h4>Week 4: Polish & Deploy</h4>
                        <p>Final styling, testing, deployment to Firebase</p>
                    </div>
                </div>
            </section>
        </div>
    );
}