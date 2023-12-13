// FavoritosContext.tsx
import React, { createContext, useContext, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  codProduct: string;

};

type FavoritosContextType = {
  favoritos: Product[]; // 
  adicionarFavorito: (produto: Product) => void;
  removerFavorito: (id: number) => void;
};
const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);
export const FavoritosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<Product[]>([]);

  const adicionarFavorito = (produto: Product) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, produto]);
  };

  const removerFavorito = (id: number) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos deve ser usado dentro de um FavoritosProvider');
  }
  return context;
};
