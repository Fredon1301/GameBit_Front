import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#22404D'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,

  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',

  },
  categoryText: {
    fontSize: 10.5,
    color: '#FFF',
    fontWeight: 'bold',
  },
  categoryTextSelected: {
    color: '#EA1763',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#EA1763',
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  botao: {
    backgroundColor: '#EA1763', 
    color: '#fff', 
    borderRadius: 20,
    padding: 11, 
    fontSize: 16, 
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 25
    
  },
  price: {
    color: '#EA1763',
    fontSize: 18,
    marginBottom: 1,
    marginTop: 40
  },
  price2: {
    color: '#EA1763',
    fontSize: 18,
    marginBottom: 12,
  },

  imageContainer: {
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: '#EDEDED', 
    padding: 10,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold', 
    marginBottom: 10
  },


  unidade: {
    color: 'blue', 
    fontSize: 10,fontWeight: 'bold',
    marginBottom: 10

  },

  unidades: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold', 
    marginBottom: 10
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
  },
  botaoRemover: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  }

});

export default styles;
