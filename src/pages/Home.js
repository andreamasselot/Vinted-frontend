import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers?page=1&limit=30"
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
      <div className="banner"></div>
      <section className="container offers-section">
        {data.offers.map((elem) => {
          const id = elem._id;
          return <Card id={elem._id} elem={elem} key={id} />;
        })}
      </section>
    </>
  );
};
export default Home;
