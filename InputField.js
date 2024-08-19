import React, { useState } from 'react';
import { TextInput, View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const InputField = ({ placeholder, isPassword, leftImg, isEmail, ...rest }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <View style={styles.inputContainer}>
      {leftImg && (
        <Image
          source={leftImg}
          style={styles.Licon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isShow}
        placeholderTextColor="#666666"
        {...rest}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setIsShow((prev) => !prev)} style={styles.iconContainer}>
          <Image
            source={require('../assets/eye.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: 299,
    height: 46,
    fontSize: 14,
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.9,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },



  },

  input: {
    flex: 1,
    height: 40,
    color: '#666666',
    fontSize: 14,
    marginLeft: 5,
  },
  iconContainer: {
    padding: 0,
  },
  icon: {
    width: 22,
    height: 20,
    resizeMode: 'contain',
    right: -4
  },
  Licon: {
    width: 19,
    height: 18,
    resizeMode: 'contain',
    marginRight: 10
  },
});

export default InputField;
