import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <span>
        <Link className="link-menu" to="/">
          Characters
        </Link>
      </span>
      <span>
        <Link className="link-menu" to="/comics">
          Comics
        </Link>
      </span>
      <button>Se déconnecter</button>
      <button>S'inscrire</button>
      <button>Se connecter</button>
      <div></div>
    </nav>
  );
};
export default Menu;
