import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from './style.js';

export default function App() {
  const navigation=useNavigation();

  
const handleSignUp=()=>{
  navigation.navigate("Profile")

}

  return (
    <View style={[style.bg]}>
      <Text style={[style.yellow, style.s1, style.bold, style.title]}>
        Sign up
      </Text>
      <View>
        <Text style={[style.shadedwhite, style.bold]}>Email</Text>
        <TextInput style={[style.bordedtext]}></TextInput>
      </View>
      <View>
        <Text style={[style.shadedwhite, style.bold]}>Password</Text>
        <TextInput style={[style.bordedtext]}></TextInput>
      </View>
      <Text style={[style.white, style.s2, style.smalltxt]}>
        Passwords must contain at least 8 characters including a number and
        special character
      </Text>
      <View style={[style.bordedtext, style.left]}>
        <Text style={[style.white, style.s3]}>
          To execute the survey successfully. We need to capture your land based
          trips and low-carbon mobility choices.
        </Text>
        <Text style={[style.white, style.s3]}>
          To be able to do this. You need to agree to share the following data:
        </Text>
        <Text style={[style.white, style.s3]}>Location Data</Text>
        <Text style={[style.white, style.s3]}>Motion Data</Text>
        <Text style={[style.white, style.s3]}>
          To know more, including how we use your data, please view our Privacy
          Policy.
        </Text>
      </View>
      <TouchableOpacity style={[style.button]} onPress={handleSignUp}>
        <Text style={style.yellow} >AGREE and SIGN UP</Text>
      </TouchableOpacity>
      <Text style={[style.white, style.s2, style.smalltxt]}>By signing up you are agreeing to our Terms of Service</Text>
    </View>
  );
}
