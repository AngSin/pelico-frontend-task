import './App.css'
import {ProductsList} from "./components/ProductsList";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {ProductOverview} from "./components/ProductOverview";
import {CartContext} from "./context/CartContext";
import {useState} from "react";
import {Product} from "./types/Product";
import {CartItem} from "./types/Cart";
import {Cart} from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList />,
    // loader: rootLoader,
  },
  {
    path: "/:id",
    element: <ProductOverview />,
    // loader: teamLoader,
  },
  {
    path: "/cart",
    element: <Cart />
  }
]);

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingIndex < 0) {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    } else {
      setCartItems(
        cartItems.map(item => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      )
    }
  };

  const removeFromCart = (id: number) => {
    const newCartItems = cartItems.reduce<CartItem[]>(
      (accumulator, cartItem) => {
        if (cartItem.id === id) {
          const updatedQuantity = cartItem.quantity - 1;
          if (updatedQuantity === 0) {
            return accumulator;
          }
          return [...accumulator, ({
            ...cartItem,
            quantity: updatedQuantity,
          })];
        }
        return [...accumulator, cartItem];
      },
      []
    );
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
