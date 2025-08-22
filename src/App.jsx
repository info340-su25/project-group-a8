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

import { LoginPage } from './LoginPage.jsx';



function App() {
  
  // const [authInitialized, setAuthInitialized] = useState(false);

  // useEffect(() => {
  //   const auth = getAuth();
  //   const unsubscribe = onAuthStateChanged(auth, (firebaseUserObj) => {
  //     if (firebaseUserObj != null){
  //       firebaseUserObj.userId = firebaseUserObj.uid;
  //       firebaseUserObj.userName = firebaseUserObj.displayName;
  //       setCurrUser(firebaseUserObj);
  //     } else {
  //       setCurrUser(signedOutUser[0]);
  //     }
  //     setAuthInitialized(true); // mark that auth state has loaded
  //   });

  //   return () => unsubscribe();
  // }, []);

  



  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<LoginPage />} />

        <Route 
          path="/signOut" element={<SignOut />}
        />
        
        <Route 
          path="/tracker" 
          element={<Tracker moodEntries={sampleMoodEntries}  />} 
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