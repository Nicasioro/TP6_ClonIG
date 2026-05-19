import "./profile.css";

function Profile({ user, posts }) {
  return (
    <div className="profile">

      <div className="profile-top">

        <img
          src={user.profileImage}
          alt=""
          className="profile-avatar"
        />

        <div className="profile-info">

          <div className="profile-header">
            <h2>{user.username}</h2>

            <button>Editar perfil</button>
          </div>

          <div className="profile-stats">
            <span>
              <strong>{user.posts}</strong> publicaciones
            </span>

            <span>
              <strong>{user.followers}</strong> seguidores
            </span>

            <span>
              <strong>{user.following}</strong> seguidos
            </span>
          </div>

          <div className="profile-bio">
            <h4>{user.name}</h4>
            <p>{user.bio}</p>
          </div>

        </div>

      </div>

      <div className="profile-posts">
        {posts.map((post) => (
          <img
            key={post.id}
            src={post.image}
            alt=""
            className="profile-post-image"
          />
        ))}
      </div>

    </div>
  );
}

export default Profile;