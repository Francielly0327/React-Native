import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#363636',
    padding: 14,
  },
  paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationColor: '#808080'
  },
  inputs: {
    paddingTop: 10
  },
  inputSt: {
    borderBottomColor: '#008000',
    borderBottomWidth: 1,
    marginBottom: 15,
    marginTop: 5,
    color: 'white'
  },
  label: {
    color: 'white',
    fontWeight: 'bold'
  },
  inputPicker: {
    backgroundColor: '#696969',
    borderColor: '#808080', 
    color: 'white',
    padding: 5,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 3,
    borderBottomWidth: 1
  },
  resultado: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  result: {
    marginTop: 20
  }
});

export { styles };
