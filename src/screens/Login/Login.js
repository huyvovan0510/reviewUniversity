import React, {useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';

const Login = props => {
  const {navigation} = props || {};

  useEffect(() => {
    auth().onAuthStateChanged(data => {
      console.log('[1;34m -----------------------------------------------------');
      console.log('[1;34m ~ file: Login.js ~ line 12 ~ auth ~ data', data);
      console.log('[1;34m -----------------------------------------------------');
    });
  }, []);

  const loginFacebook = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile']);
    if (result.isCancelled) {
      alert('đăng nhập bị huỷ');
      return;
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      alert('Something went wrong obtaining access token');
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    const response = await auth().signInWithCredential(facebookCredential);
    //set  userData to store
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={loginFacebook}>
        <Text> Login </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
