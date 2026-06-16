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
  " che dale muchachos, somos todos Gatónimos, un minimo de onda metanle :(",
  " alguien mas ve al gato parpadear o ya me tengo que preocupar?",
" vendi mi heladera para darle like a esta foto",
" este gato sabe demasiado, no confio",
" me robo la identidad en 2017 y nadie me cree",
" si este gato se presenta a presidente lo voto",
" hola gato te acordas de mi? estuvimos en la guerra juntos",
" yo era feliz hasta que vi este gato mas fachero que yo",
" denuncien esta publicacion por exceso de facha",
" recien le mostre esta foto a mi perro y se puso a llorar",
" este gato me debe 15 pesos",
" la tercera foto contiene secretos de estado",
" yo y los pibes cuando encontramos una caja de carton",
" alguien mas escucha musica de ascensor cuando mira esta foto?",
" este gato tiene pinta de saber exactamente donde vivo",
" perdon llegue tarde estaba peleando contra una impresora",
" comentario dedicado a matewito "
];

const users = ["sigmaboy132",
  "trueCat",
  "xXx_NotADog_xXx",
  "BIGTTT",
  "Gatónimo43",
  "elGatoFederal",
  "juancho_2007",
  "MichiDestroyer99",
  "licenciadoEnMiau",
  "gato_con_deuda",
  "ElTioDelGato",
  "perroInfiltrado",
  "maullidoCuantico",
  "nacho_empanada",
  "gatardo3000",
  "elultimomichi",
  "SeñorBigotes",
  "antiCroquetas",
  "GatoAnonimo77",
  "tostadora_humana"];
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