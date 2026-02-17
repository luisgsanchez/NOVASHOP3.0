
// Base de datos simulada
export const products = [
  { id: 1, title: "Forro Real Madrid", category: "forros", price: 30000, stock: 5, description: "Forro protector del Real Madrid" },
  { id: 2, title: "Forro Barcelona", category: "forros", price: 28000, stock: 5, description: "Forro protector del Barcelona" },
  { id: 3, title: "Forro Selección Colombia", category: "forros", price: 32000, stock: 5, description: "Forro protector de la Selección Colombia" },

  { id: 4, title: "Cargador PSG", category: "cargadores", price: 45000, stock: 4, description: "Cargador rápido edición PSG" },
  { id: 5, title: "Cargador Manchester City", category: "cargadores", price: 47000, stock: 4, description: "Cargador rápido Manchester City" },
  { id: 6, title: "Cargador Juventus", category: "cargadores", price: 44000, stock: 4, description: "Cargador rápido Juventus" },

  { id: 7, title: "Celular Galaxy Edición Fútbol", category: "celulares", price: 1200000, stock: 3, description: "Samsung edición fútbol" },
  { id: 8, title: "Celular iPhone Edición Fútbol", category: "celulares", price: 4200000, stock: 3, description: "iPhone edición fútbol" },
  { id: 9, title: "Celular Xiaomi Fútbol Pro", category: "celulares", price: 1800000, stock: 3, description: "Xiaomi edición fútbol" },
];


// obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};


// obtener productos por categoría
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(p => p.category === categoryId));
    }, 500);
  });
};


// obtener producto por id
export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === Number(id)));
    }, 500);
  });
};
