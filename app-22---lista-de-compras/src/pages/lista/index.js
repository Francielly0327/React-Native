import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Lista = () => {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState(''); // Novo estado para a quantidade
  const [compras, setCompras] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getCompras = async () => {
      try {
        const storedCompras = await AsyncStorage.getItem('compras');
        if (storedCompras !== null) {
          setCompras(JSON.parse(storedCompras));
        } else {
          setCompras([]);
        }
        console.log('Compras lidas com sucesso!');
      } catch (error) {
        console.log('Erro ao obter Compras: ' + error.message);
      }
    };

    getCompras();
  }, []);

  const salvarCompra = async () => {
    if (!produto || !quantidade) { // Verificando se tanto o produto quanto a quantidade foram preenchidos
      alert('Por favor, preencha tanto o nome do produto quanto a quantidade.');
      return;
    }

    try {
      const novaCompra = {
        id: Math.random().toString(),
        produto: produto,
        quantidade: quantidade, // Salvando a quantidade junto com o produto
        concluida: false,
      };

      const updatedCompras = [...compras, novaCompra];

      await AsyncStorage.setItem('compras', JSON.stringify(updatedCompras));
      console.log(`${produto} adicionado à lista de compras com sucesso!`);
      setProduto('');
      setQuantidade('');
      setCompras(updatedCompras);
      setModalVisible(false);
    } catch (error) {
      console.log('Erro ao inserir uma Compra: ' + error.message);
    }
  };

  const deletarCompra = async (id) => {
    try {
      const updatedCompras = compras.filter((compra) => compra.id !== id);
      await AsyncStorage.setItem('compras', JSON.stringify(updatedCompras));
      console.log(`Compra com id ${id} deletada`);
      setCompras(updatedCompras);
    } catch (error) {
      console.log('Erro ao deletar a compra: ' + error.message);
    }
  };

  const renderCompra = ({ item }) => {
    return (
      <View style={styles.itemTarefa}>
        <Text
          style={[
            styles.itemTarefaText,
            item.concluida && styles.itemTarefaConcluida,
          ]}>
          {item.produto} - Quantidade: {item.quantidade} {/* Mostrando o produto e a quantidade */}
        </Text>
        <TouchableOpacity
          onPress={() => deletarCompra(item.id)}
          style={styles.itemTarefaDelete}>
          <FontAwesome5 name="trash" size={18} color="#888" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlePage}>
        <Text style={styles.textTitlePage}>Compras</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Nome do produto"
              value={produto}
              onChangeText={setProduto}
              style={styles.inputTarefaModal}
            />
            <TextInput
              placeholder="Quantidade"
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="numeric" // Teclado numérico para a quantidade
              style={styles.inputTarefaModal}
            />
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#3fa65c' }}
                onPress={salvarCompra}
              >
                <Text style={styles.textStyle}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#b53838' }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setProduto('');
                  setQuantidade('');
                }}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <FlatList
        style={styles.listTarefa}
        contentContainerStyle={{ paddingBottom: 70 }}
        data={compras}
        renderItem={renderCompra}
        keyExtractor={(item) => item.id.toString()}
      />

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.btnAddTarefa}
      >
        <FontAwesome5 name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Lista;
