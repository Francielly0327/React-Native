import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
  },
  headerText: {
    fontSize: 27,
    color: 'blue',
    marginLeft: 45,
    marginVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue', 
  },
  texts:{
    fontSize: 24,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 15
  },
  button: {
    backgroundColor: 'red', 
    padding: 10,
    alignSelf: 'center', 
    marginTop: 20, 
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export { styles };
