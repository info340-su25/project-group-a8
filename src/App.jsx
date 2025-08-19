import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Tracker from './components/Tracker';
import About from './components/About.jsx';
import Forecast from './components/Forecast.jsx';
import JoyBubble from './components/JoyBubble.jsx';
import Proposal from './components/Proposal';
import NotFound from './components/NotFound.jsx';
import './index.css';

function App() {
  const sampleMoodEntries = [
    {
      id: 1,
      date: "2025-08-15",
      mood: "Content",
      energy: 7,
      sleep: 8,
      thoughts: "Had a productive day working on my React project!"
    },
    {
      id: 2,
      date: "2025-08-14",
      mood: "Anxious",
      energy: 5,
      sleep: 6,
      thoughts: "Feeling overwhelmed with assignments but trying to stay positive."
    },
    {
      id: 3,
      date: "2025-08-13",
      mood: "Happy",
      energy: 9,
      sleep: 8,
      thoughts: "Great day with friends! Feeling grateful."
    },
    {
      id: 4,
      date: "2025-08-12",
      mood: "Neutral",
      energy: 6,
      sleep: 7,
      thoughts: "Just an ordinary day, nothing special but nothing bad either."
    },
    {
      id: 5,
      date: "2025-08-11",
      mood: "Stressed",
      energy: 4,
      sleep: 5,
      thoughts: "Lots of deadlines this week, feeling the pressure."
    },
    {
      id: 6,
      date: "2025-08-10",
      mood: "Happy",
      energy: 8,
      sleep: 9,
      thoughts: "Weekend was refreshing, caught up on sleep and relaxation."
    },
    {
      id: 7,
      date: "2025-08-09",
      mood: "Content",
      energy: 7,
      sleep: 8,
      thoughts: "Steady day, making good progress on my goals."
    }
  ];

  const sampleJoyMoments = [
    {
      id: 1,
      title: "Coffee with a friend",
      description: "Had the most amazing conversation over coffee today",
      date: "2025-08-01",
      category: "Social"
    },
    {
      id: 2,
      title: "Finished a difficult assignment",
      description: "Finally completed that React project I've been working on",
      date: "2025-07-31",
      category: "Achievement"
    },
    {
      id: 3,
      title: "Beautiful sunset",
      description: "Watched the most incredible sunset from my window",
      date: "2025-07-30",
      category: "Nature"
    }
  ];

  const sampleHabits = [
    {
      id: 1,
      title: "5-minute meditation",
      description: "Start your day with a brief mindfulness practice",
      category: "Mindfulness",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Gratitude journal",
      description: "Write down 3 things you're grateful for",
      category: "Reflection",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Take a short walk",
      description: "Step outside for fresh air and movement",
      category: "Physical",
      difficulty: "Easy"
    }
  ];

  const sampleTeamMembers = [
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

  const sampleFeatures = [
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
      status: "In Progress"
    },
    {
      id: 3,
      title: "Joy Bubble",
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
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/tracker" 
          element={<Tracker moodEntries={sampleMoodEntries} />} 
        />
        <Route 
          path="/forecast" 
          element={<Forecast moodEntries={sampleMoodEntries} />} 
        />
        <Route 
          path="/joy" 
          element={<JoyBubble joyMoments={sampleJoyMoments} />} 
        />
        <Route 
          path="/about" 
          element={<About />} 
        />
        <Route 
          path="/proposal" 
          element={<Proposal teamMembers={sampleTeamMembers} features={sampleFeatures} />} 
        />
      </Routes>
    </div>
  );  
}

export default App;