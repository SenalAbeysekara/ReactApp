import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';
import { ActivityIndicator } from 'react-native-paper';

function LoginField(lf_props: any) {

    const stack = lf_props.lf_stack;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <View style={{
                height: 55, backgroundColor: '#fff',
                borderRadius: 20, marginHorizontal: 20,
                justifyContent: 'center', paddingLeft: 20, marginTop: 120
            }}>
                <TextInput placeholder="Email" placeholderTextColor="#aaa" style={{ color: 'black', fontFamily: 'Poppins-Medium' }} onChangeText={(v) => setEmail(v)} />
            </View>

            <View style={{
                height: 55, backgroundColor: '#fff',
                borderRadius: 20, marginHorizontal: 20,
                justifyContent: 'center', paddingLeft: 20, marginTop: 10
            }}>
                <TextInput placeholder="Password" placeholderTextColor="#aaa" style={{ color: 'black', fontFamily: 'Poppins-Medium' }} onChangeText={(v) => setPassword(v)} secureTextEntry={true} />
            </View>
            <SigninButton email={email} password={password} Sb_stack={stack} />
            <BottomSection bs_stack={stack} />
        </View>
    );
}

function SigninButton(sb_props: any) {

    const u_email = sb_props.email;
    const u_password = sb_props.password;
    const [Logging, setLogging] = useState(false);

    function getUser() {
        getDocs(query(collection(db, 'Users'), where('email', '==', u_email.toLowerCase()))).then(ds => {
            setLogging(false);
            if (ds.size == 1) {
                const user = ds.docs[0].data();
                if (user.password == u_password) {
                    sb_props.Sb_stack.navigate('Home');
                } else {
                    Alert.alert('Error', 'Invalid Password');
                }
            } else {
                Alert.alert('Message', 'Invalid Email');
            }
        }).catch(err => {
            setLogging(false);
            Alert.alert('Error', 'Something went wrong');
        });
    }

    function goToHome() {
        setLogging(true);
        getUser();
    }

    return (
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{
                height: 70, flex: 1,
                justifyContent: 'center'
            }}>
                <Text style={{ color: 'white', fontSize: 25, marginLeft: 28, fontFamily: 'Poppins-Medium' }}>Sign In</Text>
            </View>
            <View style={{
                height: 70, flex: 1, justifyContent: 'center',
                alignItems: 'flex-end'
            }}>
                <TouchableOpacity activeOpacity={0.7} onPress={goToHome}>
                    <View style={{
                        width: 45, height: 45, backgroundColor: '#327cf3', marginRight: 30,
                        borderRadius: 100, justifyContent: 'center', alignItems: 'center'
                    }}>
                        {
                            (Logging) ? <ActivityIndicator size={30} color='#fff' />
                                :
                                <Icon size={35} color='#fff' name='arrow-forward' type='ionicon' />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function BottomSection(bs_props: any) {

    const stack = bs_props.bs_stack;

    function gotoSignup() {
        stack.navigate('Signup');
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 145,
                marginHorizontal: 30,
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity activeOpacity={0.7} onPress={gotoSignup}>
                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Poppins-Medium' }}>
                    Sign Up
                </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} >
                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Poppins-Medium' }}>
                    Forgot Password
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const LoginScreen = (ls_props: any) => {

    const stack = ls_props.navigation;

    return (
        <View style={sty.container}>
            <Image
                style={{ width: '100%', height: '100%', position: 'absolute' }}
                source={require('../../assets/img/bg1.png')}
                resizeMode='cover' />

            <Text style={{
                fontSize: 45, color: '#fff', fontWeight: '600',
                marginTop: 90, marginLeft: 20, textAlign: 'center',
                fontFamily: "Lobster-Regular",
            }}>
                {`Welcome To\nPizza Mania`}
            </Text>
            <KeyboardAwareScrollView keyboardShouldPersistTaps='never'>
                <LoginField lf_stack={stack} />
            </KeyboardAwareScrollView>
        </View>
    )
}

export default LoginScreen

const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
})