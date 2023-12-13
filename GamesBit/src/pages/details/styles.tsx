import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#FFF',
    },
    header: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: 15,
    },
    title: {
       fontSize: 24,
       fontWeight: 'bold',
       color: '#343541',
       top: 10,
      left: -100
       
    },
    image: {
       width: '100%',
       height: 200,
    },
    infoContainer: {
       padding: 15,
    },
    price: {
       fontSize: 20,
       fontWeight: 'bold',
       color: '#EA1763',
       top: 5,
      left: 150
    },
    description: {
       fontSize: 14,
       color: '#343541',
       marginTop: 10,
    },
    addToCartButton: {
       backgroundColor: '#EA1763',
       padding: 10,
       alignItems: 'center',
       borderRadius: 5,
       margin: 15,
    },
    addToCartText: {
       color: '#FFF',
       fontSize: 16,
       fontWeight: 'bold',
    },
    imageContainer: {
      marginTop: 15,
      alignItems: 'center',
      backgroundColor: '#EDEDED', 
      padding: 10,
      borderRadius: 10,
      width: 330, 
      height: 380,
      top: 10,
      left: 30
    },
   });
   export default styles;

