import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  titlePage: {
    marginTop: 20,
    padding: 15,
  },
  textTitlePage: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
  },
  listTarefa: {
    flex: 1,
  },
  itemTarefa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 5,
  },
  itemTarefaText: {
    flex: 1,
    color: '#fff',
  },
  itemTarefaDelete: {
    backgroundColor: '#b53838',
    padding: 10,
    borderRadius: 10,
  },
  itemTarefaConcluida: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputTarefaModal: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  btnAddTarefa: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#3fa65c',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});

export { styles };
