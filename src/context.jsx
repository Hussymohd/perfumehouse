import { createContext, useEffect, useState } from "react";
import {toast} from "react-toastify"
import Cart from "./components/Cart";

export const CartContext = createContext();
// [1,2]

const getItem = JSON.parse(localStorage.getItem("cart")) || [];

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getItem);

  //store cart in locale storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //add to cart
  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
    toast.success('Product Added');
  };
  // calc total price
  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);
  const removeItemFromCart = (item) => {
    const remainingItems = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(remainingItems);
     toast.success("Product Removed");
  };

  const handleIncrease = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    setCart(updatedCart);
  };

  const handleDecrease = (item) => {
    const outdatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(outdatedCart);
  };

  const [showModal, setShowModal] = useState(false)
  const confirmOrder = () => {
    setShowModal(true);
  };
  const startNewOrder = () => {
    setCart([]);
    setShowModal(false);
  };

   return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalPrice,
        removeItemFromCart,
        handleIncrease,
        handleDecrease,
        showModal, setShowModal, confirmOrder,
        startNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
