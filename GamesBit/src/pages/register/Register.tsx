import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import httpService from '../../services/httpService'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../routes';


type RegisterScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Register'>;


const Register: React.FC = (): JSX.Element => {
  const navigation = useNavigation<RegisterScreenProp>();
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  

  const handleLogin = () => [
    navigation.navigate('Login', { placeholder: 'Login' })
  ]

  const onSubmit = async () => {
    if (!name || !cpf || !email || !password || !confirmPassword) {
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

    if (password !== confirmPassword) {
      Alert.alert('As senhas não coincidem!');
      return;
    }

    try {
      const user = { name, cpf, email, password, confirmPassword };
      const result: any = await httpService.createUser(user);
      const data: any = await result.json();

      if (result.ok) {
        Alert.alert('Registro bem-sucedido!');
        navigation.navigate('Login', { placeholder: 'Login' });
      } else {
        Alert.alert(data.error || data.message || 'Erro desconhecido');
      }
    } catch (err) {
      console.error('Erro desconhecido:', err);
      Alert.alert('Erro desconhecido');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Criar conta</Text>
      </View>

      <View style={styles.containerForm}>
                <View style={styles.inputContainer}>
                    <Icon name="user" style={styles.icon} />
                    <TextInput
                        placeholder='Digite seu nome...'
                        placeholderTextColor='#FFF'
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="user" style={styles.icon} />
                    <TextInput
                        placeholder='Digite seu CPF'
                        placeholderTextColor='#FFF'
                        style={styles.input}
                        value={cpf}
                        onChangeText={setCpf}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="envelope" style={styles.icon} />
                    <TextInput
                        placeholder='Digite seu email...'
                        placeholderTextColor='#FFF'
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={isPasswordVisible ? 'lock' : 'lock'} style={styles.icon} />
                    <TextInput
                        placeholder='Digite sua senha...'
                        placeholderTextColor='#FFF'
                        style={styles.input}
                        secureTextEntry={!isPasswordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                        <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} style={styles.iconRight} />
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={isPasswordVisible ? 'lock' : 'lock'} style={styles.icon} />
                    <TextInput
                        placeholder='confirme sua senha...'
                        placeholderTextColor='#FFF'
                        style={styles.input}
                        secureTextEntry={!isPasswordVisible}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                        <Icon name={isPasswordVisible ? 'eye-slash' : 'eye'} style={styles.iconRight} />
                    </TouchableWithoutFeedback>
                </View>
                <TouchableOpacity>
                        <Text style={styles.registerText}>Já é cadastrado?</Text>
                        <Text onPress={handleLogin}
                        style={styles.buttonRegister}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Register;