import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Forecast({ moodEntries = [] }) {
    const [selectedMetric, setSelectedMetric] = useState('energy');
    const [isLoading, setIsLoading] = useState(false);

    const todaysSummary = useMemo(() => {
        if (!moodEntries || moodEntries.length === 0) {
            return {
                mood: 'No data',
                energy: 0,
                sleep: 0,
                weatherIcon: '🌫️',
                description: 'Start tracking to see your emotional weather'
            };
        }

        const latest = moodEntries[0]; 
        const moodToWeather = {
            'Happy': { icon: '☀️', description: 'Bright and sunny with positive energy' },
            'Content': { icon: '🌤️', description: 'Partly sunny with gentle contentment' },
            'Neutral': { icon: '⛅', description: 'Cloudy but stable emotional weather' },
            'Anxious': { icon: '🌧️', description: 'Stormy with scattered worry showers' },
            'Sad': { icon: '🌦️', description: 'Heavy clouds with emotional rain' },
            'Stressed': { icon: '⛈️', description: 'Thunderstorms of overwhelming pressure' }
        };

        const weather = moodToWeather[latest.mood] || { icon: '🌤️', description: 'Mixed emotional conditions' };

        return {
            mood: latest.mood,
            energy: latest.energy,
            sleep: latest.sleep,
            weatherIcon: weather.icon,
            description: weather.description
        };
    }, [moodEntries]);

    const chartData = useMemo(() => {
        if (!moodEntries || moodEntries.length === 0) return [];
        
        return moodEntries
            .slice(0, 7) 
            .reverse() 
            .map((entry, index) => ({
                day: new Date(entry.date).toLocaleDateString('en-US', { weekday: 'short' }),
                date: entry.date,
                energy: entry.energy,
                sleep: entry.sleep,
                mood: entry.mood,
                moodValue: {
                    'Happy': 9,
                    'Content': 7,
                    'Neutral': 5,
                    'Anxious': 3,
                    'Sad': 2,
                    'Stressed': 1
                }[entry.mood] || 5
            }));
    }, [moodEntries]);

    const metrics = {
        energy: { 
            label: 'Energy', 
            color: '#FF6B6B', 
            dataKey: 'energy',
            domain: [0, 10] 
        },
        sleep: { 
            label: 'Sleep Quality', 
            color: '#4ECDC4', 
            dataKey: 'sleep',
            domain: [0, 10] 
        },
        mood: { 
            label: 'Mood', 
            color: '#45B7D1', 
            dataKey: 'moodValue',
            domain: [0, 10] 
        }
    };

    const currentMetric = metrics[selectedMetric];

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                <div className="text-center">
                    <div className="spinner-border text-primary mb-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p>Loading your emotional forecast...</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
            <div className="d-flex align-items-center">
            <img src="img/unfold_logo.png" alt="Unfold Logo" height="60" />
                <span className="visually-hidden">Home</span>
                        </div>
                        <nav className="d-none d-md-flex gap-4">
                            <a href="/tracker" className="nav-link">Daily Check-In</a>
                            <a href="/generator" className="nav-link">Shift Generator</a>
                            <a href="/forecast" className="nav-link">Forecast</a>
                            <a href="/joy" className="nav-link">Joy Bubble</a>
                            <a href="/reflection" className="nav-link">Reflection Pond</a>
                        </nav>
                        <button className="btn menu-toggle d-md-none" aria-label="Menu">&#9776;</button>
        </header>

            <main className="container-fluid">
                {/* Hero Section */}
                <section className="hero-section text-center py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold mb-4">Emotional Forecast</h1>
                        <p className="lead mb-5">Check in with your emotional weather and find patterns in your wellbeing</p>
                        
                        <div className="d-flex justify-content-center mb-5">
                            <div className="weather-icon" style={{fontSize: '8rem'}} aria-hidden="true">🌤️</div>
                        </div>
                        <p className="fs-5 mb-4">Understanding your emotional patterns can help you prepare for tomorrow.</p>
                    </div>
                </section>

                {/* Today's Weather - Dynamic */}
                <section className="py-5 bg-cream">
                    <div className="container">
                        <h2 className="text-center mb-5 text-dark-green">Today's Emotional Weather</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="weather-card p-5 rounded shadow-sm bg-white text-center">
                                    <div className="current-weather mb-4">
                                        <div className="weather-icon mb-3" style={{fontSize: '4rem'}} aria-hidden="true">
                                            {todaysSummary.weatherIcon}
                                        </div>
                                        <h3 className="text-dark-green">{todaysSummary.mood}</h3>
                                        <p className="text-muted">{todaysSummary.description}</p>
                                    </div>
                                    <div className="weather-details">
                                        <div className="row text-center">
                                            <div className="col-4">
                                                <div className="weather-stat">
                                                    <h4 className="text-dark-green">Energy</h4>
                                                    <p className="fs-4 text-dark-green" aria-label={`Energy level ${todaysSummary.energy} out of 10`}>
                                                        {todaysSummary.energy}/10
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="weather-stat">
                                                    <h4 className="text-dark-green">Mood</h4>
                                                    <p className="fs-4 text-dark-green">{todaysSummary.mood}</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="weather-stat">
                                                    <h4 className="text-dark-green">Sleep</h4>
                                                    <p className="fs-4 text-dark-green" aria-label={`Sleep quality ${todaysSummary.sleep} out of 10`}>
                                                        {todaysSummary.sleep}/10
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Chart Section */}
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">7-Day Trend Analysis</h2>
                        
                        {/* Category Chips */}
                        <div className="d-flex justify-content-center mb-4 gap-2 flex-wrap">
                            {Object.entries(metrics).map(([key, metric]) => (
                                <button
                                    key={key}
                                    className={`btn ${selectedMetric === key ? 'action-btn' : 'btn-outline-secondary'} metric-chip`}
                                    onClick={() => setSelectedMetric(key)}
                                    aria-pressed={selectedMetric === key}
                                    style={{
                                        borderRadius: '20px',
                                        padding: '0.5rem 1rem',
                                        minWidth: '100px'
                                    }}
                                >
                                    {metric.label}
                                </button>
                            ))}
                        </div>

                        {/* Chart Container */}
                        {chartData.length > 0 ? (
                            <div className="chart-container p-4 rounded bg-light-green">
                                <h3 className="text-center text-dark-green mb-4">
                                    {currentMetric.label} Over Time
                                </h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis 
                                            dataKey="day" 
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <YAxis 
                                            domain={currentMetric.domain}
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <Tooltip 
                                            formatter={(value, name) => [
                                                selectedMetric === 'mood' ? `${value}/10` : value,
                                                currentMetric.label
                                            ]}
                                            labelFormatter={(label) => `Day: ${label}`}
                                        />
                                        <Line 
                                            type="monotone" 
                                            dataKey={currentMetric.dataKey}
                                            stroke={currentMetric.color}
                                            strokeWidth={3}
                                            dot={{ fill: currentMetric.color, strokeWidth: 2, r: 6 }}
                                            activeDot={{ r: 8 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <div className="empty-state text-center p-5 rounded bg-light-green">
                                <div style={{fontSize: '4rem'}} aria-hidden="true">📊</div>
                                <h3 className="text-dark-green mt-3 mb-2">No Data Yet</h3>
                                <p className="text-dark-green mb-4">
                                    Start tracking your daily check-ins to see patterns in your emotional wellbeing.
                                </p>
                                <a href="/tracker" className="btn action-btn">
                                    Start Tracking
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                {/* Weekly Insights - Enhanced */}
                <section className="py-5 bg-cream">
                    <div className="container">
                        <h2 className="text-center mb-5 text-dark-green">Weekly Insights</h2>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="insight-card p-4 rounded bg-white">
                                    <h3 className="text-dark-green mb-3">🌟 Patterns Noticed</h3>
                                    <ul className="text-dark-green">
                                        <li>Energy levels tend to dip on Mondays</li>
                                        <li>Mood improves significantly toward weekends</li>
                                        <li>Sleep quality affects next-day energy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="insight-card p-4 rounded bg-white">
                                    <h3 className="text-dark-green mb-3">💡 Suggestions</h3>
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

                {/* Reset Room CTA */}
                <section className="py-5 text-center">
                    <div className="container">
                        <h2 className="mb-4">Need to Reset?</h2>
                        <p className="lead mb-4">When the emotional weather gets stormy, find calm in your reset room.</p>
                        <a href="/reset-room" className="btn joy-btn btn-lg">Enter Reset Room</a>
                    </div>
                </section>
            </main>

            <footer className="bg-dark text-light py-4 mt-5">
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
        </div>
    );
}