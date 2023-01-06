import { Link, useNavigate } from "react-router-dom";
const Products = () => {
  const Navigate = useNavigate();

  const buttonClickHandler = () => {
    Navigate("/welcome");
  };
  return (
    <section>
      <h1> Product page</h1>
      <ul>
        <li>
          <Link to="/products/1 ">Books</Link>
        </li>
        <li>
          <Link to="/products/2 ">Series</Link>
        </li>
      </ul>
      <button onClick={buttonClickHandler}>Go to Welcome Page</button>
    </section>
  );
};

export default Products;
