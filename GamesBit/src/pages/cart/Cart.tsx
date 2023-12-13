import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../pages/cart/cartContext';
import { RootStackParamsList } from '../../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import httpService from '../../services/httpService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  {decode, encode} from 'base-64';


import styles from './styles';
import { jwtDecode } from "jwt-decode";

type CartScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Cart'>;

const Cart = (): JSX.Element => {
  const navigation = useNavigation<CartScreenProp>();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (!global.btoa) {
    global.btoa = encode;
  }
  
  if (!global.atob) {
    global.atob = decode;
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      console.log('Item Total:', item.total, 'Current Total:', total);
      return total + item.total;
    }, 0).toFixed(2);
  };

  const handleFinalizarPedido = async () => {
    try {
      const produtos = cartItems.map(item => ({
        codProduct: item.codProduct,
        productAttributes: {
          name: item.name,
          currentPrice: item.price,
        },
        quantity: item.quantity,
      }));

      const token = await AsyncStorage.getItem('token');

      if (!token) {
        console.error('Token não encontrado');
        return;
      }
      
      const decodedToken: any = jwtDecode(token);

      const response = await httpService.createCart({produtos, orderTotal: calculateTotal(), cpf: decodedToken.cpf,});
        
          
        if (response.ok) {
          navigation.navigate('ConfirmationPage', { placeholder: 'ConfirmationPage' });
        } else {
          const responseData = await response.json();
          alert(responseData.error || responseData.message || 'Erro desconhecido');
        }
      } catch (err) {
        console.error('Erro desconhecido:', err);
        alert('Erro desconhecido');
      }
    };
    return (
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#FFF' }}>
        <View style={styles.header}>
          <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.textHeader}>Carrinho de compras</Text>
          </View>
        </View>
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 75 }}>
        </View>
  
    
        {cartItems.length > 0 && (
          <>
            <ScrollView>
              {cartItems.map((item) => (
                <View key={item.id}>
                  <Text>{item.name}</Text>
                  <Text>R${item.price},00</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                      <Text style={styles.botaoRemover}>Remover</Text>
                    </TouchableOpacity>
                    <View style={styles.quantityButtons}>
                      <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Text style={styles.quantityButton}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{item.quantity}</Text>
                      <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Text style={styles.quantityButton}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
    
            <View style={{ marginTop: 20 }}>
              <Text>Total: R${calculateTotal()}</Text>
              <TouchableOpacity onPress={handleFinalizarPedido}>
                <Text style={styles.botao}>Finalizar Pedido</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
    
        <TouchableOpacity onPress={() => navigation.navigate('Home', { placeholder: 'Home' })}>
          <Text style={styles.botao}>Continuar comprando</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
    };
  export default Cart;




  