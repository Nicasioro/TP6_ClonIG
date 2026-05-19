import { useState } from "react";
import "./post.css";

function Post({ post, onSelect }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post">
      <div className="post-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
          className="avatar"
        />

        <span>{post.username}</span>
      </div>

      <img
        src={post.image}
        alt=""
        className="post-image"
        onClick={() => onSelect(post)}
      />

      <div className="post-actions">
        <button onClick={() => setLiked(!liked)}>
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      <p className="likes">
        {liked ? post.likes + 1 : post.likes} likes
      </p>

      <p className="caption">
        <strong>{post.username}</strong> {post.caption}
      </p>
    </div>
  );
}

export default Post;