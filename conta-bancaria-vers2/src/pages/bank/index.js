import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TextInput, Picker, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

const Banco = () => {
  const [status, setStatus] = useState('');
  const [limite, setLimite] = useState(0);
  const [escolaridade, setEscolaridade] = useState(0);
  const escolaridades = [
    { id: 1, nome: 'Sem estudo' },
    { id: 2, nome: 'Ensino Fundamental Incompleto' },
    { id: 3, nome: 'Ensino Fundamental 1' },
    { id: 4, nome: 'Ensino Fundamental 2' },
    { id: 5, nome: 'Ensino Médio' },
    { id: 6, nome: 'Ensino Superior' },
  ];
  const [sexo, setSexo] = useState(0);
  const sexos = [
    { id: 1, nome: 'Masculino' },
    { id: 2, nome: 'Feminino' },
  ];
  const [idade, setIdade] = useState('');
  const [nome, setNome] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const navigation = useNavigation();

  function irDados() {
    const s = sexos[sexo].nome;
    const e = escolaridades[escolaridade].nome;
    navigation.navigate('Dados', {
      nome: nome,
      idade: idade,
      sexo: s,
      escolaridade: e,
      limite: limite,
      brasileiro: status,
    });
  }

  const handleNomeChange = (name) => {
    if (/^\d+$/.test(name)) {
      return;
    }
    setNome(name);
  };

  const handleIdadeChange = (age) => {
    if (isNaN(age)) {
      return;
    }
    setIdade(age);
  };

  let tipoEscolaridade = escolaridades.map((valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />;
  });

  let tipoSexo = sexos.map((valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />;
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>
          Abertura de Conta
        </Text>

        <View style={styles.row}>
          <Text style={styles.labelText}>Nome: </Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={handleNomeChange}
            value={nome}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.labelText}>Idade: </Text>
          <TextInput
            style={styles.input}
            placeholder="Idade"
            onChangeText={handleIdadeChange}
            keyboardType="numeric"
            value={idade}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.labelText}>Sexo: </Text>

          <Picker
            style={{ flex: 1 }}
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}
          >
            {tipoSexo}
          </Picker>
        </View>

        <View style={styles.row}>
          <Text style={styles.labelText}>Escolaridade: </Text>

          <Picker
            style={{ flex: 1 }}
            selectedValue={escolaridade}
            onValueChange={(itemValue) => setEscolaridade(itemValue)}
          >
            {tipoEscolaridade}
          </Picker>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.labelText}>Limite: </Text>
          <Slider
            style={{ flex: 1 }}
            minimumValue={0}
            maximumValue={10000}
            onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
            value={limite}
            step={1}
          />
          <Text style={styles.sliderValue}>{limite.toFixed(2)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.labelText}>Brasileiro: </Text>
          <Switch
            style={{ marginLeft: 10 }}
            onValueChange={(valorSwitch) => setStatus(valorSwitch ? 1 : 0)}
            value={status === 1}
          />
        </View>

        {status === 1 && (
          <Text style={styles.labelText}></Text>
        )}

        <View style={styles.buttonContainer}>
          <Button title="Confirmar" onPress={irDados} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Banco;
