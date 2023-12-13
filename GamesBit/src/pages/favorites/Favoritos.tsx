import styles from './styles';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFavoritos } from '.././favorites/FavoritosContext';
import { useCart } from '../cart/cartContext';


const Favoritos: React.FC = () => {
    const { favoritos, removerFavorito } = useFavoritos();
    const { addToCart } = useCart();

  
    const handleRemoveFromFavorites = (id: number) => {
      removerFavorito(id);
    };
  
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Produtos Favoritos:</Text>
        {favoritos.map((produto) => (
          <View key={produto?.id} style={styles.produtoContainer}>
            {produto && (
              <>
                <Text style={styles.label}>Código do Produto: {produto.codProduct}</Text>
                <Text style={styles.label}>Nome: {produto.name}</Text>
                <Text style={styles.label}>Preço: R$ {produto.price}</Text>
                {/* Adicione mais informações do produto conforme necessário */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.removeButton]}
                    onPress={() => handleRemoveFromFavorites(produto.id)}
                  >
                    <Text style={styles.buttonText}>Remover</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        addToCart({
                        id: produto.id,
                        name: produto.name,
                        price: produto.price,
                        quantity: 1, 
                        total: produto.price,
                        codProduct: produto.codProduct,
                        });
                    }}
                    >
                    <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        ))}
      </ScrollView>
    );
  };

export default Favoritos;
