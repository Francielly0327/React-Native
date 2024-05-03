import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

const products = [
  {
    title: 'Ovo de Páscoa Recheado Lollo Nestlé 400g',
    image: 'https://a-static.mlcdn.com.br/800x560/ovo-de-pascoa-recheado-lollo-nestle-400g-envio-imediato/lxteletrica/ovolollo/878c81f4b18467c0f1d0edddca0a13d0.jpeg',
    price: 'Preço: R$ 200,00',
    disponibilidade: 'Disponível até 30/04/2024',
    composicao: 'Composição: Chocolate ao leite, recheio de creme de avelã e crocantes.',
    sobre: 'Sobre: Delicie-se com o irresistível Ovo de Páscoa Recheado Lollo Nestlé. Feito com o delicioso chocolate Nestlé e recheado com o sabor único do creme de chocolate e avelãs do Lollo, este ovo é a escolha perfeita para tornar a sua Páscoa ainda mais especial. Surpreenda-se com cada mordida desta combinação única de sabores que vai conquistar o seu paladar.',
  },
  {
    title: 'Ovo de Páscoa Kinder Ovo Minions 100g',
    image: 'https://http2.mlstatic.com/D_NQ_NP_996124-MLB49054282798_022022-O.webp',
    price: 'Preço: R$ 150,00',
    disponibilidade: 'Disponível até 25/04/2024',
    composicao: 'Composição: Chocolate ao leite e branco, recheio de creme de baunilha',
    sobre: 'Sobre: O ovo de chocolate ao leite é acompanhado de um brinquedo colecionável no interior, que pode ser um quebra-cabeça, um mini-jogo ou uma miniatura dos Minions. É uma ótima opção para crianças que amam chocolate. Além disso, é uma maneira divertida de incentivar a criatividade e a imaginação das crianças, permitindo que elas montem e brinquem com os brinquedos colecionáveis.',
  },
  {
    title: 'Ovo de Páscoa Kinder Natoons 150g',
    image: 'https://a-static.mlcdn.com.br/800x560/ovo-de-pascoa-kinder-natoons-150g-envio-imediato-kinder-ovo/lxteletrica/5224571/c4e0a27320077fdda1fb762be45fbddf.jpeg',
    price: 'Preço: R$ 180,00',
    disponibilidade: 'Disponível até 28/04/2024',
    composicao: 'Composição: Chocolate ao leite e branco, recheio de creme de avelã',
    sobre: 'Sobre: O Ovo de Páscoa Kinder Natoons é a escolha perfeita para uma Páscoa repleta de diversão e sabor. Delicie-se com o delicioso chocolate ao leite Kinder, famoso por sua qualidade e sabor inconfundível, e ainda ganhe de brinde um divertido brinquedo da coleção Natoons. Surpreenda-se com a combinação perfeita de chocolate e diversão que só a Kinder pode oferecer.',
  },
  {
    title: 'Ovo de Páscoa Alpino Nestlé 337g',
    image: 'https://a-static.mlcdn.com.br/800x560/ovo-de-pascoa-nestle-alpino-337g/newshinex/e5a103aab12611ecb3534201ac18506b/6f6998dd905fd974a6afd04ef72cde8f.jpeg',
    price: 'Preço: R$ 250,00',
    disponibilidade: 'Disponível até 01/05/2024',
    composicao: 'Composição: Chocolate meio amargo, recheio de trufa de chocolate.',
    sobre: 'Sobre:  Para quem gosta de chocolate, esse Ovo de Páscoa Alpino da Nestlé é o que faltava para sua Páscoa ser ainda mais completa. Possui o mais puro chocolate da Nestlé com aquele típico sabor dos Alpes Suíços. Se a sua preferência é ovo de páscoa de chocolate ao leite, esse clássico irá te proporcionar doces lembranças. Caso queira presentear, o Alpino da Nestlé possui uma embalagem dourada e grandiosa que irá tornar esse momento mais especial',
  }
];

function Anuncio() {
  const navigation = useNavigation();

  const renderCard = ({ item }) => (
    <View style={styles.cartao}>
      <Image source={{ uri: item.image }} style={styles.imagemCartao} />
      <Text style={styles.tituloCartao}>{item.title}</Text>
      <TouchableOpacity style={styles.botaoVerMais} onPress={() => navigation.navigate('Informacoes', { title: item.title, image: item.image, price: item.price, disponibilidade: item.disponibilidade, composicao: item.composicao, sobre: item.sobre })}>
        <Text style={styles.textoBotaoVerMais}>Saiba Mais</Text> 
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}> 
      <Text style={styles.cabecalho}>Anúncios Promocionais</Text> 

      <FlatList
        data={products}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerCartoes}
      />
    </View>
  );
}

export default Anuncio;
