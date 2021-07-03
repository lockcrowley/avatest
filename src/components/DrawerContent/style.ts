import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'#F5F2EE',
  
  },

  Logo: {
    fontSize:22,
    color: '#FFF',
    marginLeft:10,
  },

  topBar: {
    width: '100%',
    backgroundColor:'#FC942C',
    flexDirection:'row',
    padding: 20,
    justifyContent:'flex-start'
  },

  newTask: {
    flex: 1,
  },

  ativ: {
    fontSize:30,
    marginTop:10,
  },

  border:{

  },

  buttonOrder:{
    flexDirection:'row',
    alignItems:'center',

  },

  check: {
    top:7,
    marginRight:10
  },

  line: {
    backgroundColor:'#000000',
    width: '100%',
    height: 1,
    marginBottom:'100%'
  }
}) 