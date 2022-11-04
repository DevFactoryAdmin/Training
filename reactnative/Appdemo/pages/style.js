import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
 
const style = StyleSheet.create({
    Welcome: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 25,
    },
    bg:{
      backgroundColor: 'black',
      flex: 1,

    },
    yellow: {
      color: 'yellow',
    },
    white: {
      color: 'white',
    },
    shadedwhite: {
      color: '#EFEFEF',
    },
    para: { 
      marginTop: 20,
      marginHorizontal: 20,
      display:'flex',
      textAlign: 'justify',
    },
    s1: {
      fontSize: 20,
    },
    s2: {
      fontSize: 10,
    },
    s3: {
      fontSize: 12,
    },
    s4: {
      fontSize: 13,
    },
    bold: {
      fontWeight: 'bold',
    },
    title: {
      marginHorizontal: 80,
      marginBottom: 10,
    },
    smalltxt: {
      marginTop: 20,
    },
    button: {
      backgroundColor: '#151515',
      width: '100%',
      display: 'flex',
      paddingVertical: 5,
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    bordedtext: {
      backgroundColor: '#151515',
      width: '100%',
      display: 'flex',
      paddingVertical: 5, 
      marginTop: 5,
      marginBottom: 5,
    },
    checkbox:{ 
    },
    checks:{
      display:'flex',
      flexDirection:'row'
      ,justifyContent:'center'
    },
    bottom:{ 
      flexDirection:"row", 
      position: 'absolute', left: 0, right: 0, bottom: 0,
      backgroundColor:'black'
    },
    bottomchild:{
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
    header:{
      display:"flex",
      marginTop:10,
      flexDirection:'row'
      ,width:'100%' 
      , justifyContent:'space-between'
    },
    headerleft:{
      display:'flex',
      flexDirection:"column"
    }
    ,row:{
      display:'flex', 
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row'
    },
    mapcontainer:{
      backgroundColor:'rgba(255,255,255,.3)',
      padding:10,
      borderRadius:10
    },
    map:{
      width:screenWidth-20,
      height:100,
    },
    top:{
      marginBottom:60
    },  
  });
  export default style;