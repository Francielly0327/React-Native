import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },

  row: {
    flexDirection: 'row',
  },

  texts: {
    fontSize: 24,
    marginLeft: 10,
  },

  scrollViewContainer: {
    marginTop: 45,
  },

  headerText: {
    fontSize: 27,
    textAlign: 'center',
    color: 'red',
  },

  confirmButtonContainer: {
    padding: 10,
    paddingLeft: 70,
    paddingRight: 70,
  },

  buttonTexts: {
    textAlign: 'center',
    fontSize: 30,
  },

   errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export { styles };