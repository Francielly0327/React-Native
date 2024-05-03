import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  imagem: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  preco: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FF6347',
  },
  disponibilidade: {
    fontSize: 16,
    marginBottom: 10,
    color: 'blue',
  },
  composicao: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  sobre: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export { styles };
