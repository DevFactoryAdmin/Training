import React from 'react';
import img from './images/one.png';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style.js'
export default function App() {
     const navigation=useNavigation();
    
const handleLogin=()=>{
   navigation.navigate("Login")
}
const handleSignUp=()=>{
    navigation.navigate("Signup")

}
  return (
    <View style={[style.Welcome, style.bg]}>
      <Text style={[style.yellow, style.s1, style.bold, style.title]}>
        A Plea to reduce carbon footprint
      </Text>
      <Image source={img} />
      <View style={style.textContainer}>
        <Text style={[style.shadedwhite, style.para, style.s4]}>
          We are conducting this exercise to baseline the carbon footprint of
          individuals and communities.
        </Text>
        <Text style={[style.shadedwhite, style.para, style.s4]}>
          We truly appreciate your effort and time, you small actions would add
          up and the compound effect of the community would be a stronger force
          to achieve. substantial carbon reduction by 2030.
        </Text>
        <Text style={[style.shadedwhite, style.para, style.s4]}>
          Thank you for your valuable contribution that would leave a lasting
          impact no humanity and future generations.
        </Text>
      </View>
      <Text style={[style.white, style.s2, style.smalltxt]}>
        Already have an account?
      </Text>
      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.yellow}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={[style.white, style.s2]}>Want to champion carbon reduction?</Text>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={[style.white, style.s3, style.bold]}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}
