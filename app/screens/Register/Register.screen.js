import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextField } from '@ubaids/react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function ResgisterScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onChangeText = (type) => (val) => {
    setUserData({
      ...userData,
      [type]: val,
    });
  };

  const onPressRegister = () => {
    if (
      userData.email === '' ||
      userData.password === '' ||
      userData.username === ''
    ) {
      Alert.alert('Diisi semua dulu bro');
    } else {
      auth()
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: userData.username,
          });
          Alert.alert('Daftar user berhasil, silahkan login');
          setUserData({
            ...userData,
            username: '',
            email: '',
            password: '',
          });
          navigation.navigate('Login');
        })
        .catch((error) => Alert.alert(error.message));
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container(insets)}>
      <TextField
        label="Username"
        labelTextStyle={styles.label}
        fontSize={14}
        baseColor="rgba(75, 84, 97, 0.4)"
        tintColor="#3AD29F"
        value={userData.username}
        onChangeText={onChangeText('username')}
      />
      <View style={styles.space} />
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
      <View style={styles.btnWrapper}>
        <Pressable
          onPress={onPressRegister}
          android_ripple={{
            color: 'rgba(0,0,0,0.2)',
            borderless: false,
          }}
          style={({ pressed }) => [styles.btn(pressed)]}>
          <Text style={styles.btnText}>Daftar</Text>
        </Pressable>
      </View>
      <Text style={styles.signUp}>
        Sudah punya akun?{' '}
        <Text
          style={[styles.signUp, styles.activeText]}
          onPress={() => navigation.navigate('Login')}>
          Masuk bro
        </Text>
      </Text>
    </KeyboardAwareScrollView>
  );
}

export default ResgisterScreen;

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
