import React from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount.jsx";

const ItemDetail = ({ item }) => {
  const { addItem } = useCart();

  const handleAdd = (quantity) => {
    addItem(item, quantity);
  };

  return (
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h2>{item.title ?? item.name}</h2>
        <p className="text-secondary">{item.description}</p>
        <p className="fw-bold">${item.price}</p>

        <ItemCount onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
