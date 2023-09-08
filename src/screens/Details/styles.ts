import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/theme/styles';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.white,
  },
  header:{
    marginHorizontal:20,
    marginTop:35,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  img:{
    flex:0.44,
    marginTop:35,
    justifyContent:'center',
    alignItems:'center',
  },

  box:{
    flex:0.59,
    backgroundColor:COLORS.gray,
    marginHorizontal:8,
    marginTop:30,
    borderRadius:8,
    paddingTop:30,
    marginBottom:3,
  },
  boxs:{

    marginLeft:20,
    flexDirection:'row',
    alignItems:'flex-end',
  },
  boxx:{
    width:60,
    height:1,
    backgroundColor:COLORS.Black,
    marginBottom:4,
    marginRight:3,
  },
  name:{
    fontSize:32,
    fontWeight:'500',
  },
  sub:{
    marginLeft:20,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  title:{
    fontSize:25,
    fontWeight:'300',
    color:COLORS.Black,
  },
  sobre:{
    paddingHorizontal:10,
    marginTop:20,
  },
  sob:{
    fontSize:35,
    fontWeight:"700"
  },
  plant:{
    color:'#000',
    fontSize:16
  },
  boxy:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  boxT:{
    flexDirection:'row',
    alignItems:'center',
  },
  bnt:{
    borderColor:COLORS.Black,
    borderWidth:1,
    borderRadius:3,
    width:60,
    height:30,
    
    justifyContent:'center',
    alignItems:'center',
  },

  bntitle:{
    fontSize:16,
    fontWeight:'bold',
  },
  right:{
    right:250,
    borderColor:COLORS.Black,
    borderWidth:1,
    borderRadius:3,
    width:60,
    height:30,
    alignItems:'center',
    justifyContent:'center',
  },

  um:{
    right:125,
    fontSize:20
  },

  left:{
    width:90,
    height:35,
    backgroundColor:COLORS.Black,
    marginLeft:280,
    marginTop:-35,
    borderRadius:20
    
  },
  comp:{
    color:'#fff',
    textAlign:'center',
    marginTop:5,
  }

});