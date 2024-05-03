import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center', 
  },
  cabecalho: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerCartoes: {
    alignItems: 'center', 
    paddingVertical: 10,
  },
  cartao: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
    marginHorizontal: 10,
    marginBottom: 20,
    width: 380, 
    height: 500, 
  },
  imagemCartao: {
    width: '100%',
    height: '70%', 
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
  },
  tituloCartao: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  botaoVerMais: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
    alignItems: 'center',
  },
  textoBotaoVerMais: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export { styles };
