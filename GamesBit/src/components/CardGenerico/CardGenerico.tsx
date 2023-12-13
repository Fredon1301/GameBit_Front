import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Image, Text } from 'react-native';
import React, { useState } from 'react';
import { useFavoritos } from '../../pages/favorites/FavoritosContext';



type CardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  codProduct: string;
  addToCart: () => void;
  isFavorito: boolean; 
  toggleFavorito: () => void; 
};

type CardScreenProp = NativeStackNavigationProp<RootStackParamsList, 'CardGenerico'>;

const CardGenerico: React.FC<CardProps> = ({ id, name, price, image, addToCart, codProduct }) => {
  const { favoritos, adicionarFavorito, removerFavorito } = useFavoritos();
  const isFavorito = favoritos.some((produto) => produto.id === id);

  const handleToggleFavorito = () => {
    const produto = { id, name, price, image, codProduct };
    if (isFavorito) {
      removerFavorito(id);
    } else {
      adicionarFavorito(produto);
    }
  };
  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity>
        <Image source={{ uri: image }} style={{ width: 113, height: 150 }} />
      </TouchableOpacity >
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>R$ {price}</Text>
      <TouchableOpacity onPress={() => addToCart(id, name, price, image, codProduct)}>
        <Text style={styles.botao}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToggleFavorito}>
  {isFavorito ? (
    <Icon name="star" size={24} color="#EA1763" />
    ) : (
      <Icon name="star-o" size={24} color="#EA1763" />
  )}
</TouchableOpacity>
     
    </View>
  );
};

export default CardGenerico;