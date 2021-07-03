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

  trash: {
    left: 100,
    flexDirection:'row',
  },

  trashText:{
    alignSelf:'center',
    fontWeight:'bold',
    color:'#FFF'
  },

  ativ: {
    fontSize:30,
    marginTop:20,
  },

  border:{
    backgroundColor: '#EDE6E6',
    borderRadius:10,
    padding: 20,
    width: '70%',
  },

  sub:{
    fontSize:50,
  }
});