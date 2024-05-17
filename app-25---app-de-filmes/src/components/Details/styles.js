import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  sinopseContainer: {
    padding: 20,
  },
  sinopseTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff', // Alterado de fontColor para color
    marginBottom: 5,
  },
  sinopseText: {
    fontWeight: '100',
    color: '#fff', // Alterado de fontColor para color
    textAlign: 'justify',
    textAlignVertical: 'center',
  },
});

export {styles};
