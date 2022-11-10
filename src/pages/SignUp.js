import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../components/Header";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      {
        email: email,
        username: username,
        password: password,
        newsletter: isChecked,
      }
    );
    console.log(response.data);

    Cookies.set("token", response.data.token, { expires: 7 });
  };
  const handleChecked = (event) => {
    const value = event.target.checked;
    setIsChecked(value);
  };

  return (
    <>
      <div className="container">
        <Header />
      </div>
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
              type="checkbox"
              name="subscribe"
              checked={isChecked}
              onChange={handleChecked}
            />
            <label For="subscribe">S'inscrire à notre newsletter</label>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            harum fuga maxime.
          </p>
          <input type="submit" value="S'inscrire" name="Signup" />
          <a href="http://google.com">Tu as déjà un compte ? Connecte toi !</a>
        </form>
      </div>
    </>
  );
};
export default SignUp;