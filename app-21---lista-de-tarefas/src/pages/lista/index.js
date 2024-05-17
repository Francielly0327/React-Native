import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Lista = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getTarefas = async () => {
      try {
        const storedTarefas = await AsyncStorage.getItem('tarefas');
        if (storedTarefas !== null) {
          setTarefas(JSON.parse(storedTarefas));
        } else {
          setTarefas([]);
        }
        console.log('Tarefas lidas com sucesso!');
      } catch (error) {
        console.log('Erro ao obter Tarefas: ' + error.message);
      }
    };

    getTarefas();
  }, []);

  const salvarTarefa = async () => {
    if (!tarefa) {
      alert('O campo Tarefa está vazio. Preencha-o e depois adicione a Tarefa.');
      return false;
    }

    try {
      const novaTarefa = {
        id: Math.random().toString(),
        nome: tarefa,
        concluida: false,
      };

      const updatedTarefas = [...tarefas, novaTarefa];

      await AsyncStorage.setItem('tarefas', JSON.stringify(updatedTarefas));
      console.log(`${tarefa} Tarefa adicionada com sucesso!`);
      setTarefa('');
      setTarefas(updatedTarefas);
      setModalVisible(false);
    } catch (error) {
      console.log('Erro ao inserir uma Tarefa: ' + error.message);
    }
  };

  const deletarTarefa = async (id) => {
    try {
      const updatedTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
      await AsyncStorage.setItem('tarefas', JSON.stringify(updatedTarefas));
      console.log(`Tarefa com id ${id} deletada`);
      setTarefas(updatedTarefas);
    } catch (error) {
      console.log('Erro ao deletar a tarefa: ' + error.message);
    }
  };

  const renderTarefa = ({ item }) => {
    return (
      <View style={styles.itemTarefa}>
        <Text
          style={[
            styles.itemTarefaText,
            item.concluida && styles.itemTarefaConcluida,
          ]}>
          {item.nome}
        </Text>
        <TouchableOpacity
          onPress={() => deletarTarefa(item.id)}
          style={styles.itemTarefaDelete}>
          <FontAwesome5 name="trash" size={18} color="#888" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlePage}>
        <Text style={styles.textTitlePage}>Tarefas</Text>
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
              placeholder="Informe uma tarefa"
              value={tarefa}
              onChangeText={setTarefa}
              style={styles.inputTarefaModal}
            />
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#3fa65c' }}
                onPress={salvarTarefa}
              >
                <Text style={styles.textStyle}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#b53838' }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setTarefa('');
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
        data={tarefas}
        renderItem={renderTarefa}
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
