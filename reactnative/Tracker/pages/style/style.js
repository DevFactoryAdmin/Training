import {StyleSheet} from 'react-native';
const white = 'white';
const blue = 'blue';

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: blue,
    color: white,
  },
  white: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    color: white,
    fontSize: 30,
  },
  secondary: {
    color: 'white',
  },
  outer: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100%',
  },
  main: {
    textAlign: 'center',
  },
  imageview: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {},
  googlebutton: {
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 50,
    marginBottom: 10,
  },
  center: {
    textAlign: 'center',
    width: '100%',
  },
  labels: {
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  inputs: {
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowmain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  loginbtn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  blue: {
    color: 'blue',
  },
  summaryActionBar: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  summaryActionBarLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryActionBarRightText: {
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    color: 'white',
    borderRadius: 25,
  },
  summaryActionBarLeftText: {
    fontWeight: 'bold',
    fontSize: 22,
    color:'black',
    marginLeft: 5,
  },
});

export default styles;
