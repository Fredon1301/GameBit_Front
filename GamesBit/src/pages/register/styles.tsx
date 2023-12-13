import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#22404D'
    },
    containerHeader: {
      marginTop: 175,
      alignItems: 'center'
    },
    message: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#EA1763'
    },
    containerForm: {
      flex: 1,
      marginLeft: 30,
      flexDirection: 'column',
      marginTop: 15,
    },
    icon: {
      color: '#EA1763',
      marginTop: 13,
      marginRight: 8

    },
    iconRight: {
      color: '#EA1763',
      marginTop: 13,
    },
    inputContainer: {
      flexDirection: 'row',
      marginLeft: 40,

    },
    input: {
      height: 40,
      fontSize: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#EA1763', 
      padding: 2,
      width: '70%',
      color: '#FFF'
    },
    button: {
      backgroundColor: 'transparent',
      width: '50%',
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1, 
      borderColor: '#EA1763', 
      borderRadius: 5,
      marginLeft: 78
    },
    buttonText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold'
    },
    buttonRegister: {
      fontSize: 10,
      color: '#EA1763',
      marginTop: -15,
      marginLeft: 188

    },
    registerText: {
      color: '#FFF',
      fontSize: 10,
      marginLeft: 94,
      marginTop: 20,
      flexDirection: 'row',
    },
  });
  
  export default styles;
  