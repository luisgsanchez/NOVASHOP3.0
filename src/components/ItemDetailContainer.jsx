import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          const producto = {
            id: res.id,
            ...res.data(),
          };

          console.log("Detalle Firestore:", producto);
          setDetail(producto);
        } else {
          console.log("No existe el producto");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

  }, [itemId]);

  return (
    <section className="container py-4">
      {loading ? (
        <p className="text-secondary">Cargando detalle...</p>
      ) : detail ? (
        <ItemDetail {...detail} />
      ) : (
        <p className="text-danger">Producto no encontrado</p>
      )}
    </section>
  );
};

export default ItemDetailContainer;
