import React from 'react';
import cappadoce from '../../assets/img/cappadoce.webp';
import classes from './Banner.module.css';
import SearchBox from "../SearchBox/SearchBox";
import { Link } from "react-router-dom";

const Banner = (props) => {
    return (
      <div className={classes.banner}>
        <div className={classes.bg}>
          <img
            src={cappadoce}
            className={classes.cover}
            alt="Cappadocia adventure"
          />
          <div className={classes.content}>
            <h1 className={classes.mainTitle}>{props.mainTitle}</h1>
            <div className={classes.links}>
              <Link to={"/services"} className={classes.btn}>
                Book a photoshoot
              </Link>
              <Link to={"/locations"} className={classes.btn}>
                Book a location
              </Link>
            </div>
          </div>
           <SearchBox /> 
        </div>
      </div>
    );
};

export default Banner;