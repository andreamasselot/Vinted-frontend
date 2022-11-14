import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
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
      "https://site--vinted-backend--fhdp7f7ffy5p.code.run/user/signup",

      {
        email: email,
        username: username,
        password: password,
        newsletter: isChecked,
      }
    );
    console.log(response.data);
    props.handleToken(response.data.token);
    navigate("/");
  };
  const handleChecked = (event) => {
    const value = event.target.checked;
    setIsChecked(value);
  };

  return (
    <>
      <div className="form-container">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input-form"
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={handleUsernameChange}
          />
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
          <span>
            <input
              className="checkbox"
              type="checkbox"
              name="subscribe"
              checked={isChecked}
              onChange={handleChecked}
            />
            <label For="subscribe">S'inscrire à notre newsletter</label>
          </span>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input
            className="blue"
            type="submit"
            value="S'inscrire"
            name="Signup"
          />
          <Link to={"/login"}>Tu as déjà un compte ? Connecte toi !</Link>
        </form>
      </div>
    </>
  );
};
export default SignUp;
