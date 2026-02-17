import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart">
      🛒 <span>{totalQuantity()}</span>
    </Link>
  );
};

export default CartWidget;
