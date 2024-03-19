import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './style';

const Anuncio = () => {
  return (
    <View style={{ marginTop: 45 }}>
      <ScrollView>
        <Text style={{ fontSize: 27, textAlign: 'center', color: 'red' }}>
          {"\n"}
          Anuncios Promocionais!!!!
          {"\n"}
        </Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ borderWidth: 3, marginLeft: 20, marginRight: 20 }}>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://a-static.mlcdn.com.br/800x560/ovo-de-pascoa-recheado-lollo-nestle-400g-envio-imediato/lxteletrica/ovolollo/878c81f4b18467c0f1d0edddca0a13d0.jpeg',
              }}
              style={styles.image}
            />
            <Text style={{ textAlign: 'center' }}>
              - Ovo de Páscoa Recheado Lollo Nestlé 400g {"\n"}
              {"\n"}
              R$ 153,99
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://http2.mlstatic.com/D_NQ_NP_996124-MLB49054282798_022022-O.webp',
              }}
              style={styles.image}
            />
            <Text style={{ textAlign: 'center' }}>
              - Ovo de Páscoa Kinder Ovo Minions 100g {"\n"}
              {"\n"}
              R$ 119,00
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://a-static.mlcdn.com.br/800x560/ovo-de-pascoa-kinder-natoons-150g-envio-imediato-kinder-ovo/lxteletrica/5224571/c4e0a27320077fdda1fb762be45fbddf.jpeg',
              }}
              style={styles.image}
            />
            <Text style={{ textAlign: 'center' }}>
              - Ovo de Páscoa Kinder Natoons 150g {"\n"}
              {"\n"}
              R$ 115,79
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://a-static.mlcdn.com.br/800x560/ovo-de-pascoa-nestle-alpino-337g/newshinex/e5a103aab12611ecb3534201ac18506b/6f6998dd905fd974a6afd04ef72cde8f.jpeg',
              }}
              style={styles.image}
            />
            <Text style={{ textAlign: 'center' }}>
              - Ovo de Páscoa Alpino Nestlé 337g{"\n"}
              {"\n"}
              R$ 134,99
            </Text>
          </View>
        </ScrollView>

        <Text style={styles.texts}>
          {"\n"}
          OVOS DE PASCOA 
          {"\n"}
        </Text>

      </ScrollView>
    </View>
  )
}

export default Anuncio;
