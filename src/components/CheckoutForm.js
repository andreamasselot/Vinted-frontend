import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "id de l'acheteur",
      });
      const stripeToken = stripeResponse.token.id;
      // console.log(stripeToken);
      const response = await axios.post(
        "https://site--vinted-backend--fhdp7f7ffy5p.code.run/payment",
        {
          stripeToken,
          title: props.title,
          amount: props.price,
        }
      );
      props.state(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <input className="pay-button" type="submit" value="Pay" />
      </form>
    </>
  );
};

export default CheckoutForm;
