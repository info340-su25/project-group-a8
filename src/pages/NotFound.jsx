import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container">
      <h1 className="page-title">Page not found</h1>
      <p>We couldn’t find that page.</p>
      <Link to="/" className="btn">Go Home</Link>
    </section>
  );
}
