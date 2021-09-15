import React, { useState } from 'react';
import './random.css';


function Random({ randomNizer }) {
  return (
    <div>
<nav className="navbar navbar-light bg-maroon d-flex justify-content-center">
  {/* <div className="d-flex align-items-center text-center">
  <a className="navbar-brand" href="#">Default</a></div> */}
  <ul className="nav">
  {/* <li className="nav-item">
    <a className="nav-link active" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li> */}
  <li className="nav-item">
    <h1 className="text-center text-bold font-weight-bold display-2">Bloomberg</h1>
    <h4 className="tex-center news">News Feed RandomNizer</h4>

      {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Bloomberg
    </a> */}
  </li>
  </ul>
</nav>
<div className="col text-center">
       <button
           type="button"
           className="btn btn-primary text-center pt-2 mt-4"
           onClick={randomNizer}
         >
           Fetch News
         </button>
       </div>
    </div>
    
  );
}
export default Random;
