import React from "react";
import { Link } from "react-router-dom";

const DetailsCharacters = () => {
    return (
      <>
    <div className="card mb-3" style={{"maxWidth": "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://imgwoman.elperiodico.com/73/3c/c0/ewan-mcgregor-caracterizado-obi-wan-kenobi.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Nombre</h5>
        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias pariatur maxime sit voluptas! Officiis esse, deserunt fugiat animi similique voluptate culpa illum perferendis. Quam sint minima asperiores mollitia. Consectetur, explicabo.</p>
        <p className="card-text"><small className="text-muted">features</small></p>
      </div>
    </div>
  </div>
</div>
    </> 
    );
  };
  
  export default DetailsCharacters;
  