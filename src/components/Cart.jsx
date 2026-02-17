import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { cart = [], removeItem, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-4">
        <h2>🛒 Carrito vacío</h2>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2>🛒 Carrito</h2>

      {cart.map(prod => (
        <div
          key={prod.id}
          style={{ borderBottom: "1px solid gray", marginBottom: 10 }}
        >
          <h4>{prod.title}</h4>
          <p>Cantidad: {prod.quantity}</p>
          <p>Subtotal: ${prod.price * prod.quantity}</p>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeItem(prod.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <h3>Total: ${getTotalPrice()}</h3>

      <button className="btn btn-warning" onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
