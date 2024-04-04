import React from 'react';
import {ImageBackground,View,KeyboardAvoidingView, Image,TextInput, TouchableOpacity,Text,StyleSheet,} from 'react-native';

export default function app(){
  
  return(
    <KeyboardAvoidingView style={styles.background}> 

    
      <View style={styles.containerLogo} >   
  
    <ImageBackground
    source={require('./assets/download.png')}
    style={styles.ImageBackground} 
    >

    
     

  
      <View style={styles.container}>

  <View ><Text style={styles.log} > Login </Text></View>

       <View ><Text style={styles.username} >Email </Text></View>
        <TextInput 
        style={styles.input1}
        placeholder='Email'
        autoCorrect={false}
        onChangeText={()=> {}}
        />

         <TextInput 
         style={styles.input3}
        placeholder='.'
        autoCorrect={false}
        onChangeText={()=> {}}
        />

 <View ><Text style={styles.username} > Senha </Text></View>

        <TextInput 
         style={styles.input2}
        placeholder='Senha'
        autoCorrect={false}
        onChangeText={()=> {}}
        />

         <TextInput 
         style={styles.input3}
        placeholder='Senha'
        autoCorrect={false}
        onChangeText={()=> {}}
        />

      

        <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}> acessar </Text>
        </TouchableOpacity>

         <TouchableOpacity  style={styles.btnSubmit2} >

        <Text style={styles.submitText2} > criar conta </Text>

        </TouchableOpacity>
      </View>



    </ImageBackground>
      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    fontfamily: "Roboto", 
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#191919',
    color:'black'
  },

  containerLogo:{
    flex:1,
    justifyContent:'center', 
    width:'100%',
    height:1,
    
  },
  log:{
    fontSize:30,
    marginBottom:55,
    color:'#C1C1C1'
  },
  ImageBackground:{
    flex:1,
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'transparent'
  },
  username:{
    marginTop:10,
    color:'#C1C1C1'
  },
  input1:{
    backgroundColor:'transparent',
    height:15,
    width:250,
    marginBottom: 0,
    color:'#222',
    fontSize:15,
    marginTop:10,
  },
   input2:{
     height:15,
    backgroundColor:'transparent',
    width:250,
    marginBottom: 0,
    color:'#222',
    fontSize:12,
    marginTop:10
    
  },
   input3:{
     height:2,
    backgroundColor:'white',
    width:250,
    marginBottom: 25,
    color:'#222',
    fontSize:12,
    
  },
  btnSubmit:{
   backgroundColor:'#484848',
    width:300,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:40,
    marginTop:20,
    borderRadius: 20
  },
  submitText:{
    color:'#FFFFFF',
    fontSize: 18
  },
  btnSubmit2:{
   backgroundColor:'#FFF',
    width:300,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 20
  },
  submitText2:{
    color:'#11111',
    fontSize: 18
  }
})