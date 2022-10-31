import React from "react";
import userPicture from "../../assets/img/user.png";
import Comment from "../Comment/Comment";
import classes from "./CommentBox.module.css";
import NewComment from "../NewComment/NewComment";


const CommentBox = () => {
  const commentList = [
    {
      userPic: userPicture,
      name: "User1",
      text: "Fantastic, I highly recommend it",
    },
    {
      userPic: userPicture,
      name: "User2",
      text: "Great",
    },
    {
      userPic: userPicture,
      name: "User3",
      text: "Amazing",
    },
    {
      userPic: userPicture,
      name: "User4",
      text: "Awesome",
    },

  ];

  return (
    <section className={classes.comments}>
      <h1>Comments</h1>
      {commentList.map((element) => (
        <Comment
          userPic={element.userPic}
          name={element.name}
          text={element.text}
        />
      ))}
    <NewComment/>
    </section>
  );
};

export default CommentBox;
