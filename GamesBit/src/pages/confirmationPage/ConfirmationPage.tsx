import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from './styles';

const ConfirmationPage = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Parabéns! Você finalizou sua compra. Retire seu pedido em nossa loja em 2 horas úteis.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {

          navigation.goBack(); 
        }}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmationPage;
