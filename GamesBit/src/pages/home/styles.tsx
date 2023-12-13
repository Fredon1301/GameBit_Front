import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
   header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   textHeader: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
   },
   searchContainer: {
    height: 35,
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
   },
   input: {
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    paddingVertical: 0
   },
   categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 9.5, 
    color: '#FFF', 
    fontWeight: 'bold'
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
  fab: {
    position: 'absolute',
    right: 30,
    bottom: 30,



  }


  });

export default styles;











