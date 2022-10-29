import React from 'react';
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
      <div id={classes.footer}>
        <Link to="/terms-and-conditions" className={classes.link}>Terms and conditions</Link>
        <p>
          <i class="fa-brands fa-instagram"></i>
        </p>
        <p>
          <i class="fa-brands fa-pinterest"></i>
        </p>
        <p>
          <i class="fa-brands fa-facebook"></i>
        </p>
      </div>
    );
};

export default Footer;