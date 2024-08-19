import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { button1 } from '../common/button'
import { bwmessage, errormessage, formgroup, head1, head2, input, label, link, link2 } from '../common/formcss'
import InputField from './InputField'


const Verification = ({ navigation, route }) => {
    const { userdata } = route.params;

    const [errormsg, setErrormsg] = useState(null);
    const [userCode, setUserCode] = useState('XXXX');
    const [actualCode, setActualCode] = useState(null);

    useEffect(() => {
        setActualCode(userdata[0]?.VerificationCode);
    }, [])

    // const Sendtobackend = () => {
    //     // console.log(userCode);
    //     // console.log(actualCode);

    //     if (userCode == 'XXXX' || userCode == '') {
    //         setErrormsg('Please enter the code');
    //         return;
    //     }

    //     else if (userCode == actualCode) {
    //         // console.log('correct code');
    //         const fdata = {
    //             email: userdata[0]?.email,
    //             password: userdata[0]?.password,
    //             name: userdata[0]?.name,
    //             address: userdata[0]?.address,
    //             dob: userdata[0]?.dob,
    //         }

    //         fetch('http://192.168.0.105:3000/signup', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(fdata)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log(data);
    //                 if (data.message === 'User Registered Successfully') {
    //                     alert(data.message);
    //                     navigation.navigate('login')
    //                 }
    //                 else {
    //                     alert("Something went wrong !! Try Signing Up Again");
    //                 }
    //             })
    //     }
    //     else if (userCode != actualCode) {
    //         setErrormsg('Incorrect code');
    //         return;
    //     }
    // }

    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            <View style={{}}>
                <Text style={{ fontSize: 40, fontWeight: 800, color: '#28303C', paddingBottom: 10, alignSelf: 'center' }}>Verification</Text>
                <Text style={{ fontSize: 14, fontWeight: 500, color: 'black' , paddingBottom: 10, }}>
                    A Code has been sent to you on your email</Text>
                {
                    errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
                }

                <View style={{ paddingBottom: 10}}>
                    <InputField
                        placeholder="Enter 6 digit Verification Code"
                        placeholderTextColor="#666666"
                        isPassword={true}
                        onChangeText={(text) => setUserCode(text)}
                        onPressIn={() => setErrormsg(null)}
                    />

                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{
                    
                    backgroundColor: '#AEFF00', height: 56, width: 299,
                    justifyContent: 'center', borderRadius: 10,
                    shadowColor: 'rgba(209, 255, 82, 1, 0.5)',
                    shadowOpacity: 0.6,
                    elevation: 6,
                    shadowRadius: 15,
                    shadowOffset: { width: 1, height: 10 },
                }}>
                    <Text style={{ color: 'black', alignSelf: 'center', fontWeight: 800, fontSize: 16 }}>Verify</Text>
                </TouchableOpacity>







            </View>
        </View>
    )
}

export default Verification


