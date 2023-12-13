import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22404D'
  },
  logo: {
    backgroundColor: '#22404D',
    marginLeft: 115,
    marginTop: 250,

  },
  button: {
    position: 'absolute',
    backgroundColor: '#EA1763',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',


  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }
});


export default styles;
