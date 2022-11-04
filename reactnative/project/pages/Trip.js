import React from 'react';
import Footer from './Footer';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MapView, {UrlTile} from 'react-native-maps';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
import style from './style.js';
import userpic from './images/usericon.png';
import i1 from './images/1.png';
import i2 from './images/2.png';
import i3 from './images/3.png';
import {PieChart, BarChart, ProgressChart} from 'react-native-chart-kit';

import {WebView} from 'react-native-webview';

export default function App() {
  const datat = {
    data: [0.8],
  };
  const data = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  // const file=require('./test.html');

  const navigation = useNavigation();

  const backClick = () => {
    navigation.goBack();
  };
  const handleSignUp = () => {
    // alert('hi');
    navigation.navigate("NewTrip")
    // navigation.navigate('Profile');
  }; 
  const chartConfig = {
    backgroundColor: 'transparent',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  const chartConfig2 = {
    backgroundColor: 'transparent',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };
  const bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const html = `
  <!DOCTYPE html> 
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
      integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
      crossorigin="" />
    <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script
      src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
      integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
      crossorigin=""></script>
  </head>
  <body style="margin: 0">
    <div
      id="map"
      style="width: 100%; height: 100vh; background-color: 'red'"></div>
    <script>
      var map = L.map('map').setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap',
      }).addTo(map);
    </script>
  </body>
</html>

    `;
  return (
    <View style={[style.bg]}>
      <ScrollView style={style.top}>
        <View style={style.header}>
          <View style={style.headerleft}>
            <Text style={[style.white]}> </Text>
            <View>
              <Text style={[style.white]}>TODAY, JUN 6 2022</Text>
            </View>
            <Text style={[style.yellow, style.s1, style.bold]}>Trips</Text>
          </View>
          <View style={style.headerright}>
            <Image></Image>
          </View>
        </View>
        <TouchableOpacity >
          <Text style={[style.white]}> </Text>
        </TouchableOpacity>

        <Text style={[style.shadedwhite, style.bold]}>Today</Text>

        <TouchableOpacity onPress={handleSignUp} style={[style.mapcontainer, {marginTop:30}]}>
          <View style={style.container}>
            <WebView style={style.map} source={{html: html}} />
          </View>
          <View>
            <View>
              <Text style={style.white}>Grafton westborough</Text>
              <Text style={style.white}>Mon, 6 Jun - 10:20 am - 55min</Text>
            </View>
          </View>
          <Text style={style.white}>4.1 miles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.mapcontainer, {marginTop:30}]}>
          <View style={style.container}>
            <WebView style={style.map} source={{html: html}} />
          </View>
          <View>
            <View>
              <Text style={style.white}>Grafton westborough</Text>
              <Text style={style.white}>Mon, 6 Jun - 10:20 am - 55min</Text>
            </View>
          </View>
          <Text style={style.white}>4.1 miles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.mapcontainer, {marginTop:30}]}>
          <View style={style.container}>
            <WebView style={style.map} source={{html: html}} />
          </View>
          <View>
            <View>
              <Text style={style.white}>Grafton westborough</Text>
              <Text style={style.white}>Mon, 6 Jun - 10:20 am - 55min</Text>
            </View>
          </View>
          <Text style={style.white}>4.1 miles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.mapcontainer, {marginTop:30}]}>
          <View style={style.container}>
            <WebView style={style.map} source={{html: html}} />
          </View>
          <View>
            <View>
              <Text style={style.white}>Grafton westborough</Text>
              <Text style={style.white}>Mon, 6 Jun - 10:20 am - 55min</Text>
            </View>
          </View>
          <Text style={style.white}>4.1 miles</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}
