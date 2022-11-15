import { Elements } from "@stripe/react-stripe-js";

import { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51M4OQXKihl3YhCeJIcFAMthpOsKVMkK0GbScZlRr8o8YNPuEwR5lwWhyESi1WdAKRYFgor3FbqoUT7A8LO0cRvXj00gHgJcOGY"
);

const Payment = () => {
  const location = useLocation();
  const [completed, setCompleted] = useState(false);

  const fees = 0.59;
  const shipping = 1.18;
  const total = location.state.price + fees + shipping;
  return (
    <div className="background-3">
      <div className="container white">
        <div className="topsection-payment">
          <h1>Résumé de la commande</h1>
          <div className="prices-fees">
            <p>Commande</p> <p>{location.state.price} €</p>
          </div>
          <div className="prices-fees">
            <p>Frais protection acheteurs</p> <p>{fees} €</p>
          </div>
          <div className="prices-fees">
            <p>Frais de port</p> <p>{shipping} €</p>
          </div>
        </div>
        <div className="prices-fees bottomsection-payment">
          <h2>
            <span>Total</span>
          </h2>
          <p>
            <span> {total} €</span>
          </p>
        </div>
        <div className="bottomsection-payment">
          <p className="conclusion">
            Il ne vous reste plus qu'un étape pour vous offrir{" "}
            <span>{location.state.title}.</span> Vous allez payer{" "}
            <span>{total} €</span> (frais de protection et frais de port
            inclus).
          </p>
          {completed ? (
            <p>Merci pour votre achat.</p>
          ) : (
            <Elements className="element" stripe={stripePromise}>
              <CheckoutForm
                title={location.state.title}
                price={total}
                state={setCompleted}
              />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};
export default Payment;
