import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface Props {
 navigation: any;
}

const Details: React.FC<Props> = ({ navigation }) => {
 return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#343541" />
        </TouchableOpacity>
        <Text style={styles.title}>The Last of Us</Text>
      </View>


      <View style={styles.container}>
        <Text style={styles.price}>R$ 120,00</Text>
        <ScrollView> 
        <Text style={styles.description}>Incluído na edição:
- Campanha completa de The Last of Us™ (PS5™).
- Left Behind, o aclamado capítulo anterior à trama, explora os eventos que mudaram para sempre a vida da Ellie e sua melhor amiga, Riley.

Conheça a história emocionante e os personagens inesquecíveis de The Last of Us, vencedor de mais de 200 prêmios de Jogo do Ano, e agora reconstruído do zero para o console PlayStation®5.

Em uma civilização devastada, onde infectados e sobreviventes veteranos estão à solta, Joel, um protagonista abatido, é contratado para tirar uma garota de 14 anos, Ellie, de uma zona de quarentena militar. No entanto, o que começa como um pequeno trabalho logo se transforma em uma jornada longa e brutal.
- Completamente refeito usando o motor gráfico de PS5 mais recente da Naughty Dog para uma fidelidade visual avançada, recursos do controle sem fio DualSense™ totalmente integrados e muito mais.
- Uma reformulação total da experiência original, reproduzida fielmente, mas incorporando mecânicas de jogabilidade modernas, controles aprimorados e opções de acessibilidade ampliadas.
- Sinta uma imersão ainda maior com melhorias na ambientação da trama, efeitos, animações faciais e exploração e combate aprimorados.
</Text>
</ScrollView>
      
      </View>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
 );
};

export default Details;
