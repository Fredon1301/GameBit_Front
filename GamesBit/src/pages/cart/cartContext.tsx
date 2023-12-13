import React, { createContext, useContext, useState, ReactNode } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  codProduct: string;

};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, newQuantity: number) => void;
  toggleMensagemVisivel: (id: number, quantity: number, total: number) => void;
  total: number;
};
const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  const addToCart = (item: CartItem) => {
    const total = item.price * 1; 
    setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1, total }]);
    setTotal((prevTotal) => prevTotal + total);
  };

  const removeFromCart = (itemId: number) => {
    const removedItem = cartItems.find((item) => item.id === itemId);

    if (removedItem) {
      setTotal((prevTotal) => prevTotal - removedItem.price * removedItem.quantity);
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    }
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity, total: newQuantity * item.price } : item
      )
    );
    const updatedItem = cartItems.find((item) => item.id === itemId);
    if (updatedItem) {
      setTotal((prevTotal) => prevTotal - updatedItem.price * updatedItem.quantity + updatedItem.price * newQuantity);
    }
  };

  const toggleMensagemVisivel = (id: number, quantity: number, total: number) => {
    console.log(`Item ${id} with quantity ${quantity} and total ${total} toggled visibility.`);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, toggleMensagemVisivel, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


