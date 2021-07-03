import React from 'react';
import {View, Text, TouchableOpacityProps, StyleSheet, TouchableOpacity} from 'react-native';

interface Props extends TouchableOpacityProps{
  title: string;
  onPress:() => void;
}

export function Button({title, onPress, } : Props){
  return(
      <View style={style.newTask}>
        <TouchableOpacity style={style.button} onPress={onPress}>
          <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
      </View>
  )
}

const style = StyleSheet.create({
  newTask: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems:'center',
    marginBottom:50,
  },

  button: {
    backgroundColor: '#FC942C',
    borderRadius: 10,
    height: 50,
    width: 330,
    justifyContent:'center',
    alignItems:'center',

  },

  text: {
    fontSize:20,
    color: '#FFF',
  },
})

