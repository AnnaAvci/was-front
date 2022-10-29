import React from 'react';
import classes from './NewMessage.module.css'

const NewMessage = () => {
    return (
      <div className={classes.newMessage}>
        <h1>New Message</h1>
        <div className={classes.messageBody}>
                <input type="text" className={classes.receiver } placeholder="User"/>
          <textarea className={classes.messageInput} placeholder="Your message"/>
          <button type="submit" className={classes.submit}>
            Send
          </button>
        </div>
      </div>
    );
};

export default NewMessage;