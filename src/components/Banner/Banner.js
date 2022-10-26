import React from 'react';
import capadoce from '../../assets/img/capadoce.webp';
import classes from './Banner.module.css';
import SearchBox from "../SearchBox/SearchBox";

const Banner = (props) => {
    return (
        <div className={classes.banner}>
            <div className={classes.bg}>
                <img src={capadoce} className={classes.cover} alt="Cappadocia adventure"/>
                <div className={classes.content}>
                    <h2>{props.mainTitle}</h2>
                    <a href="#" className={classes.btn}>Book Now</a>
                </div>
                <SearchBox/>
            </div>
        </div>
    );
};

export default Banner;