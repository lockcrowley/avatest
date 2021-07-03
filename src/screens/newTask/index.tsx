import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';

import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import {ArrowLeft} from "react-native-feather";
import uuid from 'react-native-uuid';
import { Input } from '../../components/Input';
import { InputBox } from '../../components/InputBox';

export interface Task {
  title: string;
  description: string;
}

const schema = Yup.object().shape({
  title:Yup
  .string()
  .required('O titulo é obrigatório'),
  description:Yup
  .string()
  .required('A descrição é obrigatória')
})

export function NewTask(){
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

    async function handleAddTask(newTaskTitle: Task) {
      const Key = '@avatest:atividade';

      try{

        const response = await AsyncStorage.getItem(Key);
        const atividades = response ? JSON.parse(response): [];

        const ativ = {
            id: String(uuid.v4()),
          ...newTaskTitle,
        }

        const saveAtiv = [
          ...atividades,
          ativ
        ]

        await AsyncStorage.setItem(Key, JSON.stringify(saveAtiv));
        console.log(atividades)

        navigation.navigate('Home');
        
      }catch(error){
        console.log(error);
        Alert.alert('Não foi possível salvar');
      }
    }

  const navigation = useNavigation();

  function navigationBack() {
    navigation.goBack();
  }

  return(
    <View style={style.Container}>

     <View style={style.topBar}>
        <TouchableOpacity style={style.arrow} onPress={navigationBack}>
          <ArrowLeft stroke="#FFF" width={32} height={32} />
        </TouchableOpacity>

        <Text style={style.Logo}>
          Registrar nova atividade
        </Text>
      </View>

      <View>
        <Input
          placeholder="Titulo da atividade"
          name="title"
          control={control}
          maxLength={18}
          error={errors.title && errors.title.message}
        />

        <InputBox
          placeholder="Descrição da atividade"
          name="description"
          control={control}
          multiline={false}
          maxLength={18}
          error={errors.description && errors.description.message}
        />
      </View>

      <Button title="Registrar" onPress={handleSubmit(handleAddTask)}/>
      
    </View>
  );
}

const style = StyleSheet.create({
  Container:{
    flex: 1,
    alignItems:'center',
    backgroundColor:'#F5F2EE'

  },

  arrow: {
    right: 45,
  },

  Logo: {
    fontSize:22,
    color: '#FFF',
  },

  topBar: {
    width: '100%',
    backgroundColor:'#FC942C',
    flexDirection:'row',
    padding: 20,
    justifyContent:'center'
  },

});