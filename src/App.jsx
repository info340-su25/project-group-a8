import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Forecast from './components/Forecast.jsx';
import Gallery from './components/Gallery.jsx';

function App() {
  return (
    <div>
      <h1>Unfold Weather App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;

