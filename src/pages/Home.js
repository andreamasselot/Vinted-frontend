import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers?page=1&limit=10"
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
      <section className="container">
        <Header />
      </section>
      <div className="banner"></div>
      <section className="container offers-section">
        {data.offers.map((elem) => {
          //console.log(elem);
          return (
            <div className="offers-container" key={elem._id}>
              {elem.owner && <p>{elem.owner.account.username}</p>}

              <img src={elem.product_image.secure_url} alt="phot" />
              <p>{elem.product_price} €</p>
              <p>{elem.product_details[1].TAILLE}</p>
              <p>{elem.product_details[0].MARQUE}</p>
            </div>
          );
        })}
      </section>

      <Link to={"/offers"}>Go to offers</Link>
    </>
  );
};
export default Home;
