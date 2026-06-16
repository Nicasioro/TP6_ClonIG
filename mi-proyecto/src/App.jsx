import { useEffect, useState } from "react";
import Header from "./header";
import Feed from "./components/feed";
import Profile from "./components/profile";
import PostModal from "./components/postmodal";
import { getCats } from "./services/catapi";
import user from "./data/user";
import "./index.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const data = await getCats();

        const formattedPosts = data.map((cat, index) => ({
          id: cat.id,
          image: cat.url,
          username: `cat_user_${index + 1}`,
          likes: Math.floor(Math.random() * 5000),
          caption: "Miau miau 🐱",
          comments: [
            "sigmaboy132: Que lindo gato 😺",
            "trueCat: Necesito adoptarlo YA",
            "xXx_NotADog_xXx: El mejor michi del mundo"
          ],
          date: "Hace 2 horas"
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="app">
      <Header
        showProfile={showProfile}
        setShowProfile={setShowProfile}
      />

      {showProfile ? (
        <Profile user={user} posts={posts} />
      ) : (
        <Feed posts={posts} onSelect={setSelectedPost} />
      )}

      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}

export default App;