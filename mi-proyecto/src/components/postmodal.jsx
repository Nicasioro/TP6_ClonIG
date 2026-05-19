import "./postmodal.css";

function PostModal({ post, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <button className="close-btn" onClick={onClose}>
          X
        </button>

        <img
          src={post.image}
          alt=""
          className="modal-image"
        />

        <div className="modal-content">
          <h2>{post.username}</h2>

          <p>{post.caption}</p>

          <h4>{post.likes} likes</h4>

          <div className="comments">
            {post.comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>

          <span>{post.date}</span>
        </div>

      </div>
    </div>
  );
}

export default PostModal;