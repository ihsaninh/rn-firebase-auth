import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

import IconIlustrasi from '@app/assets/images/ilustrasi.svg';

function OnBoardScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  const onPressRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container(insets)}>
      <Text style={styles.title}>Chat Kuy</Text>
      <Text style={styles.subtitle}>
        Kuy kita chatan dengan teman atau sama doi gan!
      </Text>
      <SvgXml
        xml={IconIlustrasi}
        width="270"
        height="270"
        style={styles.ilustrasi}
      />
      <View style={styles.absolute(insets)}>
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
        <Text style={styles.doLogin} onPress={onPressLogin}>
          Sudah punya akun? Masuk disini
        </Text>
      </View>
    </View>
  );
}

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: (insets) => ({
    flex: 1,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  }),
  title: {
    marginTop: 80,
    fontSize: 34,
    color: '#3AD29F',
    // fontWeight: 'bold',
  },
  subtitle: {
    paddingTop: 20,
    lineHeight: 28,
    fontSize: 18,
    color: '#3E4A59',
    fontWeight: '300',
  },
  ilustrasi: {
    alignSelf: 'center',
    marginTop: 30,
  },
  btnWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  btn: (pressed) => ({
    backgroundColor: pressed ? 'rgba(58, 210, 159, 0.9)' : '#3AD29F',
  }),
  btnText: {
    padding: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  absolute: (insets) => ({
    position: 'absolute',
    bottom: insets.bottom + 16,
    left: 16,
    right: 16,
  }),
  doLogin: {
    opacity: 0.5,
    textAlign: 'center',
    paddingTop: 24,
    color: '#3E4A59',
  },
});
