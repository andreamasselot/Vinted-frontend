import logo from "../assets/img/vintedlogo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
const Header = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const newToken = Cookies.get("token");
    setToken(newToken);
  }, []);
  return (
    <>
      <section className="container">
        <header>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>

          <div className="button-1">
            {token ? (
              <button
                className="deco"
                onClick={() => {
                  Cookies.remove("token");
                  setToken("");
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
