import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(Number(itemId)).then(setItem); 
  }, [itemId]);

  if (!item)
    return <p className="text-secondary container py-4">Cargando...</p>;

  return (
    <section className="container py-4">
      <ItemDetail item={item} />
    </section>
  );
};

export default ItemDetailContainer;
