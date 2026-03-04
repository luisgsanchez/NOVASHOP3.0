import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <section className="container py-4">
        <h2 className="text-white">Carrito</h2>
        <p className="text-secondary">Carrito vacío</p>
        <Link className="btn btn-warning" to="/">
          Ir al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="container py-4">
      <h2 className="text-white mb-3">Carrito</h2>

      <div className="d-flex flex-column gap-3">
        {cart.map((p) => (
          <div key={p.id} className="card bg-dark text-white">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{p.title ?? p.name}</h5>
                <small className="text-secondary">
                  {p.quantity} x ${p.price} = ${p.quantity * p.price}
                </small>
              </div>

              <button
                className="btn btn-outline-warning"
                onClick={() => removeItem(p.id)}
              >
                Quitar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 d-flex justify-content-between align-items-center">
        <h4 className="text-white m-0">Total: ${getTotalPrice()}</h4>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-light" onClick={clearCart}>
            Vaciar
          </button>

          <Link className="btn btn-warning" to="/checkout">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;