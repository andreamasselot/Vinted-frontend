import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/offers/${props.elem._id}`}>
      <div className="offers-container">
        {props.elem.owner ? (
          <div className="users">
            <img
              className="avatars"
              src={props.elem.owner.account.avatar.secure_url}
              alt="avatar"
            />
            <p> {props.elem.owner.account.username}</p>
          </div>
        ) : (
          <p className="empty-div"></p>
        )}

        <img src={props.elem.product_image.secure_url} alt="phot" />
        <p>{props.elem.product_price} €</p>
        <p>{props.elem.product_details[1].TAILLE}</p>
        <p>{props.elem.product_details[0].MARQUE}</p>
      </div>
    </Link>
  );
};

export default Card;
