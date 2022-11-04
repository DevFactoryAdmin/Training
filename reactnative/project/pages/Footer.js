import React from 'react'
import style from './style.js';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import i1 from './images/1.png';
import i2 from './images/2.png';
import i3 from './images/3.png';
import { useNavigation } from '@react-navigation/native';
export default function Footer(){
  
  const navigation = useNavigation();
  const handleDashboard = () => {
    navigation.navigate('Dashboard');
  };
  
  const handleTrip = () => {
    navigation.navigate('Tripdetail');
  };
  
  const handleFeedBack = () => {
    navigation.navigate('Dashboard');
  };
    return <View style={style.bottom}>
    <TouchableOpacity style={style.bottomchild} onPress={handleDashboard}>
      <Image source={i1} />
      <Text style={[style.white, style.s3]}>Dash</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.bottomchild} onPress={handleTrip}>
      <Image source={i2} />
      <Text style={[style.white, style.s3]}>Trips</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.bottomchild} onPress={handleFeedBack}>
      <Image source={i3} />
      <Text style={[style.white, style.s3]}>Feedback</Text>
    </TouchableOpacity>
  </View>
}