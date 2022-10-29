import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Messages.module.css';
import ReceivedMessages from './ReceivedMessages';
import SentMessages from './SentMessages';
import NewMessage from './NewMessage';

const Messages = () => {
  return (
    <div className={classes.messages}>
      <div className={classes.messageMenu}>
        <Link to={"/messages/received-messages"}>
          <button className={classes.btn}>Received Messages</button>
        </Link>
        <Link to={"/messages/sent-messages"}>
          <button className={classes.btn}>Sent Messages</button>
        </Link>
      </div>
          <ReceivedMessages />
          <NewMessage />
    </div>
  );
};

export default Messages;