import React, {useEffect, useState} from 'react';
import img from './images/one.png';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from './style.js';
import database from '@react-native-firebase/database';
// import auth from '@react-native-firebase/auth';

export default function App() {
  const [data, setData] = useState('testing');

  useEffect(() => {
    //  alert("Test")
    // const reference = firebase
    //   .app()
    //   .database(
    //     'https://jinuproject-d004e-default-rtdb.asia-southeast1.firebasedatabase.app/',
    //   )
    //   .ref('User');
    // reference.on('value', snapshot => {
    //   alert('test')
    //   setData(snapshot.val());
    // });
    // const users = await firestore().collection('test').get();
    // const subscriber = firestore()
    // .collection('test')
    // .doc('test')
    // .onSnapshot(documentSnapshot => {
    //   console.log('User data: ', documentSnapshot);
    //   setData("here")
    // });
  }, []);

  const navigation = useNavigation();

  const handleInsert = () => {
    database()
      .ref('/users/suresh/password123')
      .set({
        email: 'suresh',
        password: 'password123',
        age: 25,
      })
      .then(() => console.log('Data set.'));
  };
  const handleRead = () => {
    database()
      .ref('/users/suresh/password123')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      });
  };
  const handleAuth = () => {
    // auth()
    //   .createUserWithEmailAndPassword(
    //     'jane.doe@example.com',
    //     'SuperSecretPassword!',
    //   )
    //   .then(() => {
    //     console.log('User account created & signed in!');
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });
  };
  const handleSignUp = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={[style.Welcome, style.bg]}>
      <Text style={[style.yellow, style.s1, style.bold, style.title]}>
        A Plea to reduce carbon footprint{data}
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
      <TouchableOpacity style={style.button} onPress={handleInsert}>
        <Text style={style.yellow}>INSERT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={handleRead}>
        <Text style={style.yellow}>READ DATA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={handleAuth}>
        <Text style={style.yellow}>AUTH</Text>
      </TouchableOpacity>
      <Text style={[style.white, style.s2]}>
        Want to champion carbon reduction?
      </Text>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={[style.white, style.s3, style.bold]}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}
