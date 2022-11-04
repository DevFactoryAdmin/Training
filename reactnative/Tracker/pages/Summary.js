import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './style/style';
export default function Summary() {
  return (
    <View style={styles.summaryOuter}> 
    <StatusBar backgroundColor="darkblue" barStyle="light-content" />
      <View style={styles.summaryActionBar}>
        <View style={styles.summaryActionBarLeft}>
          <Image style={styles.image} source={require('./images/menu.png')} />
          <Text style={styles.summaryActionBarLeftText}>Summary</Text>
        </View>
        <View style={styles.summaryActionBarRight}>
          <Text style={styles.summaryActionBarRightText}>AB</Text>
        </View>
      </View>
    </View>
  );
}
