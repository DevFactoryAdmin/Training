import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from './style.js';

import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
export default function App() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation=useNavigation();

  const handlePress=()=>{
    navigation.navigate("Welcome")
  }
  return (
    <View style={[style.bg]}>
      <Text style={[style.yellow, style.s1, style.bold, style.title]}>
        Your Profile
      </Text>
      <View>
        <Text style={[style.shadedwhite, style.bold]}>First Name</Text>
        <TextInput style={[style.bordedtext]}></TextInput>
      </View>
      <View>
        <Text style={[style.shadedwhite, style.bold]}>Last Name</Text>
        <TextInput style={[style.bordedtext]}></TextInput>
      </View>
      <View>
        <Text style={[style.shadedwhite, style.bold]}>Home Address</Text>
        <TextInput
          placeholderTextColor={'#d7d7d7'}
          placeholder="Number and Street"
          style={[style.bordedtext]}></TextInput>
        <TextInput
          placeholderTextColor={'#d7d7d7'}
          placeholder="City Town"
          style={[style.bordedtext]}></TextInput>
        <View>
          <TextInput
            placeholderTextColor={'#d7d7d7'}
            placeholder="State"
            style={[style.bordedtext]}></TextInput>
          <TextInput
            placeholderTextColor={'#d7d7d7'}
            placeholder="ZipCode"
            style={[style.bordedtext]}></TextInput>
        </View>
      </View>

      <View>
        <Text style={[style.white, style.s3]}>Preferred Modes of Travel</Text>
        <Text style={[style.white, style.s3]}>(choose all that apply)</Text>
      </View>
      <View style={style.checks}>
        <View>
          <View style={style.checkbox}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <Text style={[style.white, style.s3]}>Car</Text>
        </View>
        <View>
          <View style={style.checkbox}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <Text style={[style.white, style.s3]}>EV</Text>
        </View>
        <View>
          <View style={style.checkbox}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <Text style={[style.white, style.s3]}>eBike</Text>
        </View>
        <View>
          <View style={style.checkbox}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <Text style={[style.white, style.s3]}>Carpoct</Text>
        </View>
      </View>
      <View style={style.checks}>
        <View>
          <View style={style.checkbox}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <Text style={[style.white, style.s3]}>Bus</Text>
        </View>
        <View>
          <View style={style.checkbox}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <Text style={[style.white, style.s3]}>Metro/Train</Text>
        </View>
        </View>
        <View style={style.checks}>
        <View>
          <View style={style.checkbox}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <Text style={[style.white, style.s3]}>Bike</Text>
        </View>
        <View>
          <View style={style.checkbox}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <Text style={[style.white, style.s3]}>Walk</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handlePress} style={[style.button]}>
        <Text style={style.yellow}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}
