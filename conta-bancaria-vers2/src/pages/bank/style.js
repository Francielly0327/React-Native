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
  
  texts: {
    fontSize: 24,
    marginLeft: 10,
  },
  container: {
    marginTop: 45,
  },
  scrollView: {
    flexGrow: 1,
  },
  title: {
    fontSize: 27,
    textAlign: 'center',
    color: 'red',
  },
  labelText: {
    fontSize: 26,
    marginRight: 10,
  },
  sliderContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sliderValue: {
    textAlign: 'center',
    fontSize: 30,
  },
  buttonContainer: {
    padding: 10,
    paddingHorizontal: 70,
  },
});

export { styles };