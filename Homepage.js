import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { head1 } from '../common/formcss'
import { button1 } from '../common/button'
import Icon from 'react-native-vector-icons/FontAwesome';

const Homepage = ({ navigation }) => {

 
    return (
        <View>
            <View style={{ position: 'relative' }}>


                <Image resizeMode='contain' style={{ height: '100%', width: '100', }} source={require('../assets/map.jpeg')} />
            </View>

            <Icon style={{position: 'absolute' , padding: '5%', paddingTop: '10%'}}
        name="bars" // Name of the icon (hamburger icon)
        size={30} // Size of the icon
        color="white" // Color of the icon
      />
            <View style={{ position: 'absolute', 
            alignSelf: 'center', bottom: '0%', 
            backgroundColor: 'white', width: '100%', height: '35%', borderTopLeftRadius: 25 , justifyContent: 'space-evenly'}}>

<Image style={{ alignSelf: 'center', top: '-5%'}}source={require('../assets/lineb.png')} />

                <Text style={{ alignSelf: 'center' ,
            fontWeight: 700,
            fontSize: 16,
            top: '1%'
            }}>Block A, SSUET</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 700,
                        fontSize: 30}}>18</Text>
                        <Text style={{
                            fontWeight: 500,
                            fontSize: 16
                        }}>Bike</Text>
                    </View>

                {/* <View>
                    <Image source={require('../assets/line.png')} />
                </View> */}
                    <View style={{ alignItems: 'center'}}>

                        <Text style={{ fontWeight: 700,
                        fontSize: 30}}>24</Text>
                        <Text>Docks Available </Text>
                    </View>
                </View>



                <TouchableOpacity style={{
                        backgroundColor: '#28303C', height: 40, width: 200,
                        justifyContent: 'center', 
                        alignSelf: 'center',
                        borderRadius: 10,
                        shadowColor: 'rgba(212, 210, 212, 1, 0.5)',
                        shadowOpacity: 0.2,

                        shadowRadius: 10,
                        shadowOffset: { width: 1, height: 8 },
                }}
                onPress={() => navigation.navigate('Start')}>
                     <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 800, fontSize: 16 }}>SCAN TO UNLOCK </Text>
                </TouchableOpacity>


            </View>



        </View>
    )
}

export default Homepage
