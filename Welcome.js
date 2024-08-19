// Welcome.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('login'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Splash1.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    backgroundColor: '#28303c'
     // Set your desired background color
  },
  logo: {
    width: 222, // Set your desired width
    height: 132, // Set your desired height
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
});

export default Welcome;
