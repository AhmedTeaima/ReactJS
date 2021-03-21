import React from "react";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join The Adventure Newseletter
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe any time .
        </p>
        <div className="input-areas">
          <form>
            <input
              type="eamil"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;
