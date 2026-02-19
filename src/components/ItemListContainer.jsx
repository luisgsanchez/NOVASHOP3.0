import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "productos");

    const consulta = categoryId
      ? query(productsCollection, where("category", "==", categoryId))
      : productsCollection;

    getDocs(consulta)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Productos:", list);
        setItems(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

  }, [categoryId]);

  return (
    <section className="container py-4">
      <h1 className="text-white mb-3">
        {categoryId ? `Categoría: ${categoryId}` : "Catálogo"}
      </h1>

      {loading ? (
        <p className="text-secondary">Cargando...</p>
      ) : (
        <ItemList items={items} />
      )}
    </section>
  );
};

export default ItemListContainer;
