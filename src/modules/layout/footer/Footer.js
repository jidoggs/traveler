import React from "react";
import { Link, } from "react-router-dom";
import Logo from "../../../component/customIcons/Logo";

function Footer({ className }) {
  const year = new Date().getFullYear();
  return (
    <footer className={` footer ${className}`}>
      <div>
        <Logo className={"footer__logo"} />
        <ul className="footer__links">
          <li className="footer__links--item">
            <Link to="/">About us</Link>
          </li>
          <li className="footer__links--item">
            <Link to="/">Contact</Link>
          </li>
          <li className="footer__links--item">
            <Link to="/">FAQs</Link>
          </li>
          <li className="footer__links--item">
            <Link to="/">Testimonials</Link>
          </li>
          <li className="footer__links--item">
            <Link to="/">Facebook</Link>
          </li>
          <li className="footer__links--item">
            <Link to="/">Instagram</Link>
          </li>
          <li className="footer__links--item">
            <Link to="/">Twitter</Link>
          </li>
          <li className="footer__links--item">
            <Link to="/">Email us</Link>
          </li>
        </ul>
      </div>
        <p className="footer__copyright">
          ©<span>{year}</span> Traveler Technologies
        </p>
    </footer>
  );
}

export default Footer;
