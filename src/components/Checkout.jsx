import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Completa nombre, email y teléfono");
      return;
    }

    if (!cart || cart.length === 0) {
      alert("Carrito vacío");
      return;
    }

    const order = {
      buyer: {
        name: form.name,
        email: form.email,
        phone: form.phone,
      },
      items: cart.map((p) => ({
        id: p.id,
        name: p.name ?? p.title,
        price: p.price,
        quantity: p.quantity,
        subtotal: p.price * p.quantity,
      })),
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.log(err);
      alert("Error creando la orden");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <section className="container py-4">
        <h2 className="text-white">¡Compra realizada!</h2>
        <p className="text-secondary">Tu ID de orden es:</p>
        <h4 className="text-warning">{orderId}</h4>
      </section>
    );
  }

  if (!cart || cart.length === 0) {
    return (
      <section className="container py-4">
        <h2 className="text-white">Checkout</h2>
        <p className="text-secondary">No hay productos en el carrito.</p>
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

        <h5 className="text-white">Total: ${getTotalPrice()}</h5>

        <button className="btn btn-warning" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </section>
  );
};

export default Checkout;
