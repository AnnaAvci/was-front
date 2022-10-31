import React from "react";
import userImg from "../assets/img/user.png";
import urlImg from "../assets/img/paris.webp";
import classes from "./PostDetail.module.css";
import CommentBox from "../containers/CommentBox/CommentBox";

const PostDetail = (props) => {

  return (
    <section className={classes.postDetail}>
      <h1>Parisian apartment</h1>
      <div className={classes.imgBox}>
        <img
          src={urlImg}
          alt="house with balcony"
          className={classes.postImg}
        />
        <img
          src={urlImg}
          alt="house with balcony"
          className={classes.postImg}
        />
        <img
          src={urlImg}
          alt="house with balcony"
          className={classes.postImg}
        />
      </div>
      <div className={classes.postInfo}>
          <div className={classes.basicPostInfo}>
              <div className={classes.country}>France</div>
              <div className={classes.city}>Paris</div>
              <div className={classes.price}>15 $ per hour</div>
          </div>
        <CommentBox />
      </div>
    </section>
  );
};

export default PostDetail;
