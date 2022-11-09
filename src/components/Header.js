import logo from "../assets/img/vintedlogo.png";
const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />

        <div className="button-1">
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button className="button-2">Vends tes articles</button>
        </div>
      </header>
    </>
  );
};

export default Header;
