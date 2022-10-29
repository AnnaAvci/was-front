import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <Link to="/postdetail" className={classes.link}>
      <div className={classes.card}>
        <div className={classes.imgBx}>
          <img src={props.imgUrl} alt="house with a balcony" />
        </div>
        <div className={classes.content}>
          <div className={classes.contentBx}>
            <p>
              A perfect villa for birthdays, offsites, stag parties: 30 beds,
              heated pool, basketball, pétanque, volleyball, soccer, billiards..
            </p>
          </div>
        </div>
      </div>
      <h3 className={classes.h3}>
        {props.title}
        <br />
        <span>{props.price} $ per hour</span>
      </h3>
    </Link>
  );
}

export default Card;