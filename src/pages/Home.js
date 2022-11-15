import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import image from "../assets/img/dechire.svg";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--vinted-backend--fhdp7f7ffy5p.code.run/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="banner">
        <div className="container banner-flex">
          <div className="banner-content">
            <h2>Prêts à faire du tri dans vos placards ?</h2>
            <Link to={"/offer/publish"}>Commencer à vendre</Link>
          </div>
        </div>
        <img src={image} alt="déchirure" />
      </div>
      <div className=" hidden">
        <h2>Prêts à faire du tri dans vos placards ?</h2>
        <Link to={"/offer/publish"}>Commencer à vendre</Link>
      </div>
      <section className="container offers-section">
        {data.offers.map((elem) => {
          const id = elem._id;
          return <Card elem={elem} key={id} />;
        })}
      </section>
    </>
  );
};
export default Home;
