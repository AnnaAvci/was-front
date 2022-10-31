import React from 'react';
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { CiInstagram, CiFacebook, CiTwitter } from "react-icons/ci";


const Footer = () => {
  return (
      <div id={classes.footer}>
        <Link to="/terms-and-conditions" className={classes.link}>Terms and conditions</Link>
          <div className={classes.followUs}>
              <p>
                  Follow Us :
              </p>
              <ul className={classes.socialLink}>
                  <li className={classes.sci}>
                      <CiInstagram color={"#000"} fontSize={"1.5em"}/>
                  </li>
                  <li className={classes.sci}>
                      <CiFacebook color={"#000"} fontSize={"1.5em"}/>
                  </li>
                  <li className={classes.sci}>
                      <CiTwitter color={"#000"} fontSize={"1.5em"}/>
                  </li>
              </ul>
          </div>

      </div>
    );
};

export default Footer;