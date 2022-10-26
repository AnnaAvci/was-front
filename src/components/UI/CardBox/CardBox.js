import React from 'react';
import classes from './CardBox.module.css';

const CardBox = (props) => {
    return(
        <div className={classes.cardBox}>
            {props.children}
        </div>
    )
}

export default CardBox;