import React from "react";
import "../css/footer.css";
function Footer() {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container grid grid-3">
        <div>
          <h1>Heroki</h1>
          <p>Copyright @copy; 2021</p>
        </div>

        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentstions</a>
            </li>
          </ul>
        </nav>
        <div className="socials">
          <a href="/">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="/">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
