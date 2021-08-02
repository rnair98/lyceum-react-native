import * as React from 'react';
import { FC, useContext } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Dimensions, Platform, Touchable, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  useFonts,
  Roboto_400Regular,
  FiraSansCondensed_400Regular
} from "@expo-google-fonts/dev";
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthNavProps, AuthParamList } from '../src/AuthParamList';
import { AuthContext } from '../src/AuthProvider';



function LoginScreen({navigation}: AuthNavProps<'Login'>) {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    FiraSansCondensed_400Regular
  });

  const { login } = useContext(AuthContext);

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }


  return (
    <View style={styles.container}>
      <Image source={require('../assets/shape1.png')} style={styles.image} /> 
      <View style={styles.textContainer}>
        <Text style={styles.header}>Welcome!</Text>
        <View style={styles.login}>
          <Text style={styles.footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ?
            <Feather
              name="check-circle"
              color="green"
              size={20}
            />
            : null}
          </View>
          <Text style={[styles.footer, {marginTop: 35}]}>Password</Text>
          <View style={styles.action}>
            <FontAwesome
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ?
                <Feather
                  name="eye-off"
                  color="gray"
                  size={20}
                />
              : 
                <Feather
                name="eye"
                color="gray"
                size={20}
                />
              }
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="Log me in"
          onPress={() => {
            login();
          }}
        />
      </View>
      <Image source={require('../assets/rectangle1.png')} style={styles.rectangle1} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    resizeMode: 'contain',
    position: 'absolute',
    top: -15,
    right: -20,
    width: 200,
    height: 200,

  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 20,
    fontFamily: "FiraSansCondensed_400Regular",
    color: "black",
    fontSize: 45,
    letterSpacing: 0
  },
  textContainer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text1: {
    fontSize: 15,
    color: '#000000',

  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
  },
  rectangle1: {
    height: 600,
    width: 500,
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  button: {
    height:47,
    width: 247,
    paddingTop: 40,
    alignItems: "center",
  },
  footer: {
    color: '#05375a',
    fontSize: 18,
    justifyContent: 'flex-start',
    fontFamily: "FiraSansCondensed_400Regular",
  },
  login: {
    position: "relative",
    paddingHorizontal: 20,
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 400,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom:5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  }
});

export default LoginScreen;