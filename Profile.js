import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import * as Font from 'expo-font';

const Profile = ({navigation}) => {

    const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        InterBlack: require('../assets/Inter-Black.ttf'),
        InterBold: require('../assets/Inter-Bold.ttf'),
        InterExtraBold: require('../assets/Inter-ExtraBold.ttf'),
        InterLight: require('../assets/Inter-Light.ttf'),
        InterMedium: require('../assets/Inter-Medium.ttf'),
        InterRegular: require('../assets/Inter-Regular.ttf'),
        InterSemiBold: require('../assets/Inter-SemiBold.ttf'),
        InterThin: require('../assets/Inter-Thin.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    
    return null; 
  }

  return (
<View style={{ flex:1 ,justifyContent: 'space-evenly' , bottom: '-5%'}}>
<View style={{ flexDirection: 'row', alignItems: 'center', left: '5%' , }}>
    <Image source={require('../assets/pfp1.png')} />

    <View>
        <Text style={{fontSize: 23, fontWeight: 700 , left: '12%' , color: '#28303C' , fontFamily: 'InterBold'}}>
            Hi, Arham
        </Text>
    </View>
</View>

<TouchableOpacity style={{ shadowColor: 'rgba(212, 210, 212, 1, 0.5)',
 shadowOpacity: 0.2,

 shadowRadius: 10,
 shadowOffset: { width: 4, height: 8 },flexDirection: 'row', justifyContent: 'space-evenly'

 }}>
    <View style={{ gap: 3 ,width: '30%', alignItems: 'center', justifyContent:'center', borderRadius: 100, height: 120,  backgroundColor: '#CEFF00'}}>
        <Image source={require('../assets/d.png')} />
        <Text style={{color: '#666666'}}>Distance</Text>
        <Text style={{fontWeight: 700, fontSize: 15 , }}>100 km</Text>
    </View>

    <View  style={{ gap: 3 , alignItems: 'center', width: '30%', alignItems: 'center', borderRadius: 100,height: 120, justifyContent:'center', backgroundColor: '#CEFF00'}}>
        <Image source={require('../assets/r.png')} />
        <Text style={{color: '#666666'}}>Rides</Text>
        <Text style={{fontWeight: 700, fontSize: 15}}>6</Text>
    </View>
</TouchableOpacity>

<View > 
    <Text style={{ width: '90%' , alignSelf: 'center', color: '#666666'}}>Account Settings</Text>

    <TouchableOpacity  style={{alignItems: 'center', borderWidth: 1, gap: '10%' , width: '90%', alignSelf: 'center' ,height: 120, justifyContent: 'center',

shadowColor: 'rgba(212, 210, 212, 1, 0.5)',
shadowOpacity: 0.4,

shadowRadius: 5,
shadowOffset: { width: 0, height: 4 },
backgroundColor: '#28303C',
top: 10
}}>
        <Text style={{ fontSize: 18, fontWeight: 500 , fontFamily: 'InterMedium' , color: 'white'}}>Arham Ali</Text>
        <Text style={{ fontSize: 18, fontWeight: 500, fontFamily: 'InterMedium',color: 'white'}}>arhamali@ecoride.com</Text>
        <Text style={{ fontSize: 18, fontWeight: 500, fontFamily: 'InterMedium', color: 'white'}}>03171234567</Text>
    </TouchableOpacity >
</View>

    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end' , width: '30%', top: '-5%', 
 shadowColor: 'rgba(212, 210, 212, 1, 0.5)',
 shadowOpacity: 0.2,

 shadowRadius: 10,
 shadowOffset: { width: 1, height: 8 }}}>
        <View  style={{ backgroundColor: '#28303C', padding: 10, borderRadius: 5, top: 10 }}>
        <Text style={{ color: '#CEFF00'}}>Edit Profile</Text>
        </View>
        
    </TouchableOpacity>
<View style={{alignItems: 'flex-start', width: '90%', alignSelf: 'center', gap: 20, bottom: 25 , borderTopWidth: 1}}>

    <Text style={{ fontSize: 16, fontWeight: 700, top: 8 ,}}>Most Recent Ride</Text>
    <View style={{bottom: -5}}>
    <Text style={{ fontSize: 16, fontWeight: 400}}>
    1- January-2024
    </Text>
    <Text style={{ fontSize: 16, fontWeight: 400}}>40 minutes</Text>
</View>
    </View>
    
</View>
  )
}

export default Profile
