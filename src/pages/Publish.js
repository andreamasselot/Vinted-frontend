import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState({});

  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };
  const handleBrandChange = (event) => {
    const value = event.target.value;
    setBrand(value);
  };
  const handleSizeChange = (event) => {
    const value = event.target.value;
    setSize(value);
  };
  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  };
  const handleConditionChange = (event) => {
    const value = event.target.value;
    setCondition(value);
  };
  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };
  const handlePlaceChange = (event) => {
    const value = event.target.value;
    setPlace(value);
  };
  const handleChecked = (event) => {
    const value = event.target.checked;
    setIsChecked(value);
  };
  const handleFileChange = (event) => {
    const value = event.target.files[0];
    setFile(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("picture", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", place);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    try {
      await axios.post(
        "https://site--vinted-backend--fhdp7f7ffy5p.code.run/offer/publish",
        formData,
        {
          headers: {
            authorization: "Bearer " + props.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.error("An error occurred");
    }
  };

  return (
    <>
      {!props.token && <Navigate to={"/login"} />}
      <section className="background-2">
        {" "}
        <h1>Vends ton article</h1>
        <div className="publish-offer-container">
          <form onSubmit={handleSubmit}>
            <div className="files publish-details flex">
              <label For="file">Ajoute une image</label>
              <input
                className="style-files"
                type="file"
                name="file"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <div className="publish-details">
                <h2>Title</h2>
                <input
                  type="text"
                  name="title-description"
                  placeholder="ex: Chemise Sézane verte"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="publish-details">
                <h2>Décris ton article</h2>
                <textarea
                  type="textarea"
                  rows="5"
                  cols="46"
                  name="description"
                  placeholder="ex: porté quelque fois, taille correctement"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
            <div>
              <div className="publish-details">
                <h2>Marque</h2>
                <input
                  type="text"
                  placeholder="ex: Zara"
                  name="brand"
                  value={brand}
                  onChange={handleBrandChange}
                />
              </div>
              <div className="publish-details">
                <h2>Taille</h2>
                <input
                  type="text"
                  placeholder="ex: L/40/12"
                  name="size"
                  value={size}
                  onChange={handleSizeChange}
                />
              </div>
              <div className="publish-details">
                <h2>Couleur</h2>
                <input
                  type="text"
                  placeholder="ex: Fushia"
                  name="color"
                  value={color}
                  onChange={handleColorChange}
                />
              </div>
              <div className="publish-details">
                <h2>Etat</h2>
                <input
                  type="text"
                  placeholder="ex: Neuf avec étiquette"
                  name="condition"
                  value={condition}
                  onChange={handleConditionChange}
                />
              </div>
              <div className="publish-details">
                <h2>Lieu</h2>
                <input
                  type="text"
                  placeholder="ex: Paris"
                  name="place"
                  value={place}
                  onChange={handlePlaceChange}
                />
              </div>
            </div>
            <div className="publish-details">
              <h2>Prix</h2>
              <div className="publish-details">
                <input
                  type="number"
                  placeholder="0,00€"
                  name="price"
                  value={price}
                  onChange={handlePriceChange}
                />
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={isChecked}
                  onChange={handleChecked}
                />
                <label For="checkbox">
                  Je suis intéressé(e) par les échanges{" "}
                </label>
              </div>
            </div>

            <input
              className="add"
              type="submit"
              name="ajouter"
              value="Ajouter"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Publish;
