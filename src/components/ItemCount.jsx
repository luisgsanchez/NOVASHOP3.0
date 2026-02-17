import { useState } from "react";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1); 
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>−</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={increment}>+</button>

      <div>
        <button onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
