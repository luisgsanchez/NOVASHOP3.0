import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🛒 Agregar producto (FIX PROFESIONAL)
  const addItem = (item, quantity) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(prod => prod.id === item.id);

      if (itemExists) {
        return prevCart.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  //  Eliminar producto
  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== id));
  };

  //  Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  //  Cantidad total
  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  //  Precio total
  const getTotalPrice = () => {
    return cart.reduce(
      (acc, prod) => acc + prod.price * prod.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        getTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//  Hook personalizado
export const useCart = () => {
  return useContext(CartContext);
};
