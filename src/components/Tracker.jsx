import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router";

export default function Tracker() {

            const [username , setUsername] = useState('Ellie');
            const [mood , setMood] = useState({ energy: 5, stress: 5, excitement: 5, overallMood: 5 });

            const [socialBatterySlider , setSocialBatterySlider] = useState(5);
            const [socialPlans , setSocialPlans] = useState([]);

            const [screenTime , setScreenTime] = useState(5);
            const [digitalHabits , setDigitalHabits] = useState([]);

            const [mindSpace, setMindSpace] = useState({ clarity: 5, selfLove: 5, positivity: 5 });

            const [sleep, setSleep] = useState({ restfulness: 5, hours: ''});

            const [brainDump, setBrainDump] = useState("");

            const [gratitudeEntries, setGratitudeEntries] = useState(["" , "" , ""]);

            const [checkins, setCheckins] = useState([]);


            const nav = useNavigate();

            
            const gratitudeInputs = gratitudeEntries.map((entry, index) => {
                let placeholder;
                if (index === 0) {
                placeholder = "I'm grateful for...";
                } else {
                placeholder = "Another thing...";
                }
                return (<input key={index} name={`gratitude${index + 1}`} type="text" className="form-control mb-2" placeholder={placeholder} value={entry} onChange={(e) => {
                      const next = [...gratitudeEntries];
                      next[index] = e.target.value;
                      setGratitudeEntries(next);
                    }}/>
                );});

            const handleSubmit = (event) => {
                event.preventDefault();

                const overallScore = Math.round(
                    (mood.energy + (10 - mood.stress) + mood.excitement + mood.overallMood + mindSpace.clarity + mindSpace.selfLove + mindSpace.positivity + sleep.restfulness) / 8
                );


                const checkinData = {createdAt: Date.now(), mood, socialBattery : socialBatterySlider, socialPlans, screenTime, digitalHabits, mindSpace, sleep, brainDump, gratitudeEntries: gratitudeEntries.filter(Boolean), overallScore};
                console.log(checkinData);

                setCheckins(prev => [{ id: crypto.randomUUID(), ...checkinData }, ...prev]);

                setBrainDump('');
                setGratitudeEntries(['' , '' , '']);

                nav("/joy", {state:{gratitude : gratitudeEntries.filter(Boolean) , from: "tracker", createdAt: Date.now() }});
            }

            return (
                <div className="bg-green text-cream">
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

                    <main className="container py-4">
                        <div className="text-center mb-4">
                            <h2>Hi, {username}</h2>
                            <h3>How are you feeling today?</h3>

                            <div className="d-flex justify-content-center my-3 mt-5">
                                <h4>
                                    <a href="#checkin" className="btn checkin-btn px-4 py-4">
                                        Complete Daily Check-In
                                    </a>
                                </h4>
                            </div>

                            <div className="d-flex justify-content-center">
                                <img src="/img/cute_lil_bear.png" alt="Cute bear illustration" className="img-fluid cute-lil-bear-img" />
                            </div>

                            <h3 className="mt-3 py-4">Noticing how you feel today can help you care for tomorrow.</h3>
                        </div>

                        <form onSubmit = {handleSubmit}>

                            <div id="checkin" className="container my-5">
                                <div className="mb-5 py-2 text-center">
                                <h2>Mood</h2>
                            
                                <div className="mb-4 mt-5">
                                    <label htmlFor="energy" className="form-label">Energy</label>
                                    <div className="d-flex justify-content-between px-2 mb-1 small">
                                        <span>Exhausted</span>
                                        <span>Buzzing</span>
                                    </div>
                                    <input type="range" className="form-range" id="energy" name="energy" min="0" max="10" value={mood.energy} 
                                        onChange = {(event) => {
                                            setMood({...mood , energy: parseInt(event.target.value)})}
                                    } />
                                </div>
                            
                                <div className="mb-4">
                                    <label htmlFor="stress" className="form-label">Stress</label>
                                    <div className="d-flex justify-content-between px-2 mb-1 small">
                                        <span>Calm</span>
                                        <span>Anxious</span>
                                    </div>
                                    <input type="range" className="form-range" id="stress" name="stress" min="0" max="10" value={mood.stress} 
                                        onChange = {(event) => {
                                            setMood({...mood , stress: parseInt(event.target.value)})}
                                    } />
                                </div>
                            
                                <div className="mb-4">
                                    <label htmlFor="excitement" className="form-label">Excitement</label>
                                    <div className="d-flex justify-content-between px-2 mb-1 small">
                                        <span>Flat</span>
                                        <span>Thrilled</span>
                                    </div>
                                    <input type="range" className="form-range" id="excitement" name="excitement" min="0" max="10" value={mood.excitement} 
                                        onChange = {(event) => {
                                            setMood({...mood , excitement: parseInt(event.target.value)})}
                                    } />
                                </div>
                            
                                <div className="mb-4">
                                    <label htmlFor="overallMood" className="form-label">Overall</label>
                                    <div className="d-flex justify-content-between px-2 mb-1 small">
                                        <span>Low</span>
                                        <span>High</span>
                                    </div>
                                    <input type="range" className="form-range" id="overallMood" name="overallMood" min="0" max="10" value={mood.overallMood} 
                                        onChange = {(event) => {
                                            setMood({...mood , overallMood: parseInt(event.target.value)})}
                                    } />
                                </div>
                                </div>

                                <div className="mb-5 text-center">
                                    <h2>Social Battery</h2>

                                    <p className="mb-2">Tell us how social you feel today</p>
                                    <div className="d-flex justify-content-between px-2 mb-1 small">
                                        <span>Tapped Out</span>
                                        <span>Ready To Mingle!</span>
                                    </div>
                                    <input type="range" className="form-range mb-3" id="socialBattery" name="socialBattery" min="0" max="10" value={socialBatterySlider}
                                        onChange = {(event) => {
                                            setSocialBatterySlider(parseInt(event.target.value))}}
                                    />

                                    <p className="mt-4">Do you have social plans?</p>
                                    <div className="p-3 rounded bg-cream">
                                    <div className="form-check text-start mb-2">
                                        <input className="form-check-input" type="checkbox" id="plansNone" name="socialPlans" value="none"
                                        checked={socialPlans.includes("none")}
                                        onChange={(event) => {
                                            const value = event.target.value;
                                        
                                            if (socialPlans.includes(value)) {
                                            const updatedPlans = socialPlans.filter((item) => item !== value);
                                            setSocialPlans(updatedPlans);
                                            } else {
                                            const updatedPlans = [...socialPlans, value];
                                            setSocialPlans(updatedPlans);
                                            }}}/>
                                        <label className="form-check-label text-dark-green" htmlFor="plansNone">Nope — Nothing today!</label>
                                    </div>
                                    <div className="form-check text-start mb-2">
                                        <input className="form-check-input" type="checkbox" id="plansMaybe" name="socialPlans" value="maybe"
                                        checked={socialPlans.includes("maybe")}
                                        onChange={(event) => {
                                            const value = event.target.value;
                                        
                                            if (socialPlans.includes(value)) {
                                            const updatedPlans = socialPlans.filter((item) => item !== value);
                                            setSocialPlans(updatedPlans);
                                            } else {
                                            const updatedPlans = [...socialPlans, value];
                                            setSocialPlans(updatedPlans);
                                        }}}/>
                                        <label className="form-check-label text-dark-green" htmlFor="plansMaybe">Not yet. Maybe I'll make some</label>
                                    </div>
                                    <div className="form-check text-start mb-2">
                                        <input className="form-check-input" type="checkbox" id="plansObligatory" name="socialPlans" value="obligatory"
                                        checked={socialPlans.includes("obligatory")}
                                        onChange={(event) => {
                                            const value = event.target.value;
                                        
                                            if (socialPlans.includes(value)) {
                                            const updatedPlans = socialPlans.filter((item) => item !== value);
                                            setSocialPlans(updatedPlans);
                                            } else {
                                            const updatedPlans = [...socialPlans, value];
                                            setSocialPlans(updatedPlans);
                                        }}}/>
                                        <label className="form-check-label text-dark-green" htmlFor="plansObligatory">Yep — Obligatory</label>
                                    </div>
                                    <div className="form-check text-start">
                                        <input className="form-check-input" type="checkbox" id="plansExcited" name="socialPlans" value="excited"
                                        checked={socialPlans.includes("excited")}
                                        onChange={(event) => {
                                            const value = event.target.value;
                                        
                                            if (socialPlans.includes(value)) {
                                            const updatedPlans = socialPlans.filter((item) => item !== value);
                                            setSocialPlans(updatedPlans);
                                            } else {
                                            const updatedPlans = [...socialPlans, value];
                                            setSocialPlans(updatedPlans);
                                        }}}/>
                                        <label className="form-check-label text-dark-green" htmlFor="plansExcited">Yes! Good ones :)</label>
                                    </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="container my-5 text-center">
                                    <h2>Digital Well-Being</h2>
                                
                                    <h5 className="mt-4">Screen-Time Satisfaction</h5>
                                    <div className="d-flex justify-content-between px-2 mb-1 small">
                                    <span>Wasted Time</span>
                                    <span>Intentional Use</span>
                                    </div>
                                    <input type="range" className="form-range" id="screenTime" name="screenTime" min="0" max="10" value={screenTime}
                                        onChange={(event) => setScreenTime(parseInt(event.target.value))}/>
                                
                                    <div className="p-3 mt-4 rounded bg-cream">
                                    <div className="form-check text-start mb-2">
                                        <input className="form-check-input" type="checkbox" id="doomscroll" name="digitalHabits" value="doomscroll" checked={digitalHabits.includes("doomscroll")}
                                        onChange={(event) => {
                                            const value = event.target.value;
                                            if (digitalHabits.includes(value)) {
                                            const updated = digitalHabits.filter((item) => item !== value);
                                            setDigitalHabits(updated);
                                            } else {
                                            const updated = [...digitalHabits, value];
                                            setDigitalHabits(updated);
                                            }
                                        }}/>
                                        <label className="form-check-label text-dark-green" htmlFor="doomscroll">Doomscrolled</label>
                                    </div>
                                    <div className="form-check text-start mb-2">
                                        <input className="form-check-input" type="checkbox" id="intentional" name="digitalHabits" value="intentional" checked={digitalHabits.includes("intentional")}
                                        onChange={(event) => {
                                            const value = event.target.value;
                                            if (digitalHabits.includes(value)) {
                                            const updated = digitalHabits.filter((item) => item !== value);
                                            setDigitalHabits(updated);
                                            } else {
                                            const updated = [...digitalHabits, value];
                                            setDigitalHabits(updated);
                                            }
                                        }}/>
                                        <label className="form-check-label text-dark-green" htmlFor="intentional">Used phone with intention</label>
                                    </div>
                                    <div className="form-check text-start mb-2">
                                        <input className="form-check-input" type="checkbox" id="break" name="digitalHabits" value="break" checked={digitalHabits.includes("break")}
                                        onChange={(event) => {
                                            const value = event.target.value;
                                            if (digitalHabits.includes(value)) {
                                            const updated = digitalHabits.filter((item) => item !== value);
                                            setDigitalHabits(updated);
                                            } else {
                                            const updated = [...digitalHabits, value];
                                            setDigitalHabits(updated);
                                            }
                                        }}/>
                                        <label className="form-check-label text-dark-green" htmlFor="break">Took a break from screens</label>
                                    </div>
                                    <div className="form-check text-start mb-2">
                                        <input className="form-check-input" type="checkbox" id="mindless" name="digitalHabits" value="mindless" checked={digitalHabits.includes("mindless")}
                                        onChange={(event) => {
                                            const value = event.target.value;
                                            if (digitalHabits.includes(value)) {
                                            const updated = digitalHabits.filter((item) => item !== value);
                                            setDigitalHabits(updated);
                                            } else {
                                            const updated = [...digitalHabits, value];
                                            setDigitalHabits(updated);
                                            }
                                        }}/>
                                        <label className="form-check-label text-dark-green" htmlFor="mindless">Mindlessly watched stuff</label>
                                    </div>
                                    <div className="form-check text-start">
                                        <input className="form-check-input" type="checkbox" id="worktime" name="digitalHabits" value="work" checked={digitalHabits.includes("work")}
                                        onChange={(event) => {
                                            const value = event.target.value;
                                            if (digitalHabits.includes(value)) {
                                            const updated = digitalHabits.filter((item) => item !== value);
                                            setDigitalHabits(updated);
                                            } else {
                                            const updated = [...digitalHabits, value];
                                            setDigitalHabits(updated);
                                            }
                                        }}/>
                                        <label className="form-check-label text-dark-green" htmlFor="worktime">Lots of digital work time</label>
                                    </div>
                                    </div>
                                </div>

                                <div className="container my-5 text-center">
                                    <h2>Mind Space</h2>
                                
                                    <div className="mb-4">
                                    <label htmlFor="clarity" className="form-label">Brain Clarity</label>
                                    <div className="d-flex justify-content-between px-2 mb-1 small">
                                        <span>Foggy</span>
                                        <span>Crystal Clear</span>
                                    </div>
                                    <input type="range" className="form-range" id="clarity" name="clarity" min="0" max="10" value={mindSpace.clarity}
                                        onChange={(event) =>
                                            setMindSpace({ ...mindSpace, clarity: parseInt(event.target.value) })
                                        }
                                    />
                                    </div>
                                
                                    <div className="mb-4">
                                    <label htmlFor="selflove" className="form-label">Self-Love</label>
                                    <div className="d-flex justify-content-between px-2 mb-1 small">
                                        <span>Hard on Myself</span>
                                        <span>Gave Myself Grace</span>
                                    </div>
                                    <input type="range" className="form-range" id="selflove" name="selflove" min="0" max="10" value={mindSpace.selfLove}
                                        onChange={(event) =>
                                            setMindSpace({ ...mindSpace, selfLove: parseInt(event.target.value) })
                                        }
                                    />
                                    </div>
                                
                                    <div className="mb-4">
                                    <label htmlFor="positivity" className="form-label">Overall Positivity</label>
                                    <div className="d-flex justify-content-between px-2 mb-1 small">
                                        <span>Down Today</span>
                                        <span>Feeling Uplifted</span>
                                    </div>
                                    <input type="range" className="form-range" id="positivity" name="positivity" min="0" max="10" value={mindSpace.positivity}
                                        onChange={(event) =>
                                            setMindSpace({ ...mindSpace, positivity : parseInt(event.target.value) })
                                        }
                                    />
                                    </div>
                                </div>

                                <div className="container my-5 text-center">
                                    <h2>Sleep</h2>
                                    <h5 className="fst-italic">How'd you sleep last night?</h5>
                                
                                    <div className="mb-4">
                                    <textarea className="form-control" rows="3" placeholder="(No pressure — just check in with how you're feeling.)"></textarea>
                                    </div>
                                
                                    <div className="mb-4">
                                    <label htmlFor="restfulness" className="form-label">Restfulness</label>
                                    <div className="d-flex justify-content-between px-2 mb-1 small">
                                        <span>Running on Empty</span>
                                        <span>Rested & Recharged</span>
                                    </div>
                                    <input type="range" className="form-range" id="restfulness" name="restfulness" min="0" max="10" value={sleep.restfulness}
                                    onChange={(event) =>
                                        setSleep({ ...sleep, restfulness: parseInt(event.target.value)})
                                    } />
                                    </div>
                                
                                    <div className="mb-4">
                                        <label htmlFor="sleepHours" className="form-label">How many hours of sleep did you get?</label>
                                         <Dropdown onSelect = {(event) => {
                                                setSleep({ ...sleep, hours: event })}}>
                                            <Dropdown.Toggle className = 'dropdown-toggle' variant="light" id="sleep-hours">
                                                {sleep.hours || 'Select'}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item eventKey="0-3">0-3 hours</Dropdown.Item>
                                                <Dropdown.Item eventKey="4-5">4-5 hours</Dropdown.Item>
                                                <Dropdown.Item eventKey="6-7">6-7 hours</Dropdown.Item>
                                                <Dropdown.Item eventKey="8-10">8-10 hours</Dropdown.Item>
                                                <Dropdown.Item eventKey="11+">11+ hours</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                
                                    <p className="fst-italic">If sleep didn't go well, that's okay. Today is a new chance to rest well.</p>
                                </div>

                                <div className="container my-5 text-center">
                                    <h2>Brain Dump</h2>
                                    <h5 className="fst-italic">What's on your mind today?</h5>
                                
                                    <div className="mb-4">
                                    <textarea className="form-control" rows="4" placeholder="Doesn't have to make sense or be well-written. This is just for you." value={brainDump}
                                        onChange={(event) => setBrainDump(event.target.value)}
                                    ></textarea>
                                    </div>
                                </div>

                                <div className="container my-5 text-center">
                                    <h2>Gratitude Shop</h2>
                                    <p className="fst-italic">Little joys matter. Take a moment to name what brought you light today.</p>
                                    <p>We'll add this to your <em>Joy Bubble</em> so you can look back on it :)</p>
                                
                                    <div className="mb-4">

                                        {gratitudeInputs}

                                        <button type="button" className="btn px-5 pb-5 pt-2 text-cream gratitude-btn" onClick={() => setGratitudeEntries([...gratitudeEntries , ''])}>+ Add More Gratitude Entries</button>
                                        <button type="submit" className="btn finish-btn pt-10">Finish Check-In</button>
                                    
                                </div>
                            </div>
                        </form>
                    </main> 
                </div>
            );
}