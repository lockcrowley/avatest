import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps, Text} from 'react-native';
import { Control, Controller } from 'react-hook-form';

interface Props extends TextInputProps{
  name: string;
  control: Control;
  error: string;
}

export function InputBox({control, name, error, ...rest} : Props) {
  return(
    <>
      <View style={style.InputS}>
          <Controller
            control={control}
            render={({ field: {onChange, value}}) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                {...rest} 
                style={style.BoxS}
              />
          )}
          name={name}
        />
      </View>

      {error && <Text style={style.error}>{error}</Text>}
    </>
  )
};

const style = StyleSheet.create({
  InputS: {
    backgroundColor:'#EDE6E6',
    borderRadius:10,
    marginTop:50,
    alignItems:'center',
  },

  BoxS: {
    borderRadius:10,
    width: '60%',
    height: 120,
    fontSize:20
  },

  error: {
    fontSize:17,
    color:'red',
    marginTop:10,
    alignSelf:'center'
  }

});