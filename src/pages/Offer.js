import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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
      <div className="background">
        <div className="offer-container">
          <div className="image-container">
            <img src={data.product_image.secure_url} alt="vetement" />
          </div>
          <div className="card">
            <div className="card-container">
              {data.product_details.map((elem, index) => {
                const objectKey = Object.keys(elem)[0];
                return (
                  <>
                    <div className="card-infos" key={index}>
                      <p>{objectKey}</p>

                      <p>{elem[objectKey]}</p>
                    </div>
                  </>
                );
              })}
              <div className="string"></div>
              <div>
                <p>{data.product_name}</p>
                <p>{data.product_description}</p>
              </div>
            </div>
            {data.owner ? (
              <div className="users">
                <img
                  className="avatars"
                  src={data.owner.account.avatar.secure_url}
                  alt="vetements"
                />
                <p> {data.owner.account.username}</p>
              </div>
            ) : (
              <div className="empty-div"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Offer;
