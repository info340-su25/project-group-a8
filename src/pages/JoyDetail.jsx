import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function JoyDetail() {
  const { id } = useParams(); // grabs :id from the URL

  return (
    <section className="container">
      <h1 className="page-title">Joy Detail</h1>
      <p>Viewing joy with ID: <strong>{id}</strong></p>
      <Link to="/gallery" className="btn">← Back to Gallery</Link>
    </section>
  );
}
