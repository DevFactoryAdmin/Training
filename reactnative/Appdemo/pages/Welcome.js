import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from './style.js';

export default function App() {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={[style.bg]}>
      <Text style={[style.yellow, style.s1, style.bold, style.title]}>
        Welcome John Doe
      </Text>
      <View style={[style.bordedtext, style.left]}>
        <Text style={[style.white, style.s3]}>
          We truly value your time and we strive to auto detect your trips as
          much as possible. For us to do that, we request you to enable these
          permissions on your device
        </Text>
        <Text style={[style.white, style.s3]}>Precise Location</Text>
        <Text style={[style.white, style.s3]}>Motion Detection</Text>
        <Text style={[style.white, style.s3]}>Notifications</Text>
        <Text style={[style.white, style.s3]}>
          Please click the icons to enable them
        </Text>
      </View> 
      <TouchableOpacity style={[style.button]} onPress={handleSignUp}>
        <Text style={style.yellow} >READY TO CHAMPION CARBON REDUCTION</Text>
      </TouchableOpacity>
    </View>
  );
}
