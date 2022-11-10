import logo from "../assets/img/vintedlogo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />

        <div className="button-1">
          <Link to={"/signup"}>S'inscrire</Link>
          <Link to={"/login"}>Se connecter</Link>
          <button className="button-2">Vends tes articles</button>
        </div>
      </header>
    </>
  );
};

export default Header;
