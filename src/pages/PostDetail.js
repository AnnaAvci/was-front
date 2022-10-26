import React from "react";
import contactImg from "../assets/img/contact.webp";
import "./PostDetail.css";

const PostDetail = () => {

  return (
    <section className = "PostDetail">
    <h1>Parisian apartment</h1>
    <div className="imgBox">
        <img src="../img/paris.webp" alt="building with balcony" className="postImg"/>
        <img src="../img/paris.webp" alt="building with balcony" className="postImg"/>
        <img src="../img/paris.webp" alt="building with balcony" className="postImg"/>
    </div>
    <div className="post-info">
        <div className="basic-post-info">
            <div className="country">France</div>
            <div className="city">Paris</div>
            <div className="price">15 $ per hour</div>
        </div>
        <div className="commentBox">
            <div className="comment">
                <img src="../img/user4.png" alt="user" className="userPicture"/>
                <p className="commenterName">John Smith</p>
                <p className="commentText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam officia suscipit dolor voluptas officiis iusto ad odit impedit placeat praesentium ratione laborum atque ipsum autem, quos deleniti earum nisi.
                    Sapiente dolor alias eius, in, necessitatibus sequi reiciendis perferendis a mollitia dolorem possimus incidunt dolores debitis veniam corrupti aliquam facilis. Facere ipsa doloremque culpa repellendus ea eius esse. Blanditiis, nesciunt!
                </p>
            </div>
            <div className="comment">
                <img src="../img/user4.png" alt="user" className="userPicture"/>
                <p className="commenterName">John Smith</p>
                <p className="commentText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam officia suscipit dolor voluptas officiis iusto ad odit impedit placeat praesentium ratione laborum atque ipsum autem, quos deleniti earum nisi.
                    Sapiente dolor alias eius, in, necessitatibus sequi reiciendis perferendis a mollitia dolorem possimus incidunt dolores debitis veniam corrupti aliquam facilis. Facere ipsa doloremque culpa repellendus ea eius esse. Blanditiis, nesciunt!
                </p>
            </div>
            <p>Leave a comment</p>
            <textarea name="commentTextArea" cols="30" rows="10" className="commentTextArea"></textarea>
            <input type="submit" value="Send"/>
        </div>
        <div className="book">

        </div>
    </div>
</section>

  );
};

export default PostDetail;
