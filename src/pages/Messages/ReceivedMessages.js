import React from "react";
import classes from "./ReceivedMessages.module.css";
import userImg from "../../assets/img/user.png";


const ReceivedMessages = (props) => {

  return (
    <div className={classes.receivedMessages}>
      <h1>Received Messages</h1>
      <div className={classes.messageBody}>
        <div className={classes.senderInfo}>
          <img src={userImg} alt="sender" className={classes.userImg} />
          John Smith
        </div>
        <p>Hello, I'd like to book your property or a photoshoot</p>
      </div>
      <div className={classes.messageBody}>
        <div className={classes.senderInfo}>
          <img src={userImg} alt="sender" className={classes.userImg} />
          John Smith
        </div>
        <p>Hello, I'd like to book your property or a photoshoot</p>
      </div>
      <div className={classes.messageBody}>
        <div className={classes.senderInfo}>
          <img src={userImg} alt="sender" className={classes.userImg} />
          John Smith
        </div>
        <p>Hello, I'd like to book your property or a photoshoot</p>
      </div>
    
    </div>
  );
};

export default ReceivedMessages;
