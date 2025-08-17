import { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function JoyBubble() {
  // state for all saved moments
  const [moments, setMoments] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [status, setStatus] = useState({type: "",msg:"" });

  const location = useLocation();

  const saveMoments = (event) => {
    setMoments(event);
    try {
      localStorage.setItem( "unfold_joy_moments" , JSON.stringify(event));
    } catch {}};

  useEffect( () => {
    const event = localStorage.getItem("unfold_joy_moments");
    if (event) {
      try {setMoments(JSON.parse(event));} catch {}}}, [] );

  useEffect(() => {
    let incoming;

    if ( location.state && location.state.newMoments ) {
    incoming = location.state.newMoments;
    } else {
    incoming = []};

    if (incoming && Array.isArray(incoming) && incoming.length > 0) {
      const currentDate = new Date().toISOString().slice(0 , 10);
      const mapped = incoming.filter(Boolean).map((text) => ({ 
        id: crypto.randomUUID(),
        title: text,
        description: "",
        date: currentDate,
        category: "Gratitude"}));
      const newMoments = [...mapped, ...moments];
      saveMoments(newMoments);
      setStatus({ type: "success" , msg: "Gratitude added to your Joy Bubble!"});
    }}, [location.state] );

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

    const updateMoment = [newMoment, ...moments];
    saveMoments(updateMoment);

    setTitle('');
    setCategory("");
    setDescription("");
    setStatus({ type: "success" , msg: "Added to your Joy Bubble!" });
  };

  const collectionCards = useMemo( () =>
      moments.map((moment) => (
        <div key={moment.id} className="col-md-6 col-lg-4">
          <div className="joy-card h-100 p-4 rounded shadow-sm bg-light-green">
            <div className="joy-header d-flex align-items-center mb-3">
              <div>
                <h5 className="text-dark-green mb-1">{m.title}</h5>
                <small className="text-muted">{moment.date}</small>
              </div>
            </div>
            {moment.description && (
              <p className="text-dark-green mb-3">{moment.description}</p>
            )}
            <span className="badge bg-green text-cream">{moment.category}</span>
          </div>
        </div>
      )),
    [moments]
  );

  const stats = useMemo( () => {
    const total = moments.length;
    const categories = new Map();
    moments.forEach((moment) =>
      categories.set(moment.category, (categories.get(moment.category) || 0) + 1)
    );
    const topCategory = [...categories.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
    return { total, topCategory };}, [moments]);

  return (
    <div>
      <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
        <div className="d-flex align-items-center">
          <img src="img/unfold_logo.png" alt="Unfold Logo" height="60" />
          <span className="visually-hidden">Joy Bubble</span>
        </div>
        <nav className="d-none d-md-flex gap-4">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/tracker" className="nav-link">Daily Check-In</Link>
          <Link to="/generator" className="nav-link">Shift Generator</Link>
          <Link to="/forecast" className="nav-link">Forecast</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/reflection" className="nav-link">Reflection Pond</Link>
        </nav>
        <button className="btn menu-toggle d-md-none" aria-label="Menu">
          &#9776;
        </button>
      </header>

      <main className="container-fluid">
        <section className="hero-section text-center py-5">
          <div className="container">
            <h1 className="display-3 fw-bold mb-4">Joy Bubble</h1>
            <p className="lead mb-5">Collect and revisit moments of gratitude and joy</p>

            <div className="d-flex justify-content-center mb-5">
              <img
                src="img/bubble_img.png"
                alt="Joy bubble illustration"
                className="img-fluid bubble-img"
                style={{ maxHeight: "400px" }}
              />
            </div>
            <p className="fs-5 mb-0">Let the light in — you made this.</p>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Your Joy Collection</h2>

            {status.msg && (
              <div
                role="status"
                aria-live="polite"
                className={`alert ${status.type === "error" ? "alert-danger" : "alert-success"} mt-3`}
                style={{ color: "#FFFBED", border: "none" }}
              >
                {status.msg}
              </div>
            )}

            {moments.length === 0 ? (
              <div className="text-center text-cream">
                <p>No moments yet. Add your first below or from the Daily Check-In.</p>
                <Link to="/tracker" className="btn action-btn mt-2">Go to Daily Check-In</Link>
              </div>
            ) : (
              <div className="row g-4">{collectionCards}</div>
            )}
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Your Joy Journey</h2>
            <div className="row g-4 text-center">
              <div className="col-md-4">
                <div className="stat-card p-4 rounded bg-light-green">
                  <h3 className="text-dark-green">{stats.total}</h3>
                  <p className="text-dark-green mb-0">Joy Moments</p>
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
                  <p className="text-dark-green mb-0">Keep Noticing the Little Things</p>
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
                          onChange={(e) => setTitle(e.target.value)}
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
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Choose category</option>
                          <option value="Achievement">Achievement</option>
                          <option value="Social">Social</option>
                          <option value="Nature">Nature</option>
                          <option value="Self Care">Self Care</option>
                          <option value="Simple Pleasures">Simple Pleasures</option>
                          <option value="Kindness">Kindness</option>
                          <option value="Gratitude">Gratitude</option>
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
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>

                      <div className="col-12 text-center">
                        <button type="submit" className="btn action-btn">
                          Add to Joy Bubble
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="text-center mt-3">
                  <Link to="/tracker" className="btn btn-outline action-btn">
                    Go to Daily Check-In
                  </Link>
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
