import React from 'react';
import Review from './Review';
import { FiAirplay } from "react-icons/fi";

function App() {
  return(
    <main>
      <section className="container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review/>
      </section>
    </main>

  )
}

export default App;
