import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import { Colors } from '../utils/colors';

type Props = {
  title: String,
  onPress: Function,
};

const Button = ({ title, onPress }: Props) => {
  return (
    <View style={styles.btnWrapper}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: Colors.GREY_BLACK,
          borderless: false,
        }}
        style={({ pressed }) => [styles.btn(pressed)]}>
        <Text style={styles.btnText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnWrapper: {
    marginTop: 48,
    borderRadius: 6,
    overflow: 'hidden',
  },
  btn: (pressed) => ({
    backgroundColor: pressed ? Colors.SHAMROCK_2 : Colors.SHAMROCK,
  }),
  btnText: {
    padding: 18,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
