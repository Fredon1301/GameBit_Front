
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    produtoContainer: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 10,
      marginBottom: 15,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      color: '#555',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    button: {
      flex: 1,
      backgroundColor: '#007BFF',
      borderRadius: 5,
      padding: 8,
      marginHorizontal: 5,
      alignItems: 'center',
    },
    removeButton: {
      backgroundColor: '#DC3545',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

  export default styles;