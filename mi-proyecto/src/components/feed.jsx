import Post from "./post";
import "./feed.css";

function Feed({ posts, onSelect }) {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default Feed;