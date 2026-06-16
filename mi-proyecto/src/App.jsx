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
const captions = [
  "Qué lindo gato",
  "Modo siesta activado",
  "Hoy me siento fachero",
  "Miau.",
  "No me saquen fotos",
  "Yo no fui"
];

const commentsPool = [
  " ola Preciosa, avlame este es mi numero 12938746396 ",
  " Necesito adoptarlo YA",
  " El mejor michi del mundo",
  " Bombardeen Peru",
  " che dale muchachos, somos todos Gatónimos, un minimo de onda metanle :("
];

const users = ["sigmaboy132", "trueCat", "xXx_NotADog_xXx", "BIGTTT", "Gatónimo43"];
        const formattedPosts = data.map((cat, index) => ({
          id: cat.id,
          image: cat.url,
          username: `Gatónimo${index + 1}`,
          likes: Math.floor(Math.random() * 5000),
       caption: captions[Math.floor(Math.random() * captions.length)],

comments: Array.from({ length: 5 }, () =>
  `${users[Math.floor(Math.random() * users.length)]}: ${
    commentsPool[Math.floor(Math.random() * commentsPool.length)]
  }`
),
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