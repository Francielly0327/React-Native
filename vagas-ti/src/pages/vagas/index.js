import { View, Text, ScrollView } from 'react-native';
import { styles } from './style'; 


const Vagas = () => {

  return(
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.pageTitle}>
          Vagas TI
        </Text>
        
        <ScrollView style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>
              Desenvolvedor Full Stack
            </Text>
            <Text style={styles.text}>
              <Text style={styles.salary}>Salário:</Text> R$ 6.000 - R$ 10.000
            </Text>
            <Text style={styles.text}>
              <Text style={styles.description}>Descrição:</Text> Desenvolver e manter aplicativos web e móveis, do back-end ao front-end.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.contact}>Contato:</Text> (13) 1234-5678
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>
              Engenheiro de Dados
            </Text>
            <Text style={styles.text}>
              <Text style={styles.salary}>Salário:</Text> R$ 8.000 - R$ 12.000
            </Text>
            <Text style={styles.text}>
              <Text style={styles.description}>Descrição:</Text> Construir e manter a infraestrutura de dados, garantindo sua qualidade e segurança.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.contact}>Contato:</Text> (13) 2345-6789
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>
              Analista de Segurança da Informação
            </Text>
            <Text style={styles.text}>
              <Text style={styles.salary}>Salário:</Text> R$ 7.000 - R$ 11.000
            </Text>
            <Text style={styles.text}>
              <Text style={styles.description}>Descrição:</Text> Proteger os sistemas e dados contra ameaças cibernéticas, identificando vulnerabilidades e implementando medidas de segurança.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.contact}>Contato:</Text> (13) 3456-7890
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>
              Arquiteto de Sistemas
            </Text>
            <Text style={styles.text}>
              <Text style={styles.salary}>Salário:</Text> R$ 9.000 - R$ 15.000
            </Text>
            <Text style={styles.text}>
              <Text style={styles.description}>Descrição:</Text> Projetar e implementar a arquitetura de sistemas de software, incluindo sistemas distribuídos e computação em nuvem.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.contact}>Contato:</Text> (13) 4567-8901
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>
              Especialista em Cloud Computing
            </Text>
            <Text style={styles.text}>
              <Text style={styles.salary}>Salário:</Text> R$ 7.500 - R$ 13.000
            </Text>
            <Text style={styles.text}>
              <Text style={styles.description}>Descrição:</Text> Auxiliar na migração e gerenciamento de serviços na nuvem, com foco em plataformas como AWS, Azure ou Google Cloud.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.contact}>Contato:</Text> (13) 5678-9012
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>
              Engenheiro de Software
            </Text>
            <Text style={styles.text}>
              <Text style={styles.salary}>Salário:</Text> R$ 8.000 - R$ 12.000
            </Text>
            <Text style={styles.text}>
              <Text style={styles.description}>Descrição:</Text> Desenvolver e manter aplicativos e sistemas de software, utilizando linguagens como Java, Python ou C++.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.contact}>Contato:</Text> (13) 6789-0123
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>
              Analista de Business Intelligence
            </Text>
            <Text style={styles.text}>
              <Text style={styles.salary}>Salário:</Text> R$ 6.500 - R$ 10.000
            </Text>
            <Text style={styles.text}>
              <Text style={styles.description}>Descrição:</Text> Transformar dados em informações acionáveis para orientar as decisões de negócios, utilizando ferramentas de BI e análise estatística.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.contact}>Contato:</Text> (13) 7890-1234
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>
              Administrador de Redes
            </Text>
            <Text style={styles.text}>
              <Text style={styles.salary}>Salário:</Text> R$ 6.000 - R$ 9.000
            </Text>
            <Text style={styles.text}>
              <Text style={styles.description}>Descrição:</Text> Garantir o funcionamento seguro da infraestrutura de rede, incluindo configuração e manutenção de redes e segurança de rede.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.contact}>Contato:</Text> (13) 8901-2345
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>
              Desenvolvedor de Aplicativos Móveis
            </Text>
            <Text style={styles.text}>
              <Text style={styles.salary}>Salário:</Text> R$ 6.500 - R$ 11.000
            </Text>
            <Text style={styles.text}>
              <Text style={styles.description}>Descrição:</Text> Projetar, desenvolver e manter aplicativos para dispositivos móveis iOS e Android.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.contact}>Contato:</Text> (13) 9012-3456
            </Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default Vagas;