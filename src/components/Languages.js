import React from "react";
import "../css/languages.css";
import logo1 from "../images/logos/node.png";
import logo2 from "../images/logos/python.png";
import logo3 from "../images/logos/csharp.png";
import logo4 from "../images/logos/ruby.png";
import logo5 from "../images/logos/php.png";
import logo6 from "../images/logos/scala.png";
import logo7 from "../images/logos/clojure.png";
function Languages() {
  return (
    <section className="languages">
      <h2 className="md text-center my-2">Supported Languages</h2>
      <div className="container flex">
        <div className="card">
          <h4>Node.js</h4>
          <img src={logo1} alt="" />
        </div>
        <div className="card">
          <h4>Pyhton</h4>
          <img src={logo2} alt="" />
        </div>
        <div className="card">
          <h4>C#</h4>
          <img src={logo3} alt="" />
        </div>
        <div className="card">
          <h4>Ruby</h4>
          <img src={logo4} alt="" />
        </div>
        <div className="card">
          <h4>PHP</h4>
          <img src={logo5} alt="" />
        </div>
        <div className="card">
          <h4>Scala</h4>
          <img src={logo6} alt="" />
        </div>
        <div className="card">
          <h4>Clojuer</h4>
          <img src={logo7} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Languages;
