import React from "react";
import userPic from "../../assets/img/user.png";
import classes from "./Comment.module.css";

const Comment = (props) => {
    return (
        <section className={classes.comment}>
            <div className={classes.commenterInfo}>
                <img
                src={props.userPic}
                alt="commenter"
                className={classes.userPic}
                />
                    <p>{props.name}</p>
            </div>
            <div className={classes.commentText}>
                <p>
                {props.text}
                </p>
            </div>
        </section>
    )
    

};

export default Comment;
