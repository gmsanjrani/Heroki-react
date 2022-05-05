import React from "react";
import "../css/showcase.css";

function ShowCase() {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>Easier Deployement</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est,
            officia similique at accusamus nulla ex? Placeat temporibus facere
            quasi.
          </p>
          <a href="/" className="btn btn-outline">
            Read More
          </a>
        </div>
        <div className="showcase-form card">
          <h2>Request a Demo</h2>
          <form>
            <div className="form-control">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="emial"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ShowCase;
