import logo from "../assets/img/vintedlogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { Range } from "react-range";
const Header = (props) => {
  return (
    <>
      <section className="container">
        <header>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <div className="research">
            <input
              type="text"
              name="search"
              placeholder="Recherche des articles"
              value={props.search}
              //onChange={event.target.value}
            />
            <p className="research-icon">
              <FontAwesomeIcon icon="magnifying-glass" />
            </p>
          </div>

          <div className="button-1">
            {props.token ? (
              <button
                className="deco"
                onClick={() => {
                  props.handleToken();
                }}
              >
                Se déconnecter
              </button>
            ) : (
              <div className="login-buttons">
                <Link to={"/signup"}>S'inscrire</Link>
                <Link to={"/login"}>Se connecter</Link>
              </div>
            )}

            <button className="button-2">Vends tes articles</button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
