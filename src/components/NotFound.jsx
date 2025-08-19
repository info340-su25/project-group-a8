import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="container-fluid">
            <section className="text-center py-5" style={{ minHeight: '60vh' }}>
                <div className="container">
                    <div style={{ fontSize: '8rem', marginBottom: '2rem' }}>🌸</div>
                    <h1 className="display-4 fw-bold mb-4">Page Not Found</h1>
                    <p className="lead mb-5">
                        Oops! It looks like this page doesn't exist in our wellness garden.
                    </p>
                    <p className="fs-5 mb-4">
                        Let's get you back to a peaceful place where you can continue your journey.
                    </p>
                    <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                        <Link to="/" className="btn joy-btn btn-lg">
                            Return Home
                        </Link>
                        <Link to="/tracker" className="btn action-btn btn-lg">
                            Start Check-In
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}