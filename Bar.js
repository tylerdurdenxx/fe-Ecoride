import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Image, View } from 'react-native'

const Bar = ({navigation}) => {
  return (
<View style={{flex: 1, }}>
    <View style={{ alignSelf: 'center', top: '20%' , width: '100%'}}>
        <Image style={{ alignSelf: 'center', marginBottom: '10%'}} source={require('../assets/ecob.png')} />
    </View>

    
<View style={{flex:1, justifyContent: 'center', gap: '20%' , alignItems: 'center'}}>



        <TouchableOpacity  onPress={() => navigation.navigate('profile')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',borderWidth: 1 , width: '90%' , padding: 10 ,backgroundColor: '#28303C' , }}>
            {/* <Image source={require('../assets/user1.png')} /> */}
            <Text style={{ fontWeight: 700, fontSize: 18, color: '#AEFF00'}} > My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',borderWidth: 1 , width: '90%' , padding: 10 ,backgroundColor: '#28303C' , }}>
            {/* <Image source={require('../assets/h1.png')} /> */}
            <Text style={{ fontWeight: 700, fontSize: 18,color: '#AEFF00' }} > Ride History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',borderWidth: 1 , width: '90%' , padding: 10, backgroundColor: '#28303C' , }}>
            {/* <Image source={require('../assets/wallet.png')} /> */}
            <Text style={{ fontWeight: 700, fontSize: 18,color: '#AEFF00' }} >My Wallets</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',borderWidth: 1 , width: '90%' , padding: 10,backgroundColor: '#28303C'  , }}>
            {/* <Image source={require('../assets/reward.png')} /> */}
            <Text style={{ fontWeight: 700, fontSize: 18, color: '#AEFF00'}} > Rewards</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Bar
