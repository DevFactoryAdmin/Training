import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from './style.js';
import userpic from './images/usericon.png';
import i1 from './images/1.png';
import i2 from './images/2.png';
import i3 from './images/3.png';

export default function App() {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('Profile');
  };
  const handleTravel=()=>{
    navigation.navigate('Travel');
    
  }
  const handleToday=()=>{
    navigation.navigate('Today');
    
  }

  return (
    <View style={[style.bg]}>
      <ScrollView>
        <View style={style.header}>
          <View style={style.headerleft}>
            <Text style={[style.white]}>MON JUN 6</Text>
            <Text style={[style.yellow, style.s1,style.bold]}>
              Dashboard
            </Text>
          </View>
          <View  style={style.headerright}>
            <Image source={userpic}></Image>
          </View>
        </View>
        <Text style={[style.shadedwhite, style.bold]}>Today</Text>

        <TouchableOpacity onPress={handleToday} style={[style.bordedtext, style.left]}>
          <Text style={[style.white, style.s3]}>Trips</Text>
          <Text style={[style.white, style.s3]}>30 miles</Text>
          <Text style={[style.white, style.s3]}>Lo-Carbon</Text>
          <Text style={[style.white, style.s3]}>5 miles</Text>
          <Text style={[style.white, style.s3]}>Hi-Carbon</Text>
          <Text style={[style.white, style.s3]}>25 miles</Text>
        </TouchableOpacity>
        <Text style={[style.shadedwhite, style.bold]}>Travel Modes</Text>

        <TouchableOpacity onpress={handleTravel} style={[style.bordedtext, style.left]}>
          <Text style={[style.white, style.s3]}>Trips</Text>
          <Text style={[style.white, style.s3]}>4030 miles</Text>
          <Text style={[style.white, style.s3]}>Lo-Carbon</Text>
          <Text style={[style.white, style.s3]}>178 miles</Text>
          <Text style={[style.white, style.s3]}>Most Lo-Carbon mode</Text>
          <Text style={[style.white, style.s3]}>80 miles</Text>
        </TouchableOpacity>
        <Text style={[style.shadedwhite, style.bold]}>
          Days until survey closure
        </Text>
        <View>
          <View></View>
          <Text style={[style.white, style.s3]}>16 days to go</Text>
          <Text style={[style.white, style.s3]}>30 Days</Text>
        </View>
      </ScrollView>
      <View style={style.bottom}>
        <View style={style.bottomchild}>
          <Image source={i1} />
          <Text style={[style.white, style.s3]}>Dash</Text>
        </View>
        <View style={style.bottomchild}>
          <Image source={i2} />
          <Text style={[style.white, style.s3]}>Trips</Text>
        </View>
        <View style={style.bottomchild}>
          <Image source={i3} />
          <Text style={[style.white, style.s3]}>Feedback</Text>
        </View>
      </View>
    </View>
  );
}
