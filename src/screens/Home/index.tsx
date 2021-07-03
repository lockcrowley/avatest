import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert, FlatList} from 'react-native';

import {style} from './style';
import {AlignJustify, Trash} from "react-native-feather";
import { Button } from '../../components/Button';

import { useNavigation, useFocusEffect, DrawerActions} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../newTask';

export interface AtividadesList{
  id: string;
  title: string;
  description: string;
};

type AtividadesListProps = AtividadesList[];

export function Home(){
  const [ativData, setAtivData] = useState<AtividadesListProps>([])

  const navigation = useNavigation();
  const Key = '@avatest:atividade';

  async function  loadAtiv() {
    const data = await AsyncStorage.getItem(Key);

    if(!data)
    return;

    setAtivData(JSON.parse(data));
    
  }

  useFocusEffect(useCallback(() => {
    loadAtiv();
  }, []));

  function navigateToNewTask(){
    navigation.navigate('NewTask');
  }

  function navigateToDetails(detail: Task){
    navigation.navigate('Description', {detail})
  }
  
  async function removeAll(){
    Alert.alert('Remover', `Deseja limpar a lista?`, [
      {
        text: 'Não',
      },
      {
        text: 'Sim',
        onPress: async () => {
          try{ 
            await AsyncStorage.removeItem(Key)
            navigation.navigate("NewTask"); 
          }catch(error) {
            Alert.alert('Não foi possível remover!')
          }
        }
      }
    ])
  }

  return(
    <View style={style.Container}>

      <View style={style.topBar}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <AlignJustify stroke="#FFF" width={32} height={32} />
        </TouchableOpacity>

        <Text style={style.Logo}>
          AVA Teste
        </Text>

        <TouchableOpacity style={style.trash} onPress={removeAll}>
          <Trash stroke="#FFF" width={32} height={32} />
          <Text style={style.trashText}>Limpar lista</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={style.sub}>Atividades</Text>
      </View>

      {/* <FlatList
        data={ativData}
        extraData={load}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigateToDetails(item)}>
              <Text style={style.ativ}>{item.title}</Text>
            </TouchableOpacity>
        )}
      /> */}

      <ScrollView style={style.border}>
        {ativData.map(item => (
          <View key={item.id}>
            <TouchableOpacity onPress={() => navigateToDetails(item)}>
              <Text style={style.ativ}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Button title="Adicionar nova atividade" onPress={navigateToNewTask}/>

    </View>
  ) 
};
