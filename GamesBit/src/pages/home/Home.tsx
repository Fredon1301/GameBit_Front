import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import CardGenerico from '../../components/CardGenerico/CardGenerico';
import { FAB } from '@rneui/themed';
import { useCart } from '../cart/cartContext'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import httpService from '../../services/httpService';


type Product = {
  id: number;
  name: string;
  currentPrice: number;
  image: string;
  codProduct: string

};

type HomeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>

const Home = (): JSX.Element => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('DESTAQUES');
  const [products, setProducts] = useState<Product[]>([]); 
  const navigation = useNavigation<HomeScreenProp>();
  const { addToCart } = useCart();
  const [isFavorito, setIsFavorito] = useState(false);
  


  const categories = ['DESTAQUES', 'LANÇAMENTOS', 'SEMI-NOVOS', 'CONSOLES', 'ANTIGOS'];

  const handleToggleFavorito = () => {
    setIsFavorito((prevIsFavorito) => !prevIsFavorito);
  };

  const handleNavigateToFavoritos = () => {
    navigation.navigate('Favoritos');
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('Profile');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
  
        if (!token) {
          console.error('Token não encontrado');
          return;
        }
  
        const response = await httpService.getProducts(); 
        const data = await response.json();
  
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Erro: a resposta não é um array', data);
        }
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    };
  
    fetchData();
  }, [selectedCategory]);

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => {
              setCategoryIndex(index);
              setSelectedCategory(item);
            }}
          >
            <Text
              style={[
                styles.categoryText,
                categoryIndex === index && styles.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: '#22404D',
        }}
      >
        <View style={styles.header}>
          <View style={{ marginTop: 30, flexDirection: 'row' }}>
            <Text style={styles.textHeader}>GamesBit</Text>
            <TouchableOpacity>
              <Icon  onPress={handleNavigateToFavoritos} name="star"  size={28} color={'#EA1763'} style={{ marginTop: 17 , marginLeft: 30}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon onPress={handleNavigateToProfile} name="user" size={28} color={'#EA1763'} style={{ marginTop: 17 , marginLeft: 37}} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart', {placeholder: 'Cart'})}>
            <Icon name="shopping-cart" size={28} color={'#EA1763'} style={{ marginTop: 45 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <Icon name="search" size={12} style={{ marginLeft: 15}} />
          <TextInput placeholder='Pesquise pelo seu Game aqui...' style={styles.input} />
        </View>
        <CategoryList />
        <ScrollView style={{ backgroundColor: '#FFF' }}>
        {products.map((product) => (
  <CardGenerico
    key={product.id}
    id={product.id}
    name={product.name}
    price={product.currentPrice}
    image={product.image}
    codProduct={product.codProduct}
    addToCart={() => addToCart({
      id: product.id,
      name: product.name,
      price: product.currentPrice,
      quantity: 1,
      total: product.currentPrice,
      codProduct: product.codProduct,
      image: product.image,
    })}
    isFavorito={isFavorito} 
    toggleFavorito={handleToggleFavorito}  
  />
))}
        </ScrollView>
        <FAB
          visible={true}
          style={styles.fab}
          icon={{ name: 'chat', color: 'white' }}
          color='red'
          onPress={() => navigation.navigate('Chat', { placeholder: 'Chat' })}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
