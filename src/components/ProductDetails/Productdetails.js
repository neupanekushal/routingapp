import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();

  return <h1>Product Details {params.ProductId}</h1>;
};

export default ProductDetails;
