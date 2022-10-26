import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <Link to='/postdetail'>
      <div className={classes.card}>
        <div className={classes.imgBx}>
          <img src={props.imgUrl} alt="house with a balcony" />
        </div>
        <div className={classes.content}>
          <div className={classes.contentBx}>
            <h3>
              {props.title}
              <br />
              <span>{props.price} $ per hour</span>
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;