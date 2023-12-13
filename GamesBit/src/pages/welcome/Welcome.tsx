import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../routes/index';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type welcomeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Welcome'>


const Welcome = (): JSX.Element => {
    const navigation = useNavigation<welcomeScreenProp>();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Logo.png')}
                style={styles.logo}
            />
            
            <TouchableOpacity onPress={() => navigation.navigate('Login', {placeholder: 'Login'})}  style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
       
    );
};

export default Welcome;





