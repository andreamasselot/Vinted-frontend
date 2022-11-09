import { Link } from "react-router-dom";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <section className="container">
        <Header />
      </section>
      <div className="banner"></div>
      <section className="container"></section>
      <Link to={"/offers"}>Go to offers</Link>
    </>
  );
};
export default Home;
