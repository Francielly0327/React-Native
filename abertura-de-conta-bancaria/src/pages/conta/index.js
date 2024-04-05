import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TextInput, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { styles } from './style';

const Conta = () => {
  const [status, setStatus] = useState(false);
  const [limite, setLimite] = useState(0);
  const [escolaridade, setEscolaridade] = useState(0);
  const escolaridades = [
    { id: 1, nome: 'Sem estudo' },
    { id: 2, nome: 'Ensino Fudamental Incompleto' },
    { id: 3, nome: 'Ensino Fudamental 1' },
    { id: 4, nome: 'Ensino Fudamental 2' },
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
  const [exibi, setExibi] = useState(0);
  const [mensagemErro, setMensagemErro] = useState('');

  function exibir() {
    if (!nome || !idade || sexo === undefined || escolaridade === undefined || !limite) {
      setMensagemErro('Insira todos os dados necessários.');
    } else {
      setExibi(1);
      setMensagemErro('');
    }
  }

  const handleChangeNome = (name) => {
    const cleanedName = name.replace(/[^a-zA-Z]/g, '');
    setNome(cleanedName);
  };

  const handleChangeIdade = (age) => {
    const cleanedAge = age.replace(/[^0-9]/g, '');
    setIdade(cleanedAge);
  };

  let tipoEscolaride = escolaridades.map((valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />;
  });

  let tipoSexo = sexos.map((valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />;
  });

  return (
    <View style={styles.scrollViewContainer}>
      <ScrollView>
        <Text style={styles.headerText}>
          Abertura de Conta
        </Text>

        <View style={styles.row}>
          <Text style={styles.texts}>Nome: </Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={(name) => handleChangeNome(name)}
            value={nome}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.texts}>Idade: </Text>
          <TextInput
            style={styles.input}
            placeholder="Idade"
            onChangeText={(age) => handleChangeIdade(age)}
            keyboardType="numeric"
            value={idade}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.texts}>Sexo: </Text>

          <Picker
            style={{ flex: 1 }}
            selectedValue={sexo + 1}
            onValueChange={(itemValue, itemIndex) => setSexo(itemIndex)}
          >
            {tipoSexo}
          </Picker>
        </View>

        <View style={styles.row}>
          <Text style={styles.texts}>Escolaridade: </Text>

          <Picker
            style={{ flex: 1 }}
            selectedValue={escolaridade + 1}
            onValueChange={(itemValue, itemIndex) => setEscolaridade(itemIndex)}
          >
            {tipoEscolaride}
          </Picker>
        </View>

        <View style={styles.row}>
          <Text style={styles.texts}>Limite: </Text>
          <Slider
            style={{ flex: 1 }}
            minimumValue={0}
            maximumValue={10000}
            onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
            value={limite}
            step={1}
          />
        </View>

        <Text style={styles.buttonTexts}>
          {limite.toFixed(2)}
        </Text>

        <View style={styles.row}>
          <Text style={styles.texts}>Brasileiro: </Text>
          <Switch
            style={{ marginLeft: 10 }}
            value={status}
            onValueChange={(valorSwitch) => setStatus(valorSwitch)}
          />
        </View>

        <View style={styles.confirmButtonContainer}>
          <Button title="Confirmar" onPress={exibir} />
        </View>

        {mensagemErro ? <Text style={styles.errorMessage}>{mensagemErro}</Text> : null}

        {exibi == 1 ? (
          <>
            <Text style={styles.texts}>Nome: {nome}</Text>
            <Text style={styles.texts}>Idade: {idade}</Text>
            <Text style={styles.texts}>Sexo: {sexos[sexo].nome}</Text>
            <Text style={styles.texts}>Escolaridade: {escolaridades[escolaridade].nome}</Text>
            <Text style={styles.texts}>Limite: {limite}</Text>
            <Text style={styles.texts}>Brasileiro: {status == 1 ? <Text>Sim</Text> : <Text>Não</Text>}</Text>
          </>
        ) : null}
      </ScrollView>
    </View>
  );
}

export default Conta;