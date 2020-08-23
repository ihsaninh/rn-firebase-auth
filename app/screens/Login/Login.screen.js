import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextField } from '@ubaids/react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const onChangeText = (type) => (val) => {
    setUserData({
      ...userData,
      [type]: val,
    });
  };

  const onPressLogin = () => {
    if (userData.email === '' || userData.password === '') {
      Alert.alert('Diisi semua dulu bro');
    } else {
      auth()
        .signInWithEmailAndPassword(userData.email, userData.password)
        .then((res) => {
          console.log(res);
          setUserData({
            ...userData,
            email: '',
            password: '',
          });
          navigation.navigate('Room');
        })
        .catch((error) => Alert.alert(error.message));
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container(insets)}>
      <Text style={styles.greeting}>Selamat datang kembali!</Text>
      <TextField
        label="Alamat Email"
        labelTextStyle={styles.label}
        keyboardType="email-address"
        fontSize={14}
        baseColor="rgba(75, 84, 97, 0.4)"
        tintColor="#3AD29F"
        value={userData.email}
        onChangeText={onChangeText('email')}
      />
      <View style={styles.space} />
      <TextField
        label="Kata Sandi"
        labelTextStyle={styles.label}
        fontSize={14}
        baseColor="rgba(75, 84, 97, 0.4)"
        tintColor="#3AD29F"
        value={userData.password}
        onChangeText={onChangeText('password')}
        secureTextEntry
      />
      <Text style={styles.forgot}>Lupa kata sandi?</Text>
      <View style={styles.btnWrapper}>
        <Pressable
          onPress={onPressLogin}
          android_ripple={{
            color: 'rgba(0,0,0,0.2)',
            borderless: false,
          }}
          style={({ pressed }) => [styles.btn(pressed)]}>
          <Text style={styles.btnText}>Masuk</Text>
        </Pressable>
      </View>
      <Text style={styles.signUp}>
        User baru bro?{' '}
        <Text
          style={[styles.signUp, styles.activeText]}
          onPress={() => navigation.navigate('Register')}>
          Bikin akun dulu
        </Text>
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: (insets) => ({
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: insets.bottom,
    paddingTop: insets.top,
    paddingHorizontal: 16,
  }),
  label: {
    fontSize: 20,
    color: 'blue',
  },
  greeting: {
    paddingTop: 80,
    paddingBottom: 40,
    fontSize: 30,
    fontWeight: '300',
  },
  space: {
    height: 8,
  },
  forgot: {
    textAlign: 'right',
    paddingTop: 16,
    fontWeight: '300',
    color: '#3AD29F',
  },
  btnWrapper: {
    marginTop: 48,
    borderRadius: 6,
    overflow: 'hidden',
  },
  btn: (pressed) => ({
    backgroundColor: pressed ? 'rgba(58, 210, 159, 0.9)' : '#3AD29F',
  }),
  btnText: {
    padding: 18,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  signUp: {
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 16,
    color: 'rgba(75, 84, 97, 0.7)',
    fontWeight: '300',
  },
  activeText: {
    color: '#3AD29F',
  },
});
