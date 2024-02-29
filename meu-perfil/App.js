import React, { Component} from 'react';
import { View, Text, Image, Linking} from 'react-native';
import Dados from './src/dadospessoais/index'
import Formacao from './src/formacao/index'
import Imagem from './src/imagem/index'
import Experiencias from './src/experiencias/index'
import Projetos from './src/projetos/index'
 
export default function App(){

    return(
      <View>
        
    <Imagem />
      <Dados />
      <Formacao />
     
      <Experiencias/>
      <Projetos />
      
    
      </View>
    
  )
}