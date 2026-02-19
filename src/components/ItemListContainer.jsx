import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      //  Si hay categoría → filtra
      getProductsByCategory(categoryId).then((res) => {
        setItems(res);
        setLoading(false);
      });
    } else {
      //  Si no hay categoría → todo
      getProducts().then((res) => {
        setItems(res);
        setLoading(false);
      });
    }
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
