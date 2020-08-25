import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { View, Text, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextField } from '@ubaids/react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from '@components/button.component';

import { validateEmail } from '../../utils/helper';
import { Colors } from '../../utils/colors';
import { styles } from './Login.style';

function LoginScreen({ navigation }) {
  const authRef = auth();
  const insets = useSafeAreaInsets();
  const [inputErrors, setInputErrors] = useState({});
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

  const onFocus = (type) => () => {
    setInputErrors({
      ...inputErrors,
      [type]: '',
    });
  };

  const onPressLogin = () => {
    const { email, password } = userData;
    let errors = {};
    let error = false;

    if (email === '') {
      errors = {
        ...errors,
        email: 'Email tidak boleh kosong',
      };
      error = true;
    } else if (!validateEmail(email)) {
      errors = {
        ...errors,
        email: 'Format Email tidak valid',
      };
      error = true;
    }

    if (password === '') {
      errors = {
        ...errors,
        password: 'Password tidak boleh kosong',
      };
      error = true;
    }

    if (error) {
      setInputErrors(errors);
    }

    authRef
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Room');
      })
      .catch((err) => Alert.alert(err.message));
  };

  return (
    <KeyboardAwareScrollView style={styles.container(insets)}>
      <Text style={styles.greeting}>Selamat datang kembali!</Text>
      <TextField
        label="Alamat Email"
        labelTextStyle={styles.label}
        keyboardType="email-address"
        fontSize={14}
        baseColor={Colors.GREY}
        tintColor={Colors.SHAMROCK}
        value={userData.email}
        error={inputErrors.email}
        onFocus={onFocus('email')}
        onChangeText={onChangeText('email')}
      />
      <View style={styles.space} />
      <TextField
        label="Kata Sandi"
        labelTextStyle={styles.label}
        fontSize={14}
        baseColor={Colors.GREY}
        tintColor={Colors.SHAMROCK}
        value={userData.password}
        error={inputErrors.password}
        onFocus={onFocus('password')}
        onChangeText={onChangeText('password')}
        secureTextEntry
      />
      <Text style={styles.forgot}>Lupa kata sandi?</Text>
      <Button title="Masuk" onPress={onPressLogin} />
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
}

export default LoginScreen;
