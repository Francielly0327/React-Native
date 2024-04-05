import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: 27,
    textAlign: 'center',
    color: 'red',
    marginBottom: 20, 
  },
  card: {
    borderWidth: 2,
    borderColor: 'blue', 
    borderRadius: 10,
    padding: 10,
    marginBottom: 20, 
    backgroundColor: '#f0f0f0', 
  },
  title: {
    color: 'blue',
    fontSize: 22,
    marginBottom: 5, 
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  salary: {
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    color: 'red',
    fontStyle: 'italic', 
  },
  contact: {
    color: 'indigo',
  },
});

export { styles };
