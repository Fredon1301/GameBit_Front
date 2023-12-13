import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import httpService from '../../services/httpService';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../routes';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Login'>;

const Login: React.FC = (): JSX.Element => {
  const navigation = useNavigation<LoginScreenProp>();
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Digite um email válido!');
      return;
    }

    const minPasswordLength = 8;
    if (password.length < minPasswordLength) {
      Alert.alert(`A senha deve ter pelo menos ${minPasswordLength} caracteres!`);
      return;
    }

    try {
      const response = await httpService.login({ email, password });

      const result = await response.json();

      if (result['Access-Token']) {
        await AsyncStorage.setItem("userData", JSON.stringify(result.userData))
        await AsyncStorage.setItem('token', `Bearer ${result['Access-Token']}`);
        Alert.alert('Login bem-sucedido!');
        navigation.navigate('Home', { placeholder: 'Home' });
      } else {
        Alert.alert(result.message || 'Erro desconhecido');
      }
    } catch (err) {
      Alert.alert('Erro desconhecido');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };


  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Login</Text>
      </View>
      <View style={styles.containerForm}>
        <View style={styles.inputContainer}>
          <Icon name="envelope" style={styles.icon} />
          <TextInput
            placeholder="Digite seu email..."
            placeholderTextColor="#FFF"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name={isPasswordVisible ? 'lock' : 'lock'} style={styles.icon} />
          <TextInput
            placeholder="Digite sua senha..."
            placeholderTextColor="#FFF"
            style={styles.input}
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
            <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} style={styles.iconRight} />
          </TouchableWithoutFeedback>
        </View>

        <TouchableOpacity>
          <Text style={styles.registerText}>Não possui cadastro?</Text>
          <Text
            onPress={() => navigation.navigate('Register', { placeholder: 'Register' })}
            style={styles.buttonRegister}
          >
            Criar conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
