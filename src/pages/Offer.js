import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../components/Header";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}/`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <section className="container">
        <Header />

        <div className="body">
          <div className="card">
            <div className="image-container">
              <img src={data.product_image.secure_url} alt="vetement" />
            </div>
            <div className="product-infos">
              <p>{data.product_price}</p>
              <p>
                <span>MARQUE </span>
                {data.product_details[0].MARQUE}
              </p>
              <p>
                <span>TAILLE </span>
                {data.product_details[1].TAILLE}
              </p>
              <p>
                <span>ÉTAT </span>
                {data.product_details[2].ETAT}
              </p>
              <p>
                <span>COULEUR </span>
                {data.product_details[3].COULEUR}
              </p>
              <p>
                <span>EMPLACEMENT </span>
                {data.product_details[4].EMPLACEMENT}
              </p>
              <div className="string"></div>
              <div>
                <h2>{data.product_name}</h2>
                <p>{data.product_description}</p>
                <div className="users">
                  <img
                    className="avatars"
                    src={data.owner.account.avatar.secure_url}
                    alt="avatar"
                  />
                  <p>{data.owner.account.username}</p>
                </div>
                <button>Acheter</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Offer;
