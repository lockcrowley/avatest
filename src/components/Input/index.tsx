import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps, Text} from 'react-native';
import { Control, Controller } from 'react-hook-form';

interface Props extends TextInputProps{
  name: string;
  control: Control;
  error: string;
}

export function Input({control, name, error, ...rest} : Props) {
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
                style={style.TextInput}
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
    borderRadius:10,
    alignItems:'center',
    marginTop:50,
    borderBottomColor:'#D4D2CF',
    borderBottomWidth:3,
  },

  TextInput:{
    color: '#000000',
    fontSize:20,
   
  },
  
  error: {
    fontSize:17,
    color:'red',
    marginTop:10,
    alignSelf:'center'
  }

});