import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const End = ({ navigation }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true); // Timer starts when component mounts

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleEndRide = () => {
    setIsActive(false); 
   
    navigation.navigate('start'); 
  };
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <View>
      <View style={{ position: 'relative' }}>
        <Image resizeMode='contain' style={{ height: '100%', width: '100' }} source={require('../assets/map.jpeg')} />
      </View>

      <View style={{
        position: 'absolute',
        alignSelf: 'center',
        bottom: '0%',
        backgroundColor: 'white',
        width: '100%',
        height: '35%',
        borderTopLeftRadius: 25,
        justifyContent: 'space-evenly',
      }}>

        <View>
          <Image style={{ alignSelf: 'center' }} source={require('../assets/lineb.png')} />
          <Text style={{
            alignSelf: 'center',
            fontWeight: 700,
            fontSize: 20,
            top: '40%'
          }}>RIDE IN PROGRESS</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{ alignItems: 'center', gap: 20  ,}}>

            <View style={{}}>
              <Image style={{ top: '50%' }} source={require('../assets/time.png')} />
              <View style={{ left: '62%' }}>
              <Text style={{ color: '#28303C', fontWeight: 600, fontSize: 16 , }}>{`${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')} mins`}</Text>                
             
              </View>
            </View>

            <View style={{ flexDirection: 'row' , left: '12%' , alignItems: 'center'}}>
              <Image style={{ left: '-80%' }} source={require('../assets/map1.png')} />
              <View style={{  }}>
                <Text style={{ color: '#28303C', fontWeight: 600, fontSize: 16 , }}>0 KM</Text>
              </View>
            </View>
          </View>

          <View style={{ alignItems: 'center', top: '5%' }}>
            <Image source={require('../assets/bike.png')} />
            <Text style={{ top: '-20%' }}>ID-2341 </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#28303C', height: 40, width: 200,
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            shadowColor: 'rgba(212, 210, 212, 1, 0.5)',
            shadowOpacity: 0.2,
            shadowRadius: 10,
            shadowOffset: { width: 1, height: 8 },
          }}
          onPress={handleEndRide}>
          <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 800, fontSize: 16 }}>END RIDE </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default End;
