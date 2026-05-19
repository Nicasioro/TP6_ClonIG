import "./Header.css";

function Header({ showProfile, setShowProfile }) {
  return (
    <header className="header">
      <h1 className="logo">Catstagram</h1>

      <input
        type="text"
        placeholder="Buscar"
        className="search-input"
      />

      <button
        className="profile-button"
        onClick={() => setShowProfile(!showProfile)}
      >
        {showProfile ? "Feed" : "Perfil"}
      </button>
    </header>
  );
}

export default Header;