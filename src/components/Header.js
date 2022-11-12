import logo from "../assets/img/vintedlogo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <section className="container">
        <header>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>

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
              <div>
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
