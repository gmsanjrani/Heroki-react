import React from "react";
import "../css/stats.css";
function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <h3 className="stats-heading text-center my-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          voluptatibus.
        </h3>
        <div className="grid grid-3 text-center my-4">
          <div>
            <i className="fas fa-server fa-3x"></i>
            <h3>10,348,408</h3>
            <p className="text-secondary">Deployement</p>
          </div>
          <div>
            <i className="fas fa-upload fa-3x"></i>
            <h3>978 TB</h3>
            <p className="text-secondary">Published</p>
          </div>
          <div>
            <i className="fas fa-project-diagram fa-3x"></i>
            <h3>2,348,408</h3>
            <p className="text-secondary">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
