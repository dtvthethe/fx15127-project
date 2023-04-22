import React from 'react';
import { AlertCircle, CornerUpLeft } from 'react-feather';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <main className="container">
      <h1 className="mt-5" style={{color: "#701d1d"}}>
        <AlertCircle width={48} height={48} />
        <span className='align-middle'>Something went wrong :(</span>
      </h1>
      <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <Link to="/" style={{color: "#701d1d", textDecoration: "none", backgroundColor: "#701d1d", color: "#fff", padding: "5px 10px", borderRadius: 7, fontWeight: "bold"}}>
        <CornerUpLeft width={18} height={18} />
        <span>Home page</span>
      </Link>
    </main>
  );
}
