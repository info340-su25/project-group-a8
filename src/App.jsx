import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Tracker from './components/Tracker';
import About from './components/About.jsx';
import Forecast from './components/Forecast.jsx';
import JoyBubble from './components/JoyBubble.jsx';
import Proposal from './components/Proposal';
import NotFound from './components/NotFound.jsx';
import { SignOut } from './components/SignOut.jsx';
import './index.css';
import { sampleMoodEntries, sampleFeatures, sampleJoyMoments, sampleTeamMembers, signedOutUser} from './components/samples.jsx';
import { useState } from 'react';

import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { LoginPage } from './LoginPage.jsx';



function App() {
  const [currUser, setCurrUser] = useState([]);

  const auth = getAuth();
  onAuthStateChanged(auth, (firebaseUserObj) => {
    console.log("auth state has changed");
    if (firebaseUserObj != null){
      console.log(firebaseUserObj);
      firebaseUserObj.userId = firebaseUserObj.uid;
      firebaseUserObj.userName = firebaseUserObj.displayName;
      setCurrUser(firebaseUserObj);
    }else{
      setCurrUser(signedOutUser[0]);

    }
    
  })



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<LoginPage />} />

        <Route 
          path="/signOut" element={<SignOut />}
        />
        
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