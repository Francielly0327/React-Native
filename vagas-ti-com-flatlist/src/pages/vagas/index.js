import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './style'; 

const initialVagas = [
  { id: 1, title: 'Desenvolvedor Full Stack', salary: 'R$ 6.000 - R$ 10.000', description: 'Desenvolver e manter aplicativos web e móveis, do back-end ao front-end.', contact: '(13) 1234-5678' },
  { id: 2, title: 'Engenheiro de Dados', salary: 'R$ 8.000 - R$ 12.000', description: 'Construir e manter a infraestrutura de dados, garantindo sua qualidade e segurança.', contact: '(13) 2345-6789' },
  { id: 3, title: 'Analista de Segurança da Informação', salary: 'R$ 7.000 - R$ 11.000', description: 'Proteger os sistemas e dados contra ameaças cibernéticas, identificando vulnerabilidades e implementando medidas de segurança.', contact: '(13) 3456-7890' },
  { id: 4, title: 'Arquiteto de Sistemas', salary: 'R$ 9.000 - R$ 15.000', description: 'Projetar e implementar a arquitetura de sistemas de software, incluindo sistemas distribuídos e computação em nuvem.', contact: '(13) 4567-8901' },
  { id: 5, title: 'Especialista em Cloud Computing', salary: 'R$ 7.500 - R$ 13.000', description: 'Auxiliar na migração e gerenciamento de serviços na nuvem, com foco em plataformas como AWS, Azure ou Google Cloud.', contact: '(13) 5678-9012' },
  { id: 6, title: 'Engenheiro de Software', salary: 'R$ 8.000 - R$ 12.000', description: 'Desenvolver e manter aplicativos e sistemas de software, utilizando linguagens como Java, Python ou C++.', contact: '(13) 6789-0123' },
  { id: 7, title: 'Analista de Business Intelligence', salary: 'R$ 6.500 - R$ 10.000', description: 'Transformar dados em informações acionáveis para orientar as decisões de negócios, utilizando ferramentas de BI e análise estatística.', contact: '(13) 7890-1234' },
  { id: 8, title: 'Administrador de Redes', salary: 'R$ 6.000 - R$ 9.000', description: 'Garantir o funcionamento seguro da infraestrutura de rede, incluindo configuração e manutenção de redes e segurança de rede.', contact: '(13) 8901-2345' },
  { id: 9, title: 'Desenvolvedor de Aplicativos Móveis', salary: 'R$ 6.500 - R$ 11.000', description: 'Projetar, desenvolver e manter aplicativos para dispositivos móveis iOS e Android.', contact: '(13) 9012-3456' }
];

const Vagas = () => {
  const [vagas, setVagas] = useState(initialVagas);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>
        <Text style={styles.salary}>Salário:</Text> {item.salary}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.description}>Descrição:</Text> {item.description}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.contact}>Contato:</Text> {item.contact}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Vagas TI</Text>
      <FlatList
        data={vagas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Vagas;