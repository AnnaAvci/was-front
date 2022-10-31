import React from 'react';
import classes from './TabRow.module.css'

const TabRow = (props) => {
    return (
        <div className={classes.tabRow}>
            {props.children}
        </div>
    );
};

export default TabRow;