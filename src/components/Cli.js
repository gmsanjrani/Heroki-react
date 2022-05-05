import React from "react";
import "../css/cli.css";
import img from "../images/cli.png";
function Cli() {
  return (
    <section className="cli">
      <div className="container grid">
        <img src={img} alt="" />
        <div className="card">
          <h3>Easy to Use, cross platform CLI</h3>
        </div>
        <div className="card">
          <h3>Deploy in Seconds</h3>
        </div>
      </div>
    </section>
  );
}

export default Cli;
