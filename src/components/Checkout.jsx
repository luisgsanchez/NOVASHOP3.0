import { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Completa nombre y email");
      return;
    }

    const fakeOrderId = "ORD-" + Date.now().toString(36).toUpperCase();
    setOrderId(fakeOrderId);
    clearCart();
  };

  if (cart.length === 0 && !orderId) {
    return (
      <section className="container py-4">
        <h2 className="text-white">Checkout</h2>
        <p className="text-secondary">No hay productos en el carrito.</p>
      </section>
    );
  }

  if (orderId) {
    return (
      <section className="container py-4">
        <h2 className="text-white">¡Compra realizada!</h2>
        <p className="text-secondary">Tu número de orden es:</p>
        <h4 className="text-warning">{orderId}</h4>
      </section>
    );
  }

  return (
    <section className="container py-4">
      <h2 className="text-white mb-3">Checkout</h2>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="form-control"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          className="form-control"
          value={form.phone}
          onChange={handleChange}
        />

        <h5 className="text-white">
          Total: ${getTotalPrice()}
        </h5>

        <button className="btn btn-warning">
          Confirmar compra
        </button>
      </form>
    </section>
  );
};

export default Checkout;