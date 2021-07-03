import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Check} from "react-native-feather";
import {style} from './style';
import { Task } from '../../screens/newTask';

export interface AtividadesList{
  id: string;
  title: string;
  description: string;
};

type AtividadesListProps = AtividadesList[];

const DrawerContent = (
  props: DrawerContentComponentProps,
): React.ReactElement => {

  const [ativData, setAtivData] = useState<AtividadesListProps>([])

  const navigation = useNavigation();

  const Key = '@avatest:atividade';

  async function  loadAtiv() {
    const data = await AsyncStorage.getItem(Key);

    if(!data)
    return;

    setAtivData(JSON.parse(data));
    
  }

  useEffect(() => {
    loadAtiv
  }, []);

  useFocusEffect(useCallback(() => {
    loadAtiv();
  }, []));

  function navigateToDetails(detail: Task){
    navigation.navigate('Description', {detail})
  }

  return(
    <View style={style.Container}>

      <View style={style.topBar}>
        <Text style={style.Logo}>
          AVA Teste
        </Text>
      </View>

      <ScrollView style={style.border}>
        {ativData.map(item => (
          <View key={item.id}>
            <TouchableOpacity style={style.buttonOrder} onPress={() => navigateToDetails(item)}>
              <Check style={style.check} stroke="#000000" width={32} height={32}/>
              <Text style={style.ativ}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={style.line}/>

    </View>
  )
}

export default DrawerContent;