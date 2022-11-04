import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {PieChart, BarChart, ProgressChart} from 'react-native-chart-kit';
import {useNavigation} from '@react-navigation/native';
import style from './style.js';
import userpic from './images/usericon.png';
import Footer from './Footer';

export default function App() {
  const datat = {
    data: [0.8],
  };
  const chartConfig2 = {
    backgroundGradientFrom: '#151515',
    backgroundGradientTo: '#151515',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, 0.6)`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, 1)`,
  };
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('Profile');
  };
  const handleNewTravel = () => { 
    navigation.navigate('Travel');
  }; 
  const handleToday = () => {
    navigation.navigate('Today');
  };

  return (
    <View style={[style.bg]}>
      <ScrollView>
        <View style={style.header}>
          <View style={style.headerleft}>
            <Text style={{color: 'white'}}>MON JUN 6</Text>
            <Text style={[style.yellow, style.s1, style.bold]}>Dashboard</Text>
          </View>
          <View style={style.headerright}>
            <Image source={userpic}></Image>
          </View>
        </View>
        <Text style={[style.shadedwhite, style.bold]}>Today</Text>

        <TouchableOpacity
          onPress={handleToday}
          style={[
            style.bordedtext,
            style.left,
            {flex: 3, flexDirection: 'row', borderRadius: 5},
          ]}>
          <View style={{flex: 1}}>
            <Text style={[style.white, style.s3]}>Trips</Text>
            <Text
              style={[
                style.white,
                style.s3,
                {color: '#f0c800', fontSize: 18, fontWeight: 'bold'},
              ]}>
              30 miles
            </Text>
            <Text style={[style.white, style.s3]}>Lo-Carbon</Text>
            <Text
              style={[
                style.white,
                style.s3,
                {color: '#60eb62', fontSize: 18, fontWeight: 'bold'},
              ]}>
              5 miles
            </Text>
            <Text style={[style.white, style.s3]}>Hi-Carbon</Text>
            <Text
              style={[
                style.white,
                style.s3,
                {color: '#d11313', fontSize: 18, fontWeight: 'bold'},
              ]}>
              25 miles
            </Text>
          </View>
          <ProgressChart
            style={{flex: 1}}
            data={datat}
            width={160}
            height={100}
            strokeWidth={15}
            radius={40}
            chartConfig={chartConfig2}
            hideLegend={true}
          />
          <ProgressChart
            style={{flex: 1}}
            data={datat}
            width={160}
            height={100}
            strokeWidth={15}
            radius={40}
            chartConfig={chartConfig2}
            hideLegend={true}
          />
        </TouchableOpacity>
        <Text style={[style.shadedwhite, style.bold]}>Travel Modes</Text>

        <TouchableOpacity
          onPress={handleNewTravel}
          style={[
            style.bordedtext,
            style.left,
            {flex: 3, flexDirection: 'row', borderRadius: 5},
          ]}>
          <View style={{flex: 1}}>
            <Text style={[style.white, style.s3]}>Trips</Text>
            <Text
              style={[
                style.white,
                style.s3,
                {color: '#f0c800', fontSize: 18, fontWeight: 'bold'},
              ]}>
              4030 miles
            </Text>
            <Text style={[style.white, style.s3]}>Lo-Carbon</Text>
            <Text
              style={[
                style.white,
                style.s3,
                {color: '#60eb62', fontSize: 18, fontWeight: 'bold'},
              ]}>
              178 miles
            </Text>
            <Text style={[style.white, style.s3]}>Most Lo-Carbon mode</Text>
            <Text
              style={[
                style.white,
                style.s3,
                {color: '#159cd6', fontSize: 18, fontWeight: 'bold'},
              ]}>
              80 miles
            </Text>
          </View>
          <ProgressChart
            style={{flex: 1}}
            data={datat}
            width={160}
            height={100}
            strokeWidth={15}
            radius={40}
            chartConfig={chartConfig2}
            hideLegend={true}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[style.white]}>CO2eSaved</Text>
            <Text
              style={[
                style.white,
                style.s3,
                {color: '#60eb62', fontSize: 18, fontWeight: 'bold'},
              ]}>
              16 Kg
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={[
            style.shadedwhite,
            style.bold,
            {fontSize: 16, marginTop: 20, marginBottom: 10},
          ]}>
          Days until survey closure
        </Text>
        <View
          style={{
            backgroundColor: '#151515',
            borderRadius: 5,
            flexDirection: 'row',
            padding: 10,
            paddingRight: '15%',
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#000',
              flexDirection: 'row',
            }}>
            <View style={{width: '50%', backgroundColor: '#159cd6'}}>
              <Text></Text>
            </View>
            <Text style={[style.white, style.s3]}>16 days to go</Text>
          </View>
          <Text style={[style.white, style.s3]}>30 Days</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
