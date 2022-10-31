import React from "react";
import classes from "./NewComment.module.css";

const NewComment = () => {
  return (
    <div className={classes.commentBody}>
      <textarea className={classes.commentInput}/>
      <button type="submit" className={classes.submit}>
        Submit comment
      </button>
    </div>
  );
};

export default NewComment;
