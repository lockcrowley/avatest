import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ArrowLeft} from "react-native-feather";

import {useRoute, useNavigation} from '@react-navigation/native'
import { Task } from '../newTask';

interface Params{
  detail: Task;
}

export function Description(){

  const route = useRoute();
  const { detail } = route.params as Params;

  function navigationBack() {
    navigation.goBack();
  }

  console.log(detail)  

  const navigation = useNavigation();

  return(
    <View style={style.Container}> 
      <View style={style.topBar}>
        <TouchableOpacity style={style.arrow} onPress={navigationBack}>
          <ArrowLeft stroke="#FFF" width={32} height={32} />
        </TouchableOpacity>

        <Text style={style.Logo}>
          Descrição
        </Text>
      </View>

      <Text style={style.title}>{detail.title}</Text>
      <Text style={style.desc}>{detail.description}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  Container:{
    flex: 1,
    alignItems:'center',
    backgroundColor:'#F5F2EE'

  },

  arrow: {
    right: 105,
  },

  Logo: {
    fontSize:22,
    color: '#FFF',
    right: 10,
  },

  topBar: {
    width: '100%',
    backgroundColor:'#FC942C',
    flexDirection:'row',
    padding: 20,
    justifyContent:'center'
  },

  title: {
    fontSize:40,
    marginTop:30,
    color: '#000000',
    fontWeight:'bold',
  },

  desc: {
    marginTop:20,
    fontSize:22,
    color: '#646464',
  }

});