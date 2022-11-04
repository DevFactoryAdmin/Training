import React from 'react';
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
import {PieChart, BarChart} from 'react-native-chart-kit';

export default function App() {
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

  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('Profile');
  };
  const handleTravel = () => {
    navigation.navigate('Travel');
  };
  const handleToday = () => {
    navigation.navigate('Today');
  };
  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
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
  const bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  return (
    <View style={[style.bg]}>
      <ScrollView style={style.top}>
        <View style={style.header}>
          <View style={style.headerleft}>
            <Text style={[style.white]}> </Text>
            <Text style={[style.yellow, style.s1, style.bold]}></Text>
          </View>
          <View style={style.headerright}>
            <Image source={userpic}></Image>
          </View>
        </View>
        <View>
          <Text style={[style.white]}>{'<'} Dashboard </Text>
        </View>
        <View>
          <Text style={[style.white]}>TODAY, JUN 6 2022</Text>
        </View>
        <View style={style.row}>
          <PieChart
            data={data}
            width={160}
            height={100}
            hasLegend={false}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
          />
          <PieChart
            data={data}
            width={160}
            height={100}
            hasLegend={false}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
          />
        </View>
        <Text style={[style.shadedwhite, style.bold]}>Trips</Text>

        <Text style={[style.shadedwhite, style.bold]}>30 miles</Text>
        <View>
          <BarChart
            style={style.graphStyle}
            data={bardata}
            width={screenWidth}
            height={220}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
        </View>

        <Text style={[style.shadedwhite, style.bold]}>Lo-Co2 Trips</Text>
        <View style={style.mapcontainer}>
          <View style={style.container}>
            <MapView
              style={style.map}
              zoomEnabled={true}
              scrollEnabled={true}
              showsScale={true}
              mapType={Platform.OS == 'android' ? 'none' : 'standard'}
              region={{
                latitude: 9.9312,
                longitude: 76.2673,
                latitudeDelta: 10,
                longitudeDelta: 10,
              }}>
              <UrlTile
                urlTemplate={'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                maximumZ={19}
                flipY={false}
              />
            </MapView>
          </View>
          <View>
            <View>
              <Text style={style.white}>Grafton westborough</Text>
              <Text style={style.white}>Mon, 6 Jun - 10:20 am - 55min</Text>
            </View>
          </View>
          <Text style={style.white}>4.1 miles</Text>
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
 
