import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/login",
      {
        email: email,
        password: password,
      }
    );
    props.handleToken(response.data.token);
    navigate("/");
  };
  return (
    <>
      <div className="form-container">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input-form"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="input-form"
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={handlePasswordChange}
          />
          <input type="submit" name="login" value="Se connecter" />
          <Link to={"/signup"}>Pas encore de compte ? Inscris toi ici</Link>
        </form>
      </div>
    </>
  );
};
export default Login;
