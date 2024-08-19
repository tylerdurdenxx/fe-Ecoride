import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import InputField from './InputField'



const Login1 = ({ navigation }) => {

    const [fdata, setFdata] = useState({
        email: '',
        password: ''
    })
    const [errormsg, setErrormsg] = useState(null);

    // const Sendtobackend = () => {
    //     // console.log(fdata);
    //     if (fdata.email == '' || fdata.password == '') {
    //         setErrormsg('*All fields are required');
    //         return;
    //     }
    //     else {
    //         fetch('http://192.168.0.105:3000/signin', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(fdata)
    //         })
    //             .then(res => res.json()).then(
    //                 data => {
    //                     // console.log(data);
    //                     if (data.error) {
    //                         setErrormsg(data.error);
    //                     }
    //                     else {
                            
    //                         navigation.navigate('homepage');
    //                     }
    //                 }
    //             )
    //     }
    // }


    return (

        <View style={{ flex: 2, flexDirection: 'column', alignContent: 'center', top: 120 }}>
            <View style={{ top: -20 }}>
                <Image resizeMode='contain' style={{ width: 380, height: 160, alignSelf: 'center' }}
                    source={require('../assets/Splash1.png')}
                />
            </View>
            <View>
                <Text style={{ fontSize: 40, fontWeight: 800, color: '#28303C', top: 20, left: 60, }}>Login
                </Text>
                <Text style={{ fontSize: 14, fontWeight: 700, color: '#BDBABA', top: 21, left: 60 }}>Please sign in to continue.</Text>
            </View>

            <View>
                <View style={{ flexDirection: 'column', alignItems: 'center', top: 45, }}>


                    {
                        errormsg ? <Text style={{ color: 'red' }}>{errormsg}</Text> : null
                    }

                    <InputField
                        placeholder="Email"
                        placeholderTextColor="#666666"
                        secureTextEntry={false}
                        leftImg={require('../assets/email.png')}
                        keyboardType={'email-address'}
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, email: text })}
                    />
                    <InputField
                        placeholder="Password"
                        placeholderTextColor="#666666"
                        isPassword={true}
                        leftImg={require('../assets/pass.png')}
                        onChangeText={(text) => setFdata({ ...fdata, password: text })}
                        onPressIn={() => setErrormsg(null)}

                    />


                </View>

                <View style={{ alignItems: 'center', top: 80 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('homepage')} style={{
                        backgroundColor: '#28303C', height: 56, width: 299,
                        justifyContent: 'center', borderRadius: 10,
                        shadowColor: 'rgba(212, 210, 212, 1, 0.5)',
                        shadowOpacity: 0.2,

                        shadowRadius: 10,
                        shadowOffset: { width: 1, height: 8 },
                    }}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 800, fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', top: 110 }}>
                    <Text style={{
                        fontSize: 14, fontWeight: 500, color: '#28303C',
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowOpacity: 0.7,
                        elevation: 6,
                        shadowRadius: 15,
                        shadowOffset: { width: 1, height: 13 },
                    }}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signup')}><Text style={{ fontSize: 14, fontWeight: 800, }}> Sign-up</Text></TouchableOpacity>
                </View>
            </View>



        </View>
    )
}

export default Login1