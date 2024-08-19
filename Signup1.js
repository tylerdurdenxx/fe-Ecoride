import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView , Platform} from 'react-native'
import InputField from './InputField'



const Signup1 = ({ navigation }) => {

    const [fdata, setFdata] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        dob: '',
        address: '',
    })

    const [errormsg, setErrormsg] = useState(null);

    // const Sendtobackend = () => {
    //     // // console.log(fdata);
    //     // if (fdata.name == '' ||
    //     //     fdata.email == '' ||
    //     //     fdata.password == '' ||
    //     //     fdata.cpassword == ''
    //     // ) {
    //     //     setErrormsg('All fields are required');
    //     //     return;
    //     // }
    //     // else {
    //     //     if (fdata.password != fdata.cpassword) {
    //     //         setErrormsg('Password and Confirm Password must be same');
    //     //         return;
    //     //     }
    //     //     else {
    //     //         fetch('http://192.168.0.105:3000/verify', {
    //     //             method: 'POST',
    //     //             headers: {
    //     //                 'Content-Type': 'application/json'
    //     //             },
    //     //             body: JSON.stringify(fdata)
    //     //         })
    //     //             .then(res => res.json()).then(
    //     //                 data => {
    //     //                     // console.log(data);
    //     //                     if (data.error === 'Invalid Credentials') {
    //     //                         // alert('Invalid Credentials')
    //     //                         setErrormsg('Invalid Credentials')
    //     //                     }
    //     //                     else if (data.message === "Verification Code Sent to your Email") {
    //     //                         // console.log(data.udata);

    //     //                         navigation.navigate('verification', { userdata: data.udata })
    //     //                     }
    //     //                 }
    //     //             )
    //     //     }
    //     // }  


        


    // }

    return (

        <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', }}>
            <View style={{ top: 30 }}>
                <Image resizeMode='contain' style={{ width: 380, height: 160, alignSelf: 'center', }}
                    source={require('../assets/Splash1.png')}
                />
            </View>
            <View style={{ top: 40 }}>
                <View >
                    <Text style={{ fontSize: 40, fontWeight: 800, color: '#28303C', top: 20, left: 60, }}>Create Account
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: 700, color: '#BDBABA', top: 21, left: 60 }}>Please sign in to continue.</Text>
                </View>

                <View>
                <KeyboardAvoidingView style={{}}
                         behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
                         >
                    <View style={{ flexDirection: 'column', alignItems: 'center', top: 45, }}>

                        {
                            errormsg ? <Text style={{color: 'red'}}>{errormsg}</Text> : null
                        }
                        
                         <InputField
                            placeholder="Full Name"
                            placeholderTextColor="#666666"
                            secureTextEntry={false}
                            leftImg={require('../assets/email.png')}
                    
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, name: text })} />
                        <InputField
                            placeholder="Email"
                            placeholderTextColor="#666666"
                            secureTextEntry={false}
                            leftImg={require('../assets/email.png')}
                            keyboardType={'email-address'}
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, email: text })} />
                        <InputField
                            placeholder="Password"
                            placeholderTextColor="#666666"
                            isPassword={true}
                            leftImg={require('../assets/pass.png')}
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, password: text })}

                        />
                        <InputField
                            placeholder="Confirm Password"
                            placeholderTextColor="#666666"
                            isPassword={true}
                            leftImg={require('../assets/pass.png')}
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
                        />

    
                    </View>
                    </KeyboardAvoidingView>

                    
                    <View style={{ alignItems: 'center', top: 70 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{
                           backgroundColor: '#28303C', height: 56, width: 299,
                           justifyContent: 'center', borderRadius: 10,
                           shadowColor: 'rgba(212, 210, 212, 1, 0.5)',
                           shadowOpacity: 0.2,
   
                           shadowRadius: 10,
                           shadowOffset: { width: 1, height: 8 },
                        }}>
                            <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 800, fontSize: 16 }}>Signup</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', top: 100 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 ,   shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowOpacity: 0.7,
                        elevation: 6,
                        shadowRadius: 15,
                        shadowOffset: { width: 1, height: 13 },}}>Don’t have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}><Text style={{ fontSize: 14, fontWeight: 800,
                          shadowColor: 'rgba(0, 0, 0, 0.2)',
                          shadowOpacity: 0.7,
                          elevation: 6,
                          shadowRadius: 15,
                          shadowOffset: { width: 1, height: 13 }, }}> Login</Text></TouchableOpacity>
                    </View>
                </View>

            </View>



        </View>
    )
}

export default Signup1