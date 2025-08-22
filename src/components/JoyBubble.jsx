import { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import FloatingBubbles from "./FloatingBubbles.jsx";
import { getDatabase, ref, push as firebasePush, onValue} from 'firebase/database';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

export default function JoyBubble( {currUser}) {

  const [moments, setMoments] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [status, setStatus] = useState({type: "",msg:"" });

  const location = useLocation();
  


  function addToDatabase(newMoment){
    //ADD TO FIREBASE DATABASE


    const db = getDatabase();
    const username = currUser.userName;
    const allJoyBubbles = ref(db, `${username}/allJoyBubbles`); 
    firebasePush(allJoyBubbles, newMoment)
    .then(()=> {
        console.log("data saved"); 
        // <----- WONT NEED ANYMORE ??? ------>
        //used chatgpt to get ID (using crypto + randomUUID)
        
        //const updateMoment = [newMoment, ...moments];
        //saveMoments(updateMoment);
        
        console.log(moments);

        setTitle('');
        setCategory("");
        setDescription("");
        setStatus({ type: "success" , msg: "Added to your Joy Bubble!" });  

    })
    .catch(err =>{
        console.error("error in saving ");
    })
    
    setStatus({ type: "success" , msg: "Added to your Joy Bubble!" });
  }



  useEffect(() =>{
    //subscribe to the database - for allJoyBubbles

    console.log(currUser);
    const db = getDatabase();
    const username = currUser.userName;
    const allJoyBubblesRef = ref(db, `${username}/allJoyBubbles`);
    
    onValue(allJoyBubblesRef, function(snapshot){
        const data = snapshot.val();

        if(!snapshot.val()){
          setMoments([]);
          saveMoments([]);
          return;
        }
        const keyArray = Object.keys(data);
        const dataArray =  keyArray.map((keyString) => {
            const transformed = data[keyString];
            transformed.firebaseKey = keyString;
            return transformed;
        }) 
        //console.log(data);
        setMoments(dataArray); //adds all messages from database to past checkins;
        saveMoments(dataArray);
        
    })
}, [])



  const [selectedMoment, setSelectedMoment] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleBubbleClick = (item) => {
        let moment;
        if (typeof item === "string") {
        moment = moments.find(mom => mom.title === item);
        } else {
        moment = item;
        }

        if (moment) {
            setSelectedMoment(moment);
            setIsOpen(true);
        }
    };

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (event) => { if (event.key === "Escape") setIsOpen(false); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
      }, [isOpen]);

    // used chatgpt to help create a "close" event listener

  const saveMoments = (event) => {
    setMoments(event);
    try {
      localStorage.setItem( "unfold_joy_moments" , JSON.stringify(event));
    } catch {} };

// used chatgpt for understanding/writing local storage try/catch and saving moments after page refresh

  useEffect( () => {
    const event = localStorage.getItem("unfold_joy_moments");
    if (event) {
      try {setMoments(JSON.parse(event));} catch {}}}, [] );

    // used chatgpt for understanding/writing local storage try/catch and saving moments after page refresh
  // useEffect(() => {
  //   let incoming;

  //   if ( location.state && location.state.newMoments ) {
  //       incoming = location.state.newMoments;
  //   } else {
  //       incoming = []
  //   };

  //   if (incoming && Array.isArray(incoming) && incoming.length > 0) {
  //     const currentDate = new Date().toISOString().slice(0 , 10);
  //     const mapped = incoming.filter(Boolean).map((text) => ({ id: crypto.randomUUID(), title: text, description: "", date: currentDate, category: "Gratitude"}));
  //     // used chatgpt to get ID (using crypto + randomUUID)
  //     const newMoments = [...mapped, ...moments];
  //     //addToDatabase(newMoments);
  //   }
  // });

  //ADDED BY CHATGPT - had to change another teammates code to work with the database so there
  // wasnt any infinite loops 
  useEffect(() => {
    let incoming = location.state?.newMoments || [];
  
    if (incoming.length > 0) {
      const currentDate = new Date().toISOString().slice(0, 10);
      const mapped = incoming.filter(Boolean).map((text) => ({
        id: crypto.randomUUID(),
        title: text,
        description: "",
        date: currentDate,
        category: "Gratitude",
      }));
  
      // Push each individually to avoid nested arrays
      mapped.forEach(moment => addToDatabase(moment)); 
      
    }
  }, [location.state?.newMoments]);

  const handleAdd = (event) => {
        event.preventDefault();

        if (!title.trim()) {
        setStatus({ type: "error" , msg: "Please add a title." });
        return;
        }
        if (!category) {
        setStatus({ type: "error", msg: "Please choose a category." });
        return;
        }
        const currDate = new Date().toISOString().slice(0, 10);
        const newMoment = { id: crypto.randomUUID(), title: title.trim(), description: description.trim(), date: currDate, category};
        
        console.log(newMoment);
        //ADD TO FIREBASE DATABASE
        addToDatabase(newMoment);
        
  };

  const stats = useMemo( () => {
        const total = moments.length;
        const categories = new Map();
        moments.forEach((moment) =>
        categories.set(moment.category, (categories.get(moment.category) || 0) + 1)
        );
        const topCategory = [...categories.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
        // used chatgpt for calculating topCategory & getting moments ^^
        return { total, topCategory };}, [moments]
    );

  return (
    <div>
      <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
        <div className="d-flex align-items-center">
            <Link to="/home" className="d-flex align-items-center text-decoration-ne">
                <img src="/img/unfold_logo.png" alt="Unfold Logo" height="60" />
                <span className="visually-hidden">Home</span>
            </Link>
        </div>
                    <nav className="d-none d-md-flex gap-4">
                      <Link to="/home" className="nav-link">Home</Link>
                      <Link to="/tracker" className="nav-link">Daily Check-In</Link>
                      <Link to="/joy" className="nav-link">Joy Bubble</Link>
                      <Link to="/forecast" className="nav-link">Forecast</Link>
                      <Link to="/about" className="nav-link">About</Link>
                      <Link to="/signOut" className="nav-link">Sign-Out</Link>
                      
                        
                    </nav>
                    <button className="btn menu-toggle d-md-none" aria-label="Menu">&#9776;</button>
    </header>
    <JoyModal open={isOpen} moment={selectedMoment} onClose={() => setIsOpen(false)} />
      <main className="container-fluid">
        <section className="hero-section text-center py-5">
          <div className="container">
            <h1 className="display-3 fw-bold mb-4">Joy Bubble</h1>
            <p className="lead mb-5">Collect and revisit moments of gratitude and joy</p>

            <div className="d-flex justify-content-center mb-5">
              <img src="img/bubble.png" alt="Joy bubble illustration" className="img-fluid bubble-img" style={{maxHeight: "400px"}}/>
            </div>
            <h3 className="fs-5 mb-0">Let the light in — you made this.</h3>
          </div>
        </section>

        <section>
            <div
                className="container mb-100 rounded-4 shadow-lg "
                style={{ backgroundColor: "#C5D1EE", borderRadius: "12px", boxShadow: "4px 4px 8px 4px rgba(0,0,0,0.5)", padding: "30px", position: "relative",  overflow: "hidden" , paddingBottom: '20rem' }} >

                <FloatingBubbles items={moments} onBubbleClick={handleBubbleClick} />

                <div style={{ position: "relative"}}>
                <h2 className="text-center mb-5">Your Joy Collection</h2>
                <h4 className= 'text-center mt-0'>Click on a bubble to see more!</h4>

                {moments.length === 0 && (
                <div className="text-center text-cream">
                    <p>No moments yet. Add your first below or from the Daily Check-In.</p>
                    <Link to="/tracker" className="btn action-btn mt-2">
                    Go to Daily Check-In
                    </Link>
                </div>)}
            </div>
            </div>
        </section>

        


        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Your Joy Journey</h2>
            <div className="row g-4 text-center">
              <div className="col-md-4">
                <div className="stat-card p-4 rounded bg-light-green">
                  <h3 className="text-dark-green">{stats.total}</h3>
                  <p className="text-dark-green mb-0 ">Joy Moments</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-card p-4 rounded bg-light-green">
                  <h3 className="text-dark-green">{stats.topCategory}</h3>
                  <p className="text-dark-green mb-0">Most Frequent Category</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-card p-4 rounded bg-light-green">
                  <h3 className="text-dark-green">✨</h3>
                  <p className="text-dark-green mb-0">Give Yourself Grace. One Step At A Time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-cream">
          <div className="container">
            <h2 className="text-center mb-5 text-dark-green">Capture Another Moment</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="form-card p-4 rounded bg-white">
                  <form className="joy-form" onSubmit={handleAdd}>
                    <div className="row g-3">
                      <div className="col-md-8">
                        <label htmlFor="joyTitle" className="form-label text-dark-green">
                          What made you smile today?
                        </label>
                        <input
                          id="joyTitle"
                          type="text"
                          className="form-control"
                          placeholder="Give your joy moment a title..."
                          value={title}
                          onChange={(event) => setTitle(event.target.value)}
                        />
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="joyCategory" className="form-label text-dark-green">
                          Category
                        </label>
                        <select
                          id="joyCategory"
                          className="form-select"
                          value={category}
                          onChange={(event) => setCategory(event.target.value)}
                        >
                          <option value="">Choose category</option>
                          <option value="Achievement">Achievement</option>
                          <option value="Social">Social</option>
                          <option value="Nature">Nature</option>
                          <option value="Self Care">Self Care</option>
                          <option value="Simple Pleasures">Simple Pleasures</option>
                          <option value="Kindness">Kindness</option>
                          <option value="Gratitude">Gratitude</option>
                          <option value="Family">Gratitude</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label htmlFor="joyDescription" className="form-label text-dark-green">
                          Tell us more
                        </label>
                        <textarea
                          id="joyDescription"
                          rows="3"
                          className="form-control"
                          placeholder="Describe this joyful moment..."
                          value={description}
                          onChange={(event) => setDescription(event.target.value)}
                        />
                      </div>

                      <div className="col-12 text-center">
                        <button type="submit" className="btn action-btn">Add to Joy Bubble</button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="text-center mt-3">
                  <Link to="/tracker" className="btn btn-outline action-btn">Go to Daily Check-In</Link>
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

function JoyModal({ open, moment, onClose }) {
    if (!open || !moment) return null;
  
    const stop = (event) => event.stopPropagation();
  
    return (
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", zIndex: 9999 }} role="presentation" >
        <div className = "emph-btn" onClick={stop} role="dialog" aria-modal="true" aria-labelledby="jb-modal-title" style={{ background: "#fff", borderRadius: 12, maxWidth: 640, width: "100%", boxShadow: "0 15px 40px rgba(0,0,0,0.3)", position: "relative", padding: "1.25rem 1.25rem 1rem" }} >
          <button onClick={onClose} aria-label="Close" style={{ position: "absolute", right: 12, top: 12, background: "transparent", border: "none", fontSize: "2rem", lineHeight: 1 }}
          >
            ×
          </button>
  
          <h2 id="jb-modal-title" className="mb-2">{moment.title}</h2>
          <h3 className="text-dark-green mb-3" style={{ marginTop: -2 }}>
            <span>{moment.date}</span>{" "}&middot;{" "} <p>{moment.category}</p>
          </h3>
  
          <h3 className="mb-0">{moment.description}</h3>
        </div>
      </div>
    );
  }
  