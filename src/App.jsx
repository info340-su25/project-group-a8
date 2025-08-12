import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';

// adjust these imports to match your folder structure
import Home from './components/Home.jsx';
import Tracker from './components/Tracker';
import About from './components/About.jsx';
import Forecast from './components/Forecast.jsx';
import Gallery from './components/Gallery.jsx';
import Proposal from './components/Proposal';
import JoyDetail from './pages/JoyDetail.jsx'; // create if missing
import NotFound from './pages/NotFound.jsx';   // create if missing

export default function App() {
  const sampleMoodEntries = [
    { id: 1, date: "2025-08-02", mood: "Content", energy: 7, sleep: 8, thoughts: "Had a productive day working on my React project!" },
    { id: 2, date: "2025-08-01", mood: "Anxious", energy: 5, sleep: 6, thoughts: "Feeling overwhelmed with assignments but trying to stay positive." },
    { id: 3, date: "2025-07-31", mood: "Happy", energy: 9, sleep: 8, thoughts: "Great day with friends! Feeling grateful." },
    { id: 4, date: "2025-07-30", mood: "Neutral", energy: 6, sleep: 7, thoughts: "Just an ordinary day, nothing special but nothing bad either." }
  ];

  const sampleJoyMoments = [
    { id: 1, title: "Coffee with a friend", description: "Had the most amazing conversation over coffee today", date: "2025-08-01", category: "Social" },
    { id: 2, title: "Finished a difficult assignment", description: "Finally completed that React project I've been working on", date: "2025-07-31", category: "Achievement" },
    { id: 3, title: "Beautiful sunset", description: "Watched the most incredible sunset from my window", date: "2025-07-30", category: "Nature" }
  ];

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tracker" element={<Tracker moodEntries={sampleMoodEntries} />} />
        <Route path="forecast" element={<Forecast />} />
        <Route path="gallery" element={<Gallery joyMoments={sampleJoyMoments} />} />
        <Route path="about" element={<About />} />
        <Route path="proposal" element={<Proposal />} />
        <Route path="joy/:id" element={<JoyDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}


