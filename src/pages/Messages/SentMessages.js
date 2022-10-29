import React from 'react';
import classes from './SentMessages.module.css'
import userImg from "../../assets/img/user.png";

const SentMessages = () => {
    return (
      <div className={classes.sentMessages}>
        <h1>Sent Messages</h1>
        <div className={classes.messageBody}>
          <div className={classes.senderInfo}>
            <img src={userImg} alt="sender" className={classes.userImg} />
            John Smith
          </div>
          <p className={classes.messageText}>
            This is a message I sent to another user
          </p>
        </div>
        <div className={classes.messageBody}>
          <div className={classes.senderInfo}>
            <img src={userImg} alt="sender" className={classes.userImg} />
            John Smith
          </div>
          <p className={classes.messageText}>
            This is a message I sent to another user
          </p>
        </div>
        <div className={classes.messageBody}>
          <div className={classes.senderInfo}>
            <img src={userImg} alt="sender" className={classes.userImg} />
            John Smith
          </div>
          <p className={classes.messageText}>
            This is a message I sent to another user
          </p>
        </div>
      
      </div>
    );
};

export default SentMessages;